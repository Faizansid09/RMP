import { NextResponse } from 'next/server';
import { getAllApplications } from '@/lib/google-sheets'; // Make sure this matches your lib file!

export async function GET(request: Request) {
  try {
    // This route gets ALL applications. No 'id' or 'params' needed here!
    const applications = await getAllApplications(); 

    return NextResponse.json({ success: true, data: applications });
  } catch (error) {
    console.error('[GET /api/applications] Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch applications',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}