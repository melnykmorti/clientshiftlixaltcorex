import React from "react";
import { Link } from "react-router-dom";
import { projectName } from "../App";
import stateSaver from "../mobx/stateSaver";
const Footer = () => {
    const {setError3LVLOpened}=stateSaver;
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__top">
                    <div className="footer__info">
                        <div className="footer__logo">
                            <div className="footer__logo-top">
                                <div className="footer__logo-icon">
                                    <img
                                        style={{
                                            width: "39px",
                                            marginBottom: "-3px",
                                        }}
                                        src="../assets/img/logos/default.png"
                                    />
                                </div>
                                <div className="footer__logo-text">
                                    {projectName}{" "}
                                </div>
                            </div>
                            <div className="footer__logo-line">
                                <svg
                                    width={169}
                                    height={18}
                                    viewBox="0 0 169 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21.2248 4.81993C23.8867 4.70895 26.0204 5.76327 27.2835 7.99677C28.2398 9.70312 29.3174 9.99445 31.1015 9.37018C35.683 7.76788 40.2859 6.22108 44.9173 4.77831C47.7861 3.88352 50.3552 4.36212 52.4604 6.74129C52.967 7.31008 54.2016 7.68465 54.9795 7.53205C58.9758 6.7413 62.9364 5.74245 66.9113 4.82685C71.3787 3.80027 75.8317 2.68354 80.3347 1.80955C83.1107 1.26852 85.7369 2.32977 87.4425 4.31357C89.9259 7.19216 92.9659 7.05342 96.0345 6.38753C101.822 5.13899 107.51 3.48815 113.283 2.17718C116.237 1.51129 119.277 1.01879 122.303 0.859255C123.688 0.782956 125.3 1.44885 126.506 2.22572C129.061 3.8627 131.887 3.74478 134.578 3.46039C142.035 2.66964 149.492 1.77487 156.864 0.463899C160.911 -0.257482 164.2 1.24769 167.619 2.59334C168.297 2.86386 169.181 4.32745 168.967 4.72975C168.461 5.68004 167.462 6.60257 166.434 7.00488C165.563 7.3517 164.279 7.1991 163.351 6.85228C158.534 5.04189 153.867 6.73436 149.157 7.26846C143.362 7.92048 137.596 8.80832 131.794 9.31468C130.046 9.46728 127.855 9.19676 126.499 8.25342C122.788 5.67309 119.042 6.52626 115.224 7.40718C109.122 8.81526 103.049 10.3205 96.9622 11.7771C91.9454 12.9771 87.5424 12.11 83.7459 8.43377C82.9323 7.64302 81.1197 7.19216 79.9779 7.45574C74.4758 8.69735 69.038 10.2234 63.5787 11.6661C59.9035 12.6303 56.2997 14.2118 52.3747 12.769C51.8895 12.5886 51.2971 12.5054 50.9403 12.1863C47.1153 8.74591 43.383 10.6187 39.5865 12.2557C36.9603 13.3863 34.3199 14.5169 31.5867 15.3424C28.1542 16.3828 25.5423 15.0927 23.0232 11.5759C22.1383 10.3343 21.3604 9.82798 19.8333 10.1262C15.3588 10.9863 11.4838 13.0326 7.99416 15.7724C4.83279 18.2626 2.41358 18.7551 0.401143 16.7921C-0.0555794 16.3481 -0.148338 14.7528 0.25843 14.3921C5.06115 10.0846 14.1385 5.18061 21.2391 4.82685L21.2248 4.81993Z"
                                        fill="#6544C6"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="footer__description">
                            Innovative cryptocurrency exchange with advanced
                            financial services. We rely on blockchain technology
                            to provide everything you need for wise trading and
                            investment.
                        </div>
                        <br />
                        <br />
                        <div className="footer__label">
                            Subscribe to our newsletter
                        </div>
                        <div className="footer__wrapper">
                            <input
                                className="footer__input"
                                type="email"
                                placeholder="Enter email"
                            />
                            <span
                                className="footer__sing-up"
                                id="footer_subscribe"
                                                            >
                                Subscribe
                            </span>
                        </div>
                    </div>
                    <div className="footer__links">
                        <div className="footer__links-block">
                            <div className="footer__link-title">Products</div>
                            <div className="footer__links-wrapper">
                                <Link className="footer__link" to="/trading">
                                    Spot trading
                                </Link>
                                <Link
                                    className="footer__link butafor__btn"
                                    to="/profile/wallet"
                                >
                                    Futures trading
                                </Link>
                                <Link
                                    className="footer__link butafor__btn"
                                    to="/profile/wallet"
                                >
                                    Options trading
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/profile/wallet"
                                >
                                    Wallet
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/profile/swap"
                                >
                                    Instant swap
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/profile/p2p"
                                >
                                    P2P trading
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/profile/staking"
                                >
                                    DeFi Staking
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/profile/cards"
                                >
                                    {projectName} Visa Card
                                </Link>
                            </div>
                        </div>
                        <div className="footer__links-block">
                            <div className="footer__link-title">Services</div>
                            <div className="footer__links-wrapper">
                                <Link
                                    className="footer__link"
                                    to="/profile/support"
                                >
                                    24/7 Support chat
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/profile/copy-trading"
                                >
                                    Copy trading
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/profile/trading-bots"
                                >
                                    Trading bots
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/profile/stake-eth20"
                                >
                                    ETH 2.0 staking
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/profile/launchpad"
                                >
                                    Launchpad
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/profile/savings"
                                >
                                    Savings
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/profile/ventures"
                                >
                                    {projectName} ventures
                                </Link>
                                <div
                                    className="footer__link"
                                    to="/profile/buy-crypto"
                                    onClick={()=>setError3LVLOpened(true)}
                                    style={{cursor:"pointer"}}
                                >
                                    Buy crypto
                                </div>
                            </div>
                        </div>
                        <div className="footer__links-block">
                            <div className="footer__link-title">
                                Information
                            </div>
                            <div className="footer__links-wrapper">
                                <Link className="footer__link" to="/fees">
                                    Fees
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/profile/status"
                                >
                                    Platform status
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/profile/wallet-security"
                                >
                                    Wallet security
                                </Link>
                                <Link className="footer__link" to="/indices">
                                    Indices
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/profile/api-docs"
                                >
                                    Trading API
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/profile/token-listing"
                                >
                                    Token listing
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/profile/space"
                                >
                                    Referral system
                                </Link>
                                <Link className="footer__link" to="/bugbounty">
                                    Bug Bounty
                                </Link>
                            </div>
                        </div>
                        <div className="footer__links-block">
                            <div className="footer__link-title">Legal</div>
                            <div className="footer__links-wrapper">
                                <Link className="footer__link" to="/terms">
                                    Terms of service
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/privacy-notice"
                                >
                                    Privacy notice
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/cookies-policy"
                                >
                                    Cookies policy
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/aml-kyc-policy"
                                >
                                    AML &amp; KYC policy
                                </Link>
                                <Link className="footer__link" to="/risk">
                                    Risk Disclosure Statement
                                </Link>
                                <Link
                                    className="footer__link"
                                    to="/regulatory"
                                >
                                    Regulatory License
                                </Link>
                                <Link className="footer__link" to="/treatment">
                                    Special Treatment
                                </Link>
                                <Link className="footer__link" to="/law">
                                    Law Enforcement Requests
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__sub-text">
                        In acceding to or using the Platform and the Site, you
                        represent and warrant that you are fully aware of the
                        risks associated with the transactions involving Digital
                        Assets or the use of Platform. You agree and understand
                        that you are solely responsible for determining the
                        nature, potential value, suitability, and
                        appropriateness of these risks for yourself, and that
                        the Company does not give advice or recommendations
                        regarding any Digital Asset, including the suitability
                        and appropriateness of, and investment strategies for,
                        any Digital Asset. You agree and understand that you
                        access and use the Platform and the Site at your own
                        risk. <br />
                        <span>{projectName} 2023 © All right reserved</span>
                        <span >Developed by @eumorti (TG)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
