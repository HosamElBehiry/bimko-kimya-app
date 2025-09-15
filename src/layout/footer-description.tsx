import { InstagramIcon } from "@/components/icons/instagram-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { TwitterIcon } from "@/components/icons/twitter-icon";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export const FooterDescription = async () => {
  const t = await getTranslations("common");
  return (
    <div className="flex flex-col max-sm:justify-center max-sm:items-center gap-3.5 max-lg:col-span-full lg:gap-5 lg:max-w-80">
      <p className="text-base sm:text-lg lg:text-xl text-white font-bold">
        Bimko Kimya
      </p>
      <p className="text-white text-xs max-sm:text-center sm:text-sm lg:text-base">
        {t("Description")}
      </p>
      <div className="flex items-center gap-2 sm:gap-3">
        <TwitterIcon className="max-lg:size-7" />
        <FacebookIcon className="text-primary max-lg:size-7" />
        <InstagramIcon className="max-lg:size-7" />
        <LinkedInIcon className="max-lg:size-7" />
        <Link
          href="#"
          className="size-9 bg-[#4B4B4B] rounded-full flex items-center justify-center cursor-pointer"
        >
          <WhatsAppIcon className="size-4.5 text-white" />
        </Link>
      </div>
    </div>
  );
};
