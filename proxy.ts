import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const adminToken = request.cookies.get("admin_token")?.value;

    if (
      !process.env.ADMIN_SECRET_TOKEN ||
      adminToken !== process.env.ADMIN_SECRET_TOKEN
    ) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
