"use client";

import { useShowOnScroll } from "@/hooks/use-show-on-scroll";
import { LogoIcon } from "@/components/icons/logo-icon";
import { Link } from "@/i18n/navigation";

export const HeaderLogo = () => {
  const { isShowOnScroll } = useShowOnScroll(20);
  return (
    <div className="flex md:ms-10 lg:ms-20 items-center justify-center">
      <Link
        href="/"
        className={`h-16 md:h-18 w-32 sm:w-40 lg:h-22 lg:w-60 mx-auto flex items-center justify-center bg-white rounded-2xl relative ${
          isShowOnScroll ? "top-0" : "top-3 md:top-6 shadow"
        }`}
      >
        <LogoIcon className="h-12 md:h-14 lg:h-18" />
      </Link>
    </div>
  );
};
