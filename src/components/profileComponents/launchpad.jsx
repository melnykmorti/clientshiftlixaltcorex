import React, { useState } from "react";
import stateSaver from "../../mobx/stateSaver";
import { projectName } from "../../App";

const Launchpad = () => {
    const { setError3LVLOpened } = stateSaver;
    const [accordionFirstOpened, setAccordionFirstOpened] = useState(false);
    const [accordionSecondOpened, setAccordionoSecondOpened] = useState(false);
    const [accordionThirdOpened, setAccordionThirdOpened] = useState(false);
    return (
        <main className="main bg-white padding-null webp other">
            <section className="launchpad-home">
                <div className="launchpad-home__box">
                    <div className="launchpad-home__container">
                        <div className="launchpad-home__left">
                            <img src="/assets/img/other/launchpadbg.svg" />
                        </div>
                        <div className="launchpad-home__right">
                            <div className="launchpad-home__slogan">
                                Discover new, high-quality projects around the
                                world
                            </div>
                            <div className="launchpad-home__title">
                                {projectName} <span>Launchpad</span>
                            </div>
                            <div className="launchpad-home__description">
                                Launchpad offers our users easy access to new,
                                high-quality crypto projects. Invest in new gems
                                now!
                            </div>
                            <div className="launchpad-home__stats">
                                <div className="launchpad-home__stat">
                                    <div className="launchpad-home__stat-value">
                                        1,508,424
                                    </div>
                                    <div className="launchpad-home__stat-title">
                                        Followers
                                    </div>
                                </div>
                                <div className="launchpad-home__stat">
                                    <div className="launchpad-home__stat-value">
                                        $ 122,424,470,150
                                    </div>
                                    <div className="launchpad-home__stat-title">
                                        Amount
                                    </div>
                                </div>
                                <div className="launchpad-home__stat">
                                    <div className="launchpad-home__stat-value">
                                        32
                                    </div>
                                    <div className="launchpad-home__stat-title">
                                        Projects
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="previous-projects">
                <div className="previous-projects__container">
                    <div className="previous-projects__title">
                        Previous projects
                    </div>
                    <div className="previous-projects__items">
                        <div className="previous-projects__item">
                            <div className="previous-projects__item-tags">
                                <div className="previous-projects__item-tag">
                                    On Sale
                                </div>
                            </div>
                            <div className="previous-projects__item-img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/previous-projects/ORB.webp"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="../assets/img/previous-projects/ORB.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/previous-projects/ORB.jpg"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                            </div>
                            <div className="previous-projects__item-title">
                                ORB <span>KlayCity</span>
                            </div>
                            <div className="previous-projects__item-description">
                                KlayCity is a decentralized P2E (Play to Earn)
                                game built on the Klaytn Blockchain. $ORB Tokens
                                can be used for exploring new Districts, or to
                                upgrade existing Districts, and increase the
                            </div>
                            <div className="previous-projects__item-table">
                                <div className="previous-projects__item-key">
                                    Highest Historical Yield
                                </div>
                                <div className="previous-projects__item-value percent">
                                    +1,864%
                                </div>
                            </div>
                            <div className="previous-projects__item-table">
                                <div className="previous-projects__item-key">
                                    Total reward
                                </div>
                                <div className="previous-projects__item-value">
                                    10,000,000 ORB
                                </div>
                            </div>
                        </div>
                        <div className="previous-projects__item">
                            <div className="previous-projects__item-tags">
                                <div className="previous-projects__item-tag">
                                    On Sale
                                </div>
                                <div className="previous-projects__item-tag">
                                    Regional Exclusive
                                </div>
                            </div>
                            <div className="previous-projects__item-img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/previous-projects/GARI.webp"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="../assets/img/previous-projects/GARI.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/previous-projects/GARI.jpg"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                            </div>
                            <div className="previous-projects__item-title">
                                GARI <span>Gari Token</span>
                            </div>
                            <div className="previous-projects__item-description">
                                Chingari is the fastest growing video sharing
                                app in India, combining the essences of
                                blockchain and DAO, $Gari token will empower the
                                creators and viewers through its social tools,
                            </div>
                            <div className="previous-projects__item-table">
                                <div className="previous-projects__item-key">
                                    Highest Historical Yield
                                </div>
                                <div className="previous-projects__item-value percent">
                                    +491%
                                </div>
                            </div>
                            <div className="previous-projects__item-table">
                                <div className="previous-projects__item-key">
                                    Total reward
                                </div>
                                <div className="previous-projects__item-value">
                                    5,000,000 GARI
                                </div>
                            </div>
                        </div>
                        <div className="previous-projects__item">
                            <div className="previous-projects__item-tags">
                                <div className="previous-projects__item-tag">
                                    Mining
                                </div>
                            </div>
                            <div className="previous-projects__item-img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/previous-projects/RAY.webp"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="../assets/img/previous-projects/RAY.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/previous-projects/RAY.jpg"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                            </div>
                            <div className="previous-projects__item-title">
                                RAY <span>Raydium</span>
                            </div>
                            <div className="previous-projects__item-description">
                                Raydium is an automated market maker (AMM) built
                                on the Solana blockchain which leverages the
                                central order book of the Serum decentralized
                                exchange (DEX) to enable lightning-
                            </div>
                            <div className="previous-projects__item-table">
                                <div className="previous-projects__item-key">
                                    Highest Historical APY
                                </div>
                                <div className="previous-projects__item-value percent">
                                    +503%
                                </div>
                            </div>
                            <div className="previous-projects__item-table">
                                <div className="previous-projects__item-key">
                                    Total reward
                                </div>
                                <div className="previous-projects__item-value">
                                    80,000 RAY
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="previous-projects__link-wrapper">
                        <a
                            className="previous-projects__link butafor__btn"
                            href="#"
                            onClick={() => setError3LVLOpened(true)}
                        >
                            More projects
                        </a>
                    </div>
                </div>
            </section>
            <section className="how-to-start">
                <h1 className="how-to-start_header">How To Start?</h1>
                <h2 className="how-to-start_undertitle">
                    See how to join the community of early investors and ignite
                    your journey through ShiftLix Launchpad
                </h2>
                <div className="how-to-start_steps">
                    <div className="how-to-start_steps-container">
                        <div className="how-to-start_steps-step">
                            <div className="how-to-start_steps-step_header">
                                Step 1
                            </div>
                            <div className="how-to-start_steps-step_title">
                                Start of Voting
                            </div>
                            <div className="how-to-start_steps-step_text">
                                If you have SL in Holding, you can vote for the
                                project to support it within the ShiftLix
                                Launchpad.
                            </div>
                        </div>
                        <div className="how-to-start_steps-step">
                            <div className="how-to-start_steps-step_header">
                                Step 2
                            </div>
                            <div className="how-to-start_steps-step_title">
                                Settlement Period
                            </div>
                            <div className="how-to-start_steps-step_text">
                                For the project to get listed on the exchange,
                                it must collect a sufficient amount of votes.
                                Once the settlement period is over to partake in
                                token distribution.
                            </div>
                        </div>
                        <div className="how-to-start_steps-step">
                            <div className="how-to-start_steps-step_header">
                                Step 3
                            </div>
                            <div className="how-to-start_steps-step_title">
                                Settlement Period
                            </div>
                            <div className="how-to-start_steps-step_text">
                                As soon as the Launchpad ends and the project
                                receives enough votes for the listing, you will
                                be credited with the new tokens. If the project
                                does not get enough votes, your funds will be
                                returned to you.
                            </div>
                        </div>
                        <div className="how-to-start_steps-step final-step">
                            <img src="/assets/img/other/finalsteplaunchpad.png" />
                            <div className="how-to-start_steps-step_title">
                                You Can Only Vote with WBT in Holding
                            </div>
                            <div className="how-to-start_steps-step_text">
                                The amount of USDT allocation that you can use
                                for voting depends on the amount of WBT in
                                Holding.
                            </div>
                            <div className="final-step_btn butafor__btn">
                                Go to WBT Boost
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="join-Jumpstart">
                <div className="join-Jumpstart__wrapper">
                    <div className="join-Jumpstart__container">
                        <div className="join-Jumpstart__box">
                            <div className="join-Jumpstart__title">
                                Join {projectName} launchpad
                            </div>
                            <div className="join-Jumpstart__description">
                                If you are a developer of innovative blockchain
                                projects, apply below to launch your projects on
                                launchpad &amp; reach out to millions of
                                potential investors!
                            </div>
                            <a
                                className="join-Jumpstart__link butafor__btn"
                                href="#"
                                onClick={() => setError3LVLOpened(true)}
                            >
                                Apply to join
                            </a>
                            <div className="join-Jumpstart__benefits">
                                <div className="join-Jumpstart__benefit">
                                    <div className="join-Jumpstart__benefit-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/join-Jumpstart/exposure.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/join-Jumpstart/exposure.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/join-Jumpstart/exposure.png"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="join-Jumpstart__benefit-title">
                                        High exposure
                                    </div>
                                    <div className="join-Jumpstart__benefit-description">
                                        Millions of visits
                                    </div>
                                </div>
                                <div className="join-Jumpstart__benefit">
                                    <div className="join-Jumpstart__benefit-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/join-Jumpstart/liquidity.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/join-Jumpstart/liquidity.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/join-Jumpstart/liquidity.png"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="join-Jumpstart__benefit-title">
                                        Liquidity
                                    </div>
                                    <div className="join-Jumpstart__benefit-description">
                                        World-class liquidity
                                    </div>
                                </div>
                                <div className="join-Jumpstart__benefit">
                                    <div className="join-Jumpstart__benefit-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/join-Jumpstart/fairness.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/join-Jumpstart/fairness.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/join-Jumpstart/fairness.png"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="join-Jumpstart__benefit-title">
                                        Fairness
                                    </div>
                                    <div className="join-Jumpstart__benefit-description">
                                        Fair participation
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faqs faqs-jumpstart">
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
                                    When does launchpad launch projects?
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
                                    {projectName} launchpad will provide users
                                        with the opportunity to experience new
                                        high-quality blockchain projects from
                                        time to time. For all events, {projectName}
                                        will conduct warm-ups in advance and
                                        announce relevant rules for users to
                                        prepare for their participation. You can
                                        keep an eye on the latest news and
                                        notifications on {projectName}.
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
                                    How can I participate in launchpad?
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
                                        First, you need to create your {projectName}
                                        account or log in with your existing
                                        account. Second, please make sure you
                                        have completed the Lv. 3 KYC
                                        verification. Last but not least, you
                                        need to hold a certain amount of tokens
                                        for staking before participation. After
                                        logging in, you can find [Launchpad] on
                                        our platform and find the homepage to
                                        view information and details. Just click
                                        on the screen, and you can complete
                                        staking or unstaking your tokens.
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
                                    What types of events does launchpad provide?
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
                                        Currently, {projectName} launchpad provides
                                        two types of events - Mining and On
                                        Sale. With token staking, the Mining
                                        model allows users to gain token rewards
                                        issued by relevant projects. Every event
                                        has its own staking period and total
                                        staking limit, following on a "more
                                        staking, more tokens" basis. The On Sale
                                        model adopts "Pledge + Draw" to
                                        distribute tokens. This includes
                                        position census, pledging, reward census
                                        and reward distribution. Also, token is
                                        the only token officially taken for
                                        pledging during the whole process. Both
                                        models are not applicable for users in
                                        restricted countries/regions, and those
                                        allowed to participate should refer to
                                        Project's announcements.
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

export default Launchpad;
