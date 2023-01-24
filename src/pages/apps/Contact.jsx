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
                    <div className='ml-10 mt-12 flex flex-col gap-4 relative'>
                        <h1 className='font-poppins'>Broadcast Messages</h1>
                        <span className='font-poppins'>Using Personal Messages you can send message to unsaved number.</span>
                        <div className="flex border rounded-md">
                            <div className="flex flex-col gap-2 p-5 w-full">
                                <div className='flex justify-between'>
                                    <div className='flex flex-col gap-2'>
                                        <span>Name</span>
                                        <span>789078677895678</span>
                                    </div>
                                    <div className='flex gap-5 items-center'>
                                        <span>Message</span>
                                        <span>Hi, I am using Whatshy</span>
                                        <span>Edit</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Sidebar>
            </RouteGuard >
        </MainLayout >
    )
}

export default Contact