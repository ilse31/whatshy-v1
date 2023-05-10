import React from 'react'
import Sidebar from '../../components/Sidebar'
import MainLayout from '../../layouts/MainLayout'
import RouteGuard from '../RouteGuard'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import { Formik, useFormikContext } from 'formik'
import * as Yup from 'yup'
import Contact from './Contact'
const PersonalMessages = () =>
{
    const phoneRegExp = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/g
    const validationSchema =
        Yup.object( {
            number: Yup.string().required( 'Phone Number Required' ).max( 15, 'Phone Number Too Long' ).min(
                12,
                'Phone Number Too Short'
            ).matches( phoneRegExp, 'Phone Number is not valid, Please Use +62 or 0' ).typeError( 'Error Server' ),
            message: Yup.string().required( 'Required' ).typeError( 'Error Server' )
        } )
    const loginValues = {
        number: '',
        message: ''
    }
    const handleSend = ( values, { resetForm } ) =>
    {
        let messages = values.message
        let number = values.number
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
            resetForm()
        }, 2000 );
        e.preventDefault();
    }



    useDocumentTitle( 'Whatshy | Personal Messages' )
    return (
        <MainLayout>
            <RouteGuard auth={ true }>
                <Sidebar>
                    <div className='ml-10 mt-12 flex flex-col gap-4'>
                        <h1 className='font-poppins'>Personal Messages</h1>
                        <span className='font-poppins'>Using Personal Messages you can send message to unsaved number.</span>
                        <Formik
                            initialValues={ loginValues }
                            validationSchema={
                                validationSchema
                            }
                            onSubmit={ handleSend }
                        >
                            { ( {
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                            } ) => (
                                <form onSubmit={ handleSubmit } className='flex flex-col gap-4'>
                                    <div className="flex flex-col gap-2 group">
                                        <label htmlFor="number" className="font-poppins font-semibold text-sm group-focus-within:text-[#01D2B3]">Number</label>
                                        <input type="text" placeholder='Input Phone Number'  value={ values.number } onChange={ handleChange } onBlur={ handleBlur } name="number" id="number" className="border-2 bg-white border-[#01D2B3] rounded-md p-1 focus:outline-none focus:bg-white" />
                                        <span className='text-red-700'>{ errors.number && touched.number && errors.number }</span>
                                    </div>
                                    <div className="flex flex-col gap-2 group">
                                        <label htmlFor="message" className="font-poppins font-semibold text-sm group-focus-within:text-[#01D2B3]">Message</label>
                                        <textarea type="text" value={ values.message } onChange={ handleChange } onBlur={ handleBlur } name="message" id="message" className="border-2 h-96 bg-white border-[#01D2B3] rounded-md p-1 focus:outline-none focus:bg-white" />
                                        <span className='text-red-700'>{ errors.message && touched.message && errors.message }</span>
                                    </div>
                                    <div className='justify-end flex mb-5'>
                                        <button disabled={ values.number == '' || values.message === '' } type='submit' className='bg-[#01D2B3] disabled:bg-gray-600 rounded-md px-4 py-2 w-1/3 text-white'>
                                            Send
                                        </button>
                                    </div>
                                </form>
                            ) }
                        </Formik>
                    </div>
                </Sidebar>
            </RouteGuard>
        </MainLayout >
    )
}

export default PersonalMessages