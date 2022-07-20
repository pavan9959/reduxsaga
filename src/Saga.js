import { useDebugValue } from "react";
import { put, takeEvery } from "redux-saga/effects";


function* callFun(val){
    console.log(val,"at root asaga")
    yield put({type:"INCREMENT",payload:val.payload})
}

export function* RootSaga(val){
    yield takeEvery("inc",callFun)
}