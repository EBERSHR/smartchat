import '../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';

export const GET_USERS_DATABASE = 'GET_USERS_DATABASE';
export const CHOOSE_USER = 'CHOOSE_USER';

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