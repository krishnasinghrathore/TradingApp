import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// ECommerce Redux States
import { GET_PRODUCT_CATEGORIES ,ADD_PRODUCT_CATEGORY,DELETE_PRODUCT_CATEGORY} from './actionTypes';
import { getProductCategoriesSuccess, getProductCategoriesError ,addProductCategorySuccess,addProductCategoryError,deleteProductCategorySuccess,deleteProductCategoryError} from './actions';

//Include Both Helper File with needed methods
import { getFirebaseBackend } from '../../helpers/firebase_helper';
import { get,post,DELETE } from '../../helpers/ApiHelper';
import { API_URL } from '../../helpers/ApiConst';

const fireBaseBackend = getFirebaseBackend();

function* getProductCategories({ payload: {  history } }) {
    try {
        debugger;
            const response = yield call(get, API_URL.baseUrl + API_URL.getProductCategory);
            
            if (response.data) {
                // sessionStorage.setItem("authUser", JSON.stringify(response));
                yield put(getProductCategoriesSuccess(response));
            } else {
                yield put(getProductCategoriesError(null));
                console.log("getProductCategoriesError " + "data is null");
            }
        
    } catch (error) {
        yield put(getProductCategoriesError(error));
        console.log("getProductCategoriesError " + error);
    }
}


function* addProductCategory({ payload: { productCategory,history } }) {
    debugger;
    try {
            const response = yield call(post, API_URL.baseUrl + API_URL.addProductCategoryEndPoint,{ id: 0, name: productCategory.name });
            if (response.data) {
                yield put(addProductCategorySuccess(response));
                history.push('/ecommerce-product-category');
            } else {
                yield put(addProductCategoryError(null));
                console.log("addProductCategoryError " + "data is null");
            }
        
    } catch (error) {
        yield put(addProductCategoryError(error));
        console.log("addProductCategoryError " + error);
    }
}

function* deleteProductCategory({ payload: { productCategoryId,history } }) {
    debugger;
    try {
            const response = yield call(DELETE, API_URL.baseUrl + API_URL.deleteProductCategoryEndPoint + '/' + productCategoryId );
            if (response.data) {
                yield put(deleteProductCategorySuccess(response));
                alert("Product deleted successfully");
            } else {
                yield put(deleteProductCategoryError(null));
                console.log("deleteProductCategory " + "data is null");
            }
        
    } catch (error) {
        yield put(deleteProductCategory(error));
        console.log("deleteProductCategory " + error);
    }
}
export function* watchGetProductCategories() {
    yield takeEvery(GET_PRODUCT_CATEGORIES, getProductCategories)
}

export function* watchAddProductCategory() {
    yield takeEvery(ADD_PRODUCT_CATEGORY, addProductCategory)
}
export function* watchDeleteProductCategory() {
    yield takeEvery(DELETE_PRODUCT_CATEGORY, deleteProductCategory)
}


function* eCommerceSaga() {
    yield all([fork(watchGetProductCategories),
                fork(watchAddProductCategory),
                fork(watchDeleteProductCategory)]);
}

export default eCommerceSaga;