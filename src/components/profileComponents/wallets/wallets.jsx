import React, { useState, useEffect } from "react";
import headerProfile from "../headerProfile";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductSend } from "../../../Redux/Actions/productActions";
import { getInvestList, getRate } from "../../../Redux/Actions/userActions";
import uniqid from "uniqid";
import Loading from "../../LoadingError/loading";
import { getUserDetails } from "../../../Redux/Actions/userActions";
import { serverLink } from "../../../App";
import WalletInfo from "./walletInfo";
import CookiesPolicy from "../../../screens/cookiesPolicy";
import { createdAtConverter } from "../../utils";
const Wallets = () => {
    const dispatch = useDispatch();
    const productSendList = useSelector((state) => state.productSendList);
    const [coinsProps, setCoinsProps] = useState();
    const { loadingRate, rate, errorUserRate } = useSelector(
        (state) => state.rate
    );
    console.log(rate);
    const [queryString, setQuery] = useState("");
    const [hidePrice, setHidePrice] = useState(false);
    const [hideZeroBalances, setHideZeroBalances] = useState(false);
    console.log("hideZeroBalances", hideZeroBalances);
    const { loadingSend, productsSend, errorSend } = productSendList;

    const userDetails = useSelector((state) => state.userDetails);
    const { user, loadingUser } = userDetails;
    useEffect(() => {
        dispatch(listProductSend());
        dispatch(getUserDetails("profile", undefined, "/profile/wallet"));
        dispatch(getRate());
    }, [dispatch]);
    console.log("rate", rate);

    if (!coinsProps && !loadingUser && !loadingRate) {
        setCoinsProps(GetCoinProps(rate, user.walletsSpot));
    }

    //optimize loading speed other pages
    useEffect(() => {
        dispatch(getInvestList());
    }, [dispatch]);
    return (
        <main className="main wallet-overview other webp">
            <section className="top-line">
                <div className="top-line__box">
                    <div className="top-line__left">
                        <div className="top-line__img">
                            <svg
                                width={59}
                                height={45}
                                viewBox="0 0 59 45"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    x1="52.4746"
                                    y1="8.35617"
                                    x2="31.3562"
                                    y2="38.5254"
                                    stroke="#FF5B5B"
                                    strokeWidth={12}
                                    strokeLinecap="round"
                                />
                                <line
                                    x1="29.4746"
                                    y1="8.35617"
                                    x2="8.35616"
                                    y2="38.5254"
                                    stroke="#7044EE"
                                    strokeWidth={12}
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <div className="top-line__content">
                            <div className="top-line__title">
                                Wallet overview
                            </div>
                            <div className="top-line__des">
                                Manage your digital assets
                            </div>
                        </div>
                    </div>
                    <div className="top-line__menu">
                        <a href="deposit" className="top-line__menu-btn">
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.8851 12.8652H7.71838"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M9.80164 10.8315V14.9982"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.5502 2.09828L10.5252 2.15662L8.10855 7.76495H5.73355C5.16688 7.76495 4.62521 7.88162 4.13354 8.08995L5.59188 4.60662L5.62521 4.52328L5.68355 4.38995C5.70021 4.33995 5.71688 4.28995 5.74188 4.24828C6.83355 1.72328 8.06688 1.14828 10.5502 2.09828Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15.0419 7.93197C14.6669 7.8153 14.2669 7.7653 13.8669 7.7653H8.10852L10.5252 2.15697L10.5502 2.09863C10.6752 2.1403 10.7919 2.19863 10.9169 2.24863L12.7585 3.02363C13.7835 3.44863 14.5002 3.8903 14.9335 4.42363C15.0169 4.52363 15.0835 4.6153 15.1419 4.72363C15.2169 4.8403 15.2752 4.95697 15.3085 5.08197C15.3419 5.15697 15.3669 5.23197 15.3835 5.29863C15.6085 5.99863 15.4752 6.85697 15.0419 7.93197Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17.935 11.8318V13.4568C17.935 13.6235 17.9266 13.7901 17.9183 13.9568C17.76 16.8651 16.135 18.3318 13.0516 18.3318H6.55164C6.35164 18.3318 6.15164 18.3151 5.95997 18.2901C3.30997 18.1151 1.8933 16.6985 1.7183 14.0485C1.6933 13.8568 1.67664 13.6568 1.67664 13.4568V11.8318C1.67664 10.1568 2.6933 8.71514 4.1433 8.09014C4.6433 7.8818 5.17664 7.76514 5.7433 7.76514H13.8766C14.285 7.76514 14.685 7.82347 15.0516 7.9318C16.71 8.44014 17.935 9.99014 17.935 11.8318Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M5.59187 4.60693L4.13354 8.09027C2.68354 8.71527 1.66687 10.1569 1.66687 11.8319V9.39027C1.66687 7.0236 3.3502 5.0486 5.59187 4.60693Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17.9324 9.38988V11.8315C17.9324 9.99821 16.7157 8.43988 15.0491 7.93988C15.4824 6.85654 15.6074 6.00654 15.3991 5.29821C15.3824 5.22321 15.3574 5.14821 15.3241 5.08154C16.8741 5.88154 17.9324 7.52321 17.9324 9.38988Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Deposit
                        </a>
                        <a href="withdraw" className="top-line__menu-btn">
                            <svg
                                width={22}
                                height={20}
                                viewBox="0 0 22 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.8851 12.8652H7.71838"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.5502 2.09828L10.5252 2.15662L8.10855 7.76495H5.73355C5.16688 7.76495 4.62521 7.88162 4.13354 8.08995L5.59188 4.60662L5.62521 4.52328L5.68355 4.38995C5.70021 4.33995 5.71688 4.28995 5.74188 4.24828C6.83355 1.72328 8.06688 1.14828 10.5502 2.09828Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15.0419 7.93197C14.6669 7.8153 14.2669 7.7653 13.8669 7.7653H8.10852L10.5252 2.15697L10.5502 2.09863C10.6752 2.1403 10.7919 2.19863 10.9169 2.24863L12.7585 3.02363C13.7835 3.44863 14.5002 3.8903 14.9335 4.42363C15.0169 4.52363 15.0835 4.6153 15.1419 4.72363C15.2169 4.8403 15.2752 4.95697 15.3085 5.08197C15.3419 5.15697 15.3669 5.23197 15.3835 5.29863C15.6085 5.99863 15.4752 6.85697 15.0419 7.93197Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17.935 11.8318V13.4568C17.935 13.6235 17.9266 13.7901 17.9183 13.9568C17.76 16.8651 16.135 18.3318 13.0516 18.3318H6.55164C6.35164 18.3318 6.15164 18.3151 5.95997 18.2901C3.30997 18.1151 1.8933 16.6985 1.7183 14.0485C1.6933 13.8568 1.67664 13.6568 1.67664 13.4568V11.8318C1.67664 10.1568 2.6933 8.71514 4.1433 8.09014C4.6433 7.8818 5.17664 7.76514 5.7433 7.76514H13.8766C14.285 7.76514 14.685 7.82347 15.0516 7.9318C16.71 8.44014 17.935 9.99014 17.935 11.8318Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M5.59187 4.60693L4.13354 8.09027C2.68354 8.71527 1.66687 10.1569 1.66687 11.8319V9.39027C1.66687 7.0236 3.3502 5.0486 5.59187 4.60693Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17.9324 9.38988V11.8315C17.9324 9.99821 16.7157 8.43988 15.0491 7.93988C15.4824 6.85654 15.6074 6.00654 15.3991 5.29821C15.3824 5.22321 15.3574 5.14821 15.3241 5.08154C16.8741 5.88154 17.9324 7.52321 17.9324 9.38988Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Withdraw
                        </a>
                        <a href="transfer" className="top-line__menu-btn">
                            <svg
                                width={22}
                                height={20}
                                viewBox="0 0 22 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.5002 18.3332H12.5002C16.6669 18.3332 18.3335 16.6665 18.3335 12.4998V7.49984C18.3335 3.33317 16.6669 1.6665 12.5002 1.6665H7.5002C3.33354 1.6665 1.66687 3.33317 1.66687 7.49984V12.4998C1.66687 16.6665 3.33354 18.3332 7.5002 18.3332Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14.292 11.5166L11.7587 14.0499"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M5.70862 11.5166H14.292"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M5.70862 8.48353L8.24195 5.9502"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14.292 8.4834H5.70862"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Transfer
                        </a>
                        <a href="transactions" className="top-line__menu-btn">
                            <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.0002 5.83317V14.1665C18.0002 16.6665 16.7502 18.3332 13.8336 18.3332H7.16691C4.25024 18.3332 3.00024 16.6665 3.00024 14.1665V5.83317C3.00024 3.33317 4.25024 1.6665 7.16691 1.6665H13.8336C16.7502 1.6665 18.0002 3.33317 18.0002 5.83317Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.5836 3.75V5.41667C12.5836 6.33333 13.3336 7.08333 14.2502 7.08333H15.9169"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.16687 10.8335H10.5002"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.16687 14.1665H13.8335"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            History
                        </a>
                    </div>
                </div>
            </section>
            <div className="main__box">
                <section className="wallet-info">
                    <div className="wallet-info__container">
                        <div className="wallet-info__balance">
                            <div className="wallet-info__balance-left">
                                <div className="wallet-info__select">
                                    <div className="wallet-info__select-selected">
                                        <span className="total_balance-tab">
                                            Total balance
                                        </span>
                                        <svg
                                            width={10}
                                            height={8}
                                            viewBox="0 0 10 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0.413105 2.6887L4.0201 6.76106C4.56324 7.37427 5.44062 7.37427 5.98376 6.76106L9.59075 2.6887C10.4681 1.69813 9.84143 0 8.60196 0H1.38797C0.1485 0 -0.464272 1.69813 0.413105 2.6887Z"
                                                fill="#404053"
                                            />
                                        </svg>
                                    </div>
                                    <div className="wallet-info__select-menu">
                                        <a
                                            className="wallet-info__select-item"
                                            href="#"
                                        >
                                            Total balance
                                        </a>
                                        <a
                                            className="wallet-info__select-item"
                                            href="#"
                                        >
                                            Spot balance
                                        </a>
                                        <a
                                            className="wallet-info__select-item"
                                            href="#"
                                        >
                                            Futures balance
                                        </a>
                                    </div>
                                </div>
                                <span className="balance__view-block">
                                    <div className="wallet-info__usd">
                                        <span>{coinsProps?coinsProps.sum:"0.00"}</span> $
                                    </div>
                                    <div className="wallet-info__convert">
                                        ~ {coinsProps?coinsProps.BTC.toFixed(8):"0.00000000"} BTC{" "}
                                    </div>
                                </span>
                                <span
                                    className="balance__view-none"
                                    style={{ display: "none" }}
                                >
                                    <div className="wallet-info__usd">
                                        <span>0</span> USD
                                    </div>
                                    <div className="wallet-info__convert">
                                        ~ 0.0000 BTC{" "}
                                    </div>
                                </span>
                            </div>
                            <div
                                className="wallet-info__balance-right"
                                style={{ padding: "0" }}
                            >
                                <span
                                    id="total_chart"
                                    style={{
                                        display: "flex",
                                        WebkitBoxAlign: "center",
                                        msFlexAlign: "center",
                                        alignItems: "center",
                                        padding: "16px 38px 16px 55px",
                                    }}
                                >
                                    <div
                                        className="wallet-info__circle"
                                        style={{ "--p1": "0%", "--p2": "0%" }}
                                    >
                                        Allocation
                                    </div>
                                    <div className="wallet-info__percentages">
                                        <div className="wallet-info__percent">
                                            BTC 0%
                                        </div>
                                        <div className="wallet-info__percent">
                                            ETH 0%
                                        </div>
                                        <div className="wallet-info__percent">
                                            Others 0%
                                        </div>
                                    </div>
                                </span>
                                <span
                                    id="futures_chart"
                                    style={{
                                        display: "none",
                                        WebkitBoxAlign: "center",
                                        msFlexAlign: "center",
                                        alignItems: "center",
                                        padding: "16px 38px 16px 55px",
                                    }}
                                >
                                    <div
                                        className="wallet-info__circle"
                                        style={{ "--p1": "0%", "--p2": "0%" }}
                                    >
                                        Wallet
                                    </div>
                                    <div className="wallet-info__percentages">
                                        <div className="wallet-info__percent">
                                            BTC 0%
                                        </div>
                                        <div className="wallet-info__percent">
                                            ETH 0%
                                        </div>
                                        <div className="wallet-info__percent">
                                            Others 0%
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="wallet-info__user">
                            <div className="wallet-info__user-left">
                                <div className="wallet-info__photo">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/profile/avatar.svg"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/profile/avatar.svg"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/profile/avatar.svg"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                            </div>
                            <div
                                className="wallet-info__user-right"
                                style={{ paddingBottom: "15px" }}
                            >
                                <div className="wallet-info__user-info">
                                    <div className="wallet-info__username">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.6282 19.8182C15.8216 20.0565 14.8682 20.1665 13.7499 20.1665H8.24991C7.13158 20.1665 6.17825 20.0565 5.37158 19.8182C5.57325 17.4349 8.02075 15.5557 10.9999 15.5557C13.9791 15.5557 16.4266 17.4349 16.6282 19.8182Z"
                                                stroke="#404053"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M13.7502 1.8335H8.25016C3.66683 1.8335 1.8335 3.66683 1.8335 8.25016V13.7502C1.8335 17.2152 2.8785 19.1127 5.37183 19.8185C5.5735 17.4352 8.021 15.556 11.0002 15.556C13.9793 15.556 16.4268 17.4352 16.6285 19.8185C19.1218 19.1127 20.1668 17.2152 20.1668 13.7502V8.25016C20.1668 3.66683 18.3335 1.8335 13.7502 1.8335ZM11.0002 12.9893C9.18516 12.9893 7.71849 11.5135 7.71849 9.69851C7.71849 7.88351 9.18516 6.41683 11.0002 6.41683C12.8152 6.41683 14.2818 7.88351 14.2818 9.69851C14.2818 11.5135 12.8152 12.9893 11.0002 12.9893Z"
                                                stroke="#404053"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M14.2816 9.69819C14.2816 11.5132 12.8149 12.989 10.9999 12.989C9.18493 12.989 7.71826 11.5132 7.71826 9.69819C7.71826 7.88319 9.18493 6.4165 10.9999 6.4165C12.8149 6.4165 14.2816 7.88319 14.2816 9.69819Z"
                                                stroke="#404053"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span>{!loadingSend?user.name:""}</span>
                                    </div>
                                    <div className="wallet-info__mail">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.466 17.426C3.346 19.3418 5.17933 20.1668 8.25016 20.1668H13.7502C18.3335 20.1668 20.1668 18.3335 20.1668 13.7502V8.25016C20.1668 3.66683 18.3335 1.8335 13.7502 1.8335H8.25016C3.66683 1.8335 1.8335 3.66683 1.8335 8.25016V13.7502"
                                                stroke="#404053"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M1.8335 11.9169H5.28016C5.97683 11.9169 6.60933 12.311 6.921 12.9344L7.73683 14.5752C8.25016 15.5835 9.16683 15.5835 9.38683 15.5835H12.6227C13.3193 15.5835 13.9518 15.1894 14.2635 14.566L15.0793 12.9252C15.391 12.3019 16.0235 11.9077 16.7202 11.9077H20.1485"
                                                stroke="#404053"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.5215 9.1665H13.2915"
                                                stroke="#404053"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8.7085 9.1665H10.1568"
                                                stroke="#404053"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9.47852 6.4165H12.531"
                                                stroke="#404053"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span>{!loadingUser?truncateString(user.email,12):null}</span>
                                    </div>
                                    <div className="wallet-info__id">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.66634 5L8.33301 17"
                                                stroke="#404053"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M13.6663 5L12.333 17"
                                                stroke="#404053"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M5.33301 9H17.333"
                                                stroke="#404053"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M4.66699 13H16.667"
                                                stroke="#404053"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 21H14C19 21 21 19 21 14V8C21 3 19 1 14 1H8C3 1 1 3 1 8V14C1 19 3 21 8 21Z"
                                                stroke="#404053"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span>ID: {!loadingUser?truncateString(user._id,8):""}</span>
                                    </div>
                                    <div className="wallet-info__last">
                                        Last activity time:
                                        <br />
                                        {!loadingUser?createdAtConverter(user.updatedAt):createdAtConverter(Date.now())}
                                    </div>
                                </div>
                                <div className="wallet-info__user-wrapper">
                                    <div
                                        className="verified-status verified-status__verified"
                                        style={{
                                            color: "#ff8a8a",
                                            border: "1px solid #ffc2c2",
                                            background: "rgb(157 10 10 / 10%)",
                                        }}
                                    >
                                        <svg
                                            width={20}
                                            height={21}
                                            viewBox="0 0 24 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.19 2.5H7.81C4.17 2.5 2 4.67 2 8.31V16.68C2 20.33 4.17 22.5 7.81 22.5H16.18C19.82 22.5 21.99 20.33 21.99 16.69V8.31C22 4.67 19.83 2.5 16.19 2.5Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M16.19 2.5H7.81C4.17 2.5 2 4.67 2 8.31V16.68C2 20.33 4.17 22.5 7.81 22.5H16.18C19.82 22.5 21.99 20.33 21.99 16.69V8.31C22 4.67 19.83 2.5 16.19 2.5ZM15.36 14.8C15.65 15.09 15.65 15.57 15.36 15.86C15.21 16.01 15.02 16.08 14.83 16.08C14.64 16.08 14.45 16.01 14.3 15.86L12 13.56L9.7 15.86C9.55 16.01 9.36 16.08 9.17 16.08C8.98 16.08 8.79 16.01 8.64 15.86C8.35 15.57 8.35 15.09 8.64 14.8L10.94 12.5L8.64 10.2C8.35 9.91 8.35 9.43 8.64 9.14C8.93 8.85 9.41 8.85 9.7 9.14L12 11.44L14.3 9.14C14.59 8.85 15.07 8.85 15.36 9.14C15.65 9.43 15.65 9.91 15.36 10.2L13.06 12.5L15.36 14.8Z"
                                                fill="#FF6B6B"
                                            />
                                        </svg>
                                        Unverified
                                    </div>
                                    <div
                                        className="verified-status verified-status__verified"
                                        style={{
                                            color: "#ff8a8a",
                                            border: "1px solid #ffc2c2",
                                            background: "rgb(157 10 10 / 10%)",
                                            marginTop: "15px",
                                        }}
                                    >
                                        <svg
                                            width={20}
                                            height={21}
                                            viewBox="0 0 24 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.19 2.5H7.81C4.17 2.5 2 4.67 2 8.31V16.68C2 20.33 4.17 22.5 7.81 22.5H16.18C19.82 22.5 21.99 20.33 21.99 16.69V8.31C22 4.67 19.83 2.5 16.19 2.5Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M16.19 2.5H7.81C4.17 2.5 2 4.67 2 8.31V16.68C2 20.33 4.17 22.5 7.81 22.5H16.18C19.82 22.5 21.99 20.33 21.99 16.69V8.31C22 4.67 19.83 2.5 16.19 2.5ZM15.36 14.8C15.65 15.09 15.65 15.57 15.36 15.86C15.21 16.01 15.02 16.08 14.83 16.08C14.64 16.08 14.45 16.01 14.3 15.86L12 13.56L9.7 15.86C9.55 16.01 9.36 16.08 9.17 16.08C8.98 16.08 8.79 16.01 8.64 15.86C8.35 15.57 8.35 15.09 8.64 14.8L10.94 12.5L8.64 10.2C8.35 9.91 8.35 9.43 8.64 9.14C8.93 8.85 9.41 8.85 9.7 9.14L12 11.44L14.3 9.14C14.59 8.85 15.07 8.85 15.36 9.14C15.65 9.43 15.65 9.91 15.36 10.2L13.06 12.5L15.36 14.8Z"
                                                fill="#FF6B6B"
                                            />
                                        </svg>
                                        Premium
                                    </div>
                                    <div
                                        className="verified-status verified-status__verified"
                                        style={{
                                            color: "#ff8a8a",
                                            border: "1px solid #ffc2c2",
                                            background: "rgb(157 10 10 / 10%)",
                                            marginTop: "15px",
                                        }}
                                    >
                                        <svg
                                            width={20}
                                            height={21}
                                            viewBox="0 0 24 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.19 2.5H7.81C4.17 2.5 2 4.67 2 8.31V16.68C2 20.33 4.17 22.5 7.81 22.5H16.18C19.82 22.5 21.99 20.33 21.99 16.69V8.31C22 4.67 19.83 2.5 16.19 2.5Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M16.19 2.5H7.81C4.17 2.5 2 4.67 2 8.31V16.68C2 20.33 4.17 22.5 7.81 22.5H16.18C19.82 22.5 21.99 20.33 21.99 16.69V8.31C22 4.67 19.83 2.5 16.19 2.5ZM15.36 14.8C15.65 15.09 15.65 15.57 15.36 15.86C15.21 16.01 15.02 16.08 14.83 16.08C14.64 16.08 14.45 16.01 14.3 15.86L12 13.56L9.7 15.86C9.55 16.01 9.36 16.08 9.17 16.08C8.98 16.08 8.79 16.01 8.64 15.86C8.35 15.57 8.35 15.09 8.64 14.8L10.94 12.5L8.64 10.2C8.35 9.91 8.35 9.43 8.64 9.14C8.93 8.85 9.41 8.85 9.7 9.14L12 11.44L14.3 9.14C14.59 8.85 15.07 8.85 15.36 9.14C15.65 9.43 15.65 9.91 15.36 10.2L13.06 12.5L15.36 14.8Z"
                                                fill="#FF6B6B"
                                            />
                                        </svg>
                                        V.I.P
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="wallet-overview__wrapper">
                    <div className="wallet-overview__search">
                        <label className="input__01-search">
                            <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.66683 14.0002C11.1646 14.0002 14.0002 11.1646 14.0002 7.66683C14.0002 4.16903 11.1646 1.3335 7.66683 1.3335C4.16903 1.3335 1.3335 4.16903 1.3335 7.66683C1.3335 11.1646 4.16903 14.0002 7.66683 14.0002Z"
                                    stroke="#191D31"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14.6668 14.6668L13.3335 13.3335"
                                    stroke="#191D31"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <input
                                className="input__01"
                                type="text"
                                placeholder="Search"
                                id="search_currency"
                            />
                        </label>
                    </div>
                    <div className="wallet-overview__checkbox">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                onclick="hideZeroBalances()"
                            />
                            <span className="checkbox__style" />
                            Hide zero balances
                        </label>
                    </div>
                </div>
                <section className="table-balance">
                    <div className="table-balance__container">
                        <div className="table-balance__wrapper">
                            <div className="table-balance__names">
                                <div className="table-balance__name table-balance__name-coin">
                                    Coin
                                </div>
                                <div className="table-balance__name table-balance__name-total">
                                    Total
                                </div>
                                <div className="table-balance__name table-balance__name-orders">
                                    In orders
                                </div>
                                <div className="table-balance__name table-balance__name-equivalent">
                                    Equivalent, USD
                                </div>
                                <div className="table-balance__name table-balance__name-actions">
                                    Actions
                                </div>
                            </div>
                            <div className="table-balance__items table-balance__block">
                                {!loadingUser?user.walletsSpot.map(item=><div className="table-balance__item"
                                key={uniqid()}>
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/btc.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Bitcoin <span>BTC</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span
                                            className="search_my_balance"
                                            style={{ color: "#404053" }}
                                        >
                                            0
                                        </span>{" "}
                                        <span>BTC</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>BTC</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a
                                            href="deposit?currency=BTC"
                                            style={{ marginRight: "10px" }}
                                        >
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=BTC">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>):null}
                                
                                
                            </div>
                            {/* <div
                                className="table-balance__items table-balance__none"
                                style={{ display: "none" }}
                            >
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/btc.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Bitcoin <span>BTC</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>BTC</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>BTC</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=BTC">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=BTC">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/eth.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Ethereum <span>ETH</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>ETH</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>ETH</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=ETH">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=ETH">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/ltc.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Litecoin <span>LTC</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>LTC</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>LTC</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=LTC">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=LTC">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/usdt.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Tether <span>USDT</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>USDT</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>USDT</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=USDT">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=USDT">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/trx.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Tron <span>TRX</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>TRX</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>TRX</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=TRX">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=TRX">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/usdc.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        USD Coin <span>USDC</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>USDC</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>USDC</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=USDC">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=USDC">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/bnb.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Binance-Coin <span>BNB</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>BNB</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>BNB</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=BNB">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=BNB">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/bch.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Bitcoin Cash <span>BCH</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>BCH</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>BCH</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=BCH">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=BCH">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/doge.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Dogecoin <span>DOGE</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>DOGE</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>DOGE</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=DOGE">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=DOGE">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/xmr.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Monero <span>XMR</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>XMR</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>XMR</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=XMR">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=XMR">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/xlm.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Stellar <span>XLM</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>XLM</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>XLM</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=XLM">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=XLM">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/xtz.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Tezos <span>XTZ</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>XTZ</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>XTZ</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=XTZ">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=XTZ">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/eos.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        EOS <span>EOS</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>EOS</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>EOS</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=EOS">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=EOS">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/shib.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        SHIBA INU <span>SHIB</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>SHIB</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>SHIB</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=SHIB">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=SHIB">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/link.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Chainlink <span>LINK</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>LINK</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>LINK</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=LINK">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=LINK">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/etc.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Ethereum Classic <span>ETC</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>ETC</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>ETC</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=ETC">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=ETC">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/xrp.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Ripple <span>XRP</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>XRP</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>XRP</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=XRP">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=XRP">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/ada.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Cardano <span>ADA</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>ADA</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>ADA</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=ADA">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=ADA">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/dash.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Dash <span>DASH</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>DASH</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>DASH</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=DASH">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=DASH">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/zec.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        Zcash <span>ZEC</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>ZEC</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>ZEC</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=ZEC">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=ZEC">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/sol.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        SOL <span>SOL</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>SOL</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>SOL</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=SOL">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=SOL">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/luna.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        LUNA <span>LUNA</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>LUNA</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>LUNA</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=LUNA">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=LUNA">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/ape.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        APE <span>APE</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>APE</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>APE</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=APE">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=APE">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/dot.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        DOT <span>DOT</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>DOT</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>DOT</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=DOT">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=DOT">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/matic.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        MATIC <span>MATIC</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>MATIC</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>MATIC</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=MATIC">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=MATIC">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/near.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        NEAR <span>NEAR</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>NEAR</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>NEAR</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=NEAR">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=NEAR">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/twt.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        TWT <span>TWT</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>TWT</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>TWT</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=TWT">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=TWT">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/rvn.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        RVN <span>RVN</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>RVN</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>RVN</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=RVN">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=RVN">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/woo.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        WOO <span>WOO</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>WOO</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>WOO</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=WOO">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=WOO">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/gal.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        GAL <span>GAL</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>GAL</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>GAL</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=GAL">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=GAL">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/gno.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        GNO <span>GNO</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>GNO</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>GNO</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=GNO">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=GNO">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/astr.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        ASTR <span>ASTR</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>ASTR</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>ASTR</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=ASTR">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=ASTR">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/nexo.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        NEXO <span>NEXO</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>NEXO</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>NEXO</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=NEXO">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=NEXO">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/loka.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        LOKA <span>LOKA</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>LOKA</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>LOKA</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=LOKA">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=LOKA">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/fil.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        FIL <span>FIL</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>FIL</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>FIL</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=FIL">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=FIL">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/ocean.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        OCEAN <span>OCEAN</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>OCEAN</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>OCEAN</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=OCEAN">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=OCEAN">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/comp.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        COMP <span>COMP</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>COMP</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>COMP</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=COMP">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=COMP">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/tomo.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        TOMO <span>TOMO</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>TOMO</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>TOMO</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=TOMO">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=TOMO">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/key.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        KEY <span>KEY</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>KEY</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>KEY</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=KEY">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=KEY">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/vite.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        VITE <span>VITE</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>VITE</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>VITE</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=VITE">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=VITE">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/bat.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        BAT <span>BAT</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>BAT</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>BAT</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=BAT">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=BAT">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/gala.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        GALA <span>GALA</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>GALA</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>GALA</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=GALA">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=GALA">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/rad.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        RAD <span>RAD</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>RAD</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>RAD</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=RAD">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=RAD">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/ankr.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        ANKR <span>ANKR</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>ANKR</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>ANKR</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=ANKR">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=ANKR">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/cfx.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        CFX <span>CFX</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>CFX</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>CFX</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=CFX">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=CFX">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/celo.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        CELO <span>CELO</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>CELO</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>CELO</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=CELO">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=CELO">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/iotx.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        IOTX <span>IOTX</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>IOTX</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>IOTX</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=IOTX">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=IOTX">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/crv.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        CRV <span>CRV</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>CRV</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>CRV</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=CRV">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=CRV">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/mith.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        MITH <span>MITH</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>MITH</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>MITH</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=MITH">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=MITH">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/celr.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        CELR <span>CELR</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>CELR</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>CELR</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=CELR">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=CELR">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/oxt.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        OXT <span>OXT</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>OXT</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>OXT</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=OXT">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=OXT">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/fio.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        FIO <span>FIO</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>FIO</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>FIO</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=FIO">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=FIO">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/scrt.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        SCRT <span>SCRT</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>SCRT</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>SCRT</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=SCRT">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=SCRT">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/audio.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        AUDIO <span>AUDIO</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>AUDIO</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>AUDIO</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=AUDIO">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=AUDIO">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/flm.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        FLM <span>FLM</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>FLM</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>FLM</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=FLM">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=FLM">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/mdx.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        MDX <span>MDX</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>MDX</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>MDX</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=MDX">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=MDX">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/qtum.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        QTUM <span>QTUM</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>QTUM</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>QTUM</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=QTUM">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=QTUM">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/bnt.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        BNT <span>BNT</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>BNT</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>BNT</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=BNT">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=BNT">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/xvs.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        XVS <span>XVS</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>XVS</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>XVS</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=XVS">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=XVS">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/bico.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        BICO <span>BICO</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>BICO</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>BICO</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=BICO">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=BICO">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/uma.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        UMA <span>UMA</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>UMA</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>UMA</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=UMA">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=UMA">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/akro.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        AKRO <span>AKRO</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>AKRO</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>AKRO</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=AKRO">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=AKRO">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/lsk.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        LSK <span>LSK</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>LSK</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>LSK</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=LSK">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=LSK">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/dock.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        DOCK <span>DOCK</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>DOCK</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>DOCK</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=DOCK">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=DOCK">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/rep.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        REP <span>REP</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>REP</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>REP</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=REP">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=REP">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/beam.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        BEAM <span>BEAM</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>BEAM</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>BEAM</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=BEAM">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=BEAM">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/voxel.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        VOXEL <span>VOXEL</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>VOXEL</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>VOXEL</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=VOXEL">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=VOXEL">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/mana.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        MANA <span>MANA</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>MANA</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>MANA</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=MANA">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=MANA">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/rare.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        RARE <span>RARE</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>RARE</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>RARE</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=RARE">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=RARE">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/adx.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        ADX <span>ADX</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>ADX</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>ADX</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=ADX">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=ADX">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/ont.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        ONT <span>ONT</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>ONT</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>ONT</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=ONT">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=ONT">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/sand.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        SAND <span>SAND</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>SAND</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>SAND</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=SAND">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=SAND">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/cocos.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        COCOS <span>COCOS</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>COCOS</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>COCOS</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=COCOS">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=COCOS">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/alice.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        ALICE <span>ALICE</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>ALICE</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>ALICE</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=ALICE">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=ALICE">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/mtl.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        MTL <span>MTL</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>MTL</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>MTL</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=MTL">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=MTL">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/wing.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        WING <span>WING</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>WING</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>WING</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=WING">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=WING">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/bake.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        BAKE <span>BAKE</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>BAKE</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>BAKE</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=BAKE">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=BAKE">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/strax.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        STRAX <span>STRAX</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>STRAX</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>STRAX</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=STRAX">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=STRAX">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/perp.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        PERP <span>PERP</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>PERP</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>PERP</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=PERP">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=PERP">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/epx.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        EPX <span>EPX</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>EPX</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>EPX</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=EPX">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=EPX">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/yfi.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        YFI <span>YFI</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>YFI</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>YFI</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=YFI">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=YFI">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/nmr.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        NMR <span>NMR</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>NMR</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>NMR</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=NMR">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=NMR">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/pyr.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        PYR <span>PYR</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>PYR</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>PYR</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=PYR">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=PYR">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/bond.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        BOND <span>BOND</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>BOND</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>BOND</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=BOND">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=BOND">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/jst.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        JST <span>JST</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>JST</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>JST</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=JST">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=JST">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/powr.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        POWR <span>POWR</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>POWR</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>POWR</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=POWR">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=POWR">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/fida.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        FIDA <span>FIDA</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>FIDA</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>FIDA</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=FIDA">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=FIDA">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/paxg.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        PAXG <span>PAXG</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>PAXG</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>PAXG</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=PAXG">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=PAXG">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                                <div className="table-balance__item">
                                    <div className="table-balance__item-coin">
                                        <img
                                            src="../assets/img/cryptoicons/chz.svg"
                                            alt=""
                                            style={{ width: "30px" }}
                                        />
                                        CHZ <span>CHZ</span>
                                    </div>
                                    <div className="table-balance__item-total">
                                        <span className="search_my_balance">
                                            0.0000
                                        </span>{" "}
                                        <span>CHZ</span>
                                    </div>
                                    <div className="table-balance__item-orders">
                                        0 <span>CHZ</span>
                                    </div>
                                    <div className="table-balance__item-equivalent">
                                        0.00 <span>USD</span>
                                    </div>
                                    <div className="table-balance__item-actions">
                                        <a href="deposit?currency=CHZ">
                                            Deposit
                                        </a>
                                        <a href="withdraw?currency=CHZ">
                                            Withdraw
                                        </a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

const GetCoinProps = (rate, wallets) => {
    console.log("getCoinProps wallet",wallets);
    var coinsPart = {};
    coinsPart = {
        ...coinsPart,
        BTC:
            wallets.find((item) => item.id == "bitcoin").balance *
            rate.find((item) => item.coinName == "bitcoin").price,
    };
    coinsPart = {
        ...coinsPart,
        ETH:
            wallets.find((item) => item.id == "ethereum").balance *
            rate.find((item) => item.coinName == "ethereum").price,
    };

    var sum = 0;
    wallets.forEach((item) => {
        if (item.id == "bitcoin" || item.id == "ethereum") return;
        sum +=
            item.balance *
            rate.find((toFind) => toFind.coinName == item.id).price;
    });
    coinsPart = {
        ...coinsPart,
        OTHER: sum,
        sum: coinsPart.BTC + coinsPart.ETH + sum,
    };
    return coinsPart;
};

export default Wallets;

function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + "..";
    }
    return str;
}
