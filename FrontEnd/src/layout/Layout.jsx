

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";


const Layout = () => {

useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/lxnwmcazrboqzyud8a0nnjny4mwvqbfz.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [])

  return (
    <>
      <Navbar/>
      <main className="py-4">
        <Outlet />
      </main>
    </>
  );
};


export default Layout;

