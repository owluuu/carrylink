import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const error = requestUrl.searchParams.get("error");

  if (error) {
    const errorDescription =
      requestUrl.searchParams.get("error_description");

    return NextResponse.json(
      {
        error,
        errorDescription,
      },
      { status: 400 }
    );
  }

  if (!code) {
    return NextResponse.json(
      { error: "Authorization code is missing" },
      { status: 400 }
    );
  }

  const clientId = process.env.COGNITO_CLIENT_ID;
  const issuer = process.env.COGNITO_ISSUER;
  const redirectUri = process.env.COGNITO_REDIRECT_URI;

  if (!clientId || !issuer || !redirectUri) {
    return NextResponse.json(
      { error: "Cognito environment variables are not configured" },
      { status: 500 }
    );
  }

  const tokenUrl = `${issuer}/oauth2/token`;

  const tokenResponse = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: clientId,
      code,
      redirect_uri: redirectUri,
    }),
  });

  const tokens = await tokenResponse.json();

  if (!tokenResponse.ok) {
    console.error("Cognito token error:", tokens);

    return NextResponse.json(
      {
        error: "Failed to exchange authorization code",
        details: tokens,
      },
      { status: 400 }
    );
  }

  const response = NextResponse.redirect(
    new URL("/", request.url)
  );

  response.cookies.set("id_token", tokens.id_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: tokens.expires_in,
  });

  response.cookies.set("access_token", tokens.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: tokens.expires_in,
  });

  return response;
}