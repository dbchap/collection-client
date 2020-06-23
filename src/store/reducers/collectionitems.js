import {
    ADD_COLLECTIONITEM,
    ADD_COLLECTIONITEM_SUCCESS,
    COLLECTIONITEMS_FAILURE,
    DELETE_COLLECTIONITEM,
    LOADED_COLLECTIONITEMS,
    FETCH_COLLECTIONITEMS
} from '../actions/collectionitems'

export const COLLECTIONITEMS_DEFAULT_STATE = {
    loading: false,
    saving: false,
    error: '',
    items: []
}

export default function collectionitems(state = COLLECTIONITEMS_DEFAULT_STATE, action) {
    switch (action.type) {
        case LOADED_COLLECTIONITEMS:
            return { ...state, items: action.collectionitems, loading: false }

        case FETCH_COLLECTIONITEMS: {
            return { ...state, loading: true }
        }

        case ADD_COLLECTIONITEM:
            return { ...state, saving: true }

        case ADD_COLLECTIONITEM_SUCCESS:
            return {
                ...state,
                items: state.items.concat(action.item),
                saving: false
            }

        case COLLECTIONITEMS_FAILURE:
            return { ...state, loading: false, saving: false, error: action.error }

        case DELETE_COLLECTIONITEM:
            return {
                ...state,
                items: state.items.reduce((items, collectionitem) =>
                    collectionitem._id !== action.id ? items.concat(collectionitem) : items, []
                )
            }

        default:
            return state
    }
}