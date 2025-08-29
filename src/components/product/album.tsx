"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { ArrowIcon } from "../icons/arrow-icon";
import { Swiper, SwiperSlide } from "swiper/react";

export const Album = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  return (
    <div className="col-span-full lg:col-span-6 max-sm:order-1">
      <h1 className="text-primary sm:hidden font-semibold text-xl mb-4 text-center">
        Green Amino Forte
      </h1>
      <div className="w-full aspect-video mb-5 lg:mb-6 relative overflow-hidden">
        <Image
          src="/imgs/global/dummy-img.webp"
          fill
          alt="Album"
          className="object-cover size-full rounded-xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="relative flex items-center gap-2">
        <button onClick={() => swiper?.slidePrev()} className="cursor-pointer">
          <ArrowIcon className="size-3 rotate-90" />
        </button>
        <Swiper
          onInit={(e) => setSwiper(e)}
          slidesPerView="auto"
          spaceBetween={8}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((info) => (
            <SwiperSlide
              key={info}
              className="min-w-20 max-w-20 lg:min-w-25 lg:max-w-25"
            >
              <div className="w-full aspect-square relative overflow-hidden">
                <Image
                  src="/imgs/global/dummy-img.webp"
                  fill
                  alt="Album"
                  className="object-cover size-full rounded-xl"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={() => swiper?.slideNext()} className="cursor-pointer">
          <ArrowIcon className="size-3 -rotate-90" />
        </button>
      </div>
    </div>
  );
};
