import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_RESET,
    USER_DETAILS_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_VERIFICATION_PROFILE_REQUEST,
    USER_VERIFICATION_PROFILE_SUCCESS,
    USER_VERIFICATION_PROFILE_FAIL,
    USER_RATE_FAIL,
    USER_RATE_REQUEST,
    USER_RATE_RESET,
    USER_RATE_SUCCESS,
    USER_INVESTLIST_FAIL,
    USER_INVESTLIST_REQUEST,
    USER_INVESTLIST_RESET,
    USER_INVESTLIST_SUCCESS,
    INVEST_CREATE_REQUEST,
    INVEST_CREATE_SUCCESS,
    INVEST_CREATE_FAIL,
    INVEST_CREATE_RESET,
    INVEST_REFUND_REQUEST,
    INVEST_REFUND_SUCCESS,
    INVEST_REFUND_FAIL,
    INVEST_REFUND_RESET,
    PROMO_ACTIVATE_REQUEST,
    PROMO_ACTIVATE_SUCCESS,
    PROMO_ACTIVATE_FAIL,
    PROMO_ACTIVATE_RESET,
    MESSAGE_CREATE_REQUEST,
    MESSAGE_CREATE_SUCCESS,
    MESSAGE_CREATE_FAIL,
    MESSAGE_CREATE_RESET,
    MESSAGE_LIST_REQUEST,
    MESSAGE_LIST_SUCCESS,
    MESSAGE_LIST_FAIL,
    MESSAGE_LIST_RESET,
    CURRENCY_UPDATE_REQUEST,
    CURRENCY_UPDATE_SUCCESS,
    CURRENCY_UPDATE_FAIL,
    CURRENCY_UPDATE_RESET,
    ALERT_INFO_REQUEST,
    ALERT_INFO_SUCCESS,
    ALERT_INFO_FAIL,
    ALERT_INFO_RESET,
    ALERT_UPDATE_REQUEST,
    ALERT_UPDATE_SUCCESS,
    ALERT_UPDATE_FAIL,
    ALERT_UPDATE_RESET,

} from "../Constants/userContants";
import axios from "axios";
import { ORDER_LIST_MY_RESET } from "../Constants/orderConstants";
//const serverLink = "https://static.crosscourse.online"
import { serverLink } from "../../App";
import store from "../store";

// LOGIN
export const login = (email, password, token) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        };

        const { data } = await axios.post(
            `${serverLink}/api/users/login`,
            { email, password, token },
            config
        );
        console.log("login data", data);

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// LOGOUT
export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_DETAILS_RESET });
    dispatch({ type: ORDER_LIST_MY_RESET });
};

