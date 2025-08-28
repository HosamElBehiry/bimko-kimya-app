import { FooterLists } from "./footer-lists";
import { FooterDescription } from "./footer-description";
import { FooterSubscription } from "./footer-subscription";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b pt-15 sm:pt-20 lg:pt-40 pb-3 sm:pb-5 lg:pb-10 from-[#12141D] to-primary">
      <div className="container px-5 lg:px-10 pb-3.5 sm:pb-7 lg:pb-20 mx-auto grid max-lg:grid-cols-2 lg:flex justify-between gap-5 sm:gap-7 lg:gap-15">
        <FooterDescription />
        <FooterLists
          title="Bimko Kimya"
          lists={["Home", "Our Products", "About Us", "Contact Us"]}
        />
        <FooterLists
          title="Our Products"
          lists={[
            "Soluble Fertilizers",
            "Liquid Fertilizers",
            "Green Agriculture Products",
            "Suspension Fertilizers (Gel)",
          ]}
        />
        <FooterSubscription />
      </div>
      <div className="border-t container mx-auto pt-3 sm:pt-5 lg:pt-10 max-md:px-5 border-t-zinc-400">
        <p className="text-center max-sm:text-xs max-lg:text-sm text-white font-medium">
          &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by
          BimkoKimya
        </p>
      </div>
    </footer>
  );
};
