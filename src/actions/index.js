import '../firebase';
import { getDatabase, ref, onValue, set } from 'firebase/database';


export const GET_USERS_DATABASE = 'GET_USERS_DATABASE';
export const CHOOSE_USER = 'CHOOSE_USER';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const GET_MESSAGES = 'GET_MESSAGES';

const database = getDatabase();


export const getMessages = (id) => {

    return (dispatch) => {
        onValue(ref(database, `/otro/${id}/chat/`), (snapshot) => {
            dispatch({
                type: GET_MESSAGES,
                payload: snapshot.val()
            })
        })
    }
} 

export const getUsersDatabase = () => {

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
        })
        .then(() => {
            return {
                type: GET_USERS_DATABASE
            }
        })
        .catch(error => {
            console.log(error)
        })

    };
}