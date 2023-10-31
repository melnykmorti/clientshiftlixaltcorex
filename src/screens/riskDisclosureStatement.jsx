import React from "react";
import { Helmet } from "react-helmet";
const RiskStatement = () => {
	window.scroll(0, 0);
	return (
		<>
		<Helmet><title>CrossCourse Risk Disclosure Statement </title></Helmet>
			<div className="container-fluid bg-eee py-5">
				<div className=" container mt-5 ">
					<h2 className="text-center title-1">Risk Disclosure Statement</h2>
					<div className="separator-oferta"></div>

					<div className="oferta bg-white px-5 py-5">
						<p>
							Digital Assets transactions (such as transactions defined in the
							Terms of Use) entails significant risks of financial loss. You
							should not use Digital Assets that You are not prepared to lose
							entirely. This Risk Disclosure Statement discusses some of the
							principal risks of transactions with Digital Assets, but it does
							not and cannot describe every risk or consideration involved in
							holding, trading, buying or engaging in any other Digital Assets
							transactions. This Risk Disclosure Statement forms a part of, and
							utilizes certain terms that are defined in the Terms of Use. Risks
							of Digital Assets transaction include, but are not limited to, the
							following:
						</p>
						<h3 id="1-general-provisions">1. High price volatility</h3>
						<p>
							The value of Digital Assets is entirely derived by market forces
							of supply and demand, and they are much more volatile than most of
							the traditional fiat currencies and commodities.
						</p>
						<h3>2. Legal Risk</h3>
						<p>
							The legality of Digital Assets, trading of them, buying of them or
							possession may not be clear and may vary under the laws of
							different jurisdictions throughout the world. This mean that the
							legality of engaging in Digital Assets transaction is not always
							clear. Whether and on what basis a Digital Asset may constitute
							property, an asset, or a right of any kind, might vary from one
							jurisdiction to another. You are responsible for knowing and
							understanding how the laws applicable to You or your property,
							rights or assets, limit, regulate, and tax the Digital Assets You
							use.
						</p>
						<h3>3. Limited Supervision</h3>
						<p>
							Most Virtual Assets markets are not regulated or supervised by any
							relevant authorities. There is no centralized authority or entity
							that can take measures to protect the value of a Digital Asset in
							a crisis or adjust its supply.
						</p>
						<h3>4. Irreversible transactions</h3>
						<p>
							Due to decentralized nature, transactions with Digital assets may
							be irreversible, and, accordingly, losses due to fraudulent or
							accidental transactions may not be recoverable. crossCourse shall
							process only that Digital Assets which are transferred as a part
							of transaction made through the Website or API (or other tools,
							administered by crossCourse) to the address, indicated in the course
							of such transactions. crossCourse bear no responsibility for any
							accidental transaction, including but not limited to any transfer
							to the incorrect or inactive cryptocurrency wallet address, even
							if such an address have been used for previous User’s
							transactions. However, crossCourse upon the User’s request will make
							every possible efforts to support Users with tracking accidental
							transaction within six (6) month from the date of transaction made
							and will foster all efforts to return such Digital Assets to the
							owner if it is technically possible. All the claims being served
							upon the expiry of indicated period shall be disregarded. All the
							fees charged for return transactions shall be paid by the User.
						</p>
						<h3>
							5. The blockchains on which Digital Assets operate may temporarily
							or permanently fork
						</h3>
						<p>
							Some blockchain networks are powered by open source software. When
							a modification to that software is released by developers, and a
							substantial majority of miners consent to the modification, a
							change is implemented and the blockchain network continues
							uninterrupted. However, if a change were to be introduced with
							less than a substantial majority consenting to the proposed
							modification, and the modification is not compatible with the
							software in operation prior to its modification, the consequence
							would be what is known as a “fork” (i.e. a split) of the
							blockchain. One blockchain would be maintained by the
							pre-modification software and the other by the post-modification
							software. The effect is that both blockchains would operate in
							parallel, but independently. There are examples of such forks
							occurring in the past and in the future, such a fork could occur
							again, and affect the viability or value of a Digital Asset. In
							case of such forks occurring, crossCourse may incidentally get the
							“splitted” Digital Assets (Digital Assets that may be created as a
							result of the fork) from the transaction that is not covered by
							Terms of Use. crossCourse shall not a bit be responsible for such
							“splitted” Digital Assets (tracking such
							transaction/storage/return or transfer such assets to the sender)
							before any User or any party. Nevertheless, crossCourse upon the
							User’s request will make every possible efforts to support Users
							with tracking such “splitted” Digital Assets within six (6) month
							from the date of fork, and will foster all efforts to transfer
							such Digital Assets to the owner if it is technically possible.
							All the claims being served upon the expiry of indicated period
							shall be disregarded. All the fees charged for return transactions
							shall be paid by the User.
						</p>
						<h3 >6. Dependence of Internet</h3>
						<p>
                                                There are risks associated with using an internet-based transaction execution software including, but not limited to, the failure of hardware and software. crossCourse maintains an independent and secure ledger of all transaction to minimize loss, and maintains contingency plans to minimize the possibility of system failure; however, crossCourse does not control signal power, reception, routing via the internet, configuration of Your equipment or the reliability of Your connection to the Internet. The result of any failure of the foregoing may be that Your transaction is either not executed according to Your instructions, or is not executed at all.
						</p>
                                                <h3>
                                                7. Unanticipated Risks
                                                </h3>
						<p>
                                                Digital Assets and blockchain technology are new technology. In addition to these risks, there are other risks associated with Your acquisition, storage, transfer and use of any Digital Asset, including those that we may not be able to anticipate. Such risks may further materialize as unanticipated variations or combinations of these risks.
						</p>
						
						
					</div>
				</div>
			</div>
		</>
	);
};
export default RiskStatement;
