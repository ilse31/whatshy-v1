import React from "react"
import { motion } from "framer-motion"

const DropdownItem = ( { variants, animate, hover, state, dataTitle, potition } ) =>
{
    return (
        <motion.div variants={ variants } animate={ animate } whileHover={ hover } className={ `absolute mt-3 bg-white rounded-md ${ potition ? "text-start mr-10 top-46 right-20 2xl:right-28" : "text-start right-12 mr-10 2xl:right-5" } z-50 shadow-md w-40 ${ state ? 'block' : 'hidden' }` }>
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