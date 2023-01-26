import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = ( {
    children
} ) =>
{
    const handleLogout = () =>
    {
        localStorage.removeItem( "user" );
        window.location.href = "/";
    }
    const nameUser = JSON.parse( localStorage.getItem( "user" ) );
    console.log( nameUser.username );
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
                <aside className="w-1/5  shadow-md flex h-full min-h-screen flex-col justify-between px-10 top-0 left-0 fixed absolute">
                    <div className="flex flex-col gap-2 mt-10">
                        { dummyNavbar.map( ( item ) => (
                            <NavLink
                                to={ item.path }
                                key={ item.id }
                                className="dashboard py-3 px-2 font-poppins rounded-[3px] font-semibold text-[#01D2B3] flex gap-4"
                            >
                                { item.name }
                            </NavLink>
                        ) ) }
                    </div>
                    <div>
                        <div className='mb-3 text-[#01D2B3] font-poppins font-medium text-xl capitalize'>
                            Hi { nameUser.username }
                        </div>
                        <button onClick={
                            handleLogout
                        } className='bg-[#01D2B3] rounded-md px-4 py-2 mb-5 w-full text-white'>
                            Logout
                        </button>
                    </div>
                </aside>
                <div className='relative left-1/4 w-3/5 fixed overflow-x-hidden min-h-screen h-full'>
                    { children }
                </div>
            </div >
        </>
    )
}

export default Sidebar