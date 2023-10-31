import React, { useEffect } from "react";


import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../Redux/Actions/orderActions";
import Loading from "../components/LoadingError/loading";
import Message from "../components/LoadingError/error";


import { ORDER_PAY_RESET } from "../Redux/Constants/orderConstants";

const PayScreen = ({ match }) => {
	window.scrollTo(0, 0);
	
	const orderId = match.params.id;
	const dispatch = useDispatch();

	const orderDetails = useSelector((state) => state.orderDetails);
	const { order, loading, error } = orderDetails;
	
	

	if (!loading) {
	}
	
	useEffect(() => {
		
		if (!order) {
			dispatch({ type: ORDER_PAY_RESET });
			dispatch(getOrderDetails(orderId)).then();
		} 
	}, [dispatch, orderId, order]);
	
	
	
	


	return (
		<>
			
			<div
				className="py-sm-5 p-0"
				style={{ backgroundColor: "#eeeeee" }}
			>
				{loading ? (
					<Loading />
				) : error ? (
					<Message variant="alert-danger"> {error} </Message>
				) : (
					
					<div
						className="col-md-7 mx-auto py-4 px-5"
						style={{ backgroundColor: "white" }}
					>
						<Helmet><title> Waiting for Payment #{order._id} CrossCourse</title></Helmet>
						<div className="inner-box">
							<h2 className="title-2">Order ID: <p style={{overflowWrap:"anywhere"}}>{order._id}</p></h2>
							<div className="d-flex flex-column text-center align-items-center">
                                                                <img src={`.${order.imageSend}`} width="72px"alt={order.titleSend}/>
                                                                <p >Pay {order.sendCount} <span className="fw-bold">{order.symbolSend}{" "}</span>to </p>
								<img src={order.imageQRWallet} className="mt-3" alt={order.titleReceive}/>
                                                                <p className="mt-4" style={{overflowWrap:"anywhere"}}>{order.wallet}</p>
								<p className="mt-2"><img src="../images/waiting.gif" alt="wayting for payment"className="img-fluid waiting-gif"/>{"  "}Awaiting payment...</p>
                                                        </div>
						</div>
					</div>
				)}
				<p className="text-center mt-2">Note: After confirming the payment, you will receive an email with a recepient to the specified mail. You can also see the payment status on the screen.</p>
			</div>
					
		</>
	);
};

export default PayScreen;
