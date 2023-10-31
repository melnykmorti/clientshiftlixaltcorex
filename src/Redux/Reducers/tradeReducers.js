import {
    TRADE_CREATE_REQUEST,
    TRADE_CREATE_SUCCESS,
    TRADE_CREATE_FAIL,
    TRADE_CREATE_RESET,
    TRADE_LIST_MY_REQUEST,
    TRADE_LIST_MY_SUCCESS,
    TRADE_LIST_MY_FAIL,
    TRADE_LIST_MY_RESET,
    TRADE_LIST_MY_UPDATE,
    TICKER_LIST_REQUEST,
    TICKER_LIST_SUCCESS,
    TICKER_LIST_FAIL,
    TICKER_LIST_RESET,
} from "../Constants/tradeConstants";
import { useDispatch, useSelector } from "react-redux";
// CREATE ORDER
export const tradeCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case TRADE_CREATE_REQUEST:
            return { loading: true };
        case TRADE_CREATE_SUCCESS:
            return {
                loadingCreate: false,
                successTradeCreate: true,
                order: action.payload,
            };
        case TRADE_CREATE_FAIL:
            return { loading: false, errorOrderCreate: action.payload };
        case TRADE_CREATE_RESET:
            return {};

        default:
            return state;
    }
};

// USER ORDERS
export const tradeListMyReducer = (state = { userTrade: [] }, action) => {
    switch (action.type) {
        case TRADE_LIST_MY_REQUEST:
            return { loadingUserTrade: true };
        case TRADE_LIST_MY_SUCCESS:
            return { loadingUserTrade: false, userTrade: action.payload };
        case TRADE_LIST_MY_FAIL:
            return { loadingUserTrade: false, errorUserTrade: action.payload };
        case TRADE_LIST_MY_RESET:
            return { userTrade: [] };
        case TRADE_LIST_MY_UPDATE:
            return { loadingUserTrade: false, userTrade: action.payload };

        default:
            return state;
    }
};

// USER RATE
export const tickerListReducer = (
    state = { loadingTickersList: true },
    action
) => {
    switch (action.type) {
        case TICKER_LIST_REQUEST:
            return { ...state, loadingTickersList: true };
        case TICKER_LIST_SUCCESS:
            return { loadingTickersList: false, tickersList: action.payload };
        case TICKER_LIST_FAIL:
            return {
                loadingTickersList: false,
                errorTickersList: action.payload,
            };
        case TICKER_LIST_RESET:
            return { tickersList: [] };
        default:
            return state;
    }
};
