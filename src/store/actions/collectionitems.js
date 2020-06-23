// action types
export const ADD_COLLECTIONITEM = 'ADD_COLLECTIONITEM'
export const ADD_COLLECTIONITEM_SUCCESS = 'ADD_COLLECTIONITEM_SUCCESS'
export const COLLECTIONITEMS_FAILURE = 'COLLECTIONITEMS_FAILURE'
export const DELETE_COLLECTIONITEM = 'DELETE_COLLECTIONITEM'
export const LOADED_COLLECTIONITEMS = 'LOADED_COLLECTIONITEMS'
export const FETCH_COLLECTIONITEMS = 'FETCH_COLLECTIONITEMS'

// action creators
export function addCollectionitem(name, columnIdx) {
    return { type: ADD_COLLECTIONITEM, name, columnIdx }
}

export function addCollectionitemSuccess(item) {
    return { type: ADD_COLLECTIONITEM_SUCCESS, item }
}

export function collectionitemsFailure(error) {
    return { type: COLLECTIONITEMS_FAILURE, error }
}

export function deleteCollectionitem(id) {
    return { type: DELETE_COLLECTIONITEM, id }
}

export function loadedCollectionitems(collectionitems) {
    return { type: LOADED_COLLECTIONITEMS, collectionitems }
}

export function fetchCollectionitems() {
    return { type: FETCH_COLLECTIONITEMS }
}