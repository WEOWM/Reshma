import React, { useState } from "react";
import Header from "./components/header/Header";
import Home from "./Home";
import CustomCursor from "./components/custommouse/CustomCursor";


const App = () => {
  
  return (
    <div className="w-full h-screen text ">
      <CustomCursor/>
      <Header/>
      <Home />
    </div>
  );
};

export default App;
