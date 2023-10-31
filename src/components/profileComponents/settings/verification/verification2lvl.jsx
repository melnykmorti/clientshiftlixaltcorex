import React, { forwardRef, useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import countryFlagEmoji from "../../../../countryFlagEmoji.json";
import { logDOM } from "@testing-library/react";
import Toast from "../../../LoadingError/toast";
import { toast } from "react-toastify";
import { serverLink } from "../../../../App";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../../Redux/Actions/userActions";
import { verifyUserProfile } from "../../../../Redux/Actions/userActions";
import axios from "axios";
import { formatBytes } from "../../../utils";
import { USER_VERIFICATION_PROFILE_RESET } from "../../../../Redux/Constants/userContants";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import TabsMenu from "../tabsMenu";
const UPLOAD_AVATAR = "/api/users/upload/multiply";
const idTypes = ["Passport", "Driver License", "Government-Issued ID card"];

const Verification2LVL = () => {
    const [state, setState] = useState({
        fullName: "",
        idType: idTypes[0],
        idNumber: "",
    });
    const history = useHistory();
    const today = new Date();
    const [selectActive, setSelectActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState([]);

    const [documentTypeActive, setDocumentTypeActive] = useState(false);
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <div className="date-picker" onClick={onClick} ref={ref}>
            <div className="date-picker__selected">
                <div className="date-picker__selected-icon">
                    <svg
                        width={22}
                        height={24}
                        viewBox="0 0 22 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.33301 2.60498V5.49797"
                            stroke="#191D31"
                            strokeWidth="1.37499"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M14.667 2.60498V5.49797"
                            stroke="#191D31"
                            strokeWidth="1.37499"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3.20801 9.44092H18.7912"
                            stroke="#191D31"
                            strokeWidth="1.37499"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M19.2498 8.8734V17.0702C19.2498 19.9632 17.8748 21.8918 14.6665 21.8918H7.33328C4.12499 21.8918 2.75 19.9632 2.75 17.0702V8.8734C2.75 5.98041 4.12499 4.05176 7.33328 4.05176H14.6665C17.8748 4.05176 19.2498 5.98041 19.2498 8.8734Z"
                            stroke="#191D31"
                            strokeWidth="1.37499"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M14.3869 13.8869H14.3951"
                            stroke="#191D31"
                            strokeWidth="1.83331"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M14.3869 16.78H14.3951"
                            stroke="#191D31"
                            strokeWidth="1.83331"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10.9953 13.8869H11.0035"
                            stroke="#191D31"
                            strokeWidth="1.83331"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10.9953 16.78H11.0035"
                            stroke="#191D31"
                            strokeWidth="1.83331"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.60271 13.8869H7.61094"
                            stroke="#191D31"
                            strokeWidth="1.83331"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.60271 16.78H7.61094"
                            stroke="#191D31"
                            strokeWidth="1.83331"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className="date-picker__selected-value">{value}</div>
                <div className="date-picker__selected-arrow">
                    <svg
                        width={12}
                        height={14}
                        viewBox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.10156 10.3892C6.3125 10.6001 6.66406 10.6001 6.875 10.3892L11.4453 5.84229C11.6562 5.60791 11.6562 5.25635 11.4453 5.04541L10.9062 4.50635C10.6953 4.29541 10.3438 4.29541 10.1094 4.50635L6.5 8.11572L2.86719 4.50635C2.63281 4.29541 2.28125 4.29541 2.07031 4.50635L1.53125 5.04541C1.32031 5.25635 1.32031 5.60791 1.53125 5.84229L6.10156 10.3892Z"
                            fill="#667085"
                        />
                    </svg>
                </div>
            </div>
        </div>
    ));

    const fileInputRef = useRef(null);
    const fileBackSideRef = useRef(null);
    const fileSelfieInputRef = useRef(null);
    const handleBrowseClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleBackSideClick = () => {
        if (fileBackSideRef.current) {
            fileBackSideRef.current.click();
        }
    };
    const handleBrowseSelfieClick = () => {
        if (fileSelfieInputRef.current) {
            fileSelfieInputRef.current.click();
        }
    };
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

    console.log("selectedFile", selectedFile);
    const setSelectedFileHandler = (e, pos) => {
        let filesToPut = selectedFile;
        filesToPut[pos] = e;
        console.log("filesToPut", filesToPut);
        setSelectedFile([...filesToPut]);
    };
    const deleteSelectedFileHandler = (e, pos) => {
        let filesToPut = selectedFile;
        filesToPut[pos] = undefined;
        console.log("filesToPut", filesToPut);
        setSelectedFile([...filesToPut]);
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        var formData = new FormData();
        console.log("submit");
        console.log("selectedFile", selectedFile);
        let files = selectedFile.map((item) => item.original);

        Object.values(selectedFile).forEach((file) => {
            formData.append("uploadImages", file);
        });
        console.log("formData", formData);
        let res;
        console.log("state", state);
        if (
            !(
              state.fullName.length>5&&state.idType&&state.idNumber.length>4
            )
        ) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(
                    "Check the entered data!",
                    Toastobjects
                );
            }
        } else if (!selectedFile.find((item) => item.loading == true)) {
            try {
                console.log("formData", formData);
                console.log("truing to load");
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
                dispatch(
                    verifyUserProfile({
                        ...state,
                        kycPhotos: res.data,
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
    useEffect(() => {
        if (successVerification) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success("Success", Toastobjects);
            }
            dispatch({ type: USER_VERIFICATION_PROFILE_RESET });
        } else if (errorVerification) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(errorVerification, Toastobjects);
            }
            dispatch({ type: USER_VERIFICATION_PROFILE_RESET });
        }
    }, [userVerificationProfile]);

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loadingUser, error, user } = userDetails;

    const toastId = React.useRef(null);
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    };

    useEffect(() => {
        dispatch(
            getUserDetails("profile", undefined, "/profile/verification-2lvl")
        );
    }, [dispatch]);
    useEffect(() => {
        dispatch(
            getUserDetails("profile", undefined, "/profile/verification-2lvl")
        );
        console.log("get user details");
    }, [dispatch, userVerificationProfile]);
    useEffect(() => {
        if (!loadingUser) {
            if (user.verificationRequest) {
                history.push("/profile/verification");
            }
        }
    }, [dispatch, user]);
    console.log(useSelector((state) => state));

    return (
        <main
            className="main account-password other user-settings"
            style={{ backgroundColor: "#fff" }}
        >
            <Toast />

            <div className="main__box ">
                <TabsMenu />
                <section className="settings">
                    <div className="settings__container">
                        <div className="settings-top">
                            <div className="settings-top__header">
                                KYC VERIFICATION
                            </div>
                        </div>
                        <div className="settings__block settings__block-photo">
                            <div className="settings__block-left w-45">
                                <div
                                    className="verification__input verification__input-type verification-chooseid"
                                    style={{ width: "70%" }}
                                >
                                    <div className="verification__input-title">
                                        Select ID type
                                    </div>
                                    <div className="verification__input-element">
                                        <div
                                            className="select select-type"
                                            onClick={() =>
                                                setDocumentTypeActive(
                                                    !documentTypeActive
                                                )
                                            }
                                        >
                                            <div className="select__selected">
                                                <div
                                                    className="select__name"
                                                    id="selected_id_type"
                                                >
                                                    {state.idType}
                                                </div>
                                                <div className="select__arrow">
                                                    <svg
                                                        width={12}
                                                        height={12}
                                                        viewBox="0 0 12 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M6.10156 9.45312C6.3125 9.66406 6.66406 9.66406 6.875 9.45312L11.4453 4.90625C11.6562 4.67188 11.6562 4.32031 11.4453 4.10938L10.9062 3.57031C10.6953 3.35938 10.3438 3.35938 10.1094 3.57031L6.5 7.17969L2.86719 3.57031C2.63281 3.35938 2.28125 3.35938 2.07031 3.57031L1.53125 4.10938C1.32031 4.32031 1.32031 4.67188 1.53125 4.90625L6.10156 9.45312Z"
                                                            fill="#667085"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div
                                                className={`select__menu ${
                                                    documentTypeActive
                                                        ? "select-active"
                                                        : ""
                                                }`}
                                            >
                                                {idTypes.map((item) => (
                                                    <div
                                                        className="select__menu-item"
                                                        onClick={() =>
                                                            setState({
                                                                ...state,
                                                                idType: item,
                                                            })
                                                        }
                                                    >
                                                        <div className="select__name">
                                                            {item}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="settings__block settings__block-photo">
                            <div className="settings__block-left w-45">
                                <div className="settings__input-mail ">
                                    <label
                                        className="
                                  settings__block-label"
                                    >
                                        ID Card Number
                                    </label>
                                    <input
                                        className="input__01"
                                        type="text"
                                        placeholder="username"
                                        defaultValue="mortisss"
                                        value={state.idNumber}
                                        onChange={(e) =>
                                            setState({
                                                ...state,
                                                idNumber: e.target.value,
                                            })
                                        }
                                        id="username_input"
                                    />
                                </div>
                            </div>
                            <div className="settings__block-right w-45">
                                <div className="settings__input-mail">
                                    <label
                                        className="
                                  settings__block-label"
                                    >
                                        Full Name on Card
                                    </label>
                                    <input
                                        className="input__01"
                                        type="text"
                                        placeholder="username"
                                        defaultValue="mortisss"
                                        value={state.fullName}
                                        onChange={(e) =>
                                            setState({
                                                ...state,
                                                fullName: e.target.value,
                                            })
                                        }
                                        id="username_input"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="verification-uploadfiles">
                            <div className="verification__drops">
                                <div className="verification__drop">
                                    <div className="verification__drop-title">
                                        Upload the document
                                    </div>

                                    <div
                                        className={`drop drop-one ${
                                            selectedFile[0] ? "active" : ""
                                        }`}
                                    >
                                        <div className="drop__img-default">
                                            <svg
                                                width={22}
                                                height={22}
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.25 10.084V15.5839L10.0833 13.7506"
                                                    stroke="#191D31"
                                                    strokeWidth="1.37499"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M8.25031 15.5833L6.41699 13.75"
                                                    stroke="#191D31"
                                                    strokeWidth="1.37499"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M20.1661 9.16724V13.7505C20.1661 18.3338 18.3328 20.1671 13.7495 20.1671H8.2496C3.66632 20.1671 1.83301 18.3338 1.83301 13.7505V8.25058C1.83301 3.6673 3.66632 1.83398 8.2496 1.83398H12.8329"
                                                    stroke="#191D31"
                                                    strokeWidth="1.37499"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M20.1663 9.16724H16.4996C13.7497 9.16724 12.833 8.25058 12.833 5.50061V1.83398L20.1663 9.16724Z"
                                                    stroke="#191D31"
                                                    strokeWidth="1.37499"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="drop__img-active">
                                            <svg
                                                width={22}
                                                height={24}
                                                viewBox="0 0 22 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11.3024 11.8116L9.0383 14.1935C7.78248 15.5146 7.78248 17.6458 9.0383 18.9669C10.2941 20.288 12.3199 20.288 13.5758 18.9669L17.1415 15.2156C19.644 12.583 19.644 8.30141 17.1415 5.6688C14.6391 3.03618 10.5691 3.03618 8.06665 5.6688L4.18002 9.75755C2.03504 12.0141 2.03504 15.6785 4.18002 17.9447"
                                                    stroke="#191D31"
                                                    strokeWidth="1.37499"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="drop__text">
                                            Drop file here or{" "}
                                            <span
                                                className="drop__btn"
                                                onClick={handleBrowseClick}
                                            >
                                                Browse
                                            </span>
                                        </div>
                                        <div className="drop__text-file">
                                            {selectedFile[0] ? (
                                                <React.Fragment>
                                                    <span>
                                                        {selectedFile[0].name}
                                                    </span>
                                                    {formatBytes(
                                                        selectedFile[0].size
                                                    )}{" "}
                                                </React.Fragment>
                                            ) : null}
                                        </div>
                                        <div
                                            className="drop__img-delete"
                                            onClick={(e) =>
                                                deleteSelectedFileHandler(e, 0)
                                            }
                                        >
                                            <svg
                                                width={15}
                                                height={17}
                                                viewBox="0 0 15 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M13.1006 3.59863L12.6461 11.0423C12.53 12.9441 12.4719 13.895 12.0011 14.5786C11.7684 14.9166 11.4687 15.2019 11.1211 15.4163C10.4181 15.8499 9.47718 15.8499 7.59526 15.8499C5.71087 15.8499 4.76868 15.8499 4.06523 15.4155C3.71744 15.2007 3.41765 14.9149 3.18495 14.5764C2.71429 13.8916 2.65752 12.9394 2.54397 11.0349L2.10059 3.59863"
                                                    stroke="#5E6484"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M14.2 3.59863H1"
                                                    stroke="#5E6484"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M10.5738 3.59875L10.0732 2.55311C9.74062 1.85852 9.57435 1.51123 9.28752 1.29463C9.2239 1.24658 9.15654 1.20385 9.08608 1.16684C8.76847 1 8.38729 1 7.62492 1C6.84341 1 6.45265 1 6.12977 1.17383C6.05821 1.21236 5.98992 1.25683 5.92562 1.30678C5.63547 1.53215 5.4734 1.89215 5.14925 2.61216L4.70508 3.59875"
                                                    stroke="#5E6484"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M5.7666 11.7661L5.7666 7.31111"
                                                    stroke="#5E6484"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M9.43359 11.766L9.43359 7.31104"
                                                    stroke="#5E6484"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/png, image/jpeg"
                                            id="image_document"
                                            hidden
                                            ref={fileInputRef}
                                            onChange={(e) =>
                                                setSelectedFileHandler(
                                                    e.target.files[0],
                                                    0
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="verification__drop">
                                    <div className="verification__drop-title">
                                        Identify Document Back side
                                    </div>

                                    <div
                                        className={`drop drop-two white-bg ${
                                            selectedFile[1] ? "active" : ""
                                        }`}
                                    >
                                        <div className="drop__img-default">
                                            <svg
                                                width={22}
                                                height={22}
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.25 10.084V15.5839L10.0833 13.7506"
                                                    stroke="#191D31"
                                                    strokeWidth="1.37499"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M8.25031 15.5833L6.41699 13.75"
                                                    stroke="#191D31"
                                                    strokeWidth="1.37499"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M20.1661 9.16724V13.7505C20.1661 18.3338 18.3328 20.1671 13.7495 20.1671H8.2496C3.66632 20.1671 1.83301 18.3338 1.83301 13.7505V8.25058C1.83301 3.6673 3.66632 1.83398 8.2496 1.83398H12.8329"
                                                    stroke="#191D31"
                                                    strokeWidth="1.37499"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M20.1663 9.16724H16.4996C13.7497 9.16724 12.833 8.25058 12.833 5.50061V1.83398L20.1663 9.16724Z"
                                                    stroke="#191D31"
                                                    strokeWidth="1.37499"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="drop__img-active">
                                            <svg
                                                width={22}
                                                height={24}
                                                viewBox="0 0 22 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11.3024 11.8116L9.0383 14.1935C7.78248 15.5146 7.78248 17.6458 9.0383 18.9669C10.2941 20.288 12.3199 20.288 13.5758 18.9669L17.1415 15.2156C19.644 12.583 19.644 8.30141 17.1415 5.6688C14.6391 3.03618 10.5691 3.03618 8.06665 5.6688L4.18002 9.75755C2.03504 12.0141 2.03504 15.6785 4.18002 17.9447"
                                                    stroke="#191D31"
                                                    strokeWidth="1.37499"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="drop__text">
                                            Drop file here or{" "}
                                            <span
                                                className="drop__btn"
                                                onClick={handleBackSideClick}
                                            >
                                                Browse
                                            </span>
                                        </div>
                                        <div className="drop__text-file">
                                            {selectedFile[1] ? (
                                                <React.Fragment>
                                                    <span>
                                                        {selectedFile[1].name}
                                                    </span>
                                                    {formatBytes(
                                                        selectedFile[1].size
                                                    )}{" "}
                                                </React.Fragment>
                                            ) : null}
                                        </div>
                                        <div
                                            className="drop__img-delete"
                                            onClick={(e) =>
                                                deleteSelectedFileHandler(e, 1)
                                            }
                                        >
                                            <svg
                                                width={15}
                                                height={17}
                                                viewBox="0 0 15 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M13.1006 3.59863L12.6461 11.0423C12.53 12.9441 12.4719 13.895 12.0011 14.5786C11.7684 14.9166 11.4687 15.2019 11.1211 15.4163C10.4181 15.8499 9.47718 15.8499 7.59526 15.8499C5.71087 15.8499 4.76868 15.8499 4.06523 15.4155C3.71744 15.2007 3.41765 14.9149 3.18495 14.5764C2.71429 13.8916 2.65752 12.9394 2.54397 11.0349L2.10059 3.59863"
                                                    stroke="#5E6484"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M14.2 3.59863H1"
                                                    stroke="#5E6484"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M10.5738 3.59875L10.0732 2.55311C9.74062 1.85852 9.57435 1.51123 9.28752 1.29463C9.2239 1.24658 9.15654 1.20385 9.08608 1.16684C8.76847 1 8.38729 1 7.62492 1C6.84341 1 6.45265 1 6.12977 1.17383C6.05821 1.21236 5.98992 1.25683 5.92562 1.30678C5.63547 1.53215 5.4734 1.89215 5.14925 2.61216L4.70508 3.59875"
                                                    stroke="#5E6484"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M5.7666 11.7661L5.7666 7.31111"
                                                    stroke="#5E6484"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M9.43359 11.766L9.43359 7.31104"
                                                    stroke="#5E6484"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>
                                        <input
                                            type="file"
                                            ref={fileBackSideRef}
                                            id="image_selfie"
                                            accept="image/png, image/jpeg"
                                            hidden
                                            onChange={(e) =>
                                                setSelectedFileHandler(
                                                    e.target.files[0],
                                                    1
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="verification__drop">
                                    <div className="verification__drop-title">
                                        Upload the selfie
                                    </div>

                                    <div
                                        className={`drop drop-two white-bg ${
                                            selectedFile[2] ? "active" : ""
                                        }`}
                                    >
                                        <div className="drop__img-default">
                                            <svg
                                                width={22}
                                                height={22}
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.25 10.084V15.5839L10.0833 13.7506"
                                                    stroke="#191D31"
                                                    strokeWidth="1.37499"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M8.25031 15.5833L6.41699 13.75"
                                                    stroke="#191D31"
                                                    strokeWidth="1.37499"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M20.1661 9.16724V13.7505C20.1661 18.3338 18.3328 20.1671 13.7495 20.1671H8.2496C3.66632 20.1671 1.83301 18.3338 1.83301 13.7505V8.25058C1.83301 3.6673 3.66632 1.83398 8.2496 1.83398H12.8329"
                                                    stroke="#191D31"
                                                    strokeWidth="1.37499"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M20.1663 9.16724H16.4996C13.7497 9.16724 12.833 8.25058 12.833 5.50061V1.83398L20.1663 9.16724Z"
                                                    stroke="#191D31"
                                                    strokeWidth="1.37499"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="drop__img-active">
                                            <svg
                                                width={22}
                                                height={24}
                                                viewBox="0 0 22 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11.3024 11.8116L9.0383 14.1935C7.78248 15.5146 7.78248 17.6458 9.0383 18.9669C10.2941 20.288 12.3199 20.288 13.5758 18.9669L17.1415 15.2156C19.644 12.583 19.644 8.30141 17.1415 5.6688C14.6391 3.03618 10.5691 3.03618 8.06665 5.6688L4.18002 9.75755C2.03504 12.0141 2.03504 15.6785 4.18002 17.9447"
                                                    stroke="#191D31"
                                                    strokeWidth="1.37499"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="drop__text">
                                            Drop file here or{" "}
                                            <span
                                                className="drop__btn"
                                                onClick={
                                                    handleBrowseSelfieClick
                                                }
                                            >
                                                Browse
                                            </span>
                                        </div>
                                        <div className="drop__text-file">
                                            {selectedFile[2] ? (
                                                <React.Fragment>
                                                    <span>
                                                        {selectedFile[2].name}
                                                    </span>
                                                    {formatBytes(
                                                        selectedFile[2].size
                                                    )}{" "}
                                                </React.Fragment>
                                            ) : null}
                                        </div>
                                        <div
                                            className="drop__img-delete"
                                            onClick={(e) =>
                                                deleteSelectedFileHandler(e, 1)
                                            }
                                        >
                                            <svg
                                                width={15}
                                                height={17}
                                                viewBox="0 0 15 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M13.1006 3.59863L12.6461 11.0423C12.53 12.9441 12.4719 13.895 12.0011 14.5786C11.7684 14.9166 11.4687 15.2019 11.1211 15.4163C10.4181 15.8499 9.47718 15.8499 7.59526 15.8499C5.71087 15.8499 4.76868 15.8499 4.06523 15.4155C3.71744 15.2007 3.41765 14.9149 3.18495 14.5764C2.71429 13.8916 2.65752 12.9394 2.54397 11.0349L2.10059 3.59863"
                                                    stroke="#5E6484"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M14.2 3.59863H1"
                                                    stroke="#5E6484"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M10.5738 3.59875L10.0732 2.55311C9.74062 1.85852 9.57435 1.51123 9.28752 1.29463C9.2239 1.24658 9.15654 1.20385 9.08608 1.16684C8.76847 1 8.38729 1 7.62492 1C6.84341 1 6.45265 1 6.12977 1.17383C6.05821 1.21236 5.98992 1.25683 5.92562 1.30678C5.63547 1.53215 5.4734 1.89215 5.14925 2.61216L4.70508 3.59875"
                                                    stroke="#5E6484"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M5.7666 11.7661L5.7666 7.31111"
                                                    stroke="#5E6484"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M9.43359 11.766L9.43359 7.31104"
                                                    stroke="#5E6484"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/png, image/jpeg"
                                            ref={fileSelfieInputRef}
                                            id="image_selfie"
                                            hidden
                                            onChange={(e) =>
                                                setSelectedFileHandler(
                                                    e.target.files[0],
                                                    2
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="settings-undertext">
                            <span>
                                This account was created on January 10, 2023,
                                02:12 PM
                            </span>
                            <div className="settings-buttons">
                             
                                <button className="settings-buttons_submit settings-buttons" onClick={submitHandler}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>{" "}
                </section>
            </div>
        </main>
    );
};

export default Verification2LVL;
