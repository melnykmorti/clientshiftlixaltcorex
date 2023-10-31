import React, { useState } from "react";
import stateSaver from "../../mobx/stateSaver";
import { projectName } from "../../App";

const CardsStatic = () => {
    const [accordionProps, setAccordionProps] = useState({
        q: false,
        w: false,
        e: false,
        r: false,
    });
    const {setError3LVLOpened}=stateSaver;
    const chooseTab = (key, value) => {
        const newState = Object.fromEntries(
            Object.entries(accordionProps).map(([k]) => [
                k,
                k === key ? value : false,
            ])
        );

        // Обновляем состояние
        setAccordionProps(newState);
    };

    return (
        <main className="main padding-null landings other">
            <section className="payment-home">
                <div className="payment-home__container">
                    <div className="payment-home__box">
                        <div className="payment-home__left">
                            <div className="payment-home__title">
                                {projectName} Card - The Future of Payment
                            </div>
                            <div className="payment-home__surprise">
                                <div className="payment-home__surprise-icon">
                                    <svg
                                        width={60}
                                        height={60}
                                        viewBox="0 0 60 60"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx={30}
                                            cy={30}
                                            r="29.5"
                                            stroke="url(#paint0_linear_442_14893)"
                                        />
                                        <g clipPath="url(#clip0_442_14893)">
                                            <path
                                                d="M17.9621 21.9409H42.0388C42.1003 21.9408 42.1613 21.9529 42.2181 21.9764C42.275 21.9999 42.3267 22.0344 42.3702 22.078C42.4137 22.1215 42.4482 22.1731 42.4717 22.23C42.4952 22.2868 42.5073 22.3478 42.5072 22.4093V44.5311C42.5073 44.5927 42.4952 44.6536 42.4717 44.7105C42.4482 44.7674 42.4137 44.819 42.3702 44.8625C42.3267 44.906 42.275 44.9405 42.2181 44.9641C42.1613 44.9876 42.1003 44.9996 42.0388 44.9995H17.9621C17.9005 44.9996 17.8396 44.9875 17.7827 44.964C17.7259 44.9405 17.6742 44.906 17.6307 44.8625C17.5872 44.819 17.5527 44.7673 17.5292 44.7105C17.5057 44.6536 17.4936 44.5927 17.4937 44.5311V22.4093C17.4936 22.3478 17.5057 22.2868 17.5292 22.23C17.5527 22.1731 17.5872 22.1215 17.6307 22.078C17.6742 22.0344 17.7259 21.9999 17.7827 21.9764C17.8396 21.9529 17.9005 21.9408 17.9621 21.9409Z"
                                                fill="#6D43E7"
                                            />
                                            <path
                                                d="M26.6367 29.4946H33.3635V44.9994H26.6367V29.4946Z"
                                                fill="#B1B1B1"
                                            />
                                            <path
                                                d="M26.6367 29.4946H33.3635V32.0259H26.6367V29.4946Z"
                                                fill="#C2C2C2"
                                            />
                                            <path
                                                d="M24.1287 20.8028C21.4131 20.7579 21.1506 23.4121 21.134 23.5948C21.1297 23.6855 21.099 23.773 21.0456 23.8465C20.9921 23.92 20.9184 23.9762 20.8334 24.0083C20.5926 24.1013 20.3218 23.9784 20.2288 23.7376C19.9066 22.8922 19.7904 21.6233 19.9083 20.3244C20.0062 19.2548 20.262 18.1552 20.6922 17.2434C21.1489 16.2767 21.8034 15.511 22.6803 15.1772C23.0624 15.0327 23.4809 14.9712 23.941 15.0127C26.4257 15.2386 29.9153 19.5936 30.1694 19.9141C30.2435 19.9999 30.2842 20.1096 30.284 20.223V21.1797C30.284 21.2279 30.2757 21.276 30.2608 21.3225C30.1827 21.5683 29.9187 21.7046 29.6729 21.6248C29.6662 21.6233 27.311 20.8559 24.1287 20.8028Z"
                                                fill="#DADADA"
                                            />
                                            <path
                                                d="M38.8631 23.5946C38.8465 23.4119 38.5824 20.7578 35.8685 20.8027C32.6861 20.8558 30.3309 21.6231 30.3243 21.6248C30.0785 21.7045 29.8144 21.5684 29.7363 21.3226C29.7212 21.2764 29.7134 21.2282 29.7131 21.1797H29.7114V20.223C29.7114 20.1051 29.7563 19.9971 29.8277 19.9141C30.0818 19.5935 33.5714 15.2386 36.0561 15.0127C36.5162 14.9712 36.9347 15.0326 37.3168 15.1772C38.1938 15.5111 38.8482 16.2767 39.3049 17.2434C39.7351 18.1553 39.9909 19.2548 40.0889 20.3244C40.2068 21.6233 40.0889 22.8922 39.7683 23.7376C39.6754 23.9784 39.4046 24.1014 39.1638 24.0083C39.0788 23.9762 39.005 23.9199 38.9516 23.8464C38.8982 23.7729 38.8674 23.6854 38.8631 23.5946Z"
                                                fill="#DADADA"
                                            />
                                            <path
                                                d="M30.0004 19.0508C30.9604 19.0508 31.8308 19.4411 32.4602 20.0706C33.0897 20.7001 33.4784 21.5687 33.4784 22.5288C33.4784 23.4905 33.0897 24.3591 32.4602 24.9886C31.8307 25.6181 30.9604 26.0084 30.0004 26.0084C29.0404 26.0084 28.1701 25.6181 27.5406 24.9886C26.9111 24.3591 26.5225 23.4905 26.5225 22.5288C26.5225 21.5688 26.9111 20.7001 27.5406 20.0706C28.1701 19.4411 29.0404 19.0508 30.0004 19.0508Z"
                                                fill="#B1B1B1"
                                            />
                                            <path
                                                d="M15.9454 21.9409H44.0549C44.1165 21.9408 44.1774 21.9529 44.2343 21.9764C44.2911 21.9999 44.3428 22.0344 44.3863 22.078C44.4298 22.1215 44.4643 22.1731 44.4878 22.23C44.5113 22.2868 44.5234 22.3478 44.5233 22.4093V29.0264C44.5234 29.088 44.5113 29.1489 44.4878 29.2058C44.4643 29.2626 44.4298 29.3143 44.3863 29.3578C44.3428 29.4013 44.2911 29.4358 44.2343 29.4593C44.1774 29.4828 44.1165 29.4949 44.0549 29.4948H15.9454C15.8839 29.4949 15.823 29.4828 15.7661 29.4593C15.7092 29.4358 15.6576 29.4013 15.6141 29.3578C15.5706 29.3143 15.5361 29.2626 15.5125 29.2058C15.489 29.1489 15.477 29.088 15.4771 29.0264V22.4093C15.477 22.3478 15.4891 22.2869 15.5126 22.23C15.5361 22.1731 15.5706 22.1215 15.6141 22.078C15.6576 22.0345 15.7093 22 15.7661 21.9764C15.823 21.9529 15.8839 21.9409 15.9454 21.9409Z"
                                                fill="#6F36E8"
                                            />
                                            <path
                                                d="M25.3281 21.9404H34.6691V29.4943H25.3281V21.9404Z"
                                                fill="#DADADA"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M26.5721 21.9411C26.6259 21.6227 26.7243 21.3135 26.8645 21.0226C25.9587 20.8921 25.0456 20.8189 24.1306 20.8034C22.8899 20.7817 22.1607 21.3265 21.7339 21.9411L26.5721 21.9411ZM33.4284 21.9411C33.3747 21.6227 33.2763 21.3135 33.1361 21.0226C34.0419 20.8921 34.955 20.8189 35.87 20.8034C37.1107 20.7817 37.8398 21.3265 38.2667 21.9411L33.4284 21.9411Z"
                                                fill="#C2C2C2"
                                            />
                                        </g>
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_442_14893"
                                                x1={30}
                                                y1={0}
                                                x2={30}
                                                y2={60}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#FAFAFA" />
                                                <stop
                                                    offset="0.336458"
                                                    stopColor="#FAFAFA"
                                                    stopOpacity="0.12"
                                                />
                                                <stop
                                                    offset="0.76875"
                                                    stopColor="#7044EE"
                                                    stopOpacity="0.19"
                                                />
                                                <stop
                                                    offset={1}
                                                    stopColor="#7044EE"
                                                />
                                            </linearGradient>
                                            <clipPath id="clip0_442_14893">
                                                <rect
                                                    width={30}
                                                    height={30}
                                                    fill="white"
                                                    transform="translate(15 15)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="payment-home__surprise-wrapper">
                                    <div className="payment-home__surprise-title">
                                        Register your {projectName}Card to earn
                                    </div>
                                    <div className="payment-home__surprise-value">
                                        1,000 USDT!
                                    </div>
                                </div>
                            </div>
                            <span
                                className="payment-home__link butafor__btn"
                                style={{cursor:"pointer"}}
                                onClick={()=>setError3LVLOpened(true)}
                            >
                                Get for Free
                            </span>
                        </div>
                        <div className="payment-home__right">
                            <div className="payment-home__img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/payment-home/cards.webp"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="../assets/img/payment-home/cards.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/payment-home/cards.png"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div className="payment-home__more">
                        <div className="payment-home__more-arrow">
                            <svg
                                width={20}
                                height={11}
                                viewBox="0 0 20 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19 0.999999L10 10L1 1"
                                    stroke="#929DA6"
                                    strokeWidth="1.35393"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <svg
                                width={22}
                                height={12}
                                viewBox="0 0 22 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.6665 1.33366L10.9998 10.667L20.3332 1.33366"
                                    stroke="white"
                                    strokeWidth="1.35393"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        View More
                    </div>
                </div>
            </section>
            <section className="your-fingertips">
                <div className="your-fingertips__container">
                    <div className="your-fingertips__subtitle">
                        Card Benefits and Perks
                    </div>
                    <div className="your-fingertips__title">
                        Crypto at Your Fingertips.
                    </div>
                    <div className="your-fingertips__cards">
                        <div className="your-fingertips__card-wrapper your-fingertips__card-one">
                            <div className="your-fingertips__card">
                                <div className="your-fingertips__card-title">
                                    Real-Time Crypto to Fiat Exchange
                                </div>
                                <div className="your-fingertips__card-description">
                                {projectName}Card enables real-time crypto
                                    payments. Just hold your crypto and spend
                                    when needed, no fiat top-ups required. You
                                    can spend with {projectName}Card at Visa
                                    merchants worldwide.
                                </div>
                            </div>
                        </div>
                        <div className="your-fingertips__card-wrapper your-fingertips__card-two">
                            <div className="your-fingertips__card">
                                <div className="your-fingertips__card-title">
                                    Save More with Cashback
                                </div>
                                <div className="your-fingertips__card-description">
                                    Receive a cashback on your {projectName}Card
                                    purchases.
                                </div>
                            </div>
                        </div>
                        <div className="your-fingertips__card-wrapper your-fingertips__card-three">
                            <div className="your-fingertips__card">
                                <div className="your-fingertips__card-title">
                                    Member Benefits and Bonuses
                                </div>
                                <div className="your-fingertips__card-description">
                                    Become a {projectName}Card owner and enjoy
                                    amazing membership benefits to be announced
                                    soon.
                                </div>
                            </div>
                        </div>
                        <div className="your-fingertips__card-wrapper your-fingertips__card-four">
                            <div className="your-fingertips__card">
                                <div className="your-fingertips__card-title">
                                    Your Card, Your Limits
                                </div>
                                <div className="your-fingertips__card-description">
                                    Enjoy custom spending limits that allow you
                                    to buy worry-free. You can also change or
                                    reduce your limits to keep tabs on expenses.
                                </div>
                            </div>
                        </div>
                        <div className="your-fingertips__card-wrapper your-fingertips__card-five">
                            <div className="your-fingertips__card">
                                <div className="your-fingertips__card-title">
                                    Supports Apple Pay &amp; Google Pay
                                </div>
                                <div className="your-fingertips__card-description">
                                    {projectName}Card supports Apple Pay and Google
                                    Pay, making everyday payment more convenient
                                    and easier than ever.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="create-card">
                <div className="create-card__container">
                    <div className="create-card__title">
                        Create a Card in Just 3 Steps
                    </div>
                    <div className="create-card__items">
                        <div className="create-card__item">
                            <div className="create-card__item-img">
                                <svg
                                    width={120}
                                    height={120}
                                    viewBox="0 0 120 120"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx={60}
                                        cy={60}
                                        r="59.5"
                                        fill="url(#paint0_linear_58_15621)"
                                        stroke="url(#paint1_linear_58_15621)"
                                    />
                                    <path
                                        d="M64.5876 81.75C65.076 81.75 65.5444 81.941 65.8897 82.2809C66.2351 82.6208 66.4291 83.0818 66.4291 83.5625C66.4291 84.0432 66.2351 84.5042 65.8897 84.8441C65.5444 85.184 65.076 85.375 64.5876 85.375H40.692C39.2269 85.375 37.8216 84.8021 36.7856 83.7824C35.7495 82.7626 35.1675 81.3796 35.1675 79.9375V40.0625C35.1675 38.6204 35.7495 37.2373 36.7856 36.2176C37.8216 35.1979 39.2269 34.625 40.692 34.625H71.9978C73.463 34.625 74.8682 35.1979 75.9043 36.2176C76.9403 37.2373 77.5224 38.6204 77.5224 40.0625C77.5224 40.5432 77.3284 41.0042 76.983 41.3441C76.6377 41.684 76.1693 41.875 75.6809 41.875C75.1925 41.875 74.7241 41.684 74.3787 41.3441C74.0334 41.0042 73.8394 40.5432 73.8394 40.0625C73.8394 39.5818 73.6453 39.1208 73.3 38.7809C72.9546 38.441 72.4862 38.25 71.9978 38.25H40.692C40.2036 38.25 39.7352 38.441 39.3899 38.7809C39.0445 39.1208 38.8505 39.5818 38.8505 40.0625V79.9375C38.8505 80.4182 39.0445 80.8792 39.3899 81.2191C39.7352 81.559 40.2036 81.75 40.692 81.75H64.5876ZM77.5224 64.1778V72.4845C77.5224 74.9006 73.8394 74.9006 73.8394 72.4845V64.1778C73.8394 61.7599 77.5224 61.7599 77.5224 64.1778Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M46.2165 49.125C45.7281 49.125 45.2597 48.934 44.9144 48.5941C44.569 48.2542 44.375 47.7932 44.375 47.3125C44.375 46.8318 44.569 46.3708 44.9144 46.0309C45.2597 45.691 45.7281 45.5 46.2165 45.5H59.1071C59.5955 45.5 60.0639 45.691 60.4093 46.0309C60.7546 46.3708 60.9487 46.8318 60.9487 47.3125C60.9487 47.7932 60.7546 48.2542 60.4093 48.5941C60.0639 48.934 59.5955 49.125 59.1071 49.125H46.2165ZM46.2165 58.1875C45.7281 58.1875 45.2597 57.9965 44.9144 57.6566C44.569 57.3167 44.375 56.8557 44.375 56.375C44.375 55.8943 44.569 55.4333 44.9144 55.0934C45.2597 54.7535 45.7281 54.5625 46.2165 54.5625H53.5826C54.071 54.5625 54.5394 54.7535 54.8847 55.0934C55.2301 55.4333 55.4241 55.8943 55.4241 56.375C55.4241 56.8557 55.2301 57.3167 54.8847 57.6566C54.5394 57.9965 54.071 58.1875 53.5826 58.1875H46.2165ZM66.4401 83.4827C66.4401 83.9635 66.2461 84.4245 65.9007 84.7644C65.5554 85.1042 65.087 85.2952 64.5986 85.2952C64.1102 85.2952 63.6418 85.1042 63.2964 84.7644C62.9511 84.4245 62.7571 83.9635 62.7571 83.4827L62.7902 76.3125C62.7902 74.8704 63.3722 73.4874 64.4083 72.4676C65.4444 71.4479 66.8496 70.875 68.3147 70.875L75.6661 70.9402C76.1545 70.9402 76.6229 71.1312 76.9682 71.4711C77.3136 71.811 77.5076 72.272 77.5076 72.7527C77.5076 73.2335 77.3136 73.6945 76.9682 74.0344C76.6229 74.3742 76.1545 74.5652 75.6661 74.5652L68.3147 74.5C67.8263 74.5 67.3579 74.691 67.0126 75.0309C66.6672 75.3708 66.4732 75.8318 66.4732 76.3125L66.4401 83.4827Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M66.3534 84.6752C66.1787 84.8401 65.9728 84.9694 65.7475 85.056C65.522 85.1424 65.2816 85.1845 65.0397 85.1794C64.7978 85.1745 64.5593 85.1227 64.3377 85.027C64.1162 84.9313 63.916 84.7936 63.7485 84.6218C63.581 84.4499 63.4496 84.2473 63.3617 84.0254C63.2738 83.8036 63.2311 83.5669 63.2362 83.3288C63.2412 83.0907 63.2939 82.8559 63.3911 82.6379C63.4884 82.4199 63.6283 82.2229 63.8028 82.058L74.1835 72.2596C74.3566 72.0882 74.5627 71.9525 74.7899 71.8607C75.0169 71.7689 75.2605 71.7227 75.506 71.7249C75.7516 71.727 75.9942 71.7775 76.2196 71.8733C76.4451 71.9691 76.6487 72.1083 76.8186 72.2827C76.9886 72.4571 77.1215 72.6632 77.2093 72.8889C77.2971 73.1146 77.3382 73.3553 77.3302 73.5968C77.3221 73.8383 77.2651 74.0759 77.1623 74.2954C77.0596 74.5149 76.9134 74.712 76.7321 74.875L66.3534 84.6752ZM80.336 49.9477C80.5169 49.7952 80.6653 49.6091 80.7729 49.4C80.8805 49.1908 80.945 48.9628 80.9628 48.729C80.9806 48.4952 80.9513 48.2603 80.8766 48.0377C80.8019 47.8151 80.6833 47.6093 80.5275 47.432L80.5035 47.403C80.1852 47.0427 79.7352 46.8206 79.2515 46.785C78.7677 46.7494 78.2892 46.9031 77.9199 47.2126L53.1404 67.9459L52.2657 70.8821L55.6228 70.6247L80.336 49.9477ZM83.3063 45.054C84.2606 46.135 84.7396 47.5447 84.638 48.9733C84.5365 50.4018 83.8627 51.7322 82.765 52.6719L57.5545 73.7676C57.259 74.0149 56.8917 74.1639 56.5049 74.1935L49.8902 74.6974C49.5927 74.7202 49.2942 74.6715 49.0202 74.5556C48.746 74.4397 48.5047 74.26 48.3168 74.0318C48.129 73.8038 48.0002 73.5343 47.9417 73.2464C47.883 72.9585 47.8964 72.6609 47.9805 72.3792L49.7612 66.4052C49.8626 66.0663 50.0622 65.7639 50.3358 65.5352L75.5315 44.4522C76.6396 43.5236 78.0752 43.0628 79.5266 43.17C80.9779 43.2773 82.3276 43.9439 83.2824 45.025L83.3063 45.054Z"
                                        fill="white"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_58_15621"
                                            x1={60}
                                            y1={0}
                                            x2={60}
                                            y2={120}
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#221B26" />
                                            <stop
                                                offset={1}
                                                stopColor="#332D37"
                                                stopOpacity="0.48"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_58_15621"
                                            x1={60}
                                            y1={0}
                                            x2={60}
                                            y2={120}
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#FAFAFA" />
                                            <stop
                                                offset="0.336458"
                                                stopColor="#FAFAFA"
                                                stopOpacity="0.12"
                                            />
                                            <stop
                                                offset="0.76875"
                                                stopColor="#7044EE"
                                                stopOpacity="0.19"
                                            />
                                            <stop
                                                offset={1}
                                                stopColor="#7044EE"
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="create-card__item-title">
                                Apply Online
                            </div>
                            <div className="create-card__item-description">
                                To apply for MasterCard online through the
                                {projectName} website, you need to complete advanced
                                KYC and provide passport and personal photo.
                            </div>
                        </div>
                        <div className="create-card__item create-card__item-center">
                            <div className="create-card__item-img">
                                <svg
                                    width={120}
                                    height={120}
                                    viewBox="0 0 120 120"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx={60}
                                        cy={60}
                                        r="59.5"
                                        fill="url(#paint0_linear_58_15611)"
                                        stroke="url(#paint1_linear_58_15611)"
                                    />
                                    <path
                                        d="M39.5153 55.2729V77.3336C39.5153 79.2245 40.7759 80.4851 42.6668 80.4851H77.3335C79.2244 80.4851 80.485 79.2245 80.485 77.3336V55.2729C82.3759 55.2729 83.6365 56.5336 83.6365 58.4245V77.3336C83.6365 80.8002 80.8001 83.6366 77.3335 83.6366H42.6668C39.2001 83.6366 36.3638 80.8002 36.3638 77.3336V58.4245C36.3638 56.5336 37.6244 55.2729 39.5153 55.2729Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M45.8178 54.6422L39.5148 58.1088L58.4239 68.824C59.3694 69.4543 60.63 69.4543 61.5754 68.824L80.4845 58.1088L74.1815 54.6422V50.8604L81.7451 55.2725C83.3209 56.2179 83.9512 58.1088 83.0057 59.6846C82.6906 60.3149 82.3754 60.63 81.7451 60.9452L62.836 71.6604C60.9451 72.6058 58.4239 72.6058 56.533 71.6604L37.6239 60.9452C36.6784 59.9997 36.0481 58.1088 36.9936 56.5331C37.3087 55.9028 37.6239 55.5876 37.939 55.2725L45.8178 50.8604V54.6422Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M74.1817 61.5759V42.6668C74.1817 40.7759 72.9211 39.5153 71.0301 39.5153H48.9695C47.0786 39.5153 45.818 40.7759 45.818 42.6668V61.5759H42.6665V42.6668C42.6665 39.2001 45.5029 36.3638 48.9695 36.3638H71.0301C74.4968 36.3638 77.3332 39.2001 77.3332 42.6668V61.5759H74.1817Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M58.6886 59.2122C58.3157 59.2122 57.9427 59.0812 57.6517 58.8167L51.798 53.486C51.6553 53.3564 51.5408 53.2014 51.4612 53.0296C51.3815 52.8579 51.3383 52.6729 51.3339 52.4851C51.3295 52.2974 51.364 52.1107 51.4354 51.9358C51.5069 51.7608 51.614 51.601 51.7504 51.4655C52.3218 50.8961 53.274 50.8735 53.8719 51.4201L58.6569 55.7759L66.8858 47.8202C67.0241 47.6865 67.1886 47.58 67.37 47.5069C67.5515 47.4338 67.7463 47.3954 67.9432 47.3941C68.1403 47.3927 68.3356 47.4282 68.5181 47.4987C68.7008 47.5692 68.8669 47.6733 69.0073 47.805C69.1476 47.9367 69.2594 48.0934 69.3361 48.2662C69.4129 48.439 69.4532 48.6245 69.4546 48.8121C69.4561 48.9998 69.4188 49.1858 69.3447 49.3597C69.2706 49.5336 69.1614 49.6919 69.0231 49.8255L59.7546 58.7839C59.6161 58.9197 59.4504 59.0277 59.2673 59.1013C59.0842 59.1748 58.8873 59.2125 58.6886 59.2122Z"
                                        fill="white"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_58_15611"
                                            x1={60}
                                            y1={0}
                                            x2={60}
                                            y2={120}
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#221B26" />
                                            <stop
                                                offset={1}
                                                stopColor="#332D37"
                                                stopOpacity="0.48"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_58_15611"
                                            x1={60}
                                            y1={0}
                                            x2={60}
                                            y2={120}
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#FAFAFA" />
                                            <stop
                                                offset="0.336458"
                                                stopColor="#FAFAFA"
                                                stopOpacity="0.12"
                                            />
                                            <stop
                                                offset="0.76875"
                                                stopColor="#7044EE"
                                                stopOpacity="0.19"
                                            />
                                            <stop
                                                offset={1}
                                                stopColor="#7044EE"
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="create-card__item-title">
                                Activate Online
                            </div>
                            <div className="create-card__item-description">
                                After the application is approved, you can
                                activate your {projectName} Card online and top up
                                the card through your {projectName} account.
                            </div>
                        </div>
                        <div className="create-card__item">
                            <div className="create-card__item-img">
                                <svg
                                    width={120}
                                    height={120}
                                    viewBox="0 0 120 120"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx={60}
                                        cy={60}
                                        r="59.5"
                                        fill="url(#paint0_linear_58_15603)"
                                        stroke="url(#paint1_linear_58_15603)"
                                    />
                                    <path
                                        d="M41.0605 47.1212C41.0605 43.774 43.774 41.0605 47.1212 41.0605H78.9393C82.2865 41.0605 84.9999 43.774 84.9999 47.1212V66.0605C84.9999 68.8846 83.0685 71.2574 80.4545 71.9302V68.6855C81.3602 68.1615 81.9696 67.1822 81.9696 66.0605V47.1212C81.9696 45.4476 80.6129 44.0908 78.9393 44.0908H47.1212C45.4476 44.0908 44.0908 45.4476 44.0908 47.1212H41.0605Z"
                                        fill="white"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M41.0606 48.6362C37.7134 48.6362 35 51.3496 35 54.6968V73.6362C35 76.9834 37.7134 79.6968 41.0606 79.6968H72.8788C76.226 79.6968 78.9394 76.9834 78.9394 73.6362V54.6968C78.9394 51.3496 76.226 48.6362 72.8788 48.6362H41.0606ZM38.0303 54.6968C38.0303 53.0233 39.387 51.6665 41.0606 51.6665H72.8788C74.5523 51.6665 75.9091 53.0233 75.9091 54.6968V55.4544H38.0303V54.6968ZM38.0303 62.2726V73.6362C38.0303 75.3098 39.387 76.6665 41.0606 76.6665H72.8788C74.5523 76.6665 75.9091 75.3098 75.9091 73.6362V62.2726H38.0303ZM60 70.458C60 71.4234 60.3835 72.3492 61.0661 73.0318C61.7487 73.7144 62.6745 74.0979 63.6399 74.0979C64.6053 74.0979 65.5311 73.7144 66.2137 73.0318C66.2789 72.9666 66.3413 72.8993 66.4009 72.8299C66.4605 72.8993 66.523 72.9666 66.5881 73.0318C67.2708 73.7144 68.1966 74.0979 69.162 74.0979C70.1273 74.0979 71.0531 73.7144 71.7358 73.0318C72.4183 72.3492 72.8018 71.4234 72.8018 70.458C72.8018 69.4926 72.4183 68.5668 71.7358 67.8842C71.0531 67.2015 70.1273 66.818 69.162 66.818C68.1966 66.818 67.2708 67.2015 66.5881 67.8842C66.523 67.9493 66.4605 68.0167 66.4009 68.0861C66.3413 68.0167 66.2789 67.9493 66.2137 67.8842C65.5311 67.2015 64.6053 66.818 63.6399 66.818C62.6745 66.818 61.7487 67.2015 61.0661 67.8842C60.3835 68.5668 60 69.4926 60 70.458Z"
                                        fill="white"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_58_15603"
                                            x1={60}
                                            y1={0}
                                            x2={60}
                                            y2={120}
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#221B26" />
                                            <stop
                                                offset={1}
                                                stopColor="#332D37"
                                                stopOpacity="0.48"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_58_15603"
                                            x1={60}
                                            y1={0}
                                            x2={60}
                                            y2={120}
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#FAFAFA" />
                                            <stop
                                                offset="0.336458"
                                                stopColor="#FAFAFA"
                                                stopOpacity="0.12"
                                            />
                                            <stop
                                                offset="0.76875"
                                                stopColor="#7044EE"
                                                stopOpacity="0.19"
                                            />
                                            <stop
                                                offset={1}
                                                stopColor="#7044EE"
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="create-card__item-title">
                                Card Ready
                            </div>
                            <div className="create-card__item-description">
                                Your {projectName} Card is now activated. You can use
                                your {projectName} Card for consumption.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="earn-crypto">
                <div className="earn-crypto__container">
                    <div className="earn-crypto__box">
                        <div className="earn-crypto__left">
                            <div className="earn-crypto__card">
                                <div className="earn-crypto__card-top">
                                    <div className="earn-crypto__card-box">
                                        <div className="earn-crypto__card-img">
                                            <svg
                                                width={33}
                                                height={34}
                                                viewBox="0 0 33 34"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.3875 33.0656C25.469 33.0656 32.7751 25.7596 32.7751 16.6781C32.7751 7.59659 25.469 0.290527 16.3875 0.290527C7.30606 0.290527 0 7.59659 0 16.6781C0 25.7596 7.30606 33.0656 16.3875 33.0656Z"
                                                    fill="#2775CA"
                                                />
                                                <path
                                                    d="M20.8943 19.2725C20.8943 16.8827 19.4604 16.0633 16.5926 15.722C14.5441 15.4488 14.1344 14.9026 14.1344 13.9466C14.1344 12.9905 14.8173 12.3761 16.1829 12.3761C17.4119 12.3761 18.0948 12.7858 18.4362 13.81C18.5045 14.0149 18.7093 14.1514 18.9142 14.1514H20.0066C20.2798 14.1514 20.4846 13.9466 20.4846 13.6735V13.6052C20.2114 12.103 18.9824 10.9422 17.4119 10.8057V9.16697C17.4119 8.89379 17.2071 8.68894 16.8657 8.62061H15.8415C15.5683 8.62061 15.3635 8.82545 15.2952 9.16697V10.7374C13.2467 11.0106 11.9495 12.3761 11.9495 14.0832C11.9495 16.3365 13.315 17.2241 16.1829 17.5656C18.0948 17.9069 18.7093 18.3166 18.7093 19.4092C18.7093 20.5017 17.7533 21.2528 16.456 21.2528C14.6806 21.2528 14.0661 20.5016 13.8612 19.4774C13.7931 19.2043 13.5882 19.0677 13.3834 19.0677H12.2225C11.9495 19.0677 11.7446 19.2725 11.7446 19.5457V19.614C12.0176 21.321 13.1102 22.55 15.3635 22.8915V24.5303C15.3635 24.8033 15.5683 25.0082 15.9097 25.0765H16.9339C17.2071 25.0765 17.4119 24.8716 17.4803 24.5303V22.8915C19.5287 22.55 20.8943 21.1161 20.8943 19.2725Z"
                                                    fill="white"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M6.82813 13.3318C4.84786 18.5895 7.57917 24.53 12.9051 26.4418C13.11 26.5785 13.3148 26.8515 13.3148 27.0563V28.0124C13.3148 28.1489 13.3148 28.2172 13.2465 28.2854C13.1783 28.5586 12.9051 28.6951 12.6319 28.5586C8.80823 27.3295 5.87208 24.3934 4.64301 20.5697C2.59457 14.083 6.14526 7.18644 12.6319 5.138C12.7003 5.06982 12.8368 5.06982 12.9051 5.06982C13.1783 5.138 13.3148 5.34284 13.3148 5.61602V6.57191C13.3148 6.91342 13.1783 7.11827 12.9051 7.25478C10.1056 8.279 7.85235 10.4639 6.82813 13.3318ZM19.5285 5.41144C19.5967 5.13826 19.8698 5.00175 20.143 5.13826C23.8984 6.36732 26.9029 9.30348 28.1319 13.1955C30.1804 19.6822 26.6297 26.5787 20.143 28.6272C20.0747 28.6953 19.9382 28.6953 19.8698 28.6953C19.5967 28.6272 19.4601 28.4223 19.4601 28.1492V27.1933C19.4601 26.8517 19.5967 26.6469 19.8698 26.5104C22.6693 25.4862 24.9226 23.3012 25.9468 20.4334C27.9271 15.1756 25.1958 9.23514 19.8698 7.32337C19.665 7.1867 19.4601 6.91368 19.4601 6.6405V5.68462C19.4601 5.54794 19.4601 5.47977 19.5285 5.41144Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <div className="earn-crypto__card-name">
                                            Paying with USDC
                                        </div>
                                    </div>
                                    <div className="earn-crypto__card-wrapper">
                                        <div className="earn-crypto__card-available">
                                            $800.00
                                        </div>
                                        <div className="earn-crypto__card-subtitle">
                                            available
                                        </div>
                                    </div>
                                </div>
                                <div className="earn-crypto__card-bottom">
                                    <div className="earn-crypto__card-box">
                                        <div className="earn-crypto__card-img">
                                            <svg
                                                width={35}
                                                height={35}
                                                viewBox="0 0 35 35"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M33.5873 21.2204C31.3101 30.3743 22.0584 35.9451 12.923 33.6625C3.79139 31.3804 -1.76759 22.1084 0.510641 12.9553C2.78688 3.80048 12.0385 -1.77079 21.1711 0.511302C30.3059 2.7934 35.8645 12.0663 33.587 21.2206L33.5872 21.2204H33.5873Z"
                                                    fill="#F7931A"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M24.5672 14.6523C24.9066 12.3784 23.1791 11.1561 20.8168 10.3407L21.5832 7.26047L19.7121 6.79326L18.9662 9.79237C18.4743 9.66943 17.9691 9.55359 17.4671 9.43875L18.2185 6.41985L16.3486 5.95264L15.5819 9.03184C15.1748 8.93897 14.7751 8.84718 14.3872 8.75047L14.3893 8.74078L11.8092 8.09509L11.3114 10.0977C11.3114 10.0977 12.6996 10.4166 12.6703 10.4362C13.428 10.6257 13.565 11.1284 13.5423 11.5267L12.6693 15.0358C12.7215 15.0491 12.7892 15.0683 12.8639 15.0984L12.8096 15.0848C12.7634 15.0732 12.7154 15.0612 12.6661 15.0494L11.4425 19.9651C11.35 20.1958 11.1149 20.542 10.5852 20.4105C10.604 20.4377 9.22532 20.0704 9.22532 20.0704L8.29639 22.2167L10.7312 22.825C10.9978 22.892 11.2612 22.9608 11.522 23.0289L11.5221 23.0289L11.523 23.0291C11.7049 23.0767 11.8856 23.1239 12.0652 23.1699L11.2909 26.2854L13.1598 26.7526L13.9265 23.6702C14.4371 23.8091 14.9326 23.9372 15.4176 24.058L14.6535 27.1259L16.5246 27.5931L17.2987 24.4834C20.4892 25.0885 22.8882 24.8446 23.898 21.9526C24.7117 19.6242 23.8575 18.2812 22.179 17.4055C23.4015 17.1229 24.3224 16.3171 24.5679 14.6526L24.5673 14.6521L24.5672 14.6523ZM20.2924 20.6594C19.7619 22.7956 16.4253 21.9125 14.8987 21.5084L14.8987 21.5084C14.7613 21.472 14.6387 21.4396 14.534 21.4135L15.5614 17.286C15.689 17.3179 15.8448 17.3529 16.0214 17.3927L16.0215 17.3927C17.6006 17.7478 20.8359 18.4754 20.2925 20.6594H20.2924ZM16.3382 15.4769C17.611 15.8173 20.3875 16.5599 20.871 14.6184H20.8712C21.3649 12.6327 18.6666 12.034 17.3488 11.7416C17.2005 11.7087 17.0698 11.6797 16.9629 11.653L16.0314 15.3965C16.1194 15.4184 16.2226 15.446 16.3382 15.4769Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <div className="earn-crypto__card-name">
                                            1% back in BTC
                                        </div>
                                    </div>
                                    <div className="earn-crypto__card-earn">
                                        +$90.24
                                    </div>
                                </div>
                            </div>
                            <div className="earn-crypto__card">
                                <div className="earn-crypto__card-top">
                                    <div className="earn-crypto__card-box">
                                        <div className="earn-crypto__card-img">
                                            <svg
                                                width={33}
                                                height={33}
                                                viewBox="0 0 33 33"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.3875 32.9411C25.469 32.9411 32.7751 25.635 32.7751 16.5536C32.7751 7.47207 25.469 0.166016 16.3875 0.166016C7.30606 0.166016 0 7.47207 0 16.5536C0 25.635 7.30606 32.9411 16.3875 32.9411Z"
                                                    fill="#1652F0"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M17.3654 15.6668C19.8882 16.0466 21.1497 16.9065 21.1497 19.148C21.1497 20.9916 19.7841 22.4255 17.7356 22.767V24.4058C17.6673 24.7471 17.4625 24.952 17.1893 24.952H16.1651C15.8237 24.8836 15.6189 24.6788 15.6189 24.4058V22.767C13.3656 22.4255 12.273 21.1964 12 19.4895V19.4212C12 19.148 12.2048 18.9432 12.4779 18.9432H13.6388C13.8436 18.9432 14.0484 19.0798 14.1166 19.3528C14.2848 20.1937 14.7291 20.8506 15.8654 21.0588V17.3622C13.3883 16.9704 12.2048 16.0563 12.2048 13.9587C12.2048 12.2516 13.5021 10.8861 15.5505 10.6129V9.04245C15.6189 8.70094 15.8237 8.49609 16.0969 8.49609H17.1211C17.4625 8.56443 17.6673 8.76927 17.6673 9.04245V10.6812C19.2377 10.8177 20.4668 11.9784 20.74 13.4807V13.549C20.74 13.822 20.5351 14.0269 20.2619 14.0269H19.1696C18.9647 14.0269 18.7599 13.8904 18.6915 13.6855C18.448 12.9549 18.0307 12.537 17.3654 12.3574V15.6668ZM17.3654 17.6401V21.0598C18.3174 20.8514 18.9647 20.1837 18.9647 19.2847C18.9647 18.393 18.5553 17.9561 17.3654 17.6401ZM15.8654 15.4154V12.2929C14.8817 12.4453 14.3898 13.0106 14.3898 13.822C14.3898 14.5999 14.661 15.1064 15.8654 15.4154Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <div className="earn-crypto__card-name">
                                            Paying with USD
                                        </div>
                                    </div>
                                    <div className="earn-crypto__card-wrapper">
                                        <div className="earn-crypto__card-available">
                                            $1000.00
                                        </div>
                                        <div className="earn-crypto__card-subtitle">
                                            available
                                        </div>
                                    </div>
                                </div>
                                <div className="earn-crypto__card-bottom">
                                    <div className="earn-crypto__card-box">
                                        <div className="earn-crypto__card-img">
                                            <svg
                                                width={33}
                                                height={34}
                                                viewBox="0 0 33 34"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.593 33.9627C25.5997 33.9627 32.9037 26.5613 32.9037 17.4345C32.9037 8.30761 25.5997 0.90625 16.593 0.90625C7.5862 0.90625 0.282227 8.30113 0.282227 17.4345C0.282227 26.5613 7.5862 33.9627 16.593 33.9627Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M11.1517 24.8033L13.4242 20.8334L15.6967 16.8765L17.9564 12.9066L18.3276 12.2774L18.4941 12.9066L19.1854 15.5208L18.4109 16.8765L16.1384 20.8334L13.8787 24.8033H16.5929L18.8654 20.8334L20.0432 18.7771L20.6001 20.8334L21.65 24.8033H24.0889L23.0391 20.8334L21.9828 16.8765L21.7076 15.8581L23.3975 12.9066H20.933L20.8498 12.6147L19.992 9.37134L19.8832 8.94971H17.5147L17.457 9.03403L15.2422 12.9066L12.9697 16.8765L10.71 20.8334L8.4375 24.8033H11.1517Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <div className="earn-crypto__card-name">
                                            4% back in ALGO
                                        </div>
                                    </div>
                                    <div className="earn-crypto__card-earn">
                                        +$120.24
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="earn-crypto__right">
                            <div className="earn-crypto__title">
                                Earn crypto back on every purchase
                            </div>
                            <div className="earn-crypto__description">
                                Stack crypto rewards fast from everyday spending
                            </div>
                            <div className="earn-crypto__benefits">
                                <div className="earn-crypto__benefit">
                                    <div className="earn-crypto__benefit-icon">
                                        <svg
                                            width={17}
                                            height={31}
                                            viewBox="0 0 17 31"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_58_15542)">
                                                <path
                                                    d="M12.3484 14.1316L5.97341 12.2184C5.23557 12.0004 4.72202 11.292 4.72202 10.5049C4.72202 9.51797 5.50119 8.71875 6.46334 8.71875H10.3769C11.097 8.71875 11.8054 8.94277 12.3956 9.35449C12.7557 9.60273 13.2397 9.54219 13.5467 9.2334L15.6008 7.1748C16.0199 6.75703 15.9609 6.06074 15.4946 5.69141C14.0484 4.52891 12.2422 3.88105 10.3887 3.875V0.96875C10.3887 0.435937 9.96369 0 9.44425 0H7.55536C7.03591 0 6.61091 0.435937 6.61091 0.96875V3.875H6.46334C2.70327 3.875 -0.318947 7.18691 0.0293165 11.1164C0.277233 13.9076 2.35501 16.1781 4.97584 16.9652L11.0262 18.7816C11.764 19.0057 12.2776 19.708 12.2776 20.4951C12.2776 21.482 11.4984 22.2812 10.5363 22.2812H6.62272C5.90258 22.2812 5.19425 22.0572 4.60397 21.6455C4.2439 21.3973 3.75987 21.4578 3.45293 21.7666L1.39876 23.8252C0.979664 24.243 1.03869 24.9393 1.50501 25.3086C2.95119 26.4711 4.75744 27.1189 6.61091 27.125V30.0312C6.61091 30.5641 7.03591 31 7.55536 31H9.44425C9.96369 31 10.3887 30.5641 10.3887 30.0312V27.1129C13.1394 27.0584 15.7189 25.3813 16.6279 22.7111C17.897 18.9814 15.7661 15.1549 12.3484 14.1316Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_58_15542">
                                                    <rect
                                                        width={17}
                                                        height={31}
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="earn-crypto__benefit-wrapper">
                                        <div className="earn-crypto__benefit-title">
                                            Spend cash or crypto
                                        </div>
                                        <div className="earn-crypto__benefit-description">
                                            Use your card anywhere Visa® debit
                                            cards are accepted, at 40M+
                                            merchants worldwide.
                                        </div>
                                    </div>
                                </div>
                                <div className="earn-crypto__benefit">
                                    <div className="earn-crypto__benefit-icon">
                                        <svg
                                            width={34}
                                            height={34}
                                            viewBox="0 0 34 34"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.6719 12.2188C15.5143 12.2188 15.3602 12.2655 15.2292 12.353C15.0981 12.4406 14.996 12.5651 14.9357 12.7107C14.8753 12.8563 14.8596 13.0165 14.8903 13.1711C14.9211 13.3257 14.997 13.4677 15.1084 13.5791C15.2198 13.6905 15.3618 13.7664 15.5164 13.7972C15.671 13.8279 15.8312 13.8122 15.9768 13.7518C16.1224 13.6915 16.2469 13.5894 16.3345 13.4583C16.422 13.3273 16.4688 13.1732 16.4688 13.0156C16.4688 12.8043 16.3848 12.6016 16.2354 12.4521C16.0859 12.3027 15.8832 12.2188 15.6719 12.2188ZM15.6719 12.2188C15.5143 12.2188 15.3602 12.2655 15.2292 12.353C15.0981 12.4406 14.996 12.5651 14.9357 12.7107C14.8753 12.8563 14.8596 13.0165 14.8903 13.1711C14.9211 13.3257 14.997 13.4677 15.1084 13.5791C15.2198 13.6905 15.3618 13.7664 15.5164 13.7972C15.671 13.8279 15.8312 13.8122 15.9768 13.7518C16.1224 13.6915 16.2469 13.5894 16.3345 13.4583C16.422 13.3273 16.4688 13.1732 16.4688 13.0156C16.4688 12.8043 16.3848 12.6016 16.2354 12.4521C16.0859 12.3027 15.8832 12.2188 15.6719 12.2188ZM15.6719 12.2188C15.5143 12.2188 15.3602 12.2655 15.2292 12.353C15.0981 12.4406 14.996 12.5651 14.9357 12.7107C14.8753 12.8563 14.8596 13.0165 14.8903 13.1711C14.9211 13.3257 14.997 13.4677 15.1084 13.5791C15.2198 13.6905 15.3618 13.7664 15.5164 13.7972C15.671 13.8279 15.8312 13.8122 15.9768 13.7518C16.1224 13.6915 16.2469 13.5894 16.3345 13.4583C16.422 13.3273 16.4688 13.1732 16.4688 13.0156C16.4688 12.8043 16.3848 12.6016 16.2354 12.4521C16.0859 12.3027 15.8832 12.2188 15.6719 12.2188ZM23.1094 19.6562C22.9518 19.6562 22.7977 19.703 22.6667 19.7905C22.5356 19.8781 22.4335 20.0026 22.3732 20.1482C22.3128 20.2938 22.2971 20.454 22.3278 20.6086C22.3586 20.7632 22.4345 20.9052 22.5459 21.0166C22.6573 21.128 22.7993 21.2039 22.9539 21.2347C23.1085 21.2654 23.2687 21.2497 23.4143 21.1893C23.5599 21.129 23.6844 21.0269 23.772 20.8958C23.8595 20.7648 23.9063 20.6107 23.9063 20.4531C23.9063 20.2418 23.8223 20.0391 23.6729 19.8896C23.5234 19.7402 23.3207 19.6562 23.1094 19.6562ZM23.1094 19.6562C22.9518 19.6562 22.7977 19.703 22.6667 19.7905C22.5356 19.8781 22.4335 20.0026 22.3732 20.1482C22.3128 20.2938 22.2971 20.454 22.3278 20.6086C22.3586 20.7632 22.4345 20.9052 22.5459 21.0166C22.6573 21.128 22.7993 21.2039 22.9539 21.2347C23.1085 21.2654 23.2687 21.2497 23.4143 21.1893C23.5599 21.129 23.6844 21.0269 23.772 20.8958C23.8595 20.7648 23.9063 20.6107 23.9063 20.4531C23.9063 20.2418 23.8223 20.0391 23.6729 19.8896C23.5234 19.7402 23.3207 19.6562 23.1094 19.6562ZM15.6719 12.2188C15.5143 12.2188 15.3602 12.2655 15.2292 12.353C15.0981 12.4406 14.996 12.5651 14.9357 12.7107C14.8753 12.8563 14.8596 13.0165 14.8903 13.1711C14.9211 13.3257 14.997 13.4677 15.1084 13.5791C15.2198 13.6905 15.3618 13.7664 15.5164 13.7972C15.671 13.8279 15.8312 13.8122 15.9768 13.7518C16.1224 13.6915 16.2469 13.5894 16.3345 13.4583C16.422 13.3273 16.4688 13.1732 16.4688 13.0156C16.4688 12.8043 16.3848 12.6016 16.2354 12.4521C16.0859 12.3027 15.8832 12.2188 15.6719 12.2188ZM27.0938 2.65625H6.64063C5.72523 2.65766 4.84773 3.02192 4.20045 3.6692C3.55317 4.31648 3.18891 5.19398 3.1875 6.10938V19.125C3.19046 19.3086 3.24095 19.4883 3.33406 19.6466C3.42716 19.8049 3.5597 19.9363 3.71875 20.0281C3.87233 20.123 4.04755 20.1772 4.22787 20.1855C4.40819 20.1939 4.58767 20.1562 4.74937 20.0759L6.375 19.2525V5.57812C6.375 5.36678 6.45896 5.16409 6.6084 5.01465C6.75784 4.86521 6.96053 4.78125 7.17188 4.78125C7.38322 4.78125 7.58591 4.86521 7.73535 5.01465C7.88479 5.16409 7.96875 5.36678 7.96875 5.57812V30.8125C7.97171 30.9961 8.0222 31.1758 8.11531 31.3341C8.20841 31.4924 8.34095 31.6238 8.5 31.7156C8.65358 31.8105 8.8288 31.8647 9.00912 31.873C9.18944 31.8814 9.36892 31.8437 9.53063 31.7634L14.3438 29.3463L19.1834 31.7634C19.3358 31.8435 19.5054 31.8853 19.6775 31.8853C19.8496 31.8853 20.0192 31.8435 20.1716 31.7634L24.4641 29.3781L29.2772 31.7847C29.4389 31.8649 29.6184 31.9026 29.7987 31.8943C29.979 31.8859 30.1542 31.8317 30.3078 31.7369C30.465 31.6399 30.5942 31.5037 30.6828 31.3416C30.7713 31.1795 30.816 30.9972 30.8125 30.8125V6.375C30.8125 5.38873 30.4207 4.44285 29.7233 3.74545C29.0259 3.04805 28.08 2.65625 27.0938 2.65625ZM15.6719 10.0938C16.2498 10.0938 16.8147 10.2651 17.2952 10.5862C17.7757 10.9072 18.1502 11.3636 18.3713 11.8975C18.5925 12.4314 18.6503 13.0189 18.5376 13.5857C18.4249 14.1524 18.1466 14.6731 17.738 15.0817C17.3293 15.4903 16.8087 15.7686 16.2419 15.8814C15.6751 15.9941 15.0876 15.9362 14.5537 15.7151C14.0198 15.4939 13.5635 15.1194 13.2424 14.6389C12.9214 14.1584 12.75 13.5935 12.75 13.0156C12.7514 12.2411 13.0597 11.4988 13.6073 10.9511C14.155 10.4034 14.8974 10.0952 15.6719 10.0938ZM15.0928 22.5303C14.8896 22.7044 14.6281 22.7953 14.3607 22.785C14.0933 22.7747 13.8396 22.6638 13.6504 22.4746C13.4612 22.2854 13.3503 22.0317 13.34 21.7643C13.3297 21.4969 13.4206 21.2354 13.5947 21.0322L23.6884 10.9384C23.8917 10.7644 24.1532 10.6734 24.4206 10.6837C24.688 10.6941 24.9416 10.8049 25.1308 10.9942C25.3201 11.1834 25.4309 11.437 25.4413 11.7044C25.4516 11.9718 25.3606 12.2333 25.1866 12.4366L15.0928 22.5303ZM23.1094 23.375C22.5315 23.375 21.9666 23.2036 21.4861 22.8826C21.0056 22.5615 20.6311 22.1052 20.4099 21.5713C20.1888 21.0374 20.1309 20.4499 20.2436 19.8831C20.3564 19.3163 20.6347 18.7957 21.0433 18.387C21.4519 17.9784 21.9726 17.7001 22.5393 17.5874C23.1061 17.4747 23.6936 17.5325 24.2275 17.7537C24.7614 17.9748 25.2178 18.3493 25.5388 18.8298C25.8599 19.3103 26.0313 19.8752 26.0313 20.4531C26.0298 21.2276 25.7216 21.97 25.1739 22.5177C24.6262 23.0653 23.8839 23.3736 23.1094 23.375ZM23.1094 19.6562C22.9518 19.6562 22.7977 19.703 22.6667 19.7905C22.5356 19.8781 22.4335 20.0026 22.3732 20.1482C22.3128 20.2938 22.2971 20.454 22.3278 20.6086C22.3586 20.7632 22.4345 20.9052 22.5459 21.0166C22.6573 21.128 22.7993 21.2039 22.9539 21.2347C23.1085 21.2654 23.2687 21.2497 23.4143 21.1893C23.5599 21.129 23.6844 21.0269 23.772 20.8958C23.8595 20.7648 23.9063 20.6107 23.9063 20.4531C23.9063 20.2418 23.8223 20.0391 23.6729 19.8896C23.5234 19.7402 23.3207 19.6562 23.1094 19.6562ZM15.6719 13.8125C15.8295 13.8125 15.9836 13.7658 16.1146 13.6782C16.2456 13.5906 16.3478 13.4662 16.4081 13.3206C16.4684 13.175 16.4842 13.0147 16.4534 12.8602C16.4227 12.7056 16.3468 12.5636 16.2354 12.4521C16.1239 12.3407 15.9819 12.2648 15.8273 12.2341C15.6728 12.2033 15.5125 12.2191 15.3669 12.2794C15.2213 12.3397 15.0969 12.4419 15.0093 12.5729C14.9217 12.704 14.875 12.858 14.875 13.0156C14.875 13.227 14.959 13.4297 15.1084 13.5791C15.2578 13.7285 15.4605 13.8125 15.6719 13.8125ZM15.6719 12.2188C15.5143 12.2188 15.3602 12.2655 15.2292 12.353C15.0981 12.4406 14.996 12.5651 14.9357 12.7107C14.8753 12.8563 14.8596 13.0165 14.8903 13.1711C14.9211 13.3257 14.997 13.4677 15.1084 13.5791C15.2198 13.6905 15.3618 13.7664 15.5164 13.7972C15.671 13.8279 15.8312 13.8122 15.9768 13.7518C16.1224 13.6915 16.2469 13.5894 16.3345 13.4583C16.422 13.3273 16.4688 13.1732 16.4688 13.0156C16.4688 12.8043 16.3848 12.6016 16.2354 12.4521C16.0859 12.3027 15.8832 12.2188 15.6719 12.2188ZM23.1094 19.6562C22.9518 19.6562 22.7977 19.703 22.6667 19.7905C22.5356 19.8781 22.4335 20.0026 22.3732 20.1482C22.3128 20.2938 22.2971 20.454 22.3278 20.6086C22.3586 20.7632 22.4345 20.9052 22.5459 21.0166C22.6573 21.128 22.7993 21.2039 22.9539 21.2347C23.1085 21.2654 23.2687 21.2497 23.4143 21.1893C23.5599 21.129 23.6844 21.0269 23.772 20.8958C23.8595 20.7648 23.9063 20.6107 23.9063 20.4531C23.9063 20.2418 23.8223 20.0391 23.6729 19.8896C23.5234 19.7402 23.3207 19.6562 23.1094 19.6562ZM23.1094 19.6562C22.9518 19.6562 22.7977 19.703 22.6667 19.7905C22.5356 19.8781 22.4335 20.0026 22.3732 20.1482C22.3128 20.2938 22.2971 20.454 22.3278 20.6086C22.3586 20.7632 22.4345 20.9052 22.5459 21.0166C22.6573 21.128 22.7993 21.2039 22.9539 21.2347C23.1085 21.2654 23.2687 21.2497 23.4143 21.1893C23.5599 21.129 23.6844 21.0269 23.772 20.8958C23.8595 20.7648 23.9063 20.6107 23.9063 20.4531C23.9063 20.2418 23.8223 20.0391 23.6729 19.8896C23.5234 19.7402 23.3207 19.6562 23.1094 19.6562ZM15.6719 12.2188C15.5143 12.2188 15.3602 12.2655 15.2292 12.353C15.0981 12.4406 14.996 12.5651 14.9357 12.7107C14.8753 12.8563 14.8596 13.0165 14.8903 13.1711C14.9211 13.3257 14.997 13.4677 15.1084 13.5791C15.2198 13.6905 15.3618 13.7664 15.5164 13.7972C15.671 13.8279 15.8312 13.8122 15.9768 13.7518C16.1224 13.6915 16.2469 13.5894 16.3345 13.4583C16.422 13.3273 16.4688 13.1732 16.4688 13.0156C16.4688 12.8043 16.3848 12.6016 16.2354 12.4521C16.0859 12.3027 15.8832 12.2188 15.6719 12.2188Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <div className="earn-crypto__benefit-wrapper">
                                        <div className="earn-crypto__benefit-title">
                                            No hidden fees
                                        </div>
                                        <div className="earn-crypto__benefit-description">
                                            Enjoy zero spending fees and no
                                            annual fees.
                                        </div>
                                    </div>
                                </div>
                                <div className="earn-crypto__benefit">
                                    <div className="earn-crypto__benefit-icon">
                                        <svg
                                            width={23}
                                            height={30}
                                            viewBox="0 0 23 30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                x={1}
                                                y={1}
                                                width={21}
                                                height={28}
                                                stroke="white"
                                                strokeWidth={2}
                                            />
                                            <line
                                                x1={5}
                                                y1={7}
                                                x2={18}
                                                y2={7}
                                                stroke="white"
                                                strokeWidth={2}
                                            />
                                            <line
                                                x1={5}
                                                y1={12}
                                                x2={18}
                                                y2={12}
                                                stroke="white"
                                                strokeWidth={2}
                                            />
                                            <line
                                                x1={5}
                                                y1={17}
                                                x2={18}
                                                y2={17}
                                                stroke="white"
                                                strokeWidth={2}
                                            />
                                            <line
                                                x1={5}
                                                y1={22}
                                                x2={18}
                                                y2={22}
                                                stroke="white"
                                                strokeWidth={2}
                                            />
                                        </svg>
                                    </div>
                                    <div className="earn-crypto__benefit-wrapper">
                                        <div className="earn-crypto__benefit-title">
                                            Earn crypto without buying crypto
                                        </div>
                                        <div className="earn-crypto__benefit-description">
                                            Get unlimited crypto rewards on
                                            every purchase.
                                        </div>
                                    </div>
                                </div>
                                <div className="earn-crypto__benefit">
                                    <div className="earn-crypto__benefit-icon">
                                        <svg
                                            width={34}
                                            height={34}
                                            viewBox="0 0 34 34"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.49984 31.1665C7.72067 31.1665 7.05342 30.8888 6.49809 30.3335C5.94276 29.7782 5.66556 29.1114 5.66651 28.3332V14.1665C5.66651 13.3873 5.94417 12.7201 6.49951 12.1648C7.05484 11.6094 7.72162 11.3322 8.49984 11.3332H9.91651V8.49984C9.91651 6.54012 10.6074 4.86939 11.9891 3.48767C13.3708 2.10595 15.0411 1.41556 16.9998 1.4165C18.9596 1.4165 20.6303 2.10737 22.012 3.48909C23.3937 4.87081 24.0841 6.54106 24.0832 8.49984V11.3332H25.4998C26.279 11.3332 26.9463 11.6108 27.5016 12.1662C28.0569 12.7215 28.3341 13.3883 28.3332 14.1665V28.3332C28.3332 29.1123 28.0555 29.7796 27.5002 30.3349C26.9448 30.8903 26.2781 31.1674 25.4998 31.1665H8.49984ZM16.9998 24.0832C17.779 24.0832 18.4463 23.8055 19.0016 23.2502C19.5569 22.6948 19.8341 22.0281 19.8332 21.2498C19.8332 20.4707 19.5555 19.8034 19.0002 19.2481C18.4448 18.6928 17.7781 18.4156 16.9998 18.4165C16.2207 18.4165 15.5534 18.6942 14.9981 19.2495C14.4428 19.8048 14.1656 20.4716 14.1665 21.2498C14.1665 22.029 14.4442 22.6963 14.9995 23.2516C15.5548 23.8069 16.2216 24.0841 16.9998 24.0832ZM12.7498 11.3332H21.2498V8.49984C21.2498 7.31928 20.8366 6.31581 20.0103 5.48942C19.1839 4.66303 18.1804 4.24984 16.9998 4.24984C15.8193 4.24984 14.8158 4.66303 13.9894 5.48942C13.163 6.31581 12.7498 7.31928 12.7498 8.49984V11.3332Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <div className="earn-crypto__benefit-wrapper">
                                        <div className="earn-crypto__benefit-title">
                                            Pay with peace of mind
                                        </div>
                                        <div className="earn-crypto__benefit-description">
                                            Industry-leading security features
                                            include: 2 factor authentication,
                                            card freezing, pin change, and more.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="the-choice">
                <div className="the-choice__container">
                    <div className="the-choice__title">The choice is yours</div>
                    <div className="the-choice__description">
                        Select from a list of rotating crypto rewards
                    </div>
                    <div className="the-choice__box">
                        <div className="the-choice__left">
                            <div className="the-choice__benefits">
                                <div className="the-choice__benefit">
                                    <div className="the-choice__benefit-icon">
                                        <svg
                                            width={29}
                                            height={29}
                                            viewBox="0 0 29 29"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_58_15464)">
                                                <path
                                                    d="M21.2969 27.3008H20.4473V25.4883H8.55273V27.3008H7.70312C7.23352 27.3008 6.85352 27.6808 6.85352 28.1504C6.85352 28.62 7.23352 29 7.70312 29H21.2969C21.7665 29 22.1465 28.62 22.1465 28.1504C22.1465 27.6808 21.7665 27.3008 21.2969 27.3008ZM14.6203 6.81434L14.5 6.57373L14.3847 6.80437C14.1753 7.23541 13.7515 7.26916 13.7458 7.27483L13.4787 7.31465L13.662 7.4955C13.8632 7.68712 13.9623 7.9761 13.9109 8.25885L13.8686 8.5152L14.1084 8.39076C14.2294 8.32806 14.3637 8.29534 14.5 8.29534C14.6363 8.29534 14.7706 8.32806 14.8916 8.39076L15.1314 8.5152L15.0874 8.24888C15.0649 8.11455 15.0751 7.97678 15.1172 7.84723C15.1592 7.71768 15.2318 7.60016 15.3289 7.50462L15.5213 7.31465L15.2542 7.27483C15.1194 7.25445 14.9914 7.20199 14.8811 7.12185C14.7708 7.04172 14.6814 6.93625 14.6203 6.81434Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M28.1504 1.69922H23.8276C23.8347 1.4167 23.8457 1.13712 23.8457 0.849609C23.8457 0.380002 23.4657 0 22.9961 0H6.00391C5.5343 0 5.1543 0.380002 5.1543 0.849609C5.1543 1.13712 5.16529 1.41681 5.17237 1.69922H0.849609C0.380002 1.69922 0 2.07922 0 2.54883V4.70106C0 9.4442 3.79889 13.2971 8.48108 13.5463C9.45751 14.8894 10.6202 15.8865 11.9363 16.4529C11.7432 20.3296 9.68634 23.0147 9.02093 23.789H19.9777C19.3125 23.0201 17.256 20.351 17.063 16.4529C18.3794 15.8867 19.5427 14.8896 20.5192 13.5463C25.2011 13.297 29 9.44415 29 4.70106V2.54883C29 2.07922 28.62 1.69922 28.1504 1.69922ZM1.69922 4.70106V3.39844H5.25699C5.51045 6.63539 6.24689 9.47326 7.37251 11.7081C4.16405 10.9856 1.69922 8.1247 1.69922 4.70106ZM17.925 7.33202L16.8356 8.40479L17.0862 9.91319C17.1124 10.0688 17.0945 10.2286 17.0347 10.3746C16.9749 10.5206 16.8755 10.647 16.7477 10.7396C16.62 10.8324 16.4691 10.8879 16.3117 10.8998C16.1543 10.9117 15.9967 10.8795 15.8566 10.8068L14.5 10.1024L13.1435 10.8068C12.8564 10.9528 12.5129 10.9288 12.2524 10.7396C12.1246 10.647 12.0252 10.5206 11.9654 10.3746C11.9056 10.2286 11.8877 10.0688 11.9138 9.91319L12.1644 8.40479L11.0751 7.33202C10.8413 7.10177 10.7661 6.76198 10.8635 6.46417C10.9125 6.31416 11.0022 6.18071 11.1226 6.07874C11.2431 5.97677 11.3895 5.91029 11.5455 5.88672L13.0572 5.65936L13.7401 4.29285C14.0271 3.71704 14.973 3.71704 15.2601 4.29285L15.9429 5.65936L17.4546 5.88672C17.6106 5.91031 17.757 5.97681 17.8775 6.07877C17.9979 6.18074 18.0876 6.31417 18.1366 6.46417C18.1854 6.61421 18.1914 6.77486 18.154 6.92814C18.1167 7.08142 18.0374 7.22126 17.925 7.33202ZM27.3008 4.70106C27.3008 8.12459 24.836 10.9855 21.6276 11.708C22.7531 9.47314 23.4897 6.63551 23.743 3.39844H27.3008V4.70106Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_58_15464">
                                                    <rect
                                                        width={29}
                                                        height={29}
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="the-choice__benefit-wrapper">
                                        <div className="the-choice__benefit-title">
                                            Diversify your rewards
                                        </div>
                                        <div className="the-choice__benefit-description">
                                            Earn popular and up-and-coming
                                            assets like Bitcoin or The Graph.
                                        </div>
                                    </div>
                                </div>
                                <div className="the-choice__benefit">
                                    <div className="the-choice__benefit-icon">
                                        <svg
                                            width={34}
                                            height={34}
                                            viewBox="0 0 34 34"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.75 26.9165V24.0832H29.75V26.9165H12.75ZM12.75 18.4165V15.5832H29.75V18.4165H12.75ZM12.75 9.91651V7.08317H29.75V9.91651H12.75ZM7.08334 28.3332C6.30417 28.3332 5.63692 28.0555 5.08159 27.5002C4.52625 26.9448 4.24906 26.2781 4.25 25.4998C4.25 24.7207 4.52767 24.0534 5.083 23.4981C5.63834 22.9428 6.30511 22.6656 7.08334 22.6665C7.8625 22.6665 8.52975 22.9442 9.08509 23.4995C9.64042 24.0548 9.91761 24.7216 9.91667 25.4998C9.91667 26.279 9.639 26.9463 9.08367 27.5016C8.52834 28.0569 7.86156 28.3341 7.08334 28.3332ZM7.08334 19.8332C6.30417 19.8332 5.63692 19.5555 5.08159 19.0002C4.52625 18.4448 4.24906 17.7781 4.25 16.9998C4.25 16.2207 4.52767 15.5534 5.083 14.9981C5.63834 14.4428 6.30511 14.1656 7.08334 14.1665C7.8625 14.1665 8.52975 14.4442 9.08509 14.9995C9.64042 15.5548 9.91761 16.2216 9.91667 16.9998C9.91667 17.779 9.639 18.4463 9.08367 19.0016C8.52834 19.5569 7.86156 19.8341 7.08334 19.8332ZM7.08334 11.3332C6.30417 11.3332 5.63692 11.0555 5.08159 10.5002C4.52625 9.94484 4.24906 9.27806 4.25 8.49984C4.25 7.72067 4.52767 7.05342 5.083 6.49809C5.63834 5.94276 6.30511 5.66556 7.08334 5.66651C7.8625 5.66651 8.52975 5.94417 9.08509 6.49951C9.64042 7.05484 9.91761 7.72162 9.91667 8.49984C9.91667 9.27901 9.639 9.94626 9.08367 10.5016C8.52834 11.0569 7.86156 11.3341 7.08334 11.3332Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <div className="the-choice__benefit-wrapper">
                                        <div className="the-choice__benefit-title">
                                            Maximize your crypto portfolio
                                        </div>
                                        <div className="the-choice__benefit-description">
                                            Get full control of what you earn,
                                            and switch rewards at any time.
                                        </div>
                                    </div>
                                </div>
                                <div className="the-choice__benefit">
                                    <div className="the-choice__benefit-icon">
                                        <svg
                                            width={34}
                                            height={34}
                                            viewBox="0 0 34 34"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M31.0534 9.37833C30.9097 9.03217 30.6346 8.75709 30.2884 8.61333C30.1181 8.54074 29.9352 8.50224 29.7501 8.5H22.6667C22.291 8.5 21.9307 8.64926 21.665 8.91493C21.3993 9.18061 21.2501 9.54094 21.2501 9.91667C21.2501 10.2924 21.3993 10.6527 21.665 10.9184C21.9307 11.1841 22.291 11.3333 22.6667 11.3333H26.3359L18.4167 19.2525L13.7559 14.5775C13.6242 14.4447 13.4675 14.3393 13.2949 14.2674C13.1223 14.1955 12.9371 14.1585 12.7501 14.1585C12.5631 14.1585 12.3779 14.1955 12.2053 14.2674C12.0326 14.3393 11.8759 14.4447 11.7442 14.5775L3.24424 23.0775C3.11146 23.2092 3.00607 23.3659 2.93415 23.5385C2.86222 23.7112 2.8252 23.8963 2.8252 24.0833C2.8252 24.2704 2.86222 24.4555 2.93415 24.6282C3.00607 24.8008 3.11146 24.9575 3.24424 25.0892C3.37594 25.2219 3.53263 25.3273 3.70526 25.3993C3.87789 25.4712 4.06306 25.5082 4.25008 25.5082C4.43709 25.5082 4.62226 25.4712 4.79489 25.3993C4.96753 25.3273 5.12421 25.2219 5.25591 25.0892L12.7501 17.5808L17.4109 22.2558C17.5426 22.3886 17.6993 22.494 17.8719 22.5659C18.0446 22.6379 18.2297 22.6749 18.4167 22.6749C18.6038 22.6749 18.7889 22.6379 18.9616 22.5659C19.1342 22.494 19.2909 22.3886 19.4226 22.2558L28.3334 13.3308V17C28.3334 17.3757 28.4827 17.7361 28.7483 18.0017C29.014 18.2674 29.3744 18.4167 29.7501 18.4167C30.1258 18.4167 30.4861 18.2674 30.7518 18.0017C31.0175 17.7361 31.1667 17.3757 31.1667 17V9.91667C31.1645 9.73154 31.126 9.54865 31.0534 9.37833Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <div className="the-choice__benefit-wrapper">
                                        <div className="the-choice__benefit-title">
                                            Rewards that can grow
                                        </div>
                                        <div className="the-choice__benefit-description">
                                            Your crypto rewards have the
                                            potential to increase in value over
                                            time.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="the-choice__right">
                            <div className="the-choice__coins">
                                <div className="the-choice__coin">
                                    <div className="the-choice__coin-icon">
                                        <svg
                                            width={46}
                                            height={46}
                                            viewBox="0 0 46 46"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx={23}
                                                cy={23}
                                                r={23}
                                                fill="black"
                                            />
                                            <path
                                                d="M34.7337 12.7885L30.8315 14.7767L11.9881 24.3745C11.9244 23.8885 11.8924 23.3989 11.8922 22.9088C11.8974 18.9296 14.0089 15.2505 17.4421 13.2386C20.8752 11.2268 25.1169 11.1828 28.5911 13.1231L30.8246 11.985L31.1578 11.815C26.9859 8.78696 21.468 8.35482 16.8755 10.6965C12.283 13.0382 9.39207 17.7579 9.3926 22.9129C9.3926 23.2621 9.40586 23.6099 9.43237 23.9563C9.50828 24.9595 8.97407 25.91 8.0777 26.3668L6.8999 26.9673V29.7685L10.3675 28.0011L11.4904 27.428L12.5969 26.8645L32.4617 16.7428L34.6939 15.6062L39.3078 13.2547V10.4549L34.7337 12.7885Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M39.3078 16.0571L13.7254 29.0828L11.4932 30.2222L6.8999 32.5627V35.3612L11.4616 33.0371L15.3638 31.049L34.2264 21.4374C34.2901 21.9266 34.3222 22.4194 34.3224 22.9127C34.3199 26.8967 32.206 30.5809 28.7677 32.5935C25.3294 34.6061 21.082 34.6455 17.607 32.6971L17.4699 32.7697L15.0485 34.0038C19.2195 37.0319 24.7363 37.4651 29.3288 35.125C33.9212 32.7849 36.8134 28.067 36.8151 22.9127C36.8151 22.5604 36.8013 22.208 36.7753 21.8597C36.6995 20.857 37.233 19.9067 38.1286 19.4493L39.3078 18.8487V16.0571Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <div className="the-choice__coin-name">
                                        XLM
                                    </div>
                                </div>
                                <div className="the-choice__coin">
                                    <div className="the-choice__coin-icon">
                                        <svg
                                            width={46}
                                            height={46}
                                            viewBox="0 0 46 46"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M45.3118 28.5638C42.2397 40.8854 29.7585 48.384 17.4341 45.3114C5.11488 42.2396 -2.38462 29.7591 0.688894 17.4385C3.75971 5.11564 16.2408 -2.38358 28.5614 0.688239C40.8849 3.76005 48.384 16.2419 45.3115 28.564L45.3117 28.5638H45.3118Z"
                                                fill="#F7931A"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M33.143 19.7229C33.6008 16.6621 31.2703 15.0168 28.0834 13.9192L29.1173 9.77311L26.5931 9.14422L25.5867 13.1812C24.9231 13.0157 24.2417 12.8598 23.5643 12.7052L24.5781 8.64158L22.0555 8.0127L21.0211 12.1575C20.4719 12.0325 19.9326 11.9089 19.4093 11.7787L19.4123 11.7657L15.9314 10.8965L15.2599 13.5922C15.2599 13.5922 17.1326 14.0214 17.0932 14.0478C18.1153 14.3029 18.3002 14.9795 18.2695 15.5157L17.0918 20.2391C17.1622 20.257 17.2535 20.2829 17.3542 20.3233L17.2809 20.305C17.2187 20.2895 17.1539 20.2733 17.0874 20.2574L15.4368 26.8742C15.3119 27.1847 14.9948 27.6507 14.2802 27.4737C14.3055 27.5104 12.4456 27.0159 12.4456 27.0159L11.1924 29.905L14.4772 30.7237C14.8368 30.8139 15.1922 30.9065 15.5441 30.9983L15.5443 30.9983C15.7901 31.0624 16.0342 31.126 16.2768 31.188L15.2323 35.3817L17.7535 36.0106L18.7879 31.8614C19.4767 32.0484 20.1451 32.2208 20.7995 32.3834L19.7686 36.513L22.2928 37.1419L23.3372 32.9561C27.6415 33.7706 30.8779 33.4422 32.2401 29.5495C33.3378 26.4154 32.1855 24.6076 29.9211 23.4288C31.5704 23.0485 32.8127 21.9638 33.1439 19.7232L33.1431 19.7227L33.143 19.7229ZM27.375 27.8089C26.6594 30.6843 22.1585 29.4956 20.0993 28.9517C19.914 28.9027 19.7485 28.859 19.6073 28.824L20.9933 23.2681C21.1653 23.311 21.3755 23.3582 21.6137 23.4117L21.6139 23.4117C23.7439 23.8897 28.1082 24.8691 27.3751 27.8089H27.375ZM22.0413 20.833C23.7582 21.2912 27.5035 22.2907 28.1558 19.6773H28.156C28.822 17.0045 25.1822 16.1986 23.4045 15.805C23.2046 15.7608 23.0281 15.7217 22.8841 15.6858L21.6275 20.7247C21.7462 20.7542 21.8854 20.7914 22.0413 20.833Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <div className="the-choice__coin-name">
                                        BTC
                                    </div>
                                </div>
                                <div className="the-choice__coin">
                                    <div className="the-choice__coin-icon">
                                        <svg
                                            width={46}
                                            height={46}
                                            viewBox="0 0 46 46"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M23 0C35.7037 0 46 10.2984 46 23C46 35.7037 35.7037 46 23 46C10.2984 46 0 35.7027 0 23C0 10.2984 10.2984 0 23 0Z"
                                                fill="#F5AC37"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.0467 35.6786V35.7645L12.0425 35.7676V35.7821H22.019C23.1482 35.7976 24.2733 35.7076 25.3828 35.5088C26.5513 35.2801 27.6898 34.9199 28.7756 34.4314C29.2463 34.2134 29.698 33.9498 30.1537 33.684C30.269 33.6167 30.3847 33.5492 30.5009 33.4823C31.0371 33.1004 31.5504 32.6864 32.0389 32.2465C33.3762 31.0376 34.4112 29.5296 35.0581 27.8477C35.1015 27.6593 35.2858 27.5382 35.4752 27.5744H38.1921C38.4084 27.5744 38.4798 27.502 38.4798 27.2577V25.5179C38.4943 25.3512 38.4943 25.1825 38.4798 25.0159C38.4798 24.9724 38.491 24.9289 38.5022 24.8856C38.5245 24.7991 38.5467 24.7129 38.4798 24.6267H36.21C35.9358 24.6267 35.9358 24.5978 35.9358 24.3535C36.0144 23.4779 36.0144 22.5992 35.9358 21.7235C35.9213 21.4648 35.9792 21.4648 36.18 21.4648H38.1641C38.3949 21.4648 38.4808 21.4068 38.4808 21.177V18.8193C38.4737 18.6631 38.4701 18.5839 38.4286 18.5438C38.3861 18.5026 38.3035 18.5026 38.1362 18.5026H35.5632C35.3624 18.5367 35.1698 18.4012 35.1336 18.2004C34.8386 17.4293 34.4629 16.6913 34.0106 16.001C33.5552 15.3199 33.0419 14.6803 32.4726 14.0893C31.716 13.3337 30.8663 12.6775 29.943 12.1342C28.551 11.3258 27.0285 10.7597 25.4439 10.4668C24.6748 10.325 23.8975 10.2391 23.1151 10.208H12.3344C12.0467 10.208 12.0467 10.266 12.0467 10.4957V18.2438C12.0467 18.5171 11.9887 18.5171 11.7734 18.5171H8.6829C8.45312 18.5171 8.45312 18.5595 8.45312 18.7179V21.2474C8.45312 21.4772 8.52454 21.4772 8.69739 21.4772H11.8169C12.0467 21.4772 12.0467 21.5196 12.0467 21.6925V24.3949C12.0467 24.6392 11.9742 24.6392 11.7879 24.6392H8.45312V27.3706C8.45312 27.6003 8.52454 27.6003 8.69739 27.6003H11.8169C12.0467 27.6003 12.0467 27.6283 12.0467 27.8156V31.1939V32.3293V35.6786ZM31.8992 18.2708C31.924 18.335 31.924 18.4064 31.8992 18.4716H31.9686C31.9396 18.5575 31.7957 18.5865 31.7957 18.5865H15.2076C14.9344 18.5865 14.9344 18.5286 14.9344 18.3133V13.2107C14.9344 13.0233 14.9633 12.9374 15.1786 12.9374H22.8977C23.7195 12.9302 24.5392 13.0161 25.3414 13.1962C26.9312 13.5729 28.4102 14.3223 29.6543 15.3811C29.9027 15.5664 30.1242 15.7847 30.3156 16.028C30.7214 16.4306 31.0774 16.8787 31.3796 17.3652C31.5804 17.6498 31.7533 17.9531 31.8992 18.2708ZM32.5875 24.6236H23.8479H15.2801C15.1053 24.6236 15.0191 24.6236 14.9767 24.5806C14.9354 24.5387 14.9354 24.4562 14.9354 24.2935V21.7349C14.9354 21.5331 14.9934 21.4617 15.2086 21.4617H32.602C32.7893 21.4617 32.8752 21.5331 32.8752 21.7059C32.9466 22.5961 32.9466 23.4903 32.8752 24.3794C32.8618 24.6236 32.7738 24.6236 32.5875 24.6236ZM31.8992 27.614C31.655 27.587 31.4086 27.587 31.1644 27.614H15.2231C15.0078 27.614 14.9354 27.614 14.9354 27.9017V32.8904C14.9354 33.1202 14.9354 33.1782 15.2231 33.1782H22.5831C22.935 33.2051 23.2869 33.1802 23.6316 33.1068C24.6997 33.0302 25.7502 32.7983 26.7521 32.4164C27.1164 32.2901 27.4683 32.1256 27.8006 31.9279H27.901C29.6263 31.0305 31.0277 29.6208 31.9116 27.8903C31.9116 27.8903 32.012 27.6729 31.8992 27.616V27.614Z"
                                                fill="#FEFEFD"
                                            />
                                        </svg>
                                    </div>
                                    <div className="the-choice__coin-name">
                                        DAI
                                    </div>
                                </div>
                                <div className="the-choice__coin">
                                    <div className="the-choice__coin-icon">
                                        <svg
                                            width={46}
                                            height={46}
                                            viewBox="0 0 46 46"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="22.9998"
                                                cy="23.0003"
                                                r="22.2581"
                                                fill="#F2E3EE"
                                            />
                                            <circle
                                                cx={23}
                                                cy={23}
                                                r={23}
                                                fill="#D9327C"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M22.1098 12.1309C21.9243 12.2793 21.7018 12.539 21.5534 13.0212C21.405 13.5035 20.5889 15.8777 19.5502 18.8454H26.4872C25.4485 15.8777 24.6324 13.5035 24.484 13.0212C24.3356 12.539 24.1131 12.2793 23.9276 12.1309C23.7421 11.9825 23.4824 11.8712 23.0002 11.8712C22.5179 11.8712 22.2953 11.9825 22.1098 12.1309ZM11.8711 18.8453H16.5824C17.7324 15.4695 18.734 12.6502 18.8824 12.1308C19.1792 11.2405 19.6614 10.4614 20.4034 9.905C21.1453 9.34854 22.0356 9.08887 22.9631 9.08887C23.8905 9.08887 24.7808 9.31145 25.5227 9.905C26.2647 10.4614 26.7469 11.2405 27.0437 12.1308C27.2292 12.6502 28.1937 15.4324 29.3437 18.8453H34.1292C34.9082 18.8453 35.5389 19.476 35.5389 20.255C35.5389 21.034 34.9082 21.6647 34.1292 21.6647H30.3824H27.4518H18.5856H15.655H11.8711C11.0921 21.6647 10.4985 21.034 10.4985 20.255C10.4985 19.476 11.1292 18.8453 11.8711 18.8453ZM11.8711 24.4099C11.0921 24.4099 10.4985 25.0406 10.4985 25.8196C10.4985 26.5987 11.1292 27.2293 11.8711 27.2293H13.726L12.984 29.3809L12.2421 31.5325L11.9453 32.3487C11.6856 33.0906 12.0937 33.8696 12.7985 34.1293C13.5405 34.389 14.3195 33.9809 14.5792 33.2761L14.876 32.4599L15.6179 30.3083C15.9147 29.418 16.2856 28.3793 16.6937 27.2293H29.3808C29.7518 28.3422 30.1227 29.418 30.4566 30.3083L31.1985 32.4599L31.4953 33.2761C31.755 34.018 32.534 34.389 33.276 34.1293C34.0179 33.8696 34.3889 33.0906 34.1292 32.3487L33.8324 31.5325L33.0905 29.3809L32.3485 27.2293H34.2034C34.9824 27.2293 35.6131 26.5987 35.6131 25.8196C35.6131 25.0406 34.9824 24.4099 34.2034 24.4099H31.384H28.4534H17.6953H14.7647H11.8711ZM32.7566 32.7567L34.055 32.3115C34.055 32.3115 34.055 32.3115 32.7566 32.7567ZM32.7566 32.7567C31.4582 33.2019 31.4582 33.2019 31.4582 33.2019L32.7566 32.7567ZM13.2808 32.7567L14.5792 33.2019C14.5792 33.2019 14.5792 33.2019 13.2808 32.7567ZM13.2808 32.7567C11.9824 32.3115 11.9824 32.3115 11.9824 32.3115L13.2808 32.7567Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <div className="the-choice__coin-name">
                                        AMP
                                    </div>
                                </div>
                                <div className="the-choice__coin">
                                    <div className="the-choice__coin-icon">
                                        <svg
                                            width={46}
                                            height={46}
                                            viewBox="0 0 46 46"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_58_15498)">
                                                <path
                                                    d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
                                                    fill="#627EEA"
                                                />
                                                <path
                                                    d="M23.7158 5.75V18.5006L34.4928 23.3162L23.7158 5.75Z"
                                                    fill="white"
                                                    fillOpacity="0.602"
                                                />
                                                <path
                                                    d="M23.7159 5.75L12.9375 23.3162L23.7159 18.5006V5.75Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M23.7158 31.5792V40.2431L34.4999 25.3232L23.7158 31.5792Z"
                                                    fill="white"
                                                    fillOpacity="0.602"
                                                />
                                                <path
                                                    d="M23.7159 40.2431V31.5778L12.9375 25.3232L23.7159 40.2431Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M23.7158 29.5736L34.4928 23.3162L23.7158 18.5034V29.5736Z"
                                                    fill="white"
                                                    fillOpacity="0.2"
                                                />
                                                <path
                                                    d="M12.9375 23.3162L23.7159 29.5736V18.5034L12.9375 23.3162Z"
                                                    fill="white"
                                                    fillOpacity="0.602"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_58_15498">
                                                    <rect
                                                        width={46}
                                                        height={46}
                                                        rx={23}
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="the-choice__coin-name">
                                        ETH
                                    </div>
                                </div>
                                <div className="the-choice__coin">
                                    <div className="the-choice__coin-icon">
                                        <svg
                                            width={46}
                                            height={46}
                                            viewBox="0 0 46 46"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M23 46C10.35 46 0 35.6502 0 22.8855C0.115 10.2357 10.35 -0.114048 23.115 0.000949141C35.765 0.115947 46 10.3507 46 23.2305C45.885 35.7652 35.65 46 23 46Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M15.4753 34.5L18.8016 28.7399L22.1279 23L25.4339 17.2399L25.9815 16.3272L26.2249 17.2399L27.239 21.0326L26.1032 23L22.7769 28.7399L19.4709 34.5H23.4462L26.7725 28.7399L28.4965 25.7584L29.3078 28.7399L30.8492 34.5H34.4189L32.8774 28.7399L31.336 23L30.9303 21.5194L33.4048 17.2399H29.7945L29.6728 16.8139L28.4153 12.1085L28.2531 11.5H24.7848L24.7037 11.6217L21.4586 17.2399L18.1323 23L14.8263 28.7399L11.5 34.5H15.4753Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <div className="the-choice__coin-name">
                                        ALGO
                                    </div>
                                </div>
                                <div className="the-choice__coin">
                                    <div className="the-choice__coin-icon">
                                        <svg
                                            width={46}
                                            height={46}
                                            viewBox="0 0 46 46"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx={23}
                                                cy={23}
                                                r={23}
                                                fill="url(#paint0_linear_58_15490)"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M23.1909 37.9494L23.1918 37.9499H23.1909V37.9494ZM9.9668 30.2774L23.1909 37.9494V22.5845L27.6193 20.0208L23.1608 17.4287L18.7325 19.9995H18.7378V30.2419H18.7325L14.3341 27.6906V17.4438L23.1608 12.3226L32.018 17.4762L28.1111 19.7371L27.6193 20.0216L23.1918 22.5853V37.9498L23.1927 37.9489L36.4168 30.2791L36.4168 14.9308L36.4168 14.9307L36.4167 14.9307L23.206 7.2832L9.9668 14.9308V30.2774ZM36.4167 14.9307L32.018 17.4762L32.0203 17.4776L28.5915 19.4659L36.4168 14.9308L36.4167 14.9307Z"
                                                fill="white"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_58_15490"
                                                    x1={0}
                                                    y1={0}
                                                    x2={0}
                                                    y2={46}
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#FF4400" />
                                                    <stop
                                                        offset={1}
                                                        stopColor="#FFCD05"
                                                    />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="the-choice__coin-name">
                                        RLY
                                    </div>
                                </div>
                                <div className="the-choice__coin">
                                    <div className="the-choice__coin-icon">
                                        <svg
                                            width={46}
                                            height={46}
                                            viewBox="0 0 46 46"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_58_15525)">
                                                <path
                                                    d="M23.5519 15.1572H20.2656V21.6361H25.4358V24.3487H20.2656V30.8271H23.7129C24.5986 30.8271 30.9845 30.9272 30.9747 23.2896C30.9648 15.652 24.781 15.1572 23.5519 15.1572Z"
                                                    fill="#C2A633"
                                                />
                                                <path
                                                    d="M23 0C10.2973 0 0 10.2973 0 23C0 35.7027 10.2973 46 23 46C35.7027 46 46 35.7027 46 23C46 10.2973 35.7027 0 23 0ZM23.9037 35.4223H15.5742V24.3487H12.638V21.6361H15.574V10.5618H22.7229C24.414 10.5618 35.6157 10.2106 35.6157 23.1999C35.6157 36.4039 23.9039 35.4223 23.9039 35.4223H23.9037Z"
                                                    fill="#C2A633"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_58_15525">
                                                    <rect
                                                        width={46}
                                                        height={46}
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="the-choice__coin-name">
                                        DOGE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="spend-anywhere">
                <div className="spend-anywhere__container">
                    <div className="spend-anywhere__img">
                        <picture>
                            <source
                                srcSet="../assets/img/spend-anywhere/phone-with-card.webp"
                                type="image/webp"
                            />
                            <picture>
                                <source
                                    srcSet="../assets/img/spend-anywhere/phone-with-card.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="../assets/img/spend-anywhere/phone-with-card.png"
                                    alt=""
                                />
                            </picture>
                        </picture>
                    </div>
                    <div className="spend-anywhere__box-wrapper">
                        <div className="spend-anywhere__box">
                            <div className="spend-anywhere__left">
                                <div className="spend-anywhere__title">
                                    Spend Anywhere, Anytime
                                </div>
                                <div className="spend-anywhere__description">
                                    Use your Card in over 60+ million merchants
                                    worldwide
                                </div>
                                <span
                                    className="spend-anywhere__link butafor__btn"
                                    onClick={()=>setError3LVLOpened(true)}
                                  
                                >
                                    Get Started
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="card-works">
                <div className="card-works__container">
                    <div className="card-works__title">How your card works</div>
                    <div className="card-works__cards">
                        <div className="card-works__card">
                            <div className="card-works__card-number">01</div>
                            <div className="card-works__card-img">
                                <svg
                                    width={90}
                                    height={90}
                                    viewBox="0 0 90 90"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M89.5 45C89.5 69.5767 69.5767 89.5 45 89.5C20.4233 89.5 0.5 69.5767 0.5 45C0.5 20.4233 20.4233 0.5 45 0.5C69.5767 0.5 89.5 20.4233 89.5 45Z"
                                        fill="url(#paint0_linear_58_15332)"
                                        stroke="url(#paint1_linear_58_15332)"
                                    />
                                    <g clipPath="url(#clip0_58_15332)">
                                        <path
                                            d="M63.75 56.5H55.9375C54.2799 56.5 52.6902 55.8415 51.5181 54.6694C50.346 53.4973 49.6875 51.9076 49.6875 50.25C49.6875 48.5924 50.346 47.0027 51.5181 45.8306C52.6902 44.6585 54.2799 44 55.9375 44H63.75C64.1644 44 64.5618 44.1646 64.8549 44.4576C65.1479 44.7507 65.3125 45.1481 65.3125 45.5625V54.9375C65.3125 55.3519 65.1479 55.7493 64.8549 56.0424C64.5618 56.3354 64.1644 56.5 63.75 56.5ZM55.9375 47.125C55.1087 47.125 54.3138 47.4542 53.7278 48.0403C53.1417 48.6263 52.8125 49.4212 52.8125 50.25C52.8125 51.0788 53.1417 51.8737 53.7278 52.4597C54.3138 53.0458 55.1087 53.375 55.9375 53.375H62.1875V47.125H55.9375Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M57.5 64.3125H29.375C28.1318 64.3125 26.9395 63.8186 26.0604 62.9396C25.1814 62.0605 24.6875 60.8682 24.6875 59.625V33.0625C24.6875 32.6481 24.8521 32.2507 25.1451 31.9576C25.4382 31.6646 25.8356 31.5 26.25 31.5C26.6644 31.5 27.0618 31.6646 27.3549 31.9576C27.6479 32.2507 27.8125 32.6481 27.8125 33.0625V59.625C27.8125 60.0394 27.9771 60.4368 28.2701 60.7299C28.5632 61.0229 28.9606 61.1875 29.375 61.1875H57.5C57.9144 61.1875 58.3118 61.0229 58.6049 60.7299C58.8979 60.4368 59.0625 60.0394 59.0625 59.625V54.9375C59.0625 54.5231 59.2271 54.1257 59.5201 53.8326C59.8132 53.5396 60.2106 53.375 60.625 53.375C61.0394 53.375 61.4368 53.5396 61.7299 53.8326C62.0229 54.1257 62.1875 54.5231 62.1875 54.9375V59.625C62.1875 60.8682 61.6936 62.0605 60.8146 62.9396C59.9355 63.8186 58.7432 64.3125 57.5 64.3125ZM60.625 47.125C60.2106 47.125 59.8132 46.9604 59.5201 46.6674C59.2271 46.3743 59.0625 45.9769 59.0625 45.5625V40.875C59.0625 40.4606 58.8979 40.0632 58.6049 39.7701C58.3118 39.4771 57.9144 39.3125 57.5 39.3125H45C44.5856 39.3125 44.1882 39.1479 43.8951 38.8549C43.6021 38.5618 43.4375 38.1644 43.4375 37.75C43.4375 37.3356 43.6021 36.9382 43.8951 36.6451C44.1882 36.3521 44.5856 36.1875 45 36.1875H57.5C58.7432 36.1875 59.9355 36.6814 60.8146 37.5604C61.6936 38.4395 62.1875 39.6318 62.1875 40.875V45.5625C62.1875 45.9769 62.0229 46.3743 61.7299 46.6674C61.4368 46.9604 61.0394 47.125 60.625 47.125Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M55.9375 39.3125H30.9375C29.2799 39.3125 27.6902 38.654 26.5181 37.4819C25.346 36.3098 24.6875 34.7201 24.6875 33.0625C24.6875 31.4049 25.346 29.8152 26.5181 28.6431C27.6902 27.471 29.2799 26.8125 30.9375 26.8125H52.8125C54.0557 26.8125 55.248 27.3064 56.1271 28.1854C57.0061 29.0645 57.5 30.2568 57.5 31.5V37.75C57.5 38.1644 57.3354 38.5618 57.0424 38.8549C56.7493 39.1479 56.3519 39.3125 55.9375 39.3125ZM30.9375 29.9375C30.1087 29.9375 29.3138 30.2667 28.7278 30.8528C28.1417 31.4388 27.8125 32.2337 27.8125 33.0625C27.8125 33.8913 28.1417 34.6862 28.7278 35.2722C29.3138 35.8583 30.1087 36.1875 30.9375 36.1875H54.375V31.5C54.375 31.0856 54.2104 30.6882 53.9174 30.3951C53.6243 30.1021 53.2269 29.9375 52.8125 29.9375H30.9375Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_58_15332"
                                            x1={45}
                                            y1={0}
                                            x2={45}
                                            y2={90}
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#332D36" />
                                            <stop
                                                offset={1}
                                                stopColor="#332D37"
                                                stopOpacity="0.48"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_58_15332"
                                            x1={45}
                                            y1={0}
                                            x2={45}
                                            y2={90}
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#FAFAFA" />
                                            <stop
                                                offset="0.336458"
                                                stopColor="#FAFAFA"
                                                stopOpacity="0.12"
                                            />
                                            <stop
                                                offset="0.76875"
                                                stopColor="#7044EE"
                                                stopOpacity="0.19"
                                            />
                                            <stop
                                                offset={1}
                                                stopColor="#7044EE"
                                            />
                                        </linearGradient>
                                        <clipPath id="clip0_58_15332">
                                            <rect
                                                width={40}
                                                height={37}
                                                fill="white"
                                                transform="translate(25 27)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="card-works__card-description">
                                Top-up crypto to your Funding Wallet
                            </div>
                        </div>
                        <div className="card-works__card">
                            <div className="card-works__card-number">02</div>
                            <div className="card-works__card-img">
                                <svg
                                    width={90}
                                    height={90}
                                    viewBox="0 0 90 90"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx={45}
                                        cy={45}
                                        r="44.5"
                                        fill="url(#paint0_linear_58_15318)"
                                        stroke="url(#paint1_linear_58_15318)"
                                    />
                                    <g clipPath="url(#clip0_58_15318)">
                                        <path
                                            d="M67.3955 54.2914C67.3955 57.0528 65.1569 59.2914 62.3955 59.2914H27.604C24.8426 59.2914 22.604 57.0528 22.604 54.2914V36C22.604 33.2386 24.8426 31 27.604 31H62.3955C65.1569 31 67.3955 33.2386 67.3955 36V54.2914ZM25.3746 51.5208C25.3746 54.2822 27.6132 56.5208 30.3746 56.5208H59.6249C62.3863 56.5208 64.6249 54.2822 64.6249 51.5208V38.7706C64.6249 36.0092 62.3863 33.7706 59.6249 33.7706H30.3746C27.6132 33.7706 25.3746 36.0092 25.3746 38.7706V51.5208Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M39.989 50.459L41.7016 39.8587H44.4386L42.7262 50.459H39.989ZM52.6553 40.1189C52.1142 39.906 51.2623 39.6738 50.2025 39.6738C47.4964 39.6738 45.5915 41.1125 45.5749 43.1729C45.5583 44.6961 46.9351 45.5467 47.9726 46.0528C49.0393 46.572 49.3977 46.9042 49.3931 47.3682C49.386 48.0781 48.5421 48.4037 47.7549 48.4037C46.6591 48.4037 46.0767 48.2433 45.1767 47.8478L44.8243 47.679L44.4415 50.0517C45.0799 50.3469 46.2629 50.6033 47.4913 50.6167C50.3678 50.6167 52.2367 49.1955 52.2583 46.996C52.268 45.7875 51.5387 44.872 49.9591 44.1157C49.0027 43.6237 48.4153 43.2982 48.422 42.8005C48.4227 42.3601 48.9181 41.8886 49.9901 41.8886C50.886 41.8739 51.5333 42.0806 52.0391 42.2958L52.285 42.4169L52.6553 40.1189ZM59.5702 39.8694H57.4552C56.799 39.8694 56.3074 40.0571 56.0205 40.7481L51.9548 50.4631H54.8304C54.8304 50.4631 55.2995 49.1563 55.4059 48.869C55.7196 48.869 58.5129 48.8752 58.9115 48.8752C58.993 49.2443 59.2449 50.4631 59.2449 50.4631H61.7852L59.5702 39.8694ZM56.1933 46.7009C56.4203 46.0914 57.2839 43.7381 57.2839 43.7381C57.2682 43.7659 57.509 43.1239 57.6471 42.7265L57.8319 43.641C57.8319 43.641 58.3569 46.1706 58.4654 46.7008L56.1933 46.7009ZM35.0161 47.0944L33.5927 39.867L28.0762 39.8671L31.1982 42.1757L33.3857 50.4507H36.2826L40.5932 39.8674H37.6927L35.0136 47.0945"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_58_15318"
                                            x1={45}
                                            y1={0}
                                            x2={45}
                                            y2={90}
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#332D36" />
                                            <stop
                                                offset={1}
                                                stopColor="#332D37"
                                                stopOpacity="0.48"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_58_15318"
                                            x1={45}
                                            y1={0}
                                            x2={45}
                                            y2={90}
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#FAFAFA" />
                                            <stop
                                                offset="0.336458"
                                                stopColor="#FAFAFA"
                                                stopOpacity="0.12"
                                            />
                                            <stop
                                                offset="0.76875"
                                                stopColor="#7044EE"
                                                stopOpacity="0.19"
                                            />
                                            <stop
                                                offset={1}
                                                stopColor="#7044EE"
                                            />
                                        </linearGradient>
                                        <clipPath id="clip0_58_15318">
                                            <rect
                                                width={58}
                                                height={28}
                                                fill="white"
                                                transform="translate(16 31)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="card-works__card-description">
                                Spend anywhere you see the Visa logo
                            </div>
                        </div>
                        <div className="card-works__card">
                            <div className="card-works__card-number">03</div>
                            <div className="card-works__card-img">
                                <svg
                                    width={90}
                                    height={90}
                                    viewBox="0 0 90 90"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx={45}
                                        cy={45}
                                        r="44.5"
                                        fill="url(#paint0_linear_58_15304)"
                                        stroke="url(#paint1_linear_58_15304)"
                                    />
                                    <g clipPath="url(#clip0_58_15304)">
                                        <path
                                            d="M57.9603 31.1822L55.6446 34.157C60.6362 38.041 63.126 44.3291 62.1433 50.5691C61.4234 55.1479 58.9631 59.1723 55.2161 61.9017C51.4679 64.6295 46.8829 65.7383 42.3041 65.0147C32.8519 63.5264 26.3709 54.6259 27.8567 45.173C28.5765 40.5937 31.0376 36.5691 34.7851 33.8404C38.0569 31.4586 41.9667 30.3147 45.9537 30.5416L42.695 33.9603L45.1124 36.2673L50.2565 30.8668L50.2578 30.8688L52.5623 28.4489L50.1466 26.1444L50.1453 26.1451L44.7468 21L42.4406 23.42L45.9581 26.7703C41.1764 26.5442 36.4928 27.9351 32.5668 30.7938C28.0055 34.1149 25.0106 39.0133 24.1337 44.5879C22.3249 56.0932 30.2127 66.9281 41.718 68.7387C42.8187 68.9125 43.9314 68.9999 45.0458 69C49.4775 69 53.7835 67.6071 57.4344 64.9483C61.9961 61.6267 64.9905 56.7283 65.8675 51.1549C67.0637 43.5614 64.0336 35.9079 57.9603 31.1822Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M47.0698 58.6456V58.6448L47.07 56.4756C49.6421 56.1885 52.1445 54.5637 52.1445 51.4791C52.1445 47.288 48.2474 46.8074 45.4009 46.4569C43.5809 46.2394 42.188 45.987 42.188 44.8844C42.188 43.3515 44.3486 43.1863 45.2778 43.1863C46.6569 43.1863 48.1283 43.8345 48.6282 44.6619L48.7734 44.9024L51.6325 43.5794L51.4911 43.291C50.4256 41.1129 48.5162 40.4827 47.0693 40.2283V38.3184H43.7214V40.2201C40.6046 40.6799 38.7537 42.4097 38.7537 44.8844C38.7537 48.9197 42.4177 49.3292 45.0908 49.6289C47.4731 49.9098 48.5821 50.4984 48.5821 51.4791C48.5821 53.3526 45.9875 53.499 45.1921 53.499C43.4217 53.499 41.7146 52.6156 41.2209 51.4427L41.0983 51.1531L37.9922 52.47L38.116 52.7596C39.0358 54.9125 41.0205 56.2615 43.7219 56.5806V58.6456H47.0698Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_58_15304"
                                            x1={45}
                                            y1={0}
                                            x2={45}
                                            y2={90}
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#332D36" />
                                            <stop
                                                offset={1}
                                                stopColor="#332D37"
                                                stopOpacity="0.48"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_58_15304"
                                            x1={45}
                                            y1={0}
                                            x2={45}
                                            y2={90}
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#FAFAFA" />
                                            <stop
                                                offset="0.336458"
                                                stopColor="#FAFAFA"
                                                stopOpacity="0.12"
                                            />
                                            <stop
                                                offset="0.76875"
                                                stopColor="#7044EE"
                                                stopOpacity="0.19"
                                            />
                                            <stop
                                                offset={1}
                                                stopColor="#7044EE"
                                            />
                                        </linearGradient>
                                        <clipPath id="clip0_58_15304">
                                            <rect
                                                width={48}
                                                height={48}
                                                fill="white"
                                                transform="translate(21 21)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="card-works__card-description">
                                Earn cashback
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faqs faq-card">
                <div className="faqs__container">
                    <div className="faqs__title">FAQ</div>
                    <div className="faqs__questions">
                        <div className="accordion__container">
                            <div
                                className="accordion__item"
                                onClick={() =>
                                    chooseTab("q", !accordionProps.q)
                                }
                            >
                                <div
                                    className={`accordion__item-title ${
                                        accordionProps.q
                                            ? "accordion__item-title-active"
                                            : ""
                                    }`}
                                >
                                    How can I qualify for a {projectName}Card?
                                    <div className="accordion__item-arrow">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M23.3335 9.33268L14.0002 18.666L4.66683 9.33268"
                                                stroke="#929DA6"
                                                strokeWidth="1.35393"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className={`accordion__item-body accordion__item-body-one ${
                                        accordionProps.q
                                            ? "accordion__item-active"
                                            : ""
                                    }`}
                                    style={
                                        accordionProps.q
                                            ? {
                                                  transition:
                                                      "height 500ms ease 0s",
                                                  height: "74px",
                                              }
                                            : {}
                                    }
                                >
                                    <div className="content">
                                        Register a {projectName} account.
                                    </div>
                                    <div className="content">
                                        Complete identity verification and
                                        provide proof that you are a resident of
                                        a {projectName}Card supported country/region.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion__item"   onClick={() =>
                                    chooseTab("w", !accordionProps.w)
                                }>
                                <div className={`accordion__item-title ${
                                        accordionProps.w
                                            ? "accordion__item-title-active"
                                            : ""
                                    }`}>
                                    What crypto can I spend with {projectName}Card?
                                    <div className="accordion__item-arrow">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M23.3335 9.33268L14.0002 18.666L4.66683 9.33268"
                                                stroke="#929DA6"
                                                strokeWidth="1.35393"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className={`accordion__item-body accordion__item-body-one ${
                                        accordionProps.w
                                            ? "accordion__item-active"
                                            : ""
                                    }`}
                                    style={
                                        accordionProps.w
                                            ? {
                                                  transition:
                                                      "height 500ms ease 0s",
                                                  height: "46px",
                                              }
                                            : {}
                                    }
                                >
                                    <div className="content">
                                        {projectName}Card currently supports USDT,
                                        BTC, and USDC, with more crypto to
                                        follow soon.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion__item" onClick={() =>
                                    chooseTab("e", !accordionProps.e)
                                }>
                                <div className={`accordion__item-title ${
                                        accordionProps.e
                                            ? "accordion__item-title-active"
                                            : ""
                                    }`}>
                                    Which countries/regions does {projectName}Card
                                    support?
                                    <div className="accordion__item-arrow">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M23.3335 9.33268L14.0002 18.666L4.66683 9.33268"
                                                stroke="#929DA6"
                                                strokeWidth="1.35393"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className={`accordion__item-body accordion__item-body-one ${
                                        accordionProps.e
                                            ? "accordion__item-active"
                                            : ""
                                    }`}
                                    style={
                                        accordionProps.e
                                            ? {
                                                  transition:
                                                      "height 500ms ease 0s",
                                                  height: "100px",
                                              }
                                            : {}
                                    }
                                >
                                    <div className="content">
                                        {projectName}Card is currently supported in
                                        Austria, Belgium, Bulgaria, Croatia,
                                        Republic of Cyprus, Czech Republic,
                                        Denmark, Estonia, Finland, France,
                                        Germany, Greece, Hungary, Ireland,
                                        Italy, Latvia, Lithuania, Luxembourg,
                                        Malta, Netherlands, Poland, Portugal,
                                        Romania, Slovakia, Slovenia, Spain,
                                        Sweden, Iceland, Liechtenstein, Norway,
                                        and United Kingdom. {projectName}Card can be
                                        used worldwide.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion__item" onClick={() =>
                                    chooseTab("r", !accordionProps.r)
                                }>
                                <div className={`accordion__item-title ${
                                        accordionProps.r
                                            ? "accordion__item-title-active"
                                            : ""
                                    }`}>
                                    Will I be charged annual or transaction
                                    fees?
                                    <div className="accordion__item-arrow">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M23.3335 9.33268L14.0002 18.666L4.66683 9.33268"
                                                stroke="#929DA6"
                                                strokeWidth="1.35393"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className={`accordion__item-body accordion__item-body-one ${
                                        accordionProps.r
                                            ? "accordion__item-active"
                                            : ""
                                    }`}
                                    style={
                                        accordionProps.r
                                            ? {
                                                  transition:
                                                      "height 500ms ease 0s",
                                                  height: "73px",
                                              }
                                            : {}
                                    }
                                >
                                    <div className="content">
                                        {projectName}Card is completely free and does
                                        not have any annual fees. You may be
                                        charged a trading fee for crypto to fiat
                                        conversion when spending with a
                                        {projectName}Card.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CardsStatic;
