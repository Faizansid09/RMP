// app/api/applications/route.ts

import { NextResponse } from 'next/server';
import { getAllApplications } from '@/lib/google-sheets';

export async function GET() {
  try {
    const applications = await getAllApplications();
    return NextResponse.json({
      success: true,
      count: applications.length,
      data: applications,
    });
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