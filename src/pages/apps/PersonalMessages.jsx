import React from 'react'
import Sidebar from '../../components/Sidebar'
import MainLayout from '../../layouts/MainLayout'
import RouteGuard from '../RouteGuard'
import useDocumentTitle from '../../hooks/useDocumentTitle'
const PersonalMessages = () =>
{
    useDocumentTitle( 'Whatshy | Personal Messages' )
    return (
        <MainLayout>
            {/* { btoa( 'Personal Messages' ) }
            {
                atob( 'UGVyc29uYWwgTWVzc2FnZXM' )
            } */}
            <RouteGuard auth={ true }>
                <Sidebar>
                    <div className='ml-10 mt-12'>
                        <h1>Personal Messages</h1>

                    </div>
                </Sidebar>
            </RouteGuard>
        </MainLayout>
    )
}

export default PersonalMessages