import {
CHOOSE_USER, GET_MESSAGES, GET_USERS_DATABASE, SEND_MESSAGE
} from "../actions";

const initialState = {
    users: [],
    choosed: {},
    loggedUser: {
        name: "Eber",
        id: 5 
    },
    messages:[]

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
        
        case SEND_MESSAGE:
            return {
                ...state
            }    
        
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }

        default: return state
    }

}
