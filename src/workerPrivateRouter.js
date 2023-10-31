import React from "react";
import { Redirect, Route } from "react-router-dom";

function WorkerPrivateRouter({ component: Component, ...rest }) {
    return ( <Route {...rest }
        component = {
            (props) => {
                const token = JSON.parse( window.localStorage.getItem("userInfo"));
                
                if (token) {
                    return <Component {...props }
                    />;
                } else {
                    return <Redirect to = { "/profile/wallet" }
                    />;
                }
            }
        }
        />
    );
}

export default WorkerPrivateRouter;