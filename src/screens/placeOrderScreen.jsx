import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../Redux/Actions/orderActions";
import { ORDER_CREATE_RESET } from "../Redux/Constants/orderConstants";
import Header from "../components/header";
import Message from "../components/LoadingError/error";

const PlaceOrderScreen = ({ history }) => {
	window.scrollTo(0, 0);

	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
		const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	// Calculate Price
	const addDecimals = (num) => {
		return (Math.round(num * 100) / 100).toFixed(2);
	};

	cart.itemsPrice = addDecimals(
		cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
	);

	cart.taxPrice = addDecimals(Number((0.035 * cart.itemsPrice).toFixed(2)));
	cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.taxPrice)).toFixed(
		2
	);

	const orderCreate = useSelector((state) => state.orderCreate);
	const { order, success, error } = orderCreate;

	useEffect(() => {
		if (success) {
			history.push(`/order/${order._id}`);
			dispatch({ type: ORDER_CREATE_RESET });
		}
		
	}, [history, dispatch, success, order]);
	

	const placeOrderHandler = () => {
		dispatch(
			createOrder({
				header: cart.cartItems,
				paymentMethod: cart.paymentMethod,
				itemsPrice: cart.itemsPrice,
				taxPrice: cart.taxPrice,
				totalPrice: cart.totalPrice,
			})
		);
	};

	return (
		<>
			<Header />
			<div className="container">
				<div className="row  justify-content-center order-detail">
					<div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
						<div className="row ">
							<div className="col-md-4 center">
								<div className="alert-success order-box">
									<i className="fas fa-user"> </i>
								</div>
							</div>
							<div className="col-md-8 center">
								<h5>
									<strong> Покупатель </strong>
								</h5>
								<p> {userInfo.name} </p> <p> {userInfo.email} </p>
							</div>
						</div>
					</div>
					{/* 2 */}
					<div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
						<div className="row">
							<div className="col-md-4 center">
								<div className="alert-success order-box">
									<i className="fas fa-truck-moving"> </i>
								</div>
							</div>
							<div className="col-md-8 center">
								<h5>
									<strong> Статус заказа </strong>
								</h5>
								<p> Способ оплаты: {cart.paymentMethod} </p>
							</div>
						</div>
					</div>
					{/* 3 */}
				</div>
				<div className="row order-products justify-content-between">
					<div className="col-lg-8">
						{cart.cartItems.length === 0 ? (
							<Message variant="alert-info mt-5"> Your cart is empty </Message>
						) : (
							<>
								{cart.cartItems.map((item, index) => (
									<div className="order-product row" key={index}>
										<div className="col-md-3 col-6">
											<img src={item.image} alt={item.name} />
										</div>
										<div className="col-md-5 col-6 d-flex align-items-center">
											<Link to={`/products/${item.product}`}>
												<h6> {item.name} </h6>
											</Link>
										</div>
										<div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
											<h4> Сумма </h4> <h6> {item.qty * item.price} грн.</h6>
										</div>
									</div>
								))}
							</>
						)}
					</div>
					{/* total */}
					<div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
						<table className="table table-bordered">
							<tbody>
								<tr>
									<td>
										<strong> Сумма </strong>
									</td>
									<td> {cart.itemsPrice} грн.</td>
								</tr>
								<tr>
									<td>
										<strong> Коммисия </strong>
									</td>
									<td> {cart.taxPrice} грн.</td>
								</tr>
								<tr>
									<td>
										<strong> Всего </strong>
									</td>
									<td> {cart.totalPrice} грн.</td>
								</tr>
							</tbody>
						</table>
						{cart.cartItems.length === 0 ? null : (
							<button type="submit" onClick={placeOrderHandler}>
								Разместить заказ
							</button>
						)}
						{error && (
							<div className="my-3 col-12">
								<Message variant="alert-danger"> {error} </Message>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default PlaceOrderScreen;
