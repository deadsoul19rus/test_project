export const SET_OBJECTS_SEARCH = 'SET_OBJECTS_SEARCH';
export const SET_LOADING_SEARCH = 'SET_LOADING_SEARCH';
export const SET_ERROR = 'SET_ERROR';
export const SET_SEARCH_STRING = 'SET_SEARCH_STRING';

export const setSearchObjects = (searchObjects) => ({
    type: SET_OBJECTS_SEARCH,
    payload: searchObjects,
})

export const setSearchString = (userSearchString) => ({
    type: SET_SEARCH_STRING,
    payload: userSearchString,
})

export const setLoading = () => ({
    type: SET_LOADING_SEARCH,
})

export const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
})

export const loadUserSearchResult = () => (dispatch, getState, {client}) => {

    const userSearchString = getState().userSearch.searchString;

    dispatch(setLoading());

    client.get(`/fir_lite_rest/api/gkn/fir_objects/${userSearchString}*`)
        .then(({data}) => dispatch(setSearchObjects(data)))
        .catch((err) => dispatch(setError(err.message)))
}

