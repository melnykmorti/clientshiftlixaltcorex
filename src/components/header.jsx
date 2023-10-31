import React, { useState } from "react";
import { useEffect } from "react";
import uniqid from "uniqid";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";
import { projectName } from "../App";
const Header = () => {
    const dispatch = useDispatch();
   
   
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    console.log(userInfo);
    

    return (
        <header className="header">
            <div className="global__container">
                <div className="header__box">
                    <div className="header__left">
                        <div className="header__logo">
                            <img
                                style={{ width: "30px", height: "auto" }}
                                src="assets/img/logos/default.png"
                                alt=""
                            />
                            <div className="header__logo-text">{projectName} </div>
                        </div>
                    </div>
                    <div className="header__container">
                        <div className="header__center">
                            <a className="header__link" href="trading">
                                Trading
                            </a>
                            <a
                                className="header__link hot"
                                href="/profile/swap"
                            >
                                Swap
                            </a>
                            <a className="header__link" href="profile/p2p">
                                P2P
                            </a>
                            <a className="header__link" href="profile/invest">
                                Staking
                            </a>
                            <a className="header__link" href="profile/wallet">
                                Wallet
                            </a>
                        </div>
                        <div className="header__right">
                            {userInfo ? (
                                <a
                                    className="header__right-link"
                                    href="../profile/wallet"
                                >
                                    Profile
                                </a>
                            ) : (
                                <React.Fragment>
                                    {" "}
                                    <a
                                        className="header__right-link"
                                        href="signin"
                                    >
                                        Log in
                                    </a>
                                    <a
                                        className="header__right-up"
                                        href="signup"
                                    >
                                        Sign up
                                    </a>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                    <div className="header__btn-mobile">
                        <svg width={28} height={28} viewBox="0 0 100 100">
                            <path
                                className="header__nav-line header__nav-line1"
                                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                            />
                            <path
                                className="header__nav-line header__nav-line2"
                                d="M 20,50 H 80"
                            />
                            <path
                                className="header__nav-line header__nav-line3"
                                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
