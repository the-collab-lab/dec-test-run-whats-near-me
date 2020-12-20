import { useState, useEffect } from "react";

const useCurrentLocation = (options = {}) => {
  // store error messages in state
  const [error, setError] = useState();
  // store location in state
  const [location, setLocation] = useState();

  // Success handler for geolocation's `getCurrentPosition` method
  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation({ latitude, longitude });
  };

  // Error handler for geolocation's `getCurrentPosition` method
  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    // If geolocation is not defined in the used browser it will be handled as an error
    // Do we want to prompt them to input a location if that's the case?

    if (!navigator.geolocation) {
      setError("Geolocation is not supported");
    }

    // Call the Geolocation API
    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      options
    );
  }, []);
  return { location, error };
};

export { useCurrentLocation };
