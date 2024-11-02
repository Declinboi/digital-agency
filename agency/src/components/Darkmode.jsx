import React, { useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
      element.classList.remove("light");
    }
  });

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun
          onClick={() => setTheme("light")}
          className="text-2xl text-primary"
        />
      ) : (
        <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />
      )}
    </>
  );
};

export default Darkmode;
