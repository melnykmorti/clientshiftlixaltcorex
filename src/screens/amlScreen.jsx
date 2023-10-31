import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../Redux/Actions/userActions";
import { Helmet } from "react-helmet";

const AMLScreen = () => {
    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loadingUser, error, user } = userDetails;

    useEffect(() => {
        dispatch(getUserDetails("profile", undefined, "/terms"));
    }, [dispatch]);
    console.log(user);
    return (
        <React.Fragment>

        
            <main className="main other legal" style={{ backgroundColor: "#EAECEF" }}>
            <section className="top-line">
                    <div className="top-line__box">
                        <div className="top-line__left">
                            <div className="top-line__img">
                                <img src="/assets/img/other/shiftlixlogobig.svg"/>
                            </div>
                            <div className="top-line__content">
                                <div className="top-line__title">
                                AML & KYC policy

                                </div>
                                <div className="top-line__des">
                                The purposes of the ShiftLix Anti-Money Laundering

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="main__box">
                    <section className="information">
                        <div className="information__container" dangerouslySetInnerHTML={{__html:!loadingUser?user.amlKYCPolicy:null}}></div>
                    </section>
                </div>
            </main>
        </React.Fragment>
    );
};

export default AMLScreen;
