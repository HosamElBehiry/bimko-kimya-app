import { getTranslations } from "next-intl/server";
import Image from "next/image";

const HumanResourcePage = async () => {
  const t = await getTranslations("about-us");
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
            {t("About Us")}
          </h2>
          <div className="w-full lg:w-5/6 mx-auto flex flex-col gap-3 sm:gap-5 lg:gap-8 bg-white min-h-screen shadow-[0_4px_4px_0_#00000040] rounded-xl px-5 sm:px-7 lg:px-10 py-5 sm:py-8 lg:py-15">
            <p className="text-sm sm:text-base lg:text-lg">
              {t("Description1")}
            </p>
            <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
              {t("Title1")}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg">
              {t("Description2")}
            </p>
            <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
              {t("Title2")}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg">
              {t("Description3")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HumanResourcePage;
