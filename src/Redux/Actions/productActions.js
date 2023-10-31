import axios from "axios";
import {
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_REQUEST,
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
import { logout } from "./userActions";
//const serverLink = "https://static.crosscourse.online"
import { serverLink } from "../../App";
export const listProductReceive =
    (fiatMode) =>
    async(dispatch) => {
        try {

            dispatch({ type: PRODUCT_LISTRECEIVE_REQUEST });
            const { data } = await axios.get(
                `${serverLink}/api/productsReceive?fiatMode=${fiatMode}`
            );
            dispatch({ type: PRODUCT_LISTRECEIVE_SUCCESS, payload: data });
        } catch (error) {
            dispatch({
                type: PRODUCT_LISTRECEIVE_FAIL,
                payload: error.response && error.response.data.message ?
                    error.response.data.message : error.message,
            });
        }
    };
// PRODUCT SEND LIST
export const listProductSend =
    () =>
    async(dispatch) => {
        try {

            dispatch({ type: PRODUCT_LIST_REQUEST });
            const { data } = await axios.get(
                `${serverLink}/api/productsSend`
            );
            dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
        } catch (error) {
            dispatch({
                type: PRODUCT_LIST_FAIL,
                payload: error.response && error.response.data.message ?
                    error.response.data.message : error.message,
            });
        }
    };
// PRODUCT SINGLE SEND LIST 
export const ProductSendSingle =
    (symbol) =>
    async(dispatch) => {
        try {

            dispatch({ type: PRODUCT_SINGLE_SEND_REQUEST });
            const { data } = await axios.get(
                `${serverLink}/api/productsSend/${symbol}`
            );
            dispatch({ type: PRODUCT_SINGLE_SEND_SUCCESS, payload: data });
        } catch (error) {
            dispatch({
                type: PRODUCT_SINGLE_SEND_FAIL,
                payload: error.response && error.response.data.message ?
                    error.response.data.message : error.message,
            });
        }
    };

// SINGLE PRODUCT
export const listProductDetails = (id, fiatMode) => async(dispatch) => {

    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`${serverLink}/api/products/${id}?fiatMode=${fiatMode}`);


        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        });
    }
};

// PRODUCT REVIEW CREATE
export const createProductReview =
    (productId, review) => async(dispatch, getState) => {
        try {
            dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });

            const {
                userLogin: { userInfo },
            } = getState();

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            await axios.post(`${serverLink}/api/products/${productId}/review`, review, config);
            dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS });
        } catch (error) {
            const message =
                error.response && error.response.data.message ?
                error.response.data.message :
                error.message;
            if (message === "Not authorized, token failed") {
                dispatch(logout());
            }
            dispatch({
                type: PRODUCT_CREATE_REVIEW_FAIL,
                payload: message,
            });
        }
    };