import React, { useEffect } from "react";
import HeaderProfile from "../components/profileComponents/headerProfile";
import { useDispatch,useSelector } from "react-redux";
import { getUserDetails } from "../Redux/Actions/userActions";


const TermsOfUse = () => {

        const dispatch=useDispatch();

        const userDetails = useSelector((state) => state.userDetails);
        const { loadingUser, error, user } = userDetails;

        useEffect(()=>{
                dispatch(getUserDetails("profile",undefined,"/terms"));
        },[dispatch]);
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
                                    Terms of Service
                                </div>
                                <div className="top-line__des">
                                    User agreement
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="main__box">
                    <section className="information">
                        <div className="information__container" dangerouslySetInnerHTML={{__html:!loadingUser?user.termsOfUseDraft:null}}>
                         
                        </div>
                    </section>
                </div>
            </main>
        </React.Fragment>
    );
};

export default TermsOfUse;
