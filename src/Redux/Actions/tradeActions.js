import {
    TRADE_CREATE_REQUEST,
    TRADE_CREATE_SUCCESS,
    TRADE_CREATE_FAIL,
    TRADE_LIST_MY_REQUEST,
    TRADE_LIST_MY_SUCCESS,
    TRADE_LIST_MY_FAIL,
    TRADE_LIST_MY_UPDATE,
    TICKER_LIST_REQUEST,
    TICKER_LIST_SUCCESS,
    TICKER_LIST_FAIL,
    TICKER_LIST_RESET,
} from "../Constants/tradeConstants";
import axios from "axios";
import { logout } from "./userActions";
//const serverLink = "https://static.crosscourse.online"
import { serverLink } from "../../App";
// CREATE TRADE
export const createTrade = (trade) => async (dispatch, getState) => {
    try {
        dispatch({ type: TRADE_CREATE_REQUEST });

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
            `${serverLink}/api/trade`,
            trade,
            config
        );

        dispatch({ type: TRADE_CREATE_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        console.log(error);
        dispatch({
            type: TRADE_CREATE_FAIL,
            payload: message,
        });
    }
};

// USER TRADE
export const listMyTrade = (pair, type) => async (dispatch, getState) => {
    try {
        if (type == "Take") {
            dispatch({ type: TRADE_LIST_MY_REQUEST });

            const {
                userLogin: { userInfo },
            } = getState();

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            const { data } = await axios.get(
                `${serverLink}/api/trade/${pair}`,
                config
            );
            dispatch({ type: TRADE_LIST_MY_SUCCESS, payload: data });
        } else if (type == "Reload") {
            const {
                userLogin: { userInfo },
            } = getState();

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            const { data } = await axios.get(
                `${serverLink}/api/trade/${pair}`,
                config
            );
            dispatch({ type: TRADE_LIST_MY_UPDATE, payload: data });
        }
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: TRADE_LIST_MY_FAIL,
            payload: message,
        });
    }
};

// USER TRADE
export const listTickers = () => async (dispatch, getState) => {
    try {
        console.log("get ticker list");
        dispatch({ type: TICKER_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        
        console.log(localStorage.getItem("listTickers"));
        const listTickersFromLocalStorage = localStorage.getItem("listTickers")
            ? JSON.parse(localStorage.getItem("listTickers"))
            : null;
        console.log("listTickersFromLocalStorage", listTickersFromLocalStorage);
        if (listTickersFromLocalStorage) {
            console.log("listTickersFromLocalStorage");
            dispatch({
                type: TICKER_LIST_SUCCESS,
                payload: listTickersFromLocalStorage,
            });
        }
        console.log("here trades");
        const { data } = await axios.get(
            `${serverLink}/api/trade/get/tickers`,
            config
        );
        console.log(data);
        dispatch({ type: TICKER_LIST_SUCCESS, payload: data });

        localStorage.setItem("listTickers", JSON.stringify(data));
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: TICKER_LIST_FAIL,
            payload: message,
        });
    }
};
