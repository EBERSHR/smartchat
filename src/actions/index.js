import '../firebase';
import { getDatabase, ref, onValue, set } from 'firebase/database';


export const GET_USERS_DATABASE = 'GET_USERS_DATABASE';
export const CHOOSE_USER = 'CHOOSE_USER';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export const getUsersDatabase = () => {
    const database = getDatabase();

    return (dispatch) => {
        onValue(ref(database, '/otro'), (snapshot) => {
            dispatch({
                type: GET_USERS_DATABASE,
                payload: snapshot.val()
            })
        }
        )
    }
}

export const chooseUser = (userSelected) => {
    return {
        type: CHOOSE_USER,
        payload: userSelected
    }

}

export const sendMessage = (message) => {
    const date = new Date();
    return () => {
        const db = getDatabase();
        set(ref(db, `/otro/${message.to}/chat/${date}`) , {
            message
        });

    };
}