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
import { projectName } from "../../../App";

const popularDeposits = ["USDT", "BTC", "TRX", "ETH", "USDC", "XRP", "LTC"];

const Deposit = ({ match }) => {
    let { currency } = Object.fromEntries(
        new URLSearchParams(window.location.search)
    );
    let history = useHistory();
    if (!currency) {
       currency="BTC";
    }
    
    const [showAdress, setShowadress] = useState(false);
    const [currencyRight, setCurrencyRight] = useState(false);
    const [selectActive, setSelectActive] = useState(false);
    const [networkShow, setNetworkShow] = useState(false);
    const [networkUse, setNetwork] = useState("");

    const toastId = React.useRef(null);
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    };

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { user, loadingUser } = userDetails;

    useEffect(() => {
        dispatch(getUserDetails("profile",undefined,"/profile/deposit"));
    }, [dispatch,match]);

    

    const copyThisAddress = (text) => {
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.success(
                "Crypto address copied to clipboard",
                Toastobjects
            );
           
        }
    };
    useEffect(() => {
        if (!loadingUser) {
            if (!user.walletsSpot.find((item) => item.type == currency)) {
                console.log(currency, "find");
                history.push("/profile/deposit?currency=BTC");
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
    const showAdressHandler=(e)=>{
        e.preventDefault();
        console.log("showadresshandler");
        
       dispatch(getUserDetails("profile",{action:"GET_WALLET",network:networkUse, currency},undefined,true));
       console.log(setShowadress(true));
    }

    

    return (
        <div className="webp other" style={{ backgroundColor: "#EAECEF" }}>
            <Toast />
            <main className="main transaction-history">
              
                <div className="main__box">
                    <section className="form-coins deposit">
                        <div className="form-coins__container">
                            <div className="form-coins__left">
                                <div className="step">
                                    <div className="step__number">1</div>
                                    <div className="step__wrapper">
                                        <div className="step__title">
                                            Select coin to deposit
                                        </div>
                                        <div className="step__description">
                                            Select the cryptocurrency you want
                                            to deposit into your account
                                        </div>
                                        <div
                                            className="step__select"
                                            onClick={() =>
                                                setSelectActive(!selectActive)
                                            }
                                        >
                                            <div className="select step-form-coins-deposit">
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
                                                              ).fakeName
                                                            : null}{" "}
                                                        <span>
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
                                                        ? user.walletsSpot.filter(item=>item.depositPossible).map(
                                                              (item) => (
                                                                  <div
                                                                      className="select__menu-item"
                                                                      onClick={() =>
                                                                          window.location.replace(
                                                                              `/profile/deposit?currency=${item.type}`
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
                                            {popularDeposits.map(
                                                    (item) => (
                                                        <div
                                                            className="step__populars-btn"
                                                            onClick={() =>
                                                                history.push(
                                                                    `/profile/deposit?currency=${item}`
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
                                            Make sure you selected the same
                                            network on the platform where you
                                            are withdrawing funds for this
                                            deposit
                                        </div>
                                        <div
                                            className="step__select step-form-coins-deposit-network"
                                            onClick={() => {
                                                setNetworkShow(!networkShow);
                                            }}
                                        >
                                            <div className="select step-form-coins-network">
                                                <div className="select__selected">
                                                    <div className="select__name">
                                                        {!loadingUser? user.walletsSpot.find(
                                                            (item) =>
                                                                item.type ==
                                                                currency
                                                        ).fakeName:null}{" "}
                                                        <span>({networkUse})</span>
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
                                <div
                                    className="step"
                                    id="address_show_block"
                                    onClick={(e)=>showAdressHandler(e)}
                                    style={{
                                        display: `${showAdress ? "none" : ""}`,
                                    }}
                                >
                                    <div className="step__number">3</div>
                                    <div className="step__wrapper">
                                        <span
                                            id="show_address_btn"
                                            className="buttons__01"
                                            style={{
                                                width: "160px",
                                                height: "41px",
                                            }}
                                            
                                        >
                                            Show address
                                        </span>
                                    </div>
                                </div>
                                <CopyToClipboard
                                    onCopy={() => copyThisAddress()}
                                    text={
                                        !loadingUser &&networkUse
                                            ? user.walletsSpot.find(
                                                  (item) =>
                                                      item.type == currency
                                              ).wallets.find(item=>item.network==networkUse).adress
                                            : null
                                    }
                                >
                                    <div
                                        id="address_show_after"
                                        className="step"
                                        style={{
                                            display: `${
                                                showAdress ? "" : "none"
                                            }`,
                                        }}
                                    >
                                        <div className="step__number">3</div>
                                        <div className="step__wrapper">
                                            <div className="step__title">
                                                Copy address/Scan QR code
                                            </div>
                                            <div className="step__description">
                                                Go to your other wallet and
                                                paste the address that you
                                                copied or you can scan QR code
                                                from your mobile device
                                            </div>
                                            <div className="input__01-box copy">
                                                <label className="input__01-copyText">
                                                    <input
                                                        className="input__01 input-address"
                                                        type="text"
                                                        id="address_input"
                                                        value={
                                                            !loadingUser &&networkUse
                                                                ? user.walletsSpot.find(
                                                                      (item) =>
                                                                          item.type == currency
                                                                  ).wallets.find(item=>item.network==networkUse).adress
                                                                : null
                                                        }
                                                    />
                                                    <button className="input__01-copyBtn input-address-btn">
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
                                                        Copy
                                                    </button>
                                                </label>
                                            </div>
                                            {/* <div className="step__qrcode">
                                                <div className="step__qrcode-btn">
                                                    Show QR
                                                    <svg
                                                        width={12}
                                                        height={12}
                                                        viewBox="0 0 12 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M6.10156 2.54688C6.3125 2.33594 6.66406 2.33594 6.875 2.54688L11.4453 7.09375C11.6562 7.32812 11.6562 7.67969 11.4453 7.89062L10.9062 8.42969C10.6953 8.64062 10.3438 8.64062 10.1094 8.42969L6.5 4.82031L2.86719 8.42969C2.63281 8.64062 2.28125 8.64062 2.07031 8.42969L1.53125 7.89062C1.32031 7.67969 1.32031 7.32812 1.53125 7.09375L6.10156 2.54688Z"
                                                            fill="#7044EE"
                                                        />
                                                    </svg>
                                                </div>
                                                <div
                                                    className="step__qrcode-code"
                                                    style={{ padding: 0 }}
                                                >
                                                    <img
                                                        id="qr_code_address"
                                                        src
                                                        style={{
                                                            width: "197px",
                                                        }}
                                                    />
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <div
                                    className="step"
                                    id="memo_block"
                                    style={{ display: "none" }}
                                >
                                    <div className="step__number">4</div>
                                    <div className="step__wrapper">
                                        <div className="step__title">
                                            Copy memo
                                        </div>
                                        <div className="step__description">
                                            Go to your other wallet and paste
                                            the memo
                                        </div>
                                        <div className="input__01-box copy">
                                            <label className="input__01-copyText">
                                                <input
                                                    className="input__01 input-address"
                                                    type="text"
                                                    id="memo_address_input"
                                                />
                                            </label>
                                        </div>
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
                                        12 network confirmations are required
                                        before your funds will be added to your
                                        account balance.
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
                                            Send only <span>{
                                                                !loadingUser &&
                                                                currencyRight
                                                                    ? user.walletsSpot.find(
                                                                          (
                                                                              item
                                                                          ) =>
                                                                              item.type ==
                                                                              currency
                                                                      ).userType
                                                                    : null
                                                            }</span> to this
                                            deposit address
                                        </div>
                                        <div className="important-information__item">
                                            Ensure the network is{" "}
                                            <span>{
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
                                                            } ({
                                                                !loadingUser &&
                                                                currencyRight
                                                                    ? user.walletsSpot.find(
                                                                          (
                                                                              item
                                                                          ) =>
                                                                              item.type ==
                                                                              currency
                                                                      ).userType
                                                                    : null
                                                            })</span>
                                        </div>
                                        <div className="important-information__item">
                                            Deposits via smart contracts are not
                                            supported
                                        </div>
                                        <div className="important-information__item">
                                            Do not send NFTs to this address
                                        </div>
                                    </div>
                                    <div className="important-information__info">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17 9.05246C17 13.4997 13.4183 17.1049 9 17.1049C4.58172 17.1049 1 13.4997 1 9.05246C1 4.60521 4.58172 1 9 1C13.4183 1 17 4.60521 17 9.05246Z"
                                                stroke="#50606B"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M10.4496 7.54403C10.4496 7.95824 10.7854 8.29403 11.1996 8.29403C11.6138 8.29403 11.9496 7.95824 11.9496 7.54403H10.4496ZM7.34961 10.5596C7.34961 10.1453 7.01382 9.80956 6.59961 9.80956C6.1854 9.80956 5.84961 10.1453 5.84961 10.5596H7.34961ZM9.74961 5.02539C9.74961 4.61118 9.41382 4.27539 8.99961 4.27539C8.5854 4.27539 8.24961 4.61118 8.24961 5.02539L9.74961 5.02539ZM8.24961 13.0778C8.24961 13.4921 8.5854 13.8278 8.99961 13.8278C9.41382 13.8278 9.74961 13.4921 9.74961 13.0778H8.24961ZM8.99961 8.18581C8.24799 8.18581 7.88159 8.06399 7.71872 7.95424C7.61927 7.88723 7.54961 7.80071 7.54961 7.54403H6.04961C6.04961 8.18412 6.27994 8.79349 6.88049 9.19818C7.41763 9.56013 8.15123 9.68581 8.99961 9.68581V8.18581ZM7.54961 7.54403C7.54961 7.38986 7.63265 7.18877 7.88935 6.99931C8.14582 6.81002 8.5359 6.67028 8.99961 6.67028V5.17028C8.24829 5.17028 7.53837 5.39404 6.9986 5.79243C6.45905 6.19065 6.04961 6.80143 6.04961 7.54403H7.54961ZM8.99961 6.67028C9.46332 6.67028 9.8534 6.81002 10.1099 6.99931C10.3666 7.18877 10.4496 7.38986 10.4496 7.54403H11.9496C11.9496 6.80143 11.5402 6.19065 11.0006 5.79243C10.4608 5.39404 9.75093 5.17028 8.99961 5.17028V6.67028ZM10.6496 10.5596C10.6496 10.8574 10.5356 11.0282 10.3104 11.1635C10.0397 11.3261 9.59414 11.4333 8.99961 11.4333V12.9333C9.73057 12.9333 10.485 12.8085 11.0829 12.4492C11.7264 12.0626 12.1496 11.4215 12.1496 10.5596H10.6496ZM8.99961 11.4333C8.46653 11.4333 8.01735 11.2858 7.72282 11.0865C7.42402 10.8844 7.34961 10.6843 7.34961 10.5596H5.84961C5.84961 11.3316 6.31246 11.9434 6.88228 12.3289C7.45638 12.7173 8.20721 12.9333 8.99961 12.9333V11.4333ZM8.99961 9.68581C9.75728 9.68581 10.1762 9.80152 10.3898 9.9409C10.536 10.0363 10.6496 10.1791 10.6496 10.5596H12.1496C12.1496 9.78022 11.8632 9.11115 11.2094 8.68461C10.623 8.30207 9.84194 8.18581 8.99961 8.18581V9.68581ZM9.74961 5.92028L9.74961 5.02539L8.24961 5.02539L8.24961 5.92028L9.74961 5.92028ZM8.24961 12.1833V13.0778H9.74961V12.1833H8.24961Z"
                                                fill="#50606B"
                                            />
                                        </svg>
                                        Minimum deposit:{" "}
                                        <span>{
                                                                !loadingUser &&
                                                                currencyRight
                                                                    ? user.walletsSpot.find(
                                                                          (
                                                                              item
                                                                          ) =>
                                                                              item.type ==
                                                                              currency
                                                                      ).min_receive
                                                                    : null
                                                            } {
                                                                !loadingUser &&
                                                                currencyRight
                                                                    ? user.walletsSpot.find(
                                                                          (
                                                                              item
                                                                          ) =>
                                                                              item.type ==
                                                                              currency
                                                                      ).userType
                                                                    : null
                                                            }</span>
                                    </div>
                                </div>
                                <div className="form-faq">
                                    <div className="form-faq__block">
                                        <div className="form-faq__question">
                                            Is it safe to deposit and store my
                                            cryptocurrencies with {projectName}?
                                        </div>
                                        <div className="form-faq__answer">
                                            Yes, it is safe to do so! To
                                            maintain a high level of asset
                                            security and flexibility, {projectName}
                                            uses an industry-standard cold
                                            wallet to keep your deposited assets
                                            safe, and a hot wallet that allows
                                            for all-day withdrawals. All
                                            withdrawals undergo a strict
                                            confirmation procedure and every
                                            withdrawal request is manually
                                            reviewed by our team daily at
                                            0:00AM, 8:00AM, and 4:00PM UTC. In
                                            addition, 100% of our traders'
                                            deposit assets are segregated from
                                            {projectName}'s own operating budget for
                                            increased financial accountability.
                                            If you wish to learn more, please
                                            refer to our Terms of Service.
                                        </div>
                                    </div>
                                    <div className="form-faq__block">
                                        <div className="form-faq__question">
                                            What type of coin deposits does
                                            {projectName} support?
                                        </div>
                                        <div className="form-faq__answer">
                                            We're constantly working on
                                            expanding the types of coin deposits
                                            we accept to better suit your needs.
                                            Here are the types of coin deposits
                                            we currently support: BTC ETH XRP
                                            EOS USDT DOGE DOT LTC XLM Note: Each
                                            coin must be based and have their
                                            transaction hash (TXID) validated on
                                            their respective standard
                                            blockchains. Depositing a coin type
                                            via a blockchain not listed above
                                            may result in the permanent loss of
                                            your coin.
                                        </div>
                                    </div>
                                    <div className="form-faq__block">
                                        <div className="form-faq__question">
                                            I don't see my deposit in my
                                            account. Why?
                                        </div>
                                        <div className="form-faq__answer">
                                            There might be a few reasons for the
                                            delay. Here are the major reasons
                                            for the respective coins: BTC —
                                            Unconfirmed transactions on the
                                            blockchain (at least 3 confirmation
                                            is needed). ETH — Unconfirmed
                                            transactions on the blockchain (at
                                            least 30 confirmations are needed),
                                            or it could be a Smart Contract
                                            transaction that {projectName} does not
                                            currently support. XRP or EOS —
                                            Invalid or missing tag/memo when the
                                            deposit was made. USDT — Unconfirmed
                                            transaction on the blockchain (1 or
                                            30 or 100 confirmations are needed
                                            depending if the deposit was an
                                            Omni, ERC-20, or TRC-20 transfer).
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};
export default Deposit;
