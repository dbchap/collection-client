// action types
export const ADD_LOG = 'ADD_LOG'
export const ADD_LOG_SUCCESS = 'ADD_LOG_SUCCESS'
export const LOGS_FAILURE = 'LOGS_FAILURE'
export const DELETE_LOG = 'DELETE_LOG'
export const LOADED_LOGS = 'LOADED_LOGS'
export const FETCH_LOGS = 'FETCH_LOGS'

// action creators
export function addLog(action) {
    return { type: ADD_LOG, action }
}

export function addLogSuccess(item) {
    return { type: ADD_LOG_SUCCESS, item }
}

export function logFailure(error) {
    return { type: LOGS_FAILURE, error }
}

export function deleteLog(id) {
    return { type: DELETE_LOG, id }
}

export function loadedLogs(logs) {
    return { type: LOADED_LOGS, logs }
}

export function fetchLogs() {
    return { type: FETCH_LOGS }
}