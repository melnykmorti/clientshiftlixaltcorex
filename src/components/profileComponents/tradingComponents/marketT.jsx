import React from "react";

const MarketTrading = (props) => {
    const {
        firstCurrency,
        secondCurrency,
        valueSell,
        valueRangeSell,
        user,
        loadingUser,
        valueRangeBuy,
        setPercentBuy,
        setValueSell,
        setPercentSell,
        valueBuy,
        setValueBuy,
        submitHandler,
        currencyNowPrice
    } = props;
    return (
        <div
            className="content__container-item tabsBoxOne itemActiveNew"
            id="ConTwo"
        >
            <div className="order__buy">
                <div>
                    <div className="order__title-fbGht">
                        <span>Available</span>
                        <span id="buy_available2">
                            {!loadingUser
                                ? user.walletsSpot.find(
                                      (item) => item.type == secondCurrency
                                  ).balance
                                : null}
                        </span>{" "}
                        {secondCurrency}
                    </div>
                    <div className="order__market-price">Market Price</div>
                    <label className="order_input-box">
                        <span className="order_amount-title">Amount</span>
                        <span className="input__box-kfjdJh">
                            <input
                                className="order_amount"
                                type="number"
                                min={0}
                                id="buy_amount_input"
                                value={valueBuy}
                                onChange={(e)=>setValueBuy(e.target.value)}
                            />
                            <span className="order_suffix">USDT</span>
                        </span>
                    </label>
                    <div className="order__slider">
                        <div className="order__slider-container">
                            <div className="order__slider-wrapper">
                                <div className="order__slider-value order__slider-buy-value-market">
                                    0%
                                </div>
                                <input
                                    className="order__slider-input order__slider-buy-market"
                                    type="range"
                                    min={0}
                                    max={100}
                                    defaultValue={valueRangeBuy}
                                    onMouseUp={(e) =>
                                        setPercentBuy(e, e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order__title-fbGht">
                    <span>Get per purchase:</span>
                    <span id="buy_crypto_available">0.0000000</span>
                    {firstCurrency}
                </div>
                <div
                    className="order_btn-fbGht order_btn-fbGht-buy"
                    id="btn_buy"
                    onClick={(e)=>submitHandler(e,"Buy",currencyNowPrice,valueBuy,secondCurrency)}
                >
                    <div>Buy {firstCurrency}</div>
                </div>
            </div>
            <div className="order__sell">
                <div>
                    <div className="order__title-fbGht">
                        <span>Available</span>
                        <span id="sell_available2">
                            {!loadingUser
                                ? user.walletsSpot.find(
                                      (item) => item.type == firstCurrency
                                  ).balance
                                : null}
                        </span>
                        {firstCurrency}
                    </div>
                    <div className="order__market-price">Market Price</div>
                    <label className="order_input-box">
                        <span className="order_amount-title">Amount</span>
                        <span className="input__box-kfjdJh">
                            <input
                                className="order_amount"
                                type="number"
                                id="sell_amount_input"
                                value={valueSell}
                                onChange={(e) => setValueSell(e.target.value)}
                            />
                            <span className="order_suffix">
                                {firstCurrency}
                            </span>
                        </span>
                    </label>
                    <div className="order__slider">
                        <div className="order__slider-container">
                            <div className="order__slider-wrapper">
                                <div className="order__slider-value order__slider-sell-value-market">
                                    {valueRangeSell}%
                                </div>
                                <input
                                    className="order__slider-input order__slider-sell-market"
                                    type="range"
                                    max={100}
                                    min={0}
                                    // value={valueSell}
                                    defaultValue={valueRangeSell}
                                    onMouseUp={(e) =>
                                        setPercentSell(e, e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order__title-fbGht">
                    <span>Get per sale:</span>
                    <span id="sell_crypto_available">0.0000000</span>{" "}
                    {secondCurrency}
                </div>
                <div
                    className="order_btn-fbGht order_btn-fbGht-sell"
                    id="btn_sell"
                    onClick={(e)=>submitHandler(e,"Sell",currencyNowPrice,valueSell,firstCurrency)}
                >
                    <div>Sell {firstCurrency}</div>
                </div>
            </div>
        </div>
    );
};

export default MarketTrading;
