import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    productCreateReviewReducer,
    productDetailsReducer,
    productReceiveListReducer,
    productSendListReducer,
    productSendSingleReducer,
} from "./Reducers/productReducers";
import { cartReducer } from "./Reducers/cartReducers";
import {
    getAlertReducer,
    getInvestListReducer,
    getMessagesReducer,
    investCreateReducer,
    investRefundReducer,
    messageCreateReducer,
    promoactivateReducer,
    updateAlertReducer,
    userDetailsReducer,
    userLoginReducer,
    userRateReducer,
    userRegisterReducer,
    userUpdateProfileReducer,
    userVerificationProfileReducer,
} from "./Reducers/userReducers";
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderListMyReducer,
    orderPayReducer,
} from "./Reducers/orderReducres";
import {
    withdrawCreateReducer,
    withdrawListMyReducer,
    transferCreateReducer,
    transferListMyReducer,
    swapPriceReducer,
    swapCreateReducer,
    depositListMyReducer,
} from "./Reducers/withdrawReducers";
import {
    tickerListReducer,
    tradeCreateReducer,
    tradeListMyReducer,
} from "./Reducers/tradeReducers";
const reducer = combineReducers({
    productSendList: productSendListReducer,
    productSendSingleItem: productSendSingleReducer,
    productDetails: productDetailsReducer,
    productReviewCreate: productCreateReviewReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    withdrawCreate: withdrawCreateReducer,
    withdrawListMy: withdrawListMyReducer,
    transferCreate: transferCreateReducer,
    transferListMy: transferListMyReducer,
    tradeCreate: tradeCreateReducer,
    tradeListMy: tradeListMyReducer,
    userVerificationProfile: userVerificationProfileReducer,
    swapPrice: swapPriceReducer,
    swapCreate: swapCreateReducer,
    rate: userRateReducer,
    depositListMy: depositListMyReducer,
    investListMy: getInvestListReducer,
    investCreate: investCreateReducer,
    investRefund: investRefundReducer,
    tickerList: tickerListReducer,
    promoActivateData: promoactivateReducer,
    messagesList: getMessagesReducer,
    messageCreate: messageCreateReducer,
    alertUpdate: updateAlertReducer,
    alertData: getAlertReducer,
   
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const userRateFromLocalStorage = localStorage.getItem("userRate")
    ? JSON.parse(localStorage.getItem("userRate"))
    : null;

// shippingAddress
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
    ? JSON.parse(localStorage.getItem("shippingAddress"))
    : {};

const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage,
        shippingAddress: shippingAddressFromLocalStorage,
    },
    userLogin: { userInfo: userInfoFromLocalStorage },
    
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
