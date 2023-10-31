import React from "react";
import HeaderProfile from "../components/profileComponents/headerProfile";
import { Helmet } from "react-helmet";

const HeatMap=()=>{
        return (

                <div className="webp other">
            
                      
                        <div className="container-fluid mtb15">
  <div className="row">
    <div className="col-md-12">
      {/* TradingView Widget BEGIN */}
      <div className="tradingview-widget-container" style={{width: '100%', height: '900px'}}>
        <iframe scrolling="no" allowTransparency="true" frameBorder={0} src="https://s.tradingview.com/embed-widget/forex-heat-map/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A900%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22SEK%22%2C%22NOK%22%2C%22DKK%22%2C%22HKD%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22shiftlix.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-heat-map%22%2C%22page-uri%22%3A%22shiftlix.com%2Fheat-map%22%7D" title="forex heat-map TradingView widget" lang="en" style={{userSelect: 'none', boxSizing: 'border-box', display: 'block', height: '900px', width: '100%'}} />
        <style dangerouslySetInnerHTML={{__html: "\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\t/* @mixin sf-pro-display-font; */\n\t\tfont-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif !important;\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: #2962FF !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: #1E53E5 !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: #1848CC !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: #2962FF !important;\n\t}\n\t" }} /></div>
      {/* TradingView Widget END */}
    </div>
  </div>
</div>

                </div>
        )
}

export default HeatMap;