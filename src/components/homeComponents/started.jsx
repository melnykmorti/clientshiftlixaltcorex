import React from "react";

const Started=()=>{
        return (<section className="started">
        <div className="started__container">
          <div className="started__title">Get Started</div>
          <div className="started__description">
            Join the fastest growing global cryptocurrency exchange
            - with the lowest fees around
          </div>
          <div className="started__cards">
            <div className="started__card started__card-one">
              <div className="started__card-img">
                <img src="landings/new_3/images/started/create-img.png" alt="" />
              </div>
              <div className="started__card-title">Create an account</div>
              <div className="started__card-description">
                Create your free account with a quick
                verification process. It’s easy, we promise
              </div>
            </div>
            <div className="started__card started__card-two">
              <div className="started__card-img">
                <img src="landings/new_3/images/started/deposit-img.png" alt="" />
              </div>
              <div className="started__card-title">Make a deposit</div>
              <div className="started__card-description">
                Dip a toe or go all in. Usually it takes no
                more than 5 min to deposit with crypto
              </div>
            </div>
            <div className="started__card started__card-three">
              <div className="started__card-img">
                <img src="landings/new_3/images/started/start-img.png" alt="" />
              </div>
              <div className="started__card-title">Start trading</div>
              <div className="started__card-description">
                Trade spot or derivatives with up to
                100x leverage. Access over 150 pairs
              </div>
            </div>
          </div>
        </div>
      </section>
      )
}

export default Started;