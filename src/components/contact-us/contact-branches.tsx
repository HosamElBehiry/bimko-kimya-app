import { ContactMarkerIcon } from "../icons/contact-marker-icon";

export const ContactBranches = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-3">
      {[1, 2, 3].map((info) => (
        <div key={info} className="flex items-center gap-2">
          <ContactMarkerIcon className="size-7 sm:size-10 lg:size-13" />
          <div className="flex flex-col">
            <p className="font-medium max-sm:text-xs max-md:text-sm">
              KAMBERIYE MAH.KADRI
            </p>
            <p className="font-medium max-sm:text-xs max-md:text-sm">
              EROGAN CAD. NO: 10 IÇ KAPI
            </p>
            <p className="font-medium max-sm:text-xs max-md:text-sm">
              NO: 53 HALILIYE SANLIURFA/TÜRKİYE
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
