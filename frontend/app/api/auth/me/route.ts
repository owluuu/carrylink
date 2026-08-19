import { NextResponse } from "next/server";
import { cookies } from "next/headers";

function decodeIdToken(idToken: string) {
  const payload = idToken.split(".")[1];
  const json = Buffer.from(payload, "base64").toString("utf-8");
  return JSON.parse(json);
}

export async function GET() {
  const cookieStore = await cookies();
  const idToken = cookieStore.get("id_token")?.value;

  if (!idToken) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const claims = decodeIdToken(idToken);

  return NextResponse.json({
    user: {
      userId: claims.sub,
      username: claims["cognito:username"] ?? claims.email ?? claims.sub,
    },
  });
}
