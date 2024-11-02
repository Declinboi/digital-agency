import React, { useState } from "react";
import Logo from "../assets/website/Vector.png";
import { NavLink } from "react-router-dom";
import Darkmode from "./Darkmode";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

export const MenuLink = [
  {
    paths: "/",
    link: "Home",
  },
  {
    paths: "/contact",
    link: "Contact",
  },
  {
    paths: "/about",
    link: "About",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="dark:bg-black bg-white dark:text-white duration-300">
      <div className="container py-3 md:py-2 px-3">
        <div className="flex justify-between items-center ">
          {/* logo section */}
          <div>
            <a href="/" className="flex items-center gap-3 ">
              <img src={Logo} alt="logo" className="w-5" />
              <span className="text-2xl sm:text-3xl font-semibold font-cursive dark:text-primary">
                Digital Agency
              </span>
            </a>
          </div>

          {/* navlink section */}
          <div className="md:block hidden">
            <ul className="flex items-center gap-8">
              {MenuLink.map(({ paths, link }) => {
                return (
                  <li key={paths} className="cursor-pointer py-4">
                    <NavLink
                      to={paths}
                      className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-all duration-500"
                    >
                      {link}
                    </NavLink>
                  </li>
                );
              })}
              <button className="bg-primary text-white hover:bg-primary/80 duration-300 rounded-lg px-4 py-2">
                Get in Touch
              </button>
              <Darkmode />
            </ul>
          </div>

          {/* mobile view */}
          <div className="md:hidden flex items-center gap-4">
            <Darkmode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
