import React, { useState, useEffect } from "react";
import Loading from "../../components/LoadingError/loading";
import uniqid from "uniqid";
const TopMarkets = () => {
	const [data, setData] = useState();
	const setDataHandler = (data) => {
		setData(
			data
				.filter(
					(item) =>
					contains(item.symbol.split("-")[0], [
						"BTC",
						"SHIB",
						"MKR",
						"AAVE",
						"UNI",
						"ZRX",
						"ENS",
						"QNT",
						"COMP",
						"1INCH",
						"SXP",
						"DYDX",
						"SUSHI",
						"YFI",
						"CAKE",
						"ROSE",
						"ETH",
						"MATIC",
						"FTM",
						"ATOM",
						"DOGE",
						"ONT",
						"NEO",
						"BCH",
						"BAT",
						"HOT",
						"LINK",
						"USDT",
						"XRP",
						"TRX",
						"LTC",
						"USDC",
					])&&contains(item.symbol.split("-")[1], [
						"BTC",
						"SHIB",
						"MKR",
						"AAVE",
						"UNI",
						"ZRX",
						"ENS",
						"QNT",
						"COMP",
						"1INCH",
						"SXP",
						"DYDX",
						"SUSHI",
						"YFI",
						"CAKE",
						"ROSE",
						"ETH",
						"MATIC",
						"FTM",
						"ATOM",
						"DOGE",
						"ONT",
						"NEO",
						"BCH",
						"BAT",
						"HOT",
						"LINK",
						"USDT",
						"XRP",
						"TRX",
						"LTC",
						"USDC",
					])
				)
				.sort((a, b) =>
					parseFloat(a.changeRate) < parseFloat(b.changeRate) ? 1 : -1
				)
		);
	};
	async function getData() {
		fetch("http://localhost:5000/api/data")
			.then((response) => response.json())
			.then((json) => {
				setDataHandler(json.data.ticker);
			});
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="page-header__content">
			<div className="page-header__container">
				<h1 className="page-header__heading">Markets </h1>
				<div className="page-header__grid">
					<div className="page-header__item">
						<div className="markets-group">
							<h3 className="markets-group__title">
								<svg
									width="28"
									height="28"
									viewBox="0 0 28 28"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M13.9998 3.75C8.339 3.75 3.75 8.339 3.75 13.9998H1.75C1.75 7.23443 7.23443 1.75 13.9998 1.75C20.7652 1.75 26.2496 7.23443 26.2496 13.9998C26.2496 20.7652 20.7652 26.2496 13.9998 26.2496V24.2496C19.6606 24.2496 24.2496 19.6606 24.2496 13.9998C24.2496 8.339 19.6606 3.75 13.9998 3.75ZM14.0001 9.37511C11.4458 9.37511 9.37517 11.4457 9.37517 14H7.37517C7.37517 10.3412 10.3412 7.37511 14.0001 7.37511C17.6589 7.37511 20.625 10.3412 20.625 14C20.625 17.6588 17.6589 20.6249 14.0001 20.6249V18.6249C16.5543 18.6249 18.625 16.5543 18.625 14C18.625 11.4457 16.5543 9.37511 14.0001 9.37511ZM12.5937 13.9996C12.5937 13.2232 13.2231 12.5938 13.9995 12.5938C14.776 12.5938 15.4054 13.2232 15.4054 13.9996C15.4054 14.7761 14.776 15.4055 13.9995 15.4055C13.2231 15.4055 12.5937 14.7761 12.5937 13.9996Z"
										fill="#01AA78"
										fill-opacity="0.7"
									></path>
									<path
										d="M3 17H11L11 25L3 17Z"
										fill="#01AA78"
										stroke="#01AA78"
										stroke-width="2"
									></path>
								</svg>
								<span>Top Gainers</span>
							</h3>
							<div className="markets-group__grid">
								{data ? (
									data
										.filter((item) => contains(item.symbol.split("-")[1], ["USDT"]))
										.slice(0, 3)
										.map((item) => (
											<div
												className="markets-group__item"
												data-href="/exchange/DYDX-USDT"
												key={uniqid()}
											>
												<div className="market-card market-card_good">
													<div className="market-card__content">
														<span className="market-card__name">
															{item.symbol}
														</span>
														<div className="market-card__price">
															<span className="market-card__value">
																{`${parseFloat(item.high).toFixed(6)}`} USDT
															</span>
															<span className="market-card__percent">{`${
																parseFloat(item.changeRate).toFixed(3) > 0
																	? "+"
																	: ""
															}${(parseFloat(item.changeRate) * 100).toFixed(
																2
															)}%`}</span>
														</div>
														<span className="market-card__volume">
															{numberWithSpaces(item.volValue, 2)}
														</span>
													</div>
												</div>
											</div>
										))
								) : (
									<div
										className="position-absolute"
										style={{ left: 0.5, right: 0.5 }}
									>
										<Loading />
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="page-header__item">
						<div className="markets-group">
							<h3 className="markets-group__title">
								<svg
									width="28"
									height="28"
									viewBox="0 0 28 28"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M13.9998 24.2496C19.6606 24.2496 24.2496 19.6606 24.2496 13.9998H26.2496C26.2496 20.7652 20.7652 26.2496 13.9998 26.2496C7.23442 26.2496 1.75 20.7652 1.75 13.9998C1.75 7.23443 7.23443 1.75 13.9998 1.75V3.75C8.33899 3.75 3.75 8.33899 3.75 13.9998C3.75 19.6606 8.33899 24.2496 13.9998 24.2496ZM13.9996 18.6245C16.5539 18.6245 18.6245 16.5539 18.6245 13.9996L20.6245 13.9996C20.6245 17.6584 17.6584 20.6245 13.9996 20.6245C10.3408 20.6245 7.37469 17.6584 7.37469 13.9996C7.37469 10.3408 10.3408 7.37469 13.9996 7.37469L13.9996 9.37469C11.4453 9.37469 9.37469 11.4453 9.37469 13.9996C9.37469 16.5539 11.4453 18.6245 13.9996 18.6245ZM15.406 14C15.406 14.7764 14.7766 15.4059 14.0001 15.4059C13.2237 15.4059 12.5943 14.7764 12.5943 14C12.5943 13.2236 13.2237 12.5941 14.0001 12.5941C14.7766 12.5941 15.406 13.2236 15.406 14Z"
										fill="#E25050"
										fill-opacity="0.7"
									></path>
									<path
										d="M25 10.9996L17 10.9996L17 2.99963L25 10.9996Z"
										fill="#E25050"
										stroke="#E25050"
										stroke-width="2"
									></path>
								</svg>
								<span>Top Losers</span>
							</h3>
							<div className="markets-group__grid">
								{data ? (
									getGainers(data).map((item) => (
										<div className="markets-group__item">
											<div className="market-card market-card_bad">
												<div className="market-card__content">
													<span className="market-card__name">
														{item.symbol}
													</span>
													<div className="market-card__price">
														<span className="market-card__value">
															{`${parseFloat(item.high).toFixed(6)}`} USDT
														</span>
														<span className="market-card__percent">
															{`${
																parseFloat(item.changeRate).toFixed(3) > 0
																	? "+"
																	: ""
															}${(parseFloat(item.changeRate) * 100).toFixed(
																2
															)}%`}
														</span>
													</div>
													<span className="market-card__volume">
														Volume: {numberWithSpaces(item.volValue, 2)}
													</span>
												</div>
											</div>
										</div>
									))
								) : (
									<div
										className="position-absolute"
										style={{ left: 0.5, right: 0.5 }}
									>
										<Loading />
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopMarkets;

function numberWithSpaces(x, cut) {
	var parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	parts[1] = parts[1] ? parts[1].substring(0, cut) : null;
	return parts.join(".");
}



function contains(target, pattern) {
	var value = 0;
	//console.log(target);
	pattern.forEach(function (word) {
		
		if( target.toLowerCase()==word.toLowerCase()){
			value=value+true
		}
		//value = value + target.toLowerCase().includes(word.toLowerCase());
	});

	return value === 1;
}

const getGainers = (data, start, end) => {
	let temp;
	if (start && end) {
		temp = data
			.filter((item) => contains(item.symbol.split("-")[1], ["USDT"]))
			.slice(start, end);
	} else {
		temp = data.filter((item) => contains(item.symbol.split("-")[1], ["ETH"]));
		temp = temp.slice(temp.length - 3, temp.length).reverse();
	}
	return temp;
};
