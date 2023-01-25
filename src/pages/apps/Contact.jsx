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
const Contact = () =>
{
    useDocumentTitle( 'Whatshy | Contact' )

    let contact = [
        {
            name: 'Rizky',
            number: '6281234567890',
        },
        {
            name: 'awdfesff',
            number: '6281234567890',
        },
    ]
    const phoneRegExp = /^(\+62|62)8[1-9][0-9]{6,9}$/
    const validationSchema =
        Yup.object( {
            number: Yup.string().required( 'Phone Number Required' ).max( 15 ).min( 13 ).matches(
                phoneRegExp,
                'Phone number is not valid, using 62 or +62'
            ),
            name: Yup.string().required( 'Required' ).typeError( 'Error Server' )
        } )

    const [ formValues, setformValues ] = useState( null )
    const [ chatTemplate, setchatTemplate ] = useState( "" )
    let contactValues = {
        number: '',
        name: ''
    }
    let addContactval = {
        number: '',
        name: ''
    }

    const handleEdit = ( e, number, name ) =>
    {
        setformValues( { number: number, name: name } )
        console.log( number, name );
        e.preventDefault();
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
                        <div>
                            <Modal button_title={ "add contact" } modal_title="add contact">
                                <ModalForm contactValues={ addContactval } validationSchema={ validationSchema } />
                            </Modal>
                        </div>
                        {
                            contact.map( ( item, index ) =>
                                <div className="flex border rounded-md shadow hover:shadow-xl ease-linear transition-all duration-150" key={ index }>
                                    <div className="flex flex-col gap-2 p-5 w-full">
                                        <div className='flex justify-between'>
                                            <div className='flex flex-col gap-2'>
                                                <span>{ item.name }</span>
                                                <span>{ item.number }</span>
                                            </div>
                                            <div className='flex gap-5 items-center'>
                                                <Tooltip anchorId={ `send-msg-${ index }` }>
                                                    <button>Send Messages</button>
                                                </Tooltip>
                                                <div id={ `send-msg-${ index }` } onClick={ ( e ) => handleSend( e, item.number ) } className='cursor-pointer text-sm px-3 py-2 bg-emerald-500 rounded text-white mb-1'><AiFillMessage /></div>
                                                <Tooltip anchorId={ `delete-msg-${ index }` }>
                                                    <button>Delete</button>
                                                </Tooltip>
                                                <div id={ `delete-msg-${ index }` } className='cursor-pointer text-sm px-3 py-2 bg-red-500 rounded text-white mb-1'><AiFillDelete className='' /></div>
                                                <Tooltip anchorId={ `update-${ index }` }>
                                                    <button>Update Contact</button>
                                                </Tooltip>
                                                <div id={ `update-${ index }` }
                                                    onClick={ ( e ) => handleEdit( e, item.number, item.name )
                                                    }>
                                                    <Modal button_title={ <AiOutlineEdit /> } modal_title={ "Edit Contact" } >
                                                        <ModalForm contactValues={ formValues || contactValues } validationSchema={ validationSchema } />
                                                    </Modal>
                                                </div>
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