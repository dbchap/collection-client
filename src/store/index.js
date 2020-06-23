import { combineReducers } from 'redux';
import collectionitems, { COLLECTIONITEMS_DEFAULT_STATE } from './reducers/collectionitems';

const collectionitemsReducer = combineReducers({
    collectionitems
});

export const DEFAULT_STATE = {
    collectionitems: COLLECTIONITEMS_DEFAULT_STATE
};

export default collectionitemsReducer;