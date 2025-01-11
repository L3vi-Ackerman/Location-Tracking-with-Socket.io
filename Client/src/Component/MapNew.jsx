import React, { useEffect, useRef } from "react";
import leaflet from "leaflet";

const MapNew = () => {
  const mapRef = useRef(null); // Initialize ref

  useEffect(() => {
    
    if (!mapRef.current) {
      mapRef.current = leaflet.map("map").setView([51.505, -0.09], 13);

      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(mapRef.current);
    }

    
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }}></div>;
};

export default MapNew;
