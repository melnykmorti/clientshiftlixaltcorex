import React from "react";
import Toast from "../../LoadingError/toast";

const LimitsTrading = (props) => {
    const { user, loadingUser, firstCurrency, secondCurrency, valueRangeSell,setPercentSell,triggerNewUserError } =
        props;
    return (
        <div className="content__container-item tabsBoxOne itemActiveNew" id="ConOne">
               
            <div className="order__buy">
                <div>
                    <div className="order__title-fbGht">
                        <span>Available</span>
                        <span id="buy_available">
                            {!loadingUser
                                ? user.walletsSpot.find(
                                      (item) => item.type == secondCurrency
                                  ).balance
                                : null}
                        </span>{" "}
                        {secondCurrency}
                    </div>
                    <label className="order_input-box">
                        <span className="order_amount-title">Price</span>
                        <span className="input__box-kfjdJh">
                            <input
                                className="order_amount"
                                type="number"
                                min={0}
                                defaultValue
                            />
                            <span className="order_suffix">USDT</span>
                        </span>
                    </label>
                    <label className="order_input-box">
                        <span className="order_amount-title">Size</span>
                        <span className="input__box-kfjdJh">
                            <input
                                className="order_amount"
                                type="number"
                                min={0}
                                defaultValue
                            />
                            <span className="order_suffix">USDT</span>
                        </span>
                    </label>
                    <div className="order__slider">
                        <div className="order__slider-container">
                            <div className="order__slider-wrapper">
                                <div className="order__slider-value order__slider-buy-value-limit">
                                    0%
                                </div>
                                <input
                                    className="order__slider-input order__slider-buy-limit"
                                    type="range"
                                    max={100}
                                />
                            </div>
                        </div>
                    </div>
                    <label className="order_input-box">
                        <span className="order_amount-title">Amount</span>
                        <span className="input__box-kfjdJh">
                            <input
                                className="order_amount"
                                type="number"
                                min={0}
                                defaultValue
                            />
                            <span className="order_suffix">USDT</span>
                        </span>
                    </label>
                </div>
                <div
                    className="order_btn-fbGht order_btn-fbGht-buy"
                    onClick={triggerNewUserError}
                >
                    <div>Buy {firstCurrency}</div>
                </div>
            </div>
            <div className="order__sell">
                <div>
                    <div className="order__title-fbGht">
                        <span>Available</span>
                        <span id="sell_available">
                            {!loadingUser
                                ? user.walletsSpot.find(
                                      (item) => item.type == firstCurrency
                                  ).balance
                                : null}
                        </span>{" "}
                        {firstCurrency}
                    </div>
                    <label className="order_input-box">
                        <span className="order_amount-title">Amount</span>
                        <span className="input__box-kfjdJh">
                            <input
                                className="order_amount"
                                type="number"
                                min={0}
                                defaultValue
                            />
                            <span className="order_suffix">
                                {firstCurrency}
                            </span>
                        </span>
                    </label>
                    <label className="order_input-box">
                        <span className="order_amount-title">Price</span>
                        <span className="input__box-kfjdJh">
                            <input
                                className="order_amount"
                                type="number"
                                min={0}
                                defaultValue
                            />
                            <span className="order_suffix">USDT</span>
                        </span>
                    </label>
                    <div className="order__slider">
                        <div className="order__slider-container">
                            <div className="order__slider-wrapper">
                                <div className="order__slider-value order__slider-sell-value-limit">
                                    0%
                                </div>
                                <input
                                    className="order__slider-input order__slider-sell-limit"
                                    type="range"
                                    max={100}
                                    min={0}
                                    value={valueRangeSell}
                                    onChange={(e) =>
                                        setPercentSell(e, e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <label className="order_input-box">
                        <span className="order_amount-title">Total</span>
                        <span className="input__box-kfjdJh">
                            <input
                                className="order_amount"
                                type="number"
                                min={0}
                                defaultValue
                            />
                            <span className="order_suffix">USDT</span>
                        </span>
                    </label>
                </div>
                <div
                    className="order_btn-fbGht order_btn-fbGht-sell"
                    onClick={triggerNewUserError}
                >
                    <div>Sell {firstCurrency}</div>
                </div>
            </div>
        </div>
    );
};

export default LimitsTrading;
