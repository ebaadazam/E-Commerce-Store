import { GET_USER_FAILURE, LOGIN_SUCCESS, REGISTER_REQUEST } from "./ActionType"

const initialState = {
    user:null,
    isLoading:false,
    error:null,
    jwt:null
}

export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return {...state, isLoading:true, error:null}

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {...state, isLoading:true, error:null, jwt:action.payload}
        case GET_USER_SUCCESS:
            return {...state, isLoading:true, error:null, user:action.payload}

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return {...state, isLoading:false, error:null, error:action.payload}

        case LOGOUT:
            return {...initialState}







        default:
            return state
    }
}