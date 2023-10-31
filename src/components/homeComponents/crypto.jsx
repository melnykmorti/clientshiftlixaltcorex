import React, { useEffect } from "react";

const CryptoCurr=()=>{

        useEffect(()=>{
                const trackOne = document.getElementById("track-one")

                function getChildrenSumWidth({element}) {
                    let i = 0
                    for (const child of element.children) {
                        i += child.scrollWidth
                    }
                    startAnimation(element, i / 2)
                }
                
                function startAnimation(element, value) {
                    element.style.setProperty('--x', `-${value}px`)
                }
                
                setTimeout(getChildrenSumWidth, 100, {element: trackOne})
        },[])

        return (<section className="cryptocurrencies">
  <div className="cryptocurrencies__container">
    <div className="cryptocurrencies__title">
      Select From <div>Over <span>150</span></div> Cryptocurrencies
    </div>
    <div className="cryptocurrencies__description">
      Trade BTC, ETH and other cryptocurrencies in minutes.
    </div>
    <div className="cryptocurrencies__coins">
      <div className="cryptocurrencies__coins-track" id="track-one" style={{"-x": '-2876px'}}>
        <img src="landings/new_3/images/cryptocurrencies/coins.webp" alt="" />
        <img src="landings/new_3/images/cryptocurrencies/coins.webp" alt="" />
      </div>
    </div>
  </div>
</section>
)
}

export default CryptoCurr;