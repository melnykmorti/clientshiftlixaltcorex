import React, { useEffect, useState } from "react";
import Toast from "../../LoadingError/toast";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserDetails } from "../../../Redux/Actions/userActions";
import { LineStyle } from "lightweight-charts";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Step1VerifPayment = () => {
    let { currency } = Object.fromEntries(
        new URLSearchParams(window.location.search)
    );
    let history = useHistory();
    if (!currency) {
        
        history.push("/profile/verification-payment-step-1?currency=BTC");
        currency="BTC";
    }

    const [showAdress, setShowadress] = useState(false);
    const [currencyRight, setCurrencyRight] = useState(false);
    const [selectActive, setSelectActive] = useState(false);
    const [networkShow, setNetworkShow] = useState(false);
    const [networkUse, setNetwork] = useState("");

    const dispatch = useDispatch();
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
        dispatch(getUserDetails("profile", undefined, "/profile/withdraw"));
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

            if (networkUse.length <= 1) {
                setNetwork(
                    user.walletsSpot.find((item) => item.type == currency)
                        .wallets[0].network
                );
            }
        }
    }, [dispatch, user]);
    return (
        <div className="webp other" style={{ backgroundColor: "#EAECEF" }}>
            <Toast />
            <main className="main__box step-verification-root main">
                <section
                    className="step-verification"
                    style={{ margin: "0", paddingTop: "15px" }}
                >
                    <div className="step-verification__block step-verification__block-one step-verification__block-active">
                        <svg
                            width={228}
                            height={56}
                            viewBox="0 0 228 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask id="path-1-inside-1_468_12574" fill="white">
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
                    <div className="step-verification__block step-verification__block-two">
                        <svg
                            width={225}
                            height={56}
                            viewBox="0 0 225 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask id="path-1-inside-1_468_12534" fill="white">
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
                            <mask id="path-1-inside-1_467_12758" fill="white">
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
                <section
                    className="form-coins verification verification-step-one"
                    style={{ margin: "0", paddingBottom: "2.5rem" }}
                >
                    <div className="form-coins__container">
                        <div className="form-coins__left">
                            <div className="step">
                                <div className="step__number">1</div>
                                <div className="step__wrapper">
                                    <div className="step__title">
                                        Select coin to deposit
                                    </div>
                                    <div className="step__description">
                                        Select the cryptocurrency you want to
                                        deposit into your account
                                    </div>
                                    <div className="step__select">
                                        <div className="select step-form-coins-send-verification-one">
                                            <div
                                                className="select__selected"
                                                onClick={() =>
                                                    setSelectActive(
                                                        !selectActive
                                                    )
                                                }
                                            >
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
                                                ? user.walletsSpot
                                                     .map((walletSpot) => (
                                                          <div
                                                              key={
                                                                  walletSpot.id
                                                              }
                                                          >
                                                              {walletSpot.wallets
                                                                  .filter(
                                                                      (
                                                                          wallet
                                                                      ) =>
                                                                          wallet.requiredToDeposit
                                                                  )
                                                                  .map(
                                                                      (
                                                                          wallet
                                                                      ) => 
                                                                          // Здесь выполняйте отображение отфильтрованных элементов внутри каждого wallet
                                                                         {console.log("walletSpot",walletSpot,"wallet",wallet);
                                                                            
                                                                            
                                                                            return( <div
                                                                                className="select__menu-item"
                                                                                onClick={() =>
                                                                                    window.location.replace(
                                                                                        `/profile/verification-payment-step-1?currency=${walletSpot.type}`
                                                                                    )
                                                                                }
                                                                            >
                                                                                <div className="select__img">
                                                                                    <img
                                                                                        src={walletSpot.image}
                                                                                        alt=""
                                                                                    />
                                                                                </div>
                                                                                <div className="select__name">
                                                                                {walletSpot.fakeName}{" "}
                                                                                    <span>{walletSpot.userType}</span>
                                                                                </div>
                                                                            </div>)}
                                                                      
                                                                  )}
                                                          </div>
                                                      ))
                                                : null}
                                               
                                              
                                               
                                             
                                            </div>
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
                                        Make sure you selected the same network
                                        on the platform where you are
                                        withdrawing funds for this deposit
                                    </div>
                                    <div className="step__select step-form-coins-verification-one-network"   onClick={() => {
                                                setNetworkShow(!networkShow);
                                            }}>
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
                                            <div  className={`select__menu ${
                                                        networkShow
                                                            ? "select-active"
                                                            : ""
                                                    }`}>
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
                            <div className="form-coins__btn">
                                <Link
                                    to={`/profile/verification-payment-step-2?currency=${currency}&network=${networkUse}`}
                                    className="buttons__01"
                                    id="go_to_next_page"
                                >
                                    Proceed
                                </Link>
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
                                    12 network confirmations are required before
                                    your funds will be added to your account
                                    balance.
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
                                        Send only <span>{currency}</span> to this
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
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Step1VerifPayment;
