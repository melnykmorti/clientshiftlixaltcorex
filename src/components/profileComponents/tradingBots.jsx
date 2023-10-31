import React, { useState } from "react";
import stateSaver from "../../mobx/stateSaver";
import { set } from "mobx";
import { projectName } from "../../App";

const TradingBots = () => {
    const [accordionFirstOpened, setAccordionFirstOpened] = useState(false);
    const [accordionSecondOpened, setAccordionoSecondOpened] = useState(false);
    const [accordionThirdOpened, setAccordionThirdOpened] = useState(false);
    const [accordionFourOpened, setAccordionFourOpened] = useState(false);
    const [accordionFiveOpened, setAccordionFiveOpened] = useState(false);
    const [accordionSixOpened, setAccordionSixOpened] = useState(false);
    const { setError3LVLOpened } = stateSaver;
    return (
        <div className="other ">
            <main className="main landings trading-bots webp">
                <section className="bots-home">
                    <div className="bots-home__container">
                        <div className="bots-home__box">
                            <div className="bots-home__title">
                            {projectName} Trading Bots
                            </div>
                            <div className="bots-home__description">
                                Intelligent pre-built trading bots help you
                                auto-trade and earn all-day-long
                            </div>
                            <div className="bots-home__stats">
                                <div className="bots-home__stats-block">
                                    <div className="bots-home__stats-value">
                                        252,410
                                    </div>
                                    <div className="bots-home__stats-description">
                                        Global bot traders
                                    </div>
                                </div>
                                <div className="bots-home__stats-block">
                                    <div className="bots-home__stats-value">
                                        $45.40M
                                    </div>
                                    <div className="bots-home__stats-description">
                                        Bot trading earnings
                                    </div>
                                </div>
                                <div className="bots-home__stats-block">
                                    <div className="bots-home__stats-value">
                                        4.12M
                                    </div>
                                    <div className="bots-home__stats-description">
                                        Bots created worldwide
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="trading-bot-grid">
                    <div className="trading-bot-grid__box">
                        <div className="trading-bot-grid__left">
                            <div className="trading-bot-grid__title">
                                What is a trading bot?
                            </div>
                            <div className="trading-bot-grid__left-items">
                                <div className="trading-bot-grid__left-item">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/trading-bot-grid/trading-bot-grid-img-1.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/trading-bot-grid/trading-bot-grid-img-1.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                className="trading-bot-grid__items-img"
                                                src="../assets/img/trading-bot-grid/trading-bot-grid-img-1.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                    <div className="trading-bot-grid__item-title">
                                        Buy low sell high
                                    </div>
                                </div>
                                <div className="trading-bot-grid__left-item">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/trading-bot-grid/trading-bot-grid-img-2.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/trading-bot-grid/trading-bot-grid-img-2.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                className="trading-bot-grid__items-img"
                                                src="../assets/img/trading-bot-grid/trading-bot-grid-img-2.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                    <div className="trading-bot-grid__item-title">
                                        Volatile markets
                                    </div>
                                </div>
                                <div className="trading-bot-grid__left-item">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/trading-bot-grid/trading-bot-grid-img-3.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/trading-bot-grid/trading-bot-grid-img-3.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                className="trading-bot-grid__items-img"
                                                src="../assets/img/trading-bot-grid/trading-bot-grid-img-3.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                    <div className="trading-bot-grid__item-title">
                                        Cyclic arbitrage
                                    </div>
                                </div>
                            </div>
                            <div className="trading-bot-grid__left-text">
                                Grid bot is a simple strategy of buying low and
                                selling high. This strategy seeks to capitalize
                                on normal price volatility in an underlying
                                asset by placing buy and sell orders at certain
                                regular intervals above and below predefined
                                price ranges.
                            </div>
                        </div>
                        <div className="trading-bot-grid__right">
                            <div className="trading-bot-grid__right-item">
                                <svg
                                    width={17}
                                    height={14}
                                    viewBox="0 0 17 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 8.5L11.5 4L7 8.5M4 8.5L1 5.5"
                                        stroke="white"
                                    />
                                    <line
                                        x1={1}
                                        y1="0.5"
                                        x2={16}
                                        y2="0.5"
                                        stroke="white"
                                    />
                                    <line
                                        x1={1}
                                        y1="13.5"
                                        x2={16}
                                        y2="13.5"
                                        stroke="white"
                                    />
                                    <circle
                                        cx="5.75"
                                        cy="9.75"
                                        r="0.75"
                                        fill="white"
                                    />
                                </svg>
                                <div className="trading-bot-grid__right-text">
                                    Spot grid
                                </div>
                                <span
                                    className="trading-bot-grid__right-btn butafor__btn"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    Create
                                </span>
                            </div>
                            <div className="trading-bot-grid__right-item">
                                <svg
                                    width={15}
                                    height={14}
                                    viewBox="0 0 15 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.59961 13.5H14.0996V0.5H3.59961V7M3.59961 13.5V7M3.59961 13.5C1.59961 12 1.09961 10 1.09961 9C1.09961 7 2.59961 7 3.59961 7M7.09961 7H11.0996M5.59961 4.5H11.0996"
                                        stroke="white"
                                    />
                                </svg>
                                <div className="trading-bot-grid__right-text">
                                    Futures grid
                                </div>
                                <span
                                    className="trading-bot-grid__right-btn butafor__btn"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    Create
                                </span>
                            </div>

                            <div className="trading-bot-grid__right-item">
                                <svg
                                    width={17}
                                    height={14}
                                    viewBox="0 0 17 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 8.5L11.5 4L7 8.5M4 8.5L1 5.5"
                                        stroke="white"
                                    />
                                    <line
                                        x1={1}
                                        y1="0.5"
                                        x2={16}
                                        y2="0.5"
                                        stroke="white"
                                    />
                                    <line
                                        x1={1}
                                        y1="13.5"
                                        x2={16}
                                        y2="13.5"
                                        stroke="white"
                                    />
                                    <circle
                                        cx="5.75"
                                        cy="9.75"
                                        r="0.75"
                                        fill="white"
                                    />
                                </svg>
                                <div className="trading-bot-grid__right-text">
                                    Infinity grid
                                </div>
                                <span
                                    className="trading-bot-grid__right-btn butafor__btn"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    Create
                                </span>
                            </div>
                            <div className="trading-bot-grid__right-item">
                                <svg
                                    width={16}
                                    height={15}
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line
                                        x1="0.0996094"
                                        y1={1}
                                        x2="15.0996"
                                        y2={1}
                                        stroke="white"
                                    />
                                    <path
                                        d="M7.59961 2.5V13M7.59961 2.5L10.0996 4M7.59961 2.5L5.09961 4M7.59961 13L10.0996 11.5M7.59961 13L5.09961 11.5M0.599609 7.5H4.09961M11.0996 7.5H14.5996"
                                        stroke="white"
                                    />
                                    <line
                                        x1="0.0996094"
                                        y1={14}
                                        x2="15.0996"
                                        y2={14}
                                        stroke="white"
                                    />
                                </svg>
                                <div className="trading-bot-grid__right-text">
                                    Moon grid
                                </div>
                                <span
                                    className="trading-bot-grid__right-btn butafor__btn"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    Create
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bot-marketplace">
                    <div className="bot-marketplace__container">
                        <div className="bot-marketplace__title">
                            Bot Marketplace
                        </div>
                        <div className="bot-marketplace__cards">
                            <div className="bot-marketplace__card">
                                <div className="bot-marketplace__card-title">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 14H14V1H3.5V7.5M3.5 14V7.5M3.5 14C1.5 12.5 1 10.5 1 9.5C1 7.5 2.5 7.5 3.5 7.5M7 7.5H11M5.5 5H11"
                                            stroke="white"
                                        />
                                    </svg>
                                    BTCUSDT Perp
                                </div>
                                <div className="bot-marketplace__card-wrapper">
                                    <div className="bot-marketplace__card-tags">
                                        <span className="bot-marketplace__card-tag">
                                            Futures grid
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            Long
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            50.00x
                                        </span>
                                    </div>
                                    <div className="bot-marketplace__card-used">
                                        <svg
                                            width={23}
                                            height={18}
                                            viewBox="0 0 23 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.65831 5.98449C5.65847 5.27343 5.85264 4.57448 6.22199 3.95546C6.59134 3.33645 7.12332 2.8184 7.76631 2.45159C8.4093 2.08478 9.14146 1.88166 9.89174 1.86194C10.642 1.84222 11.3849 2.00658 12.0484 2.33906C12.7119 2.67154 13.2733 3.16085 13.6783 3.75951C14.0834 4.35817 14.3181 5.04585 14.3599 5.75581C14.4017 6.46577 14.249 7.17391 13.9167 7.8115C13.5844 8.44909 13.0838 8.99448 12.4635 9.39474C13.7994 9.85894 14.9582 10.6913 15.7906 11.7846C16.623 12.878 17.091 14.1823 17.1343 15.5297C17.1325 15.675 17.0714 15.814 16.964 15.9177C16.8565 16.0213 16.7109 16.0816 16.5576 16.086C16.4043 16.0903 16.2552 16.0384 16.1414 15.941C16.0276 15.8437 15.9578 15.7084 15.9468 15.5635C15.8997 14.1021 15.2537 12.7155 14.1459 11.6975C13.0381 10.6796 11.5554 10.1103 10.0121 10.1103C8.46876 10.1103 6.98609 10.6796 5.87826 11.6975C4.77042 12.7155 4.12449 14.1021 4.07735 15.5635C4.06942 15.7104 4.00109 15.8485 3.887 15.9482C3.77291 16.0479 3.62212 16.1013 3.46695 16.097C3.31178 16.0927 3.16457 16.031 3.05685 15.9251C2.94912 15.8192 2.88946 15.6776 2.89064 15.5305C2.93383 14.1829 3.40175 12.8784 4.23417 11.7849C5.06659 10.6914 6.22541 9.85899 7.56148 9.39474C6.97472 9.01647 6.49454 8.50796 6.16282 7.91355C5.83109 7.31913 5.65789 6.65687 5.65831 5.98449ZM10.0125 2.98449C9.17262 2.98449 8.36717 3.30056 7.7733 3.86317C7.17944 4.42578 6.84581 5.18884 6.84581 5.98449C6.84581 6.78014 7.17944 7.5432 7.7733 8.10581C8.36717 8.66842 9.17262 8.98449 10.0125 8.98449C10.8523 8.98449 11.6578 8.66842 12.2516 8.10581C12.8455 7.5432 13.1791 6.78014 13.1791 5.98449C13.1791 5.18884 12.8455 4.42578 12.2516 3.86317C11.6578 3.30056 10.8523 2.98449 10.0125 2.98449ZM16.5754 5.98449C16.4582 5.98449 16.3442 5.99199 16.2318 6.00699C16.1533 6.02031 16.0728 6.01851 15.9951 6.0017C15.9173 5.9849 15.844 5.95343 15.7793 5.90918C15.7147 5.86493 15.6602 5.8088 15.6189 5.74415C15.5777 5.67949 15.5506 5.60763 15.5394 5.53285C15.5281 5.45807 15.5328 5.3819 15.5533 5.3089C15.5738 5.23589 15.6096 5.16753 15.6585 5.10791C15.7075 5.04829 15.7686 4.99862 15.8383 4.96187C15.9079 4.92511 15.9847 4.90203 16.064 4.89399C16.8513 4.78614 17.6542 4.92939 18.3462 5.30118C19.0383 5.67298 19.5802 6.25222 19.8866 6.94774C20.1931 7.64326 20.2467 8.41557 20.0391 9.14315C19.8315 9.87072 19.3744 10.5122 18.7398 10.9667C19.6727 11.3625 20.4648 12.0055 21.0205 12.8182C21.5762 13.6309 21.8718 14.5786 21.8716 15.547C21.8716 15.6962 21.8091 15.8393 21.6977 15.9447C21.5864 16.0502 21.4354 16.1095 21.2779 16.1095C21.1204 16.1095 20.9694 16.0502 20.858 15.9447C20.7467 15.8393 20.6841 15.6962 20.6841 15.547C20.684 14.7101 20.3994 13.8955 19.8724 13.2239C19.3454 12.5522 18.604 12.0592 17.7581 11.818L17.3354 11.698V10.441L17.66 10.2842C18.1411 10.0533 18.5261 9.67558 18.7527 9.21192C18.9794 8.74827 19.0344 8.22578 18.9091 7.72881C18.7837 7.23184 18.4852 6.7894 18.0618 6.47291C17.6384 6.15642 17.1147 5.98436 16.5754 5.98449Z"
                                                fill="#CCCCCC"
                                            />
                                        </svg>
                                        749
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-center">
                                    <div className="bot-marketplace__card-profit">
                                        <div className="bot-marketplace__card-percentage">
                                            +667.38 %
                                        </div>
                                        <div className="bot-marketplace__card-pnl">
                                            PnL%
                                        </div>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-info">
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            16 days 7 hrs
                                        </div>
                                        <div className="bot-marketplace__card-subtitle">
                                            Run time
                                        </div>
                                    </div>
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            37.03%
                                        </div>
                                        <span className="bot-marketplace__card-subtitle bot-marketplace__card-drawdown">
                                            Max drawdown
                                        </span>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-pair">
                                    <img
                                        src="../assets/img/bot-marketplace/btc.png"
                                        alt=""
                                    />
                                    BTC/USDT
                                </div>
                                <div className="bot-marketplace__card-bottom">
                                    <div className="bot-marketplace__card-user">
                                        <div className="bot-marketplace__card-avatar">
                                            о
                                        </div>
                                        <div className="bot-marketplace__card-name">
                                            ***om
                                        </div>
                                    </div>
                                    <span
                                        className="bot-marketplace__card-copy butafor__btn"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Copy
                                    </span>
                                </div>
                            </div>
                            <div className="bot-marketplace__card">
                                <div className="bot-marketplace__card-title">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 14H14V1H3.5V7.5M3.5 14V7.5M3.5 14C1.5 12.5 1 10.5 1 9.5C1 7.5 2.5 7.5 3.5 7.5M7 7.5H11M5.5 5H11"
                                            stroke="white"
                                        />
                                    </svg>
                                    SUSHIUSDT Perp
                                </div>
                                <div className="bot-marketplace__card-wrapper">
                                    <div className="bot-marketplace__card-tags">
                                        <span className="bot-marketplace__card-tag">
                                            Futures grid
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            Long
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            20.00x
                                        </span>
                                    </div>
                                    <div className="bot-marketplace__card-used">
                                        <svg
                                            width={23}
                                            height={18}
                                            viewBox="0 0 23 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.65831 5.98449C5.65847 5.27343 5.85264 4.57448 6.22199 3.95546C6.59134 3.33645 7.12332 2.8184 7.76631 2.45159C8.4093 2.08478 9.14146 1.88166 9.89174 1.86194C10.642 1.84222 11.3849 2.00658 12.0484 2.33906C12.7119 2.67154 13.2733 3.16085 13.6783 3.75951C14.0834 4.35817 14.3181 5.04585 14.3599 5.75581C14.4017 6.46577 14.249 7.17391 13.9167 7.8115C13.5844 8.44909 13.0838 8.99448 12.4635 9.39474C13.7994 9.85894 14.9582 10.6913 15.7906 11.7846C16.623 12.878 17.091 14.1823 17.1343 15.5297C17.1325 15.675 17.0714 15.814 16.964 15.9177C16.8565 16.0213 16.7109 16.0816 16.5576 16.086C16.4043 16.0903 16.2552 16.0384 16.1414 15.941C16.0276 15.8437 15.9578 15.7084 15.9468 15.5635C15.8997 14.1021 15.2537 12.7155 14.1459 11.6975C13.0381 10.6796 11.5554 10.1103 10.0121 10.1103C8.46876 10.1103 6.98609 10.6796 5.87826 11.6975C4.77042 12.7155 4.12449 14.1021 4.07735 15.5635C4.06942 15.7104 4.00109 15.8485 3.887 15.9482C3.77291 16.0479 3.62212 16.1013 3.46695 16.097C3.31178 16.0927 3.16457 16.031 3.05685 15.9251C2.94912 15.8192 2.88946 15.6776 2.89064 15.5305C2.93383 14.1829 3.40175 12.8784 4.23417 11.7849C5.06659 10.6914 6.22541 9.85899 7.56148 9.39474C6.97472 9.01647 6.49454 8.50796 6.16282 7.91355C5.83109 7.31913 5.65789 6.65687 5.65831 5.98449ZM10.0125 2.98449C9.17262 2.98449 8.36717 3.30056 7.7733 3.86317C7.17944 4.42578 6.84581 5.18884 6.84581 5.98449C6.84581 6.78014 7.17944 7.5432 7.7733 8.10581C8.36717 8.66842 9.17262 8.98449 10.0125 8.98449C10.8523 8.98449 11.6578 8.66842 12.2516 8.10581C12.8455 7.5432 13.1791 6.78014 13.1791 5.98449C13.1791 5.18884 12.8455 4.42578 12.2516 3.86317C11.6578 3.30056 10.8523 2.98449 10.0125 2.98449ZM16.5754 5.98449C16.4582 5.98449 16.3442 5.99199 16.2318 6.00699C16.1533 6.02031 16.0728 6.01851 15.9951 6.0017C15.9173 5.9849 15.844 5.95343 15.7793 5.90918C15.7147 5.86493 15.6602 5.8088 15.6189 5.74415C15.5777 5.67949 15.5506 5.60763 15.5394 5.53285C15.5281 5.45807 15.5328 5.3819 15.5533 5.3089C15.5738 5.23589 15.6096 5.16753 15.6585 5.10791C15.7075 5.04829 15.7686 4.99862 15.8383 4.96187C15.9079 4.92511 15.9847 4.90203 16.064 4.89399C16.8513 4.78614 17.6542 4.92939 18.3462 5.30118C19.0383 5.67298 19.5802 6.25222 19.8866 6.94774C20.1931 7.64326 20.2467 8.41557 20.0391 9.14315C19.8315 9.87072 19.3744 10.5122 18.7398 10.9667C19.6727 11.3625 20.4648 12.0055 21.0205 12.8182C21.5762 13.6309 21.8718 14.5786 21.8716 15.547C21.8716 15.6962 21.8091 15.8393 21.6977 15.9447C21.5864 16.0502 21.4354 16.1095 21.2779 16.1095C21.1204 16.1095 20.9694 16.0502 20.858 15.9447C20.7467 15.8393 20.6841 15.6962 20.6841 15.547C20.684 14.7101 20.3994 13.8955 19.8724 13.2239C19.3454 12.5522 18.604 12.0592 17.7581 11.818L17.3354 11.698V10.441L17.66 10.2842C18.1411 10.0533 18.5261 9.67558 18.7527 9.21192C18.9794 8.74827 19.0344 8.22578 18.9091 7.72881C18.7837 7.23184 18.4852 6.7894 18.0618 6.47291C17.6384 6.15642 17.1147 5.98436 16.5754 5.98449Z"
                                                fill="#CCCCCC"
                                            />
                                        </svg>
                                        3 555
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-center">
                                    <div className="bot-marketplace__card-profit">
                                        <div className="bot-marketplace__card-percentage">
                                            +587.97 %
                                        </div>
                                        <div className="bot-marketplace__card-pnl">
                                            PnL%
                                        </div>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-info">
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            78 days 16 hrs
                                        </div>
                                        <div className="bot-marketplace__card-subtitle">
                                            Run time
                                        </div>
                                    </div>
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            49.74%
                                        </div>
                                        <span className="bot-marketplace__card-subtitle bot-marketplace__card-drawdown">
                                            Max drawdown
                                        </span>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-pair">
                                    <img
                                        src="../assets/img/bot-marketplace/sushi.png"
                                        alt=""
                                    />
                                    SUSHI/USDT
                                </div>
                                <div className="bot-marketplace__card-bottom">
                                    <div className="bot-marketplace__card-user">
                                        <div className="bot-marketplace__card-avatar">
                                            о
                                        </div>
                                        <div className="bot-marketplace__card-name">
                                            ***93
                                        </div>
                                    </div>
                                    <span
                                        className="bot-marketplace__card-copy butafor__btn"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Copy
                                    </span>
                                </div>
                            </div>
                            <div className="bot-marketplace__card">
                                <div className="bot-marketplace__card-title">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 14H14V1H3.5V7.5M3.5 14V7.5M3.5 14C1.5 12.5 1 10.5 1 9.5C1 7.5 2.5 7.5 3.5 7.5M7 7.5H11M5.5 5H11"
                                            stroke="white"
                                        />
                                    </svg>
                                    FITFIUSDT Perp
                                </div>
                                <div className="bot-marketplace__card-wrapper">
                                    <div className="bot-marketplace__card-tags">
                                        <span className="bot-marketplace__card-tag">
                                            Futures grid
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            Long
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            20.00x
                                        </span>
                                    </div>
                                    <div className="bot-marketplace__card-used">
                                        <svg
                                            width={23}
                                            height={18}
                                            viewBox="0 0 23 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.65831 5.98449C5.65847 5.27343 5.85264 4.57448 6.22199 3.95546C6.59134 3.33645 7.12332 2.8184 7.76631 2.45159C8.4093 2.08478 9.14146 1.88166 9.89174 1.86194C10.642 1.84222 11.3849 2.00658 12.0484 2.33906C12.7119 2.67154 13.2733 3.16085 13.6783 3.75951C14.0834 4.35817 14.3181 5.04585 14.3599 5.75581C14.4017 6.46577 14.249 7.17391 13.9167 7.8115C13.5844 8.44909 13.0838 8.99448 12.4635 9.39474C13.7994 9.85894 14.9582 10.6913 15.7906 11.7846C16.623 12.878 17.091 14.1823 17.1343 15.5297C17.1325 15.675 17.0714 15.814 16.964 15.9177C16.8565 16.0213 16.7109 16.0816 16.5576 16.086C16.4043 16.0903 16.2552 16.0384 16.1414 15.941C16.0276 15.8437 15.9578 15.7084 15.9468 15.5635C15.8997 14.1021 15.2537 12.7155 14.1459 11.6975C13.0381 10.6796 11.5554 10.1103 10.0121 10.1103C8.46876 10.1103 6.98609 10.6796 5.87826 11.6975C4.77042 12.7155 4.12449 14.1021 4.07735 15.5635C4.06942 15.7104 4.00109 15.8485 3.887 15.9482C3.77291 16.0479 3.62212 16.1013 3.46695 16.097C3.31178 16.0927 3.16457 16.031 3.05685 15.9251C2.94912 15.8192 2.88946 15.6776 2.89064 15.5305C2.93383 14.1829 3.40175 12.8784 4.23417 11.7849C5.06659 10.6914 6.22541 9.85899 7.56148 9.39474C6.97472 9.01647 6.49454 8.50796 6.16282 7.91355C5.83109 7.31913 5.65789 6.65687 5.65831 5.98449ZM10.0125 2.98449C9.17262 2.98449 8.36717 3.30056 7.7733 3.86317C7.17944 4.42578 6.84581 5.18884 6.84581 5.98449C6.84581 6.78014 7.17944 7.5432 7.7733 8.10581C8.36717 8.66842 9.17262 8.98449 10.0125 8.98449C10.8523 8.98449 11.6578 8.66842 12.2516 8.10581C12.8455 7.5432 13.1791 6.78014 13.1791 5.98449C13.1791 5.18884 12.8455 4.42578 12.2516 3.86317C11.6578 3.30056 10.8523 2.98449 10.0125 2.98449ZM16.5754 5.98449C16.4582 5.98449 16.3442 5.99199 16.2318 6.00699C16.1533 6.02031 16.0728 6.01851 15.9951 6.0017C15.9173 5.9849 15.844 5.95343 15.7793 5.90918C15.7147 5.86493 15.6602 5.8088 15.6189 5.74415C15.5777 5.67949 15.5506 5.60763 15.5394 5.53285C15.5281 5.45807 15.5328 5.3819 15.5533 5.3089C15.5738 5.23589 15.6096 5.16753 15.6585 5.10791C15.7075 5.04829 15.7686 4.99862 15.8383 4.96187C15.9079 4.92511 15.9847 4.90203 16.064 4.89399C16.8513 4.78614 17.6542 4.92939 18.3462 5.30118C19.0383 5.67298 19.5802 6.25222 19.8866 6.94774C20.1931 7.64326 20.2467 8.41557 20.0391 9.14315C19.8315 9.87072 19.3744 10.5122 18.7398 10.9667C19.6727 11.3625 20.4648 12.0055 21.0205 12.8182C21.5762 13.6309 21.8718 14.5786 21.8716 15.547C21.8716 15.6962 21.8091 15.8393 21.6977 15.9447C21.5864 16.0502 21.4354 16.1095 21.2779 16.1095C21.1204 16.1095 20.9694 16.0502 20.858 15.9447C20.7467 15.8393 20.6841 15.6962 20.6841 15.547C20.684 14.7101 20.3994 13.8955 19.8724 13.2239C19.3454 12.5522 18.604 12.0592 17.7581 11.818L17.3354 11.698V10.441L17.66 10.2842C18.1411 10.0533 18.5261 9.67558 18.7527 9.21192C18.9794 8.74827 19.0344 8.22578 18.9091 7.72881C18.7837 7.23184 18.4852 6.7894 18.0618 6.47291C17.6384 6.15642 17.1147 5.98436 16.5754 5.98449Z"
                                                fill="#CCCCCC"
                                            />
                                        </svg>
                                        323
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-center">
                                    <div className="bot-marketplace__card-profit">
                                        <div className="bot-marketplace__card-percentage">
                                            +408.09 %
                                        </div>
                                        <div className="bot-marketplace__card-pnl">
                                            PnL%
                                        </div>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-info">
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            16 days 8 hrs
                                        </div>
                                        <div className="bot-marketplace__card-subtitle">
                                            Run time
                                        </div>
                                    </div>
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            47.34%
                                        </div>
                                        <span className="bot-marketplace__card-subtitle bot-marketplace__card-drawdown">
                                            Max drawdown
                                        </span>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-pair">
                                    <img
                                        src="../assets/img/bot-marketplace/fitfi.png"
                                        alt=""
                                    />
                                    FITFI/USDT
                                </div>
                                <div className="bot-marketplace__card-bottom">
                                    <div className="bot-marketplace__card-user">
                                        <div className="bot-marketplace__card-avatar">
                                            о
                                        </div>
                                        <div className="bot-marketplace__card-name">
                                            ***00
                                        </div>
                                    </div>
                                    <span
                                        className="bot-marketplace__card-copy butafor__btn"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Copy
                                    </span>
                                </div>
                            </div>
                            <div className="bot-marketplace__card">
                                <div className="bot-marketplace__card-title">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 14H14V1H3.5V7.5M3.5 14V7.5M3.5 14C1.5 12.5 1 10.5 1 9.5C1 7.5 2.5 7.5 3.5 7.5M7 7.5H11M5.5 5H11"
                                            stroke="white"
                                        />
                                    </svg>
                                    ETHUSDT Perp
                                </div>
                                <div className="bot-marketplace__card-wrapper">
                                    <div className="bot-marketplace__card-tags">
                                        <span className="bot-marketplace__card-tag">
                                            Futures grid
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            Long
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            20.00x
                                        </span>
                                    </div>
                                    <div className="bot-marketplace__card-used">
                                        <svg
                                            width={23}
                                            height={18}
                                            viewBox="0 0 23 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.65831 5.98449C5.65847 5.27343 5.85264 4.57448 6.22199 3.95546C6.59134 3.33645 7.12332 2.8184 7.76631 2.45159C8.4093 2.08478 9.14146 1.88166 9.89174 1.86194C10.642 1.84222 11.3849 2.00658 12.0484 2.33906C12.7119 2.67154 13.2733 3.16085 13.6783 3.75951C14.0834 4.35817 14.3181 5.04585 14.3599 5.75581C14.4017 6.46577 14.249 7.17391 13.9167 7.8115C13.5844 8.44909 13.0838 8.99448 12.4635 9.39474C13.7994 9.85894 14.9582 10.6913 15.7906 11.7846C16.623 12.878 17.091 14.1823 17.1343 15.5297C17.1325 15.675 17.0714 15.814 16.964 15.9177C16.8565 16.0213 16.7109 16.0816 16.5576 16.086C16.4043 16.0903 16.2552 16.0384 16.1414 15.941C16.0276 15.8437 15.9578 15.7084 15.9468 15.5635C15.8997 14.1021 15.2537 12.7155 14.1459 11.6975C13.0381 10.6796 11.5554 10.1103 10.0121 10.1103C8.46876 10.1103 6.98609 10.6796 5.87826 11.6975C4.77042 12.7155 4.12449 14.1021 4.07735 15.5635C4.06942 15.7104 4.00109 15.8485 3.887 15.9482C3.77291 16.0479 3.62212 16.1013 3.46695 16.097C3.31178 16.0927 3.16457 16.031 3.05685 15.9251C2.94912 15.8192 2.88946 15.6776 2.89064 15.5305C2.93383 14.1829 3.40175 12.8784 4.23417 11.7849C5.06659 10.6914 6.22541 9.85899 7.56148 9.39474C6.97472 9.01647 6.49454 8.50796 6.16282 7.91355C5.83109 7.31913 5.65789 6.65687 5.65831 5.98449ZM10.0125 2.98449C9.17262 2.98449 8.36717 3.30056 7.7733 3.86317C7.17944 4.42578 6.84581 5.18884 6.84581 5.98449C6.84581 6.78014 7.17944 7.5432 7.7733 8.10581C8.36717 8.66842 9.17262 8.98449 10.0125 8.98449C10.8523 8.98449 11.6578 8.66842 12.2516 8.10581C12.8455 7.5432 13.1791 6.78014 13.1791 5.98449C13.1791 5.18884 12.8455 4.42578 12.2516 3.86317C11.6578 3.30056 10.8523 2.98449 10.0125 2.98449ZM16.5754 5.98449C16.4582 5.98449 16.3442 5.99199 16.2318 6.00699C16.1533 6.02031 16.0728 6.01851 15.9951 6.0017C15.9173 5.9849 15.844 5.95343 15.7793 5.90918C15.7147 5.86493 15.6602 5.8088 15.6189 5.74415C15.5777 5.67949 15.5506 5.60763 15.5394 5.53285C15.5281 5.45807 15.5328 5.3819 15.5533 5.3089C15.5738 5.23589 15.6096 5.16753 15.6585 5.10791C15.7075 5.04829 15.7686 4.99862 15.8383 4.96187C15.9079 4.92511 15.9847 4.90203 16.064 4.89399C16.8513 4.78614 17.6542 4.92939 18.3462 5.30118C19.0383 5.67298 19.5802 6.25222 19.8866 6.94774C20.1931 7.64326 20.2467 8.41557 20.0391 9.14315C19.8315 9.87072 19.3744 10.5122 18.7398 10.9667C19.6727 11.3625 20.4648 12.0055 21.0205 12.8182C21.5762 13.6309 21.8718 14.5786 21.8716 15.547C21.8716 15.6962 21.8091 15.8393 21.6977 15.9447C21.5864 16.0502 21.4354 16.1095 21.2779 16.1095C21.1204 16.1095 20.9694 16.0502 20.858 15.9447C20.7467 15.8393 20.6841 15.6962 20.6841 15.547C20.684 14.7101 20.3994 13.8955 19.8724 13.2239C19.3454 12.5522 18.604 12.0592 17.7581 11.818L17.3354 11.698V10.441L17.66 10.2842C18.1411 10.0533 18.5261 9.67558 18.7527 9.21192C18.9794 8.74827 19.0344 8.22578 18.9091 7.72881C18.7837 7.23184 18.4852 6.7894 18.0618 6.47291C17.6384 6.15642 17.1147 5.98436 16.5754 5.98449Z"
                                                fill="#CCCCCC"
                                            />
                                        </svg>
                                        296
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-center">
                                    <div className="bot-marketplace__card-profit">
                                        <div className="bot-marketplace__card-percentage">
                                            +366.67 %
                                        </div>
                                        <div className="bot-marketplace__card-pnl">
                                            PnL%
                                        </div>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-info">
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            80 days 4 hrs
                                        </div>
                                        <div className="bot-marketplace__card-subtitle">
                                            Run time
                                        </div>
                                    </div>
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            39.44%
                                        </div>
                                        <span className="bot-marketplace__card-subtitle bot-marketplace__card-drawdown">
                                            Max drawdown
                                        </span>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-pair">
                                    <img
                                        src="../assets/img/bot-marketplace/eth.png"
                                        alt=""
                                    />
                                    ETH/USDT
                                </div>
                                <div className="bot-marketplace__card-bottom">
                                    <div className="bot-marketplace__card-user">
                                        <div className="bot-marketplace__card-avatar">
                                            8
                                        </div>
                                        <div className="bot-marketplace__card-name">
                                            ***85
                                        </div>
                                    </div>
                                    <span
                                        className="bot-marketplace__card-copy butafor__btn"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Copy
                                    </span>
                                </div>
                            </div>
                            <div className="bot-marketplace__card">
                                <div className="bot-marketplace__card-title">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 14H14V1H3.5V7.5M3.5 14V7.5M3.5 14C1.5 12.5 1 10.5 1 9.5C1 7.5 2.5 7.5 3.5 7.5M7 7.5H11M5.5 5H11"
                                            stroke="white"
                                        />
                                    </svg>
                                    ETHUSDT Perp
                                </div>
                                <div className="bot-marketplace__card-wrapper">
                                    <div className="bot-marketplace__card-tags">
                                        <span className="bot-marketplace__card-tag">
                                            Futures grid
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            Long
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            20.00x
                                        </span>
                                    </div>
                                    <div className="bot-marketplace__card-used">
                                        <svg
                                            width={23}
                                            height={18}
                                            viewBox="0 0 23 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.65831 5.98449C5.65847 5.27343 5.85264 4.57448 6.22199 3.95546C6.59134 3.33645 7.12332 2.8184 7.76631 2.45159C8.4093 2.08478 9.14146 1.88166 9.89174 1.86194C10.642 1.84222 11.3849 2.00658 12.0484 2.33906C12.7119 2.67154 13.2733 3.16085 13.6783 3.75951C14.0834 4.35817 14.3181 5.04585 14.3599 5.75581C14.4017 6.46577 14.249 7.17391 13.9167 7.8115C13.5844 8.44909 13.0838 8.99448 12.4635 9.39474C13.7994 9.85894 14.9582 10.6913 15.7906 11.7846C16.623 12.878 17.091 14.1823 17.1343 15.5297C17.1325 15.675 17.0714 15.814 16.964 15.9177C16.8565 16.0213 16.7109 16.0816 16.5576 16.086C16.4043 16.0903 16.2552 16.0384 16.1414 15.941C16.0276 15.8437 15.9578 15.7084 15.9468 15.5635C15.8997 14.1021 15.2537 12.7155 14.1459 11.6975C13.0381 10.6796 11.5554 10.1103 10.0121 10.1103C8.46876 10.1103 6.98609 10.6796 5.87826 11.6975C4.77042 12.7155 4.12449 14.1021 4.07735 15.5635C4.06942 15.7104 4.00109 15.8485 3.887 15.9482C3.77291 16.0479 3.62212 16.1013 3.46695 16.097C3.31178 16.0927 3.16457 16.031 3.05685 15.9251C2.94912 15.8192 2.88946 15.6776 2.89064 15.5305C2.93383 14.1829 3.40175 12.8784 4.23417 11.7849C5.06659 10.6914 6.22541 9.85899 7.56148 9.39474C6.97472 9.01647 6.49454 8.50796 6.16282 7.91355C5.83109 7.31913 5.65789 6.65687 5.65831 5.98449ZM10.0125 2.98449C9.17262 2.98449 8.36717 3.30056 7.7733 3.86317C7.17944 4.42578 6.84581 5.18884 6.84581 5.98449C6.84581 6.78014 7.17944 7.5432 7.7733 8.10581C8.36717 8.66842 9.17262 8.98449 10.0125 8.98449C10.8523 8.98449 11.6578 8.66842 12.2516 8.10581C12.8455 7.5432 13.1791 6.78014 13.1791 5.98449C13.1791 5.18884 12.8455 4.42578 12.2516 3.86317C11.6578 3.30056 10.8523 2.98449 10.0125 2.98449ZM16.5754 5.98449C16.4582 5.98449 16.3442 5.99199 16.2318 6.00699C16.1533 6.02031 16.0728 6.01851 15.9951 6.0017C15.9173 5.9849 15.844 5.95343 15.7793 5.90918C15.7147 5.86493 15.6602 5.8088 15.6189 5.74415C15.5777 5.67949 15.5506 5.60763 15.5394 5.53285C15.5281 5.45807 15.5328 5.3819 15.5533 5.3089C15.5738 5.23589 15.6096 5.16753 15.6585 5.10791C15.7075 5.04829 15.7686 4.99862 15.8383 4.96187C15.9079 4.92511 15.9847 4.90203 16.064 4.89399C16.8513 4.78614 17.6542 4.92939 18.3462 5.30118C19.0383 5.67298 19.5802 6.25222 19.8866 6.94774C20.1931 7.64326 20.2467 8.41557 20.0391 9.14315C19.8315 9.87072 19.3744 10.5122 18.7398 10.9667C19.6727 11.3625 20.4648 12.0055 21.0205 12.8182C21.5762 13.6309 21.8718 14.5786 21.8716 15.547C21.8716 15.6962 21.8091 15.8393 21.6977 15.9447C21.5864 16.0502 21.4354 16.1095 21.2779 16.1095C21.1204 16.1095 20.9694 16.0502 20.858 15.9447C20.7467 15.8393 20.6841 15.6962 20.6841 15.547C20.684 14.7101 20.3994 13.8955 19.8724 13.2239C19.3454 12.5522 18.604 12.0592 17.7581 11.818L17.3354 11.698V10.441L17.66 10.2842C18.1411 10.0533 18.5261 9.67558 18.7527 9.21192C18.9794 8.74827 19.0344 8.22578 18.9091 7.72881C18.7837 7.23184 18.4852 6.7894 18.0618 6.47291C17.6384 6.15642 17.1147 5.98436 16.5754 5.98449Z"
                                                fill="#CCCCCC"
                                            />
                                        </svg>
                                        90
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-center">
                                    <div className="bot-marketplace__card-profit">
                                        <div className="bot-marketplace__card-percentage">
                                            +336.98 %
                                        </div>
                                        <div className="bot-marketplace__card-pnl">
                                            PnL%
                                        </div>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-info">
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            89 days 3 hrs
                                        </div>
                                        <div className="bot-marketplace__card-subtitle">
                                            Run time
                                        </div>
                                    </div>
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            30.32%
                                        </div>
                                        <span className="bot-marketplace__card-subtitle bot-marketplace__card-drawdown">
                                            Max drawdown
                                        </span>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-pair">
                                    <img
                                        src="../assets/img/bot-marketplace/eth.png"
                                        alt=""
                                    />
                                    ETH/USDT
                                </div>
                                <div className="bot-marketplace__card-bottom">
                                    <div className="bot-marketplace__card-user">
                                        <div className="bot-marketplace__card-avatar">
                                            4
                                        </div>
                                        <div className="bot-marketplace__card-name">
                                            ***44
                                        </div>
                                    </div>
                                    <span
                                        className="bot-marketplace__card-copy butafor__btn"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Copy
                                    </span>
                                </div>
                            </div>
                            <div className="bot-marketplace__card">
                                <div className="bot-marketplace__card-title">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 14H14V1H3.5V7.5M3.5 14V7.5M3.5 14C1.5 12.5 1 10.5 1 9.5C1 7.5 2.5 7.5 3.5 7.5M7 7.5H11M5.5 5H11"
                                            stroke="white"
                                        />
                                    </svg>
                                    ARBUSDT Perp
                                </div>
                                <div className="bot-marketplace__card-wrapper">
                                    <div className="bot-marketplace__card-tags">
                                        <span className="bot-marketplace__card-tag">
                                            Futures grid
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            Long
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            20.00x
                                        </span>
                                    </div>
                                    <div className="bot-marketplace__card-used">
                                        <svg
                                            width={23}
                                            height={18}
                                            viewBox="0 0 23 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.65831 5.98449C5.65847 5.27343 5.85264 4.57448 6.22199 3.95546C6.59134 3.33645 7.12332 2.8184 7.76631 2.45159C8.4093 2.08478 9.14146 1.88166 9.89174 1.86194C10.642 1.84222 11.3849 2.00658 12.0484 2.33906C12.7119 2.67154 13.2733 3.16085 13.6783 3.75951C14.0834 4.35817 14.3181 5.04585 14.3599 5.75581C14.4017 6.46577 14.249 7.17391 13.9167 7.8115C13.5844 8.44909 13.0838 8.99448 12.4635 9.39474C13.7994 9.85894 14.9582 10.6913 15.7906 11.7846C16.623 12.878 17.091 14.1823 17.1343 15.5297C17.1325 15.675 17.0714 15.814 16.964 15.9177C16.8565 16.0213 16.7109 16.0816 16.5576 16.086C16.4043 16.0903 16.2552 16.0384 16.1414 15.941C16.0276 15.8437 15.9578 15.7084 15.9468 15.5635C15.8997 14.1021 15.2537 12.7155 14.1459 11.6975C13.0381 10.6796 11.5554 10.1103 10.0121 10.1103C8.46876 10.1103 6.98609 10.6796 5.87826 11.6975C4.77042 12.7155 4.12449 14.1021 4.07735 15.5635C4.06942 15.7104 4.00109 15.8485 3.887 15.9482C3.77291 16.0479 3.62212 16.1013 3.46695 16.097C3.31178 16.0927 3.16457 16.031 3.05685 15.9251C2.94912 15.8192 2.88946 15.6776 2.89064 15.5305C2.93383 14.1829 3.40175 12.8784 4.23417 11.7849C5.06659 10.6914 6.22541 9.85899 7.56148 9.39474C6.97472 9.01647 6.49454 8.50796 6.16282 7.91355C5.83109 7.31913 5.65789 6.65687 5.65831 5.98449ZM10.0125 2.98449C9.17262 2.98449 8.36717 3.30056 7.7733 3.86317C7.17944 4.42578 6.84581 5.18884 6.84581 5.98449C6.84581 6.78014 7.17944 7.5432 7.7733 8.10581C8.36717 8.66842 9.17262 8.98449 10.0125 8.98449C10.8523 8.98449 11.6578 8.66842 12.2516 8.10581C12.8455 7.5432 13.1791 6.78014 13.1791 5.98449C13.1791 5.18884 12.8455 4.42578 12.2516 3.86317C11.6578 3.30056 10.8523 2.98449 10.0125 2.98449ZM16.5754 5.98449C16.4582 5.98449 16.3442 5.99199 16.2318 6.00699C16.1533 6.02031 16.0728 6.01851 15.9951 6.0017C15.9173 5.9849 15.844 5.95343 15.7793 5.90918C15.7147 5.86493 15.6602 5.8088 15.6189 5.74415C15.5777 5.67949 15.5506 5.60763 15.5394 5.53285C15.5281 5.45807 15.5328 5.3819 15.5533 5.3089C15.5738 5.23589 15.6096 5.16753 15.6585 5.10791C15.7075 5.04829 15.7686 4.99862 15.8383 4.96187C15.9079 4.92511 15.9847 4.90203 16.064 4.89399C16.8513 4.78614 17.6542 4.92939 18.3462 5.30118C19.0383 5.67298 19.5802 6.25222 19.8866 6.94774C20.1931 7.64326 20.2467 8.41557 20.0391 9.14315C19.8315 9.87072 19.3744 10.5122 18.7398 10.9667C19.6727 11.3625 20.4648 12.0055 21.0205 12.8182C21.5762 13.6309 21.8718 14.5786 21.8716 15.547C21.8716 15.6962 21.8091 15.8393 21.6977 15.9447C21.5864 16.0502 21.4354 16.1095 21.2779 16.1095C21.1204 16.1095 20.9694 16.0502 20.858 15.9447C20.7467 15.8393 20.6841 15.6962 20.6841 15.547C20.684 14.7101 20.3994 13.8955 19.8724 13.2239C19.3454 12.5522 18.604 12.0592 17.7581 11.818L17.3354 11.698V10.441L17.66 10.2842C18.1411 10.0533 18.5261 9.67558 18.7527 9.21192C18.9794 8.74827 19.0344 8.22578 18.9091 7.72881C18.7837 7.23184 18.4852 6.7894 18.0618 6.47291C17.6384 6.15642 17.1147 5.98436 16.5754 5.98449Z"
                                                fill="#CCCCCC"
                                            />
                                        </svg>
                                        113
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-center">
                                    <div className="bot-marketplace__card-profit">
                                        <div className="bot-marketplace__card-percentage">
                                            +332.47 %
                                        </div>
                                        <div className="bot-marketplace__card-pnl">
                                            PnL%
                                        </div>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-info">
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            2 days 2 hrs
                                        </div>
                                        <div className="bot-marketplace__card-subtitle">
                                            Run time
                                        </div>
                                    </div>
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            33.65%
                                        </div>
                                        <span
                                            className="bot-marketplace__card-subtitle bot-marketplace__card-drawdown"
                                            span
                                        >
                                            Max drawdown
                                        </span>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-pair">
                                    <img
                                        src="../assets/img/bot-marketplace/arb.webp"
                                        alt=""
                                    />
                                    ARB/USDT
                                </div>
                                <div className="bot-marketplace__card-bottom">
                                    <div className="bot-marketplace__card-user">
                                        <div className="bot-marketplace__card-avatar">
                                            o
                                        </div>
                                        <div className="bot-marketplace__card-name">
                                            ***om
                                        </div>
                                    </div>
                                    <span
                                        className="bot-marketplace__card-copy butafor__btn"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Copy
                                    </span>
                                </div>
                            </div>
                            <div className="bot-marketplace__card">
                                <div className="bot-marketplace__card-title">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 14H14V1H3.5V7.5M3.5 14V7.5M3.5 14C1.5 12.5 1 10.5 1 9.5C1 7.5 2.5 7.5 3.5 7.5M7 7.5H11M5.5 5H11"
                                            stroke="white"
                                        />
                                    </svg>
                                    BTCUSDT Perp
                                </div>
                                <div className="bot-marketplace__card-wrapper">
                                    <div className="bot-marketplace__card-tags">
                                        <span className="bot-marketplace__card-tag">
                                            Futures grid
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            Long
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            20.00x
                                        </span>
                                    </div>
                                    <div className="bot-marketplace__card-used">
                                        <svg
                                            width={23}
                                            height={18}
                                            viewBox="0 0 23 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.65831 5.98449C5.65847 5.27343 5.85264 4.57448 6.22199 3.95546C6.59134 3.33645 7.12332 2.8184 7.76631 2.45159C8.4093 2.08478 9.14146 1.88166 9.89174 1.86194C10.642 1.84222 11.3849 2.00658 12.0484 2.33906C12.7119 2.67154 13.2733 3.16085 13.6783 3.75951C14.0834 4.35817 14.3181 5.04585 14.3599 5.75581C14.4017 6.46577 14.249 7.17391 13.9167 7.8115C13.5844 8.44909 13.0838 8.99448 12.4635 9.39474C13.7994 9.85894 14.9582 10.6913 15.7906 11.7846C16.623 12.878 17.091 14.1823 17.1343 15.5297C17.1325 15.675 17.0714 15.814 16.964 15.9177C16.8565 16.0213 16.7109 16.0816 16.5576 16.086C16.4043 16.0903 16.2552 16.0384 16.1414 15.941C16.0276 15.8437 15.9578 15.7084 15.9468 15.5635C15.8997 14.1021 15.2537 12.7155 14.1459 11.6975C13.0381 10.6796 11.5554 10.1103 10.0121 10.1103C8.46876 10.1103 6.98609 10.6796 5.87826 11.6975C4.77042 12.7155 4.12449 14.1021 4.07735 15.5635C4.06942 15.7104 4.00109 15.8485 3.887 15.9482C3.77291 16.0479 3.62212 16.1013 3.46695 16.097C3.31178 16.0927 3.16457 16.031 3.05685 15.9251C2.94912 15.8192 2.88946 15.6776 2.89064 15.5305C2.93383 14.1829 3.40175 12.8784 4.23417 11.7849C5.06659 10.6914 6.22541 9.85899 7.56148 9.39474C6.97472 9.01647 6.49454 8.50796 6.16282 7.91355C5.83109 7.31913 5.65789 6.65687 5.65831 5.98449ZM10.0125 2.98449C9.17262 2.98449 8.36717 3.30056 7.7733 3.86317C7.17944 4.42578 6.84581 5.18884 6.84581 5.98449C6.84581 6.78014 7.17944 7.5432 7.7733 8.10581C8.36717 8.66842 9.17262 8.98449 10.0125 8.98449C10.8523 8.98449 11.6578 8.66842 12.2516 8.10581C12.8455 7.5432 13.1791 6.78014 13.1791 5.98449C13.1791 5.18884 12.8455 4.42578 12.2516 3.86317C11.6578 3.30056 10.8523 2.98449 10.0125 2.98449ZM16.5754 5.98449C16.4582 5.98449 16.3442 5.99199 16.2318 6.00699C16.1533 6.02031 16.0728 6.01851 15.9951 6.0017C15.9173 5.9849 15.844 5.95343 15.7793 5.90918C15.7147 5.86493 15.6602 5.8088 15.6189 5.74415C15.5777 5.67949 15.5506 5.60763 15.5394 5.53285C15.5281 5.45807 15.5328 5.3819 15.5533 5.3089C15.5738 5.23589 15.6096 5.16753 15.6585 5.10791C15.7075 5.04829 15.7686 4.99862 15.8383 4.96187C15.9079 4.92511 15.9847 4.90203 16.064 4.89399C16.8513 4.78614 17.6542 4.92939 18.3462 5.30118C19.0383 5.67298 19.5802 6.25222 19.8866 6.94774C20.1931 7.64326 20.2467 8.41557 20.0391 9.14315C19.8315 9.87072 19.3744 10.5122 18.7398 10.9667C19.6727 11.3625 20.4648 12.0055 21.0205 12.8182C21.5762 13.6309 21.8718 14.5786 21.8716 15.547C21.8716 15.6962 21.8091 15.8393 21.6977 15.9447C21.5864 16.0502 21.4354 16.1095 21.2779 16.1095C21.1204 16.1095 20.9694 16.0502 20.858 15.9447C20.7467 15.8393 20.6841 15.6962 20.6841 15.547C20.684 14.7101 20.3994 13.8955 19.8724 13.2239C19.3454 12.5522 18.604 12.0592 17.7581 11.818L17.3354 11.698V10.441L17.66 10.2842C18.1411 10.0533 18.5261 9.67558 18.7527 9.21192C18.9794 8.74827 19.0344 8.22578 18.9091 7.72881C18.7837 7.23184 18.4852 6.7894 18.0618 6.47291C17.6384 6.15642 17.1147 5.98436 16.5754 5.98449Z"
                                                fill="#CCCCCC"
                                            />
                                        </svg>
                                        28
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-center">
                                    <div className="bot-marketplace__card-profit">
                                        <div className="bot-marketplace__card-percentage">
                                            +327.67 %
                                        </div>
                                        <div className="bot-marketplace__card-pnl">
                                            PnL%
                                        </div>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-info">
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            106 days 18 hrs
                                        </div>
                                        <div className="bot-marketplace__card-subtitle">
                                            Run time
                                        </div>
                                    </div>
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            56.31%
                                        </div>
                                        <a className="bot-marketplace__card-subtitle bot-marketplace__card-drawdown">
                                            Max drawdown
                                        </a>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-pair">
                                    <img
                                        src="../assets/img/bot-marketplace/btc.png"
                                        alt=""
                                    />
                                    BTC/USDT
                                </div>
                                <div className="bot-marketplace__card-bottom">
                                    <div className="bot-marketplace__card-user">
                                        <div className="bot-marketplace__card-avatar">
                                            4
                                        </div>
                                        <div className="bot-marketplace__card-name">
                                            ***44
                                        </div>
                                    </div>
                                    <span
                                        className="bot-marketplace__card-copy butafor__btn"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Copy
                                    </span>
                                </div>
                            </div>
                            <div className="bot-marketplace__card">
                                <div className="bot-marketplace__card-title">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 14H14V1H3.5V7.5M3.5 14V7.5M3.5 14C1.5 12.5 1 10.5 1 9.5C1 7.5 2.5 7.5 3.5 7.5M7 7.5H11M5.5 5H11"
                                            stroke="white"
                                        />
                                    </svg>
                                    ETHWUSDT Perp
                                </div>
                                <div className="bot-marketplace__card-wrapper">
                                    <div className="bot-marketplace__card-tags">
                                        <span className="bot-marketplace__card-tag">
                                            Futures grid
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            Long
                                        </span>
                                        <span className="bot-marketplace__card-tag">
                                            10.00x
                                        </span>
                                    </div>
                                    <div className="bot-marketplace__card-used">
                                        <svg
                                            width={23}
                                            height={18}
                                            viewBox="0 0 23 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.65831 5.98449C5.65847 5.27343 5.85264 4.57448 6.22199 3.95546C6.59134 3.33645 7.12332 2.8184 7.76631 2.45159C8.4093 2.08478 9.14146 1.88166 9.89174 1.86194C10.642 1.84222 11.3849 2.00658 12.0484 2.33906C12.7119 2.67154 13.2733 3.16085 13.6783 3.75951C14.0834 4.35817 14.3181 5.04585 14.3599 5.75581C14.4017 6.46577 14.249 7.17391 13.9167 7.8115C13.5844 8.44909 13.0838 8.99448 12.4635 9.39474C13.7994 9.85894 14.9582 10.6913 15.7906 11.7846C16.623 12.878 17.091 14.1823 17.1343 15.5297C17.1325 15.675 17.0714 15.814 16.964 15.9177C16.8565 16.0213 16.7109 16.0816 16.5576 16.086C16.4043 16.0903 16.2552 16.0384 16.1414 15.941C16.0276 15.8437 15.9578 15.7084 15.9468 15.5635C15.8997 14.1021 15.2537 12.7155 14.1459 11.6975C13.0381 10.6796 11.5554 10.1103 10.0121 10.1103C8.46876 10.1103 6.98609 10.6796 5.87826 11.6975C4.77042 12.7155 4.12449 14.1021 4.07735 15.5635C4.06942 15.7104 4.00109 15.8485 3.887 15.9482C3.77291 16.0479 3.62212 16.1013 3.46695 16.097C3.31178 16.0927 3.16457 16.031 3.05685 15.9251C2.94912 15.8192 2.88946 15.6776 2.89064 15.5305C2.93383 14.1829 3.40175 12.8784 4.23417 11.7849C5.06659 10.6914 6.22541 9.85899 7.56148 9.39474C6.97472 9.01647 6.49454 8.50796 6.16282 7.91355C5.83109 7.31913 5.65789 6.65687 5.65831 5.98449ZM10.0125 2.98449C9.17262 2.98449 8.36717 3.30056 7.7733 3.86317C7.17944 4.42578 6.84581 5.18884 6.84581 5.98449C6.84581 6.78014 7.17944 7.5432 7.7733 8.10581C8.36717 8.66842 9.17262 8.98449 10.0125 8.98449C10.8523 8.98449 11.6578 8.66842 12.2516 8.10581C12.8455 7.5432 13.1791 6.78014 13.1791 5.98449C13.1791 5.18884 12.8455 4.42578 12.2516 3.86317C11.6578 3.30056 10.8523 2.98449 10.0125 2.98449ZM16.5754 5.98449C16.4582 5.98449 16.3442 5.99199 16.2318 6.00699C16.1533 6.02031 16.0728 6.01851 15.9951 6.0017C15.9173 5.9849 15.844 5.95343 15.7793 5.90918C15.7147 5.86493 15.6602 5.8088 15.6189 5.74415C15.5777 5.67949 15.5506 5.60763 15.5394 5.53285C15.5281 5.45807 15.5328 5.3819 15.5533 5.3089C15.5738 5.23589 15.6096 5.16753 15.6585 5.10791C15.7075 5.04829 15.7686 4.99862 15.8383 4.96187C15.9079 4.92511 15.9847 4.90203 16.064 4.89399C16.8513 4.78614 17.6542 4.92939 18.3462 5.30118C19.0383 5.67298 19.5802 6.25222 19.8866 6.94774C20.1931 7.64326 20.2467 8.41557 20.0391 9.14315C19.8315 9.87072 19.3744 10.5122 18.7398 10.9667C19.6727 11.3625 20.4648 12.0055 21.0205 12.8182C21.5762 13.6309 21.8718 14.5786 21.8716 15.547C21.8716 15.6962 21.8091 15.8393 21.6977 15.9447C21.5864 16.0502 21.4354 16.1095 21.2779 16.1095C21.1204 16.1095 20.9694 16.0502 20.858 15.9447C20.7467 15.8393 20.6841 15.6962 20.6841 15.547C20.684 14.7101 20.3994 13.8955 19.8724 13.2239C19.3454 12.5522 18.604 12.0592 17.7581 11.818L17.3354 11.698V10.441L17.66 10.2842C18.1411 10.0533 18.5261 9.67558 18.7527 9.21192C18.9794 8.74827 19.0344 8.22578 18.9091 7.72881C18.7837 7.23184 18.4852 6.7894 18.0618 6.47291C17.6384 6.15642 17.1147 5.98436 16.5754 5.98449Z"
                                                fill="#CCCCCC"
                                            />
                                        </svg>
                                        200
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-center">
                                    <div className="bot-marketplace__card-profit">
                                        <div className="bot-marketplace__card-percentage">
                                            +310.32 %
                                        </div>
                                        <div className="bot-marketplace__card-pnl">
                                            PnL%
                                        </div>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-info">
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            123 days 14 hrs
                                        </div>
                                        <div className="bot-marketplace__card-subtitle">
                                            Run time
                                        </div>
                                    </div>
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            47.93%
                                        </div>
                                        <span className="bot-marketplace__card-subtitle bot-marketplace__card-drawdown">
                                            Max drawdown
                                        </span>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-pair">
                                    <img
                                        src="../assets/img/bot-marketplace/ethw.webp"
                                        alt=""
                                    />
                                    ETHW/USDT
                                </div>
                                <div className="bot-marketplace__card-bottom">
                                    <div className="bot-marketplace__card-user">
                                        <div className="bot-marketplace__card-avatar">
                                            o
                                        </div>
                                        <div className="bot-marketplace__card-name">
                                            ***om
                                        </div>
                                    </div>
                                    <span
                                        className="bot-marketplace__card-copy butafor__btn"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Copy
                                    </span>
                                </div>
                            </div>
                            <div className="bot-marketplace__card">
                                <div className="bot-marketplace__card-title">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 14H14V1H3.5V7.5M3.5 14V7.5M3.5 14C1.5 12.5 1 10.5 1 9.5C1 7.5 2.5 7.5 3.5 7.5M7 7.5H11M5.5 5H11"
                                            stroke="white"
                                        />
                                    </svg>
                                    BTCUSDT Perp
                                </div>
                                <div className="bot-marketplace__card-wrapper">
                                    <div className="bot-marketplace__card-tags">
                                        <span className="bot-marketplace__card-tag">
                                            Futures grid
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            Long
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            20.00x
                                        </span>
                                    </div>
                                    <div className="bot-marketplace__card-used">
                                        <svg
                                            width={23}
                                            height={18}
                                            viewBox="0 0 23 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.65831 5.98449C5.65847 5.27343 5.85264 4.57448 6.22199 3.95546C6.59134 3.33645 7.12332 2.8184 7.76631 2.45159C8.4093 2.08478 9.14146 1.88166 9.89174 1.86194C10.642 1.84222 11.3849 2.00658 12.0484 2.33906C12.7119 2.67154 13.2733 3.16085 13.6783 3.75951C14.0834 4.35817 14.3181 5.04585 14.3599 5.75581C14.4017 6.46577 14.249 7.17391 13.9167 7.8115C13.5844 8.44909 13.0838 8.99448 12.4635 9.39474C13.7994 9.85894 14.9582 10.6913 15.7906 11.7846C16.623 12.878 17.091 14.1823 17.1343 15.5297C17.1325 15.675 17.0714 15.814 16.964 15.9177C16.8565 16.0213 16.7109 16.0816 16.5576 16.086C16.4043 16.0903 16.2552 16.0384 16.1414 15.941C16.0276 15.8437 15.9578 15.7084 15.9468 15.5635C15.8997 14.1021 15.2537 12.7155 14.1459 11.6975C13.0381 10.6796 11.5554 10.1103 10.0121 10.1103C8.46876 10.1103 6.98609 10.6796 5.87826 11.6975C4.77042 12.7155 4.12449 14.1021 4.07735 15.5635C4.06942 15.7104 4.00109 15.8485 3.887 15.9482C3.77291 16.0479 3.62212 16.1013 3.46695 16.097C3.31178 16.0927 3.16457 16.031 3.05685 15.9251C2.94912 15.8192 2.88946 15.6776 2.89064 15.5305C2.93383 14.1829 3.40175 12.8784 4.23417 11.7849C5.06659 10.6914 6.22541 9.85899 7.56148 9.39474C6.97472 9.01647 6.49454 8.50796 6.16282 7.91355C5.83109 7.31913 5.65789 6.65687 5.65831 5.98449ZM10.0125 2.98449C9.17262 2.98449 8.36717 3.30056 7.7733 3.86317C7.17944 4.42578 6.84581 5.18884 6.84581 5.98449C6.84581 6.78014 7.17944 7.5432 7.7733 8.10581C8.36717 8.66842 9.17262 8.98449 10.0125 8.98449C10.8523 8.98449 11.6578 8.66842 12.2516 8.10581C12.8455 7.5432 13.1791 6.78014 13.1791 5.98449C13.1791 5.18884 12.8455 4.42578 12.2516 3.86317C11.6578 3.30056 10.8523 2.98449 10.0125 2.98449ZM16.5754 5.98449C16.4582 5.98449 16.3442 5.99199 16.2318 6.00699C16.1533 6.02031 16.0728 6.01851 15.9951 6.0017C15.9173 5.9849 15.844 5.95343 15.7793 5.90918C15.7147 5.86493 15.6602 5.8088 15.6189 5.74415C15.5777 5.67949 15.5506 5.60763 15.5394 5.53285C15.5281 5.45807 15.5328 5.3819 15.5533 5.3089C15.5738 5.23589 15.6096 5.16753 15.6585 5.10791C15.7075 5.04829 15.7686 4.99862 15.8383 4.96187C15.9079 4.92511 15.9847 4.90203 16.064 4.89399C16.8513 4.78614 17.6542 4.92939 18.3462 5.30118C19.0383 5.67298 19.5802 6.25222 19.8866 6.94774C20.1931 7.64326 20.2467 8.41557 20.0391 9.14315C19.8315 9.87072 19.3744 10.5122 18.7398 10.9667C19.6727 11.3625 20.4648 12.0055 21.0205 12.8182C21.5762 13.6309 21.8718 14.5786 21.8716 15.547C21.8716 15.6962 21.8091 15.8393 21.6977 15.9447C21.5864 16.0502 21.4354 16.1095 21.2779 16.1095C21.1204 16.1095 20.9694 16.0502 20.858 15.9447C20.7467 15.8393 20.6841 15.6962 20.6841 15.547C20.684 14.7101 20.3994 13.8955 19.8724 13.2239C19.3454 12.5522 18.604 12.0592 17.7581 11.818L17.3354 11.698V10.441L17.66 10.2842C18.1411 10.0533 18.5261 9.67558 18.7527 9.21192C18.9794 8.74827 19.0344 8.22578 18.9091 7.72881C18.7837 7.23184 18.4852 6.7894 18.0618 6.47291C17.6384 6.15642 17.1147 5.98436 16.5754 5.98449Z"
                                                fill="#CCCCCC"
                                            />
                                        </svg>
                                        72
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-center">
                                    <div className="bot-marketplace__card-profit">
                                        <div className="bot-marketplace__card-percentage">
                                            +305.79 %
                                        </div>
                                        <div className="bot-marketplace__card-pnl">
                                            PnL%
                                        </div>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-info">
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            11 days 1 hrs
                                        </div>
                                        <div className="bot-marketplace__card-subtitle">
                                            Run time
                                        </div>
                                    </div>
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            14.40%
                                        </div>
                                        <span className="bot-marketplace__card-subtitle bot-marketplace__card-drawdown">
                                            Max drawdown
                                        </span>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-pair">
                                    <img
                                        src="../assets/img/bot-marketplace/btc.png"
                                        alt=""
                                    />
                                    BTC/USDT
                                </div>
                                <div className="bot-marketplace__card-bottom">
                                    <div className="bot-marketplace__card-user">
                                        <div className="bot-marketplace__card-avatar">
                                            6
                                        </div>
                                        <div className="bot-marketplace__card-name">
                                            ***66
                                        </div>
                                    </div>
                                    <span
                                        className="bot-marketplace__card-copy butafor__btn"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Copy
                                    </span>
                                </div>
                            </div>
                            <div className="bot-marketplace__card">
                                <div className="bot-marketplace__card-title">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 14H14V1H3.5V7.5M3.5 14V7.5M3.5 14C1.5 12.5 1 10.5 1 9.5C1 7.5 2.5 7.5 3.5 7.5M7 7.5H11M5.5 5H11"
                                            stroke="white"
                                        />
                                    </svg>
                                    CFXUSDT Perp
                                </div>
                                <div className="bot-marketplace__card-wrapper">
                                    <div className="bot-marketplace__card-tags">
                                        <span className="bot-marketplace__card-tag">
                                            Futures grid
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            Long
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            20.00x
                                        </span>
                                    </div>
                                    <div className="bot-marketplace__card-used">
                                        <svg
                                            width={23}
                                            height={18}
                                            viewBox="0 0 23 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.65831 5.98449C5.65847 5.27343 5.85264 4.57448 6.22199 3.95546C6.59134 3.33645 7.12332 2.8184 7.76631 2.45159C8.4093 2.08478 9.14146 1.88166 9.89174 1.86194C10.642 1.84222 11.3849 2.00658 12.0484 2.33906C12.7119 2.67154 13.2733 3.16085 13.6783 3.75951C14.0834 4.35817 14.3181 5.04585 14.3599 5.75581C14.4017 6.46577 14.249 7.17391 13.9167 7.8115C13.5844 8.44909 13.0838 8.99448 12.4635 9.39474C13.7994 9.85894 14.9582 10.6913 15.7906 11.7846C16.623 12.878 17.091 14.1823 17.1343 15.5297C17.1325 15.675 17.0714 15.814 16.964 15.9177C16.8565 16.0213 16.7109 16.0816 16.5576 16.086C16.4043 16.0903 16.2552 16.0384 16.1414 15.941C16.0276 15.8437 15.9578 15.7084 15.9468 15.5635C15.8997 14.1021 15.2537 12.7155 14.1459 11.6975C13.0381 10.6796 11.5554 10.1103 10.0121 10.1103C8.46876 10.1103 6.98609 10.6796 5.87826 11.6975C4.77042 12.7155 4.12449 14.1021 4.07735 15.5635C4.06942 15.7104 4.00109 15.8485 3.887 15.9482C3.77291 16.0479 3.62212 16.1013 3.46695 16.097C3.31178 16.0927 3.16457 16.031 3.05685 15.9251C2.94912 15.8192 2.88946 15.6776 2.89064 15.5305C2.93383 14.1829 3.40175 12.8784 4.23417 11.7849C5.06659 10.6914 6.22541 9.85899 7.56148 9.39474C6.97472 9.01647 6.49454 8.50796 6.16282 7.91355C5.83109 7.31913 5.65789 6.65687 5.65831 5.98449ZM10.0125 2.98449C9.17262 2.98449 8.36717 3.30056 7.7733 3.86317C7.17944 4.42578 6.84581 5.18884 6.84581 5.98449C6.84581 6.78014 7.17944 7.5432 7.7733 8.10581C8.36717 8.66842 9.17262 8.98449 10.0125 8.98449C10.8523 8.98449 11.6578 8.66842 12.2516 8.10581C12.8455 7.5432 13.1791 6.78014 13.1791 5.98449C13.1791 5.18884 12.8455 4.42578 12.2516 3.86317C11.6578 3.30056 10.8523 2.98449 10.0125 2.98449ZM16.5754 5.98449C16.4582 5.98449 16.3442 5.99199 16.2318 6.00699C16.1533 6.02031 16.0728 6.01851 15.9951 6.0017C15.9173 5.9849 15.844 5.95343 15.7793 5.90918C15.7147 5.86493 15.6602 5.8088 15.6189 5.74415C15.5777 5.67949 15.5506 5.60763 15.5394 5.53285C15.5281 5.45807 15.5328 5.3819 15.5533 5.3089C15.5738 5.23589 15.6096 5.16753 15.6585 5.10791C15.7075 5.04829 15.7686 4.99862 15.8383 4.96187C15.9079 4.92511 15.9847 4.90203 16.064 4.89399C16.8513 4.78614 17.6542 4.92939 18.3462 5.30118C19.0383 5.67298 19.5802 6.25222 19.8866 6.94774C20.1931 7.64326 20.2467 8.41557 20.0391 9.14315C19.8315 9.87072 19.3744 10.5122 18.7398 10.9667C19.6727 11.3625 20.4648 12.0055 21.0205 12.8182C21.5762 13.6309 21.8718 14.5786 21.8716 15.547C21.8716 15.6962 21.8091 15.8393 21.6977 15.9447C21.5864 16.0502 21.4354 16.1095 21.2779 16.1095C21.1204 16.1095 20.9694 16.0502 20.858 15.9447C20.7467 15.8393 20.6841 15.6962 20.6841 15.547C20.684 14.7101 20.3994 13.8955 19.8724 13.2239C19.3454 12.5522 18.604 12.0592 17.7581 11.818L17.3354 11.698V10.441L17.66 10.2842C18.1411 10.0533 18.5261 9.67558 18.7527 9.21192C18.9794 8.74827 19.0344 8.22578 18.9091 7.72881C18.7837 7.23184 18.4852 6.7894 18.0618 6.47291C17.6384 6.15642 17.1147 5.98436 16.5754 5.98449Z"
                                                fill="#CCCCCC"
                                            />
                                        </svg>
                                        278
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-center">
                                    <div className="bot-marketplace__card-profit">
                                        <div className="bot-marketplace__card-percentage">
                                            +298.85 %
                                        </div>
                                        <div className="bot-marketplace__card-pnl">
                                            PnL%
                                        </div>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-info">
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            9 days 16 hrs
                                        </div>
                                        <div className="bot-marketplace__card-subtitle">
                                            Run time
                                        </div>
                                    </div>
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            37.62%
                                        </div>
                                        <span className="bot-marketplace__card-subtitle bot-marketplace__card-drawdown">
                                            Max drawdown
                                        </span>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-pair">
                                    <img
                                        src="../assets/img/bot-marketplace/cfx.webp"
                                        alt=""
                                    />
                                    CFX/USDT
                                </div>
                                <div className="bot-marketplace__card-bottom">
                                    <div className="bot-marketplace__card-user">
                                        <div className="bot-marketplace__card-avatar">
                                            0
                                        </div>
                                        <div className="bot-marketplace__card-name">
                                            ***09
                                        </div>
                                    </div>
                                    <span
                                        className="bot-marketplace__card-copy butafor__btn"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Copy
                                    </span>
                                </div>
                            </div>
                            <div className="bot-marketplace__card">
                                <div className="bot-marketplace__card-title">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 14H14V1H3.5V7.5M3.5 14V7.5M3.5 14C1.5 12.5 1 10.5 1 9.5C1 7.5 2.5 7.5 3.5 7.5M7 7.5H11M5.5 5H11"
                                            stroke="white"
                                        />
                                    </svg>
                                    ETHWUSDT Perp
                                </div>
                                <div className="bot-marketplace__card-wrapper">
                                    <div className="bot-marketplace__card-tags">
                                        <span className="bot-marketplace__card-tag">
                                            Futures grid
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            Long
                                        </span>
                                        <span className="bot-marketplace__card-tag bot-marketplace__card-tag_green">
                                            10.00x
                                        </span>
                                    </div>
                                    <div className="bot-marketplace__card-used">
                                        <svg
                                            width={23}
                                            height={18}
                                            viewBox="0 0 23 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.65831 5.98449C5.65847 5.27343 5.85264 4.57448 6.22199 3.95546C6.59134 3.33645 7.12332 2.8184 7.76631 2.45159C8.4093 2.08478 9.14146 1.88166 9.89174 1.86194C10.642 1.84222 11.3849 2.00658 12.0484 2.33906C12.7119 2.67154 13.2733 3.16085 13.6783 3.75951C14.0834 4.35817 14.3181 5.04585 14.3599 5.75581C14.4017 6.46577 14.249 7.17391 13.9167 7.8115C13.5844 8.44909 13.0838 8.99448 12.4635 9.39474C13.7994 9.85894 14.9582 10.6913 15.7906 11.7846C16.623 12.878 17.091 14.1823 17.1343 15.5297C17.1325 15.675 17.0714 15.814 16.964 15.9177C16.8565 16.0213 16.7109 16.0816 16.5576 16.086C16.4043 16.0903 16.2552 16.0384 16.1414 15.941C16.0276 15.8437 15.9578 15.7084 15.9468 15.5635C15.8997 14.1021 15.2537 12.7155 14.1459 11.6975C13.0381 10.6796 11.5554 10.1103 10.0121 10.1103C8.46876 10.1103 6.98609 10.6796 5.87826 11.6975C4.77042 12.7155 4.12449 14.1021 4.07735 15.5635C4.06942 15.7104 4.00109 15.8485 3.887 15.9482C3.77291 16.0479 3.62212 16.1013 3.46695 16.097C3.31178 16.0927 3.16457 16.031 3.05685 15.9251C2.94912 15.8192 2.88946 15.6776 2.89064 15.5305C2.93383 14.1829 3.40175 12.8784 4.23417 11.7849C5.06659 10.6914 6.22541 9.85899 7.56148 9.39474C6.97472 9.01647 6.49454 8.50796 6.16282 7.91355C5.83109 7.31913 5.65789 6.65687 5.65831 5.98449ZM10.0125 2.98449C9.17262 2.98449 8.36717 3.30056 7.7733 3.86317C7.17944 4.42578 6.84581 5.18884 6.84581 5.98449C6.84581 6.78014 7.17944 7.5432 7.7733 8.10581C8.36717 8.66842 9.17262 8.98449 10.0125 8.98449C10.8523 8.98449 11.6578 8.66842 12.2516 8.10581C12.8455 7.5432 13.1791 6.78014 13.1791 5.98449C13.1791 5.18884 12.8455 4.42578 12.2516 3.86317C11.6578 3.30056 10.8523 2.98449 10.0125 2.98449ZM16.5754 5.98449C16.4582 5.98449 16.3442 5.99199 16.2318 6.00699C16.1533 6.02031 16.0728 6.01851 15.9951 6.0017C15.9173 5.9849 15.844 5.95343 15.7793 5.90918C15.7147 5.86493 15.6602 5.8088 15.6189 5.74415C15.5777 5.67949 15.5506 5.60763 15.5394 5.53285C15.5281 5.45807 15.5328 5.3819 15.5533 5.3089C15.5738 5.23589 15.6096 5.16753 15.6585 5.10791C15.7075 5.04829 15.7686 4.99862 15.8383 4.96187C15.9079 4.92511 15.9847 4.90203 16.064 4.89399C16.8513 4.78614 17.6542 4.92939 18.3462 5.30118C19.0383 5.67298 19.5802 6.25222 19.8866 6.94774C20.1931 7.64326 20.2467 8.41557 20.0391 9.14315C19.8315 9.87072 19.3744 10.5122 18.7398 10.9667C19.6727 11.3625 20.4648 12.0055 21.0205 12.8182C21.5762 13.6309 21.8718 14.5786 21.8716 15.547C21.8716 15.6962 21.8091 15.8393 21.6977 15.9447C21.5864 16.0502 21.4354 16.1095 21.2779 16.1095C21.1204 16.1095 20.9694 16.0502 20.858 15.9447C20.7467 15.8393 20.6841 15.6962 20.6841 15.547C20.684 14.7101 20.3994 13.8955 19.8724 13.2239C19.3454 12.5522 18.604 12.0592 17.7581 11.818L17.3354 11.698V10.441L17.66 10.2842C18.1411 10.0533 18.5261 9.67558 18.7527 9.21192C18.9794 8.74827 19.0344 8.22578 18.9091 7.72881C18.7837 7.23184 18.4852 6.7894 18.0618 6.47291C17.6384 6.15642 17.1147 5.98436 16.5754 5.98449Z"
                                                fill="#CCCCCC"
                                            />
                                        </svg>
                                        138
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-center">
                                    <div className="bot-marketplace__card-profit">
                                        <div className="bot-marketplace__card-percentage">
                                            +293.93 %
                                        </div>
                                        <div className="bot-marketplace__card-pnl">
                                            PnL%
                                        </div>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-info">
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            123 days 9 hrs
                                        </div>
                                        <div className="bot-marketplace__card-subtitle">
                                            Run time
                                        </div>
                                    </div>
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            44.23%
                                        </div>
                                        <span className="bot-marketplace__card-subtitle bot-marketplace__card-drawdown">
                                            Max drawdown
                                        </span>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-pair">
                                    <img
                                        src="../assets/img/bot-marketplace/ethw.webp"
                                        alt=""
                                    />
                                    ETHW/USDT
                                </div>
                                <div className="bot-marketplace__card-bottom">
                                    <div className="bot-marketplace__card-user">
                                        <div className="bot-marketplace__card-avatar">
                                            o
                                        </div>
                                        <div className="bot-marketplace__card-name">
                                            ***om
                                        </div>
                                    </div>
                                    <span
                                        className="bot-marketplace__card-copy butafor__btn"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Copy
                                    </span>
                                </div>
                            </div>
                            <div className="bot-marketplace__card">
                                <div className="bot-marketplace__card-title">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 14H14V1H3.5V7.5M3.5 14V7.5M3.5 14C1.5 12.5 1 10.5 1 9.5C1 7.5 2.5 7.5 3.5 7.5M7 7.5H11M5.5 5H11"
                                            stroke="white"
                                        />
                                    </svg>
                                    SUSHIUSDT Perp
                                </div>
                                <div className="bot-marketplace__card-wrapper">
                                    <div className="bot-marketplace__card-tags">
                                        <span
                                            className="bot-marketplace__card-tag"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Futures grid
                                        </span>
                                        <span
                                            className="bot-marketplace__card-tag"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Short
                                        </span>
                                        <span
                                            className="bot-marketplace__card-tag bot-marketplace__card-tag_green"
                                            style={{ cursor: "pointer" }}
                                        >
                                            50.00x
                                        </span>
                                    </div>
                                    <div className="bot-marketplace__card-used">
                                        <svg
                                            width={23}
                                            height={18}
                                            viewBox="0 0 23 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.65831 5.98449C5.65847 5.27343 5.85264 4.57448 6.22199 3.95546C6.59134 3.33645 7.12332 2.8184 7.76631 2.45159C8.4093 2.08478 9.14146 1.88166 9.89174 1.86194C10.642 1.84222 11.3849 2.00658 12.0484 2.33906C12.7119 2.67154 13.2733 3.16085 13.6783 3.75951C14.0834 4.35817 14.3181 5.04585 14.3599 5.75581C14.4017 6.46577 14.249 7.17391 13.9167 7.8115C13.5844 8.44909 13.0838 8.99448 12.4635 9.39474C13.7994 9.85894 14.9582 10.6913 15.7906 11.7846C16.623 12.878 17.091 14.1823 17.1343 15.5297C17.1325 15.675 17.0714 15.814 16.964 15.9177C16.8565 16.0213 16.7109 16.0816 16.5576 16.086C16.4043 16.0903 16.2552 16.0384 16.1414 15.941C16.0276 15.8437 15.9578 15.7084 15.9468 15.5635C15.8997 14.1021 15.2537 12.7155 14.1459 11.6975C13.0381 10.6796 11.5554 10.1103 10.0121 10.1103C8.46876 10.1103 6.98609 10.6796 5.87826 11.6975C4.77042 12.7155 4.12449 14.1021 4.07735 15.5635C4.06942 15.7104 4.00109 15.8485 3.887 15.9482C3.77291 16.0479 3.62212 16.1013 3.46695 16.097C3.31178 16.0927 3.16457 16.031 3.05685 15.9251C2.94912 15.8192 2.88946 15.6776 2.89064 15.5305C2.93383 14.1829 3.40175 12.8784 4.23417 11.7849C5.06659 10.6914 6.22541 9.85899 7.56148 9.39474C6.97472 9.01647 6.49454 8.50796 6.16282 7.91355C5.83109 7.31913 5.65789 6.65687 5.65831 5.98449ZM10.0125 2.98449C9.17262 2.98449 8.36717 3.30056 7.7733 3.86317C7.17944 4.42578 6.84581 5.18884 6.84581 5.98449C6.84581 6.78014 7.17944 7.5432 7.7733 8.10581C8.36717 8.66842 9.17262 8.98449 10.0125 8.98449C10.8523 8.98449 11.6578 8.66842 12.2516 8.10581C12.8455 7.5432 13.1791 6.78014 13.1791 5.98449C13.1791 5.18884 12.8455 4.42578 12.2516 3.86317C11.6578 3.30056 10.8523 2.98449 10.0125 2.98449ZM16.5754 5.98449C16.4582 5.98449 16.3442 5.99199 16.2318 6.00699C16.1533 6.02031 16.0728 6.01851 15.9951 6.0017C15.9173 5.9849 15.844 5.95343 15.7793 5.90918C15.7147 5.86493 15.6602 5.8088 15.6189 5.74415C15.5777 5.67949 15.5506 5.60763 15.5394 5.53285C15.5281 5.45807 15.5328 5.3819 15.5533 5.3089C15.5738 5.23589 15.6096 5.16753 15.6585 5.10791C15.7075 5.04829 15.7686 4.99862 15.8383 4.96187C15.9079 4.92511 15.9847 4.90203 16.064 4.89399C16.8513 4.78614 17.6542 4.92939 18.3462 5.30118C19.0383 5.67298 19.5802 6.25222 19.8866 6.94774C20.1931 7.64326 20.2467 8.41557 20.0391 9.14315C19.8315 9.87072 19.3744 10.5122 18.7398 10.9667C19.6727 11.3625 20.4648 12.0055 21.0205 12.8182C21.5762 13.6309 21.8718 14.5786 21.8716 15.547C21.8716 15.6962 21.8091 15.8393 21.6977 15.9447C21.5864 16.0502 21.4354 16.1095 21.2779 16.1095C21.1204 16.1095 20.9694 16.0502 20.858 15.9447C20.7467 15.8393 20.6841 15.6962 20.6841 15.547C20.684 14.7101 20.3994 13.8955 19.8724 13.2239C19.3454 12.5522 18.604 12.0592 17.7581 11.818L17.3354 11.698V10.441L17.66 10.2842C18.1411 10.0533 18.5261 9.67558 18.7527 9.21192C18.9794 8.74827 19.0344 8.22578 18.9091 7.72881C18.7837 7.23184 18.4852 6.7894 18.0618 6.47291C17.6384 6.15642 17.1147 5.98436 16.5754 5.98449Z"
                                                fill="#CCCCCC"
                                            />
                                        </svg>
                                        106
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-center">
                                    <div className="bot-marketplace__card-profit">
                                        <div className="bot-marketplace__card-percentage">
                                            +288.55 %
                                        </div>
                                        <div className="bot-marketplace__card-pnl">
                                            PnL%
                                        </div>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-info">
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            6 days 20 hrs
                                        </div>
                                        <div className="bot-marketplace__card-subtitle">
                                            Run time
                                        </div>
                                    </div>
                                    <div className="bot-marketplace__card-box">
                                        <div className="bot-marketplace__card-time">
                                            39.32%
                                        </div>
                                        <span
                                            style={{ cursor: "pointer" }}
                                            className="bot-marketplace__card-subtitle bot-marketplace__card-drawdown"
                                        >
                                            Max drawdown
                                        </span>
                                    </div>
                                </div>
                                <div className="bot-marketplace__card-pair">
                                    <img
                                        src="../assets/img/bot-marketplace/sushi.png"
                                        alt=""
                                    />
                                    SUSHI/USDT
                                </div>
                                <div className="bot-marketplace__card-bottom">
                                    <div className="bot-marketplace__card-user">
                                        <div className="bot-marketplace__card-avatar">
                                            o
                                        </div>
                                        <div className="bot-marketplace__card-name">
                                            ***om
                                        </div>
                                    </div>
                                    <span
                                        className="bot-marketplace__card-copy butafor__btn"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Copy
                                    </span>
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
                            <span className="bot-marketplace__pagination-item bot-marketplace__pagination-active" onClick={()=>setError3LVLOpened(true)}>
                                1
                            </span>
                            <span className="bot-marketplace__pagination-item"onClick={()=>setError3LVLOpened(true)}>
                                2
                            </span>
                            <span className="bot-marketplace__pagination-item"onClick={()=>setError3LVLOpened(true)}>
                                3
                            </span>
                            <span className="bot-marketplace__pagination-item"onClick={()=>setError3LVLOpened(true)}>
                                4
                            </span>
                            <span className="bot-marketplace__pagination-item"onClick={()=>setError3LVLOpened(true)}>
                                5
                            </span>
                            <span className="bot-marketplace__pagination-item"onClick={()=>setError3LVLOpened(true)}>
                                ...
                            </span>
                            <span className="bot-marketplace__pagination-item"onClick={()=>setError3LVLOpened(true)}>
                                242
                            </span>
                            <span className="bot-marketplace__pagination-arrow" onClick={()=>setError3LVLOpened(true)}>
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
                <section className="your-trading">
                    <div className="your-trading__box">
                        <div className="your-trading__title">
                            Supercharge your trading with trading bots
                        </div>
                        <div className="your-trading__items">
                            <div className="your-trading__item">
                                <div className="your-trading__item-title">
                                    Safe &amp; Secure
                                </div>
                                <div className="your-trading__item-des">
                                    Protect and secure your assets anytime,
                                    anywhere
                                </div>
                            </div>
                            <div className="your-trading__item">
                                <div className="your-trading__item-title">
                                    Exact arbitrage
                                </div>
                                <div className="your-trading__item-des">
                                    24/7 automate your trading strategies and
                                    auto-arbitrage
                                </div>
                            </div>
                            <div className="your-trading__item">
                                <div className="your-trading__item-title">
                                    Easy profit
                                </div>
                                <div className="your-trading__item-des">
                                    Make profitable investments with powerful
                                    algorithmic trading bots
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="faqs  faq-api">
                    <div className="faqs__container">
                        <div className="faqs__title">FAQ</div>
                        <div className="faqs__questions">
                            <div className="accordion__container accordion__container-faq-api">
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
                                        What’s Shiftlix trading bot?
                                        <div className="accordion__item-arrow">
                                            <svg
                                                width={15}
                                                height={7}
                                                viewBox="0 0 15 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1L7.5 6L14 1"
                                                    stroke="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className={`accordion__item-body accordion__item-faq-api ${
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
                                            A customizable crypto bot that helps
                                            traders to create various automated
                                            trading strategies. Compared with
                                            traditional manual trading, trading
                                            bot can execute orders with lower
                                            risks and costs, while grasping the
                                            best trading timings.
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
                                        What’s Bot Marketplace?
                                        <div className="accordion__item-arrow">
                                            <svg
                                                width={15}
                                                height={7}
                                                viewBox="0 0 15 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1L7.5 6L14 1"
                                                    stroke="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className={`accordion__item-body accordion__item-faq-api ${
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
                                            A collective place for SHIFTLIX
                                            traders to share their spot grid,
                                            futures grid, DCA, smart portfolio,
                                            and recurring buy bots. Regular
                                            users can easily copy the parameters
                                            of excellent strategies.
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
                                        What’s spot grid bot?
                                        <div className="accordion__item-arrow">
                                            <svg
                                                width={15}
                                                height={7}
                                                viewBox="0 0 15 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1L7.5 6L14 1"
                                                    stroke="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className={`accordion__item-body accordion__item-faq-api ${
                                            accordionThirdOpened
                                                ? "accordion__item-active"
                                                : ""
                                        }`}
                                        style={
                                            accordionThirdOpened
                                                ? {
                                                      transition:
                                                          "height 500ms ease 0s",
                                                      height: "40px",
                                                  }
                                                : {}
                                        }
                                    >
                                        <div className="content">
                                            Spot grid trading works by the
                                            simple strategy of buy low and sell
                                            high. After you set the parameters,
                                            the system automatically places
                                            orders at incrementally increasing
                                            or decreasing prices. Overall, the
                                            grid bot seeks to capitalize on
                                            normal price volatility by placing
                                            buy and sell orders at certain
                                            regular intervals above and below a
                                            predefined base price.
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
                                        What’s futures grid bot?
                                        <div className="accordion__item-arrow">
                                            <svg
                                                width={15}
                                                height={7}
                                                viewBox="0 0 15 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1L7.5 6L14 1"
                                                    stroke="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className={`accordion__item-body accordion__item-faq-api ${
                                            accordionFourOpened
                                                ? "accordion__item-active"
                                                : ""
                                        }`}
                                        style={
                                            accordionFourOpened
                                                ? {
                                                      transition:
                                                          "height 500ms ease 0s",
                                                      height: " 62px",
                                                  }
                                                : {}
                                        }
                                    >
                                        <div className="content">
                                        Futures grid bot works by the simple strategy of buying low and selling high. After the user sets the parameters, the system divides the small grid to automatically place the order. As the market fluctuates, the bot buys low and sells high to earn fluctuating returns.
                                        </div>
                                    </div>
                                </div>
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
                                        What’s spot DCA bot?
                                        <div className="accordion__item-arrow">
                                            <svg
                                                width={15}
                                                height={7}
                                                viewBox="0 0 15 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1L7.5 6L14 1"
                                                    stroke="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className={`accordion__item-body accordion__item-faq-api ${
                                            accordionFiveOpened
                                                ? "accordion__item-active"
                                                : ""
                                        }`}
                                        style={
                                            accordionFiveOpened
                                                ? {
                                                      transition:
                                                          "height 500ms ease 0s",
                                                      height: " 62px",
                                                  }
                                                : {}
                                        }
                                    >
                                        <div className="content">
                                        A spot DCA (Martingale) bot opens trades based on signals, lowering average cost by placing incremental orders when the price is dropping and closing positions when the take profit goal is reached.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion__item">
                                    <div
                                        className={`accordion__item-title ${
                                            accordionSixOpened
                                                ? " accordion__item-title-active"
                                                : ""
                                        }`}
                                        onMouseUp={() =>
                                            setAccordionSixOpened(
                                                !accordionSixOpened
                                            )
                                        }
                                    >
                                        Is Shiftlix Trading Bot free?
                                        <div className="accordion__item-arrow">
                                            <svg
                                                width={15}
                                                height={7}
                                                viewBox="0 0 15 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1L7.5 6L14 1"
                                                    stroke="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className={`accordion__item-body accordion__item-faq-api ${
                                            accordionSixOpened
                                                ? "accordion__item-active"
                                                : ""
                                        }`}
                                        style={
                                            accordionSixOpened
                                                ? {
                                                      transition:
                                                          "height 500ms ease 0s",
                                                      height: " 62px",
                                                  }
                                                : {}
                                        }
                                    >
                                        <div className="content">
                                        Yes, the SHIFTLIX Trading Bots product is completely free for all SHIFTLIX users to use.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="users-saying">
                    <div className="users-saying__container">
                        <div className="users-saying__title">
                            What {projectName} users are saying
                        </div>
                        <div className="users-saying__slider">
                            <div
                                className="users-saying__slider-track"
                                id="users-saying-track-one"
                                style={{ columnGap: "40px", "-x": "-1788px" }}
                            >
                                <div className="users-saying__slide">
                                    <div className="users-saying__slide-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/users-saying/user-one.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/users-saying/user-one.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/users-saying/user-one.jpg"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="users-saying__slide-wrapper">
                                        <div className="users-saying__slide-box">
                                            <div className="users-saying__slide-name">
                                                Adria
                                            </div>
                                            <div className="users-saying__slide-location">
                                                <div className="users-saying__slide-icon">
                                                    <svg
                                                        width={14}
                                                        height={12}
                                                        viewBox="0 0 14 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12.2896 3.95L12.306 4.00469C12.729 5.21568 12.729 6.53432 12.306 7.74531L12.2896 7.8C11.8904 8.90032 11.1628 9.85139 10.2051 10.5244C9.24747 11.1974 8.10612 11.5598 6.93565 11.5625C5.76481 11.5613 4.62274 11.1996 3.66479 10.5264C2.70684 9.85315 1.97951 8.9012 1.58174 7.8L1.56533 7.74531C1.14228 6.53432 1.14228 5.21568 1.56533 4.00469L1.58174 3.95C1.97951 2.8488 2.70684 1.89685 3.66479 1.22364C4.62274 0.550436 5.76481 0.188651 6.93565 0.1875C8.10649 0.188651 9.24856 0.550436 10.2065 1.22364C11.1645 1.89685 11.8918 2.8488 12.2896 3.95ZM5.54112 3.6875H8.33018C8.04994 2.81758 7.57271 2.02407 6.93565 1.36875C6.29858 2.02407 5.82135 2.81758 5.54112 3.6875ZM5.31143 4.5625C5.14376 5.42947 5.14376 6.32053 5.31143 7.1875H8.55987C8.64313 6.75495 8.68524 6.31549 8.68565 5.875C8.6855 5.4345 8.64339 4.99501 8.55987 4.5625H5.31143ZM2.12315 5.875C2.12408 6.31862 2.18478 6.76009 2.30362 7.1875H4.42002C4.27419 6.31858 4.27419 5.43142 4.42002 4.5625H2.30362C2.18478 4.98991 2.12408 5.43138 2.12315 5.875ZM8.33018 8.0625H5.54112C5.82135 8.93242 6.29858 9.72593 6.93565 10.3813C7.57271 9.72593 8.04994 8.93242 8.33018 8.0625ZM9.45127 7.1875H11.5677C11.8084 6.32905 11.8084 5.42095 11.5677 4.5625H9.45127C9.59711 5.43142 9.59711 6.31858 9.45127 7.1875ZM11.2231 8.0625H9.2544C8.99126 8.98381 8.54278 9.8417 7.93643 10.5836C8.63655 10.4324 9.29446 10.1279 9.86278 9.69198C10.4311 9.25604 10.8957 8.69953 11.2231 8.0625ZM5.93487 10.5836C5.32852 9.8417 4.88004 8.98381 4.6169 8.0625H2.64815C2.97559 8.69953 3.4402 9.25604 4.00852 9.69198C4.57684 10.1279 5.23474 10.4324 5.93487 10.5836ZM2.64815 3.6875H4.6169C4.88004 2.76618 5.32852 1.9083 5.93487 1.16641C5.23431 1.31649 4.57593 1.62058 4.00745 2.05664C3.43898 2.49269 2.97466 3.04977 2.64815 3.6875ZM7.93643 1.16641C8.54278 1.9083 8.99126 2.76618 9.2544 3.6875H11.2231C10.8966 3.04977 10.4323 2.49269 9.86384 2.05664C9.29537 1.62058 8.63699 1.31649 7.93643 1.16641Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                Singapore
                                            </div>
                                        </div>
                                        <div className="users-saying__slide-text">
                                        {projectName} trading bot is easy to set
                                            up and it automatically places the
                                            orders for me to buy low and sell
                                            high so that I don't need to watch
                                            the market all the time. The grid
                                            bot is the best tool for volatile
                                            markets!
                                        </div>
                                    </div>
                                </div>
                                <div className="users-saying__slide">
                                    <div className="users-saying__slide-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/users-saying/user-two.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/users-saying/user-two.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/users-saying/user-two.jpg"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="users-saying__slide-wrapper">
                                        <div className="users-saying__slide-box">
                                            <div className="users-saying__slide-name">
                                                Brad Mustorf
                                            </div>
                                            <div className="users-saying__slide-location">
                                                <div className="users-saying__slide-icon">
                                                    <svg
                                                        width={14}
                                                        height={12}
                                                        viewBox="0 0 14 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12.2896 3.95L12.306 4.00469C12.729 5.21568 12.729 6.53432 12.306 7.74531L12.2896 7.8C11.8904 8.90032 11.1628 9.85139 10.2051 10.5244C9.24747 11.1974 8.10612 11.5598 6.93565 11.5625C5.76481 11.5613 4.62274 11.1996 3.66479 10.5264C2.70684 9.85315 1.97951 8.9012 1.58174 7.8L1.56533 7.74531C1.14228 6.53432 1.14228 5.21568 1.56533 4.00469L1.58174 3.95C1.97951 2.8488 2.70684 1.89685 3.66479 1.22364C4.62274 0.550436 5.76481 0.188651 6.93565 0.1875C8.10649 0.188651 9.24856 0.550436 10.2065 1.22364C11.1645 1.89685 11.8918 2.8488 12.2896 3.95ZM5.54112 3.6875H8.33018C8.04994 2.81758 7.57271 2.02407 6.93565 1.36875C6.29858 2.02407 5.82135 2.81758 5.54112 3.6875ZM5.31143 4.5625C5.14376 5.42947 5.14376 6.32053 5.31143 7.1875H8.55987C8.64313 6.75495 8.68524 6.31549 8.68565 5.875C8.6855 5.4345 8.64339 4.99501 8.55987 4.5625H5.31143ZM2.12315 5.875C2.12408 6.31862 2.18478 6.76009 2.30362 7.1875H4.42002C4.27419 6.31858 4.27419 5.43142 4.42002 4.5625H2.30362C2.18478 4.98991 2.12408 5.43138 2.12315 5.875ZM8.33018 8.0625H5.54112C5.82135 8.93242 6.29858 9.72593 6.93565 10.3813C7.57271 9.72593 8.04994 8.93242 8.33018 8.0625ZM9.45127 7.1875H11.5677C11.8084 6.32905 11.8084 5.42095 11.5677 4.5625H9.45127C9.59711 5.43142 9.59711 6.31858 9.45127 7.1875ZM11.2231 8.0625H9.2544C8.99126 8.98381 8.54278 9.8417 7.93643 10.5836C8.63655 10.4324 9.29446 10.1279 9.86278 9.69198C10.4311 9.25604 10.8957 8.69953 11.2231 8.0625ZM5.93487 10.5836C5.32852 9.8417 4.88004 8.98381 4.6169 8.0625H2.64815C2.97559 8.69953 3.4402 9.25604 4.00852 9.69198C4.57684 10.1279 5.23474 10.4324 5.93487 10.5836ZM2.64815 3.6875H4.6169C4.88004 2.76618 5.32852 1.9083 5.93487 1.16641C5.23431 1.31649 4.57593 1.62058 4.00745 2.05664C3.43898 2.49269 2.97466 3.04977 2.64815 3.6875ZM7.93643 1.16641C8.54278 1.9083 8.99126 2.76618 9.2544 3.6875H11.2231C10.8966 3.04977 10.4323 2.49269 9.86384 2.05664C9.29537 1.62058 8.63699 1.31649 7.93643 1.16641Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                United States
                                            </div>
                                        </div>
                                        <div className="users-saying__slide-text">
                                            A really helpful tool for people who
                                            don't have time to monitor the
                                            market in real time and it automates
                                            the "buy low sell high" action
                                            perfectly.
                                        </div>
                                    </div>
                                </div>
                                <div className="users-saying__slide">
                                    <div className="users-saying__slide-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/users-saying/user-three.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/users-saying/user-three.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/users-saying/user-three.jpg"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="users-saying__slide-wrapper">
                                        <div className="users-saying__slide-box">
                                            <div className="users-saying__slide-name">
                                                Matthew
                                            </div>
                                            <div className="users-saying__slide-location">
                                                <div className="users-saying__slide-icon">
                                                    <svg
                                                        width={14}
                                                        height={12}
                                                        viewBox="0 0 14 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12.2896 3.95L12.306 4.00469C12.729 5.21568 12.729 6.53432 12.306 7.74531L12.2896 7.8C11.8904 8.90032 11.1628 9.85139 10.2051 10.5244C9.24747 11.1974 8.10612 11.5598 6.93565 11.5625C5.76481 11.5613 4.62274 11.1996 3.66479 10.5264C2.70684 9.85315 1.97951 8.9012 1.58174 7.8L1.56533 7.74531C1.14228 6.53432 1.14228 5.21568 1.56533 4.00469L1.58174 3.95C1.97951 2.8488 2.70684 1.89685 3.66479 1.22364C4.62274 0.550436 5.76481 0.188651 6.93565 0.1875C8.10649 0.188651 9.24856 0.550436 10.2065 1.22364C11.1645 1.89685 11.8918 2.8488 12.2896 3.95ZM5.54112 3.6875H8.33018C8.04994 2.81758 7.57271 2.02407 6.93565 1.36875C6.29858 2.02407 5.82135 2.81758 5.54112 3.6875ZM5.31143 4.5625C5.14376 5.42947 5.14376 6.32053 5.31143 7.1875H8.55987C8.64313 6.75495 8.68524 6.31549 8.68565 5.875C8.6855 5.4345 8.64339 4.99501 8.55987 4.5625H5.31143ZM2.12315 5.875C2.12408 6.31862 2.18478 6.76009 2.30362 7.1875H4.42002C4.27419 6.31858 4.27419 5.43142 4.42002 4.5625H2.30362C2.18478 4.98991 2.12408 5.43138 2.12315 5.875ZM8.33018 8.0625H5.54112C5.82135 8.93242 6.29858 9.72593 6.93565 10.3813C7.57271 9.72593 8.04994 8.93242 8.33018 8.0625ZM9.45127 7.1875H11.5677C11.8084 6.32905 11.8084 5.42095 11.5677 4.5625H9.45127C9.59711 5.43142 9.59711 6.31858 9.45127 7.1875ZM11.2231 8.0625H9.2544C8.99126 8.98381 8.54278 9.8417 7.93643 10.5836C8.63655 10.4324 9.29446 10.1279 9.86278 9.69198C10.4311 9.25604 10.8957 8.69953 11.2231 8.0625ZM5.93487 10.5836C5.32852 9.8417 4.88004 8.98381 4.6169 8.0625H2.64815C2.97559 8.69953 3.4402 9.25604 4.00852 9.69198C4.57684 10.1279 5.23474 10.4324 5.93487 10.5836ZM2.64815 3.6875H4.6169C4.88004 2.76618 5.32852 1.9083 5.93487 1.16641C5.23431 1.31649 4.57593 1.62058 4.00745 2.05664C3.43898 2.49269 2.97466 3.04977 2.64815 3.6875ZM7.93643 1.16641C8.54278 1.9083 8.99126 2.76618 9.2544 3.6875H11.2231C10.8966 3.04977 10.4323 2.49269 9.86384 2.05664C9.29537 1.62058 8.63699 1.31649 7.93643 1.16641Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                United States
                                            </div>
                                        </div>
                                        <div className="users-saying__slide-text">
                                            I’ve seen a very nice part of
                                            {projectName} bot, the trading bot drives
                                            the level improvement of regular
                                            users. With using martingale bot,
                                            and quite plain formulas, I could
                                            automatically decrease my average
                                            costs, and get inspirations from
                                            other enthusiasts.
                                        </div>
                                    </div>
                                </div>
                                {/*duplicated elements for loop animation (not delete)*/}
                                <div className="users-saying__slide">
                                    <div className="users-saying__slide-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/users-saying/user-one.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/users-saying/user-one.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/users-saying/user-one.jpg"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="users-saying__slide-wrapper">
                                        <div className="users-saying__slide-box">
                                            <div className="users-saying__slide-name">
                                                Adria
                                            </div>
                                            <div className="users-saying__slide-location">
                                                <div className="users-saying__slide-icon">
                                                    <svg
                                                        width={14}
                                                        height={12}
                                                        viewBox="0 0 14 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12.2896 3.95L12.306 4.00469C12.729 5.21568 12.729 6.53432 12.306 7.74531L12.2896 7.8C11.8904 8.90032 11.1628 9.85139 10.2051 10.5244C9.24747 11.1974 8.10612 11.5598 6.93565 11.5625C5.76481 11.5613 4.62274 11.1996 3.66479 10.5264C2.70684 9.85315 1.97951 8.9012 1.58174 7.8L1.56533 7.74531C1.14228 6.53432 1.14228 5.21568 1.56533 4.00469L1.58174 3.95C1.97951 2.8488 2.70684 1.89685 3.66479 1.22364C4.62274 0.550436 5.76481 0.188651 6.93565 0.1875C8.10649 0.188651 9.24856 0.550436 10.2065 1.22364C11.1645 1.89685 11.8918 2.8488 12.2896 3.95ZM5.54112 3.6875H8.33018C8.04994 2.81758 7.57271 2.02407 6.93565 1.36875C6.29858 2.02407 5.82135 2.81758 5.54112 3.6875ZM5.31143 4.5625C5.14376 5.42947 5.14376 6.32053 5.31143 7.1875H8.55987C8.64313 6.75495 8.68524 6.31549 8.68565 5.875C8.6855 5.4345 8.64339 4.99501 8.55987 4.5625H5.31143ZM2.12315 5.875C2.12408 6.31862 2.18478 6.76009 2.30362 7.1875H4.42002C4.27419 6.31858 4.27419 5.43142 4.42002 4.5625H2.30362C2.18478 4.98991 2.12408 5.43138 2.12315 5.875ZM8.33018 8.0625H5.54112C5.82135 8.93242 6.29858 9.72593 6.93565 10.3813C7.57271 9.72593 8.04994 8.93242 8.33018 8.0625ZM9.45127 7.1875H11.5677C11.8084 6.32905 11.8084 5.42095 11.5677 4.5625H9.45127C9.59711 5.43142 9.59711 6.31858 9.45127 7.1875ZM11.2231 8.0625H9.2544C8.99126 8.98381 8.54278 9.8417 7.93643 10.5836C8.63655 10.4324 9.29446 10.1279 9.86278 9.69198C10.4311 9.25604 10.8957 8.69953 11.2231 8.0625ZM5.93487 10.5836C5.32852 9.8417 4.88004 8.98381 4.6169 8.0625H2.64815C2.97559 8.69953 3.4402 9.25604 4.00852 9.69198C4.57684 10.1279 5.23474 10.4324 5.93487 10.5836ZM2.64815 3.6875H4.6169C4.88004 2.76618 5.32852 1.9083 5.93487 1.16641C5.23431 1.31649 4.57593 1.62058 4.00745 2.05664C3.43898 2.49269 2.97466 3.04977 2.64815 3.6875ZM7.93643 1.16641C8.54278 1.9083 8.99126 2.76618 9.2544 3.6875H11.2231C10.8966 3.04977 10.4323 2.49269 9.86384 2.05664C9.29537 1.62058 8.63699 1.31649 7.93643 1.16641Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                Singapore
                                            </div>
                                        </div>
                                        <div className="users-saying__slide-text">
                                        {projectName} trading bot is easy to set
                                            up and it automatically places the
                                            orders for me to buy low and sell
                                            high so that I don't need to watch
                                            the market all the time. The grid
                                            bot is the best tool for volatile
                                            markets!
                                        </div>
                                    </div>
                                </div>
                                <div className="users-saying__slide">
                                    <div className="users-saying__slide-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/users-saying/user-two.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/users-saying/user-two.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/users-saying/user-two.jpg"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="users-saying__slide-wrapper">
                                        <div className="users-saying__slide-box">
                                            <div className="users-saying__slide-name">
                                                Brad Mustorf
                                            </div>
                                            <div className="users-saying__slide-location">
                                                <div className="users-saying__slide-icon">
                                                    <svg
                                                        width={14}
                                                        height={12}
                                                        viewBox="0 0 14 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12.2896 3.95L12.306 4.00469C12.729 5.21568 12.729 6.53432 12.306 7.74531L12.2896 7.8C11.8904 8.90032 11.1628 9.85139 10.2051 10.5244C9.24747 11.1974 8.10612 11.5598 6.93565 11.5625C5.76481 11.5613 4.62274 11.1996 3.66479 10.5264C2.70684 9.85315 1.97951 8.9012 1.58174 7.8L1.56533 7.74531C1.14228 6.53432 1.14228 5.21568 1.56533 4.00469L1.58174 3.95C1.97951 2.8488 2.70684 1.89685 3.66479 1.22364C4.62274 0.550436 5.76481 0.188651 6.93565 0.1875C8.10649 0.188651 9.24856 0.550436 10.2065 1.22364C11.1645 1.89685 11.8918 2.8488 12.2896 3.95ZM5.54112 3.6875H8.33018C8.04994 2.81758 7.57271 2.02407 6.93565 1.36875C6.29858 2.02407 5.82135 2.81758 5.54112 3.6875ZM5.31143 4.5625C5.14376 5.42947 5.14376 6.32053 5.31143 7.1875H8.55987C8.64313 6.75495 8.68524 6.31549 8.68565 5.875C8.6855 5.4345 8.64339 4.99501 8.55987 4.5625H5.31143ZM2.12315 5.875C2.12408 6.31862 2.18478 6.76009 2.30362 7.1875H4.42002C4.27419 6.31858 4.27419 5.43142 4.42002 4.5625H2.30362C2.18478 4.98991 2.12408 5.43138 2.12315 5.875ZM8.33018 8.0625H5.54112C5.82135 8.93242 6.29858 9.72593 6.93565 10.3813C7.57271 9.72593 8.04994 8.93242 8.33018 8.0625ZM9.45127 7.1875H11.5677C11.8084 6.32905 11.8084 5.42095 11.5677 4.5625H9.45127C9.59711 5.43142 9.59711 6.31858 9.45127 7.1875ZM11.2231 8.0625H9.2544C8.99126 8.98381 8.54278 9.8417 7.93643 10.5836C8.63655 10.4324 9.29446 10.1279 9.86278 9.69198C10.4311 9.25604 10.8957 8.69953 11.2231 8.0625ZM5.93487 10.5836C5.32852 9.8417 4.88004 8.98381 4.6169 8.0625H2.64815C2.97559 8.69953 3.4402 9.25604 4.00852 9.69198C4.57684 10.1279 5.23474 10.4324 5.93487 10.5836ZM2.64815 3.6875H4.6169C4.88004 2.76618 5.32852 1.9083 5.93487 1.16641C5.23431 1.31649 4.57593 1.62058 4.00745 2.05664C3.43898 2.49269 2.97466 3.04977 2.64815 3.6875ZM7.93643 1.16641C8.54278 1.9083 8.99126 2.76618 9.2544 3.6875H11.2231C10.8966 3.04977 10.4323 2.49269 9.86384 2.05664C9.29537 1.62058 8.63699 1.31649 7.93643 1.16641Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                United States
                                            </div>
                                        </div>
                                        <div className="users-saying__slide-text">
                                            A really helpful tool for people who
                                            don't have time to monitor the
                                            market in real time and it automates
                                            the "buy low sell high" action
                                            perfectly.
                                        </div>
                                    </div>
                                </div>
                                <div className="users-saying__slide">
                                    <div className="users-saying__slide-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/users-saying/user-three.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/users-saying/user-three.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/users-saying/user-three.jpg"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="users-saying__slide-wrapper">
                                        <div className="users-saying__slide-box">
                                            <div className="users-saying__slide-name">
                                                Matthew
                                            </div>
                                            <div className="users-saying__slide-location">
                                                <div className="users-saying__slide-icon">
                                                    <svg
                                                        width={14}
                                                        height={12}
                                                        viewBox="0 0 14 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12.2896 3.95L12.306 4.00469C12.729 5.21568 12.729 6.53432 12.306 7.74531L12.2896 7.8C11.8904 8.90032 11.1628 9.85139 10.2051 10.5244C9.24747 11.1974 8.10612 11.5598 6.93565 11.5625C5.76481 11.5613 4.62274 11.1996 3.66479 10.5264C2.70684 9.85315 1.97951 8.9012 1.58174 7.8L1.56533 7.74531C1.14228 6.53432 1.14228 5.21568 1.56533 4.00469L1.58174 3.95C1.97951 2.8488 2.70684 1.89685 3.66479 1.22364C4.62274 0.550436 5.76481 0.188651 6.93565 0.1875C8.10649 0.188651 9.24856 0.550436 10.2065 1.22364C11.1645 1.89685 11.8918 2.8488 12.2896 3.95ZM5.54112 3.6875H8.33018C8.04994 2.81758 7.57271 2.02407 6.93565 1.36875C6.29858 2.02407 5.82135 2.81758 5.54112 3.6875ZM5.31143 4.5625C5.14376 5.42947 5.14376 6.32053 5.31143 7.1875H8.55987C8.64313 6.75495 8.68524 6.31549 8.68565 5.875C8.6855 5.4345 8.64339 4.99501 8.55987 4.5625H5.31143ZM2.12315 5.875C2.12408 6.31862 2.18478 6.76009 2.30362 7.1875H4.42002C4.27419 6.31858 4.27419 5.43142 4.42002 4.5625H2.30362C2.18478 4.98991 2.12408 5.43138 2.12315 5.875ZM8.33018 8.0625H5.54112C5.82135 8.93242 6.29858 9.72593 6.93565 10.3813C7.57271 9.72593 8.04994 8.93242 8.33018 8.0625ZM9.45127 7.1875H11.5677C11.8084 6.32905 11.8084 5.42095 11.5677 4.5625H9.45127C9.59711 5.43142 9.59711 6.31858 9.45127 7.1875ZM11.2231 8.0625H9.2544C8.99126 8.98381 8.54278 9.8417 7.93643 10.5836C8.63655 10.4324 9.29446 10.1279 9.86278 9.69198C10.4311 9.25604 10.8957 8.69953 11.2231 8.0625ZM5.93487 10.5836C5.32852 9.8417 4.88004 8.98381 4.6169 8.0625H2.64815C2.97559 8.69953 3.4402 9.25604 4.00852 9.69198C4.57684 10.1279 5.23474 10.4324 5.93487 10.5836ZM2.64815 3.6875H4.6169C4.88004 2.76618 5.32852 1.9083 5.93487 1.16641C5.23431 1.31649 4.57593 1.62058 4.00745 2.05664C3.43898 2.49269 2.97466 3.04977 2.64815 3.6875ZM7.93643 1.16641C8.54278 1.9083 8.99126 2.76618 9.2544 3.6875H11.2231C10.8966 3.04977 10.4323 2.49269 9.86384 2.05664C9.29537 1.62058 8.63699 1.31649 7.93643 1.16641Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                United States
                                            </div>
                                        </div>
                                        <div className="users-saying__slide-text">
                                            I’ve seen a very nice part of
                                            {projectName} bot, the trading bot drives
                                            the level improvement of regular
                                            users. With using martingale bot,
                                            and quite plain formulas, I could
                                            automatically decrease my average
                                            costs, and get inspirations from
                                            other enthusiasts.
                                        </div>
                                    </div>
                                </div>
                                {/*duplicated elements for loop animation (not delete)*/}
                            </div>
                            <div
                                className="users-saying__slider-track"
                                id="users-saying-track-two"
                                style={{ columnGap: "40px", "-x": "-1788px" }}
                            >
                                <div className="users-saying__slide">
                                    <div className="users-saying__slide-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/users-saying/user-one.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/users-saying/user-one.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/users-saying/user-one.jpg"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="users-saying__slide-wrapper">
                                        <div className="users-saying__slide-box">
                                            <div className="users-saying__slide-name">
                                                Thomas
                                            </div>
                                            <div className="users-saying__slide-location">
                                                <div className="users-saying__slide-icon">
                                                    <svg
                                                        width={14}
                                                        height={12}
                                                        viewBox="0 0 14 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12.2896 3.95L12.306 4.00469C12.729 5.21568 12.729 6.53432 12.306 7.74531L12.2896 7.8C11.8904 8.90032 11.1628 9.85139 10.2051 10.5244C9.24747 11.1974 8.10612 11.5598 6.93565 11.5625C5.76481 11.5613 4.62274 11.1996 3.66479 10.5264C2.70684 9.85315 1.97951 8.9012 1.58174 7.8L1.56533 7.74531C1.14228 6.53432 1.14228 5.21568 1.56533 4.00469L1.58174 3.95C1.97951 2.8488 2.70684 1.89685 3.66479 1.22364C4.62274 0.550436 5.76481 0.188651 6.93565 0.1875C8.10649 0.188651 9.24856 0.550436 10.2065 1.22364C11.1645 1.89685 11.8918 2.8488 12.2896 3.95ZM5.54112 3.6875H8.33018C8.04994 2.81758 7.57271 2.02407 6.93565 1.36875C6.29858 2.02407 5.82135 2.81758 5.54112 3.6875ZM5.31143 4.5625C5.14376 5.42947 5.14376 6.32053 5.31143 7.1875H8.55987C8.64313 6.75495 8.68524 6.31549 8.68565 5.875C8.6855 5.4345 8.64339 4.99501 8.55987 4.5625H5.31143ZM2.12315 5.875C2.12408 6.31862 2.18478 6.76009 2.30362 7.1875H4.42002C4.27419 6.31858 4.27419 5.43142 4.42002 4.5625H2.30362C2.18478 4.98991 2.12408 5.43138 2.12315 5.875ZM8.33018 8.0625H5.54112C5.82135 8.93242 6.29858 9.72593 6.93565 10.3813C7.57271 9.72593 8.04994 8.93242 8.33018 8.0625ZM9.45127 7.1875H11.5677C11.8084 6.32905 11.8084 5.42095 11.5677 4.5625H9.45127C9.59711 5.43142 9.59711 6.31858 9.45127 7.1875ZM11.2231 8.0625H9.2544C8.99126 8.98381 8.54278 9.8417 7.93643 10.5836C8.63655 10.4324 9.29446 10.1279 9.86278 9.69198C10.4311 9.25604 10.8957 8.69953 11.2231 8.0625ZM5.93487 10.5836C5.32852 9.8417 4.88004 8.98381 4.6169 8.0625H2.64815C2.97559 8.69953 3.4402 9.25604 4.00852 9.69198C4.57684 10.1279 5.23474 10.4324 5.93487 10.5836ZM2.64815 3.6875H4.6169C4.88004 2.76618 5.32852 1.9083 5.93487 1.16641C5.23431 1.31649 4.57593 1.62058 4.00745 2.05664C3.43898 2.49269 2.97466 3.04977 2.64815 3.6875ZM7.93643 1.16641C8.54278 1.9083 8.99126 2.76618 9.2544 3.6875H11.2231C10.8966 3.04977 10.4323 2.49269 9.86384 2.05664C9.29537 1.62058 8.63699 1.31649 7.93643 1.16641Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                Turkey
                                            </div>
                                        </div>
                                        <div className="users-saying__slide-text">
                                            {projectName}offers many types of
                                            trading bots suitable for any type
                                            of market, bullish or bearish, and
                                            it is very easy for beginners with
                                            its bot marketplace copy trading
                                            feature.
                                        </div>
                                    </div>
                                </div>
                                <div className="users-saying__slide">
                                    <div className="users-saying__slide-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/users-saying/user-four.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/users-saying/user-four.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/users-saying/user-four.jpg"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="users-saying__slide-wrapper">
                                        <div className="users-saying__slide-box">
                                            <div className="users-saying__slide-name">
                                                Aleksandr
                                            </div>
                                            <div className="users-saying__slide-location">
                                                <div className="users-saying__slide-icon">
                                                    <svg
                                                        width={14}
                                                        height={12}
                                                        viewBox="0 0 14 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12.2896 3.95L12.306 4.00469C12.729 5.21568 12.729 6.53432 12.306 7.74531L12.2896 7.8C11.8904 8.90032 11.1628 9.85139 10.2051 10.5244C9.24747 11.1974 8.10612 11.5598 6.93565 11.5625C5.76481 11.5613 4.62274 11.1996 3.66479 10.5264C2.70684 9.85315 1.97951 8.9012 1.58174 7.8L1.56533 7.74531C1.14228 6.53432 1.14228 5.21568 1.56533 4.00469L1.58174 3.95C1.97951 2.8488 2.70684 1.89685 3.66479 1.22364C4.62274 0.550436 5.76481 0.188651 6.93565 0.1875C8.10649 0.188651 9.24856 0.550436 10.2065 1.22364C11.1645 1.89685 11.8918 2.8488 12.2896 3.95ZM5.54112 3.6875H8.33018C8.04994 2.81758 7.57271 2.02407 6.93565 1.36875C6.29858 2.02407 5.82135 2.81758 5.54112 3.6875ZM5.31143 4.5625C5.14376 5.42947 5.14376 6.32053 5.31143 7.1875H8.55987C8.64313 6.75495 8.68524 6.31549 8.68565 5.875C8.6855 5.4345 8.64339 4.99501 8.55987 4.5625H5.31143ZM2.12315 5.875C2.12408 6.31862 2.18478 6.76009 2.30362 7.1875H4.42002C4.27419 6.31858 4.27419 5.43142 4.42002 4.5625H2.30362C2.18478 4.98991 2.12408 5.43138 2.12315 5.875ZM8.33018 8.0625H5.54112C5.82135 8.93242 6.29858 9.72593 6.93565 10.3813C7.57271 9.72593 8.04994 8.93242 8.33018 8.0625ZM9.45127 7.1875H11.5677C11.8084 6.32905 11.8084 5.42095 11.5677 4.5625H9.45127C9.59711 5.43142 9.59711 6.31858 9.45127 7.1875ZM11.2231 8.0625H9.2544C8.99126 8.98381 8.54278 9.8417 7.93643 10.5836C8.63655 10.4324 9.29446 10.1279 9.86278 9.69198C10.4311 9.25604 10.8957 8.69953 11.2231 8.0625ZM5.93487 10.5836C5.32852 9.8417 4.88004 8.98381 4.6169 8.0625H2.64815C2.97559 8.69953 3.4402 9.25604 4.00852 9.69198C4.57684 10.1279 5.23474 10.4324 5.93487 10.5836ZM2.64815 3.6875H4.6169C4.88004 2.76618 5.32852 1.9083 5.93487 1.16641C5.23431 1.31649 4.57593 1.62058 4.00745 2.05664C3.43898 2.49269 2.97466 3.04977 2.64815 3.6875ZM7.93643 1.16641C8.54278 1.9083 8.99126 2.76618 9.2544 3.6875H11.2231C10.8966 3.04977 10.4323 2.49269 9.86384 2.05664C9.29537 1.62058 8.63699 1.31649 7.93643 1.16641Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                Russia
                                            </div>
                                        </div>
                                        <div className="users-saying__slide-text">
                                            Мне нравится использовать
                                            трейдинговых ботов. Биржа {projectName}
                                            предоставляет самые популярные боты,
                                            такие как боты сетки и DCA. Кроме
                                            того, они абсолютно бесплатны для
                                            всех!
                                        </div>
                                    </div>
                                </div>
                                <div className="users-saying__slide">
                                    <div className="users-saying__slide-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/users-saying/user-five.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/users-saying/user-five.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/users-saying/user-five.jpg"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="users-saying__slide-wrapper">
                                        <div className="users-saying__slide-box">
                                            <div className="users-saying__slide-name">
                                                Nabhivarsha
                                            </div>
                                            <div className="users-saying__slide-location">
                                                <div className="users-saying__slide-icon">
                                                    <svg
                                                        width={14}
                                                        height={12}
                                                        viewBox="0 0 14 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12.2896 3.95L12.306 4.00469C12.729 5.21568 12.729 6.53432 12.306 7.74531L12.2896 7.8C11.8904 8.90032 11.1628 9.85139 10.2051 10.5244C9.24747 11.1974 8.10612 11.5598 6.93565 11.5625C5.76481 11.5613 4.62274 11.1996 3.66479 10.5264C2.70684 9.85315 1.97951 8.9012 1.58174 7.8L1.56533 7.74531C1.14228 6.53432 1.14228 5.21568 1.56533 4.00469L1.58174 3.95C1.97951 2.8488 2.70684 1.89685 3.66479 1.22364C4.62274 0.550436 5.76481 0.188651 6.93565 0.1875C8.10649 0.188651 9.24856 0.550436 10.2065 1.22364C11.1645 1.89685 11.8918 2.8488 12.2896 3.95ZM5.54112 3.6875H8.33018C8.04994 2.81758 7.57271 2.02407 6.93565 1.36875C6.29858 2.02407 5.82135 2.81758 5.54112 3.6875ZM5.31143 4.5625C5.14376 5.42947 5.14376 6.32053 5.31143 7.1875H8.55987C8.64313 6.75495 8.68524 6.31549 8.68565 5.875C8.6855 5.4345 8.64339 4.99501 8.55987 4.5625H5.31143ZM2.12315 5.875C2.12408 6.31862 2.18478 6.76009 2.30362 7.1875H4.42002C4.27419 6.31858 4.27419 5.43142 4.42002 4.5625H2.30362C2.18478 4.98991 2.12408 5.43138 2.12315 5.875ZM8.33018 8.0625H5.54112C5.82135 8.93242 6.29858 9.72593 6.93565 10.3813C7.57271 9.72593 8.04994 8.93242 8.33018 8.0625ZM9.45127 7.1875H11.5677C11.8084 6.32905 11.8084 5.42095 11.5677 4.5625H9.45127C9.59711 5.43142 9.59711 6.31858 9.45127 7.1875ZM11.2231 8.0625H9.2544C8.99126 8.98381 8.54278 9.8417 7.93643 10.5836C8.63655 10.4324 9.29446 10.1279 9.86278 9.69198C10.4311 9.25604 10.8957 8.69953 11.2231 8.0625ZM5.93487 10.5836C5.32852 9.8417 4.88004 8.98381 4.6169 8.0625H2.64815C2.97559 8.69953 3.4402 9.25604 4.00852 9.69198C4.57684 10.1279 5.23474 10.4324 5.93487 10.5836ZM2.64815 3.6875H4.6169C4.88004 2.76618 5.32852 1.9083 5.93487 1.16641C5.23431 1.31649 4.57593 1.62058 4.00745 2.05664C3.43898 2.49269 2.97466 3.04977 2.64815 3.6875ZM7.93643 1.16641C8.54278 1.9083 8.99126 2.76618 9.2544 3.6875H11.2231C10.8966 3.04977 10.4323 2.49269 9.86384 2.05664C9.29537 1.62058 8.63699 1.31649 7.93643 1.16641Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                India
                                            </div>
                                        </div>
                                        <div className="users-saying__slide-text">
                                            I like the bot marketplace feature
                                            from {projectName}trading bot. I don't
                                            need to learn all the technical
                                            analysis and I can copy bot
                                            parameters from other traders and
                                            help me make profits. It's easy for
                                            beginners!
                                        </div>
                                    </div>
                                </div>
                                {/*duplicated elements for loop animation (not delete)*/}
                                <div className="users-saying__slide">
                                    <div className="users-saying__slide-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/users-saying/user-one.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/users-saying/user-one.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/users-saying/user-one.jpg"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="users-saying__slide-wrapper">
                                        <div className="users-saying__slide-box">
                                            <div className="users-saying__slide-name">
                                                Thomas
                                            </div>
                                            <div className="users-saying__slide-location">
                                                <div className="users-saying__slide-icon">
                                                    <svg
                                                        width={14}
                                                        height={12}
                                                        viewBox="0 0 14 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12.2896 3.95L12.306 4.00469C12.729 5.21568 12.729 6.53432 12.306 7.74531L12.2896 7.8C11.8904 8.90032 11.1628 9.85139 10.2051 10.5244C9.24747 11.1974 8.10612 11.5598 6.93565 11.5625C5.76481 11.5613 4.62274 11.1996 3.66479 10.5264C2.70684 9.85315 1.97951 8.9012 1.58174 7.8L1.56533 7.74531C1.14228 6.53432 1.14228 5.21568 1.56533 4.00469L1.58174 3.95C1.97951 2.8488 2.70684 1.89685 3.66479 1.22364C4.62274 0.550436 5.76481 0.188651 6.93565 0.1875C8.10649 0.188651 9.24856 0.550436 10.2065 1.22364C11.1645 1.89685 11.8918 2.8488 12.2896 3.95ZM5.54112 3.6875H8.33018C8.04994 2.81758 7.57271 2.02407 6.93565 1.36875C6.29858 2.02407 5.82135 2.81758 5.54112 3.6875ZM5.31143 4.5625C5.14376 5.42947 5.14376 6.32053 5.31143 7.1875H8.55987C8.64313 6.75495 8.68524 6.31549 8.68565 5.875C8.6855 5.4345 8.64339 4.99501 8.55987 4.5625H5.31143ZM2.12315 5.875C2.12408 6.31862 2.18478 6.76009 2.30362 7.1875H4.42002C4.27419 6.31858 4.27419 5.43142 4.42002 4.5625H2.30362C2.18478 4.98991 2.12408 5.43138 2.12315 5.875ZM8.33018 8.0625H5.54112C5.82135 8.93242 6.29858 9.72593 6.93565 10.3813C7.57271 9.72593 8.04994 8.93242 8.33018 8.0625ZM9.45127 7.1875H11.5677C11.8084 6.32905 11.8084 5.42095 11.5677 4.5625H9.45127C9.59711 5.43142 9.59711 6.31858 9.45127 7.1875ZM11.2231 8.0625H9.2544C8.99126 8.98381 8.54278 9.8417 7.93643 10.5836C8.63655 10.4324 9.29446 10.1279 9.86278 9.69198C10.4311 9.25604 10.8957 8.69953 11.2231 8.0625ZM5.93487 10.5836C5.32852 9.8417 4.88004 8.98381 4.6169 8.0625H2.64815C2.97559 8.69953 3.4402 9.25604 4.00852 9.69198C4.57684 10.1279 5.23474 10.4324 5.93487 10.5836ZM2.64815 3.6875H4.6169C4.88004 2.76618 5.32852 1.9083 5.93487 1.16641C5.23431 1.31649 4.57593 1.62058 4.00745 2.05664C3.43898 2.49269 2.97466 3.04977 2.64815 3.6875ZM7.93643 1.16641C8.54278 1.9083 8.99126 2.76618 9.2544 3.6875H11.2231C10.8966 3.04977 10.4323 2.49269 9.86384 2.05664C9.29537 1.62058 8.63699 1.31649 7.93643 1.16641Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                Turkey
                                            </div>
                                        </div>
                                        <div className="users-saying__slide-text">
                                            {projectName}offers many types of
                                            trading bots suitable for any type
                                            of market, bullish or bearish, and
                                            it is very easy for beginners with
                                            its bot marketplace copy trading
                                            feature.
                                        </div>
                                    </div>
                                </div>
                                <div className="users-saying__slide">
                                    <div className="users-saying__slide-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/users-saying/user-four.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/users-saying/user-four.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/users-saying/user-four.jpg"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="users-saying__slide-wrapper">
                                        <div className="users-saying__slide-box">
                                            <div className="users-saying__slide-name">
                                                Aleksandr
                                            </div>
                                            <div className="users-saying__slide-location">
                                                <div className="users-saying__slide-icon">
                                                    <svg
                                                        width={14}
                                                        height={12}
                                                        viewBox="0 0 14 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12.2896 3.95L12.306 4.00469C12.729 5.21568 12.729 6.53432 12.306 7.74531L12.2896 7.8C11.8904 8.90032 11.1628 9.85139 10.2051 10.5244C9.24747 11.1974 8.10612 11.5598 6.93565 11.5625C5.76481 11.5613 4.62274 11.1996 3.66479 10.5264C2.70684 9.85315 1.97951 8.9012 1.58174 7.8L1.56533 7.74531C1.14228 6.53432 1.14228 5.21568 1.56533 4.00469L1.58174 3.95C1.97951 2.8488 2.70684 1.89685 3.66479 1.22364C4.62274 0.550436 5.76481 0.188651 6.93565 0.1875C8.10649 0.188651 9.24856 0.550436 10.2065 1.22364C11.1645 1.89685 11.8918 2.8488 12.2896 3.95ZM5.54112 3.6875H8.33018C8.04994 2.81758 7.57271 2.02407 6.93565 1.36875C6.29858 2.02407 5.82135 2.81758 5.54112 3.6875ZM5.31143 4.5625C5.14376 5.42947 5.14376 6.32053 5.31143 7.1875H8.55987C8.64313 6.75495 8.68524 6.31549 8.68565 5.875C8.6855 5.4345 8.64339 4.99501 8.55987 4.5625H5.31143ZM2.12315 5.875C2.12408 6.31862 2.18478 6.76009 2.30362 7.1875H4.42002C4.27419 6.31858 4.27419 5.43142 4.42002 4.5625H2.30362C2.18478 4.98991 2.12408 5.43138 2.12315 5.875ZM8.33018 8.0625H5.54112C5.82135 8.93242 6.29858 9.72593 6.93565 10.3813C7.57271 9.72593 8.04994 8.93242 8.33018 8.0625ZM9.45127 7.1875H11.5677C11.8084 6.32905 11.8084 5.42095 11.5677 4.5625H9.45127C9.59711 5.43142 9.59711 6.31858 9.45127 7.1875ZM11.2231 8.0625H9.2544C8.99126 8.98381 8.54278 9.8417 7.93643 10.5836C8.63655 10.4324 9.29446 10.1279 9.86278 9.69198C10.4311 9.25604 10.8957 8.69953 11.2231 8.0625ZM5.93487 10.5836C5.32852 9.8417 4.88004 8.98381 4.6169 8.0625H2.64815C2.97559 8.69953 3.4402 9.25604 4.00852 9.69198C4.57684 10.1279 5.23474 10.4324 5.93487 10.5836ZM2.64815 3.6875H4.6169C4.88004 2.76618 5.32852 1.9083 5.93487 1.16641C5.23431 1.31649 4.57593 1.62058 4.00745 2.05664C3.43898 2.49269 2.97466 3.04977 2.64815 3.6875ZM7.93643 1.16641C8.54278 1.9083 8.99126 2.76618 9.2544 3.6875H11.2231C10.8966 3.04977 10.4323 2.49269 9.86384 2.05664C9.29537 1.62058 8.63699 1.31649 7.93643 1.16641Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                Russia
                                            </div>
                                        </div>
                                        <div className="users-saying__slide-text">
                                            Мне нравится использовать
                                            трейдинговых ботов. Биржа {projectName}
                                            предоставляет самые популярные боты,
                                            такие как боты сетки и DCA. Кроме
                                            того, они абсолютно бесплатны для
                                            всех!
                                        </div>
                                    </div>
                                </div>
                                <div className="users-saying__slide">
                                    <div className="users-saying__slide-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/users-saying/user-five.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/users-saying/user-five.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/users-saying/user-five.jpg"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="users-saying__slide-wrapper">
                                        <div className="users-saying__slide-box">
                                            <div className="users-saying__slide-name">
                                                Nabhivarsha
                                            </div>
                                            <div className="users-saying__slide-location">
                                                <div className="users-saying__slide-icon">
                                                    <svg
                                                        width={14}
                                                        height={12}
                                                        viewBox="0 0 14 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12.2896 3.95L12.306 4.00469C12.729 5.21568 12.729 6.53432 12.306 7.74531L12.2896 7.8C11.8904 8.90032 11.1628 9.85139 10.2051 10.5244C9.24747 11.1974 8.10612 11.5598 6.93565 11.5625C5.76481 11.5613 4.62274 11.1996 3.66479 10.5264C2.70684 9.85315 1.97951 8.9012 1.58174 7.8L1.56533 7.74531C1.14228 6.53432 1.14228 5.21568 1.56533 4.00469L1.58174 3.95C1.97951 2.8488 2.70684 1.89685 3.66479 1.22364C4.62274 0.550436 5.76481 0.188651 6.93565 0.1875C8.10649 0.188651 9.24856 0.550436 10.2065 1.22364C11.1645 1.89685 11.8918 2.8488 12.2896 3.95ZM5.54112 3.6875H8.33018C8.04994 2.81758 7.57271 2.02407 6.93565 1.36875C6.29858 2.02407 5.82135 2.81758 5.54112 3.6875ZM5.31143 4.5625C5.14376 5.42947 5.14376 6.32053 5.31143 7.1875H8.55987C8.64313 6.75495 8.68524 6.31549 8.68565 5.875C8.6855 5.4345 8.64339 4.99501 8.55987 4.5625H5.31143ZM2.12315 5.875C2.12408 6.31862 2.18478 6.76009 2.30362 7.1875H4.42002C4.27419 6.31858 4.27419 5.43142 4.42002 4.5625H2.30362C2.18478 4.98991 2.12408 5.43138 2.12315 5.875ZM8.33018 8.0625H5.54112C5.82135 8.93242 6.29858 9.72593 6.93565 10.3813C7.57271 9.72593 8.04994 8.93242 8.33018 8.0625ZM9.45127 7.1875H11.5677C11.8084 6.32905 11.8084 5.42095 11.5677 4.5625H9.45127C9.59711 5.43142 9.59711 6.31858 9.45127 7.1875ZM11.2231 8.0625H9.2544C8.99126 8.98381 8.54278 9.8417 7.93643 10.5836C8.63655 10.4324 9.29446 10.1279 9.86278 9.69198C10.4311 9.25604 10.8957 8.69953 11.2231 8.0625ZM5.93487 10.5836C5.32852 9.8417 4.88004 8.98381 4.6169 8.0625H2.64815C2.97559 8.69953 3.4402 9.25604 4.00852 9.69198C4.57684 10.1279 5.23474 10.4324 5.93487 10.5836ZM2.64815 3.6875H4.6169C4.88004 2.76618 5.32852 1.9083 5.93487 1.16641C5.23431 1.31649 4.57593 1.62058 4.00745 2.05664C3.43898 2.49269 2.97466 3.04977 2.64815 3.6875ZM7.93643 1.16641C8.54278 1.9083 8.99126 2.76618 9.2544 3.6875H11.2231C10.8966 3.04977 10.4323 2.49269 9.86384 2.05664C9.29537 1.62058 8.63699 1.31649 7.93643 1.16641Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                                India
                                            </div>
                                        </div>
                                        <div className="users-saying__slide-text">
                                            I like the bot marketplace feature
                                            from {projectName}trading bot. I don't
                                            need to learn all the technical
                                            analysis and I can copy bot
                                            parameters from other traders and
                                            help me make profits. It's easy for
                                            beginners!
                                        </div>
                                    </div>
                                </div>
                                {/*duplicated elements for loop animation (not delete)*/}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default TradingBots;
