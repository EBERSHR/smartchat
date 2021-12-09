import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

export default function Messages() {

    const messageRef = useRef();

    // useEffect(() => {
    //     if (messageRef.current) {
    //         messageRef.current.scrollIntoView()
    //     } 
    // }, [messageRef])

    const seleccionado = useSelector(state => state.choosed)
    const messages = useSelector(state => state.messages)
    let mess = [];
    messages ? mess = Object.values(messages) : console.log('null');
    return (
        <div className="messageArea" ref={messageRef}>
            {mess ? mess.map((element, index) => {
                return (
                    <div key={index} className='messageDiv'>{element.message.message}</div>
                )
            }) : <></>}
        </div>
    )
}
