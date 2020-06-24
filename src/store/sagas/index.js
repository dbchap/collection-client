import { call, put, takeLatest } from 'redux-saga/effects'
import {
    ADD_COLLECTIONITEM,
    DELETE_COLLECTIONITEM,
    FETCH_COLLECTIONITEMS,
    loadedCollectionitems,
    addCollectionitemSuccess,
    collectionitemsFailure
} from '../actions/collectionitems'
import { FETCH_LOGS, ADD_LOG, loadedLogs, logFailure, addLogSuccess } from '../actions/logger'

function* getAllCollectionitems() {
    try {
        const res = yield call(fetch, 'v1/collectionitems')
        const collectionitems = yield res.json()
        yield put(loadedCollectionitems(collectionitems))
    } catch (e) {
        yield put(collectionitemsFailure(e.message))
    }
}

function* getAllLogs() {
    try {
        const res = yield call(fetch, 'v1/logger')
        const logs = yield res.json()
        yield put(loadedLogs(logs))
    } catch (e) {
        yield put(logFailure(e.message))
    }
}

function* saveLog(action) {
    try {
        const options = {
            method: 'POST',
            body: JSON.stringify({ action: action.action }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }

        const res = yield call(fetch, 'v1/logger', options)
        const log = yield call([res, "json"])
        yield put(addLogSuccess(log))
    } catch (e) {
        yield put(collectionitemsFailure(e.message))
    }
}


function* saveCollectionitem(action) {
    try {
        const options = {
            method: 'POST',
            body: JSON.stringify({ columnIdx: action.columnIdx, label: action.name }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }

        const res = yield call(fetch, 'v1/collectionitems', options)
        const collectionitem = yield call([res, "json"])
        yield put(addCollectionitemSuccess(collectionitem))
    } catch (e) {
        yield put(collectionitemsFailure(e.message))
    }
}

function* deleteCollectionitem(action) {
    try {
        yield call(fetch, `v1/collectionitems/${action.id}`, { method: 'DELETE' })
    } catch (e) {
        yield put(collectionitemsFailure(e.message))
    }
}


function* rootSaga() {
    yield takeLatest(FETCH_COLLECTIONITEMS, getAllCollectionitems)
    yield takeLatest(ADD_COLLECTIONITEM, saveCollectionitem)
    yield takeLatest(DELETE_COLLECTIONITEM, deleteCollectionitem)
    yield takeLatest(FETCH_LOGS, getAllLogs)
    yield takeLatest(ADD_LOG, saveLog)
}

export default rootSaga;