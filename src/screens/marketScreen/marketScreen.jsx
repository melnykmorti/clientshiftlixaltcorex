import React from "react";
import MarketList from "./marketList";
import TopMarkets from "./topMarkets";
import CallBack from "../callBack";
import Header from "../../components/header";
import Footer from "../../components/footer"
const MarketScreen = ({ match }) => {
	window.scrollTo(0, 0);

	return (
		<div className="page page_layout_markets">
			<Header />
			<TopMarkets />
			<MarketList />

			<CallBack />
		</div>
	);
};

export default MarketScreen;
