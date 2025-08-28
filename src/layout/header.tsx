import { GlobalIcon } from "@/components/icons/global-icon";
import { ArrowIcon } from "@/components/icons/arrow-icon";
import { LogoIcon } from "@/components/icons/logo-icon";
import { Link } from "@/i18n/navigation";
import { BurgerMenuIcon } from "@/components/icons/burger-menu";

export const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-500 rounded-b-3xl shadow">
      <section className="container px-5 lg:px-10 flex mx-auto items-center justify-between">
        <div className="hidden md:flex items-center gap-5 lg:gap-10">
          <Link href="/" className="text-primary font-bold max-lg:text-sm">
            Home
          </Link>
          <div className="flex items-center gap-2 lg:gap-3">
            <span className="text-primary font-bold max-lg:text-sm">
              Our Products
            </span>
            <ArrowIcon className="size-2.5 lg:size-3 text-primary" />
          </div>
        </div>
        <button className="md:hidden cursor-pointer">
          <BurgerMenuIcon className="text-primary size-5" />
        </button>
        <div className="flex md:ms-10 lg:ms-20 items-center justify-center">
          <Link
            href="/"
            className="h-16 md:h-18 w-32 sm:w-40 lg:h-22 lg:w-60 mx-auto flex items-center justify-center shadow bg-white rounded-2xl relative top-3 md:top-6"
          >
            <LogoIcon className="h-12 md:h-14 lg:h-18" />
          </Link>
        </div>
        <div className="flex items-center gap-5 lg:gap-10">
          <Link
            href="/"
            className="text-primary font-bold max-lg:text-sm max-md:hidden"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="text-primary font-bold max-lg:text-sm max-md:hidden"
          >
            Contact Us
          </Link>
          <button className="flex items-center gap-2 cursor-pointer">
            <GlobalIcon className="size-5 md:size-3 lg:size-4 text-primary" />
            <span className="text-primary font-bold text-sm max-md:hidden">
              English
            </span>
          </button>
        </div>
      </section>
    </header>
  );
};
