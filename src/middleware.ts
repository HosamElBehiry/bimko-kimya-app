import { routing } from "@/i18n/routing";
import { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

const intlMiddleware = createIntlMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const intlResponse = intlMiddleware(req);

  return intlResponse;
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*", "/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
