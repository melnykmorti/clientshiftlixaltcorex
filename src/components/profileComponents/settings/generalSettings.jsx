import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../LoadingError/toast";
import Loading from "../../LoadingError/loading";
import Message from "../../LoadingError/error";
import { toast } from "react-toastify";
import {
    updateUserProfile,
    getUserDetails,
} from "../../../Redux/Actions/userActions";
import { serverLink } from "../../../App";
import { USER_UPDATE_PROFILE_RESET } from "../../../Redux/Constants/userContants";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TabsMenu from "./tabsMenu";

const UPLOAD_AVATAR = "/api/users/upload";
const GeneralSettings = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const toastId = React.useRef(null);
    const [newUserName, setNewUserName] = useState("");
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    };
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        displayName: "",
        name: "",
        email: "",
        phoneNumber: "",
    });
    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loadingUser, error, user } = userDetails;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { loadingUpdate, successUpdate, errorUpdate } = userUpdateProfile;
    useEffect(() => {
        dispatch(
            getUserDetails("profile", undefined, "/profile/settings", true)
        );
    }, [dispatch, userUpdateProfile]);
    useEffect(() => {
        if (!loadingUser) {
            setState({
                firstName: user.firstName,
                lastName: user.lastName,
                displayName: user.displayName,
                name:user.name,
                email:user.email,
                phoneNumber:user.phoneNumber
            });
        }
    }, [dispatch, loadingUser]);
    console.log(userUpdateProfile);
    useEffect(() => {
        if (successUpdate) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success("Success", Toastobjects);
            }
        } else if (errorUpdate) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(errorUpdate, Toastobjects);
            }
        }
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
    }, [userUpdateProfile]);
    const handleUploadButtonClick = () => {
        // Trigger the click event on the input element
        document.getElementById("profile_photo_input").click();
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (e.target.files[0]) {
            formData.append("name", "fds");
            formData.append("image", e.target.files[0]);
            let response = await axios
                .post(`${serverLink + UPLOAD_AVATAR}`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                })
                .then((res) => {
                    return res;
                })
                .catch((err) => {
                    return err;
                });

            if (response.data.filename) {
                dispatch(
                    updateUserProfile({
                        id: user._id,

                        userImage: `/${response.data.filename}`,
                    })
                );
                if (!toast.isActive(toastId.current)) {
                    toastId.current = toast.success(
                        "Uploading Successed",
                        Toastobjects
                    );
                }
            } else {
                dispatch(
                    updateUserProfile({
                        id: user._id,
                    })
                );
                if (!toast.isActive(toastId.current)) {
                    toastId.current = toast.error(
                        "Failed Uploading",
                        Toastobjects
                    );
                }
            }
        }
    };
    const submitDeleteHandler = async (e) => {
        e.preventDefault();

        dispatch(
            updateUserProfile({
                id: user._id,

                userImage: `/avatar.svg`,
            })
        );
    };

    const submitChangeHandler = (e) => {
        e.preventDefault();

        dispatch(
            updateUserProfile({
                id:user._id,
                ...state
            })
        );
    };
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
                                My Profile
                            </div>
                            <div className="settings-top__title">
                                Personal Information
                            </div>
                            <div className="settings-top__undertext">
                                Specify only real data, otherwise your account
                                will be blocked in case of suspicion of fraud.
                            </div>
                        </div>
                        <div className="settings__block settings__block-photo">
                            <div className="settings__block-left w-45">
                                <div className="settings__input-mail">
                                    <label
                                        className="
                                      settings__block-label"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        className="input__01"
                                        type="text"
                                        placeholder="username"
                                        defaultValue="mortisss"
                                        value={state.firstName}
                                        onChange={(e) =>
                                           setState({...state,firstName:e.target.value})
                                        }
                                        id="username_input"
                                    />
                                    <label
                                        className="
                                      settings__block-label"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        className="input__01 "
                                        type="text"
                                        placeholder="username"
                                        defaultValue="mortisss"
                                        value={state.lastName}
                                        onChange={(e) =>
                                            setState({...state,lastName:e.target.value})
                                        }
                                        id="username_input"
                                    />
                                </div>
                            </div>
                            <div className="settings__block-right w-45">
                                <div className="settings__input-mail ">
                                    <label
                                        className="
                                      settings__block-label"
                                    >
                                        Display Name
                                    </label>
                                    <input
                                        className="input__01"
                                        type="text"
                                        placeholder="username"
                                        defaultValue="mortisss"
                                        value={state.displayName}
                                        onChange={(e) =>
                                         setState({...state,displayName:e.target.value})
                                        }
                                        id="username_input"
                                    />
                                    <label
                                        className="
                                    settings__block-label"
                                    >
                                        Username
                                    </label>
                                    <input
                                        className="input__01 "
                                        type="text"
                                        placeholder="username"
                                        defaultValue="mortisss"
                                        value={state.name}
                                        onChange={(e) =>
                                         setState({...state,name:e.target.value})
                                        }
                                        id="username_input"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="settings-top"
                            style={{ paddingTop: "30px" }}
                        >
                            <div className="settings-top__title">
                                Contact Information
                            </div>
                            <div className="settings-top__undertext">
                                Help us secure your account, it will also help
                                verify your identity
                            </div>
                        </div>
                        <div className="settings__block settings__block-photo">
                            <div className="settings__block-left w-45">
                                <div className="settings__input-mail">
                                    <label
                                        className="
                                      settings__block-label"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="input__01"
                                        type="text"
                                        placeholder="username"
                                        defaultValue="mortisss"
                                        value={state.email}
                                        onChange={(e) =>
                                           setState({...state,email:e.target.value})
                                        }
                                        id="username_input"
                                    />
                                </div>
                            </div>
                            <div className="settings__block-right w-45">
                                <div className="settings__input-mail ">
                                    <label
                                        className="
                                      settings__block-label"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        className="input__01"
                                        type="text"
                                        placeholder="username"
                                        defaultValue="mortisss"
                                        value={state.phoneNumber}
                                        onChange={(e) =>
                                            setState({...state,phoneNumber:e.target.value})
                                        }
                                        id="username_input"
                                    />
                                </div>

                                {/* <div className="settings__photo">
                                    <div className="settings__photo-wrapper">
                                        <div className="settings__photo-buttons">
                                            <button
                                                className="settings__photo-remove"
                                                type="button"
                                                id="remove_profile_photo"
                                                onClick={submitDeleteHandler}
                                            >
                                                Remove
                                            </button>
                                            <div className="settings__photo-upload">
                                                <button
                                                    type="button"
                                                    className="buttons__02 settings__button-upload"
                                                    onClick={
                                                        handleUploadButtonClick
                                                    }
                                                >
                                                    <svg
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M13.7005 7.41699C16.7005 7.67533 17.9255 9.21699 17.9255 12.592V12.7003C17.9255 16.4253 16.4338 17.917 12.7088 17.917H7.28381C3.55881 17.917 2.06714 16.4253 2.06714 12.7003V12.592C2.06714 9.24199 3.27547 7.70033 6.22547 7.42533"
                                                            stroke="#444444"
                                                            strokeWidth="1.25"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M10 1.6665V12.3998"
                                                            stroke="#444444"
                                                            strokeWidth="1.25"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M12.7921 10.542L10.0004 13.3337L7.20874 10.542"
                                                            stroke="#444444"
                                                            strokeWidth="1.25"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    Upload
                                                </button>
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/x-png,image/jpeg"
                                                id="profile_photo_input"
                                                style={{ display: "none" }}
                                                onChange={(e) =>
                                                    submitHandler(e)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="settings__photo-img">
                                        <img
                                            className="settings__photo-image"
                                            src={
                                                serverLink +
                                                "/images" +
                                                user.userImage
                                            }
                                            id="my_profile_photo"
                                        />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                      
                        <div className="settings-undertext">
                            <span>
                                This account was created on January 10, 2023,
                                02:12 PM
                            </span>
                            <div className="settings-buttons">
                                <button className="settings-buttons_cancel settings-buttons">
                                    Cancel
                                </button>
                                <button className="settings-buttons_submit settings-buttons"
                                    onClick={submitChangeHandler}
                                >
                                    Save Change
                                </button>
                            </div>
                        </div>
                    </div>{" "}
                </section>
            </div>
        </main>
    );
};
export default GeneralSettings;
