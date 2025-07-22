import React from "react";
import AppNavbar from './AppNavbar';

const Home = () =>
{
    return (
        <>
        <AppNavbar />
        <div className="p-4 text-center text-white">
            <h1 className="text-3xl font-bold mb-4">welcome to home page</h1>
        </div>
        </>
    )

}

export default Home;