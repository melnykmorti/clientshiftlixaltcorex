import React from "react";


import "./coins.css";
import "./gateaway.css";
import "./App.css";
import "./stats.css";
import "./footer.css";
import "./partners.css";
import "./global.css";
import "./freedom.css";
import "./started.css";

import "./home.css";
import "./news.css";
import "./trading.css";
import "./trade.css";
import "./cryptocurrencies.css";
import "./account.css";
import "./company.css";
import "./calculator.css";
import "./choose.css";
import "./header.css";

//import "./new_trading.css";
import "./root.css";
import "./custom.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/homeScreen";
import SingleProduct from "./screens/singleProduct";
import riskStatement from "./screens/riskDisclosureStatement";
import PrivateRouter from "./privateRouter";
import OrderScreen from "./screens/orderScreen";
import NotFound from "./screens/notFound";
import Header from "./components/header";
import FAQ from "./screens/faq";
import Privacypolicy from "./screens/privacypolicy";
import Oferta from "./screens/oferta";
import PayScreen from "./screens/pay";
import AboutUs from "./screens/aboutus";
import Footer from "./components/footer";
import Currencies from "./screens/currencies";
import Login from "./screens/signin";
import ProfileScreen from "./screens/profileScreen";
import MarketScreen from "./screens/marketScreen/marketScreen";
import Exchange from "./screens/exchange";
import Fees from "./screens/fees";
import SignUp from "./screens/signup";
import SignIn from "./screens/signin";
import Trading from "./components/profileComponents/trading";
import MarketCap from "./screens/marketCap";
import MarketScreener from "./screens/marketScreener";
import TechnicalAnalysis from "./screens/technicalAnalysis";
import CrossRates from "./screens/crossRates";
import HeatMap from "./screens/heatMap";
import Deposit from "./components/profileComponents/wallets/deposit";
import { getUserDetails, logout } from "./Redux/Actions/userActions";
import { LogoutComponent } from "./components/utils";

import WorkerPrivateRouter from "./workerPrivateRouter";
import Error3LVL from "./components/profileComponents/lvl3KYCError";
import ErrorP2Ppopup from "./components/profileComponents/p2pErrorPopUp";
import { useDispatch, useSelector } from "react-redux";
import GlobalBanScreen from "./screens/globalBanScreen";
import TermsOfUse from "./screens/termsofuse";
import AMLScreen from "./screens/amlScreen";
import AlertModal from "./screens/alertModal";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Wallets from "./components/profileComponents/wallets/wallets";
import Swap from "./components/profileComponents/swap";
import Withdraw from "./components/profileComponents/wallets/withdraw";
import Transfer from "./components/profileComponents/wallets/transfer";
import GeneralSettings from "./components/profileComponents/settings/generalSettings";
import ChangePassword from "./components/profileComponents/settings/changePassword";
import FASecurity from "./components/profileComponents/settings/security/2faSecurity";
import Transactions from "./components/profileComponents/wallets/transactions";
import Staking from "./components/profileComponents/staking";
import Verification from "./components/profileComponents/settings/verification/verification";
import Verification2LVL from "./components/profileComponents/settings/verification/verification2lvl";
import Verification3LVL from "./components/profileComponents/settings/verification/verification3lvl";
import Affiliate from "./components/profileComponents/settings/affiliate";
import PromoActive from "./components/profileComponents/settings/promoActive";
import CopyTrading from "./components/profileComponents/copyTrading";
import Launchpad from "./components/profileComponents/launchpad";
import SpaceStatic from "./components/profileComponents/spaceStatjc";
import SavingsStatic from "./components/profileComponents/savingsStatic";
import StakeETC20Static from "./components/profileComponents/stakeETC20Static";
import P2PStatic from "./components/profileComponents/p2pStatic";
import ListingStatic from "./components/profileComponents/listingStatic";
import InstitutionsStatic from "./components/profileComponents/institutionsStatic";
import CardsStatic from "./components/profileComponents/cardsStatic";
import VenturesStatic from "./components/profileComponents/venturesStatic";
import Support from "./components/profileComponents/support";
import VerificationPayment from "./screens/verificationPayment";
import Step1VerifPayment from "./components/profileComponents/wallets/step1VerifPayment";
import Step2VerifPayment from "./components/profileComponents/wallets/step2VerifPayment";
import HeaderProfile from "./components/profileComponents/headerProfile";
import TradingBots from "./components/profileComponents/tradingBots";
import Notifications from "./components/profileComponents/settings/notifications";
import ApiManagment from "./components/profileComponents/settings/apimanagment";
import LawEnforcement from "./screens/LawEnfor";
import Treatment from "./screens/treatment";
import RiskService from "./screens/riskService";
import CookiesPolicy from "./screens/cookiesPolicy";
import BugBounty from "./screens/bugBounty";
import { useLocation } from "react-router";

