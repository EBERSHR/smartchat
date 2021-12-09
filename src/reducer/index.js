import {
CHOOSE_USER, GET_USERS_DATABASE
} from "../actions";

const initialState = {
    users: [],
    choosed: {}
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS_DATABASE:
            return {
                ...state,
                users: action.payload
            }

        case CHOOSE_USER:
            return {
                ...state,
                choosed: action.payload
            }

        default: return state
    }
}
