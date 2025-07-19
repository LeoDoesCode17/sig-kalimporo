import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// lis of protected routes
const protectedRoutes = ["/admin"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));
  if (isProtectedRoute) return NextResponse.next();
  
  // check for session token
  const token = request.cookies.get("__session")?.value;

  // if no token and trying to access protected route, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // apply middleware to all admin routes (prefix /admin)
};