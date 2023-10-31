import React from "react";
import { projectName } from "../../App";

const Trade = ()=>{
        return (
                <section className="trade">
  <div className="global__container">
    <div className="trade__top">
      <div className="trade__top-wrapper">
        <div className="trade__top-subtitle">
          Trade on the go
        </div>
        <div className="trade__top-title">
          Trade anywhere and anytime with {projectName}                  </div>
      </div>
      <div className="trade__top-wrapper">
        <div className="trade__top-description">
          Enjoy the convenience of {projectName}’s crypto trading
          platform. Make money on cryptocurrency anytime,
          anywhere as valuable.
        </div>
        <a className="trade__top-link" href="signup">
          Get Started
        </a>
      </div>
    </div>
    <div className="trade__img">
      <img src="../landings/new_7/img/trade/ipad.png" alt="" />
    </div>
  </div>
</section>

        )
}

export default Trade;