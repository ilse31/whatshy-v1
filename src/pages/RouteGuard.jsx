import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const RouteGuard = ( {
    children,
} ) =>
{
    const navigate = useNavigate();
    const auth = localStorage.getItem( "user" );
    useEffect( () =>
    {
        setTimeout( () =>
        {
            auth ? "" : navigate( "/auth/login" );
        }, 1000 );
    }, [ auth ] );
    return (
        <>
            {
                auth ? children : <div className='min-h-screen text-blue-900 justify-center items-center flex'>Not Authorized</div>
            }
        </>
    )
}

export default RouteGuard