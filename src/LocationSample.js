import React from "react";
import { useCurrentLocation } from "./lib/userLocation";

const LocationSample = () => {
  const { location, error } = useCurrentLocation();
  return (
    <div>
      {location ? (
        <code>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </code>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>Location Error: {error}</p>}
    </div>
  );
};

export default LocationSample;
