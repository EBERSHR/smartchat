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

    const handleKeyPress = e => {
      if (e.keyCode === 13) {
        handleOnClick();
      }
    };


    return (
        <div className="senderMessageComponent">
            <dir className="messageComponent">
                <input type="text" value={message} onChange={e => {handleOnChange(e)}} onKeyDown={e => {handleKeyPress(e)}} defaultValue={message} />
                <div>
                {/* <input type="button" value="Send" onClick={handleOnClick}/> */}
                <input type="button" value="Send" onClick={handleOnClick}/>
                </div>
            </dir>
        </div>
    )
}
