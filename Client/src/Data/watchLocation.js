export const startTracking = () => {
    return new Promise((resolve, reject) => {
      const locations = [];
      const options = {
        enableHighAccuracy: true,
        maximumAge: 0,
      };
  
      // Success callback
      const success = (position) => {
        const { latitude, longitude } = position.coords;
        const location = { latitude, longitude };
        locations.push(location); // Add location to the array
        console.log("Current Location: ", location);
        resolve(location); // Resolve with the latest location
      };
  
      // Error callback
      const error = (err) => {
        console.error("Error while tracking location: ", err.message);
        reject({ error: err.message });
      };
  
      // Start watching position
      if ("geolocation" in navigator) {
        const watchId = navigator.geolocation.watchPosition(success, error, options);
  
        // Optional: Return a stop function to clear the watch
        const stopTracking = () => {
          navigator.geolocation.clearWatch(watchId);
          console.log("Tracking stopped.");
        };
  
        // Expose the stopTracking function if needed
        return { locations, stopTracking };
      } else {
        reject({ error: "Geolocation is not supported by your browser" });
      }
    });
  };
  
  // Example usage
  startTracking()
    .then((location) => {
      console.log("Tracking started. Current Location: ", location);
    })
    .catch((error) => {
      console.error("Error: ", error.error);
    });
  