import React, { useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { createdAtConverter, useInterval } from "../utils";
import TradingViewWidget from "react-tradingview-widget";
import uniqid from "uniqid";
import moment from "moment";
import { listMyOrders } from "../../Redux/Actions/orderActions";
import { getUserDetails } from "../../Redux/Actions/userActions";
import {
    createTrade,
    listMyTrade,
    listTickers,
} from "../../Redux/Actions/tradeActions";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { createTransfer } from "../../Redux/Actions/withdrawActions";
import $ from "jquery";
import Toast from "../LoadingError/toast";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createChart } from "lightweight-charts";
import { serverLink } from "../../App";

import axios from "axios";
import MarketTrading from "./tradingComponents/marketT";
import LimitsTrading from "./tradingComponents/limitsT";
import TriggerOrderTrading from "./tradingComponents/triggerOrderT";
import HeaderProfile from "./headerProfile";
import { Helmet } from "react-helmet";
const pagesTrading = ["open", "history"];
let tvScriptLoadingPromise;
const pages = ["limit", "market", "trigger"];
const Trading = ({ match }) => {
    let { pair } = Object.fromEntries(
        new URLSearchParams(window.location.search)
    );
    if (!pair) {
        pair="BTC_USDT";
     }
    const history = useHistory();

    const [chartLoaded, setChartLoaded] = useState(false);

    //  const [isloaded, setIsLoader] = useState(false);
    const [pageActiveOrders, setPageActiveOrders] = useState(pagesTrading[0]);
    const [valueSell, setValueSell] = useState("");
    const [pageActive, setPageActive] = useState(pages[1]);
    const [valueRangeSell, setValueRangeSell] = useState("0");
    const [valueBuy, setValueBuy] = useState("");
    const [valueRangeBuy, setValueRangeBuy] = useState("0");
    const [currencyNowPrice, setCurrencyNowPrice] = useState(0);

    const onLoadScriptRef = useRef();
    
    const dispatch = useDispatch();
    const toastId = React.useRef(null);
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    };
    const firstCurrency = pair.split("_")[0];
    const secondCurrency = pair.split("_")[1];
    const userDetails = useSelector((state) => state.userDetails);
    const { user, loadingUser } = userDetails;
    const tickerList = useSelector((state) => state.tickerList);
    const { loadingTickersList, tickersList, errorTickersList } = tickerList;
    console.log("tickerList",tickerList);
    useEffect(async () => {
        if (!loadingUser && !chartLoaded) {
            setChartLoaded(true);
            var tv_chart_height = $(".center-top-ghTgp").height();
            const chartPropeties = {
                // width: 850,
                
                height: tv_chart_height,
                timeScale: {
                    timeVisible: true,
                    secondVisible: true,
                },
                localization: {
                    priceFormatter: (price) => {
                        if (price > 100) {
                            return parseFloat(price).toFixed(2);
                        }
                        if (price > 1 && price < 100) {
                            return parseFloat(price).toFixed(4);
                        }
                        if (price <= 1 && price > 0.001) {
                            return parseFloat(price).toFixed(5);
                        }
                        if (price < 0.001) {
                            return parseFloat(price).toFixed(8);
                        }
                    },
                },
                watermark: {
                    color: "#1f2226",
                    visible: true,
                    text: "     ",
                    fontSize: 50,
                    fontWeight: "bold",
                    horzAlign: "center",
                    vertAlign: "center",
                },
                layout: {
                    background: {
                        color: '#fff'
                      },
                    textColor: "#ffffff",
                    fontSize: 12,
                    fontFamily: "Roboto-Regular, sans-serif",
                },
                grid: {
                    vertLines: {
                        color: "#1d2127",
                        style: 1,
                        visible: true,
                    },
                    horzLines: {
                        color: "#1d2127",
                        style: 1,
                        visible: true,
                    },
                },
                localization: {
                    locale: "en-US",
                },
                crosshair: {
                    vertLine: {
                        color: "#767f8b",
                        width: 0.5,
                        style: 1,
                        visible: true,
                        labelVisible: true,
                    },
                    horzLine: {
                        color: "#767f8b",
                        width: 0.5,
                        style: 0,
                        visible: true,
                        labelVisible: true,
                    },
                    mode: 3,
                },
            };
            function get_percent(data, customSymbol) {
                //return data;
                if (all_actions != undefined) {
                    for (let i = 0; i < all_actions.length; i++) {
                        if (all_actions[i]["pair"] == customSymbol) {
                            var type_action = parseInt(
                                all_actions[i]["type_action"]
                            );
                            var percent = parseFloat(all_actions[i]["percent"]);
                            data = parseFloat(data);
                            if (type_action == 2) {
                                return data + (data * percent) / 100;
                            }
                            if (type_action == 1) {
                                return data - (data * percent) / 100;
                            }
                            if (type_action == 0) {
                                return data;
                            }
                        }
                    }
                } else {
                    return data;
                }
            }
            function addCommas(nStr) {
                nStr += "";
                let x = nStr.split(".");
                let x1 = x[0];
                let x2 = x.length > 1 ? "." + x[1] : "";
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, "$1" + "," + "$2");
                }
                return x1 + x2;
            }
            const domElement = document.querySelector("#tvchart");
            const chart = createChart(domElement, chartPropeties);
            const candleSeries = chart.addCandlestickSeries();
            var volumeSeries = chart.addHistogramSeries({
                priceFormat: {
                    type: "volume",
                },
                priceScaleId: "",
                scaleMargins: {
                    bottom: 0.01,
                    top: 1,
                },
            });
            var all_actions;

            //const cdata = chart_data;
            let symbol = document
                .querySelector("#var_for_chart")
                .getAttribute("symbol");
            let customSymbol = document
                .querySelector("#var_for_chart")
                .getAttribute("customSymbol");
            const { data } = await axios.get(
                `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=4h&limit=1000`
            );
            const cdata = data.map((item) => {
                return {
                    time: item[0] / 1000,
                    open: (
                        parseFloat(item[1]) +
                        parseFloat(
                            user.tradingProps.find((item) => item.pair == pair)
                                .CHECK_TRADING_CURRENCY_PRICE
                        )
                    ).toString(),
                    high: (
                        parseFloat(item[2]) +
                        parseFloat(
                            user.tradingProps.find((item) => item.pair == pair)
                                .CHECK_TRADING_CURRENCY_PRICE
                        )
                    ).toString(),
                    low: (
                        parseFloat(item[3]) +
                        parseFloat(
                            user.tradingProps.find((item) => item.pair == pair)
                                .CHECK_TRADING_CURRENCY_PRICE
                        )
                    ).toString(),
                    close: (
                        parseFloat(item[4]) +
                        parseFloat(
                            user.tradingProps.find((item) => item.pair == pair)
                                .CHECK_TRADING_CURRENCY_PRICE
                        )
                    ).toString(),
                    volume: item[5],
                };
            });
            console.log("cdata", cdata);

            const volume_data = cdata.map((d) => {
                let clr;
                if (parseFloat(d[1]) < parseFloat(d[4])) {
                    clr = "#0f3a36"; //green
                } else {
                    clr = "#501f1e"; // red
                }

                return {
                    time: d.time,
                    value: parseFloat(d.volume) / 10000,
                    color: clr,
                };
            });
            console.log("volume_data", volume_data[0]);
            const log = console.log;
            // volumeSeries.setData(volume_data);

            candleSeries.setData(cdata);
            chart.applyOptions({
                watermark: {
                    color: "#1f2226",
                    visible: true,
                    text: "     ",
                    fontSize: 50,
                    fontWeight: "bold",
                    horzAlign: "center",
                    vertAlign: "center",
                },
                layout: {
                    backgroundColor: "#17181e",
                    textColor: "#515964",
                    fontSize: 12,
                    fontFamily: "Roboto-Regular, sans-serif",
                },
                grid: {
                    vertLines: {
                        color: "#1d2127",
                        style: 1,
                        visible: true,
                    },
                    horzLines: {
                        color: "#1d2127",
                        style: 1,
                        visible: true,
                    },
                },
                localization: {
                    locale: "en-US",
                },
                crosshair: {
                    vertLine: {
                        color: "#767f8b",
                        width: 0.5,
                        style: 1,
                        visible: true,
                        labelVisible: true,
                    },
                    horzLine: {
                        color: "#767f8b",
                        width: 0.5,
                        style: 0,
                        visible: true,
                        labelVisible: true,
                    },
                    mode: 3,
                },
                
            });
            function reloadCurrencyPrice(socket, now) {
                var new_price = parseFloat(socket) + now;
                return new_price;
            }

            var his_close = "";
            var his_edited = "false";

            var soc_his_time = 0;
            var new_fix_time = 0;
            var last_currency_price = 0;

            var pairs_for_ajax = $("#get_pairs_for_js").val();

            var his_close = "";
            var his_edited = "false";

            var soc_his_time = 0;
            var new_fix_time = 0;
            var last_currency_price = 0;
            // //wss://stream.binance.com:9443/stream?streams=!ticker@arr@3000ms

            $.ajax({
                url: `${serverLink}/api/ajax/trading_live?action=CHECK_TRADING_CURRENCY_PRICE&pair=${pair}&id=${user._id}`,
                type: "POST",
                //  headers:{ Authorization: `Bearer ${userInfo.token}`,},
                success: function (response) {
                    var currency_now_price = parseFloat(response);
                    //setCurrencyNowPrice(currency_now_price);
                    let symbol = document
                        .querySelector("#var_for_chart")
                        .getAttribute("symbol");
                    let customSymbol = document
                        .querySelector("#var_for_chart")
                        .getAttribute("customSymbol");
                    log("symbol", symbol);
                    // if (customSymbol == "") {
                    //     customSymbol = symbol;
                    // } else {
                    //     symbol = document
                    //         .querySelector("#var_for_chart")
                    //         .getAttribute("customSymbol");
                    //     customSymbol = document
                    //         .querySelector("#var_for_chart")
                    //         .getAttribute("symbol");
                    // }
                    log(symbol);
                    const wsLiveChart = new WebSocket(
                        "wss://stream.binance.com:9443/ws/" +
                            symbol.toLowerCase() +
                            "@kline_1m"
                    );
                    wsLiveChart.onopen = function () {};

                    wsLiveChart.onmessage = function (onmessage) {
                        let resp_socket = JSON.parse(onmessage.data);

                        $.ajax({
                            url: `${serverLink}/api/ajax/web_get_edited_pair?action=get_pair_status&pair=${pair}&id=${user._id}`,
                            method: "POST",

                            data: {
                                action: "get_pair_status",
                                pairs: pairs_for_ajax,
                            },
                            success: function (response) {
                                console.log("response",response);
                                if (response == "false") {
                                    let time = Math.floor(
                                        resp_socket.k.T / 1000
                                    );

                                    let high = reloadCurrencyPrice(
                                        get_percent(
                                            resp_socket.k.h,
                                            customSymbol
                                        ),
                                        currency_now_price
                                    );
                                    setCurrencyNowPrice(high);
                                    let low = reloadCurrencyPrice(
                                        get_percent(
                                            resp_socket.k.l,
                                            customSymbol
                                        ),
                                        currency_now_price
                                    );
                                    let close = reloadCurrencyPrice(
                                        get_percent(
                                            resp_socket.k.c,
                                            customSymbol
                                        ),
                                        currency_now_price
                                    );
                                    let open;
                                    if (his_edited == "true") {
                                        open = his_close;
                                        var new_soc_his_time =
                                            new_fix_time + 60;
                                        if (new_soc_his_time <= time) {
                                            log(new_soc_his_time);
                                            log(time);
                                            his_edited = "false";
                                        }
                                    } else {
                                        open = reloadCurrencyPrice(
                                            get_percent(
                                                resp_socket.k.o,
                                                customSymbol
                                            ),
                                            currency_now_price
                                        );
                                    }

                                    soc_his_time = time;

                                    let rez = {
                                        time: time,
                                        open: open,
                                        high: high,
                                        low: low,
                                        close: close,
                                    };

                                    // log(rez)

                                    candleSeries.update(rez);

                                    var fixed_price = parseFloat(close);
                                    if (parseFloat(close) > 1) {
                                        fixed_price = fixed_price.toFixed(2);
                                    } else {
                                        fixed_price = fixed_price.toFixed(6);
                                    }

                                    $("#c_i_p_ajax_sp2").html(fixed_price);
                                    $("#info_usd").html(`~$${fixed_price}`);
                                    $("#aj_live_price_3").html(fixed_price);
                                    var new_symbol = symbol
                                        .split("USDT")
                                        .join("");
                                    $("html head")
                                        .find("title")
                                        .text(
                                            "$" +
                                                addCommas(fixed_price) +
                                                " - Buy and sell Bitcoin and Ethereum"
                                        );
                                    let pair_price = parseFloat(close);

                                    $("#aj_live_new_price_block_2").html(
                                        fixed_price + " USD"
                                    );
                                    $("#aj_live_new_price_block_1").html(
                                        fixed_price
                                    );
                                    $("#currency_in_list_" + new_symbol).html(
                                        fixed_price
                                    );

                                    if (
                                        last_currency_price < pair_price ||
                                        last_currency_price == 0
                                    ) {
                                        $(
                                            "#price_block_minus_plus"
                                        ).removeClass(
                                            "order__info-price-minus"
                                        );
                                        $(
                                            "#price_block_minus_plus"
                                        ).removeClass("order__info-price-plus");

                                        $("#price_block_minus_plus").addClass(
                                            "order__info-price-plus"
                                        );
                                    } else {
                                        $(
                                            "#price_block_minus_plus"
                                        ).removeClass(
                                            "order__info-price-minus"
                                        );
                                        $(
                                            "#price_block_minus_plus"
                                        ).removeClass("order__info-price-plus");

                                        $("#price_block_minus_plus").addClass(
                                            "order__info-price-minus"
                                        );
                                    }

                                    last_currency_price = pair_price;
                                } else {
                                    $.ajax({
                                        url: `${serverLink}/api/ajax/web_get_edited_pair?action=get_edited_status&pair=${pair}&id=${user._id}`,
                                        type: "POST",
                                        // data: {
                                        //     action: "get_edited_status",
                                        //     pairs: pairs_for_ajax,
                                        // },

                                        success: function (response) {
                                            his_edited = "true";
                                            log("resoinse", response);
                                            var json = response;
                                            let time = Math.floor(
                                                json["g_time"]
                                            );

                                            new_fix_time = Math.floor(
                                                json["g_time"]
                                            );
                                            console.log(new_fix_time);
                                            const timestampnow = Math.floor(
                                                Date.now()
                                            );
                                            if (
                                                timestampnow >
                                                new_fix_time + 2000
                                            ) {
                                                new_fix_time =
                                                    Math.floor(timestampnow);
                                            }
                                            console.log(new_fix_time);
                                            if (soc_his_time > time) {
                                                time = soc_his_time;
                                            }
                                            let open = get_percent(
                                                json["g_open"],
                                                customSymbol
                                            );
                                            let high = get_percent(
                                                json["g_high"],
                                                customSymbol
                                            );
                                            let low = get_percent(
                                                json["g_low"],
                                                customSymbol
                                            );
                                            let close = get_percent(
                                                json["g_close"],
                                                customSymbol
                                            );
                                            his_close = get_percent(
                                                json["g_close"],
                                                customSymbol
                                            );

                                            let rez = {
                                                time: time,
                                                open: open,
                                                high: high,
                                                low: low,
                                                close: close,
                                            };
                                            log("update rez");
                                            // log(rez)
                                            candleSeries.update(rez);

                                            var fixed_price = parseFloat(close);
                                            if (parseFloat(close) > 1) {
                                                fixed_price =
                                                    fixed_price.toFixed(2);
                                            } else {
                                                fixed_price =
                                                    fixed_price.toFixed(6);
                                            }

                                            $("#c_i_p_ajax_sp2").html(
                                                fixed_price
                                            );
                                            $("#aj_live_price_3").html(
                                                fixed_price
                                            );
                                            var new_symbol = symbol
                                                .split("USDT")
                                                .join("");
                                            $("html head")
                                                .find("title")
                                                .text(
                                                    "$" +
                                                        addCommas(fixed_price) +
                                                        " - Buy and sell Bitcoin and Ethereum"
                                                );
                                            let pair_price = parseFloat(close);
                                        },
                                        contentType:
                                            "application/json; charset=utf-8",
                                    });
                                }
                            },
                        });
                    };

                    function responseOrder(data) {}
                },

                //log(parseFloat(1).toFixed(4))
            });

            var pairs_value = $("#pairs").val();
            var pairss_one = $("#one_pair").val();
            var pairss_two = $("#two_pair").val();
            var new_pairs = pairss_one + "_" + pairss_two;
            var first_red_block;
            var first_green_block;

            $.ajax({
                url: `${serverLink}/api/ajax/trading_live?action=TRADING_BTC_USDT&pair=${pair}`,
                type: "POST",
                data: {
                    action: "TRADING_BTC_USDT",
                    pairs: pairs_value,
                    new_pairs: new_pairs,
                },
                success: function (response) {
                    var random_number = Math.floor(Math.random() * 10 + 4);
                    var json = response;

                    //   let pair_price = parseFloat(json[1][0]);

                    var tr_block_id = 1; //start 6
                    var new_tr_block_id = 1; // start 7
                    var for_tr_block_id = 1;

                    var json_red_count = 0; //limit 1000
                    var json_green_count = 10; //limit 1000
                    const asks = "asks";
                    const bids = "bids";
                    var red_block = "";
                    var green_block = "";

                    for (var i = 0; i < 19; i++) {
                        function random_number() {
                            // Random Number Red
                            var random_number_2 = Math.floor(
                                Math.random() * 7 + 1
                            );
                            var random_true = "";
                            if (random_number_2 == 1) {
                                random_true = "5";
                            } else if (random_number_2 == 2) {
                                random_true = "8";
                            } else if (random_number_2 == 3) {
                                random_true = "10";
                            } else if (random_number_2 == 4) {
                                random_true = "20";
                            } else if (random_number_2 == 5) {
                                random_true = "40";
                            } else if (random_number_2 == 6) {
                                random_true = "60";
                            } else if (random_number_2 == 7) {
                                random_true = "80";
                            } else {
                                random_true = "";
                            }

                            return random_true;
                        }
                        console.log("json", json);
                        var two_price_red =
                            parseFloat(json[asks][json_red_count][0]) *
                            parseFloat(json[asks][json_red_count][1]);

                        var two_price_green =
                            parseFloat(json[bids][json_green_count][0]) *
                            parseFloat(json[bids][json_green_count][1]);

                        var two_amount_red = parseFloat(
                            json[asks][json_red_count][1]
                        );
                        if (two_amount_red > 1) {
                            two_amount_red = two_amount_red.toFixed(2);
                        } else {
                            two_amount_red = two_amount_red.toFixed(6);
                        }

                        var two_amount_green = parseFloat(
                            json[bids][json_green_count][1]
                        );
                        if (two_amount_green > 1) {
                            two_amount_green = two_amount_green.toFixed(2);
                        } else {
                            two_amount_green = two_amount_green.toFixed(6);
                        }

                        // red order book

                        var red_block_form = parseFloat(
                            json[asks][json_red_count][0]
                        );
                        if (red_block_form > 10) {
                            red_block_form = red_block_form.toFixed(2);
                        } else if (red_block_form > 0.1) {
                            red_block_form = red_block_form.toFixed(4);
                        } else {
                            red_block_form = red_block_form.toFixed(6);
                        }

                        var green_block_form = parseFloat(
                            json[bids][json_green_count][0]
                        );
                        if (green_block_form > 10) {
                            green_block_form = green_block_form.toFixed(2);
                        } else if (green_block_form > 0.1) {
                            green_block_form = green_block_form.toFixed(4);
                        } else {
                            green_block_form = green_block_form.toFixed(6);
                        }

                        red_block =
                            red_block +
                            `<div class="book__item red_tr" id="red_tr_` +
                            for_tr_block_id +
                            `">
                                                <div class="book__item-fill" style="width: ` +
                            random_number() +
                            `%;"></div>
                                                <div class="book__item-price">
                                                    ` +
                            addCommas(red_block_form) +
                            `
                                                </div>
                                                <div class="book__item-size">
                                                    ` +
                            two_amount_red +
                            `
                                                </div>
                                                <div class="book__item-sum">
                                                    ` +
                            addCommas(two_price_red.toFixed(2)) +
                            `
                                                </div>
                                            </div>`;
                        // green order book

                        green_block =
                            green_block +
                            `<div class="book__item green_tr" id="green_tr_` +
                            for_tr_block_id +
                            `">
                                                    <div class="book__item-fill" style="width: ` +
                            random_number() +
                            `%;"></div>
                                                    <div class="book__item-price">
                                                        ` +
                            addCommas(green_block_form) +
                            `
                                                    </div>
                                                    <div class="book__item-size">
                                                        ` +
                            two_amount_green +
                            `
                                                    </div>
                                                    <div class="book__item-sum">
                                                        ` +
                            addCommas(two_price_green.toFixed(2)) +
                            `
                                                    </div>
                                                </div>`;

                        json_red_count = json_red_count + 1;
                        json_green_count = json_green_count + 1;

                        if (json_red_count > 50) {
                            json_red_count = 1;
                        }

                        if (json_green_count > 70) {
                            json_green_count = 10;
                        }

                        for_tr_block_id = for_tr_block_id + 1;

                        if (i == 18) {
                            $("#order_sell_div").prepend(red_block);
                            first_red_block = red_block;
                            $("#order_buy_div").prepend(green_block);
                            first_green_block = green_block;
                        }
                    }

                    var repeat_block = "red";

                    setInterval(function () {
                        if (repeat_block == "red") {
                            repeat_block = "green";
                        } else {
                            repeat_block = "red";
                        }

                        var timer_red_block = "";
                        var timer_green_block = "";

                        function random_for() {
                            var rand_for = Math.floor(Math.random() * 4 + 1);

                            return rand_for;
                        }

                        for (var ii = 0; ii < parseFloat(random_for()); ii++) {
                            function random_number() {
                                // Random Number Red
                                var random_number_2 = Math.floor(
                                    Math.random() * 7 + 1
                                );
                                var random_true = "";
                                if (random_number_2 == 1) {
                                    random_true = "5";
                                } else if (random_number_2 == 2) {
                                    random_true = "8";
                                } else if (random_number_2 == 3) {
                                    random_true = "10";
                                } else if (random_number_2 == 4) {
                                    random_true = "20";
                                } else if (random_number_2 == 5) {
                                    random_true = "40";
                                } else if (random_number_2 == 6) {
                                    random_true = "60";
                                } else if (random_number_2 == 7) {
                                    random_true = "80";
                                } else {
                                    random_true = "";
                                }

                                return random_true;
                            }

                            var two_price_red =
                                parseFloat(json[asks][json_red_count][0]) *
                                parseFloat(json[asks][json_red_count][1]);
                            var two_price_green =
                                parseFloat(json[bids][json_green_count][0]) *
                                parseFloat(json[bids][json_green_count][1]);

                            var two_amount_red = parseFloat(
                                json[asks][json_red_count][1]
                            );
                            if (two_amount_red > 1) {
                                two_amount_red = two_amount_red.toFixed(2);
                            } else {
                                two_amount_red = two_amount_red.toFixed(6);
                            }

                            var two_amount_green = parseFloat(
                                json[bids][json_green_count][1]
                            );
                            if (two_amount_green > 1) {
                                two_amount_green = two_amount_green.toFixed(2);
                            } else {
                                two_amount_green = two_amount_green.toFixed(6);
                            }

                            var json_red_block_form = parseFloat(
                                json[asks][json_red_count][0]
                            );
                            if (json_red_block_form > 1) {
                                json_red_block_form =
                                    json_red_block_form.toFixed(2);
                            } else if (json_red_block_form > 0.1) {
                                json_red_block_form =
                                    json_red_block_form.toFixed(4);
                            } else {
                                json_red_block_form =
                                    json_red_block_form.toFixed(6);
                            }

                            var json_green_block_form = parseFloat(
                                json[bids][json_green_count][0]
                            );
                            if (json_green_block_form > 10) {
                                json_green_block_form =
                                    json_green_block_form.toFixed(2);
                            } else if (json_green_block_form > 0.1) {
                                json_green_block_form =
                                    json_green_block_form.toFixed(4);
                            } else {
                                json_green_block_form =
                                    json_green_block_form.toFixed(6);
                            }

                            // red order book

                            timer_red_block =
                                timer_red_block +
                                `<div class="book__item red_tr" id="red_tr_` +
                                new_tr_block_id +
                                `">
                                                                <div class="book__item-fill" style="width: ` +
                                random_number() +
                                `%;"></div>
                                                                <div class="book__item-price">
                                                                    ` +
                                addCommas(json_red_block_form) +
                                `
                                                                </div>
                                                                <div class="book__item-size">
                                                                    ` +
                                two_amount_red +
                                `
                                                                </div>
                                                                <div class="book__item-sum">
                                                                    ` +
                                addCommas(two_price_red.toFixed(2)) +
                                `
                                                                </div>
                                                            </div>`;

                            // green order book

                            timer_green_block =
                                timer_green_block +
                                `<div class="book__item green_tr" id="green_tr_` +
                                new_tr_block_id +
                                `">
                                                                    <div class="book__item-fill" style="width: ` +
                                random_number() +
                                `%;"></div>
                                                                    <div class="book__item-price">
                                                                        ` +
                                addCommas(json_green_block_form) +
                                `
                                                                    </div>
                                                                    <div class="book__item-size">
                                                                        ` +
                                two_amount_green +
                                `
                                                                    </div>
                                                                    <div class="book__item-sum">
                                                                        ` +
                                addCommas(two_price_green.toFixed(2)) +
                                `
                                                                    </div>
                                                                </div>`;

                            if (repeat_block == "red") {
                                json_red_count = json_red_count + 1;
                            } else {
                                json_green_count = json_green_count + 1;
                            }

                            if (json_red_count > 50) {
                                json_red_count = 1;
                            }

                            if (json_green_count > 70) {
                                json_green_count = 10;
                            }

                            var remove_tr_id = new_tr_block_id - tr_block_id;

                            if (repeat_block == "red") {
                                $(".red_tr").last().remove();
                            } else {
                                $(".green_tr").last().remove();
                            }

                            new_tr_block_id = new_tr_block_id + 1;
                        }

                        first_red_block =
                            timer_red_block + "" + first_red_block;
                        first_green_block =
                            timer_green_block + "" + first_green_block;

                        if (repeat_block == "red") {
                            $("#order_sell_div").html(first_red_block);
                        } else {
                            $("#order_buy_div").html(first_green_block);
                        }
                    }, 1000);
                },
            });
            $.ajax({
                url: `${serverLink}/api/ajax/trading_live?action=TRADING_RECENT_LIVE&pair=${pair}`,
                type: "POST",
                data: {
                    action: "TRADING_RECENT_LIVE",
                    pairs: pairs_value,
                    new_pairs: new_pairs,
                },
                success: function (response) {
                    var json_price = response;
                    var json_count = 1;
                    var recent_tr_block_id = 21; //start 6
                    var recent_new_tr_block_id = 47; // start 7

                    var recent_all_block = "";
                    console.log("json_price", json_price);
                    for (var iii = 0; iii < 20; iii++) {
                        var json_live_price = parseFloat(
                            json_price[json_count][0]
                        );
                        var json_live_amount = parseFloat(
                            json_price[json_count][1]
                        );
                        var json_live_amount_fix = json_live_amount.toFixed(4);
                        if (json_live_amount > 1) {
                            json_live_amount_fix = json_live_amount.toFixed(2);
                        } else {
                            json_live_amount_fix = json_live_amount.toFixed(6);
                        }

                        var json_live_m = json_price[json_count][2];
                        json_count = json_count + 1;

                        if (json_count > 99) {
                            json_count = 1;
                        }

                        //now time
                        var dt = new Date();
                        var this_month = dt.getMonth() + 1;
                        var time =
                            dt.getDate() +
                            "." +
                            this_month +
                            " " +
                            dt.getHours() +
                            ":" +
                            dt.getMinutes();

                        var recent_number = Math.floor(Math.random() * 2 + 1);
                        let recent_status;
                        if (json_live_m == "true") {
                            recent_status = "buy";
                        } else {
                            recent_status = "sell";
                        }

                        function random_number() {
                            // Random Number Red
                            var random_number_2 = Math.floor(
                                Math.random() * 7 + 1
                            );
                            var random_true = "";
                            if (random_number_2 == 1) {
                                random_true = "5";
                            } else if (random_number_2 == 2) {
                                random_true = "8";
                            } else if (random_number_2 == 3) {
                                random_true = "10";
                            } else if (random_number_2 == 4) {
                                random_true = "20";
                            } else if (random_number_2 == 5) {
                                random_true = "40";
                            } else if (random_number_2 == 6) {
                                random_true = "60";
                            } else if (random_number_2 == 7) {
                                random_true = "80";
                            } else {
                                random_true = "";
                            }

                            return random_true;
                        }

                        // recent trade

                        var live_json_form = json_live_price;
                        if (live_json_form > 10) {
                            live_json_form = live_json_form.toFixed(2);
                        } else if (live_json_form > 0.1) {
                            live_json_form = live_json_form.toFixed(4);
                        } else {
                            live_json_form = live_json_form.toFixed(6);
                        }

                        recent_all_block =
                            recent_all_block +
                            `<div class="trades__item ` +
                            recent_status +
                            `" id="recent_tr_` +
                            recent_new_tr_block_id +
                            `">
                                                            <div class="trades__item-price">
                                                                ` +
                            addCommas(live_json_form) +
                            `
                                                            </div>
                                                            <div class="trades__item-size">
                                                                ` +
                            json_live_amount_fix +
                            `
                                                            </div>
                                                            <div class="trades__item-time">
                                                                ` +
                            time +
                            `
                                                            </div>
                                                        </div>`;

                        var remove_recent_id =
                            recent_new_tr_block_id - recent_tr_block_id;
                        $("#recent_tr_" + remove_recent_id).remove();
                        recent_new_tr_block_id = recent_new_tr_block_id + 1;

                        if (iii == 19) {
                            $("#recent_orders").prepend(recent_all_block);
                        }
                    }

                    function doSomething() {
                        var json_live_price = parseFloat(
                            json_price[json_count][0]
                        );
                        var json_live_amount = parseFloat(
                            json_price[json_count][1]
                        );
                        var json_live_amount_fix = json_live_amount.toFixed(4);
                        if (json_live_amount > 1) {
                            json_live_amount_fix = json_live_amount.toFixed(2);
                        } else {
                            json_live_amount_fix = json_live_amount.toFixed(6);
                        }
                        var json_live_m = json_price[json_count][2];
                        json_count = json_count + 1;

                        if (json_count > 99) {
                            json_count = 1;
                        }

                        //now time
                        var dt = new Date();
                        var this_month = dt.getMonth() + 1;
                        var time =
                            dt.getDate() +
                            "." +
                            this_month +
                            " " +
                            dt.getHours() +
                            ":" +
                            dt.getMinutes();

                        var recent_number = Math.floor(Math.random() * 2 + 1);
                        let recent_status;
                        if (json_live_m == "true") {
                            recent_status = "buy";
                        } else {
                            recent_status = "sell";
                        }

                        function random_number() {
                            // Random Number Red
                            var random_number_2 = Math.floor(
                                Math.random() * 7 + 1
                            );
                            var random_true = "";
                            if (random_number_2 == 1) {
                                random_true = "5";
                            } else if (random_number_2 == 2) {
                                random_true = "8";
                            } else if (random_number_2 == 3) {
                                random_true = "10";
                            } else if (random_number_2 == 4) {
                                random_true = "20";
                            } else if (random_number_2 == 5) {
                                random_true = "40";
                            } else if (random_number_2 == 6) {
                                random_true = "60";
                            } else if (random_number_2 == 7) {
                                random_true = "80";
                            } else {
                                random_true = "";
                            }

                            return random_true;
                        }

                        var new_live_json_form = json_live_price;
                        if (new_live_json_form > 10) {
                            new_live_json_form = new_live_json_form.toFixed(2);
                        } else if (new_live_json_form > 0.1) {
                            new_live_json_form = new_live_json_form.toFixed(4);
                        } else {
                            new_live_json_form = new_live_json_form.toFixed(6);
                        }

                        // recent trade

                        $("#recent_orders").prepend(
                            `<div class="trades__item ` +
                                recent_status +
                                `" id="recent_tr_` +
                                recent_new_tr_block_id +
                                `">
                                                <div class="trades__item-price">
                                                    ` +
                                addCommas(new_live_json_form) +
                                `
                                                </div>
                                                <div class="trades__item-size">
                                                    ` +
                                json_live_amount_fix +
                                `
                                                </div>
                                                <div class="trades__item-time">
                                                    ` +
                                time +
                                `
                                                </div>
                                            </div>`
                        );

                        var remove_recent_id =
                            recent_new_tr_block_id - recent_tr_block_id;
                        $("#recent_tr_" + remove_recent_id).remove();
                        recent_new_tr_block_id = recent_new_tr_block_id + 1;
                    }

                    var i1;
                    var rand = 300;

                    function randomize() {
                        doSomething();
                        rand = Math.round(Math.random() * (3000 - 500)) + 500;
                        clearInterval(i1);
                        i1 = setInterval(randomize, rand);
                    }

                    i1 = setInterval(randomize, rand);
                },
            });
        }
        //log(parseFloat(1).toFixed(4))
    }, [dispatch, user]);
    console.log("currencyNowPrice", currencyNowPrice);
    useEffect(() => {
        dispatch(getUserDetails("profile", undefined, "/profile/trading"));
        dispatch(listTickers());
        dispatch(listMyTrade(pair, "Take"));
    }, [dispatch]);
    console.log(tickersList);
    useEffect(() => {
        if (!loadingTickersList && !loadingUser) {
            console.log(tickersList);
            const symbol = document
                .querySelector("#var_for_chart")
                .getAttribute("symbol");
            const tickerActive = tickersList.find(
                (item) => item.symbol == symbol
            );
            const addAmount = parseFloat(
                user.tradingProps.find((item) => item.pair == pair)
                    .CHECK_TRADING_CURRENCY_PRICE
            );
            $("#24hchange").html(
                `${parseFloat(tickerActive.priceChangePercent) + addAmount}%`
            );
            $("#24hhigh").html(
                `${parseFloat(tickerActive.highPrice) + addAmount}`
            );
            $("#24hlow").html(
                `${parseFloat(tickerActive.lowPrice) + addAmount}`
            );
            $("#24hvolume").html(
                `${parseFloat(tickerActive.volume).toFixed(2)}`
            );
            $("#24hamount").html(
                `${parseFloat(tickerActive.quoteVolume).toFixed(2)}$`
            );
        }
    }, [dispatch, tickerList, user]);

    const setPercentSell = (e, value) => {
        console.log("setPercentSell");
        e.preventDefault();
        value = parseFloat(value);
        console.log(value);
        // console.log(user.walletsSpot.find(item=>item.type==secondCurrency).balance);
        setValueSell(
            (user.walletsSpot.find((item) => item.type == firstCurrency)
                .balance *
                value) /
                100
        );
        setValueRangeSell(value);
    };

    const setPercentBuy = (e, value) => {
        console.log("setPercentSell");
        e.preventDefault();
        value = parseFloat(value);
        console.log(value);
        // console.log(user.walletsSpot.find(item=>item.type==secondCurrency).balance);
        setValueBuy(
            (user.walletsSpot.find((item) => item.type == secondCurrency)
                .balance *
                value) /
                100
        );
        setValueRangeBuy(value);
    };
    const triggerNewUserError = (e) => {
        e.preventDefault();
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.error(
                "New users cannot open limit orders and trigger orders",
                Toastobjects
            );
        }
    };
    console.log(tickersList);
    const tradeCreate = useSelector((state) => state.tradeCreate);
    const { successTradeCreate, loadingCreate, errorOrderCreate } = tradeCreate;
    const tradeList = useSelector((state) => state.tradeListMy);
    const { loadingUserTrade, userTrade, errorUserTrade } = tradeList;
    const transferCreate = useSelector((state) => state.transferCreate);
    const {
        successTransferCreate,
        loadingTransferCreate,
        errorTransferCreate,
    } = transferCreate;

    useEffect(() => {
        if (successTradeCreate) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success(
                    "Trade created successfully",
                    Toastobjects
                );
                // dispatch({ type: SWAP_CREATE_RESET });
            }
        } else if (errorOrderCreate && !toast.isActive(toastId.current)) {
            toastId.current = toast.error(errorOrderCreate, Toastobjects);
        }
        dispatch(getUserDetails("profile"));
        dispatch(listMyTrade(pair, "Take"));
    }, [tradeCreate]);

    const submitHandler = (e, side, priceSide, valueSide, symbolCheck) => {
        e.preventDefault();

        if (valueSide) {
            if (
                user.walletsSpot.find((item) => item.type == symbolCheck)
                    .balance >= parseFloat(valueSide)
            ) {
                dispatch(
                    createTrade({
                        amount: parseFloat(valueSide),
                        price: parseFloat(priceSide),
                        pair: pair,
                        side: side,
                    })
                );
            } else {
            }
        } else {
        }
    };
    console.log(tradeList);
    //     const variants = ["USDT", "BTC", "ETH"];
    //     const [valueBuy, setValueBuy] = useState(0);
    //     const [orderOpen, setOrderOpen] = useState("Open");
    //     const [valueSell, setValueSell] = useState(0);
    //     const [walletChoosenFirst, setWalletChoosenFirst] = useState("Funding");
    //     const [walletChoosenSecond, setWalletChoosenSecond] = useState("Spot");
    //     const [priceBuy, setPriceBuy] = useState(-1);
    //     const [amountTransfer, setAmountTransfer] = useState();
    //     const [priceSell, setPriceSell] = useState(-1);
    //     const [popupOpen, setPopupOpen] = useState(false);
    //     const [popupBuyOpen, setPopupBuyOpen] = useState(false);
    //     const [popupSellOpen, setPopupSellOpen] = useState(false);
    //     const [popupTransferOpen, setPopupTransferOpen] = useState(false);
    //     const [popUpMarketBuy, setPopUpMarketBuy] = useState("Market");
    //     const [popUpMarketSell, setPopUpMarketSell] = useState("Market");
    //     const [buyMethod, setBuyMethod] = useState("Market");
    //     const [variant, setVariant] = useState("USDT");
    //     const [fromTransferOpen, setFromTransferOpen] = useState(false);
    //     const [toTransferOpen, setToTransferOpen] = useState(false);
    //     const [buyRatio, setBuyRatio] = useState(0);
    //     const [sellRatio, setSellRatio] = useState(0);
    //     const firstSymbol = match.params.symbol.split("-")[0];
    //     const secondSymbol = match.params.symbol.split("-")[1];
    //     const [timer, setTimer] = useState(0);
    //     const [search, setSearch] = useState("");
    //     const dispatch = useDispatch();
    //     const [data, setData] = useState();
    //     const [tickersData, setTickers] = useState();
    //     const [open, setOpen] = useState(false);
    //     const [dataOrder, setDataorder] = useState();
    //     const [dataTrade, setDataTrade] = useState();
    //     const [errorData, setError] = useState("");
    //     const userDetails = useSelector((state) => state.userDetails);
    //     const { user, loadingUser } = userDetails;
    //     const userLogin = useSelector((state) => state.userLogin);
    //     const { userInfo } = userLogin;

    //     const Toastobjects = {
    //         pauseOnFocusLoss: false,
    //         draggable: false,
    //         pauseOnHover: false,
    //         autoClose: 100000,
    //     };
    //     const toastId = React.useRef(null);
    //     async function getData() {
    //         fetch(`http://localhost:5000/api/stats/${match.params.symbol}`)
    //             .then((response) => response.json())
    //             .then((json) => {
    //                 if (priceBuy == -1 || priceSell == -1) {
    //                     setPriceBuy(parseFloat(json.data.last));
    //                     setPriceSell(parseFloat(json.data.last));
    //                 }
    //                 setData(json);
    //             })
    //             .catch((error) => {
    //                 setError(error);
    //             });
    //         dispatch(listMyTrade(match.params.symbol, "Reload"));
    //     }
    //     async function getDataOrder() {
    //         fetch(`http://localhost:5000/api/orderbook/${match.params.symbol}`)
    //             .then((response) => response.json())
    //             .then((json) => {
    //                 if (json.code == "200000") {
    //                     setDataorder({ newState: json, lastState: json });
    //                 } else {
    //                     setDataorder({
    //                         newState: json,
    //                         lastState: dataOrder.lastState,
    //                     });
    //                 }
    //             })
    //             .catch((error) => {
    //                 setError(error);
    //             });
    //     }
    //     async function getDataTrade() {
    //         fetch(`http://localhost:5000/api/tradehistory/${match.params.symbol}`)
    //             .then((response) => response.json())
    //             .then((json) => {
    //                 if (json.code == "200000") {
    //                     setDataTrade({ newState: json, lastState: json });
    //                 } else {
    //                     setDataTrade({
    //                         newState: json,
    //                         lastState: dataTrade.lastState,
    //                     });
    //                 }
    //             })
    //             .catch((error) => {
    //                 setError(error);
    //             });
    //     }
    //     async function getDataTickers() {
    //         fetch("http://localhost:5000/api/data")
    //             .then((response) => response.json())
    //             .then((json) => {
    //                 setDataHandler(json.data.ticker);
    //             })
    //             .catch((error) => {
    //                 setError(error);
    //             });
    //     }
    //     useInterval(getData, 1000 * 1);
    //     useInterval(getDataOrder, 1000 * 0.4);
    //     useInterval(getDataTrade, 1000 * 0.25);

    //     useEffect(() => {
    //         if (successTransferCreate) {
    //             if (!toast.isActive(toastId.current)) {
    //                 toastId.current = toast.success(
    //                     "Transfer successed",
    //                     Toastobjects
    //                 );
    //             }
    //         } else if (errorTransferCreate) {
    //             if (!toast.isActive(toastId.current)) {
    //                 toastId.current = toast.error(errorOrderCreate, Toastobjects);
    //             }
    //         }

    //         dispatch(getUserDetails("profile"));
    //     }, [dispatch, transferCreate]);

    //     const changeRatio = (type, value, side) => {
    //         console.log(value);
    //         setBuyRatio(parseFloat(value));
    //         if (type == "limit") {
    //             // setValueBuy(
    //             // 	(value / 100) *
    //             // 		user.walletsSpot
    //             // 			.find((item) => item.type == secondSymbol)
    //             // 			.avaliable.toFixed(8)
    //             // );
    //             if (side == "buy") {
    //                 setValueBuy(
    //                     parseFloat(
    //                         (
    //                             ((buyRatio / 100) *
    //                                 user.walletsSpot.find(
    //                                     (item) => item.type == secondSymbol
    //                                 ).avaliable) /
    //                             priceBuy
    //                         ).toFixed(8)
    //                     )
    //                 );
    //             }
    //         }
    //     };

    //     const changePrice = (value, side) => {
    //         console.log(typeof priceBuy, typeof value);
    //         if (side == "buy") {
    //             setPriceBuy(parseFloat(value));
    //             var temp =
    //                 ((parseFloat(value) * valueBuy) /
    //                     user.walletsSpot.find((item) => item.type == secondSymbol)
    //                         .avaliable) *
    //                 100;
    //             setBuyRatio(temp > 100 ? 100 : temp);
    //             // changeRatio("limit", priceBuy* valueBuy / user.walletsSpot.find((item)=>item.type==secondSymbol).avaliable*100,"buy")
    //         }
    //         console.log("change price");
    //     };

    //     const setDataHandler = (data) => {
    //         setTickers(
    //             data
    //                 .filter(
    //                     (item) =>
    //                         contains(item.symbol.split("-")[0], [
    //                             "BTC",
    //                             "SHIB",
    //                             "MKR",
    //                             "AAVE",
    //                             "UNI",
    //                             "ZRX",
    //                             "ENS",
    //                             "QNT",
    //                             "COMP",
    //                             "1INCH",
    //                             "SXP",
    //                             "DYDX",
    //                             "SUSHI",
    //                             "YFI",
    //                             "CAKE",
    //                             "ROSE",
    //                             "ETH",
    //                             "MATIC",
    //                             "FTM",
    //                             "ATOM",
    //                             "DOGE",
    //                             "ONT",
    //                             "NEO",
    //                             "BCH",
    //                             "BAT",
    //                             "HOT",
    //                             "LINK",
    //                             "USDT",
    //                             "XRP",
    //                             "TRX",
    //                             "LTC",
    //                             "USDC",
    //                         ]) &&
    //                         contains(item.symbol.split("-")[1], [
    //                             "BTC",
    //                             "SHIB",
    //                             "MKR",
    //                             "AAVE",
    //                             "UNI",
    //                             "ZRX",
    //                             "ENS",
    //                             "QNT",
    //                             "COMP",
    //                             "1INCH",
    //                             "SXP",
    //                             "DYDX",
    //                             "SUSHI",
    //                             "YFI",
    //                             "CAKE",
    //                             "ROSE",
    //                             "ETH",
    //                             "MATIC",
    //                             "FTM",
    //                             "ATOM",
    //                             "DOGE",
    //                             "ONT",
    //                             "NEO",
    //                             "BCH",
    //                             "BAT",
    //                             "HOT",
    //                             "LINK",
    //                             "USDT",
    //                             "XRP",
    //                             "TRX",
    //                             "LTC",
    //                             "USDC",
    //                         ]) &&
    //                         !contains(item.symbol.toLowerCase(), [
    //                             "3",
    //                             "2",
    //                             "BCHSV",
    //                             "WBTC",
    //                             "HOTCROSS",
    //                             "UNIC",
    //                             "SENSO",
    //                             "RBTC",
    //                             "ETHO",
    //                             "FRONT",
    //                             "GENS",
    //                         ])
    //                 )
    //                 .sort((a, b) =>
    //                     parseInt(a.volValue) < parseInt(b.volValue) ? 1 : -1
    //                 )
    //         );
    //     };

    //     const submitTransferHandler = (e) => {
    //         e.preventDefault();

    //         if (amountTransfer) {
    //             if (
    //                 parseFloat(
    //                     user.walletsSpot
    //                         .find((item) => item.type == firstSymbol)
    //                         .avaliable.toFixed(8)
    //                 ) >= parseFloat(amountTransfer) &&
    //                 walletChoosenFirst == "Spot"
    //             ) {
    //                 dispatch(
    //                     createTransfer({
    //                         amount: parseFloat(amountTransfer),
    //                         symbol: firstSymbol,
    //                         from: walletChoosenFirst,
    //                         to: walletChoosenSecond,
    //                     })
    //                 );
    //             } else if (
    //                 parseFloat(
    //                     user.walletsFunding
    //                         .find((item) => item.type == firstSymbol)
    //                         .avaliable.toFixed(8)
    //                 ) >= parseFloat(amountTransfer) &&
    //                 walletChoosenFirst == "Funding"
    //             ) {
    //                 dispatch(
    //                     createTransfer({
    //                         amount: parseFloat(amountTransfer),
    //                         symbol: firstSymbol,
    //                         from: walletChoosenFirst,
    //                         to: walletChoosenSecond,
    //                     })
    //                 );
    //             } else {
    //             }
    //         }
    //     };

    return (
        <React.Fragment>
            
    
            <main  className="other">
                <Toast />
             
                <div className="trade__container-ghTgp">
                    <div className="trade__box-ghTgp">
                        <div className="top-ghTgp info">
                            <div className="info__container">
                                <div className="info__block">
                                    <div className="info__icon">
                                        <img
                                            src={
                                                !loadingUser
                                                    ? user.tradingProps.find(
                                                          (item) =>
                                                              item.pair == pair
                                                      ).image
                                                    : null
                                            }
                                            style={{ width: "28px" }}
                                        />
                                    </div>
                                    <div className="info__wrapper">
                                        <div className="info__pare">
                                            {`${firstCurrency}/${secondCurrency}`}{" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="info__prices">
                                    <div
                                        className="info__price plus"
                                        id="c_i_p_ajax_sp2"
                                    >
                                        29022.49
                                    </div>
                                    <div className="info__usd" id="info_usd">
                                        ≈$29065.99{" "}
                                    </div>
                                </div>
                                <div className="info__stats">
                                    <div className="info__stats-title">
                                        24h Change
                                    </div>
                                    <div
                                        className="info__stats-value plus"
                                        id="24hchange"
                                    >
                                        0.093%
                                    </div>
                                </div>
                                <div className="info__stats">
                                    <div className="info__stats-title">
                                        24h High
                                    </div>
                                    <div
                                        className="info__stats-value"
                                        id="24hhigh"
                                    >
                                        29,937.97{" "}
                                    </div>
                                </div>
                                <div className="info__stats">
                                    <div className="info__stats-title">
                                        24h Low
                                    </div>
                                    <div
                                        className="info__stats-value"
                                        id="24hlow"
                                    >
                                        28,194.01{" "}
                                    </div>
                                </div>
                                <div className="info__stats">
                                    <div className="info__stats-title">
                                        24h Volume ({firstCurrency})
                                    </div>
                                    <div
                                        className="info__stats-value"
                                        id="24hvolume"
                                    >
                                        9427.00{" "}
                                    </div>
                                </div>
                                <div className="info__stats">
                                    <div className="info__stats-title">
                                        24h Amount ({secondCurrency})
                                    </div>
                                    <div
                                        className="info__stats-value"
                                        id="24hamount"
                                    >
                                        274,005,087.73{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="left-ghTgp book">
                            <div className="book__title">Order Book</div>
                            <div className="book__names">
                                <div className="book__names-item book__names-price">
                                    Price({secondCurrency})
                                </div>
                                <div className="book__names-item book__names-size">
                                    Size({firstCurrency})
                                </div>
                                <div className="book__names-item book__names-sum">
                                    Total({secondCurrency})
                                </div>
                            </div>
                            <div className="book__container">
                                <div
                                    className="book__items sell"
                                    id="order_sell_div"
                                    style={{
                                        maxHeight: "378px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3282"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.034646
                                        </div>
                                        <div className="book__item-sum">
                                            1,006.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3283"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.034646
                                        </div>
                                        <div className="book__item-sum">
                                            1,006.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3284"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.034646
                                        </div>
                                        <div className="book__item-sum">
                                            1,006.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3285"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.034646
                                        </div>
                                        <div className="book__item-sum">
                                            1,006.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3280"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.524505
                                        </div>
                                        <div className="book__item-sum">
                                            15,230.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3281"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.175297
                                        </div>
                                        <div className="book__item-sum">
                                            5,084.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3277"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.524505
                                        </div>
                                        <div className="book__item-sum">
                                            15,230.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3278"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.524505
                                        </div>
                                        <div className="book__item-sum">
                                            15,230.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3279"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.524505
                                        </div>
                                        <div className="book__item-sum">
                                            15,230.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3275"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.127596
                                        </div>
                                        <div className="book__item-sum">
                                            3,705.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3276"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.580606
                                        </div>
                                        <div className="book__item-sum">
                                            16,859.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3274"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.127596
                                        </div>
                                        <div className="book__item-sum">
                                            3,705.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3272"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.194465
                                        </div>
                                        <div className="book__item-sum">
                                            5,641.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3273"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.610671
                                        </div>
                                        <div className="book__item-sum">
                                            17,732.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3270"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.194465
                                        </div>
                                        <div className="book__item-sum">
                                            5,641.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3271"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.194465
                                        </div>
                                        <div className="book__item-sum">
                                            5,641.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3268"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.332094
                                        </div>
                                        <div className="book__item-sum">
                                            9,642.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3269"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.230662
                                        </div>
                                        <div className="book__item-sum">
                                            6,691.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3264"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.332094
                                        </div>
                                        <div className="book__item-sum">
                                            9,642.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3265"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.332094
                                        </div>
                                        <div className="book__item-sum">
                                            9,642.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3266"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.332094
                                        </div>
                                        <div className="book__item-sum">
                                            9,642.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3267"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.332094
                                        </div>
                                        <div className="book__item-sum">
                                            9,642.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3262"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.286509
                                        </div>
                                        <div className="book__item-sum">
                                            8,311.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3263"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.024269
                                        </div>
                                        <div className="book__item-sum">
                                            703.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3260"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.286509
                                        </div>
                                        <div className="book__item-sum">
                                            8,311.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3261"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.286509
                                        </div>
                                        <div className="book__item-sum">
                                            8,311.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item red_tr"
                                        id="red_tr_3259"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.489033
                                        </div>
                                        <div className="book__item-sum">
                                            14,200.01
                                        </div>
                                    </div>

                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_2"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.450705
                                        </div>
                                        <div className="book__item-sum">
                                            13,073.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_1"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.071667
                                        </div>
                                        <div className="book__item-sum">
                                            2,080.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_2"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.385861
                                        </div>
                                        <div className="book__item-sum">
                                            11,193.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_3"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.182606
                                        </div>
                                        <div className="book__item-sum">
                                            5,297.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_4"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.507905
                                        </div>
                                        <div className="book__item-sum">
                                            14,748.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_5"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.684056
                                        </div>
                                        <div className="book__item-sum">
                                            19,843.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_6"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.596275
                                        </div>
                                        <div className="book__item-sum">
                                            17,313.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_7"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.002517
                                        </div>
                                        <div className="book__item-sum">
                                            73.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_8"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.377139
                                        </div>
                                        <div className="book__item-sum">
                                            10,939.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_9"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.450185
                                        </div>
                                        <div className="book__item-sum">
                                            13,071.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_10"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.535441
                                        </div>
                                        <div className="book__item-sum">
                                            15,532.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_11"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.026855
                                        </div>
                                        <div className="book__item-sum">
                                            779.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_12"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.412785
                                        </div>
                                        <div className="book__item-sum">
                                            11,986.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_13"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.625376
                                        </div>
                                        <div className="book__item-sum">
                                            18,159.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_14"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.495555
                                        </div>
                                        <div className="book__item-sum">
                                            14,374.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_15"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.581084
                                        </div>
                                        <div className="book__item-sum">
                                            16,856.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_16"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.391584
                                        </div>
                                        <div className="book__item-sum">
                                            11,359.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_17"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            29,007.86
                                        </div>
                                        <div className="book__item-size">
                                            0.407131
                                        </div>
                                        <div className="book__item-sum">
                                            11,810.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_18"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.018631
                                        </div>
                                        <div className="book__item-sum">
                                            540.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_19"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            29,036.92
                                        </div>
                                        <div className="book__item-size">
                                            0.317251
                                        </div>
                                        <div className="book__item-sum">
                                            9,211.99
                                        </div>
                                    </div>
                                </div>
                                <div className="book__price up">
                                    <span
                                        id="aj_live_new_price_block_1"
                                        style={{
                                            color: "#03a66d",
                                            fontWeight: 600,
                                            fontSize: "16px",
                                        }}
                                    >
                                        29017.29
                                    </span>{" "}
                                    <span id="aj_live_new_price_block_2">
                                        29017.29 USD
                                    </span>
                                </div>
                                <div
                                    className="book__items buy"
                                    id="order_buy_div"
                                    style={{
                                        maxHeight: "378px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_108"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.358694
                                        </div>
                                        <div className="book__item-sum">
                                            10,397.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_109"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.358694
                                        </div>
                                        <div className="book__item-sum">
                                            10,397.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_110"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.358694
                                        </div>
                                        <div className="book__item-sum">
                                            10,397.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_106"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.455844
                                        </div>
                                        <div className="book__item-sum">
                                            13,200.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_107"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.195388
                                        </div>
                                        <div className="book__item-sum">
                                            5,664.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_105"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.455844
                                        </div>
                                        <div className="book__item-sum">
                                            13,200.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_104"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.281428
                                        </div>
                                        <div className="book__item-sum">
                                            8,150.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_101"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.281428
                                        </div>
                                        <div className="book__item-sum">
                                            8,150.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_102"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.281428
                                        </div>
                                        <div className="book__item-sum">
                                            8,150.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_103"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.281428
                                        </div>
                                        <div className="book__item-sum">
                                            8,150.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_98"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.269969
                                        </div>
                                        <div className="book__item-sum">
                                            7,825.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_99"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.623803
                                        </div>
                                        <div className="book__item-sum">
                                            18,064.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_100"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.583680
                                        </div>
                                        <div className="book__item-sum">
                                            16,919.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_95"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.269969
                                        </div>
                                        <div className="book__item-sum">
                                            7,825.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_96"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.269969
                                        </div>
                                        <div className="book__item-sum">
                                            7,825.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_97"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.269969
                                        </div>
                                        <div className="book__item-sum">
                                            7,825.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_92"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.389707
                                        </div>
                                        <div className="book__item-sum">
                                            11,297.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_93"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.040091
                                        </div>
                                        <div className="book__item-sum">
                                            1,161.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_94"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.456328
                                        </div>
                                        <div className="book__item-sum">
                                            13,215.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_90"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.389707
                                        </div>
                                        <div className="book__item-sum">
                                            11,297.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_91"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.389707
                                        </div>
                                        <div className="book__item-sum">
                                            11,297.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_89"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.379324
                                        </div>
                                        <div className="book__item-sum">
                                            10,985.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_87"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.379324
                                        </div>
                                        <div className="book__item-sum">
                                            10,985.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_88"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.379324
                                        </div>
                                        <div className="book__item-sum">
                                            10,985.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_86"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.504222
                                        </div>
                                        <div className="book__item-sum">
                                            14,601.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_84"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.504222
                                        </div>
                                        <div className="book__item-sum">
                                            14,601.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_85"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.504222
                                        </div>
                                        <div className="book__item-sum">
                                            14,601.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_81"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.580122
                                        </div>
                                        <div className="book__item-sum">
                                            16,800.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_82"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.000483
                                        </div>
                                        <div className="book__item-sum">
                                            13.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_83"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.146093
                                        </div>
                                        <div className="book__item-sum">
                                            4,235.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_78"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.580122
                                        </div>
                                        <div className="book__item-sum">
                                            16,800.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_79"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.580122
                                        </div>
                                        <div className="book__item-sum">
                                            16,800.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_80"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.580122
                                        </div>
                                        <div className="book__item-sum">
                                            16,800.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_76"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.013074
                                        </div>
                                        <div className="book__item-sum">
                                            379.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_77"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.556882
                                        </div>
                                        <div className="book__item-sum">
                                            16,126.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_73"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.013074
                                        </div>
                                        <div className="book__item-sum">
                                            379.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_74"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.013074
                                        </div>
                                        <div className="book__item-sum">
                                            379.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_75"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.013074
                                        </div>
                                        <div className="book__item-sum">
                                            379.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_72"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.318575
                                        </div>
                                        <div className="book__item-sum">
                                            9,235.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_71"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.318575
                                        </div>
                                        <div className="book__item-sum">
                                            9,235.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_69"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.225883
                                        </div>
                                        <div className="book__item-sum">
                                            6,548.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_70"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.059014
                                        </div>
                                        <div className="book__item-sum">
                                            1,709.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_66"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.225883
                                        </div>
                                        <div className="book__item-sum">
                                            6,548.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_67"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.225883
                                        </div>
                                        <div className="book__item-sum">
                                            6,548.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_68"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.225883
                                        </div>
                                        <div className="book__item-sum">
                                            6,548.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_63"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.170861
                                        </div>
                                        <div className="book__item-sum">
                                            4,953.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_64"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.358867
                                        </div>
                                        <div className="book__item-sum">
                                            10,403.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_65"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.007010
                                        </div>
                                        <div className="book__item-sum">
                                            203.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_62"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.170861
                                        </div>
                                        <div className="book__item-sum">
                                            4,953.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_59"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.665368
                                        </div>
                                        <div className="book__item-sum">
                                            19,288.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_60"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.511198
                                        </div>
                                        <div className="book__item-sum">
                                            14,804.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_61"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.090070
                                        </div>
                                        <div className="book__item-sum">
                                            2,610.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_58"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.665368
                                        </div>
                                        <div className="book__item-sum">
                                            19,288.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_55"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.598112
                                        </div>
                                        <div className="book__item-sum">
                                            17,320.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_56"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.119132
                                        </div>
                                        <div className="book__item-sum">
                                            3,450.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_57"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.103524
                                        </div>
                                        <div className="book__item-sum">
                                            2,998.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_54"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.598112
                                        </div>
                                        <div className="book__item-sum">
                                            17,320.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_51"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.403402
                                        </div>
                                        <div className="book__item-sum">
                                            11,694.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_52"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.206634
                                        </div>
                                        <div className="book__item-sum">
                                            5,984.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_53"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.505856
                                        </div>
                                        <div className="book__item-sum">
                                            14,663.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_49"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.403402
                                        </div>
                                        <div className="book__item-sum">
                                            11,694.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_50"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.403402
                                        </div>
                                        <div className="book__item-sum">
                                            11,694.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_48"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.053799
                                        </div>
                                        <div className="book__item-sum">
                                            1,557.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_46"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.053799
                                        </div>
                                        <div className="book__item-sum">
                                            1,557.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_47"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.053799
                                        </div>
                                        <div className="book__item-sum">
                                            1,557.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_43"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.458780
                                        </div>
                                        <div className="book__item-sum">
                                            13,286.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_44"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.507365
                                        </div>
                                        <div className="book__item-sum">
                                            14,693.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_45"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.008115
                                        </div>
                                        <div className="book__item-sum">
                                            235.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_41"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.458780
                                        </div>
                                        <div className="book__item-sum">
                                            13,286.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_42"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.458780
                                        </div>
                                        <div className="book__item-sum">
                                            13,286.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_39"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.355762
                                        </div>
                                        <div className="book__item-sum">
                                            10,312.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_40"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.331960
                                        </div>
                                        <div className="book__item-sum">
                                            9,623.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_36"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.355762
                                        </div>
                                        <div className="book__item-sum">
                                            10,312.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_37"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.355762
                                        </div>
                                        <div className="book__item-sum">
                                            10,312.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_38"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.355762
                                        </div>
                                        <div className="book__item-sum">
                                            10,312.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_35"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.589614
                                        </div>
                                        <div className="book__item-sum">
                                            17,092.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_34"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.589614
                                        </div>
                                        <div className="book__item-sum">
                                            17,092.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_32"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.449594
                                        </div>
                                        <div className="book__item-sum">
                                            13,019.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_33"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.504844
                                        </div>
                                        <div className="book__item-sum">
                                            14,620.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_31"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.449594
                                        </div>
                                        <div className="book__item-sum">
                                            13,019.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_30"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.634252
                                        </div>
                                        <div className="book__item-sum">
                                            18,385.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_26"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.634252
                                        </div>
                                        <div className="book__item-sum">
                                            18,385.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_27"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.634252
                                        </div>
                                        <div className="book__item-sum">
                                            18,385.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_28"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.634252
                                        </div>
                                        <div className="book__item-sum">
                                            18,385.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_29"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.634252
                                        </div>
                                        <div className="book__item-sum">
                                            18,385.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_24"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.276594
                                        </div>
                                        <div className="book__item-sum">
                                            8,010.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_25"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.422202
                                        </div>
                                        <div className="book__item-sum">
                                            12,238.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_22"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.276594
                                        </div>
                                        <div className="book__item-sum">
                                            8,010.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_23"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.276594
                                        </div>
                                        <div className="book__item-sum">
                                            8,010.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_21"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.662539
                                        </div>
                                        <div className="book__item-sum">
                                            19,205.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_20"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.662539
                                        </div>
                                        <div className="book__item-sum">
                                            19,205.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_18"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.501579
                                        </div>
                                        <div className="book__item-sum">
                                            14,540.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_19"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.573975
                                        </div>
                                        <div className="book__item-sum">
                                            16,622.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_17"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.501579
                                        </div>
                                        <div className="book__item-sum">
                                            14,540.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_16"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.060748
                                        </div>
                                        <div className="book__item-sum">
                                            1,760.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_15"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.060748
                                        </div>
                                        <div className="book__item-sum">
                                            1,760.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_14"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.057816
                                        </div>
                                        <div className="book__item-sum">
                                            1,676.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_12"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.057816
                                        </div>
                                        <div className="book__item-sum">
                                            1,676.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_13"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.057816
                                        </div>
                                        <div className="book__item-sum">
                                            1,676.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_10"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.204909
                                        </div>
                                        <div className="book__item-sum">
                                            5,940.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_11"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.191938
                                        </div>
                                        <div className="book__item-sum">
                                            5,563.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_9"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.204909
                                        </div>
                                        <div className="book__item-sum">
                                            5,940.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_6"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.326475
                                        </div>
                                        <div className="book__item-sum">
                                            9,464.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_7"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.537545
                                        </div>
                                        <div className="book__item-sum">
                                            15,567.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_8"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.398557
                                        </div>
                                        <div className="book__item-sum">
                                            11,541.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_2"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.326475
                                        </div>
                                        <div className="book__item-sum">
                                            9,464.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_3"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.326475
                                        </div>
                                        <div className="book__item-sum">
                                            9,464.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_4"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.326475
                                        </div>
                                        <div className="book__item-sum">
                                            9,464.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_5"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.326475
                                        </div>
                                        <div className="book__item-sum">
                                            9,464.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_1"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.023930
                                        </div>
                                        <div className="book__item-sum">
                                            693.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_1"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.146093
                                        </div>
                                        <div className="book__item-sum">
                                            4,235.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_2"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.504222
                                        </div>
                                        <div className="book__item-sum">
                                            14,601.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_3"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.379324
                                        </div>
                                        <div className="book__item-sum">
                                            10,985.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_4"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "5%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.389707
                                        </div>
                                        <div className="book__item-sum">
                                            11,297.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_5"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "40%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.040091
                                        </div>
                                        <div className="book__item-sum">
                                            1,161.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_6"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.456328
                                        </div>
                                        <div className="book__item-sum">
                                            13,215.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_7"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "60%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.269969
                                        </div>
                                        <div className="book__item-sum">
                                            7,825.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_8"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.623803
                                        </div>
                                        <div className="book__item-sum">
                                            18,064.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_9"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.583680
                                        </div>
                                        <div className="book__item-sum">
                                            16,919.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_10"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "8%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.281428
                                        </div>
                                        <div className="book__item-sum">
                                            8,150.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_11"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.455844
                                        </div>
                                        <div className="book__item-sum">
                                            13,200.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_12"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.195388
                                        </div>
                                        <div className="book__item-sum">
                                            5,664.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_13"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.358694
                                        </div>
                                        <div className="book__item-sum">
                                            10,397.99
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_14"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.440244
                                        </div>
                                        <div className="book__item-sum">
                                            12,762.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_15"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "10%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.017007
                                        </div>
                                        <div className="book__item-sum">
                                            493.01
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_16"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.598100
                                        </div>
                                        <div className="book__item-sum">
                                            17,338.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_17"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,959.45
                                        </div>
                                        <div className="book__item-size">
                                            0.027694
                                        </div>
                                        <div className="book__item-sum">
                                            802.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_18"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "20%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.153613
                                        </div>
                                        <div className="book__item-sum">
                                            4,453.00
                                        </div>
                                    </div>
                                    <div
                                        className="book__item green_tr"
                                        id="green_tr_19"
                                    >
                                        <div
                                            className="book__item-fill"
                                            style={{ width: "80%" }}
                                        />
                                        <div className="book__item-price">
                                            28,988.46
                                        </div>
                                        <div className="book__item-size">
                                            0.680340
                                        </div>
                                        <div className="book__item-sum">
                                            19,722.01
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="chart_data" style={{ display: "none" }}></div>
                        <p
                            _ngcontent-ros-c15
                            id="var_for_chart"
                            symbol={pair.split("_").join("")}
                            data={pair.split("_").join("")}
                            style={{ display: "none" }}
                        >
                            {pair.split("_").join("")}
                        </p>
                        <input
                            type="hidden"
                            defaultValue={pair}
                            id="get_pairs_for_js"
                        />
                        <div className="center-top-ghTgp" id="tvchart"></div>
                        <div className="center-bottom-ghTgp">
                            <div className="order-fbGht">
                                <div className="order__box-fbGht">
                                    <div className="order__tab-fbGht">
                                        <div
                                            className="button__container"
                                            id="btnBox"
                                        >
                                            <div
                                                className={`rushButton ${
                                                    pageActive == pages[0]
                                                        ? "buttonActiveNew"
                                                        : ""
                                                }`}
                                                id="btnOne"
                                                onClick={() =>
                                                    setPageActive(pages[0])
                                                }
                                            >
                                                Limit
                                            </div>
                                            <div
                                                className={`rushButton ${
                                                    pageActive == pages[1]
                                                        ? "buttonActiveNew"
                                                        : ""
                                                }`}
                                                id="btnTwo"
                                                onClick={() =>
                                                    setPageActive(pages[1])
                                                }
                                            >
                                                Market
                                            </div>
                                            <div
                                                className={`rushButton ${
                                                    pageActive == pages[2]
                                                        ? "buttonActiveNew"
                                                        : ""
                                                }`}
                                                id="btnThree"
                                                onClick={() =>
                                                    setPageActive(pages[2])
                                                }
                                            >
                                                Trigger Order
                                            </div>
                                        </div>
                                        <div className="content__container tabsBoxOne">
                                            {pageActive == [pages[0]] ? (
                                                <LimitsTrading
                                                    loadingUser={loadingUser}
                                                    user={user}
                                                    firstCurrency={
                                                        firstCurrency
                                                    }
                                                    secondCurrency={
                                                        secondCurrency
                                                    }
                                                    valueRangeSell={
                                                        valueRangeSell
                                                    }
                                                    setPercentSell={
                                                        setPercentSell
                                                    }
                                                    triggerNewUserError={
                                                        triggerNewUserError
                                                    }
                                                />
                                            ) : pageActive == pages[1] ? (
                                                <MarketTrading
                                                    loadingUser={loadingUser}
                                                    user={user}
                                                    secondCurrency={
                                                        secondCurrency
                                                    }
                                                    valueRangeBuy={
                                                        valueRangeBuy
                                                    }
                                                    setPercentBuy={
                                                        setPercentBuy
                                                    }
                                                    firstCurrency={
                                                        firstCurrency
                                                    }
                                                    setPercentSell={
                                                        setPercentSell
                                                    }
                                                    setValueSell={setValueSell}
                                                    valueSell={valueSell}
                                                    valueBuy={valueBuy}
                                                    setValueBuy={setValueBuy}
                                                    submitHandler={
                                                        submitHandler
                                                    }
                                                    currencyNowPrice={
                                                        currencyNowPrice
                                                    }
                                                />
                                            ) : pageActive == pages[2] ? (
                                                <TriggerOrderTrading
                                                    loadingUser={loadingUser}
                                                    user={user}
                                                    firstCurrency={
                                                        firstCurrency
                                                    }
                                                    secondCurrency={
                                                        secondCurrency
                                                    }
                                                    valueRangeSell={
                                                        valueRangeSell
                                                    }
                                                    setPercentSell={
                                                        setPercentSell
                                                    }
                                                    triggerNewUserError={
                                                        triggerNewUserError
                                                    }
                                                />
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-top-ghTgp coins">
                            <div className="coins__search">
                                <div className="coins__search-icon">
                                    <svg
                                        className="svg-icon search-icon"
                                        aria-labelledby="title desc"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 19.9 19.7"
                                    >
                                        <title id="title">Search Icon</title>
                                        <desc id="desc">
                                            A magnifying glass icon.
                                        </desc>
                                        <g
                                            className="search-path"
                                            fill="none"
                                            stroke="#848F91"
                                        >
                                            <path
                                                strokeLinecap="square"
                                                d="M18.5 18.3l-5.4-5.4"
                                            />
                                            <circle cx={8} cy={8} r={7} />
                                        </g>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    id="search_pairs"
                                />
                            </div>
                            <div className="coins__names">
                                <div className="coins__names-item coins__names-currency">
                                    Currency
                                </div>
                                <div className="coins__names-item coins__names-last">
                                    Last
                                </div>
                                <div className="coins__names-item coins__names-change">
                                    Change
                                </div>
                            </div>
                            <div className="coins__items">
                                <div className="coins__items-wrapper">
                                    {!loadingUser && !loadingTickersList
                                        ? user.tradingProps.map((item) => (
                                              <a
                                                  className="coins__item"
                                                  href={`/trading?pair=${item.pair}`}
                                              >
                                                  <div className="coins__item-currency">
                                                      <div className="coins__item-icon">
                                                          <img
                                                              src={item.image}
                                                              alt={item.pair}
                                                              style={{
                                                                  width: "20px !important",
                                                              }}
                                                          />
                                                      </div>
                                                      <span>
                                                          {item.firstSymbol}
                                                      </span>
                                                      /{item.secondSymbol}{" "}
                                                  </div>
                                                  <div className="coins__item-last">
                                                      {parseFloat(
                                                         tickersList.find(item2=>item.symbol==item2.pair).lastPrice
                                                      ) +
                                                          parseFloat(
                                                              item.CHECK_TRADING_CURRENCY_PRICE
                                                          )}
                                                  </div>
                                                  <div
                                                      className={`coins__item-change ${
                                                          parseFloat(
                                                            tickersList.find(item2=>item.symbol==item2.pair).priceChangePercent
                                                          ) < 0
                                                              ? "down"
                                                              : "up"
                                                      }`}
                                                  >
                                                      {
                                                          tickersList.find(item2=>item.symbol==item2.pair).priceChangePercent
                                                      }
                                                  </div>
                                              </a>
                                          ))
                                        : null}
                                </div>
                            </div>
                        </div>
                        <div className="right-center-ghTgp trades">
                            <div className="trades__title">Trades</div>
                            <div className="trades__names">
                                <div className="trades__names-item trades__names-price">
                                    Price({secondCurrency})
                                </div>
                                <div className="trades__names-item trades__names-size">
                                    Size({firstCurrency})
                                </div>
                                <div className="trades__names-item trades__names-time">
                                    Time
                                </div>
                            </div>
                            <div className="trades__items">
                                <div
                                    className="trades__items-wrapper"
                                    id="recent_orders"
                                >
                                    
                                </div>
                            </div>
                        </div>
                        <div className="orders-list">
                            <div className="button__container" id="orders">
                                <div
                                    className={`rushButton ${
                                        pageActiveOrders == pagesTrading[0]
                                            ? "buttonActiveNew"
                                            : ""
                                    } `}
                                    id="ordersBtnOne"
                                    onClick={() =>
                                        setPageActiveOrders(pagesTrading[0])
                                    }
                                >
                                    My Open Orders
                                </div>
                                <div
                                    id="ordersBtnTwo"
                                    className={`rushButton ${
                                        pageActiveOrders == pagesTrading[1]
                                            ? "buttonActiveNew"
                                            : ""
                                    } `}
                                    onClick={() =>
                                        setPageActiveOrders(pagesTrading[1])
                                    }
                                >
                                    My Trading History
                                </div>
                            </div>
                            <div className="orders_content__container tabsBoxOne">
                                {pageActiveOrders == pagesTrading[0] ? (
                                    <div
                                        className="content__container-item tabsBoxOne itemActiveNew"
                                        id="ordersConOne"
                                    >
                                        <div className="orders__table">
                                            <div className="orders__names">
                                                <div className="orders__names-item orders__names-date">
                                                    Date
                                                </div>
                                                <div className="orders__names-item orders__names-pair">
                                                    Pair
                                                </div>
                                                <div className="orders__names-item orders__names-side">
                                                    Side
                                                </div>
                                                <div className="orders__names-item orders__names-type">
                                                    Type
                                                </div>
                                                <div className="orders__names-item orders__names-amount">
                                                    Amount
                                                </div>
                                                <div className="orders__names-item orders__names-status">
                                                    Status
                                                </div>
                                                <div className="orders__names-item orders__names-cancel"></div>
                                            </div>
                                            <div
                                                className="orders__items"
                                                id="orders_table"
                                            >
                                                <div
                                                    className="orders_noHis"
                                                    style={{
                                                        margin: "auto",
                                                        textAlign: "center",
                                                        marginTop: "100px",
                                                    }}
                                                >
                                                    No open orders
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : !loadingUserTrade ? (
                                    <div
                                        className="content__container-item tabsBoxOne itemActiveNew"
                                        id="ordersConTwo"
                                    >
                                        <div className="orders__table">
                                            <div className="orders__names">
                                                <div className="orders__names-item orders__names-date">
                                                    Date
                                                </div>
                                                <div className="orders__names-item orders__names-pair">
                                                    Pair
                                                </div>
                                                <div className="orders__names-item orders__names-side">
                                                    Side
                                                </div>
                                                <div className="orders__names-item orders__names-type">
                                                    Type
                                                </div>
                                                <div className="orders__names-item orders__names-amount">
                                                    Amount
                                                </div>
                                                <div className="orders__names-item orders__names-status">
                                                    Status
                                                </div>
                                                <div className="orders__names-item orders__names-cancel"></div>
                                            </div>
                                            <div
                                                className="orders__items"
                                                id="orders_history"
                                            >
                                                {userTrade.map((item) => (
                                                    <div className="orders__item">
                                                        <div className="orders__item-date">
                                                            {createdAtConverter(
                                                                item.createdAt
                                                            )}
                                                        </div>
                                                        <div className="orders__item-pair">
                                                            {item.pair}
                                                        </div>
                                                        <div className="orders__item-side">
                                                            {item.side}
                                                        </div>
                                                        <div className="orders__item-type">
                                                            Market
                                                        </div>
                                                        <div className="orders__item-amount">
                                                            {item.amount}
                                                        </div>
                                                        <div className="orders__item-status">
                                                            Successfully
                                                        </div>
                                                    </div>
                                                ))}
                                                <div
                                                    className="orders_noHis"
                                                    style={{
                                                        margin: "auto",
                                                        textAlign: "center",
                                                        marginTop: "100px",
                                                    }}
                                                >
                                                    No historical orders
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
};

function addCommas(nStr) {
    nStr += "";
    let x = nStr.split(".");
    let x1 = x[0];
    let x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
}

export default Trading;
