"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { GlobalIcon } from "@/components/icons/global-icon";
import { useLocale } from "next-intl";

export const LocaleSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const switchLocale = () => {
    router.replace(pathname, { locale: locale === "en" ? "ar" : "en" });
  };
  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-2 cursor-pointer"
    >
      <GlobalIcon className="size-5 md:size-3 lg:size-4 text-primary" />
      <span className="text-primary font-bold text-sm max-md:hidden">
        {locale === "ar" ? "English" : "Arabic"}
      </span>
    </button>
  );
};
