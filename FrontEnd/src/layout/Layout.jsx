

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Layout = () => {
  return (
    <>
      <Navbar/>
      <main className=" py-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

