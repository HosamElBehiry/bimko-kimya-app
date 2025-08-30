import { useLocale } from "next-intl";
import Image from "next/image";

export const HomeBanner = () => {
  const locale = useLocale();
  return (
    <section className="relative aspect-square sm:aspect-[6/2.5] overflow-hidden">
      <Image
        alt="Banner Img"
        fill
        src="/imgs/home/swiper.jpg"
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-0 start-0 w-full h-full z-60 flex items-center justify-center bg-black/30">
        <h3 className="text-2xl md:text-4xl lg:text-6xl text-white max-w-3xl flex flex-col items-center justify-center gap-2 sm:gap-4 md:gap-6">
          {locale === "en" ? (
            <>
              <span className="uppercase font-bold">Effictive way to</span>
              <span className="uppercase font-bold">improve crop</span>
              <span className="uppercase font-bold">productivity</span>
            </>
          ) : (
            <span className="uppercase font-bold text-center">
              لحل الأمثل لتعزيز إنتاجية محاصيلك
            </span>
          )}
        </h3>
      </div>
    </section>
  );
};
