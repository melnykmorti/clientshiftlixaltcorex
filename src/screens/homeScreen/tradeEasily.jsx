import React from "react";

const TradeEasily = () => {
	return (
		<div className="trade-easily">
			<img
				src="./images/trade-easily-preview.png"
				className="trade-easily__preview"
			/>
			<div className="trade-easily__content">
				<h2 className="trade-easily__heading">Trade easily</h2>
				<ul className="trade-easily__list">
					<li className="trade-easily__item">
						<span className="trade-easily__counter">01</span>
						<strong className="trade-easily__label">
							Trade with crypto and digital assets in realtime
						</strong>
						<p className="trade-easily__note">
							Our trading terminal providing real market data and give to user
							possibility trade with digital assets and cryptocurrencies with
							comfort and confidence
						</p>
					</li>
					<li className="trade-easily__item">
						<span className="trade-easily__counter">02</span>
						<strong className="trade-easily__label">
							Buy &amp; Sell Cryptocurrency assets with Bnax
						</strong>
						<p className="trade-easily__note">
							Buy and Sell BTC, ETH, USDT, SOL, DOT, DOGE and other currencies
							comfortable with fair market prices
						</p>
					</li>
					<li className="trade-easily__item">
						<span className="trade-easily__counter">03</span>
						<strong className="trade-easily__label">Access anywhere 24/7</strong>
						<p className="trade-easily__note">
							Exchange anything and anywhere with desktop and mobile friendly
							interface
						</p>
					</li>
				</ul>
				<a href="/signup" className="button button_style_primary button_size_large">
					Start Trading
				</a>
			</div>
		</div>
	);
};
export default TradeEasily;
