import { NextResponse } from 'next/server';
import {
  getAllApplications,
  getApplicationsPage,
} from '@/lib/google-sheets';

export async function GET(request: Request) {
  try {
    const { searchParams } =
      new URL(request.url);

    const search =
      searchParams
        .get('search')
        ?.trim()
        .toLowerCase() || '';

    const status =
      searchParams
        .get('status')
        ?.trim() || '';

    const sort =
      searchParams.get('sort') ||
      'timestamp_desc';

    const pageParam =
      parseInt(
        searchParams.get('page') || '1',
        10
      );

    const limitParam =
      parseInt(
        searchParams.get('limit') || '20',
        10
      );

    // Validate pagination parameters.
    if (
      !Number.isInteger(pageParam) ||
      pageParam < 1
    ) {
      return NextResponse.json(
        {
          success: false,
          error: 'Page must be a positive integer',
        },
        { status: 400 }
      );
    }

    if (
      !Number.isInteger(limitParam) ||
      limitParam < 1 ||
      limitParam > 100
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Limit must be an integer between 1 and 100',
        },
        { status: 400 }
      );
    }

    /**
     * When search/filtering is requested, we currently
     * load the dataset so the search/filter remains
     * globally correct, then paginate the resulting list.
     *
     * For a normal unfiltered request, we use true
     * Google Sheets range pagination.
     */
    if (search || status) {
      let applications =
        await getAllApplications();

      // Filter by search term.
      if (search) {
        applications =
          applications.filter(
            (application) =>
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
                  value
                    .toLowerCase()
                    .includes(search)
                )
          );
      }

      // Filter by status.
      if (status) {
        applications =
          applications.filter(
            (application) =>
              application.status === status
          );
      }

      // Sort by timestamp.
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

      const totalCount =
        applications.length;

      const startIndex =
        (pageParam - 1) * limitParam;

      const paginatedApplications =
        applications.slice(
          startIndex,
          startIndex + limitParam
        );

      return NextResponse.json({
        success: true,
        applications: paginatedApplications,
        count: paginatedApplications.length,
        pagination: {
          page: pageParam,
          limit: limitParam,
          total: totalCount,
          totalPages:
            Math.ceil(
              totalCount / limitParam
            ),
          hasNextPage:
            startIndex + limitParam <
            totalCount,
          hasPreviousPage:
            pageParam > 1,
        },
      });
    }

    /**
     * No search/filter:
     * use true Google Sheets range pagination.
     */
    const result =
      await getApplicationsPage(
        pageParam,
        limitParam
      );

    // Preserve timestamp sorting within the page.
    if (sort === 'timestamp_desc') {
      result.applications.sort(
        (a, b) =>
          new Date(b.timestamp).getTime() -
          new Date(a.timestamp).getTime()
      );
    } else if (sort === 'timestamp_asc') {
      result.applications.sort(
        (a, b) =>
          new Date(a.timestamp).getTime() -
          new Date(b.timestamp).getTime()
      );
    }

    return NextResponse.json({
      success: true,
      applications: result.applications,
      count: result.applications.length,
      pagination: {
        page: result.page,
        limit: result.limit,
        hasNextPage:
          result.hasNextPage,
        hasPreviousPage:
          result.hasPreviousPage,
      },
    });
  } catch (error) {
    console.error(
      'GET /api/applications error:',
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          'Failed to fetch applications',
      },
      {
        status: 500,
      }
    );
  }
}