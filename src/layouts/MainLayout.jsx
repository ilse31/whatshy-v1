import React from 'react'
import { Navbar } from '../components'
import AnimateLayout from './AnimateLayout'

const MainLayout = ( { children, showNav } ) =>
{
    return (
        <>
            { showNav ? <Navbar /> : null }
            <AnimateLayout>
                { children }
            </AnimateLayout>
        </>
    )
}

export default MainLayout