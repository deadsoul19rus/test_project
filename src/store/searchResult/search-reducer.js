import { SET_OBJECTS_SEARCH, SET_LOADING_SEARCH, SET_ERROR, SET_SEARCH_STRING } from "./search-action";

const initialState ={
    status: 'idle', //loading | received | rejected
    error: null,
    list: [],
    searchString: '',
}

export const searchObjectsReduser = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_LOADING_SEARCH: 
            return {
                ...state,
                status: 'loading',
                error: null,
            }
        case SET_ERROR: 
            return {
                ...state,
                status: 'rejected',
                error: payload,
            }
        case SET_OBJECTS_SEARCH: 
            return {
                ...state,
                status: 'received',
                list: payload,
            }
        case SET_SEARCH_STRING: 
            return{
                ...state,
                searchString: payload,
            }
        default: 
            return state;
    }
}







