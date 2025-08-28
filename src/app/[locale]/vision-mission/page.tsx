import Image from "next/image";

const HumanResourcePage = () => {
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
            Vission & Mission
          </h2>
          <div className="w-full lg:w-5/6 mx-auto flex flex-col gap-3 sm:gap-5 lg:gap-8 bg-white min-h-screen shadow-[0_4px_4px_0_#00000040] rounded-xl px-5 sm:px-7 lg:px-10 py-5 sm:py-8 lg:py-15">
            <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
              OUR MISSION.
            </h3>
            <p className="text-sm sm:text-base lg:text-lg">
              Our mission is to achieve long-term, sustainable growth and create
              value continuously. This is more than just improving operations or
              cutting costs. Using the leverage factor of company resources in
              harmony with the environment includes factors such as showing
              higher performance, providing more valuable products and services
              for our customers, providing more prosperity for our employees and
              higher returns for our shareholders.
            </p>
            <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
              OUR VISION
            </h3>
            <p className="text-sm sm:text-base lg:text-lg">
              To serve the world trade and production in the most honest and
              perfect way.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HumanResourcePage;
