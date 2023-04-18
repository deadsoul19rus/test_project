import {combineReducers} from 'redux';
import { searchObjectsReduser } from './searchResult/search-reducer';
import { paginationReduser } from './pagination/pagination-reducer';

export const rootReducer = combineReducers ({
    userSearch: searchObjectsReduser,
    pagination: paginationReduser,
});