import React from "react";
import { Helmet } from "react-helmet";
const FAQ = () => {
	window.scroll(0, 0);
	return (
		<>
			<Helmet><title>CrossCourse FAQ </title></Helmet>
			<div className="container mt-5">
				<div className="bg-eee mt-5">
					<h2 className="text-center title-1">FAQ</h2>
					<div className="separator-oferta"></div>
					<h3 className="other-title-3">About</h3>
					<div className="wrapper">
						<div className="half">
							<div className="tab">
								<input id="tab-one" type="checkbox" name="tabs" />
								<label htmlFor="tab-one">What is CrossCourse?</label>
								<div className="tab-content">
									<p>
										CrossCourse is a simple and fast instant cryptocurrency
										exchange service. You do not need to register, and your
										exchange will have no limits. We'll quickly convert your
										coins for you without charging any additional or hidden
										fees.
									</p>
								</div>
							</div>
							<div className="tab">
								<input id="tab-two" type="checkbox" name="tabs" />
								<label htmlFor="tab-two">How does CrossCourse work?</label>
								<div className="tab-content">
									<p>
										CrossCourse is integrated into multiple cryptocurrency trading
										platforms, including Binance, Bitfinex, Huobi, OKEx, and
										Kucoin. At the moment of the trade, we’ll choose the best
										exchange rate on the market at any given moment and offer it
										to you.
									</p>
									<p>
										If you have any questions during the exchange, please
										contact the operator via the online help chat.
									</p>
								</div>
							</div>
							<div className="tab">
								<input id="tab-three" type="checkbox" name="tabs" />
								<label htmlFor="tab-three">Why trust us?</label>
								<div className="tab-content">
									<p>
										Created by a team of experienced blockchain developers,
										CrossCourse is a fully secure service with a twist — we’re
										completely registration-free. This allows our clients to
										avoid identification or financial theft. We offer the best
										rates on the market, as we use reliable cryptocurrency
										trading platforms.
									</p>
								</div>
							</div>
						</div>
					</div>
					<h3 className="other-title-3">Cryptocurrency Exchange Process</h3>
					<div className="wrapper">
						<div className="half">
							<div className="tab">
								<input id="tab-four" type="checkbox" name="tabs" />
								<label htmlFor="tab-four">
									How fast will my transaction be processed?
								</label>
								<div className="tab-content">
									<p>
										The processing speed ranges from about two to twenty
										minutes, depending on how long it takes for a block to
										happen in the network. Most orders process in just a few
										minutes. If the transaction is large (more than 1 BTC or
										equivalent), processing it may take a little longer,
										depending on the size of your transaction and the capacity
										of the block. We boast the highest exchange speeds on the
										market thanks to our revolutionary trading algorithms.
									</p>
								</div>
							</div>
							<div className="tab">
								<input id="tab-five" type="checkbox" name="tabs" />
								<label htmlFor="tab-five">
									What is cryptocurrency wallet address?
								</label>
								<div className="tab-content">
									<p>
										Cryptocurrency wallet address is a unique combination of
										numbers and letters ranging from 26 to 35 characters in
										length. It usually looks something like this:
										17bkZPLB4Wn6F347PLZBR34ijhzQDUFZ4ZC.
									</p>
								</div>
							</div>
							<div className="tab">
								<input id="tab-six" type="checkbox" name="tabs" />
								<label htmlFor="tab-six">
									How do I get my cryptocurrency wallet address?
								</label>
								<div className="tab-content">
									<p>
										When you decide which crypto coin you would like to acquire,
										find a reliable wallet. Each cryptocurrency has an official
										one. When you create a wallet, you automatically get an
										address and a private key. Keep your private key to yourself
										and don’t show it to anyone, even if they ask.
									</p>
									<p>
										For security reasons, we will never ask you for your private
										keys and nobody should.
									</p>
								</div>
							</div>
							<div className="tab">
								<input id="tab-seven" type="checkbox" name="tabs" />
								<label htmlFor="tab-seven">What is a transaction hash?</label>
								<div className="tab-content">
									<p>
										Transaction hash (also referred to as "TX") is the unique
										identification code that registers every transaction in the
										blockchain. This unique code allows you to verify its status
										and validity in the blockchain.
									</p>
								</div>
							</div>
							<div className="tab">
								<input id="tab-eight" type="checkbox" name="tabs" />
								<label htmlFor="tab-eight">How can I cancel a transaction?</label>
								<div className="tab-content">
									<p>
										Blockchain operations are irreversible. If the funds are
										sent, the transaction cannot be canceled by anyone.
										Therefore, thoroughly check all the payment details before
										sending funds to anyone, including us or anyone else.
									</p>
								</div>
							</div>
							<div className="tab">
								<input id="tab-nine" type="checkbox" name="tabs" />
								<label htmlFor="tab-nine">
									Why is the final amount of funds different from the initial
									amount?
								</label>
								<div className="tab-content">
									<p>
										It takes some time to process transactions. Due to the high
										volatility of cryptocurrency, speed is crucial, however, the
										final exchange rate can differ both in the positive or
										negative direction. What we guarantee is the best rate at
										the very moment of an exchange operation.
									</p>
								</div>
							</div>
							<div className="tab">
								<input id="tab-ten" type="checkbox" name="tabs" />
								<label htmlFor="tab-ten">
									What fees are there during an exchange?
								</label>
								<div className="tab-content">
									<p>
										The process of exchanging crypto consists of many different
										steps, and during those steps, various fees are charged.
									</p>
									<p>These are the possible ones:</p>
									<ul>
										<li>
											network fee for the deposit transaction from a customer's
											wallet;
										</li>
										<li>
											network fee for transferring coins to our liquidity
											provider;
										</li>
										<li>trading fees that our liquidity providers charge;</li>
										<li>
											network fee for sending the exchanged funds to the
											customer.
										</li>
									</ul>
									<p>
										The fees vary depending on the currency and the exchange
										amount. For every swap, CrossCourse finds the fastest and most
										user-profitable way to execute an exchange. It is crucial to
										us that the final amount you receive is as close to the
										estimate as possible. That's why we calculate all the
										possible fees for every transaction very thoroughly and
										include them in the estimate.
									</p>
								</div>
							</div>
							<div className="tab">
								<input id="tab-11" type="checkbox" name="tabs" />
								<label htmlFor="tab-11">
									How long does it take for a transaction to be finished?
								</label>
								<div className="tab-content">
									<p>
										Transactions on CrossCourse usually take from 5 to 30 minutes.
										If your transaction takes more time, it may be due to
										various issues:
									</p>
									<ul>
										<li>
											DDoS attacks. Unfortunately, such problems happen from
											time to time, but we are always happy to help you and
											solve any issues;
										</li>
										<li>
											Cryptocurrency updates. We may update the client and
											disable some coins. As soon as we turn them back on, you
											will get your funds right away;
										</li>
										<li>
											The blockchain is overloaded. Too many transactions are
											waiting to be included into the blockchain, and yours may
											wait for its turn, too. Sometimes you might have to wait a
											little longer.
										</li>
									</ul>
								</div>
							</div>
							<div className="tab">
								<input id="tab-12" type="checkbox" name="tabs" />
								<label htmlFor="tab-12">
									What is the minimal exchange amount on CrossCourse?
								</label>
								<div className="tab-content">
									<p>
										There is no upper limit for cryptocurrency exchanges on
										CrossCourse. However, there are lower limits: they are
										different for each coin and range from ~$100 to $250. We’re
										working on lowering the minimal exchange amounts for all the
										coins available on CrossCourse. If the deposit you’ve sent us
										is less than the minimum exchange amount, we will not be
										able to finish the exchange and guarantee a refund.
									</p>
								</div>
							</div>
							<div className="tab">
								<input id="tab-13" type="checkbox" name="tabs" />
								<label htmlFor="tab-13">What is the expected exchange rate?</label>
								<div className="tab-content">
									<p>
										The expected rate is the rate at this exact moment. You must
										understand that it takes some time to send the deposit and
										confirm the transaction so, with the market volatility, you
										might get a bit less or more than you thought you would.
									</p>
								</div>
							</div>
							<div className="tab">
								<input id="tab-14" type="checkbox" name="tabs" />
								<label htmlFor="tab-14">
									What is a fixed rate cryptocurrency exchange?
								</label>
								<div className="tab-content">
									<p>
										A fixed rate crypto exchange is an exchange performed at the
										same rate which is displayed to the client at the beginning
										of an exchange, regardless of subsequent rate fluctuations.
									</p>
									<p>
										In some cases, fixed-rate exchanges have lower rate but the
										opposite is also possible.
									</p>
								</div>
							</div>
							<div className="tab">
								<input id="tab-15" type="checkbox" name="tabs" />
								<label htmlFor="tab-15">
									Do I need to register to use CrossCourse?
								</label>
								<div className="tab-content">
									<p>
										In order to be able to use CrossCourse, customers don't need
										to create any sort of accounts.
									</p>
									<p>However, there are some exceptions.</p>
									<p>
										CrossCourse uses an automated risk management system to check
										all transactions. Each case will be considered individually.
										According to European AML directives, KYC regulations, and
										platform requirements, we will ask you to provide a scan of
										your ID document valid in your country, as well as some
										additional information on the funds’ origin.
									</p>
								</div>
							</div>
							<div className="tab">
								<input id="tab-16" type="checkbox" name="tabs" />
								<label htmlFor="tab-16">
									How can I send a correct BCH/BSV/BCHA transaction? What should
									I do if anything went wrong?
								</label>
								<div className="tab-content">
									<p>
										The Bitcoin Cash hard fork has resulted in creating multiple
										chains. However, as they are not secured by replay
										protection technologies, there is a chance of
										double-spending affecting both chains (BCH/BSV or BCH/BCHA).
										It means that transactions made with one of these coins may
										be replicated for the other.
									</p>
									<p>
										In such a case, please contact our support team at{" "}
										<a href="mailto: crosscorse.online@gmail.com">
											crosscorse.online@gmail.com
										</a>
										. We will do our best to refund you within 24 hours. Still,
										we have to warn you that in some extremely rare
										circumstances there may be no chance of getting the funds
										back. The best way to avoid it is to split your coins:
										please make sure you did it before arranging a transaction.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default FAQ;
