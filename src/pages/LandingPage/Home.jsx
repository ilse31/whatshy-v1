import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import iphoneMockup from "../../assets/iphonemockup.svg"
import apstore from "../../assets/play-store-icon.png"
import gplay from "../../assets/Get_it_on_Google_play.png"

const Home = () =>
{
    return (
        <MainLayout showNav={ false }>
            <div className='w-full bg-[#01D2B3] h-full absolute' id='home' ></div>
            <div className='max-w-7xl mx-auto p-5 z-40 relative'>
                <div className="flex justify-between flex-col md:flex-row items-center min-h-screen">
                    <div className='kanan text-white'>
                        <h1 className='text-6xl font-poppins font-medium'>It's easy with Chat and Broadcast</h1>
                        <h3 className='text-xl font-poppins font-normal'>
                            #TanpaRibetdenganWhatshy
                        </h3>
                        <div className='flex gap-5'>
                            {/* <button className='bg-[#00AC94] text-white px-5 py-2 rounded-md font-poppins font-semibold focus:ring-offset-2 focus:ring-[#03c8ad] focus:ring'>Mulai Sekarang</button> */ }
                            <a href='#' className=' font-poppins font-semibold items-center py-2 underline'>Learn More</a>
                        </div>
                        <div className='mt-3 flex justify-start items-center gap-3'>
                            <img src={ gplay } className="h-[50px]" alt="" />
                            <img src={ apstore } className="h-[55px]" alt="" />
                        </div>
                    </div>
                    <div className='kiri flex justify-end '>
                        <img src={ iphoneMockup } className="h-[400px] md:h-[750px]" alt="hero" />
                    </div>
                </div>
            </div>
        </MainLayout >
    )
}

export default Home