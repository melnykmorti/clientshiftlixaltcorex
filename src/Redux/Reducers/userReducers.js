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
    USER_INVESTLIST_REQUEST,
    USER_INVESTLIST_SUCCESS,
    USER_INVESTLIST_FAIL,
    USER_INVESTLIST_RESET,
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
    MESSAGE_LIST_REQUEST,
    MESSAGE_LIST_SUCCESS,
    MESSAGE_LIST_FAIL,
    MESSAGE_LIST_RESET,
    MESSAGE_CREATE_REQUEST,
    MESSAGE_CREATE_SUCCESS,
    MESSAGE_CREATE_FAIL,
    MESSAGE_CREATE_RESET,
    ALERT_INFO_REQUEST,
    ALERT_INFO_SUCCESS,
    ALERT_INFO_FAIL,
    ALERT_INFO_RESET,
    ALERT_UPDATE_REQUEST,
ALERT_UPDATE_SUCCESS,
ALERT_UPDATE_FAIL,
ALERT_UPDATE_RESET,

} from "../Constants/userContants";

// LOGIN
export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

// REGISTER
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// USER DETAILS
export const userDetailsReducer = (
    state = { user: {}, loadingUser: true },
    action
) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loadingUser: true };
        case USER_DETAILS_SUCCESS:
            return { loadingUser: false, user: action.payload };
        case USER_DETAILS_FAIL:
            return { loadingUser: false, errorUserDetails: action.payload };
        case USER_DETAILS_RESET:
            return { user: {} };
        default:
            return state;
    }
};

// UPDATE PROFILE
export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return { loadingUpdate: true };
        case USER_UPDATE_PROFILE_SUCCESS:
            return {
                loadingUpdate: false,
                successUpdate: true,
                userInfo: action.payload,
            };
        case USER_UPDATE_PROFILE_FAIL:
            return { loadingUpdate: false, errorUpdate: action.payload };
        default:
            return state;
    }
};

export const userVerificationProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_VERIFICATION_PROFILE_REQUEST:
            return { loadingVerification: true };
        case USER_VERIFICATION_PROFILE_SUCCESS:
            return {
                loadingVerification: false,
                successVerification: true,
                userVerificationInfo: action.payload,
            };
        case USER_VERIFICATION_PROFILE_FAIL:
            return {
                loadingVerification: false,
                errorVerification: action.payload,
            };
        default:
            return state;
    }
};

// USER RATE
export const userRateReducer = (
    state = { rate: {}, loadingRate: true },
    action
) => {
    switch (action.type) {
        case USER_RATE_REQUEST:
            return { ...state, loadingRate: true };
        case USER_RATE_SUCCESS:
            return { loadingRate: false, rate: action.payload };
        case USER_RATE_FAIL:
            return { loadingRate: false, errorUserRate: action.payload };
        case USER_RATE_RESET:
            return { rate: {} };
        default:
            return state;
    }
};

// USER RATE
export const getInvestListReducer = (
    state = { investList: {}, loadingInvestList: true },
    action
) => {
    switch (action.type) {
        case USER_INVESTLIST_REQUEST:
            return { ...state, loadingInvestList: true };
        case USER_INVESTLIST_SUCCESS:
            return { loadingInvestList: false, investList: action.payload };
        case USER_INVESTLIST_FAIL:
            return {
                loadingInvestList: false,
                errorInvestList: action.payload,
            };
        case USER_INVESTLIST_RESET:
            return { investList: {} };
        default:
            return state;
    }
};

// CREATE ORDER
export const investCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case INVEST_CREATE_REQUEST:
            return { loadingInvestCreate: true };
        case INVEST_CREATE_SUCCESS:
            return {
                loadingInvestCreate: false,
                successInvestCreate: true,
                invest: action.payload,
            };
        case INVEST_CREATE_FAIL:
            return {
                loadingInvestCreate: false,
                errorInvestCreate: action.payload,
            };
        case INVEST_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

// REFUND INVEST STAKING
export const investRefundReducer = (state = {}, action) => {
    switch (action.type) {
        case INVEST_REFUND_REQUEST:
            return { loadingInvestRefund: true };
        case INVEST_REFUND_SUCCESS:
            return {
                loadingInvestRefund: false,
                successInvestRefund: true,
                refundInvest: action.payload,
            };
        case INVEST_REFUND_FAIL:
            return {
                loadingInvestRefund: false,
                errorInvestRefund: action.payload,
            };
        case INVEST_REFUND_RESET:
            return {};
        default:
            return state;
    }
};

// REFUND INVEST STAKING
export const promoactivateReducer = (state = {}, action) => {
    switch (action.type) {
        case PROMO_ACTIVATE_REQUEST:
            return { loadingPromoActive: true };
        case PROMO_ACTIVATE_SUCCESS:
            return {
                loadingPromoActive: false,
                successPromoActive: true,
                promoActivedText: action.payload,
            };
        case PROMO_ACTIVATE_FAIL:
            return {
                loadingPromoActive: false,
                errorPromoActive: action.payload,
            };
        case PROMO_ACTIVATE_RESET:
            return {};
        default:
            return state;
    }
};

// USER RATE
export const getMessagesReducer = (
    state = { messages: [], loadingMessagesList: true },
    action
) => {
    switch (action.type) {
        case MESSAGE_LIST_REQUEST:
            return { ...state, loadingMessagesList: true };
        case MESSAGE_LIST_SUCCESS:
            return { loadingMessagesList: false, messages: action.payload };
        case MESSAGE_LIST_FAIL:
            return {
                loadingMessagesList: false,
                errorMessagesList: action.payload,
            };
        case MESSAGE_LIST_RESET:
            return { messages: {} };
        default:
            return state;
    }
};

// CREATE MESSAGE
export const messageCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case MESSAGE_CREATE_REQUEST:
            return { loadingMessageCreate: true };
        case MESSAGE_CREATE_SUCCESS:
            return {
                loadingMessageCreate: false,
                successMessageCreate: true,
                message: action.payload,
            };
        case MESSAGE_CREATE_FAIL:
            return {
                loadingMessageCreate: false,
                errorMessageCreate: action.payload,
            };
        case MESSAGE_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

// USER ALERT POPUP
export const getAlertReducer = (
    state = { alert: {},successAlertInfo:false },
    action
) => {
    switch (action.type) {
        case ALERT_INFO_REQUEST:
            return { ...state, loadingAlertInfo: true };
        case ALERT_INFO_SUCCESS:
            return { loadingAlertInfo: false, alert: action.payload,successAlertInfo:true };
        case ALERT_INFO_FAIL:
            return { loadingAlertInfo: false, errorAlertInfo: action.payload,alert:{} };
        case ALERT_INFO_RESET:
            return { alert: {},successAlertInfo:false };
        default:
            return state;
    }
};

// USER ALERT POPUP
export const updateAlertReducer = (state = {}, action) => {
    switch (action.type) {
        case ALERT_UPDATE_REQUEST:
            return { ...state, loadingAlertUpdate: true };
        case ALERT_UPDATE_SUCCESS:
            return {
                loadingAlertUpdate: false,
                successAlertUpdate: action.payload,
            };
        case ALERT_UPDATE_FAIL:
            return {
                loadingAlertUpdate: false,
                errorAlertUpdate: action.payload,
            };
        case ALERT_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};
