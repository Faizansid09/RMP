import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getAllApplications } from "@/lib/google-sheets";

export async function GET() {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        error: "Unauthorized",
      },
      { status: 401 }
    );
  }

  if (user.role !== "admin" && user.role !== "core") {
    return NextResponse.json(
      {
        success: false,
        error: "Forbidden",
      },
      { status: 403 }
    );
  }

  try {
    const applications = await getAllApplications();

    return NextResponse.json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch applications",
      },
      { status: 500 }
    );
  }
}