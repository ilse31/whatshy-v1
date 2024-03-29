import React, { useEffect, useState } from 'react'
import ModalForm from '../../components/ModalForm'
import Sidebar from '../../components/Sidebar'
import MainLayout from '../../layouts/MainLayout'
import RouteGuard from '../RouteGuard'
import * as Yup from 'yup'
import { useGetByIdPhonebookQuery, useUpdatePhonebookMutation } from '../../services/api'
import { useNavigate, useParams } from 'react-router-dom'

const EditContact = () =>
{
    const [ update ] = useUpdatePhonebookMutation()
    let { id } = useParams()
    const navigate = useNavigate()
    const phoneRegExp = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/g
    const validationSchema =
        Yup.object( {
            number: Yup.string().required( 'Phone Number Required' ).max( 15, 'Phone Number Too Long' ).min(
                12,
                'Phone Number Too Short'
            ).matches( phoneRegExp, 'Phone Number is not valid, Please Use +62 or 0' ).typeError( 'Error Server' ),
            name: Yup.string().required( 'Required' ).typeError( 'Error Server' )
        } )
    let contactValues = {
        number: '',
        name: ''
    }

    const handleUpdate = ( id, values ) =>
    {
        update( {
            id: id,
            number: btoa( values?.number ),
            name: btoa( values?.name ),
        } )
        alert( 'Contact Updated' )
        navigate( '/dashboard/contacts' )
        refetch()
    }
    const { data } = useGetByIdPhonebookQuery( {
        id: id
    } )
    const [ formValues, setformValues ] = useState( {
        number: '',
        name: ''
    } )

    useEffect( () =>
    {
        if ( data )
        {
            setformValues( {
                number: atob( data.phonebook_by_pk.number ),
                name: atob( data.phonebook_by_pk.name )
            } )
        }
    }, [ data ] )
    return (
        <MainLayout>
            <RouteGuard auth={ true }>
                <Sidebar>
                    <div className='ml-10 mt-12 flex flex-col gap-4'>
                        <h1 className='font-poppins'>Personal Messages</h1>
                        <span className='font-poppins'>Using Personal Messages you can send message to unsaved number.</span>
                        <span className='font-poppins'>You can also send message to saved contacts.</span>
                        <ModalForm contactValues={ formValues || contactValues } submit={
                            ( values ) => handleUpdate( id, values )
                        } validationSchema={ validationSchema } />
                    </div>
                </Sidebar>
            </RouteGuard>
        </MainLayout >
    )
}

export default EditContact