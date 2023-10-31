import React from "react";
import { Helmet } from "react-helmet";
const AboutUs = () => {
	window.scroll(0, 0);
	return (
		<>
			<Helmet>
				<title>About Us CrossCourse</title>
			</Helmet>
			<div className="container-fluid bg-eee py-5">
				<div className=" container mt-5 ">
					<h2 className="text-center title-1">About us</h2>
					<div className="separator-oferta"></div>

					<div className="oferta bg-white px-5 py-5">
						<p>
							CrossCourse is a non-custodial service created for simple and fast
							cryptocurrency exchanges. We strive for maximum safety,
							simplicity, and convenience. We do not store your funds or require
							any sort of account creation.
						</p>
						<p>
							CrossCourse has lots of coins available for exchange and does
							not hold any limits; you can exchange as much as you want -
							account-free, worry-free, faster than light. The fiat option is
							also available - you can buy cryptocurrency with Visa or
							MasterCard through our third-party partner.
						</p>
						<p>
							Using our fast processing and well-thought-out interface, you can
							perform automated swaps at top speed on any device. Our mission is
							to simplify the exchange process with practical and scalable
							solutions that will allow the crypto economy to work for our
							users.
						</p>
						<p>
							Subsidiary of CCEL Group Limited., a company incorporated in
							Global Tower Floor 7, Shaikh Zayed the first Street, P.O. Box:
							6195, Abu Dhabi, UAE
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default AboutUs;
