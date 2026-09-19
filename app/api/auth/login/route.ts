import { NextResponse } from "next/server";
import crypto from "crypto";

function base64url(buffer: Buffer) {
  return buffer
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function GET() {
  const clientId = process.env.AWS_LPU_CLIENT_ID;
  const redirectUri = process.env.AWS_LPU_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return new NextResponse("AWS LPU SSO is not configured", {
      status: 500,
    });
  }

  const state = base64url(crypto.randomBytes(32));
  const nonce = base64url(crypto.randomBytes(32));

  const codeVerifier = base64url(crypto.randomBytes(64));

  const codeChallenge = base64url(
    crypto.createHash("sha256").update(codeVerifier).digest()
  );

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "openid profile email",
    state,
    nonce,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
  });

  const response = NextResponse.redirect(
    `https://sso.awslpu.in/authorize?${params.toString()}`
  );

  response.cookies.set("aws_lpu_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  });

  response.cookies.set("aws_lpu_nonce", nonce, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  });

  response.cookies.set("aws_lpu_code_verifier", codeVerifier, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  });

  return response;
}