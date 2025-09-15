import { Link } from "@/i18n/navigation";
import { WhatsAppIcon } from "../icons/whatsapp-icon";

export const FloatingWhatsApp = () => {
  return (
    <Link
      href="#"
      className="fixed bottom-16 size-12 bg-[#25D366] rounded-full flex items-center justify-center max-sm:bottom-20 right-8 max-sm:right-4 z-100"
    >
      <WhatsAppIcon className="size-7 text-white" />
    </Link>
  );
};
