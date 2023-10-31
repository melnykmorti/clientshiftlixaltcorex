import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listMyWithdraw } from "../../../Redux/Actions/withdrawActions";
import { listMyTransfer } from "../../../Redux/Actions/withdrawActions";
import { listMyDeposit } from "../../../Redux/Actions/withdrawActions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import WalletInfo from "./walletInfo";
const Transactions = ({ match }) => {
    const dispatch = useDispatch();
    const [listSorted, setSortedList] = useState([]);
    const withdrawList = useSelector((state) => state.withdrawListMy);
    const { loadingUserWithdraw, userWithdraw, errorUserWithdraw } =
        withdrawList;
    const { loadingUserTransfer, userTransfer, errorUserTransfer } =
        useSelector((state) => state.transferListMy);

    const depositList = useSelector((state) => state.depositListMy);
    const { loadingUserDeposit, userDeposit, errorUserDeposit } = depositList;
    useEffect(() => {
        dispatch(listMyWithdraw("all"));
        dispatch(listMyTransfer());
        dispatch(listMyDeposit());
    }, [dispatch, match]);
    useEffect(() => {
        if (
            !loadingUserDeposit &&
            !loadingUserTransfer &&
            !loadingUserWithdraw &&
            !tempArray
        ) {
            var tempArray = [...userWithdraw, ...userTransfer, ...userDeposit];
            tempArray = tempArray.sort((a, b) => b.date - a.date);
            setSortedList(tempArray);
        }
    }, [dispatch, userDeposit, userTransfer, userWithdraw]);
    console.log("userTransfer", userTransfer);
    console.log("userWithdraw", userWithdraw);
    console.log("userDeposit", depositList);
    console.log("listSorted", listSorted);
    return (
        <div className="other">
            <main
                className="main transaction-history other"
                style={{ backgroundColor: "#ffffff" }}
            >
                <div className="main__box">
                    <WalletInfo />
                    <section className="table-transaction">
                        <div className="table-transaction__container">
                            <div className="table-transaction__wrapper">
                                <div className="table-balance_links">
                                    <Link
                                        className="table-balance_link"
                                        to="/profile/wallet"
                                    >
                                        Coin Wallet
                                    </Link>
                                    <Link
                                        className="table-balance_link active"
                                        to="/profile/transactions"
                                    >
                                        Wallet History
                                    </Link>
                                    <Link
                                        className="table-balance_link"
                                        to="/profile/deposit"
                                    >
                                        Deposit
                                    </Link>
                                    <Link
                                        className="table-balance_link"
                                        to="/profile/withdraw"
                                    >
                                        Withdraw
                                    </Link>
                                    <Link
                                        className="table-balance_link"
                                        to="/profile/transfer"
                                    >
                                        Transfer
                                    </Link>
                                </div>
                                <div className="table-transaction__names">
                                    <div className="table-transaction__name table-transaction__name-type">
                                        Action
                                    </div>
                                    <div className="table-transaction__name table-transaction__name-amount">
                                        Amount
                                    </div>
                                    <div className="table-transaction__name table-transaction__name-time">
                                        Date / Time
                                    </div>
                                    <div className="table-transaction__name table-transaction__item-status">
                                        Status
                                    </div>
                                </div>
                                <div className="table-transaction__items">
                                    {listSorted
                                        ? listSorted.map((item) => (
                                              <div className="table-transaction__item">
                                                  <div className="table-transaction__item-type">
                                                      {item.type}
                                                  </div>
                                                  <div className="table-transaction__item-amount">
                                                      {item.amount}
                                                  </div>
                                                  <div className="table-transaction__item-time">
                                                      {new Date(item.date)
                                                          .toISOString()
                                                          .slice(0, 19)
                                                          .replace("T", " ")}
                                                  </div>
                                                  {item.status == 0 ? (
                                                      <div className="table-transaction__item-status table-transaction__item-pending">
                                                          <span>
                                                              In processing
                                                          </span>
                                                      </div>
                                                  ) : item.status == 1 ? (
                                                      <div class="table-transaction__item-status table-transaction__item-completed">
                                                          <span>Completed</span>
                                                      </div>
                                                  ) : item.status == 2 ? (
                                                      <div class="table-transaction__item-status table-transaction__item-canceled">
                                                          <span>Canceled</span>
                                                      </div>
                                                  ) : null}

                                                  
                                              </div>
                                          ))
                                        : null}
                                    {/* <div className="table-transaction__item">
                                    <div className="table-transaction__item-time">
                                        2023-08-30 17:18:25
                                    </div>
                                    <div className="table-transaction__item-type">
                                        Withdraw
                                    </div>
                                    <div className="table-transaction__item-amount">
                                        1
                                    </div>
                                    <div className="table-transaction__item-asset">
                                        BTC
                                    </div>
                                    <div className="table-transaction__item-status table-transaction__item-pending">
                                        <span>In processing</span>
                                    </div>
                                    <div
                                        className="table-transaction__item-id"
                                        style={{}}
                                    >
                                        fffffffffffffffffffffff
                                    </div>
                                </div>
                                <div className="table-transaction__item">
                                    <div className="table-transaction__item-time">
                                        2023-08-11 17:08:20
                                    </div>
                                    <div className="table-transaction__item-type">
                                        Bonus
                                    </div>
                                    <div className="table-transaction__item-amount">
                                        200
                                    </div>
                                    <div className="table-transaction__item-asset">
                                        BTC
                                    </div>
                                    <div className="table-transaction__item-status table-transaction__item-completed">
                                        <span>Completed</span>
                                    </div>
                                    <div
                                        className="table-transaction__item-id"
                                        style={{}}
                                    ></div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Transactions;
