import { useState } from "react";
import "./App.css";
import Header from "./components/navbar/Header";
import MobileNav from "./components/navbar/MobileNav";
import Weather from "./components/Weather";

function App() {

  return (
    <div className="h-full">
      <Weather />
    </div>
  );
}

export default App;
