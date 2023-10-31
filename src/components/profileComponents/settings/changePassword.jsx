import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_DETAILS_RESET, USER_UPDATE_PROFILE_RESET } from "../../../Redux/Constants/userContants";
import { updateUserProfile } from "../../../Redux/Actions/userActions";
import { toast } from "react-toastify";
import Toast from "../../LoadingError/toast";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TabsMenu from "./tabsMenu";
import FASecurity from "./security/2faSecurity";
import { getUserDetails } from "../../../Redux/Actions/userActions";
const ChangePassword = ({match}) => {
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
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
    const dispatch = useDispatch();
    const [newUserName, setNewUserName] = useState("");
    const userDetails = useSelector((state) => state.userDetails);
    const { loadingUser, error, user } = userDetails;
    const toastId = React.useRef(null);
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    };
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { loadingUpdate, successUpdate, errorUpdate } = userUpdateProfile;

    useEffect(() => {
        dispatch(getUserDetails("profile", undefined, "/profile/change-password"));
    }, [dispatch, match]);



    useEffect(() => {
        if (successUpdate) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success(
                    "Successfully changed!",
                    Toastobjects
                );
            }
        } else if (errorUpdate) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(errorUpdate, Toastobjects);
            }
        }
        //dispatch({type:USER_UPDATE_PROFILE_RESET});
    }, [dispatch, userUpdateProfile]);
    

    const submitEmailAuthChange=(e)=>{
        e.preventDefault();
        if(!loadingUser){
            dispatch(updateUserProfile({emailAuth:!user.emailAuth}));
        }
        
    }

   

    return (
        <main
            className="main account-password other user-settings"
            style={{ backgroundColor: "#fff" }}
        >
            <Toast />

            <div className="main__box">
                <TabsMenu />
                <section className="change-password">
                    <div className="change-password__box">
                        <div className="change-password-top">
                            <div className="settings-top__header">Security</div>

                            <div className="settings-top__undertext">
                                Specify only real data, otherwise your account
                                will be blocked in case of suspicion of fraud.
                            </div>
                        </div>
                        <div className="block-left_right">
                            <div className="change-password__left">
                                <div className="change-password__img">
                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 28 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <mask
                                            id="mask0_159_1115"
                                            style={{ maskType: "alpha" }}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="28"
                                            height="28"
                                        >
                                            <rect
                                                width="28"
                                                height="28"
                                                fill="url(#pattern0)"
                                            />
                                        </mask>
                                        <g mask="url(#mask0_159_1115)">
                                            <rect
                                                x="-1"
                                                y="1"
                                                width="30"
                                                height="28"
                                                fill="#080808"
                                            />
                                        </g>
                                        <defs>
                                            <pattern
                                                id="pattern0"
                                                patternContentUnits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <use
                                                    xlinkHref="#image0_159_1115"
                                                    transform="scale(0.00195312)"
                                                />
                                            </pattern>
                                            <image
                                                id="image0_159_1115"
                                                width="512"
                                                height="512"
                                                xlinkHref="data:image/png;base64,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"
                                            />
                                        </defs>
                                    </svg>
                                </div>
                                <div className="change-password__content">
                                    <div className="change-password__title">
                                        Email Authentication
                                    </div>
                                </div>
                            </div>
                            <div className="change-password__right">
                                <div className={`change-password__change button-state ${!loadingUser&&user.emailAuth?"":"button-state_enabled"} `}>
                                    <button
                                        className="buttons__01"
                                        
                                        onClick={submitEmailAuthChange}
                                    >
                                        {!loadingUser&&user.emailAuth?"Disable":"Enable"}
                                    </button>
                                </div>
                            </div>
                        </div>
                   
                        <div className="block-left_right">
                            <div className="change-password__left">
                                <div className="change-password__img">
                                    <svg
                                        width={28}
                                        height={28}
                                        viewBox="0 0 28 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <rect
                                            width={28}
                                            height={28}
                                            fill="url(#pattern01)"
                                        />
                                        <defs>
                                            <pattern
                                                id="pattern01"
                                                patternContentUnits="objectBoundingBox"
                                                width={1}
                                                height={1}
                                            >
                                                <use
                                                    xlinkHref="#googlesvg"
                                                    transform="scale(0.00195312)"
                                                />
                                            </pattern>
                                            <image
                                                id="googlesvg"
                                                width={512}
                                                height={512}
                                                xlinkHref="data:image/png;base64,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"
                                            />
                                        </defs>
                                    </svg>
                                </div>
                                <div className="change-password__content">
                                    <div className="change-password__title">
                                        Google Authentication
                                    </div>
                                </div>
                            </div>
                            <div className="change-password__right">
                                <div className={`change-password__change button-state ${!loadingUser&&user.auth.enabled?"":"button-state_enabled"}`}>
                                    <button
                                        className="buttons__01"
                                        
                                       
                                    >
                                        {!loadingUser&&user.auth.enabled?"Disabled":"Enabled"}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="separator"></div>

                        <FASecurity/>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ChangePassword;
