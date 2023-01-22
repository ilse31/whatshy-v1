import React from "react"
import { motion } from "framer-motion"

const DropdownItem = ( { variants, animate, hover, state, dataTitle, potition } ) =>
{
    return (
        <motion.div variants={ variants } animate={ animate } whileHover={ hover } className={ `absolute top-16 bg-white rounded-md ${ potition ? "text-start sm:right-32 md:right-52 2xl:right-80 mr-10" : "text-start sm:right-0 sm:mr-0 md:mr-10 2xl:right-20" } z-50 shadow-md w-40 ${ state ? 'block' : 'hidden' }` }>
            {
                dataTitle.map( ( item, index ) =>
                {
                    return (
                        <div key={ index } className='py-2 px-4 hover:bg-[#00AC94] cursor-pointer rounded-md hover:text-white'>{ item }</div>
                    )
                } )
            }
        </motion.div>
    )
}

export default DropdownItem