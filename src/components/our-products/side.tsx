import { getTranslations } from "next-intl/server";

const data = [
  "Soluble Fertilizers",
  "Liquid Fertilizers",
  "Green Agriculture Products",
  "Suspended Fertilizers (Gel)",
];
export const Side = async () => {
  const t = await getTranslations("our-products");
  return (
    <aside className="max-lg:hidden col-span-3 border border-slate-200 flex flex-col gap-6 rounded-xl p-4">
      <h2 className="text-xl text-primary text-center font-medium">
        {t("Filters")}
      </h2>
      <div className="flex flex-col gap-3">
        {data.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <input
              type="checkbox"
              className="appearance-none size-4.5 border border-slate-200 rounded checked:before:content-['✓'] checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-black checked:before:font-bold relative"
              id={item}
            />
            <label className="cursor-pointer" htmlFor={item}>
              {item}
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
};
