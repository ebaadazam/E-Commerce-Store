import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";

const initialState = {
    orders:[],
    order:null,
    loading:false,
    error:null
}

// exporting this from here and register it in the store.js
export const orderReducer = (state=initialState, action)=>{
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {...state, loading:true, error:null,};
        case CREATE_ORDER_SUCCESS:
            return {...state, loading:false, error:null, success:true, order:action.payload};
        case CREATE_ORDER_FAILURE:
            return {...state, loading:false, error:action.payload};

        case GET_ORDER_BY_ID_REQUEST:
            return {...state, loading:true, error:null,};
        case GET_ORDER_BY_ID_SUCCESS:
            return {...state, loading:false, error:null, order:action.payload};
        case GET_ORDER_BY_ID_FAILURE:
            return {...state, loading:false, error:action.payload};
            
        default:
            return state;
    }
}