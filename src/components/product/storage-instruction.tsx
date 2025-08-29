export const StorageInstruction = () => {
  return (
    <section className="flex flex-col gap-3 sm:gap-5 lg:gap-7">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary">
        Storage Instruction:
      </h2>
      <ul className="flex flex-col gap-1 list-inside list-decimal">
        <li className="font-medium text-[#4B4B4B] max-sm:text-xs max-lg:text-sm">
          Store in a tightly sealed container.
        </li>
        <li className="font-medium text-[#4B4B4B] max-sm:text-xs max-lg:text-sm">
          Keep out of reach of children.
        </li>
        <li className="font-medium text-[#4B4B4B] max-sm:text-xs max-lg:text-sm">
          Store in a cool, dry, and well-ventilated place.
        </li>
      </ul>
    </section>
  );
};
