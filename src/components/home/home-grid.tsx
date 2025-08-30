import Image from "next/image";
import { useLocale } from "next-intl";
import { GridData } from "@/constants/home";

export const HomeGrid = () => {
  const locale = useLocale();
  return (
    <div className="container px-5 lg:px-10 mx-auto grid grid-cols-12 gap-x-0 lg:gap-x-10 gap-y-5 sm:gap-y-7 lg:gap-y-15">
      {GridData.map((info) => (
        <div
          key={info.title_en}
          className="col-span-full lg:col-span-6 sm:h-fit bg-white shadow-[0_0_10px_0_#8CC5434D] rounded-2xl w-full flex items-center justify-center"
        >
          <div className="px-3 sm:px-5 lg:px-6 flex-1 flex flex-col gap-1 sm:gap-2.5 lg:gap-3">
            <h2 className="text-primary font-medium sm:font-bold text-sm max-[400px]:text-lg sm:text-xl lg:text-2xl">
              {locale === "en" ? info?.title_en : info?.title_ar}
            </h2>
            <p className="text-xs sm:text-sm lg:text-lg line-clamp-4">
              {locale === "en" ? info?.description_en : info?.description_ar}
            </p>
          </div>
          <div className="min-w-25 max-w-25 max-sm:min-h-25 max-sm:max-h-25 sm:min-w-50 lg:min-w-60 sm:aspect-square relative overflow-hidden">
            <Image
              alt="Product Img"
              fill
              src="/imgs/global/dummy-img.webp"
              className="object-cover size-full rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      ))}
      <div className="w-full col-span-full lg:col-span-6 rounded-2xl aspect-[6/2.2] lg:aspect-video relative overflow-hidden shadow-[0_0_10px_0_#8CC5434D]">
        <Image
          loading="lazy"
          src="/imgs/global/dummy-img.webp"
          className="object-cover size-full rounded-2xl"
          fill
          alt="Image"
        />
      </div>
    </div>
  );
};
