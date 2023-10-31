import React from "react";
import { ToastContainer } from "react-toastify";

const Toast = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        style={{zIndex:"10000",marginTop:"2rem"}}
      />
     
    </div>
  );
};

export default Toast;