// REGISTER
export const register = (props) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            `${serverLink}/api/users`,
            props,
            config
        );
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// USER DETAILS
export const getUserDetails =
    (id, props = {}, source, needUpload = false) =>
    async (dispatch, getState) => {
        try {
            console.log(getState);
            dispatch({ type: USER_DETAILS_REQUEST });
            const {
                userLogin: { userInfo },
            } = getState();

            console.log("props", props);
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };
            console.log("config", config);
            let data;
            const getUserDetailsFromLocalStorage = localStorage.getItem(
                "userDetails"
            )
                ? JSON.parse(localStorage.getItem("userDetails"))
                : null;

            if (
                getUserDetailsFromLocalStorage &&
                getUserDetailsFromLocalStorage.data &&
                !(
                    Date.now() - getUserDetailsFromLocalStorage.timestamp >
                    getUserDetailsFromLocalStorage.ctl
                )
            ) {
                data = getUserDetailsFromLocalStorage.data;
                dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
                data = await axios.post(
                    `${serverLink}/api/users/${id}`,
                    { ...props, source },
                    config
                );
                data = data.data;
                dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
                const userInfoLocal = JSON.parse(
                    localStorage.getItem("userInfo")
                );
                localStorage.setItem(
                    "userInfo",
                    JSON.stringify({ ...userInfoLocal, _doc: data })
                );
                const setToLocalStorage = {
                    data: data,
                    timestamp: Date.now(),
                    ctl: 60000, // 2 minutes
                };
                localStorage.setItem(
                    "userDetails",
                    JSON.stringify(setToLocalStorage)
                );
            } else {
                data = await axios.post(
                    `${serverLink}/api/users/${id}`,
                    { ...props, source },
                    config
                );
                data = data.data;
                dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
                const userInfoLocal = JSON.parse(
                    localStorage.getItem("userInfo")
                );
                localStorage.setItem(
                    "userInfo",
                    JSON.stringify({ ...userInfoLocal, _doc: data })
                );
                const setToLocalStorage = {
                    data: data,
                    timestamp: Date.now(),
                    ctl: 60000,
                };
                localStorage.setItem(
                    "userDetails",
                    JSON.stringify(setToLocalStorage)
                );
            }
            //    if (
            //         needUpload ||
            //         (getUserDetailsFromLocalStorage &&
            //             getUserDetailsFromLocalStorage.data &&
            //             !(
            //                 Date.now() - getUserDetailsFromLocalStorage.timestamp >
            //                 getUserDetailsFromLocalStorage.ctl
            //             ))
            //     ) {
            //         data=getUserDetailsFromLocalStorage.data;
            //         dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
            //         data= await axios.post(
            //             `${serverLink}/api/users/${id}`,
            //             { ...props, source },
            //             config
            //         );
            //         data=data.data;
            //         dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
            //         const userInfoLocal = JSON.parse(localStorage.getItem("userInfo"));
            //         localStorage.setItem(
            //             "userInfo",
            //             JSON.stringify({ ...userInfoLocal, _doc: data })
            //         );
            //         const setToLocalStorage = {
            //             data: data,
            //             timestamp: Date.now(),
            //             ctl: 60000,
            //         };
            //         localStorage.setItem(
            //             "userDetails",
            //             JSON.stringify(setToLocalStorage)
            //         );
            //     } else {
            //         data = await axios.post(
            //             `${serverLink}/api/users/${id}`,
            //             { ...props, source },
            //             config
            //         );
            //         data = data.data;
            //     }

            // console.log(data);
            // console.log("login data", data);
            // dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
            // const userInfoLocal = JSON.parse(localStorage.getItem("userInfo"));
            // localStorage.setItem(
            //     "userInfo",
            //     JSON.stringify({ ...userInfoLocal, _doc: data })
            // );
            // const setToLocalStorage = {
            //     data: data,
            //     timestamp: Date.now(),
            //     ctl: 60000,
            // };
            // localStorage.setItem(
            //     "userDetails",
            //     JSON.stringify(setToLocalStorage)
            // );
            //  localStorage.setItem("userInfo", JSON.stringify(data));
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
            console.log("error", error);
            if (message === "Not authorized, token failed") {
                dispatch(logout());
            } else if (message === "Not authorized, no token") {
                window.location.href = "/signin";
            } else if (message.includes("'token'")) {
                dispatch(logout());
            }
            dispatch({
                type: USER_DETAILS_FAIL,
                payload: message,
            });
        }
    };

// UPDATE PROFILE
export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATE_PROFILE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.put(
            `${serverLink}/api/users/profile`,
            user,
            config
        );
        dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: message,
        });
    }
};

