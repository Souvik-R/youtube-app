import React from 'react';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const Head = () => {
    const dispatch = useDispatch();
    
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img
                    onClick={()=> toggleMenuHandler()}
                    className='h-8 cursor-pointer'
                    alt="menu"
                    src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
                />
                <img
                    className='h-8 mx-3'
                    alt="youtube-logo"
                    src="data:image/png;base64,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"
                />
            </div>
            <div className='col-span-10 px-20'>
                <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' />
                <button className='border border-gray-400 px-4 py-2 rounded-r-full cursor-pointer bg-gray-100'>🔍</button>
            </div>
            <div className='col-span-1'>
                <img
                    className='h-8'
                    alt="user"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                />
            </div>
        </div>
    )
}

export default Head;