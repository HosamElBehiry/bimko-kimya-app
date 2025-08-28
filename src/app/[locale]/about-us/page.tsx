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
            About Us
          </h2>
          <div className="w-full lg:w-5/6 mx-auto flex flex-col gap-3 sm:gap-5 lg:gap-8 bg-white min-h-screen shadow-[0_4px_4px_0_#00000040] rounded-xl px-5 sm:px-7 lg:px-10 py-5 sm:py-8 lg:py-15">
            <p className="text-sm sm:text-base lg:text-lg">
              Bimko Kimya, activities in the agricultural chemicals sector; In
              1990, it was founded under different names and brands, and today
              it started production in its factory in Şanlurfa with its
              innovative and professional staff that is open to developments.
              Today, it continues its activities in its factory in Şanlurfa 2nd
              Organized area, which is built on a closed area of 16.000 m2.
              Bimko Kimya has adopted the principle of adding value to its
              stakeholders, consisting of its customers and suppliers, with its
              understanding of quality production and service. With its
              personnel in the field and production, it continues to work at the
              latest level of technology with its professional and
              industry-experienced staff. 20% of the annual production capacity
              of 200 thousand tons is exported to the Middle East and African
              countries, especially to European countries.
            </p>
            <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
              Always “the best” is our indispensable goal.
            </h3>
            <p className="text-sm sm:text-base lg:text-lg">
              Our main goal is to be the best in quality, service, supply
              sources and dealer relations, and investment options and to
              protect this image we have in public. To achieve this goal, our
              basic principle is to undertake management in the fields of
              operation and to be the market leader.
            </p>
            <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
              Our goal is to create resources for continuous improvement.
            </h3>
            <p className="text-sm sm:text-base lg:text-lg">
              To make the necessary investments to ensure the continuity of the
              service; to promote the unification of small and large savings;
              Our main principles are to help our employees and the economic and
              social development of the society, to create resources from
              activities, and to not sacrifice extravagance by providing
              rational use of all resources. It is our motto to comply with
              superior business ethics and honest working principles. It is our
              principle to act in good faith and understanding and to always
              comply with the laws and moral rules in order to provide mutual
              benefits in all our relations. Fulfilling our responsibilities
              towards todays people and future generations is another basic
              principle that we are pioneers and we cannot give up. for Turkey
              and the world, conscious of our duty to spread this awareness and
              environmental protection.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HumanResourcePage;
