import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import MainLayout from '../../layouts/MainLayout'
import RouteGuard from '../RouteGuard'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import Modal from '../../components/Modal'
import { Tooltip } from 'react-tooltip'
import * as Yup from 'yup'
import { AiOutlineEdit, AiFillDelete, AiFillMessage } from "react-icons/ai";
import ModalForm from '../../components/ModalForm'
import { useAddPhonebookMutation, useDeletePhonebookMutation, useGetPhonebookQuery } from '../../services/api'
import { Link } from 'react-router-dom'
const Contact = () =>
{
    useDocumentTitle( 'Whatshy | Contact' )
    const phoneRegExp = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/g
    const validationSchema =
        Yup.object( {
            number: Yup.string().required( 'Phone Number Required' ).max( 15, 'Phone Number Too Long' ).min(
                12,
                'Phone Number Too Short'
            ).matches( phoneRegExp, 'Phone Number is not valid, Please Use +62 or 0' ).typeError( 'Error Server' ),
            name: Yup.string().required( 'Required' ).typeError( 'Error Server' )
        } )

    const [ formValues, setformValues ] = useState( null )
    const [ chatTemplate, setchatTemplate ] = useState( "" )
    const [ searchValue, setsearchValue ] = useState( "" )

    let addContactval = {
        number: '',
        name: ''
    }

    const [ addcontact ] = useAddPhonebookMutation()
    const [ deleteContact ] = useDeletePhonebookMutation()
    const { data, refetch } = useGetPhonebookQuery( {
        id: JSON.parse( localStorage.getItem( 'user' ) ).id
    } )

    const handleAddcontact = ( values ) =>
    {
        addContactval = {
            number: btoa( values.number ),
            name: btoa( values.name ),
            user_id: JSON.parse( localStorage.getItem( 'user' ) ).id
        }
        addcontact( addContactval )
        e.preventDefault();
        refetch()
    }
    const handleDelete = ( e, id ) =>
    {
        deleteContact( { id: id } )
        e.preventDefault();
        refetch()
        alert( 'Delete Success' )
    }
    const handleSend = ( e, number ) =>
    {
        if ( !chatTemplate )
        {
            alert( 'Please Fill Chat Template' )
            return
        }
        let messages = chatTemplate
        let getMessages = messages.split( '\n' ).join( "" )
        let newhistory = []
        newhistory.push( { number: number, text: getMessages, createdAt: new Date() } )
        let history = localStorage.getItem( 'history' )
        if ( history )
        {
            newhistory = [ ...JSON.parse( history ) ]
            newhistory.splice( 0, 0, { number: number, text: getMessages, createdAt: new Date() } )
        }
        localStorage.setItem( 'history', JSON.stringify( newhistory ) )
        setTimeout( () =>
        {
            window.open( `https://api.whatsapp.com/send?phone=${ number }&text=${ getMessages }&source=&data=`, '_blank' );
        }, 500 );
        console.log( number );
        e.preventDefault();
    }

    return (
        <MainLayout>
            <RouteGuard auth={ true }>
                <Sidebar>
                    <div className='ml-10 mt-12 flex flex-col gap-4 mb-5'>
                        <h1 className='font-poppins'>List Contact</h1>
                        <span className='font-poppins'>Using Personal Messages you can send message to unsaved number.</span>
                        <label htmlFor="message" className="font-poppins font-semibold text-sm group-focus-within:text-[#01D2B3]">Chat Template</label>
                        <textarea type="text" name="message" value={ chatTemplate } onChange={ ( e ) => setchatTemplate( e.target.value ) } id="message" className="border-2 h-96 bg-white border-[#01D2B3] rounded-md p-1 focus:outline-none focus:bg-white" />
                        <div className='flex justify-between'>
                            <Modal button_title={ "add contact" } modal_title="add contact" >
                                <ModalForm contactValues={ addContactval } validationSchema={ validationSchema } submit={ handleAddcontact } />
                            </Modal>
                            <div>
                                <input type="text" value={ searchValue } onChange={ ( e ) => setsearchValue( e.target.value ) } placeholder="Search Contact" className="border-2 bg-white border-[#01D2B3] rounded-md px-2 py-1 focus:outline-none focus:bg-white" />
                            </div>
                        </div>
                        {
                            data?.users_by_pk?.contactlist?.filter( ( names ) =>
                            {
                                let dataEncode = atob( names.name )
                                return dataEncode.toLowerCase().includes( searchValue.toLowerCase() )
                            } ).map( ( item, index ) =>
                                <div className="flex border rounded-md shadow hover:shadow-xl ease-linear transition-all duration-150" key={ index }>
                                    <div className="flex flex-col gap-2 p-5 w-full">
                                        <div className='flex justify-between'>
                                            <div className='flex flex-col gap-2'>
                                                <span className='capitalize'>{ atob( item.name ) }</span>
                                                <span>{ atob( item.number ) }</span>
                                            </div>
                                            <div className='flex gap-5 items-center'>
                                                <Tooltip anchorId={ `send-msg-${ index }` }>
                                                    <span>Send Messages</span>
                                                </Tooltip>
                                                <div id={ `send-msg-${ index }` } onClick={ ( e ) => handleSend( e, item.number ) } className='cursor-pointer text-sm px-3 py-2 bg-emerald-500 rounded text-white mb-1'><AiFillMessage /></div>
                                                <Tooltip anchorId={ `delete-msg-${ index }` }>
                                                    <span>Delete</span>
                                                </Tooltip>
                                                <div onClick={
                                                    ( e ) => handleDelete( e, item.id )
                                                } id={ `delete-msg-${ index }` } className='cursor-pointer text-sm px-3 py-2 bg-red-500 rounded text-white mb-1'><AiFillDelete className='' /></div>
                                                <Tooltip anchorId={ `update-${ index }` }>
                                                    <span>Update Contact</span>
                                                </Tooltip>
                                                <Link className='cursor-pointer text-sm px-3 py-2 bg-emerald-500 rounded text-white mb-1' to={ `/dashboard/edit/${ item.id }` } id={ `update-${ index }` }
                                                >
                                                    <AiOutlineEdit />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </Sidebar>
            </RouteGuard >
        </MainLayout >
    )
}

export default Contact