import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
	listProductSend,
	listProductReceive,
	listProductDetails,
} from "../../Redux/Actions/productActions";
import Loading from "../LoadingError/loading";
import Message from "../LoadingError/error";
import uniqid from "uniqid";
import { Helmet } from "react-helmet";
const ShopSection = (props) => {
	let history = useHistory();
	const [showNoExtraFees, setShowNoExtraFees] = useState(false);
	const [showEstimatedRate, setShowEstimatedRate] = useState(false);
	const [errorSubmiting, setError] = useState(false);
	const [fiatMode, setFiatMode] = useState(true);
	const dispatch = useDispatch();
	const [reload, setReload] = useState(true);
	const [sendCurr, setSendCurr] = useState("Bitcoin_BTC");
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
		localStorage.setItem("fiatMode",fiatMode)
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
	}, [dispatch, sendCurr, receiveCurr, fiatMode]);
	useEffect(() => {
		setReceiveCount(product.exchangeRate * sendCurrCount);
	}, [receiveCurr, product]);

	if (
		reload &&
		!loading &&
		typeof loading !="undefined"
	) {
		setReceiveCount(product.exchangeRate * sendCurrCount);
		
		setRecieveCurr(productsReceive[0].nameReceive);
		setReload(false);
	}
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

	return (
		<>
			<div className="container-fluid exchange position-relative py-5 main-bg-lite">
				<div className="container row mx-auto">
					<div className="col-lg-5  flex-column col-sm-12 col-12 d-none d-md-flex">
						<h1 className="title">Limitless Crypto Exchange</h1>
						<p className="sub-title">Fast Crypto Swaps, Free of Custody</p>

						<div className="mt-auto">
							<p className="mt-auto">Exchange Crypto to</p>
							<div className="mt-auto d-flex flex-row">
								<img
									src="./images/payeercrop.png"
									className="img-fluid"
									width="30rem"
									alt="exchange to payeer"
								/>
								<img
									src="./images/advcashcrop.png"
									className="img-fluid ms-2"
									width="30rem"
									alt="exchange to advcash"
								/>
								<img
									src="./images/perfectmoneycrop.svg"
									className="img-fluid ms-2"
									width="30rem"
									alt="exchange to perfect money"
								/>
								<img
									src="./images/skrillcrop.png"
									className="img-fluid ms-2"
									width="30rem"
									alt="exchange to skrill"
								/>
								<img
									src="./images/mastercardcrop.png"
									className="img-fluid ms-2"
									width="30rem"
									alt="exchange to mastercard visa"
								/>
								<img
									src="./images/visacrop.png"
									className="img-fluid ms-2"
									width="50rem"
									alt="exchange to mastercard visa"
								/>
							</div>
						</div>
					</div>
					<div
						className=" d-flex flex-column form col-lg-6  col-12 col-sm-12 mx-auto mt-5 mt-lg-0 p-0"
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
									<Helmet><title>Exchange/Sell Your Crypto</title></Helmet>
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
													<Loading />
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
															<Loading />
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
												className="col-sm-7 col-md-8 px-0 col-7 form-group py-3 ps-4 "
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
													<Loading />
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
								<Loading />
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
		</>
	);
};

export default ShopSection;
