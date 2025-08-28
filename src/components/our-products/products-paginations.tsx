import { ArrowIcon } from "../icons/arrow-icon";

export const ProductsPaginations = () => {
  return (
    <div className="col-span-full flex gap-y-2 items-center max-lg:justify-center max-sm:flex-wrap max-sm:text-xs max-lg:text-[15px]">
      <button className="size-9 lg:size-10 flex items-center justify-center border rounded-s-md border-slate-300 cursor-pointer hover:bg-slate-50">
        <ArrowIcon className="size-3 rotate-90" />
      </button>
      <button className="size-9 lg:size-10 flex items-center justify-center border border-s-0 border-slate-300 cursor-pointer hover:bg-slate-50">
        1
      </button>
      <button className="size-9 lg:size-10 flex items-center justify-center border border-s-0 border-slate-300 cursor-pointer hover:bg-slate-50">
        2
      </button>
      <button className="size-9 lg:size-10 flex items-center justify-center border border-s-0 border-slate-300 cursor-pointer hover:bg-slate-50">
        3
      </button>
      <button className="size-9 lg:size-10 flex items-center justify-center border border-s-0 rounded-e-md border-slate-300 cursor-pointer hover:bg-slate-50">
        <ArrowIcon className="size-3 -rotate-90" />
      </button>
      <button className="w-30 ms-3 sm:w-40 border hover:bg-slate-50 cursor-pointer border-slate-200 rounded-md h-9 lg:h-10 flex items-center justify-center gap-3">
        More
      </button>
    </div>
  );
};
