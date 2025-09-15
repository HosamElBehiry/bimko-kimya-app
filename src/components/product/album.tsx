import Image from "next/image";

export const Album = () => {
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
    </div>
  );
};
