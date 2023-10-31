import React, { useState } from "react";
import stateSaver from "../../mobx/stateSaver";
import { projectName } from "../../App";

const SavingsStatic = () => {
    const { setError3LVLOpened } = stateSaver;
    const [accordionFirstOpened, setAccordionFirstOpened] = useState(false);
    const [accordionSecondOpened, setAccordionoSecondOpened] = useState(false);
    const [accordionThirdOpened, setAccordionThirdOpened] = useState(false);
    const [accordionFourOpened, setAccordionFourOpened] = useState(false);
    return (
        <main className="main bg-white padding-null other">
            <section className="savings-home">
                <div className="savings-home__container">
                    <div className="savings-home__box">
                        <div className="savings-home__left">
                            <div className="savings-home__title">
                            {projectName} savings
                            </div>
                            <div className="savings-home__description">
                                Low risk | Flexible terms. <br />
                                Savings allows users to earn hourly interests by
                                funding {projectName} margin loans.
                            </div>
                        </div>
                        <div className="savings-home__right">
                            <div className="savings-home__img">
                                <picture>
                                    <source
                                        srcSet="/assets/img/other/savingsbg.png"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="/assets/img/other/savingsbg.png"
                                            type="image/webp"
                                        />
                                        <img
                                            src="/assets/img/other/savingsbg.png"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="savings-offers">
                <div className="savings-offers__container">
                    <div className="savings-offers__list">
                        <div className="savings-offers__list-item">
                            <div className="savings-pffers__item-item_header">
                                USDT Savings
                            </div>
                            <div className="savings-offers__list-item_data">
                                <img src="/assets/img/other/tethersavings.svg" />
                                <div className="savings-offers__list-item_percent">
                                    10.00%
                                </div>
                                Estimated APY
                            </div>
                            <div className="savings-offers__list-item_term">
                                <span>Term</span>
                                <span>Flexible</span>
                            </div>
                            <div className="savings-offers__list-item_action">
                                <span
                                    className="butafor__btn"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    Proceed
                                </span>
                            </div>
                        </div>
                        <div className="savings-offers__list-item">
                            <div className="savings-pffers__item-item_header">
                                USDC Savings
                            </div>
                            <div className="savings-offers__list-item_data">
                                <img src="/assets/img/other/usdcsavings.svg" />
                                <div className="savings-offers__list-item_percent">
                                    10.00%
                                </div>
                                Estimated APY
                            </div>
                            <div className="savings-offers__list-item_term">
                                <span>Term</span>
                                <span>14Days</span>
                            </div>
                            <div className="savings-offers__list-item_action">
                                <span
                                    className="butafor__btn"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    Proceed
                                </span>
                            </div>
                        </div>
                        <div className="savings-offers__list-item">
                            <div className="savings-pffers__item-item_header">
                                APT Savings
                            </div>
                            <div className="savings-offers__list-item_data">
                                <img src="/assets/img/other/aptsavings.svg" />
                                <div className="savings-offers__list-item_percent">
                                    10.00%
                                </div>
                                Estimated APY
                            </div>
                            <div className="savings-offers__list-item_term">
                                <span>Term</span>
                                <span>Flexible</span>
                            </div>
                            <div className="savings-offers__list-item_action">
                                <span
                                    className="butafor__btn"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    Proceed
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="savings-offers__top">
                        <div className="savings-offers__title">Offers</div>
                        <div className="savings-offers__wrapper">
                            <div className="savings-offers__chooselist">
                                <div
                                    className="savings-offers__chooselist-item active"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    Fixed
                                </div>
                                <div
                                    className="savings-offers__chooselist-item"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    Flexible
                                </div>
                                <div
                                    className="savings-offers__chooselist-item"
                                    onClick={() => setError3LVLOpened(true)}
                                >
                                    Promotion
                                </div>
                            </div>
                            <div className="savings-offers__wrapper__right">
                                {" "}
                                <div className="savings-offers__checkbox">
                                    <label
                                        className="checkbox butafor__btn"
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        <input type="checkbox" />
                                        <span className="checkbox__style" />
                                        My crypto
                                    </label>
                                </div>
                                <div className="savings-offers__search">
                                    <input
                                        type="text"
                                        placeholder="Search crypto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="savings-offers__table">
                        <div className="savings-offers__table-names">
                            <div className="savings-offers__table-name savings-offers__table-token">
                                Token
                            </div>
                            <div className="savings-offers__table-name savings-offers__table-apy">
                                Est. APY
                            </div>
                            <div className="savings-offers__table-name savings-offers__table-term">
                                Term
                            </div>
                            <div className="savings-offers__table-name savings-offers__table-action">
                                Action
                            </div>
                        </div>
                        <div className="savings-offers__table-items">
                            <div className="savings-offers__item">
                                <div className="savings-offers__item-token">
                                    <div className="savings-offers__item-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/savings-offers/usdt.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/savings-offers/usdt.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/savings-offers/usdt.png"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="savings-offers__item-symbol">
                                        USDT
                                    </div>
                                    <div className="savings-offers__item-name">
                                        Tether
                                    </div>
                                </div>
                                <div className="savings-offers__item-apy">
                                    10.00%
                                    
                                </div>
                                <div className="savings-offers__item-term">
                                    Flexible
                                </div>
                                <div className="savings-offers__item-action">
                                    <span
                                        className="butafor__btn"
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Proceed
                                    </span>
                                </div>
                            </div>
                            <div className="savings-offers__item">
                                <div className="savings-offers__item-token">
                                    <div className="savings-offers__item-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/savings-offers/usdc.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/savings-offers/usdc.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/savings-offers/usdc.png"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="savings-offers__item-symbol">
                                        USDC
                                    </div>
                                    <div className="savings-offers__item-name">
                                        USD Coin
                                    </div>
                                </div>
                                <div className="savings-offers__item-apy">
                                    10.00%
                                    
                                </div>
                                <div className="savings-offers__item-term">
                                    Flexible
                                </div>
                                <div className="savings-offers__item-action">
                                    <span
                                        className="butafor__btn"
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Proceed
                                    </span>
                                </div>
                            </div>
                            <div className="savings-offers__item">
                                <div className="savings-offers__item-token">
                                    <div className="savings-offers__item-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/savings-offers/btc.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/savings-offers/btc.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/savings-offers/btc.png"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="savings-offers__item-symbol">
                                        BTC
                                    </div>
                                    <div className="savings-offers__item-name">
                                        Bitcoin
                                    </div>
                                </div>
                                <div className="savings-offers__item-apy">
                                    5.00%
                                    
                                </div>
                                <div className="savings-offers__item-term">
                                    Flexible
                                </div>
                                <div className="savings-offers__item-action">
                                    <span
                                        className="butafor__btn"
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Proceed
                                    </span>
                                </div>
                            </div>
                            <div className="savings-offers__item">
                                <div className="savings-offers__item-token">
                                    <div className="savings-offers__item-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/savings-offers/eth.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/savings-offers/eth.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/savings-offers/eth.png"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="savings-offers__item-symbol">
                                        ETH
                                    </div>
                                    <div className="savings-offers__item-name">
                                        Ethereum
                                    </div>
                                </div>
                                <div className="savings-offers__item-apy">
                                    5.00%
                                    
                                </div>
                                <div className="savings-offers__item-term">
                                    Flexible
                                </div>
                                <div className="savings-offers__item-action">
                                    <span
                                        className="butafor__btn"
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Proceed
                                    </span>
                                </div>
                            </div>
                            <div className="savings-offers__item">
                                <div className="savings-offers__item-token">
                                    <div className="savings-offers__item-img">
                                        <picture>
                                            <source
                                                srcSet="../assets/img/savings-offers/okb.webp"
                                                type="image/webp"
                                            />
                                            <picture>
                                                <source
                                                    srcSet="../assets/img/savings-offers/okb.webp"
                                                    type="image/webp"
                                                />
                                                <img
                                                    src="../assets/img/savings-offers/okb.png"
                                                    alt=""
                                                />
                                            </picture>
                                        </picture>
                                    </div>
                                    <div className="savings-offers__item-symbol">
                                        OKB
                                    </div>
                                    <div className="savings-offers__item-name">
                                        OKB
                                    </div>
                                </div>
                                <div className="savings-offers__item-apy">
                                    5.00%
                                    
                                </div>
                                <div className="savings-offers__item-term">
                                    Flexible
                                </div>
                                <div className="savings-offers__item-action">
                                    <span
                                        className="butafor__btn"
                                        onClick={() => setError3LVLOpened(true)}
                                    >
                                        Proceed
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="savings-offers__link-wrapper">
                        <span
                            className="savings-offers__link butafor__btn"
                            style={{ cursor: "pointer" }}
                            onClick={() => setError3LVLOpened(true)}
                        >
                            View more
                        </span>
                    </div>
                </div>
            </section>
            <section className="faqs faqs-savings">
                <div className="faqs__container">
                    <div className="faqs__title">
                        Frequently Asked Questions
                    </div>
                    <div className="faqs__questions">
                        <div className="accordion__container accordion__container-faq-savings">
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
                                    When will I start earning?
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
                                    className={`accordion__item-body accordion__item-faq-savings ${
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
                                        For funds loaned out within any given
                                        hour, your interest for the said hour
                                        will arrive in the next hour.
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
                                    How is the interest rate calculated?
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
                                    className={`accordion__item-body accordion__item-faq-savings ${
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
                                        With 15% of the loan interest withheld
                                        as insurance fund, the hourly interest
                                        rate for lenders is loan
                                        principal*APY/365/24*0.85.
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
                                    Why haven't I received my interests?
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
                                    className={`accordion__item-body accordion__item-faq-savings ${
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
                                        Interests are available for loaned-out
                                        assets only. Please verify if your
                                        assets are loaned or not.
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
                                    When can I receive my redeemed assets?
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
                                    className={`accordion__item-body accordion__item-faq-savings ${
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
                                        Your funds will arrive immediately
                                        regardless of the loan status.
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

export default SavingsStatic;
