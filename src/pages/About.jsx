import React from 'react'
import iphoneMockup from "../assets/iPhone 13 Pro.svg"
import MainLayout from '../layouts/MainLayout'


const About = () =>
{
    return (
        <MainLayout>
            <div className='w-full h-screen absolute' id='about' />
            <div className='max-w-7xl mx-auto p-5 z-40 relative text-[#01D2B3]'>
                <div className="flex justify-center flex-col md:flex-row-reverse items-center min-h-screen gap-10">
                    <div className='kanan'>
                        <div className='flex justify-start flex-col'>
                            <h2 className='font-poppins font-normal text-3xl'>About Us</h2>
                            <h1 className='text-6xl font-poppins font-semibold'>Providing Simple Chatting Solutions</h1>
                            <h3 className='text-xl font-poppins font-medium'>
                                By getting a Content Provider. Whatshy, a simple cross-platform application using Whatsapp API which can provide you chat with other Whatsapp users without saving number
                            </h3>
                            <div className='flex gap-5'>
                                <a href='#' className=' font-poppins font-semibold items-center py-2 underline'>#TanpaRibetdenganWhatshy</a>
                            </div>
                        </div>
                    </div>
                    <div className='kiri flex justify-end'>
                        <img src={ iphoneMockup } className="h-[400px] md:h-[800px]" alt="hero" />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default About