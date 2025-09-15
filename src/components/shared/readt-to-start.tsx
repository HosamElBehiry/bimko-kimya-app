import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export const ReadyToStart = () => {
  const t = useTranslations("common");
  return (
    <div className="min-w-11/12 invisible max-w-11/12 sm:min-w-xl sm:max-w-xl md:min-w-2xl md:max-w-2xl lg:min-w-3xl lg:max-w-3xl bg-primary mx-auto flex flex-col items-center rounded-xl justify-center gap-5 py-5 md:py-10 lg:py-20 relative top-8 sm:top-12.5 lg:top-25">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold">
        {t("Ready to Get Started?")}
      </p>
      <p className="text-white font-medium text-xs sm:text-sm md:text-base lg:text-lg max-w-11/12 sm:max-w-lg md:max-w-xl text-center">
        {t("Description2")}
      </p>
      <Link
        href="/contact-us"
        className="h-8 flex items-center justify-center sm:h-9 max-sm:text-xs lg:h-10 max-lg:text-[15px] px-5 md:px-7 lg:px-10 bg-gradient-to-b from-[#12141D] to-primary rounded-full text-white cursor-pointer"
      >
        {t("Contact Us")}
      </Link>
    </div>
  );
};
