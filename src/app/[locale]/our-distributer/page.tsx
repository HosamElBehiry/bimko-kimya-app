import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ContactMap } from "@/components/contact-us/contact-map";
import { SearchIcon } from "@/components/icons/search-icon";

const OurDistriputerPage = async () => {
  const t = await getTranslations("contact");
  return (
    <main className="bg-gradient-to-b from-[#8CC543] to-[#12141D]">
      <div className="relative">
        <div className="absolute top-0 start-0 w-full z-50">
          <div className="w-full aspect-[6/2.2] relative overflow-hidden">
            <Image
              priority
              src="/imgs/global/bg-title-img.webp"
              className="w-screen h-auto object-cover"
              fill
              alt="BG Img!"
            />
          </div>
        </div>
        <div className="flex container max-md:px-5 mx-auto flex-col gap-7 md:gap-10 relative z-100 py-8 sm:py-10 md:py-15 lg:py-30">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white text-center font-semibold">
            {t("Our Distributer")}
          </h2>
          <div className="w-full sm:w-5/6 mx-auto flex flex-col gap-5 lg:gap-8 bg-white min-h-screen shadow-[0_4px_4px_0_#00000040] rounded-xl px-5 sm:px-7 lg:px-10 py-5 sm:py-8 lg:py-15">
            <div className="flex flex-col gap-3 lg:gap-10">
              <h4 className="text-base sm:text-xl text-center lg:text-3xl font-semibold text-secondary">
                {t("Our Distributer")}
              </h4>
              <div className="bg-primary h-10 sm:h-11 md:h-14 px-4 rounded-xl flex items-center justify-between">
                <input
                  type="text"
                  placeholder={t("Find global address")}
                  className="flex-1 placeholder:text-black/50 text-sm sm:text-base md:text-lg text-black/50 font-bold placeholder:font-bold placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg outline-none"
                />
                <SearchIcon className="size-4 sm:size-5 md:size-6" />
              </div>
              <ContactMap />
              {/* <ContactBranches /> */}
            </div>
            {/* <ContactInformations /> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurDistriputerPage;
