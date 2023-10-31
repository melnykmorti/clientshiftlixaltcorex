import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../Redux/Actions/userActions";

const GlobalBanScreen = () => {
        const userDetails = useSelector((state) => state.userDetails);
        const { user, loadingUser } = userDetails;
        const dispatch=useDispatch();
        useEffect(()=>{
                dispatch(getUserDetails("profile",undefined,));
        },[dispatch])

        
    return (
        <div
            style={{
                background: "#b93c3c",
                height: "100vh",
                color: "white",
                textAlign: "center",
                fontSize: "16px",
                fontFamily: "roboto,sans-serif",
                padding: "50px",
            }}
        >
            <p>Dear User,</p>
            <p>
                We regret to inform you that your{" "}
                <strong>account has been banned</strong> due to{" "}
                <strong>illegal activity</strong> and{" "}
                <strong>violations of our platform's terms of service</strong>{" "}
                as well as applicable laws and regulations. <br />
                We take these matters very seriously and have a zero-tolerance
                policy towards any activities that jeopardize the integrity of
                our platform or put our users at risk.
            </p>
            <p>Thank you for your understanding and cooperation.</p>
        </div>
    );
};

export default GlobalBanScreen;
