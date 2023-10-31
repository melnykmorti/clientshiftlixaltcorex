import {
    WITHDRAW_CREATE_REQUEST,
    WITHDRAW_CREATE_SUCCESS,
    WITHDRAW_CREATE_FAIL,
    WITHDRAW_LIST_MY_REQUEST,
    WITHDRAW_LIST_MY_SUCCESS,
    WITHDRAW_LIST_MY_FAIL,
    TRANSFER_CREATE_REQUEST,
    TRANSFER_CREATE_SUCCESS,
    TRANSFER_CREATE_FAIL,
    TRANSFER_LIST_MY_REQUEST,
    TRANSFER_LIST_MY_SUCCESS,
    TRANSFER_LIST_MY_FAIL,
    SWAP_LIST_MY_REQUEST,
    SWAP_LIST_MY_SUCCESS,
    SWAP_LIST_MY_FAIL,
    SWAP_CREATE_REQUEST,
    SWAP_CREATE_SUCCESS,
    SWAP_CREATE_FAIL,
    DEPOSIT_LIST_MY_REQUEST,
    DEPOSIT_LIST_MY_SUCCESS,
    DEPOSIT_LIST_MY_FAIL,
} from "../Constants/withdrawConstans";
import axios from "axios";
import { logout } from "./userActions";
//const serverLink = "https://static.crosscourse.online"
import { serverLink } from "../../App";
// CREATE WITHDRAW
export const createWithdraw = (withdraw) => async (dispatch, getState) => {
    try {
        dispatch({ type: WITHDRAW_CREATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();
        console.log(userInfo);
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(
            `${serverLink}/api/withdraw`,
            withdraw,
            config
        );

        dispatch({ type: WITHDRAW_CREATE_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: WITHDRAW_CREATE_FAIL,
            payload: message,
        });
    }
};

// USER WITHDRAW
export const listMyWithdraw = (symbol) => async (dispatch, getState) => {
    try {
        dispatch({ type: WITHDRAW_LIST_MY_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        console.log(symbol);
        const { data } = await axios.get(
            `${serverLink}/api/withdraw/${symbol}`,
            config
        );
        dispatch({ type: WITHDRAW_LIST_MY_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: WITHDRAW_LIST_MY_FAIL,
            payload: message,
        });
    }
};
// CREATE TRANSFER
export const createTransfer = (transfer) => async (dispatch, getState) => {
    try {
        dispatch({ type: TRANSFER_CREATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();
        console.log(userInfo);
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        console.log(transfer);
        const { data } = await axios.post(
            `${serverLink}/api/transfer`,
            transfer,
            config
        );

        dispatch({ type: TRANSFER_CREATE_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: TRANSFER_CREATE_FAIL,
            payload: message,
        });
    }
};

// USER TRANSFER
export const listMyTransfer = () => async (dispatch, getState) => {
    try {
        dispatch({ type: TRANSFER_LIST_MY_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(
            `${serverLink}/api/transfer/transfers`,
            config
        );
        dispatch({ type: TRANSFER_LIST_MY_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: TRANSFER_LIST_MY_FAIL,
            payload: message,
        });
    }
};

// SWAP PRICE
export const getSwapPrice = (from, to) => async (dispatch, getState) => {
    try {
        dispatch({ type: SWAP_LIST_MY_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(
            `${serverLink}/api/users/swap/rate?from=${from}&to=${to}`,
            config
        );
        dispatch({ type: SWAP_LIST_MY_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: SWAP_LIST_MY_FAIL,
            payload: message,
        });
    }
};

// CREATE SWAP
export const createSwap =
    (from, to, amountFrom) => async (dispatch, getState) => {
        try {
            dispatch({ type: SWAP_CREATE_REQUEST });

            const {
                userLogin: { userInfo },
            } = getState();
            console.log(userInfo);
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            const { data } = await axios.post(
                `${serverLink}/api/users/swap`,
                { from, to, amountFrom },
                config
            );

            dispatch({ type: SWAP_CREATE_SUCCESS, payload: data });
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
            if (message === "Not authorized, token failed") {
                dispatch(logout());
            }
            dispatch({
                type: SWAP_CREATE_FAIL,
                payload: message,
            });
        }
    };

// USER DEPOSIT
export const listMyDeposit = () => async (dispatch, getState) => {
    try {
        dispatch({ type: DEPOSIT_LIST_MY_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`${serverLink}/api/deposit/`, config);
        dispatch({ type: DEPOSIT_LIST_MY_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: DEPOSIT_LIST_MY_FAIL,
            payload: message,
        });
    }
};
