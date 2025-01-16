import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { startTracking } from "../../Data/watchLocation";

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });

  // useEffect Hook for getting location
  useEffect(() => {
    startTracking()
      .then((location) => {
        setLocation(location);
      })
      .catch((error) => {
        console.log("Error fetching location: ", error.error);
      });
  }, []);

  // useEffect Hook for setting up map
  useEffect(() => {
    if (!location) return;
    // Initialize the map and set its view
    const map = L.map(mapContainerRef.current).setView(
      [location.latitude, location.longitude],
      13
    );

    // Add a marker
    var marker = L.marker([location.latitude, location.longitude]).addTo(map);

    // Bind a popup with a dynamic longitude and latitude value
    marker
      .bindPopup(
        `<b>Longitude: ${location.longitude}, Latitude: ${location.latitude}`
      )
      .openPopup();

    // Add the tile layer
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, [location]);

  return (
    <div
      id="map"
      ref={mapContainerRef}
      style={{ height: "100vh", width: "100%" }}
    ></div>
  );
};

export default MapComponent;
