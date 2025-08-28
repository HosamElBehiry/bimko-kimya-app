import { NextIntlClientProvider, hasLocale } from "next-intl";
import NextTopLoader from "nextjs-toploader";
import { notFound } from "next/navigation";
import { Poppins } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Header } from "@/layout/header";
import { Footer } from "@/layout/footer";
import { Metadata } from "next";

import "../globals.css";

const Font = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Poppins", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Bimko Kimya",
  description: "Bimko Kimya description.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body dir={locale === "ar" ? "rtl" : "ltr"} className={Font.className}>
        <NextTopLoader
          color="#8cc543"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={false}
          speed={200}
          zIndex={9999}
        />
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
