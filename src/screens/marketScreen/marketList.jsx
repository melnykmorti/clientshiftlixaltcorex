import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../components/LoadingError/loading";
import uniqid from "uniqid";
import { useInterval } from "../../components/utils";
const MarketList = () => {
	const choose = ["USDT", "USDC", "BTC", "ETH"];
	const [variant, setVariant] = useState(choose[0]);
	const [data, setData] = useState();
	const [search, setSearch] = useState("");
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
					])&& !contains(item.symbol.toLowerCase(),["3","2","BCHSV","WBTC"])
				)
				.sort((a, b) => (parseInt(a.volValue) < parseInt(b.volValue) ? 1 : -1))
		);
	};
	async function getData() {
		fetch("http://localhost:5000/api/data")
			.then((response) => response.json())
			.then((json) => {
				setDataHandler(json.data.ticker);
			});
	}

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
	console.log(variant);
	console.log(search, search ? search : null);
	
	console.log(search);
	return (
		<div class="page__container">
			<main class="page__content" role="main">
				<div class="page__header">
					<div class="section-selector">
						<div class="section-selector__tabs">
							{choose.map((item) => (
								<button
									class={`section-selector__tab ${
										variant == item ? "section-selector__tab_current" : ""
									}`}
									type="button"
									onClick={() => setVariant(item)}
								>
									{item}
								</button>
							))}
						</div>
					</div>
					<label class="search">
						<input
							class="search__field"
							type="text"
							id="marketSearch"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<div class="search__placeholder">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.2426 13.2426C10.8995 15.5858 7.1005 15.5858 4.75736 13.2426C2.41421 10.8995 2.41421 7.1005 4.75736 4.75736C7.1005 2.41421 10.8995 2.41421 13.2426 4.75736C15.5858 7.1005 15.5858 10.8995 13.2426 13.2426ZM13.2426 13.2426L17 17"
									stroke="#0A0F38"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</svg>
							<span class="search__placeholder-text">Search coin name</span>
						</div>
					</label>
				</div>
				<div class="page__table">
					<table class="table-view" cellpadding="0" data-key="USDT">
						<thead class="table-view__header">
							<tr class="table-view__row">
								<th class="table-view__item" style={{ width: "20px" }}>
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10 3.19213L12.0678 6.7423L12.2009 6.97078L12.4593 7.02673L16.4747 7.89625L13.7372 10.9599L13.5611 11.1571L13.5877 11.4201L14.0016 15.5077L10.2419 13.8509L10 13.7443L9.75805 13.8509L5.99844 15.5077L6.4123 11.4201L6.43893 11.1571L6.26277 10.9599L3.52533 7.89625L7.54073 7.02673L7.79914 6.97078L7.93221 6.7423L10 3.19213Z"
											stroke="#0A0F38"
											stroke-opacity="0.2"
											stroke-width="1.2"
										></path>
									</svg>
								</th>
								<th class="table-view__item">Pair </th>
								<th class="table-view__item">Last Price </th>
								<th class="table-view__item">Change 24H </th>
								<th class="table-view__item">Low 24H </th>
								<th class="table-view__item">High 24H </th>
								<th class="table-view__item">Volume 24H </th>
							</tr>
						</thead>
						<tbody class="table-view__content">
							{data && search
								? data
										.filter(
											(item) =>
												contains(item.symbol.toLowerCase(), [
													search.toLowerCase(),
												]) &&
												contains(item.symbol.toLowerCase(), [
													variant.toLowerCase(),
												])
										)
										.slice(0, 20)
										.map((item) => (
											<tr
												class="table-view__row"
												
												key={uniqid()}
												value={search}
											>
												<th class="table-view__item">
													<button class="table-view__favorite" type="button">
														<svg
															width="20"
															height="20"
															viewBox="0 0 20 20"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M10 3.19213L12.0678 6.7423L12.2009 6.97078L12.4593 7.02673L16.4747 7.89625L13.7372 10.9599L13.5611 11.1571L13.5877 11.4201L14.0016 15.5077L10.2419 13.8509L10 13.7443L9.75805 13.8509L5.99844 15.5077L6.4123 11.4201L6.43893 11.1571L6.26277 10.9599L3.52533 7.89625L7.54073 7.02673L7.79914 6.97078L7.93221 6.7423L10 3.19213Z"
																stroke-width="1.2"
															></path>
														</svg>
													</button>
												</th>
												<th class="table-view__item">
													<div class="table-view__pair">
														<span class="table-view__label">
															<span>{item.symbol.split("-")[0]}</span> /
															{item.symbol.split("-")[1]}
														</span>
													</div>
												</th>
												<th class="table-view__item">
													<div class="table-view-change table-view-change_variant_green">
														<span class="table-view-change__text">
															{numberWithSpaces(item.high, 12)}
														</span>
													</div>
													<span class="table-view__text">
														{numberWithSpaces(item.last, 12)}
													</span>
												</th>
												<th class="table-view__item">
													<span
														class={`table-view__text ${
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
												<th class="table-view__item">
													<span class="table-view__text">
														{numberWithSpaces(item.low, 12)}
													</span>
												</th>
												<th class="table-view__item">
													<span class="table-view__text">
														{numberWithSpaces(item.high, 12)}
													</span>
												</th>
												<th class="table-view__item">
													<span class="table-view__text">
														${numberWithSpaces(item.volValue, 2)}
													</span>
												</th>
											</tr>
										))
								: data
								? data
										.filter((item) =>
											contains(item.symbol.split("-")[1].toLowerCase(), [
												variant.toLowerCase()
												
											])
										)
										.slice(0, 20)
										.map((item) => (
											<tr
												class="table-view__row"
												
												key={uniqid()}
												value={search}
											>
												<th class="table-view__item">
													<button class="table-view__favorite" type="button">
														<svg
															width="20"
															height="20"
															viewBox="0 0 20 20"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M10 3.19213L12.0678 6.7423L12.2009 6.97078L12.4593 7.02673L16.4747 7.89625L13.7372 10.9599L13.5611 11.1571L13.5877 11.4201L14.0016 15.5077L10.2419 13.8509L10 13.7443L9.75805 13.8509L5.99844 15.5077L6.4123 11.4201L6.43893 11.1571L6.26277 10.9599L3.52533 7.89625L7.54073 7.02673L7.79914 6.97078L7.93221 6.7423L10 3.19213Z"
																stroke-width="1.2"
															></path>
														</svg>
													</button>
												</th>
												<th class="table-view__item">
													<div class="table-view__pair">
														<span class="table-view__label">
															<span>{item.symbol.split("-")[0]}</span> /
															{item.symbol.split("-")[1]}
														</span>
													</div>
												</th>
												<th class="table-view__item">
													<div class="table-view-change table-view-change_variant_green">
														<span class="table-view-change__text">
															{numberWithSpaces(item.high, 12)}
														</span>
													</div>
													<span class="table-view__text">
														{numberWithSpaces(item.last, 12)}
													</span>
												</th>
												<th class="table-view__item">
													<span
														class={`table-view__text ${
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
												<th class="table-view__item">
													<span class="table-view__text">
														{numberWithSpaces(item.low, 12)}
													</span>
												</th>
												<th class="table-view__item">
													<span class="table-view__text">
														{numberWithSpaces(item.high, 12)}
													</span>
												</th>
												<th class="table-view__item">
													<span class="table-view__text">
														${numberWithSpaces(item.volValue, 2)}
													</span>
												</th>
											</tr>
										))
								: null}
						</tbody>
					</table>
				</div>
			</main>
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
		value = value + target.toLowerCase().includes(word.toLowerCase());
	});

	return value === 1;
}
