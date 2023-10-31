import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import ProfileTabs from "../components/profileComponents/profileTabs";
import { getUserDetails } from "../Redux/Actions/userActions";
import HeaderProfile from "../components/profileComponents/headerProfile";
import Swap from "../components/profileComponents/swap";

import DashboardMain from "../components/profileComponents/dashboardMain";

import Wallets from "../components/profileComponents/wallets/wallets";
import Deposit from "../components/profileComponents/wallets/deposit";
import Withdraw from "../components/profileComponents/wallets/withdraw";
import Transfer from "../components/profileComponents/wallets/transfer";
import OutsideAlerter from "../OutsideAlerter";

import GeneralSettings from "../components/profileComponents/settings/generalSettings";
import ChangePassword from "../components/profileComponents/settings/changePassword";
import FASecurity from "../components/profileComponents/settings/security/2faSecurity";
import Transactions from "../components/profileComponents/wallets/transactions";
import Staking from "../components/profileComponents/staking";
import Verification from "../components/profileComponents/settings/verification/verification";
import Verification2LVL from "../components/profileComponents/settings/verification/verification2lvl";
import Verification3LVL from "../components/profileComponents/settings/verification/verification3lvl";
import Affiliate from "../components/profileComponents/settings/affiliate";
import PromoActive from "../components/profileComponents/settings/promoActive";
import Error3LVL from "../components/profileComponents/lvl3KYCError";
import CopyTrading from "../components/profileComponents/copyTrading";
import TradingBots from "../components/profileComponents/tradingBots";
import Launchpad from "../components/profileComponents/launchpad";
import SpaceStatic from "../components/profileComponents/spaceStatjc";
import SavingsStatic from "../components/profileComponents/savingsStatic";
import StakeETC20Static from "../components/profileComponents/stakeETC20Static";
import P2PStatic from "../components/profileComponents/p2pStatic";
import ListingStatic from "../components/profileComponents/listingStatic";
import InstitutionsStatic from "../components/profileComponents/institutionsStatic";
import CardsStatic from "../components/profileComponents/cardsStatic";
import VenturesStatic from "../components/profileComponents/venturesStatic";
import Support from "../components/profileComponents/support";
import VerificationPayment from "./verificationPayment";
import Step1VerifPayment from "../components/profileComponents/wallets/step1VerifPayment";
import Step2VerifPayment from "../components/profileComponents/wallets/step2VerifPayment";
import { Helmet } from "react-helmet";
const ProfileScreen = ({ match }) => {
    console.log(match);
    const component = match.params.component;
    return (
        <React.Fragment>
            <Helmet>
                <link href="/assets/css/root.css" rel="stylesheet"/>
            </Helmet>
            <HeaderProfile />
            {component == "wallet" ? (
                <Wallets />
            ) : component == "swap" ? (
                <Swap  />
            ) : component == "deposit" ? (
                <Deposit  />
            ) : component == "withdraw" ? (
                <Withdraw  />
            ) : component == "transfer" ? (
                <Transfer  />
            ) : component == "settings" ? (
                <GeneralSettings />
            ) : component == "change-password" ? (
                <ChangePassword />
            ) : component == "2fa-security" ? (
                <FASecurity />
            ) : component == "transactions" ? (
                <Transactions />
            ) : component == "staking" ? (
                <Staking />
            ) : component == "verification" ? (
                <Verification />
            ) : component == "verification-2lvl" ? (
                <Verification2LVL />
            ) : component == "verification-3lvl" ? (
                <Verification3LVL />
            ) : component == "affiliate" ? (
                <Affiliate />
            ) : component == "promo-codes" ? (
                <PromoActive />
            ) : component == "copy-trading" ? (
                <CopyTrading />
            ) : component == "trading-bots" ? (
                <TradingBots />
            ) : component == "launchpad" ? (
                <Launchpad />
            ) : component == "space" ? (
                <SpaceStatic />
            ) : component == "savings" ? (
                <SavingsStatic />
            ) : component == "stake-eth20" ? (
                <StakeETC20Static />
            ) : component == "p2p" ? (
                <P2PStatic />
            ) : component == "token-listing" ? (
                <ListingStatic />
            ) : component == "institutions" ? (
                <InstitutionsStatic />
            ) : component == "cards" ? (
                <CardsStatic />
            ) : component == "ventures" ? (
                <VenturesStatic />
            ) : component == "support" ? (
                <Support />
            ) : component == "verification-payment" ? (
                <VerificationPayment />
            ) : component == "verification-payment-step-1" ? (
                <Step1VerifPayment />
            ) : component=="verification-payment-step-2"?<Step2VerifPayment/>:null}
        </React.Fragment>
    );
};

export default ProfileScreen;
