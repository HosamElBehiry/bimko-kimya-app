import { CallIcon } from "../icons/call-icon";
import { WhatsAppIcon } from "../icons/whatsapp-icon";
import { ContactEmailIcon } from "../icons/contact-email-icon";
import { ContactLocationIcon } from "../icons/contact-location-icon";

export const ContactInformations = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <div className="flex items-center max-lg:justify-center gap-3">
        <CallIcon className="text-primary sm:min-w-6 sm:max-w-6 sm:min-h-6 sm:max-h-6 max-sm:size-5 lg:min-w-8 lg:max-w-8 lg:min-h-8 lg:max-h-8" />
        <div className="flex flex-col flex-1">
          <h4 className="font-semibold max-md:text-sm lg:text-lg">Call</h4>
          <p className="text-zinc-600 max-lg:text-sm max-md:text-xs">
            +90 414 312 78 77
          </p>
        </div>
      </div>
      <div className="flex items-center max-lg:justify-center gap-3">
        <WhatsAppIcon className="text-primary sm:min-w-6 sm:max-w-6 sm:min-h-6 sm:max-h-6 max-sm:size-5 lg:min-w-8 lg:max-w-8 lg:min-h-8 lg:max-h-8" />
        <div className="flex flex-col flex-1">
          <h4 className="font-semibold max-md:text-sm lg:text-lg">whatsapp</h4>
          <p className="text-zinc-600 max-lg:text-sm max-md:text-xs">
            +90 414 312 78 77
          </p>
        </div>
      </div>
      <div className="flex items-center max-lg:justify-center gap-3">
        <ContactEmailIcon className="text-primary sm:min-w-6 sm:max-w-6 sm:min-h-6 sm:max-h-6 max-sm:size-5 lg:min-w-8 lg:max-w-8 lg:min-h-8 lg:max-h-8" />
        <div className="flex flex-col flex-1">
          <h4 className="font-semibold max-md:text-sm lg:text-lg">Email</h4>
          <p className="text-zinc-600 max-lg:text-sm max-md:text-xs">
            bimko@bimkokimya.com
          </p>
        </div>
      </div>
      <div className="flex items-center max-lg:justify-center gap-3">
        <ContactLocationIcon className="text-primary sm:min-w-6 sm:max-w-6 sm:min-h-6 sm:max-h-6 max-sm:size-5 lg:min-w-8 lg:max-w-8 lg:min-h-8 lg:max-h-8" />
        <div className="flex flex-col flex-1">
          <h4 className="font-semibold max-md:text-sm lg:text-lg">Location</h4>
          <p className="text-zinc-600 max-lg:text-sm max-md:text-xs">
            Koçören OSB. Mah.
          </p>
        </div>
      </div>
    </div>
  );
};
