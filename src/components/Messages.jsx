import React from 'react'
import { useSelector } from 'react-redux';

export default function Messages() {
    const messages = useSelector(state => state.choosed.chat);
    let mess = "";
    messages ? mess = Object.values(messages) : console.log('null');


    console.log(mess)
    return (
        <div>
            {  mess ?  mess.map(element => {
                return (
                    <div className='messageDiv'>{element.message.message}</div>
                ) 
        
    }) : <></>}
        </div>
    )
}
