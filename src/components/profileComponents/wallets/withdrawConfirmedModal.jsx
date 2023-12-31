import React from "react";
import { createdAtConverter } from "../../utils";

const WithdrawConfirmedModal=(props)=>{
        const {confirmedModalOpened,setConfirmedModalOpened,
                amount,
                adress,currency}=props;


        return (<div className={`withdrawal-popup ${confirmedModalOpened?"withdrawal-successful-active":""} `} id="withdraw_true_confirmed_modal">
        <div className="withdrawal-popup__block">
          <div className="withdrawal-popup__top">
            <div className="withdrawal-popup__icon">
              <svg width={86} height={82} viewBox="0 0 86 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M65.3015 12.1441C66.4663 10.7609 66.2963 8.68327 64.8246 7.63243C58.2159 2.91368 50.3313 0.248715 42.1651 0.0165582C32.9044 -0.246714 23.8275 2.63418 16.4136 8.18977C8.99977 13.7454 3.686 21.6481 1.33829 30.6102C-1.00942 39.5722 -0.252669 49.0652 3.48522 57.5421C7.22312 66.019 13.7218 72.9801 21.9222 77.291C30.1226 81.6019 39.5412 83.0084 48.6433 81.2813C57.7453 79.5542 65.9941 74.7953 72.0455 67.7802C77.3816 61.5942 80.7315 53.9754 81.7046 45.9135C81.9212 44.1182 80.502 42.5914 78.6951 42.5186C76.8882 42.4458 75.3804 43.8556 75.1365 45.6475C74.2405 52.2294 71.456 58.4377 67.0868 63.5028C62.002 69.3974 55.0707 73.3962 47.4225 74.8474C39.7742 76.2987 31.8599 75.1168 24.9693 71.4945C18.0787 67.8722 12.6181 62.0229 9.47719 54.9C6.33632 47.777 5.70044 39.8003 7.67317 32.2696C9.6459 24.739 14.1109 18.0985 20.3406 13.4303C26.5704 8.76208 34.1975 6.34133 41.979 6.56255C48.6655 6.75264 55.1273 8.88378 60.5913 12.6613C62.0788 13.6897 64.1366 13.5272 65.3015 12.1441Z" fill="#4DB742" />
                <path d="M81.9998 12.7979L41.9181 53.0869L23.6992 34.7737" stroke="#4DB742" strokeWidth="6.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="withdrawal-popup__title">
              Withdrawal Successful
            </div>
          </div>
          <div className="withdrawal-popup__bottom">
            <div className="withdrawal-popup__table">
              <div className="withdrawal-popup__table-key">
                Status
              </div>
              <div className="withdrawal-popup__table-value completed">
                Completed
              </div>
            </div>
            <div className="withdrawal-popup__table">
              <div className="withdrawal-popup__table-key">
                Date
              </div>
              <div className="withdrawal-popup__table-value" id="t_withdraw_confirmed_date">{createdAtConverter(Date.now())}</div>
            </div>
            <div className="withdrawal-popup__table">
              <div className="withdrawal-popup__table-key">
                Amount
              </div>
              <div className="withdrawal-popup__table-value" id="t_withdraw_confirmed_amount">{amount} {currency}</div>
            </div>
            <div className="withdrawal-popup__table with_com_block" style={{display: 'none'}}>
              <div className="withdrawal-popup__table-key">
                Fee
              </div>
              <div className="withdrawal-popup__table-value">
                1 USDT
              </div>
            </div>
            <div className="withdrawal-popup__table">
              <div className="withdrawal-popup__table-key">
                To
              </div>
              <div className="withdrawal-popup__table-value" id="t_withdraw_confirmed_address">аааааааааааааааа</div>
            </div>
            <div className="withdrawal-popup__close" id="close_w_confirm_modal" onClick={()=>setConfirmedModalOpened(false)}>
              Close
            </div>
          </div>
        </div>
      </div>
      )
}

export default WithdrawConfirmedModal;