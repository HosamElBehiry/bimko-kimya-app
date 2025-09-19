"use client";

import { LogoIcon } from "@/components/icons/logo-icon";
import { Link } from "@/i18n/navigation";

export const HeaderLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link
        href="/"
        className="h-16 md:h-18 w-32 sm:w-40 lg:h-22 lg:w-60 mx-auto flex items-center justify-center"
      >
        <LogoIcon className="h-12 md:h-14 lg:h-18" />
      </Link>
    </div>
  );
};
