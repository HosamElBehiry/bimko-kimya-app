import { SearchIcon } from "../icons/search-icon";
import { FilterIcon } from "../icons/filter-icon";

export const ProductsSearch = () => {
  return (
    <div className="border border-slate-200 gap-4 rounded-xl h-10 sm:h-11 lg:h-12 flex items-center px-3 justify-between">
      <div className="flex items-center gap-2 sm:flex-1">
        <SearchIcon className="size-3 sm:size-4 lg:size-5" />
        <input
          type="text"
          placeholder="Search"
          className="sm:flex-1 max-sm:max-w-[200px] outline-none max-lg:text-[15px] max-lg:placeholder:text-[15px] max-sm:text-sm max-sm:placeholder:text-sm"
        />
      </div>
      <FilterIcon className="size-4 sm:size-5 lg:size-6" />
    </div>
  );
};
