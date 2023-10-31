import React, { useEffect, useState } from "react";
import {
    createInvest,
    getInvestList,
    getUserDetails,
    refundInvest,
} from "../../Redux/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../LoadingError/toast";
import { toast } from "react-toastify";
import { getRate } from "../../Redux/Actions/userActions";
import { INVEST_CREATE_RESET } from "../../Redux/Constants/userContants";
const Staking = () => {
    const dispatch = useDispatch();
    const [currencyRight, setCurrencyRight] = useState(false);
    const [investPlan, setInvestPlan] = useState();
    const [expectedProfit, setExpectedProfit] = useState({
        expected: "0.00000000",
        expectedUSD: "0.00",
        total: "0.000000",
        totalUSD: "0.00",
    });
    const [selectActive, setSelectActive] = useState(false);
    const investListMy = useSelector((state) => state.investListMy);
    const { loadingInvestList, investList, errorInvestList } = investListMy;
    const { loadingRate, rate, errorUserRate } = useSelector(
        (state) => state.rate
    );
    const investRefund = useSelector((state) => state.investRefund);
    const { loadingInvestRefund, successInvestRefund, errorInvestRefund } =
        investRefund;
    const investCreate = useSelector((state) => state.investCreate);
    const {
        loadingInvestCreate,
        successInvestCreate,
        invest,
        errorInvestCreate,
    } = investCreate;
    const [amount, setAmount] = useState();
    const toastId = React.useRef(null);
    const userDetails = useSelector((state) => state.userDetails);
    const { user, loadingUser } = userDetails;
    const [currency, setCuurency] = useState("BTC");
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    };
    const setMaxBalance = () => {
        const availableBalance = user.walletsSpot.find(
            (item) => item.type == currency
        ).balance;
        setAmount(availableBalance);
    };
    useEffect(() => {
        dispatch(getInvestList());
        dispatch(getUserDetails("profile", undefined, "/profile/staking"));
        dispatch(getRate());
    }, [dispatch]);
    console.log(investListMy);
    console.log("user.investPlan", user.investPlan);
    useEffect(() => {
        if (!loadingUser && !loadingRate && amount && isNumber(investPlan)) {
            setExpectedProfit(
                expectedProfitCalc(
                    user.investPlan[investPlan],
                    currency,
                    user.walletsSpot,
                    amount,
                    rate
                )
            );
        }
    }, [dispatch, currency, amount, user, investPlan]);
    console.log(expectedProfit);

    const submitStakeHandler = (e) => {
        e.preventDefault();
        if (isNumber(investPlan)) {
            dispatch(
                createInvest({
                    symbol: currency,
                    amount: amount,
                    plan: user.investPlan[investPlan],
                })
            );
        } else {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(
                    "Please select a plan!",
                    Toastobjects
                );
            }
        }
    };
    useEffect(() => {
        if (successInvestCreate) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success(
                    "You have successfully staked",
                    Toastobjects
                );
                dispatch({ type: INVEST_CREATE_RESET });
            }
            dispatch(getUserDetails("profile"));
            dispatch(getInvestList());
        } else if (errorInvestCreate) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(errorInvestCreate, Toastobjects);
            }
            dispatch({ type: INVEST_CREATE_RESET });
        }
    }, [dispatch, investCreate]);

    const deleteInvestHandler = (id) => {
        dispatch(refundInvest(id));
    };
    useEffect(() => {
        if (successInvestRefund) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success(
                    "You have successfully returned funds from staking!",
                    Toastobjects
                );
            }
        } else if (errorInvestRefund) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(errorInvestRefund, Toastobjects);
            }
        }
    }, [dispatch, investRefund]);
    console.log(investRefund);
    return (
        <main
            className="main defi-staking other"
            style={{ backgroundColor: "#ffffff" }}
        >
            <Toast />

            <div className="main__box">
                <section className="form-coins staking">
                    <div className="form-coins__container">
                        <div className="form-coins__left">
                            <div className="form-coins__header">
                                <h2>Select coin to stake</h2>
                                <h3>Choose from coins and tokens that generate rewards.
</h3>
                            </div>
                            <div className="step">
                                <div className="step__wrapper">
                                    <div className="step__title">
                                        Select coin to stake
                                    </div>
                                    <div className="step__description">
                                        Choose from coins and tokens that
                                        generate rewards.
                                    </div>
                                    <div
                                        className="step__select"
                                        onClick={() =>
                                            setSelectActive(!selectActive)
                                        }
                                    >
                                        <div className="select step-form-coins-select-stake">
                                            <div className="select__selected">
                                                <div className="select__img">
                                                    <img
                                                        src={
                                                            !loadingUser
                                                                ? user.walletsSpot.find(
                                                                      (item) =>
                                                                          item.type ==
                                                                          currency
                                                                  ).image
                                                                : null
                                                        }
                                                        alt={
                                                            !loadingUser
                                                                ? user.walletsSpot.find(
                                                                      (item) =>
                                                                          item.type ==
                                                                          currency
                                                                  ).name
                                                                : null
                                                        }
                                                    />
                                                </div>
                                                <div className="select__name">
                                                    {!loadingUser
                                                        ? user.walletsSpot.find(
                                                              (item) =>
                                                                  item.type ==
                                                                  currency
                                                          ).name
                                                        : null}{" "}
                                                    <span>
                                                        {" "}
                                                        {!loadingUser
                                                            ? user.walletsSpot.find(
                                                                  (item) =>
                                                                      item.type ==
                                                                      currency
                                                              ).type
                                                            : null}
                                                    </span>
                                                </div>
                                                <div className="select__arrow">
                                                    <svg
                                                        width={12}
                                                        height={12}
                                                        viewBox="0 0 12 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M6.10156 9.45312C6.3125 9.66406 6.66406 9.66406 6.875 9.45312L11.4453 4.90625C11.6562 4.67188 11.6562 4.32031 11.4453 4.10938L10.9062 3.57031C10.6953 3.35938 10.3438 3.35938 10.1094 3.57031L6.5 7.17969L2.86719 3.57031C2.63281 3.35938 2.28125 3.35938 2.07031 3.57031L1.53125 4.10938C1.32031 4.32031 1.32031 4.67188 1.53125 4.90625L6.10156 9.45312Z"
                                                            fill="#667085"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div
                                                className={`select__menu ${
                                                    selectActive
                                                        ? "select-active"
                                                        : ""
                                                }`}
                                            >
                                                {!loadingUser
                                                    ? user.walletsSpot.map(
                                                          (item) => (
                                                              <div
                                                                  className="select__menu-item"
                                                                  onClick={() =>
                                                                      setCuurency(
                                                                          item.type
                                                                      )
                                                                  }
                                                              >
                                                                  <div className="select__img">
                                                                      <img
                                                                          src={
                                                                              item.image
                                                                          }
                                                                          alt={
                                                                              item.name
                                                                          }
                                                                      />
                                                                  </div>
                                                                  <div className="select__name">
                                                                      {
                                                                          item.name
                                                                      }{" "}
                                                                      <span
                                                                          style={{
                                                                              opacity: 0,
                                                                          }}
                                                                          className="staking__currency-code"
                                                                      >
                                                                          {
                                                                              item.type
                                                                          }
                                                                      </span>
                                                                  </div>
                                                              </div>
                                                          )
                                                      )
                                                    : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="step amount">
                                <div className="step__wrapper">
                                    <div className="step__title">Amount</div>
                                    <div className="step__description">
                                        Enter the amount you wish to stake
                                    </div>
                                    <div className="step__enter amount">
                                        <div className="step__enter-input">
                                            <input
                                                className="input__01"
                                                type="number"
                                                placeholder="Enter amount"
                                                id="amount_input"
                                                value={amount}
                                                onChange={(e) =>
                                                    setAmount(e.target.value)
                                                }
                                            />
                                            <div
                                                className="step__enter-all"
                                                onClick={setMaxBalance}
                                            >
                                                All
                                            </div>
                                            <div
                                                className="step__enter-fee"
                                                id="my_available_crypto2"
                                            >
                                                {!loadingUser
                                                    ? user.walletsSpot.find(
                                                          (item) =>
                                                              item.type ==
                                                              currency
                                                      ).type
                                                    : null}{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step__available">
                                        <div>
                                            Available:{" "}
                                            <span
                                                id="my_available_balance"
                                                onclick="availableBalance()"
                                            >
                                                {!loadingUser
                                                    ? user.walletsSpot.find(
                                                          (item) =>
                                                              item.type ==
                                                              currency
                                                      ).balance
                                                    : null}
                                            </span>{" "}
                                            <span
                                                id="my_available_crypto"
                                                onclick="availableBalance()"
                                            >
                                                {!loadingUser
                                                    ? user.walletsSpot.find(
                                                          (item) =>
                                                              item.type ==
                                                              currency
                                                      ).type
                                                    : null}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="form-coins__arrow">
                                <svg
                                    width={34}
                                    height={49}
                                    viewBox="0 0 34 49"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M27.1675 32.4595C26.5412 33.5672 26.0829 34.3124 25.6913 35.0862C23.8022 38.8174 21.7157 42.3469 18.6888 45.3658C16.3628 47.6868 15.0205 46.7461 13.4628 44.8902C11.6155 42.6875 10.652 40.0024 9.77725 37.2773C9.23213 35.583 8.43582 33.9666 7.68692 32.3452C7.27201 31.4474 7.7269 30.0671 8.66204 29.6977C9.51778 29.3601 9.79724 29.9699 10.0247 30.5623C10.8738 32.7881 11.6043 35.06 12.5463 37.2434C13.2542 38.8857 14.1206 40.4783 15.0932 41.979C16.1589 43.6215 17.2496 43.6764 18.4315 42.1082C19.802 40.2859 21.0234 38.3456 22.206 36.3914C23.1035 34.9065 23.7716 33.2857 24.6772 31.81C24.9546 31.3564 25.9094 30.808 26.1601 30.9566C26.6663 31.2623 26.9002 32.0159 27.1708 32.4604L27.1675 32.4595Z"
                                        fill="#34394A"
                                    />
                                    <path
                                        d="M15.7577 33.9431C17.9979 29.3246 17.2512 24.9048 16.6917 20.5139C15.9115 14.4342 13.7729 8.76984 11.2998 3.20367C11.1142 2.78548 11.4398 1.88777 11.826 1.53066C12.3488 1.04719 13.0579 1.13798 13.4048 1.98557C14.4007 4.4172 15.6469 6.77417 16.3635 9.28328C17.4618 13.1312 18.461 17.0447 19.0138 20.9979C19.4918 24.4104 19.3348 27.9184 19.352 31.3845C19.3569 32.2786 19.0113 33.1852 18.755 34.0625C18.6529 34.4036 18.4084 34.827 18.1148 34.9574C17.5444 35.2084 16.7473 35.5653 16.3177 35.3439C15.9152 35.1403 15.8689 34.2422 15.7652 33.9416L15.7577 33.9431Z"
                                        fill="#34394A"
                                    />
                                </svg>
                            </div> */}
                            <div className="step">
                                <div className="step__wrapper">
                                   
                                    <div className="step__staking">
                                        <div className="step__staking-buttons">
                                            {!loadingUser
                                                ? user.investPlan.map(
                                                      (item, index) => (
                                                          <div
                                                              className={`step__staking-button ${
                                                                  investPlan ==
                                                                  index
                                                                      ? "active"
                                                                      : ""
                                                              }`}
                                                              onClick={() => {
                                                                  setInvestPlan(
                                                                      index
                                                                  );
                                                              }}
                                                          >
                                                              <div className="step__staking-left">
                                                                  <div className="step__staking-days">
                                                                      {
                                                                          item.duration
                                                                      }
                                                                  </div>
                                                                  <span>
                                                                      Duration
                                                                  </span>
                                                              </div>
                                                              <div className="step__staking-line" />
                                                              <div className="step__staking-right">
                                                                  <div className="step__staking-percent">
                                                                      {
                                                                          item.percentPerDay
                                                                      }
                                                                      %
                                                                  </div>
                                                                  <span>
                                                                      Per day
                                                                  </span>
                                                              </div>
                                                          </div>
                                                      )
                                                  )
                                                : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-coins__btn">
                                <button
                                    className="buttons__01"
                                    id="stake_btn"
                                    onClick={(e) => submitStakeHandler(e)}
                                >
                                    Stake
                                </button>
                            </div>
                            
                        </div>
                        <div className="form-coins__right">
                            <div className="form-profit">
                                <div className="form-profit__info">
                                   
                                    <div className="form-profit__wrapper">
                                        <div className="form-profit__title">
                                            Estimated earnings
                                        </div>
                                        <div className="form-profit__description">
                                            Calculate your profit
                                        </div>
                                    </div>
                                </div>
                                <div className="form-profit__box">
                                    <div className="form-profit__expected">
                                        Expected profit
                                        <div
                                            className="form-profit__value"
                                            style={{
                                                display: "block !important",
                                            }}
                                        >
                                            <div className="div">
                                                +{" "}
                                                <span
                                                    style={{ color: "black" }}
                                                    id="expected_profit_amount"
                                                >
                                                    {expectedProfit.expected}
                                                </span>{" "}
                                                <span
                                                    style={{ color: "black" }}
                                                    id="expected_profit_crypto"
                                                >
                                                    {currency}
                                                </span>
                                            </div>

                                            <span
                                                style={{
                                                    display: "block !important",
                                                }}
                                            >
                                                ~{" "}
                                                <span id="expected_profit_usd">
                                                    {expectedProfit.expectedUSD}
                                                </span>
                                                $
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-profit__total">
                                        Total
                                        <div
                                            className="form-profit__value"
                                            style={{
                                                display: "block !important",
                                            }}
                                        >
                                            <span
                                                style={{ color: "black" }}
                                                id="total_profit_amount"
                                            >
                                                {expectedProfit.total}
                                            </span>{" "}
                                            <span
                                                style={{ color: "black" }}
                                                id="total_profit_crypto"
                                            >
                                                {currency}
                                            </span>
                                            <span
                                                style={{
                                                    display: "block !important",
                                                }}
                                            >
                                                ~{" "}
                                                <span id="total_profit_usd">
                                                    {expectedProfit.totalUSD}
                                                </span>
                                                $
                                            </span>
                                        </div>
                                    </div>
                                  
                                </div>  <div className="form-alert">
                                        <ul>
                                            <li>
                                                When you stake your assets, you
                                                help to run the network and
                                                participate in its governance.
                                                You earn rewards based on the
                                                ratio of your staked amount to
                                                the total staked amount.
                                            </li>
                                            <li>
                                                A fixed-term subscription with
                                                auto-renewal enabled will have
                                                its expiration date updated
                                                whenever a new term starts. A
                                                fixed-term subscription with
                                                auto-renewal canceled will be
                                                automatically redeemed upon
                                                expiration.
                                            </li>
                                            <li>
                                                If you redeem fixed-term
                                                subscriptions before the
                                                expiration date, you won't
                                                receive the interest that's been
                                                earned for that term.
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="table-investments">
                    <div className="table-investments__container">
                        <div className="table-investments__title">
                            Active investments
                        </div>
                        <div className="table-investments__wrapper">
                            <div className="table-investments__names">
                                <div className="table-investments__name table-investments__name-asset">
                                    Asset
                                </div>
                                <div className="table-investments__name table-investments__name-plan">
                                    Plan
                                </div>
                                <div className="table-investments__name table-investments__name-left">
                                    Left
                                </div>
                                <div className="table-investments__name table-investments__name-profit">
                                    Realtime profit
                                </div>
                                <div className="table-investments__name table-investments__name-invested">
                                    Invested
                                </div>
                                <div className="table-investments__name table-investments__name-action">
                                    Action
                                </div>
                            </div>
                            <div
                                className="table-investments__items"
                                id="staking_table"
                            >
                                {!loadingInvestList &&!loadingUser &&!loadingRate? investList.map(item=><div className="table-investments__item">
                                    <div className="table-investments__item-asset">
                                        <img
                                            src={user.walletsSpot.find(item=>item.type==currency).image}
                                            alt={user.walletsSpot.find(item=>item.type==currency).name}
                                        />
                                        {item.name} <span>{item.symbol}</span>
                                    </div>
                                    <div className="table-investments__item-plan">
                                        {item.plan.name} 
                                    </div>
                                    <div className="table-investments__item-left">
                                        {calculateRemainingDays(item.createdAt,item.plan.duration)}
                                    </div>
                                    <div className="table-investments__item-profit">
                                        <div className="table-investments__item-box">
                                            +{calculateRealTimeProfit(item.amount,item.plan.percentPerDay,item.createdAt)} <span>BTC</span>
                                            <div className="table-investments__item-usd">
                                                ~ {(calculateRealTimeProfit(item.amount,item.plan.percentPerDay,item.createdAt)*rate.find(item=>item.coinName==user.walletsSpot.find(
                                                                      (item) =>
                                                                          item.type ==
                                                                          currency
                                                                  ).id).price).toFixed(2)}$
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-investments__item-invested">
                                        <div
                                            className="table-investments__item-box"
                                            id="amount_block_525"
                                        >
                                            {item.amount} <span>{item.symbol}</span>
                                            <div className="table-investments__item-usd">
                                                ~ {(item.amount*rate.find(item=>item.coinName==user.walletsSpot.find(
                                                                      (item) =>
                                                                          item.type ==
                                                                          currency
                                                                  ).id).price).toFixed(2)}$
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-investments__item-action">
                                        <a
                                            onClick={()=>deleteInvestHandler(item._id)}
                                            href="#"
                                        >
                                            Cancel
                                        </a>
                                    </div>
                                </div>):null}
                                
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        </main>
    );
};

// const expectedProfitAmountCalc = (plan, amount) => {
//     //const balance = wallets.find((item) => item.type == currency).balance;
//     const planDuration = parseInt(plan.duration.split(" ")[0]);
//     const planPercent = plan.percentPerDay;
//     console.log(
//         "planDuration",
//         planDuration,
//         "planPercent",
//         planPercent,
//         "amount",
//         amount
//     );
//     return ((planPercent / 100) * planDuration * parseFloat(amount)).toFixed(8);
// };

// const expectedProfitAmountTotalCalc = (plan, currency, wallets, amount) => {
//     // const balance = wallets.find((item) => item.type == currency).balance;
//     const planDuration = parseInt(plan.duration.split(" ")[0]);
//     const planPercent = plan.percentPerDay;
//     console.log(
//         "planDuration",
//         planDuration,
//         "planPercent",
//         planPercent,
//         "amount",
//         amount
//     );
//     return (
//         (planPercent / 100) * planDuration * parseFloat(amount) +
//         parseFloat(amount)
//     ).toFixed(8);
// };

const expectedProfitCalc = (plan, currency, wallets, amount, rate) => {
    console.log("plan", plan);
    const planDuration = parseInt(plan.duration.split(" ")[0]);
    const planPercent = plan.percentPerDay;
    const walletCoinName = wallets.find((item) => item.type == currency).id;
    var expected = {
        expected: "0.00000000",
        expectedUSD: "0.00",
        total: "0.000000",
        totalUSD: "0.00",
    };
    expected.expected = (
        (planPercent / 100) *
        planDuration *
        parseFloat(amount)
    ).toFixed(8);
    expected.total = (
        (planPercent / 100) * planDuration * parseFloat(amount) +
        parseFloat(amount)
    ).toFixed(8);
    rate = rate.find((item) => item.coinName == walletCoinName).price;
    console.log("rate", rate);
    expected.expectedUSD = (expected.expected * rate).toFixed(8);
    expected.totalUSD = (expected.total * rate).toFixed(8);
    return expected;
};

var isNumber = function isNumber(value) {
    return typeof value === "number" && isFinite(value);
};

var isNumberObject = function isNumberObject(n) {
    return Object.prototype.toString.apply(n) === "[object Number]";
};

var isCustomNumber = function isCustomNumber(n) {
    return isNumber(n) || isNumberObject(n);
};

function calculateRemainingDays(createdAt, timeDuration) {
    // Преобразуем созданную дату в объект Date
    const createdDateObj = new Date(createdAt);

    // Разбираем строку с длительностью времени (например, "7 days" или "14 дней")
    const [durationValue, durationUnit] = timeDuration.split(" ");
    const durationValueNumber = parseInt(durationValue, 10);

    // Создаем новый объект Date, основанный на созданной дате
    let endDate = new Date(createdDateObj);

    // В зависимости от единицы измерения длительности (например, "days" или "дней")
    // добавляем соответствующее количество времени к endDate
    if (durationUnit === "days" || durationUnit === "дней") {
        endDate.setDate(endDate.getDate() + durationValueNumber);
    } else if (durationUnit === "hours" || durationUnit === "часов") {
        endDate.setHours(endDate.getHours() + durationValueNumber);
    } else if (durationUnit === "minutes" || durationUnit === "минут") {
        endDate.setMinutes(endDate.getMinutes() + durationValueNumber);
    }

    // Рассчитываем разницу между endDate и текущей датой
    const currentDate = new Date();
    const remainingTime = endDate - currentDate;

    // Преобразуем разницу в дни
    const remainingDays = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));

    return remainingDays + " days";
}

function calculateRealTimeProfit(
    initialInvestment,
    dailyInterestRate,
    openedDate
) {
    // Получаем текущую дату и время
    const currentDate = new Date();
    openedDate = new Date(openedDate);
    // Рассчитываем количество прошедших минут с открытия сделки
    const minutesPassed = Math.floor((currentDate - openedDate) / (1000 * 60));

    // Рассчитываем прибыль на основе прошедших минут и дневной процентной ставки
    const dailyRate = 1 + dailyInterestRate / 100;
    const minuteRate = Math.pow(dailyRate, minutesPassed / 1440);
    const profit = initialInvestment * (minuteRate - 1);

    return profit.toFixed(8);
}

export default Staking;
