import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../Redux/Actions/userActions";
import stateSaver from "../../mobx/stateSaver";
import { projectName } from "../../App";

const PaymentsMethodList = [
    "Payment Methods",
    "Payeer",
    "Advcash",
    "Webmoney",
    "Perfect Money",
    "Card to Card",
    "PayPal",
    "Western Union",
    "PrivatBank",
    "Sim-card Balance",
    "PokerStars",
    "Mastercard",
    "Visa",
    "Revolut",
    "Sberbank",
    "Cash",
    "Tinkoff",
    "Alfa-Bank",
    "VTB",
    "Raiffeisen Bank",
    "Rocketbank",
    "Pochta Bank",
    "Mir (payment system)",
    "National bank transfer",
    "Russian Standart Bank",
    "MTS-bank",
    "Gazprombank",
    "Kykyryza bank",
    "RNCB Bank",
    "Touch Bank",
    "bank of Moscow",
    "QIWI",
    "SBP",
    "YooMoney",
    "Rosbank",
    "Yandex.Money",
    "MTS Money",
    "Otkritie Bank",
    "Home Credit Bank",
    "Sovcombank",
    "PS Bank",
    "Cash at ATM",
    "Russian Agricultural Bank",
    "Uralsib",
    "Credit Banl of Moscow",
    "OTP Bank",
    "Bank Saint Petersburg",
    "Renaissance Bank",
    "UniCredit Bank",
    "Citibank",
    "ForBank",
    "BinancePay",
    "KoronaPay (Zolotaya Korona)",
];

