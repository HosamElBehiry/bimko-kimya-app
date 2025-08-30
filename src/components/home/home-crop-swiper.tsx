"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Swiper as SwiperType } from "swiper";
import { ArrowIcon } from "../icons/arrow-icon";
import { Swiper, SwiperSlide } from "swiper/react";

export const HomeCropSwiper = () => {
  const t = useTranslations("home");
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <div className="relative -top-12 sm:-top-10 md:-top-12 shadow-[0_0_30px_0_#93BE304D] lg:-top-25 z-100 lg:pb-10 pb-5 pt-8 md:py-7 lg:pt-13 bg-white rounded-2xl">
        <span className="absolute rounded-full -top-4 md:-top-6 w-40 sm:w-50 lg:w-60 font-semibold start-1/2 flex items-center justify-center rtl:translate-x-1/2 ltr:-translate-x-1/2 text-white bg-primary px-5 lg:px-10 min-h-8 md:min-h-9 lg:min-h-11 max-h-8 md:max-h-9 lg:max-h-11 text-xs sm:text-sm md:text-base lg:text-lg">
          {t("Crop")}
        </span>
        <div className="flex px-3 sm:px-5 items-center gap-3 sm:gap-5 lg:gap-7">
          <button
            onClick={() => swiper?.slidePrev()}
            className="cursor-pointer"
          >
            <ArrowIcon className="size-3.5 sm:size-4 md:size-5 text-primary rtl:-rotate-90 ltr:rotate-90" />
          </button>
          <Swiper
            onInit={(e) => setSwiper(e)}
            slidesPerView="auto"
            spaceBetween={12}
            breakpoints={{ 1024: { spaceBetween: 25 } }}
          >
            {[...Array(15).keys()].map((info) => (
              <SwiperSlide
                key={info}
                className="min-w-20 sm:min-w-30 md:min-w-34 lg:min-w-37 max-w-20 sm:max-w-30 md:max-w-34 lg:max-w-37 "
              >
                <div className="aspect-[1/0.7] w-full rounded-xl overflow-hidden relative">
                  <Image
                    src="/imgs/global/dummy-img.webp"
                    alt="Dummy Img"
                    fill
                    className="object-cover size-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => swiper?.slideNext()}
            className="cursor-pointer"
          >
            <ArrowIcon className="size-3.5 sm:size-4 md:size-5 text-primary rtl:rotate-90 ltr:-rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
};
