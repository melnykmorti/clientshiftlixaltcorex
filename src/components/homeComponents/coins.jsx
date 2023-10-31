import React, { useCallback, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Coins = () => {
    const sliderRef=useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
      }, []);
    
      const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
      }, []);

    return (
        <section className="coins">
            <div className="coins__container">
                <div className="coins__slider-container">
                    <Swiper
                        loop={true}
                        observer={true}
                        observeParents={true}
                        spaceBetween={11}
                        slidesPerView="auto"
                            ref={sliderRef}
                        className="coins__slider"
                        autoplay={{ delay: 5000 }}
                        role="group"
                    >
                        <SwiperSlide>
                            <div
                                className="coins__slide swiper-slide"
                                style={{ marginRight: "11px" }} role="group"
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/eth.svg"
                                        alt=""
                                    />
                                    Ethereum
                                </div>
                                <div className="coins__slide-price">
                                    $1923.72{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $29.63 (1.54%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="coins__slide swiper-slide"
                                style={{ marginRight: "11px" }} role="group"
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/xrp.svg"
                                        alt=""
                                    />
                                    Ripple
                                </div>
                                <div className="coins__slide-price">$0.59 </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $0.01 (1.13%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={2}
                                role="group"
                                aria-label="3 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/sol.svg"
                                        alt=""
                                    />
                                    Solana
                                </div>
                                <div className="coins__slide-price">
                                    $34.75{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $0.08 (0.24%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate"
                                
                                role="group"
                                
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/btc.svg"
                                        alt=""
                                    />
                                    Bitcoin
                                </div>
                                <div className="coins__slide-price">
                                    $37514.55{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $765.30 (2.04%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={4}
                                role="group"
                                aria-label="5 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/ltc.svg"
                                        alt=""
                                    />
                                    Litecoin
                                </div>
                                <div className="coins__slide-price">
                                    $73.52{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $2.46 (3.34%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={5}
                                role="group"
                                aria-label="6 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/eth.svg"
                                        alt=""
                                    />
                                    Ethereum
                                </div>
                                <div className="coins__slide-price">
                                    $1923.72{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $29.63 (1.54%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={6}
                                role="group"
                                aria-label="7 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/xrp.svg"
                                        alt=""
                                    />
                                    Ripple
                                </div>
                                <div className="coins__slide-price">$0.59 </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $0.01 (1.13%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={7}
                                role="group"
                                aria-label="8 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/sol.svg"
                                        alt=""
                                    />
                                    Solana
                                </div>
                                <div className="coins__slide-price">
                                    $34.75{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $0.08 (0.24%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={8}
                                role="group"
                                aria-label="9 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/btc.svg"
                                        alt=""
                                    />
                                    Bitcoin
                                </div>
                                <div className="coins__slide-price">
                                    $37514.55{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $765.30 (2.04%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                                data-swiper-slide-index={9}
                                role="group"
                                aria-label="10 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/ltc.svg"
                                        alt=""
                                    />
                                    Litecoin
                                </div>
                                <div className="coins__slide-price">
                                    $73.52{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $2.46 (3.34%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    {/* <div className=" swiper swiper-initialized swiper-horizontal">
                        <div
                            className="swiper-wrapper"
                            id="swiper-wrapper-3bf5d1eafadba4c6"
                            aria-live="off"
                            style={{
                                transform: "translate3d(-5200px, 0px, 0px)",
                                transitionDuration: "0ms",
                            }}
                        >
                         
                           
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={2}
                                role="group"
                                aria-label="3 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/sol.svg"
                                        alt=""
                                    />
                                    Solana
                                </div>
                                <div className="coins__slide-price">
                                    $34.75{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $0.08 (0.24%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            
                          
                          
                          
                          
                           
                          
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate-active"
                                data-swiper-slide-index={0}
                                role="group"
                                aria-label="1 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/eth.svg"
                                        alt=""
                                    />
                                    Ethereum
                                </div>
                                <div className="coins__slide-price">
                                    $1923.72{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $29.63 (1.54%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate-next"
                                data-swiper-slide-index={1}
                                role="group"
                                aria-label="2 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/xrp.svg"
                                        alt=""
                                    />
                                    Ripple
                                </div>
                                <div className="coins__slide-price">$0.59 </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $0.01 (1.13%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide"
                                data-swiper-slide-index={2}
                                role="group"
                                aria-label="3 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/sol.svg"
                                        alt=""
                                    />
                                    Solana
                                </div>
                                <div className="coins__slide-price">
                                    $34.75{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $0.08 (0.24%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide"
                                data-swiper-slide-index={3}
                                role="group"
                                aria-label="4 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/btc.svg"
                                        alt=""
                                    />
                                    Bitcoin
                                </div>
                                <div className="coins__slide-price">
                                    $37514.55{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $765.30 (2.04%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide"
                                data-swiper-slide-index={4}
                                role="group"
                                aria-label="5 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/ltc.svg"
                                        alt=""
                                    />
                                    Litecoin
                                </div>
                                <div className="coins__slide-price">
                                    $73.52{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $2.46 (3.34%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide"
                                data-swiper-slide-index={5}
                                role="group"
                                aria-label="6 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/eth.svg"
                                        alt=""
                                    />
                                    Ethereum
                                </div>
                                <div className="coins__slide-price">
                                    $1923.72{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $29.63 (1.54%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide"
                                data-swiper-slide-index={6}
                                role="group"
                                aria-label="7 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/xrp.svg"
                                        alt=""
                                    />
                                    Ripple
                                </div>
                                <div className="coins__slide-price">$0.59 </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $0.01 (1.13%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide"
                                data-swiper-slide-index={7}
                                role="group"
                                aria-label="8 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/sol.svg"
                                        alt=""
                                    />
                                    Solana
                                </div>
                                <div className="coins__slide-price">
                                    $34.75{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $0.08 (0.24%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide"
                                data-swiper-slide-index={8}
                                role="group"
                                aria-label="9 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/btc.svg"
                                        alt=""
                                    />
                                    Bitcoin
                                </div>
                                <div className="coins__slide-price">
                                    $37514.55{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $765.30 (2.04%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide swiper-slide-prev"
                                data-swiper-slide-index={9}
                                role="group"
                                aria-label="10 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/ltc.svg"
                                        alt=""
                                    />
                                    Litecoin
                                </div>
                                <div className="coins__slide-price">
                                    $73.52{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $2.46 (3.34%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate swiper-slide-active"
                                data-swiper-slide-index={0}
                                role="group"
                                aria-label="1 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/eth.svg"
                                        alt=""
                                    />
                                    Ethereum
                                </div>
                                <div className="coins__slide-price">
                                    $1923.72{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $29.63 (1.54%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate swiper-slide-next"
                                data-swiper-slide-index={1}
                                role="group"
                                aria-label="2 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/xrp.svg"
                                        alt=""
                                    />
                                    Ripple
                                </div>
                                <div className="coins__slide-price">$0.59 </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $0.01 (1.13%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={2}
                                role="group"
                                aria-label="3 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/sol.svg"
                                        alt=""
                                    />
                                    Solana
                                </div>
                                <div className="coins__slide-price">
                                    $34.75{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $0.08 (0.24%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={3}
                                role="group"
                                aria-label="4 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/btc.svg"
                                        alt=""
                                    />
                                    Bitcoin
                                </div>
                                <div className="coins__slide-price">
                                    $37514.55{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $765.30 (2.04%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={4}
                                role="group"
                                aria-label="5 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/ltc.svg"
                                        alt=""
                                    />
                                    Litecoin
                                </div>
                                <div className="coins__slide-price">
                                    $73.52{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $2.46 (3.34%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={5}
                                role="group"
                                aria-label="6 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/eth.svg"
                                        alt=""
                                    />
                                    Ethereum
                                </div>
                                <div className="coins__slide-price">
                                    $1923.72{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $29.63 (1.54%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={6}
                                role="group"
                                aria-label="7 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/xrp.svg"
                                        alt=""
                                    />
                                    Ripple
                                </div>
                                <div className="coins__slide-price">$0.59 </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $0.01 (1.13%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={7}
                                role="group"
                                aria-label="8 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/sol.svg"
                                        alt=""
                                    />
                                    Solana
                                </div>
                                <div className="coins__slide-price">
                                    $34.75{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $0.08 (0.24%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={8}
                                role="group"
                                aria-label="9 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/btc.svg"
                                        alt=""
                                    />
                                    Bitcoin
                                </div>
                                <div className="coins__slide-price">
                                    $37514.55{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $765.30 (2.04%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                            <div
                                className="coins__slide swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                                data-swiper-slide-index={9}
                                role="group"
                                aria-label="10 / 10"
                                style={{ marginRight: "11px" }}
                            >
                                <div className="coins__slide-coin">
                                    <img
                                        src="landings/new_3/images/coins/ltc.svg"
                                        alt=""
                                    />
                                    Litecoin
                                </div>
                                <div className="coins__slide-price">
                                    $73.52{" "}
                                </div>
                                <div className="coins__slide-change coins__slide-change-plus">
                                    $2.46 (3.34%)
                                </div>
                                <div className="coins__slide-graph">
                                    <svg
                                        width={251}
                                        height={79}
                                        viewBox="0 0 251 79"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M249.1 43.71L247.1 44.7082C244.667 45.6213 239.965 47.2103 235.1 50.6972C230.235 54.1841 224.965 59.4699 220.1 63.6734C215.235 67.8769 210.965 71.0176 206.1 65.6697C201.235 60.3219 195.965 46.3329 191.1 47.7027C186.235 49.0725 181.965 65.3135 177.1 72.6569C172.235 80.0004 166.965 77.9707 162.1 75.6514C157.235 73.3322 151.965 70.8788 147.1 63.6734C142.235 56.468 137.965 45.4382 133.1 40.7155C128.235 35.9928 122.965 37.8706 118.1 33.7283C113.235 29.586 108.965 18.8594 104.1 14.7631C99.2347 10.6668 93.965 12.7967 89.0999 18.7558C84.2347 24.7148 78.965 35.047 74.0999 34.7265C69.2347 34.4059 64.965 23.5297 60.0999 22.7484C55.2347 21.9672 49.965 30.5241 45.0999 38.7192C40.2347 46.9142 35.965 55.4735 31.0999 49.699C26.2347 43.9245 20.965 24.0271 16.0999 13.7649C11.2347 3.50271 6.53243 2.36435 4.09985 1.78687L1.09985 1.78687"
                                            stroke="#31AC7C"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="coins__slide-date">
                                    Oct 28, 2023, 8:33 pm{" "}
                                </div>
                            </div>
                        </div>
                        <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                        />
                    </div> */}
                    <div
                        className="coins__slider-prev"
                        tabIndex={0}
                        role="button"
                        aria-label="Previous slide"
                        onClick={handlePrev}
                    />
                    <div
                        className="coins__slider-next"
                        tabIndex={0}
                        role="button"
                        aria-label="Next slide"
                        onClick={handleNext}
                    />
                </div>
            </div>
        </section>
    );
};

export default Coins;
