// lib/google-sheets.ts

import { GoogleAuth } from 'google-auth-library';
import { google, sheets_v4 } from 'googleapis';
import { Application } from './types';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

async function getSheetsClient(): Promise<sheets_v4.Sheets> {
  const auth = new GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: SCOPES,
  });

  return google.sheets({ version: 'v4', auth });
}

export async function getAllApplications(): Promise<Application[]> {
  const sheets = await getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEET_NAME || 'Sheet1';

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!A:Z`,
  });

  const rows = response.data.values || [];
  if (rows.length < 2) return [];

  const [header, ...dataRows] = rows;

  return dataRows.map((row, index) => parseRow(header, row, index + 2));
}

function parseRow(header: string[], row: any[], sheetRowNumber: number): Application {
  const get = (columnName: string): string => {
    const colIndex = header.findIndex(
      (h) => h?.toString().trim().toLowerCase() === columnName.toLowerCase()
    );
    return colIndex >= 0 ? (row[colIndex]?.toString() ?? '') : '';
  };

  const rawRoleAnswers =
    get('Role Answers (JSON)') ||
    get('Role Answers') ||
    '{}';

  let roleAnswers: Record<string, string> = {};
  try {
    roleAnswers = JSON.parse(rawRoleAnswers);
  } catch {
    roleAnswers = {};
  }

  return {
    applicationId: get('Application ID'),
    timestamp: get('Timestamp'),
    status: (get('Status') || 'Pending') as Application['status'],
    fullName: get('Full Name'),
    registrationNumber: get('Registration No.') || get('Registration Number'),
    universityEmail: get('University Email'),
    personalEmail: get('Personal Email'),
    phone: get('Phone'),
    program: get('Program'),
    branch: get('Branch'),
    semester: get('Semester'),
    cgpa: get('CGPA'),
    linkedin: get('LinkedIn'),
    github: get('GitHub'),
    portfolio: get('Portfolio'),
    preferredRole: get('Preferred Role'),
    resumeUrl: get('Resume URL') || get('Resume'),
    resumeFileId: get('Resume File ID'),
    roleAnswers,
    ipAddress: get('IP Address'),
    communities: get('Communities'),
    achievement: get('Achievement'),
    whyJoin: get('Why Join'),
    rowIndex: sheetRowNumber,
  };
}
/**
 * Updates the Status cell for a given sheet row.
 * @param rowIndex - 1-based row number in the sheet (header is row 1)
 * @param newStatus - The new status value to write
 */
export async function updateApplicationStatus(
  rowIndex: number,
  newStatus: string
): Promise<void> {
  const sheets = await getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEET_NAME || 'Sheet1';

  // Find the "Status" column by reading the header row
  const headerResponse = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!1:1`,
  });
  const header = headerResponse.data.values?.[0] || [];
  const statusColIndex = header.findIndex(
    (h) => h?.toString().trim().toLowerCase() === 'status'
  );

  if (statusColIndex < 0) {
    throw new Error('Status column not found in sheet header');
  }

  const columnLetter = columnIndexToLetter(statusColIndex);
  const range = `${sheetName}!${columnLetter}${rowIndex}`;

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [[newStatus]] },
  });
}

/**
 * Converts a 0-based column index to its A1 notation letter.
 * 0 -> A, 25 -> Z, 26 -> AA, 27 -> AB, ...
 */
function columnIndexToLetter(index: number): string {
  let letter = '';
  let i = index;
  while (i >= 0) {
    letter = String.fromCharCode((i % 26) + 65) + letter;
    i = Math.floor(i / 26) - 1;
  }
  return letter;
}