import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../Redux/Actions/orderActions";
import Loading from "../components/LoadingError/loading";
import Message from "../components/LoadingError/error";
import Helmet from "react-helmet";
import { useHistory } from "react-router-dom";

const OrderScreen = ({ match }) => {
	window.scrollTo(0, 0);
	const [agreedOfTerms, setAgreedOfTerms] = useState(false);
	let history = useHistory();
	
	const orderId = match.params.id;
	const dispatch = useDispatch();

	const orderDetails = useSelector((state) => state.orderDetails);
	const { order, loading, error } = orderDetails;

	

	useEffect(() => {
		if (!order) {
			dispatch(getOrderDetails(orderId));
		}
	}, [dispatch, orderId, order]);

	

	const submitHandler = (e) => {
		e.preventDefault();
		history.push(`/pay/${orderId}`);
	};

	return (
		<>
			
			<div
				className=" py-sm-5 p-0 confirm"
				style={{ backgroundColor: "#eeeeee" }}
			>
				{loading ? (
					<Loading />
				) : error ? (
					<Message variant="alert-danger"> {error} </Message>
				) : (
					<div
						className="col-md-7 mx-auto py-4 px-md-3 px-lg-5 px-5"
						style={{ backgroundColor: "white" }}
					>
						<Helmet>
							<title>Confirm order {order._id}</title>
						</Helmet>
						
						<div className="inner-box">
							<h2 className="title">
								Please confirm the details of your exchange
							</h2>
							<form className="px-lg-12" onSubmit={submitHandler}>
								<div>
									<p className="label mt-2">You Send</p>

									<span className="amount">
										{order.sendCount} {order.symbolSend}
									</span>
									<p className="rate">
										1 {order.symbolSend} ≈ {order.exchangeRate}{" "}
										{order.symbolReceive}
									</p>
								</div>

								<div>
									<p className="label">You Get</p>

									<span className="amount">
										≈ {(order.exchangeRate * order.sendCount).toFixed(2)}{" "}
										{order.symbolReceive}
									</span>
								</div>
								<p className="label mt-2">Estimated arrival</p>
								<p>≈ 10 minutes</p>

								<div className="confirm-transaction-step--control-button row col-sm-7 col-12 justify-content-between	">
									<button
										type="submit"
										className="now-button now-button__green col-sm-7 col-12 py-3"
									>
										Confirm
									</button>
									<Link
										className="now-button now-button__white now-button__hid col-sm-4 col-5 p-2 mt-3 align-items-center d-flex justify-content-center"
										to="/"
									>
										Back
									</Link>
								</div>
								<div className="form-check mt-3">
									<label className="form-check-label confirm-transaction-step--agreements">
										<input
											className="form-check-input"
											type="checkbox"
											required
											value={agreedOfTerms}
											onChange={() => setAgreedOfTerms(!agreedOfTerms)}
										/>
										I've read and agree to the CrossCourse{" "}
										<Link to="/oferta">Terms of Use</Link>,{" "}
										<Link to="/privacy-policy">Privacy Policy</Link> and{" "}
										<Link to="/risk-disclosure-statement">Risk Disclosure Statement</Link>
									</label>
								</div>
							</form>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default OrderScreen;