const App = () => {
   
    let data = JSON.parse(localStorage.getItem("userInfo"));
    console.log("data", data);
    if (data) {
        data = data._doc;
        if (data.globalBan) {
            return <GlobalBanScreen />;
        }
    }
    console.log("lloxx");
   
    return (
        <BrowserRouter basename="/">
            {/* <Route
                component={({ location }) =>
                    location.pathname !== "/" ? <HeaderProfile /> : <></>
                }
            /> */}
           
            <HeaderProfile />
            <Switch>
            
                <Route path="/" component={HomeScreen} exact />

                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />

                <PrivateRouter path="/profile/wallet" component={Wallets} />
                <PrivateRouter path="/profile/swap" component={Swap} />
                <PrivateRouter path="/profile/deposit" component={Deposit} />
                <PrivateRouter path="/profile/withdraw" component={Withdraw} />
                <PrivateRouter path="/profile/transfer" component={Transfer} />
                <PrivateRouter
                    path="/profile/notifications"
                    component={Notifications}
                />
                <PrivateRouter
                    path="/profile/settings"
                    component={GeneralSettings}
                />
                <PrivateRouter
                    path="/profile/api-managment"
                    component={ApiManagment}
                />

                <PrivateRouter
                    path="/profile/change-password"
                    component={ChangePassword}
                />
                <PrivateRouter
                    path="/profile/2fa-security"
                    component={FASecurity}
                />
                <PrivateRouter
                    path="/profile/transactions"
                    component={Transactions}
                />
                <PrivateRouter path="/profile/staking" component={Staking} />
                <PrivateRouter
                    path="/profile/verification"
                    component={Verification}
                />
                <PrivateRouter
                    path="/profile/verification-2lvl"
                    component={Verification2LVL}
                />
                <PrivateRouter
                    path="/profile/verification-3lvl"
                    component={Verification3LVL}
                />
                <PrivateRouter
                    path="/profile/affiliate"
                    component={Affiliate}
                />
                <PrivateRouter
                    path="/profile/promo-codes"
                    component={PromoActive}
                />
                <PrivateRouter
                    path="/profile/copy-trading"
                    component={CopyTrading}
                />
                <PrivateRouter
                    path="/profile/trading-bots"
                    component={TradingBots}
                />

                <PrivateRouter
                    path="/profile/launchpad"
                    component={Launchpad}
                />
                <PrivateRouter path="/profile/space" component={SpaceStatic} />
                <PrivateRouter
                    path="/profile/savings"
                    component={SavingsStatic}
                />
                <PrivateRouter
                    path="/profile/stake-eth20"
                    component={StakeETC20Static}
                />
                <PrivateRouter path="/profile/p2p" component={P2PStatic} />
                <PrivateRouter
                    path="/profile/token-listing"
                    component={ListingStatic}
                />
                <PrivateRouter
                    path="/profile/institutions"
                    component={InstitutionsStatic}
                />
                <PrivateRouter path="/profile/cards" component={CardsStatic} />
                <PrivateRouter
                    path="/profile/ventures"
                    component={VenturesStatic}
                />
                <PrivateRouter path="/profile/support" component={Support} />
                <PrivateRouter
                    path="/profile/verification-payment"
                    component={VerificationPayment}
                />
                <PrivateRouter
                    path="/profile/verification-payment-step-1"
                    component={Step1VerifPayment}
                />
                <PrivateRouter
                    path="/profile/verification-payment-step-2"
                    component={Step2VerifPayment}
                />

                <PrivateRouter path="/trading" component={Trading} exact />
                <PrivateRouter path="/market-crypto" component={MarketCap} />
                <PrivateRouter
                    path="/market-screener"
                    component={MarketScreener}
                />
                <PrivateRouter
                    path="/technical-analysis"
                    component={TechnicalAnalysis}
                />
                <PrivateRouter path="/cross-rates" component={CrossRates} />
                <PrivateRouter path="/heat-map" component={HeatMap} />
                <PrivateRouter path="/logout" component={LogoutComponent} />
                <PrivateRouter path="/terms" component={TermsOfUse} />
                <PrivateRouter path="/aml-kyc-policy" component={AMLScreen} />
                <PrivateRouter path="/law" component={LawEnforcement} />
                <PrivateRouter path="/treatment" component={Treatment} />
                <PrivateRouter path="/risk" component={RiskService} />

                <PrivateRouter
                    path="/cookies-policy"
                    component={CookiesPolicy}
                />
                <PrivateRouter path="/bugbounty" component={BugBounty} />
            </Switch>
            <Footer/>
            <div className="other">
                <Error3LVL />
                <ErrorP2Ppopup />
                <AlertModal />
                {/* {window.location.pathname == "/signin" ||
                window.location.pathname == "/signup" ? (
                    <></>
                ) : (
                    <Footer />
                )} */}
            </div>
        </BrowserRouter>
    );
};
export const serverLink = "https://api.shiftlix.com";
export const clientSideLink = "https://shiftlix.com/spanel";
//export const serverLink = "http://localhost:5001";
//npmexport const clientSideLink = "http://localhost:3001";
export const domain="https://shiftlix.com"
export const projectNameLink="shiftlix.com";
export const projectName="Shiftlix"
export const spanelLink = "";
export default App;