const P2PStatic = () => {
    const [coinModalOpened, setCoinModalOpened] = useState(false);
    const [sortByOpened, setSortByOpened] = useState(false);
    const [sortByProps, setSortByProps] = useState([
        {
            title: "Recommended",
            text: "Ranked according to Maker's overall quality",
            choosen: true,
        },
        { title: "Price: low-high", choosen: false },
    ]);
    const [coinChoosen, setCoinChoosen] = useState("BTC");
    const [paymentModalOpened, setPaymentModalOpened] = useState(false);
    const [paymentChoosen, setPaymentChoosen] = useState(PaymentsMethodList[0]);
    const [verifiedChecked, setVerifChecked] = useState(false);
    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.userDetails);
    const { user, loadingUser } = userDetails;
    const { setError3LVLOpened } = stateSaver;
    useEffect(() => {
        dispatch(getUserDetails("profile", undefined, "/profile/p2p"));
    }, [dispatch]);
    const coinModalHandler = (item) => {
        setCoinChoosen(item);
        setCoinModalOpened(false);
    };
    const paymentModalHandler = (item) => {
        setPaymentChoosen(item);
        setPaymentModalOpened(false);
    };
    const [accordionFirstOpened, setAccordionFirstOpened] = useState(false);
    const [accordionSecondOpened, setAccordionoSecondOpened] = useState(false);
    const [accordionThirdOpened, setAccordionThirdOpened] = useState(false);
    const [accordionFourOpened, setAccordionFourOpened] = useState(false);
    const [accordionFiveOpened, setAccordionFiveOpened] = useState(false);
    console.log(verifiedChecked);
    return (
        <div className="webp other p2pstatic">
            {" "}
            <main className="main " style={{ backgroundColor: "#fff" }}>
                <section className="top-line">
                    <div className="top-line__box">
                        <div className="top-line__left">
                            <div className="top-line__content">
                                <div className="top-line__title">
                                    P2P trading
                                </div>
                            </div>
                        </div>
                        <div className="top-line__right">
                            <div className="top-line__content">
                                <div
                                    className="top-line__link"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    My Orders
                                </div>
                                <div
                                    className="top-line__link"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    My Profile
                                </div>
                                <div
                                    className="top-line__link"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    More
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="main__box noselect">
                    <section className="table-p2p">
                        <div className="table-p2p__container">
                            <div className="table-p2p__header">
                                <h1>Trade P2P with zero fees</h1>
                                <h2>
                                    Buy USDT with USD at your preferred rates
                                </h2>
                            </div>

                            <div className="table-p2p__filter">
                                <div className="table-p2p__filter-links">
                                    <a className="table-p2p__filter-link active" onClick={()=>setError3LVLOpened(true)}>
                                        Buy
                                    </a>
                                    <a className="table-p2p__filter-link " onClick={()=>setError3LVLOpened(true)}>
                                        Sell
                                    </a>
                                </div>
                                <div
                                    className="table-p2p__filter-container
                        "
                                >
                                    <div className="table-p2p__filter-amount">
                                        <div className="select select-p2p-amount" onClick={()=>setError3LVLOpened(true)}>
                                            <div className="select__selected">
                                                <div className="select__img">
                                                    <img
                                                        src={
                                                            !loadingUser
                                                                ? user.walletsSpot.find(
                                                                      (item) =>
                                                                          item.type ==
                                                                          coinChoosen
                                                                  ).image
                                                                : ""
                                                        }
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="select__name">
                                                    <span>{coinChoosen}</span>
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
                                                    coinModalOpened
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
                                                                      coinModalHandler(
                                                                          item.type
                                                                      )
                                                                  }
                                                              >
                                                                  <div className="select__img">
                                                                      <img
                                                                          src={
                                                                              item.image
                                                                          }
                                                                          alt={
                                                                              item.type
                                                                          }
                                                                      />
                                                                  </div>
                                                                  <div className="select__name">
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
                                        <div className="p2p-input">
                                            <input
                                                type="number"
                                                placeholder="Enter amount"
                                                
                                            />
                                            USD
                                        </div>
                                    </div>
                                    <div
                                        className="table-p2p__filter-payments"
                                        onClick={() =>
                                            setPaymentModalOpened(true)
                                        }
                                        onMouseLeave={() =>
                                            setPaymentModalOpened(false)
                                        }
                                    >
                                        <div className="select select-p2p-payments">
                                            <div className="select__selected">
                                                <div className="select__name">
                                                    {paymentChoosen}
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
                                                    paymentModalOpened
                                                        ? "select-active"
                                                        : ""
                                                }`}
                                            >
                                                {PaymentsMethodList.map(
                                                    (item) => (
                                                        <div
                                                            className="select__menu-item"
                                                            onClick={() =>
                                                                paymentModalHandler(
                                                                    item
                                                                )
                                                            }
                                                        >
                                                            <div className="select__name">
                                                                {item}
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                        <div className="p2p-filter" onClick={()=>setError3LVLOpened(true)}>
                                            <svg
                                                width={22}
                                                height={22}
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <rect
                                                    width={22}
                                                    height={22}
                                                    fill="url(#pattern0filterp2p)"
                                                />
                                                <defs>
                                                    <pattern
                                                        id="pattern0filterp2p"
                                                        patternContentUnits="objectBoundingBox"
                                                        width={1}
                                                        height={1}
                                                    >
                                                        <use
                                                            xlinkHref="#image0_1199_3165"
                                                            transform="scale(0.00195312)"
                                                        />
                                                    </pattern>
                                                    <image
                                                        id="image0_1199_3165"
                                                        width={512}
                                                        height={512}
                                                        xlinkHref="data:image/png;base64,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"
                                                    />
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="table-p2p__filter-wrapper">
                                        <div
                                            className="table-p2p__filter-payments p2p-sort"
                                            onClick={() =>
                                                setSortByOpened(true)
                                            }
                                            onMouseLeave={() =>
                                                setSortByOpened(false)
                                            }
                                        >
                                            <div className="select select-p2p-payments">
                                                <div className="select__selected">
                                                    <div className="select__name">
                                                        Sort by
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
                                                        sortByOpened
                                                            ? "select-active"
                                                            : ""
                                                    }`}
                                                >
                                                  
                                                    {sortByProps.map(
                                                        (item) => (
                                                            <div
                                                                className="select__menu-item"
                                                                // onClick={() =>
                                                                //     paymentModalHandler(
                                                                //         item
                                                                //     )
                                                                // }
                                                                onClick={()=>setError3LVLOpened(true)}
                                                            >
                                                                <div className="select__name">
                                                                    {item.title}
                                                                </div>
                                                                <div className="select__text">
                                                                    {item.text}
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-p2p__wrapper">
                                <div className="table-p2p__names">
                                    <div className="table-p2p__name table-p2p__name-trader">
                                        Advertisers
                                    </div>
                                    <div className="table-p2p__name table-p2p__name-price">
                                        Unit price
                                    </div>

                                    <div className="table-p2p__name table-p2p__name-limits">
                                        Available/Order limit
                                    </div>
                                    <div className="table-p2p__name table-p2p__name-method">
                                        Payment methods
                                    </div>

                                    <div className="table-p2p__name table-p2p__name-action">
                                        Buy/Sell (0 fees)
                                    </div>
                                </div>
                                <div className="table-p2p__items">
                                    <div className="table-p2p__item">
                                        <div className="table-p2p__item-trader">
                                            {/* <div className="table-p2p__item-avatar table-p2p__item-online">
                                                <img
                                                    src="../assets/img/p2p/trader_2.jpg"
                                                    alt=""
                                                />
                                            </div> */}
                                            <div className="table-p2p__item-wrapper">
                                                <a>alfredoagrel ⭐️a✳️®️</a>
                                                391 orders, 92%
                                            </div>
                                        </div>
                                        <div className="table-p2p__item-price">
                                            26670.55 USD
                                        </div>

                                        <div className="table-p2p__item-limits">
                                            50 - 25 701,00 USD
                                        </div>
                                        <div className="table-p2p__item-method">
                                            <span>Webmoney</span>
                                        </div>
                                        <div className="table-p2p__item-action table-p2p__item-buy">
                                            <a
                                                onClick={() =>
                                                    setError3LVLOpened(true)
                                                }
                                            >
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                    <div className="table-p2p__item">
                                        <div className="table-p2p__item-trader">
                                            {/* <div className="table-p2p__item-avatar table-p2p__item-online">
                                                <img
                                                    src="../assets/img/p2p/trader_3.jpg"
                                                    alt=""
                                                />
                                            </div> */}
                                            <div className="table-p2p__item-wrapper">
                                                <a>Xaviercripto</a>
                                                97 orders, 94%
                                            </div>
                                        </div>
                                        <div className="table-p2p__item-price">
                                            26675.4 USD
                                        </div>
                                        <div className="table-p2p__item-limits">
                                            50 - 15 909,00 USD
                                        </div>{" "}
                                        <div className="table-p2p__item-method">
                                            <span>PokerStars</span>
                                        </div>
                                        <div className="table-p2p__item-action table-p2p__item-buy">
                                            <a
                                                onClick={() =>
                                                    setError3LVLOpened(true)
                                                }
                                            >
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                    <div className="table-p2p__item">
                                        <div className="table-p2p__item-trader">
                                            {/* <div className="table-p2p__item-avatar table-p2p__item-online">
                                                <img
                                                    src="../assets/img/p2p/trader_4.jpg"
                                                    alt=""
                                                />
                                            </div> */}
                                            <div className="table-p2p__item-wrapper">
                                                <a>ZproCoin</a>
                                                593 orders, 91%
                                            </div>
                                        </div>{" "}
                                        <div className="table-p2p__item-price">
                                            26705.05 USD
                                        </div>
                                        <div className="table-p2p__item-limits">
                                            50 - 14 310,00 USD
                                        </div>{" "}
                                        <div className="table-p2p__item-method">
                                            <span>Webmoney</span>
                                        </div>
                                        <div className="table-p2p__item-action table-p2p__item-buy">
                                            <a
                                                onClick={() =>
                                                    setError3LVLOpened(true)
                                                }
                                            >
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                    <div className="table-p2p__item">
                                        <div className="table-p2p__item-trader">
                                            {/* <div className="table-p2p__item-avatar table-p2p__item-online">
                                                <img
                                                    src="../assets/img/p2p/trader_5.jpg"
                                                    alt=""
                                                />
                                            </div> */}
                                            <div className="table-p2p__item-wrapper">
                                                <a>carloseli777</a>
                                                534 orders, 84%
                                            </div>
                                        </div>{" "}
                                        <div className="table-p2p__item-price">
                                            26731.75 USD
                                        </div>
                                        <div className="table-p2p__item-limits">
                                            50 - 7 290,00 USD
                                        </div>{" "}
                                        <div className="table-p2p__item-method">
                                            <span>Card to Card</span>
                                        </div>
                                        <div className="table-p2p__item-action table-p2p__item-buy">
                                            <a
                                                onClick={() =>
                                                    setError3LVLOpened(true)
                                                }
                                            >
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                    <div className="table-p2p__item">
                                        <div className="table-p2p__item-trader">
                                            {/* <div className="table-p2p__item-avatar table-p2p__item-online">
                                                <img
                                                    src="../assets/img/p2p/trader_6.jpg"
                                                    alt=""
                                                />
                                            </div> */}
                                            <div className="table-p2p__item-wrapper">
                                                <a>afcrypto</a>
                                                89 orders, 94%
                                            </div>
                                        </div>
                                        <div className="table-p2p__item-price">
                                            26736.2 USD
                                        </div>

                                        <div className="table-p2p__item-limits">
                                            50 - 3 239,00 USD
                                        </div>
                                        <div className="table-p2p__item-method">
                                            <span>Advcash</span>
                                        </div>
                                        <div className="table-p2p__item-action table-p2p__item-buy">
                                            <a
                                                onClick={() =>
                                                    setError3LVLOpened(true)
                                                }
                                            >
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                    <div className="table-p2p__item">
                                        <div className="table-p2p__item-trader">
                                            {/* <div className="table-p2p__item-avatar table-p2p__item-online">
                                                <img
                                                    src="../assets/img/p2p/trader_7.jpg"
                                                    alt=""
                                                />
                                            </div> */}
                                            <div className="table-p2p__item-wrapper">
                                                <a>trader_pk786</a>
                                                468 orders, 89%
                                            </div>
                                        </div>{" "}
                                        <div className="table-p2p__item-price">
                                            26759.6 USD
                                        </div>
                                        <div className="table-p2p__item-limits">
                                            50 - 4 680,00 USD
                                        </div>{" "}
                                        <div className="table-p2p__item-method">
                                            <span>Sim-card balance</span>
                                        </div>
                                        <div className="table-p2p__item-action table-p2p__item-buy">
                                            <a
                                                onClick={() =>
                                                    setError3LVLOpened(true)
                                                }
                                            >
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                    <div className="table-p2p__item">
                                        <div className="table-p2p__item-trader">
                                            {/* <div className="table-p2p__item-avatar table-p2p__item-online">
                                                <img
                                                    src="../assets/img/p2p/trader_8.jpg"
                                                    alt=""
                                                />
                                            </div> */}
                                            <div className="table-p2p__item-wrapper">
                                                <a>ABEJORRO78</a>
                                                188 orders, 99%
                                            </div>
                                        </div>
                                        <div className="table-p2p__item-price">
                                            26769 USD
                                        </div>
                                        <div className="table-p2p__item-limits">
                                            50 - 23 994,00 USD
                                        </div>{" "}
                                        <div className="table-p2p__item-method">
                                            <span>Sim-card balance</span>
                                        </div>
                                        <div className="table-p2p__item-action table-p2p__item-buy">
                                            <a
                                                onClick={() =>
                                                    setError3LVLOpened(true)
                                                }
                                            >
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                    <div className="table-p2p__item">
                                        <div className="table-p2p__item-trader">
                                            {/* <div className="table-p2p__item-avatar table-p2p__item-online">
                                                <img
                                                    src="../assets/img/p2p/trader_9.jpg"
                                                    alt=""
                                                />
                                            </div> */}
                                            <div className="table-p2p__item-wrapper">
                                                <a>HoldBit</a>
                                                275 orders, 92%
                                            </div>
                                        </div>{" "}
                                        <div className="table-p2p__item-price">
                                            26782.75 USD
                                        </div>
                                        <div className="table-p2p__item-limits">
                                            50 - 24 541,00 USD
                                        </div>{" "}
                                        <div className="table-p2p__item-method">
                                            <span>MasterCard</span>
                                        </div>
                                        <div className="table-p2p__item-action table-p2p__item-buy">
                                            <a
                                                onClick={() =>
                                                    setError3LVLOpened(true)
                                                }
                                            >
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                    <div className="table-p2p__item">
                                        <div className="table-p2p__item-trader">
                                            {/* <div className="table-p2p__item-avatar table-p2p__item-online">
                                                <img
                                                    src="../assets/img/p2p/trader_10.jpg"
                                                    alt=""
                                                />
                                            </div> */}
                                            <div className="table-p2p__item-wrapper">
                                                <a>ECU-CAMBIOS</a>
                                                280 orders, 89%
                                            </div>
                                        </div>
                                        <div className="table-p2p__item-price">
                                            26796.75 USD
                                        </div>
                                        <div className="table-p2p__item-limits">
                                            50 - 19 312,00 USD
                                        </div>{" "}
                                        <div className="table-p2p__item-method">
                                            <span>Advcash</span>
                                        </div>
                                        <div className="table-p2p__item-action table-p2p__item-buy">
                                            <a
                                                onClick={() =>
                                                    setError3LVLOpened(true)
                                                }
                                            >
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                    <div className="table-p2p__item">
                                        <div className="table-p2p__item-trader">
                                            {/* <div className="table-p2p__item-avatar table-p2p__item-online">
                                                <img
                                                    src="../assets/img/p2p/trader_11.jpg"
                                                    alt=""
                                                />
                                            </div> */}
                                            <div className="table-p2p__item-wrapper">
                                                <a>Matango</a>
                                                279 orders, 84%
                                            </div>
                                        </div>
                                        <div className="table-p2p__item-price">
                                            26810.7 USD
                                        </div>

                                        <div className="table-p2p__item-limits">
                                            50 - 10 769,00 USD
                                        </div>
                                        <div className="table-p2p__item-method">
                                            <span>Card to Card</span>
                                        </div>
                                        <div className="table-p2p__item-action table-p2p__item-buy">
                                            <a
                                                onClick={() =>
                                                    setError3LVLOpened(true)
                                                }
                                            >
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                    <div className="table-p2p__item">
                                        <div className="table-p2p__item-trader">
                                            {/* <div className="table-p2p__item-avatar table-p2p__item-online">
                                                <img
                                                    src="../assets/img/p2p/trader_12.jpg"
                                                    alt=""
                                                />
                                            </div> */}
                                            <div className="table-p2p__item-wrapper">
                                                <a>Ccorrea</a>
                                                454 orders, 96%
                                            </div>
                                        </div>
                                        <div className="table-p2p__item-price">
                                            26833.4 USD
                                        </div>

                                        <div className="table-p2p__item-limits">
                                            50 - 62 311,00 USD
                                        </div>
                                        <div className="table-p2p__item-method">
                                            <span>Webmoney</span>
                                        </div>
                                        <div className="table-p2p__item-action table-p2p__item-buy">
                                            <a
                                                onClick={() =>
                                                    setError3LVLOpened(true)
                                                }
                                            >
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                    <div className="table-p2p__item">
                                        <div className="table-p2p__item-trader">
                                            {/* <div className="table-p2p__item-avatar table-p2p__item-online">
                                                <img
                                                    src="../assets/img/p2p/trader_13.jpg"
                                                    alt=""
                                                />
                                            </div> */}
                                            <div className="table-p2p__item-wrapper">
                                                <a>Efinanzas</a>
                                                137 orders, 92%
                                            </div>
                                        </div>
                                        <div className="table-p2p__item-price">
                                            26840.25 USD
                                        </div>
                                        <div className="table-p2p__item-limits">
                                            50 - 20 708,00 USD
                                        </div>{" "}
                                        <div className="table-p2p__item-method">
                                            <span>Card to Card</span>
                                        </div>
                                        <div className="table-p2p__item-action table-p2p__item-buy">
                                            <a
                                                onClick={() =>
                                                    setError3LVLOpened(true)
                                                }
                                            >
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                    <div className="table-p2p__item">
                                        <div className="table-p2p__item-trader">
                                            {/* <div className="table-p2p__item-avatar table-p2p__item-online">
                                                <img
                                                    src="../assets/img/p2p/trader_14.jpg"
                                                    alt=""
                                                />
                                            </div> */}
                                            <div className="table-p2p__item-wrapper">
                                                <a>ActiTecFAST</a>
                                                137 orders, 98%
                                            </div>
                                        </div>{" "}
                                        <div className="table-p2p__item-price">
                                            26847.1 USD
                                        </div>
                                        <div className="table-p2p__item-limits">
                                            50 - 3 445,00 USD
                                        </div>
                                        <div className="table-p2p__item-method">
                                            <span>Payeer</span>
                                        </div>
                                        <div className="table-p2p__item-action table-p2p__item-buy">
                                            <a
                                                onClick={() =>
                                                    setError3LVLOpened(true)
                                                }
                                            >
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                    <div className="table-p2p__item">
                                        <div className="table-p2p__item-trader">
                                            {/* <div className="table-p2p__item-avatar table-p2p__item-online">
                                                <img
                                                    src="../assets/img/p2p/trader_15.jpg"
                                                    alt=""
                                                />
                                            </div> */}
                                            <div className="table-p2p__item-wrapper">
                                                <a>Casa Roble De Roca</a>
                                                216 orders, 88%
                                            </div>
                                        </div>{" "}
                                        <div className="table-p2p__item-price">
                                            26857.9 USD
                                        </div>
                                        <div className="table-p2p__item-limits">
                                            50 - 18 850,00 USD
                                        </div>{" "}
                                        <div className="table-p2p__item-method">
                                            <span>Advcash</span>
                                        </div>
                                        <div className="table-p2p__item-action table-p2p__item-buy">
                                            <a
                                                onClick={() =>
                                                    setError3LVLOpened(true)
                                                }
                                            >
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bot-marketplace__pagination">
                                <span className="bot-marketplace__pagination-arrow">
                                    <svg
                                        width={5}
                                        height={11}
                                        viewBox="0 0 5 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.5 10L1 5.5L4.5 1"
                                            stroke="#E3E3E3"
                                        />
                                    </svg>
                                </span>
                                <span
                                    className="bot-marketplace__pagination-item bot-marketplace__pagination-active"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    1
                                </span>
                                <span
                                    className="bot-marketplace__pagination-item"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    2
                                </span>
                                <span
                                    className="bot-marketplace__pagination-item"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    3
                                </span>
                                <span
                                    className="bot-marketplace__pagination-item"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    4
                                </span>
                                <span
                                    className="bot-marketplace__pagination-item"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    5
                                </span>
                                <span
                                    className="bot-marketplace__pagination-item"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    ...
                                </span>
                                <span
                                    className="bot-marketplace__pagination-item"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    242
                                </span>
                                <span
                                    className="bot-marketplace__pagination-arrow"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    <svg
                                        width={6}
                                        height={11}
                                        viewBox="0 0 6 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 10L4.5 5.5L1 1"
                                            stroke="#E3E3E3"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="p2p-hero noselect">
                    <div className="p2p-hero__header">
                        <h1>Trade P2P with zero fees</h1>
                    </div>
                    <div className="p2p-hero_list">
                        <div className="p2p-hero_item">
                            <img src="/assets/img/other/zerofees.svg" />
                            <div className="p2p-hero_item-header">
                                Zero fees
                            </div>
                            <div className="p2p-hero_item-text">
                                P2P trading on ShiftLix is free — don't miss the
                                opportunity
                            </div>
                        </div>
                        <div className="p2p-hero_item">
                            <img src="/assets/img/other/buildcommunity.svg" />
                            <div className="p2p-hero_item-header">
                                Build a crypto community
                            </div>
                            <div className="p2p-hero_item-text">
                                Grow your network as a Super Advertiser
                            </div>
                        </div>
                        <div className="p2p-hero_item">
                            <img src="/assets/img/other/choicesun.svg" />
                            <div className="p2p-hero_item-header">
                                Unparalleled choices
                            </div>
                            <div className="p2p-hero_item-text">
                                900+ local payment methods and 100+ currencies
                                to choose from
                            </div>
                        </div>
                    </div>
                </section>
                <section className="p2p-faq noselect">
                    <div className="p2p-faq_header">
                        <h1>Flexible payment methods to suit every need</h1>
                    </div>
                    <div className="p2p-faq_choose">
                        <div className="p2p-faq_item">AdvCash</div>
                        <div className="p2p-faq_item">AirTM</div>
                        <div className="p2p-faq_item">Payoneer</div>
                        <div className="p2p-faq_item">Wise</div>
                        <div className="p2p-faq_item">Payeer</div>
                        <div className="p2p-faq_item">Perfect Money</div>
                        <div className="p2p-faq_item">Pyypl</div>
                        <div className="p2p-faq_item">Skrill</div>
                    </div>
                </section>
                <section className="faqs faqs-jumpstart noselect">
                    <div className="faqs__container">
                        <div className="faqs__title">FAQs</div>
                        <div className="faqs__questions">
                            <div className="accordion__container">
                                <div className="accordion__item">
                                    <div
                                        className={`accordion__item-title ${
                                            accordionFirstOpened
                                                ? " accordion__item-title-active"
                                                : ""
                                        }`}
                                        onMouseUp={() =>
                                            setAccordionFirstOpened(
                                                !accordionFirstOpened
                                            )
                                        }
                                    >
                                        What is P2P trading?
                                        <div className="accordion__item-arrow">
                                            <svg
                                                width={14}
                                                height={7}
                                                viewBox="0 0 14 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0.599609 1L7.09961 6L13.5996 1"
                                                    stroke="#929292"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className={`accordion__item-body accordion__item-faq-one ${
                                            accordionFirstOpened
                                                ? "accordion__item-active"
                                                : ""
                                        }`}
                                        style={
                                            accordionFirstOpened
                                                ? {
                                                      transition:
                                                          "height 500ms ease 0s",
                                                      height: " 62px",
                                                  }
                                                : {}
                                        }
                                    >
                                        <div className="content">
                                            P2P trading is when individuals
                                            trade directly with each other
                                            without a middleman or third party.
                                            P2P on SHIFTLIX is an open
                                            marketplace that allows users to buy
                                            and sell digital assets such as
                                            Bitcoin, Tether, and other
                                            cryptocurrencies. To complete a
                                            trade, directly send or collect USD
                                            with Monobank, PrivatBank, A-Bank,
                                            PUMB, Sportbank, Izibank, Bank
                                            transfer, Sense SuperApp , and more.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion__item">
                                    <div
                                        className={`accordion__item-title ${
                                            accordionSecondOpened
                                                ? " accordion__item-title-active"
                                                : ""
                                        }`}
                                        onMouseUp={() =>
                                            setAccordionoSecondOpened(
                                                !accordionSecondOpened
                                            )
                                        }
                                    >
                                        Am I buying/selling from ShiftLix
                                        directly?
                                        <div className="accordion__item-arrow">
                                            <svg
                                                width={14}
                                                height={7}
                                                viewBox="0 0 14 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0.599609 1L7.09961 6L13.5996 1"
                                                    stroke="#929292"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className={`accordion__item-body accordion__item-faq-one ${
                                            accordionSecondOpened
                                                ? "accordion__item-active"
                                                : ""
                                        }`}
                                        style={
                                            accordionSecondOpened
                                                ? {
                                                      transition:
                                                          "height 500ms ease 0s",
                                                      height: " 86px",
                                                  }
                                                : {}
                                        }
                                    >
                                        <div className="content">
                                            When you trade P2P, you’re trading
                                            directly with other users rather
                                            than with SHIFTLIX. However,
                                            SHIFTLIX will hold your crypto
                                            assets until payment confirmation is
                                            received by the seller. We recommend
                                            trading with verified advertisers,
                                            since all verified advertisers have
                                            been vetted carefully by SHIFTLIX.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion__item">
                                    <div
                                        className={`accordion__item-title ${
                                            accordionThirdOpened
                                                ? " accordion__item-title-active"
                                                : ""
                                        }`}
                                        onMouseUp={() =>
                                            setAccordionThirdOpened(
                                                !accordionThirdOpened
                                            )
                                        }
                                    >
                                        How do I become a P2P
                                        Advertiser/Merchant?
                                        <div className="accordion__item-arrow">
                                            <svg
                                                width={14}
                                                height={7}
                                                viewBox="0 0 14 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0.599609 1L7.09961 6L13.5996 1"
                                                    stroke="#929292"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className={`accordion__item-body accordion__item-faq-one ${
                                            accordionThirdOpened
                                                ? "accordion__item-active"
                                                : ""
                                        }`}
                                        style={
                                            accordionThirdOpened
                                                ? {
                                                      transition:
                                                          "height 500ms ease 0s",
                                                      height: "120px",
                                                  }
                                                : {}
                                        }
                                    >
                                        <div className="content">
                                            The Advertiser Program on SHIFTLIX
                                            P2P enables users to run their own
                                            exchange business on SHIFTLIX.
                                            Becoming a merchant or advertiser
                                            gives you more credibility and
                                            increases traffic to your P2P ads.
                                            Please check out the Advertiser
                                            Program for more information.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion__item">
                                    <div
                                        className={`accordion__item-title ${
                                            accordionFourOpened
                                                ? " accordion__item-title-active"
                                                : ""
                                        }`}
                                        onMouseUp={() =>
                                            setAccordionFourOpened(
                                                !accordionFourOpened
                                            )
                                        }
                                    >
                                        Which crypto can I buy via ShiftLix P2P
                                        trading?
                                        <div className="accordion__item-arrow">
                                            <svg
                                                width={14}
                                                height={7}
                                                viewBox="0 0 14 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0.599609 1L7.09961 6L13.5996 1"
                                                    stroke="#929292"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className={`accordion__item-body accordion__item-faq-one ${
                                            accordionFourOpened
                                                ? "accordion__item-active"
                                                : ""
                                        }`}
                                        style={
                                            accordionFourOpened
                                                ? {
                                                      transition:
                                                          "height 500ms ease 0s",
                                                      height: "120px",
                                                  }
                                                : {}
                                        }
                                    >
                                        <div className="content">
                                            Currently, {projectName} launchpad
                                            provides two types of events -
                                            Mining and On Sale. With token
                                            staking, the Mining model allows
                                            users to gain token rewards issued
                                            by relevant projects. Every event
                                            has its own staking period and total
                                            staking limit, following on a "more
                                            staking, more tokens" basis. The On
                                            Sale model adopts "Pledge + Draw" to
                                            distribute tokens. This includes
                                            position census, pledging, reward
                                            census and reward distribution.
                                            Also, token is the only token
                                            officially taken for pledging during
                                            the whole process. Both models are
                                            not applicable for users in
                                            restricted countries/regions, and
                                            those allowed to participate should
                                            refer to Project's announcements.
                                        </div>
                                    </div>
                                </div>{" "}
                                <div className="accordion__item">
                                    <div
                                        className={`accordion__item-title ${
                                            accordionFiveOpened
                                                ? " accordion__item-title-active"
                                                : ""
                                        }`}
                                        onMouseUp={() =>
                                            setAccordionFiveOpened(
                                                !accordionFiveOpened
                                            )
                                        }
                                    >
                                        How can I protect my assets from P2P
                                        scammers?
                                        <div className="accordion__item-arrow">
                                            <svg
                                                width={14}
                                                height={7}
                                                viewBox="0 0 14 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0.599609 1L7.09961 6L13.5996 1"
                                                    stroke="#929292"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className={`accordion__item-body accordion__item-faq-one ${
                                            accordionFiveOpened
                                                ? "accordion__item-active"
                                                : ""
                                        }`}
                                        style={
                                            accordionFiveOpened
                                                ? {
                                                      transition:
                                                          "height 500ms ease 0s",
                                                      height: "120px",
                                                  }
                                                : {}
                                        }
                                    >
                                        <div className="content">
                                            It can be difficult to determine if
                                            you're dealing with a scammer during
                                            your transactions. We recommend
                                            trading with SHIFTLIX verified
                                            advertisers when possible. Read more
                                            tips on how to avoid potential
                                            scammers and learn how you can
                                            protect your crypto.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="withdrawal-popup lvl3-required"
                    id="p2p_error_modal"
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
                            >
                                An error occurred while performing the action.
                                Please try again or contact technical support{" "}
                            </div>
                            <div className="verificationPayment__btn-box">
                                <div
                                    className="verificationPayment__btn-return"
                                    id="close_modal"
                                >
                                    <a className="buttons__02">Close</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default P2PStatic;
