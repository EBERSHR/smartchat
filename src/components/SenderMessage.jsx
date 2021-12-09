import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../actions';

export default function SenderMessage() {

    const dispatch = useDispatch();
    const [message, setMessage] = useState();
    const logged = useSelector(state => state.loggedUser);

    const receiver = useSelector(state => state.choosed.id);

    const handleOnChange = (e) => {
        setMessage(e.target.value)
    }
    const handleOnClick = () => {
        if (message) dispatch(sendMessage({
            message,
            from: logged.id,
            to: receiver
        }));
        setMessage('');
    }
    return (
        <div className="senderMessageComponent">
            <dir className="messageComponent">
                <input type="text" onChange={e => {handleOnChange(e)}}/>
                <div>
                    <input type="button" value="Send" onClick={handleOnClick}/>
                </div>
            </dir>
        </div>
    )
}
