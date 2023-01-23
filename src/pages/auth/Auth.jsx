import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import Icon from '../../assets/icon.svg'
import Google from '../../assets/icons8-google.svg'
import { BiArrowBack } from 'react-icons/bi';
const Auth = () =>
{
    const location = useLocation()
    const [ showPass, setshowPass ] = useState( false )
    return (
        <MainLayout showNav={ false }>
            <div className='h-full w-1/2 bg-[#00c3a9] justify-center flex absolute m-0 top-0' ></div>
            <div className="flex w-full mx-auto relative justify-around justify-center h-screen">
                <div className="kanan h-screen flex items-center">
                    <img src={ Icon } className="h-96" alt="" />
                    <Link to={ "/" }> <BiArrowBack className="absolute top-5 left-5 text-white text-3xl" /></Link>
                </div>
                <div className="kiri flex items-start">
                    <div className="flex flex-col justify-center items-center h-screen">
                        {
                            location.pathname === "/auth/login" ?
                                <div className="flex flex-col gap-5">
                                    <img src={ Icon } className="h-24" alt="" />
                                    <h1 className="text-2xl font-poppins font-semibold text-center">Hello Again</h1>
                                    <p className="text-md font-poppins text-center font-light">Login to your account ! <br />Enter the information while you Registering </p>
                                    <div className="flex flex-col gap-5 w-full">
                                        <div className="flex flex-col gap-2 group">
                                            <label htmlFor="email" className="font-poppins font-semibold text-sm group-focus-within:text-[#01D2B3]">Email</label>
                                            <input autoFocus type="email" name="email" id="email" className="border-2 bg-white border-[#01D2B3] rounded-md p-2 focus:outline-none focus:bg-white" />
                                        </div>
                                        <div className="flex flex-col gap-2 group">
                                            <label htmlFor="password" className="font-poppins font-semibold text-sm group-focus-within:text-[#01D2B3]">Password</label>
                                            <div className='w-full border-2 flex border-[#01D2B3] bg-white rounded-md items-center'>
                                                <input type={ showPass ? "text" : "password" } name="password" id="password" className="bg-white w-full bg-none rounded-md p-2 focus:outline-none focus:bg-white" />
                                                <span className="mr-5 relative z-20">
                                                    {
                                                        showPass ?
                                                            <BsFillEyeFill className={ showPass ? "text-[#01D2B3]" : "" } onClick={ () => setshowPass( false ) } />
                                                            :
                                                            <BsFillEyeSlashFill onClick={ () => setshowPass( true ) } />
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        <button className="bg-[#01D2B3] hover:bg-[#00a38d] transition-colors ease-in-out duration-300 text-white font-poppins font-semibold text-sm rounded-md p-2">Sign In</button>
                                        <button className="bg-white border transition-colors ease-in-out duration-300 text-black font-poppins font-light text-sm rounded-md p-2 flex justify-center gap-3"><img src={ Google } className="h-5" alt="" /> Sign In with Google</button>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-md font-poppins font-light text-center">Don't have an account ? <Link to="/auth/register" replace className="text-[#01D2B3] font-semibold">Register</Link></p>
                                        </div>
                                    </div>
                                </div> :
                                <div className="flex flex-col gap-5">
                                    <img src={ Icon } className="h-24" alt="" />
                                    <h1 className="text-2xl font-poppins font-semibold text-center">Welcome</h1>
                                    <p className="text-md font-poppins text-center font-light">Register to your account ! <br />Enter the information below to continue </p>
                                    <div className="flex flex-col gap-5 w-full">
                                        <div className="flex flex-col gap-2 group">
                                            <label htmlFor="username" className="font-poppins font-semibold text-sm group-focus-within:text-[#01D2B3]">Username</label>
                                            <input autoFocus type="text" name="username" id="username" className="border-2 bg-white border-[#01D2B3] rounded-md p-2 focus:outline-none focus:bg-white" />
                                        </div>
                                        <div className="flex flex-col gap-2 group">
                                            <label htmlFor="email" className="font-poppins font-semibold text-sm group-focus-within:text-[#01D2B3]">Email</label>
                                            <input autoFocus type="email" name="email" id="email" className="border-2 bg-white border-[#01D2B3] rounded-md p-2 focus:outline-none focus:bg-white" />
                                        </div>
                                        <div className="flex flex-col gap-2 group">
                                            <label htmlFor="password" className="font-poppins font-semibold text-sm group-focus-within:text-[#01D2B3]">Password</label>
                                            <div className='w-full border-2 flex border-[#01D2B3] bg-white rounded-md items-center'>
                                                <input type={ showPass ? "text" : "password" } name="password" id="password" className="bg-white w-full bg-none rounded-md p-2 focus:outline-none focus:bg-white" />
                                                <span className="mr-5 relative z-20">
                                                    {
                                                        showPass ?
                                                            <BsFillEyeFill className={ showPass ? "text-[#01D2B3]" : "" } onClick={ () => setshowPass( false ) } />
                                                            :
                                                            <BsFillEyeSlashFill onClick={ () => setshowPass( true ) } />
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        <button className="bg-[#01D2B3] hover:bg-[#00a38d] transition-colors ease-in-out duration-300 text-white font-poppins font-semibold text-sm rounded-md p-2">Sign Up</button>
                                        <button className="bg-white border transition-colors ease-in-out duration-300 text-black font-poppins font-light text-sm rounded-md p-2 flex justify-center gap-3"><img src={ Google } className="h-5" alt="" /> Sign In with Google</button>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-md font-poppins font-light text-center">You have an account ? <Link to="/auth/login" replace className="text-[#01D2B3] font-semibold">Login</Link></p>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </MainLayout >
    )
}

export default Auth