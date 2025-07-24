import React from "react";
import Navbar from "./AppNavbar";

function Layout({children})
{
    return 
    
    (
        <>
        {/*Navbar */}
        <Navbar />

        <div className="content min-h-screen">
            {children}
        </div>

        <Footer />


        </>
    )
}

export default Layout