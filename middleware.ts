import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "id"],

  // Used when no locale matches
  defaultLocale: "en",
});

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Avoid redirect loop by allowing the `/coming-soon` path
  if (pathname !== "/en/coming-soon" && !pathname.startsWith("/api")) {
    return NextResponse.redirect(new URL("/en/coming-soon", request.url));
  }

  // Allow locale handling on `/coming-soon` page and other paths
  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(id|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
