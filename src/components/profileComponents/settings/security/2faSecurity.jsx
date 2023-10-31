import React, { useEffect, useState } from "react";
import {
    updateUserProfile,
    getUserDetails,
} from "../../../../Redux/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import qrcode from "qrcode";
import Toast from "../../../LoadingError/toast";
import TopLineInfo from "../../topLineInfo";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CopyToClipboard from "react-copy-to-clipboard";
const FASecurity = () => {
    const dispatch = useDispatch();
    const [qrcodeUrl, setQRCodeUrl] = useState("");
    const [copied,setCopied]=useState(false);
   
   
    ///////////////////
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
        if (!loadingUser) {
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
    /////////////////////////////
    const toastId = React.useRef(null);
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    };
    const [loadingQR, setLoadingQR] = useState(true);
    const userDetails = useSelector((state) => state.userDetails);
    const { loadingUser, error, user } = userDetails;
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { loadingUpdate, successUpdate, errorUpdate } = userUpdateProfile;
    useEffect(() => {
        dispatch(getUserDetails("profile"));
    }, [dispatch]);
    useEffect(() => {
        if (!loadingUser) {
            qrcode.toDataURL(user.auth.secret.otpauth_url, function (err, url) {
                if (err) {
                    console.error(err);
                } else {
                    setQRCodeUrl(url);
                }
                setLoadingQR(false);
            });
        }
    }, [dispatch, user]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (
            (state.v1 + state.v2 + state.v3 + state.v4 + state.v5 + state.v6)
                .length == 6
        ) {
            dispatch(
                updateUserProfile({
                    auth: {
                        token:
                            state.v1 +
                            state.v2 +
                            state.v3 +
                            state.v4 +
                            state.v5 +
                            state.v6,
                    },
                })
            );
        } else {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(
                    "Please enter correct 2FA code",
                    Toastobjects
                );
            }
        }
    };
    useEffect(() => {
        if (successUpdate) {
            dispatch(getUserDetails("profile",undefined,"/profile/security"));
        } else if (errorUpdate) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(errorUpdate, Toastobjects);
            }
        }
    }, [dispatch, userUpdateProfile]);
    const copyHandler=()=>{
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.success("Copied!", Toastobjects);
        }
    }
    return (
        <div>
            {!loadingUser ? (
                user.auth.enabled ? (
                    <section className="disable-authentication">
                        <div className="disable-authentication__box">
                            <div className="disable-authentication__message">
                                <svg
                                    width={22}
                                    height={22}
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.9109 0.643066C5.24307 0.643066 0.643066 5.24307 0.643066 10.9109C0.643066 16.5788 5.24307 21.1788 10.9109 21.1788C16.5788 21.1788 21.1788 16.5788 21.1788 10.9109C21.1788 5.24307 16.5788 0.643066 10.9109 0.643066ZM10.9109 19.1252C6.3828 19.1252 2.69664 15.439 2.69664 10.9109C2.69664 6.3828 6.3828 2.69664 10.9109 2.69664C15.439 2.69664 19.1252 6.3828 19.1252 10.9109C19.1252 15.439 15.439 19.1252 10.9109 19.1252ZM8.85735 13.139L15.6239 6.37253L17.0716 7.83057L8.85735 16.0449L4.75021 11.9377L6.19798 10.4899L8.85735 13.139Z"
                                        fill="#045B27"
                                        fillOpacity="0.54"
                                    />
                                </svg>
                                Good news! Two-factor authentication is
                                currently active
                            </div>
                            <div className="disable-authentication__center">
                                <div className="disable-authentication__box-content">
                                    <svg
                                        width={28}
                                        height={30}
                                        viewBox="0 0 28 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.2385 2.72944L6.41685 5.0308C5.07518 5.55718 3.97852 7.222 3.97852 8.71544V17.8107C3.97852 19.2552 4.88852 21.1526 5.99685 22.0218L11.0135 25.9512C12.6585 27.2488 15.3652 27.2488 17.0102 25.9512L22.0268 22.0218C23.1352 21.1526 24.0452 19.2552 24.0452 17.8107V8.71544C24.0452 7.20976 22.9485 5.54494 21.6068 5.01856L15.7852 2.72944C14.7935 2.34995 13.2068 2.34995 12.2385 2.72944Z"
                                            stroke="#101828"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13.9993 15.3033C15.288 15.3033 16.3327 14.2071 16.3327 12.855C16.3327 11.5029 15.288 10.4067 13.9993 10.4067C12.7107 10.4067 11.666 11.5029 11.666 12.855C11.666 14.2071 12.7107 15.3033 13.9993 15.3033Z"
                                            stroke="#101828"
                                            strokeWidth="1.75"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14 15.3003V18.9727"
                                            stroke="#101828"
                                            strokeWidth="1.75"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="disable-authentication__title-des">
                                        <div className="disable-authentication__title">
                                            Disable 2FA authentication
                                        </div>
                                        <div className="disable-authentication__des">
                                            To turn off two-factor
                                            authentication please enter the
                                            6-digit verification code and click
                                            the “Disable” button
                                        </div>
                                        <div className="authentication__step-code">
                                            <div className="code code-authentication">
                                                <input
                                                    type="number"
                                                    className="code__input"
                                                    maxLength={1}
                                                    id="code_1"
                                                    ref={vc1}
                                                    name="v1"
                                                    value={state.v1}
                                                    onChange={(e) =>
                                                        onChangeHandler(e, 0)
                                                    }
                                                />
                                                <input
                                                    type="number"
                                                    className="code__input"
                                                    maxLength={1}
                                                    id="code_2"
                                                    ref={vc2}
                                                    name="v2"
                                                    value={state.v2}
                                                    onChange={(e) =>
                                                        onChangeHandler(e, 1)
                                                    }
                                                />
                                                <input
                                                    type="number"
                                                    className="code__input"
                                                    maxLength={1}
                                                    id="code_3"
                                                    ref={vc3}
                                                    name="v3"
                                                    value={state.v3}
                                                    onChange={(e) =>
                                                        onChangeHandler(e, 2)
                                                    }
                                                />
                                                <input
                                                    type="number"
                                                    className="code__input"
                                                    maxLength={1}
                                                    id="code_4"
                                                    ref={vc4}
                                                    name="v4"
                                                    value={state.v4}
                                                    onChange={(e) =>
                                                        onChangeHandler(e, 3)
                                                    }
                                                />
                                                <input
                                                    type="number"
                                                    className="code__input"
                                                    maxLength={1}
                                                    id="code_5"
                                                    ref={vc5}
                                                    name="v5"
                                                    value={state.v5}
                                                    onChange={(e) =>
                                                        onChangeHandler(e, 4)
                                                    }
                                                />
                                                <input
                                                    type="number"
                                                    className="code__input"
                                                    maxLength={1}
                                                    id="code_6"
                                                    ref={vc6}
                                                    name="v6"
                                                    value={state.v6}
                                                    onChange={(e) =>
                                                        onChangeHandler(e, 5)
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="disable-authentication__btn"
                                    onClick={(e) => {
                                        submitHandler(e);
                                    }}
                                    id="disable_google_2fa"
                                >
                                    Disable
                                </button>
                            </div>
                        </div>
                        <div className="disable-authentication__bottom">
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                    stroke="#536572"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 8V13"
                                    stroke="#536572"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M11.9946 16H12.0036"
                                    stroke="#536572"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            If you remove this extra layer of security, you will
                            only be asked for a password when you sign in. It
                            might be easier for someone to break into your
                            account
                        </div>
                    </section>
                ) : (
                    <section className="authentication">
                        <div className="authentication__container">
                            <div className="authentication__alert-top">
                                <div className="authentication__alert-top-img">
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19.5099 5.85L13.5699 2.42C12.5999 1.86 11.3999 1.86 10.4199 2.42L4.48992 5.85C3.51992 6.41 2.91992 7.45 2.91992 8.58V15.42C2.91992 16.54 3.51992 17.58 4.48992 18.15L10.4299 21.58C11.3999 22.14 12.5999 22.14 13.5799 21.58L19.5199 18.15C20.4899 17.59 21.0899 16.55 21.0899 15.42V8.58C21.0799 7.45 20.4799 6.42 19.5099 5.85ZM11.2499 7.75C11.2499 7.34 11.5899 7 11.9999 7C12.4099 7 12.7499 7.34 12.7499 7.75V13C12.7499 13.41 12.4099 13.75 11.9999 13.75C11.5899 13.75 11.2499 13.41 11.2499 13V7.75ZM12.9199 16.63C12.8699 16.75 12.7999 16.86 12.7099 16.96C12.5199 17.15 12.2699 17.25 11.9999 17.25C11.8699 17.25 11.7399 17.22 11.6199 17.17C11.4899 17.12 11.3899 17.05 11.2899 16.96C11.1999 16.86 11.1299 16.75 11.0699 16.63C11.0199 16.51 10.9999 16.38 10.9999 16.25C10.9999 15.99 11.0999 15.73 11.2899 15.54C11.3899 15.45 11.4899 15.38 11.6199 15.33C11.9899 15.17 12.4299 15.26 12.7099 15.54C12.7999 15.64 12.8699 15.74 12.9199 15.87C12.9699 15.99 12.9999 16.12 12.9999 16.25C12.9999 16.38 12.9699 16.51 12.9199 16.63Z"
                                            fill="#EB6A6A"
                                        />
                                    </svg>
                                </div>
                                Two-factor authentication is currently disabled
                            </div>
                            <div className="authentication__wrapper">
                                <div className="authentication__steps">
                                    <div className="authentication__step">
                                        <div className="authentication__step-img">
                                            <svg
                                                width={28}
                                                height={28}
                                                viewBox="0 0 28 28"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M19.1802 10.3823C23.3802 10.744 25.0952 12.9023 25.0952 17.6273V17.779C25.0952 22.994 23.0069 25.0823 17.7919 25.0823H10.1969C4.98189 25.0823 2.89355 22.994 2.89355 17.779V17.6273C2.89355 12.9373 4.58522 10.779 8.71522 10.394"
                                                    stroke="#191D31"
                                                    strokeWidth="1.75"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M14 2.33203V17.3587"
                                                    stroke="#191D31"
                                                    strokeWidth="1.75"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M17.909 14.7573L14.0006 18.6657L10.0923 14.7573"
                                                    stroke="#191D31"
                                                    strokeWidth="1.75"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="authentication__step-wrapper">
                                            <div className="authentication__step-title">
                                                Step 1: Download an
                                                authenticator app
                                            </div>
                                            <div className="authentication__step-description">
                                                Download and install any
                                                authenticator app, eg.{" "}
                                                <a href="https://support.google.com/accounts/answer/1066447">
                                                    Google Authenticator
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="authentication__step">
                                        <div className="authentication__step-img">
                                            <svg
                                                width={28}
                                                height={28}
                                                viewBox="0 0 28 28"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M2.33301 10.5007V7.58398C2.33301 4.67898 4.67801 2.33398 7.58301 2.33398H10.4997"
                                                    stroke="#191D31"
                                                    strokeWidth="1.75"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M17.5 2.33398H20.4167C23.3217 2.33398 25.6667 4.67898 25.6667 7.58398V10.5007"
                                                    stroke="#191D31"
                                                    strokeWidth="1.75"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M25.667 18.666V20.416C25.667 23.321 23.322 25.666 20.417 25.666H18.667"
                                                    stroke="#191D31"
                                                    strokeWidth="1.75"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M10.4997 25.6667H7.58301C4.67801 25.6667 2.33301 23.3217 2.33301 20.4167V17.5"
                                                    stroke="#191D31"
                                                    strokeWidth="1.75"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M19.8337 11.084V16.9173C19.8337 19.2507 18.667 20.4173 16.3337 20.4173H11.667C9.33366 20.4173 8.16699 19.2507 8.16699 16.9173V11.084C8.16699 8.75065 9.33366 7.58398 11.667 7.58398H16.3337C18.667 7.58398 19.8337 8.75065 19.8337 11.084Z"
                                                    stroke="#191D31"
                                                    strokeWidth="1.75"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M22.1663 14H5.83301"
                                                    stroke="#191D31"
                                                    strokeWidth="1.75"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="authentication__step-wrapper">
                                            <div className="authentication__step-title">
                                                Step 2: Scan the QR code
                                            </div>
                                            <div className="authentication__step-description">
                                                Open the authenticator app and
                                                scan the image using your
                                                phone’s camera
                                            </div>
                                        </div>
                                    </div>
                                    <div className="authentication__step">
                                        <div className="authentication__step-img">
                                            <svg
                                                width={28}
                                                height={28}
                                                viewBox="0 0 28 28"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.5414 2.86C13.3464 2.17167 14.6647 2.17167 15.4814 2.86L17.3247 4.44667C17.6747 4.75 18.328 4.995 18.7947 4.995H20.778C22.0147 4.995 23.0297 6.01 23.0297 7.24667V9.23C23.0297 9.685 23.2747 10.35 23.578 10.7L25.1647 12.5433C25.853 13.3483 25.853 14.6667 25.1647 15.4833L23.578 17.3267C23.2747 17.6767 23.0297 18.33 23.0297 18.7967V20.78C23.0297 22.0167 22.0147 23.0317 20.778 23.0317H18.7947C18.3397 23.0317 17.6747 23.2767 17.3247 23.58L15.4814 25.1667C14.6764 25.855 13.358 25.855 12.5414 25.1667L10.698 23.58C10.348 23.2767 9.6947 23.0317 9.22803 23.0317H7.2097C5.97303 23.0317 4.95803 22.0167 4.95803 20.78V18.785C4.95803 18.33 4.71303 17.6767 4.42137 17.3267L2.84637 15.4717C2.1697 14.6667 2.1697 13.36 2.84637 12.555L4.42137 10.7C4.71303 10.35 4.95803 9.69667 4.95803 9.24167V7.235C4.95803 5.99833 5.97303 4.98333 7.2097 4.98333H9.22803C9.68303 4.98333 10.348 4.73833 10.698 4.435L12.5414 2.86Z"
                                                    stroke="#191D31"
                                                    strokeWidth="1.75"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M9.77637 14.002L12.588 16.8254L18.223 11.1787"
                                                    stroke="#191D31"
                                                    strokeWidth="1.75"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="authentication__step-wrapper">
                                            <div className="authentication__step-title">
                                                Step 3: Verify your code
                                            </div>
                                            <div className="authentication__step-description">
                                                Enter the 6-digit verification
                                                code generated
                                            </div>
                                            <div className="authentication__step-code">
                                                <div className="code code-authentication">
                                                    <input
                                                        type="number"
                                                        className="code__input"
                                                        maxLength={1}
                                                        id="code_1"
                                                        ref={vc1}
                                                        name="v1"
                                                        value={state.v1}
                                                        onChange={(e) =>
                                                            onChangeHandler(
                                                                e,
                                                                0
                                                            )
                                                        }
                                                    />
                                                    <input
                                                        type="number"
                                                        className="code__input"
                                                        maxLength={1}
                                                        id="code_2"
                                                        ref={vc2}
                                                        name="v2"
                                                        value={state.v2}
                                                        onChange={(e) =>
                                                            onChangeHandler(
                                                                e,
                                                                1
                                                            )
                                                        }
                                                    />
                                                    <input
                                                        type="number"
                                                        className="code__input"
                                                        maxLength={1}
                                                        id="code_3"
                                                        ref={vc3}
                                                        name="v3"
                                                        value={state.v3}
                                                        onChange={(e) =>
                                                            onChangeHandler(
                                                                e,
                                                                2
                                                            )
                                                        }
                                                    />
                                                    <input
                                                        type="number"
                                                        className="code__input"
                                                        maxLength={1}
                                                        id="code_4"
                                                        ref={vc4}
                                                        name="v4"
                                                        value={state.v4}
                                                        onChange={(e) =>
                                                            onChangeHandler(
                                                                e,
                                                                3
                                                            )
                                                        }
                                                    />
                                                    <input
                                                        type="number"
                                                        className="code__input"
                                                        maxLength={1}
                                                        id="code_5"
                                                        ref={vc5}
                                                        name="v5"
                                                        value={state.v5}
                                                        onChange={(e) =>
                                                            onChangeHandler(
                                                                e,
                                                                4
                                                            )
                                                        }
                                                    />
                                                    <input
                                                        type="number"
                                                        className="code__input"
                                                        maxLength={1}
                                                        id="code_6"
                                                        ref={vc6}
                                                        name="v6"
                                                        value={state.v6}
                                                        onChange={(e) =>
                                                            onChangeHandler(
                                                                e,
                                                                5
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <CopyToClipboard onCopy={copyHandler} text={!loadingUser
                                            ? user.auth.secret.base32
                                            : null}>
                                <div className={`authentication__qrcode `}>
                                    <div
                                        style={{
                                            width: "176px",
                                            height: "176px",
                                            backgroundColor: "#eaecef",
                                        }}
                                    >
                                        <img
                                            style={{
                                                width: "176px !important",
                                            }}
                                            src={!loadingUser ? qrcodeUrl : ""}
                                        />
                                    </div>
                                    <div className="authentication__qrcode-text">
                                        {!loadingUser
                                            ? user.auth.secret.base32
                                            : null}
                                    </div>
                                </div>
                                </CopyToClipboard>
                                
                            </div>
                            <div className="authentication__alert">
                                <div className="authentication__alert-wrapper">
                                    <div className="authentication__alert-img">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                                stroke="#536572"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 8V13"
                                                stroke="#536572"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M11.9946 16H12.0036"
                                                stroke="#536572"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="authentication__alert-description">
                                        If you enable two-factor authentication
                                        following instructions above, you will
                                        be asked to provide an extra
                                        verification code next time you login
                                    </div>
                                </div>
                                <div className="authentication__alert-button">
                                    <button
                                        className="buttons__04"
                                        type="button"
                                        id="connect_google_2fa"
                                        onClick={(e) => submitHandler(e)}
                                    >
                                        Enable
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            ) : null}
        </div>
    );
};

export default FASecurity;

const getHowManyDays = (date) => {
    console.log(date);
    var currentDate = Date.now();

    var days = (currentDate - date) / 86400000; //86400000 - ms в дне
    return Math.round(days);
};

async function generateQRCode(otpauth_url) {
    return (resolve, reject) => {
        qrcode.toDataURL(otpauth_url, function (err, url) {
            if (err) {
                reject(err);
            } else {
                resolve(url);
            }
        });
    };
}
