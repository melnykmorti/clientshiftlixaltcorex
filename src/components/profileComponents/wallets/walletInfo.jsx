import React, { useState } from "react";

const WalletInfo = (props) => {
        const {coinsProps,hidePrice,setHidePrice}=props;
 //   const [hidePrice,setHidePrice]=useState(false);

    return (
        <section className="wallet-info">
            <div className="wallet-info__container">
                <div className="wallet-info__balance ">
                    <div className="wallet-info__balance-left">
                        <h2 className="wallet-info__balance-header">Wallet</h2>
                        <span className="wallet-info__balance-undertitle">
                            {getUpdatedAt()}
                        </span>
                        <div className="wallet-info__balance-svg">
                            <img src="/assets/img/other/walletsvg.svg" />
                            <span>Wallet Balance</span>
                        </div>

                        <span className="balance__view-block">
                            <div className="wallet-info__usd">
                                <span>
                                    {coinsProps
                                        ? coinsProps.sum.toFixed(2)
                                        : "0"}
                                </span>{" "}
                                $
                                <button className="hide-price_btn" onClick={()=>setHidePrice(!hidePrice)}>
                                    <img src="/assets/img/other/eyehideprice.svg" />
                                    {hidePrice?"Hide Price":"Show Price"}
                                </button>
                            </div>
                            {/* <div className="wallet-info__convert">
                            ~{" "}
                            {coinsProps && !loadingRate
                                ? (
                                      coinsProps.sum /
                                      rate.find(
                                          (item) =>
                                              item.coinName ==
                                              "bitcoin"
                                      ).price
                                  ).toFixed(8)
                                : "0.00000000"}{" "}
                            BTC{" "}
                        </div> */}
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
                    <div className="wallet-info__balance-right">
                        <div className="wallet-info__balance-info">
                            <div className="wallet-info__balance-item">
                                <div className="wallet-info__balance-item_header">
                                    <img src="/assets/img/other/depositedsvg.svg" />

                                    <span>Total Deposited</span>
                                </div>
                                <span className="wallet-info__balance-item_money">
                                    $2,433.12
                                </span>
                            </div>
                            <div className="wallet-info__balance-item">
                                <div className="wallet-info__balance-item_header">
                                    <img src="/assets/img/other/withdrawsvg.svg" />

                                    <span>Total Withdrawals</span>
                                </div>
                                <span className="wallet-info__balance-item_money">
                                    $2,433.12
                                </span>
                            </div>
                           
                        </div>
                        {/* <span
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
                            style={{
                                "--p1": `${
                                    coinsProps
                                        ? (coinsProps.BTC /
                                              coinsProps.sum) *
                                          100
                                        : "0"
                                }%`,
                                "--p2": `${
                                    coinsProps
                                        ? (coinsProps.ETH /
                                              coinsProps.sum) *
                                          100
                                        : "0"
                                }%`,
                            }}
                        >
                            Allocation
                        </div>
                        <div className="wallet-info__percentages">
                            <div className="wallet-info__percent">
                                BTC{" "}
                                {coinsProps
                                    ? isNaN(
                                          (coinsProps.BTC /
                                              coinsProps.sum) *
                                              100
                                      )
                                        ? "0"
                                        : (
                                              (coinsProps.BTC /
                                                  coinsProps.sum) *
                                              100
                                          ).toFixed(1)
                                    : null}
                                %
                            </div>
                            <div className="wallet-info__percent">
                                ETH{" "}
                                {coinsProps
                                    ? isNaN(
                                          (coinsProps.ETH /
                                              coinsProps.sum) *
                                              100
                                      )
                                        ? "0"
                                        : (
                                              (coinsProps.ETH /
                                                  coinsProps.sum) *
                                              100
                                          ).toFixed(1)
                                    : null}
                                %
                            </div>
                            <div className="wallet-info__percent">
                                Others{" "}
                                {coinsProps
                                    ? isNaN(
                                          (coinsProps.OTHER /
                                              coinsProps.sum) *
                                              100
                                      )
                                        ? "0"
                                        : (
                                              (coinsProps.OTHER /
                                                  coinsProps.sum) *
                                              100
                                          ).toFixed(1)
                                    : null}
                                %
                            </div>
                        </div>
                    </span> */}
                        {/* <span
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
                            style={{ "-p1": "0%", "-p2": "0%" }}
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
                    </span> */}
                    </div>
                </div>
                {/* <div className="wallet-info__user">
                <div className="wallet-info__user-left">
                    <div className="wallet-info__photo">
                        <picture>
                            <source
                                srcSet={
                                    !loadingUser
                                        ? serverLink +
                                          "/images" +
                                          user.userImage
                                        : serverLink +
                                          "/images" +
                                          "/avatar.svg"
                                }
                                type="image/webp"
                            />
                            <picture>
                                <source
                                    srcSet={
                                        !loadingUser
                                            ? serverLink +
                                              "/images" +
                                              user.userImage
                                            : serverLink +
                                              "/images" +
                                              "/avatar.svg"
                                    }
                                    type="image/webp"
                                />
                                <img
                                    src={
                                        !loadingUser
                                            ? serverLink +
                                              "/images" +
                                              user.userImage
                                            : serverLink +
                                              "/images" +
                                              "/avatar.svg"
                                    }
                                    alt=""
                                />
                            </picture>
                        </picture>
                    </div>
                </div>
                <div className="wallet-info__user-right">
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
                            <span>
                                {!loadingUser ? user.name : null}{" "}
                            </span>
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
                            <span>
                                {!loadingUser
                                    ? truncateString(user.email, 12)
                                    : null}
                            </span>
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
                            <span>ID: {!loadingUser?user._id:null}</span>
                        </div>
                        <div className="wallet-info__last">
                            Last activity time:
                            <br />
                            2023/08/06 19:14:07{" "}
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
                    </div>
                </div>
            </div> */}
            </div>
        </section>
    );
};

const getUpdatedAt = () => {
    const currentDate = new Date();
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };
    return currentDate.toLocaleString("en-US", options);
};
export default WalletInfo;
