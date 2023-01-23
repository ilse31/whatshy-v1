import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import RouteGuard from '../RouteGuard'

const PersonalMessages = () =>
{
    return (
        <MainLayout>
            <RouteGuard>
                <div className="max-w-7xl mx-auto p-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore dignissimos, ipsam repellat ducimus sint culpa enim qui debitis iste nesciunt ex incidunt maiores accusamus nemo nam eum harum libero necessitatibus.
                </div>
            </RouteGuard>
        </MainLayout>
    )
}

export default PersonalMessages