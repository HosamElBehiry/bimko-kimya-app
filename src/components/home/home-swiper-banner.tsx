"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "../shared/product-card";

export const HomeSwiperBanner = () => {
  const t = useTranslations("home");
  return (
    <div className="relative pt-10 lg:pt-30">
      <div className="w-full max-[360px]:min-h-[450px] aspect-square sm:aspect-[6/4] relative overflow-hidden">
        <Image
          loading="lazy"
          src="/imgs/home/Union.webp"
          className="size-full max-sm:object-cover"
          fill
          alt="Image"
        />
      </div>
      <div className="absolute pt-15 sm:pt-30 lg:pt-60 container mx-auto px-5 lg:px-10 flex flex-col gap-4 sm:gap-8 lg:gap-10 top-1/2 start-1/2 rtl:translate-x-1/2 ltr:-translate-x-1/2 -translate-y-1/2">
        <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center text-[#0D3C00]">
          {t("Where quality meets innovation")}
        </h3>
        <div className="w-full">
          <Swiper
            slidesPerView={"auto"}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { spaceBetween: 40, slidesPerView: 3 },
            }}
            spaceBetween={10}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((info) => (
              <SwiperSlide
                className="max-sm:min-w-40 max-sm:max-w-40"
                key={info}
              >
                <ProductCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
