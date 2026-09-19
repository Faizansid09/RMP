import { NextResponse } from 'next/server';
import { getAllApplications } from '@/lib/google-sheets';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const search =
      searchParams.get('search')?.trim().toLowerCase() || '';
    const status = searchParams.get('status')?.trim() || '';
    const sort =
      searchParams.get('sort') || 'timestamp_desc';

    let applications = await getAllApplications();

    // Filter by search term
    if (search) {
      applications = applications.filter((application) =>
        [
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
          .some((value) =>
            value.toLowerCase().includes(search)
          )
      );
    }

    // Filter by status
    if (status) {
      applications = applications.filter(
        (application) => application.status === status
      );
    }

    // Sort by timestamp
    if (sort === 'timestamp_desc') {
      applications.sort(
        (a, b) =>
          new Date(b.timestamp).getTime() -
          new Date(a.timestamp).getTime()
      );
    } else if (sort === 'timestamp_asc') {
      applications.sort(
        (a, b) =>
          new Date(a.timestamp).getTime() -
          new Date(b.timestamp).getTime()
      );
    }

    return NextResponse.json({
      success: true,
      applications,
      count: applications.length,
    });
  } catch (error) {
    console.error(
      'GET /api/applications error:',
      error
    );

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch applications',
      },
      {
        status: 500,
      }
    );
  }
}