import React from 'react'
import Messages from './Messages';
import UserDetail from './UserDetail';
import UsersList from './UsersList';
import SenderMessage from './SenderMessage';

export default function Chat() {
    return (
        <div className="chatComponent">
            <UsersList />
            <div className="messagesComponent">
                <UserDetail />
                <Messages />
                <SenderMessage />
            </div>
        </div>
    )
}
