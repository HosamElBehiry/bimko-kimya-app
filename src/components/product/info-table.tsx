export const InfoTable = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-5 lg:gap-7">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary">
        Active Ingredient (% V/W):
      </h2>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg">
        {" "}
        It contains a high percentage of marine algae extracts and natural amino
        acids combined with organic acids. Chemical and physiological
        composition is as follows
      </p>
      <div className="flex flex-col gap-1">
        {[...Array(10).keys()].map((info) => (
          <div
            className="odd:bg-[#93BE3040] flex items-center justify-between max-sm:text-xs max-md:text-sm min-h-8 sm:min-h-10 lg:min-h-13 px-2 lg:px-4"
            key={info}
          >
            <p>TOTAL NITROGEN (N)</p>
            <p> 6.50</p>
          </div>
        ))}
      </div>
    </div>
  );
};
