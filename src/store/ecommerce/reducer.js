import {
  GET_PRODUCT_CATEGORIES,
  GET_PRODUCT_CATEGORIES_SUCCESS,
  GET_PRODUCT_CATEGORIES_ERROR,
  ADD_PRODUCT_CATEGORY,
  ADD_PRODUCT_CATEGORY_SUCCESS,
  ADD_PRODUCT_CATEGORY_ERROR,
  DELETE_PRODUCT_CATEGORY,
  DELETE_PRODUCT_CATEGORY_SUCCESS,
  DELETE_PRODUCT_CATEGORY_ERROR,
} from "./actionTypes";

const initialState = {
  loading: false,
  getProductCategorySuccessResponse: null,
  getProductCategoryError: null,
  addProductCategorySuccessResponse: null,
  addProductCategoryError: null,
  deleteProductCategorySuccessResponse: null,
  deleteProductCategoryError: null,
};

const productCategories = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case GET_PRODUCT_CATEGORIES:
      state = {
        ...state,
        getProductCategorySuccessResponse: null,
        getProductCategoryError: null
      };
      break;
    case GET_PRODUCT_CATEGORIES_SUCCESS:
      state = {
        ...state,
        getProductCategorySuccessResponse: action.payload
      };
      break;
    case GET_PRODUCT_CATEGORIES_ERROR:
      state = { ...state, getProductCategoryError: action.payload };
      break;

    //ADD PRODUCT CATEGORY
    case ADD_PRODUCT_CATEGORY:
      state = {
        ...state,
        loading: true,
        addProductCategorySuccessResponse: null,
        addProductCategoryError: null
      };
      break;
    case ADD_PRODUCT_CATEGORY_SUCCESS:
      state = {
        ...state,
        addProductCategorySuccessResponse: action.payload,
        loading: false
      }
      break;
    case ADD_PRODUCT_CATEGORY_ERROR:
      state = {
        ...state,
        addProductCategoryError: action.payload,
        loading: false
      };
      break;
      
    //DELETE PRODUCT CATEGORY
    case DELETE_PRODUCT_CATEGORY:
      state = {
        ...state,
        loading: true,
        deleteProductCategorySuccessResponse: null,
        deleteProductCategoryError: null
      };
      break;
    case DELETE_PRODUCT_CATEGORY_SUCCESS:
      state = {
        ...state,
        deleteProductCategorySuccessResponse: action.payload,
        loading: false
      }
      break;
    case DELETE_PRODUCT_CATEGORY_ERROR:
      state = {
        ...state,
        deleteProductCategoryError: action.payload,
        loading: false
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default productCategories;
