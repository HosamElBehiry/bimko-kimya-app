import { useLoadScript } from "@react-google-maps/api";
export const useGoogleMaps = () => {
  return useLoadScript({
    id: "google-maps-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
  });
};
