import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const userData = await req.json();
  const sessionData = JSON.stringify({ userData });
  (await cookies()).set("session", sessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
  });

  return NextResponse.json({ ok: true });
}
