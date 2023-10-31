import React,{useState} from "react";

const marketTypes=["Market","Limit"]


const TriggerOrderTrading = (props) => {
    const {
        user,
        loadingUser,
        firstCurrency,
        secondCurrency,
        valueRangeSell,
        setPercentSell,
        triggerNewUserError,
    } = props;

    const [selectLeftOpened,setSelectLeftOpened]=useState(false);
    const [selectRightOpened,setSelectRightOpened]=useState(false);
    const [selectLeft,setSelectLeft]=useState( marketTypes[0]);
    const [selectRight,setSelectRight]=useState( marketTypes[0]);

    const setSelectLeftHandler=(e,item)=>{
        e.preventDefault();
        setSelectLeft(item);
        setSelectLeftOpened(false);
    }
    const setSelectRightHandler=(e,item)=>{
        e.preventDefault();
        setSelectRight(item);
        setSelectRightOpened(false);
    }
    return (
        <div
            className="content__container-item tabsBoxOne itemActiveNew"
            id="ConThree"
        >
            <div className="order__buy">
                <div>
                    <div className="order__title-fbGht">
                        <span>Available</span>
                        <span id="buy_available3">{!loadingUser
                                ? user.walletsSpot.find(
                                      (item) => item.type == secondCurrency
                                  ).balance
                                : null}</span> {secondCurrency}
                    </div>
                    <label className="order_input-box">
                        <span className="order_amount-title">Stop</span>
                        <span className="input__box-kfjdJh order_prefix-box">
                            <input
                                className="order_amount"
                                type="number"
                                min={0}
                                defaultValue
                            />
                            <span className="order_suffix">{secondCurrency}</span>
                        </span>
                    </label>
                    <div className="order__limit-pricing-box">
                        <label className="order_input-box">
                            <span className="order_amount-title">Price</span>
                            <span className="input__box-kfjdJh">
                                <input
                                    className="order_amount"
                                    type="number"
                                    min={0}
                                    defaultValue
                                />
                                <span className="order_suffix">{secondCurrency}</span>
                            </span>
                        </label>
                        <div className={`order__limit-select tradeSelectOne ${selectLeftOpened?"--active-select":""}`} onMouseEnter={()=>setSelectLeftOpened(true)} onMouseLeave={()=>setSelectLeftOpened(false)}>
                            <span>{selectLeft}</span>
                            <svg
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="currentColor"
                                    d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                                />
                            </svg>
                            <div className={`order__limit-list tradeListOne ${selectLeftOpened?"--active-select":""}`}>
                                {marketTypes.map(item=> <div className="order__limit-item" onClick={(e)=>{
                                        setSelectLeftHandler(e,item)
                                }}>{item}</div>)}
                               
                                
                            </div>
                        </div>
                    </div>
                    <label className="order_input-box">
                        <span className="order_amount-title">Size</span>
                        <span className="input__box-kfjdJh">
                            <input
                                className="order_amount"
                                type="number"
                                min={0}
                                defaultValue
                            />
                            <span className="order_suffix">{secondCurrency}</span>
                        </span>
                    </label>
                    <div className="order__slider">
                        <div className="order__slider-container">
                            <div className="order__slider-wrapper">
                                <div className="order__slider-value order__slider-buy-value-order">
                                    0%
                                </div>
                                <input
                                    className="order__slider-input order__slider-buy-order"
                                    type="range"
                                    defaultValue={0}
                                    max={100}
                                />
                            </div>
                        </div>
                    </div>
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
                        <span id="sell_available3"> {!loadingUser
                                ? user.walletsSpot.find(
                                      (item) => item.type == firstCurrency
                                  ).balance
                                : null}</span>  {firstCurrency}
                    </div>
                    <label className="order_input-box">
                        <span className="order_amount-title">Stop</span>
                        <span className="input__box-kfjdJh">
                            <input
                                className="order_amount"
                                type="number"
                                min={0}
                                defaultValue
                            />
                            <span className="order_suffix"> {firstCurrency}</span>
                        </span>
                    </label>
                    <div className="order__limit-pricing-box">
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
                        <div className={`order__limit-select tradeSelectOne ${selectLeftOpened?"--active-select":""}`} onMouseEnter={()=>setSelectRightOpened(true)} onMouseLeave={()=>setSelectRightOpened(false)}>
                            <span>{selectRight}</span>
                            <svg
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="currentColor"
                                    d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                                />
                            </svg>
                            <div className={`order__limit-list tradeListTwo ${selectRightOpened?"--active-select":""}`}>
                            {marketTypes.map(item=> <div className="order__limit-item" onClick={(e)=>{
                                        setSelectRightHandler(e,item)
                                }}>{item}</div>)}
                            </div>
                        </div>
                    </div>
                    <label className="order_input-box">
                        <span className="order_amount-title">Size</span>
                        <span className="input__box-kfjdJh order_prefix-box">
                            <input
                                className="order_amount"
                                type="number"
                                min={0}
                                defaultValue
                            />
                            <span className="order_suffix">BTC</span>
                        </span>
                    </label>
                    <div className="order__slider">
                        <div className="order__slider-container">
                            <div className="order__slider-wrapper">
                                <div className="order__slider-value order__slider-sell-value-order">
                                    0%
                                </div>
                                <input
                                    className="order__slider-input order__slider-sell-order"
                                    type="range"
                                    defaultValue={0}
                                    max={100}
                                    value={valueRangeSell}
                                    onChange={(e) =>
                                        setPercentSell(e, e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
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

export default TriggerOrderTrading;
