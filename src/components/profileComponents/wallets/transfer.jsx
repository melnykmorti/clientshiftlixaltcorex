import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    listProductSend,
    ProductSendSingle,
} from "../../../Redux/Actions/productActions";
import uniqid from "uniqid";
import Loading from "../../LoadingError/loading";
import { getUserDetails } from "../../../Redux/Actions/userActions";
import { useHistory } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import Toast from "../../LoadingError/toast";
import { toast } from "react-toastify";
import { createTransfer } from "../../../Redux/Actions/withdrawActions";
import { listMyTransfer } from "../../../Redux/Actions/withdrawActions";
import { createdAtConverter } from "../../utils";
import { TRANSFER_CREATE_RESET } from "../../../Redux/Constants/withdrawConstans";
import { projectName } from "../../../App";

const popularTransfers = ["USDT", "BTC", "TRX", "ETH", "USDC", "XRP", "LTC"];

const Transfer = ({ match }) => {
    let { currency } = Object.fromEntries(
        new URLSearchParams(window.location.search)
    );
    let history = useHistory();
    if (!currency) {
        currency = "BTC";
    }
    const [currencyRight, setCurrencyRight] = useState(false);
    const [selectActive, setSelectActive] = useState(false);

    const [recipient, setRecipient] = useState("");

    const [amount, setAmount] = useState();

    const toastId = React.useRef(null);

    const dispatch = useDispatch();
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    };

    const transferCreate = useSelector((state) => state.transferCreate);
    const { successTransferCreate, loadingCreate, errorTransferCreate } =
        transferCreate;
    const { loadingUserTransfer, userTransfer, errorUserTransfer } =
        useSelector((state) => state.transferListMy);
    console.log(userTransfer);
    console.log(transferCreate);
    const userDetails = useSelector((state) => state.userDetails);
    const { user, loadingUser } = userDetails;
    useEffect(() => {
        dispatch(getUserDetails("profile", undefined, "/profile/transfer"));
    }, [dispatch, match]);
    useEffect(() => {
        dispatch(getUserDetails("profile"));
    }, [transferCreate]);
    useEffect(() => {
        if (successTransferCreate) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success(
                    "Transfer successed",
                    Toastobjects
                );
            }
        } else if (errorTransferCreate) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(
                    errorTransferCreate,
                    Toastobjects
                );
            }
        }
        dispatch(listMyTransfer());
      //  dispatch({type:TRANSFER_CREATE_RESET});
    }, [dispatch, transferCreate]);
    console.log(errorTransferCreate);
    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(
            createTransfer({
                amount: amount,
                symbol: currency,
                recipient,
            })
        );
    };

    useEffect(() => {
        if (!loadingUser) {
            if (!user.walletsSpot.find((item) => item.type == currency)) {
                console.log(currency, "find");
                history.push("/profile/deposit?currency=BTC");
            } else {
                setCurrencyRight(true);
            }
        }
    }, [dispatch, user]);
    return (
        <main
            className="main transaction-history  other"
            style={{ backgroundColor: "#EAECEF" }}
        >
            <Toast />
            
            <div className="main__box">
                <section className="form-coins transfer">
                    <div className="form-coins__container">
                        <div className="form-coins__left">
                            <div className="step">
                                <div className="step__number">1</div>
                                <div className="step__wrapper">
                                    <div className="step__title">
                                        Select coin to internal transfer
                                    </div>
                                    <div className="step__description">
                                        Choose the coin to send
                                    </div>
                                    <div
                                        className="step__select"
                                        onClick={() =>
                                            setSelectActive(!selectActive)
                                        }
                                    >
                                        <div className="select step-form-coins-transfer">
                                            <div className="select__selected">
                                                <div className="select__img">
                                                    <img
                                                        src={
                                                            !loadingUser &&
                                                            currencyRight
                                                                ? user.walletsSpot.find(
                                                                      (item) =>
                                                                          item.type ==
                                                                          currency
                                                                  ).image
                                                                : null
                                                        }
                                                        alt={
                                                            !loadingUser &&
                                                            currencyRight
                                                                ? user.walletsSpot.find(
                                                                      (item) =>
                                                                          item.type ==
                                                                          currency
                                                                  ).name
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
                                                          ).name
                                                        : null}
                                                    <span>
                                                        {!loadingUser &&
                                                        currencyRight
                                                            ? user.walletsSpot.find(
                                                                  (item) =>
                                                                      item.type ==
                                                                      currency
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
                                                                      history.push(
                                                                          `/profile/transfer?currency=${item.type}`
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
                                                                      {
                                                                          item.name
                                                                      }{" "}
                                                                      <span>
                                                                          {
                                                                              item.type
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
                                            {popularTransfers.map((item) => (
                                                <div
                                                    className="step__populars-btn"
                                                    onClick={() =>
                                                        history.push(
                                                            `/profile/transfer?currency=${item}`
                                                        )
                                                    }
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step__number">2</div>
                                <div className="step__wrapper">
                                    <div className="step__title">
                                        Recipient email / ID
                                    </div>
                                    <div className="step__description">
                                        Enter the recipient email or account ID
                                        of the other user
                                    </div>
                                    <div className="step__input address">
                                        <input
                                            className="input__01"
                                            type="text"
                                            placeholder="Enter user Email or account ID"
                                            id="transfer_email"
                                            value={recipient}
                                            onChange={(e) =>
                                                setRecipient(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step__number">3</div>
                                <div className="step__wrapper">
                                    <div className="step__title">Amount</div>
                                    <div className="step__description">
                                        Enter the amount to transfer
                                    </div>
                                    <div className="step__enter amount">
                                        <div className="step__enter-input">
                                            <input
                                                className="input__01"
                                                type="text"
                                                placeholder="Enter amount"
                                                id="amount_input"
                                                value={amount}
                                                onChange={(e) =>
                                                    setAmount(e.target.value)
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
                                                      ).type
                                                    : null}{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step__available">
                                        <div>
                                            Available:{" "}
                                            <span id="available_balance">
                                                {!loadingUser && currencyRight
                                                    ? user.walletsSpot.find(
                                                          (item) =>
                                                              item.type ==
                                                              currency
                                                      ).balance
                                                    : null}
                                            </span>{" "}
                                            {!loadingUser
                                                ? user.walletsSpot.find(
                                                      (item) =>
                                                          item.type == currency
                                                  ).type
                                                : null}
                                        </div>
                                        Fee: 0{" "}
                                        {!loadingUser
                                            ? user.walletsSpot.find(
                                                  (item) =>
                                                      item.type == currency
                                              ).type
                                            : null}{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="form-coins__btn">
                                <button
                                    className="buttons__01"
                                    onClick={submitHandler}
                                >
                                    Submit transfer
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
                                    Please note the network fee will only be
                                    charged for withdrawals to non-{projectName}
                                    addresses. If the recipient address is
                                    correct and belongs to a {projectName} account,
                                    the network fee will not be deducted.
                                </div>
                            </div>
                        </div>
                        <div className="form-coins__right">
                            <div className="form-coins__container">
                                <div
                                    className="table-transaction__wrapper"
                                    style={{ maxWidth: "100%" }}
                                >
                                    <div className="table-transaction__names">
                                        <div className="table-transaction__name table-transaction__name-time">
                                            Transfer ID
                                        </div>
                                        <div className="table-transaction__name table-transaction__name-type">
                                            Date
                                        </div>
                                        <div className="table-transaction__name table-transaction__name-amount">
                                            User email
                                        </div>
                                        <div className="table-transaction__name table-transaction__name-asset">
                                            Amount
                                        </div>
                                        <div className="table-transaction__name table-transaction__name-status">
                                            Status
                                        </div>
                                    </div>
                                    <div className="table-transaction__items">
                                        {!loadingUserTransfer &&
                                        userTransfer.length ? (
                                            userTransfer.map((item) => <div className="table-transaction__item">
                                                <div className="table-transaction__name-time">
                                                    {item._id}
                                                </div>
                                                <div className="table-transaction__name-type">
                                                    {createdAtConverter(item.createdAt)}
                                                </div>
                                                <div className="table-transaction__name-amount">
                                                    {item.recipient}
                                                </div>
                                                <div className="table-transaction__name-asset">
                                                    {item.amount}
                                                </div>
                                                {item.status == 0 ? (
                                                      <div className="table-transaction__item-status table-transaction__item-canceled">
                                                          <span>
                                                              Canceled
                                                          </span>
                                                      </div>
                                                  ) : item.status == 1 ? (
                                                      <div class="table-transaction__item-status table-transaction__item-completed">
                                                          <span>Completed</span>
                                                      </div>
                                                  )  : null}
                                            </div>)
                                        ) : (
                                            <div className="table-transaction__item-notFund">
                                                <svg
                                                    width={117}
                                                    height={128}
                                                    viewBox="0 0 117 128"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M88.1263 43.7315C99.2639 57.5065 111.697 70.4102 110.496 82.0423C109.318 93.6509 94.4604 103.988 80.2381 107.897C65.9922 111.782 52.3821 109.239 38.5601 103.823C24.7616 98.4309 10.7513 90.166 7.14859 78.3925C3.56946 66.6427 10.3981 51.3607 20.4997 37.8213C30.6013 24.3054 43.9759 12.5084 55.5609 13.9448C67.1696 15.3576 76.9886 29.9802 88.1263 43.7315Z"
                                                        fill="#F8F8F8"
                                                    />
                                                    <circle
                                                        cx="21.4658"
                                                        cy="96.2126"
                                                        r="1.09152"
                                                        fill="#39BEE8"
                                                    />
                                                    <circle
                                                        cx="71.6756"
                                                        cy="97.6681"
                                                        r="1.8192"
                                                        fill="#FF9F67"
                                                    />
                                                    <ellipse
                                                        cx="52.756"
                                                        cy="16.1681"
                                                        rx="1.8192"
                                                        ry="1.8192"
                                                        fill="#B3DB64"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M37.6861 41.5868C37.6661 41.5856 37.6461 41.5844 37.6261 41.5833C36.4642 41.5158 35.3034 41.5467 34.1438 41.676C33.9954 41.6925 33.8626 41.6545 33.7453 41.562C33.6281 41.4695 33.5602 41.3492 33.5418 41.201C33.5417 41.1998 33.5415 41.1987 33.5414 41.1975C33.5412 41.1964 33.5411 41.1952 33.541 41.194C33.5243 41.0443 33.563 40.9105 33.6571 40.7928C33.7512 40.6751 33.8731 40.6079 34.0229 40.5912C35.2647 40.4527 36.508 40.4214 37.7525 40.4974C37.9029 40.5065 38.0281 40.5675 38.128 40.6804C38.2279 40.7933 38.2732 40.9249 38.264 41.0753C38.2549 41.2257 38.1938 41.3509 38.081 41.4508C37.9681 41.5507 37.8365 41.596 37.6861 41.5868ZM26.6343 43.3917C26.6348 43.3928 26.6353 43.3938 26.6358 43.3949C26.6363 43.3959 26.6369 43.397 26.6374 43.398C26.6694 43.4616 26.7122 43.5167 26.7659 43.5635C26.8195 43.6103 26.8799 43.6453 26.9472 43.6684C27.0156 43.692 27.0859 43.7015 27.1582 43.6971C27.2304 43.6927 27.2991 43.6746 27.3641 43.6428C28.4283 43.1235 29.5303 42.6985 30.6699 42.368C30.8134 42.3265 30.9215 42.2405 30.9944 42.1101C31.0672 41.9797 31.0838 41.8426 31.044 41.6986C31.0437 41.6975 31.0434 41.6964 31.0431 41.6953C31.0427 41.6941 31.0424 41.693 31.0421 41.6919C31.0219 41.6224 30.9893 41.5594 30.944 41.5029C30.8988 41.4464 30.8445 41.4007 30.7811 41.3658C30.7177 41.3309 30.65 41.3094 30.5781 41.3014C30.5062 41.2935 30.4354 41.2996 30.3659 41.3197C29.1661 41.6677 28.0059 42.115 26.8854 42.6619C26.7499 42.728 26.6577 42.8323 26.6087 42.9748C26.5596 43.1173 26.5682 43.2563 26.6343 43.3917ZM20.8821 47.7908C20.8829 47.7916 20.8838 47.7924 20.8846 47.7932C20.8855 47.7941 20.8864 47.7949 20.8872 47.7957C20.9389 47.8446 20.9979 47.8819 21.0642 47.9077C21.1305 47.9336 21.1992 47.9459 21.2703 47.9449C21.3427 47.9438 21.4121 47.9289 21.4785 47.9003C21.545 47.8716 21.6034 47.8313 21.6538 47.7793C22.4788 46.9295 23.3707 46.1574 24.3293 45.4631C24.3879 45.4207 24.4362 45.3686 24.4741 45.307C24.512 45.2453 24.5367 45.1788 24.5481 45.1073C24.5593 45.0371 24.5569 44.9673 24.5409 44.898C24.5248 44.8287 24.4963 44.7649 24.4553 44.7068C24.4547 44.7058 24.454 44.7048 24.4533 44.7039C24.4526 44.7029 24.4519 44.7019 24.4512 44.701C24.3628 44.5789 24.2442 44.506 24.0954 44.4822C23.9466 44.4584 23.8111 44.4907 23.6891 44.5791C22.6792 45.3105 21.7397 46.1238 20.8707 47.019C20.7657 47.1272 20.7143 47.2566 20.7165 47.4073C20.7188 47.558 20.774 47.6858 20.8821 47.7908ZM16.9447 53.889C16.9458 53.8894 16.9469 53.8899 16.9479 53.8904C16.949 53.8909 16.9501 53.8914 16.9512 53.8918C17.0878 53.952 17.2259 53.9556 17.3655 53.9024C17.505 53.8492 17.6058 53.7547 17.6677 53.6189C18.0922 52.6883 18.5851 51.7907 19.1466 50.9261C19.234 50.7915 19.3229 50.6579 19.4133 50.5255C19.4975 50.4021 19.5262 50.267 19.4995 50.12C19.4727 49.9731 19.3982 49.8568 19.2759 49.771C19.2749 49.7703 19.274 49.7697 19.273 49.769C19.2721 49.7683 19.2711 49.7677 19.2702 49.767C19.1457 49.6821 19.0094 49.6536 18.8613 49.6815C18.7132 49.7095 18.5967 49.7857 18.5117 49.9102C18.4167 50.0495 18.3231 50.19 18.2311 50.3316C17.6403 51.2415 17.1214 52.1862 16.6746 53.1659C16.6446 53.2318 16.6283 53.3009 16.6258 53.3732C16.6232 53.4455 16.6346 53.5156 16.6599 53.5834C16.6853 53.6512 16.7226 53.7115 16.7719 53.7645C16.8213 53.8174 16.8789 53.8589 16.9447 53.889ZM15.3022 60.9483C15.3034 60.9484 15.3046 60.9485 15.3057 60.9486C15.3069 60.9487 15.3081 60.9487 15.3093 60.9488C15.3803 60.9537 15.4495 60.945 15.5171 60.9227C15.5847 60.9005 15.6456 60.8664 15.6998 60.8203C15.755 60.7735 15.7991 60.7178 15.8321 60.6534C15.8652 60.5891 15.8846 60.5208 15.8905 60.4487C15.9868 59.267 16.1838 58.1037 16.4816 56.9585C16.5192 56.814 16.5006 56.6771 16.4258 56.5479C16.3511 56.4186 16.2417 56.3343 16.0977 56.2948C16.0965 56.2945 16.0954 56.2942 16.0942 56.2939C16.0931 56.2936 16.0919 56.2933 16.0908 56.293C15.9449 56.255 15.807 56.2742 15.6771 56.3506C15.5471 56.4269 15.4632 56.5379 15.4252 56.6838C15.1115 57.8901 14.904 59.1155 14.8026 60.36C14.7903 60.5102 14.833 60.6428 14.9306 60.7576C15.0281 60.8725 15.152 60.9361 15.3022 60.9483ZM15.9076 63.9891C15.8941 63.8404 15.8303 63.7179 15.7162 63.6215C15.6021 63.5252 15.4706 63.4828 15.3217 63.4944C15.3205 63.4945 15.3194 63.4946 15.3182 63.4947C15.317 63.4948 15.3159 63.4949 15.3147 63.495C15.2426 63.5016 15.1745 63.5216 15.1105 63.5553C15.0464 63.5889 14.9912 63.6335 14.9448 63.6891C14.8985 63.7447 14.8646 63.8071 14.8431 63.8762C14.8215 63.9453 14.814 64.0158 14.8206 64.0879C14.9335 65.3302 15.1516 66.5539 15.4747 67.7593C15.5137 67.9048 15.5985 68.0153 15.729 68.0906C15.8595 68.166 15.9976 68.1841 16.1431 68.1451C16.1443 68.1448 16.1454 68.1445 16.1465 68.1442C16.1476 68.1439 16.1488 68.1436 16.1499 68.1432C16.2184 68.1239 16.2807 68.0924 16.3369 68.0488C16.3931 68.0051 16.4389 67.9524 16.4745 67.8908C16.5107 67.8281 16.5335 67.7609 16.5429 67.6891C16.5524 67.6174 16.5477 67.5466 16.529 67.4767C16.222 66.3316 16.0149 65.1691 15.9076 63.9891ZM19.4213 74.6102C19.4206 74.6107 19.42 74.6111 19.4193 74.6116C19.4187 74.612 19.418 74.6125 19.4174 74.6129C19.2932 74.6983 19.157 74.7273 19.0088 74.6999C18.8606 74.6725 18.7438 74.5967 18.6584 74.4725C18.1245 73.6962 17.6007 72.8616 17.087 71.9685C17.0846 71.9643 17.0822 71.96 17.0799 71.9557C17.0775 71.9514 17.0753 71.9471 17.0731 71.9427C16.9598 71.7188 16.8505 71.493 16.7451 71.2653C16.6818 71.1285 16.6761 70.9894 16.728 70.8479C16.78 70.7064 16.8743 70.604 17.0111 70.5407C17.0122 70.5402 17.0132 70.5398 17.0143 70.5393C17.0154 70.5388 17.0164 70.5383 17.0175 70.5378C17.0825 70.5088 17.1505 70.493 17.2216 70.4906C17.2927 70.4881 17.3617 70.4992 17.4285 70.5237C17.4964 70.5486 17.557 70.5856 17.6102 70.6347C17.6634 70.6837 17.7052 70.7411 17.7356 70.8068C17.8337 71.0187 17.9353 71.2288 18.0405 71.437C18.5373 72.2999 19.043 73.1055 19.5578 73.854C19.5988 73.9136 19.6268 73.9788 19.6419 74.0496C19.657 74.1204 19.6579 74.1914 19.6447 74.2625C19.6317 74.3329 19.6059 74.3982 19.5672 74.4583C19.5285 74.5185 19.4799 74.5691 19.4213 74.6102L19.4213 74.6102ZM21.3956 76.4871C21.3245 76.4841 21.2554 76.4946 21.1884 76.5186C21.1214 76.5426 21.0613 76.5784 21.0083 76.6259C21.0075 76.6266 21.0066 76.6274 21.0058 76.6281C21.0049 76.6289 21.0041 76.6297 21.0033 76.6304C20.8923 76.7324 20.8336 76.8586 20.8272 77.0092C20.8208 77.1598 20.8686 77.2905 20.9705 77.4015C21.8701 78.381 22.7963 79.212 23.749 79.8947C23.8078 79.9368 23.8724 79.9661 23.9429 79.9825C24.0134 79.999 24.0843 80.0013 24.1558 79.9895C24.2272 79.9777 24.2936 79.9527 24.355 79.9145C24.4165 79.8763 24.4683 79.8277 24.5105 79.7689C24.5115 79.7675 24.5125 79.7661 24.5135 79.7647C24.5145 79.7632 24.5154 79.7618 24.5164 79.7604C24.6007 79.6379 24.63 79.5034 24.6044 79.357C24.5788 79.2105 24.5056 79.094 24.3847 79.0074C23.4932 78.3686 22.6231 77.5872 21.7744 76.6632C21.7254 76.6099 21.6682 76.568 21.6025 76.5375C21.5369 76.507 21.4679 76.4902 21.3956 76.4871ZM27.0333 80.6399C26.9704 80.6708 26.9155 80.7122 26.8686 80.7643C26.8217 80.8163 26.7862 80.8752 26.7619 80.9409C26.7611 80.943 26.7604 80.9451 26.7596 80.9472C26.7589 80.9493 26.7581 80.9514 26.7574 80.9536C26.7088 81.0962 26.7177 81.2351 26.7841 81.3704C26.8506 81.5057 26.9551 81.5976 27.0978 81.6463C28.2715 82.0466 29.4782 82.2468 30.7179 82.2468C30.8686 82.2468 30.9972 82.1935 31.1038 82.0869C31.2104 81.9804 31.2636 81.8517 31.2636 81.701C31.2636 81.5682 31.2208 81.451 31.1353 81.3494C31.0497 81.2478 30.9414 81.1857 30.8105 81.1632C30.7952 81.1605 30.7798 81.1586 30.7644 81.1572C30.7489 81.1559 30.7334 81.1553 30.7179 81.1553C29.5989 81.1553 28.5096 80.9746 27.4501 80.6132C27.3816 80.5898 27.3113 80.5805 27.2391 80.5851C27.1668 80.5897 27.0982 80.608 27.0333 80.6399Z"
                                                        fill="#0D0938"
                                                    />
                                                    <rect
                                                        width="6.54911"
                                                        height="1.45536"
                                                        rx="0.727679"
                                                        transform="matrix(0.981627 -0.190809 -0.190809 -0.981627 95.1315 28.2317)"
                                                        fill="#0D0938"
                                                    />
                                                    <rect
                                                        x="89.9205"
                                                        y="21.1042"
                                                        width="6.54911"
                                                        height="1.45536"
                                                        rx="0.727679"
                                                        transform="rotate(-60 89.9205 21.1042)"
                                                        fill="#0D0938"
                                                    />
                                                    <rect
                                                        x="93.0757"
                                                        y="23.4785"
                                                        width="6.54911"
                                                        height="1.45536"
                                                        rx="0.727679"
                                                        transform="rotate(-40 93.0757 23.4785)"
                                                        fill="#0D0938"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M93.8698 30.6036V76.9291C93.8698 80.948 90.6119 84.2059 86.593 84.2059H49.8453C45.8264 84.2059 42.5685 80.948 42.5685 76.9291V28.5385C42.5685 24.5196 45.8264 21.2617 49.8453 21.2617H85.3903"
                                                        fill="white"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M88.7761 34.242V80.5676C88.7761 84.5864 85.5181 87.8443 81.4993 87.8443H44.7515C40.7327 87.8443 37.4747 84.5864 37.4747 80.5676V32.1769C37.4747 28.1581 40.7327 24.9001 44.7515 24.9001H80.2966V25.9917L44.7515 25.9917C43.0435 25.9917 41.5856 26.5955 40.3779 27.8033C39.1701 29.011 38.5662 30.4689 38.5662 32.1769L38.5662 80.5676C38.5662 82.2756 39.1701 83.7335 40.3779 84.9412C41.5856 86.1489 43.0435 86.7528 44.7515 86.7528H81.4993C83.2073 86.7528 84.6652 86.149 85.8729 84.9412C87.0807 83.7335 87.6845 82.2756 87.6846 80.5676V34.242H88.7761Z"
                                                        fill="#0D0938"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M88.5367 33.6174C88.5808 33.6673 88.6146 33.7234 88.6382 33.7857C88.6618 33.8479 88.6736 33.9124 88.6736 33.979C88.6736 34.1297 88.6203 34.2583 88.5137 34.3649C88.4072 34.4714 88.2785 34.5247 88.1278 34.5247H82.1134C81.298 34.5247 80.619 34.2203 80.0765 33.6116C79.534 33.0029 79.3095 32.2935 79.4029 31.4835L80.0993 25.45C80.107 25.3831 80.1264 25.3199 80.1575 25.2602C80.1887 25.2005 80.2295 25.1483 80.2799 25.1037C80.3341 25.0558 80.3954 25.0201 80.4639 24.9965C80.5323 24.973 80.6026 24.9634 80.6749 24.9679C80.7471 24.9723 80.8158 24.9904 80.8808 25.0221C80.9458 25.0539 81.0023 25.0968 81.0503 25.1511L88.5367 33.6174ZM81.0434 26.791L86.9168 33.4332H82.1135C81.6243 33.4332 81.2169 33.2506 80.8915 32.8854C80.566 32.5202 80.4313 32.0946 80.4874 31.6087L81.0434 26.791Z"
                                                        fill="#0D0938"
                                                    />
                                                    <rect
                                                        x="45.4792"
                                                        y="36.1792"
                                                        width="21.8304"
                                                        height="1.09152"
                                                        rx="0.545759"
                                                        fill="#0D0938"
                                                    />
                                                    <rect
                                                        x="45.4792"
                                                        y="43.092"
                                                        width="29.1071"
                                                        height="1.09152"
                                                        rx="0.545759"
                                                        fill="#0D0938"
                                                    />
                                                    <rect
                                                        x="45.4792"
                                                        y="50.0051"
                                                        width="38.567"
                                                        height="1.09152"
                                                        rx="0.545759"
                                                        fill="#0D0938"
                                                    />
                                                    <rect
                                                        x="45.4792"
                                                        y="56.918"
                                                        width="38.567"
                                                        height="1.09152"
                                                        rx="0.545759"
                                                        fill="#0D0938"
                                                    />
                                                    <rect
                                                        x="45.4792"
                                                        y="77.6567"
                                                        width="38.567"
                                                        height="1.09152"
                                                        rx="0.545759"
                                                        fill="#0D0938"
                                                    />
                                                    <rect
                                                        x="45.4792"
                                                        y="63.8308"
                                                        width="38.567"
                                                        height="1.09152"
                                                        rx="0.545759"
                                                        fill="#0D0938"
                                                    />
                                                    <rect
                                                        x="45.4792"
                                                        y="70.7439"
                                                        width="38.567"
                                                        height="1.09152"
                                                        rx="0.545759"
                                                        fill="#0D0938"
                                                    />
                                                    <circle
                                                        cx="39.6575"
                                                        cy="80.9312"
                                                        r="15.2812"
                                                        fill="#F8F8F8"
                                                    />
                                                    <ellipse
                                                        cx="37.1103"
                                                        cy="82.7505"
                                                        rx="11.279"
                                                        ry="11.279"
                                                        fill="#D0C4F2"
                                                    />
                                                    <rect
                                                        x="47.3169"
                                                        y="88.7422"
                                                        width="1.09152"
                                                        height="4.36607"
                                                        rx="0.545759"
                                                        transform="rotate(-45 47.3169 88.7422)"
                                                        fill="#0D0938"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M51.1764 91.0572L50.4041 91.8296C50.12 92.1137 49.9779 92.4566 49.9779 92.8584C49.9779 93.2602 50.12 93.6031 50.4041 93.8872L55.0355 98.5187C55.3196 98.8028 55.6626 98.9448 56.0643 98.9448C56.4661 98.9448 56.8091 98.8028 57.0932 98.5187L57.8655 97.7463C58.1496 97.4622 58.2917 97.1193 58.2917 96.7175C58.2917 96.3157 58.1496 95.9728 57.8655 95.6887L53.2341 91.0572C52.95 90.7731 52.607 90.6311 52.2052 90.6311C51.8035 90.6311 51.4605 90.7731 51.1764 91.0572ZM51.1755 93.1154C51.0042 92.944 51.0042 92.7727 51.1755 92.6013L51.9478 91.829C52.1192 91.6576 52.2905 91.6576 52.4619 91.829L57.0933 96.4604C57.2647 96.6318 57.2647 96.8031 57.0933 96.9745L56.321 97.7468C56.1496 97.9181 55.9783 97.9181 55.8069 97.7468L51.1755 93.1154Z"
                                                        fill="#0D0938"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M47.5735 72.5338C51.9782 76.9385 51.9782 84.08 47.5735 88.4847C43.1688 92.8895 36.0273 92.8895 31.6226 88.4847C27.2178 84.08 27.2178 76.9385 31.6226 72.5338C36.0273 68.1291 43.1688 68.1291 47.5735 72.5338ZM49.7855 80.5093C49.7855 83.3225 48.7909 85.7237 46.8017 87.7129C44.8125 89.7022 42.4112 90.6968 39.598 90.6968C36.7848 90.6968 34.3836 89.7022 32.3944 87.7129C30.4051 85.7237 29.4105 83.3225 29.4105 80.5093C29.4105 77.6961 30.4051 75.2949 32.3944 73.3056C34.3836 71.3164 36.7848 70.3218 39.598 70.3218C42.4112 70.3218 44.8124 71.3164 46.8017 73.3056C48.7909 75.2949 49.7855 77.6961 49.7855 80.5093Z"
                                                        fill="#0D0938"
                                                    />
                                                    <rect
                                                        x="43.5696"
                                                        y="76.429"
                                                        width="1.09152"
                                                        height="11.6429"
                                                        rx="0.545759"
                                                        transform="rotate(45 43.5696 76.429)"
                                                        fill="#0D0938"
                                                    />
                                                    <rect
                                                        width="1.09152"
                                                        height="11.6429"
                                                        rx="0.545759"
                                                        transform="matrix(-0.707107 0.707107 0.707107 0.707107 36.1084 76.4285)"
                                                        fill="#0D0938"
                                                    />
                                                </svg>
                                                No transfers found
                                            </div>
                                        )}
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
export default Transfer;
