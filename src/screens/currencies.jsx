import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
	listProductSend,
	listProductReceive,
	listProductDetails,
} from "../Redux/Actions/productActions";
import { observer } from "mobx-react-lite";
import currencyStore from "../mobx/stateSaver";
import Loading from "../components/LoadingError/loading";
import Message from "../components/LoadingError/error";
import uniqid from "uniqid";
import ReactTradingviewWidget, { Themes } from "react-tradingview-widget";
import ReactHtmlParser from "react-html-parser";
import { Helmet } from "react-helmet";
function numberWithSpaces(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Currencies = observer((props) => {
	let history = useHistory();
	let { currencyData, setCurrencyData } = currencyStore;
	const [showNoExtraFees, setShowNoExtraFees] = useState(false);
	const [showEstimatedRate, setShowEstimatedRate] = useState(false);
	const [errorSubmiting, setError] = useState(false);
	const [fiatMode, setFiatMode] = useState(true);
	
	const dispatch = useDispatch();
	const [reload, setReload] = useState(true);
	const [sendCurr, setSendCurr] = useState(props.match.params.currency);
	const [receiveCurr, setRecieveCurr] = useState("Bank_Card_USD");
	const [sendCurrCount, setSendCurrCount] = useState(1);
	const [receiveCount, setReceiveCount] = useState(0);
	const productDetails = useSelector((state) => state.productDetails);
	const productSendList = useSelector((state) => state.productSendList);
	const productRecieveList = useSelector((state) => state.productRecieveList);
	const { loadingReceive, errorReceive, productsReceive } = productRecieveList;
	const { loadingSend, errorSend, productsSend } = productSendList;
	const { loading, error, product } = productDetails;
	
	const sendCurrHandler = (e) => {
		setSendCurr(e.target.value);
	};
	const sendCurrCountHandler = (e) => {
		setSendCurrCount(e.target.value);

		if (Number.isNaN(parseInt(e.target.value))) {
			setReceiveCount("0.00");
		} else {
			setReceiveCount(
				(parseFloat(e.target.value) * product.exchangeRate).toFixed(2)
			);
		}
	};
	const setFiatModeTrue =()=>{
		setFiatMode(true);
		
		setSendCurr("Bitcoin_BTC");
		setRecieveCurr("Bank_Card_USD");
		localStorage.setItem("fiatMode",fiatMode)
	}
	const setFiatModeFalse =()=>{
		setFiatMode(false);
		
		setSendCurr("Bitcoin_BTC");
		setRecieveCurr("Solana_SOL");
	}
	const setReceiveCountHandler = (e) => {
		setReceiveCount(e.target.value);
		if (Number.isNaN(parseInt(e.target.value))) {
			setSendCurrCount("0.00");
		} else {
			setSendCurrCount(
				(parseFloat(e.target.value) / product.exchangeRate).toFixed(8)
			);
		}
	};
	const receiveCurrHandler = (e) => {
		setRecieveCurr(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		localStorage.setItem("sendCount", sendCurrCount);

		if (
			sendCurrCount >= product.minAmountSend &&
			sendCurrCount <= product.maxAmountSend
		) {
			history.push(`/exchange/${product.name}`);
			setError(false);
		} else if (!(sendCurrCount > product.minAmountSend)) {
			setError(`Allowed minimum amount to send is ${product.minAmountSend}`);
		} else if (!(sendCurrCount < product.maxAmountSend)) {
			setError(`Allowed maximum amount to send is ${product.maxAmountSend}`);
		} else {
			setError(" Error prepare exchange request. Please try again.");
		}
	};
	
	useEffect(() => {
		dispatch(listProductSend());
		dispatch(listProductReceive(fiatMode));
		dispatch(listProductDetails(`${sendCurr}_to_${receiveCurr}`, fiatMode));
	}, [dispatch, sendCurr, receiveCurr,fiatMode]);
	useEffect(() => {
		setReceiveCount(product.exchangeRate * sendCurrCount);
	}, [receiveCurr, product]);
	useEffect(()=>{
		setSendCurr(props.match.params.currency);
	},[props.match.params.currency]);
	const extraFeesHandler = (e) => {
		if (!showNoExtraFees && showEstimatedRate) {
			setShowEstimatedRate(false);
			setShowNoExtraFees(true);
		}

		setShowNoExtraFees(!showNoExtraFees);
	};
	const estimatedRateHandler = (e) => {
		if (showNoExtraFees && !showEstimatedRate) {
			setShowEstimatedRate(true);
			setShowNoExtraFees(false);
		}
		setShowEstimatedRate(!showEstimatedRate);
	};

	if (reload && !loading && typeof loading != "undefined") {
		setReceiveCount(product.exchangeRate * sendCurrCount);
		setCurrencyData({ currencyName: product.cryptoNameSend	 });
		setReload(false);
	}
	

	return (
		<>
			<div className="container-fluid exchange position-relative py-5 main-bg-lite currencies">
				<div className="container row mx-auto py-5 ">
					<div className="col-lg-5  flex-column col-sm-12 col-12 d-none d-md-flex ">
						{loading ? (
							<Loading />
						) : (
							<div>
								<Helmet><title>Change Your Crypto on CrossCourse</title></Helmet>
								<h1 className="title">
									{product.cryptoNameSend} ({product.symbolSend}) Crypto Exchange
								</h1>
								<p className="sub-title">
									Instantly exchange {product.cryptoNameSend} at the best{" "}
									{product.symbolSend} exchange rate on CrossCourse. Free of
									limits, accounts, and worries. Spend your time and energy on
									what matters — we’ll handle the rest.
								</p>
							</div>
						)}

						<div className="mt-auto">
							<p className="mt-auto">Exchange Crypto to</p>
							<div className="mt-auto d-flex flex-row">
								<img
									src="/images/payeercrop.png"
									className="img-fluid"
									width="30rem"
									alt="exchange to payeer"
								/>
								<img
									src="/images/advcashcrop.png"
									className="img-fluid ms-2"
									width="30rem"
									alt="exchange to advcash"
								/>
								<img
									src="/images/perfectmoneycrop.svg"
									className="img-fluid ms-2"
									width="30rem"
									alt="exchange to perfect money"
								/>
								<img
									src="/images/skrillcrop.png"
									className="img-fluid ms-2"
									width="30rem"
									alt="exchange to skrill"
								/>
								<img
									src="/images/mastercardcrop.png"
									className="img-fluid ms-2"
									width="30rem"
									alt="exchange to mastercard visa"
								/>
								<img
									src="/images/visacrop.png"
									className="img-fluid ms-2"
									width="50rem"
									alt="exchange to mastercard visa"
								/>
							</div>
						</div>
					</div>
					<div
						className="  d-flex flex-column form col-lg-6  col-12 col-sm-12 mx-auto mt-5 mt-lg-0 p-0"
						style={{ minHeight: "20rem" }}
					>
						<div className="new-stepper-tabs mb-3">
							<button
								type="button"
								className={`new-stepper-tab  new-stepper-tab_dark ${
									fiatMode
										? ""
										: "new-stepper-tab_active new-stepper-tab_exchange new-stepper-tab_active-dark new-stepper-tab_exchange-dark"
								}`}
								onClick={() => setFiatModeFalse(false)}
							>
								<span className="new-stepper-tab__text">Exchange Crypto</span>
							</button>
							<button
								type="button"
								className={`new-stepper-tab new-stepper-tab_dark ${
									fiatMode
										? "new-stepper-tab_active new-stepper-tab_buy-sell new-stepper-tab_active-dark new-stepper-tab_buy-sell-dark"
										: ""
								}`}
								onClick={() => setFiatModeTrue()}
							>
								<span className="new-stepper-tab__text">Sell Crypto</span>
							</button>
						</div>
						<form id="CE_ExForm" onSubmit={submitHandler}>
							{loading || loadingReceive || loadingSend ? (
								<div className="mb-5">
									<Loading />
								</div>
							) : errorSend ? (
								<Message variant="alert-danger"> {errorSend} </Message>
							) : errorReceive ? (
								<Message variant="alert-danger"> {errorReceive} </Message>
							) : error ? (
								<Message variant="alert-danger"> {error} </Message>
							) : product.length > 0 ||
							  productsReceive.length > 0 ||
							  productsSend ? (
								<div className="row">
									{/* <div className=" d-sm-none d-none d-md-block d-sm-block col-md-2 text-center">
										<img
											id="ce_send_img"
											src={product.imageSend}
											className="img-circle cryptoexchanger-icon img-fluid col-lg-9 col-xl-8 col-xxl-7"
											alt={product.titleReceive}
										/>
									</div> */}
									<div className="col-sm-11 col-11 mx-auto form-list">
										<div className="row ">
											<div
												className="col-sm-7 col-md-8 px-0 col-7 form-group py-3 ps-4 "
												style={{
													borderTopLeftRadius: ".5rem",
													borderBottomLeftRadius: ".5rem",
												}}
											>
												<label>You Send</label>
												<input
													type="text"
													className="form-control cryptoexchanger-input"
													id="ce_amount_send"
													name="ce_amount_send"
													value={sendCurrCount}
													onChange={sendCurrCountHandler}
												/>
											</div>
											{loadingSend ? (
												<div className="mb-5">
													<div style={{minHeight:"100vh"}}><Loading /></div>
												</div>
											) : errorSend ? (
												<Message variant="alert-danger"> {errorSend} </Message>
											) : productsSend.length > 0 ? (
												<div className="col-sm-5 col-md-4 col-5 px-0">
													<select
														className="cryptoexchanger-select px-2"
														name="ce_gateway_send"
														value={sendCurr}
														onChange={sendCurrHandler}
														style={{
															borderTopRightRadius: ".5rem",
															borderBottomRightRadius: ".5rem",
														}}
													>
														{productsSend.map((product) => (
															<option value={product.nameSend} key={uniqid()}>
																{product.titleSend}
															</option>
														))}
													</select>
												</div>
											) : null}
										</div>
									</div>
									<div className="exchange-calculator--fields-section exchange-calculator--fields-section__sequence">
										<div className="new-stepper-hints new-stepper-hints_dark">
											<div className="new-stepper-hints__wrapper-border">
												<div className="new-stepper-hints__item">
													<button
														type="button"
														className="new-stepper-hints__label"
														onClick={extraFeesHandler}
													>
														No extra fees
													</button>
													<div
														className={`now-tooltip now-tooltip__default ${
															showNoExtraFees ? "" : "d-none"
														}`}
													>
														<div
															className="now-tooltip--close-button button-close button-close__dark button-close__small"
															role="button"
															tabIndex="0"
															onClick={() =>
																setShowNoExtraFees(!showNoExtraFees)
															}
														></div>
														<p>
															Network fees and all other exchange charges are
															included in the rate.
														</p>
														<p>We guarantee no extra costs.</p>
													</div>
												</div>
												<div className="new-stepper-hints__item">
													<button
														type="button"
														className="new-stepper-hints__label"
														onClick={estimatedRateHandler}
													>
														Estimated rate:
													</button>{" "}
													<span className="new-stepper-hints__rate">
														{loading ? (
															<div style={{minHeight:"100vh"}}><Loading /></div>
														) : (
															`1 ${product.symbolSend} ~ ${product.exchangeRate} ${product.symbolReceive}`
														)}
													</span>
													<div
														className={`now-tooltip now-tooltip__default ${
															showEstimatedRate ? "" : "d-none"
														}`}
													>
														<div
															className="now-tooltip--close-button button-close button-close__dark button-close__small"
															role="button"
															tabIndex="0"
															onClick={() =>
																setShowEstimatedRate(!showEstimatedRate)
															}
														></div>
														<h5 className="color-main-lite">
															This is an expected rate
														</h5>
														<p>
															Crosscourse will pick the best rate for you during
															the moment of the exchange.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="col-sm-11 col-11 mx-auto form-list ">
										<div className="row ">
											<div
												className="col-sm-7 col-md-8 px-0 col-7 form-group py-3 ps-4"
												style={{
													borderTopLeftRadius: ".5rem",
													borderBottomLeftRadius: ".5rem",
												}}
											>
												<label>You Receive</label>
												<input
													type="text"
													className="form-control cryptoexchanger-input"
													id="ce_amount_send"
													name="ce_amount_send"
													value={receiveCount}
													onChange={setReceiveCountHandler}
												/>
											</div>
											{loadingReceive ? (
												<div className="mb-5">
													<div style={{minHeight:"100vh"}}><Loading /></div>
												</div>
											) : errorReceive ? (
												<Message variant="alert-danger"> {errorSend} </Message>
											) : productsReceive.length > 0 ? (
												<div className="col-sm-5 col-md-4 col-5 px-0">
													<select
														className="cryptoexchanger-select px-2"
														name="ce_gateway_send"
														value={receiveCurr}
														onChange={receiveCurrHandler}
														style={{
															borderTopRightRadius: ".5rem",
															borderBottomRightRadius: ".5rem",
														}}
													>
														{productsReceive.map((product) => (
															<option
																value={product.nameReceive}
																key={uniqid()}
															>
																{product.titleReceive}
															</option>
														))}
													</select>
												</div>
											) : null}
										</div>
									</div>
									<button
										type="submit"
										className="py-3 col-sm-11 col-11 mx-auto my-3 exchange-btn"
									>
										Exchange
									</button>
								</div>
							) : (
								<div style={{minHeight:"100vh"}}><Loading /></div>
							)}
						</form>
						{errorSubmiting ? (
							<Message variant="alert-danger text-center mt-4">
								{" "}
								{errorSubmiting}{" "}
							</Message>
						) : null}
					</div>
				</div>
			</div>
			{loading ? (
				<div style={{minHeight:"100vh"}}><Loading /></div>
			) : (
				<div className="container-fluid currencies">
					<div className="container  trading-view">
						<div className=" text-center" style={{height:"40vh"}}>
							<h2 className="currencies-exchange--topic">
								{product.cryptoNameSend} Price Today
							</h2>
							<ReactTradingviewWidget
								autosize={true}
								locale="en"
								symbol={`${product.symbolSend}-${fiatMode ? "USD" : product.symbolReceive}`}
								theme={Themes.LIGHT}
								hide_top_toolbar={true}
								timezone="exchange"
								style={`3`}
								save_image={false}
								
								
																
							/>
						</div>
						{currencyData.loadingCurrency ? (
							<div style={{minHeight:"100vh"}}><Loading /></div>
						) : (
							<div className="mt-5">
								<h2 className="currencies-exchange--topic">
									{product.cryptoNameSend} market info: {product.cryptoNameSend} price
									today, market cap, and supply
								</h2>
								<p className="mt-2">
									{product.cryptoNameSend} Price for today is{" "}
									{currencyData.market_data.current_price.usd}. Its current
									circulating supply is {product.symbolSend}{" "}
									{numberWithSpaces(currencyData.market_data.total_supply)} with
									a market cap of $404,891,832,427.4.
								</p>
								<div className="row">
									<div className="col-sm-4">
										<div className="currencies-price--item">
											<div className="currencies-price--svg">
												<div className="svg-currencies-exchange-sprite--price"></div>
											</div>
											<div className="currencies-price--text">
												<p className="currencies-price--topic">PRICE</p>
												<p className="currencies-price--article">
													$ {currencyData.market_data.current_price.usd}
												</p>
											</div>
										</div>
										<div className="currencies-price--item mt-3">
											<div className="currencies-price--svg">
												<div className="svg-currencies-exchange-sprite--market-cap"></div>
											</div>
											<div className="currencies-price--text">
												<p className="currencies-price--topic">MARKET CAP</p>
												<p className="currencies-price--article">
													${" "}
													{numberWithSpaces(
														currencyData.market_data.market_cap.usd
													)}
												</p>
											</div>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="currencies-price--item">
											<div className="currencies-price--svg">
												<div className="svg-currencies-exchange-sprite--24h"></div>
											</div>
											<div className="currencies-price--text">
												<p className="currencies-price--topic">24h % PRICE</p>
												<p className="currencies-price--article">
													{currencyData.market_data.price_change_percentage_24h.toFixed(
														2
													)}{" "}
													%
												</p>
											</div>
										</div>
										<div className="currencies-price--item mt-3">
											<div className="currencies-price--svg">
												<div className="svg-currencies-exchange-sprite--24h-volume"></div>
											</div>
											<div className="currencies-price--text">
												<p className="currencies-price--topic">24H VOLUME</p>
												<p className="currencies-price--article">
													${" "}
													{numberWithSpaces(
														currencyData.market_data.total_volume.usd
													)}
												</p>
											</div>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="currencies-price--item">
											<div className="currencies-price--svg">
												<div className="svg-currencies-exchange-sprite--7d"></div>
											</div>
											<div className="currencies-price--text">
												<p className="currencies-price--topic">7d % PRICE</p>
												<p className="currencies-price--article">
													{currencyData.market_data.price_change_percentage_7d.toFixed(
														2
													)}{" "}
													%
												</p>
											</div>
										</div>
										<div className="currencies-price--item mt-3">
											<div className="currencies-price--svg">
												<div className="svg-currencies-exchange-sprite--coin-supply"></div>
											</div>
											<div className="currencies-price--text">
												<p className="currencies-price--topic">COIN SUPPLY</p>
												<p className="currencies-price--article">
													{numberWithSpaces(
														currencyData.market_data.total_supply
													)}{" "}
													{product.symbolSend}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="currencies-coin-about mt-3">
									<h2 className="currencies-exchange--topic mt-5">
										What is {product.cryptoNameSend} ({product.symbolSend})
									</h2>
									<p>
										{" "}
										{ReactHtmlParser(
											currencyData.description.en
												.split("\r\n")
												.join("</br>")
												.split("\n\r")
												.join("</br>")
												.split("\r")
												.join("</br>")
												.split("\n")
												.join("</br>"),
											{ decodeEntities: true }
										)}
									</p>
									<div className="row currencies-coin-buy mt-5">
										<div className="card-buy col-sm-6 col-12 ">
											<div className="item p-3">
												<div className="header-card">
													<h2>How to Exchange {product.cryptoNameSend}?</h2>
													<div className="btn-try-card d-none d-lg-flex">
														<a
															className="try-it-now px-3 py-2 text-center"
															href="/exchange?to=ltc"
														>
															{" "}
															Buy NOW
														</a>
													</div>
												</div>
												<div className="content-card">
													<p>
														Users can exchange {product.symbolSend} on
														CrossCourse for one of the cryptocurrencies:
													</p>
													<p>
														<strong>Pick</strong> {product.symbolSend} as the
														“You get” currency above
													</p>
													<p>
														<strong>Choose</strong> crypto or fiat to buy{" "}
														{product.symbolSend} with
													</p>
													<p>
														<strong>Enter</strong> your {product.cryptoNameSend}{" "}
														wallet address
													</p>
													<p>
														<strong>Send</strong> your deposit to a one-time
														address
													</p>
													<p>
														<strong>Receive</strong> your exchanged coins in ~5
														mins!
													</p>
												</div>
												<div className="btn-try-mobile mt-auto">
													<a
														className="try-it-now px-3 py-2 d-lg-none d-flex "
														href="/exchange?to=ltc"
													>
														Buy NOW
													</a>
												</div>
											</div>
										</div>
										<div className="card-buy col-sm-6 col-12">
											<div className="item p-3">
												<div className="header-card">
													<h2>How to Sell {product.cryptoNameSend}?</h2>
													<div className="btn-try-card d-none d-lg-flex">
														<a
															className="try-it-now px-3 py-2 text-center"
															href="/exchange?to=ltc"
														>
															{" "}
															Buy NOW
														</a>
													</div>
												</div>
												<div className="content-card">
													<p>
														Swap {product.symbolSend} coins for an asset from
														our rich crypto selection by following the steps
														below:
													</p>
													<p>
														<strong>Pick</strong> the asset you’d like to get
														for your {product.symbolSend}
													</p>
													<p>
														<strong>Choose</strong> crypto or fiat to buy{" "}
														{product.symbolSend} with
													</p>
													<p>
														<strong>Enter</strong> the wallet address of the
														coin you’d like to get your {product.cryptoNameSend}
													</p>
													<p>
														<strong>Send</strong> your deposit to a one-time
														address
													</p>
													<p>
														<strong>Receive</strong> your exchanged coins in ~5
														mins!
													</p>
												</div>
												<div className="btn-try-mobile">
													<a
														className="try-it-now px-3 py-2 d-lg-none d-flex"
														href="/exchange?to=ltc"
													>
														Buy NOW
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="mt-5">
									<div>
										<h2 className="currencies-exchange--topic">
											{product.cryptoNameSend} - {product.symbolReceive} Exchange
										</h2>
										<p>
											CrossCourse provides a diversified portal for a user to
											exchange {product.cryptoNameSend} with more than 10
											cryptocurrency tokens. Bitcoin can be exchanged with
											LTC/USDT or LTC/ETH, or any of the other currency pairs.
										</p>
									</div>
									<div className="currencies-coin-adavantages mt-5">
										<h2 className="currencies-exchange--topic">
											{product.cryptoNameSend} Exchange Advantages on CrossCourse
										</h2>
										<p>
											CrossCourse provides a diversified portal for a user to
											exchange {product.cryptoNameSend} with more than 10
											cryptocurrency tokens. Bitcoin can be exchanged with
											LTC/USDT or LTC/ETH, or any of the other currency pairs.
										</p>
										<ul>
											<li>
												Crosscourse employs industry-grade security measures to
												provide optimum protection for all users and their
												funds.
											</li>
											<li>
												Sell and exchange {product.symbolSend} with a variety of
												options.
											</li>
											<li>
												There are no hidden fees while transacting{" "}
												{product.cryptoNameSend}.
											</li>
											<li>
												CrossCourse eliminates the lengthy procedure of
												registering while transacting {product.symbolSend}.
											</li>
											<li>
												The CrossCourse portal does not place any limits on the
												minimum amount or deposit for any transaction.
											</li>
										</ul>
										<div className="btn-try">
											<a className="try-it-now" href="/">
												{" "}
												Try it NOW
											</a>
										</div>
									</div>
								</div>
								<div>
									<h2 className="currencies-exchange--topic">
										{product.cryptoNameSend} exchange Q&A
									</h2>
									<div className="wrapper">
										<div className="half">
											<div className="tab">
												<input id="tab-1" type="checkbox" name="tabs" />
												<label htmlFor="tab-1">
													What Is the {product.cryptoNameSend} Exchange Rate?
												</label>
												<div className="tab-content">
													<p>
														CrossCourse is a simple and fast instant
														cryptocurrency exchange service. You do not need to
														register, and your exchange will have no limits.
														We'll quickly convert your coins for you without
														charging any additional or hidden fees.
													</p>
												</div>
											</div>
											<div className="tab">
												<input id="tab-2" type="checkbox" name="tabs" />
												<label htmlFor="tab-2">
													{" "}
													Where to Exchange {product.cryptoNameSend}
												</label>
												<div className="tab-content">
													<p>
														CrossCourse is the place for you – it offers lower
														transaction fees, shorter waiting times, and it’s
														friendly to new users. Also, you will definitely
														receive the best price for your buck because our
														engine will look for the best Litecoin exchange
														rate.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
});

export default Currencies;
