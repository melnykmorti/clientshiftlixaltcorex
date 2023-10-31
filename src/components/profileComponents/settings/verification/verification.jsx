import React, { useState, useEffect, useRef, useCallback } from "react";
import uniqid from "uniqid";
import "./verification.css";
import { serverLink } from "../../../../App";
import Toast from "../../../LoadingError/toast";
import { toast } from "react-toastify";
import {
    verifyUserProfile,
    getUserDetails,
} from "../../../../Redux/Actions/userActions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TabsMenu from "../tabsMenu";
const UPLOAD_AVATAR = "/api/users/upload/multiply";
const Verification = ({ match }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [citizenShip, setCitizenShip] = useState(countryList[0]);
    const [dayOfBirth, setDayOfBirth] = useState(1);
    const [monthOfBirth, setMonthOfBirth] = useState(0);
    const [yearOfBirth, setYearofBirth] = useState(2003);
    const [selectedDocument, setSelectedDocument] = useState("");
    const [documentNumber, setDocumentNumber] = useState("");
    const [citizenShipOpen, setCitizenShipOpen] = useState(false);
    const [dayOfBirthOpen, setDayOfBirthOpen] = useState(false);
    const [monthOfBirthOpen, setMonthOfBirthOpen] = useState(false);
    const [yearOfBirthOpen, setYearofBirthOpen] = useState(false);

    const [selectedFile, setSelectedFile] = useState([]);
    const toastId = React.useRef(null);
    let history = useHistory();
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    };
    const changeSelectedFile = (fileToAdd, pos) => {
        if (pos == 1) {
            setSelectedFile([selectedFile[0], fileToAdd]);
        } else {
            setSelectedFile([fileToAdd, selectedFile[1]]);
        }
    };
    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loadingUser, error, user } = userDetails;

    const userVerificationProfile = useSelector(
        (state) => state.userVerificationProfile
    );
    const {
        loadingVerification,
        successVerification,
        userVerificationInfo,
        errorVerification,
    } = userVerificationProfile;
    console.log(userVerificationProfile);

    useEffect(() => {
        dispatch(getUserDetails("profile", undefined, "/profile/verification"));
    }, [dispatch, match]);
    useEffect(() => {
        dispatch(getUserDetails("profile", undefined, "/profile/verification"));
        console.log("get user details");
    }, [dispatch, userVerificationProfile]);
    console.log(useSelector((state) => state));
    useEffect(() => {
        if (successVerification) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success("Success", Toastobjects);
            }
        } else if (errorVerification) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(errorVerification, Toastobjects);
            }
        }
    }, [userVerificationProfile]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        console.log("submit");
        let files = selectedFile.map((item) => item.original);

        Object.values(files).forEach((file) => {
            formData.append("uploadImages", file);
        });
        let res;

        if (!selectedFile.find((item) => item.loading == true)) {
            try {
                res = await axios.post(
                    `${serverLink + UPLOAD_AVATAR}`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                console.log(res);
                console.log(monthOfBirth);
                dispatch(
                    verifyUserProfile({
                        firstName,
                        lastName,
                        dayOfBirth,
                        monthOfBirth,
                        yearOfBirth,
                        documentNumber,
                        citizenShip,
                        userImage: res.data,
                    })
                );
                if (!toast.isActive(toastId.current)) {
                    toastId.current = toast.success(
                        "Uploading Successed",
                        Toastobjects
                    );
                }
            } catch (err) {
                console.log(err.response);
            }
        } else {
            console.log("one is loading");
        }
    };
    console.log(selectedFile);

    const onImageChange = async (e, pos) => {
        e.preventDefault();
        console.log(e.target.files);

        const formData = new FormData();
        console.log("submit");
        let files = Array.from(e.target.files);
        let res;
        if (e.target.files) {
            changeSelectedFile(
                files.map((item) => {
                    return {
                        source: URL.createObjectURL(item),
                        name: item.name,
                        size: item.size,
                        type: item.type,
                        original: item,
                        loading: true,
                    };
                }, pos)
            );

            console.log(selectedFile);
            console.log(files);
            Object.values(files).forEach((file) => {
                formData.append("uploadImages", file);
            });
            try {
                res = await axios.post(
                    `${serverLink + UPLOAD_AVATAR}`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                console.log(res);
                setSelectedFile(
                    files.map((item) => {
                        return {
                            source: URL.createObjectURL(item),
                            name: item.name,
                            size: item.size,
                            type: item.type,
                            original: item,
                            loading: false,
                        };
                    })
                );
                //let files=event.target.files.map(item=>URL.createObjectURL(item));
                console.log(files);
                //let files=Array.from(event.target.files);
                //console.log(files);

                if (!toast.isActive(toastId.current)) {
                    toastId.current = toast.success(
                        "Uploading Successed",
                        Toastobjects
                    );
                }
            } catch (err) {
                console.log(err.response);
            }

            console.log(selectedFile);
        }
    };
    return (
        <main
            className="main kyc-verification other user-settings"
            style={{ backgroundColor: "#ffffff" }}
        >
            <div className="main__box">
                <TabsMenu />
                <section className="levels-verification">
                    <div className="top-header">
                        <h1>KYC Verification</h1>
                        <div className="verif-items">
                            <div className="top-line__info-item">
                            <div className="top-line__item-img">
                                    {!loadingUser&&user.auth.enabled?<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.73543 14.5089L4.64127 11.4255L5.81722 10.2422L7.73543 12.1589L14.6493 5.24219L15.8253 6.42552L7.73543 14.5089Z" fill="#7ED17D"></path><path d="M10.2376 20C8.25815 20 6.32319 19.4135 4.67738 18.3147C3.03156 17.2159 1.7488 15.6541 0.991311 13.8268C0.233824 11.9996 0.0356369 9.98891 0.421801 8.0491C0.807964 6.10929 1.76112 4.32746 3.16078 2.92894C4.56043 1.53041 6.3437 0.578004 8.28507 0.192152C10.2264 -0.1937 12.2387 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4375 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58805 1.66667 6.97559 2.15541 5.60408 3.07109C4.23256 3.98677 3.16358 5.28826 2.53234 6.81098C1.9011 8.33369 1.73594 10.0092 2.05774 11.6258C2.37955 13.2423 3.17386 14.7271 4.34024 15.8926C5.50662 17.058 6.99269 17.8517 8.6105 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z" fill="#7ED17D"></path></svg>:<svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.16992 14.8299L14.8299 9.16992"
                                            stroke="#FF6B6B"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14.8299 14.8299L9.16992 9.16992"
                                            stroke="#FF6B6B"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                                            stroke="#FF6B6B"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>}
                                    
                                </div>
                                <div className="top-line__item-title">
                                    Two-Factor Authentication (2FA)
                                </div>
                            </div>
                            <div className="top-line__info-item">
                                <div className="top-line__item-img">
                                    {!loadingUser&&user.kycVerified?<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.73543 14.5089L4.64127 11.4255L5.81722 10.2422L7.73543 12.1589L14.6493 5.24219L15.8253 6.42552L7.73543 14.5089Z" fill="#7ED17D"></path><path d="M10.2376 20C8.25815 20 6.32319 19.4135 4.67738 18.3147C3.03156 17.2159 1.7488 15.6541 0.991311 13.8268C0.233824 11.9996 0.0356369 9.98891 0.421801 8.0491C0.807964 6.10929 1.76112 4.32746 3.16078 2.92894C4.56043 1.53041 6.3437 0.578004 8.28507 0.192152C10.2264 -0.1937 12.2387 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4375 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58805 1.66667 6.97559 2.15541 5.60408 3.07109C4.23256 3.98677 3.16358 5.28826 2.53234 6.81098C1.9011 8.33369 1.73594 10.0092 2.05774 11.6258C2.37955 13.2423 3.17386 14.7271 4.34024 15.8926C5.50662 17.058 6.99269 17.8517 8.6105 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z" fill="#7ED17D"></path></svg>:<svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.16992 14.8299L14.8299 9.16992"
                                            stroke="#FF6B6B"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14.8299 14.8299L9.16992 9.16992"
                                            stroke="#FF6B6B"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                                            stroke="#FF6B6B"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>}
                                    
                                </div>
                                <div className="top-line__item-title">
                                    {!loadingUser&&user.kycVerified?"Verified":"Not verified"}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="levels-verification__container">
                        <div className="levels-verification__item levels-verification__item-one">
                            <div className="levels-verification__item-top">
                                <div className="levels-verification__status">
                                    <div className="levels-verification__status-text">
                                        Basic
                                    </div>
                                    <svg
                                        width={35}
                                        height={36}
                                        viewBox="0 0 35 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.50263 29.5621L9.39626 29.3682L9.18119 29.3164L4.03171 28.0777L4.53557 22.3117L4.55313 22.1108L4.42632 21.9539L0.890965 17.5802L4.42632 13.2064L4.55313 13.0496L4.53557 12.8486L4.03171 7.08263L9.18119 5.8439L9.39626 5.79216L9.50263 5.59822L12.217 0.649511L17.0522 2.8817L17.2618 2.97845L17.4713 2.8817L22.3065 0.649511L25.0209 5.59822L25.1273 5.79216L25.3423 5.8439L30.4918 7.08263L29.988 12.8486L29.9704 13.0496L30.0972 13.2064L33.6326 17.5802L30.0972 21.9539L29.9704 22.1108L29.988 22.3117L30.4918 28.0777L25.3423 29.3164L25.1273 29.3682L25.0209 29.5621L22.3065 34.5108L17.4713 32.2786L17.2618 32.1819L17.0522 32.2786L12.217 34.5108L9.50263 29.5621ZM15.2705 23.8632L15.6377 24.2608L16.005 23.8632L24.7439 14.4034L25.0518 14.07L24.7497 13.7313L22.5844 11.3036L22.2177 10.8925L21.8439 11.2971L15.6334 18.02L12.6756 14.8926L12.308 14.5039L11.9451 14.8969L9.77967 17.2409L9.46624 17.5802L9.77967 17.9194L15.2705 23.8632Z"
                                            fill="#7ED17D"
                                            stroke="#101828"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="levels-verification__item-center">
                                <div className="levels-verification__title levels-verification__title-purple">
                                    Features
                                </div>
                                <div className="levels-verification__features">
                                    <div className="levels-verification__feature">
                                        Deposit crypto
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.73543 14.5089L4.64127 11.4255L5.81722 10.2422L7.73543 12.1589L14.6493 5.24219L15.8253 6.42552L7.73543 14.5089Z"
                                                fill="#7ED17D"
                                            />
                                            <path
                                                d="M10.2376 20C8.25815 20 6.32319 19.4135 4.67738 18.3147C3.03156 17.2159 1.7488 15.6541 0.991311 13.8268C0.233824 11.9996 0.0356369 9.98891 0.421801 8.0491C0.807964 6.10929 1.76112 4.32746 3.16078 2.92894C4.56043 1.53041 6.3437 0.578004 8.28507 0.192152C10.2264 -0.1937 12.2387 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4375 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58805 1.66667 6.97559 2.15541 5.60408 3.07109C4.23256 3.98677 3.16358 5.28826 2.53234 6.81098C1.9011 8.33369 1.73594 10.0092 2.05774 11.6258C2.37955 13.2423 3.17386 14.7271 4.34024 15.8926C5.50662 17.058 6.99269 17.8517 8.6105 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#7ED17D"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        Withdraw crypto
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.73543 14.5089L4.64127 11.4255L5.81722 10.2422L7.73543 12.1589L14.6493 5.24219L15.8253 6.42552L7.73543 14.5089Z"
                                                fill="#7ED17D"
                                            />
                                            <path
                                                d="M10.2376 20C8.25815 20 6.32319 19.4135 4.67738 18.3147C3.03156 17.2159 1.7488 15.6541 0.991311 13.8268C0.233824 11.9996 0.0356369 9.98891 0.421801 8.0491C0.807964 6.10929 1.76112 4.32746 3.16078 2.92894C4.56043 1.53041 6.3437 0.578004 8.28507 0.192152C10.2264 -0.1937 12.2387 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4375 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58805 1.66667 6.97559 2.15541 5.60408 3.07109C4.23256 3.98677 3.16358 5.28826 2.53234 6.81098C1.9011 8.33369 1.73594 10.0092 2.05774 11.6258C2.37955 13.2423 3.17386 14.7271 4.34024 15.8926C5.50662 17.058 6.99269 17.8517 8.6105 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#7ED17D"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        Spot trading
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.73543 14.5089L4.64127 11.4255L5.81722 10.2422L7.73543 12.1589L14.6493 5.24219L15.8253 6.42552L7.73543 14.5089Z"
                                                fill="#7ED17D"
                                            />
                                            <path
                                                d="M10.2376 20C8.25815 20 6.32319 19.4135 4.67738 18.3147C3.03156 17.2159 1.7488 15.6541 0.991311 13.8268C0.233824 11.9996 0.0356369 9.98891 0.421801 8.0491C0.807964 6.10929 1.76112 4.32746 3.16078 2.92894C4.56043 1.53041 6.3437 0.578004 8.28507 0.192152C10.2264 -0.1937 12.2387 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4375 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58805 1.66667 6.97559 2.15541 5.60408 3.07109C4.23256 3.98677 3.16358 5.28826 2.53234 6.81098C1.9011 8.33369 1.73594 10.0092 2.05774 11.6258C2.37955 13.2423 3.17386 14.7271 4.34024 15.8926C5.50662 17.058 6.99269 17.8517 8.6105 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#7ED17D"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        Copy trading
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.29673 5.89395L6.11707 7.07226L13.1926 14.1446L14.3723 12.9663L7.29673 5.89395Z"
                                                fill="#F83939"
                                            />
                                            <path
                                                d="M13.1782 5.86838L6.10141 12.9394L7.28087 14.118L14.3576 7.04689L13.1782 5.86838Z"
                                                fill="#F83939"
                                            />
                                            <path
                                                d="M10.2376 20C8.25817 20 6.32319 19.4135 4.67737 18.3147C3.03155 17.2159 1.7488 15.6541 0.99131 13.8268C0.233824 11.9996 0.0356372 9.98891 0.4218 8.0491C0.807964 6.10929 1.76114 4.32746 3.1608 2.92894C4.56045 1.53041 6.34371 0.578004 8.28509 0.192152C10.2265 -0.1937 12.2388 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4374 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58807 1.66667 6.97558 2.15541 5.60407 3.07109C4.23256 3.98677 3.16361 5.28826 2.53237 6.81098C1.90113 8.33369 1.73596 10.0092 2.05777 11.6258C2.37957 13.2423 3.17388 14.7271 4.34026 15.8926C5.50664 17.058 6.99268 17.8517 8.61049 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#F83939"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        Futures trading
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.29673 5.89395L6.11707 7.07226L13.1926 14.1446L14.3723 12.9663L7.29673 5.89395Z"
                                                fill="#F83939"
                                            />
                                            <path
                                                d="M13.1782 5.86838L6.10141 12.9394L7.28087 14.118L14.3576 7.04689L13.1782 5.86838Z"
                                                fill="#F83939"
                                            />
                                            <path
                                                d="M10.2376 20C8.25817 20 6.32319 19.4135 4.67737 18.3147C3.03155 17.2159 1.7488 15.6541 0.99131 13.8268C0.233824 11.9996 0.0356372 9.98891 0.4218 8.0491C0.807964 6.10929 1.76114 4.32746 3.1608 2.92894C4.56045 1.53041 6.34371 0.578004 8.28509 0.192152C10.2265 -0.1937 12.2388 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4374 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58807 1.66667 6.97558 2.15541 5.60407 3.07109C4.23256 3.98677 3.16361 5.28826 2.53237 6.81098C1.90113 8.33369 1.73596 10.0092 2.05777 11.6258C2.37957 13.2423 3.17388 14.7271 4.34026 15.8926C5.50664 17.058 6.99268 17.8517 8.61049 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#F83939"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        P2P trading
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.29673 5.89395L6.11707 7.07226L13.1926 14.1446L14.3723 12.9663L7.29673 5.89395Z"
                                                fill="#F83939"
                                            />
                                            <path
                                                d="M13.1782 5.86838L6.10141 12.9394L7.28087 14.118L14.3576 7.04689L13.1782 5.86838Z"
                                                fill="#F83939"
                                            />
                                            <path
                                                d="M10.2376 20C8.25817 20 6.32319 19.4135 4.67737 18.3147C3.03155 17.2159 1.7488 15.6541 0.99131 13.8268C0.233824 11.9996 0.0356372 9.98891 0.4218 8.0491C0.807964 6.10929 1.76114 4.32746 3.1608 2.92894C4.56045 1.53041 6.34371 0.578004 8.28509 0.192152C10.2265 -0.1937 12.2388 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4374 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58807 1.66667 6.97558 2.15541 5.60407 3.07109C4.23256 3.98677 3.16361 5.28826 2.53237 6.81098C1.90113 8.33369 1.73596 10.0092 2.05777 11.6258C2.37957 13.2423 3.17388 14.7271 4.34026 15.8926C5.50664 17.058 6.99268 17.8517 8.61049 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#F83939"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        Deposit fiat
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.29673 5.89395L6.11707 7.07226L13.1926 14.1446L14.3723 12.9663L7.29673 5.89395Z"
                                                fill="#F83939"
                                            />
                                            <path
                                                d="M13.1782 5.86838L6.10141 12.9394L7.28087 14.118L14.3576 7.04689L13.1782 5.86838Z"
                                                fill="#F83939"
                                            />
                                            <path
                                                d="M10.2376 20C8.25817 20 6.32319 19.4135 4.67737 18.3147C3.03155 17.2159 1.7488 15.6541 0.99131 13.8268C0.233824 11.9996 0.0356372 9.98891 0.4218 8.0491C0.807964 6.10929 1.76114 4.32746 3.1608 2.92894C4.56045 1.53041 6.34371 0.578004 8.28509 0.192152C10.2265 -0.1937 12.2388 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4374 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58807 1.66667 6.97558 2.15541 5.60407 3.07109C4.23256 3.98677 3.16361 5.28826 2.53237 6.81098C1.90113 8.33369 1.73596 10.0092 2.05777 11.6258C2.37957 13.2423 3.17388 14.7271 4.34026 15.8926C5.50664 17.058 6.99268 17.8517 8.61049 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#F83939"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="levels-verification__item-bottom">
                                <div className="levels-verification__title">
                                    Requirements:
                                </div>
                                <div className="levels-verification__requirements">
                                    <div className="levels-verification__requirement">
                                        <svg
                                            width={16}
                                            height={19}
                                            viewBox="0 0 16 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.2053 1V2.72355M8.03526 1V2.72355M3.86523 1V2.72355"
                                                stroke="#2A353D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M0.946289 7.89472C0.946289 5.05101 0.946289 3.62916 1.80125 2.74573C2.65621 1.8623 4.03225 1.8623 6.78433 1.8623H9.28635C12.0384 1.8623 13.4145 1.8623 14.2694 2.74573C15.1244 3.62916 15.1244 5.05101 15.1244 7.89472V12.2036C15.1244 15.0473 15.1244 16.4691 14.2694 17.3526C13.4145 18.236 12.0384 18.236 9.28635 18.236H6.78433C4.03225 18.236 2.65621 18.236 1.80125 17.3526C0.946289 16.4691 0.946289 15.0473 0.946289 12.2036V7.89472Z"
                                                stroke="#2A353D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M4.69922 12.2024H8.03524M4.69922 7.89355H11.3713"
                                                stroke="#2A353D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        Successful registration
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="levels-verification__item levels-verification__item-two">
                            <div className="levels-verification__item-top">
                                <div className="levels-verification__status">
                                    <div className="levels-verification__status-text">
                                        Advanced
                                    </div>
                                    {!loadingUser ? (
                                        user.kycVerified ? (
                                            <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.16992 14.8299L14.8299 9.16992"
                                                stroke="#FF6B6B"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M14.8299 14.8299L9.16992 9.16992"
                                                stroke="#FF6B6B"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                                                stroke="#FF6B6B"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        ) : (
                                            <svg width={35} height={35} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <rect width={35} height={35} fill="url(#pattern02)" />
  <defs>
    <pattern id="pattern02" patternContentUnits="objectBoundingBox" width={1} height={1}>
      <use xlinkHref="#image0_732_2554" transform="scale(0.00195312)" />
    </pattern>
    <image id="image0_732_2554" width={512} height={512} xlinkHref="data:image/png;base64,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" />
  </defs>
</svg>

                                        )
                                    ) : null}
                                </div>
                            </div>
                            <div className="levels-verification__item-center">
                                <div className="levels-verification__title levels-verification__title-orange">
                                    Features
                                </div>
                                <div className="levels-verification__features">
                                    <div className="levels-verification__feature">
                                        Deposit crypto
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.73543 14.5089L4.64127 11.4255L5.81722 10.2422L7.73543 12.1589L14.6493 5.24219L15.8253 6.42552L7.73543 14.5089Z"
                                                fill="#7ED17D"
                                            />
                                            <path
                                                d="M10.2376 20C8.25815 20 6.32319 19.4135 4.67738 18.3147C3.03156 17.2159 1.7488 15.6541 0.991311 13.8268C0.233824 11.9996 0.0356369 9.98891 0.421801 8.0491C0.807964 6.10929 1.76112 4.32746 3.16078 2.92894C4.56043 1.53041 6.3437 0.578004 8.28507 0.192152C10.2264 -0.1937 12.2387 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4375 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58805 1.66667 6.97559 2.15541 5.60408 3.07109C4.23256 3.98677 3.16358 5.28826 2.53234 6.81098C1.9011 8.33369 1.73594 10.0092 2.05774 11.6258C2.37955 13.2423 3.17386 14.7271 4.34024 15.8926C5.50662 17.058 6.99269 17.8517 8.6105 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#7ED17D"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        Withdraw crypto
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.73543 14.5089L4.64127 11.4255L5.81722 10.2422L7.73543 12.1589L14.6493 5.24219L15.8253 6.42552L7.73543 14.5089Z"
                                                fill="#7ED17D"
                                            />
                                            <path
                                                d="M10.2376 20C8.25815 20 6.32319 19.4135 4.67738 18.3147C3.03156 17.2159 1.7488 15.6541 0.991311 13.8268C0.233824 11.9996 0.0356369 9.98891 0.421801 8.0491C0.807964 6.10929 1.76112 4.32746 3.16078 2.92894C4.56043 1.53041 6.3437 0.578004 8.28507 0.192152C10.2264 -0.1937 12.2387 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4375 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58805 1.66667 6.97559 2.15541 5.60408 3.07109C4.23256 3.98677 3.16358 5.28826 2.53234 6.81098C1.9011 8.33369 1.73594 10.0092 2.05774 11.6258C2.37955 13.2423 3.17386 14.7271 4.34024 15.8926C5.50662 17.058 6.99269 17.8517 8.6105 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#7ED17D"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        Spot trading
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.73543 14.5089L4.64127 11.4255L5.81722 10.2422L7.73543 12.1589L14.6493 5.24219L15.8253 6.42552L7.73543 14.5089Z"
                                                fill="#7ED17D"
                                            />
                                            <path
                                                d="M10.2376 20C8.25815 20 6.32319 19.4135 4.67738 18.3147C3.03156 17.2159 1.7488 15.6541 0.991311 13.8268C0.233824 11.9996 0.0356369 9.98891 0.421801 8.0491C0.807964 6.10929 1.76112 4.32746 3.16078 2.92894C4.56043 1.53041 6.3437 0.578004 8.28507 0.192152C10.2264 -0.1937 12.2387 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4375 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58805 1.66667 6.97559 2.15541 5.60408 3.07109C4.23256 3.98677 3.16358 5.28826 2.53234 6.81098C1.9011 8.33369 1.73594 10.0092 2.05774 11.6258C2.37955 13.2423 3.17386 14.7271 4.34024 15.8926C5.50662 17.058 6.99269 17.8517 8.6105 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#7ED17D"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        Copy trading
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.73543 14.5089L4.64127 11.4255L5.81722 10.2422L7.73543 12.1589L14.6493 5.24219L15.8253 6.42552L7.73543 14.5089Z"
                                                fill="#7ED17D"
                                            />
                                            <path
                                                d="M10.2376 20C8.25815 20 6.32319 19.4135 4.67738 18.3147C3.03156 17.2159 1.7488 15.6541 0.991311 13.8268C0.233824 11.9996 0.0356369 9.98891 0.421801 8.0491C0.807964 6.10929 1.76112 4.32746 3.16078 2.92894C4.56043 1.53041 6.3437 0.578004 8.28507 0.192152C10.2264 -0.1937 12.2387 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4375 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58805 1.66667 6.97559 2.15541 5.60408 3.07109C4.23256 3.98677 3.16358 5.28826 2.53234 6.81098C1.9011 8.33369 1.73594 10.0092 2.05774 11.6258C2.37955 13.2423 3.17386 14.7271 4.34024 15.8926C5.50662 17.058 6.99269 17.8517 8.6105 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#7ED17D"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        Futures trading
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.29673 5.89395L6.11707 7.07226L13.1926 14.1446L14.3723 12.9663L7.29673 5.89395Z"
                                                fill="#F83939"
                                            />
                                            <path
                                                d="M13.1782 5.86838L6.10141 12.9394L7.28087 14.118L14.3576 7.04689L13.1782 5.86838Z"
                                                fill="#F83939"
                                            />
                                            <path
                                                d="M10.2376 20C8.25817 20 6.32319 19.4135 4.67737 18.3147C3.03155 17.2159 1.7488 15.6541 0.99131 13.8268C0.233824 11.9996 0.0356372 9.98891 0.4218 8.0491C0.807964 6.10929 1.76114 4.32746 3.1608 2.92894C4.56045 1.53041 6.34371 0.578004 8.28509 0.192152C10.2265 -0.1937 12.2388 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4374 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58807 1.66667 6.97558 2.15541 5.60407 3.07109C4.23256 3.98677 3.16361 5.28826 2.53237 6.81098C1.90113 8.33369 1.73596 10.0092 2.05777 11.6258C2.37957 13.2423 3.17388 14.7271 4.34026 15.8926C5.50664 17.058 6.99268 17.8517 8.61049 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#F83939"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        P2P trading
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.29673 5.89395L6.11707 7.07226L13.1926 14.1446L14.3723 12.9663L7.29673 5.89395Z"
                                                fill="#F83939"
                                            />
                                            <path
                                                d="M13.1782 5.86838L6.10141 12.9394L7.28087 14.118L14.3576 7.04689L13.1782 5.86838Z"
                                                fill="#F83939"
                                            />
                                            <path
                                                d="M10.2376 20C8.25817 20 6.32319 19.4135 4.67737 18.3147C3.03155 17.2159 1.7488 15.6541 0.99131 13.8268C0.233824 11.9996 0.0356372 9.98891 0.4218 8.0491C0.807964 6.10929 1.76114 4.32746 3.1608 2.92894C4.56045 1.53041 6.34371 0.578004 8.28509 0.192152C10.2265 -0.1937 12.2388 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4374 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58807 1.66667 6.97558 2.15541 5.60407 3.07109C4.23256 3.98677 3.16361 5.28826 2.53237 6.81098C1.90113 8.33369 1.73596 10.0092 2.05777 11.6258C2.37957 13.2423 3.17388 14.7271 4.34026 15.8926C5.50664 17.058 6.99268 17.8517 8.61049 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#F83939"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        Deposit fiat
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.29673 5.89395L6.11707 7.07226L13.1926 14.1446L14.3723 12.9663L7.29673 5.89395Z"
                                                fill="#F83939"
                                            />
                                            <path
                                                d="M13.1782 5.86838L6.10141 12.9394L7.28087 14.118L14.3576 7.04689L13.1782 5.86838Z"
                                                fill="#F83939"
                                            />
                                            <path
                                                d="M10.2376 20C8.25817 20 6.32319 19.4135 4.67737 18.3147C3.03155 17.2159 1.7488 15.6541 0.99131 13.8268C0.233824 11.9996 0.0356372 9.98891 0.4218 8.0491C0.807964 6.10929 1.76114 4.32746 3.1608 2.92894C4.56045 1.53041 6.34371 0.578004 8.28509 0.192152C10.2265 -0.1937 12.2388 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4374 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58807 1.66667 6.97558 2.15541 5.60407 3.07109C4.23256 3.98677 3.16361 5.28826 2.53237 6.81098C1.90113 8.33369 1.73596 10.0092 2.05777 11.6258C2.37957 13.2423 3.17388 14.7271 4.34026 15.8926C5.50664 17.058 6.99268 17.8517 8.61049 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#F83939"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="levels-verification__item-bottom">
                                <div className="levels-verification__title">
                                    Requirements:
                                </div>
                                <div className="levels-verification__requirements">
                                    <div className="levels-verification__requirement">
                                        <svg
                                            width={16}
                                            height={19}
                                            viewBox="0 0 16 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.2053 1V2.72355M8.03526 1V2.72355M3.86523 1V2.72355"
                                                stroke="#2A353D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M0.946289 7.89472C0.946289 5.05101 0.946289 3.62916 1.80125 2.74573C2.65621 1.8623 4.03225 1.8623 6.78433 1.8623H9.28635C12.0384 1.8623 13.4145 1.8623 14.2694 2.74573C15.1244 3.62916 15.1244 5.05101 15.1244 7.89472V12.2036C15.1244 15.0473 15.1244 16.4691 14.2694 17.3526C13.4145 18.236 12.0384 18.236 9.28635 18.236H6.78433C4.03225 18.236 2.65621 18.236 1.80125 17.3526C0.946289 16.4691 0.946289 15.0473 0.946289 12.2036V7.89472Z"
                                                stroke="#2A353D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M4.69922 12.2024H8.03524M4.69922 7.89355H11.3713"
                                                stroke="#2A353D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        Government-issued ID
                                    </div>
                                    <div className="levels-verification__requirement">
                                        <svg
                                            width={17}
                                            height={19}
                                            viewBox="0 0 17 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.549 10.479V12.2025M8.37901 10.479V12.2025M4.20898 10.479V12.2025"
                                                stroke="#2A353D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M1.29004 7.03241C1.29004 4.18871 1.29004 2.76685 2.145 1.88343C2.99996 1 4.376 1 7.12808 1H9.6301C12.3822 1 13.7582 1 14.6132 1.88343C15.4681 2.76685 15.4681 4.18871 15.4681 7.03241V11.3413C15.4681 14.185 15.4681 15.6068 14.6132 16.4903C13.7582 17.3737 12.3822 17.3737 9.6301 17.3737H7.12808C4.376 17.3737 2.99996 17.3737 2.145 16.4903C1.29004 15.6068 1.29004 14.185 1.29004 11.3413V7.03241Z"
                                                stroke="#2A353D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M5.04297 11.3421H8.37899M5.04297 7.0332H11.715"
                                                stroke="#2A353D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        Facial recognition (selfie)
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`levels-verification__button ${
                                    !loadingUser
                                        ? user.kycVerified ||
                                          user.verificationRequest
                                            ? "levels-verification__button-disabled"
                                            : ""
                                        : null
                                }`}
                            >
                                {!loadingUser ? (
                                    user.verificationRequest &&
                                    !user.kycVerified ? (
                                        <span class="buttons__04">
                                            Under consideration
                                        </span>
                                    ) : !user.kycVerified ? (
                                        <Link
                                            to="/profile/verification-2lvl"
                                            className="buttons__04"
                                        >
                                            <svg
                                                width={28}
                                                height={28}
                                                viewBox="0 0 28 28"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10.8735 7.58286L13.8602 4.59619L16.8469 7.58286"
                                                    stroke="white"
                                                    strokeWidth="1.75"
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M13.8599 16.5432V4.67822"
                                                    stroke="white"
                                                    strokeWidth="1.75"
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M4.6665 14C4.6665 19.1567 8.1665 23.3333 13.9998 23.3333C19.8332 23.3333 23.3332 19.1567 23.3332 14"
                                                    stroke="white"
                                                    strokeWidth="1.75"
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            Upgrade
                                        </Link>
                                    ) : null
                                ) : null}
                            </div>
                        </div>
                        <div className="levels-verification__item levels-verification__item-three">
                            <div className="levels-verification__item-top">
                                <div className="levels-verification__status">
                                    <div className="levels-verification__status-text">
                                        Plus
                                    </div>
                                    <svg width={35} height={35} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <rect width={35} height={35} fill="url(#pattern04)" />
  <defs>
    <pattern id="pattern04" patternContentUnits="objectBoundingBox" width={1} height={1}>
      <use xlinkHref="#image0_732_2555" transform="scale(0.00195312)" />
    </pattern>
    <image id="image0_732_2555" width={512} height={512} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7N15nGRVeTfw33PuWlVd1dvsrMO+LwIiKCKyRFSIQtCARiTRuGs0r4lv9HWLcYkxRogiGneJokQUFEkAQVAEWYWAgA7bzPRM71utt+495/1jpqEZumd6uafOXZ7v55PPJ5lhTv3SXVXPc8899xwCYyxzGo3GniTpSBAOAsTugNpLAbsR0AeoMkA2gJ7t//kEoEKAphUwRsAmgJ4C5CYoPCxJ3lcsFjea/P+HMRY/Mh2AMbY8Sim70QiPs0iephSdrKCO3lbo40PAqFJ0Lwn1y0jRDYWCcycRRXG+BmOss7gBYCyFlFLFoBGcpYDXQOE0ECodDUCYhMINBPzALbg/JaJ6R1+fMbZs3AAwlhJKKWq1WqcqSX9JwNkASqYzbVdVwNUg+bVCofAL02EYYwvDDQBjCaeU8pvN9msI6v9A4XDTeXbhUUB9ySt4/0FENdNhGGPz4waAsYRSSnmtevtCkPoYgDWm8ywGAaMAPusW3IuJqGE6D2PsubgBYCxhlFJ2q956C4g+CGCt6TzLNABFn/CKzleJKDQdhjH2DG4AGEuQoBYcG5G6lIBjTWeJ2f0S4m3FonOb6SCMsW2E6QCMMUCNq55mrfkfktRvM1j8AeAIAXlrs9H8ihpXPbv+zxljuvEMAGOG1evtEwTkdwHsYzpLhzylSLyhUHB+aToIY3nGMwCMGaKUchr11qcE5K+Qn+IPAHuSkjc2aq1PKKVs02EYyyueAWDMADWp+lpO+4eAeqnpLGapW9uRd265TMOmkzCWN9wAMNZhzWbzAEi6GsCBprMkxAaycLbneQ+ZDsJYnvAtAMY6qNFon4yI7gQX/9n2VRK3NRrtk0wHYSxPuAFgrEOateaZpOTPO75vfxoodJOS1zWrzT8xHYWxvOAGgLEOaNVb54DoxwAKprMkWBGCftKqtf7UdBDG8oDXADCmWaPROJWU+BkAz3SWlAgg1dl+l//fpoMwlmXcADCmUVALjpOkfgGgy3SWlKlLiNOKRec3poMwllXcADCmSbPZ3B8StwG0wnSWdFLDEDjB9/0NppMwlkW8BoAxDZRSXVD0Iy7+y0ErIemnSqmy6SSMZRE3AIzFTClFzUbwNSgcZjpLBhzUagTfVErxbCVjMeMPFUsspZQYHaydEsr2S5Si/ZWiPaRUqwFUZFsWQBAgsgAVQQEQFAqihhA0AcIIlBq0LXG3cNX1/f2Vu4hIdSJ3s958H0Cf68Rr5Yf6G7/of6Ejr6QUNZvNvUjSISDsrxStFsA6JbASSnUD5G//TysApgBVBVFDKYwSsBlKPQXgKVh4xPO8PxKR7ERuxhaLGwCWGBNbG+tbsv3OUKqXyFDuE4ayW8p4rvw8z4pKJWeD57vXCpI3BZH360qFRuMYe7bWdOswZeEu8Ir/uDXJwjE6dgucmlL9rtV6IUicTFAnKuAwxLdocxpQ9wHiXoL6pRu4N1EPjcc0NmPLwg0AM2rr5qmzlZLvDtrq+VEYlVVM1+hEgOfZKBRs+L4NYT3nra4A3EOEqyBwVRyFRSnltBrB7QCet9yx2HMp4C6/4J5AROFyx2q1WodA4tVK4dXY9vvq1HdhRMBdUuG/hY0rePtjZhI3AKzjRkamD2435WeCIDo9DKW/63+xcJ5noVh04BdtCFrU2/thAr7Zlu1vdXV1bV3Ka7carY8ohY8u5d+yhSHC//MK3ieW8m+r1eoaRzgXKuCNAA6KN9mS3Qeo/4xUdHmpVBowHYblCzcArGO2bpx6cxhF/xC05d4qrkt9AESEQtFBV9mBYy97XWsbwDWK5CWFQuHmhf6jRqOxnpR4CECsDQ17joYieXChUHhywf+g0TiFlHgngLMAOPqiLUuggB9air7gltw7TYdh+cANANNucGDqfa1W9JF2O4p1D3whCF1dDkpdLoSI/61MwG1KqU96Re/aXS0gbNZbPwLw6thDsLlc6Re983b2HyilqFVvvZyIPqiAEzoVLB7q1xD4qO/7N5hOwrKNGwCmzfDW6gWtVvj5VitcFee4RECx6KLSrafwz+FuReJvCwXnl3P9ZbPZPA2Sru9EELaNIvnSQqFw01x/12i0TyYlPwfgmA7HihndKIB/cIvub00nYdnEDQCL3fhQ9ahavf2TVhDtGffYvm+jp8eHZRt56/6XIvn+QqHw+Ow/bNVbtyvgeBOB8oqA27yi98LZf9ZsNveBpH8GcK6hWDooBVwRyfZ7l7o2hbH5cAPAYqOUsgcHpr7ZaIQXxPX43gxhEborHool47dwm4D6sFfw/pWIomazeQYk8aE1Jgh1uu/7NyilrKAR/K0CPobsrsGYgKIPeEXnq7yvAIsLNwAsFkMD0y9uNIOfhmH827YWSw66u71OTfcvCAG3w8JFKlJfBehFpvPkk7qVLPprRPiGAl5gOk1nqF8pUq9fzCJIxuaTnG9UllqDA1P/Uqu13xf3dq1CELp7PBSLxq/65xMAcE2HyLk8/g7GCXiTV/R+ZDoISzduANiSDQ2prrA5dUej2T4k7rEdR6CvvwB7+Y/1MZZR6ktewXsvEQWmk7B04gaALcngU819W1HjrnY76ol7bN+30NtfWOxGPozlkPp1EHqvqlRoxHQSlj78DcsWbXDzxGn1ZnStjFTsc/NdZRfd3byNPmOL8EcI9Qrf9x81HYSlC8+vskUZHJx6db0Z/beO4l/m4s/YUuwHKW5pTbf4+Gm2KDwDwBZseHP1/OlG83Il43/fdHf76CondrEfYymghknSaV6Xd7/pJCwduAFgCzI4MH1urd76oY7iX+n2UC7nbSE3YzpwE8AWjhsAtksDA+MvbjXkTTJSsd8y6upy0N2T1b1bGDNiiyJ5Au8VwHaF1wCwndqypbF30FDX6yj+hSIXf8Y0WEtSXKsmVK/pICzZuAFg81JK+WGreXcUydjn513HQm8vL/hjTAvCIS23/UOl4l+sy7KDGwA2r4GNk78Ogqgv7nGFIPStKID4OX/GNFKnthrBJ0ynYMnFDQCb09ZNU//UbIbP0zF2X18BlsXFn7EOeH+z1jzbdAiWTPwtzJ5jeGDi2Go9/K3UsOKfN/phrNPUiIQ8ulgsbjKdhCULzwCwZ1FKUaMlr9VR/B1HoFLhx/0Y6yxaIcj6iukULHm4AWDPsmXz5JfbbblSx9i9vT7f92fMBIUzW/XWn5uOwZKFv43Z04aGmvvVp+qPRFLG3hiWSi56eNU/YwbRUBA6h1QqNGo6CUsGngFgT2s3Gz/WUfyFIFS6eeqfMbPUKtduf9R0CpYc3AAwAMDgwMQZrVZ0qI6xyxUPQvBkE2Pmqbc0m839TadgycANAAMABG35daXiH9eyCKWSHf/AjLGlcJQk3huAAeAGgAEY3lo9P2jJ3XSMXal4vPCPsQQh4LygGhxlOgczjxsAhmYr+IyOcS2LUCjyTqSMJQwpof7WdAhmHjcAOTe6tf6CdiD30DF2qcsFX/wzljwKeG2j0djTdA5mFjcAOdcMgi/quPdPRCiV+OqfsYRySIl3mQ7BzOIGIMeGhlRXEIRH6xi7ULR55T9jiUZv4NMC840bgByLwsmP6tjyFwCKfO+fsYRTq1r11pmmUzBzuAHIsXaA1+sY17IInmfpGJoxFieiC01HYOZwA5BTYwONPcN2uFrH2Hz1z1hqvEIpVTYdgpnBDUBOBTJ8n47FfwDg+3z1z1hKeEEjON10CGYGNwA5FUbRWTrGFURwXN75j7HUUHiF6QjMDG4AckgpJcK23FvH2J5v8bP/jKWIIrxcKcWf2hziBiCHxkfqZ+o49Q8API+v/hlLmTWtVosPCMohbgByqBVEf6ZrbMfjtxRjaaOUeIHpDKzz+Ns6h2QotXzYhSA4Ni8AZCxtCHq+E1iycQOQQ6GUWvYAt23B9/8ZSyGl6FjTGVjncQOQM0opkpEq6BjbdvjtxFgakcKBpjOwzuMVWzmzZcvkMVLqWfFr29wAmCRrdbSf2ohoeATtsTGo8UmEE5OQ1eq2/6nVASioVgAAUFEEFUXb/nEUAiQAse13KGz76f8drgOyHVilIqhUgtVdhihXYPX2wF7ZD3vtWrh77AZYfPsntQiVarW6uqura9B0FNY53ADkjnqRrpG5AdCv9egfEDzyRwQDA4i2DiEaHUM0PQ3VaECFYWyvE83xZzsfnUCuAyoUYfWUYfX1w1m9Cu5++8A77BDYK/pjy8b0sCxvfwDcAOQINwA5Q6ADdI1t8el/sYlGx9F48EEEv38UweNPIBoeQTQ9DUhpOto8FFQQQAUB5OQE2k9uRHP2X9s2RFcZzu7rUHz+8+AdeCCcPXYHubxtdFII6FkbxJKLG4CcURGt0zW2sLgBWBIp0bjvd6jfcReCP/wR4eDQ09P0qUYEsuxttxBcF3AchKPjmPr5jcDPbwRZFpzd1sHdZy+46/eGt+96iO6K6dS5pZTiaZqc4QYgZxSwUtfYgmcAFkS226j/8tdo3H0PgsefRDQ2luAr+0VyHAjPAxwX5HrATt4TKooQPLURwVMbgZt/BQCw+nvh7rMe3vq94B2wP+zV2t6ubAdKETcAOcMNQM4QpLaTv7gBmF9702ZUr78JjXvvQ7h1CJBz3WVPIcsC+R7I9UCet20h4TJEo+NojI6jcec924bv74N/4AHwDtof3kEHQBT8OFKzORDRCtMZWGdxA5AzUpKrY1x+/n8HUqJ2y69QvflWtDc8Admom04UH8cBeT5EwQNsLW+np0WjY6jddjtqt90Osm24+62Hf/BBKBx5GKz+Pq2vnTsk9f4yWeJwA5AzRNDyrBZxBwAAqN9xJ6rXXY/mw48C7bbpOPFxXIhiAeT5xh73U2GI1sN/QOvhP2DyqmvgrF2NwtFHoHDcMfyUQTz4Q5wz3ADkj9IyqJZR06H+mzswfd0NCB79I1Q7A4v3tiPbBhWKoIIPWMn7qmhvGUR7y/WY+vkNcPfeC4XnHYni0UfwQsKlktwA5E3yPtVMK4LSclmqlIJS+bkVEI2OYuKKK9H4zZ2QjYbpOLEhIQC/AFEqaJ/ej41SCB5/AsHjT2DyR1fDO3A/lE58AfwjDgXx5kQLJ/RcHLDk4gYgZ4ioqmtsBQXK+EVE/Td3YOpHV6P95JNQMkPfl44DUSyBCoV0d3FKPX2bQFTKKB1/LIonHs+3CBZC0YTpCKyzuAHIGSUwqW1sCehZYWBWODGJiW98F4277oFqNXf9D9JCEEShCCoWATt7G/LIqWlMX38Tpm+4eduswEkvROHwQ9Ld4GhEBG4AcoYbgJwhhXFdY0upYGVoM6Bw42aMfftyNH/3QHae0wcAIUDFEkSpa6fP6WfGrFkBe0UfSiefhNKJz9+2ORF7mpKKG4CcycGnP3u2bJk8jpQ6jaQ4OlTyQBmptVKpIiS5Ukn7uYf9ECybIgJCKBJhFM15uUcEOLYF2yHYtoBtCwhLQAiCJQgknrvaXyoFFQGRkrC3/7dpV7/zLkz94CoETzyZqdWN5DigYglUKOb+ky9KJZROfD66Tn4RLxp8xmNQaILQC6AXwLM3XVCYAmFYAaNEGIGiDYB8FAKPSikfKhaLm4ykZkuW86+B5FNKicHBqT9HiPPbUfQ8GWJ1GMlYJtqFIHieBde14boCjity/Thf9cabMPn9/0I0rm2SxAzXhejq2vYIH3sWchwUjz8W5TNOhdXbbTpO2m0GcDugfiOU+IVTdO4joux00BmU32/7BBsYUEVSE38vJb0mDOT+cRV8YNt+/cWCDd934Hr5Lvgz6rf8GuP/+QNEIyOmo8SKbAdU7gL5BdNREo9sC8XnH4fKy0/nGYH4bAapn0Hiaq/o/Q8RZWhjjGzgb/8E2bp56mwl1f9ttsLnS6liO1uXaNuVfrHkwPdtXgO1Xf2uezDxzcsRbt1qOkqsyLZB5TIX/iV4uhF4xRkQFW27ZueOAsaI1JVCisvcknuP6TxsGy4Fhiml7MEtEx9pB3h7EESx7m0qBKFUctDV5fJJfbM0738AY5d9A+Fgxo4+t2yIcmXbxj1sWYTnofSSF6Lr1FP4/IH43a2ILvZ953IiysihGOnEVcEQpZS7dWD60lYrfH0UxrsHt2URyhUXxaLDU/yzRKOjGLn4MrQeeihTi/sgCFTsgugq8yc6ZqJUQvllp6HrxScCIrZJObbNI4ro077vfIcbATP468KALZsn/q7Vij4WhSrWS4unr/jLbiZW48dGSox983JU/+cGIAxNp4kVFQoQlW4uTpq5u++G7nPPhrvfPqajZNHDBHzYK3o/NB0kb7hKdNDYcO0V1Vrw3XYQ9cQ9dqnkotLNhX9H09dej8nvXZGp7XoBgFwXors7kxv4JJl/6MHoOe9VfBKhFnQThHyb7/uPmE6SF1wtOmBgQBVJTl3ZaIRnqpinnm1boKfHh+dncAu+ZQg3b8HwZz6H9sAW01HiRQKiUtm2ex8zglwH5Zedjq5TT952dgKLUxvAv3oF98NElJ2TtRKKGwDNBjdOn9Nsty8PQxn7SqKusoNKxeP7/DuY+M8fYOon1wBRhnbvA0B+YdtVPxedRHDWrUXP686Du+cepqNk0f0U4QKv7D1oOkiWceXQaGDT1GWNevDXcY8riNDT56NQ4J2cZ2s98ihGPncxorGMbeRj2xDdPbx1bQKRECiddCLKZ70MwvNMx8maJqA+4Bf9L5gOklXcAGgwNTW1Ympc3tlqhXvHPbbjWujvL2Rqz/1lC0MMX/JlNG67Y/uJRNlBxRKoUuFZnoSzV/Sj5/w/g3fAfqajZA4pfNstum8hogydxJUM/K0Ss40bm/ursH5Xuy1j306sULDR2+dzMZgl2PA4hj71WcgJbYccmiHEtqt+n59BTw0ilE44Ht3nnsWzNTEj4I4gCs4ul8tDprNkCVeSGG3dOnFqq6auDaMo9k9/V5eD7h4uBrNNfO+HmP7x1VAZvNdP3d28wCylnDWr0fvGC+Dsts50lKx5jCy8wvO8h00HyQpuAGIytGXiNbVa+H0p4/+ZVioeyhW+opgRjk1g5FOfRfD4E6ajxIsERHc3qMBb+KYdOQ7KZ56O8mkvAe+9HSc1QpJO9bq8+00nyQJ+Z8ZgdMv0edP14PtRFN/+/TPKFQ8VLv5Pq918C8Yu+wZUO1tPCJHjQPT2AhYv7MwS/5CD0Pv610KUu0xHyRA1TJJO4yZg+bgBWKahTRPn1ZrhFXzlr9/oZV9D7YZfABnaxRfYvptfdw9fKWaU6K6g/6/+Au76vU1HyRA1TBG91Ct7/2s6SZrxN84yDG0eP7relHdGkYp9F55SyUVPLz9WBABRtYqhD/0j2ps2mY4SLxIQPd18al8OkBAov/JlKJ9+iukoWTIgEb2gWCxuNB0krbgBWKLh4draerW5IWyr2L+9fd9CX3+RLwgBtB58BMOf/mzmtvKFbcHq7eOtfHOmcNzz0Pvn5/JTAvG51yu4LyaiqukgacQlZgmUUu6mJyc2BUG0Mu6xHUdgxcoi7+kPYPLH12DyP38AyIyt8ne9bff7eZV/Ljm7rUPfmy6EvYLPE4jJNV7BfRURZeuLogO4yizBlk1Tv6jXg9jn8oQgrFxZhO1wYRj+7L+hccedpmPEjkoliHKF7/fnnCiV0P+mN/DpgjEhwge9gvdJ0znShr+FFmloy/Q7pqdb/65j7L4+H4VivqeEVbuNwQ9+HMFjj5mOEi/Cto19CnyID9uGbAu9F7wGheOeZzpKFoQS4iXFovNr00HShBuARdi0qXlA2Ko/FEUy9kV/xZKD3t58b/QTTk5h8O8/hGhk1HSUeAmC6O7lXf3YcxGhcuZpKJ95hukkWfCU13aPpm4aMx0kLXiueREoal6no/gLi9Ddk+8V/+0nN2Lru/42g8VfwOpbwcWfzU0pTF17PcYv/wFUFJlOk3Z7Bnbwr6ZDpAnPACzQwMD4exvVSMubq6+/kOuT/ep33oPRz30BKgxNR4kV2Taorx9kxd4zsgzyDtoffX91IYSf74uBZRPqdN/3bzAdIw24AViA8fHxnskxNRRFMvYb9L5vo39Ffp8Dr916G0YvuTSDK/1diL4+gHiSjS2cu8fu6H/HmyBKJdNR0uyPXsE9gogy9uxw/PjbaQEaVVylo/gTEXpyfN+/euNNGL3kS1z8Gdsu2LgJI1+4FHJq2nSUNNsvaAbvNx0iDXgGYBc2b546MGi0fy+liv1nVS67qHTnc7qvet31GPv6tzNX/OF62zb44X0c2DLYq1dixTvfAqun23SUtKq2o2BfPj545/gSZVekvEJH8RdE6CrnczewyR9djbGvfStzxZ88D1Y/F3+2fOHgMIY//0WEwxlbFNs5XY7lfcB0iKTjb6qdGNw8dWKtHvxaaTh8Jq8H/UxcfgWmfnwNoOOHahB5PkRfL/gjxeJk9VSw4t1vh72y33SUNGpKRAfwWQHz4xmAnQhl9EUddYqIUOrK34Y/U1dfm9Hiv31rXy7+LGbRxBRGLrkU0ei46Shp5AvY7zEdIsm4AZjH8HBtXdCSR+oYu1Syc7fX//TPrsPEd/4zg8Xfhejt5619mTbR+CRGvngZLwxcCqXerJSqmI6RVNwAzCNsBZfquPcPAKWufE39126+FePfujx7xd91IXr6+cKfaRcOj2L44kshp/nQu0UhVFqN1htMx0gqbgDmoJSiVqBepmNsz7dg2/n5sdd/exdGv/SV7C34cxwQr/ZnHRQODmPki1+FbNRNR0kZeofpBEmVn0q0CIOD9b+KQqnlMr2Uo8N+Gvf+DqOf+0Lmij8sG6KvH8TH+bIOa28ewOhl34QK2qajpMlBQS041nSIJOJvsDnIoP1uHeMKQfD9fGz5G27cjOF//jxUlLHiTwKirx/g4s8MCTY8jvHvfD9zt9R0koTzTWdIIv4W24FSymkF0aE6xvZ9G5SDKWNZq2Hrh/8RaGfsKoUAq68PZPPe/sysxn33Y+rqa03HSBF1vlKKP7g74AZgB0ND1TdJqbT8XDw/B+8/KbH1/R+CnM7eimXR0wu4+VrAyZJr+oabUbv1NtMx0mJto9E+znSIpOEGYAdhW16ga+w8TP8PfujjCIeyt/smVbpBfn4PbWLJNHHlT9B84CHTMVLBInWG6QxJww3ADqJ2dLSOcR3Xyvyz/yMXfwmtR/9gOkbsqFDk09lYMkmJ8W//J9qbB0wnSTyl1OmmMyQNNwCzDD9VWxeGUss3vedle/q/et31qGdwOpJcF6KbD2RhySWbLYx+5ZuQtZrpKAlHxyulyqZTJAk3ALOEVvv1uhbWum52G4BgwxMY++Z3s7cqWYhtW/zyLn8s4aKxcYx98/LsPXIbL6fZbB5jOkSScAMwi5Q4VdfYXkYbANkKMPxPnwHC0HSUeBEgevsAkc3fG8ue1sN/wPTPrzcdI9FIkZZbvGnFDcAsSqmDdIwrBEFY2byKHPrQxxBNTZmOETuqdIN4xT9Lman/vhGN+x4wHSOxCNwAzMYNwCxRpFbpGNd2svljnvjGdxE8/oTpGLEjvwBR5EV/LIWUwsTlVyDcmr0nceKgAC0HvKVVNivTEiilrLAtfR1j2xncOKZ+1z2YuvY60zHiZ9kQPbzoj6WXbLYw9o3vQmXttlw81psOkCTcAGw3uKl2iK6x7YxN/8tGA2MXfyl7i/4IEL09APHHgqVbe2AL7xQ4t7KaUL2mQyQFf9NtR1akbWrIylgDMPSJz0DWG6ZjxE6Uu0EO3/dn2VC9+VdoPvSw6RiJ07bbe5rOkBTcAGwnldxf19hZWgA4fc21CB7J4GY/ngfizX5YliiF8e9cATldNZ0kUSTJdaYzJAU3ADOIVuoa2srIDoDh4CAmLr/CdIz4kdi2zz9jGSOrVYx/94rs3a5bBiLqMp0hKbgB2E5J0rdDVEY2khn86CczubBIdHfz8b4ss5oPPYzabbebjpEYkhuAp/G33gxS2t4UWSj/E9/8LqLhEdMx4uf7oAIf8sOybfKqnyIaHTMdIxFI6dnuPY24AdhOKNJ2VB+lfAYgHBzE1HUZ3GFMCFjdPaZTMKadagWY+MFVpmMkRfaPZV0gbgC2k1AtXWOrlN9/G/rU57K31S946p/lS/Ohh1G/+17TMcxTIjAdISn42287AdL2XJtCehuAyZ/8FOGmzaZjxI48H+Tz1D/Ll8kf/gSymu+nAhTADcB2PBUyQ5C2szTTOgEQTVUx9f3/Mh1DA4LorsQ8JMHdfTd4hxwIe+UKiHIXRKkIWa1BTk6jvXUrmg8+jHBoON7XzQMh4K7fG95B+8Pp64WoVCB8F9F0DdHUJNqbtqD54EOIxidNJ008Wath8sc/Q+/rX2s6ijmCG4AZ3ADMkErbCjeV0hM6Rz79L1Dt7H1WRFcXYMXz1heeh65TTkLpRSfssqnoPudshEMjqP7iFtRv/y1UFMWSIatEVxfKZ7wUxeOPgSgWn/P3zrP+r3MQbNqM6vU3oXHv/entujugfsddKB77PHgHadv6JNFISu7Ct0v36rQYDW2eumi6Fnxdx9h9fT4KRWfX/2GCNO69H8Of/OfsfZHaNqwVq2J55xdPPB7dZ71sW0OxSOHwKCb/6ydoPvj75QfJGiKUz3gpuk47BcL3Fv3Pg42bMfGDq9B+4kkN4bLBXr0Kq/7v+0BW9s4p2RUh6Wi3y73PdI4k4DUAT4u0vSHCMH1FdOzSr2av+AMQle5lF3+yLfSefx56z/+zJRV/ALBX9qP/LRehcvbLM7NPRByE76HvzRei8sqXLan4A4C7x25Y+Z63onjC82NOlx3h4BBqt/7GdAwjAgRbTGdICm4Atlu5rudBXY/rRVG6CunklVchGsveM8Pk+yBvaUVlhij4WPHOv0bxxBiKCxHKp5+C3jecD+KnEWD1VLDife9C4fBDlz0W2TZ6LzhvW4PF5jR97fWQNW1Ln5IqKJVKGdzQZGn4W2c7IgosoefxkDBMz71e2Wxh+qprHuPK+wAAIABJREFUTMeIHwFUXt4xv6LgY8Xb3wR3331iCrVN8dij0XvR63M5HTtDVMpY8Y63wFm7OtZxy6efgu5zzo51zKyQjTqmfvo/pmN0FuFRIkrPF7Jm3ADMYtnQ0hmGYXpWAY7++2WQLW1bIhhDxRLIXnqBnSn+zt57xZjqGYWjDkfvG1+XyyZAVMpY+a63wl6zSsv4XaecxE3APGq33Y72QH5mxJXCg6YzJAk3ALMIy3pUx7hRpCBl8m8DhANb0PjtnaZjxE8QRNfSj3rQXfxn5LEJ0F38Z3ATMA8pMZnFGb95CMJDpjMkCTcAs1hC3apr7CBI/izAyBe/Asjk51wsUSovece/ThX/GXlqAjpV/GdwEzC31sN/QOuRP5qO0RFKqntMZ0gSbgBmEYou1zV2ECT7tlP7qU0IHv2D6RjxsyxQaWkr9Ttd/GfkoQnodPGfwU3A3KZ+dp3pCJ0gvdC7zXSIJOEGYJaVu1UesWyh5QZ4ECR7L/2RL30lm4/9dXUt6bE/U8V/RpabAFPFfwY3Ac8VPP4kmg89bDqGbg9QN2Xv8aZl4AZgB45Dj+gYN2hFiV0HEGx4HO0Nj5mOETuyLFBh8Sd/mi7+M7LYBJgu/jO4CXiu6Z/+dyYvAp5B2m7xphU3ADuwbftKHeMqldzbAGOX/kc2P/ilxV/9J6X4z8hSE5CU4j+Dm4BnCzZuQuN/M7xGTsqfmo6QNNwA7MD1w0t0jd1sJu82QOvRDQgyuGUqWRZE6bn7x+9M0or/jCw0AUkr/jO4CXi26Wuuy+bFAGHSK3k3mY6RNNwA7KC3t3fCc62ndIzdqIeJ+2yNffXrQIqPK55XqQuLufxPavGfkeYmIKnFfwY3Ac9ob9mayVkApfAzIsreyWbLxA3AHGxbz9MAUiq0EnQbIBzYks0DU4RY1NV/0ov/jDQ2AUkv/jO4CXhG9cZbTEeInQC03NpNO24A5tBod39cCNLyQHyj1tYx7JKMff3bmZzuo2IJC736T0vxn5GmJiAtxX8GNwHbBBsey9qFwVa34PL9/zlwAzCH9eup6TpCy4YRjUYImYCiK2s1NB/I4K6YRBClha38T1vxn5GGJiBtxX8GNwHbTN+UnQXzSuHrRJScK68E4QZgHq5r/52OwwGVUqhXzb8Xx795ORAl53ZEXEShsKBd/9Ja/GckuQlIa/GfwU0A0LjvAYQjo6ZjxEGSpb5mOkRScQMwj5Vryze5rrVZx9jVamB25l1K1G+7w2AAjYq7vvpPe/GfkcQmIO3Ff0bumwApUbv5V6ZTxOFHvu9nb5OTmHADsBOOEH+vY9woUmjUzc0CTP74p1CtprHX14U8D+Q4O/1vslL8ZySpCchK8Z+R9yagfvudkM2G6RjLIhR92nSGJOMGYCdW79F9ueNaWraOrE6beyKlev0vjL22TrSLe/9ZK/4zktAEZK34z8hzEyBbLTTuus90jKUj/NwtuXebjpFk3ADsgueKv9ExbjuUqBt4IqD91CZEIyMdf13thAC5/vx/ndHiP2NbE3CBkSYgq8V/Rp6bgNqvbjcdYamkkPQR0yGSjhuAXVi9rvs7nmdruYc0Odnq+PkA45d/P6OP/hXnf/JPCPS+8XWZLf4zCkcd0fEmIOvFf0bXKSehfPoppmN0XHvzAIKNWpZCaUUK33FL7p2mcyQdNwALIBy8Rse4UirUqh28FSAlWg/8b+der4NEcf6Nf7rPOQv+IQd1MI05nWwC8lL8Z1TOOhP+oQebjtFxKVwwXI8o+n+mQ6QBNwALsG5dz92Fon29jrGnp9sIQy17Dj33ta69Diow/whi3MhzAcue8+/8ww9B18kv6nAiswpHHYHeN5wPWsDjkEtl9VSw8j1vz03xBwAQoffC87cdMZ0jjbvvhWqlZxddIvxjsVjcaDpHGnADsECtdvfZjitqcY+rlML4WGdW5E9fd0NHXqfT5j3yVwhUzn55Z8MkROF5R6L3Ij0LA0WljBXveAvsVStiHzvpRKGQu1sBstFE497fmY6xUPe6vvs50yHSghuABVq/nppdJe+1tNjzZRcgCCJUNW8OFI2OIhwc0voaRhCBvLkX/xWOPRrOmtUdDpQcOmYCcnnlv4PSSSfA6qmYjtFR9Tu1bIwat4AkLuRd/xaOG4BFcCJ5p+MJLY8F1jXvCzB51U+zufjP9wExd1NWOu6YDqdJnjhnAvJ85T8bOQ4KRx9pOkZHtf6wAXJyynSMXaBb3ZLLm/4sAjcACzA4WF09sHHiRyPVYEvQivriHNtxBHp7faxatbiz6xereWc2H4elQmHOPxeeB3e/9R1Ok0xxLAzM24K/XfEPydliQKXQuD/pC4jVqa1G64lGrfVRNaa6TadJA24AduLxx5U/sGniytp0c0ujEb5aShXbz8uyCX39BaxaXUKxtPPd65YrGhlBOKpl4sIsEiDXm/Ov3H3Xg+y5Fwbm0XJuB/C0/3O5++0Dss3vvthJ9XvSsA6AVhDhI4EfbGjWm+9USvGXwE5wAzCPgYHx9wqMjTfq4blKxnfjn4hQqbhYvbqEQqEz783JH10NIKPT//Oc2GT19XY4TfIt5XYAT/vPjWwLopyvpwGCDY8jmkj6bYBtFNAP0CWtRvBAs9r8E9N5koobgB2MDzT22vjk+IZGNfrXsK3m31puCVzPxurVJZQrHkjHUYPzaNyVigU8i0aFnez8Vy53MEl6LOZ2AE/775xVydkss1Jo3He/6RSLdRAEXdeqtb7BtwWeixuAWbZsnvi7yUZ9Q9CK9olzXCJCpdvDypUFWHbnCj8AhIODiMYnOvqaHSFo3ul/ALmbnl2MhdwO4Gn/BXDyN7vcuDd1DQAAQBHe2PKD+xuNxqmmsyQJNwAA/vAH5W16auK39Vr4mShSsVYO2xFYubqIctmNc9gFm/75Ddlc/e/OP/0PAHJ6uoNp0mdntwN42n9h5FQ6psPjFDzxJGQt9u1QOmVPUuL6Zr31aaXi/Z5Pq9w3ABs3Nvf3nYnNrWZ4XNxj+76NlauKcGxzP+bGfWlYuLN45M1/9Q8AcoobgF2ZayaAr/wXLpfvMSnRfPhR0ymWgwD8favRunF6ejr3b/JcNwCDG6fPiVr1h4Ig6o977ErFRf+KAkQH7/U/h5QItw6ae32NyN/58ozWE091KEm6zZ4J4Cv/hWtvGYRstkzHMKL1+0dMR4gBnexY7h2t6dZhppOYlL+bWNtt3Tz1V/VG66syxhX+M7p7fHR16X20byFqt90OhKHpGLEjxwV28ThbNDaO9pZBOGvzuxPgQhWOOgK4SMBZu4aL/wK1HnrYdARjmg8+su22osmLm3jsrSzc2mi0zyoUnF+ZDmNCLmcABgcmP16rBf8Rd/EnAnr7Coko/gBQu/U20xH02MX0/4xm4jcuSY7CkYdx8V+Exv0Pmo5gjKxWEWxK3xHB8+ghJW9o1VvnmA5iQu4agIGBiX+q1dqxHxVJBPT1F1AsJmdSJXj0j6YjaLGr+/8zqjfdCtnozEFLLD+CPz6G4LHHTccwqvVQFm4DPM1TwPebteZZpoN0Wq4agMEtU+9vVqN/0LEovqfXh+8np/hHIyPZXAlP228BLICs1VC9+VbNgVjeTF59rekIxjV/n+qFgHNxQHRls9p8mekgnZSbBmBwoPbW6nTwz0rDjni9vT6KxWRM+8+o3vob0xH0cDws5sZN9cab0d48oC8Py5XqL3+F4PEnTccwrv3kU1DtzB2650LQlfV6+wTTQTolFw3A4OapFzbqrS/qGLtccbXv5b8UrYze/xbe4vZTUK0Ao1/5JmS1qikRy4vWI3/E1I+uMR0jEVQYor1xk+kYOpQsyGuazWasm8ElVeYbgMHB6upm0L4hkjL2/19930KlsrD70Z0WPLXRdAQ9drL733yisXGMfvXbkK18PrbFlq+9dRBj3/gulJSmoyRG67FszoQooB+SfqSUKpnOolumGwCllAia7Xvj3tMf2H6Mb9/cR9GaJltBNjcpIVrw/f8dBY89jtEvfS23z26zpQsHhzByyWVp3gFPi4wvhDyy1Qi+ZTqEbpluALZumvx+0IrWxj0uEaG3z4cQyXwOtnnHnYDK3pUK2fai7v/vKHjscYxeyk0AW7hwcAjDF385mw31MgWPPZnJbcZnObdZC95qOoROmW0Atm6demW9EZ6nY+xKxYPjJHcr6drd95qOoMcSr/5n4yaALRQX/52TtRrCoWHTMfQi9flWtXW46Ri6ZLIBGBhQxVYj/IGOsT3fQlc5eYv+ZmtvyObUHLnx/Ny5CWC7wsV/YXLwRISvBL6llEr2l/4SZbIBIDl1ZdiWsd+gJyL0dMe+nCB20fi46Qh62PF9BrkJYPPh4r9wOXnE9uhWo/Ue0yF0yFwDMDpaf0GzGWrZzKGr7MJ2kv0ji6aqUFlc7U60bQ1AjLgJYDvi4r847YEtpiN0CH2s0WjsbTpF3JJdzZagPt28SkoV++o82xYoJ3zqHwBav7vfdAQtyHG0HD7CTQCbwcV/8dqbt5qO0ClFUuJfTIeIW6YagMEt028LArlGx9iVbg+UgtOvmr/P5illFOP0/464CWBc/JdG1mp5+pmdm7VdAjPVAATN8JM6xnUcgUIhOfv870z7iadMR9BCxTz9vyNuAvKLi//y5Oc2ACCg/tF0hjhlpgEY2jr1gaAd9egYu9KdzN3+5tIeHDIdQYu47//PhZuA/OHiv3ztzflpAAB1aqPROMV0irhkpgFoNMIP6BjXcUSiTvnbFVnN5hcZ2Z3Zd4GbgPzg4h+P9pbcrAMAAJCyPmQ6Q1wy0QAMbZ54bdiW3TrG7upa/uYznRKNjQFR9nYABAiwOteEcROQfVz84xOOjJqO0GHqpa1q6wjTKeKQiQagHUHLfRkhCIVieq7+W398zHQELcjp/O+Am4Ds4uIfr2g0bw0AoCz1DtMZ4pD6BmDjxub+rWa0v46xSyUnFSv/Z7SfzOgJgB28+p+Nm4Ds4eIfv2hyGioMTcfoLEWvV+NKy5qzTkp9A2Ch+TEFPQdSFErJf+5/tvamjO7KZZk7d4GbgOzg4q+JUojGJkyn6LRi02+fazrEcqW+AYhCdaaOcW1HwLHT9eMJRzJ6MIfBBgDgJiALuPjrFY2OmY7QcSTx56YzLFe6KtwOhjaNH6Xr0b9CIV1X/wAQjWezCyfL/NuUm4D04uKvXzievwYApF5aq9XWmY6xHOa/WZchgvh7XWOnafHfDDVdMx1BCxLJOHqZm4D04eLfGdFIDhsAQFhwXmk6xHKkugEIo+jFOsYVFqVu+h8AZDswHUEPw7cAZuMmID24+HdONF01HcEMUqeZjrAc6aty2yml3HZbrtUxdpo2/nmalECU0ZW4IllvU24Cko+Lf2fJnDYABLxUKZWsL6hFSG3w4c3T5ysJLc/oeW5yrjgXKhobg6aHIcwioeUUwOXiJiC5uPh3nqzXTUcwQgH97Xr7KNM5liq1DUCo5J/qGtv10tcAhIMZ3YwjYVf/s3ETkDxc/M2QtWyuP1oICZnaEwKT++26C0rhMB3jCkGwU3j/PxrJ5iFAEMm7+p+Nm4Dk4OJvjqzmcwYAACBwpOkIS5W+SrddGMrddYxrO+n8kbQzuhEHUfJ/H9wEmMfF3yzZaGxbh5RDStHRpjMsVfK/Xefw+OPKjyJV0DG206FT5+IWjY+bjqBHgm8BzMZNgDlc/BNAqdyuAyDgMKVUKgtHOr5dd1Dypo9VSs+KN9tO9pTzfFStYTqCFpSSBgDgJsAELv7JIRu5fd/7jUYjlRsCpefbdZZIkbajGEUCdp1bCtXO6IcvZf0YNwGdw8U/WXJ3INCzOFpuSeuWympHkAfrGju1MwBBNj98KoGPAO4KNwH6cfFPHpXVfUgWwILcw3SGpUhlA6CU3EvX2FaKppxny+yHL4UNAMBNgE5c/JOJwsh0BGMU1G6mMyxFKqudkujWNXYKFp3PLaMfPkrx5kbcBMSPi39y5fkWABFVTGdYinSWOxK+tqHTecGZ3Q9fwvcB2BVuAuLDxT/ZVEYvQhZCKWh5Kk23VDYACkpjA5DOgqPCtukIWqi0rQKcAzcBy8fFP/kyextyQahoOsFSpLQBkJ6OcdNa/AEAUTY34Ujzr2S24LHHMfm9H5qOkUoqCDB8yWVc/BMuzzMAIMkzAJ1CirS0mrr2FuiIlC5e3KUU/0pmE5UyymeeYTpGKpHroufPXgVK0LHQ7LkopZuoxUKJVE7vpbNqkNC2601qmwA7hUcYL0Rafx+ziEoZK9/1VthrVpmOklqFow5H7xtfx01AgpHI8+9GpXIbxFQ2AKRkU9fYaS03ue6+E4yLf3y4CUi2PH8HKQVuADqGSNvZkyqlt9IpozMAKq2/EHDx14GbgATL6HfQQgjiBqBzBDbqGjpK6WI6chzTEbRI6xpALv76cBOQUDluACRhwHSGpUhlA0BKPaxr7ChK6U0AK78fvqTh4q8fNwHJQ06ev4OEtotSnVLZAAiH7tc1dlobgKx++NJ2C4CLf+dwE5AseV4ESBRxA9Apvk936xo7itL5LKtVSOVjqLuWooaMi3/ncROQHMLXsj1LGkSe5202HWIpUtkAdHd3j1m2CHSM3W6n64pzhtXfZzqCHil5DJCLvzncBCQDFVO5Gd7yER4mIt4HoJNsm7bqGLcdpLMBEL3azkcySyZ/RoaLv3ncBJgl/EJuHwNUCveZzrBUqW0ABNHvdYwrpUrlOgB7xUrTEbRI+sZMXPyTg5sAc0RXRm9BLgBBcQPQaZYtbtA1dhAk/6pzR/bqFaYj6JHgxzK5+CcPNwFmiFKX6QjGKFJ3mc6wVKltAFw/+g9dY7da6TvVyl6R0QYgoU8BcPFPLm4COk+Ucnr/H6j7vv8b0yGWKrUNQG9v74TrWmM6xm610jcDAMvK7mM4MllNABf/5OMmoLOoq2Q6ghkKv0rrAkAgxQ0AAFgO3alj3LAtU7kOAG5G9wJI0KOZXPzTg5uAzrFyOgNAhBtNZ1iOVDcAtqCLdY3dbLZ1Da0NFTPahSfkSQAu/unDTUBnZPYx5F2x8FPTEZYj1Q3AqrXd11o2aTkZsF5PRtFZDLu3x3QEPRIwA8DFP724CdDPzmcDcK/neQ+ZDrEcqW4AAMB37Ft0jBu0QkRhum4DWCv6TUfQwvQtAC7+6cdNgF75nAFQ3zOdYLlS3wAIS/yTrrHrjXTdBrDXrjUdQQ+DDQAX/+zgJkAfq7fXdIROk4rUFaZDLFfqG4BV68q3eK49pGPsWk3LbsPaeHvtYTqCHoYaAC7+2cNNQPxEqZTHcwCuKRQKT5kOsVypbwAAwHUtLYsBo1Ch2UzPngDuvutNR9BCtTv/O+Din13cBMQrj/f/FclLTGeIQyYagJVruz5lWXoOB6pW0zMLYK9bC4hM/EqfTcmOrgPg4p993ATEx1qRswZA4SHf939hOkYcMlEtiEh6vrhcx9itZoSgbX4V+kKJjJ7IRVFnZgG4+OcHNwHxsNeuMR2ho5SgfyaidK0Qn0cmGgAAWLOu+626ZgGmJ9MzC2CtzOaWwKoDTRgX//zhJmD5nHUZXXw8t0d939FysWlCZhoAIgoKvvVVHWM3myGClJwP4OyZzYWAKtL7RAYX//ziJmB58tQAEPAhIkpHMViAzDQAALBqXeVvbFs0dIw9OZWORwL9A/c3HUGPUN9njos/4yZgachzYffn4xFABdzlFtwrTeeIU6YaACIKC679Nh1jB60QjXrymwD/qCNMR9BCtfXchuHiz2ZwE7B49tq1AJHpGJ0gFehdWbn3PyNTDQAArNq98i2/YD+sY+yJiRakSvbv3161EuQ4pmPET6rYZwG4+LMdcROwOG5epv9JXVYsurebjhG3zDUAAFBS/iuFoNjPkJVSYWoi+QsCRXe36QhaqHZ8MzBc/Nl8uAlYOGe3XDQAW72W90HTIXTIZAPQs6e/oVR0/p+OsWu1IPGbAzlZ3REwpgaAiz/bFW4CFsbZO6PfNc9QUOrN1EPjpoPokMkGAABWrat80i/Y9+sYe3ysBSmTeyugcGQ21wHIGBoALv5sobgJ2DnyXDi7rTMdQzO62C/5qT7yd2cy2wAAQKmMl9hO/McFSykxPqrlYYNYFF94QjYX5ixzISAXf7ZY3ATMz91rz6z/XH7nFZwPmA6hU6YbgJ6envGC55xuWSL29QDNVoSpqVbcw8bC6i5DFDK4I6BSS74NYPVUsPI9b+fizxatcNTh6L3wAlAWt9leBm+fvU1H0IaAUQh1LlH8F5BJkvl39Kp1lV95vvMuHRfE01MB6gl9NDCri3NUsPimi1wHfW9+I+xV2dwlkelXOPoIVM4523SMRMnq4WMA2pLkn/m+v8F0EN0y3wAAwNrdyl8qeO63dYw9Md5CO0jeWQHuoYeYjqCFDBZ5G4AIPa97LdyM7pDIOqfr5BeieOLxpmMkA1FWFwAqRfSWQqFws+kgnZCLBgAA1u5ZubBQsK+Ke1ylFEaGG4k7MKj0wox+US1yBqD4guNQfN6RmsKwvOk571WwcrLz3c4469ZC+AXTMTRQf18ouN8wnaJTctMAAMC6PXrOKRTsX8Y9rlQKo8NNtNuxLzVYMnf93iDPNx0jfnLh6wDItlD5k1M1B2J5QraNystONx3DOO+g7G05ToQP+0X/s6ZzdFKuGgAAWLdHz0sKBfuWuMeVUmJkpI52mJwmwFm/l+kIWix0HUDxxONh9efsrHKmXfH5x+R+PYl/8EGmI8SKCB/xCt4/ms7RablrAABg3R49JxeL9g/iHldGCiODdQStZNwOKL0gm7cBVGth6wCKxxylOUl2hIPDkK1kPtWSOEKgcHQ299pYCPJcuPvubTpGXBSg3ucVvI+bDmJCLhsAAFi7e89rSyXnEor58QCpFEZGGonYLbB06ouBDD66pIIWoHY+0yKKRbh7Z3MGJG7h4BCGL74Uo1/6GmSTm4CF8A892HQEY7wD9gPZtukYcWgScL5f9D9vOogp2asOi7Bmt+53l8veBZaI93xnpRRGRxqYmjT7ZSoKBVh9GVywpNQuZwG8fddnsvmJW3vLVgz/26WQU9MIHnsco1/+Os8ELIC7157ZPHRrAfxDDjQdIQ6bJOglXtG7wnQQk3L/DblyTdf3St2lQ13XGot77OnpAKMjDaMnCPqHHWrstXVSrZ3vzyF6snkgUpzCwSGM/PtXIKvVp/8s2PAYzwQshBAQlS7TKYzwDkr7/X91SyjbxxaL7h2mk5iW+wYAAFau9B8NVc9uxaJzY9wbBjWbIYYNrgvoOuOlRl5XN9XcRQNQKXcoSTptm/b/MuTU9HP+LnjscYxeyk3ArliViukIHWevWQV7RWoX1gZE+KBX8E7t6uoaNB0mCbgB2G79emqu3b37tJLvnWs7ItaN/sNQYni4jsmJJlSHZwO8A/YHlUodfc2OkHKnxwPHvbYjS2ZP+8+HbwcsQA5vMRWPTumeGoQHhaITvIL3SaJ4b/mmWf7ewbuweo/yj8rdWOsX7RviHrtabWN4qI5Ws7OzAf7hGb0N0Jy/T4umpjqYJD3mmvafD98O2Dk5OWk6Qsf56dtUq0qEf/B89xi35N5jOkzScAMwh76+vsnddu85vdBlH+N59mNxjt1ub9svYHSkgbBDewZ0vzqbe5irxvwNwM6ubvNqIVf+O+KZgHkohWhq101Uljhr18BZs9p0jMX4qSJ5qFfwPkVE/AaeAzcAO7FuXc89u+/Vs2+56L7Rc+1Y7xk1myGGBuuYmGgiivTeFnD3XQ/RlcEFS1EENc/ZAK3Hnth2eiADsLgr/x3xTMBzBZs2z/vey6qUXP0rAFcLRcf6Re+sQqHwlOlAScYNwAKs2r3yrd337llTqfgX2LaoxzWuUgq1ahuDW6uYGG9prVfekYfrG9ykeW4DyKlpBBs3dThMMu1swd9C8cLAZ2s+8HvTETqueFSyNz9SwF1C0TF+0ftTt+TebTpPGnADsBiWfbeUKvYN9pUCQAo61611v+qV+gY3SDYa817pN+97oMNpkmcp0/7z4dsB2ymF5u/y9d5ydlsHe80q0zF2iqD2bsnWZtM50oQbgEVo1us3Sqli/5lZNqFS8eIe9lnc9XtDdGfw2Xgp552Krd1yG+R0vu7Tzracaf/58O0AoPG7B9Ae2GI6RkcVjj3adIQFoBW25V5sOkWacAOwQEMD058PWnJ3HWP39foQQv9ja10vOlH7a5igGnPflZGtFqb/58YOp0mGOK/8d5TrmQApMfWz/zadoqNICJSef4zpGAtCwGtb9da5pnOkBTcACzA4WF1db7bfpWPsYsmB63VmX+3Ka16dyWeXVaMJyLmfqKjechuaDz3c4URm6bjy31FeZwKmrvk5wq1DpmN0lH/EoanaWEsBX1BKZXDzk/hlrxpoELXaV0ahtOIel0j/1P9solSCu+/6jr1e56j5HwmUEuPf+h7C4dHORjIkjgV/C5W3hYGN++7H9I2/NB2j44onpu5U0d2a9eD9pkOkATcAu7Bly+RxjWb0Ih1jd5VdWFZnd6yrnPuqjr5ep6h6bd6/k/U6Ri/7eub3BtA57T+fvNwOaP3hMYx/5/u5e7TU6u2Gf+D+pmMsGhH+rtFo8HGgu8ANwC7ItvqujnGFIJS7On+aWPHY52VyTwAVhjt9LnvmyFs5mc0dAjsx7T+frN8OCDY8hrHLvg4VzL/1dFYVTzg+rbcNCwT6kOkQSZfK32ynbN06eXyrFR6gY+yuLhfUgYV/cymd+AIjr6ubqu98i4ZwcBjDl3w5c01AJ6f955PV2wHBhscwemn2ZzjmJARKL3i+6RRLp+jCRqOxp+kYScYNwE6EbfVVHTN+QhBKZXNniXe/7jWAFfuSBuNUowEV7fychaw1AUko/jOy1gTkuvgDKBx5GKzeVD867JCy3mc6RJJxAzCP4eHmAa1GqGX7vFLJgTB4Wp17EO3lAAAgAElEQVQoleAfcZix19dH7XQtwIysNAFJKv4zstIE5L34A0D5pS82HSEG6s1qUqX2/GLduAGYR9ho/IuusYslc1f/M/r+8i+gdetBU+r1BR25nPYmIInFf0bamwAu/oC77z5w9s7EGrpiy2n9hekQScUNwDyCUJ2hY1zPt2Db5n/s9tq1cLPxAX8WJSVQn/+UwNnS2gQkufjPSGsTwMV/m65Ts3D1v52ityilMni1s3zmK1ECbdk8+Y4wlFoe0C8WzV/9z+i58HWmI2ghawtfCZ+2JiANxX9G2poALv7b2KtWonDYIaZjxIdwcKMRZnMb1GXiBmAOKsLbdIxLRCgUOrPr30L4hx0Ca+VK0zHiF4VQ85wSOJe0NAFpKv4z0tIEcPF/RtdLT8rc7UEBdb7pDEnEDcAOlFJ2EEYH6Rjb9y1Qwj5YPa89x3QELRb7PHzSm4A0Fv8ZSW8CuPg/Q1TKKB53rOkYGqhX8W2A5+IGYAdbtlT/Use2vwDgJ+jqf0bpJS+G1Z/BRbLtNtBsLuqfhIPD24pswpqANBf/GUltArj4P1vlT04Ducm5TRmj3dqN9nGmQyQNNwA7UJG8SNfYSWwAAKD3ja83HUGLqLr4ghkOJasJyELxn5G0JoCL/7NZvT0onpjijX92IVLqbNMZkoYbgB1E7UjLA/KuYxl99n9niiccD2vlCtMx4tduQ7UWNwsAJKcJyFLxn5GUJoCL/3NVXnYayE7mRUociNTJpjMkDTcAs0xNTa0II6llo3zXS/aPuvcv32A6ghZyaml745tuArJY/GeYbgK4+D+X1d+LwvOzeO9/NjpOKVUwnSJJkl2VOqxRw0W6DvtyvWR31sXjjoG9ZrXpGPELg0U9EfCsf2qoCchy8Z9hqgng4j+3yplngOzsbQ++A6/ZDLN7j2MJuAGYJQrlqbrGdt3kf7j63nRR5h7/AQA1NbXkY1w73QTkofjP6HQTwMV/bvaaVSge9zzTMTqCVMQLAWfhBmAWJaHl5D9BBMtKfmH1jzoc7r77mI4ROxVFkAs4I2A+nWoC8lT8Z3SqCeDiP7/uV5+V1iN/F40UHWo6Q5Lk47e+QGEk1+gY13bS82Ne+X/eDRLJn61YLDVdBZRc8r/X3QTksfjP0N0EcPGfn3/owfAP0bLtSSJJQoa2OFy+9FQmzZRSdhhKLQtE0tQAWCtWoHBSBnfNVHLZxTUcGsbwJZfFXqTbA1sw/G+X5rL4zwgeexyjX/567E1A69E/YuRLX+PiPweyrG1X/zlCwCG8IdAz0lOZNBscHD9Y19iWla4fc99b/wrk+6ZjxE7V61BhuKwxwsEhDH323xA8tTGWTM2HHsbIv1266J0LsyjY8BiG/+ULCAeHYxmvftsdGL30P6CCIJbxsqZ08gthr87gVuA714Up9JoOkRTpqkwaCSW0NQBpW1wrHAc9F7zWdAwNFNTk5LJHiSamMPKFS1H/zW+XvLhQhRGmfn79tqvextKeUsiicHAYw5//IpoP/n7JY8hmCxNXXIXx710JFUYxpssOUSyi/Cfa1jwnWiCCtaYzJAVPhWy3dWD6g7Vq6xM6xu5fUYDvJ/sxwLlsftvfIBqO52osSURPL6gQz90eZ81qlF9+BgpHH7Gwf6AUGvc9gKmrr0U4MhpLhqxy1++N7rPPhLvfwhamqjBC/bd3Yupn/5Pr2ykL0XP+uSid+ALTMcwQ6nTf928wHSMJuAHYbnDL5KXV6fZbdYy9alURTgoeA9xR+8mN2PL+fwDk0hfPJZIQsFatAii+CTCrvxf+IQfDP+xg2P19ED3dEJ4HWa8jmpxGODiI5oMPo/m/v+fp/kVy1q6Gf+jB8A46EFZfL6zuMsh1IatVRFPTaG8cQPOh36P10KOQS9zzIU/c9Xth5XvfkclHfhdCEV5fKHiXm86RBOm7LNUkCvXsAAggtR80Z689UDrpRaj98hbTUeIlJdT0NKjSHduQ0eg4arfehtqttz3zh0RLvkXAntHeMoj2lkFM33DzM3/IP9slIdtGz/nnpfY7KR6UvQVOS8RrAGaQvjdFmj9q/e94M0S5YjpG7GStBtVu630RLlD68M92Sbr+5FQ4azO44+cikEQmjztcCm4AtiOpPG1jp7nbFgIr3vvOTF4xqIlxgOsIywln7RqUTzvFdAzzSLqmIyQFNwAzRKov1LXyjzgU/lELXOSWIioMIaeTcewvY1oRoef8c/Ow3/9C8Hf9dtwAbKdIaFs2LDNwmbnib98DUczeQVqqVuXnxFnmdZ1yEtz1e5uOkQiKBK/C3Y4bgO0sgeU/ID4fmf4GQPge+t/77mzeCpicAN8LYFnlrFmNyitfZjpGYgiluAHYjhuA7VRE47rGzspTdIWjj0DxxS80HSN2Kgy3nRjIWMaQ46D3oteBHF73NkMptfSTwTKGG4DtJOgpXWNHWekAAKx4x1tgrVhhOkbsZK0G1WyajsFYrLpf/Uo463jju9kEiSHTGZKCG4DtyJL36Bo7ijI0vSwEVn/4A4CdvS0k5OQEVIaaNZZv/sEHovSiE0zHSJxABk+azpAU3ABst2ZN5T5dt7ejMEMNAAB73dpsnhUgJdT4mOkUjC2b6OpC7+tfm8k1O8vUKpVKPAOwHTcA2xFRIAQt76i4eURR9g4kqZz9cngHZ+8ccRUEvFUvSzch0PfG10FUyqaTJNGTRJStK7Jl4AZgFsu2RnSM225nc1p51Yc/ANHTYzpG7FR1mh8NZKlVOetMeAfuZzpGUj1gOkCScAMwi0XqER3jRpGCzMCjgDsix8Gaj38oeyuMlYIcHwMyOHPDsq1w+KEon3qy6RiJRYR7TWdIEm4AZrPp17qGzuosgL1uLfrf9ubs3WuUEtH4GHh/AJYW9qqV6HkD3/ffGSUVNwCzcAMwi63UlbrGDlrZvZosvviFKJ2SwauOdhtyYsJ0CsZ2SXge+t58IYSfvd06Y6RCFWp72iuNuAGYZdVuvfdaltBy87fV0rK+MDH63/5mOHvvZTpG7FSjAVXnfUNYghGh5y9eC2dNvk/52yXC/3Z1dW01HSNJuAHYgeOK3+sYNwgiqAyuA5ht9T99FFZvr+kYsZNTk1BBy3QMxuZUOfvlKBx5uOkYyafof0xHSBpuAHZgW3S1jnGVAloZXQcwQ3guVn/mE9k7NEgBcmwMKmybTsLYsxRPOB7l015iOkY6SHm96QhJww3ADopC/LuuwyKb9WzfBgAAu68Hqz7+4Uw+GaBGR/nJAJYY/iEHoefPzzEdIx0UprySd4vpGEnDDcAOymvKQ55jadkqstEIobJ9FwAA4O69J/rf/TZAZOvtpaRENDYGqGzP5LDkc9auQe9FF4Ay9hnThYCriKhhOkfS8LtnDo4rvq1jXCklWhl+GmC24gnHo/vPz8veI0lhG3J8nJ8OZMZYvd1Y8Y4384r/RVBKfc90hiTiBmAOESqftizScplXr+fnPnL3OWej8orsnUOuWi3ICW2nRzM2L9HVhRVv/2uI7orpKClCQ17Ju9F0iiTiBmAO69ZR3XHt3+oYu9kIM7kr4Hx63vh6lM84zXSM2Klmg/cIYB0lCgX0v+NNsNesMh0lVZRSXyHSc85L2nEDMA+y1Dt1zF4rpVCt5mcWAAB6//oiFE96kekYsVONOuTkpOkYLAfIc9H/1ovg7r6b6Shp01YUXWY6RFJxAzCPdet67nZcsVHH2LVakIvFgLOteM/b4B99lOkYsVP1GuT0lOkYLMPIddD/lr+Cu89601FSRwE/KBaLm0znSCpuAHbCs+wP6xhXRgqNHK0FmLHqg++Hd+jBpmPETlWrfIQw04JsG31vuhDe/vuYjpJGylL0r6ZDJFnGlmjHb+OTYwNBS66Ne1zLIqxeUwJlbZX8Agx/9t/QuONO0zFiR6UuiAovzmLxINdF/5suhHfwAaajpNWVftE7z3SIJOMZgF3wHOsvddToKFKo1fK5LmXl+/8GhRc833SM2KlaFYpvB7AYCM9D/1su4uK/dBFZ+IjpEEnHDcAurFrX/f/bu/Mwu6o6X/jf39rTGWqeq8IUIQYRFWwVBWUQhSSQBBxCQiABpVt7uLe9tt22dtsv9nvVvrdt21fv7VZbhZCEIagQkAREREDmKUxhCCGEpKpSVamq1HDGvfda7x+VSAgZatj7rL33+X2ep55Hyal9vlV1zlm/vcY7Hcd8NYxrj42WqmpFwP5av/LXyH78bN0xAifHxyFHeHUAmz6RzqDlr/4MzjtP0B0ltkjhOsdxNuvOEXVcAEyC6chPC6LAW2opFcbHQjl8MBaa/+JPUbPgfN0xAqfyeV4iyKZF1Nag5UtfhHXcMbqjxJfCqE/+N3THiAMuACahvb3p2ZRj3BzGtcfHy3Dd6tgd8GCaPrcCdRcvStyOgaqQhxwaQtUt92DTZjQ3ofVLfwmrK/ApR1WG/i6TyXTrThEHyfrUDZFSyty5bXio7MnaoK9t2wZa2zJBXzZWcr9/AIP/+V+JO2yHLAuisRkwuNZmh2Yfewyav3AlRG2N7iixRsAjdto+gyicnVyThj+VJomIPCtjLg/j2uWyj7EqHgoAgOzZH0P71f8A4Ti6owRKuS78wd2AX50TPtmRpd/7brT89y9w4z9zORi4khv/yeMCYAo6OupuT6ettWFce2y0BLecrLvfqXLeNRcd//ZtiNrAO1n08j34u3dDlau7yGNvV3PWR9F01UqQbeuOEnuK6L85jvOS7hxxwkMA07Bz+/AbpZJ/dNDXNU2B1rYMhKjuP4ssFND31X+C29OjO0qwCBD1DaB0dQ/3MABCoP5Ti1Bz1hm6kySCAtalM84lunPETXW3NNM0MJDryo+VXvM8GXh/dTptoqmZj/mElOj/zndRfPoZ3UkCRzU1ELW8YVC1EpkMmq5cDudEXuMfCIUXnYx9GhGN6Y4SN1wATFN/z9iZ+YJ7r+/LwIdRauts1NUlayx8ukZuvR0j168DZMKG9RwHRmMjQDwKV02sWV1oumolzJYm3VESQu2GwEdSqVQoe7UkHRcAM9DXM/bF3Hj5PxWCX+rV1JRCOmMFft04Km1+GQP/8q+Q+YLuKIEi04RobAJMU3cUVgHpD74fjUs/zeP9wSlKiI9nMtbDuoPEFRcAM9TXO/ovufHyV4Ne7k0ENDWnkUpx4wAAMpdH3zf+Ge4boRzQqBFB1NeDMjwvIKlICNReOA+1nzxHd5Qk8QhY4mScW3QHiTMuAALQ1zP63fHx8t8Efd2JIiCDVMoI+tKxNfjDHyN3/wOJ22CH0hlQfX1VHg6VZEZzE5qvuBTWccfqjpIkPhFWOGnnet1B4o4/bQKyq3vkh/m8+1eB9wQIQnNzGo7DRcA+xU3PYff3fgCZz+uOEigyTVBDI8jioZ8kSJ/6XjQs+zQEr/oIEjf+AeICIED9PSP/c2zc/Yegr0sENDSmkOE5AX8k8wUMfOe7KL2YsGW/RBB1daBMVncSNk0inULDZy9G+oPv1x0laXJQ6tJUNnWb7iBJwQVAwHbtGP3TYtn9ke+rwKd31zekUFPDRcD+xu64E3tW3wDlJWunPbIdiIYGwOCenzixjjsWTSuXwWxp1h0laXYJRQvtrP2E7iBJwgVACPr6Rj9SKnj3uGUZ+IL+dMZCY6PDY8X78Xp70f+t78LbtUt3lGCRgKiv442DYoAsC7XzPoHaT5wNCF7aGbBnFMnF6XR6u+4gScOtSEhGRkaaxobVQ6WyNzfoa1u2gebmNAyD/3z7G/3Veoys+1XyegOc1ERvADcskWQfPxuNSz8Ds6NNd5TEIWC1nba/SETJmvATEdyChGxX79gPCrnyX0mpAv1dCyI0NDq8V8ABvKE9GPzu91F6ZYvuKMEiAVFbC8ry3ICoEKk0ai84b2I7X+6RC9oYAV9wMs4NuoMkGb9qK6B3x8iHPF/+ulz2W4O+diZjob7BqfrzAw6U+/39GPrpKqhiUXeUYJk2REM9rxTQLPXud6Fh6adhNNTrjpI8hA0K8s/T6fQbuqMkHbcaFdTbM/JvpYL3paAnCAoi1NY7PEHwALJQwO4f/AjFJ59K1lbCBFAmC6qt47kgFWa2taL+UwuReve7dEdJIOojqC85GedG3UmqBX96VNjAQK6rWCjfWC76Hwv62pZtoKHegc17BryF+8ZODP7wP1He9rruKMESxsSwAO8iGDrhOKg590zUfPLjIN66OWh5AD90ivZ3qIlGdIepJlwAaNLXN/w+36VVxYL/PhXw7kFOykBdvQPb4kJgf/mHH8XQf10LOTqqO0qwLGti7wCbD5AKHBHSH3w/Gi66EKK2RneapCmD1Cqp5DczmUy37jDViAsAzfp2DL3XV/SDYtk/U8lg/x62Y6C21ubzBPYnJYbX3ojxDXdDuWXdaQJF6dTEMcMG/72D4Mw9AfUXL4Q1q0t3lGRRGAXRtRLev2YymZ2641QzLgAiovv6XzxIJ5x4utfUBjfgE4YtUyBTYyOTMXmy4F6yVMaetTch99vfQZUTVAgQQKn0xPwA3kRoWuzZx6Lugnlw5p6gO0qieAMDKG7dBm9X3+0dl35mke48jAsA7frXrp1TzpU3Qco/DuSK9g6od5wIL1sHTwb3JyICUo6JVMZEKm1C8AQyyGIJw6vWIH/v/QnbP4BAmb2FAO8fMCn2scegdt65SJ18ku4oieEND6O8YydKr22Dv//Qm2X3GsI7vfPKK1/XFo5xAaBTz0+v+5ryvW8pdeg9AqipBXTs8fAbmuAZdmCT2YkA2zbgpEw4tgHLFlU9o1yOj2HoJ9cg/9iTQMIKAZHNgGpqeSOhQ7CPmoXaC87jhj8AMl+AOzAAt3cXyt3dkLncIR9LhunBMb84a8Xyn1UwIttP9X7ia7bzp9fdC889e6rfR40tEF2zIGvrodIZ+IYNCQEpZzaRkAgwLQOWZcCyBCxTwDAJhkFVVRjIQgF7bvgFcr/7fcL2EKCJOQI1tQDPYgcA2O+YjdpPnj2xpK+KXuNBUKUivPEc/NFRyNEx+HtG4O4egMxNccM+IggndUvXFZd+Kpyk7HD4VV9hA6tufGepVHh6/y7/QBgmkK2BSGcB24SCAASBpA94LlSpAOSLoHe9B4XGzildWgia+Nr7IUkGoCSglIJSgPQVFBRa27OwzITcZUqJ0Vtuw9idv4U/PKw7TaAolQJls1W5aoBMA6n3vBs1nzgb9jFH644TKeOPPDaxVNaxIGznbUWR8j3IYmlizkzQ+2rwkIAWXABU0K5Va7/uF0v/83Bd/mETp30MhWxTKNfu7KyBSOD5BLkHHsTIulvg7eoFgl2xqRVZNiibAaUyif8kENkssqd/CNkzPwqjoU53nEjKP/008s+9oO35eUig8hL+to+O6Xb5B40+ei6Kdjjrmbtm1SR6uMDfvRt7frke+QcehioWdMcJDomJ4YFsFjCTtZukffRRyHz0NGQ+8H6QbeuOE2mF5zcj99RTekPsHRLoXLns00SUoHI7mpL7aR0Ru398/YlFKj0ZeJf/NNFZ56FoBH5KMYgIXbOqZKMUpTB+3wMYu20D3B07gYA3ctKJHBuUzoJS6dh+Ooi6WmRP+wAyHzkNZmuz7jixUdyyBeMPP6o7BgBAWE4vCZeHBEIW07d4PEShy/9AdNb5KBqp4K8rCF1dVVIA7McbGMDIzbeg8NQmyD0J2sVU0MR+Aul0LOYKCMdB6uSTkP6TU+C8+0Re+jgNpS2vYuzhR3TH+CMeEghfZBqmpIlKl/+BuAcgPG53D0Zv24DiE0/BH0lOMUCGAaTSE5MHI9SNTpYF550nIH3q+5A65WQIJ/qFSpQVX30V4w9FpwAAwEMCIeMCIGATXf7FJyFVJLr8D0RnnoeiyQVA2MpbX8fIbXeg9PwLkKMjyZk8aBiglANyUhM9AxWe8yHSaTgnzkHqfe9B+uSTQE50CpK4i9IQwIGEZfcKS53RsWLFNt1ZkoQLgABFscv/QHTmJ1E0g69NiICuWbWBXzcJ/D2jGL/3PhQeeQzlN94A3IRsNEQC5DiglAM4qdC63a3OdqROPgnOO+fAPuEdIJO3OA5D8ZVXMP7IY7pjHBIZpke29eddKy/9qe4sSRHZhipudv7sukfguqfpznEkdPo5KKbCWQbV2VXDZw1MQuHpZ5C79wGUtrwKOTgEJX3dkQJBpgnYzsREQscBaHoFgdnaDPsdx8GZMwepk+byKXwVkn/2eeQ3bdId44golb69a+WyxTwkMHP8aT1DUe/yP5D44Oko1LaGcu2OjhoYJr+kpkQpFF94CfmHH0XppZfh7+qDLJV0pwoEWRZgWyDLBix7okA48DFCwGxvhT179kSj/87jYTQ2aEjLck88gcLml3THmBQeEggGf1rPQBy6/A8k3vcBFJpnhXLt1vYMbIu7Z2fK6+lF4clNKG3ZAndnN/zdQ5CFQvyXG5omrK5OOCe/G86Jc2B1dsKa1RmpiYXVbOzBh1Da+pruGJNGwvTI4SGBmYhNwxU1cenyP5Ax50Tkj54byrWbW9JIpXif+TBI10Xp+RdRfOFFuDt2wB8cgr9nBCqXh/Lc6BQHRCDbhshmYTTUw+jsgHP8bKTefRLs42frTscOY+S398Dt6dUdY2qIQE7q9q6Vyy4iooD3J04+LgCmKG5d/geilhYU33tGKNeur0+hpjZZO8nFgXRduNvegLttG7zeXfBGxiDHRuGP56By+Yneg3IJyvWh/L0TEJU6ctFANPEBSwSYBsi0Jib9pdMwMmlQTQ2M2hoYbS2wZnXBmT0b5lFd4f/ALBRDv7oFcvzQp/dFGQ8JTA8XAFPQs2r1l1XR/W6cuvzfRgiUz1kEFcIdYzZro6GR12LHjT809ObhLrYNo473yq82yvcxeP2N0elJmg5hek5N9lOtl37mdt1R4oK3y5qkntU3rJZF999i3fgDgJQwQpo86/nJmM1ebYymJhgtLRNf3PhXJX98LN6NPwAyhKmy2V/237bhq7H/nK4Q/iUdwe5V62aVZekhWSofoztLYM6eh5II/k5dEKGTNwNiLHZKW1/D2IMP6Y4xfSRgtbT8caUJAestw7+y4cILk3WWd8C4B+Awdq1Zd2m5nN+WqMYfgBjbE8p1pVLwXJ6Hw1jcuLsHdUeYEaOh7i3LTBWw2PWMp3fdtuHDGmNFHhcAh9Cz+obVXm58rfT9xM1qo77wZvqWyzwMwFjceAMDuiNMm6ipgZF6+5xsRThWKLqfhwQOjX8pB9i9at2skl9+WJVLR+vOEhYyTJTOvpAnAjLGoFwXgzfd/OZE0BgRjgOz6chHPvOQwMFxD8B++lbfuLxczm9LcuMPAMr3YEk3lGsXi+FclzEWjnJvbywbf7JsmI2Nk3qsAhaXfLGJhwTeiguAvXpW37DazeXWJLHL/2CM4f5Qruv7Ci7PA2AsNsrdPbojTBmZJqympimdN0GgY4SiB3hI4E1V/0sIpMtfIXa/SVHfgMKfnBXKtevqHNTW8faujMXB0M2/nNgsKibIMGE2t4CM6d+/8pDAhKruAehbddNlgXT5x6zxBwA5sgd2SDtnFgsJOe6WsYTz+vvj1fhbFqyW5hk1/sCbQwJ9t2/8SEDRYqlqC4Ce1Tesdgvjq6uly/9gjKG+UK5bdn0eBmAsBgoxOvxH2A7M5mZABHPgGIGOIYmqXiVQdT90NczynyxKZ1A6/bxQVgPU1Nqor+fVAIxFlfJ8DN/8S0i3rDvKEYl0GmZ9w8T5FCGo1iGBquoBCKzLPyFUIQ/bL4Zy7XzOjfvOoowlWnn79ug3/kQwautgNjSG1vgD1TskUDUFAHf5H5x49cVQriulQiHPSwIZi6rCiy/pjnBYJAxYTc0waiqzvXg1Dgkk/ofcvWrdrLJffljyXf8hqXMXoqyCrwUtU6CtIxv4dRljM+P27sLI3b/VHeOQRCoNo6EeNIVlfkFSwG2pEl1Zv2TekJYAFZLoHoB9Xf7c+B+esWNrKNd1PYlikbcGZixqCi9s1h3hoEgYMBubYDY2amv8AYCARUVHPp30IYHEFgDc5T958pXNoS0JHBsthXJdxtj0uLt3o9wTrc1/CAQjk4XV2gaRSumOA6A6hgQS90Nxl//0iNknoDD73aFcu6k5jXTaPPIDGWOhG/nN3XB3hbMEeDpEKg2jrhZkRPczIqlDAonqAeAu/+mT216FjXA28BkdKfGKAMYioLxjZ2Qaf5FKwWppmejuj3DjDyR3SCAxBUDPqht+xV3+M2O88CQohKU2nieRG+cVAYzppHwfuaee0pqBSMDITnT1m41NICs+W4YT6BhI/H7gtg1f0p0lKLEfAtiyZk1dpownVbl0gu4sQSDbBgGQZT3rc+kjZ6GYbgj+ukRoa8/ANBNTczIWK/lNzyD/7HNanlvYDiidhpFOTekAnwi7sVQa+9zRS5bEZx/lg4h1AbDjml/METL/mHLd4FusSiOC0VAPI5UBAChfQhYLkKUSVLmESvWhk2HCO2cBPBn8S8NJGWhpyQR+XcbY4Xl79mDk1xugKnXsLwFkOxCOA5FKg4xgtu+NFIWHFVkXty/+RDTGVKYhtgVAzw3rLlZj+XVK+tEePJoEsqzDj4MpBVkuQ5VLUK4HVS5DqfDeyMYxs1GY895Qao7GxhQyWR6lYaxSlJQY3XgX3MHB8J5ECAjLAlk2hG2DbDvUnfsiZCegFrUtXvC07iDTEcu/UN+qmy7zSvnrlAzhNrXCjEwGRl39lN8syvehfA/wvL3/WwJKTlT4CsC+AoHE3h43AQgCfH9Swwv0oTNQrGmZ8s9zxOsKQmtrBpaViG5AxiIv98STKGw+8o6fwrYBYez9DDlI9U8ACTHxmWIYgGmAhAkyjWTe4U8a7QHkx+NYBMSuAd216sYL/VJ+vZIhbF1XSQd0+VeKn8vBHx2Z3IPPWYASBX+3bpkCre2ZUCYcMsbeVO7uxug9907qsWZ9PeX5g3AAACAASURBVESGd+6cpt0+0dmdi+a9oDvIVMSqEd157Q3nynLx1rg3/mSasFpaKt74AwDkFHbme+wBzPDY7YNyPYk9e3iDIMbC5I+NY/yBhyb9+DBOBa0iLYaS9wys3zhXd5CpiE1D2nPDDR+gcvlO6fux7msyMllYLa0gU884+JTe47kx2M89GspQXj7nYnQ04ieRMRZTslzC6O9+B1meQqEtuQCYGWqHwl0D63/TpTvJZMWiAOj58e0ZlXfvUdKL74Q/IhiNDTDqpz7eH6gpTh6UfbuQeu35ULrrx0ZLfGIgYwFTUmLsvvvhj4xO7fu4B2DGFOFYBf+X6sdPxGKmcywKADhjf1CuW6c7xnRp7fIPgNy2Faldr4dy7eHhEkp8YBBjwZAS4w/8AW7vNFamVWqJYPJ9eHfHwLd0h5iMyBcAu1bd9C1ZLJyqO8d0iUxGa5f/20yzyJcvbEKm7/XAOy+UUhgcLKBYDGcbYsaqhlIYf/BhlLa/Md0LBBqnmingK33rN35Kd44jiXQB0HPduo96pdzXdOeYFiKYDY0w6xuitR52BlH8F55Belc4RcAQFwGMTZ9SGPvDgyhu2zbtS/CqnEARAT8dvPWuSJ9LE+kCAF7pZsj4HcO4r8tfpNO6o7zdDLfh9F94BqmdWyACLwKAocEi8jwngLEpUa6L0XvuRWnb6zO7UDK26I2SRp/k93SHOJzI/sV7rrvxH2S53KE7x1RFrsv/AEFU+fLlzXBeeCLwJYJKKQwPFTE2yksEGZsMmS9g5K67Ue7pmfnFuAcgDJ/pv3XjAt0hDiWSf/Ft19zS4Hgj/bE62Y8IZn1DNO/69zOljYCOgBoa4X/gY3BD2JAxnbHQ2OhwtyRjh+Dt3o3Re++DLARzHo1ZVweRrQnkWuwtXs3Vpd4z+5xzirqDHCiSPQApkf9FnBr/iS7/1sg3/sDerTwDovYMg+7dgHR+OLBr7lPIu+jvz8N1eWYyYwcqvPQyRu78TWCNPwBAxHqLlSg7ITtW+rLuEAcTuQKgb/36dr9U/rjuHJP1Zpd/PLYoIDPYNzn5HuQj9yPdvQUB1hYAAM+VGOjPI5+L3oZBqlTC2B8ehD82rjtK1fJHxzD2hwehStUzZKSKJYz+9nfIPfZ44Cf7Vfd+/uFSUH/Tv+7eyHWvRK7VknvGf4o4HPITky7/Ax3yxMEZki9vhrPjDagPno6iEdzvRCmF4eES8nkPDQ0pmBE4RKjc3Y3xhx6ZuPsyDNR+5MO6I1Wl/PPPo/TaNpR7elBz2mlwjj1Gd6RQlbZvx/gjj0OVwulJjstNTByRQhOlClcB+L7uLPuLVEPb8+PbM0rsHlW+jHQpSube43tj+oZxd+0K9ThhcfwclGefBD/gpyAi1NZaqKl1tMxX8sfGkX/ySZTe2PFmJiHQeNFiiBo+RKWS/LFx7Fl/21vugp1jjkHmT94PozZyN1oz4o+OYfzRR+H27grvSYSA3R67Oddxs7O1NHY8LVkSmS7NSLVglBr7P7IQ7cZfZLIw6+riPWPWNAE3vNeg3LoF1vbXYb/v/Sg1dkIGtMe4Ugqjo2XkCx5qa2xkspWZJqLKLvLPP4fiiy9D+W/dtVBJidxzz3EvQIXln3vubV3gpTfeQLm7G+l3nYj0e04GWbGZRnRQqlRE/tnnUXxly9ted0ETMb2ZiZmj+u2apQCu0x1kn0j91ZXrfVZ3hkOKaZf/wQjbgh9iAQAAynOhnnwUdjoNnPIhlDMNgZ014rkSw8NF5MZd1DY4SDnh1IyyXELxpVdQePHlw3a7ll7divTcd8JsagolB3srd3AQpa2vHfTflO8j//wLKGzZivS75iL1rrkQll3hhDMj3TKKm19EYfNLUG5l9sWgmP2O4oqI/hQRKgAicxs7eOONHy7syT2sO8fBkGXBbIhvl/+BZLEIb3iosk+aTkO8+xSU69vgB7zjqGUZyNaYyGSsYPY5yOVQfPkVFF55Bao8uQ9gs60NDfPOm/FzsyPbs/EueAMDk3os2RbSc9+J1Ny5EJlon8Xhj46h+NJLKG59rWIN/z5mYyNEKv43NzGgPFPO7rrggu26gwAR6gEoFeX/ozvDwSSiy/8AQscmRYUC5BMPwxAG7Lnvguw8BmWypnY88SG4ro89wz5GR8rI1ljIpK2pTxaUEuXubhRf2YJyT+8Uz00GvP5+lF7bBucds6f2vGxKSlu3TrrxB/YO3zz3AvLPb4bd1YXUO+fAntWFwJesTJPyfZS7e1B6dSvK3d1Tft0FhWzuAagQMnz6LIDv6g4CRKgAUK57lu4M+yMARn1D5O8apsU0AMMAQh5XPBiSPuSLzwMvPg8nUwPMPQmqsXVvMTCzDz8pFcZGyxgbLcOyBNIZC+m0CdM8+Ie98n24vbtQ2rED5Td2znh29fjjT8Dq7EjEMFEUyXwBucefmt43K4VydzfK3d0gJwX7mKPgHH00rM6Oii9/U74Pt68fpddfh7t9B2TIw3FHQqYB4j0AKoYUXYKIFACRuK3tWXvTmXJs/D7dOfYhQ8BsbEr0uJg3OgqZi84adrJt0OwToFo74Key8JQI7GbIMAmOYyLlGDDHhuH298Pr64fb3w/lBXsAkT1rFurOPSfQa7IJo7/9XTBb3u6HLAtWWyvM9nbY7W0wmpsD3SwLmGjwvT174PX1o9zTA6+/H8qLzhHYRiYLo75ed4yqYgrz2KaFn5zusY3B5dAdAADgy8t0R9iHTBNmc3PiK2Lh2JA53SnepMplqJc3Ay9vhgDgmCaovRNoboWqqYO0UlCmCUUmfKUOWRwImvgiJSF8F6JUgBobhRrsR76/D8oP98TBcnc3ilu2IDVnTqjPU22Kr7wSeOMPTBykU+7uQbm7B3lMLOs06uth1NfBaGiAqK2BkclApNIQmfTBVxZICem5QNmFzOXhj4/Dz+Xhj43CHxyCNzoKBLxpT5BEytEdoer40v0YgLW6c0SlAPiY7ghA9TT+ACBsZ+L0rxD3A5gJ5XlQ3TuA7ok194Q3u6v2/XXIMEFOCgpyovv+IBsP7PsvlRxZzT3+BMzmZl4VEBBvcBC5J56syHMpKeEND8MbHgZw6HlaZFsgiInVLhFu3I9IEMjmAqDyxBmIQAEQiZkw0nO1z5wi04TV3FIVjT8AgAgildKdYkaU70Hmx6Hy+YM2/rooz8fo7+8Lbce2aiLLJYze90CkusyBicmFslyKd+MPTMz8T9AE57hQUKfrzgBEoADYdd11s+H7WktQMiYa/6jMDK4UkeHJamGR4zmMPvBgpLt+o05JibH7HoAcj85claThCavanDy07m7tEy+0t3hK2PO1BhACZnNT1TX+wMQwQNCHA7E3uT29GHsokltbxML4IyFvf1vtDGNiKJDpYJTt8om6Q2hv9ZRUJ+t6bsLEBhhhHZATByKdwGWOEVJ6bRtyjz2uO0bs5J54EqVXt+qOkWhmhs+v0EmAjtMcIRIFwAm6nlvU11d9BSwy2YnJgCw0hZdeRv7Z53XHiI38M8+isPlF3TGSjQiU5eJfK4Hj9EfQjKQ8SsfzCseBwRXwxLInHgcMXX7TJuSfelp3jMjLP/MM8s88qztG4ol0BsSFv1akxLG6M+h/BSjZUumnJGHAbGis9NNGllFTE40doRIu//wLGH/kMW3bvUZd7vEnkH/mOd0xEo8AmHx8tXYK6hjdGSJQAKDi2+0Z9fVVOenvkAwDIssfCJVQfOUVjN3/QOA7EMaZ8n2MP/AgCi++pDtKVRCZLFDF856iQgHau171vwqoskWIcFKxX/8eBqOmFn4hj8DO7GWHVNr+BvzRMdSdczZEld+JyXwBY/f+Hu7goO4o1YEIoqZWdwoGgAANp7K9VRRugyuWYeKAn7pKPV28CAEjyx8MleIND2PPxo1we/t0R9HG7d2F4V/fwY1/BRk1NSAjCh/7DEr/Dbj2V4JUqmIL0UVNTVUv+TsSI5sFmfz7qRRZKGLk7ruRe/wJKA0nM+qipET+mWcx8tt7oIq8W2KlkGnCyNbojsH2If09APo/7VWFtmknwS/+IyGCUd8Ab3C37iRVpfDiS3D7+lFzxkdgNiZ7cqo3PIzxBx+GNzSkO0rVMeoaeNvfCFEE7duEau8BIEPkK/E8IpvhiX+TIGybl0dq4A0NYc8dGyd6AzxP+wdD0KTrTdz137GRG38NRDYL4ST3ePM4IoUB3Rm0t4hENFaBJ+FGbQqMujoeCtBBSpRe2eLmXnrlwwSsBvTfIQTAJ4VV45ueOKvw7HMq7ofnxBGZJsxant8TOaT6dUfQXgCAEPrtgEinQQbveT9pRDAbm8CbA1QYEQw7/bmWD536uJNxVpCBk2NcCCgAvxaS/sTJOle0nXXW/WRb/6g7VLUhAEZDI+/2GUVScAGgQKEPOPOJV1NHpgmzrkF3jKpipNLr2ldesmbf/3cc50Un46wQkt5PCtcAiMOMuSIp/JwkTkllnIV2jf3Mvn/ouvLyb8M0N+kMV21EfQOEpX2uGTsIJaT2yVbaCwAS4oVQn4BPvJo2kcnA4MOCKkLYzs7OlcsuOdi/2TX2M07W+Zzr28cQ4R8AvFbheJOxlQhfK3v20U7W+bxT4xx0P9+jrlp5KkRl5v1UO5HJwMjw+zeqhKJXtGfQHUBK3BHm9bkBmxnRUA9yuIAKkzAMV8E4/UiPq62lASftfDuVcY6XoA8D9H0APRWIeCjdAP27AJ2WyjgnOGnnX+rqjtyjJ1LGB4iId5wKkXBsGPXcgxdlQgnth4NoH+VVSonu/7rGg1ShZLFaWkAWz36dEangDu2Gcl3dSZKHCFYqe/n+Xf9ToZSicq78HiXUuSD6BBQ+BiCcGV8KoxB4AEr9liTdY2ft56fbkO/42Zq/J7f0naAjMoAsC2ZzC4iX/EXZYNvi+RU/B+dAkXiFdP/suhHlusFv0ScE7PaOwC9blaSEOzTIRUDAjHTm5s6Vy5YEdT2llCiVSseTpFOlwilEeJcCjiLgKACTeTMoAH0K2EHATqXwkiA8rYTa5DjOViIKbEJi909XPa0875SgrscAMkxYLS285Dny1N1tixecpztFNNZ6GcZrcN3APwgEd10HRwhYTc1cBARo77h/YI0/AOxtoLfs/Vq3/78ppZxcLtdommaGPMoSkb33v5eVqXKe5+Wz2ewQEZWDzHQos65aeWr3T67NK+nzLN0AkGnCbG7mxj8OlHhKdwQgIgWAEuKXAIIvAHjyX7CEgNXUBHdwkE+zm6HJjvsHiYhKAHZV8jmPxLPtD5ql4nNKhTMEWC3IsmA1ceMfFyTkRt0ZgAhMAgSAgvB/ACECnxREvPwleMKA1dIC4fCJitO2d73/rM8t26E7im7HXnHpC3Dsq3XniDPh2DCbuds/RoZbatMP6g4BRKQAmHPZZaPCtLoDvSgR72YXFhIwm5omzhVnU2ak0jdPd9JfEs264rJ/Jst65siPZAcyMhkYTc084S9GFLCBzjknEl2okSgAAACmsSHIy5Fl8cEXITPr62HW1fPveQqE4/R2rFh60PX+1WzW51ecQsIo6M4RG0Qw6+ph1DeAojGXm00SKXW77gz7RKcAMOS3g1yUwFv/VobIZmE1t1RlbwuJqb3GhGG4Shmn8Rr4g5MZc+q/myr8TZJpwmpugchyD1wMjRG5gd7szkRkCoCu5cu3i5SzOajrcQFQOWRZsFpaqmrXMSOdgdnWCpGa5FwIIqhU6gs87n9oR1922XNTng9QZTe/RiYDq6WV5zfFlcK1rYsXh38A3iRFpgAAAEuYfx/YxbgAqCwSMOobEt8bQMKA2dQEo6EBRAJG3eS2rxCZ9C9mXb70mpDjxd6sKy77Z5g8H+BA+5b4GfUNPOQWX0oY4j90h9hf5F5J3T+7bli57oz3sDSbmnimui5Kwc/l4I+PASohfbQkYNTUwMhm3/YB7O8Zhl849PC1cJzeziuWz+Ku/8nr/vG1eaV4fwAQwaipPejrjsXOXW2L58/THWJ/keoBAACyrP8M5kL8ZtGGCEZNDey2dhg1NbH/W4hMBlZb6yF/FlFTe8ifkQzDE4Y8gxv/qZHZacwHSBACYGSysNvaEvEeYgBI/X+6Ixwokq+qILYGtppbQDafARAFyvchx8fhF3LxmbRFNHGaWrZmUvNJvJERyHzubdegTOZz3PU/Pd3XrvknVSx9U3eOiiKCkZ543cHkYczEIPy+bdH8c3THOFDkegAAAIb9pRlfgyvmyCDDgFFfD7utA0Zt3ZRnz1cSGQJGbS3stnaYdfWTnkxq1NW+7eficf+Zqab9AUgYMOrqYLW3w6iv58Y/WST54iu6QxxMZFvJ7mtWb1el8jHT/X6eKRttslSELBQgi0X98wSIINJpGKkUaAbzRlSxCHd4CMAfx/2PCvLwnGo0cVrotTlImbwJPXtfdyKVhrBtvmlJrlVti+dfoTvEwUSzBwAAGc7yGZUnuhsVdljCScFsaITd3gGrsQkikwEZlXs5kmFMjO03NsFu74BZ3zCjxh8AKJWCSKUgDMOFTR/hxn/miEiqjPWhxMwHMAwYmcze134nzPqGiUPLuPFPqryhxDd0hziUSL/qeq67/hcyX/j0dL6XVwHEk/I9qHJ54st1IT1v5sUcCZBlQlg2yDRBth3aUkXl+64/Pvb5rhXLVofyBFWq99o1/+THbT4AEciy/vi17/XHqocC/Xn74nk/0p3jUCJdACilRO81a3pkudw+1e81Gxoh0ryKKAmU70F5EpA+lPShpARJOTGfUCqAMLEX+t4vEgIwzIkeBWFUdlMohb9uu2j+Dyr3hNWjZ9UNv5KF/MW6cxwOmSbM+gbAqPDrjkUQbWxddP4FUe69inQBAAC969ad5A/nnoOSU+ofNurqJ9bOMlYphNtbF85bHOU3fJwppajnmrU7VbnUpTvL4Ri1tTBqanXHYFqpPgX7fe2LP9GnO8nhRHYOwD6dS5ZsplTmn6f8jX4kDlti1WOb5RdXcOMfHiJS5NDpEGak39z+2Bhkqaw7BtNHKoEVUW/8gRgUAAAwa+Ul3zQy2SmdoKR8P6w4jB3IVQLLGy++eI/uIEnXtXz5diPrfF53jiPxR4agfJ4DWo2I1N+0L1zwG905JiMWBQAAdK5YukikUk9O9vHKi/RNAksSha+0L5z/sO4Y1aJz+dLrRDpzi+4ch6N8CW9kWHcMVmmK/lfrogXf1x1jsmJTAABA58pLP2Q4qa2TeazyPEBxBc7Cpn7dunjeD3WnqDadK5Z+xrDtHt05DkeVShPnYbBqcWPrpke+rjvEVMSqACAiaWStU4Rt757M46Xrhh2JVbdtlixdzuP+lUdEUjmC5wOwiKCNraWxlXT11bG664xVAQAAbUuWjJs1zmyy7TeO9FhV5jceCw2P+2vWtXz5diOTukp3jiPxR4YAGat2gU2BAta2lkYvoiVLYtfgxK4AACaKgK4a5x3kOJsO9zguAFh46G953F+/zssuWSVS2Vt15zgc5Ut4e7hOTCTCD9qefnRFHBt/IAb7ABxJz6q1G2ShOP+g/0gEu70doFjWOSy6bmldNO/T3PUfDUopseuatTt83h+AVY5PwN+1Lp7/Pd1BZiL2LWPXyuULRCbz1ySMt6/7UwqyWNKQiiWVgnrDKdFV3PhHx8R8gBjsDzA+zr2SybATkB+Pe+MPJKAAAICuFct+4GUy7yXLetvkQFkq6ojEksmFoKX1S+YN6Q7C3ioW8wGUgjc8zPMBYkwBt5V965S2xRfcrztLEGI/BLA/pZToXX3TalUsLFNSTvxsgmC38TAAmzki9T/itMa3GvWsWnurLBQX685xOMJxYDY1647BpkARhoTE11sWz/tJknr/ElUA7DOwet3csle6TZXK7wQAo74eRobPBWAzoX7dumj+oiS9+ZMoNvMB6upgZGt0x2BHJklhrWerv+lcsGBAd5igJfK2uPXyJS/PuvLyuWa25lKyUwMyn9cdicXb67YheZ//GCAiibRxBkV9PsDYGM8HiDgCfguoD7ReNH9FEht/IKE9AAfateqmz4na7PkwjE8D4DM62VS4SuAsXvIXL71rblrpj49fqzvH4ZAwYLW2AiKR92FxJQG1QRK+1bFowSO6w4StKgqAfQbWb5yrFP4SpJYA1K47D4s+HvePL54PwKagF1DrAPF/2hbPe1V3mEqpqgJgH7VundGfrjmXfFoGwmIAjSE/ZR5AqQLPwwJEim5tWXz+p7jrP56UUqL352t2SrfcqTvL4Ri1dTBqeD7AfoYBpACkQ36eQQC3ClLXNxfH76MlS6ruCNmqLAD2p9atMwacmvcC4kxAnQWo02faO6AIQ1DYREo9IgTuGTbxYL1LDwM4NaDYLHyv24b//oYLL+Qj3WKs94YbjpNj5S1KeqbuLIdEBKupGWTbupNEA+HJXG3qo7VjhdOlxLkEOk0KnEoKTTO88i4AfwCp+5Wi+9qefvT5uO3dH7SqLwAOZmTdnU2uhROUkHMAOkEBrVDIgpClvXfxCqoIUAGgMUXYKZTcqSB2eKb/YtcFF2zf/3q7fnVXmzDkLvDvOxYUUFZKntlx0QWP6s7CZq579Y1Xqlzu57pzHA7PB3gL6QmvvWvhwrfs6zJ0+93HeNI/iRSOkqSOIsIsKNQrwBFARkEpgPaA1DgUcqQwAEFbCHjV8Itb+NyOt+MGqQIGbtu4TClcrzsHmxxS+HLrRfP/XXcOFpzeVdev9wuFRbpzHA7PB9gP0SVti+at0x0j6bjcrAAFfFh3BjZZ6tcti+fxpL+E6Vix7GJYdq/uHIcjSyX44+O6Y0SCUuo03RmqARcAlaDwAd0R2KTsKPv2FTzpL3mISBrCi8F5Abw/AAAQiD8zK4ALgJCpq68WAN6nOwc7Ilcq+dmjPvWJQd1BWDg6r7zydUo7f6Y7x2HxeQF7qVOVUjxEHTIuAEI2dMpHZgHgfYgjjhS+ypP+km/W5UuvMVLp23XnOBwlfXh7qn7xSe3Ahg28V0vIuAAImU/ebN0Z2BHdweP+1aNj5bKLhOVEfj6ArPL5AMo136E7Q9JxARAypeg43RnYoZHCdtvwL+dx/+pBRFJY8gwSRqTnA3hVPh9AQB2nO0PScQEQMkGiVXcGdkiuhLiUN/upPh0rVmyDneL5ABGmoFp0Z0g6LgBCJiHrdWdgB0fA37dfdP5DunMwPWZdsfQaI536te4ch1PN8wGIeOv0sHEBEDIi4gIgghRwW8uiebzZT5XrWHHpYrLtXbpzHE61zgdQoAbdGZKOC4CwKT5+OIJ2uL71OR73Z0QkDVOdzvMBokjyMsCQcQHAqo2rlFjK6/3ZPjwfgFUrLgBCp/guM0II9DUe92cH4vkA0aOIuNoJGRcAYSMxojsC+6M7Whad/z3dIVg0day4dLGIwXkBMlcd8wGEAn92howLgJCRQvWU7NG2o+xbK3ncnx0KEUkjJT5KUT8vYLQ65gMo/uwMHRcAIVOkeKxZP1eSWsLj/uxI2pcvfw2Z1Bd05zgcBQV3eBhK+rqjhEoJ4gIgZFwAhIwUbdedodoR6GsdixY8ojsHi4dZl13y86jPB4D0JyYFJniKEUm8rjtD0nEBEDJDGFt1Z6hyPO7PpiwO8wFUuZzoIoBI8GdnyLgACFnjkw/uBFDUnaMaKag3nBKt4HF/NlVEJE3lnBn1+QCyVIQ/Oqo7RhhyLYs+GekCLAm4AAgZXX21BLBJd44q5AG4tH7JvCHdQVg8tV215FXYTrT3BwDg53PwR/bojhG0TVy4h48LgIpQT+hOUG0Uqa+1L17woO4cLN5mXbH0GiOTvkN3jiPx83n4exJUBBCe1B2hGnABUAGKxGO6M1QX9eu2hfP/TXcKlgwdly9bJCJ+XgAA+IU83KFBQMb/xlkpPK47QzXgAqACDHJ/ByD+78p42OEJ/0ruPmRBISJpCOujZET7vAAAUKUS3KHdgB/rJYJKeHSP7hDVgAuACmhZuLCbgM26c1QBT0Et61q4cLfuICxZ2q9YutVIpf4ciP75NMp14Q4MQJZKuqNM17Otn57HEwArgAuASlHYqDtC0vG4PwtTx+VLfxqH+QAAoJSENzQ4MTlQxWxLfeLPykrhAqBSSN6kO0KiETbwuD8LW8flSxcJy+7TnWOy/Hwe7u7dkKX4bB2siG7UnaFacAFQIa2LL3gCwCu6cyTUTo883uefhY6IpGFYZ8RhPsA+yvPgDe2Gt2cYyo987JfaF857RneIasEFQAURaI3uDAnkKiUu4XF/VintVyzdSo7z3+IwH2B/slCAOzAwsXGQjOywwHW6A1QTLgAqyLPkjwDEdmZOFCngH9ovOv8h3TlYdelasexHRjqzQXeOKVMKfm4c5f4+eCN7IF1Xd6I3KVWSvviZ7hjVJF4lbAL0rd+4hoDlunMkAmFD68J5F3LXP9NBKSV6f76mR7rldt1ZZkJYFkQ2C5HKaGkRVKkEv5CHAl6ctfLSkyqfoHpxD0ClCfpX8J4AQdhR9ize559pQ0TSF+mPkSFiveheui68PXtQ7uuFNzQImc8BYc4VUBKyVII/Ogq3vw/u0CBkoQAlzL8N70nZwXAPgAb96zfeDOAzunPEmKegzuYlfywKeq674U9lofCTpJ3KR6YJYduAZUEYJsgyAWFM7SJKQXkelO9DuS5kuQSUXagD7oGE7Wzv+txlxwWXnk2GqTtANfKJrjaUuhjAFN9NDAAU8HVu/FlUdK1Y9l89q66/SBYKC3RnCZLyPPjeRE/AH7s4hAAZJkAEEgIQBAJBCQJJCUhAQQJSQfre5HYkJIIljL8M7Qdhh8Q9AJr037rx/4LwF7pzxA9tbF10/gXc9c+iRCkleq9Z0y3L5Q7dWeKGUqlNs65YfqruHNWI5wBoYpv+PwIY0J0jZnZ6wuVxfxY5RCQNR5xBhhn5hfZRQkJIEv5i3TmqFRcAmjRceOGwUuorunPEiKeguM2NmQAABOxJREFUlvJ6fxZV7cuXv0Yp5y+JO1YnTaTT/9G1YsUbunNUK36lata/fuM6AJ/VnSPqFOir7Yvn/W/dORg7kp5VazfIQnG+7hyRZ9m9R33+8i7dMaoZ9wBo5gnvLwDwyVeHRRvbFp3/r7pTMDYZnSsuvVDY9i7dOaKMDMNXIn2W7hzVjgsAzboWLtwNgSUKiM9pHZX1Oo/7szjZNx9AGEaEttmLEoJw0n999JWf2aI7SbXjAiAC2hbO/wMRzwc4iJxUchGP+7O4aV++/DXKZJeDeJT1QCKTvrlzxSX/V3cOxgVAZLQtWvBDBfxEd44I8SXR8o6LLnhOdxDGpqNz+WdvpkyKh672I5z0M10rli3RnYNN4AIgQtpKY38Bopt054gG+lLHonnrdadgbCZmXX7p34lUeq3uHFFAtrOzszz2Qd052Ju4fypi1Lp19oBdezsI5+nOoosC/q598Xy+c2KJ0bNq7Z2yUDxfdw5dhGXvFpY6rmPFipzuLOxN3AMQMbRkSXnEVosArNOdRQNFpP4HN/4sabpWLp9nZLK3686hg7CcXl85c7nxjx4uACJozoIFpdbS2KVQ+A/dWSrIBdRVrYsWfF93EMbC0Lli6SKRzayppomBwnGe69zx6jFHX7VkSHcW9nbV80qMqYH1d35DQX0Tyf5bjSqFJe0Xzb9LdxDGwta7+oZv+IXiNyFlkt/ToFT67llXXFq1Q5lxkOgXYFIMrN+4SAE/B9CsO0sIXvKJPtO5aN4LuoMwVil9a248zyuW1ivPS+nOEjQSQhop+9sdK5Z/Q3cWdnhcAMTE4K13He2TXAvgY7qzBId+LlP03zvOP5/HBlnV6bt+fbtfHH9QlovH684SFGHaI5SyPtl52dLHdWdhR8YFQIyoe+81+0eL/wjgawTYuvPMwC5S6s9aL1pQlZOiGNtfz5obvi3zha9CqvjOySKCkUr/riNtzKclS3hX05jgAiCG+tffeQIg/x2gC3VnmSJJCmtdw/sy7+7H2Jt61q49VpXVelUqvU93lqkiyxqyDWtF6xXL7tCdhU0NFwAxNnDrhoWK6HsATtCd5YgIGxTR19sXzntGdxTGomrXmnWXyHLph7JcbtWd5UjIMMsiZX+n8/JlV+vOwqaHC4CYU/fea+4eKS1RhL8F1Cm68xxAAfgNFH2r7aJ5D+gOw1hcdK++8a/Idb8hy+U23VkORJZVMCz7p+0tdX9LCxaUdOdh08cFQEIopah//Z3nEfBlEM4FYGiMM6qAG5Uhfthx4fnPa8zBWKztuG7dWYZ0/7cslz+oe9kgWfYg2eb3ui5f9m2dOVhwuABIoIFf3tmpTCwhYJmCOq1CTzsG4G4At8mU+AXP7GcsONtuuaXBGSv+L/L8C33P7axUMUCmNU629Rvpy//3qCuXb6rEc7LK4QIg4Xpv2XicQXQOSJ0F4EwAswO6tAelXiLQnSTUxubi+B949i9j4etft67Gd/0vKldeojzvZOX7KSgVzMWF6QnT3E6muE8QftZ++bKHgrkwiyIuAKrM4C83HOVbeA+AEyBpDghzALQDqAdQCyCz92sPgJG9X6MEDClgMyl6Xil/84hDL87h8T/GtNuyZk1dLez5vi/PhPTfD+UfB4WMUsomqUxAGUpKAggkIImEL0GeEDQOYfbApC1S4RlD0F28fr+6/P9DNqrE+C81igAAAABJRU5ErkJggg==" />
  </defs>
</svg>

                                </div>
                            </div>
                            <div className="levels-verification__item-center">
                                <div className="levels-verification__title levels-verification__title-blue">
                                    Features
                                </div>
                                <div className="levels-verification__features">
                                    <div className="levels-verification__feature">
                                        Deposit crypto
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.73543 14.5089L4.64127 11.4255L5.81722 10.2422L7.73543 12.1589L14.6493 5.24219L15.8253 6.42552L7.73543 14.5089Z"
                                                fill="#7ED17D"
                                            />
                                            <path
                                                d="M10.2376 20C8.25815 20 6.32319 19.4135 4.67738 18.3147C3.03156 17.2159 1.7488 15.6541 0.991311 13.8268C0.233824 11.9996 0.0356369 9.98891 0.421801 8.0491C0.807964 6.10929 1.76112 4.32746 3.16078 2.92894C4.56043 1.53041 6.3437 0.578004 8.28507 0.192152C10.2264 -0.1937 12.2387 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4375 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58805 1.66667 6.97559 2.15541 5.60408 3.07109C4.23256 3.98677 3.16358 5.28826 2.53234 6.81098C1.9011 8.33369 1.73594 10.0092 2.05774 11.6258C2.37955 13.2423 3.17386 14.7271 4.34024 15.8926C5.50662 17.058 6.99269 17.8517 8.6105 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#7ED17D"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        Withdraw crypto
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.73543 14.5089L4.64127 11.4255L5.81722 10.2422L7.73543 12.1589L14.6493 5.24219L15.8253 6.42552L7.73543 14.5089Z"
                                                fill="#7ED17D"
                                            />
                                            <path
                                                d="M10.2376 20C8.25815 20 6.32319 19.4135 4.67738 18.3147C3.03156 17.2159 1.7488 15.6541 0.991311 13.8268C0.233824 11.9996 0.0356369 9.98891 0.421801 8.0491C0.807964 6.10929 1.76112 4.32746 3.16078 2.92894C4.56043 1.53041 6.3437 0.578004 8.28507 0.192152C10.2264 -0.1937 12.2387 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4375 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58805 1.66667 6.97559 2.15541 5.60408 3.07109C4.23256 3.98677 3.16358 5.28826 2.53234 6.81098C1.9011 8.33369 1.73594 10.0092 2.05774 11.6258C2.37955 13.2423 3.17386 14.7271 4.34024 15.8926C5.50662 17.058 6.99269 17.8517 8.6105 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#7ED17D"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        Spot trading
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.73543 14.5089L4.64127 11.4255L5.81722 10.2422L7.73543 12.1589L14.6493 5.24219L15.8253 6.42552L7.73543 14.5089Z"
                                                fill="#7ED17D"
                                            />
                                            <path
                                                d="M10.2376 20C8.25815 20 6.32319 19.4135 4.67738 18.3147C3.03156 17.2159 1.7488 15.6541 0.991311 13.8268C0.233824 11.9996 0.0356369 9.98891 0.421801 8.0491C0.807964 6.10929 1.76112 4.32746 3.16078 2.92894C4.56043 1.53041 6.3437 0.578004 8.28507 0.192152C10.2264 -0.1937 12.2387 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4375 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58805 1.66667 6.97559 2.15541 5.60408 3.07109C4.23256 3.98677 3.16358 5.28826 2.53234 6.81098C1.9011 8.33369 1.73594 10.0092 2.05774 11.6258C2.37955 13.2423 3.17386 14.7271 4.34024 15.8926C5.50662 17.058 6.99269 17.8517 8.6105 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#7ED17D"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        Copy trading
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.73543 14.5089L4.64127 11.4255L5.81722 10.2422L7.73543 12.1589L14.6493 5.24219L15.8253 6.42552L7.73543 14.5089Z"
                                                fill="#7ED17D"
                                            />
                                            <path
                                                d="M10.2376 20C8.25815 20 6.32319 19.4135 4.67738 18.3147C3.03156 17.2159 1.7488 15.6541 0.991311 13.8268C0.233824 11.9996 0.0356369 9.98891 0.421801 8.0491C0.807964 6.10929 1.76112 4.32746 3.16078 2.92894C4.56043 1.53041 6.3437 0.578004 8.28507 0.192152C10.2264 -0.1937 12.2387 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4375 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58805 1.66667 6.97559 2.15541 5.60408 3.07109C4.23256 3.98677 3.16358 5.28826 2.53234 6.81098C1.9011 8.33369 1.73594 10.0092 2.05774 11.6258C2.37955 13.2423 3.17386 14.7271 4.34024 15.8926C5.50662 17.058 6.99269 17.8517 8.6105 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#7ED17D"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        Futures trading
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.73543 14.5089L4.64127 11.4255L5.81722 10.2422L7.73543 12.1589L14.6493 5.24219L15.8253 6.42552L7.73543 14.5089Z"
                                                fill="#7ED17D"
                                            />
                                            <path
                                                d="M10.2376 20C8.25815 20 6.32319 19.4135 4.67738 18.3147C3.03156 17.2159 1.7488 15.6541 0.991311 13.8268C0.233824 11.9996 0.0356369 9.98891 0.421801 8.0491C0.807964 6.10929 1.76112 4.32746 3.16078 2.92894C4.56043 1.53041 6.3437 0.578004 8.28507 0.192152C10.2264 -0.1937 12.2387 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4375 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58805 1.66667 6.97559 2.15541 5.60408 3.07109C4.23256 3.98677 3.16358 5.28826 2.53234 6.81098C1.9011 8.33369 1.73594 10.0092 2.05774 11.6258C2.37955 13.2423 3.17386 14.7271 4.34024 15.8926C5.50662 17.058 6.99269 17.8517 8.6105 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#7ED17D"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        P2P trading
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.73543 14.5089L4.64127 11.4255L5.81722 10.2422L7.73543 12.1589L14.6493 5.24219L15.8253 6.42552L7.73543 14.5089Z"
                                                fill="#7ED17D"
                                            />
                                            <path
                                                d="M10.2376 20C8.25815 20 6.32319 19.4135 4.67738 18.3147C3.03156 17.2159 1.7488 15.6541 0.991311 13.8268C0.233824 11.9996 0.0356369 9.98891 0.421801 8.0491C0.807964 6.10929 1.76112 4.32746 3.16078 2.92894C4.56043 1.53041 6.3437 0.578004 8.28507 0.192152C10.2264 -0.1937 12.2387 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4375 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58805 1.66667 6.97559 2.15541 5.60408 3.07109C4.23256 3.98677 3.16358 5.28826 2.53234 6.81098C1.9011 8.33369 1.73594 10.0092 2.05774 11.6258C2.37955 13.2423 3.17386 14.7271 4.34024 15.8926C5.50662 17.058 6.99269 17.8517 8.6105 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#7ED17D"
                                            />
                                        </svg>
                                    </div>
                                    <div className="levels-verification__feature">
                                        Deposit fiat
                                        <svg
                                            width={21}
                                            height={20}
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.73543 14.5089L4.64127 11.4255L5.81722 10.2422L7.73543 12.1589L14.6493 5.24219L15.8253 6.42552L7.73543 14.5089Z"
                                                fill="#7ED17D"
                                            />
                                            <path
                                                d="M10.2376 20C8.25815 20 6.32319 19.4135 4.67738 18.3147C3.03156 17.2159 1.7488 15.6541 0.991311 13.8268C0.233824 11.9996 0.0356369 9.98891 0.421801 8.0491C0.807964 6.10929 1.76112 4.32746 3.16078 2.92894C4.56043 1.53041 6.3437 0.578004 8.28507 0.192152C10.2264 -0.1937 12.2387 0.0043329 14.0675 0.761209C15.8962 1.51809 17.4593 2.79981 18.559 4.4443C19.6587 6.08879 20.2456 8.02219 20.2456 10C20.2456 12.6522 19.1912 15.1957 17.3143 17.0711C15.4375 18.9464 12.8919 20 10.2376 20ZM10.2376 1.66667C8.58805 1.66667 6.97559 2.15541 5.60408 3.07109C4.23256 3.98677 3.16358 5.28826 2.53234 6.81098C1.9011 8.33369 1.73594 10.0092 2.05774 11.6258C2.37955 13.2423 3.17386 14.7271 4.34024 15.8926C5.50662 17.058 6.99269 17.8517 8.6105 18.1732C10.2283 18.4948 11.9052 18.3297 13.4292 17.699C14.9531 17.0683 16.2557 16.0002 17.1721 14.6298C18.0885 13.2593 18.5776 11.6482 18.5776 10C18.5776 7.78987 17.6989 5.67025 16.1349 4.10745C14.5708 2.54465 12.4495 1.66667 10.2376 1.66667Z"
                                                fill="#7ED17D"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="levels-verification__item-bottom">
                                <div className="levels-verification__title">
                                    Requirements:
                                </div>
                                <div className="levels-verification__requirements">
                                    <div className="levels-verification__requirement">
                                        <svg
                                            width={16}
                                            height={19}
                                            viewBox="0 0 16 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.2053 1V2.72355M8.03526 1V2.72355M3.86523 1V2.72355"
                                                stroke="#2A353D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M0.946289 7.89472C0.946289 5.05101 0.946289 3.62916 1.80125 2.74573C2.65621 1.8623 4.03225 1.8623 6.78433 1.8623H9.28635C12.0384 1.8623 13.4145 1.8623 14.2694 2.74573C15.1244 3.62916 15.1244 5.05101 15.1244 7.89472V12.2036C15.1244 15.0473 15.1244 16.4691 14.2694 17.3526C13.4145 18.236 12.0384 18.236 9.28635 18.236H6.78433C4.03225 18.236 2.65621 18.236 1.80125 17.3526C0.946289 16.4691 0.946289 15.0473 0.946289 12.2036V7.89472Z"
                                                stroke="#2A353D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M4.69922 12.2024H8.03524M4.69922 7.89355H11.3713"
                                                stroke="#2A353D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        Proof of address
                                    </div>
                                    <div className="levels-verification__requirement">
                                        <svg
                                            width={17}
                                            height={19}
                                            viewBox="0 0 17 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.549 10.479V12.2025M8.37901 10.479V12.2025M4.20898 10.479V12.2025"
                                                stroke="#2A353D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M1.29004 7.03241C1.29004 4.18871 1.29004 2.76685 2.145 1.88343C2.99996 1 4.376 1 7.12808 1H9.6301C12.3822 1 13.7582 1 14.6132 1.88343C15.4681 2.76685 15.4681 4.18871 15.4681 7.03241V11.3413C15.4681 14.185 15.4681 15.6068 14.6132 16.4903C13.7582 17.3737 12.3822 17.3737 9.6301 17.3737H7.12808C4.376 17.3737 2.99996 17.3737 2.145 16.4903C1.29004 15.6068 1.29004 14.185 1.29004 11.3413V7.03241Z"
                                                stroke="#2A353D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M5.04297 11.3421H8.37899M5.04297 7.0332H11.715"
                                                stroke="#2A353D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        Total balance amount of 10,000 USD
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`levels-verification__button 
                            ${
                                !loadingUser?!user.kyc3LVLRequest ||!user.kycVerified
                                    ? "levels-verification__button-disabled"
                                    : "":"levels-verification__button-disabled"
                            } `}
                            >
                                <Link
                                    to="/profile/verification-3lvl"
                                    className="buttons__04"
                                >
                                    <svg
                                        width={28}
                                        height={28}
                                        viewBox="0 0 28 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.8735 7.58286L13.8602 4.59619L16.8469 7.58286"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13.8599 16.5432V4.67822"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M4.6665 14C4.6665 19.1567 8.1665 23.3333 13.9998 23.3333C19.8332 23.3333 23.3332 19.1567 23.3332 14"
                                            stroke="white"
                                            strokeWidth="1.75"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Upgrade
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Verification;

