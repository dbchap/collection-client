import { combineReducers } from 'redux';
import collectionitems, { COLLECTIONITEMS_DEFAULT_STATE } from './reducers/collectionitems';
import logs, { LOGS_DEFAULT_STATE } from './reducers/logger';

const rootReducer = combineReducers({
    collectionitems,
    logs
});

export const DEFAULT_STATE = {
    collectionitems: COLLECTIONITEMS_DEFAULT_STATE,
    logs: LOGS_DEFAULT_STATE
};

export default rootReducer;