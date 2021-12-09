import React from 'react';
import './styles/userdata.css';
import { useDispatch } from 'react-redux';
import { chooseUser, getMessages } from '../actions';


export default function UserData(props) {

    const dispatch = useDispatch();

    const setUser = () => {
        dispatch(chooseUser(props));
        dispatch(getMessages(props.id));
    }

    return (
        <div className="userDataComponent" onClick={setUser}>
            <div className="caja">
                <div className="box">
                    <img src={props.image} alt="imagen del usuario" />
                </div>
            </div>
            <h5>{props.name}</h5>

        </div>
    )
}
