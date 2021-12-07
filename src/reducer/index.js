import {
CHOOSE_USER
} from "../actions";

const initialState = {
    choosed: {}
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case CHOOSE_USER:
            return {
                ...state,
                choosed: action.payload
            }

        default: return state
    }
}
