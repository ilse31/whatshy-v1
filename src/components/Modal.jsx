import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
export default function Modal ( { children, modal_title, button_title } )
{
    const [ showModal, setShowModal ] = React.useState( false );
    return (
        <>
            <div
                className="bg-[#01D2B3] disabled:bg-slate-600 text-white capitalize active:bg-[#017765] font-normal text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={ () => setShowModal( true ) }
            >
                { button_title }
            </div>
            { showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/ }
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/ }
                                <div className="flex items-center justify-between px-4 py-2 border-b border-solid rounded-t">
                                    <h3 className="text-lg font-semibold capitalize">
                                        { modal_title }
                                    </h3>
                                    <button
                                        className="p-1 ml-auto border-0 opacity-10 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={ () => setShowModal( false ) }
                                    >
                                        <AiFillCloseCircle />
                                    </button>
                                </div>
                                {/*body*/ }
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        {
                                            children
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-30 bg-black"></div>
                </>
            ) : null }
        </>
    );
}