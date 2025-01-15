import React, { useState } from "react";
import PersistentDrawerLeft from "./Component/Drawer/Drawer";
import Login from "./Component/Login/Login";
import "./App.css";

const App = () => {
  const [login, setLogin] = useState(false);

  return <>{login ? <PersistentDrawerLeft /> : <Login />}</>;
};

export default App;
