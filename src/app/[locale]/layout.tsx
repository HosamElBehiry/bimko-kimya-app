import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Open_Sans, Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/layout/header";
import { Footer } from "@/layout/footer";
import localFont from "next/font/local";
import { Metadata } from "next";
import "swiper/css";
import "../globals.css";

const enFont = Open_Sans({
  variable: "--font-open-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Open_Sans", "sans-serif"],
  adjustFontFallback: true,
});

const trFont = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Poppins", "sans-serif"],
  adjustFontFallback: true,
});

const arFont = localFont({
  src: [
    {
      path: "../../../public/fonts/jazeera/al-jazeera-arabic-d05551b080 (2)/ArbFonts.com-(10)/ArbFONTS-4_F0.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/jazeera/al-jazeera-arabic-d05551b080 (2)/ArbFonts.com-(10)/ArbFONTS-4_F1.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/jazeera/al-jazeera-arabic-d05551b080 (2)/ArbFonts.com-(10)/ArbFONTS-4_F2.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/jazeera/al-jazeera-arabic-d05551b080 (2)/ArbFonts.com-(10)/ArbFONTS-Al-Jazeera-Arabic-Bold-1.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/jazeera/al-jazeera-arabic-d05551b080 (2)/ArbFonts.com-(10)/ArbFONTS-Al-Jazeera-Arabic-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/jazeera/al-jazeera-arabic-d05551b080 (2)/ArbFonts.com-(10)/ArbFONTS-Al-Jazeera-Arabic-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/jazeera/al-jazeera-arabic-d05551b080 (2)/ArbFonts.com-(10)/ArbFONTS-Al-Jazeera-Arabic-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-myfont", // optional for Tailwind or CSS variables
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
      <body
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={
          locale === "en"
            ? enFont.className
            : locale === "tr"
            ? trFont.className
            : arFont.className
        }
      >
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
          <FloatingWhatsApp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
