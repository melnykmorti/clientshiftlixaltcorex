import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
    getUserDetails,
    verifyUserProfile,
} from "../../../../Redux/Actions/userActions";
import { formatBytes } from "../../../utils";
import { toast } from "react-toastify";
import Toast from "../../../LoadingError/toast";
import axios from "axios";
import { serverLink } from "../../../../App";

const UPLOAD_AVATAR = "/api/users/upload/multiply";

const Verification3LVL = ({match}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.userDetails);
    const { loadingUser, error, user } = userDetails;
    const [selectedFile, setSelectedFile] = useState([]);
    const fileInputRef = useRef(null);
    useEffect(() => {
        dispatch(
            getUserDetails("profile", undefined, "/profile/verification-3lvl")
        );
    }, [dispatch,match]);
    useEffect(() => {
        if (!loadingUser) {
            if (user.kycVerified3LVL) {
                history.push("/profile/verification");
            }
        }
    }, [dispatch, user]);
    const toastId = React.useRef(null);
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    };
    const handleBrowseClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

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
        if (selectedFile[0]) {
            if (!selectedFile.find((item) => item.loading == true)) {
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
                            action: "VERIFY_3LVL",
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
        } else {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(
                    "Check the entered data!",
                    Toastobjects
                );
            }
        }
    };
    useEffect(() => {
        if (!loadingUser) {
            if (user.kyc3LVLRequest) {
                history.push("/profile/verification");
            }
        }
    }, [dispatch, user]);
    return (
        <main
            className="main kyc-verification other"
            style={{ backgroundColor: "#EAECEF" }}
        >
            <Toast />
            <section className="top-line">
                <div className="top-line__box">
                    <div className="top-line__left">
                        <div className="top-line__img">
                            <svg
                                width={59}
                                height={45}
                                viewBox="0 0 59 45"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    x1="52.4746"
                                    y1="8.35617"
                                    x2="31.3562"
                                    y2="38.5254"
                                    stroke="#3ED7D7"
                                    strokeWidth={12}
                                    strokeLinecap="round"
                                />
                                <line
                                    x1="29.4746"
                                    y1="8.35617"
                                    x2="8.35616"
                                    y2="38.5254"
                                    stroke="#7044EE"
                                    strokeWidth={12}
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <div className="top-line__content">
                            <div className="top-line__title">
                                KYC Verification - LVL3
                            </div>
                            <div className="top-line__des">
                                Select a suitable benefit according to your
                                needs and complete the verification
                            </div>
                        </div>
                    </div>
                    <div className="top-line__info">
                        <div className="top-line__info-item">
                            <div className="top-line__item-img">
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
                            </div>
                            <div className="top-line__item-title">
                                Two-Factor Authentication (2FA)
                            </div>
                        </div>
                        <div className="top-line__info-item">
                            <div className="top-line__item-img">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                                        stroke="#5CBE4C"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                                        stroke="#5CBE4C"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="top-line__item-title">Verified</div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="main__box">
                <section className="tabs-menu">
                    <Link className="tabs-menu__link" to="/profile/settings">
                        <svg
                            width={21}
                            height={20}
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.5 13.125C8.775 13.125 7.375 11.725 7.375 10C7.375 8.275 8.775 6.875 10.5 6.875C12.225 6.875 13.625 8.275 13.625 10C13.625 11.725 12.225 13.125 10.5 13.125ZM10.5 8.125C9.46667 8.125 8.625 8.96667 8.625 10C8.625 11.0333 9.46667 11.875 10.5 11.875C11.5333 11.875 12.375 11.0333 12.375 10C12.375 8.96667 11.5333 8.125 10.5 8.125Z"
                                fill="#101828"
                            />
                            <path
                                d="M13.175 18.4917C13 18.4917 12.825 18.4667 12.65 18.4251C12.1333 18.2834 11.7 17.9584 11.425 17.5001L11.325 17.3334C10.8333 16.4834 10.1583 16.4834 9.66663 17.3334L9.57496 17.4917C9.29996 17.9584 8.86663 18.2917 8.34996 18.4251C7.82496 18.5667 7.28329 18.4917 6.82496 18.2167L5.39163 17.3917C4.88329 17.1001 4.51663 16.6251 4.35829 16.0501C4.20829 15.4751 4.28329 14.8834 4.57496 14.3751C4.81663 13.9501 4.88329 13.5667 4.74163 13.3251C4.59996 13.0834 4.24163 12.9417 3.74996 12.9417C2.53329 12.9417 1.54163 11.9501 1.54163 10.7334V9.26674C1.54163 8.05008 2.53329 7.05841 3.74996 7.05841C4.24163 7.05841 4.59996 6.91674 4.74163 6.67508C4.88329 6.43341 4.82496 6.05008 4.57496 5.62508C4.28329 5.11674 4.20829 4.51674 4.35829 3.95008C4.50829 3.37508 4.87496 2.90008 5.39163 2.60841L6.83329 1.78341C7.77496 1.22508 9.01663 1.55008 9.58329 2.50841L9.68329 2.67508C10.175 3.52508 10.85 3.52508 11.3416 2.67508L11.4333 2.51674C12 1.55008 13.2416 1.22508 14.1916 1.79174L15.625 2.61674C16.1333 2.90841 16.5 3.38341 16.6583 3.95841C16.8083 4.53341 16.7333 5.12508 16.4416 5.63341C16.2 6.05841 16.1333 6.44174 16.275 6.68341C16.4166 6.92508 16.775 7.06674 17.2666 7.06674C18.4833 7.06674 19.475 8.05841 19.475 9.27508V10.7417C19.475 11.9584 18.4833 12.9501 17.2666 12.9501C16.775 12.9501 16.4166 13.0917 16.275 13.3334C16.1333 13.5751 16.1916 13.9584 16.4416 14.3834C16.7333 14.8917 16.8166 15.4917 16.6583 16.0584C16.5083 16.6334 16.1416 17.1084 15.625 17.4001L14.1833 18.2251C13.8666 18.4001 13.525 18.4917 13.175 18.4917ZM10.5 15.4084C11.2416 15.4084 11.9333 15.8751 12.4083 16.7001L12.5 16.8584C12.6 17.0334 12.7666 17.1584 12.9666 17.2084C13.1666 17.2584 13.3666 17.2334 13.5333 17.1334L14.975 16.3001C15.1916 16.1751 15.3583 15.9667 15.425 15.7167C15.4916 15.4667 15.4583 15.2084 15.3333 14.9917C14.8583 14.1751 14.8 13.3334 15.1666 12.6917C15.5333 12.0501 16.2916 11.6834 17.2416 11.6834C17.775 11.6834 18.2 11.2584 18.2 10.7251V9.25841C18.2 8.73341 17.775 8.30008 17.2416 8.30008C16.2916 8.30008 15.5333 7.93341 15.1666 7.29174C14.8 6.65008 14.8583 5.80841 15.3333 4.99174C15.4583 4.77508 15.4916 4.51674 15.425 4.26674C15.3583 4.01674 15.2 3.81674 14.9833 3.68341L13.5416 2.85841C13.1833 2.64174 12.7083 2.76674 12.4916 3.13341L12.4 3.29174C11.925 4.11674 11.2333 4.58341 10.4916 4.58341C9.74996 4.58341 9.05829 4.11674 8.58329 3.29174L8.49163 3.12508C8.28329 2.77508 7.81663 2.65008 7.45829 2.85841L6.01663 3.69174C5.79996 3.81674 5.63329 4.02508 5.56663 4.27508C5.49996 4.52508 5.53329 4.78341 5.65829 5.00008C6.13329 5.81674 6.19163 6.65841 5.82496 7.30008C5.45829 7.94174 4.69996 8.30841 3.74996 8.30841C3.21663 8.30841 2.79163 8.73341 2.79163 9.26674V10.7334C2.79163 11.2584 3.21663 11.6917 3.74996 11.6917C4.69996 11.6917 5.45829 12.0584 5.82496 12.7001C6.19163 13.3417 6.13329 14.1834 5.65829 15.0001C5.53329 15.2167 5.49996 15.4751 5.56663 15.7251C5.63329 15.9751 5.79163 16.1751 6.00829 16.3084L7.44996 17.1334C7.62496 17.2417 7.83329 17.2667 8.02496 17.2167C8.22496 17.1667 8.39163 17.0334 8.49996 16.8584L8.59163 16.7001C9.06663 15.8834 9.75829 15.4084 10.5 15.4084Z"
                                fill="#101828"
                            />
                        </svg>
                        <span>Account settings</span>
                    </Link>
                    <Link
                        className="tabs-menu__link"
                        to="/profile/change-password"
                    >
                        <svg
                            width={21}
                            height={20}
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.5 8.33317V6.6665C5.5 3.90817 6.33333 1.6665 10.5 1.6665C14.6667 1.6665 15.5 3.90817 15.5 6.6665V8.33317"
                                stroke="#667085"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.5 15.4167C11.6506 15.4167 12.5833 14.4839 12.5833 13.3333C12.5833 12.1827 11.6506 11.25 10.5 11.25C9.34937 11.25 8.41663 12.1827 8.41663 13.3333C8.41663 14.4839 9.34937 15.4167 10.5 15.4167Z"
                                stroke="#667085"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M14.6666 18.3335H6.33329C2.99996 18.3335 2.16663 17.5002 2.16663 14.1668V12.5002C2.16663 9.16683 2.99996 8.3335 6.33329 8.3335H14.6666C18 8.3335 18.8333 9.16683 18.8333 12.5002V14.1668C18.8333 17.5002 18 18.3335 14.6666 18.3335Z"
                                stroke="#667085"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>Password</span>
                    </Link>
                    <Link
                        className="tabs-menu__link"
                        to="/profile/2fa-security"
                    >
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.7418 1.85781L4.58346 3.42448C3.62513 3.78281 2.8418 4.91615 2.8418 5.93281V12.1245C2.8418 13.1078 3.4918 14.3995 4.28346 14.9911L7.8668 17.6661C9.0418 18.5495 10.9751 18.5495 12.1501 17.6661L15.7335 14.9911C16.5251 14.3995 17.1751 13.1078 17.1751 12.1245V5.93281C17.1751 4.90781 16.3918 3.77448 15.4335 3.41615L11.2751 1.85781C10.5668 1.59948 9.43346 1.59948 8.7418 1.85781Z"
                                stroke="#667085"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10 10.4168C10.9205 10.4168 11.6667 9.67064 11.6667 8.75016C11.6667 7.82969 10.9205 7.0835 10 7.0835C9.07957 7.0835 8.33337 7.82969 8.33337 8.75016C8.33337 9.67064 9.07957 10.4168 10 10.4168Z"
                                stroke="#667085"
                                strokeWidth="1.25"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10 10.4165V12.9165"
                                stroke="#667085"
                                strokeWidth="1.25"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>2FA Auth</span>
                    </Link>
                    <div
                        className="tabs-menu__link tabs-menu__link-menu"
                      
                    >
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.5003 18.9587H7.50033C2.97533 18.9587 1.04199 17.0253 1.04199 12.5003V7.50033C1.04199 2.97533 2.97533 1.04199 7.50033 1.04199H12.5003C17.0253 1.04199 18.9587 2.97533 18.9587 7.50033V12.5003C18.9587 17.0253 17.0253 18.9587 12.5003 18.9587ZM7.50033 2.29199C3.65866 2.29199 2.29199 3.65866 2.29199 7.50033V12.5003C2.29199 16.342 3.65866 17.7087 7.50033 17.7087H12.5003C16.342 17.7087 17.7087 16.342 17.7087 12.5003V7.50033C17.7087 3.65866 16.342 2.29199 12.5003 2.29199H7.50033Z"
                                fill="#667085"
                            />
                            <path
                                d="M10.0003 10.8337C9.53366 10.8337 9.16699 10.4587 9.16699 10.0003C9.16699 9.54199 9.54199 9.16699 10.0003 9.16699C10.4587 9.16699 10.8337 9.54199 10.8337 10.0003C10.8337 10.4587 10.467 10.8337 10.0003 10.8337Z"
                                fill="#667085"
                            />
                            <path
                                d="M13.3333 10.8337C12.8667 10.8337 12.5 10.4587 12.5 10.0003C12.5 9.54199 12.875 9.16699 13.3333 9.16699C13.7917 9.16699 14.1667 9.54199 14.1667 10.0003C14.1667 10.4587 13.8 10.8337 13.3333 10.8337Z"
                                fill="#667085"
                            />
                            <path
                                d="M6.66634 10.8337C6.19967 10.8337 5.83301 10.4587 5.83301 10.0003C5.83301 9.54199 6.20801 9.16699 6.66634 9.16699C7.12467 9.16699 7.49967 9.54199 7.49967 10.0003C7.49967 10.4587 7.13301 10.8337 6.66634 10.8337Z"
                                fill="#667085"
                            />
                        </svg>
                        <span>Menu</span>
                    </div>
                    <div className="tabs-menu__right">
                        <Link
                            className="tabs-menu__link tabs-menu__link-active"
                            to="/profile/verification"
                        >
                            <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.45828 2.04209C10.0333 1.55042 10.9749 1.55042 11.5583 2.04209L12.8749 3.17542C13.1249 3.39209 13.5916 3.56709 13.9249 3.56709H15.3416C16.2249 3.56709 16.9499 4.29209 16.9499 5.17542V6.59209C16.9499 6.91709 17.1249 7.39209 17.3416 7.64209L18.4749 8.95876C18.9666 9.53376 18.9666 10.4754 18.4749 11.0588L17.3416 12.3754C17.1249 12.6254 16.9499 13.0921 16.9499 13.4254V14.8421C16.9499 15.7254 16.2249 16.4504 15.3416 16.4504H13.9249C13.5999 16.4504 13.1249 16.6254 12.8749 16.8421L11.5583 17.9754C10.9833 18.4671 10.0416 18.4671 9.45828 17.9754L8.14161 16.8421C7.89161 16.6254 7.42494 16.4504 7.09161 16.4504H5.64994C4.76661 16.4504 4.04161 15.7254 4.04161 14.8421V13.4171C4.04161 13.0921 3.86661 12.6254 3.65828 12.3754L2.53328 11.0504C2.04994 10.4754 2.04994 9.54209 2.53328 8.96709L3.65828 7.64209C3.86661 7.39209 4.04161 6.92542 4.04161 6.60042V5.16709C4.04161 4.28376 4.76661 3.55876 5.64994 3.55876H7.09161C7.41661 3.55876 7.89161 3.38376 8.14161 3.16709L9.45828 2.04209Z"
                                    stroke="#667085"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.48328 10.0001L9.49161 12.0167L13.5166 7.9834"
                                    stroke="#667085"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>KYC Verification</span>
                        </Link>
                        <Link
                            className="tabs-menu__link"
                            to="/profile/affiliate"
                        >
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.9163 15.8168H6.08301C5.73301 15.8168 5.34134 15.5418 5.22468 15.2085L1.77468 5.55846C1.28301 4.17513 1.85801 3.75013 3.04134 4.60013L6.29134 6.92513C6.83301 7.30013 7.44968 7.10846 7.68301 6.50013L9.14968 2.5918C9.61634 1.3418 10.3913 1.3418 10.858 2.5918L12.3247 6.50013C12.558 7.10846 13.1747 7.30013 13.708 6.92513L16.758 4.75013C18.058 3.8168 18.683 4.2918 18.1497 5.80013L14.783 15.2251C14.658 15.5418 14.2663 15.8168 13.9163 15.8168Z"
                                    stroke="#667085"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M5.41699 18.333H14.5837"
                                    stroke="#667085"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.91699 11.667H12.0837"
                                    stroke="#667085"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>Affiliate</span>
                        </Link>
                        
                        <Link
                            className="tabs-menu__link"
                            to="/profile/promo-codes"
                        >
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.2501 10.4168C16.2501 9.26683 17.1834 8.3335 18.3334 8.3335V7.50016C18.3334 4.16683 17.5001 3.3335 14.1667 3.3335H5.83341C2.50008 3.3335 1.66675 4.16683 1.66675 7.50016V7.91683C2.81675 7.91683 3.75008 8.85016 3.75008 10.0002C3.75008 11.1502 2.81675 12.0835 1.66675 12.0835V12.5002C1.66675 15.8335 2.50008 16.6668 5.83341 16.6668H14.1667C17.5001 16.6668 18.3334 15.8335 18.3334 12.5002C17.1834 12.5002 16.2501 11.5668 16.2501 10.4168Z"
                                    stroke="#667085"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.5 12.2915L12.5 7.2915"
                                    stroke="#667085"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.4953 12.2917H12.5028"
                                    stroke="#667085"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.49534 7.70817H7.50283"
                                    stroke="#667085"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>Promo codes</span>
                        </Link>
                    </div>
                </section>
                <section className="upgrade-verification">
                    <div className="upgrade-verification__container">
                        <div className="upgrade-verification__item">
                            <div className="upgrade-verification__info">
                                <div className="upgrade-verification__img">
                                    <svg
                                        width={28}
                                        height={30}
                                        viewBox="0 0 28 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.5414 2.96785C13.3464 2.25355 14.6647 2.25355 15.4814 2.96785L17.3247 4.61437C17.6747 4.92915 18.328 5.18339 18.7947 5.18339H20.778C22.0147 5.18339 23.0297 6.23668 23.0297 7.52V9.57814C23.0297 10.0503 23.2747 10.7404 23.578 11.1036L25.1647 13.0165C25.853 13.8518 25.853 15.2199 25.1647 16.0674L23.578 17.9802C23.2747 18.3434 23.0297 19.0214 23.0297 19.5057V21.5638C23.0297 22.8472 22.0147 23.9004 20.778 23.9004H18.7947C18.3397 23.9004 17.6747 24.1547 17.3247 24.4695L15.4814 26.116C14.6764 26.8303 13.358 26.8303 12.5414 26.116L10.698 24.4695C10.348 24.1547 9.6947 23.9004 9.22803 23.9004H7.2097C5.97303 23.9004 4.95803 22.8472 4.95803 21.5638V19.4936C4.95803 19.0214 4.71303 18.3434 4.42137 17.9802L2.84637 16.0553C2.1697 15.2199 2.1697 13.8639 2.84637 13.0286L4.42137 11.1036C4.71303 10.7404 4.95803 10.0624 4.95803 9.59025V7.50789C4.95803 6.22457 5.97303 5.17128 7.2097 5.17128H9.22803C9.68303 5.17128 10.348 4.91704 10.698 4.60227L12.5414 2.96785Z"
                                            stroke="#101828"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M9.77637 14.5294L12.588 17.4593L18.223 11.5996"
                                            stroke="#101828"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="upgrade-verification__info-wrapper">
                                    <div className="upgrade-verification__title">
                                        Verification for Level 3
                                    </div>
                                    <div className="upgrade-verification__description">
                                        Please note that KYC must be completed
                                        by the owner of the Project account
                                    </div>
                                </div>
                            </div>
                            <div className="upgrade-verification__block">
                                <div className="upgrade-verification__subtitle">
                                    Your verified address
                                </div>
                                <div className="upgrade-verification__address">
                                    <input
                                        className="input__01"
                                        type="text"
                                        disabled
                                        defaultValue={
                                            !loadingUser
                                                ? user.kycProps.address
                                                : ""
                                        }
                                    />
                                </div>
                            </div>
                            <div className="upgrade-verification__block">
                                <div className="upgrade-verification__subtitle">
                                    Upload proof of your address
                                </div>
                                <div className="upgrade-verification__subdescription">
                                    We receive: Paycheck Stub, Tax Forms, Lease
                                    or Mortgage Statement, Statement, Billing
                                    Statement or Official Letter, Car Title or
                                    Registration, Current Insurance Policy
                                </div>
                            </div>
                            <div className="upgrade-verification__drop">
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
                                        hidden
                                        ref={fileInputRef}
                                        id="submit_image"
                                        onChange={(e) =>
                                            setSelectedFileHandler(
                                                e.target.files[0],
                                                0
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <div className="upgrade-verification__link">
                                <button
                                    
                                    className="buttons__04"
                                    id="submit_btn"
                                    onClick={submitHandler}
                                >
                                    <svg
                                        width={21}
                                        height={20}
                                        viewBox="0 0 21 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.66641 5.2668L13.7414 2.90846C16.9164 1.85013 18.6414 3.58346 17.5914 6.75846L15.2331 13.8335C13.6497 18.5918 11.0497 18.5918 9.46641 13.8335L8.76641 11.7335L6.66641 11.0335C1.90807 9.45013 1.90807 6.85846 6.66641 5.2668Z"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M8.92578 11.3745L11.9091 8.38281"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Submit for review
                                </button>
                            </div>
                            <div className="upgrade-verification__alert">
                                <div className="alert">
                                    <div className="alert__img">
                                        <svg
                                            width={25}
                                            height={24}
                                            viewBox="0 0 25 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 22C18 22 22.5 17.5 22.5 12C22.5 6.5 18 2 12.5 2C7 2 2.5 6.5 2.5 12C2.5 17.5 7 22 12.5 22Z"
                                                stroke="#6D6D6D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.5 8V13"
                                                stroke="#6D6D6D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.4941 16H12.5031"
                                                stroke="#6D6D6D"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="alert__text">
                                        Make sure you have at least $10,000 in
                                        your account to successfully complete
                                        the verification
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Verification3LVL;
