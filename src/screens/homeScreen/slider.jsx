import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Slider = () => {
    return (
        <section className="news">
            <div className="news__container">
                <Swiper className="news__slider" autoplay={true} pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }} loop={true}  spaceBetween={10} >
                    <SwiperSlide className="news__slide">
                        <picture>
                            <source
                                srcSet="../landings/new_7/img/news/more.webp"
                                type="image/webp"
                            />
                            <img
                                src="../landings/new_7/img/news/more.png"
                                alt=""
                            />
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide className="news__slide">
                        <picture>
                            <source
                                srcSet="../landings/new_7/img/news/more.webp"
                                type="image/webp"
                            />
                            <img
                                src="../landings/new_7/img/news/more.png"
                                alt=""
                            />
                        </picture>
                    </SwiperSlide> <SwiperSlide className="news__slide">
                        <picture>
                            <source
                                srcSet="../landings/new_7/img/news/more.webp"
                                type="image/webp"
                            />
                            <img
                                src="../landings/new_7/img/news/more.png"
                                alt=""
                            />
                        </picture>
                    </SwiperSlide> <SwiperSlide className="news__slide">
                        <picture>
                            <source
                                srcSet="../landings/new_7/img/news/more.webp"
                                type="image/webp"
                            />
                            <img
                                src="../landings/new_7/img/news/more.png"
                                alt=""
                            />
                        </picture>
                    </SwiperSlide> <SwiperSlide className="news__slide">
                        <picture>
                            <source
                                srcSet="../landings/new_7/img/news/more.webp"
                                type="image/webp"
                            />
                            <img
                                src="../landings/new_7/img/news/more.png"
                                alt=""
                            />
                        </picture>
                    </SwiperSlide> <SwiperSlide className="news__slide">
                        <picture>
                            <source
                                srcSet="../landings/new_7/img/news/more.webp"
                                type="image/webp"
                            />
                            <img
                                src="../landings/new_7/img/news/more.png"
                                alt=""
                            />
                        </picture>
                    </SwiperSlide> <SwiperSlide className="news__slide">
                        <picture>
                            <source
                                srcSet="../landings/new_7/img/news/more.webp"
                                type="image/webp"
                            />
                            <img
                                src="../landings/new_7/img/news/more.png"
                                alt=""
                            />
                        </picture>
                    </SwiperSlide> <SwiperSlide className="news__slide">
                        <picture>
                            <source
                                srcSet="../landings/new_7/img/news/more.webp"
                                type="image/webp"
                            />
                            <img
                                src="../landings/new_7/img/news/more.png"
                                alt=""
                            />
                        </picture>
                    </SwiperSlide> <SwiperSlide className="news__slide">
                        <picture>
                            <source
                                srcSet="../landings/new_7/img/news/more.webp"
                                type="image/webp"
                            />
                            <img
                                src="../landings/new_7/img/news/more.png"
                                alt=""
                            />
                        </picture>
                    </SwiperSlide> <SwiperSlide className="news__slide">
                        <picture>
                            <source
                                srcSet="../landings/new_7/img/news/more.webp"
                                type="image/webp"
                            />
                            <img
                                src="../landings/new_7/img/news/more.png"
                                alt=""
                            />
                        </picture>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Slider;
