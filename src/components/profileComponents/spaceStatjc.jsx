import React, { useState } from "react";
import stateSaver from "../../mobx/stateSaver";
import { projectName } from "../../App";
const SpaceStatic = () => {
    const { setError3LVLOpened } = stateSaver;
    const [accordionFirstOpened, setAccordionFirstOpened] = useState(false);
    const [accordionSecondOpened, setAccordionoSecondOpened] = useState(false);
    const [accordionThirdOpened, setAccordionThirdOpened] = useState(false);
    return (
        <div className="other">
 <main className="main bg-white webp ">
            <section className="traveller-home">
                <div className="traveller-home__container">
                    <div className="traveller-home__box">
                        <div className="traveller-home__left">
                            <div className="traveller-home__title">
                                {projectName} Space Traveller Earn with your referral
                                code!
                            </div>
                            <div className="traveller-home__description">
                                Up to 60% commission waiting for you to unlock!
                            </div>
                            <span
                                className="traveller-home__link butafor__btn"
                               
                                onClick={() => setError3LVLOpened(true)}
                            >
                                Join us now!
                            </span>
                        </div>
                        <div className="traveller-home__right">
                            <div className="traveller-home__img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/traveller-home/character.webp"
                                        type="image/webp"
                                    />
                                </picture>

                                <picture>
                                    <source
                                        srcSet="../assets/img/traveller-home/character.webp"
                                        type="image/webp"
                                    />
                                    <img
                                        src="../assets/img/traveller-home/character.png"
                                        alt=""
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="traveller-home__slider-wrapper">
                    <div className="traveller-home__slider">
                        <div
                            className="traveller-home__cards-track"
                            id="track-one"
                            style={{ columnGap: "44px", "-x": "-1593px" }}
                        >
                            <span className="traveller-home__card" >
                                <div className="traveller-home__card-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/traveller-home/user.webp"
                                            type="image/webp"
                                        />
                                    </picture>

                                    <picture>
                                        <source
                                            srcSet="../assets/img/traveller-home/user.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/traveller-home/user.png"
                                            alt=""
                                        />
                                    </picture>
                                </div>
                                <div className="traveller-home__card-email">
                                    7K***dL@pr***om
                                </div>
                                <div className="traveller-home__card-earned">
                                    Earned <span>$1,356.66</span>
                                </div>
                            </span>
                            <span className="traveller-home__card" >
                                <div className="traveller-home__card-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/traveller-home/user.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/traveller-home/user.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/traveller-home/user.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="traveller-home__card-email">
                                    ng***vt@gm***om
                                </div>
                                <div className="traveller-home__card-earned">
                                    Earned <span>$359.06</span>
                                </div>
                            </span>
                            <span className="traveller-home__card" >
                                <div className="traveller-home__card-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/traveller-home/user.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/traveller-home/user.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/traveller-home/user.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="traveller-home__card-email">
                                    na***sn@gm***om
                                </div>
                                <div className="traveller-home__card-earned">
                                    Earned <span>$307.83</span>
                                </div>
                            </span>
                            <span className="traveller-home__card" >
                                <div className="traveller-home__card-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/traveller-home/user.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/traveller-home/user.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/traveller-home/user.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="traveller-home__card-email">
                                    da***a1@gm***om
                                </div>
                                <div className="traveller-home__card-earned">
                                    Earned <span>$250.46</span>
                                </div>
                            </span>
                            <span className="traveller-home__card">
                                <div className="traveller-home__card-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/traveller-home/user.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/traveller-home/user.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/traveller-home/user.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="traveller-home__card-email">
                                    7K***dL@pr***om
                                </div>
                                <div className="traveller-home__card-earned">
                                    Earned <span>$1,356.66</span>
                                </div>
                            </span>
                            {/*duplicated elements for loop animation (not delete)*/}
                            <span className="traveller-home__card" >
                                <div className="traveller-home__card-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/traveller-home/user.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/traveller-home/user.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/traveller-home/user.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="traveller-home__card-email">
                                    7K***dL@pr***om
                                </div>
                                <div className="traveller-home__card-earned">
                                    Earned <span>$1,356.66</span>
                                </div>
                            </span>
                            <span className="traveller-home__card" >
                                <div className="traveller-home__card-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/traveller-home/user.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/traveller-home/user.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/traveller-home/user.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="traveller-home__card-email">
                                    ng***vt@gm***om
                                </div>
                                <div className="traveller-home__card-earned">
                                    Earned <span>$359.06</span>
                                </div>
                            </span>
                            <span className="traveller-home__card">
                                <div className="traveller-home__card-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/traveller-home/user.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/traveller-home/user.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/traveller-home/user.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="traveller-home__card-email">
                                    na***sn@gm***om
                                </div>
                                <div className="traveller-home__card-earned">
                                    Earned <span>$307.83</span>
                                </div>
                            </span>
                            <span className="traveller-home__card" >
                                <div className="traveller-home__card-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/traveller-home/user.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/traveller-home/user.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/traveller-home/user.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="traveller-home__card-email">
                                    da***a1@gm***om
                                </div>
                                <div className="traveller-home__card-earned">
                                    Earned <span>$250.46</span>
                                </div>
                            </span>
                            <span className="traveller-home__card" >
                                <div className="traveller-home__card-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/traveller-home/user.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/traveller-home/user.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/traveller-home/user.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                                <div className="traveller-home__card-email">
                                    7K***dL@pr***om
                                </div>
                                <div className="traveller-home__card-earned">
                                    Earned <span>$1,356.66</span>
                                </div>
                            </span>
                            {/*duplicated elements for loop animation (not delete)*/}
                        </div>
                    </div>
                </div>
            </section>
            <section className="get-commission">
                <div className="get-commission__container">
                    <div className="get-commission__title">
                        Get commission easily
                    </div>
                    <div className="get-commission__steps">
                        <div className="get-commission__step get-commission__step-share">
                            <div className="get-commission__step-img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/get-commission/share.webp"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="../assets/img/get-commission/share.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/get-commission/share.png"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                            </div>
                            <div className="get-commission__step-title">
                                Share your code
                            </div>
                            <div className="get-commission__step-description">
                                Share your referral code/link to your friends or
                                the community.
                            </div>
                        </div>
                        <div className="get-commission__step get-commission__step-sign">
                            <div className="get-commission__step-img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/get-commission/sign.webp"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="../assets/img/get-commission/sign.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/get-commission/sign.png"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                            </div>
                            <div className="get-commission__step-title">
                                Referral sign up for trading
                            </div>
                            <div className="get-commission__step-description">
                                Earn from every sign up through your referral
                                for trading.
                            </div>
                        </div>
                        <div className="get-commission__step get-commission__step-earning">
                            <div className="get-commission__step-img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/get-commission/earning.webp"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="../assets/img/get-commission/earning.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/get-commission/earning.png"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                            </div>
                            <div className="get-commission__step-title">
                                Start earning
                            </div>
                            <div className="get-commission__step-description">
                                Up to 60% commission waiting for you to unlock
                                while your friends enjoy 10% rebate.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="traveller-tiers">
                <div className="traveller-tiers__container">
                    <div className="traveller-tiers__title">
                        Space Traveller Tiers
                    </div>
                    <div className="traveller-tiers__cards">
                        <div className="traveller-tiers__card">
                            <div className="traveller-tiers__card-title">
                                Rocket Scientist
                            </div>
                            <div className="traveller-tiers__card-img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/traveller-tiers/one.webp"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="../assets/img/traveller-tiers/one.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/traveller-tiers/one.png"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                                <div className="traveller-tiers__card-line">
                                    <svg
                                        width={134}
                                        height={10}
                                        viewBox="0 0 134 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M67 10C104.003 10 134 7.76142 134 5C134 2.23858 104.003 0 67 0C29.9969 0 0 2.23858 0 5C0 7.76142 29.9969 10 67 10Z"
                                            fill="url(#paint0_linear_121_14895)"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_121_14895"
                                                x1="6.9913"
                                                y1={10}
                                                x2="128.174"
                                                y2={10}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="white" />
                                                <stop
                                                    offset="0.548077"
                                                    stopColor="#BCBCBC"
                                                />
                                                <stop
                                                    offset={1}
                                                    stopColor="white"
                                                    stopOpacity={0}
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="traveller-tiers__card-table">
                                <div className="traveller-tiers__card-key">
                                    Commission
                                </div>
                                <div className="traveller-tiers__card-value">
                                    <span>20%</span>
                                </div>
                            </div>
                            <div className="traveller-tiers__card-table">
                                <div className="traveller-tiers__card-key">
                                    Referrals
                                </div>
                                <div className="traveller-tiers__card-value">
                                    ≥0
                                </div>
                            </div>
                            <div className="traveller-tiers__card-table">
                                <div className="traveller-tiers__card-key">
                                    Activation Rate
                                </div>
                                <div className="traveller-tiers__card-value">
                                    ≥0%
                                </div>
                            </div>
                        </div>
                        <div className="traveller-tiers__card">
                            <div className="traveller-tiers__card-title">
                                Moon Explorer
                            </div>
                            <div className="traveller-tiers__card-img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/traveller-tiers/two.webp"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="../assets/img/traveller-tiers/two.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/traveller-tiers/two.png"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                                <div className="traveller-tiers__card-line">
                                    <svg
                                        width={134}
                                        height={10}
                                        viewBox="0 0 134 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M67 10C104.003 10 134 7.76142 134 5C134 2.23858 104.003 0 67 0C29.9969 0 0 2.23858 0 5C0 7.76142 29.9969 10 67 10Z"
                                            fill="url(#paint0_linear_121_14895)"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_121_14895"
                                                x1="6.9913"
                                                y1={10}
                                                x2="128.174"
                                                y2={10}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="white" />
                                                <stop
                                                    offset="0.548077"
                                                    stopColor="#BCBCBC"
                                                />
                                                <stop
                                                    offset={1}
                                                    stopColor="white"
                                                    stopOpacity={0}
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="traveller-tiers__card-table">
                                <div className="traveller-tiers__card-key">
                                    Commission
                                </div>
                                <div className="traveller-tiers__card-value">
                                    <span>30%</span>
                                </div>
                            </div>
                            <div className="traveller-tiers__card-table">
                                <div className="traveller-tiers__card-key">
                                    Referrals
                                </div>
                                <div className="traveller-tiers__card-value">
                                    ≥5
                                </div>
                            </div>
                            <div className="traveller-tiers__card-table">
                                <div className="traveller-tiers__card-key">
                                    Activation Rate
                                </div>
                                <div className="traveller-tiers__card-value">
                                    ≥20%
                                </div>
                            </div>
                        </div>
                        <div className="traveller-tiers__card">
                            <div className="traveller-tiers__card-title">
                                Mars Adventurer
                            </div>
                            <div className="traveller-tiers__card-img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/traveller-tiers/three.webp"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="../assets/img/traveller-tiers/three.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/traveller-tiers/three.png"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                                <div className="traveller-tiers__card-line">
                                    <svg
                                        width={134}
                                        height={10}
                                        viewBox="0 0 134 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M67 10C104.003 10 134 7.76142 134 5C134 2.23858 104.003 0 67 0C29.9969 0 0 2.23858 0 5C0 7.76142 29.9969 10 67 10Z"
                                            fill="url(#paint0_linear_121_14895)"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_121_14895"
                                                x1="6.9913"
                                                y1={10}
                                                x2="128.174"
                                                y2={10}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="white" />
                                                <stop
                                                    offset="0.548077"
                                                    stopColor="#BCBCBC"
                                                />
                                                <stop
                                                    offset={1}
                                                    stopColor="white"
                                                    stopOpacity={0}
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="traveller-tiers__card-table">
                                <div className="traveller-tiers__card-key">
                                    Commission
                                </div>
                                <div className="traveller-tiers__card-value">
                                    <span>50%</span>
                                </div>
                            </div>
                            <div className="traveller-tiers__card-table">
                                <div className="traveller-tiers__card-key">
                                    Referrals
                                </div>
                                <div className="traveller-tiers__card-value">
                                    ≥20
                                </div>
                            </div>
                            <div className="traveller-tiers__card-table">
                                <div className="traveller-tiers__card-key">
                                    Activation Rate
                                </div>
                                <div className="traveller-tiers__card-value">
                                    ≥20%
                                </div>
                            </div>
                        </div>
                        <div className="traveller-tiers__card">
                            <div className="traveller-tiers__card-title">
                                Sun Captain
                            </div>
                            <div className="traveller-tiers__card-img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/traveller-tiers/four.webp"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="../assets/img/traveller-tiers/four.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/traveller-tiers/four.png"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                                <div className="traveller-tiers__card-line">
                                    <svg
                                        width={134}
                                        height={10}
                                        viewBox="0 0 134 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M67 10C104.003 10 134 7.76142 134 5C134 2.23858 104.003 0 67 0C29.9969 0 0 2.23858 0 5C0 7.76142 29.9969 10 67 10Z"
                                            fill="url(#paint0_linear_121_14895)"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_121_14895"
                                                x1="6.9913"
                                                y1={10}
                                                x2="128.174"
                                                y2={10}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="white" />
                                                <stop
                                                    offset="0.548077"
                                                    stopColor="#BCBCBC"
                                                />
                                                <stop
                                                    offset={1}
                                                    stopColor="white"
                                                    stopOpacity={0}
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="traveller-tiers__card-table">
                                <div className="traveller-tiers__card-key">
                                    Commission
                                </div>
                                <div className="traveller-tiers__card-value">
                                    <span>50+10%</span>
                                </div>
                            </div>
                            <div className="traveller-tiers__card-table">
                                <div className="traveller-tiers__card-key">
                                    Referrals
                                </div>
                                <div className="traveller-tiers__card-value">
                                    ≥50
                                </div>
                            </div>
                            <div className="traveller-tiers__card-table">
                                <div className="traveller-tiers__card-key">
                                    Activation Rate
                                </div>
                                <div className="traveller-tiers__card-value">
                                    ≥20%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="traveller-tiers__requirements">
                        <div className="traveller-tiers__requirements-title">
                            Requirements:
                        </div>
                        <ul>
                            <li>
                                In order to get a higher commission better than
                                20%, please fill out Space Traveller Application
                                Form to apply.
                            </li>
                            <li>
                                Every {projectName} user, KOLs, bloggers, community
                                managers and influencers are welcomed to promote
                                {projectName} and become a Space Traveller.
                            </li>
                            <li>
                                Activation rate = number of activated referrals
                                / total number of referrals. Activated referrals
                                are those who trade more than $50 on {projectName}.
                            </li>
                            <li>
                            {projectName} will evaluate your performance and
                                adjust your Space Traveller tier every month.
                                The referral data will be reset monthly.
                            </li>
                            <li>
                                Sun Captains enjoy 50% commission from the
                                referrals’ trading fee and 10% commission from
                                sub-referrals’.
                            </li>
                        </ul>
                    </div>
                    <div className="traveller-tiers__link-wrapper">
                        <span
                            className="traveller-tiers__link butafor__btn"
                           
                            onClick={() => setError3LVLOpened(true)}
                        >
                            View more &gt;
                        </span>
                    </div>
                </div>
            </section>
            <section className="more-benefits">
                <div className="more-benefits__container">
                    <div className="more-benefits__title">More Benefits</div>
                    <div className="more-benefits__cards">
                        <div className="more-benefits__card">
                            <div className="more-benefits__card-wrapper">
                                <div className="more-benefits__card-title">
                                    Exclusive Bonus
                                </div>
                                <div className="more-benefits__card-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/more-benefits/bonus.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/more-benefits/bonus.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/more-benefits/bonus.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                            </div>
                            <div className="more-benefits__card-description">
                                Besides referral commission, {projectName} will hold
                                exclusive events for Space Travellers and you
                                could win NFT, Futures trial fund and more.
                            </div>
                        </div>
                        <div className="more-benefits__card">
                            <div className="more-benefits__card-wrapper">
                                <div className="more-benefits__card-title">
                                    Special Events
                                </div>
                                <div className="more-benefits__card-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/more-benefits/events.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/more-benefits/events.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/more-benefits/events.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                            </div>
                            <div className="more-benefits__card-description">
                                Space Travellers could gain exclusive access to
                                online and offline events and crypto industry
                                lectures hosted by {projectName}.
                            </div>
                        </div>
                        <div className="more-benefits__card">
                            <div className="more-benefits__card-wrapper">
                                <div className="more-benefits__card-title">
                                    Build {projectName} Together
                                </div>
                                <div className="more-benefits__card-img">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/more-benefits/build.webp"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/more-benefits/build.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="../assets/img/more-benefits/build.png"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                </div>
                            </div>
                            <div className="more-benefits__card-description">
                                Space Traveller could help us build and grow the
                                {projectName} ecosystem by providing direct input for
                                our products and marketing initiatives.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faqs">
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
                                    What’s the benefits for the invitees as new
                                    users?
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
                                <div className={`accordion__item-body accordion__item-body-one ${
                                        accordionFirstOpened
                                            ? "accordion__item-active"
                                            : ""
                                    }`}
                                  
                                    style={
                                        accordionFirstOpened?
                                       { transition: "height 500ms ease 0s",
                                        height: " 62px",}:{}
                                    }>
                                    <div className="content">
                                    {projectName} welcome the new users with 10%
                                        fee rebates for 60 days, which doesn’t
                                        affect inviters’ commission.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion__item">
                                <div className={`accordion__item-title ${
                                        accordionSecondOpened
                                            ? " accordion__item-title-active"
                                            : ""
                                    }`}
                                    onMouseUp={() =>
                                        setAccordionoSecondOpened(
                                            !accordionSecondOpened
                                        )
                                    }>
                                    Where can I see my referral rewards? How
                                    often will the rewards be distributed?
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
                                <div className={`accordion__item-body accordion__item-body-one ${
                                        accordionSecondOpened
                                            ? "accordion__item-active"
                                            : ""
                                    }`}
                                  
                                    style={
                                        accordionSecondOpened?
                                       { transition: "height 500ms ease 0s",
                                        height: " 86px",}:{}
                                    }>
                                    <div className="content">
                                        Rewards will be distributed to referers
                                        in USDT on a daily basis based all
                                        trades referrals made the day prior (UTC
                                        time).
                                    </div>
                                </div>
                            </div>
                            <div className="accordion__item">
                                <div className={`accordion__item-title ${
                                        accordionThirdOpened
                                            ? " accordion__item-title-active"
                                            : ""
                                    }`}
                                    onMouseUp={() =>
                                        setAccordionThirdOpened(
                                            !accordionThirdOpened
                                        )
                                    }>
                                    How many times can a referral code be used?
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
                                <div className={`accordion__item-body accordion__item-body-one ${
                                        accordionThirdOpened
                                            ? "accordion__item-active"
                                            : ""
                                    }`}
                                  
                                    style={
                                        accordionThirdOpened?
                                       { transition: "height 500ms ease 0s",height:"120px"
                                       }:{}
                                    }>
                                    <div className="content">
                                        You can share your code as many times as
                                        you like, and every person who signs up
                                        using your code will be another person
                                        you can earn from, while a new user can
                                        only be invited by one code.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faqs__link-wrapper">
                        <span
                            className="faqs__link butafor__btn"
                           
                            onClick={() => setError3LVLOpened(true)}
                        >
                            View more &gt;
                        </span>
                    </div>
                </div>
            </section>
            <section className="traveller-banner">
                <div className="traveller-banner__container">
                    <div className="traveller-banner__box">
                        <div className="traveller-banner__wrapper">
                            <div className="traveller-banner__title">
                            {projectName} Space Traveller
                            </div>
                            <div className="traveller-banner__description">
                                Up to <span>60% commission</span> waiting for
                                you to unlock!
                            </div>
                        </div>
                        <span
                            className="traveller-banner__link butafor__btn"
                            
                            onClick={() => setError3LVLOpened(true)}
                        >
                            Join us now!
                        </span>
                    </div>
                </div>
            </section>
        </main>
        </div>
       
    );
};

export default SpaceStatic;
