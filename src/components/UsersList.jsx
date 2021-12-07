import React from 'react'
import users from '../data/users.json'
import UserData from './UserData'


export default function UsersList() {
    return (
        <div>
            {users.map(element => {
                return(
                    <UserData 
                        key={element.id}
                        image={element.image}
                        name={element.user}
                    />
                )
            })}
        </div>
    )
}
