import React from 'react'
import Sidebar from '../../components/Sidebar'
import MainLayout from '../../layouts/MainLayout'
import RouteGuard from '../RouteGuard'
import useDocumentTitle from '../../hooks/useDocumentTitle'
const Contact = () =>
{
    useDocumentTitle( 'Whatshy | Contact' )
    return (
        <MainLayout>
            <RouteGuard auth={ true }>
                <Sidebar>
                    <div className='ml-10 mt-12'>
                        <h1>Contact</h1>
                    </div>
                </Sidebar>
            </RouteGuard>
        </MainLayout>
    )
}

export default Contact