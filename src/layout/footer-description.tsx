import { InstagramIcon } from "@/components/icons/instagram-icon";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { TwitterIcon } from "@/components/icons/twitter-icon";
import { getTranslations } from "next-intl/server";

export const FooterDescription = async () => {
  const t = await getTranslations("common");
  return (
    <div className="flex flex-col max-sm:justify-center max-sm:items-center gap-3.5 max-lg:col-span-full lg:gap-5 lg:max-w-80">
      <p className="text-base sm:text-lg lg:text-xl text-white font-bold">
        Bimko Kimya
      </p>
      <p className="text-[#B9B3B3] text-xs max-sm:text-center sm:text-sm lg:text-base">
        {t("Description")}
      </p>
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
        <TwitterIcon className="max-lg:size-7" />
        <FacebookIcon className="text-primary max-lg:size-7" />
        <InstagramIcon className="max-lg:size-7" />
        <LinkedInIcon className="max-lg:size-7" />
      </div>
    </div>
  );
};
