import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import MainLayout from '../../layouts/MainLayout'
import RouteGuard from '../RouteGuard'
import useDocumentTitle from '../../hooks/useDocumentTitle'
const Broadcast = () =>
{
    const [ messages, setMessages ] = useState( "" )
    useDocumentTitle( 'Whatshy | Broadcast' )
    const handleSend = () =>
    {
        console.log( messages )
    }
    return (
        <MainLayout>
            <RouteGuard auth={ true }>
                <Sidebar>
                    <div className='ml-10 mt-12 h-screen flex flex-col gap-4'>
                        <h1 className='font-poppins'>Broadcast Messages</h1>
                        <span className='font-poppins'>Using Personal Messages you can send message to unsaved number.</span>
                        <div className="flex flex-col gap-2 group">
                            <label htmlFor="email" className="font-poppins font-semibold text-sm group-focus-within:text-[#01D2B3]">Messages</label>
                            <textarea type="email" value={ messages } onChange={ ( e ) => setMessages( e.target.value ) } name="email" id="email" className="border-2 h-96 bg-white border-[#01D2B3] rounded-md p-1 focus:outline-none focus:bg-white" />
                        </div>
                        <div className='justify-end flex'>
                            <button disabled={ !messages } onClick={ handleSend } className='bg-[#01D2B3] disabled:bg-gray-600 rounded-md px-4 py-2 w-1/3 text-white'>
                                Send
                            </button>
                        </div>
                    </div>
                </Sidebar>
            </RouteGuard>
        </MainLayout>
    )
}

export default Broadcast