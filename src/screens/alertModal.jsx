import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlert, updateAlert } from "../Redux/Actions/userActions";
import { ALERT_INFO_RESET, ALERT_UPDATE_RESET } from "../Redux/Constants/userContants";

const AlertModal = () => {
    const dispatch = useDispatch();
    const alertUpdate = useSelector((state) => state.alertUpdate);
    const alertData = useSelector((state) => state.alertData);
    const { loadingAlertUpdate, successAlertUpdate, errorAlertUpdate } =
        alertUpdate;

    const { loadingAlertInfo, alert, errorAlertInfo,successAlertInfo } = alertData;
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!loadingAlertInfo && !successAlertInfo) {
                console.log("getData");
                dispatch(getAlert());
            }
        }, 10000);
    
        return () => {
            // Остановка интервала при размонтировании компонента или при выполнении этой функции useEffect снова
            clearInterval(intervalId);
        };
    }, [dispatch, loadingAlertInfo, successAlertInfo]);
    console.log(alertData);

    const closeButtonHandler=(e)=>{
        e.preventDefault();
        dispatch(updateAlert({id:alert._id}));
    }
    useEffect(()=>{
        if(successAlertUpdate){
                dispatch({type:ALERT_INFO_RESET});
                dispatch({type:ALERT_UPDATE_RESET})
        }
    },[dispatch,alertUpdate])
    if(alert._id){
        if(alert.type==0){
            return ( <div
                className={`withdrawal-popup lvl3-required ${alert._id?"withdrawal-successful-active":""}`}
                id="alert_message_modal"
            >
                <section className="verificationPayment error-occurred">
                    <div className="verificationPayment__left">
                        <img
                            src
                            id="alert_img_pop"
                            style={{ display: "none", width: "145px" }}
                        />
                        <svg
                            width={177}
                            height={190}
                            viewBox="0 0 177 190"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            id="svg_alert_img"
                        >
                            <circle
                                cx="13.0517"
                                cy="143.789"
                                r="2.59858"
                                fill="#0085FF"
                            />
                            <circle
                                cx="15.4794"
                                cy="4.33097"
                                r="4.33097"
                                fill="#19D77C"
                            />
                            <circle
                                cx="159.415"
                                cy="65.8319"
                                r="4.33097"
                                fill="#7044EE"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M135.026 91.5235C145.121 114.228 157.288 136.222 151.438 151.543C145.629 166.841 121.74 175.447 101.045 175.577C80.327 175.667 62.804 167.279 46.0364 154.923C29.2922 142.608 13.3035 126.324 12.694 109.068C12.108 91.8515 26.9097 73.6304 45.515 58.9583C64.1118 44.3181 86.5206 33.195 101.701 39.3479C116.921 45.4775 124.922 68.8511 135.026 91.5235Z"
                                fill="#ECECEC"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M87.0635 21.1504C88.4099 17.851 93.082 17.851 94.4283 21.1504L150.01 157.364C151.077 159.98 149.153 162.844 146.327 162.844H35.1644C32.339 162.844 30.4146 159.98 31.4821 157.364L87.0635 21.1504Z"
                                fill="#FF8D8D"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M141.529 150.487L87.7621 18.7194C87.3632 17.7419 86.7256 16.9586 85.8492 16.3697C84.9729 15.7808 84.0068 15.4863 82.9509 15.4863C81.8951 15.4863 80.929 15.7808 80.0526 16.3697C79.1763 16.9586 78.5386 17.7419 78.1397 18.7194L24.3725 150.487C24.0456 151.288 23.9262 152.119 24.0145 152.98C24.1027 153.841 24.3881 154.63 24.8707 155.349C25.3534 156.067 25.9765 156.629 26.7402 157.036C27.5039 157.443 28.3184 157.647 29.1837 157.647H136.718C137.583 157.647 138.398 157.443 139.162 157.036C139.925 156.629 140.548 156.067 141.031 155.349C141.514 154.63 141.799 153.841 141.887 152.98C141.976 152.119 141.856 151.288 141.529 150.487ZM82.953 18.0848C84.1168 18.0848 84.9185 18.6235 85.3582 19.7011L139.125 151.469C139.474 152.323 139.391 153.133 138.876 153.899C138.362 154.665 137.643 155.048 136.72 155.048H29.1857C28.263 155.048 27.5443 154.665 27.0296 153.899C26.515 153.133 26.4319 152.323 26.7806 151.469L80.5478 19.7011C80.9875 18.6235 81.7892 18.0848 82.953 18.0848Z"
                                fill="#0D0938"
                            />
                            <rect
                                x="52.6348"
                                y="142.921"
                                width="60.6336"
                                height="2.59858"
                                rx="0.994286"
                                fill="#0D0938"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M79.8394 76.7982C79.7294 74.8463 81.2825 73.2031 83.2375 73.2031C85.1925 73.2031 86.7457 74.8463 86.6357 76.7982L84.5054 114.585C84.4674 115.257 83.9111 115.783 83.2375 115.783C82.564 115.783 82.0076 115.257 81.9697 114.585L79.8394 76.7982Z"
                                fill="#0D0938"
                            />
                            <circle
                                cx="83.0432"
                                cy="124.299"
                                r="5.10957"
                                fill="#0D0938"
                            />
                        </svg>
                    </div>
                    <div className="verificationPayment__right">
                        <div
                            className="verificationPayment__title"
                            id="alert_title_text"
                        >
                            Warning
                        </div>
                        <div className="verificationPayment__des" id="userAlertBox">
                            <p dangerouslySetInnerHTML={{__html:!loadingAlertInfo?alert._id?alert.alertText:null:null}}></p>
                        </div>
                        <div className="verificationPayment__btn-box">
                            <div className="verificationPayment__btn-start"></div>
                           
                            <div
                                className="verificationPayment__btn-return"
                                id="alert_close_modal_btn"
            onClick={closeButtonHandler}
                            >
                                <a className="buttons__02">
                                    Close
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>)
        }
        if(alert.type==1){
            return (<div className="withdrawal-popup lvl3-required withdrawal-successful-active" id="alert_message_modal">
            <section className="verificationPayment error-occurred">
              <div className="verificationPayment__left">
                <img src="/assets/img/bonus-icon.png" id="alert_img_pop" style={{display: 'block', width: '145px'}} />
              </div>
              <div className="verificationPayment__right">
                <div className="verificationPayment__title" id="alert_title_text">Bonus</div>
                <div className="verificationPayment__des" id="userAlertBox" style={{fontSize: '18px'}} dangerouslySetInnerHTML={{__html:!loadingAlertInfo?alert._id?alert.alertText:null:null}}></div>
                <div className="verificationPayment__btn-box">
                  <div className="verificationPayment__btn-start">
                  </div>
                  <input type="hidden" id="alertMessageId" defaultValue={14274} />
                  <div className="verificationPayment__btn-return" id="alert_close_modal_btn">
                    <a  className="buttons__02"  onClick={closeButtonHandler}>Close</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          )
        }
    }
    return (
       <div></div>
    );
};

export default AlertModal;
