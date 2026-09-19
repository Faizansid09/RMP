import { cookies } from "next/headers";

const SSO_USERINFO_URL =
  "https://sso.awslpu.in/oauth/userinfo";

export type AuthUser = {
  sub: string;
  name?: string;
  email?: string;
  picture?: string;
  role?: string;
};

export async function getCurrentUser(): Promise<AuthUser | null> {
  const cookieStore = await cookies();

  const accessToken =
    cookieStore.get("aws_lpu_access_token")?.value;

  if (!accessToken) {
    return null;
  }

  try {
    const response = await fetch(
      SSO_USERINFO_URL,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch {
    return null;
  }
}

export async function getCurrentUserRole(): Promise<string | null> {
  const user = await getCurrentUser();

  return user?.role ?? null;
}

export async function isAuthenticated(): Promise<boolean> {
  return (await getCurrentUser()) !== null;
}
