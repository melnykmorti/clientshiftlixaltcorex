import React, { useCallback, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import stateSaver from "../../mobx/stateSaver";

const CopyTrading = () => {
    const swiperFirstRef = useRef(null);
    const swiperSecondRef = useRef(null);
    const { setError3LVLOpened } = stateSaver;
    const handlePrev = useCallback((sliderRef) => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);
    const handleNext = useCallback((sliderRef) => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return (
        <div className="other">
            <main className="main bg-white padding-null webp ">
                <section className="traders-home">
                    <div className="traders-home__container">
                        <div className="traders-home__box">
                            <div className="traders-home__header">
                                <div className="traders-home__title">
                                    Copy trading
                                </div>
                                <div className="traders-home__undertitle">
                                    Reap high returns with a community of top
                                    traders
                                </div>
                                <div className="traders-home__header-list">
                                    <div className="traders-home__header-list_item traders-home__header-list_item-border">
                                        Find trading influencers
                                    </div>
                                    <div className="traders-home__header-list_item traders-home__header-list_item-border">
                                        Track trading signals
                                    </div>
                                    <div className="traders-home__header-list_item">
                                        Easy copy, easy earn
                                    </div>
                                </div>
                            </div>

                            <div className="traders-home__card">
                                <img src="/assets/img/other/copytrading.png" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="traders-leaderboard">
                    <div className="traders-leaderboard__container">
                        <div className="traders-leaderboard__box">
                            <div className="traders-leaderboard__card traders-leaderboard__card-one">
                                <div className="traders-leaderboard__card-wrapper">
                                    <div className="traders-leaderboard__card-title">
                                        Copy Trading Leaderboard
                                    </div>
                                    <div className="traders-leaderboard__card-description">
                                        Followers
                                    </div>
                                </div>
                                <span
                                    className="traders-leaderboard__card-link"
                                    style={{ cursor: "pointer" }}
                                >
                                    Check It Out
                                    <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2 6C2 5.72385 2.22386 5.5 2.5 5.5H9.5C9.77615 5.5 10 5.72385 10 6C10 6.27615 9.77615 6.5 9.5 6.5H2.5C2.22386 6.5 2 6.27615 2 6Z"
                                            fill="white"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.64644 2.14644C5.84169 1.95119 6.15829 1.95119 6.35354 2.14644L9.85354 5.64645C10.0488 5.8417 10.0488 6.1583 9.85354 6.35355L6.35354 9.85355C6.15829 10.0488 5.84169 10.0488 5.64644 9.85355C5.45119 9.6583 5.45119 9.3417 5.64644 9.14645L8.79289 6L5.64644 2.85355C5.45119 2.65829 5.45119 2.34171 5.64644 2.14644Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className="traders-leaderboard__card traders-leaderboard__card-two">
                                <div className="traders-leaderboard__card-wrapper">
                                    <div className="traders-leaderboard__card-title">
                                        Copy Trading Leaderboard
                                    </div>
                                    <div className="traders-leaderboard__card-description">
                                        Master Traders
                                    </div>
                                </div>
                                <span
                                    className="traders-leaderboard__card-link"
                                    style={{ cursor: "pointer" }}
                                >
                                    Check It Out
                                    <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2 6C2 5.72385 2.22386 5.5 2.5 5.5H9.5C9.77615 5.5 10 5.72385 10 6C10 6.27615 9.77615 6.5 9.5 6.5H2.5C2.22386 6.5 2 6.27615 2 6Z"
                                            fill="white"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.64644 2.14644C5.84169 1.95119 6.15829 1.95119 6.35354 2.14644L9.85354 5.64645C10.0488 5.8417 10.0488 6.1583 9.85354 6.35355L6.35354 9.85355C6.15829 10.0488 5.84169 10.0488 5.64644 9.85355C5.45119 9.6583 5.45119 9.3417 5.64644 9.14645L8.79289 6L5.64644 2.85355C5.45119 2.65829 5.45119 2.34171 5.64644 2.14644Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="traders traders-highest">
                    <div className="traders__container">
                        
                        <div className="traders__cards">
                        <div className="trader-card">
                                <div className="trader-card__user">
                                    <div className="trader-card__img">
                                        <img
                                            src="../assets/img/trader-card/Real-world.jpg"
                                            alt=""
                                        />
                                        <div className="trader-card__img-status">
                                            NL
                                        </div>
                                    </div>
                                    <div className="trader-card__user-wrapper">
                                        <div className="trader-card__name">
                                            Real world
                                            <div className="trader-card__reward">
                                                <picture>
                                                    <source
                                                        srcSet="../assets/img/trader-card/reward-silver.webp"
                                                        type="image/webp"
                                                    />
                                                    <picture>
                                                        <source
                                                            srcSet="../assets/img/trader-card/reward-silver.webp"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            src="../assets/img/trader-card/reward-silver.png"
                                                            alt=""
                                                        />
                                                    </picture>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="trader-card__followers">
                                            1000 Follower(s)
                                            <div className="trader-card__followers-change trader-card__followers-nothing">
                                                {/*trader-card__followers-nothing*/}
                                                {/*trader-card__followers-plus*/}
                                                {/*trader-card__followers-minus*/}
                                                <div className="trader-card__followers-icon">
                                                    <svg
                                                        width={9}
                                                        height={7}
                                                        viewBox="0 0 9 7"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3.68294 1.15788C4.08135 0.593288 4.91865 0.593287 5.31706 1.15788L8.15064 5.17344C8.61808 5.83587 8.14433 6.75 7.33358 6.75H1.66642C0.855667 6.75 0.381915 5.83587 0.849358 5.17344L3.68294 1.15788Z"
                                                            fill="#24AE64"
                                                        />
                                                    </svg>
                                                </div>
                                                0.00%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="trader-card__info">
                                Lead trader’s PnL
                                    <div className="trader-card__info-days">
                                        30D
                                    </div>
                                </div>
                                <div className="trader-card__wrapper">
                                    <div className="trader-card__percent">
                                        +36.31%
                                    </div>
                                  
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            ROI
                                            <div className="trader-card__info-days">
                                                90D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value trader-card__table-green">
                                        +107.58%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            Drawdown
                                            <div className="trader-card__info-days">
                                                30D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        5.88%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            AUM
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        365,573,13
                                    </div>
                                </div>
                                <span
                                    className="trader-card__link trader-card__link-full butafor__btn"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                   
                                    Copy
                                </span>
                            </div><div className="trader-card">
                                <div className="trader-card__user">
                                    <div className="trader-card__img">
                                        <img
                                            src="../assets/img/trader-card/Real-world.jpg"
                                            alt=""
                                        />
                                        <div className="trader-card__img-status">
                                            NL
                                        </div>
                                    </div>
                                    <div className="trader-card__user-wrapper">
                                        <div className="trader-card__name">
                                            Real world
                                            <div className="trader-card__reward">
                                                <picture>
                                                    <source
                                                        srcSet="../assets/img/trader-card/reward-silver.webp"
                                                        type="image/webp"
                                                    />
                                                    <picture>
                                                        <source
                                                            srcSet="../assets/img/trader-card/reward-silver.webp"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            src="../assets/img/trader-card/reward-silver.png"
                                                            alt=""
                                                        />
                                                    </picture>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="trader-card__followers">
                                            1000 Follower(s)
                                            <div className="trader-card__followers-change trader-card__followers-nothing">
                                                {/*trader-card__followers-nothing*/}
                                                {/*trader-card__followers-plus*/}
                                                {/*trader-card__followers-minus*/}
                                                <div className="trader-card__followers-icon">
                                                    <svg
                                                        width={9}
                                                        height={7}
                                                        viewBox="0 0 9 7"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3.68294 1.15788C4.08135 0.593288 4.91865 0.593287 5.31706 1.15788L8.15064 5.17344C8.61808 5.83587 8.14433 6.75 7.33358 6.75H1.66642C0.855667 6.75 0.381915 5.83587 0.849358 5.17344L3.68294 1.15788Z"
                                                            fill="#24AE64"
                                                        />
                                                    </svg>
                                                </div>
                                                0.00%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="trader-card__info">
                                Lead trader’s PnL
                                    <div className="trader-card__info-days">
                                        30D
                                    </div>
                                </div>
                                <div className="trader-card__wrapper">
                                    <div className="trader-card__percent">
                                        +36.31%
                                    </div>
                                  
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            ROI
                                            <div className="trader-card__info-days">
                                                90D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value trader-card__table-green">
                                        +107.58%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            Drawdown
                                            <div className="trader-card__info-days">
                                                30D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        5.88%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            AUM
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        365,573,13
                                    </div>
                                </div>
                                <span
                                    className="trader-card__link trader-card__link-full butafor__btn"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                   
                                    Copy
                                </span>
                            </div><div className="trader-card">
                                <div className="trader-card__user">
                                    <div className="trader-card__img">
                                        <img
                                            src="../assets/img/trader-card/Real-world.jpg"
                                            alt=""
                                        />
                                        <div className="trader-card__img-status">
                                            NL
                                        </div>
                                    </div>
                                    <div className="trader-card__user-wrapper">
                                        <div className="trader-card__name">
                                            Real world
                                            <div className="trader-card__reward">
                                                <picture>
                                                    <source
                                                        srcSet="../assets/img/trader-card/reward-silver.webp"
                                                        type="image/webp"
                                                    />
                                                    <picture>
                                                        <source
                                                            srcSet="../assets/img/trader-card/reward-silver.webp"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            src="../assets/img/trader-card/reward-silver.png"
                                                            alt=""
                                                        />
                                                    </picture>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="trader-card__followers">
                                            1000 Follower(s)
                                            <div className="trader-card__followers-change trader-card__followers-nothing">
                                                {/*trader-card__followers-nothing*/}
                                                {/*trader-card__followers-plus*/}
                                                {/*trader-card__followers-minus*/}
                                                <div className="trader-card__followers-icon">
                                                    <svg
                                                        width={9}
                                                        height={7}
                                                        viewBox="0 0 9 7"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3.68294 1.15788C4.08135 0.593288 4.91865 0.593287 5.31706 1.15788L8.15064 5.17344C8.61808 5.83587 8.14433 6.75 7.33358 6.75H1.66642C0.855667 6.75 0.381915 5.83587 0.849358 5.17344L3.68294 1.15788Z"
                                                            fill="#24AE64"
                                                        />
                                                    </svg>
                                                </div>
                                                0.00%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="trader-card__info">
                                Lead trader’s PnL
                                    <div className="trader-card__info-days">
                                        30D
                                    </div>
                                </div>
                                <div className="trader-card__wrapper">
                                    <div className="trader-card__percent">
                                        +36.31%
                                    </div>
                                 
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            ROI
                                            <div className="trader-card__info-days">
                                                90D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value trader-card__table-green">
                                        +107.58%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            Drawdown
                                            <div className="trader-card__info-days">
                                                30D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        5.88%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            AUM
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        365,573,13
                                    </div>
                                </div>
                                <span
                                    className="trader-card__link trader-card__link-full butafor__btn"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    
                                    Copy
                                </span>
                            </div>
                            <div className="trader-card">
                                <div className="trader-card__user">
                                    <div className="trader-card__img">
                                        <img
                                            src="../assets/img/trader-card/SUPERRICH.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="trader-card__user-wrapper">
                                        <div className="trader-card__name">
                                            SUPERRICH
                                            <div className="trader-card__reward">
                                                <picture>
                                                    <source
                                                        srcSet="../assets/img/trader-card/reward-silver.webp"
                                                        type="image/webp"
                                                    />
                                                    <picture>
                                                        <source
                                                            srcSet="../assets/img/trader-card/reward-silver.webp"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            src="../assets/img/trader-card/reward-silver.png"
                                                            alt=""
                                                        />
                                                    </picture>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="trader-card__followers">
                                            180 Follower(s)
                                            <div className="trader-card__followers-change trader-card__followers-minus">
                                                {/*trader-card__followers-nothing*/}
                                                {/*trader-card__followers-plus*/}
                                                {/*trader-card__followers-minus*/}
                                                <div className="trader-card__followers-icon">
                                                    <svg
                                                        width={9}
                                                        height={7}
                                                        viewBox="0 0 9 7"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3.68294 1.15788C4.08135 0.593288 4.91865 0.593287 5.31706 1.15788L8.15064 5.17344C8.61808 5.83587 8.14433 6.75 7.33358 6.75H1.66642C0.855667 6.75 0.381915 5.83587 0.849358 5.17344L3.68294 1.15788Z"
                                                            fill="#24AE64"
                                                        />
                                                    </svg>
                                                </div>
                                                -7.69%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="trader-card__info">
                                Lead trader’s PnL
                                    <div className="trader-card__info-days">
                                        30D
                                    </div>
                                </div>
                                <div className="trader-card__wrapper">
                                    <div className="trader-card__percent">
                                        +72.95%
                                    </div>
                                
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            ROI
                                            <div className="trader-card__info-days">
                                                90D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value trader-card__table-green">
                                        +72.95%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            Drawdown
                                            <div className="trader-card__info-days">
                                                30D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        4.94%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            AUM
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        44,370,30
                                    </div>
                                </div>
                                <span
                                    className="trader-card__link butafor__btn"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    Copy
                                </span>
                            </div>
                            <div className="trader-card">
                                <div className="trader-card__user">
                                    <div className="trader-card__img">
                                        <img
                                            src="../assets/img/trader-card/Andrew-Carnegie.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="trader-card__user-wrapper">
                                        <div className="trader-card__name">
                                            Andrew Car...
                                            <div className="trader-card__reward">
                                                <picture>
                                                    <source
                                                        srcSet="../assets/img/trader-card/reward-silver.webp"
                                                        type="image/webp"
                                                    />
                                                    <picture>
                                                        <source
                                                            srcSet="../assets/img/trader-card/reward-silver.webp"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            src="../assets/img/trader-card/reward-silver.png"
                                                            alt=""
                                                        />
                                                    </picture>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="trader-card__followers">
                                            900 Follower(s)
                                            <div className="trader-card__followers-change trader-card__followers-plus">
                                                {/*trader-card__followers-nothing*/}
                                                {/*trader-card__followers-plus*/}
                                                {/*trader-card__followers-minus*/}
                                                <div className="trader-card__followers-icon">
                                                    <svg
                                                        width={9}
                                                        height={7}
                                                        viewBox="0 0 9 7"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3.68294 1.15788C4.08135 0.593288 4.91865 0.593287 5.31706 1.15788L8.15064 5.17344C8.61808 5.83587 8.14433 6.75 7.33358 6.75H1.66642C0.855667 6.75 0.381915 5.83587 0.849358 5.17344L3.68294 1.15788Z"
                                                            fill="#24AE64"
                                                        />
                                                    </svg>
                                                </div>
                                                102.70%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="trader-card__info">
                                Lead trader’s PnL
                                    <div className="trader-card__info-days">
                                        30D
                                    </div>
                                </div>
                                <div className="trader-card__wrapper">
                                    <div className="trader-card__percent">
                                        +48.24%
                                    </div>
                             
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            ROI
                                            <div className="trader-card__info-days">
                                                90D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value trader-card__table-green">
                                        +136.03%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            Drawdown
                                            <div className="trader-card__info-days">
                                                30D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        27.04%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            AUM
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        123,753,05
                                    </div>
                                </div>
                                <span
                                    className="trader-card__link butafor__btn"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    Copy
                                </span>
                            </div>
                            <div className="trader-card">
                                <div className="trader-card__user">
                                    <div className="trader-card__img">
                                        <img
                                            src="../assets/img/trader-card/99999999.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="trader-card__user-wrapper">
                                        <div className="trader-card__name">
                                            999.999.99...
                                            <div className="trader-card__reward">
                                                <picture>
                                                    <source
                                                        srcSet="../assets/img/trader-card/reward-silver.webp"
                                                        type="image/webp"
                                                    />
                                                    <picture>
                                                        <source
                                                            srcSet="../assets/img/trader-card/reward-silver.webp"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            src="../assets/img/trader-card/reward-silver.png"
                                                            alt=""
                                                        />
                                                    </picture>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="trader-card__followers">
                                            199 Follower(s)
                                            <div className="trader-card__followers-change trader-card__followers-plus">
                                                {/*trader-card__followers-nothing*/}
                                                {/*trader-card__followers-plus*/}
                                                {/*trader-card__followers-minus*/}
                                                <div className="trader-card__followers-icon">
                                                    <svg
                                                        width={9}
                                                        height={7}
                                                        viewBox="0 0 9 7"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3.68294 1.15788C4.08135 0.593288 4.91865 0.593287 5.31706 1.15788L8.15064 5.17344C8.61808 5.83587 8.14433 6.75 7.33358 6.75H1.66642C0.855667 6.75 0.381915 5.83587 0.849358 5.17344L3.68294 1.15788Z"
                                                            fill="#24AE64"
                                                        />
                                                    </svg>
                                                </div>
                                                5.29%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="trader-card__info">
                                    ROI
                                    <div className="trader-card__info-days">
                                        30D
                                    </div>
                                </div>
                                <div className="trader-card__wrapper">
                                    <div className="trader-card__percent">
                                        +76.27%
                                    </div>
                                   
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            ROI
                                            <div className="trader-card__info-days">
                                                90D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value trader-card__table-green">
                                        +76.27%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            Drawdown
                                            <div className="trader-card__info-days">
                                                30D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        4.05%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            AUM
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        57,928,16
                                    </div>
                                </div>
                                <span
                                    className="trader-card__link trader-card__link-full butafor__btn"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    
                                    Copy
                                </span>
                            </div>
                            <div className="trader-card">
                                <div className="trader-card__user">
                                    <div className="trader-card__img">
                                        <img
                                            src="../assets/img/trader-card/BITCOIN.jpeg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="trader-card__user-wrapper">
                                        <div className="trader-card__name">
                                            🅱️ I T C O I N ...
                                            <div className="trader-card__reward">
                                                <picture>
                                                    <source
                                                        srcSet="../assets/img/trader-card/reward-silver.webp"
                                                        type="image/webp"
                                                    />
                                                    <picture>
                                                        <source
                                                            srcSet="../assets/img/trader-card/reward-silver.webp"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            src="../assets/img/trader-card/reward-silver.png"
                                                            alt=""
                                                        />
                                                    </picture>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="trader-card__followers">
                                            184 Follower(s)
                                            <div className="trader-card__followers-change trader-card__followers-minus">
                                                {/*trader-card__followers-nothing*/}
                                                {/*trader-card__followers-plus*/}
                                                {/*trader-card__followers-minus*/}
                                                <div className="trader-card__followers-icon">
                                                    <svg
                                                        width={9}
                                                        height={7}
                                                        viewBox="0 0 9 7"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3.68294 1.15788C4.08135 0.593288 4.91865 0.593287 5.31706 1.15788L8.15064 5.17344C8.61808 5.83587 8.14433 6.75 7.33358 6.75H1.66642C0.855667 6.75 0.381915 5.83587 0.849358 5.17344L3.68294 1.15788Z"
                                                            fill="#24AE64"
                                                        />
                                                    </svg>
                                                </div>
                                                -1.07%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="trader-card__info">
                                Lead trader’s PnL
                                    <div className="trader-card__info-days">
                                        30D
                                    </div>
                                </div>
                                <div className="trader-card__wrapper">
                                    <div className="trader-card__percent">
                                        +26.51%
                                    </div>
                                  
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            ROI
                                            <div className="trader-card__info-days">
                                                90D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value trader-card__table-green">
                                        +30.27%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            Drawdown
                                            <div className="trader-card__info-days">
                                                30D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        3.42%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            AUM
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        96,442,01
                                    </div>
                                </div>
                                <span
                                    className="trader-card__link trader-card__link-full butafor__btn"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                   
                                    Copy
                                </span>
                            </div>
                            <div className="trader-card">
                                <div className="trader-card__user">
                                    <div className="trader-card__img">
                                        <img
                                            src="../assets/img/trader-card/ASK-ME-ANY.jpeg"
                                            alt=""
                                        />
                                        <div className="trader-card__img-status">
                                            JP
                                        </div>
                                    </div>
                                    <div className="trader-card__user-wrapper">
                                        <div className="trader-card__name">
                                            ASK ME ANY
                                            <div className="trader-card__reward">
                                                <picture>
                                                    <source
                                                        srcSet="../assets/img/trader-card/reward-silver.webp"
                                                        type="image/webp"
                                                    />
                                                    <picture>
                                                        <source
                                                            srcSet="../assets/img/trader-card/reward-silver.webp"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            src="../assets/img/trader-card/reward-silver.png"
                                                            alt=""
                                                        />
                                                    </picture>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="trader-card__followers">
                                            150 Follower(s)
                                            <div className="trader-card__followers-change trader-card__followers-minus">
                                                {/*trader-card__followers-nothing*/}
                                                {/*trader-card__followers-plus*/}
                                                {/*trader-card__followers-minus*/}
                                                <div className="trader-card__followers-icon">
                                                    <svg
                                                        width={9}
                                                        height={7}
                                                        viewBox="0 0 9 7"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3.68294 1.15788C4.08135 0.593288 4.91865 0.593287 5.31706 1.15788L8.15064 5.17344C8.61808 5.83587 8.14433 6.75 7.33358 6.75H1.66642C0.855667 6.75 0.381915 5.83587 0.849358 5.17344L3.68294 1.15788Z"
                                                            fill="#24AE64"
                                                        />
                                                    </svg>
                                                </div>
                                                -17.12%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="trader-card__info">
                                Lead trader’s PnL
                                    <div className="trader-card__info-days">
                                        30D
                                    </div>
                                </div>
                                <div className="trader-card__wrapper">
                                    <div className="trader-card__percent">
                                        +76.33%
                                    </div>
                                   
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            ROI
                                            <div className="trader-card__info-days">
                                                90D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value trader-card__table-green">
                                        +101.64%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            Drawdown
                                            <div className="trader-card__info-days">
                                                30D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        12.30%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            AUM
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        41,549,63
                                    </div>
                                </div>
                                <span
                                    className="trader-card__link butafor__btn"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    Copy
                                </span>
                            </div>
                            <div className="trader-card">
                                <div className="trader-card__user">
                                    <div className="trader-card__img">
                                        <img
                                            src="../assets/img/trader-card/MASE.jpg"
                                            alt=""
                                        />
                                        <div className="trader-card__img-status">
                                            KR
                                        </div>
                                    </div>
                                    <div className="trader-card__user-wrapper">
                                        <div className="trader-card__name">
                                            MASE
                                            <div className="trader-card__reward">
                                                <picture>
                                                    <source
                                                        srcSet="../assets/img/trader-card/reward-silver.webp"
                                                        type="image/webp"
                                                    />
                                                    <picture>
                                                        <source
                                                            srcSet="../assets/img/trader-card/reward-silver.webp"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            src="../assets/img/trader-card/reward-silver.png"
                                                            alt=""
                                                        />
                                                    </picture>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="trader-card__followers">
                                            132 Follower(s)
                                            <div className="trader-card__followers-change trader-card__followers-plus">
                                                {/*trader-card__followers-nothing*/}
                                                {/*trader-card__followers-plus*/}
                                                {/*trader-card__followers-minus*/}
                                                <div className="trader-card__followers-icon">
                                                    <svg
                                                        width={9}
                                                        height={7}
                                                        viewBox="0 0 9 7"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3.68294 1.15788C4.08135 0.593288 4.91865 0.593287 5.31706 1.15788L8.15064 5.17344C8.61808 5.83587 8.14433 6.75 7.33358 6.75H1.66642C0.855667 6.75 0.381915 5.83587 0.849358 5.17344L3.68294 1.15788Z"
                                                            fill="#24AE64"
                                                        />
                                                    </svg>
                                                </div>
                                                32.00%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="trader-card__info">
                                Lead trader’s PnL
                                    <div className="trader-card__info-days">
                                        30D
                                    </div>
                                </div>
                                <div className="trader-card__wrapper">
                                    <div className="trader-card__percent">
                                        +160.66%
                                    </div>
                                 
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            ROI
                                            <div className="trader-card__info-days">
                                                90D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value trader-card__table-green">
                                        +246.44%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            Drawdown
                                            <div className="trader-card__info-days">
                                                30D
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        40.98%
                                    </div>
                                </div>
                                <div className="trader-card__table">
                                    <div className="trader-card__table-key">
                                        <div className="trader-card__info">
                                            AUM
                                        </div>
                                    </div>
                                    <div className="trader-card__table-value">
                                        32,285,72
                                    </div>
                                </div>
                                <span
                                    className="trader-card__link butafor__btn"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    Copy
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="trades-pagination">
                        <div className="trades-pagination_list">
                            <div className="trades-pagination_item active" onClick={()=>setError3LVLOpened(true)}>
                                1
                            </div>
                            <div className="trades-pagination_item" onClick={()=>setError3LVLOpened(true)}>
                                2
                            </div>
                            <div className="trades-pagination_item" onClick={()=>setError3LVLOpened(true)}>
                                3
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CopyTrading;
