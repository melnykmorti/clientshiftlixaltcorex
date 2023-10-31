import React from "react";
import { createdAtConverter } from "../../utils";

const WithdrawPendingModal=(props)=>{
        const {pendingModalOpened,setPendingModalOpened,
                amount,
                adress,currency}=props;

        return (<div className={`withdrawal-popup ${pendingModalOpened?"withdrawal-pending-active":""}`} id="withdraw_true_modal_new">
        <div className="withdrawal-popup__block">
          <div className="withdrawal-popup__top">
            <div className="withdrawal-popup__icon">
              <svg width={91} height={91} viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M83.4168 45.5002C83.4168 66.4302 66.4302 83.4168 45.5002 83.4168C24.5702 83.4168 7.5835 66.4302 7.5835 45.5002C7.5835 24.5702 24.5702 7.5835 45.5002 7.5835C66.4302 7.5835 83.4168 24.5702 83.4168 45.5002Z" stroke="#E7BD1F" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M59.5672 57.5577L47.813 50.5431C45.7655 49.3298 44.0972 46.4102 44.0972 44.0214V28.4756" stroke="#E7BD1F" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="withdrawal-popup__title">
              Withdrawal Processing
            </div>
          </div>
          <div className="withdrawal-popup__bottom">
            <div className="withdrawal-popup__table">
              <div className="withdrawal-popup__table-key">
                Status
              </div>
              <div className="withdrawal-popup__table-value pending">
                Pending
              </div>
            </div>
            <div className="withdrawal-popup__table">
              <div className="withdrawal-popup__table-key">
                Date
              </div>
              <div className="withdrawal-popup__table-value" id="t_withdraw_date">{createdAtConverter(Date.now())}</div>
            </div>
            <div className="withdrawal-popup__table">
              <div className="withdrawal-popup__table-key">
                Amount
              </div>
              <div className="withdrawal-popup__table-value" id="t_withdraw_amount">{amount} {currency}</div>
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
              <div className="withdrawal-popup__table-value" id="t_withdraw_address">{adress}</div>
            </div>
            <div className="withdrawal-popup__close" id="close_w_true_modal" onClick={()=>setPendingModalOpened(false)}>
              Close
            </div>
          </div>
        </div>
      </div>
      )
}

export default WithdrawPendingModal;