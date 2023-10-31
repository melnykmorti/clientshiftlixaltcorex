import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import stateSaver from "../../mobx/stateSaver";
import { projectName } from "../../App";
const InstitutionsStatic = () => {

        const swiperRef=useRef(null);
        const handleNext=useCallback((sliderRef)=>{
                if (!sliderRef.current) return;
                sliderRef.current.swiper.slideNext();
        },[])
        const {setError3LVLOpened}=stateSaver;
    return (
        <main className="main landings webp other">
            <section className="money-home">
                <div className="money-home__container">
                    <div className="money-home__box">
                        <div className="money-home__left">
                            <div className="money-home__title">
                                Where smart money moves
                            </div>
                            <div className="money-home__description">
                                {projectName} offers the world's most powerful suite
                                of institutional crypto trading solutions
                            </div>
                        </div>
                        <div className="money-home__right">
                            <div className="money-home__img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/money-home/phoneinhand.png"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="../assets/img/money-home/phoneinhand.png"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/money-home/phoneinhand.png"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why-choose">
                <div className="why-choose__container">
                    <div className="why-choose__title">
                        Why institutions choose {projectName}{" "}
                    </div>
                    <Swiper
                        className="why-choose__slider"
                        scrollbar={{ draggable: true }}
                        slidesPerView={3}
                        loop
                        autoplay
                        breakpoints={{
                            1170: {
                                slidesPerView: 3,
                            },
                            730: {
                                slidesPerView: 2,
                            },
                            300: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div
                                className="why-choose__slide swiper-slide"
                                style={{ marginRight: "68px" }}
                            >
                                <div className="why-choose__slide-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/why-choose/fees.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/why-choose/fees.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/why-choose/fees.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="why-choose__slide-title">
                                    Competitive fees
                                </div>
                                <div className="why-choose__slide-list">
                                    <ul>
                                        <li>Dynamic low-fee tier structures</li>
                                        <li>Up to 0% maker/taker VIP fees</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <div
                                className="why-choose__slide swiper-slide"
                                style={{ marginRight: "68px" }}
                            >
                                <div className="why-choose__slide-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/why-choose/liquidity.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/why-choose/liquidity.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/why-choose/liquidity.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="why-choose__slide-title">
                                    Deep liquidity
                                </div>
                                <div className="why-choose__slide-list">
                                    <ul>
                                        <li>
                                            2nd largest platform in global
                                            trading
                                            <br />
                                            volume
                                        </li>
                                        <li>
                                            26B USD in peak daily trading volume
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="why-choose__slide swiper-slide swiper-slide-prev"
                                style={{ marginRight: "68px" }}
                            >
                                <div className="why-choose__slide-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/why-choose/performance.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/why-choose/performance.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/why-choose/performance.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="why-choose__slide-title">
                                    Unparalleled performance
                                </div>
                                <div className="why-choose__slide-list">
                                    <ul>
                                        <li>
                                            5ms REST and WebSocket API
                                            <br />
                                            connectivity
                                        </li>
                                        <li>
                                            400,000 requests per second order
                                            <br />
                                            matching
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="why-choose__slide swiper-slide swiper-slide-active"
                                style={{ marginRight: "68px" }}
                            >
                                <div className="why-choose__slide-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/why-choose/transparency.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/why-choose/transparency.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/why-choose/transparency.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="why-choose__slide-title">
                                    Trust and transparency
                                </div>
                                <div className="why-choose__slide-list">
                                    <ul>
                                        <li>Regulatory-compliant</li>
                                        <li>
                                            Frequent 1:1 Proof of Reserves (PoR)
                                        </li>
                                        <li>Zero-breach security record</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="why-choose__slide swiper-slide "
                                style={{ marginRight: "68px" }}
                            >
                                <div className="why-choose__slide-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/why-choose/fees.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/why-choose/fees.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/why-choose/fees.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="why-choose__slide-title">
                                    Competitive fees
                                </div>
                                <div className="why-choose__slide-list">
                                    <ul>
                                        <li>Dynamic low-fee tier structures</li>
                                        <li>Up to 0% maker/taker VIP fees</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <div
                                className="why-choose__slide swiper-slide"
                                style={{ marginRight: "68px" }}
                            >
                                <div className="why-choose__slide-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/why-choose/liquidity.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/why-choose/liquidity.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/why-choose/liquidity.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="why-choose__slide-title">
                                    Deep liquidity
                                </div>
                                <div className="why-choose__slide-list">
                                    <ul>
                                        <li>
                                            2nd largest platform in global
                                            trading
                                            <br />
                                            volume
                                        </li>
                                        <li>
                                            26B USD in peak daily trading volume
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="why-choose__slide swiper-slide"
                                style={{ marginRight: "68px" }}
                            >
                                <div className="why-choose__slide-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/why-choose/performance.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/why-choose/performance.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/why-choose/performance.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="why-choose__slide-title">
                                    Unparalleled performance
                                </div>
                                <div className="why-choose__slide-list">
                                    <ul>
                                        <li>
                                            5ms REST and WebSocket API
                                            <br />
                                            connectivity
                                        </li>
                                        <li>
                                            400,000 requests per second order
                                            <br />
                                            matching
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="why-choose__slide swiper-slide"
                                style={{ marginRight: "68px" }}
                            >
                                <div className="why-choose__slide-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/why-choose/transparency.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/why-choose/transparency.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/why-choose/transparency.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="why-choose__slide-title">
                                    Trust and transparency
                                </div>
                                <div className="why-choose__slide-list">
                                    <ul>
                                        <li>Regulatory-compliant</li>
                                        <li>
                                            Frequent 1:1 Proof of Reserves (PoR)
                                        </li>
                                        <li>Zero-breach security record</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="powerful-solutions">
                <div className="powerful-solutions__container">
                    <div className="powerful-solutions__title">
                        The world's most powerful crypto trading solutions
                    </div>
                    <div className="powerful-solutions__description">
                        Whether you’re a trading firm, asset manager, family
                        office, or broker — we have the right solution for you.
                    </div>
                    <div className="powerful-solutions__cards">
                        <div className="powerful-solutions__card">
                            <div className="powerful-solutions__card-left">
                                <div className="powerful-solutions__card-title">
                                    Products
                                </div>
                                <div className="powerful-solutions__card-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/powerful-solutions/products.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/powerful-solutions/products.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/powerful-solutions/products.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                            </div>
                            <div className="powerful-solutions__card-right">
                                <div className="powerful-solutions__card-block">
                                {projectName} Exchange order book
                                    <ul>
                                        <li>350+ tokens</li>
                                        <li>730 spot trading pairs</li>
                                        <li>280 derivatives instruments</li>
                                        <li>1,000 options instruments</li>
                                    </ul>
                                    <span
                                        className="powerful-solutions__card-link"
                                        style={{cursor:"pointer"}}
                                    >
                                        Start trading →
                                    </span>
                                </div>
                                <div className="powerful-solutions__card-block">
                                    Yield and structured products
                                    <ul>
                                        <li>Customizable trading strategies</li>
                                        <li>Top-tier DeFi protocols access</li>
                                        <li>
                                            Earn yield by providing liquidity or
                                            staking
                                        </li>
                                    </ul>
                                </div>
                                <div className="powerful-solutions__card-block">
                                    Liquid Marketplace
                                    <ul>
                                        <li>
                                            On-demand liquidity network with
                                            multiple brokers
                                        </li>
                                        <li>
                                            Instantly trade spot OTC, future
                                            spreads, and options strategies at
                                            the price you want
                                        </li>
                                        <li>No impact on the orderbook</li>
                                    </ul>
                                    <span
                                        className="powerful-solutions__card-link"
                                        style={{cursor:"pointer"}}
                                    >
                                        Start trading →
                                    </span>
                                </div>
                                <div className="powerful-solutions__card-block">
                                    Advanced execution algos
                                    <ul>
                                        <li>
                                            Use sophisticated time-weighted
                                            average price (TWAP) and iceberg
                                            execution algorithms to split up
                                            large orders and reduce slippage.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="powerful-solutions__card">
                            <div className="powerful-solutions__card-left">
                                <div className="powerful-solutions__card-title">
                                    Services
                                </div>
                                <div className="powerful-solutions__card-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/powerful-solutions/services.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/powerful-solutions/services.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/powerful-solutions/services.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                            </div>
                            <div className="powerful-solutions__card-right">
                                <div className="powerful-solutions__card-block">
                                    VIP Loan pools
                                    <ul>
                                        <li>
                                            Dedicated low-interest-rate lending
                                            pools
                                        </li>
                                    </ul>
                                </div>
                                <div className="powerful-solutions__card-block">
                                    ETH 2.0 Staking
                                    <ul>
                                        <li>Low barriers to entry</li>
                                        <li>Flexible exit policy</li>
                                    </ul>
                                    <span
                                        className="powerful-solutions__card-link"
                                        style={{cursor:"pointer"}}
                                    >
                                        Learn more →
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="powerful-solutions__card">
                            <div className="powerful-solutions__card-left">
                                <div className="powerful-solutions__card-title">
                                    Programs
                                </div>
                                <div className="powerful-solutions__card-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/powerful-solutions/programs.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/powerful-solutions/programs.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/powerful-solutions/programs.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                            </div>
                            <div className="powerful-solutions__card-right">
                                <div className="powerful-solutions__card-block">
                                    Market maker program
                                    <ul>
                                        <li>
                                            Enjoy competitive rebates by
                                            providing liquidity for our spot and
                                            derivative markets on both our order
                                            books and Liquid Marketplace.
                                        </li>
                                    </ul>
                                </div>
                                <div className="powerful-solutions__card-block">
                                    Broker program
                                    <ul>
                                        <li>Tailored broker solutions</li>
                                        <li>Competitive commissions</li>
                                        <li>
                                            Top-tier liquidity and market depth
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="clients-say">
                <div className="clients-say__container">
                    <div className="clients-say__box">
                        <div className="clients-say__title">
                            Here’s what our clients have to say
                        </div>
                        <Swiper className="clients-say__slider"
                         scrollbar={{ draggable: true }}
                         slidesPerView={1}
                         loop
                         ref={swiperRef}
                         autoplay
                        >
                                <SwiperSlide>
                                <div
                                    className="clients-say__slide swiper-slide swiper-slide-next swiper-slide-prev"

                                    style={{
                                        width: "658px",
                                        marginRight: "50px",
                                    }}
                                >
                                    <div className="clients-say__slide-text">
                                    “ShiftLix has quickly become one of the best exchanges for institutions and is a preferred trading venue for our clients. ShiftLix has highly competitive fees, deep liquidity, and multiple account margin types. We attribute their success to the same reason why ShiftLix is a core pillar of FPG’s business: rich product features and a highly responsive client service team.”
                                    </div>
                                    <div className="clients-say__slide-wrapper">
                                        <div className="clients-say__slide-company">
                                        Clément Florentin, CEO, Darley Technologies
                                        </div>
                                        <div className="clients-say__slide-logo">
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/clients-say/BB958EB0056F77CE.png"
                                                    type="image/webp"
                                                />
                                                <picture>
                                                    <source
                                                        srcSet="../assets/img/clients-say/BB958EB0056F77CE.png"
                                                        type="image/webp"
                                                    />
                                                    <img
                                                        src="../assets/img/clients-say/BB958EB0056F77CE.png"
                                                        alt=""
                                                    />
                                                </picture>
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div
                                    className="clients-say__slide swiper-slide swiper-slide-active"
                                    style={{
                                        width: "658px",
                                        marginRight: "50px",
                                    }}
                                    
                                >
                                    <div className="clients-say__slide-text">
                                    {projectName} has always been one of the
                                        most user-friendly exchanges for
                                        institutional traders like ourselves,
                                        with features like portfolio margin
                                        providing greater capital efficiency.
                                        {projectName} Liquid Marketplace opens up
                                        additional opportunities for us to quote
                                        sophisticated, multi-instrument
                                        strategies, without the counterparty
                                        having to worry about slippage or
                                        execution.”
                                    </div>
                                    <div className="clients-say__slide-wrapper">
                                        <div className="clients-say__slide-company">
                                            Clément Florentin, CEO, Darley
                                            Technologies
                                        </div>
                                        <div className="clients-say__slide-logo">
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/clients-say/darley.webp"
                                                    type="image/webp"
                                                />
                                                <picture>
                                                    <source
                                                        srcSet="../assets/img/clients-say/darley.webp"
                                                        type="image/webp"
                                                    />
                                                    <img
                                                        src="../assets/img/clients-say/darley.png"
                                                        alt=""
                                                    />
                                                </picture>
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                        </Swiper>
                        
                        <div className="clients-say__slider-next" onClick={()=>handleNext(swiperRef)}>
                            <svg
                                width={16}
                                height={30}
                                viewBox="0 0 16 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 28L12 15L3 2"
                                    stroke="white"
                                    strokeWidth={5}
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            <section className="commitment">
                <div className="commitment__container">
                    <div className="commitment__title">
                        Our commitment to transparency
                    </div>
                    <div className="commitment__description">
                        We hold 1:1 reserves of all our customers assets and
                        give you full transparency over our reserves and your
                        funds.
                    </div>
                    <div className="commitment__link-wrapper">
                        <span
                            className="commitment__link"
                            style={{cursor:"pointer"}}
                            id="butafor__btn"
                            onClick={()=>setError3LVLOpened(true)}
                        >
                            View Proof of Reverves
                        </span>
                    </div>
                </div>
            </section>
            <section className="industry-leading">
                <div className="industry-leading__container">
                    <div className="industry-leading__title">
                        Industry-leading, since 2017
                    </div>
                    <div className="industry-leading__cards">
                        <div className="industry-leading__card">
                            <div className="industry-leading__card-value">
                                $6.2B
                            </div>
                            <div className="industry-leading__card-description">
                                Assets on platform
                            </div>
                        </div>
                        <div className="industry-leading__card">
                            <div className="industry-leading__card-value">
                                $21T
                            </div>
                            <div className="industry-leading__card-description">
                                Total traded
                            </div>
                        </div>
                        <div className="industry-leading__card">
                            <div className="industry-leading__card-value">
                                99.95%
                            </div>
                            <div className="industry-leading__card-description">
                                Uptime record
                            </div>
                        </div>
                        <div className="industry-leading__card">
                            <div className="industry-leading__card-value">
                                800+
                            </div>
                            <div className="industry-leading__card-description">
                                Trading instruments
                            </div>
                        </div>
                        <div className="industry-leading__card">
                            <div className="industry-leading__card-value">
                                $26B
                            </div>
                            <div className="industry-leading__card-description">
                                Peak daily trading volume
                            </div>
                        </div>
                        <div className="industry-leading__card">
                            <div className="industry-leading__card-value">
                                20M+
                            </div>
                            <div className="industry-leading__card-description">
                                Users worldwide
                            </div>
                        </div>
                    </div>
                    <div className="industry-leading__link-wrapper">
                        <a className="industry-leading__link butafor__btn"  onClick={()=>setError3LVLOpened(true)}>
                            Get started
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default InstitutionsStatic;
