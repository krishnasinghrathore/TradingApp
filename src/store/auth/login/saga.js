import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from './actionTypes';
import { loginSuccess, logoutUserSuccess, apiError } from './actions';

//Include Both Helper File with needed methods
import { getFirebaseBackend } from '../../../helpers/firebase_helper';
import { post } from '../../../helpers/ApiHelper';
import { API_URL } from '../../../helpers/ApiConst';

const fireBaseBackend = getFirebaseBackend();

function* loginUser({ payload: { user, history } }) {
    try {
        if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
            const response = yield call(fireBaseBackend.loginUser, user.email, user.password);
            yield put(loginSuccess(response));
        }
        else {
            console.log(user)
            const response = yield call(post, API_URL.baseUrl + API_URL.loginEndPoint, { userName: user.userName, password: user.password });
            if (response.data) {
                sessionStorage.setItem("authUser", JSON.stringify(response));
                yield put(loginSuccess(response));
                yield put(apiError("error"));
                history.push('/dashboard');
            } else {
                yield put(apiError("Invalid credentials"));
            }
        }
    } catch (error) {
        yield put(apiError(error));
    }
}

function* logoutUser({ payload: { history } }) {
    try {
        sessionStorage.removeItem("authUser");

        if (process.env.REACT_APP_DEFAULTAUTH === 'firebase') {
            const response = yield call(fireBaseBackend.logout);
            yield put(logoutUserSuccess(response));
        }
        history.push('/login');
    } catch (error) {
        yield put(apiError(error));
    }
}


export function* watchUserLogin() {
    yield takeEvery(LOGIN_USER, loginUser)
}

export function* watchUserLogout() {
    yield takeEvery(LOGOUT_USER, logoutUser)
}

function* authSaga() {
    yield all([
        fork(watchUserLogin),
        fork(watchUserLogout),
    ]);
}

export default authSaga;