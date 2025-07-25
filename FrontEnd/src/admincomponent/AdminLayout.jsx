import React from "react";
import AppNavbar from "./AppNavbar";
import { Outlet } from "react-router-dom";

function AdminLayout({children})
{
    return (
        <>
        {/*Navbar */}
        <AppNavbar />

        <main className="py-4">
        <Outlet />
      </main>

        </>
    )
}

export default AdminLayout