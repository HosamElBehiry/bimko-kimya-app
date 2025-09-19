import { ArrowIcon } from "@/components/icons/arrow-icon";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export const HeaderContactUs = async () => {
  const t = await getTranslations("common");
  return (
    <div className="hidden md:flex relative group items-center gap-2 lg:gap-3">
      <span className="text-primary font-bold max-lg:text-sm cursor-pointer">
        {t("Contact Us")}
      </span>
      <ArrowIcon className="size-2.5 lg:size-3 text-primary" />
      <div className="absolute top-full hidden group-hover:flex flex-col gap-2 start-1/2 rtl:translate-x-1/2 ltr:-translate-x-1/2 p-3 w-50 shadow rounded-lg bg-white">
        <Link
          className="hover:font-semibold transition-all duration-100"
          href="/contact-us"
        >
          {t("Contact Us")}
        </Link>
        <Link
          className="hover:font-semibold transition-all duration-100"
          href="/our-distributer"
        >
          {t("Our Distributer")}
        </Link>
      </div>
    </div>
  );
};
