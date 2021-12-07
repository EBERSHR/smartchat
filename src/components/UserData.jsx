import React from 'react';
import './styles/userdata.css';
import { useDispatch } from 'react-redux';
import { chooseUser } from '../actions';
import { useSelector } from 'react-redux';





export default function UserData(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.choosed)

    console.log(user)







    return (
        <div className="userDataComponent" onClick={() => {dispatch(chooseUser(props))}}>
            {/* <div className="avatar">
                <img src={props.image} alt="imagen del usuario" />
            </div> */}
            <div className="caja">
                <div className="box">
                <img src={props.image} alt="imagen del usuario" />
                </div>
            </div>
            <h5>{props.name}</h5>

        </div>
    )
}
