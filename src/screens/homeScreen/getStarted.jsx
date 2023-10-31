import React from "react";

const GetStarted = () => {
	return (
		<div className="get-started">
        <div className="get-started__container">
          <h3 className="get-started__heading">Get started in minutes</h3>
          <div className="get-started__items">
            <div className="get-started__item">
              <div data-count="01" className="get-started__icon">
                <div className="get-started__icon-content">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 7.5C17 11.075 15.13 14 11.5 14C7.87 14 6 11.075 6 7.5C6 3.925 7.87 1 11.5 1C15.13 1 17 3.925 17 7.5Z" stroke="#0A0F38"    ></path>
                    <path d="M21 26H1C1 21.5429 4.44444 18 8.77778 18H13.2222C17.5556 18 21 21.5429 21 26Z" stroke="#0A0F38"    ></path>
                    <path d="M24 1V7" stroke="#0A0F38"    ></path>
                    <path d="M21 4H27" stroke="#0A0F38"    ></path>
                  </svg>
                </div>
              </div>
              <span className="get-started__label">Register</span>
              <p className="get-started__note">Create you trade account on bnax in a few simple click</p>
            </div>
            <div className="get-started__item">
              <div data-count="02" className="get-started__icon">
                <div className="get-started__icon-content">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.62 26.12C20.5236 26.12 26.12 20.5236 26.12 13.62C26.12 6.71644 20.5236 1.12 13.62 1.12C6.71644 1.12 1.12 6.71644 1.12 13.62C1.12 20.5236 6.71644 26.12 13.62 26.12Z" stroke="#0A0F38"    ></path>
                    <path d="M21.32 8.95996L12.32 18.96" stroke="#0A0F38"    ></path>
                    <path d="M6 14L12 19" stroke="#0A0F38"    ></path>
                  </svg>
                </div>
              </div>
              <span className="get-started__label">Verify</span>
              <p className="get-started__note">Verify your identify with one of our trusted verification parthers</p>
            </div>
            <div className="get-started__item">
              <div data-count="03" className="get-started__icon">
                <div className="get-started__icon-content">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 18V23.8333C25 24.4167 24.56 25 23.9 25H3" stroke="#0A0F38"    ></path>
                    <path d="M3 7H23.9C24.56 7 25 7.6 25 8.2V13" stroke="#0A0F38"    ></path>
                    <path d="M1 7V8.23077V23" stroke="#0A0F38"    ></path>
                    <path d="M3 2C1.9 2 1 3.125 1 4.5C1 5.875 1.9 7 3 7" stroke="#0A0F38"    ></path>
                    <path d="M1 9V5" stroke="#0A0F38"    ></path>
                    <path d="M22 7V3.25C22 2.5 21.5529 2 20.8824 2H3" stroke="#0A0F38"    ></path>
                    <path d="M1 23C1 24.1 1.9 25 3 25" stroke="#0A0F38"    ></path>
                    <path d="M19 18C17.9 18 17 16.875 17 15.5C17 14.125 17.9 13 19 13" stroke="#0A0F38"    ></path>
                    <path d="M19 18H25.8571C26.5429 18 27 17.5 27 16.75V14.25C27 13.5 26.5429 13 25.8571 13H19" stroke="#0A0F38"    ></path>
                  </svg>
                </div>
              </div>
              <span className="get-started__label">Deposit</span>
              <p className="get-started__note">Securely connect your bank account to deposit founds</p>
            </div>
            <div className="get-started__item">
              <div data-count="04" className="get-started__icon">
                <div className="get-started__icon-content">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2L1 6" stroke="#0A0F38"   ></path>
                    <path d="M6 10L1 6" stroke="#0A0F38"   ></path>
                    <path d="M1 6H19.1818C22.9318 6 26 9.15 26 13" stroke="#0A0F38"   ></path>
                    <path d="M22 26L27 22" stroke="#0A0F38"   ></path>
                    <path d="M22 17L27 21" stroke="#0A0F38"   ></path>
                    <path d="M27 22H8.81818C5.06818 22 2 18.85 2 15" stroke="#0A0F38"   ></path>
                  </svg>
                </div>
              </div>
              <span className="get-started__label">Trade</span>
              <p className="get-started__note">Buy, sell and swap digital assets 24/7</p>
            </div>
          </div>
          <a href="/signup" className="button button_style_primary button_size_large">Start earning</a>
        </div>
      </div>
	);
};
export default GetStarted;
