"use client";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';


const navLinks = [
    {
        title: "About",
        path: "/#about",
    },
    {   
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
];

const Navbar = () => {
    let [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const mobileMenuRef = useRef(null); // Create a ref

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            // Example condition: When scrollTop is greater than 100, set scrolling to true
            if (scrollTop > 10) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function isElementHidden(elementRef) {
        if (!elementRef || !elementRef.current) return true; // If ref or element is not available, consider it hidden
        
        // Get the computed style of the element
        const computedStyle = window.getComputedStyle(elementRef.current);
        
        // Check if the computed display style is 'none'
        return computedStyle.getPropertyValue('display') === 'none';
    }

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    const changeIcon = () => {
        setNavbarOpen(navbarOpen);
    }

    // Function to determine which icon to display based on navbarOpen state
    const getIcon = () => {
        return navbarOpen ? <XMarkIcon className='w-5 h-5 text-white' /> : <Bars3Icon className='w-5 h-5 text-white' />;
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 bg-[#121212] bg-opacity-100 ${scrolling ? 'py-3' : 'py-4'}`}>
            <div className='flex flex-wrap items-center justify-between mx-auto px-12 z-12'>
                <Link href={"#hero-section"} className='text-2xl md:text-4xl text-white font-serif font-light'> 
                    Kelvin's Portfolio. 
                </Link>
                <div className='mobile-menu block md:hidden z-10'>

                    <button className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                    id='thisButton'
                    onClick={toggleNavbar}>
                        {navbarOpen ? 
                            <XMarkIcon className='w-5 h-5 text-white' /> 
                            :
                            <Bars3Icon className='w-5 h-5 text-white' />
                        }
                    </button>
                
                </div>
                <div className="menu hidden md:block md:w-auto" id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} ref={mobileMenuRef}  onClick={toggleNavbar} /> : null }


            {/* {navbarOpen ? <MenuOverlay links={navLinks} /> : null}     */}
        </nav>
    );
};

export default Navbar;
