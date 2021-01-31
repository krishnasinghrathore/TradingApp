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
  
  export const getProductCategories = (history) => {
    return {
      type: GET_PRODUCT_CATEGORIES,
      payload: { history }
    };
  };
  
  export const getProductCategoriesSuccess = response => {
    return {
      type: GET_PRODUCT_CATEGORIES_SUCCESS,
      payload: response
    };
  };
  
  export const getProductCategoriesError = response => {
    return {
      type: GET_PRODUCT_CATEGORIES_ERROR,
      payload: response
    };
  };

  //ADD PRODUCT CATEGORY
  export const addProductCategory = (productCategory,history) => {
    debugger;
    return {
      type: ADD_PRODUCT_CATEGORY,
      payload: { productCategory,history }
    };
  };
  
  export const addProductCategorySuccess = response => {
    return {
      type: ADD_PRODUCT_CATEGORY_SUCCESS,
      payload: response
    };
  };
  
export const addProductCategoryError = response => {
  return {
    type: ADD_PRODUCT_CATEGORY_ERROR,
    payload: response
  };
};

//DELETE PRODUCT CATEGORY
export const deleteProductCategory = (productCategoryId,history) => {
  debugger;
  return {
    type: DELETE_PRODUCT_CATEGORY,
    payload: { productCategoryId,history }
  };
};

export const deleteProductCategorySuccess = response => {
  return {
    type: DELETE_PRODUCT_CATEGORY_SUCCESS,
    payload: response
  };
};

export const deleteProductCategoryError = response => {
return {
  type: DELETE_PRODUCT_CATEGORY_ERROR,
  payload: response
};
};  