import React from 'react'
import { Navbar } from '../../components'
import Footer from '../../components/Footer'
import MainLayout from '../../layouts/MainLayout'
import About from './About'
import ContactUs from './ContactUs'
import Home from './Home'

const Landing = () =>
{
    return (
        <MainLayout showNav={ true }>
            <Home />
            <About />
            <ContactUs />
            <Footer />
        </MainLayout>
    )
}

export default Landing