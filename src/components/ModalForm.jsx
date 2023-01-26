import { Formik } from 'formik'
import React from 'react'
import { Tooltip } from 'react-tooltip'

const ModalForm = ( {
    contactValues,
    validationSchema,
    submit,
} ) =>
{
    return (
        <Formik initialValues={ contactValues }
            validationSchema={
                validationSchema
            }
            enableReinitialize
            onSubmit={ submit }
        >
            { ( { values, errors, touched, handleChange, handleBlur, handleSubmit } ) => (
                <form onSubmit={ handleSubmit } className='flex flex-col gap-4 w-96 z-50'>
                    <div className="flex flex-col gap-2 group">
                        <label htmlFor="name" className="font-poppins font-semibold text-sm group-focus-within:text-[#01D2B3]">Name</label>
                        <input type="text" value={ values.name } onChange={ handleChange } onBlur={ handleBlur } name="name" id="name" className="border-2 bg-white border-[#01D2B3] rounded-md p-1 focus:outline-none focus:bg-white" />
                        { errors.name && touched.name && <div className="text-red-500 font-poppins font-semibold text-sm">{ errors.name }</div> }
                    </div>
                    <div className="flex flex-col gap-2 group">
                        <label htmlFor="number" className="font-poppins font-semibold text-sm group-focus-within:text-[#01D2B3]">Number</label>
                        <input type="text" value={ values.number } onChange={ handleChange } onBlur={ handleBlur } name="number" id="number" className="border-2 bg-white border-[#01D2B3] rounded-md p-1 focus:outline-none focus:bg-white" />
                        { errors.number && touched.number && <div className="text-red-500 font-poppins font-semibold text-sm">{ errors.number }</div> }
                    </div>
                    <Tooltip anchorId={ `save` }>
                        <span>save</span>
                    </Tooltip>
                    <div id={ `save` } className='justify-start flex mb-5'>
                        <button type='submit' className='bg-[#01D2B3] cursor-pointer rounded-md px-2 py-1 text-white'>
                            Save
                        </button>
                    </div>
                </form>
            ) }
        </Formik>
    )
}

export default ModalForm