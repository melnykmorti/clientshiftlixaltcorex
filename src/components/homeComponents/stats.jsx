import React from "react";

const Stats=()=>{
        return (<section className="stats">
        <div className="stats__container">
          <div className="stats__items">
            <div className="stats__item">
              <div className="stats__item-value">$34 018 477</div>
              <div className="stats__item-text">
                Trading volume per 7 days
              </div>
            </div>
            <div className="stats__item">
              <div className="stats__item-value">$3 514 545</div>
              <div className="stats__item-text">
                Trading volume per day
              </div>
            </div>
            <div className="stats__item">
              <div className="stats__item-value">130 188</div>
              <div className="stats__item-text">
                Active traders
              </div>
            </div>
          </div>
        </div>
      </section>
      )
}

export default Stats;