// import { ACTIONS } from '../actions'
import { initialState } from '../store'

export const reducer = (state = initialState.userInfo, action) => {
    const { type, payload } = action;
    switch (type) {
        case "FETCH_DATA":
            return {
                ...state,
                userInfo: payload,
            }
        default: 
            return state
    }
}