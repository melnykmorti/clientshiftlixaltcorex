import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMessage, getMessages } from "../../Redux/Actions/userActions";
import { toast } from "react-toastify";
import Toast from "../LoadingError/toast";
import { logDOM } from "@testing-library/react";
import { serverLink } from "../../App";
import { MESSAGE_CREATE_RESET } from "../../Redux/Constants/userContants";
import axios from "axios";
import { formatBytes } from "../utils";
const UPLOAD_AVATAR = "/api/users/upload/multiply";
const Support = () => {
    const toastId = React.useRef(null);
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    };
    const [messageText, setMessageText] = useState("");
    const userInfoLocal = JSON.parse(localStorage.getItem("userInfo"))._doc;
    const dispatch = useDispatch();
    const messagesList = useSelector((state) => state.messagesList);
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState([]);
    const handleBrowseClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    useEffect(() => {
        dispatch(getMessages());
    }, [dispatch]);
    console.log(messagesList);
    const { loadingMessagesList, messages, errorMessagesList } = messagesList;
    const messageCreate = useSelector((state) => state.messageCreate);
    const {
        loadingMessageCreate,
        successMessageCreate,
        errorMessageCreate,
        message,
    } = messageCreate;

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
    useEffect(() => {
        if (successMessageCreate && !toast.isActive(toastId.current)) {
            toastId.current = toast.success("Message sent", Toastobjects);
            // dispatch({ type: SWAP_CREATE_RESET });
            dispatch(getMessages());
            dispatch({ type: MESSAGE_CREATE_RESET });
        } else if (errorMessageCreate && !toast.isActive(toastId.current)) {
            toastId.current = toast.error(errorMessageCreate, Toastobjects);
            dispatch(getMessages());
            dispatch({ type: MESSAGE_CREATE_RESET });
        }
    }, [dispatch, messageCreate]);

    const submitHandler = async (e) => {
        e.preventDefault();
       
    };
    const sendMessageHandler =async (e) => {
        e.preventDefault();
        if (selectedFile[0]) {
            var formData = new FormData();
            console.log("submit");
            console.log("selectedFile", selectedFile);
            let files = selectedFile.map((item) => item.original);
    
            Object.values(selectedFile).forEach((file) => {
                formData.append("uploadImages", file);
            });
            console.log("formData", formData);
            let res;
    
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
                        dispatch(createMessage({isImage:true,imagePath:res.data}))
                    // dispatch(
                    //     verifyUserProfile({
                    //         ...state,
                    //         kycPhotos: res.data,
                    //     })
                    // );
                    // if (!toast.isActive(toastId.current)) {
                    //     toastId.current = toast.success(
                    //         "Uploading Successed",
                    //         Toastobjects
                    //     );
                    // }
                } catch (err) {
                    console.log(err.response);
                }
            } else {
                console.log("one is loading");
            }
        } else if (messageText.length > 1) {
            dispatch(createMessage({ text: messageText, isImage: false }));
        } else {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(
                    "Check the entered data",
                    Toastobjects
                );
            }
        }
    };
    return (
        <main className="main other support" style={{ backgroundColor: "#fff" }}>
            <Toast />
            
            <div className="main__box">
                <section className="chat">
                    <div className="chat__top">
                        <div className="chat__avatar-box">
                            <picture>
                                <source
                                    srcSet="../assets/img/profile/support.svg"
                                    type="image/webp"
                                />
                                <picture>
                                    <source
                                        srcSet="../assets/img/profile/support.svg"
                                        type="image/webp"
                                    />
                                    <img
                                        className="chat__avatar"
                                        src="../assets/img/profile/support.svg"
                                        style={{ width: "50px" }}
                                        alt=""
                                    />
                                </picture>
                            </picture>
                        </div>
                        <div className="chat__title">Live support service</div>
                    </div>
                    <div className="chat__messages">
                        <div className="chat__message-box" id="chat_content">
                            {!loadingMessagesList
                                ? messages.reverse().map((item) => (
                                      <div
                                          className={`chat__message ${
                                              item.userFrom._id ==
                                              userInfoLocal._id
                                                  ? ""
                                                  : "chat__message-support"
                                          }`}
                                          style={{
                                              display: "flex",
                                              justifyContent: "flex-end",
                                          }}
                                      >
                                          <div className="chat__message-left">
                                              <div className="chat__message-text">
                                                  
                                                  {item.isImage?<img src={serverLink+"/images/"+item.imagePath} style={{maxWidth: '330px'}} />:item.text}
                                                  

                                              </div>
                                              <div className="chat__message-data" />
                                          </div>
                                          <div className="chat__message-right">
                                              <picture>
                                                  <source
                                                      srcSet={
                                                          item.userFrom._id ==
                                                          userInfoLocal._id
                                                              ? `${
                                                                    serverLink +
                                                                    "/images" +
                                                                    userInfoLocal.userImage
                                                                }`
                                                              : "/assets/img/profile/avatar.svg"
                                                      }
                                                      type="image/webp"
                                                  />
                                                  <picture>
                                                      <source
                                                          srcSet={
                                                              item.userFrom
                                                                  ._id ==
                                                              userInfoLocal._id
                                                                  ? `${
                                                                        serverLink +
                                                                        "/images" +
                                                                        userInfoLocal.userImage
                                                                    }`
                                                                  : "/assets/img/profile/avatar.svg"
                                                          }
                                                          type="image/webp"
                                                      />
                                                      <img
                                                          className="chat__message-img"
                                                          src={
                                                              item.userFrom
                                                                  ._id ==
                                                              userInfoLocal._id
                                                                  ? `${
                                                                        serverLink +
                                                                        "/images" +
                                                                        userInfoLocal.userImage
                                                                    }`
                                                                  : "/assets/img/profile/avatar.svg"
                                                          }
                                                          alt=""
                                                      />
                                                  </picture>
                                              </picture>
                                              <div className="chat__message-img-title">
                                                  {item.userFrom._id ==
                                                  userInfoLocal._id
                                                      ? userInfoLocal.name
                                                      : "Support"}
                                              </div>
                                          </div>
                                      </div>
                                  ))
                                : null}

                            {/* <div className="chat__message" style={{display:"flex",justifyContent:"flex-end"}}>
                                <div className="chat__message-left">
                                    <div className="chat__message-text">
                                        <img
                                            src="../assets/img/support/2023-09-23-1695486685-13557.png"
                                            style={{ maxWidth: "330px" }}
                                        />{" "}
                                    </div>
                                    <div className="chat__message-data" />
                                </div>
                                <div className="chat__message-right">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/profile/avatar.svg"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/profile/avatar.svg"
                                                type="image/webp"
                                            />
                                            <img
                                                className="chat__message-img"
                                                src="../assets/img/profile/avatar.svg"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                    <div className="chat__message-img-title">
                                        You
                                    </div>
                                </div>
                            </div>
                            <div className="chat__message" style={{display:"flex",justifyContent:"flex-end"}}>
                                <div className="chat__message-left">
                                    <div className="chat__message-text">
                                        fdasfdas{" "}
                                    </div>
                                    <div className="chat__message-data" />
                                </div>
                                <div className="chat__message-right">
                                    <picture>
                                        <source
                                            srcSet="../assets/img/profile/avatar.svg"
                                            type="image/webp"
                                        />
                                        <picture>
                                            <source
                                                srcSet="../assets/img/profile/avatar.svg"
                                                type="image/webp"
                                            />
                                            <img
                                                className="chat__message-img"
                                                src="../assets/img/profile/avatar.svg"
                                                alt=""
                                            />
                                        </picture>
                                    </picture>
                                    <div className="chat__message-img-title">
                                        You
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                <section className="chat__new-message">
                    <div className="chat__add-file" onClick={handleBrowseClick}>
                        <form
                            action="../ajax/ajax?action=SEND_SUPPORT_IMAGE"
                            method="POST"
                            encType="multipart/form-data"
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={(e) =>
                                    setSelectedFileHandler(e.target.files[0], 0)
                                }
                                hidden
                                id="support_send_photo"
                                accept="image/x-png,image/jpeg"
                                name="support_send_image"
                            />
                            <button
                                id="send_image_post"
                                style={{ display: "none" }}
                            />
                        </form>
                        <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <mask id="mask0_130_243" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={48} height={48}>
    <rect x="17.2266" y="0.932617" width={34} height={34} transform="rotate(28.634 17.2266 0.932617)" fill="url(#pattern0)" />
  </mask>
  <g mask="url(#mask0_130_243)">
    <rect x="17.2266" y="0.932617" width={34} height={34} transform="rotate(28.634 17.2266 0.932617)" fill="white" />
  </g>
  <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
      <use xlinkHref="#image0_130_243" transform="scale(0.00195312)" />
    </pattern>
    <image id="image0_130_243" width={512} height={512} xlinkHref="data:image/png;base64,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" />
  </defs>
</svg>

                    </div>
                    <input
                        className="chat__textarea chat__message-input"
                        type="text"
                        placeholder="Enter your message"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                    />
                    <div className="chat__send-message">
                        <a
                            className="buttons__01"
                            id="send_support"
                            onClick={(e) => sendMessageHandler(e)}
                        >
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.16641 5.2668L13.2414 2.90846C16.4164 1.85013 18.1414 3.58346 17.0914 6.75846L14.7331 13.8335C13.1497 18.5918 10.5497 18.5918 8.96641 13.8335L8.26641 11.7335L6.16641 11.0335C1.40807 9.45013 1.40807 6.85846 6.16641 5.2668Z"
                                    stroke="white"
                                    strokeWidth="1.1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.42578 11.3745L11.4091 8.38281"
                                    stroke="white"
                                    strokeWidth="1.1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Send
                        </a>
                    </div>
                </section>
                {selectedFile[0] ? (
                    <div className={`chat__files chat__files-active`}>
                        <div className="chat__files-element">
                            <span>{selectedFile[0].name}</span> (
                            {formatBytes(selectedFile[0].size)})
                            <button
                                className="chat__files-delete"
                                onClick={(e) => deleteSelectedFileHandler(e, 0)}
                            >
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 16 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.4671 3.78564L12.9989 11.7644C12.8793 13.8029 12.8194 14.8222 12.3344 15.555C12.0945 15.9173 11.7857 16.2231 11.4277 16.4529C10.7034 16.9177 9.73391 16.9177 7.79497 16.9177C5.85348 16.9177 4.88273 16.9177 4.15796 16.452C3.79964 16.2218 3.49076 15.9155 3.25102 15.5526C2.76609 14.8186 2.7076 13.7979 2.5906 11.7565L2.13379 3.78564"
                                        stroke="#5E6484"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M14.6 3.78564H1"
                                        stroke="#5E6484"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M10.8639 3.78558L10.3481 2.66476C10.0055 1.92024 9.83421 1.54798 9.53869 1.31581C9.47314 1.26431 9.40373 1.2185 9.33115 1.17883C9.00391 1 8.61117 1 7.82571 1C7.02051 1 6.61792 1 6.28525 1.18633C6.21152 1.22763 6.14116 1.27529 6.07491 1.32883C5.77597 1.57041 5.60898 1.95629 5.27501 2.72806L4.81738 3.78558"
                                        stroke="#5E6484"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M5.91113 12.5405L5.91113 7.76525"
                                        stroke="#5E6484"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M9.68848 12.5399L9.68848 7.76465"
                                        stroke="#5E6484"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        </main>
    );
};

export default Support;
