import React, { useEffect } from 'react';
import UserData from './UserData';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersDatabase } from '../actions';


export default function UsersList() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersDatabase());
    }, [dispatch]);

    const users = useSelector(state => state.users);
    
    return (
        <div className='listComponent'>
            {users.map(element => {
                return(
                    <UserData 
                        key={element.id}
                        image={element.image}
                        name={element.user}
                        id={element.id}
                        chat={element.chat}
                    />
                )
            })}
        </div>
    )
}
