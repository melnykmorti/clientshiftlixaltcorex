import React, { useState } from "react";
import TradingViewWidget from "react-tradingview-widget";
//import "../Exchange.css";
import { useInterval } from "../components/utils";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import iconSet from "../selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import moment from "moment";
import { listMyOrders } from "../Redux/Actions/orderActions";
import { getUserDetails } from "../Redux/Actions/userActions";
import { createTrade, listMyTrade } from "../Redux/Actions/tradeActions";
import { useEffect } from "react";
import { createTransfer } from "../Redux/Actions/withdrawActions";
import classnames from "classnames";

import Toast from "../components/LoadingError/toast";
import { toast } from "react-toastify";
const Exchange = ({ match }) => {
	const variants = ["USDT", "BTC", "ETH"];
	const [valueBuy, setValueBuy] = useState(0);
	const [orderOpen, setOrderOpen] = useState("Open");
	const [valueSell, setValueSell] = useState(0);
	const [walletChoosenFirst, setWalletChoosenFirst] = useState("Funding");
	const [walletChoosenSecond, setWalletChoosenSecond] = useState("Spot");
	const [priceBuy, setPriceBuy] = useState(-1);
	const [amountTransfer, setAmountTransfer] = useState();
	const [priceSell, setPriceSell] = useState(-1);
	const [popupOpen, setPopupOpen] = useState(false);
	const [popupBuyOpen, setPopupBuyOpen] = useState(false);
	const [popupSellOpen, setPopupSellOpen] = useState(false);
	const [popupTransferOpen, setPopupTransferOpen] = useState(false);
	const [popUpMarketBuy, setPopUpMarketBuy] = useState("Market");
	const [popUpMarketSell, setPopUpMarketSell] = useState("Market");
	const [buyMethod, setBuyMethod] = useState("Market");
	const [variant, setVariant] = useState("USDT");
	const [fromTransferOpen, setFromTransferOpen] = useState(false);
	const [toTransferOpen, setToTransferOpen] = useState(false);
	const [buyRatio, setBuyRatio] = useState(0);
	const [sellRatio, setSellRatio] = useState(0);
	const firstSymbol = match.params.symbol.split("-")[0];
	const secondSymbol = match.params.symbol.split("-")[1];
	const [timer, setTimer] = useState(0);
	const [search, setSearch] = useState("");
	const dispatch = useDispatch();
	const [data, setData] = useState();
	const [tickersData, setTickers] = useState();
	const [open, setOpen] = useState(false);
	const [dataOrder, setDataorder] = useState();
	const [dataTrade, setDataTrade] = useState();
	const [errorData, setError] = useState("");
	const userDetails = useSelector((state) => state.userDetails);
	const { user, loadingUser } = userDetails;
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const tradeCreate = useSelector((state) => state.tradeCreate);
	const { successTradeCreate, loadingCreate, errorOrderCreate } = tradeCreate;
	const tradeList = useSelector((state) => state.tradeListMy);
	const { loadingUserTrade, userTrade, errorUserTrade } = tradeList;
	const transferCreate = useSelector((state) => state.transferCreate);
	const { successTransferCreate, loadingTransferCreate, errorTransferCreate } =
		transferCreate;
	const Toastobjects = {
		pauseOnFocusLoss: false,
		draggable: false,
		pauseOnHover: false,
		autoClose: 100000,
	};
	const toastId = React.useRef(null);
	async function getData() {
		fetch(`http://localhost:5000/api/stats/${match.params.symbol}`)
			.then((response) => response.json())
			.then((json) => {
				if (priceBuy == -1 || priceSell == -1) {
					setPriceBuy(parseFloat(json.data.last));
					setPriceSell(parseFloat(json.data.last));
				}
				setData(json);
			})
			.catch((error) => {
				setError(error);
			});
		dispatch(listMyTrade(match.params.symbol, "Reload"));
	}
	async function getDataOrder() {
		fetch(`http://localhost:5000/api/orderbook/${match.params.symbol}`)
			.then((response) => response.json())
			.then((json) => {
				if (json.code == "200000") {
					setDataorder({ newState: json, lastState: json });
				} else {
					setDataorder({ newState: json, lastState: dataOrder.lastState });
				}
			})
			.catch((error) => {
				setError(error);
			});
	}
	async function getDataTrade() {
		fetch(`http://localhost:5000/api/tradehistory/${match.params.symbol}`)
			.then((response) => response.json())
			.then((json) => {
				if (json.code == "200000") {
					setDataTrade({ newState: json, lastState: json });
				} else {
					setDataTrade({ newState: json, lastState: dataTrade.lastState });
				}
			})
			.catch((error) => {
				setError(error);
			});
	}
	async function getDataTickers() {
		fetch("http://localhost:5000/api/data")
			.then((response) => response.json())
			.then((json) => {
				setDataHandler(json.data.ticker);
			})
			.catch((error) => {
				setError(error);
			});
	}
	useInterval(getData, 1000 * 1);
	useInterval(getDataOrder, 1000 * 0.4);
	useInterval(getDataTrade, 1000 * 0.25);

	useEffect(() => {
		dispatch(getUserDetails("profile"));
		getDataTickers();
		dispatch(listMyTrade(match.params.symbol, "Take"));
	}, [dispatch]);

	useEffect(() => {
		dispatch(getUserDetails("profile"));
		dispatch(listMyTrade(match.params.symbol, "Take"));
	}, [tradeCreate]);
	useEffect(() => {
		if (successTransferCreate) {
			if (!toast.isActive(toastId.current)) {
				toastId.current = toast.success("Transfer successed", Toastobjects);
			}
		} else if (errorTransferCreate) {
			if (!toast.isActive(toastId.current)) {
				toastId.current = toast.error(errorOrderCreate, Toastobjects);
			}
		}

		dispatch(getUserDetails("profile"));
	}, [dispatch, transferCreate]);

	const changeRatio = (type, value,side) => {
		console.log( value);
		setBuyRatio(parseFloat(value));
		if (type == "limit") {
			// setValueBuy(
			// 	(value / 100) *
			// 		user.walletsSpot
			// 			.find((item) => item.type == secondSymbol)
			// 			.avaliable.toFixed(8)
			// );
			if(side=="buy"){
				setValueBuy(parseFloat((buyRatio/100 * user.walletsSpot.find((item)=>item.type==secondSymbol).avaliable/priceBuy).toFixed(8)))
			}
		}
		
		
	};

	const changePrice=(value,side)=>{
		console.log(typeof priceBuy, typeof value);
		if(side=="buy"){
			setPriceBuy(parseFloat(value));
			var temp=parseFloat(value)* valueBuy / user.walletsSpot.find((item)=>item.type==secondSymbol).avaliable*100
			setBuyRatio(temp>100?100:temp);
			// changeRatio("limit", priceBuy* valueBuy / user.walletsSpot.find((item)=>item.type==secondSymbol).avaliable*100,"buy")
			
		}
		console.log('change price');

	}
	
	const setDataHandler = (data) => {
		setTickers(
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
						]) &&
						!contains(item.symbol.toLowerCase(), [
							"3",
							"2",
							"BCHSV",
							"WBTC",
							"HOTCROSS",
							"UNIC",
							"SENSO",
							"RBTC",
							"ETHO",
							"FRONT",
							"GENS",
						])
				)
				.sort((a, b) => (parseInt(a.volValue) < parseInt(b.volValue) ? 1 : -1))
		);
	};
	
	const submitHandler = (e, side, priceSide, valueSide, symbolCheck) => {
		e.preventDefault();
		
		if (valueSide) {
			if (
				user.walletsSpot
					.find((item) => item.type == symbolCheck)
					.avaliable.toFixed(8) >= parseFloat(valueSide)
			) {
				let avarageAsks = 0;
				for (let i = 0; i < dataOrder.newState.data.asks.length; i++) {
					avarageAsks += parseFloat(dataOrder.newState.data.asks[0][0]);
				}
				avarageAsks /= dataOrder.newState.data.asks.length;

				let avarageBids = 0;
				for (let i = 0; i < dataOrder.newState.data.bids.length; i++) {
					avarageBids += parseFloat(dataOrder.newState.data.bids[0][0]);
				}
				avarageBids /= dataOrder.newState.data.bids.length;

				dispatch(
					createTrade({
						amount: parseFloat(valueSide),
						price: parseFloat(priceSide),
						pair: match.params.symbol,
						side: side,
						avarage: (avarageAsks + avarageBids) / 2,
					})
				);
				
			} else {
				
			}
		} else {
			
		}
	};
	const submitTransferHandler = (e) => {
		e.preventDefault();

		if (amountTransfer) {
			if (
				parseFloat(
					user.walletsSpot
						.find((item) => item.type == firstSymbol)
						.avaliable.toFixed(8)
				) >= parseFloat(amountTransfer) &&
				walletChoosenFirst == "Spot"
			) {
				dispatch(
					createTransfer({
						amount: parseFloat(amountTransfer),
						symbol: firstSymbol,
						from: walletChoosenFirst,
						to: walletChoosenSecond,
					})
				);
				
			} else if (
				parseFloat(
					user.walletsFunding
						.find((item) => item.type == firstSymbol)
						.avaliable.toFixed(8)
				) >= parseFloat(amountTransfer) &&
				walletChoosenFirst == "Funding"
			) {
				dispatch(
					createTransfer({
						amount: parseFloat(amountTransfer),
						symbol: firstSymbol,
						from: walletChoosenFirst,
						to: walletChoosenSecond,
					})
				);
				
			} else {
				
			}
		}
		
	};
	return (
		<div className="page page_layout_exchange">
			<Toast />
			<div className="page__header">
				<header className="header">
					<a className="header__logo" href="/">
						<img
							src="https://bnax.com/static/images/logo-white.svg"
							alt="BNAX Global"
						/>
					</a>
					<nav className="header__menu">
						<a className="header__link" href="/exchange/BTC-USDT">
							Exchange
						</a>
						<a className="header__link" href="/markets">
							Market
						</a>
						<a className="header__link" href="/news/blog">
							News
						</a>
						<a className="header__link" href="https://bnax.zendesk.com/">
							Support
						</a>
						<a className="header__link" href="/buycoin">
							Buy crypto
						</a>
						<a className="header__link" href="/rewards">
							Rewards
						</a>
					</nav>
					{userInfo ? (
						<div className="dashboard_header__profile">
							<nav className="dashboard_header__menu">
								<a
									className="dashboard_header__menu_link"
									href="/dashboard/transactions"
								>
									Transactions
								</a>
								<a
									className="dashboard_header__menu_link"
									href="/dashboard/orders"
								>
									Orders
								</a>
								<a
									className="dashboard_header__menu_link"
									href="/dashboard/wallets"
								>
									Assets
								</a>
							</nav>
							<a href="/dashboard">
								<img
									src="https://bnax.com/static/images/avatar-placeholder.png"
									className="dashboard_header__avatar"
									alt="User #2294632789"
									title="User #2294632789"
								/>
							</a>
						</div>
					) : (
						<div class="header__auth">
							<a
								class="button button_style_clean button_size_medium"
								href="/signin"
							>
								Login
							</a>
							<a
								class="button button_style_primary button_size_medium"
								href="/signup"
							>
								Get started
							</a>
						</div>
					)}

					<div className="header__hamburger">
						<button className="hamburger" type="button">
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
					<nav className="adaptive_header__menu">
						<a className="adaptive_header__link" href="/exchange/BTC-USDT">
							Exchange
						</a>
						<a className="adaptive_header__link" href="/markets">
							Market
						</a>
						<a className="adaptive_header__link" href="/news/blog">
							News
						</a>
						<a
							className="adaptive_header__link"
							href="https://bnax.zendesk.com/"
						>
							Support
						</a>
						<a className="adaptive_header__link" href="/buycoin">
							Buy crypto
						</a>
						<a className="adaptive_header__link" href="/rewards">
							Rewards
						</a>
						<a className="adaptive_header__link" href="/dashboard/transactions">
							Transactions
						</a>
						<a className="adaptive_header__link" href="/dashboard/orders">
							Orders
						</a>
						<a className="adaptive_header__link" href="/dashboard/wallets">
							Assets
						</a>
					</nav>
				</header>
			</div>
			<div className="page__bunch">
				<div className="page__market">
					<div className="market-list">
						<div className="market-list__header">
							<div className="market-list__current-currency">
								<div className="market-item">
									<img
										className="market-item__image lazyload"
										src={`https://bnax.com/static/images/tickers/PNG/${firstSymbol}.png`}
										alt=""
										role="presentation"
									/>
									<span className="market-item__name">
										<span className="first_ticker_name">{firstSymbol}</span> /
										<span className="second_ticker_name">{secondSymbol}</span>
									</span>
								</div>
							</div>
							<button
								className="market-list__button"
								type="button"
								onClick={() => setOpen(!open)}
							>
								<span>Market</span>
								{open ? (
									<IcomoonReact
										iconSet={iconSet}
										size={12}
										color="#697d94"
										icon="chevron-thin-down"
										style={{ marginLeft: "0.4rem" }}
									/>
								) : (
									<IcomoonReact
										iconSet={iconSet}
										size={12}
										color="#697d94"
										icon="chevron-thin-up"
										style={{ marginLeft: "0.4rem" }}
									/>
								)}
							</button>
						</div>
						<div
							className={`market-list__body ${
								open ? "" : "market-list__body_invisible"
							}`}
						>
							<div className="market-list__search-wrapper">
								<IcomoonReact
									iconSet={iconSet}
									size={12}
									color="#697d94"
									icon="search"
								/>
								<input
									className="market-list__search"
									type="text"
									placeholder="Search"
									value={search}
									onChange={(e) => setSearch(e.target.value)}
								/>
							</div>
							<div className="market-list__tabs">
								{variants.map((item) => (
									<button
										className={`market-list__tab ${
											variant == item ? "market-list__tab_selected" : ""
										}`}
										type="button"
										onClick={() => setVariant(item)}
									>
										{item}
									</button>
								))}
							</div>
							<div className="market-list__render">
								<div className="market-list__content">
									{tickersData && search
										? tickersData
												.filter(
													(item) =>
														contains(item.symbol.toLowerCase(), [
															search.toLowerCase(),
														]) &&
														contains(item.symbol.toLowerCase(), [
															variant.toLowerCase(),
														])
												)
												.map((item) => (
													<a
														className="market-list__bunch"
														href={`/exchange/${item.symbol}`}
													>
														<div className="market-list__currency">
															<div className="market-item">
																<img
																	className="market-item__image lazyload"
																	src={`https://bnax.com/static/images/tickers/PNG/${
																		item.symbol.split("-")[0]
																	}.png`}
																	alt=""
																	role="presentation"
																/>
																<span className="market-item__name">
																	{item.symbol.split("-")[0]} /{" "}
																	{item.symbol.split("-")[1]}
																</span>
															</div>
														</div>
														<div className="market-list__section">
															<span
																className={`market-list__value ${
																	parseFloat(item.changeRate) >= 0
																		? "market-list__value_green"
																		: "market-list__value_red"
																}`}
															>
																{parseFloat(item.changeRate) >= 0 ? "+" : ""}
																{item.changeRate}%
															</span>
															<span className="market-list__label">
																24h Change
															</span>
														</div>
														<div className="market-list__section">
															<span className="market-list__value">
																{item.last}
															</span>
															<span className="market-list__label">
																Last price
															</span>
														</div>
													</a>
												))
										: tickersData
										? tickersData
												.filter((item) =>
													contains(item.symbol.split("-")[1].toLowerCase(), [
														variant.toLowerCase(),
													])
												)
												.map((item) => (
													<a
														className="market-list__bunch"
														href={`/exchange/${item.symbol}`}
													>
														<div className="market-list__currency">
															<div className="market-item">
																<img
																	className="market-item__image lazyload"
																	src={`https://bnax.com/static/images/tickers/PNG/${
																		item.symbol.split("-")[0]
																	}.png`}
																	alt=""
																	role="presentation"
																/>
																<span className="market-item__name">
																	{item.symbol.split("-")[0]} /{" "}
																	{item.symbol.split("-")[1]}
																</span>
															</div>
														</div>
														<div className="market-list__section">
															<span
																className={`market-list__value ${
																	parseFloat(item.changeRate) >= 0
																		? "market-list__value_green"
																		: "market-list__value_red"
																}`}
															>
																{parseFloat(item.changeRate) >= 0 ? "+" : ""}
																{item.changeRate}%
															</span>
															<span className="market-list__label">
																24h Change
															</span>
														</div>
														<div className="market-list__section">
															<span className="market-list__value">
																{item.last}
															</span>
															<span className="market-list__label">
																Last price
															</span>
														</div>
													</a>
												))
										: null}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="page__information">
					<div className="bunch-information">
						<div className="bunch-information__item">
							<span className="bunch-information__value">
								<el className="last_price">
									{dataTrade && typeof dataTrade.newState.data != "undefined"
										? dataTrade.newState.data[0].price
										: null}
								</el>
								<span>
									≈$
									<span className="rated_last_price">
										{dataTrade && typeof dataTrade.newState.data != "undefined"
											? dataTrade.newState.data[0].price
											: null}
									</span>
								</span>
							</span>
							<span className="bunch-information__label">Last price</span>
						</div>

						<div className="bunch-information__item">
							{data && typeof data.data != "undefined" ? (
								<React.Fragment>
									<span
										className={`bunch-information__value pair_change ${
											parseFloat(data.data.changeRate) >= 0
												? "bunch-information__value_green"
												: "bunch-information__value_red"
										}`}
									>
										{parseFloat(data.data.changeRate) >= 0 ? "+" : ""}
										{data.data.changeRate}%
									</span>
									<span className="bunch-information__label">24H price</span>
								</React.Fragment>
							) : null}
						</div>
						<div className="bunch-information__item">
							<span className="bunch-information__value high_price">
								{data && typeof data.data != "undefined"
									? numberWithSpaces(data.data.high)
									: null}
							</span>
							<span className="bunch-information__label">24H High</span>
						</div>
						<div className="bunch-information__item">
							<span className="bunch-information__value low_price">
								{data && typeof data.data != "undefined"
									? numberWithSpaces(data.data.low)
									: null}
							</span>
							<span className="bunch-information__label">24H Low</span>
						</div>
						<div className="bunch-information__item">
							<span className="bunch-information__value pair_volume">
								{data && typeof data.data != "undefined"
									? numberWithSpaces(data.data.volValue, 2)
									: null}
							</span>
							<span className="bunch-information__label">24H Volume</span>
						</div>
					</div>
				</div>
			</div>
			<div className="page__content">
				<div className="page__left">
					<div className="page__chart" id="chart">
						<TradingViewWidget
							autosize
							symbol={`KUCOIN:${match.params.symbol.split("-")[0]}${
								match.params.symbol.split("-")[1]
							}`}
							timezone="Etc/UTC"
							theme="dark"
							style="1"
							locale="en"
							toolbar_bg="#f1f3f6"
							interval="D"
							hide_side_toolbar={false}
							save_image={false}
						/>
					</div>
					<div className="page__order-history">
						<div className="order-history">
							<div className="order-history__tabs">
								<button
									className={`order-history__tab ${
										orderOpen == "Open" ? "order-history__tab_selected" : ""
									}`}
									type="button"
									target-id="tab-history-open-orders"
									onClick={() => setOrderOpen("Open")}
								>
									Open Orders
								</button>
								<button
									className={`order-history__tab ${
										orderOpen == "History" ? "order-history__tab_selected" : ""
									}`}
									type="button"
									target-id="tab-history-order-history"
									onClick={() => setOrderOpen("History")}
								>
									Order History
								</button>
							</div>
							<div className="order-history__overflow">
								<div className="order-history__render">
									<div
										className={`order-history__content ${
											orderOpen == "Open"
												? ""
												: "order-history__content_invisible"
										}`}
										id="tab-history-open-orders"
									>
										<table className="order-history__table">
											<thead>
												<tr>
													<th>Side </th>
													<th>Pair </th>
													<th>AVG </th>
													<th>Price </th>
													<th>Amount </th>
													<th>Executed </th>
													<th>Date </th>
													<th>Actions </th>
												</tr>
											</thead>

											<tbody>
												{!loadingUserTrade && userInfo
													? userTrade
															.filter((a) => a.open == true)
															.map((item) => (
																<tr className="order-history__row">
																	<th className="order-history__item">
																		<span className="order-history__text">
																			{item.side}
																		</span>
																	</th>
																	<th className="order-history__item">
																		<span className="order-history__text">
																			{item.pair}
																		</span>
																	</th>
																	<th className="order-history__item">
																		<span className="order-history__text">
																			{item.avarage}
																		</span>
																	</th>
																	<th className="order-history__item">
																		<span className="order-history__text">
																			{item.price}
																		</span>
																	</th>
																	<th className="order-history__item">
																		<span className="order-history__text">
																			{item.amount}
																		</span>
																	</th>
																	<th className="order-history__item">
																		<span className="order-history__text">
																			{item.executed.toFixed(2)}%
																		</span>
																	</th>
																	<th className="order-history__item">
																		<span className="order-history__text">
																			{item.date}
																		</span>
																	</th>
																	<th className="order-history__item">
																		<span className="order-history__text">
																			Cancel Order
																		</span>
																	</th>
																</tr>
															))
													: null}
											</tbody>
										</table>
										{userInfo ? null : (
											<p class="order-history__not_login">
												<a href="/signin">Log In</a> <span>or</span>{" "}
												<a href="/signup" class="">
													Sign Up
												</a>{" "}
												<span> to start trading</span>
											</p>
										)}
									</div>
									<div
										className={`order-history__content ${
											orderOpen == "History"
												? ""
												: "order-history__content_invisible"
										}`}
										id="tab-history-order-history"
									>
										<table className="order-history__table">
											<thead>
												<tr>
													<th>Side </th>
													<th>Pair </th>
													<th>AVG </th>
													<th>Price </th>
													<th>Amount </th>
													<th>Executed </th>
													<th>Date </th>
													<th>Status </th>
												</tr>
											</thead>
											{userInfo ? (
												<tbody>
													{!loadingUserTrade && userInfo
														? userTrade
																.filter((a) => a.open == false)
																.map((item) => (
																	<tr className="order-history__row">
																		<th className="order-history__item">
																			<span className="order-history__text">
																				{item.side}
																			</span>
																		</th>
																		<th className="order-history__item">
																			<span className="order-history__text">
																				{item.pair}
																			</span>
																		</th>
																		<th className="order-history__item">
																			<span className="order-history__text">
																				{item.avarage}
																			</span>
																		</th>
																		<th className="order-history__item">
																			<span className="order-history__text">
																				{item.price}
																			</span>
																		</th>
																		<th className="order-history__item">
																			<span className="order-history__text">
																				{item.amount}
																			</span>
																		</th>
																		<th className="order-history__item">
																			<span className="order-history__text">
																				{item.executed.toFixed(2)}%
																			</span>
																		</th>
																		<th className="order-history__item">
																			<span className="order-history__text">
																				{item.date}
																			</span>
																		</th>
																		<th className="order-history__item">
																			<span className="order-history__text">
																				{item.status}
																			</span>
																		</th>
																	</tr>
																))
														: null}
												</tbody>
											) : null}
										</table>
										{userInfo ? null : (
											<p class="order-history__not_login">
												<a href="/signin">Log In</a> <span>or</span>{" "}
												<a href="/signup" class="">
													Sign Up
												</a>{" "}
												<span> to start trading</span>
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="page__right">
					<div className="page__trade">
						<div className="page__order-book">
							<div className="order-book">
								<div className="order-book__header">
									<div className="order-book__heading">Order Book</div>
									<div className="order-book__views">
										<button
											className="order-book__view order-book__view_buy"
											type="button"
										>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</button>
										<button
											className="order-book__view order-book__view_split order-book__view_selected"
											type="button"
										>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</button>
										<button
											className="order-book__view order-book__view_sell"
											type="button"
										>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</button>
									</div>
								</div>
								<div className="order-book__row order-book__row_heading">
									<div className="order-book__column">
										Price{" "}
										<span className="second_ticker_name">{secondSymbol}</span>
									</div>
									<div className="order-book__column">
										Amount <span className="first_ticker_name"></span>
									</div>
									<div className="order-book__column">
										Total{" "}
										<span className="second_ticker_name">{secondSymbol}</span>
									</div>
								</div>
								<div className="order-book__overflow">
									<div className="order-book__content">
										<div className="order-book__area order-book__area_sell">
											<div className="order-book__main">
												{dataOrder &&
												typeof dataOrder.newState.data != "undefined"
													? shuffle(dataOrder.newState.data.bids).map(
															(item) => (
																<div
																	className="order-book__item"
																	key={uniqid()}
																>
																	<div className="order-book__row order-book__row_content">
																		<div className="order-book__column order-book__column_red">
																			{item[0]}
																		</div>
																		<div className="order-book__column">
																			{item[1]}
																		</div>
																		<div className="order-book__column">
																			{(item[0] * item[1]).toFixed(2)}
																		</div>
																	</div>
																</div>
															)
													  )
													: dataOrder &&
													  typeof dataOrder.lastState.data != "undefined"
													? shuffle(dataOrder.lastState.data.bids).map(
															(item) => (
																<div
																	className="order-book__item"
																	key={uniqid()}
																>
																	<div className="order-book__row order-book__row_content">
																		<div className="order-book__column order-book__column_red">
																			{item[0]}
																		</div>
																		<div className="order-book__column">
																			{item[1]}
																		</div>
																		<div className="order-book__column">
																			{(item[0] * item[1]).toFixed(2)}
																		</div>
																	</div>
																</div>
															)
													  )
													: null}
											</div>
										</div>
										<div className="order-book__board">
											{dataTrade &&
											typeof dataTrade.newState.data != "undefined" &&
											data &&
											typeof data.data != "undefined" ? (
												<React.Fragment>
													<div className="order-book__price">
														<span
															className={`order-book__price-count ${
																dataTrade.newState.data[0].side == "buy"
																	? "order-book__price-count_green"
																	: "order-book__price-count_red"
															}`}
														>
															<span className="last_price">
																{" "}
																{dataTrade.newState.data[0].price.split(".")[0]}
																.
																{dataTrade.newState.data[0].price.split(".")[1]}
																0
															</span>
															{dataTrade.newState.data[0].side == "buy" ? (
																<IcomoonReact
																	iconSet={iconSet}
																	size={12}
																	color="#1fbf75"
																	icon="arrow-thin-up"
																/>
															) : (
																<IcomoonReact
																	iconSet={iconSet}
																	size={12}
																	color="#f15131"
																	icon="arrow-thin-down"
																/>
															)}
														</span>
														<span className="order-book__price-convert">
															≈$
															<span className="rated_last_price">
																{dataTrade.newState.data[0].price.split(".")[0]}
																.
																{dataTrade.newState.data[0].price.split(".")[1]}
																0
															</span>
														</span>
													</div>
													<span
														className={`order-book__price-percent ${
															parseFloat(data.data.changeRate) >= 0
																? "order-book__price-percent_green"
																: "order-book__price-percent_red"
														}`}
													>
														<span className="pair_change">
															{parseFloat(data.data.changeRate) >= 0 ? "+" : ""}
															{data.data.changeRate}%
														</span>
													</span>
												</React.Fragment>
											) : dataTrade &&
											  typeof dataTrade.lastState.data != "undefined" ? (
												<React.Fragment>
													<div className="order-book__price">
														<span
															className={`order-book__price-count ${
																dataTrade.lastState.data[0].side == "buy"
																	? "order-book__price-count_green"
																	: "order-book__price-count_red"
															}`}
														>
															<span className="last_price">
																{" "}
																{
																	dataTrade.lastState.data[0].price.split(
																		"."
																	)[0]
																}
																.
																{
																	dataTrade.lastState.data[0].price.split(
																		"."
																	)[1]
																}
																0
															</span>
															{dataTrade.lastState.data[0].side == "buy" ? (
																<IcomoonReact
																	iconSet={iconSet}
																	size={12}
																	color="#1fbf75"
																	icon="arrow-thin-up"
																/>
															) : (
																<IcomoonReact
																	iconSet={iconSet}
																	size={12}
																	color="#f15131"
																	icon="arrow-thin-down"
																/>
															)}
														</span>
														<span className="order-book__price-convert">
															≈$
															<span className="rated_last_price">
																{
																	dataTrade.lastState.data[0].price.split(
																		"."
																	)[0]
																}
																.
																{
																	dataTrade.lastState.data[0].price.split(
																		"."
																	)[1]
																}
																0
															</span>
														</span>
													</div>
													{data && typeof data.data != "undefined" ? (
														<span
															className={`order-book__price-percent ${
																parseFloat(data.data.changeRate) >= 0
																	? "order-book__price-percent_green"
																	: "order-book__price-percent_red"
															}`}
														>
															<span className="pair_change">
																{parseFloat(data.data.changeRate) >= 0
																	? "+"
																	: ""}
																{data.data.changeRate}%
															</span>
														</span>
													) : null}
												</React.Fragment>
											) : null}
										</div>
										<div className="order-book__area order-book__area_buy">
											<div className="order-book__main">
												{dataOrder &&
												typeof dataOrder.newState.data != "undefined"
													? shuffle(dataOrder.newState.data.asks).map(
															(item) => (
																<div
																	className="order-book__item"
																	key={uniqid()}
																>
																	<div className="order-book__row order-book__row_content">
																		<div className="order-book__column order-book__column_green">
																			{item[0]}
																		</div>
																		<div className="order-book__column">
																			{item[1]}
																		</div>
																		<div className="order-book__column">
																			{(item[0] * item[1]).toFixed(2)}
																		</div>
																	</div>
																</div>
															)
													  )
													: dataOrder &&
													  typeof dataOrder.lastState.data != "undefined"
													? shuffle(dataOrder.lastState.data.asks).map(
															(item) => (
																<div
																	className="order-book__item"
																	key={uniqid()}
																>
																	<div className="order-book__row order-book__row_content">
																		<div className="order-book__column order-book__column_green">
																			{item[0]}
																		</div>
																		<div className="order-book__column">
																			{item[1]}
																		</div>
																		<div className="order-book__column">
																			{(item[0] * item[1]).toFixed(2)}
																		</div>
																	</div>
																</div>
															)
													  )
													: null}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="page__trade-history">
							<div className="trade-history">
								<h3 className="trade-history__heading">Trade history </h3>
								<div className="trade-history__overflow">
									<div className="trade-history__content">
										<table className="trade-history__table">
											<thead>
												<tr>
													<th>Trade size </th>
													<th>
														Price(
														<span className="second_ticker_name">
															{secondSymbol}
														</span>
														)
													</th>
													<th>Time </th>
												</tr>
											</thead>
											<tbody>
												{dataTrade &&
												typeof dataTrade.newState.data != "undefined"
													? dataTrade.newState.data
															.sort((a, b) => a.time > b.time)
															.map((item) => (
																<tr
																	className={`trade-history__th ${
																		item.side == "buy"
																			? "trade-history__th_green"
																			: "trade-history__th_red"
																	}`}
																>
																	<th
																		className={`trade-history__th ${
																			item.side == "buy"
																				? "trade-history__th_green"
																				: "trade-history__th_red"
																		}`}
																	>
																		{item.size.split(".")[0]}.
																		<span>{item.size.split(".")[1]}</span>
																	</th>
																	<th
																		className={`trade-history__th ${
																			item.side == "buy"
																				? "trade-history__th_green"
																				: "trade-history__th_red"
																		}`}
																	>
																		{item.price.split(".")[0]}.
																		<span>{item.price.split(".")[1]}0</span>
																		{item.side == "buy" ? (
																			<IcomoonReact
																				iconSet={iconSet}
																				size={12}
																				color="#1fbf75"
																				icon="arrow-up-right2"
																			/>
																		) : (
																			<IcomoonReact
																				iconSet={iconSet}
																				size={12}
																				color="#f15131"
																				icon="arrow-down-right2"
																			/>
																		)}
																	</th>
																	<th
																		className={`trade-history__th ${
																			item.side == "buy"
																				? "trade-history__th_green"
																				: "trade-history__th_red"
																		}`}
																	>
																		{getTimeCurr(item.time)}
																	</th>
																</tr>
															))
													: dataTrade &&
													  typeof dataTrade.lastState.data != "undefined"
													? dataTrade.lastState.data
															.sort((a, b) => a.time > b.time)
															.map((item) => (
																<tr
																	className={`trade-history__th ${
																		item.side == "buy"
																			? "trade-history__th_green"
																			: "trade-history__th_red"
																	}`}
																>
																	<th
																		className={`trade-history__th ${
																			item.side == "buy"
																				? "trade-history__th_green"
																				: "trade-history__th_red"
																		}`}
																	>
																		{item.size.split(".")[0]}.
																		<span>{item.size.split(".")[1]}</span>
																	</th>
																	<th
																		className={`trade-history__th ${
																			item.side == "buy"
																				? "trade-history__th_green"
																				: "trade-history__th_red"
																		}`}
																	>
																		{item.price.split(".")[0]}.
																		<span>{item.price.split(".")[1]}0</span>
																		{item.side == "buy" ? (
																			<IcomoonReact
																				iconSet={iconSet}
																				size={12}
																				color="#1fbf75"
																				icon="arrow-up-right2"
																			/>
																		) : (
																			<IcomoonReact
																				iconSet={iconSet}
																				size={12}
																				color="#f15131"
																				icon="arrow-down-right2"
																			/>
																		)}
																	</th>
																	<th
																		className={`trade-history__th ${
																			item.side == "buy"
																				? "trade-history__th_green"
																				: "trade-history__th_red"
																		}`}
																	>
																		{getTimeCurr(item.time)}
																	</th>
																</tr>
															))
													: null}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="page__purchase page_layout_exchange_purchasemobiletoggleclass">
						<div className="purchase">
							<div className="purchase__tabs">
								<button
									className={`purchase__tab ${
										buyMethod == "Limit" ? "purchase__tab_selected" : ""
									}`}
									type="button"
									id="limitbuttonpagetarger"
									onClick={() => setBuyMethod("Limit")}
								>
									Limit
								</button>
								<button
									className={`purchase__tab ${
										buyMethod == "Market" ? "purchase__tab_selected" : ""
									}`}
									type="button"
									target-id="tab-purchase-market"
									onClick={() => setBuyMethod("Market")}
								>
									Market
								</button>
								{userInfo ? (
									<button
										className="purchase__tab_nonhover purchase__tab purchase__tab_floatright purchase__tab_transfercustom"
										type="button"
										onClick={() => setBuyMethod("Transfer")}
									>
										Transfer
									</button>
								) : null}

								<a
									className="purchase__tab purchase__tab_floatright purchase__tab_nonhover"
									href="/fees"
									type="button"
								>
									Trading fees
								</a>
							</div>
							<div className="purchase__render">
								<div
									className={`purchase__content purchase_customtab ${
										buyMethod == "Limit" ? "" : "purchase__content_invisible"
									}`}
									id="tab-purchase-limit"
								>
									<form
										className="sellbyform"
										onSubmit={(e) =>
											submitHandler(e, "Buy", priceBuy, valueBuy, firstSymbol)
										}
									>
										<div className="topttl">
											<p className="ttxt">Buy {firstSymbol}</p>
											<div className="info">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
												>
													<path
														className="cls-1"
														d="M14.25,9.06V4.44c0-1,0-1-1-1H5S2,3.69,2,6.25v4H14.25Z"
														fill="#29394a"
													></path>
													<path
														className="cls-2"
														fill="#697d94"
														d="M16,5.56H6a3.89,3.89,0,0,0-4,4v5c0,2,1,2,2,2H15a2.65,2.65,0,0,0,3-3v-6C18,6.06,17.67,5.56,16,5.56Zm-.62,4.25A1.13,1.13,0,1,1,16.5,8.69,1.12,1.12,0,0,1,15.38,9.81Z"
													></path>
												</svg>
												<p>
													{!loadingUser &&
													typeof loadingUser != "undefined" &&
													userInfo ? (
														<span id="purchaseSellMarketBalance">
															{user.walletsSpot
																.find((item) => item.type == secondSymbol)
																.avaliable.toFixed(8)}
														</span>
													) : (
														"0"
													)}{" "}
													{secondSymbol}
												</p>
											</div>
										</div>
										<div className="pricetable">
											<div className="item">
												<p className="gray">Price</p>
												<input
													type="number"
													min="0.000001"
													step="0.000001"
													value={priceBuy}
													onChange={(e) => changePrice(e.target.value,"buy")}
													id="purchaseBuyLimitPrice"
													disabled={userInfo ? false : true}
												/>
												<p className="gray">{secondSymbol}</p>
											</div>
											<div className="item">
												<p className="gray">Amount</p>
												<input
													type="number"
													min="0.000001"
													max={
														!loadingUser &&
														typeof loadingUser != "undefined" &&
														userInfo
															? user.walletsSpot
																	.find((item) => item.type == secondSymbol)
																	.avaliable.toFixed(8) / priceBuy
															: "0"
													}
													step="0.000001"
													value={valueBuy}
													id="purchaseBuyMarketAmount"
													onChange={(e) => setValueBuy(e.target.value)}
													disabled={userInfo ? false : true}
												/>
												<p className="gray">{firstSymbol}</p>
											</div>
										</div>
										<div className="slider">
											{!loadingUser &&
											typeof loadingUser != "undefined" &&
											userInfo ? (
												<React.Fragment>
													<input
														type="range"
														value={buyRatio}
														min="0"
														max="100"
														step="1"
														className="purchase__range"
														id="purchaseBuyMarketRange"
														onChange={(e) => {
															changeRatio("limit",e.target.value,"buy",)
														}}
													/>
													<p className="val" id="purchaseBuyMarketRangeValue">
														{buyRatio}%
													</p>
												</React.Fragment>
											) : (
												<React.Fragment>
													<input
														type="range"
														value="0"
														min="0"
														max="100"
														step="1"
														className="purchase__range"
														id="purchaseBuyMarketRange"
													/>
													<p className="val" id="purchaseBuyMarketRangeValue">
														0%
													</p>
												</React.Fragment>
											)}
										</div>
										<div className="feedesc">
											<p>Fees</p>
											<p>
												<span id="purchaseBuyLimitFee">
													{!loadingUser && userInfo?((valueBuy * user.tradingMakerFee) / 100).toFixed(8) :0}
												</span>{" "}
												{secondSymbol}
											</p>
										</div>
										<button
											className="submbtn"
											id="purchaseBuyLimitButton"
											disabled={userInfo ? false : true}
										>
											Buy {firstSymbol}
										</button>
									</form>
									<form
										className="sellbyform"
										onSubmit={(e) =>
											submitHandler(
												e,
												"Sell",
												priceSell,
												valueSell,
												firstSymbol
											)
										}
									>
										<div className="topttl">
											<p className="ttxt">Sell {firstSymbol}</p>
											<div className="info">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													data-name="Слой 1"
													viewBox="0 0 20 20"
												>
													<path
														className="cls-1"
														d="M14.25,9.06V4.44c0-1,0-1-1-1H5S2,3.69,2,6.25v4H14.25Z"
														fill="#29394a"
													></path>
													<path
														className="cls-2"
														d="M16,5.56H6a3.89,3.89,0,0,0-4,4v5c0,2,1,2,2,2H15a2.65,2.65,0,0,0,3-3v-6C18,6.06,17.67,5.56,16,5.56Zm-.62,4.25A1.13,1.13,0,1,1,16.5,8.69,1.12,1.12,0,0,1,15.38,9.81Z"
														fill="#697d94"
													></path>
												</svg>
												<p>
													{!loadingUser &&
													typeof loadingUser != "undefined" &&
													userInfo ? (
														<span id="purchaseSellMarketBalance">
															{user.walletsSpot
																.find((item) => item.type == firstSymbol)
																.avaliable.toFixed(8)}
														</span>
													) : (
														"0"
													)}{" "}
													{firstSymbol}
												</p>
											</div>
										</div>
										<div className="pricetable">
											<div className="item">
												<p className="gray">Price</p>
												<input
													type="number"
													min="0.000001"
													step="0.000001"
													value={priceSell}
													onChange={(e) => setPriceSell(e.target.value)}
													id="purchaseSellLimitPrice"
													disabled={userInfo ? false : true}
												/>
												<p className="gray">{secondSymbol}</p>
											</div>
											<div className="item">
												<p className="gray">Amount</p>
												<input
													type="number"
													min="0.000001"
													max={
														!loadingUser &&
														typeof loadingUser != "undefined" &&
														userInfo
															? user.walletsSpot
																	.find((item) => item.type == firstSymbol)
																	.avaliable.toFixed(8)
															: "0"
													}
													step="0.000001"
													value={valueSell}
													onChange={(e) => setValueSell(e.target.value)}
													id="purchaseSellLimitAmount"
													disabled={userInfo ? false : true}
												/>
												<p className="gray">{firstSymbol}</p>
											</div>
										</div>
										<div className="slider">
											{!loadingUser &&
											typeof loadingUser != "undefined" &&
											userInfo ? (
												<React.Fragment>
													<input
														type="range"
														value={
															isNaN(parseFloat(valueSell)) ||
															user.walletsSpot.find(
																(item) => item.type == firstSymbol
															).avaliable == 0
																? "0"
																: (parseFloat(valueSell) /
																		user.walletsSpot
																			.find((item) => item.type == firstSymbol)
																			.avaliable.toFixed(8)) *
																  100
														}
														min="0"
														max="100"
														step="1"
														className="purchase__range"
														id="purchaseSellLimitRangePop"
													/>
													<p
														className="val"
														id="purchaseSellLimitRangeValuePop"
													>
														0%
													</p>
												</React.Fragment>
											) : (
												<React.Fragment>
													<input
														type="range"
														value="0"
														min="0"
														max="100"
														step="1"
														className="purchase__range"
														id="purchaseSellLimitRangePop"
													/>
													<p
														className="val"
														id="purchaseSellLimitRangeValuePop"
													>
														0%
													</p>
												</React.Fragment>
											)}
										</div>
										<div className="feedesc">
											<p>Fees</p>
											<p>
												<span id="purchaseSellLimitFee">
													{!loadingUser && user ?((valueSell * user.tradingTakerFee) / 100).toFixed(
														8
													):null}
												</span>{" "}
												{firstSymbol}
											</p>
										</div>
										<button
											className="submbtn"
											style={{ backgroundColor: "#EB5058" }}
											id="purchaseSellLimitButton"
											type="submit"
											disabled={userInfo ? false : true}
										>
											Sell {firstSymbol}
										</button>
									</form>
								</div>

								<div
									className={`purchase__content purchase_customtab ${
										buyMethod == "Market" ? "" : "purchase__content_invisible"
									}`}
									id="tab-purchase-market"
								>
									<form
										className="sellbyform"
										onSubmit={(e) =>
											submitHandler(
												e,
												"Buy",
												dataTrade.lastState.data[0].price,
												valueBuy,
												firstSymbol
											)
										}
									>
										<div className="topttl">
											<p className="ttxt">Buy {firstSymbol}</p>
											<div className="info">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													data-name="Слой 1"
													viewBox="0 0 20 20"
												>
													<path
														className="cls-1"
														d="M14.25,9.06V4.44c0-1,0-1-1-1H5S2,3.69,2,6.25v4H14.25Z"
														fill="#29394a"
													></path>
													<path
														className="cls-2"
														d="M16,5.56H6a3.89,3.89,0,0,0-4,4v5c0,2,1,2,2,2H15a2.65,2.65,0,0,0,3-3v-6C18,6.06,17.67,5.56,16,5.56Zm-.62,4.25A1.13,1.13,0,1,1,16.5,8.69,1.12,1.12,0,0,1,15.38,9.81Z"
														fill="#697d94"
													></path>
												</svg>
												<p>
													{!loadingUser &&
													typeof loadingUser != "undefined" &&
													userInfo ? (
														<span id="purchaseSellMarketBalance">
															{user.walletsSpot
																.find((item) => item.type == secondSymbol)
																.avaliable.toFixed(8)}
														</span>
													) : (
														"0"
													)}{" "}
													{secondSymbol}
												</p>
											</div>
										</div>
										<div className="pricetable">
											<div className="item">
												<p className="gray">Price</p>
												<input
													type="text"
													value="Market"
													id="purchaseBuyMarketPrice"
													disabled
													readOnly
												/>
												<p className="gray">{secondSymbol}</p>
											</div>
											<div className="item">
												<p className="gray">Amount</p>
												<input
													type="number"
													min="0.000001"
													max={
														!loadingUser &&
														typeof loadingUser != "undefined" &&
														userInfo
															? user.walletsSpot
																	.find((item) => item.type == secondSymbol)
																	.avaliable.toFixed(8)
															: "0"
													}
													step="0.000001"
													value={valueBuy}
													id="purchaseBuyMarketAmount"
													onChange={(e) => setValueBuy(e.target.value)}
													disabled={userInfo ? false : true}
												/>
												<p className="gray">{firstSymbol}</p>
											</div>
										</div>
										<div className="slider">
											{!loadingUser &&
											typeof loadingUser != "undefined" &&
											userInfo ? (
												<React.Fragment>
													<input
														type="range"
														value={
															isNaN(parseFloat(valueBuy)) ||
															user.walletsSpot.find(
																(item) => item.type == secondSymbol
															).avaliable == 0
																? "0"
																: (parseFloat(valueBuy) /
																		user.walletsSpot
																			.find((item) => item.type == secondSymbol)
																			.avaliable.toFixed(8)) *
																  100
														}
														min="0"
														max="100"
														step="1"
														className="purchase__range"
														id="purchaseBuyMarketRange1"
													/>
													<p className="val" id="purchaseBuyMarketRangeValue">
														0%
													</p>
												</React.Fragment>
											) : (
												<React.Fragment>
													<input
														type="range"
														value="0"
														min="0"
														max="100"
														step="1"
														className="purchase__range"
														id="purchaseBuyMarketRange1"
													/>
													<p className="val" id="purchaseBuyMarketRangeValue">
														0%
													</p>
												</React.Fragment>
											)}
										</div>
										<div className="feedesc">
											<p>Fees</p>
											<p>
												<span id="purchaseBuyMarketFee">
													{!loadingUser &&user ?((valueBuy * user.tradingMakerFee) / 100).toFixed(8):0}
												</span>{" "}
												{secondSymbol}
											</p>
										</div>
										<button
											className="submbtn"
											id="purchaseBuyMarketButton"
											type="submit"
											disabled={userInfo ? false : true}
										>
											Buy {firstSymbol}
										</button>
									</form>
									<form
										className="sellbyform"
										onSubmit={(e) =>
											submitHandler(
												e,
												"Sell",
												dataTrade.lastState.data[0].price,
												valueSell,
												firstSymbol
											)
										}
									>
										<div className="topttl">
											<p className="ttxt">Sell {firstSymbol}</p>
											<div className="info">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													data-name="Слой 1"
													viewBox="0 0 20 20"
												>
													<path
														className="cls-1"
														d="M14.25,9.06V4.44c0-1,0-1-1-1H5S2,3.69,2,6.25v4H14.25Z"
														fill="#29394a"
													></path>
													<path
														className="cls-2"
														d="M16,5.56H6a3.89,3.89,0,0,0-4,4v5c0,2,1,2,2,2H15a2.65,2.65,0,0,0,3-3v-6C18,6.06,17.67,5.56,16,5.56Zm-.62,4.25A1.13,1.13,0,1,1,16.5,8.69,1.12,1.12,0,0,1,15.38,9.81Z"
														fill="#697d94"
													></path>
												</svg>
												<p>
													{!loadingUser &&
													typeof loadingUser != "undefined" &&
													userInfo ? (
														<span id="purchaseSellMarketBalance">
															{user.walletsSpot
																.find((item) => item.type == firstSymbol)
																.avaliable.toFixed(8)}
														</span>
													) : (
														"0"
													)}{" "}
													{firstSymbol}
												</p>
											</div>
										</div>
										<div className="pricetable">
											<div className="item">
												<p className="gray">Price</p>
												<input
													type="text"
													value="Market"
													id="purchaseSellMarketPrice"
													disabled
													readOnly
												/>
												<p className="gray">{secondSymbol}</p>
											</div>
											<div className="item">
												<p className="gray">Amount</p>
												<input
													type="number"
													min="0.000001"
													max={
														!loadingUser &&
														typeof loadingUser != "undefined" &&
														userInfo
															? user.walletsSpot
																	.find((item) => item.type == firstSymbol)
																	.avaliable.toFixed(8)
															: "0"
													}
													step="0.000001"
													value={valueSell}
													onChange={(e) => setValueSell(e.target.value)}
													id="purchaseSellMarketAmount"
													required
													disabled={userInfo ? false : true}
												/>
												<p className="gray">{firstSymbol}</p>
											</div>
										</div>
										<div className="slider">
											{!loadingUser &&
											typeof loadingUser != "undefined" &&
											userInfo ? (
												<React.Fragment>
													<input
														type="range"
														value={
															isNaN(parseFloat(valueSell)) ||
															user.walletsSpot.find(
																(item) => item.type == firstSymbol
															).avaliable == 0
																? "0"
																: (parseFloat(valueSell) /
																		user.walletsSpot
																			.find((item) => item.type == firstSymbol)
																			.avaliable.toFixed(8)) *
																  100
														}
														min="0"
														max="100"
														step="1"
														className="purchase__range"
														id="purchaseSellMarketRangePop"
														readOnly
													/>
													<p
														className="val"
														id="purchaseSellMarketRangeValuePop"
													>
														0%
													</p>
												</React.Fragment>
											) : (
												<React.Fragment>
													<input
														type="range"
														value="0"
														min="0"
														max="100"
														step="1"
														className="purchase__range"
														id="purchaseSellMarketRangePop"
														readOnly
													/>
													<p
														className="val"
														id="purchaseSellMarketRangeValuePop"
													>
														0%
													</p>
												</React.Fragment>
											)}
										</div>

										<div className="feedesc">
											<p>Fees</p>
											<p>
												<span id="purchaseSellMarketFee">
													{!loadingUser && user ?((valueSell * user.tradingTakerFee) / 100).toFixed(
														8
													):0}
												</span>{" "}
												{firstSymbol}
											</p>
										</div>
										<button
											className="submbtn"
											style={{ backgroundColor: "#EB5058" }}
											id="purchaseSellMarketButton"
											type="submit"
											disabled={userInfo ? false : true}
										>
											Sell {firstSymbol}
										</button>
									</form>
								</div>
								{userInfo && !loadingUser ? (
									<form
										id="pctransferblock"
										className={`${
											buyMethod == "Transfer"
												? "pageact_transferacttoggled"
												: ""
										}`}
										onSubmit={submitTransferHandler}
									>
										<div className="page_pctransferblock">
											<div className="holdbox">
												<div className="ttl">
													<p>Transfer</p>
												</div>
												<p className="description">Between your BNAX wallets</p>
												<div
													className="transferform"
													id="transferForm"
													data-ticker-id="1"
												>
													<div className="foinput">
														<p className="topname">From</p>
														<div
															className={`supcustomdropdown ${
																fromTransferOpen ? "" : "supcustomdropdown-hide"
															}`}
															onClick={() =>
																setFromTransferOpen(!fromTransferOpen)
															}
															id="transferFrom"
															data-value="0"
														>
															<div className="left">
																<p className="name">
																	{walletChoosenFirst} Wallet
																</p>
																<p className="val">
																	<span className="funding_balance">
																		{walletChoosenFirst == "Funding"
																			? user.walletsFunding
																					.find(
																						(item) => item.type == firstSymbol
																					)
																					.avaliable.toFixed(8)
																			: user.walletsSpot
																					.find(
																						(item) => item.type == firstSymbol
																					)
																					.avaliable.toFixed(8)}
																	</span>{" "}
																	{firstSymbol}
																</p>
															</div>
															<div className="right">
																<span className="arrow">&gt;</span>
															</div>
															<div className="supcustomdropdown_touch">
																<div
																	className="supcustomdropdown_touch_item"
																	onClick={() =>
																		setWalletChoosenFirst("Funding")
																	}
																>
																	<p className="nam">Funding Wallet</p>
																	<p className="val">
																		<span className="funding_balance">
																			{user.walletsFunding
																				.find(
																					(item) => item.type == firstSymbol
																				)
																				.avaliable.toFixed(8)}
																		</span>{" "}
																		{firstSymbol}
																	</p>
																</div>
																<div
																	className="supcustomdropdown_touch_item"
																	onClick={() => setWalletChoosenFirst("Spot")}
																>
																	<p className="nam">Spot Wallet</p>
																	<p className="val">
																		<span className="spot_balance">
																			{user.walletsSpot
																				.find(
																					(item) => item.type == firstSymbol
																				)
																				.avaliable.toFixed(8)}
																		</span>{" "}
																		{firstSymbol}
																	</p>
																</div>
															</div>
														</div>
													</div>
													<div className="foinput">
														<p className="topname">To</p>
														<div
															className={`supcustomdropdown ${
																toTransferOpen ? "" : "supcustomdropdown-hide"
															}`}
															onClick={() => setToTransferOpen(!toTransferOpen)}
															id="transferTo"
														>
															<div className="left">
																<p className="name">
																	{walletChoosenSecond} Wallet
																</p>
																<p className="val">
																	<span className="spot_balance">
																		{walletChoosenSecond == "Funding"
																			? user.walletsFunding
																					.find(
																						(item) => item.type == firstSymbol
																					)
																					.avaliable.toFixed(8)
																			: user.walletsSpot
																					.find(
																						(item) => item.type == firstSymbol
																					)
																					.avaliable.toFixed(8)}
																	</span>{" "}
																	{firstSymbol}
																</p>
															</div>
															<div className="right">
																<span className="arrow">&gt;</span>
															</div>
															<div className="supcustomdropdown_touch">
																<div
																	className="supcustomdropdown_touch_item"
																	onClick={() =>
																		setWalletChoosenSecond("Funding")
																	}
																>
																	<p className="nam">Funding Wallet</p>
																	<p className="val">
																		<span className="funding_balance">
																			{user.walletsFunding
																				.find(
																					(item) => item.type == firstSymbol
																				)
																				.avaliable.toFixed(8)}
																		</span>{" "}
																		{firstSymbol}
																	</p>
																</div>
																<div
																	className="supcustomdropdown_touch_item"
																	onClick={() => setWalletChoosenSecond("Spot")}
																>
																	<p className="nam">Spot Wallet</p>
																	<p className="val">
																		<span className="spot_balance">
																			{user.walletsSpot
																				.find(
																					(item) => item.type == firstSymbol
																				)
																				.avaliable.toFixed(8)}
																		</span>{" "}
																		{firstSymbol}
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="transferamountselect">
													<p className="transttl">Amount</p>
													<div className="inputbox">
														<input
															type="number"
															min="0.00000001"
															max={
																walletChoosenFirst == "Funding"
																	? user.walletsFunding
																			.find((item) => item.type == firstSymbol)
																			.avaliable.toFixed(8)
																	: user.walletsSpot
																			.find((item) => item.type == firstSymbol)
																			.avaliable.toFixed(8)
															}
															step="0.00000001"
															value={amountTransfer}
															onChange={(e) =>
																setAmountTransfer(e.target.value)
															}
															id="transferAmount"
														/>
														<button id="transferButton" type="submit">
															Transfer
														</button>
													</div>
												</div>
											</div>
										</div>
									</form>
								) : null}
							</div>
						</div>
					</div>
					{userInfo && !loadingUser ? (
						<div
							class={`pagemobcontext_popup ${
								popupBuyOpen || popupSellOpen || popupTransferOpen
									? ""
									: "page_showmobpopupsclass"
							}`}
							id="mainpopupwindow"
						>
							{userInfo && !loadingUser ? (
								<form
									class={`pagemobcontext_popup_box ctpp_transferbox ${
										popupTransferOpen
											? "page_showmobpopupsclass_transferbox"
											: ""
									}`}
									id="popup_transferbox"
									onSubmit={submitTransferHandler}
								>
									<div class="ttl">
										<h6>Transfer</h6>
										<div
											class="closebtn"
											onClick={() => setPopupTransferOpen(false)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="8"
												height="8"
												viewBox="0 0 8 8"
												fill="none"
											>
												<path
													d="M4 4L1 1M4 4L7 1M4 4L1 7M4 4L7 7"
													stroke="#697D94"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												></path>
											</svg>
										</div>
									</div>
									<p class="description">Between your BNAX wallets</p>
									<div
										class="transferform"
										id="transferFormPop"
										data-ticker-id="1"
									>
										<div class="foinput">
											<p class="topname">From</p>
											<div
												class={`supcustomdropdown ${
													fromTransferOpen ? "" : "supcustomdropdown-hide"
												}`}
												onClick={() => setFromTransferOpen(!fromTransferOpen)}
												id="transferFromPop"
												data-value="0"
											>
												<div class="left">
													<p class="name">{walletChoosenFirst} Wallet</p>
													<p class="val">
														<span class="funding_balance">
															{walletChoosenFirst == "Funding"
																? user.walletsFunding
																		.find((item) => item.type == firstSymbol)
																		.avaliable.toFixed(8)
																: user.walletsSpot
																		.find((item) => item.type == firstSymbol)
																		.avaliable.toFixed(8)}
														</span>{" "}
														{firstSymbol}
													</p>
												</div>
												<div class="right">
													<span class="arrow">&gt;</span>
												</div>
												<div class="supcustomdropdown_touch">
													<div
														class="supcustomdropdown_touch_item"
														data-value="0"
														onClick={() => setWalletChoosenFirst("Funding")}
													>
														<p class="nam">Funding Wallet</p>
														<p class="val">
															<span class="funding_balance">
																{user.walletsFunding
																	.find((item) => item.type == firstSymbol)
																	.avaliable.toFixed(8)}
															</span>{" "}
															{firstSymbol}
														</p>
													</div>
													<div
														class="supcustomdropdown_touch_item"
														data-value="2"
													>
														<p class="nam">Spot Wallet</p>
														<p class="val">
															<span class="spot_balance">
																{user.walletsSpot
																	.find((item) => item.type == firstSymbol)
																	.avaliable.toFixed(8)}
															</span>{" "}
															{firstSymbol}
														</p>
													</div>
												</div>
											</div>
										</div>
										<div class="foinput">
											<p class="topname">To</p>
											<div
												className={`supcustomdropdown ${
													toTransferOpen ? "" : "supcustomdropdown-hide"
												}`}
												onClick={() => setToTransferOpen(!toTransferOpen)}
												id="transferToPop"
												data-value="2"
											>
												<div class="left">
													<p class="name">{walletChoosenSecond} Wallet</p>
													<p class="val">
														<span class="spot_balance">
															{walletChoosenSecond == "Funding"
																? user.walletsFunding
																		.find((item) => item.type == firstSymbol)
																		.avaliable.toFixed(8)
																: user.walletsSpot
																		.find((item) => item.type == firstSymbol)
																		.avaliable.toFixed(8)}
														</span>{" "}
														{firstSymbol}
													</p>
												</div>
												<div class="right">
													<span class="arrow">&gt;</span>
												</div>
												<div class="supcustomdropdown_touch">
													<div
														class="supcustomdropdown_touch_item"
														onClick={() => setWalletChoosenSecond("Funding")}
													>
														<p class="nam">Funding Wallet</p>
														<p class="val">
															<span class="funding_balance">
																{user.walletsFunding
																	.find((item) => item.type == firstSymbol)
																	.avaliable.toFixed(8)}
															</span>{" "}
															{firstSymbol}
														</p>
													</div>
													<div
														class="supcustomdropdown_touch_item"
														onClick={() => setWalletChoosenSecond("Spot")}
													>
														<p class="nam">Spot Wallet</p>
														<p class="val">
															<span class="spot_balance">
																{user.walletsSpot
																	.find((item) => item.type == firstSymbol)
																	.avaliable.toFixed(8)}
															</span>{" "}
															{firstSymbol}
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="transferamountselect">
										<p class="transttl">Amount</p>
										<div class="inputbox">
											<input
												type="number"
												min="0.00000001"
												max={
													walletChoosenFirst == "Funding"
														? user.walletsFunding
																.find((item) => item.type == firstSymbol)
																.avaliable.toFixed(8)
														: user.walletsSpot
																.find((item) => item.type == firstSymbol)
																.avaliable.toFixed(8)
												}
												step="0.00000001"
												value={amountTransfer}
												onChange={(e) => setAmountTransfer(e.target.value)}
												id="transferAmountPop"
											/>
											<button id="transferButtonPop" type="submit">
												Transfer
											</button>
										</div>
									</div>
								</form>
							) : null}

							<div
								class={`pagemobcontext_popup_box ctpp_sellbuywvault ${
									popupBuyOpen ? "page_showmobpopupsclass_sellbuywvault" : ""
								}`}
								id="popup_sellbuyvauly"
							>
								<div
									class={`type-switcher ${
										popUpMarketBuy == "Limit" ? "type-switch-current" : ""
									}`}
									id="buyLimitPop"
								>
									<div class="ttl">
										<h6>Buy BTC</h6>
										<div
											class="closebtn"
											onClick={() => setPopupBuyOpen(false)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="8"
												height="8"
												viewBox="0 0 8 8"
												fill="none"
											>
												<path
													d="M4 4L1 1M4 4L7 1M4 4L1 7M4 4L7 7"
													stroke="#697D94"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												></path>
											</svg>
										</div>
										<div class="cls"></div>
										<div class="type-switcher-buttons">
											<button
												class="type-switcher-button type-switcher-button-current"
												data-target="buyLimitPop"
												onClick={() => setPopUpMarketBuy("Limit")}
											>
												Limit
											</button>
											<button
												class="type-switcher-button"
												data-target="buyMarketPop"
												onClick={() => setPopUpMarketBuy("Market")}
											>
												Market
											</button>
										</div>
										<div class="secbalanceshow">
											<p>
												<span id="purchaseBuyLimitBalancePop">0</span> USDT
											</p>
										</div>
										<svg
											class="rightbalanceicon"
											xmlns="http://www.w3.org/2000/svg"
											data-name="Слой 1"
											viewBox="0 0 20 20"
										>
											<path
												class="cls-1"
												fill="#29394a"
												d="M14.25,9.06V4.44c0-1,0-1-1-1H5S2,3.69,2,6.25v4H14.25Z"
											></path>
											<path
												class="cls-2"
												fill="#697d94"
												d="M16,5.56H6a3.89,3.89,0,0,0-4,4v5c0,2,1,2,2,2H15a2.65,2.65,0,0,0,3-3v-6C18,6.06,17.67,5.56,16,5.56Zm-.62,4.25A1.13,1.13,0,1,1,16.5,8.69,1.12,1.12,0,0,1,15.38,9.81Z"
											></path>
										</svg>
									</div>
									<div class="tableitemsbox">
										<div class="tableitem">
											<p class="name">Price</p>
											<input
												type="number"
												class="value"
												min="0.000001"
												step="0.000001"
												value="22517.86"
												id="purchaseBuyLimitPricePop"
											/>
											<p class="type">USDT</p>
										</div>
										<div class="tableitem">
											<p class="name">Amount</p>
											<input
												type="number"
												class="value"
												min="0.000001"
												max="0"
												step="0.000001"
												value="0"
												id="purchaseBuyLimitAmountPop"
											/>
											<p class="type">BTC</p>
										</div>
									</div>
									<div class="slider">
										<input
											type="range"
											value="0"
											min="0"
											max="100"
											step="1"
											class="purchase__range"
											id="purchaseBuyLimitRangePop"
										/>
										<p class="val" id="purchaseBuyLimitRangeValuePop">
											0%
										</p>
									</div>

									<div class="fees">
										<p>Fees</p>
										<p>
											<span id="purchaseBuyLimitFeePop">
												{(valueBuy * user.tradingMakerFee) / 100}
											</span>{" "}
											{secondSymbol}
										</p>
									</div>
									<button
										class="buybtn"
										data-pair-id="1"
										id="purchaseBuyLimitButtonPop"
									>
										Buy BTC
									</button>
								</div>

								<div
									class={`type-switcher ${
										popUpMarketBuy == "Market" ? "type-switch-current" : ""
									}`}
									id="buyMarketPop"
								>
									<div class="ttl">
										<h6>Buy BTC</h6>
										<div
											class="closebtn"
											onClick={() => setPopupBuyOpen(false)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="8"
												height="8"
												viewBox="0 0 8 8"
												fill="none"
											>
												<path
													d="M4 4L1 1M4 4L7 1M4 4L1 7M4 4L7 7"
													stroke="#697D94"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												></path>
											</svg>
										</div>
										<div class="cls"></div>
										<div class="type-switcher-buttons">
											<button
												class="type-switcher-button"
												data-target="buyLimitPop"
												onClick={() => setPopUpMarketBuy("Limit")}
											>
												Limit
											</button>
											<button
												class="type-switcher-button type-switcher-button-current"
												data-target="buyMarketPop"
												onClick={() => setPopUpMarketBuy("Market")}
											>
												Market
											</button>
										</div>
										<div class="secbalanceshow">
											<p>
												<span id="purchaseBuyMarketBalancePop">0</span> USDT
											</p>
										</div>
										<svg
											class="rightbalanceicon"
											xmlns="http://www.w3.org/2000/svg"
											data-name="Слой 1"
											viewBox="0 0 20 20"
										>
											<path
												class="cls-1"
												fill="#29394a"
												d="M14.25,9.06V4.44c0-1,0-1-1-1H5S2,3.69,2,6.25v4H14.25Z"
											></path>
											<path
												class="cls-2"
												fill="#697d94"
												d="M16,5.56H6a3.89,3.89,0,0,0-4,4v5c0,2,1,2,2,2H15a2.65,2.65,0,0,0,3-3v-6C18,6.06,17.67,5.56,16,5.56Zm-.62,4.25A1.13,1.13,0,1,1,16.5,8.69,1.12,1.12,0,0,1,15.38,9.81Z"
											></path>
										</svg>
									</div>
									<div class="tableitemsbox">
										<div class="tableitem">
											<p class="name">Price</p>
											<input
												type="text"
												class="value"
												value="Market"
												disabled
												readOnly
											/>
											<p class="type">USDT</p>
										</div>
										<div class="tableitem">
											<p class="name">Amount</p>
											<input
												type="number"
												class="value"
												min="0.000001"
												max="0"
												step="0.000001"
												value="0"
												id="purchaseBuyMarketAmountPop"
											/>
											<p class="type">USDT</p>
										</div>
									</div>
									<div class="slider">
										<input
											type="range"
											value="0"
											min="0"
											max="100"
											step="1"
											class="purchase__range"
											id="purchaseBuyMarketRangePop"
										/>
										<p class="val" id="purchaseBuyMarketRangeValuePop">
											0%
										</p>
									</div>

									<div class="fees">
										<p>Fees</p>
										<p>
											<span id="purchaseBuyMarketFeePop">
												{(valueBuy * user.tradingMakerFee) / 100}
											</span>{" "}
											{secondSymbol}
										</p>
									</div>
									<button
										class="buybtn"
										data-pair-id="1"
										id="purchaseBuyMarketButtonPop"
									>
										Buy {firstSymbol}
									</button>
								</div>
							</div>

							<div
								class={`pagemobcontext_popup_box ctpp_sellbuywvault ${
									popupSellOpen ? "page_showmobpopupsclass_sellbuywvault" : ""
								}`}
								id="popup_sellbuyvauly_SELL"
								style={{ zIndex: "3000" }}
							>
								<form
									class={`type-switcher ${
										popUpMarketSell == "Limit" ? "type-switch-current" : ""
									}`}
									id="sellLimitPop"
									onSubmit={(e) =>
										submitHandler(e, "Sell", priceSell, valueSell, secondSymbol)
									}
								>
									<div class="ttl">
										<h6>Sell {firstSymbol}</h6>
										<div
											class="closebtn"
											onClick={() => setPopupSellOpen(false)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="8"
												height="8"
												viewBox="0 0 8 8"
												fill="none"
											>
												<path
													d="M4 4L1 1M4 4L7 1M4 4L1 7M4 4L7 7"
													stroke="#697D94"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												></path>
											</svg>
										</div>
										<div class="cls"></div>
										<div class="type-switcher-buttons">
											<button
												class="type-switcher-button type-switcher-button-current"
												data-target="sellLimitPop"
												onClick={() => setPopUpMarketSell("Limit")}
											>
												Limit
											</button>
											<button
												class="type-switcher-button"
												data-target="sellMarketPop"
												onClick={() => setPopUpMarketSell("Market")}
											>
												Market
											</button>
										</div>
										<div class="secbalanceshow">
											<p>
												{!loadingUser &&
												typeof loadingUser != "undefined" &&
												userInfo ? (
													<span id="purchaseSellLimitBalancePop">
														{user.walletsSpot
															.find((item) => item.type == firstSymbol)
															.avaliable.toFixed(8)}
													</span>
												) : (
													"0"
												)}{" "}
												{firstSymbol}
											</p>
										</div>
										<svg
											class="rightbalanceicon"
											xmlns="http://www.w3.org/2000/svg"
											data-name="Слой 1"
											viewBox="0 0 20 20"
										>
											<path
												class="cls-1"
												fill="#29394a"
												d="M14.25,9.06V4.44c0-1,0-1-1-1H5S2,3.69,2,6.25v4H14.25Z"
											></path>
											<path
												class="cls-2"
												fill="#697d94"
												d="M16,5.56H6a3.89,3.89,0,0,0-4,4v5c0,2,1,2,2,2H15a2.65,2.65,0,0,0,3-3v-6C18,6.06,17.67,5.56,16,5.56Zm-.62,4.25A1.13,1.13,0,1,1,16.5,8.69,1.12,1.12,0,0,1,15.38,9.81Z"
											></path>
										</svg>
									</div>
									<div class="tableitemsbox">
										<div class="tableitem">
											<p class="name">Price</p>
											<input
												type="number"
												class="value"
												min="0.000001"
												step="0.000001"
												value={priceSell}
												onChange={(e) => setPriceSell(e.target.value)}
												id="purchaseSellLimitPricePop"
												disabled={userInfo ? false : true}
											/>
											<p class="type">{secondSymbol}</p>
										</div>
										<div class="tableitem">
											<p class="name">Amount</p>
											<input
												type="number"
												class="value"
												min="0.000001"
												max={
													!loadingUser &&
													typeof loadingUser != "undefined" &&
													userInfo
														? user.walletsSpot
																.find((item) => item.type == firstSymbol)
																.avaliable.toFixed(8)
														: "0"
												}
												step="0.000001"
												value={valueSell}
												onChange={(e) => setValueSell(e.target.value)}
												id="purchaseSellLimitAmountPop"
												disabled={userInfo ? false : true}
											/>
											<p class="type">{firstSymbol}</p>
										</div>
									</div>
									<div class="slider">
										{!loadingUser &&
										typeof loadingUser != "undefined" &&
										userInfo ? (
											<React.Fragment>
												<input
													type="range"
													value={
														isNaN(parseFloat(valueSell)) ||
														user.walletsSpot.find(
															(item) => item.type == firstSymbol
														).avaliable == 0
															? "0"
															: (parseFloat(valueSell) /
																	user.walletsSpot
																		.find((item) => item.type == firstSymbol)
																		.avaliable.toFixed(8)) *
															  100
													}
													min="0"
													max="100"
													step="1"
													class="purchase__range"
													id="purchaseSellLimitRangePop"
												/>
												<p className="val" id="purchaseSellLimitRangeValuePop">
													0%
												</p>
											</React.Fragment>
										) : (
											<React.Fragment>
												<input
													type="range"
													value="0"
													min="0"
													max="100"
													step="1"
													className="purchase__range"
													id="purchaseSellLimitRangePop"
												/>
												<p className="val" id="purchaseSellLimitRangeValuePop">
													0%
												</p>
											</React.Fragment>
										)}
									</div>

									<div class="fees">
										<p>Fees</p>
										<p>
											<span id="purchaseSellLimitFeePop">
												{(valueSell * user.tradingTakerFee) / 100}
											</span>{" "}
											{firstSymbol}
										</p>
									</div>
									<button
										class="buybtn"
										style={{ backgroundColor: "#EB5058" }}
										type="submit"
										id="purchaseSellLimitButtonPop"
									>
										Sell {firstSymbol}
									</button>
								</form>

								<div
									class={`type-switcher ${
										popUpMarketSell == "Market" ? "type-switch-current" : ""
									}`}
									id="sellMarketPop"
								>
									<div class="ttl">
										<h6>Sell {firstSymbol}</h6>
										<div
											class="closebtn"
											onClick={() => setPopupSellOpen(false)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="8"
												height="8"
												viewBox="0 0 8 8"
												fill="none"
											>
												<path
													d="M4 4L1 1M4 4L7 1M4 4L1 7M4 4L7 7"
													stroke="#697D94"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												></path>
											</svg>
										</div>
										<div class="cls"></div>
										<div class="type-switcher-buttons">
											<button
												class="type-switcher-button"
												data-target="sellLimitPop"
												onClick={() => setPopUpMarketSell("Limit")}
											>
												Limit
											</button>
											<button
												class="type-switcher-button type-switcher-button-current"
												data-target="sellMarketPop"
												onClick={() => setPopUpMarketSell("Market")}
											>
												Market
											</button>
										</div>
										<div class="secbalanceshow">
											<p>
												<span id="purchaseSellMarketBalancePop">0</span> BTC
											</p>
										</div>
										<svg
											class="rightbalanceicon"
											xmlns="http://www.w3.org/2000/svg"
											data-name="Слой 1"
											viewBox="0 0 20 20"
										>
											<path
												class="cls-1"
												fill="#29394a"
												d="M14.25,9.06V4.44c0-1,0-1-1-1H5S2,3.69,2,6.25v4H14.25Z"
											></path>
											<path
												class="cls-2"
												fill="#697d94"
												d="M16,5.56H6a3.89,3.89,0,0,0-4,4v5c0,2,1,2,2,2H15a2.65,2.65,0,0,0,3-3v-6C18,6.06,17.67,5.56,16,5.56Zm-.62,4.25A1.13,1.13,0,1,1,16.5,8.69,1.12,1.12,0,0,1,15.38,9.81Z"
											></path>
										</svg>
									</div>
									<div class="tableitemsbox">
										<div class="tableitem">
											<p class="name">Price</p>
											<input
												type="text"
												class="value"
												value="Market"
												id="purchaseSellMarketPricePop"
												disabled
												readOnly
											/>
											<p class="type">USDT</p>
										</div>
										<div class="tableitem">
											<p class="name">Amount</p>
											<input
												type="number"
												class="value"
												min="0.000001"
												max={
													!loadingUser &&
													typeof loadingUser != "undefined" &&
													userInfo
														? user.walletsSpot
																.find((item) => item.type == firstSymbol)
																.avaliable.toFixed(8)
														: "0"
												}
												step="0.000001"
												value={valueSell}
												required
												id="purchaseSellMarketAmountPop"
												disabled={userInfo ? false : true}
												onChange={(e) => setValueSell(e.target.value)}
											/>
											<p class="type">BTC</p>
										</div>
									</div>
									<div class="slider">
										<input
											type="range"
											value="0"
											min="0"
											max="100"
											step="1"
											class="purchase__range"
											id="purchaseSellMarketRangePop"
										/>
										<p class="val" id="purchaseSellMarketRangeValuePop">
											0%
										</p>
									</div>

									<div class="fees">
										<p>Fees</p>
										<p>
											<span id="purchaseSellMarketFeePop">
												{(valueSell * user.tradingTakerFee) / 100}
											</span>{" "}
											{firstSymbol}
										</p>
									</div>
									<button
										class="buybtn"
										style={{ backgroundColor: "#EB5058" }}
										data-pair-id="1"
										id="purchaseSellMarketButtonPop"
									>
										Sell BTC
									</button>
								</div>
							</div>
						</div>
					) : null}
					{userInfo && !loadingUser ? (
						<div className="pagemobcontext_popup_box ctpp_transactions page_showtransferactions">
							<div className="tbl">
								<button
									className="topbtn"
									onClick={() => setPopupTransferOpen(true)}
								>
									Transfer
								</button>
								<div className="split">
									<button className="buy" onClick={() => setPopupBuyOpen(true)}>
										Buy {firstSymbol}
									</button>
									<button
										className="sell"
										onClick={() => setPopupSellOpen(true)}
									>
										Sell {firstSymbol}
									</button>
								</div>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Exchange;

function numberWithSpaces(x, cut) {
	var parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	parts[1] = parts[1] ? parts[1].substring(0, cut) : null;
	if (parts[1] == null) return parts[0];
	return parts.join(".");
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

const getTimeCurr = (time) => {
	var d = new Date(parseInt(time.toString().slice(0, 13)));
	let hours = d.getHours();

	let minutes = d.getMinutes();
	let seconds = d.getSeconds();
	//return hours;
	return `${hours}:${minutes}:${seconds}`;
};

function contains(target, pattern) {
	var value = 0;
	pattern.forEach(function (word) {
		value = value + target.toLowerCase().includes(word.toLowerCase());
	});

	return value === 1;
}
