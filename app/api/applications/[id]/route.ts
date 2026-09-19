import { NextResponse } from 'next/server';
import { getApplicationById } from '@/lib/google-sheets';

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: 'Application ID is required',
        },
        {
          status: 400,
        }
      );
    }

    const application = await getApplicationById(id);

    if (!application) {
      return NextResponse.json(
        {
          success: false,
          error: 'Application not found',
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      application,
    });
  } catch (error) {
    console.error(
      'GET /api/applications/[id] error:',
      error
    );

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch application',
      },
      {
        status: 500,
      }
    );
  }
}