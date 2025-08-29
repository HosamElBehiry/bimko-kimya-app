import { BurgerMenuIcon } from "@/components/icons/burger-menu";
import { LocaleSwitcher } from "./locale-switcher";
import { getTranslations } from "next-intl/server";
import { HeaderAboutUs } from "./header-about-us";
import { Link } from "@/i18n/navigation";
import { HeaderLogo } from "./logo";

export const Header = async () => {
  const t = await getTranslations("common");
  return (
    <header className="bg-white sticky top-0 z-500 rounded-b-3xl shadow">
      <section className="container px-5 lg:px-10 flex mx-auto items-center justify-between">
        <div className="hidden md:flex items-center gap-5 lg:gap-10">
          <Link href="/" className="text-primary font-bold max-lg:text-sm">
            {t("Home")}
          </Link>
          <Link
            href="/our-products"
            className="text-primary font-bold max-lg:text-sm max-md:hidden"
          >
            {t("Our Products")}
          </Link>
        </div>
        <button className="md:hidden cursor-pointer">
          <BurgerMenuIcon className="text-primary size-5" />
        </button>
        <HeaderLogo />
        <div className="flex items-center gap-5 lg:gap-10">
          <HeaderAboutUs />
          <Link
            href="/contact-us"
            className="text-primary font-bold max-lg:text-sm max-md:hidden"
          >
            {t("Contact Us")}
          </Link>
          <LocaleSwitcher />
        </div>
      </section>
    </header>
  );
};
