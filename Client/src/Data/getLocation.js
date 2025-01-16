const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  // Success function
  function handleSuccess(position, resolve) {
    const { latitude, longitude } = position.coords;
    resolve({ latitude, longitude });
  }
  
  // Error function
  function handleError(error, reject) {
    reject({ error: error.message });
  }
  
  // Geolocation function
  export const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => handleSuccess(position, resolve),
          (error) => handleError(error, reject),
          options
        );
      } else {
        reject({ error: "Geolocation is not supported by your browser" });
      }
    });
  };
  