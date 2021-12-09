import React from 'react';
import { useSelector } from 'react-redux';

export default function UserDetail() {

    const user = useSelector(state => state.choosed)

    // const [avatar, setAvatar] = useSelector(user);

    // console.log('AVATAR:::::::', avatar)

    return (
        <div>
            <div className="userDataComponent">
                <div className="caja">
                    <div className="box">
                    {/* <img src="https://firebasestorage.googleapis.com/v0/b/henryfrontimages.appspot.com/o/files%2Fcirculo%20rojo.png?alt=media&token=d68c1c29-3512-4d7f-89ca-95ef62538132" alt="usuario" /> */}
                    <img src={user.image} alt="usuario" />
                    </div>
                </div>
                <h5></h5>

            </div>
        </div>
    )
}
