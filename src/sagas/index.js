import
  {
    delay,
    take,
    takeEvery,
    call,
    put
  } from "redux-saga/effects";

export default function* rootSaga()
{
  console.log("Request Data")
  while(true){
    yield take('GET_DATA_REQUEST');
    yield call(loadData);
    yield takeEvery('ADD_PLAN',CRUD);
    yield takeEvery('DELETE_ITEM_TARGET',CRUD);
    yield takeEvery('UPDATE_PLAN',CRUD);
  }
  
}
function* loadData()
{
  yield put({
    type: "SHOW_LOADING"
  })
  yield delay(2000);
  yield put({
    type: "LOAD_DATA_TARGET"
  })
  yield put({
    type: "HIDE_LOADING"
  })
  console.log("đã cập nhật dữ liệu");
}
function* CRUD()
{
  yield call(loadData);
  console.log("alaoalo")
  yield put({
    type: "ALERT_SUCCESS"
  })
  yield delay(1000);
  yield put({
    type: "HIDE_ALERT"
  })
}

