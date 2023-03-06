import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import MainLayout from '../../layouts/MainLayout'
import RouteGuard from '../RouteGuard'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import { BsFillChatDotsFill, BsPersonCircle, BsFillCalendarCheckFill, BsFillTrashFill } from "react-icons/bs";
const History = () =>
{
    useDocumentTitle( 'Whatshy | History' )
    const [ history, setHistory ] = useState( [] )
    useEffect( () =>
    {
        let histories = localStorage.getItem( 'history' )
        if ( histories )
        {
            histories = JSON.parse( histories )
            setHistory( histories )
        }
        else
        {
            histories = []
        }
        console.log( histories )

    }, [] )

    const handleDelete = ( index ) =>
    {
        let histories = localStorage.getItem( 'history' )
        if ( histories )
        {
            histories = JSON.parse( histories )
            histories.splice( index, 1 )
            localStorage.setItem( 'history', JSON.stringify( histories ) )
            setHistory( histories )
        }
    }

    const handleDeleteAll = () =>
    {
        localStorage.removeItem( 'history' )
        setHistory( [] )
    }

    return (
        <MainLayout>
            <RouteGuard auth={ true }>
                <Sidebar>
                    <div className='ml-10 mt-12 flex flex-col gap-4 relative'>
                        <h1 className='font-poppins'>History in your last Messages</h1>
                        <span className='font-poppins'>Using Personal Messages you can send message to unsaved number.</span>
                        <div className='flex justify-end'>
                            <button onClick={ handleDeleteAll } className='bg-[#3CDCC5] text-white px-4 py-2 rounded-md'>Delete All</button>
                        </div>
                        {
                            history.map( ( hiistoryi, index ) =>
                            {
                                return (
                                    <div className="flex border rounded-md" key={ index }>
                                        <div className="flex flex-col gap-2 p-5 w-full">
                                            <div className='flex justify-between'>
                                                <div className='flex flex-col gap-2 w-1/2'>
                                                    <span className='flex items-center gap-3'><BsPersonCircle />{ atob( hiistoryi.number ) }</span>
                                                    <span className='flex items-center gap-3'><BsFillChatDotsFill /> { hiistoryi.text }</span>
                                                </div>
                                                <div className='flex gap-5 items-center justify-end w-1/2'>
                                                    <span className='flex items-center gap-3 border py-1 px-2 text-white bg-[#3CDCC5] rounded-full'><BsFillCalendarCheckFill /> { new Date( hiistoryi.createdAt ).toDateString() }</span>
                                                    <span className='border py-1 px-2 rounded-full text-white bg-[#1F2A44]'>{ new Date( hiistoryi.createdAt ).toTimeString().substr( 0, 5 ) }</span>
                                                    <span onClick={ () => handleDelete( index ) } className='cursor-pointer'><BsFillTrashFill className='text-red-600' /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } )
                        }
                    </div>
                </Sidebar>
            </RouteGuard>
        </MainLayout>
    )
}

export default History