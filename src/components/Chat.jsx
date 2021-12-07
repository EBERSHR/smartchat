import React from 'react'
import Messages from './Messages';
import UserData from './UserData';
import UsersList from './UsersList';
import SenderMessage from './SenderMessage';

export default function Chat() {
    return (
        <div className="chatComponent">
            <UsersList />
            <div className="messagesComponent">
                <UserData />
                <Messages />
                <SenderMessage />
            </div>
        </div>
    )
}
