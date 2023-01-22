import React, { useState } from 'react'
// import { FaAngleDown, FaAngleUp } from "react-icons/fa";
// import DropdownItem from './DropdownItem';
import { motion } from "framer-motion";
import { BiMenuAltRight, BiX } from "react-icons/bi";

const Navbar = () =>
{
    const [ dropDown, setdropDown ] = useState( {
        message: false,
        account: false,
    } )
    const [ navOpen, setNavOpen ] = useState( false )
    const navAnimate = {
        initial: {
            opacity: 0,
            scale: 0.99,
        },
        in: {
            opacity: 1,
            scale: 1,
        },
        out: {
            opacity: 0,
            scale: 1.01,
        },
    };
    const hoverEffect = {
        scale: 1.1,
        transition: {
            duration: 0.2,
        },
    }
    const animateTransitionAcc =
    {
        opacity: dropDown.account ? 1 : 0,
        x: dropDown.account ? 0 : 20,
        y: dropDown.account ? 0 : 20,
    }
    const animateTransitionMsg =
    {
        opacity: dropDown.message ? 1 : 0,
        x: dropDown.message ? 0 : 20,
        y: dropDown.message ? 0 : 20,
    }
    const handleClickScroll = ( id ) =>
    {
        const element = document.getElementById( id );
        if ( element )
        {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView( { behavior: 'smooth' } );
        }
        console.log( element );
    };
    return (
        <div className='py-3 w-full px-4 top-0 font-poppins font-normal text-[#00AC94]  border-b shadow-sm top-0 sticky bg-white z-50' >
            <div className="flex justify-between flex-col md:flex-row max-w-screen-2xl mx-auto">
                <div className='flex justify-between flex-row '>
                    <div className='text-2xl'>WhatShy</div>
                    <BiMenuAltRight className={ `text-4xl md:hidden ${ navOpen ? "" : "hidden" }` } onClick={ () => setNavOpen( !navOpen ) } />
                    <BiX className={ `text-4xl md:hidden ${ navOpen ? "hidden" : "" }` } onClick={ () => setNavOpen( !navOpen ) } />
                </div>
                <motion.div variants={ {
                    initial: {
                        opacity: 0,
                        x: 20,
                        y: 20,
                    },
                    in: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                    },
                    out: {
                        opacity: 0,
                        x: 20,
                        y: 20,
                    },
                } } animate={ {
                    opacity: navOpen ? 0 : 1,
                    x: navOpen ? 20 : 0,
                    y: navOpen ? 20 : 0,
                    transition: {
                        duration: 0.4,
                    },
                } }
                    className={ `flex flex-col md:flex-row gap-10 ${ navOpen ? "hidden" : "block" }  md:h-full h-screen md:justify-start justify-center` }>
                    <div className='cursor-pointer py-2 text-center' onClick={ () => handleClickScroll( "home" ) }>Home</div>
                    <div className="cursor-pointer py-2 text-center" onClick={ () => handleClickScroll( "about" ) }>About Us</div>
                    <div className="cursor-pointer py-2 text-center" onClick={ () => handleClickScroll( "contact" ) }>Contact Us</div>
                    <button className='bg-[#00AC94] text-white px-6 py-2 rounded-full hover:bg-[#06d7bc] transition-colors ease-in-out duration-300'>Login</button>
                    {/* <div className='cursor-pointer'>
                        <div className="flex items-center gap-1" onClick={ () => setdropDown( {
                            message: !dropDown.message,
                        } ) }>
                            Message { dropDown.message ? <FaAngleUp /> : <FaAngleDown /> }
                        </div>
                        <DropdownItem variants={ navAnimate } potition={ true } animate={ animateTransitionMsg } hover={ hoverEffect } state={ dropDown.message } dataTitle={ [ 'Personal Chat', 'Broadcasting' ] } />
                    </div> */}
                    {/* <div className='cursor-pointer'>History</div> */ }
                    {/* <div className='cursor-pointer'>
                        <div className="flex items-center gap-1" onClick={ () => setdropDown( {
                            account: !dropDown.account,
                        } ) }>
                            Account { dropDown.account ? <FaAngleUp /> : <FaAngleDown /> }
                        </div>
                        <DropdownItem variants={ navAnimate } animate={ animateTransitionAcc } potition={ false } hover={ hoverEffect } state={ dropDown.account } dataTitle={ [ 'Profile', 'About Apps', 'Logout' ] } />
                    </div> */}
                </motion.div>
            </div>
        </div >
    )
}

export default Navbar