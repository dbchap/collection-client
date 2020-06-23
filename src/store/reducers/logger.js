import {
    ADD_LOG,
    ADD_LOG_SUCCESS,
    LOGS_FAILURE,
    LOADED_LOGS,
    FETCH_LOGS
} from '../actions/logger'

export const LOGS_DEFAULT_STATE = {
    loading: false,
    saving: false,
    error: '',
    items: []
}

export default function logs(state = LOGS_DEFAULT_STATE, action) {
    switch (action.type) {
        case LOADED_LOGS:
            return { ...state, logs: action.logs, loading: false }

        case FETCH_LOGS: {
            return { ...state, loading: true }
        }

        case ADD_LOG:
            return { ...state, saving: true }

        case ADD_LOG_SUCCESS:
            return {
                ...state,
                items: [action.item, ...state.items],
                saving: false
            }

        case LOGS_FAILURE:
            return { ...state, loading: false, saving: false, error: action.error }


        default:
            return state
    }
}