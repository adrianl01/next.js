import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  if (request.cookies.get("session")) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/admin"],
};
