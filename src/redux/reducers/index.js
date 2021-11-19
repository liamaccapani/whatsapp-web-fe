import { SET_USER_INFO, FETCH_DATA } from '../actions'
import { initialState } from '../store'

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: payload,
            };
            case FETCH_DATA:
                return {
                    ...state,
                    userInfo: payload
                }
        default: 
            return state
    }
}