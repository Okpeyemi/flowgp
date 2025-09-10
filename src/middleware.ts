import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Redirect www → apex
  if (url.hostname === "www.flowgp.fr") {
    url.hostname = "flowgp.fr";
    return NextResponse.redirect(url, 308); // permanent
  }

  return NextResponse.next();
}

export const config = {
  // Run on all routes except Next.js assets
  matcher: ["/((?!_next/static|_next/image|favicon.ico|site.webmanifest).*)"],
};