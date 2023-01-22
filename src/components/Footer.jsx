import React from 'react'
import MainLayout from '../layouts/MainLayout'

const Footer = () =>
{
    return (
        <MainLayout>
            <div className='w-full h-92 bg-[#1F2A44] mx-auto p-5 z-40 text-[#01D2B3]'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex justify-between'>
                        <div className='flex gap-5 flex-col'>
                            <a href="#" className='font-poppins font-medium text-xl'>WhatShy</a>
                            <a href='#' className='font-poppins font-semibold text-xl'>Home</a>
                            <a href='#' className='font-poppins font-semibold text-xl'>About Us</a>
                            <a href='#' className='font-poppins font-semibold text-xl'>Contact Us</a>
                            <a href='#' className='font-poppins font-semibold text-xl'>Terms & Conditions</a>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <a href='#' className='font-poppins font-semibold text-xl'>Facebook</a>
                            <a href='#' className='font-poppins font-semibold text-xl'>Twitter</a>
                            <a href='#' className='font-poppins font-semibold text-xl'>Instagram</a>
                        </div>
                        <div className='flex gap-5 flex-col items-start'>
                            <a href='#' className='font-poppins font-semibold text-xl'>Privacy Policy</a>
                            <a href='#' className='font-poppins font-semibold text-xl'>FAQ</a>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-5 '> © { new Date().getFullYear() } Copyrights WhatShy - All Rights Reserved.</div>
            </div>
        </MainLayout>
    )
}

export default Footer