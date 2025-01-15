import React, { useState } from "react";
import PersistentDrawerLeft from "./Component/Drawer/Drawer";
import Login from './Component/Login/Login';
import "./App.css";

const App = () => {
  const [location, setlocation] = useState({
    latitude: "27.7172",
    longitude: "85.324",
  });
  const [login,setLogin] = useState(false);

  return (
    <>
      {/* <MapComponent location={location} />
      <UserListPanel /> */}
      {
        login ? <PersistentDrawerLeft />:<Login />
      }
    </>
  );
};

export default App;
