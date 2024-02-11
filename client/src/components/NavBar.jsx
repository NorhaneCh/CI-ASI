import React from "react";
import { styles } from "../styles.js";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  if (location.pathname === "/signIn"|| location.pathname === "/signUp" ) {
    return null; 
  }

  return (
    <nav
      className={`relative ${styles.paddingX} w-full py-4 border-b top-0 z-20 backdrop-blur sticky text-[15px]`}
    >
      <ul className="list-none hidden sm:flex flex-row justify-center gap-10 font-medium">
        <li className="text-[16px] hover:text-color-blue font-semibold">
          <a href="/">Accueil</a>
        </li>
        <li className="text-[16px] hover:text-color-blue font-semibold">
          <a href="/planning">Planning</a>
        </li>
        <li className="text-[16px] hover:text-color-blue font-semibold">
          <a href="/catalogue">Catalogue</a>
        </li>
      </ul>
      <Link to={"/signIn"}>
        <button className="absolute right-6 top-2 font-semibold bg-color-blue text-white px-6 py-2 hover:bg-blue-500 rounded-xl">
          Se connecter
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;