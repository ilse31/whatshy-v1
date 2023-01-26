import { data } from 'autoprefixer'
import React from 'react'
import { Navbar } from '../../components'
import Footer from '../../components/Footer'
import MainLayout from '../../layouts/MainLayout'
import { useGetPhonebookQuery } from '../../services/api'
import About from './About'
import ContactUs from './ContactUs'
import Home from './Home'

const Landing = () =>
{

    const { data, error, isLoading }
        = useGetPhonebookQuery( {
            id: 1
        }
        )

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