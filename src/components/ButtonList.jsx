import React from 'react';
import Button from './Button';

const list = ["All", "Gaming", "Movies", "Entertainment", "Kapil Sharma", "News", "Funny", "Cricket", "Accessories"]


const ButtonList = () => {
    return (
        <div className='flex'>
            {list.map((name, index) => (
                <Button key={index} name={name} />
            ))}
        </div>
        
    )
}

export default ButtonList;