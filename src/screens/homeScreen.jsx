import React from "react";
import MarketList from "./homeScreen/marketList";

import Hero from "./homeScreen/hero";

import TradeEasily from "./homeScreen/tradeEasily";

import Header from "../components/header";
import Footer from "../components/footer";
import Slider from "./homeScreen/slider";
import Trading from "./homeScreen/trading";
import Choose from "../components/homeComponents/choose";
import Trade from "./homeScreen/trade";
import CryptocurrenciesSwim from "../components/homeComponents/cryptocurrenciesSwim";
import Account from "../components/homeComponents/account";
import Company from "../components/homeComponents/company";
import Calculator from "../components/homeComponents/calculator";
import { Helmet } from "react-helmet";
import HeaderProfile from "../components/profileComponents/headerProfile";
import Invite from "../components/homeComponents/invite";
import MakeStep from "../components/homeComponents/makeStep";
import LongTerm from "../components/homeComponents/longTern";
import Coins from "../components/homeComponents/coins";
import GateAway from "../components/homeComponents/gateAway";
import Stats from "../components/homeComponents/stats";
import FreeDom from "../components/homeComponents/freeDom";
import CryptoCurr from "../components/homeComponents/crypto";
import Started from "../components/homeComponents/started";
import Partners from "../components/homeComponents/partners";

const HomeScreen = ({ match }) => {
    //window.scrollTo(0, 0);

    return (
        <div className="webp homescreen">
            <div className="container__global">
                <div className="main__global">
                    <HeaderProfile showHeaderLanding={true} />
                    <Hero />
                    <Coins />
                    <GateAway />
                    <Stats />
                    <FreeDom />
                    <CryptoCurr />
                    <Started />
                    <Partners />
                    <Calculator/>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;
