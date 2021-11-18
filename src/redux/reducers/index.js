import { SET_USER_INFO } from '../actions'
import { initialState } from '../store'

export const reducer = (state = initialState.userInfo, action) => {
    const { type, payload } = action;
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: payload,
            }
        default: 
            return state
    }
}