import React from "react";
import Navbar from "../navbar/Navbar";
import { HiMenu } from "react-icons/hi";

const Header = ({ setNavMobile }) => {
  return (
    <header className="py-2">
      <div className="mx-auto container">
        <div className="flex items-center justify-between">
          <h1>logo</h1>
          <Navbar />
          {/* mobile nav */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="lg:hidden text-3xl cursor-pointer"
          />
          {/* mobile nav ends */}
        </div>
      </div>
    </header>
  );
};

export default Header;
