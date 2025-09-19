"use client";

import { useGoogleMaps } from "@/hooks/use-google-maps";
import { GoogleMap, Marker } from "@react-google-maps/api";

export const ContactMap = () => {
  const { isLoaded } = useGoogleMaps();

  if (!isLoaded) return null;

  return (
    <GoogleMap
      mapContainerClassName="w-full h-screen rounded-xl"
      center={{ lat: 30.0554, lng: 31.2357 }}
      zoom={14}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: true,
        fullscreenControl: false,
        disableDefaultUI: false,
      }}
    >
      <Marker position={{ lat: 30.0554, lng: 31.2357 }} />
    </GoogleMap>
  );
};
