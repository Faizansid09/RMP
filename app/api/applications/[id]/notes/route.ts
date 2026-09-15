// app/api/applications/[id]/notes/route.ts

import { NextResponse } from 'next/server';
import {
  getAllApplications,
  getNotesForApplication,
  addNote,
} from '@/lib/google-sheets';

/**
 * GET /api/applications/[id]/notes
 * Returns all notes for the given application.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Verify the application exists
    const applications = await getAllApplications();
    const application = applications.find((app) => app.applicationId === id);
    if (!application) {
      return NextResponse.json(
        { success: false, error: 'Application not found' },
        { status: 404 }
      );
    }

    const notes = await getNotesForApplication(id);

    return NextResponse.json({
      success: true,
      count: notes.length,
      data: notes,
    });
  } catch (error) {
    console.error('[GET /api/applications/[id]/notes] Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch notes',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/applications/[id]/notes
 * Body: { author: string, note: string }
 * Appends a new note to the Notes sheet.
 */
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { author, note } = body;

    if (!note || typeof note !== 'string' || note.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Note text is required' },
        { status: 400 }
      );
    }

    if (!author || typeof author !== 'string' || author.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Author is required' },
        { status: 400 }
      );
    }

    // Verify the application exists
    const applications = await getAllApplications();
    const application = applications.find((app) => app.applicationId === id);
    if (!application) {
      return NextResponse.json(
        { success: false, error: 'Application not found' },
        { status: 404 }
      );
    }

    const created = await addNote(id, author.trim(), note.trim());

    return NextResponse.json(
      {
        success: true,
        message: 'Note added',
        data: created,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[POST /api/applications/[id]/notes] Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to add note',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}