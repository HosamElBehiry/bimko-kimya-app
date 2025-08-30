import { HomeGrid } from "@/components/home/home-grid";
import { WhatWeDo } from "@/components/home/what-we-do";
import { HomeBanner } from "@/components/home/home-banner";
import { ReadyToStart } from "@/components/shared/readt-to-start";
import { HomeCropSwiper } from "@/components/home/home-crop-swiper";
import { HomeSwiperBanner } from "@/components/home/home-swiper-banner";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <section className="flex flex-col">
        <HomeCropSwiper />
        <HomeGrid />
        <HomeSwiperBanner />
        <WhatWeDo />
      </section>
      <ReadyToStart />
    </main>
  );
}
