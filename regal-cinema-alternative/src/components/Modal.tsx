
import { server_details } from '../api/server';
import { useState, useEffect } from 'react'
import { useGetData } from '../custom-hook/DetailsData'
// just to display the stuff 
type ModalProps = {
    id: string;
    open: boolean;
    onClose?: () => void
}

const Modal = (props: ModalProps) => {

    if (!props.open ) return (<></>);

    return (

        <div onClick={ props.onClose } 
        className='fixed w-full h-full flex overflow-auto z-1 justify-center align-middle bg-gray-300 bg-opacity-25' >
            
            {/* Modal */}
            <div className='max-w-600px w-2/5 fixed flex z-1 mt-20 bg-white shadow-xl rounded' onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className='w-full flex flex-col'>
                    <div className='flex flex-row space-apart'>

                        <p className='flex justify-start m-3 bg-slate-300 rounded p-2 hover:bg-slate-700 text-white' onClick={props.onClose}>
                            X
                        </p>

                    </div>

                    <detailsForm id={props.id}/>

                    <div className='flex flex-col items-center text-center mt-3 p-2'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal