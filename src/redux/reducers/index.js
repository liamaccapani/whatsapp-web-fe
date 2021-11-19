import { SET_USER_INFO, FETCH_DATA, SET_CHAT_INFO } from '../actions'
import { initialState } from '../store'

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: payload,
            };
            case SET_CHAT_INFO:
            return {
                ...state,
                chats: payload,
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