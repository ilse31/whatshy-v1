import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = ( {
    children
} ) =>
{
    const dummyNavbar = [
        {
            id: 1,
            name: 'Personal Messages',
            path: '/dashboard/personal-messages'
        },
        {
            id: 2,
            name: 'Broadcast Messages',
            path: '/dashboard/broadcast-messages'
        },
        {
            id: 3,
            name: 'Contacts',
            path: '/dashboard/contacts'
        },
        {
            id: 4,
            name: 'History',
            path: '/dashboard/history'
        },
        {
            id: 5,
            name: 'Settings',
            path: '/dashboard/settings'
        },
    ]
    return (
        <>
            <div className='w-full flex flex-row gap-5'>
                <aside className="w-64 fixed shadow-md flex h-screen flex-col justify-between px-10 top-0">
                    <div className="flex flex-col gap-2 mt-10">
                        { dummyNavbar.map( ( item ) => (
                            <NavLink
                                to={ item.path }
                                key={ item.id }
                                className="dashboard py-3 px-2 font-poppins rounded-[3px] font-semibold text-[#01D2B3] flex gap-4"
                            >
                                <p>{ item.name }</p>
                            </NavLink>
                        ) ) }
                    </div>
                    <div className='mb-10 text-[#01D2B3] font-poppins font-medium text-xl'>
                        Hi Admin
                    </div>
                </aside>
                <div className='relative left-64 fixed overflow-x-hidden'>
                    { children }
                </div>
            </div >
        </>
    )
}

export default Sidebar