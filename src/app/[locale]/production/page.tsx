import Image from "next/image";

const ProductionPage = () => {
  return (
    <main className="bg-gradient-to-b from-[#8CC543] to-[#12141D]">
      <div className="relative">
        <div className="absolute top-0 start-0 w-full z-50">
          <div className="w-full aspect-[6/2.2] relative overflow-hidden">
            <Image
              priority
              src="/imgs/global/bg-title-img.webp"
              className="w-screen h-auto object-cover"
              fill
              alt="BG Img!"
            />
          </div>
        </div>
        <div className="flex container max-md:px-5 mx-auto flex-col gap-7 md:gap-10 relative z-100 py-8 sm:py-10 md:py-15 lg:py-30">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white text-center font-semibold">
            Production
          </h2>
          <div className="lg:w-5/6 mx-auto flex flex-col gap-5 lg:gap-8 bg-white min-h-screen shadow-[0_4px_4px_0_#00000040] rounded-xl px-5 sm:px-7 lg:px-10 py-5 sm:py-8 lg:py-15">
            <p className="lg:text-xl md:text-lg sm:text-base text-sm">
              Bimko Kimyaaims to maintain the highest level of customer
              satisfaction by offering high-quality chemical products. Using
              modern technologies in our production facilities and supported by
              research and development activities, we respond quickly and
              effectively to our customers needs. Our goal is to provide our
              customers with customized solutions that meet their needs.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductionPage;
