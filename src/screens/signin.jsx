import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Loading from "../components/LoadingError/loading";
import Header from "../components/header";
import { login } from "../Redux/Actions/userActions";
import { Helmet } from "react-helmet";

import { toast } from "react-toastify";

import classnames from "classnames";
import Toast from "../components/LoadingError/toast";
import { projectName } from "../App";
const SignIn = ({ location, history }) => {
    const dispatch = useDispatch();
    const toastId = React.useRef(null);
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authNeeded, setAuthNeeded] = useState(false);

    // State for auth code input
    const [state, setState] = useState({
        v1: "",
        v2: "",
        v3: "",
        v4: "",
        v5: "",
        v6: "",
        currentRefIndex: 0,
    });
    //refs
    let vc1 = React.createRef();
    let vc2 = React.createRef();
    let vc3 = React.createRef();
    let vc4 = React.createRef();
    let vc5 = React.createRef();
    let vc6 = React.createRef();

    const onChangeHandler = (e, index) => {
        setState({
            ...state,
            [e.target.name]: e.target.value.slice(0, 1),
            currentRefIndex: index,
        });
    };
    useEffect(() => {
        if (authNeeded) {
            console.log("state:", state);
            const refs = [vc1, vc2, vc3, vc4, vc5, vc6];
            const { currentRefIndex } = state;
            console.log("refs", refs);
            //get current ref attributes
            const currentRef = refs[currentRefIndex].current;

            if (
                currentRef.value.length >= currentRef.maxLength &&
                currentRefIndex < refs.length - 1
            ) {
                refs[currentRefIndex + 1].current.focus();
            }
        }
    }, [state]);

    const redirect = location.search ? location.search.split("=")[1] : "/";

    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;
    console.log(userLogin);
    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [userInfo, history, redirect]);

    useEffect(() => {
        if (error) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(error, Toastobjects);
            }
            if (error.includes("Two-Step")) {
                setAuthNeeded(true);
            }
        }
    }, [dispatch, userLogin]);
    console.log(authNeeded);
    const submitHandler = (e) => {
        e.preventDefault();
        var token =
            state.v1 + state.v2 + state.v3 + state.v4 + state.v5 + state.v6;
        if (authNeeded && token.length == 6) {
            console.log("signin with 2fa token");
            dispatch(login(email, password, token));
        } else {
            dispatch(login(email, password));
        }
    };
    console.log(userLogin);
    return (
        <div
            className="sign-in__body webp other"
            style={{ backgroundColor: "#ffffff" }}
        >
            <Toast />
            <section className="sing-in">
                <div className="sing-in__box">
                    <div className="sing-in__left">
                        <a className="sing-in__left-logo" href="../">
                            <div className="sing-in__left-icon">
                                <img
                                    style={{
                                        width: "39px",
                                        marginBottom: "-3px",
                                    }}
                                    src="../assets/img/logos/default.png"
                                />
                            </div>
                            Altcorex{" "}
                        </a>
                        <div className="sing-in__content">
                            <div className="sing-in__title">
                                <svg
                                    width={48}
                                    height={46}
                                    viewBox="0 0 48 46"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.6685 22.4142C16.2399 22.6102 15.8116 22.8107 15.461 22.9992C9.18912 26.3304 3.38457 31.5487 0.112286 37.6668C-0.00458097 37.8897 0.0733304 38.164 0.307065 38.2787C0.540799 38.3933 0.813717 38.3052 0.930584 38.0819C4.16391 32.1195 9.81248 27.0404 15.9285 23.7936C16.1233 23.6861 16.3571 23.5745 16.5909 23.4614C16.6298 24.0158 16.8245 24.4723 17.0972 24.8404C17.5257 25.3862 18.1879 25.7569 18.967 25.9626C20.0578 26.2467 21.3431 26.2154 22.5118 25.9556C23.4078 25.7472 24.2259 25.3911 24.7324 24.9517C25.1609 24.5974 25.3945 24.1838 25.4335 23.7477C25.4725 23.2885 25.2779 22.7786 24.6936 22.2664C23.7197 21.3775 22.3949 21.1135 20.9536 21.2263C19.9018 21.3099 18.8112 21.6018 17.7983 21.9647C17.9152 21.6616 18.0711 21.3342 18.2659 20.981C19.8241 18.3278 23.5636 15.828 27.9656 13.756C34.666 10.6096 42.9247 8.47721 47.5215 8.45593C47.7552 8.45481 47.989 8.25022 47.989 7.99935C47.989 7.74847 47.7552 7.54576 47.5215 7.54688C42.8078 7.56853 34.3935 9.72785 27.5373 12.9399C22.9405 15.1071 19.0448 17.7648 17.4476 20.5405C17.058 21.2386 16.7853 21.8613 16.6685 22.4142ZM17.5256 23.0462C17.4866 23.5573 17.6034 23.9691 17.8371 24.2946C18.1488 24.6885 18.6552 24.9379 19.2006 25.0861C20.1355 25.3325 21.2654 25.2963 22.2782 25.0708C22.9794 24.9091 23.6415 24.6515 24.07 24.3167C24.3038 24.1274 24.4598 23.9217 24.4988 23.6842C24.4988 23.442 24.3427 23.1956 24.07 22.9253C23.252 22.213 22.1613 22.042 21.0316 22.1323C19.8629 22.2264 18.5774 22.6079 17.5256 23.0462Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.919934 38.0386C1.89383 35.5862 2.08883 32.7086 1.73823 30.114C1.69928 29.865 1.46562 29.6881 1.23188 29.7194C0.959194 29.7504 0.764187 29.9778 0.803143 30.2264C1.11479 32.678 0.958966 35.3977 0.0240289 37.7149C-0.0538826 37.9494 0.0630606 38.2122 0.296795 38.3018C0.569485 38.391 0.842023 38.2731 0.919934 38.0386Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.906364 38.1686C2.58146 36.2317 5.42545 35.4399 7.95757 35.136C8.19131 35.1047 8.38609 34.8769 8.34713 34.6279C8.30818 34.3793 8.07429 34.2027 7.8016 34.2341C5.0747 34.5656 1.99735 35.4795 0.166433 37.5921C0.0106106 37.7863 0.0496424 38.0726 0.244421 38.2316C0.4392 38.3911 0.750541 38.3623 0.906364 38.1686Z"
                                        fill="black"
                                    />
                                </svg>
                                Sign in
                            </div>
                            <div className="sing-in__des">
                                Welcome back! Please enter your details
                            </div>
                            <div className="sing-in__form">
                                <div className="sing-in__email-box">
                                    <div className="sing-in__form-title">
                                        Email
                                    </div>
                                    <input
                                        id="login_email"
                                        className="input__01"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="sing-in__email-box">
                                    <div className="sing-in__form-title">
                                        Password
                                    </div>
                                    <label className="input__01-password">
                                        <svg
                                            width={11}
                                            height={12}
                                            viewBox="0 0 11 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.625 5.25H9.0625V3.5625C9.0625 1.61719 7.44531 0 5.5 0C3.53125 0 1.9375 1.61719 1.9375 3.5625V5.25H1.375C0.742188 5.25 0.25 5.76562 0.25 6.375V10.875C0.25 11.5078 0.742188 12 1.375 12H9.625C10.2344 12 10.75 11.5078 10.75 10.875V6.375C10.75 5.76562 10.2344 5.25 9.625 5.25ZM7.1875 5.25H3.8125V3.5625C3.8125 2.64844 4.5625 1.875 5.5 1.875C6.41406 1.875 7.1875 2.64844 7.1875 3.5625V5.25Z"
                                                fill="#667085"
                                            />
                                        </svg>
                                        <input
                                            className="input__01"
                                            type="password"
                                            placeholder="Enter your password"
                                            id="login_password"
                                            value={password}
                                            onChange={(e)=>setPassword(e.target.value)}
                                        />
                                    </label>
                                </div>
                                <div className="sing-in__email-box">
                                   
                                </div>
                                <div className="sing-in__params">
                                    <label className="checkbox">
                                        <input type="checkbox" />
                                        <span className="checkbox__style" />
                                        Remember me
                                    </label>
                                    <a
                                        className="sing-in__link"
                                        href="forgot-password"
                                    >
                                        Forgot password
                                    </a>
                                </div>
                                <div className="sing-in__btn-box">
                                    <button
                                        id="sign_in"
                                        onMouseUp={submitHandler}
                                        className="buttons__01 buttons__01-sing-loader"
                                    >
                                        Sign in
                                    </button>
                                </div>
                                <div className="sing-in__have">
                                    Don’t have an account?
                                    <span>
                                        <a href="signup">Sign up for free</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sing-in__right">
                        <picture>
                            <source
                                srcSet="../assets/img/sing-in/trade.gif"
                                type="image/webp"
                            />
                            <picture>
                                <source
                                    srcSet="../assets/img/sing-in/trade.gif"
                                    type="image/webp"
                                />
                                <img
                                    src="../assets/img/sing-in/trade.gif"
                                    alt=""
                                />
                            </picture>
                        </picture>
                        <a className="sing-in__right-join">
                            <div className="sing-in__right-title">
                                Trade with confidence
                            </div>
                            <div className="sing-in__right-description">
                                Your funds are always backed 1:1 on Altcorex
                                with our regularly published audits on our Proof
                                of Reserves
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignIn;
