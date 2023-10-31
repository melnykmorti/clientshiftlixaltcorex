import React, { useEffect } from "react";
import { getUserDetails } from "../../Redux/Actions/userActions";
import { useDispatch } from "react-redux";
const TopLineInfo = ({ props }) => {
    console.log("props", props);
    const { loadingUser, user } = props;

    return (
        <div className="top-line__info">
            <div className="top-line__info-item">
                <div className="top-line__item-img">
                    {!loadingUser ? (
                        user.auth.enabled ? (
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
                        ) :  <svg
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
                    ) : null}
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
                <div className="top-line__item-title">Not verified</div>
            </div>
        </div>
    );
};

export default TopLineInfo;
