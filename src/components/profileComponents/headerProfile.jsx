import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getUserDetails, logout } from "../../Redux/Actions/userActions";
import OutsideAlerter from "../../OutsideAlerter";
import stateSaver from "../../mobx/stateSaver";
import { observer } from "mobx-react-lite";
import { projectName, serverLink, spanelLink } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { getRate } from "../../Redux/Actions/userActions";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const HeaderProfile = observer(({ showHeaderLanding }) => {
    const { state, setUserPopUpOpened, setError3LVLOpened } = stateSaver;

    const history = useHistory();
    const [toolsOpened, setToolsOpened] = useState(false);
    const [earnOpened, setEarnOpened] = useState(false);
    const [moreOpened, setMoreOpened] = useState(false);
    const [derivativesOpened, setDerivativesOpened] = useState(false);
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    console.log("userInfo", userInfo);
    console.log("window.location.pathname", window.location.pathname);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserDetails("profile"));
        dispatch(getRate());
    }, [dispatch]);
    const userDetails = useSelector((state) => state.userDetails);
    const { loadingRate, rate, errorUserRate } = useSelector(
        (state) => state.rate
    );
    const { loadingUser, error, user } = userDetails;
    console.log(undefined ? true : false);
    if (
        window.location.pathname == "/signin" ||
        window.location.pathname == "/signup"
    ) {
        return <></>;
    } else if (
        !userInfo &&
        window.location.pathname == "/" &&
        showHeaderLanding
    ) {

        //главная страница если не вошёл
        console.log("header");
        return (
          
                <header className="header">
  <div className="header__container">
    <a className="header__logo" href="#">
      <img style={{width: '30px'}} src="assets/img/logos/default.png" alt="" />
      Altcorex              </a>
    <div className="header__wrapper">
      <div className="header__center">
        <a className="header__link" href="../signin">Trading</a>
        <a className="header__link" href="../signin">P2P</a>
        <a className="header__link" href="../signin">Staking</a>
        <a className="header__link" href="../signin">Wallet</a>
        <a className="header__link hot" href="../signin">Swap</a>
      </div>
      <div className="header__right">
        <a className="header__link-log" href="signin">Log In</a>
        <a className="header__link-up" href="signup">Sign Up</a>
      </div>
    </div>
    <div className="header__btn-mobile">
      <svg width={35} height={35} viewBox="0 0 100 100">
        <path className="header__nav-line header__nav-line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path className="header__nav-line header__nav-line2" d="M 20,50 H 80" />
        <path className="header__nav-line header__nav-line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </div>
  </div>
</header>

            
        );
    } else if (
        userInfo &&
        window.location.pathname == "/" &&
        showHeaderLanding
    ) {
        console.log("header");

        //main page if loged in
        return (
            <header className="header">
            <div className="header__container">
              <a className="header__logo" href="#">
                <img style={{width: '30px'}} src="assets/img/logos/default.png" alt="" />
                Altcorex              </a>
              <div className="header__wrapper">
                <div className="header__center">
                  <a className="header__link" href="../signin">Trading</a>
                  <a className="header__link" href="../signin">P2P</a>
                  <a className="header__link" href="../signin">Staking</a>
                  <a className="header__link" href="../signin">Wallet</a>
                  <a className="header__link hot" href="../signin">Swap</a>
                </div>
                <div className="header__right">
                  <a className="header__link-up" href="../profile/wallet">Profile</a>
                </div>
              </div>
              <div className="header__btn-mobile">
                <svg width={35} height={35} viewBox="0 0 100 100">
                  <path className="header__nav-line header__nav-line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                  <path className="header__nav-line header__nav-line2" d="M 20,50 H 80" />
                  <path className="header__nav-line header__nav-line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
              </div>
            </div>
          </header>
          
        );
    } else if (!showHeaderLanding && window.location.pathname !== "/") {
        console.log("header");
        return (
           
  <header className="header">
            <div className="header__wrapper">
              <div className="header__logo" onclick="location.replace('../')">
                <div className="header__logo-icon">
                  <img style={{width: '30px'}} src="../assets/img/logos/default.png" />
                </div>
                Altcorex          </div>
              <div className="header__links">
                <div className="header__links-wrapper"><a className="header__link" href="../trading">
                    Spot trading
                  </a>
                  <a className="header__link" href="../profile/swap">
                    Swap
                    <span className="header__link-new">0%</span>
                  </a>
                  <div className="header__link header__link-trade">
                    <div className="header__link-wrapper">
                      Derivatives
                      <div className="header__link-arrow">
                        <svg width={11} height={8} viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.34502 3.10642L4.95202 7.05416C5.49516 7.64861 6.37253 7.64861 6.91567 7.05416L10.5227 3.10642C11.4 2.14616 10.7733 0.5 9.53388 0.5H2.31989C1.08042 0.5 0.467644 2.14616 1.34502 3.10642Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                    <div className="header__more">
                      <a className="header__more-link butafor__btn" href="#">
                        <div className="header__more-img">
                          <img src="../assets/img/header/futures.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Futures trading</div>
                          <div className="header__more-description">
                            Perpetual or Quarterly Contracts settled in Crypto
                          </div>
                        </div>
                      </a>
                      <a className="header__more-link butafor__btn" href="#">
                        <div className="header__more-img">
                          <img src="../assets/img/header/options.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Options trading</div>
                          <div className="header__more-description">
                            Trade European-style Vanilla Options
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="header__link header__link-tools">
                    <div className="header__link-wrapper">
                      Tools
                      <div className="header__link-arrow">
                        <svg width={11} height={8} viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.34502 3.10642L4.95202 7.05416C5.49516 7.64861 6.37253 7.64861 6.91567 7.05416L10.5227 3.10642C11.4 2.14616 10.7733 0.5 9.53388 0.5H2.31989C1.08042 0.5 0.467644 2.14616 1.34502 3.10642Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                    <div className="header__more">
                      <a className="header__more-link" href="../market-crypto">
                        <div className="header__more-img">
                          <img src="../assets/img/header/cap.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Market cap</div>
                          <div className="header__more-description">
                            Most of the available crypto assets and sorts them based on the market capitalization                                        
                          </div>
                        </div>
                      </a>
                      <a className="header__more-link" href="../market-screener">
                        <div className="header__more-img">
                          <img src="../assets/img/header/screener.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Market screener</div>
                          <div className="header__more-description">
                            Powerful tool that allows to filter instruments based on fundamental data and various technical indicators
                          </div>
                        </div>
                      </a>
                      <a className="header__more-link" href="../technical-analysis">
                        <div className="header__more-img">
                          <img src="../assets/img/header/tech.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Technical analysis</div>
                          <div className="header__more-description">
                            Advanced tool that displays ratings based on technical indicators
                          </div>
                        </div>
                      </a>
                      <a className="header__more-link" href="../cross-rates">
                        <div className="header__more-img">
                          <img src="../assets/img/header/rates.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Cross rates</div>
                          <div className="header__more-description">                                       
                            Real-time quotes of the selected currencies in comparison to the other major currencies at a glance                                        
                          </div>
                        </div>
                      </a>
                      <a className="header__more-link" href="../heat-map">
                        <div className="header__more-img">
                          <img src="../assets/img/header/heat.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Currency heat map</div>
                          <div className="header__more-description">
                            Quick overview of action in the currency markets. It lets you spot strong and weak currencies in real-time and how strong they are in relation to one another
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <a className="header__link" href="../profile/staking">
                    Staking
                    <span className="header__link-hot">HOT</span>
                  </a>
                  <div className="header__link header__link-earn">
                    <div className="header__link-wrapper">
                      Earn
                      <div className="header__link-arrow">
                        <svg width={11} height={8} viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.34502 3.10642L4.95202 7.05416C5.49516 7.64861 6.37253 7.64861 6.91567 7.05416L10.5227 3.10642C11.4 2.14616 10.7733 0.5 9.53388 0.5H2.31989C1.08042 0.5 0.467644 2.14616 1.34502 3.10642Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                    <div className="header__more">
                      <a className="header__more-link" href="../profile/copy-trading">
                        <div className="header__more-img">
                          <img src="../assets/img/header/copy.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Copy trading</div>
                          <div className="header__more-description">
                            Automate your trading by copying top traders strategies
                          </div>
                        </div>
                      </a>
                      <a className="header__more-link" href="../profile/trading-bots">
                        <div className="header__more-img">
                          <img src="../assets/img/header/bots.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Trading bots</div>
                          <div className="header__more-description">
                            Intelligent pre-built trading bots help you auto-trade and earn all-day-long
                          </div>
                        </div>
                      </a>
                      <a className="header__more-link" href="../profile/launchpad">
                        <div className="header__more-img">
                          <img src="../assets/img/header/launchpad.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Launchpad</div>
                          <div className="header__more-description">
                            Early easy access to new, high-quality crypto projects
                          </div>
                        </div>
                      </a>
                      <a className="header__more-link" href="../profile/space">
                        <div className="header__more-img">
                          <img src="../assets/img/header/space.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Space traveller</div>
                          <div className="header__more-description">
                            Earn with your referral code
                          </div>
                        </div>
                      </a>
                      <a className="header__more-link" href="../profile/savings">
                        <div className="header__more-img">
                          <img src="../assets/img/header/savings.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Savings</div>
                          <div className="header__more-description">
                            Value-added product for flexible returns
                          </div>
                        </div>
                      </a>
                      <a className="header__more-link" href="../profile/stake-eth20">
                        <div className="header__more-img">
                          <img src="../assets/img/header/eth20.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">ETH 2.0 Staking</div>
                          <div className="header__more-description">
                            Don't just hold. Earn an additional 5%-20% locking return
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="header__link header__link-more">
                    <div className="header__link-wrapper">
                      More
                      <div className="header__link-arrow">
                        <svg width={11} height={8} viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.34502 3.10642L4.95202 7.05416C5.49516 7.64861 6.37253 7.64861 6.91567 7.05416L10.5227 3.10642C11.4 2.14616 10.7733 0.5 9.53388 0.5H2.31989C1.08042 0.5 0.467644 2.14616 1.34502 3.10642Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                    <div className="header__more">
                      <a className="header__more-link" href="../nft">
                        <div className="header__more-img">
                          <img src="../assets/img/header/nft.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">NFT marketplace</div>
                          <div className="header__more-description">
                            Explore NFTs from creators worldwide
                          </div>
                        </div>
                      </a>
                      <a className="header__more-link" href="../profile/p2p">
                        <div className="header__more-img">
                          <img src="../assets/img/header/p2p.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">P2P trading</div>
                          <div className="header__more-description">
                            Buy crypto from verified merchants
                          </div>
                        </div>
                      </a>
                      <a className="header__more-link" href="../profile/buy-crypto">
                        <div className="header__more-img">
                          <img src="../assets/img/header/card.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Buy crypto with card</div>
                          <div className="header__more-description">
                            Buy crypto via Card, Apple Pay, Google Pay
                          </div>
                        </div>
                      </a>
                      <a className="header__more-link" href="../profile/token-listing">
                        <div className="header__more-img">
                          <img src="../assets/img/header/tokenlist.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Token listing</div>
                          <div className="header__more-description">
                            We can list your project on our exchange within 48 hours
                          </div>
                        </div>
                      </a>
                      <a className="header__more-link" href="../profile/institutions">
                        <div className="header__more-img">
                          <img src="../assets/img/header/inst.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Institutional home</div>
                          <div className="header__more-description">
                            Altcorex offers the world's most powerful suite of institutional crypto trading solutions
                          </div>
                        </div>
                      </a>
                      <a className="header__more-link" href="cards">
                        <div className="header__more-img">
                          <img src="../assets/img/header/card.svg" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Altcorex Card</div>
                          <div className="header__more-description">
                            Order and ise your card anywhere Visa® debit cards are accepted, at 40M+ merchants worldwide.
                          </div>
                        </div>
                      </a>
                      <a className="header__more-link" href="../profile/ventures">
                        <div className="header__more-img">
                          <img src="../assets/img/header/ventures.png" alt="" />
                        </div>
                        <div className="header__more-wrapper">
                          <div className="header__more-name">Altcorex Ventures</div>
                          <div className="header__more-description">
                            Altcorex Ventures is a fund focused on exploring high-quality projects with great potential
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <a className="header__link" href="../profile/support">
                    Support                   </a>
                  <a className="header__link" href="../nft/my-nfts">
                    My NFTs
                  </a>
                  <a className="header__link" href="../profile/wallet">
                    Wallet : 0 USD
                  </a>
                </div>
              </div>
              <div className="header__right">
                <div className="header__user">
                  <div className="header__user-btn">
                    <div className="header__user-name">
                      testuser16                      </div>
                    <div className="header__user-img">
                      <picture><source srcSet="../assets/img/profile/avatar.svg" type="image/webp" /><img src="../assets/img/profile/avatar.svg" alt="" /></picture>
                    </div>
                  </div>
                  <div className="header-menu__bg">
                    <div className="header-menu">
                      <div className="header-menu__overview">
                        <div className="header-menu__overview-info">
                          <div className="header-menu__overview-img">
                            <img src="../assets/img/header/wallet-overview.svg" alt="" />
                          </div>
                          <div className="header-menu__overview-wrapper">
                            <div className="header-menu__overview-title">
                              Assets overview
                            </div>
                            <div className="header-menu__overview-value">
                              <span>0</span> USD
                            </div>
                          </div>
                        </div>
                        <div className="header-menu__overview-links">
                          <a className="header-menu__overview-link" href="../profile/deposit">
                            <img src="../assets/img/header/wallet-add.svg" alt="" />
                            Deposit
                          </a>
                          <a className="header-menu__overview-link" href="../profile/withdraw">
                            <img src="../assets/img/header/withdraw.svg" alt="" />
                            Withdraw
                          </a>
                        </div>
                      </div>
                      <div className="header-menu__links">
                        <a className="header-menu__links-link" href="../profile/wallet">
                          <img src="../assets/img/header/wallet-menu.svg" alt="" />
                          Wallet
                        </a>
                        <a className="header-menu__links-link" href="../profile/settings">
                          <img src="../assets/img/header/settings.svg" alt="" />
                          Account settings
                        </a>
                        <a className="header-menu__links-link" href="../profile/verification">
                          <img src="../assets/img/header/verification.svg" alt="" />
                          Verification
                        </a>
                        <a className="header-menu__links-link" href="../profile/promo-codes">
                          <img src="../assets/img/header/codes.svg" alt="" />
                          Gift codes
                        </a>
                        <a className="header-menu__links-link" href="../profile/support">
                          <img src="../assets/img/header/support.svg" alt="" />
                          Support                               </a>
                      </div>
                      <div className="header-menu__user">
                        <div className="header-menu__user-container">
                          <a className="header-menu__user-img" href="#">
                            <picture><source srcSet="../assets/img/profile/avatar.svg" type="image/webp" /><img src="../assets/img/profile/avatar.svg" alt="" /></picture>
                          </a>
                          <div className="header-menu__user-wrapper">
                            <div className="header-menu__user-nickname">
                              testuser16                                      </div>
                            <div className="header-menu__user-mail">
                              testuser16@g..                                      </div>
                          </div>
                        </div>
                        <div className="header-menu__user-exit" onclick="location.replace('../logout')">
                          <img src="../assets/img/header/exit.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header__btn-mobile">
                  <svg width={35} height={35} viewBox="0 0 100 100">
                    <path className="header__nav-line header__nav-line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="header__nav-line header__nav-line2" d="M 20,50 H 80" />
                    <path className="header__nav-line header__nav-line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                  </svg>
                </div>
              </div>
            </div>
          </header>
         
          
          
        );
    } else {
        console.log("header");
        return <></>;
    }
});

export default HeaderProfile;

const getWalletBalance = (rate, wallets) => {
    var sum = 0;
    wallets.forEach((item) => {
        sum +=
            item.balance *
            rate.find((toFind) => toFind.coinName == item.id).price;
    });
    return sum;
};

function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + "..";
    }
    return str;
}
