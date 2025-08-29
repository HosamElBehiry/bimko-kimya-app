import { Link } from "@/i18n/navigation";
import Image from "next/image";

export const ProductCard = () => {
  return (
    <div className="p-2 sm:p-3 lg:p-5 flex flex-col gap-3 lg:gap-5 border border-slate-200 rounded-lg">
      <span className="bg-primary w-fit text-xs sm:text-sm max-lg:text-[13px] px-3 lg:px-5 py-0.5 rounded-full text-white">
        Fertilizer Type
      </span>
      <div className="w-full aspect-[1/1.05] relative overflow-hidden">
        <Image
          fill
          src="/imgs/global/dummy-img.webp"
          className="object-cover size-full rounded-xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Image"
        />
      </div>
      <Link
        href="/product"
        className="text-primary font-semibold mx-auto underline max-sm:text-xs max-lg:text-sm hover:no-underline"
      >
        Read more
      </Link>
    </div>
  );
};
