import React, { useState } from "react";
import MapComponent from "./Component/Map/MapComponent";
import "./App.css";
import UserListPanel from "./Component/UserListPanel.jsx/UserListPanel";

const App = () => {
  const [location, setlocation] = useState({
    latitude: "27.7172",
    longitude: "85.324",
  });

  return (
    <>
      <MapComponent location={location} />
      <UserListPanel />
    </>
  );
};

export default App;
