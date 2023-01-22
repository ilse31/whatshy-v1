import React from 'react'
import Navbar from '../components'
import AnimateLayout from './AnimateLayout'

const MainLayout = ( { children } ) =>
{
    return (
        <AnimateLayout>
            { children }
        </AnimateLayout>
    )
}

export default MainLayout