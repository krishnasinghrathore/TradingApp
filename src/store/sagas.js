import { all } from 'redux-saga/effects';

//public
import AccountSaga from './auth/register/saga';
import AuthSaga from './auth/login/saga';
import ForgetSaga from './auth/forgetpwd/saga';
import LayoutSaga from './layout/saga';
import ECommerceSaga from './ecommerce/saga';

export default function* rootSaga() {
    yield all([
        //public
        AccountSaga(),
        AuthSaga(),
        ForgetSaga(),
        LayoutSaga(),
        ECommerceSaga()
    ])
}