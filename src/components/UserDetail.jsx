import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { getMessages } from '../actions'; 

export default function UserDetail() {

    const user = useSelector(state => state.choosed)
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getMessages(user.id))
    // }, [dispatch])

    return (
        <div>
            <div className="userDataComponent">
                <div className="caja">
                    <div className="box">
                    <img src={user.image} alt="usuario" />
                    </div>
                </div>
                <h5>{user.name}</h5>

            </div>
        </div>
    )
}
