import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getSwapPrice } from "../../Redux/Actions/withdrawActions";
import { getTickers, getUserDetails } from "../../Redux/Actions/userActions";
import { createSwap } from "../../Redux/Actions/withdrawActions";
import { toast } from "react-toastify";
import Toast from "../LoadingError/toast";
import {
    SWAP_CREATE_RESET,
    TRANSFER_CREATE_RESET,
} from "../../Redux/Constants/withdrawConstans";
import { parse } from "dotenv";
import { listTickers } from "../../Redux/Actions/tradeActions";
const Swap = ({ match }) => {
    const [sendCurrency, sendCurrencySelect] = useState("bitcoin");
    const [rightWindowParams,setRightWindowParams]=useState({
        
    });
    const [receiveCurrency, getCurrencySelect] = useState("tether");
    const [amount, setAmount] = useState("");
    const [selectActive, setSelectActive] = useState(false);
    const [selectToActive, setSelectToActive] = useState(false);
    const swapPrice = useSelector((state) => state.swapPrice);
    const userDetails = useSelector((state) => state.userDetails);
    const swapCreate = useSelector((state) => state.swapCreate);
    console.log("selectActive:", selectActive);
    const dispatch = useDispatch();
    const { user, loadingUser } = userDetails;
    const { loadingUserSwap, userSwap, errorUserSwap } = swapPrice;
    const { loadingSwapCreate, successSwapCreate, errorSwapCreate } =
        swapCreate;
    const {
        loadingTickersList,
        tickersList,
        errorTickersList
    } = useSelector((state) => state.tickerList);
    const toastId = React.useRef(null);
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    };
    console.log("tickersList",tickersList);
    const setAmountHandler = (e) => {
        const value = e.target.value;

        setAmount(value);
    };

    useEffect(() => {
        dispatch(listTickers());
    }, [dispatch]);
    useEffect(() => {
        dispatch(getUserDetails("profile", undefined, "/profile/swap"));
    }, [dispatch, successSwapCreate, match]);
    useEffect(() => {
        dispatch(getSwapPrice(sendCurrency, receiveCurrency));
    }, [dispatch, sendCurrency, receiveCurrency]);
    console.log(successSwapCreate);
    useEffect(() => {
        if (successSwapCreate && !toast.isActive(toastId.current)) {
            toastId.current = toast.success("Swap successed", Toastobjects);
            dispatch({ type: SWAP_CREATE_RESET });
        } else if (errorSwapCreate && !toast.isActive(toastId.current)) {
            toastId.current = toast.error(errorSwapCreate, Toastobjects);
        }
    }, [dispatch, successSwapCreate, errorSwapCreate]);
    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(createSwap(sendCurrency, receiveCurrency, parseFloat(amount)));
    };
    useEffect(()=>{

    },[sendCurrency])
    console.log("sendCurrency",sendCurrency);
    return (
        <main className="main other" style={{ backgroundColor: "#ffffff" }}>
            <Toast />

            <div className="main__box">
                <section className="form-coins swap">
                    <div className="form-coins__container">
                        <div className="form-coins__left">
                            <div className="step">
                                <div
                                    className="step__number"
                                    style={{ backgroundColor: "#B9DDFF" }}
                                >
                                    1
                                </div>
                                <div className="step__wrapper">
                                    <div className="step__title">You send</div>
                                    <div className="step__description">
                                        Select the crypto asset you want to
                                        exchange
                                    </div>
                                    <div className="step__enter">
                                        <div className="step__enter-input">
                                            <input
                                                className="input__01"
                                                type="number"
                                                placeholder="Enter amount"
                                                id="ex_amount"
                                                value={amount}
                                                onChange={(e) =>
                                                    setAmountHandler(e)
                                                }
                                            />
                                            <div
                                                className="step__enter-all"
                                                onclick="availableBalance()"
                                            >
                                                All
                                            </div>
                                        </div>
                                        <div
                                            className="select step-form-coins-send"
                                            onClick={() =>
                                                setSelectActive(!selectActive)
                                            }
                                        >
                                            <div className="select__selected">
                                                <div className="select__img">
                                                    <img
                                                        src={
                                                            !loadingUser
                                                                ? user.walletsSpot.find(
                                                                      (item) =>
                                                                          item.id ==
                                                                          sendCurrency
                                                                  ).image
                                                                : null
                                                        }
                                                        alt={
                                                            !loadingUser
                                                                ? user.walletsSpot.find(
                                                                      (item) =>
                                                                          item.id ==
                                                                          sendCurrency
                                                                  ).name
                                                                : null
                                                        }
                                                    />
                                                </div>
                                                <div className="select__name">
                                                    <span>
                                                        {!loadingUser
                                                            ? user.walletsSpot.find(
                                                                  (item) =>
                                                                      item.id ==
                                                                      sendCurrency
                                                              ).type
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
                                                                      sendCurrencySelect(
                                                                          item.id
                                                                      )
                                                                  }
                                                              >
                                                                  <div className="select__img">
                                                                      <img
                                                                          src={
                                                                              item.image
                                                                          }
                                                                          alt={
                                                                              item.image
                                                                          }
                                                                      />
                                                                  </div>
                                                                  <div className="select__name">
                                                                      <span>
                                                                          {
                                                                              item.name
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
                                    <div className="step__available">
                                        <div>
                                            Available:
                                            <span id="my_available_balance">
                                                {!loadingUser
                                                    ? user.walletsSpot.find(
                                                          (item) =>
                                                              item.id ==
                                                              sendCurrency
                                                      ).balance
                                                    : null}
                                            </span>{" "}
                                            <span id="my_available_crypto">
                                                {!loadingUser
                                                    ? user.walletsSpot.find(
                                                          (item) =>
                                                              item.id ==
                                                              sendCurrency
                                                      ).type
                                                    : null}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-coins__arrow">
                                <svg
                                    width={34}
                                    height={49}
                                    viewBox="0 0 34 49"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M27.1675 32.4595C26.5412 33.5672 26.0829 34.3124 25.6913 35.0862C23.8022 38.8174 21.7157 42.3469 18.6888 45.3658C16.3628 47.6868 15.0205 46.7461 13.4628 44.8902C11.6155 42.6875 10.652 40.0024 9.77725 37.2773C9.23213 35.583 8.43582 33.9666 7.68692 32.3452C7.27201 31.4474 7.7269 30.0671 8.66204 29.6977C9.51778 29.3601 9.79724 29.9699 10.0247 30.5623C10.8738 32.7881 11.6043 35.06 12.5463 37.2434C13.2542 38.8857 14.1206 40.4783 15.0932 41.979C16.1589 43.6215 17.2496 43.6764 18.4315 42.1082C19.802 40.2859 21.0234 38.3456 22.206 36.3914C23.1035 34.9065 23.7716 33.2857 24.6772 31.81C24.9546 31.3564 25.9094 30.808 26.1601 30.9566C26.6663 31.2623 26.9002 32.0159 27.1708 32.4604L27.1675 32.4595Z"
                                        fill="#34394A"
                                    />
                                    <path
                                        d="M15.7577 33.9431C17.9979 29.3246 17.2512 24.9048 16.6917 20.5139C15.9115 14.4342 13.7729 8.76984 11.2998 3.20367C11.1142 2.78548 11.4398 1.88777 11.826 1.53066C12.3488 1.04719 13.0579 1.13798 13.4048 1.98557C14.4007 4.4172 15.6469 6.77417 16.3635 9.28328C17.4618 13.1312 18.461 17.0447 19.0138 20.9979C19.4918 24.4104 19.3348 27.9184 19.352 31.3845C19.3569 32.2786 19.0113 33.1852 18.755 34.0625C18.6529 34.4036 18.4084 34.827 18.1148 34.9574C17.5444 35.2084 16.7473 35.5653 16.3177 35.3439C15.9152 35.1403 15.8689 34.2422 15.7652 33.9416L15.7577 33.9431Z"
                                        fill="#34394A"
                                    />
                                </svg>
                            </div>
                            <div className="step">
                                <div
                                    className="step__number"
                                    style={{ backgroundColor: "#D0FAE4" }}
                                >
                                    2
                                </div>
                                <div className="step__wrapper">
                                    <div className="step__title">
                                        You receive
                                    </div>
                                    <div className="step__description">
                                        Select receive currency
                                    </div>
                                    <div className="step__enter">
                                        <div className="step__enter-input">
                                            <input
                                                className="input__01"
                                                type="number"
                                                disabled
                                                value={(
                                                    userSwap * amount
                                                ).toFixed(8)}
                                                placeholder="You will receive"
                                                id="ex_amount_from"
                                            />
                                        </div>
                                        <div
                                            className="select step-form-coins-receive"
                                            onClick={() =>
                                                setSelectToActive(
                                                    !selectToActive
                                                )
                                            }
                                        >
                                            <div className="select__selected">
                                                <div className="select__img">
                                                    <img
                                                        src={
                                                            !loadingUser
                                                                ? user.walletsSpot.find(
                                                                      (item) =>
                                                                          item.id ==
                                                                          receiveCurrency
                                                                  ).image
                                                                : null
                                                        }
                                                        alt={
                                                            !loadingUser
                                                                ? user.walletsSpot.find(
                                                                      (item) =>
                                                                          item.id ==
                                                                          receiveCurrency
                                                                  ).name
                                                                : null
                                                        }
                                                    />
                                                </div>
                                                <div className="select__name">
                                                    <span>
                                                        {!loadingUser
                                                            ? user.walletsSpot.find(
                                                                  (item) =>
                                                                      item.id ==
                                                                      receiveCurrency
                                                              ).type
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
                                                    selectToActive
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
                                                                      getCurrencySelect(
                                                                          item.id
                                                                      )
                                                                  }
                                                              >
                                                                  <div className="select__img">
                                                                      <img
                                                                          src={
                                                                              item.image
                                                                          }
                                                                          alt={
                                                                              item.name
                                                                          }
                                                                      />
                                                                  </div>
                                                                  <div className="select__name">
                                                                      <span>
                                                                          {
                                                                              item.name
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
                                </div>
                            </div>
                            <div className="form-coins__rate">
                                <div>
                                    Reference exchange rate:{" "}
                                    <span id="rate_one">1</span>{" "}
                                    <span id="rate_one_currency">
                                        {!loadingUser
                                            ? user.walletsSpot.find(
                                                  (item) =>
                                                      item.id == sendCurrency
                                              ).name
                                            : null}
                                    </span>{" "}
                                    ~{" "}
                                    <span id="rate_two">
                                        {!loadingUserSwap ? userSwap : null}
                                    </span>{" "}
                                    <span id="rate_two_currency">
                                        {!loadingUser
                                            ? user.walletsSpot.find(
                                                  (item) =>
                                                      item.id == receiveCurrency
                                              ).name
                                            : null}
                                    </span>
                                </div>
                            </div>
                            <div className="form-coins__btn">
                                <button
                                    className="buttons__01"
                                    id="ex_btn"
                                    onClick={(e) => submitHandler(e)}
                                >
                                    Submit Swap
                                </button>
                            </div>
                            <div className="form-coins__alert">
                           
                                <div className="form-coins__alert-text">
                                    Once the conversion is complete, funds will
                                    be transferred directly to your spot account
                                </div>
                            </div>
                        </div>
                        <div className="form-coins__right">
                            <div className="form-coins__price">
                                <div className="form-coins__header">
                                    <svg
                                        width={51}
                                        height={51}
                                        viewBox="0 0 51 51"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_96_7952)">
                                            <circle
                                                cx="25.0594"
                                                cy="25.4327"
                                                r={25}
                                                transform="rotate(-0.136259 25.0594 25.4327)"
                                                fill="#F7931A"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M23.7364 27.1434L28.2735 25.9161C30.3909 25.3434 32.0329 26.414 32.528 28.4441C32.9234 29.906 32.6225 31.3941 31.549 32.2255C31.1499 32.5498 30.5081 32.7774 29.9537 32.9274L25.6182 34.1001L23.7364 27.1434ZM26.9007 16.4412C27.9444 16.6999 28.6709 17.5854 28.9845 18.7447C29.4754 20.5596 28.7577 22.1063 26.9429 22.5972L22.809 23.7154L21.159 17.6155L24.7888 16.6337C25.5953 16.4155 26.3284 16.3255 26.9007 16.4412ZM31.2979 36.2967C31.9343 38.6494 32.2525 39.8257 32.2525 39.8257C32.2525 39.8257 31.4627 40.0393 29.883 40.4666L28.9284 36.9377L26.4583 37.6058C27.0947 39.9585 27.4129 41.1348 27.4129 41.1348C27.4129 41.1348 26.6231 41.3484 25.0436 41.7757L24.089 38.2467C20.9298 39.1013 19.3502 39.5286 19.3502 39.5286C19.3502 39.5286 19.0593 38.4532 18.4775 36.3024L19.9395 35.9069C20.6956 35.7024 21.0865 34.9473 20.8956 34.2416L17.0365 19.9751C16.832 19.2189 16.0771 18.8281 15.3713 19.019C14.3967 19.2826 13.9093 19.4144 13.9093 19.4144C13.9093 19.4144 13.6184 18.339 13.0366 16.188L17.7754 14.9062C17.139 12.5536 16.8208 11.3773 16.8208 11.3773C16.8208 11.3773 17.6106 11.1637 19.1901 10.7364L20.1447 14.2653L22.6148 13.5971C21.9785 11.2445 21.6603 10.0683 21.6603 10.0683C21.6603 10.0683 22.4501 9.85462 24.0297 9.42733L24.9979 13.0065C26.2214 12.7297 27.2201 12.6219 28.2871 12.7661C30.6225 12.9999 32.6163 14.5704 33.3254 17.1919C33.9255 19.4101 33.408 21.4976 31.8019 22.9599C34.6551 23.108 36.4282 25.0627 37.0964 27.533C37.9051 30.7224 36.415 33.6142 34.1126 35.1026C33.1863 35.6777 32.3061 36.024 31.2979 36.2967Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_96_7952">
                                                <rect
                                                    width={50}
                                                    height={50}
                                                    fill="white"
                                                    transform="translate(0 0.492188) rotate(-0.136259)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <h2>Bitcoin</h2>
                                    <span>BTC</span>
                                </div>
                                <div className="form-coins__info">
                                    <span className="form-coin__info_rank">
                                        Rank #1
                                    </span>
                                    <span>Coin</span>
                                    <span>On 2,771,773 watchlists</span>
                                </div>
                                <div className="form-coins__chart">
                                    <div className="form-coins__chart_header">
                                        <div className="form-coins__chart_header_price ">
                                            $43,975.72
                                            <span className="success">
                                                +2%
                                                <svg
                                                    width={16}
                                                    height={11}
                                                    viewBox="0 0 16 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M15.6773 1.17945C15.6757 1.11945 15.6582 1.06279 15.6423 1.00529C15.6298 0.956953 15.624 0.907786 15.6032 0.86362C15.584 0.820286 15.5515 0.785286 15.5232 0.745286C15.4882 0.694453 15.4565 0.64362 15.4115 0.601953C15.404 0.594453 15.4007 0.584453 15.3923 0.577786C15.3623 0.551953 15.3257 0.542786 15.2932 0.521953C15.2432 0.489453 15.194 0.45612 15.1373 0.434453C15.0815 0.414453 15.0265 0.409453 14.969 0.40112C14.929 0.395286 14.8932 0.376953 14.8507 0.376953H10.684C10.2232 0.376953 9.85067 0.750286 9.85067 1.21029C9.85067 1.67029 10.2232 2.04362 10.684 2.04362H13.039L9.67567 5.96695L6.11234 3.82945C5.75984 3.61612 5.30651 3.69445 5.04317 4.01029L0.876507 9.01029C0.58234 9.36362 0.62984 9.88945 0.983173 10.1836C1.13984 10.3136 1.32817 10.377 1.51651 10.377C1.75567 10.377 1.99234 10.2753 2.15734 10.077L5.86734 5.62529L9.42151 7.75862C9.77067 7.96779 10.219 7.89445 10.4832 7.58612L14.0173 3.46279V5.37695C14.0173 5.83695 14.3898 6.21029 14.8507 6.21029C15.3115 6.21029 15.684 5.83695 15.684 5.37695V1.21029C15.684 1.19945 15.6782 1.19029 15.6773 1.17945Z"
                                                        fill="#03A66D"
                                                    />
                                                </svg>
                                            </span>
                                            <div className="form-coin__chart_header_coin">
                                                Bitcoin Price(USD)
                                            </div>
                                        </div>
                                        <div className="form-coin__chart_coinprice">
                                            <div className="form-coin__chart_select">
                                                <svg
                                                    width={25}
                                                    height={25}
                                                    viewBox="0 0 25 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M10.1667 4.43328C9.85807 4.31875 9.50292 4.38235 9.26731 4.59251L5.42538 8.0118C5.103 8.29848 5.103 8.76376 5.42538 9.05043C5.74776 9.33734 6.27001 9.33734 6.59238 9.05043L9.02553 6.88495L9.02553 18.8225C9.02553 19.2282 9.39492 19.557 9.85082 19.557C10.3067 19.557 10.6761 19.2282 10.6761 18.8225V5.11183C10.6761 4.81463 10.4752 4.54684 10.1667 4.43328Z"
                                                        fill="#9295A6"
                                                    />
                                                    <path
                                                        d="M18.9265 14.8835C18.6041 14.5966 18.0819 14.5966 17.7595 14.8835L15.3264 17.0489L15.3264 5.11145C15.3264 4.70571 14.957 4.37695 14.5011 4.37695C14.0452 4.37695 13.6758 4.70571 13.6758 5.11145L13.6758 18.8221C13.6758 19.1193 13.8767 19.3871 14.1851 19.5006C14.2872 19.5384 14.3947 19.5566 14.5008 19.5566C14.7157 19.5566 14.9269 19.482 15.0846 19.3414L18.9265 15.9221C19.2489 15.6354 19.2489 15.1701 18.9265 14.8835Z"
                                                        fill="#9295A6"
                                                    />
                                                </svg>
                                                High / Low Price
                                                <select>
                                                    <option
                                                        value="24h"
                                                        selected={true}
                                                    >
                                                        24h
                                                    </option>
                                                    <option value="48h">
                                                        48h
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="form-coin__chart_fill">
                                                <div
                                                    className="fill-field"
                                                    style={{ width: "47%" }}
                                                ></div>
                                            </div>

                                            <div className="form-coin__chart_low-high">
                                                <span>Low: $37,005.19</span>
                                                <span>High:38,005.18</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-coin__chart_nn">
                                    <div className="form-coin__chart_nn-item">
                                        <div className="form-coin__chart_nn-item_header">
                                            <svg
                                                width={25}
                                                height={25}
                                                viewBox="0 0 25 25"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M14.4696 20.2106C14.4026 20.2106 14.3336 20.2076 14.2646 20.2006C13.3846 20.1136 12.6946 19.4926 12.5046 18.6176L9.82162 6.22563L7.05862 12.6076C6.89963 12.9736 6.53862 13.2106 6.14062 13.2106H3.14062C2.58763 13.2106 2.14062 12.7626 2.14062 12.2106C2.14062 11.6576 2.58763 11.2106 3.14062 11.2106H5.48462L7.99062 5.42163C8.34562 4.60563 9.12762 4.13063 10.0166 4.21963C10.8966 4.30663 11.5866 4.92763 11.7766 5.80263L14.4596 18.1946L17.2226 11.8126C17.3816 11.4466 17.7416 11.2106 18.1406 11.2106H21.1406C21.6936 11.2106 22.1406 11.6576 22.1406 12.2106C22.1406 12.7626 21.6936 13.2106 21.1406 13.2106H18.7966L16.2906 18.9986C15.9636 19.7516 15.2626 20.2106 14.4696 20.2106Z"
                                                    fill="#5367FF"
                                                />
                                            </svg>
                                            <span>Market Cap</span>
                                        </div>
                                        <div className="form-coin__chart_nn-item_body">
                                            <p>$826,445,951,378</p>
                                            <span className="success">
                                                +2%{" "}
                                                <svg
                                                    width={21}
                                                    height={21}
                                                    viewBox="0 0 21 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M17.6344 6.01246C17.6327 5.95246 17.6152 5.89579 17.5994 5.83829C17.5869 5.78996 17.581 5.74079 17.5602 5.69663C17.541 5.65329 17.5085 5.61829 17.4802 5.57829C17.4452 5.52746 17.4135 5.47663 17.3685 5.43496C17.361 5.42746 17.3577 5.41746 17.3494 5.41079C17.3194 5.38496 17.2827 5.37579 17.2502 5.35496C17.2002 5.32246 17.151 5.28913 17.0944 5.26746C17.0385 5.24746 16.9835 5.24246 16.926 5.23413C16.886 5.22829 16.8502 5.20996 16.8077 5.20996H12.641C12.1802 5.20996 11.8077 5.58329 11.8077 6.04329C11.8077 6.50329 12.1802 6.87663 12.641 6.87663H14.996L11.6327 10.8L8.06937 8.66246C7.71687 8.44913 7.26354 8.52746 7.0002 8.84329L2.83354 13.8433C2.53937 14.1966 2.58687 14.7225 2.9402 15.0166C3.09687 15.1466 3.2852 15.21 3.47354 15.21C3.7127 15.21 3.94937 15.1083 4.11437 14.91L7.82437 10.4583L11.3785 12.5916C11.7277 12.8008 12.176 12.7275 12.4402 12.4191L15.9744 8.29579V10.21C15.9744 10.67 16.3469 11.0433 16.8077 11.0433C17.2685 11.0433 17.641 10.67 17.641 10.21V6.04329C17.641 6.03246 17.6352 6.02329 17.6344 6.01246Z"
                                                        fill="#03A66D"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>{" "}
                                    <div className="form-coin__chart_nn-item">
                                        <div className="form-coin__chart_nn-item_header">
                                            <svg
                                                width={25}
                                                height={25}
                                                viewBox="0 0 25 25"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M11.2422 8.60996C11.2422 8.11316 11.6454 7.70996 12.1422 7.70996C12.639 7.70996 13.0422 8.11316 13.0422 8.60996C13.0422 9.10676 12.639 9.50996 12.1422 9.50996C11.6454 9.50996 11.2422 9.10676 11.2422 8.60996ZM11.2422 11.3102C11.2422 10.8134 11.6454 10.4102 12.1422 10.4102C12.639 10.4102 13.0422 10.8134 13.0422 11.3102V15.8102C13.0422 16.307 12.639 16.7102 12.1422 16.7102C11.6454 16.7102 11.2422 16.307 11.2422 15.8102V11.3102ZM12.1414 19.4098C8.17151 19.4098 4.94141 16.1797 4.94141 12.2098C4.94141 8.23987 8.17151 5.00977 12.1414 5.00977C16.1113 5.00977 19.3414 8.23987 19.3414 12.2098C19.3414 16.1797 16.1113 19.4098 12.1414 19.4098ZM12.1406 3.20996C7.16992 3.20996 3.14062 7.23926 3.14062 12.21C3.14062 17.1807 7.16992 21.21 12.1406 21.21C17.1104 21.21 21.1406 17.1807 21.1406 12.21C21.1406 7.23926 17.1104 3.20996 12.1406 3.20996Z"
                                                    fill="#5367FF"
                                                />
                                            </svg>

                                            <span>Full Diluted</span>
                                        </div>
                                        <div className="form-coin__chart_nn-item_body">
                                            <p>$826,445,951,378</p>
                                            <span className="success">
                                                +2%{" "}
                                                <svg
                                                    width={21}
                                                    height={21}
                                                    viewBox="0 0 21 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M17.6344 6.01246C17.6327 5.95246 17.6152 5.89579 17.5994 5.83829C17.5869 5.78996 17.581 5.74079 17.5602 5.69663C17.541 5.65329 17.5085 5.61829 17.4802 5.57829C17.4452 5.52746 17.4135 5.47663 17.3685 5.43496C17.361 5.42746 17.3577 5.41746 17.3494 5.41079C17.3194 5.38496 17.2827 5.37579 17.2502 5.35496C17.2002 5.32246 17.151 5.28913 17.0944 5.26746C17.0385 5.24746 16.9835 5.24246 16.926 5.23413C16.886 5.22829 16.8502 5.20996 16.8077 5.20996H12.641C12.1802 5.20996 11.8077 5.58329 11.8077 6.04329C11.8077 6.50329 12.1802 6.87663 12.641 6.87663H14.996L11.6327 10.8L8.06937 8.66246C7.71687 8.44913 7.26354 8.52746 7.0002 8.84329L2.83354 13.8433C2.53937 14.1966 2.58687 14.7225 2.9402 15.0166C3.09687 15.1466 3.2852 15.21 3.47354 15.21C3.7127 15.21 3.94937 15.1083 4.11437 14.91L7.82437 10.4583L11.3785 12.5916C11.7277 12.8008 12.176 12.7275 12.4402 12.4191L15.9744 8.29579V10.21C15.9744 10.67 16.3469 11.0433 16.8077 11.0433C17.2685 11.0433 17.641 10.67 17.641 10.21V6.04329C17.641 6.03246 17.6352 6.02329 17.6344 6.01246Z"
                                                        fill="#03A66D"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>{" "}
                                    <div className="form-coin__chart_nn-item">
                                        <div className="form-coin__chart_nn-item_header">
                                            <svg
                                                width={25}
                                                height={25}
                                                viewBox="0 0 25 25"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M11.1526 3.24833C6.65362 3.74233 3.14062 7.56233 3.14062 12.1903C3.14062 17.1533 7.17862 21.1903 12.1406 21.1903C17.1026 21.1903 21.1406 17.1533 21.1406 12.1903C21.1406 7.56233 17.6276 3.74233 13.1286 3.24833C12.3521 3.19704 11.9455 3.19731 11.1526 3.24833ZM12.1406 18.9403C8.41862 18.9403 5.39062 15.9123 5.39062 12.1903C5.39062 8.46834 8.41862 5.44034 12.1406 5.44034C15.8626 5.44034 18.8906 8.46834 18.8906 12.1903C18.8906 15.9123 15.8626 18.9403 12.1406 18.9403ZM14.1406 12.1903H12.1406V10.1903C12.1406 9.63734 11.6926 9.19034 11.1406 9.19034C10.5886 9.19034 10.1406 9.63734 10.1406 10.1903V13.1903C10.1406 13.7433 10.5886 14.1903 11.1406 14.1903H14.1406C14.6926 14.1903 15.1406 13.7433 15.1406 13.1903C15.1406 12.6373 14.6926 12.1903 14.1406 12.1903Z"
                                                    fill="#5367FF"
                                                />
                                            </svg>

                                            <span>24 Volume</span>
                                        </div>
                                        <div className="form-coin__chart_nn-item_body">
                                            <p>$826,445,951,378</p>
                                            <span className="success">
                                                +2%{" "}
                                                <svg
                                                    width={21}
                                                    height={21}
                                                    viewBox="0 0 21 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M17.6344 6.01246C17.6327 5.95246 17.6152 5.89579 17.5994 5.83829C17.5869 5.78996 17.581 5.74079 17.5602 5.69663C17.541 5.65329 17.5085 5.61829 17.4802 5.57829C17.4452 5.52746 17.4135 5.47663 17.3685 5.43496C17.361 5.42746 17.3577 5.41746 17.3494 5.41079C17.3194 5.38496 17.2827 5.37579 17.2502 5.35496C17.2002 5.32246 17.151 5.28913 17.0944 5.26746C17.0385 5.24746 16.9835 5.24246 16.926 5.23413C16.886 5.22829 16.8502 5.20996 16.8077 5.20996H12.641C12.1802 5.20996 11.8077 5.58329 11.8077 6.04329C11.8077 6.50329 12.1802 6.87663 12.641 6.87663H14.996L11.6327 10.8L8.06937 8.66246C7.71687 8.44913 7.26354 8.52746 7.0002 8.84329L2.83354 13.8433C2.53937 14.1966 2.58687 14.7225 2.9402 15.0166C3.09687 15.1466 3.2852 15.21 3.47354 15.21C3.7127 15.21 3.94937 15.1083 4.11437 14.91L7.82437 10.4583L11.3785 12.5916C11.7277 12.8008 12.176 12.7275 12.4402 12.4191L15.9744 8.29579V10.21C15.9744 10.67 16.3469 11.0433 16.8077 11.0433C17.2685 11.0433 17.641 10.67 17.641 10.21V6.04329C17.641 6.03246 17.6352 6.02329 17.6344 6.01246Z"
                                                        fill="#03A66D"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>{" "}
                                    <div className="form-coin__chart_nn-item">
                                        <div className="form-coin__chart_nn-item_header">
                                            <svg
                                                width={25}
                                                height={25}
                                                viewBox="0 0 25 25"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M11.2422 8.60996C11.2422 8.11316 11.6454 7.70996 12.1422 7.70996C12.639 7.70996 13.0422 8.11316 13.0422 8.60996C13.0422 9.10676 12.639 9.50996 12.1422 9.50996C11.6454 9.50996 11.2422 9.10676 11.2422 8.60996ZM11.2422 11.3102C11.2422 10.8134 11.6454 10.4102 12.1422 10.4102C12.639 10.4102 13.0422 10.8134 13.0422 11.3102V15.8102C13.0422 16.307 12.639 16.7102 12.1422 16.7102C11.6454 16.7102 11.2422 16.307 11.2422 15.8102V11.3102ZM12.1414 19.4098C8.17151 19.4098 4.94141 16.1797 4.94141 12.2098C4.94141 8.23987 8.17151 5.00977 12.1414 5.00977C16.1113 5.00977 19.3414 8.23987 19.3414 12.2098C19.3414 16.1797 16.1113 19.4098 12.1414 19.4098ZM12.1406 3.20996C7.16992 3.20996 3.14062 7.23926 3.14062 12.21C3.14062 17.1807 7.16992 21.21 12.1406 21.21C17.1104 21.21 21.1406 17.1807 21.1406 12.21C21.1406 7.23926 17.1104 3.20996 12.1406 3.20996Z"
                                                    fill="#5367FF"
                                                />
                                            </svg>

                                            <span>Circulating Supply</span>
                                        </div>
                                        <div className="form-coin__chart_nn-item_body">
                                            <p>$826,445,951,378</p>
                                            <span className="success">
                                                +2%{" "}
                                                <svg
                                                    width={21}
                                                    height={21}
                                                    viewBox="0 0 21 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M17.6344 6.01246C17.6327 5.95246 17.6152 5.89579 17.5994 5.83829C17.5869 5.78996 17.581 5.74079 17.5602 5.69663C17.541 5.65329 17.5085 5.61829 17.4802 5.57829C17.4452 5.52746 17.4135 5.47663 17.3685 5.43496C17.361 5.42746 17.3577 5.41746 17.3494 5.41079C17.3194 5.38496 17.2827 5.37579 17.2502 5.35496C17.2002 5.32246 17.151 5.28913 17.0944 5.26746C17.0385 5.24746 16.9835 5.24246 16.926 5.23413C16.886 5.22829 16.8502 5.20996 16.8077 5.20996H12.641C12.1802 5.20996 11.8077 5.58329 11.8077 6.04329C11.8077 6.50329 12.1802 6.87663 12.641 6.87663H14.996L11.6327 10.8L8.06937 8.66246C7.71687 8.44913 7.26354 8.52746 7.0002 8.84329L2.83354 13.8433C2.53937 14.1966 2.58687 14.7225 2.9402 15.0166C3.09687 15.1466 3.2852 15.21 3.47354 15.21C3.7127 15.21 3.94937 15.1083 4.11437 14.91L7.82437 10.4583L11.3785 12.5916C11.7277 12.8008 12.176 12.7275 12.4402 12.4191L15.9744 8.29579V10.21C15.9744 10.67 16.3469 11.0433 16.8077 11.0433C17.2685 11.0433 17.641 10.67 17.641 10.21V6.04329C17.641 6.03246 17.6352 6.02329 17.6344 6.01246Z"
                                                        fill="#03A66D"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};
export default Swap;
