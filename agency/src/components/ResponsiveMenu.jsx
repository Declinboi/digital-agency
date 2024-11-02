import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MenuLink } from "./Navbar";
import { NavLink } from "react-router-dom";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${showMenu ? "left-0" : "left-[-100%]"}
        fixed bottom-0 top-0 w-[75%] transition-all duration-200 pt-16 mt-12 px-8 bg-gray-300 dark:bg-gray-900 z-50 md:hidden shadow-md flex flex-col justify-between pb-5`}
    >
      <div className=" ">
      
        {/* user section */}
        <div className="flex items-center justify-start gap-3 ">
          <FaUserCircle className="text-4xl" />
          <div>
            <h1 className="">Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>

        {/* menu section */}
        <nav className="mt-12">
          <ul>
            {MenuLink.map(({ paths, link }) => {
              return (
                <li key={paths} className="cursor-pointer py-4">
                  <NavLink
                    key={paths}
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
          </ul>
        </nav>
      </div>
      
      {/* footer section */}
      <div>
        <h1 className="font-semibold font-mono">
          Made With <span className="text-red-500">❤</span> by
          <a href="github.com/Declinboi/MY-FIRST-PROJECT" className="ml-2">
            Declinboi
          </a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
