import Image from "next/image";
import { OurGoals } from "@/constants/home";
import { useLocale, useTranslations } from "next-intl";

export const WhatWeDo = () => {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <section className="container px-5 lg:px-10 mx-auto pt-10 flex flex-col gap-5 sm:gap-10">
      <div className="flex flex-col items-center justify-center gap-3">
        <h6 className="text-xs sm:text-sm text-primary font-semibold">
          {t("What We Do")}
        </h6>
        <h2 className="text-xl sm:text-4xl font-medium">
          {t("Our Objectives")}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
        {OurGoals.map((info, index) => (
          <div
            key={info.title_en}
            className="flex max-sm:flex-col gap-3 sm:gap-7 items-center justify-center sm:justify-between"
          >
            <div className="min-w-20 sm:min-w-20 sm:self-start max-w-20 sm:max-w-20 aspect-square overflow-hidden relative">
              <Image
                src={`/imgs/home/icon-${index + 1}.png`}
                loading="lazy"
                className="size-full"
                fill
                alt="Icon"
              />
            </div>
            <div className="flex flex-col max-sm:items-center max-sm:justify-center max-sm:text-center gap-1 sm:gap-2">
              <h2 className="text-base sm:text-2xl font-medium">
                {locale === "en" ? info?.title_en : info?.title_ar}
              </h2>
              <p className="text-zinc-600 text-xs sm:text-sm">
                {locale === "en" ? info?.description_en : info?.description_ar}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
