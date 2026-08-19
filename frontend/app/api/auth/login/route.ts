import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.COGNITO_CLIENT_ID;
  const issuer = process.env.COGNITO_ISSUER;
  const redirectUri = process.env.COGNITO_REDIRECT_URI;

  if (!clientId || !issuer || !redirectUri) {
    return NextResponse.json(
      { error: "Cognito environment variables are not configured" },
      { status: 500 }
    );
  }

  const loginUrl = new URL(`${issuer}/oauth2/authorize`);

  loginUrl.searchParams.set("client_id", clientId);
  loginUrl.searchParams.set("response_type", "code");
  loginUrl.searchParams.set("scope", "openid email phone");
  loginUrl.searchParams.set("redirect_uri", redirectUri);

  return NextResponse.redirect(loginUrl);
}