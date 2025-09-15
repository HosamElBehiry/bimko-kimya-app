export const FooterLists = ({
  title,
  lists,
}: {
  title: string;
  lists: string[];
}) => {
  return (
    <div className="flex flex-col max-sm:items-center max-sm:justify-center max-sm:col-span-full gap-2 sm:gap-3.5 lg:gap-5 lg:max-w-80">
      <p className="text-base sm:text-lg lg:text-xl text-white font-bold">
        {title}
      </p>
      <ul className="flex flex-col max-sm:items-center max-sm:justify-center gap-2 lg:gap-3">
        {lists.map((list) => (
          <li key={list} className="text-white max-lg:text-sm max-sm:text-xs">
            {list}
          </li>
        ))}
      </ul>
    </div>
  );
};
