import React, { useState } from "react";
import {
    Navbar,
    IconButton,
    Avatar,
    Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AiOutlineShareAlt, AiOutlineSearch } from 'react-icons/ai';
import { MdStarPurple500 } from "react-icons/md";

export default function AppNavbar() {
    const [openNav, setOpenNav] = useState(false);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-row items-center font-bold gap-4 lg:mb-0 lg:mt-0 lg:gap-6 text-lg">
            <li className="p-1 font-normal">
                <Link to='/' style={{ color: 'white' }}>Home</Link>
            </li>
            <li className="p-1 font-normal">
                <Link to='/admin/addevents' style={{ color: 'white' }}>AddEvents</Link>
            </li>
            <li className="p-1 font-normal">
                <Link to='/admin/addvilla' style={{ color: 'white' }}>AddVilla</Link>
            </li>
            <li className="p-1 font-normal">
                <Link to='/admin/adddoctor' style={{ color: 'white' }}>AddDoctor</Link>
            </li>
            <li className="p-1 font-normal">
                <Link to='/admin/gallery' style={{ color: 'white' }}>Gallery</Link>
            </li>
            <li className="p-1 font-normal">
                <Link to='/admin/aboutus' style={{ color: 'white' }}>About Us</Link>
            </li>
            <li className="p-1 font-normal">
                <Link to='/admin/contactus' style={{ color: 'white' }}>Contact Us</Link>
            </li>
        </ul>
    );

    return (
        <Navbar
            className="sticky inset-0 z-20 h-max max-w-full border-none rounded-none py-2 px-4 lg:px-8 lg:py-2 bg-stone-800"
             // use proper rgba as string
        >
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to='/'>
                    <span className="mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center" style={{ color: 'white' }}>
                        Healthy Horizon
                    </span>
                </Link>

                <div className="flex items-center gap-4">
                    {/* NavList desktop */}
                    <div className="hidden lg:block">{navList}</div>

                    {/* Search icon */}
                    <AiOutlineSearch size={20} color="white" />

                    {/* Share icon desktop */}
                    <div className="hidden lg:block">
                        <AiOutlineShareAlt size={20} color="white" />
                    </div>

                    {/* Profile avatar */}
                    <Link to='/dashboard'>
                        <Avatar
                            src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png'
                            alt="avatar"
                            withBorder={true}
                            className="p-0.5 text-red-500 w-10 h-10"
                            style={{ border: '2px solid rgb(30, 41, 59)' }}
                        />
                    </Link>

                    {/* Mobile toggle */}
                    <IconButton
                        className="ml-auto h-10 w-10 text-inherit rounded-lg lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                        style={{ background: '#ced6e0', color: 'black' }}
                    >
                        {openNav ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>

            {/* NavList mobile */}
            <Collapse open={openNav}>
                {navList}
            </Collapse>
        </Navbar>
    );
}
