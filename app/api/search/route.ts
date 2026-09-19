import { NextResponse } from 'next/server';
import { getAllApplications } from '@/lib/google-sheets';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q')?.trim().toLowerCase() || '';

    if (!query) {
      return NextResponse.json(
        {
          success: false,
          error: 'Search query is required',
        },
        {
          status: 400,
        }
      );
    }

    const applications = await getAllApplications();

    const results = applications.filter((application) => {
      const searchableText = [
        application.applicationId,
        application.fullName,
        application.registrationNumber,
        application.universityEmail,
        application.personalEmail,
        application.phone,
        application.program,
        application.branch,
        application.status,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return searchableText.includes(query);
    });

    return NextResponse.json({
      success: true,
      count: results.length,
      applications: results,
    });
  } catch (error) {
    console.error('GET /api/search error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to search applications',
      },
      {
        status: 500,
      }
    );
  }
}