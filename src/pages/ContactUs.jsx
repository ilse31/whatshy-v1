import React from 'react'
import MainLayout from '../layouts/MainLayout'
import iphoneMockup from "../assets/iPhone 12 Pro (Wooden Hands).svg"
const ContactUs = () =>
{
    return (
        <MainLayout>
            <div className='md:w-1/2 w-full bg-[#01D2B3] h-screen absolute' />
            <div className='max-w-7xl mx-auto p-5 z-40 relative text-white'>
                <div className="flex justify-center flex-col md:flex-row gap-10 min-h-screen">
                    <div className='kanan'>
                        <div className='flex justify-start flex-col'>
                            <h2 className='font-poppins font-normal text-3xl'>Contact Us</h2>
                            <h1 className='text-6xl font-poppins font-semibold'>Get in Touch</h1>
                            <div className="flex border shadow shadow-lg h-[400px] bg-white md:w-[740px] rounded-md">
                                <div className="flex flex-col justify-center m-10 w-full text-[#01D2B3]">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="name" className="font-poppins font-semibold text-lg">Name</label>
                                            <input type="text" name="name" id="name" className="border-2 border-[#01D2B3] rounded-md p-2" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="email" className="font-poppins font-semibold text-lg">Email</label>
                                            <input type="email" name="email" id="email" className="border-2 border-[#01D2B3] rounded-md p-2" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="subject" className="font-poppins font-semibold text-lg">Subject</label>
                                            <textarea type="text" name="subject" id="subject" className="border-2 border-[#01D2B3] rounded-md p-2" />
                                        </div>
                                    </div>
                                    <button className="bg-[#01D2B3] text-white font-poppins font-semibold text-lg mt-5 rounded-md p-2">Send</button>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <a href='#' className=' font-poppins font-semibold items-center py-2 underline'>#TanpaRibetdenganWhatshy</a>
                            </div>
                        </div>
                    </div>
                    <div className='kiri flex items-center justify-end hidden md:block'>
                        <img src={ iphoneMockup } className="h-[400px] md:h-[800px]" alt="hero" />
                    </div>
                </div>
            </div>

        </MainLayout >
    )
}

export default ContactUs