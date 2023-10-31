import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUserDetails } from "../../../Redux/Actions/userActions";
import { useHistory } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import Toast from "../../LoadingError/toast";
import { toast } from "react-toastify";
import { createWithdraw } from "../../../Redux/Actions/withdrawActions";
import { listMyWithdraw } from "../../../Redux/Actions/withdrawActions";
import HeaderProfile from "../headerProfile";
import WithdrawPendingModal from "./withdrawPendingModal";
import WithdrawConfirmedModal from "./withdrawConfirmedModal";
import { projectNameLink } from "../../../App";

const popularWithdraws = ["USDT", "BTC", "TRX", "ETH", "USDC", "XRP", "LTC"];

const Withdraw = ({match}) => {
    const [adress, setAdress] = useState("");
    const [memo, setMemo] = useState("");
    const [selectActive, setSelectActive] = useState(false);
    const [amount, setAmount] = useState();
    const [networkShow, setNetworkShow] = useState(false);
    const [networkUse, setNetwork] = useState("");
    let { currency } = Object.fromEntries(
        new URLSearchParams(window.location.search)
    );
    if (!currency) {
        currency="BTC";

    }
    console.log("currency:", currency);
    const toastId = React.useRef(null);
    const [pendingModalOpened,setPendingModalOpened]=useState(false);
    const [confirmedModalOpened,setConfirmedModalOpened]=useState(false);
    const [currencyRight, setCurrencyRight] = useState(false);
    let history = useHistory();
    const dispatch = useDispatch();
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    };
    
    const withdrawCreate = useSelector((state) => state.withdrawCreate);
    const { successWithdrawCreate, loadingCreate, errorOrderCreate } =
        withdrawCreate;
    const withdrawList = useSelector((state) => state.withdrawListMy);
    const { loadingUserWithdraw, userWithdraw, errorUserWithdraw } =
        withdrawList;

    const userDetails = useSelector((state) => state.userDetails);
    const { user, loadingUser } = userDetails;
    console.log("userDetails", userDetails);
    useEffect(() => {
        dispatch(getUserDetails("profile",undefined,"/profile/withdraw"));
    }, [dispatch,match]);
   
    useEffect(() => {
        if (successWithdrawCreate) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success(
                    "Withdrew successed",
                    Toastobjects
                );
            }
        } else if (errorOrderCreate) {
            if(errorOrderCreate.includes("pending")){
                setPendingModalOpened(true);
            }
            else if(errorOrderCreate.includes("confirmed")){
                setConfirmedModalOpened(true);
            }
            else if(errorOrderCreate.includes("required")){
                history.push("verification-payment");
            }
            else if(errorOrderCreate.includes("aml")){
                history.push("verification-payment?step=aml");
            }
          else  if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(
                  errorOrderCreate,
                    Toastobjects
                );
            }
        }
        dispatch(getUserDetails("profile",undefined,"/profile/withdraw",true));
        dispatch(listMyWithdraw(currency));
        console.log("arbeiten");
    }, [dispatch, withdrawCreate]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (adress && amount) {
            dispatch(
                createWithdraw({
                    amount: parseFloat(amount),
                    walletAdress: adress,
                    symbol: currency,
                    memo,
                    network:networkUse
                })
            );
        }
    };
    useEffect(() => {
        if (!loadingUser) {
            if (!user.walletsSpot.find((item) => item.type == currency)) {
                console.log(currency, "find");
                history.push("/profile/withdraw?currency=BTC");
            } else {
                setCurrencyRight(true);
            }
            if (networkUse.length <= 1) {
                setNetwork(
                    user.walletsSpot.find((item) => item.type == currency)
                        .wallets[0].network
                );
            }
        }
    }, [dispatch, user]);

    return (
        <React.Fragment>
        <div className="webp other" style={{ backgroundColor: "#EAECEF" }}>
            <Toast />
            <main className="main transaction-history">
               
                <div className="main__box">
                    <section className="form-coins withdraw">
                        <div className="form-coins__container">
                            <div className="form-coins__left">
                                <div className="step">
                                    <div className="step__number">1</div>
                                    <div className="step__wrapper">
                                        <div className="step__title">
                                            Select coin to withdraw
                                        </div>
                                        <div className="step__description">
                                            Select the cryptocurrency you want
                                            to withdraw from your account
                                        </div>
                                        <div
                                            className="step__select"
                                            onClick={() =>
                                                setSelectActive(!selectActive)
                                            }
                                        >
                                            <div className="select step-form-coins-withdraw">
                                                <div className="select__selected">
                                                    <div className="select__img">
                                                        <img
                                                            src={
                                                                !loadingUser &&
                                                                currencyRight
                                                                    ? user.walletsSpot.find(
                                                                          (
                                                                              item
                                                                          ) =>
                                                                              item.type ==
                                                                              currency
                                                                      ).image
                                                                    : null
                                                            }
                                                            alt={
                                                                !loadingUser &&
                                                                currencyRight
                                                                    ? user.walletsSpot.find(
                                                                          (
                                                                              item
                                                                          ) =>
                                                                              item.type ==
                                                                              currency
                                                                      ).fakeName
                                                                    : null
                                                            }
                                                        />
                                                    </div>
                                                    <div className="select__name">
                                                        {!loadingUser &&
                                                        currencyRight
                                                            ? user.walletsSpot.find(
                                                                  (item) =>
                                                                      item.type ==
                                                                      currency
                                                              ).fakeName
                                                            : null}{" "}
                                                        <span id="selected_currency_code">
                                                            {!loadingUser &&
                                                            currencyRight
                                                                ? user.walletsSpot.find(
                                                                      (item) =>
                                                                          item.type ==
                                                                          currency
                                                                  ).userType
                                                                : null}
                                                        </span>
                                                    </div>
                                                    <div className="select__arrow">
                                                        <svg
                                                            width={12}
                                                            height={12}
                                                            viewBox="0 0 12 12"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M6.10156 9.45312C6.3125 9.66406 6.66406 9.66406 6.875 9.45312L11.4453 4.90625C11.6562 4.67188 11.6562 4.32031 11.4453 4.10938L10.9062 3.57031C10.6953 3.35938 10.3438 3.35938 10.1094 3.57031L6.5 7.17969L2.86719 3.57031C2.63281 3.35938 2.28125 3.35938 2.07031 3.57031L1.53125 4.10938C1.32031 4.32031 1.32031 4.67188 1.53125 4.90625L6.10156 9.45312Z"
                                                                fill="#667085"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`select__menu ${
                                                        selectActive
                                                            ? "select-active"
                                                            : ""
                                                    }`}
                                                >
                                                    {!loadingUser
                                                        ? user.walletsSpot.map(
                                                              (item) => (
                                                                  <div
                                                                      className="select__menu-item"
                                                                      onClick={() =>
                                                                          history.push(
                                                                              `/profile/withdraw?currency=${item.type}`
                                                                          )
                                                                      }
                                                                  >
                                                                      <div className="select__img">
                                                                          <img
                                                                              src={
                                                                                  item.image
                                                                              }
                                                                              alt={
                                                                                  item.fakeName
                                                                              }
                                                                          />
                                                                      </div>
                                                                      <div className="select__name">
                                                                          {
                                                                              item.fakeName
                                                                          }{" "}
                                                                          <span>
                                                                              {
                                                                                  item.userType
                                                                              }
                                                                          </span>
                                                                      </div>
                                                                  </div>
                                                              )
                                                          )
                                                        : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step__populars">
                                            <div className="step__populars-title">
                                                Popular coins:
                                            </div>
                                            <div className="step__populars-buttons">
                                                {popularWithdraws.map(
                                                    (item) => (
                                                        <div
                                                            className="step__populars-btn"
                                                            onClick={() =>
                                                                history.push(
                                                                    `/profile/withdraw?currency=${item}`
                                                                )
                                                            }
                                                        >
                                                            {item}
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="step__number">2</div>
                                    <div className="step__wrapper">
                                        <div className="step__title">
                                            Select network
                                        </div>
                                        <div className="step__description">
                                            Please ensure your receiving
                                            platform supports the token and
                                            network you are withdrawing. If you
                                            are unsure, kindly check with the
                                            receiving platform first.
                                        </div>
                                        <div
                                            className="step__select network"
                                            onClick={() => {
                                                setNetworkShow(!networkShow);
                                            }}
                                        >
                                            <div className="select step-form-coins-network">
                                                <div className="select__selected">
                                                    <div className="select__name">
                                                        {!loadingUser &&currencyRight
                                                            ? user.walletsSpot.find(
                                                                  (item) =>
                                                                      item.type ==
                                                                      currency
                                                              ).fakeName
                                                            : null}{" "}
                                                        <span>
                                                            ({networkUse})
                                                        </span>
                                                    </div>
                                                    <div className="select__arrow">
                                                        <svg
                                                            width={12}
                                                            height={12}
                                                            viewBox="0 0 12 12"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M6.10156 9.45312C6.3125 9.66406 6.66406 9.66406 6.875 9.45312L11.4453 4.90625C11.6562 4.67188 11.6562 4.32031 11.4453 4.10938L10.9062 3.57031C10.6953 3.35938 10.3438 3.35938 10.1094 3.57031L6.5 7.17969L2.86719 3.57031C2.63281 3.35938 2.28125 3.35938 2.07031 3.57031L1.53125 4.10938C1.32031 4.32031 1.32031 4.67188 1.53125 4.90625L6.10156 9.45312Z"
                                                                fill="#667085"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`select__menu ${
                                                        networkShow
                                                            ? "select-active"
                                                            : ""
                                                    }`}
                                                >
                                                    {!loadingUser
                                                        ? user.walletsSpot
                                                              .find(
                                                                  (item) =>
                                                                      item.type ==
                                                                      currency
                                                              )
                                                              .wallets.map(
                                                                  (item) => (
                                                                      <div
                                                                          className="select__menu-item"
                                                                          onClick={() =>
                                                                              setNetwork(
                                                                                  item.network
                                                                              )
                                                                          }
                                                                      >
                                                                          <div className="select__name">
                                                                              {
                                                                                  user.walletsSpot.find(
                                                                                      (
                                                                                          item
                                                                                      ) =>
                                                                                          item.type ==
                                                                                          currency
                                                                                  )
                                                                                      .fakeName
                                                                              }
                                                                              <span>
                                                                                  (
                                                                                  {
                                                                                      item.network
                                                                                  }

                                                                                  )
                                                                              </span>
                                                                          </div>
                                                                      </div>
                                                                  )
                                                              )
                                                        : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="step__number">3</div>
                                    <div className="step__wrapper">
                                        <div className="step__title">
                                            Address
                                        </div>
                                        <div className="step__description">
                                            Enter the recipient's crypto address
                                        </div>
                                        <div className="step__input address">
                                            <input
                                                className="input__01"
                                                type="text"
                                                placeholder="Enter destination address"
                                                id="withdraw_address"
                                                value={adress}
                                                onChange={(e) =>
                                                    setAdress(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="step__number">4</div>
                                    <div className="step__wrapper">
                                        <div className="step__title">
                                            Amount
                                        </div>
                                        <div className="step__description">
                                            Specify the amount of coins/tokens
                                            you want to withdraw from your
                                            account
                                        </div>
                                        <div className="step__enter amount">
                                            <div className="step__enter-input">
                                                <input
                                                    className="input__01"
                                                    type="text"
                                                    placeholder="Enter amount"
                                                    id="withdraw_amount"
                                                    value={amount}
                                                    onChange={(e) =>
                                                        setAmount(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <div
                                                    className="step__enter-all"
                                                    onclick="setMaxBalance()"
                                                >
                                                    All
                                                </div>
                                                <div className="step__enter-fee">
                                                {!loadingUser
                                                    ? user.walletsSpot.find(
                                                          (item) =>
                                                              item.type ==
                                                              currency
                                                      ).userType
                                                    : null}{" "}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step__available">
                                            <div>
                                                Available:{" "}
                                                <span id="available_balance">
                                                    {!loadingUser &&
                                                    currencyRight
                                                        ? user.walletsSpot.find(
                                                              (item) =>
                                                                  item.type ==
                                                                  currency
                                                          ).balance
                                                        : null}
                                                </span>{" "}
                                                {!loadingUser && currencyRight
                                                    ? user.walletsSpot.find(
                                                          (item) =>
                                                              item.type ==
                                                              currency
                                                      ).userType
                                                    : null}
                                            </div>
                                            Fee: 0.000034 {currency}
                                        </div>
                                    </div>
                                </div>
                                {!loadingUser ? (
                                    user.walletsSpot.find(
                                        (item) => item.type == currency
                                    ).memoEnabled ? (
                                        <div className="step">
                                            <div className="step__number">
                                                5
                                            </div>
                                            <div className="step__wrapper">
                                                <div className="step__title">
                                                    Memo
                                                </div>
                                                <div className="step__description">
                                                    Enter the recipient's crypto
                                                    memo
                                                </div>
                                                <div className="step__input address">
                                                    <input
                                                        className="input__01"
                                                        type="number"
                                                        placeholder="Enter destination memo"
                                                        id="withdraw_memo"
                                                        value={memo}
                                                        onChange={(e) =>
                                                            setMemo(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                ) : null}

                                <div className="form-coins__btn">
                                    <button
                                        onClick={submitHandler}
                                        className="buttons__01"
                                    >
                                        Withdraw
                                    </button>
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
                                        The withdrawal normally completes within
                                        30 min. If your transaction is still not
                                        completed within the indicated
                                        timeframe, please contact our customer
                                        support team for further assistance.
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
                                            Do not transfer your assets to any
                                            non{" "}
                                            <span>
                                                {!loadingUser
                                                    ? user.walletsSpot.find(
                                                          (item) =>
                                                              item.type ==
                                                              currency
                                                      ).userType
                                                    : null}
                                            </span>{" "}
                                            addresses as you may not be able to
                                            retrieve the <span> {!loadingUser
                                                    ? user.walletsSpot.find(
                                                          (item) =>
                                                              item.type ==
                                                              currency
                                                      ).userType
                                                    : null}</span> asset
                                            after.
                                        </div>
                                        <div className="important-information__item">
                                            Please check your withdrawal address
                                            carefully; once a withdrawal request
                                            is issued, it cannot be recalled.
                                        </div>
                                    </div>
                                </div>
                                <div className="form-faq">
                                    <div className="form-faq__block">
                                        <div className="form-faq__question">
                                            When does {projectNameLink} process
                                            withdrawal requests?
                                        </div>
                                        <div className="form-faq__answer">
                                            Instant withdrawal may take 5 to 30
                                            min to process. However, please note
                                            that in the event of high network
                                            congestion, withdrawals may take
                                            longer time.
                                        </div>
                                    </div>
                                    <div className="form-faq__block">
                                        <div className="form-faq__question">
                                            Is withdrawal fee already included
                                            in the withdrawal amount I have
                                            indicated?
                                        </div>
                                        <div className="form-faq__answer">
                                            No, the withdrawal fee will charged
                                            beyond the indicated withdrawal
                                            amount. If traders want to withdraw
                                            all the withdrawable amount, traders
                                            can click on the "All" button and
                                            system will automatically input the
                                            amount after fees.
                                        </div>
                                    </div>
                                    <div className="form-faq__block">
                                        <div className="form-faq__question">
                                            Does {projectNameLink} support
                                            withdrawals to a Smart Contract ETH
                                            wallet address?
                                        </div>
                                        <div className="form-faq__answer">
                                            No, {projectNameLink} does not support
                                            ETH withdrawals via Smart Contracts
                                            method. Instead, {projectNameLink} only
                                            supports ETH withdrawals via Direct
                                            Transfer method.
                                        </div>
                                    </div>
                                    <div className="form-faq__block">
                                        <div className="form-faq__question">
                                            Does {projectNameLink} support
                                            withdrawals to a segwit BTC wallet
                                            address?
                                        </div>
                                        <div className="form-faq__answer">
                                            Yes, {projectNameLink} supports
                                            withdrawals to segwit BTC wallet
                                            addresses starting with "bc1", also
                                            known as bech32 addresses.
                                        </div>
                                    </div>
                                    <div className="form-faq__block">
                                        <div className="form-faq__question">
                                            Can traders fix their own withdrawal
                                            fees on {projectNameLink}?
                                        </div>
                                        <div className="form-faq__answer">
                                            At the moment, no. However,
                                            {projectNameLink} is considering enabling
                                            this option for traders to determine
                                            their own withdrawal fees in the
                                            future.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div
                    className="withdrawal-popup"
                    id="withdraw_true_confirmed_modal"
                >
                    <div className="withdrawal-popup__block">
                        <div className="withdrawal-popup__top">
                            <div className="withdrawal-popup__icon">
                                <svg
                                    width={86}
                                    height={82}
                                    viewBox="0 0 86 82"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M65.3015 12.1441C66.4663 10.7609 66.2963 8.68327 64.8246 7.63243C58.2159 2.91368 50.3313 0.248715 42.1651 0.0165582C32.9044 -0.246714 23.8275 2.63418 16.4136 8.18977C8.99977 13.7454 3.686 21.6481 1.33829 30.6102C-1.00942 39.5722 -0.252669 49.0652 3.48522 57.5421C7.22312 66.019 13.7218 72.9801 21.9222 77.291C30.1226 81.6019 39.5412 83.0084 48.6433 81.2813C57.7453 79.5542 65.9941 74.7953 72.0455 67.7802C77.3816 61.5942 80.7315 53.9754 81.7046 45.9135C81.9212 44.1182 80.502 42.5914 78.6951 42.5186C76.8882 42.4458 75.3804 43.8556 75.1365 45.6475C74.2405 52.2294 71.456 58.4377 67.0868 63.5028C62.002 69.3974 55.0707 73.3962 47.4225 74.8474C39.7742 76.2987 31.8599 75.1168 24.9693 71.4945C18.0787 67.8722 12.6181 62.0229 9.47719 54.9C6.33632 47.777 5.70044 39.8003 7.67317 32.2696C9.6459 24.739 14.1109 18.0985 20.3406 13.4303C26.5704 8.76208 34.1975 6.34133 41.979 6.56255C48.6655 6.75264 55.1273 8.88378 60.5913 12.6613C62.0788 13.6897 64.1366 13.5272 65.3015 12.1441Z"
                                        fill="#4DB742"
                                    />
                                    <path
                                        d="M81.9998 12.7979L41.9181 53.0869L23.6992 34.7737"
                                        stroke="#4DB742"
                                        strokeWidth="6.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="withdrawal-popup__title">
                                Withdrawal Successful
                            </div>
                        </div>
                        <div className="withdrawal-popup__bottom">
                            <div className="withdrawal-popup__table">
                                <div className="withdrawal-popup__table-key">
                                    Status
                                </div>
                                <div className="withdrawal-popup__table-value completed">
                                    Completed
                                </div>
                            </div>
                            <div className="withdrawal-popup__table">
                                <div className="withdrawal-popup__table-key">
                                    Date
                                </div>
                                <div
                                    className="withdrawal-popup__table-value"
                                    id="t_withdraw_confirmed_date"
                                >
                                    1 Nov 2023, 23:59:11
                                </div>
                            </div>
                            <div className="withdrawal-popup__table">
                                <div className="withdrawal-popup__table-key">
                                    Amount
                                </div>
                                <div
                                    className="withdrawal-popup__table-value"
                                    id="t_withdraw_confirmed_amount"
                                >
                                    0
                                </div>
                            </div>
                            <div className="withdrawal-popup__table with_com_block">
                                <div className="withdrawal-popup__table-key">
                                    Fee
                                </div>
                                <div className="withdrawal-popup__table-value">
                                    1 USDT
                                </div>
                            </div>
                            <div className="withdrawal-popup__table">
                                <div className="withdrawal-popup__table-key">
                                    To
                                </div>
                                <div
                                    className="withdrawal-popup__table-value"
                                    id="t_withdraw_confirmed_address"
                                >
                                    0
                                </div>
                            </div>
                            <div
                                className="withdrawal-popup__close"
                                id="close_w_confirm_modal"
                                onclick="location.reload()"
                            >
                                Close
                            </div>
                        </div>
                    </div>
                </div>
                <div className="withdrawal-popup" id="withdraw_true_modal_new">
                    <div className="withdrawal-popup__block">
                        <div className="withdrawal-popup__top">
                            <div className="withdrawal-popup__icon">
                                <svg
                                    width={91}
                                    height={91}
                                    viewBox="0 0 91 91"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M83.4168 45.5002C83.4168 66.4302 66.4302 83.4168 45.5002 83.4168C24.5702 83.4168 7.5835 66.4302 7.5835 45.5002C7.5835 24.5702 24.5702 7.5835 45.5002 7.5835C66.4302 7.5835 83.4168 24.5702 83.4168 45.5002Z"
                                        stroke="#E7BD1F"
                                        strokeWidth={6}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M59.5672 57.5577L47.813 50.5431C45.7655 49.3298 44.0972 46.4102 44.0972 44.0214V28.4756"
                                        stroke="#E7BD1F"
                                        strokeWidth={6}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="withdrawal-popup__title">
                                Withdrawal Processing
                            </div>
                        </div>
                        <div className="withdrawal-popup__bottom">
                            <div className="withdrawal-popup__table">
                                <div className="withdrawal-popup__table-key">
                                    Status
                                </div>
                                <div className="withdrawal-popup__table-value pending">
                                    Pending
                                </div>
                            </div>
                            <div className="withdrawal-popup__table">
                                <div className="withdrawal-popup__table-key">
                                    Date
                                </div>
                                <div
                                    className="withdrawal-popup__table-value"
                                    id="t_withdraw_date"
                                >
                                    1 Nov 2023, 23:59:11
                                </div>
                            </div>
                            <div className="withdrawal-popup__table">
                                <div className="withdrawal-popup__table-key">
                                    Amount
                                </div>
                                <div
                                    className="withdrawal-popup__table-value"
                                    id="t_withdraw_amount"
                                >
                                    0
                                </div>
                            </div>
                            <div className="withdrawal-popup__table with_com_block">
                                <div className="withdrawal-popup__table-key">
                                    Fee
                                </div>
                                <div className="withdrawal-popup__table-value">
                                    1 USDT
                                </div>
                            </div>
                            <div className="withdrawal-popup__table">
                                <div className="withdrawal-popup__table-key">
                                    To
                                </div>
                                <div
                                    className="withdrawal-popup__table-value"
                                    id="t_withdraw_address"
                                >
                                    0
                                </div>
                            </div>
                            <div
                                className="withdrawal-popup__close"
                                id="close_w_true_modal"
                                onclick="location.reload()"
                            >
                                Close
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="withdrawal-popup lvl3-required"
                    id="withdraw_error_modal"
                >
                    <section className="verificationPayment error-occurred">
                        <div className="verificationPayment__left">
                            <svg
                                width={177}
                                height={190}
                                viewBox="0 0 177 190"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="13.0517"
                                    cy="143.789"
                                    r="2.59858"
                                    fill="#0085FF"
                                />
                                <circle
                                    cx="15.4794"
                                    cy="4.33097"
                                    r="4.33097"
                                    fill="#19D77C"
                                />
                                <circle
                                    cx="159.415"
                                    cy="65.8319"
                                    r="4.33097"
                                    fill="#7044EE"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M135.026 91.5235C145.121 114.228 157.288 136.222 151.438 151.543C145.629 166.841 121.74 175.447 101.045 175.577C80.327 175.667 62.804 167.279 46.0364 154.923C29.2922 142.608 13.3035 126.324 12.694 109.068C12.108 91.8515 26.9097 73.6304 45.515 58.9583C64.1118 44.3181 86.5206 33.195 101.701 39.3479C116.921 45.4775 124.922 68.8511 135.026 91.5235Z"
                                    fill="#ECECEC"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M87.0635 21.1504C88.4099 17.851 93.082 17.851 94.4283 21.1504L150.01 157.364C151.077 159.98 149.153 162.844 146.327 162.844H35.1644C32.339 162.844 30.4146 159.98 31.4821 157.364L87.0635 21.1504Z"
                                    fill="#FF8D8D"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M141.529 150.487L87.7621 18.7194C87.3632 17.7419 86.7256 16.9586 85.8492 16.3697C84.9729 15.7808 84.0068 15.4863 82.9509 15.4863C81.8951 15.4863 80.929 15.7808 80.0526 16.3697C79.1763 16.9586 78.5386 17.7419 78.1397 18.7194L24.3725 150.487C24.0456 151.288 23.9262 152.119 24.0145 152.98C24.1027 153.841 24.3881 154.63 24.8707 155.349C25.3534 156.067 25.9765 156.629 26.7402 157.036C27.5039 157.443 28.3184 157.647 29.1837 157.647H136.718C137.583 157.647 138.398 157.443 139.162 157.036C139.925 156.629 140.548 156.067 141.031 155.349C141.514 154.63 141.799 153.841 141.887 152.98C141.976 152.119 141.856 151.288 141.529 150.487ZM82.953 18.0848C84.1168 18.0848 84.9185 18.6235 85.3582 19.7011L139.125 151.469C139.474 152.323 139.391 153.133 138.876 153.899C138.362 154.665 137.643 155.048 136.72 155.048H29.1857C28.263 155.048 27.5443 154.665 27.0296 153.899C26.515 153.133 26.4319 152.323 26.7806 151.469L80.5478 19.7011C80.9875 18.6235 81.7892 18.0848 82.953 18.0848Z"
                                    fill="#0D0938"
                                />
                                <rect
                                    x="52.6348"
                                    y="142.921"
                                    width="60.6336"
                                    height="2.59858"
                                    rx="0.994286"
                                    fill="#0D0938"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M79.8394 76.7982C79.7294 74.8463 81.2825 73.2031 83.2375 73.2031C85.1925 73.2031 86.7457 74.8463 86.6357 76.7982L84.5054 114.585C84.4674 115.257 83.9111 115.783 83.2375 115.783C82.564 115.783 82.0076 115.257 81.9697 114.585L79.8394 76.7982Z"
                                    fill="#0D0938"
                                />
                                <circle
                                    cx="83.0432"
                                    cy="124.299"
                                    r="5.10957"
                                    fill="#0D0938"
                                />
                            </svg>
                        </div>
                        <div className="verificationPayment__right">
                            <div className="verificationPayment__title">
                                Error occurred
                            </div>
                            <div
                                className="verificationPayment__des"
                                id="withdraw_modal_text"
                            ></div>
                            <div className="verificationPayment__btn-box">
                                <div
                                    className="verificationPayment__btn-return"
                                    id="close_error_ww_modal"
                                    onclick="closeWwModal()"
                                >
                                    <span className="buttons__02">Close</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
        <div className="other">
        <WithdrawPendingModal pendingModalOpened={pendingModalOpened} setPendingModalOpened={setPendingModalOpened} amount={amount} adress={adress} currency={currency}/>
        <WithdrawConfirmedModal confirmedModalOpened={confirmedModalOpened} setConfirmedModalOpened={setConfirmedModalOpened} amount={amount} adress={adress} currency={currency}/>
        </div>
       
        </React.Fragment>
    );
};
export default Withdraw;