export const verifyUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_VERIFICATION_PROFILE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(
            `${serverLink}/api/users/kyc/verification`,
            user,
            config
        );

        dispatch({ type: USER_VERIFICATION_PROFILE_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }

        dispatch({
            type: USER_VERIFICATION_PROFILE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// USER RATE
export const getRate = () => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_RATE_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const getRateFromLocalStorage = localStorage.getItem("userRate")
            ? JSON.parse(localStorage.getItem("userRate"))
            : null;
        console.log("getRateFromLocalStorage", getRateFromLocalStorage);
        let data;
        if (
            getRateFromLocalStorage &&
            getRateFromLocalStorage.data &&
            !(
                Date.now() - getRateFromLocalStorage.timestamp >
                getRateFromLocalStorage.ctl
            )
        ) {
            console.log("get from localstorage");
            data = getRateFromLocalStorage.data;
        } else {
            console.log("get await rate");
            data = await axios.get(`${serverLink}/api/users/rate`, config);
            data = data.data;
        }
        console.log("data getRate", data);
        dispatch({ type: USER_RATE_SUCCESS, payload: data });
        const setToLocalStorage = {
            data: data,
            timestamp: Date.now(),
            ctl: 60000,
        };
        localStorage.setItem("userRate", JSON.stringify(setToLocalStorage));
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        if (message === "Not authorized, token failed") {
            dispatch(logout());
        } else if (message === "Not authorized, no token") {
            window.location.href = "/signin";
        }
        dispatch({
            type: USER_RATE_FAIL,
            payload: message,
        });
    }
};

// USER INVEST LIST
export const getInvestList = () => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_INVESTLIST_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const getInvestListFromLocalStorage = localStorage.getItem(
            "userInvestList"
        )
            ? JSON.parse(localStorage.getItem("userInvestList"))
            : null;
        let data;
        if (
            getInvestListFromLocalStorage &&
            getInvestListFromLocalStorage.data &&
            !(
                Date.now() - getInvestListFromLocalStorage.timestamp >
                getInvestListFromLocalStorage.ctl
            )
        ) {
            data = getInvestListFromLocalStorage.data;
        } else {
            data = await axios.get(`${serverLink}/api/invest`, config);
            data = data.data;
        }

        dispatch({ type: USER_INVESTLIST_SUCCESS, payload: data });

        const setToLocalStorage = {
            data: data,
            timestamp: Date.now(),
            ctl: 60000,
        };
        localStorage.setItem(
            "userInvestList",
            JSON.stringify(setToLocalStorage)
        );
        //  localStorage.setItem("userInvestList",JSON.stringify(data));
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        if (message === "Not authorized, token failed") {
            dispatch(logout());
        } else if (message === "Not authorized, no token") {
            window.location.href = "/signin";
        }
        dispatch({
            type: USER_INVESTLIST_FAIL,
            payload: message,
        });
    }
};

export const createInvest = (invest) => async (dispatch, getState) => {
    try {
        dispatch({ type: INVEST_CREATE_REQUEST });

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
            `${serverLink}/api/invest`,
            invest,
            config
        );

        dispatch({ type: INVEST_CREATE_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: INVEST_CREATE_FAIL,
            payload: message,
        });
    }
};

export const refundInvest = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: INVEST_REFUND_REQUEST });

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

        const { data } = await axios.delete(
            `${serverLink}/api/invest?id=${id}`,
            config
        );

        dispatch({ type: INVEST_REFUND_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: INVEST_REFUND_FAIL,
            payload: message,
        });
    }
};

export const activatePromo = (promo) => async (dispatch, getState) => {
    try {
        dispatch({ type: PROMO_ACTIVATE_REQUEST });

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
            `${serverLink}/api/users/activepromo`,
            promo,
            config
        );

        dispatch({ type: PROMO_ACTIVATE_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: PROMO_ACTIVATE_FAIL,
            payload: message,
        });
    }
};

export const createMessage = (message) => async (dispatch, getState) => {
    try {
        dispatch({ type: MESSAGE_CREATE_REQUEST });

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
            `${serverLink}/api/message`,
            message,
            config
        );

        dispatch({ type: MESSAGE_CREATE_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: MESSAGE_CREATE_FAIL,
            payload: message,
        });
    }
};

// USER MESSAGE
export const getMessages = () => async (dispatch, getState) => {
    try {
        dispatch({ type: MESSAGE_LIST_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`${serverLink}/api/message`, config);

        dispatch({ type: MESSAGE_LIST_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        if (message === "Not authorized, token failed") {
            dispatch(logout());
        } else if (message === "Not authorized, no token") {
            window.location.href = "/signin";
        }
        dispatch({
            type: MESSAGE_LIST_FAIL,
            payload: message,
        });
    }
};

// USER MESSAGE
export const getAlert = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ALERT_INFO_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(
            `${serverLink}/api/users/popup`,
            config
        );

        dispatch({ type: ALERT_INFO_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        if (message === "Not authorized, token failed") {
            dispatch(logout());
        } else if (message === "Not authorized, no token") {
            window.location.href = "/signin";
        }
        dispatch({
            type: ALERT_INFO_FAIL,
            payload: message,
        });
    }
};

// USER MESSAGE
export const updateAlert = (props) => async (dispatch, getState) => {
    try {
        dispatch({ type: ALERT_UPDATE_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(
            `${serverLink}/api/users/popup`,
            props,
            config
        );

        dispatch({ type: ALERT_UPDATE_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        if (message === "Not authorized, token failed") {
            dispatch(logout());
        } else if (message === "Not authorized, no token") {
            window.location.href = "/signin";
        }
        dispatch({
            type: ALERT_UPDATE_FAIL,
            payload: message,
        });
    }
};

