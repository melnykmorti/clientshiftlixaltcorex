import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/error";

import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../Redux/Actions/orderActions";
import { ORDER_CREATE_RESET } from "../Redux/Constants/orderConstants";
import { listProductDetails } from "../Redux/Actions/productActions";
import Loading from "../components/LoadingError/loading";
import { Helmet } from "react-helmet";
const SingleProduct = ({ history, match }) => {
	const [errorSubmitting, setError] = useState("");
	const [showNoExtraFees, setShowNoExtraFees] = useState(false);
	const [showEstimatedRate, setShowEstimatedRate] = useState(false);
	const [userEmail, setUserEmail] = useState("");
	const [userRepeatEmail, setUserRepeatEmail] = useState("");
	const [adressSend, setAdressSend] = useState("");
	const [adresRepeatsSend, setAdressRepeatSend] = useState("");
	let storageSend = localStorage.getItem("sendCount");

	const [agreedOfTerms, setAgreedOfTerms] = useState(false);

	const [sendCurrCount, setSendCurrCount] = useState(
		Number.isNaN(parseInt(storageSend)) ? 1 : storageSend
	);

	const productId = match.params.id;

	const dispatch = useDispatch();
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;
	const orderCreate = useSelector((state) => state.orderCreate);
	const { order, successOrderCreate } = orderCreate;
	const [receiveCount, setReceiveCount] = useState(0);
	useEffect(() => {
		dispatch(listProductDetails(productId));
		window.scroll(0, 0);
	}, [dispatch, productId]);

	useEffect(() => {
		if (error) {
			return;
		}
		setReceiveCount(product.exchangeRate * parseFloat(sendCurrCount));
	}, [product, dispatch]);
	useEffect(() => {
		if (successOrderCreate) {
			history.push(`/order/${order._id}`);
			dispatch({ type: ORDER_CREATE_RESET });
		}
	}, [history, dispatch, successOrderCreate, order]);

	const userEmailHandler = (e) => {
		setUserEmail(e.target.value);
	};
	const userRepeatEmailHandler = (e) => {
		setUserRepeatEmail(e.target.value);
	};
	const userAdressSendHandler = (e) => {
		let cardCode = e.target.value;
		if (product.typeReceive === "Card Number") {
			cardCode = e.target.value.replace(/\D/g, "").substring(0, 16);
			if (cardCode) cardCode = cardCode.match(/.{1,4}/g).join(" ");
		}

		setAdressSend(cardCode);
	};
	const userAdressRepeatSendHandler = (e) => {
		let cardCode = e.target.value;
		if (product.typeReceive === "Card Number") {
			cardCode = e.target.value.replace(/\D/g, "").substring(0, 16);
			if (cardCode) cardCode = cardCode.match(/.{1,4}/g).join(" ");
		}

		setAdressRepeatSend(cardCode);
	};

	const sendCurrCountHandler = (e) => {
		setSendCurrCount(e.target.value);

		if (Number.isNaN(parseInt(e.target.value))) {
			setReceiveCount("0.00");
		} else {
			setReceiveCount(
				(parseFloat(e.target.value) * product.exchangeRate.toFixed(2)).toFixed(
					2
				)
			);
		}
	};

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

	const placeOrderHandler = (e) => {
		e.preventDefault();
		if (
			sendCurrCount >= product.minAmountSend &&
			sendCurrCount <= product.maxAmountSend &&
			userEmail == userRepeatEmail &&
			adressSend == adresRepeatsSend && (product.typeReceive=="Card Number" ? adressSend.split(" ").join("").length==16 : true)
		) {
			dispatch(
				createOrder({
					header: product.header,
					name: product.name,
					imageSend: product.imageSend,
					imageReceive: product.imageReceive,
					titleSend: product.titleSend,
					titleReceive: product.titleReceive,
					typeReceive: product.typeReceive,
					receiveNumber: adressSend,
					email: userEmail,
					sendCount: parseFloat(sendCurrCount),
					exchangeRate: product.exchangeRate,
					symbolSend: product.symbolSend,
					symbolReceive: product.symbolReceive,
				})
			);
		} else if (!(sendCurrCount > product.minAmountSend)) {
			setError(`Allowed minimum amount to send is ${product.minAmountSend}`);
		} else if (!(sendCurrCount < product.maxAmountSend)) {
			setError(`Allowed maximum amount to send is ${product.maxAmountSend}`);
		} else if (userEmail != userRepeatEmail) {
			setError(`Your E-mail does not match`);
		} else if (adressSend != adresRepeatsSend) {
			setError(`Your ${product.typeReceive} does not match`);
		} else if(product.typeReceive=="Card Number" ? adressSend.split(" ").join("").length!=16:false){
			setError("Not Valid Bank Card");
		}else {
			setError(" Error prepare exchange request. Please try again.");
		}
		console.log(product.typeReceive=="Card Number" ? adressSend.split(" ").join("").length==16 : true); 
	};
	if (typeof loading == "undefined" || loading) {
		return (
			<div
				style={{
					minHeight: "70vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Loading />
			</div>
		);
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
	console.log(order);
	return (
		<div style={{ minHeight: "70vh" }}>
			<Helmet>
				<title>
					{loading ? "CrossCourse" : `${product.header} CrossCourse`}{" "}
				</title>
			</Helmet>
			<div
				className="py-sm-5 p-0 details-enter"
				style={{ backgroundColor: "#EEEEEE" }}
			>
				<div
					className=" d-flex flex-column form col-md-9  col-12 col-sm-12  col-lg-7 mx-auto"
					style={{ minHeight: "20rem" }}
				>
					<p className="p-3 text-center">EXCHANGE</p>
					<form onSubmit={placeOrderHandler}>
						{error ? (
							<div>
								<h3 className="text-center">Product not Found</h3>
							</div>
						) : (
							<div className="row">
								<div className="col-md-11  mx-auto form-list">
									<div className="row ">
										<div
											className="col-sm-8 col-8 px-0 form-group py-3 ps-4 "
											style={{
												borderTopLeftRadius: "0.5rem",
												borderBottomLeftRadius: "0.5rem",
											}}
										>
											<label>You Send</label>
											<input
												type="text"
												className="ce_amount_send form-control cryptoexchanger-input"
												name="ce_amount_send"
												value={sendCurrCount}
												onChange={sendCurrCountHandler}
											/>
										</div>
										<div className="col-sm-4 col-4 px-0 send-curr d-flex justify-content-evenly">
											<img
												src={`.${product.imageSend}`}
												className="img-fluid my-auto"
												style={{ width: "2rem" }}
												alt={product.titleSend}
											/>
											<h3 className="my-auto float-end">
												{product.symbolSend}
											</h3>
										</div>
									</div>
								</div>
								<div className="exchange-calculator--fields-section exchange-calculator--fields-section__sequence col-md-11 mx-auto">
									<div className="new-stepper-hints ">
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
														onClick={() => setShowNoExtraFees(!showNoExtraFees)}
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
												</button>
												<span className="new-stepper-hints__rate">
													{loading ? (
														<Loading />
													) : (
														`  1 ${product.symbolSend} ~ ${product.exchangeRate} ${product.symbolReceive}`
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
								<div className="col-md-11 mx-auto form-list ">
									<div className="row ">
										<div
											className="col-sm-8 col-8 px-0 form-group py-3 ps-4 "
											style={{
												borderTopleftradius: "0.5rem",
												borderBottomLeftRadius: "0.5rem",
											}}
										>
											<label>You Receive</label>
											<input
												type="text"
												className="ce_amount_send form-control cryptoexchanger-input"
												name="ce_amount_send"
												value={receiveCount}
												onChange={setReceiveCountHandler}
											/>
										</div>
										<div className="col-sm-4 col-4 px-0 send-curr d-flex justify-content-evenly">
											<img
												src={`.${product.imageReceive}`}
												className="img-fluid my-auto"
												style={{ width: "2rem" }}
												alt={product.titleReceive}
											/>
											<h3 className="my-auto float-end">
												{product.symbolReceive}
											</h3>
										</div>
									</div>
								</div>
								<div className="col-md-11 mx-auto form-list mt-5">
									<div className="row ">
										<div
											className="col-md-11 px-0 form-group py-3 ps-4 "
											style={{
												borderTopleftradius: "0.5rem",
												borderBottomLeftRadius: "0.5rem",
											}}
										>
											<label>Enter Your E-Mail Adress</label>
											<input
												type="text"
												className="ce_amount_send form-control cryptoexchanger-input"
												name="ce_amount_send"
												value={userEmail}
												onChange={userEmailHandler}
												required
											/>
										</div>
									</div>
								</div>
								<div className="col-md-11 mx-auto form-list mt-2">
									<div className="row ">
										<div
											className="col-md-11 px-0 form-group py-3 ps-4 "
											style={{
												borderTopleftradius: "0.5rem",
												borderBottomLeftRadius: "0.5rem",
											}}
										>
											<label className="mt-1"><span className="confirm-data">Confirm</span> Your E-Mail Adress</label>
											<input
												type="text"
												className="ce_amount_send form-control cryptoexchanger-input"
												name="ce_amount_send"
												value={userRepeatEmail}
												onChange={userRepeatEmailHandler}
												required
											/>
										</div>
									</div>
								</div>
								<div className="col-md-11 mx-auto form-list mt-5">
									<div className="row ">
										<div
											className="col-md-11 px-0 form-group py-3 ps-4 "
											style={{
												borderTopleftradius: "0.5rem",
												borderBottomLeftRadius: "0.5rem",
											}}
										>
											<label>Enter Your {product.typeReceive}</label>
											<input
												type="text"
												className="ce_amount_send form-control cryptoexchanger-input"
												name="ce_amount_send"
												value={adressSend}
												onChange={userAdressSendHandler}
												required
											/>
										</div>
									</div>
								</div>
								<div className="col-md-11 mx-auto form-list mt-1">
									<div className="row ">
										<div
											className="col-md-11 px-0 form-group py-3 ps-4 "
											style={{
												borderTopleftradius: "0.5rem",
												borderBottomLeftRadius: "0.5rem",
											}}
										>
											<label><span className="confirm-data">Confirm</span> Your {product.typeReceive}</label>
											<input
												type="text"
												className="ce_amount_send form-control cryptoexchanger-input"
												name="ce_amount_send"
												value={adresRepeatsSend}
												onChange={userAdressRepeatSendHandler}
												required
											/>
										</div>
									</div>
								</div>
								<div className="col-xl-8 col-sm-12 mx-auto mt-3">
									<div className="form-check text-center">
										<label className="form-check-label ">
											<input
												className="form-check-input"
												type="checkbox"
												required
												value={agreedOfTerms}
												onChange={() => setAgreedOfTerms(!agreedOfTerms)}
											/>
											I agree with <Link to="/oferta">Terms of Use</Link>
										</label>
									</div>
								</div>
								<div className="col-xl-12 col-sm-12 mt-xl-0 mt-sm-4 d-flex">
									<input
										type="submit"
										className="col-sm-11  col-11 mx-auto my-3 py-3 exchange-btn"
										value="Exchange"
									/>
								</div>
							</div>
						)}
					</form>
					{errorSubmitting ? (
						<Message variant="alert-danger text-center mt-4">
							{" "}
							{errorSubmitting}{" "}
						</Message>
					) : null}
				</div>
				{/* {loading ? (
					<Loading />
				) : error ? (
					<Message variant="alert-danger"> {error} </Message>
				) : (
					<div
						className="col-md-4 mx-auto p-3"
						style={{ backgroundColor: "white" }}
					>
						
						<div className="inner-box p-3">
							<h2 className="title-2">{product.header}</h2>
							<form onSubmit={placeOrderHandler}>
								<div className="row">
									<div className="col-lg-3 d-none d-sm-block d-sm-none d-md-none d-lg-block align-self-end">
										<img
											src={`.${product.imageSend}`}
											width="60rem"
											className="img-circle cryptoexchanger-icon2"
											alt={product.titleSend}
										/>
									</div>
									<div className="col-sm-12 col-md-12 col-lg-6 ms-auto">
										<div className="form-group">
											<label>Send</label>
											<input
												type="text"
												disabled
												className="form-control cryptoexchanger-input py-4"
												value={`${product.titleSend}`}
											/>
										</div>
									</div>
									<div className="col-lg-3 col-md-12">
										<div className="form-group">
											<label>Amount</label>
											<input
												type="text"
												className="form-control cryptoexchanger-input py-4"
												required
												value={sendCurrCount}
												onChange={sendCurrCountHandler}
											/>
										</div>
									</div>
									<div className="col-md-12 mt-3">
										<div className="text-end text-muted">
											<small className="d-flex text-end flex-column">
												<p className="text-end">
													Exchange rate: 1 {product.symbolSend} ={" "}
													{product.exchangeRate} USDg
												</p>

												<p className="text-end">
													Min. amount: {product.minAmountSend}{" "}
													{product.symbolSend}{" "}
												</p>
												<p className="text-end">
													Max. amount: {product.maxAmountSend}{" "}
													{product.symbolSend}
												</p>
											</small>
										</div>
									</div>
								</div>
								<div className="separator"></div>
								<div className="row mt-3">
									<div className="col-lg-3 d-none d-sm-block d-sm-none d-md-none d-lg-block align-self-end">
										<img
											src={`.${product.imageReceive}`}
											width="60rem"
											className="img-circle cryptoexchanger-icon2"
											alt={product.titleReceive}
										/>
									</div>
									<div className="col-sm-12 col-md-12 col-lg-6 ms-auto">
										<div className="form-group">
											<label>Receive</label>
											<input
												type="text"
												disabled
												className="form-control cryptoexchanger-input py-4"
												value={product.titleReceive}
											/>
										</div>
									</div>
									<div className="col-lg-3 col-md-12">
										<div className="form-group">
											<label>Amount</label>
											<input
												type="text"
												className="form-control cryptoexchanger-input py-4"
												required
												value={receiveCount}
												onChange={setReceiveCountHandler}
											/>
										</div>
									</div>
									<div className="col-md-12 mt-3">
										<div className="ms-auto text-muted">
											<small className="text-end d-flex flex-column">
												<span>
													Reserve:{" "}
													<span id="ce_reserve_text">
														{product.countInStockReceive}{" "}
														{product.symbolReceive}
													</span>
												</span>
											</small>
										</div>
									</div>
								</div>

								<div className="row mt-4">
									<div className="col-md-12">
										<div className="form-group">
											<label>Your email address</label>
											<input
												type="email"
												className="form-control mt-2 py-4"
												value={userEmail}
												onChange={userEmailHandler}
												required
											/>
										</div>

										<div className="form-group mt-4">
											<label>Your {product.typeReceive}</label>
											<input
												type="text"
												className="form-control mt-2 py-4"
												required
												value={adressSend}
												onChange={userAdressSendHandler}
											/>
										</div>
									</div>
								</div>

								<div className="row mt-3 align-items-center">
									<div className="col-xl-8 col-sm-12 ">
										<div className="form-check ">
											<label className="form-check-label">
												<input
													className="form-check-input"
													type="checkbox"
													required
													value={agreedOfTerms}
													onChange={() => setAgreedOfTerms(!agreedOfTerms)}
												/>
												I agree with <Link to="/oferta">Terms of Use</Link>
											</label>
										</div>
									</div>
									<div className="col-xl-4 col-sm-12 mt-xl-0 mt-sm-4 d-flex">
										<input
											type="submit"
											className="btn btn-primary btn-block  mx-sm-auto mx-xl-0"
											value="Exchange"
										/>
									</div>
								</div>
							</form>
							{errorSubmitting ? (
								<Message variant="alert-danger text-center mt-4">
									{" "}
									{errorSubmitting}{" "}
								</Message>
							) : null}
						</div>
					</div>
				)} */}
			</div>
		</div>
	);
};

export default SingleProduct;
