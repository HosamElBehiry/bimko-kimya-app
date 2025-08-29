import { ArrowIcon } from "@/components/icons/arrow-icon";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export const HeaderAboutUs = async () => {
  const t = await getTranslations("common");
  return (
    <div className="hidden md:flex relative group items-center gap-2 lg:gap-3">
      <span className="text-primary font-bold max-lg:text-sm cursor-pointer">
        {t("About Us")}
      </span>
      <ArrowIcon className="size-2.5 lg:size-3 text-primary" />
      <div className="absolute top-full hidden group-hover:flex flex-col gap-2 start-1/2 -translate-x-1/2 p-3 w-50 shadow rounded-lg bg-white">
        <Link className="hover:text-primary" href="/about-us">
          {t("About Us")}
        </Link>
        <Link className="hover:text-primary" href="/vision-mission">
          {t("Mission & Vision")}
        </Link>
        <Link className="hover:text-primary" href="/our-values">
          {t("Our Values")}
        </Link>
        <Link className="hover:text-primary" href="/human-resource">
          {t("Human Resources")}
        </Link>
        <Link className="hover:text-primary" href="/production">
          {t("Production")}
        </Link>
      </div>
    </div>
  );
};
