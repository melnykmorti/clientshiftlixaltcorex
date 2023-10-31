import React, { useEffect ,useState} from "react";
import { projectName } from "../../App";
const pages=["aboutus","investfocus"]
const VenturesStatic=()=>{
        const [pageActive,setPageActive]=useState(pages[0]);
        useEffect(()=>{
                const t = document.querySelectorAll(".traveller-home__cards-track"),
                e = document.getElementById("track-ventures-portfolio-top"),
                o = document.getElementById("track-ventures-portfolio-bottom");
            
            function n({ element: t, columnGap: e }) {
                let o = 0;
                for (const n of t.children) o += n.scrollWidth + e;
                t.style.setProperty("--x", `-${o}px`);
            }
            
            for (const element of t) element.style.columnGap = "32px";
            
            setTimeout(() => n({ element: e, columnGap: 32 }), 100);
            setTimeout(() => n({ element: o, columnGap: 32 }), 100);
        },[])

        return (<main className="main landings webp other">
        <section className="ventures-home">
          <div className="ventures-home__container">
            <div className="ventures-home__title">
              {projectName} Ventures
            </div>
            <div className="ventures-home__description">
              With an initial capital of $100 million, {projectName} Ventures is a fund focused on
              exploring high-quality {projectName}s with great potential.
            </div>
            <div className="ventures-home__tabs">
              <div className="ventures-home__tab-titles">
                <div className={`ventures-home__tab-title ventures-home__tab-about ${pageActive==pages[0]?"ventures-home__tab-active":""}`}
                onClick={()=>setPageActive(pages[0])}
               >
                  About us
                </div>
                <div className={`ventures-home__tab-title ventures-home__tab-focus ${pageActive==pages[1]?"ventures-home__tab-active":""}`}
                onClick={()=>setPageActive(pages[1])}
                >
                  Investment Focus
                </div>
              </div>
              <div className="ventures-home__tabs-descriptions">
                <div className={`ventures-home__tabs-about ventures-home__tabs-description ${pageActive==pages[0]?"ventures-home__tab-active":""}`}>
                  <div className="ventures-home__tab-description">
                    {projectName} Ventures will focus on the discoveries and investments in
                    various aspects, including blockchain basic infrastructures, Layer2,
                    DeFi, WEB3.0, NFT and Metaverse.
                  </div>
                  <div className="ventures-home__tab-description">
                    Our mission is to explore and invest on the innovative blockchain
                    {projectName}s worldwide and promote sustainable development across the
                    entire industry globally. We look forward to working and growing with
                    passionate dreamers and founders to create value for the blockchain
                    industry, while sharing our global resources and historical experience
                    with the founders.
                  </div>
                </div>
                <div className={`ventures-home__tabs-focus ventures-home__tabs-description ${pageActive==pages[1]?"ventures-home__tab-active":""}`}>
                  <div className="ventures-home__tab-description">
                    Basic infrastructure: Layer 2, to improve technical performance, efficiency, and expansion capacity.<br />
                    Trading/financial {projectName}s: derivatives/DEX aggregation/loans/synthetic assets/Oracle/insurance.<br />
                    Popular blockchain ecosystems: Polkadot/Solana/Near/Polygon/Terra/Avalanche.<br />
                    Application: blockchain browsers/wallets/NFT/GameFi/SocialFi.<br />
                    WEB3.0 tools: data protocol/technical service providers/plug-ins/privacy protection.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ventures-portfolio">
          <div className="ventures-portfolio__container">
            <div className="ventures-portfolio__title">
              Portfolio
            </div>
            <div className="ventures-portfolio__slider-wrapper">
              <div className="ventures-portfolio__slider">
                <div className="ventures-portfolio__cards-track" id="track-ventures-portfolio-top" style={{"-x": '-1560px'}}>
                  <div className="ventures-portfolio__card">
                    <div className="ventures-portfolio__card-img">
                      <picture><source srcSet="../assets/img/ventures-portfolio/arbitrum.webp" type="image/webp" /><picture><source srcSet="../assets/img/ventures-portfolio/arbitrum.webp" type="image/webp" /><img src="../assets/img/ventures-portfolio/arbitrum.jpg" alt="" /></picture></picture>
                    </div>
                    <div className="ventures-portfolio__card-title">
                      Arbitrum
                    </div>
                    <div className="ventures-portfolio__card-description">
                      Arbitrum is a Layer 2 scaling solution for Ethereum
                      developed by Offchain Labs. Being EVM-compatible to
                      the bytecode level, there are vast dApps and NFTs.
                    </div>
                  </div>
                  <div className="ventures-portfolio__card">
                    <div className="ventures-portfolio__card-img">
                      <picture><source srcSet="../assets/img/ventures-portfolio/zksync.webp" type="image/webp" /><picture><source srcSet="../assets/img/ventures-portfolio/zksync.webp" type="image/webp" /><img src="../assets/img/ventures-portfolio/zksync.jpg" alt="" /></picture></picture>
                    </div>
                    <div className="ventures-portfolio__card-title">
                      zkSync
                    </div>
                    <div className="ventures-portfolio__card-description">
                      zkSync is the first EVM-Compatible ZK Rollup with an off-chain
                      data availability extension that offers 1-3 cent transaction fees.
                    </div>
                  </div>
                  <div className="ventures-portfolio__card">
                    <div className="ventures-portfolio__card-img">
                      <picture><source srcSet="../assets/img/ventures-portfolio/gods-unchained.webp" type="image/webp" /><picture><source srcSet="../assets/img/ventures-portfolio/gods-unchained.webp" type="image/webp" /><img src="../assets/img/ventures-portfolio/gods-unchained.jpg" alt="" /></picture></picture>
                    </div>
                    <div className="ventures-portfolio__card-title">
                      Gods Unchained
                    </div>
                    <div className="ventures-portfolio__card-description">
                      Gods Unchained is a free-to-play tactical card game that
                      gives players true ownership of their in-game items.
                    </div>
                  </div>
                  <div className="ventures-portfolio__card">
                    <div className="ventures-portfolio__card-img">
                      <picture><source srcSet="../assets/img/ventures-portfolio/big-time-studios.webp" type="image/webp" /><picture><source srcSet="../assets/img/ventures-portfolio/big-time-studios.webp" type="image/webp" /><img src="../assets/img/ventures-portfolio/big-time-studios.jpg" alt="" /></picture></picture>
                    </div>
                    <div className="ventures-portfolio__card-title">
                      Big Time Studios
                    </div>
                    <div className="ventures-portfolio__card-description">
                      Big Time is a Free to Play fast-action paced cooperative RPG
                      where you can play with up to 6 people and to earn cosmetic NFTs.
                    </div>
                  </div>
                  {/*duplicated elements for loop animation (not delete)*/}
                  <div className="ventures-portfolio__card">
                    <div className="ventures-portfolio__card-img">
                      <picture><source srcSet="../assets/img/ventures-portfolio/arbitrum.webp" type="image/webp" /><picture><source srcSet="../assets/img/ventures-portfolio/arbitrum.webp" type="image/webp" /><img src="../assets/img/ventures-portfolio/arbitrum.jpg" alt="" /></picture></picture>
                    </div>
                    <div className="ventures-portfolio__card-title">
                      Arbitrum
                    </div>
                    <div className="ventures-portfolio__card-description">
                      Arbitrum is a Layer 2 scaling solution for Ethereum
                      developed by Offchain Labs. Being EVM-compatible to
                      the bytecode level, there are vast dApps and NFTs.
                    </div>
                  </div>
                  <div className="ventures-portfolio__card">
                    <div className="ventures-portfolio__card-img">
                      <picture><source srcSet="../assets/img/ventures-portfolio/zksync.webp" type="image/webp" /><picture><source srcSet="../assets/img/ventures-portfolio/zksync.webp" type="image/webp" /><img src="../assets/img/ventures-portfolio/zksync.jpg" alt="" /></picture></picture>
                    </div>
                    <div className="ventures-portfolio__card-title">
                      zkSync
                    </div>
                    <div className="ventures-portfolio__card-description">
                      zkSync is the first EVM-Compatible ZK Rollup with an off-chain
                      data availability extension that offers 1-3 cent transaction fees.
                    </div>
                  </div>
                  <div className="ventures-portfolio__card">
                    <div className="ventures-portfolio__card-img">
                      <picture><source srcSet="../assets/img/ventures-portfolio/gods-unchained.webp" type="image/webp" /><picture><source srcSet="../assets/img/ventures-portfolio/gods-unchained.webp" type="image/webp" /><img src="../assets/img/ventures-portfolio/gods-unchained.jpg" alt="" /></picture></picture>
                    </div>
                    <div className="ventures-portfolio__card-title">
                      Gods Unchained
                    </div>
                    <div className="ventures-portfolio__card-description">
                      Gods Unchained is a free-to-play tactical card game that
                      gives players true ownership of their in-game items.
                    </div>
                  </div>
                  <div className="ventures-portfolio__card">
                    <div className="ventures-portfolio__card-img">
                      <picture><source srcSet="../assets/img/ventures-portfolio/big-time-studios.webp" type="image/webp" /><picture><source srcSet="../assets/img/ventures-portfolio/big-time-studios.webp" type="image/webp" /><img src="../assets/img/ventures-portfolio/big-time-studios.jpg" alt="" /></picture></picture>
                    </div>
                    <div className="ventures-portfolio__card-title">
                      Big Time Studios
                    </div>
                    <div className="ventures-portfolio__card-description">
                      Big Time is a Free to Play fast-action paced cooperative RPG
                      where you can play with up to 6 people and to earn cosmetic NFTs.
                    </div>
                  </div>
                  {/*duplicated elements for loop animation (not delete)*/}
                </div>
                <div className="ventures-portfolio__cards-track" id="track-ventures-portfolio-bottom" style={{"-x": '-1560px'}}>
                  <div className="ventures-portfolio__card">
                    <div className="ventures-portfolio__card-img">
                      <picture><source srcSet="../assets/img/ventures-portfolio/efinity.webp" type="image/webp" /><picture><source srcSet="../assets/img/ventures-portfolio/efinity.webp" type="image/webp" /><img src="../assets/img/ventures-portfolio/efinity.jpg" alt="" /></picture></picture>
                    </div>
                    <div className="ventures-portfolio__card-title">
                      Efinity
                    </div>
                    <div className="ventures-portfolio__card-description">
                      Efinity is a next-generation blockchain for
                      NFTs developed by Enjin on Polkadot.
                    </div>
                  </div>
                  <div className="ventures-portfolio__card">
                    <div className="ventures-portfolio__card-img">
                      <picture><source srcSet="../assets/img/ventures-portfolio/bit-country.webp" type="image/webp" /><picture><source srcSet="../assets/img/ventures-portfolio/bit-country.webp" type="image/webp" /><img src="../assets/img/ventures-portfolio/bit-country.jpg" alt="" /></picture></picture>
                    </div>
                    <div className="ventures-portfolio__card-title">
                      Bit.country
                    </div>
                    <div className="ventures-portfolio__card-description">
                      Bit.Country &amp; Metaverse.Network is the Platform
                      for User-created Metaverses &amp; Games with Opportunities to Earn.
                    </div>
                  </div>
                  <div className="ventures-portfolio__card">
                    <div className="ventures-portfolio__card-img">
                      <picture><source srcSet="../assets/img/ventures-portfolio/realy.webp" type="image/webp" /><picture><source srcSet="../assets/img/ventures-portfolio/realy.webp" type="image/webp" /><img src="../assets/img/ventures-portfolio/realy.jpg" alt="" /></picture></picture>
                    </div>
                    <div className="ventures-portfolio__card-title">
                      Realy
                    </div>
                    <div className="ventures-portfolio__card-description">
                      Realy Metaverse is the first Live-to-Earn metaverse on Solana,
                      and will be a virtual city with 3A graphics.
                    </div>
                  </div>
                  <div className="ventures-portfolio__card">
                    <div className="ventures-portfolio__card-img">
                      <picture><source srcSet="../assets/img/ventures-portfolio/clover.webp" type="image/webp" /><picture><source srcSet="../assets/img/ventures-portfolio/clover.webp" type="image/webp" /><img src="../assets/img/ventures-portfolio/clover.jpg" alt="" /></picture></picture>
                    </div>
                    <div className="ventures-portfolio__card-title">
                      Clover
                    </div>
                    <div className="ventures-portfolio__card-description">
                      Clover Finance is substrate-based, EVM-compatible blockchain
                      infrastructure platform, focus on multi- and cross-chain compatibility
                      for DeFi applications and interoperability between different
                    </div>
                  </div>
                  {/*duplicated elements for loop animation (not delete)*/}
                  <div className="ventures-portfolio__card">
                    <div className="ventures-portfolio__card-img">
                      <picture><source srcSet="../assets/img/ventures-portfolio/efinity.webp" type="image/webp" /><picture><source srcSet="../assets/img/ventures-portfolio/efinity.webp" type="image/webp" /><img src="../assets/img/ventures-portfolio/efinity.jpg" alt="" /></picture></picture>
                    </div>
                    <div className="ventures-portfolio__card-title">
                      Efinity
                    </div>
                    <div className="ventures-portfolio__card-description">
                      Efinity is a next-generation blockchain for
                      NFTs developed by Enjin on Polkadot.
                    </div>
                  </div>
                  <div className="ventures-portfolio__card">
                    <div className="ventures-portfolio__card-img">
                      <picture><source srcSet="../assets/img/ventures-portfolio/bit-country.webp" type="image/webp" /><picture><source srcSet="../assets/img/ventures-portfolio/bit-country.webp" type="image/webp" /><img src="../assets/img/ventures-portfolio/bit-country.jpg" alt="" /></picture></picture>
                    </div>
                    <div className="ventures-portfolio__card-title">
                      Bit.country
                    </div>
                    <div className="ventures-portfolio__card-description">
                      Bit.Country &amp; Metaverse.Network is the Platform
                      for User-created Metaverses &amp; Games with Opportunities to Earn.
                    </div>
                  </div>
                  <div className="ventures-portfolio__card">
                    <div className="ventures-portfolio__card-img">
                      <picture><source srcSet="../assets/img/ventures-portfolio/realy.webp" type="image/webp" /><picture><source srcSet="../assets/img/ventures-portfolio/realy.webp" type="image/webp" /><img src="../assets/img/ventures-portfolio/realy.jpg" alt="" /></picture></picture>
                    </div>
                    <div className="ventures-portfolio__card-title">
                      Realy
                    </div>
                    <div className="ventures-portfolio__card-description">
                      Realy Metaverse is the first Live-to-Earn metaverse on Solana,
                      and will be a virtual city with 3A graphics.
                    </div>
                  </div>
                  <div className="ventures-portfolio__card">
                    <div className="ventures-portfolio__card-img">
                      <picture><source srcSet="../assets/img/ventures-portfolio/clover.webp" type="image/webp" /><picture><source srcSet="../assets/img/ventures-portfolio/clover.webp" type="image/webp" /><img src="../assets/img/ventures-portfolio/clover.jpg" alt="" /></picture></picture>
                    </div>
                    <div className="ventures-portfolio__card-title">
                      Clover
                    </div>
                    <div className="ventures-portfolio__card-description">
                      Clover Finance is substrate-based, EVM-compatible blockchain
                      infrastructure platform, focus on multi- and cross-chain compatibility
                      for DeFi applications and interoperability between different
                    </div>
                  </div>
                  {/*duplicated elements for loop animation (not delete)*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ventures-support">
          <div className="ventures-support__container">
            <div className="ventures-support__title">
              Post investment support
            </div>
            <div className="ventures-support__cards">
              <div className="ventures-support__card ventures-support__card-overseas">
                <div className="ventures-support__card-img">
                  <picture><source srcSet="../assets/img/ventures-support/journey0Dark.30b824e.png" type="image/webp" /><picture><source srcSet="../assets/img/ventures-support/journey0Dark.30b824e.png" type="image/webp" /><img src="../assets/img/ventures-support/journey0Dark.30b824e.png" alt="" /></picture></picture>
                </div>
                <div className="ventures-support__card-wrapper">
                  <div className="ventures-support__card-title">
                    Overseas resources
                  </div>
                  <div className="ventures-support__card-description">
                    We can provide entrepreneurs with overseas resources around the world.
                    Whether in China, Silicon Valley, Japan, South Korea, or Southeast Asia,
                    we have formed a resource network with local media and KOLs, which can
                    help entrepreneurs from different perspectives, such as clarifying or
                    improving products and services, assisting entrepreneurs in establishing
                    strategic partnerships, and contacting potential customers, investors,
                    acquirers, and business consultants.
                  </div>
                </div>
              </div>
              <div className="ventures-support__card ventures-support__card-ecosystem">
                <div className="ventures-support__card-img">
                  <picture><source srcSet="../assets/img/ventures-support/journey1Dark.6cb472a.png" type="image/webp" /><picture><source srcSet="../assets/img/ventures-support/journey1Dark.6cb472a.png" type="image/webp" /><img src="../assets/img/ventures-support/journey1Dark.6cb472a.png" alt="" /></picture></picture>
                </div>
                <div className="ventures-support__card-wrapper">
                  <div className="ventures-support__card-title">
                    Ecosystem resources
                  </div>
                  <div className="ventures-support__card-description">
                    We provide strong support for investment {projectName}s. {projectName}s with
                    our in-depth participation and investment will be recommended to
                    {projectName} and have the opportunity to access numerous {projectName} products,
                    services, publicity resources, users, and brand endorsement. From
                    the initial stage of the launch, a detailed scheme is formulated
                    according to the characteristics of the {projectName}, and all the
                    advantages of this {projectName} will be displayed to the users of {projectName}                                    and users of the global blockchain industry.
                  </div>
                </div>
              </div>
              <div className="ventures-support__card ventures-support__card-development">
                <div className="ventures-support__card-img">
                  <picture><source srcSet="../assets/img/ventures-support/journey3Dark.db2e403.png" type="image/webp" /><picture><source srcSet="../assets/img/ventures-support/journey3Dark.db2e403.png" type="image/webp" /><img src="../assets/img/ventures-support/journey3Dark.db2e403.png" alt="" /></picture></picture>
                </div>
                <div className="ventures-support__card-wrapper">
                  <div className="ventures-support__card-title">
                    Development plans
                  </div>
                  <div className="ventures-support__card-description">
                    We have only one goal in mind: helping entrepreneurs to build a powerful
                    company. Your success is our success. We understand that mutual trust
                    is the key to success, so we promise always be open and honest with you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      )
}

export default VenturesStatic;