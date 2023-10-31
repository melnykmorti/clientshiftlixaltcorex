import {
    WITHDRAW_CREATE_REQUEST,
    WITHDRAW_CREATE_SUCCESS,
    WITHDRAW_CREATE_FAIL,
    WITHDRAW_LIST_MY_REQUEST,
    WITHDRAW_LIST_MY_SUCCESS,
    WITHDRAW_LIST_MY_FAIL,
    WITHDRAW_LIST_MY_RESET,
    WITHDRAW_CREATE_RESET,
    TRANSFER_CREATE_REQUEST,
    TRANSFER_CREATE_SUCCESS,
    TRANSFER_CREATE_FAIL,
    TRANSFER_LIST_MY_REQUEST,
    TRANSFER_LIST_MY_SUCCESS,
    TRANSFER_LIST_MY_FAIL,
    TRANSFER_LIST_MY_RESET,
    TRANSFER_CREATE_RESET,

    SWAP_LIST_MY_REQUEST,
    SWAP_LIST_MY_SUCCESS,
    SWAP_LIST_MY_FAIL,
    SWAP_LIST_MY_RESET,


    SWAP_CREATE_REQUEST,
    SWAP_CREATE_SUCCESS,
    SWAP_CREATE_FAIL,
    SWAP_CREATE_RESET,



    DEPOSIT_LIST_MY_REQUEST,
    DEPOSIT_LIST_MY_SUCCESS,
    DEPOSIT_LIST_MY_FAIL,
    DEPOSIT_LIST_MY_RESET,
} from "../Constants/withdrawConstans";

// CREATE WITHDRAW
export const withdrawCreateReducer = (state = {}, action) => {

    switch (action.type) {
        case WITHDRAW_CREATE_REQUEST:
            return { loading: true };
        case WITHDRAW_CREATE_SUCCESS:
            return { loadingCreate: false, successWithdrawCreate: true, order: action.payload };
        case WITHDRAW_CREATE_FAIL:
            return { loading: false, errorOrderCreate: action.payload };
        case WITHDRAW_CREATE_RESET:
            return {};
        default:
            return state;
    }
};




// USER WITHDRAWS
export const withdrawListMyReducer = (state = { userWithdraw: [] }, action) => {
    switch (action.type) {
        case WITHDRAW_LIST_MY_REQUEST:
            return { loadingUserWithdraw: true };
        case WITHDRAW_LIST_MY_SUCCESS:
            return { loadingUserWithdraw: false, userWithdraw: action.payload };
        case WITHDRAW_LIST_MY_FAIL:
            return { loadingUserWithdraw: false, errorUserWithdraw: action.payload };
        case WITHDRAW_LIST_MY_RESET:
            return { userWithdraw: [] };
        default:
            return state;
    }
};
//CREATE TRANSFER
export const transferCreateReducer = (state = {}, action) => {

    switch (action.type) {
        case TRANSFER_CREATE_REQUEST:
            return { loadingTransferCreate: true };
        case TRANSFER_CREATE_SUCCESS:
            return { loadingTransferCreate: false, successTransferCreate: true, order: action.payload };
        case TRANSFER_CREATE_FAIL:
            return { loadingTransferCreate: false, errorTransferCreate: action.payload };
        case TRANSFER_CREATE_RESET:
            return {};
        default:
            return state;
    }
};




// USER TRANFERS
export const transferListMyReducer = (state = { userTransfer: [] }, action) => {
    switch (action.type) {
        case TRANSFER_LIST_MY_REQUEST:
            return { loadingUserTransfer: true };
        case TRANSFER_LIST_MY_SUCCESS:
            return { loadingUserTransfer: false, userTransfer: action.payload };
        case TRANSFER_LIST_MY_FAIL:
            return { loadingUserTransfer: false, errorUserTransfer: action.payload };
        case TRANSFER_LIST_MY_RESET:
            return { userTransfer: [] };
        default:
            return state;
    }
};

// SWAP PRICE
export const swapPriceReducer = (state = { userSwap: 0 }, action) => {
    switch (action.type) {
        case SWAP_LIST_MY_REQUEST:
            return { loadingUserSwap: true };
        case SWAP_LIST_MY_SUCCESS:
            return { loadingUserSwap: false, userSwap: action.payload };
        case SWAP_LIST_MY_FAIL:
            return { loadingUserSwap: false, errorUserSwap: action.payload };
        case SWAP_LIST_MY_RESET:
            return { userSwap: [] };
        default:
            return state;
    }
};

//CREATE SWAP
export const swapCreateReducer = (state = {}, action) => {

    switch (action.type) {
        case SWAP_CREATE_REQUEST:
            return { loadingSwapCreate: true };
        case SWAP_CREATE_SUCCESS:
            return { loadingSwapCreate: false, successSwapCreate: true, swap: action.payload };
        case SWAP_CREATE_FAIL:
            return { loadingSwapCreate: false, errorSwapCreate: action.payload };
        case SWAP_CREATE_RESET:
            return {};
        default:
            return state;
    }
};


// USER DEPOSIT
export const depositListMyReducer = (state = { userDeposit: [] }, action) => {
    switch (action.type) {
        case DEPOSIT_LIST_MY_REQUEST:
            return { loadingUserDeposit: true };
        case DEPOSIT_LIST_MY_SUCCESS:
            return { loadingUserDeposit: false, userDeposit: action.payload };
        case DEPOSIT_LIST_MY_FAIL:
            return { loadingUserDeposit: false, errorUserDeposit: action.payload };
        case DEPOSIT_LIST_MY_RESET:
            return { userDeposit: [] };
        default:
            return state;
    }
};