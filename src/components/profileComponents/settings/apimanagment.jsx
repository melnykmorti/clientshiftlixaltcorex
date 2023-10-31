import React from "react";
import Toast from "../../LoadingError/toast";
import TabsMenu from "./tabsMenu";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ApiManagment = () => {
    return (
        <main
            className="main account-password other user-settings"
            style={{ backgroundColor: "#fff" }}
        >
            <Toast />

            <div className="main__box">
                <TabsMenu />
                <section className="settings">
                    <div className="settings__container">
                        <div className="settings-top">
                            <div className="settings-top__header">
                                Api Managment
                            </div>
                        </div>
                        <div className="list-keys">
                            <div className="top-list-keys">
                                <svg
                                    width={57}
                                    height={54}
                                    viewBox="0 0 57 54"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <rect
                                        width={57}
                                        height={54}
                                        rx={13}
                                        fill="#6D6FF4"
                                    />
                                    <mask
                                        id="mask0_0_1"
                                        style={{ maskType: "alpha" }}
                                        maskUnits="userSpaceOnUse"
                                        x={7}
                                        y={4}
                                        width={43}
                                        height={43}
                                    >
                                        <rect
                                            x={7}
                                            y={4}
                                            width={43}
                                            height={43}
                                            fill="url(#pattern0)"
                                        />
                                    </mask>
                                    <g mask="url(#mask0_0_1)">
                                        <rect
                                            x={7}
                                            y={4}
                                            width={43}
                                            height={43}
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <pattern
                                            id="pattern0"
                                            patternContentUnits="objectBoundingBox"
                                            width={1}
                                            height={1}
                                        >
                                            <use
                                                xlinkHref="#image0_0_1"
                                                transform="scale(0.00195312)"
                                            />
                                        </pattern>
                                        <image
                                            id="image0_0_1"
                                            width={512}
                                            height={512}
                                            xlinkHref="data:image/png;base64,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"
                                        />
                                    </defs>
                                </svg>
                                <span>List of Api Keys</span>
                            </div>
                        </div>
                        <div className="separator" style={{borderTop:"2px solid #F0EFF5"}}>

                        </div>


                        <div className="d-flex flex-row">
                            <Link to="/" style={{color:"#000000",alignSelf:"end"}}>Need help?</Link>
                            <div className="settings-buttons">
                               
                                <button className="settings-buttons_submit settings-buttons">
                                    Save Change
                                </button>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ApiManagment;
