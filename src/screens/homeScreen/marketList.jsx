import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../components/LoadingError/loading";
import uniqid from "uniqid";
import { useInterval } from "../../components/utils";
import { get } from "mobx";
const MarketList = () => {
	const [data, setData] = useState();
	const [error, setError] = useState("");
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
						]) &&
						contains(item.symbol.split("-")[1], [
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
				.sort((a, b) => (parseInt(a.volValue) < parseInt(b.volValue) ? 1 : -1))
		);
	};
	async function getData() {
		fetch("http://localhost:5000/api/data")
			.then((response) => response.json())
			.then((json) => {
				setDataHandler(json.data.ticker);
			})
			.catch((error) => {
				setError(error);
			});
	}
	useInterval(getData, 1000 * 3);

	console.log(data);
	return (
		<div className="markets-list">
			<div className="markets-list__content">
				<div className="markets-list__viewport">
					<div className="markets-list__table">
						<table className="table-view">
							<thead className="table-view__header">
								<tr className="table-view__row">
									<th className="table-view__item">Name</th>
									<th className="table-view__item">Last Price</th>
									<th className="table-view__item">Change 24H</th>
									<th className="table-view__item">Volume 24H</th>
									<th className="table-view__item">Low 24H</th>
									<th className="table-view__item">High 24H</th>
								</tr>
							</thead>

							<tbody
								className={`table-view__content ${data ? "" : "d-block"}`}
								style={{ minHeight: "5rem" }}
							>
								{data && !error ? (
									data.slice(0, 10).map((item) => (
										<tr
											key={uniqid()}
											className="table-view__row"
											data-href="/exchange/BTC-USDT"
										>
											<th className="table-view__item">
												<div className="table-view-trading-couple">
													<div className="table-view-trading-couple__first">
														<img
															src={`https://bnax.com/static/images/tickers/PNG/${item.symbol
																.split("-")[0]
																.toUpperCase()}.png`}
															alt="Bitcoin"
															title="Bitcoin"
														/>
													</div>
													<div className="table-view-trading-couple__second">
														<img
															src={`https://bnax.com/static/images/tickers/PNG/${item.symbol
																.split("-")[1]
																.toUpperCase()}.png`}
															alt="Tether"
															title="Tether"
														/>
													</div>
													<span className="table-view-trading-couple__label">
														{item.symbol}
													</span>
												</div>
											</th>
											<th className="table-view__item">
												<div
													className={`table-view-change ${
														parseFloat(item.changeRate).toFixed(3) > 0
															? "table-view-change_variant_green"
															: "table-view-change_variant_red"
													}`}
												>
													<span className="table-view-change__text">
														{numberWithSpaces(item.high, 12)}
													</span>
												</div>
											</th>
											<th className="table-view__item">
												<span
													className={`table-view__text ${
														parseFloat(item.changeRate).toFixed(3) > 0
															? "table-view__text_green"
															: "table-view__text_red"
													}`}
												>
													{`${
														parseFloat(item.changeRate).toFixed(3) > 0
															? "+"
															: ""
													}${parseFloat(item.changeRate).toFixed(3)}%`}
												</span>
											</th>
											<th className="table-view__item">
												<span className="table-view__text">
													${numberWithSpaces(item.volValue, 2)}
												</span>
											</th>
											<th className="table-view__item">
												<span className="table-view__text">
													{numberWithSpaces(item.low, 12)}
												</span>
											</th>
											<th className="table-view__item">
												<span className="table-view__text">
													{numberWithSpaces(item.high, 12)}
												</span>
											</th>
										</tr>
									))
								) : (
									<div
										className="position-absolute"
										style={{ left: 0.5, right: 0.5 }}
									>
										<Loading />
									</div>
								)}
							</tbody>
						</table>
					</div>
				</div>
				<a className="markets-list__action" href="/markets">
					Show all Markets
				</a>
			</div>
		</div>
	);
};
export default MarketList;

function numberWithSpaces(x, cut) {
	var parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	parts[1] = parts[1] ? parts[1].substring(0, cut) : null;
	if (parts[1] == null) return parts[0];
	return parts.join(".");
}

function contains(target, pattern) {
	var value = 0;
	pattern.forEach(function (word) {
		value = value + target.includes(word);
	});
	return value === 1;
}
