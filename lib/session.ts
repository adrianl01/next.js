import { cookies } from "next/headers";

export async function getSession() {
  const cookie = await cookies();
  const sessionCookie = cookie.get("session");
  if (!sessionCookie) return null;

  try {
    return JSON.parse(sessionCookie.value);
  } catch {
    return null;
  }
}
