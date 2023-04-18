import axios from 'axios'
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { loadState, saveState } from './local-storage';


import { rootReducer } from "./root-reducer";
import * as api from '../config' //имортируем всё из сонфига, все будет лежать в объекте api

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeEnhancers(
    applyMiddleware(
        thunk.withExtraArgument({
            client: axios,
            api, 
        })
    )
))



store.subscribe(() =>{
    saveState({
        userSearch: {
            searchString: store.getState().userSearch.searchString,
            list: store.getState().userSearch.list,
        },
        pagination:{
            currentPage: store.getState().pagination.currentPage,  
            objectsPerPage: store.getState().pagination.objectsPerPage,  
        }
        
    });
  });

export {store}
