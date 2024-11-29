"use client"
import React, { useState, useEffect } from 'react';

function LocationComponent() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      console.log("Geolocation supported by browser");
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Position received:", position);
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Error getting position:", error);
          setError(error.message);
        }
      );
    } else {
      console.log("Geolocation not supported by this browser.");
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      <h2>Geolocation Example</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        location.latitude && location.longitude ? (
          <div>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </div>
        ) : (
          <p>Fetching location...</p>
        )
      )}
    </div>
  );
}

export default LocationComponent;
