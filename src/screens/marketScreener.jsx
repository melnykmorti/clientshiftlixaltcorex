import React from "react";
import HeaderProfile from "../components/profileComponents/headerProfile";
import { Helmet } from "react-helmet";

const MarketScreener = () => {
    return (
        <div className="webp other">
           
          
          
            <div className="container-fluid mtb15">
                <div className="row">
                    <div className="col-md-12">
                        {/* TradingView Widget BEGIN */}
                        <div
                            className="tradingview-widget-container"
                            style={{ width: "100%", height: "900px" }}
                        >
                            <iframe
                                allowTransparency="true"
                                frameBorder={0}
                                src="https://www.tradingview-widget.com/embed-widget/screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A900%2C%22defaultColumn%22%3A%22overview%22%2C%22defaultScreen%22%3A%22general%22%2C%22market%22%3A%22crypto%22%2C%22showToolbar%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22shiftlix.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22cryptoscreener%22%7D"
                                title="screener TradingView widget"
                                lang="en"
                                style={{
                                    userSelect: "none",
                                    boxSizing: "border-box",
                                    display: "block",
                                    height: "900px",
                                    width: "100%",
                                }}
                            />
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: "\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\t/* @mixin sf-pro-display-font; */\n\t\tfont-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif !important;\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: #2962FF !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: #1E53E5 !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: #1848CC !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: #2962FF !important;\n\t}\n\t",
                                }}
                            />
                        </div>
                        {/* TradingView Widget END */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketScreener;