const countryList = [
    "Afghanistan",
    "Aland Island",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua Barbuda",
    "Argentina",
    "Aruba",
    "Australia",
    "Austria",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Caribbean Netherlands",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Cook Islands",
    "Costa Rica",
    "Cote dIvoire",
    "Croatia",
    "Curacao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Falkland Islands",
    "Faroe Islands",
    "Federated States of Micronesia",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Germany",
    "Gibraltar",
    "Great Britain (United Kingdom; England)",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Jersey",
    "Jordan",
    "Kosovo",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Laos",
    "Latvia",
    "Lesotho",
    "Liberia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Norway",
    "Oman",
    "Palau",
    "Palestinian territories",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Pitcairn Islands",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of Macedonia (FYROM)",
    "Republic of the Congo",
    "Réunion",
    "Romania",
    "Rwanda",
    "Saint Barthélemy",
    "Saint Martin (France)",
    "Saint-Pierre and Miquelon",
    "Samoa",
    "San Marino",
    "Sao Tome Principe",
    "Saudi Arabia",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Korea",
    "Spain",
    "St. Helena Dependencies",
    "St. Kitts Nevis",
    "St. Lucia",
    "St. Vincent the Grenadines",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Taiwan",
    "Tanzania",
    "Thailand",
    "The Comoros",
    "The Philippines",
    "Timor-Leste (East Timor)",
    "Togo",
    "Tokelau",
    "Tonga",
    "Turkey",
    "Turks Caicos Islands",
    "Tuvalu",
    "Uganda",
    "United Arab Emirates",
    "Uruguay",
    "Vanuatu",
    "Vatican City (The Holy See)",
    "Venezuela",
    "Vietnam",
    "Wallis and Futuna",
    "Western Sahara",
    "Zambia",
];

const daysList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const monthsList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const yearsList = [
    1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963,
    1964, 1965, 1966, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985,
    1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
    1998, 1999, 2000, 2001, 2002, 2003,
];

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
