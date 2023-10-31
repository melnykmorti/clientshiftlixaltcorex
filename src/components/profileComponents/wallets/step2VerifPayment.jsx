import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import Toast from "../../LoadingError/toast";
import { toast } from "react-toastify";
import { getRate, getUserDetails } from "../../../Redux/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Step2VerifPayment = () => {
    let { currency, network } = Object.fromEntries(
        new URLSearchParams(window.location.search)
    );
    const networkUse = network;
    const dispatch = useDispatch();
    const { loadingRate, rate, errorUserRate } = useSelector(
        (state) => state.rate
    );
    let history = useHistory();
    if (!currency) {
        history.push("/profile/deposit?currency=BTC");
        currency="BTC";
    }
    if (networkUse) {
        if (networkUse.length <= 1) {
            history.push("/profile/verification-payment-step-1?currency=BTC");
        }
    } else {
        history.push("/profile/verification-payment-step-1?currency=BTC");
    }

    const [showAdress, setShowadress] = useState(false);
    const [currencyRight, setCurrencyRight] = useState(false);
    const [selectActive, setSelectActive] = useState(false);
    const [networkShow, setNetworkShow] = useState(false);
    const [amount, setAmount] = useState(0);
    const toastId = React.useRef(null);
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    };
    const userDetails = useSelector((state) => state.userDetails);
    const { user, loadingUser } = userDetails;
    useEffect(() => {
        dispatch(getUserDetails("profile", undefined, "/profile/deposit"));
        dispatch(getRate());
    }, [dispatch]);
    useEffect(() => {
        if (!loadingUser) {
            if (!user.walletsSpot.find((item) => item.type == currency)) {
                console.log(currency, "find");
                history.push(
                    "/profile/verification-payment-step-1?currency=BTC"
                );
            } else {
                setCurrencyRight(true);
            }
            if (
                !user.walletsSpot
                    .find((item) => item.type == currency)
                    .wallets.find((item) => item.network == networkUse)
            ) {
                history.push(
                    "/profile/verification-payment-step-1?currency=BTC"
                );
            }

            if (!loadingUser && networkUse.length > 1) {
                if (
                    !(user.walletsSpot
                        .find((item) => item.type == currency)
                        .wallets.find((item) => item.network == networkUse)
                        .adress.length > 10)
                ) {
                    console.log("GET_WALLET");
                    dispatch(
                        getUserDetails(
                            "profile",
                            {
                                action: "GET_WALLET",
                                network: networkUse,
                                currency,
                            },
                            undefined,true
                        )
                    );
                }
            }
        }
    }, [dispatch, user]);

    useEffect(() => {}, [dispatch, userDetails]);

    const copyThisAddress = (text) => {
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.success(
                "Successfully copied!",
                Toastobjects
            );
        }
    };

    useEffect(() => {
        if (!loadingRate && !loadingUser && networkUse && currency) {
            const reqAmount = user.requiredDepAmount;
            const coinId = user.walletsSpot.find(
                (item) => item.type == currency
            ).id;
            const coinPrice = rate.find(
                (item) => item.coinName == coinId
            ).price;
            setAmount((reqAmount / coinPrice).toFixed(8));
        }
    }, [dispatch, rate]);
    console.log("reqamount", amount);

    const havePaidHandler = (e) => {
        e.preventDefault();
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.error(
                "Transaction not found for identification",
                Toastobjects
            );
        }
    };

    return (
        <React.Fragment>
            <div className="webp other" style={{ backgroundColor: "#EAECEF" }}>
                <Toast />
                <main className="main">
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
                                        Verification payment process
                                    </div>
                                    <div className="top-line__des">
                                        Follow easy 3-step procedure to unfreeze
                                        your account funds
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="main__box step-verification-root">
                        <section className="step-verification">
                            <div className="step-verification__block step-verification__block-one">
                                <svg
                                    width={228}
                                    height={56}
                                    viewBox="0 0 228 56"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <mask
                                        id="path-1-inside-1_468_12574"
                                        fill="white"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0 5C0 2.23858 2.23858 0 5 0H209.098C210.893 0 212.549 0.96143 213.44 2.51931L226.866 26.0154C227.569 27.2452 227.569 28.7548 226.866 29.9846L213.44 53.4807C212.549 55.0386 210.893 56 209.098 56H5C2.23858 56 0 53.7614 0 51V5Z"
                                        />
                                    </mask>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0 5C0 2.23858 2.23858 0 5 0H209.098C210.893 0 212.549 0.96143 213.44 2.51931L226.866 26.0154C227.569 27.2452 227.569 28.7548 226.866 29.9846L213.44 53.4807C212.549 55.0386 210.893 56 209.098 56H5C2.23858 56 0 53.7614 0 51V5Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M226.866 26.0154L227.734 25.5193L227.734 25.5193L226.866 26.0154ZM226.866 29.9846L227.734 30.4807L227.734 30.4807L226.866 29.9846ZM213.44 53.4807L212.571 52.9846L213.44 53.4807ZM213.44 2.51931L212.571 3.01544L213.44 2.51931ZM209.098 -1H5V1H209.098V-1ZM212.571 3.01544L225.998 26.5116L227.734 25.5193L214.308 2.02317L212.571 3.01544ZM225.998 26.5116C226.525 27.4339 226.525 28.5661 225.998 29.4884L227.734 30.4807C228.613 28.9435 228.613 27.0565 227.734 25.5193L225.998 26.5116ZM225.998 29.4884L212.571 52.9846L214.308 53.9768L227.734 30.4807L225.998 29.4884ZM5 57H209.098V55H5V57ZM-1 5V51H1V5H-1ZM212.571 52.9846C211.859 54.2309 210.534 55 209.098 55V57C211.252 57 213.24 55.8463 214.308 53.9768L212.571 52.9846ZM5 -1C1.68629 -1 -1 1.68629 -1 5H1C1 2.79086 2.79086 1 5 1V-1ZM5 55C2.79086 55 1 53.2091 1 51H-1C-1 54.3137 1.68629 57 5 57V55ZM209.098 1C210.534 1 211.859 1.76914 212.571 3.01544L214.308 2.02317C213.24 0.153716 211.252 -1 209.098 -1V1Z"
                                        fill="#DADADA"
                                        mask="url(#path-1-inside-1_468_12574)"
                                    />
                                </svg>
                                <div className="step-verification__block-title">
                                    Step 1
                                </div>
                                <div className="step-verification__block-description">
                                    Select coin &amp; network
                                </div>
                                <div className="step-verification__block-arrow">
                                    <div className="step-verification__block-arrow-outer">
                                        <div className="step-verification__block-arrow-inner" />
                                    </div>
                                    <div className="step-verification__block-arrow-outer transparent">
                                        <div className="step-verification__block-arrow-inner" />
                                    </div>
                                </div>
                            </div>
                            <div className="step-verification__block step-verification__block-two step-verification__block-active">
                                <svg
                                    width={225}
                                    height={56}
                                    viewBox="0 0 225 56"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <mask
                                        id="path-1-inside-1_468_12534"
                                        fill="white"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M210.44 2.51931C209.549 0.96143 207.893 0 206.098 0H5.61591C1.7768 0 -0.630041 4.14741 1.27469 7.48069L11.866 26.0154C12.5687 27.2452 12.5687 28.7548 11.866 29.9846L1.27469 48.5193C-0.63004 51.8526 1.7768 56 5.61592 56H206.098C207.893 56 209.549 55.0386 210.44 53.4807L223.866 29.9846C224.569 28.7548 224.569 27.2452 223.866 26.0154L210.44 2.51931Z"
                                        />
                                    </mask>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M210.44 2.51931C209.549 0.96143 207.893 0 206.098 0H5.61591C1.7768 0 -0.630041 4.14741 1.27469 7.48069L11.866 26.0154C12.5687 27.2452 12.5687 28.7548 11.866 29.9846L1.27469 48.5193C-0.63004 51.8526 1.7768 56 5.61592 56H206.098C207.893 56 209.549 55.0386 210.44 53.4807L223.866 29.9846C224.569 28.7548 224.569 27.2452 223.866 26.0154L210.44 2.51931Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M11.866 26.0154L10.9977 26.5116L10.9977 26.5116L11.866 26.0154ZM11.866 29.9846L10.9977 29.4884L10.9977 29.4884L11.866 29.9846ZM223.866 29.9846L224.734 30.4807L224.734 30.4807L223.866 29.9846ZM223.866 26.0154L224.734 25.5193L224.734 25.5193L223.866 26.0154ZM210.44 2.51931L209.571 3.01544L210.44 2.51931ZM210.44 53.4807L209.571 52.9846L210.44 53.4807ZM5.61591 1H206.098V-1H5.61591V1ZM12.7342 25.5193L2.14294 6.98456L0.40645 7.97683L10.9977 26.5116L12.7342 25.5193ZM12.7342 30.4807C13.6126 28.9435 13.6126 27.0565 12.7342 25.5193L10.9977 26.5116C11.5248 27.4339 11.5248 28.5661 10.9977 29.4884L12.7342 30.4807ZM2.14294 49.0154L12.7342 30.4807L10.9977 29.4884L0.40645 48.0232L2.14294 49.0154ZM206.098 55H5.61592V57H206.098V55ZM222.998 29.4884L209.571 52.9846L211.308 53.9768L224.734 30.4807L222.998 29.4884ZM222.998 26.5116C223.525 27.4339 223.525 28.5661 222.998 29.4884L224.734 30.4807C225.613 28.9435 225.613 27.0565 224.734 25.5193L222.998 26.5116ZM209.571 3.01544L222.998 26.5116L224.734 25.5193L211.308 2.02317L209.571 3.01544ZM0.40645 48.0232C-1.87923 52.0231 1.00898 57 5.61592 57V55C2.54462 55 0.619151 51.6821 2.14294 49.0154L0.40645 48.0232ZM206.098 1C207.534 1 208.859 1.76914 209.571 3.01544L211.308 2.02317C210.24 0.153717 208.252 -1 206.098 -1V1ZM206.098 57C208.252 57 210.24 55.8463 211.308 53.9768L209.571 52.9846C208.859 54.2309 207.534 55 206.098 55V57ZM5.61591 -1C1.00897 -1 -1.87923 3.97689 0.40645 7.97683L2.14294 6.98456C0.619149 4.31793 2.54462 1 5.61591 1V-1Z"
                                        fill="#DADADA"
                                        mask="url(#path-1-inside-1_468_12534)"
                                    />
                                </svg>
                                <div className="step-verification__block-title">
                                    Step 2
                                </div>
                                <div className="step-verification__block-description">
                                    Copy address &amp; amount
                                </div>
                                <div className="step-verification__block-arrow">
                                    <div className="step-verification__block-arrow-outer">
                                        <div className="step-verification__block-arrow-inner" />
                                    </div>
                                </div>
                            </div>
                            <div className="step-verification__block step-verification__block-three">
                                <svg
                                    width={213}
                                    height={56}
                                    viewBox="0 0 213 56"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <mask
                                        id="path-1-inside-1_467_12758"
                                        fill="white"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M1.30507 7.51287C-0.632657 4.17956 1.77213 0 5.62775 0H207.609C210.37 0 212.609 2.23858 212.609 5V51C212.609 53.7614 210.37 56 207.609 56H5.62775C1.77213 56 -0.632654 51.8204 1.30508 48.4871L12.0461 30.0103C12.7686 28.7675 12.7686 27.2325 12.0461 25.9897L1.30507 7.51287Z"
                                        />
                                    </mask>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.30507 7.51287C-0.632657 4.17956 1.77213 0 5.62775 0H207.609C210.37 0 212.609 2.23858 212.609 5V51C212.609 53.7614 210.37 56 207.609 56H5.62775C1.77213 56 -0.632654 51.8204 1.30508 48.4871L12.0461 30.0103C12.7686 28.7675 12.7686 27.2325 12.0461 25.9897L1.30507 7.51287Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M12.0461 30.0103L11.1816 29.5077L11.1816 29.5077L12.0461 30.0103ZM12.0461 25.9897L11.1816 26.4923L11.1816 26.4923L12.0461 25.9897ZM1.30508 48.4871L0.440543 47.9846L1.30508 48.4871ZM1.30507 7.51287L0.440541 8.01544L1.30507 7.51287ZM207.609 -1H5.62775V1H207.609V-1ZM213.609 51V5H211.609V51H213.609ZM5.62775 57H207.609V55H5.62775V57ZM11.1816 29.5077L0.440543 47.9846L2.16961 48.9897L12.9106 30.5129L11.1816 29.5077ZM11.1816 26.4923C11.7234 27.4244 11.7234 28.5756 11.1816 29.5077L12.9106 30.5129C13.8137 28.9593 13.8137 27.0407 12.9106 25.4871L11.1816 26.4923ZM0.440541 8.01544L11.1816 26.4923L12.9106 25.4871L2.16961 7.0103L0.440541 8.01544ZM5.62775 55C2.54326 55 0.619425 51.6563 2.16961 48.9897L0.440543 47.9846C-1.88473 51.9845 1.00101 57 5.62775 57V55ZM211.609 51C211.609 53.2091 209.818 55 207.609 55V57C210.922 57 213.609 54.3137 213.609 51H211.609ZM5.62775 -1C1.00101 -1 -1.88474 4.01547 0.440541 8.01544L2.16961 7.0103C0.619424 4.34365 2.54325 1 5.62775 1V-1ZM207.609 1C209.818 1 211.609 2.79086 211.609 5H213.609C213.609 1.68629 210.922 -1 207.609 -1V1Z"
                                        fill="#DADADA"
                                        mask="url(#path-1-inside-1_467_12758)"
                                    />
                                </svg>
                                <div className="step-verification__block-title">
                                    Step 3
                                </div>
                                <div className="step-verification__block-description">
                                    Wait for confirmation
                                </div>
                            </div>
                        </section>
                        <section className="form-coins verification verification-step-two">
                            <div className="form-coins__container">
                                <div className="form-coins__left">
                                    <div className="step">
                                        <div className="step__number">3</div>
                                        <div className="step__wrapper">
                                            <div className="step__title">
                                                Send the indicated amount to the
                                                address below
                                            </div>
                                            <div className="step__description">
                                                Be careful when entering
                                                transfer details
                                            </div>
                                            <CopyToClipboard
                                                text={amount}
                                                onCopy={copyThisAddress}
                                            >
                                                <div className="input__01-box copy amount">
                                                    <label className="input__01-copyText">
                                                        <div className="input__01-amount">
                                                            {!loadingUser &&
                                                            currencyRight
                                                                ? user.walletsSpot.find(
                                                                      (item) =>
                                                                          item.type ==
                                                                          currency
                                                                  ).fakeName
                                                                : null}{" "}
                                                            ({" "}
                                                            {!loadingUser &&
                                                            currencyRight
                                                                ? user.walletsSpot.find(
                                                                      (item) =>
                                                                          item.type ==
                                                                          currency
                                                                  ).userType
                                                                : null}
                                                            )
                                                        </div>
                                                        <input
                                                            id="verify_amount_input"
                                                            className="input__01 input-address-verification-step-two-amount"
                                                            type="text"
                                                            value={amount}
                                                            disabled
                                                        />
                                                        <button
                                                            className="input__01-copyBtn"
                                                            id="copy_amount"
                                                        >
                                                            <svg
                                                                width={20}
                                                                height={19}
                                                                viewBox="0 0 20 19"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M7.5 11.9058C7.5 9.53335 7.5 8.34712 8.23223 7.61008C8.96447 6.87305 10.143 6.87305 12.5 6.87305L13.3333 6.87305C15.6904 6.87305 16.8689 6.87305 17.6011 7.61008C18.3333 8.34712 18.3333 9.53336 18.3333 11.9058V12.7446C18.3333 15.1171 18.3333 16.3033 17.6011 17.0404C16.8689 17.7774 15.6904 17.7774 13.3333 17.7774H12.5C10.143 17.7774 8.96447 17.7774 8.23223 17.0404C7.5 16.3033 7.5 15.1171 7.5 12.7446L7.5 11.9058Z"
                                                                    stroke="#656E8B"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M14.1669 6.87158C14.1649 4.39118 14.1276 3.1064 13.4104 2.22668C13.2718 2.05679 13.1171 1.90102 12.9483 1.76159C12.0263 1 10.6566 1 7.91699 1C5.17742 1 3.80764 1 2.88568 1.76159C2.7169 1.90102 2.56214 2.05679 2.42362 2.22668C1.66699 3.15468 1.66699 4.53345 1.66699 7.29098C1.66699 10.0485 1.66699 11.4273 2.42362 12.3553C2.56214 12.5252 2.7169 12.6809 2.88568 12.8204C3.75967 13.5423 5.03608 13.5799 7.50033 13.5819"
                                                                    stroke="#656E8B"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </label>
                                                </div>
                                            </CopyToClipboard>
                                            <CopyToClipboard
                                                onCopy={copyThisAddress}
                                                text={
                                                    !loadingUser
                                                        ? user.walletsSpot
                                                              .find(
                                                                  (item) =>
                                                                      item.type ==
                                                                      currency
                                                              )
                                                              .wallets.find(
                                                                  (item) =>
                                                                      item.network ==
                                                                      networkUse
                                                              ).adress
                                                        : null
                                                }
                                            >
                                                <div className="input__01-box copy address">
                                                    <label className="input__01-copyText">
                                                        <input
                                                            id="verify_address_input"
                                                            className="input__01"
                                                            type="text"
                                                            defaultValue={
                                                                !loadingUser
                                                                    ? user.walletsSpot
                                                                          .find(
                                                                              (
                                                                                  item
                                                                              ) =>
                                                                                  item.type ==
                                                                                  currency
                                                                          )
                                                                          .wallets.find(
                                                                              (
                                                                                  item
                                                                              ) =>
                                                                                  item.network ==
                                                                                  networkUse
                                                                          )
                                                                          .adress
                                                                    : null
                                                            }
                                                            disabled
                                                        />
                                                        <button
                                                            className="input__01-copyBtn"
                                                            id="copy_address"
                                                        >
                                                            <svg
                                                                width={20}
                                                                height={19}
                                                                viewBox="0 0 20 19"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M7.5 11.9058C7.5 9.53335 7.5 8.34712 8.23223 7.61008C8.96447 6.87305 10.143 6.87305 12.5 6.87305L13.3333 6.87305C15.6904 6.87305 16.8689 6.87305 17.6011 7.61008C18.3333 8.34712 18.3333 9.53336 18.3333 11.9058V12.7446C18.3333 15.1171 18.3333 16.3033 17.6011 17.0404C16.8689 17.7774 15.6904 17.7774 13.3333 17.7774H12.5C10.143 17.7774 8.96447 17.7774 8.23223 17.0404C7.5 16.3033 7.5 15.1171 7.5 12.7446L7.5 11.9058Z"
                                                                    stroke="#656E8B"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M14.1669 6.87158C14.1649 4.39118 14.1276 3.1064 13.4104 2.22668C13.2718 2.05679 13.1171 1.90102 12.9483 1.76159C12.0263 1 10.6566 1 7.91699 1C5.17742 1 3.80764 1 2.88568 1.76159C2.7169 1.90102 2.56214 2.05679 2.42362 2.22668C1.66699 3.15468 1.66699 4.53345 1.66699 7.29098C1.66699 10.0485 1.66699 11.4273 2.42362 12.3553C2.56214 12.5252 2.7169 12.6809 2.88568 12.8204C3.75967 13.5423 5.03608 13.5799 7.50033 13.5819"
                                                                    stroke="#656E8B"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </label>
                                                </div>
                                            </CopyToClipboard>
                                        </div>
                                    </div>
                                    <div className="form-coins__buttons">
                                        <div className="form-coins__btn">
                                            <a
                                                onClick={havePaidHandler}
                                                className="buttons__01"
                                                id="verify_trans_btn"
                                            >
                                                I have paid
                                            </a>
                                        </div>
                                        <div className="form-coins__btn-two">
                                            <Link
                                                to="/profile/verification-payment-step-1"
                                                className="buttons__02"
                                            >
                                                Back
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="form-coins__alert">
                                        <div className="form-coins__alert-img">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                                    stroke="#536572"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M12 8V13"
                                                    stroke="#536572"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M11.9941 16H12.0031"
                                                    stroke="#536572"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="form-coins__alert-text">
                                            Please make sure that your deposit
                                            address is correct. Otherwise, your
                                            deposited funds will not be added to
                                            your available balance — nor will it
                                            be refunded.
                                        </div>
                                    </div>
                                </div>
                                <div className="form-coins__right">
                                    <div className="important-information">
                                        <svg
                                            width={45}
                                            height={43}
                                            viewBox="0 0 45 43"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M39.6552 1H2L44 41V4.21429V3.85714V3.5L43.6379 2.78571L43.2759 2.07143L42.9138 1.71429L42.5517 1.35714L41.8276 1H39.6552Z"
                                                fill="#68BC4A"
                                                stroke="#68BC4A"
                                            />
                                        </svg>
                                        <div className="important-information__title">
                                            Important information
                                        </div>
                                        <div className="important-information__list">
                                            <div className="important-information__item">
                                                Once the transaction is
                                                complete, funds will be
                                                transferred directly to your
                                                spot account
                                            </div>
                                            <div className="important-information__item">
                                                Your deposited funds and deposit
                                                history can be viewed under the
                                                Spot Account.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
};

export default Step2VerifPayment;
