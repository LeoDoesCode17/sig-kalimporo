import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("__session")?.value;

  const isProtectedRoute = pathname.startsWith("/admin");

  if (isProtectedRoute && !token) {
    console.log("⛔ No session token, redirecting to /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow through if:
  // - route is not protected
  // - or protected route with valid token
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // apply middleware to all /admin routes
};
