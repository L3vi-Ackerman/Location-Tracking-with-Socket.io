import React, { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import PersistentDrawerLeft from "./Component/Drawer/Drawer";
import Login from "./Component/Login/Login";
import SignUp from './Component/SignUp/SignUp';
import "./App.css";

const App = () => {
  const [login, setLogin] = useState(true);
  return (
    <Routes>
      <Route path="/" element={login? <PersistentDrawerLeft/>:<Login/>} />
      <Route path="signup" element={<SignUp />} />
        
    </Routes>
  )
};

export default App;
