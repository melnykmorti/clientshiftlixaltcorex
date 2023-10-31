import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Orders from "../components/profileComponents/orders";
import { listMyOrders } from "../Redux/Actions/orderActions";

const ExchangeHistory = () => {
	window.scrollTo(0, 0);

	const dispatch = useDispatch();
	const orderListMy = useSelector((state) => state.orderListMy);
	const { loading, error, orders } = orderListMy;

	useEffect(() => {
		dispatch(listMyOrders());
	}, [dispatch]);
	
	return (
		<>
			<div className="container col-md-12 py-5 justify-content-around">
				
					<Orders orders={orders} loading={loading} error={error} />
				
			</div>
		</>
	);
};

export default ExchangeHistory;
