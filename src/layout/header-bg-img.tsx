"use client";

import Image from "next/image";
import { useShowOnScroll } from "@/hooks/use-show-on-scroll";

export const HeaderBGImg = () => {
  const { isShowOnScroll } = useShowOnScroll(20);
  return (
    <div
      className={`absolute start-1/2 rtl:translate-x-[52%] ltr:-translate-x-1/2 top-1 w-full transition-all duration-200 ${
        isShowOnScroll ? "hidden" : ""
      }`}
    >
      <Image
        src="/imgs/global/header-bg.png"
        alt="header-bg"
        width={1920}
        height={1080}
        className="w-full min-h-20 max-h-20 md:min-h-30 md:max-h-30"
      />
    </div>
  );
};
