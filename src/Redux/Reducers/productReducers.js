import {
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_RESET,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LISTRECEIVE_FAIL,
    PRODUCT_LISTRECEIVE_REQUEST,
    PRODUCT_LISTRECEIVE_SUCCESS,
    PRODUCT_SINGLE_SEND_REQUEST,
    PRODUCT_SINGLE_SEND_SUCCESS,
    PRODUCT_SINGLE_SEND_FAIL
} from "../Constants/productConstants";
// PRODUCT RECEIVE LIST
export const productReceiveListReducer = (state = { productsReceive: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LISTRECEIVE_REQUEST:
            return { loadingRecieve: true, productsReceive: [] };
        case PRODUCT_LISTRECEIVE_SUCCESS:
            return {
                loadingRecieve: false,
                productsReceive: action.payload.products,
            };
        case PRODUCT_LISTRECEIVE_FAIL:
            return { loadingRecieve: true, errorReceive: action.payload };
        default:
            return state;
    }
};
// PRODUCT SEND LIST
export const productSendListReducer = (state = { productsSend: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loadingSend: true, productsSend: [] };
        case PRODUCT_LIST_SUCCESS:
            return {
                loadingSend: false,

                productsSend: action.payload.products,
            };
        case PRODUCT_LIST_FAIL:
            return { loadingSend: true, errorSend: action.payload };
        default:
            return state;
    }
};
// SINGLE SINGLE PRODUCT SEND
export const productSendSingleReducer = (
    state = { productSendSingle: {} },
    action
) => {

    switch (action.type) {
        case PRODUCT_SINGLE_SEND_REQUEST:
            return {...state, loadingSendSingle: true };
        case PRODUCT_SINGLE_SEND_SUCCESS:
            return { loadingSendSingle: false, productSendSingle: action.payload };
        case PRODUCT_SINGLE_SEND_FAIL:
            return { loadingSendSingle: true, errorSendSingle: action.payload };
        default:
            return state;
    }
};
// SINGLE PRODUCT
export const productDetailsReducer = (
    state = { product: [] },
    action
) => {

    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {...state, loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { loading: true, error: action.payload };
        default:
            return state;
    }
};

// PRODUCT REVIEW CREATE
export const productCreateReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return { loading: true };
        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true };
        case PRODUCT_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCT_CREATE_REVIEW_RESET:
            return {};
        default:
            return state;
    }
};