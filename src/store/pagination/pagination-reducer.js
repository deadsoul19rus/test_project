import { SET_CURRENT_PAGE } from "./pagination-action"

const initialState ={
    currentPage: 1,
    objectsPerPage: 10,
}

export const paginationReduser = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: payload,
            }
        default: 
            return state;
    }
}







