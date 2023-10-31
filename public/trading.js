const log = console.log;
var percent, type_action;
var all_actions;
import LightweightCharts from "lightweight-charts";

log("hi trading");

function addCommas(nStr) {
    nStr += "";
    x = nStr.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
}

var tv_chart_height = $(".center-top-ghTgp").height();
console.log(tv_chart_height);
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
};

const domElement = document.querySelector("#tvchart");

const chart = LightweightCharts.createChart(domElement, chartPropeties);

const candleSeries = chart.addCandlestickSeries();
var volumeSeries = chart.addHistogramSeries({
    priceFormat: {
        type: "volume",
    },
    priceScaleId: "",
    scaleMargins: {
        top: 0.8,
        bottom: 0.01,
    },
});
//1m 3m 5m 15m 30m 1h 2h 4h 6h 8h 12h 1d 3d 1w 1M

var symbol = document.querySelector("#var_for_chart").getAttribute("symbol");
var customSymbol = document
    .querySelector("#var_for_chart")
    .getAttribute("customSymbol");

if (customSymbol == "") {
    customSymbol = symbol;
} else {
    symbol = document
        .querySelector("#var_for_chart")
        .getAttribute("customSymbol");
    customSymbol = document
        .querySelector("#var_for_chart")
        .getAttribute("symbol");
}

var pairs_for_ajax = $("#get_pairs_for_js").val();

function get_percent(data) {
    //return data;
    if (all_actions != undefined) {
        for (i = 0; i < all_actions.length; i++) {
            if (all_actions[i]["pair"] == customSymbol) {
                type_action = parseInt(all_actions[i]["type_action"]);
                percent = parseFloat(all_actions[i]["percent"]);
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

chart_data = document.querySelector("#chart_data").innerHTML;

cdata = JSON.parse(chart_data);
//log(cdata)

// const cdata = chart_data.map(d => {
//     return { time: d[0] / 1000, open: get_percent(d[1]), high: get_percent(d[2]), low: get_percent(d[3]), close: get_percent(d[4]) }
// })
// log(cdata)
candleSeries.setData(cdata);

const volume_data = cdata.map((d) => {
    if (parseFloat(d["open"]) < parseFloat(d["close"])) {
        clr = "#0f3a36"; //green
    } else {
        clr = "#501f1e"; // red
    }
    time = d["time"];
    return { time, value: parseFloat(d["volume"]), color: clr };
});
//log(volume_data)
volumeSeries.setData(volume_data);
// UPDATE PRICE FROM LEFT, STAT PRICE AND BEST PRICE
if (cdata[cdata.length - 1]["close"] > 100) {
    priceUpdate = parseFloat(cdata[cdata.length - 1]["close"]).toFixed(2);
}
if (
    cdata[cdata.length - 1]["close"] >= 1 &&
    cdata[cdata.length - 1]["close"] < 100
) {
    priceUpdate = parseFloat(cdata[cdata.length - 1]["close"]).toFixed(4);
}
if (
    cdata[cdata.length - 1]["close"] < 1 &&
    cdata[cdata.length - 1]["close"] > 0.001
) {
    priceUpdate = parseFloat(cdata[cdata.length - 1]["close"]).toFixed(5);
}
if (cdata[cdata.length - 1]["close"] < 0.001) {
    priceUpdate = parseFloat(cdata[cdata.length - 1]["close"]).toFixed(8);
}

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
// //wss://stream.binance.com:9443/stream?streams=!ticker@arr@3000ms

$.ajax({
    url: "../ajax/trading_live",
    type: "POST",
    data: {
        action: "CHECK_TRADING_CURRENCY_PRICE",
        pairs: pairs_for_ajax,
    },
    success: function (response) {
        var currency_now_price = parseFloat(response);

        wsLiveChart = new WebSocket(
            "wss://stream.binance.com:9443/ws/" +
                symbol.toLowerCase() +
                "@kline_1m"
        );
        wsLiveChart.onopen = function () {};

        wsLiveChart.onmessage = function (onmessage) {
            let resp_socket = JSON.parse(onmessage.data);

            $.ajax({
                url: "../ajax/web_get_edited_pair",
                type: "POST",
                data: {
                    action: "get_pair_status",
                    pairs: pairs_for_ajax,
                },
                success: function (response) {
                    if (response == "false") {
                        time = Math.floor(resp_socket.k.T / 1000);

                        high = reloadCurrencyPrice(
                            get_percent(resp_socket.k.h),
                            currency_now_price
                        );
                        low = reloadCurrencyPrice(
                            get_percent(resp_socket.k.l),
                            currency_now_price
                        );
                        close = reloadCurrencyPrice(
                            get_percent(resp_socket.k.c),
                            currency_now_price
                        );

                        if (his_edited == "true") {
                            open = his_close;
                            var new_soc_his_time = new_fix_time + 60;
                            if (new_soc_his_time <= time) {
                                log(new_soc_his_time);
                                log(time);
                                his_edited = "false";
                            }
                        } else {
                            open = reloadCurrencyPrice(
                                get_percent(resp_socket.k.o),
                                currency_now_price
                            );
                        }

                        soc_his_time = time;

                        rez = {
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
                        $("#aj_live_price_3").html(fixed_price);
                        var new_symbol = symbol.split("USDT").join("");
                        $("html head")
                            .find("title")
                            .text(
                                "$" +
                                    addCommas(fixed_price) +
                                    " - Buy and sell Bitcoin and Ethereum"
                            );
                        pair_price = parseFloat(close);

                        $("#aj_live_new_price_block_2").html(
                            fixed_price + " USD"
                        );
                        $("#aj_live_new_price_block_1").html(fixed_price);
                        $("#currency_in_list_" + new_symbol).html(fixed_price);

                        if (
                            last_currency_price < pair_price ||
                            last_currency_price == 0
                        ) {
                            $("#price_block_minus_plus").removeClass(
                                "order__info-price-minus"
                            );
                            $("#price_block_minus_plus").removeClass(
                                "order__info-price-plus"
                            );

                            $("#price_block_minus_plus").addClass(
                                "order__info-price-plus"
                            );
                        } else {
                            $("#price_block_minus_plus").removeClass(
                                "order__info-price-minus"
                            );
                            $("#price_block_minus_plus").removeClass(
                                "order__info-price-plus"
                            );

                            $("#price_block_minus_plus").addClass(
                                "order__info-price-minus"
                            );
                        }

                        last_currency_price = pair_price;
                    } else {
                        $.ajax({
                            url: "../ajax/web_get_edited_pair",
                            type: "POST",
                            data: {
                                action: "get_edited_status",
                                pairs: pairs_for_ajax,
                            },
                            success: function (response) {
                                his_edited = "true";

                                var json = JSON.parse(response);

                                time = Math.floor(json["g_time"]);

                                new_fix_time = Math.floor(json["g_time"]);

                                if (soc_his_time > time) {
                                    time = soc_his_time;
                                }
                                open = get_percent(json["g_open"]);
                                high = get_percent(json["g_high"]);
                                low = get_percent(json["g_low"]);
                                close = get_percent(json["g_close"]);
                                his_close = get_percent(json["g_close"]);

                                rez = {
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
                                $("#aj_live_price_3").html(fixed_price);
                                var new_symbol = symbol.split("USDT").join("");
                                $("html head")
                                    .find("title")
                                    .text(
                                        "$" +
                                            addCommas(fixed_price) +
                                            " - Buy and sell Bitcoin and Ethereum"
                                    );
                                pair_price = parseFloat(close);
                            },
                        });
                    }
                },
            });
        };

        function responseOrder(data) {}
    },
    //log(parseFloat(1).toFixed(4))
});

function get_percent_stat(data, percent, type_action) {
    if (percent != null && type_action != null) {
        data = parseFloat(data);
        percent = parseInt(percent);
        type_action = parseInt(type_action);

        if (type_action == 2) {
            return data + (data * percent) / 100;
        }
        if (type_action == 1) {
            return data - (data * percent) / 100;
        }
        if (type_action == 0) {
            return data;
        }
    } else {
        return data;
    }
}

leftpairList = document.querySelectorAll(".link"); //document.querySelectorAll('.link')[27].childNodes[3].innerText = 11

btc_pairs_label = document.querySelectorAll("#btc_pairs_label");
eth_pairs_label = document.querySelectorAll("#eth_pairs_label");
usdt_pairs_label = document.querySelectorAll("#usdt_pairs_label");

btcPairs = document.querySelectorAll(".BTC");
ethPairs = document.querySelectorAll(".ETH");
usdtPairs = document.querySelectorAll(".USDT");

btc_pairs_label.forEach((element) => {
    element.onclick = function () {
        for (i = 0; i < ethPairs.length; i++) {
            ethPairs[i].style.display = "none";
        }
        for (i = 0; i < usdtPairs.length; i++) {
            usdtPairs[i].style.display = "none";
        }
        for (i = 0; i < btcPairs.length; i++) {
            btcPairs[i].style.display = "table-row";
        }
        document.querySelector("#underline_bar").style.left = "90px";
    };
});

eth_pairs_label.forEach((element) => {
    element.onclick = function () {
        for (i = 0; i < btcPairs.length; i++) {
            btcPairs[i].style.display = "none";
        }
        for (i = 0; i < usdtPairs.length; i++) {
            usdtPairs[i].style.display = "none";
        }
        for (i = 0; i < ethPairs.length; i++) {
            ethPairs[i].style.display = "table-row";
        }
        document.querySelector("#underline_bar").style.left = "158px";
    };
});

usdt_pairs_label.forEach((element) => {
    element.onclick = function () {
        for (i = 0; i < ethPairs.length; i++) {
            ethPairs[i].style.display = "none";
        }
        for (i = 0; i < btcPairs.length; i++) {
            btcPairs[i].style.display = "none";
        }
        for (i = 0; i < usdtPairs.length; i++) {
            usdtPairs[i].style.display = "table-row";
        }
        document.querySelector("#underline_bar").style.left = "12px";
    };
});

for (i = 0; i < btcPairs.length; i++) {
    btcPairs[i].style.display = "none";
}
for (i = 0; i < ethPairs.length; i++) {
    ethPairs[i].style.display = "none";
}

link = document.querySelectorAll(".link");
link.forEach((element) => {
    element.onclick = function () {
        document.location.href = "trading?pair=" + element.id;
    };
});

$(".chat__messages").load("ajax/ajax_chat?a=view");
setTimeout(function () {
    var div = $(".chat__messages");
    div.scrollTop(div.prop("scrollHeight"));
}, 1000);

setInterval(function () {
    $(".chat__messages").load("ajax/ajax_chat?a=view");
}, 10000);

$("#chat_send").on("click", function () {
    var chat_message = $("#chat_input").val();

    if (chat_message == "") {
        noti("Please enter text to send", "error");
    } else {
        $.ajax({
            url: "ajax/ajax_chat",
            type: "POST",
            data: {
                action_post: "send",
                msg: chat_message,
            },
            success: function (response) {
                if (response == "1") {
                    $(".chat__messages").load("ajax/ajax_chat?a=view");
                    noti("Message sent", "success");
                    $("#chat_input").val("");
                    setTimeout(function () {
                        var div = $(".chat__messages");
                        div.scrollTop(div.prop("scrollHeight"));
                    }, 1000);
                    var audio = new Audio();
                    audio.preload = "auto";
                    audio.src = "sounds/chat.mp3";
                    audio.play();
                } else if (response == "2") {
                    noti("Please enter text to send", "error");
                } else if (response == "3") {
                    noti("Last you wrote, wait a bit :)", "error");
                } else if (response == "4") {
                    noti("You cannot chat, please contact support", "error");
                } else {
                    var json = JSON.parse(response);
                    var json_chat = json["chat_error"];
                    noti(json_chat, "error");
                }
            },
        });
    }
});

// Auto calculate prices from buy and sell inputs
var pair_price = 0;
var pair_one = $("#one_pair").val().toLowerCase();
var pair_two = $("#two_pair").val().toLowerCase();

var sign_in = $("#sign_in").val();

var user_balance = $("#" + pair_two + "_balance").val();
var user_available = 0;

$(document).ready(function () {
    setInterval(function () {
        user_balance = $("#" + pair_two + "_balance").val();

        user_available = parseFloat(user_balance).toFixed(2);

        $("#buy_available").html(user_available);
        $("#buy_available2").html(user_available);
        $("#buy_available3").html(user_available);
    }, 1500);
});

//buy

$("#buy_amount_input").keyup(function (e) {
    var buy_amount = $("#buy_amount_input").val();

    if (buy_amount == "") {
        $("#buy_crypto_available").html("0.000000");
    } else {
        var result_price = parseFloat(buy_amount);
        result_price = result_price.toFixed(8);

        var total_usdt = result_price / pair_price;

        $("#buy_crypto_available").html(total_usdt.toFixed(6));
    }
});

/////

//sell

$("#sell_amount_input").keyup(function (e) {
    var sell_amount = $("#sell_amount_input").val();
    var result_price = sell_amount * pair_price;
    result_price = result_price.toFixed(2);

    $("#sell_crypto_available").html(result_price);
});

/////
/////////////////////////////////////////////////

// ---------------- Sell and Buy buttons -----------------------//
$("#btn_buy").on("click", function () {
    var buy_amount = $("#buy_amount_input").val();
    var buy_amount_crypto = $("#buy_crypto_available").html();
    var buy_available = $("#buy_available").html();
    buy_available = parseFloat(buy_available) / pair_price;

    if (buy_amount == "") {
        noti("Please, enter buy amount", "warning");
    } else if (parseFloat(buy_amount_crypto) > parseFloat(buy_available)) {
        noti(
            "Not enough balance. Available for you: " +
                buy_available.toFixed(8) +
                " " +
                pair_one.toUpperCase(),
            "error"
        );
    } else {
        noti("Processing..", "warning");
        $.ajax({
            url: "ajax/ajax",
            type: "POST",
            data: {
                action: "BUY_CREATE_OPEN_ORDERS",
                pair_price: pair_price,
                pair_from: pair_one,
                pair_to: pair_two,
                buy_amount: buy_amount_crypto,
                buy_section: "INSTANT",
            },
            success: function (response) {
                if (response == "1") {
                    $("#orders_table").load("ajax/ajax?action=GET_OPEN_ORDERS");
                    noti(
                        "Order successfully created to buy currency",
                        "success"
                    );
                    $("#buy_amount_input").val("");
                    $("#buy_crypto_available").html("0.000000");
                } else if (response == "2") {
                    noti("Not enough balance.", "error");
                } else if (response == "3") {
                    noti("Error", "error");
                } else if (response == "4") {
                    noti(
                        "An unknown error has occurred, please try again later",
                        "error"
                    );
                } else if (response == "5") {
                    noti(
                        "Wait a moment.. you already have an open order",
                        "error"
                    );
                } else {
                    noti(
                        "An unknown error has occurred, please try again later",
                        "error"
                    );
                }
            },
        });
    }
});

$("#btn_sell").on("click", function () {
    var sell_amount = $("#sell_amount_input").val();
    var sell_available = $("#sell_available").html();
    var sell_fee = $("#sell_fee").html();
    sell_available_fee = sell_available - sell_fee;

    if (pair_price == 0) {
        alert("error pair price");
    } else {
        if (sell_amount == "") {
            noti("Please, enter sell amount", "warning");
        } else if (parseFloat(sell_amount) > parseFloat(sell_available)) {
            noti(
                "Not enough balance. Available for you: " +
                    sell_available +
                    " " +
                    pair_one.toUpperCase(),
                "error"
            );
        } else {
            noti("Processing..", "warning");
            $.ajax({
                url: "ajax/ajax",
                type: "POST",
                data: {
                    action: "SELL_CREATE_OPEN_ORDERS",
                    pair_price: pair_price,
                    pair_from: pair_one,
                    pair_to: pair_two,
                    sell_amount: sell_amount,
                    sell_section: "INSTANT",
                },
                success: function (response) {
                    if (response == "1") {
                        $("#orders_table").load(
                            "ajax/ajax?action=GET_OPEN_ORDERS"
                        );
                        noti(
                            "Order successfully created to sell currency",
                            "success"
                        );
                    } else if (response == "2") {
                        noti("Not enough balance.", "error");
                    } else if (response == "3") {
                        noti("Error", "error");
                    } else if (response == "4") {
                        noti(
                            "An unknown error has occurred, please try again later",
                            "error"
                        );
                    } else if (response == "5") {
                        noti(
                            "Wait a moment.. you already have an open order",
                            "error"
                        );
                    } else {
                        noti(
                            "An unknown error has occurred, please try again later",
                            "error"
                        );
                    }
                },
            });
        }
    }
});

setInterval(function () {
    $.ajax({
        url: "ajax/ajax",
        type: "POST",
        data: {
            action: "CLOSE_OPEN_ORDERS",
        },
        success: function (response) {
            if (response == "true_buy") {
                noti("Currency purchased successfully", "success");
            }

            $("#orders_table").load("ajax/ajax?action=GET_OPEN_ORDERS");
            $("#orders_history").load("ajax/ajax?action=GET_HISTORY_ORDERS");
        },
    });
}, 10000);
///////////////////////////////-END-///////////////////////////////

var pairs_value = $("#pairs").val();
var pairss_one = $("#one_pair").val();
var pairss_two = $("#two_pair").val();
var new_pairs = pairss_one + "_" + pairss_two;

var first_red_block;
var first_green_block;

$.ajax({
    url: "ajax/trading_live",
    type: "POST",
    data: {
        action: "TRADING_BTC_USDT",
        pairs: pairs_value,
        new_pairs: new_pairs,
    },
    success: function (response) {
        var random_number = Math.floor(Math.random() * 10 + 4);
        var json = JSON.parse(response);

        pair_price = parseFloat(json[1][0]);

        var tr_block_id = 1; //start 6
        var new_tr_block_id = 1; // start 7
        var for_tr_block_id = 1;

        var json_red_count = 1; //limit 1000
        var json_green_count = 10; //limit 1000

        var red_block = "";
        var green_block = "";

        for (var i = 0; i < 19; i++) {
            function random_number() {
                // Random Number Red
                var random_number_2 = Math.floor(Math.random() * 7 + 1);
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
                parseFloat(json[json_red_count][0]) *
                parseFloat(json[json_red_count][1]);
            var two_price_green =
                parseFloat(json[json_green_count][0]) *
                parseFloat(json[json_green_count][1]);

            var two_amount_red = parseFloat(json[json_red_count][1]);
            if (two_amount_red > 1) {
                two_amount_red = two_amount_red.toFixed(2);
            } else {
                two_amount_red = two_amount_red.toFixed(6);
            }

            var two_amount_green = parseFloat(json[json_green_count][1]);
            if (two_amount_green > 1) {
                two_amount_green = two_amount_green.toFixed(2);
            } else {
                two_amount_green = two_amount_green.toFixed(6);
            }

            // red order book

            var red_block_form = parseFloat(json[json_red_count][0]);
            if (red_block_form > 10) {
                red_block_form = red_block_form.toFixed(2);
            } else if (red_block_form > 0.1) {
                red_block_form = red_block_form.toFixed(4);
            } else {
                red_block_form = red_block_form.toFixed(6);
            }

            var green_block_form = parseFloat(json[json_green_count][0]);
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
                    var random_number_2 = Math.floor(Math.random() * 7 + 1);
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
                    parseFloat(json[json_red_count][0]) *
                    parseFloat(json[json_red_count][1]);
                var two_price_green =
                    parseFloat(json[json_green_count][0]) *
                    parseFloat(json[json_green_count][1]);

                var two_amount_red = parseFloat(json[json_red_count][1]);
                if (two_amount_red > 1) {
                    two_amount_red = two_amount_red.toFixed(2);
                } else {
                    two_amount_red = two_amount_red.toFixed(6);
                }

                var two_amount_green = parseFloat(json[json_green_count][1]);
                if (two_amount_green > 1) {
                    two_amount_green = two_amount_green.toFixed(2);
                } else {
                    two_amount_green = two_amount_green.toFixed(6);
                }

                var json_red_block_form = parseFloat(json[json_red_count][0]);
                if (json_red_block_form > 1) {
                    json_red_block_form = json_red_block_form.toFixed(2);
                } else if (json_red_block_form > 0.1) {
                    json_red_block_form = json_red_block_form.toFixed(4);
                } else {
                    json_red_block_form = json_red_block_form.toFixed(6);
                }

                var json_green_block_form = parseFloat(
                    json[json_green_count][0]
                );
                if (json_green_block_form > 10) {
                    json_green_block_form = json_green_block_form.toFixed(2);
                } else if (json_green_block_form > 0.1) {
                    json_green_block_form = json_green_block_form.toFixed(4);
                } else {
                    json_green_block_form = json_green_block_form.toFixed(6);
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

            first_red_block = timer_red_block + "" + first_red_block;
            first_green_block = timer_green_block + "" + first_green_block;

            if (repeat_block == "red") {
                $("#order_sell_div").html(first_red_block);
            } else {
                $("#order_buy_div").html(first_green_block);
            }
        }, 1000);
    },
});

//recent orders

$.ajax({
    url: "../ajax/trading_live",
    type: "POST",
    data: {
        action: "TRADING_RECENT_LIVE",
        pairs: pairs_value,
        new_pairs: new_pairs,
    },      
    success: function (response) {
        var json_price = JSON.parse(response);
        var json_count = 1;
        var recent_tr_block_id = 21; //start 6
        var recent_new_tr_block_id = 47; // start 7

        var recent_all_block = "";

        for (var iii = 0; iii < 20; iii++) {
            var json_live_price = parseFloat(json_price[json_count][0]);
            var json_live_amount = parseFloat(json_price[json_count][1]);
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

            if (json_live_m == "true") {
                recent_status = "buy";
            } else {
                recent_status = "sell";
            }

            function random_number() {
                // Random Number Red
                var random_number_2 = Math.floor(Math.random() * 7 + 1);
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

            var remove_recent_id = recent_new_tr_block_id - recent_tr_block_id;
            $("#recent_tr_" + remove_recent_id).remove();
            recent_new_tr_block_id = recent_new_tr_block_id + 1;

            if (iii == 19) {
                $("#recent_orders").prepend(recent_all_block);
            }
        }

        function doSomething() {
            var json_live_price = parseFloat(json_price[json_count][0]);
            var json_live_amount = parseFloat(json_price[json_count][1]);
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

            if (json_live_m == "true") {
                recent_status = "buy";
            } else {
                recent_status = "sell";
            }

            function random_number() {
                // Random Number Red
                var random_number_2 = Math.floor(Math.random() * 7 + 1);
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

            var remove_recent_id = recent_new_tr_block_id - recent_tr_block_id;
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

setInterval(function () {
    var messageId = $("#alertMessageId").val();
    if (messageId == "0") {
        $.ajax({
            url: "ajax/ajax",
            type: "POST",
            data: {
                action: "CHECK_USER_ALERT_MESSAGE",
            },
            success: function (response) {
                if (response != "false") {
                    var json = JSON.parse(response);
                    var alert_message_text = json["alert_message_text"];
                    var alert_message_id = json["alert_message_id"];

                    if (json["alert_message_type"] == "alert") {
                        $("#alert_message_modal").css("display", "flex");
                        $("#userAlertBox").html(alert_message_text);
                        $("#alertMessageId").val(alert_message_id);
                    }
                }
            },
        });
    }
}, 5000);

$("#alert_close_modal").on("click", function () {
    $("#alert_message_modal").css("display", "none");
    var alertMessageId = $("#alertMessageId").val();

    $.ajax({
        url: "ajax/ajax",
        type: "POST",
        data: {
            action: "VIEWED_ALERT_MESSAGE",
            message_id: alertMessageId,
        },
        success: function (response) {},
    });
});

$("#alert_close_modal_btn").on("click", function () {
    $("#alert_message_modal").css("display", "none");
    var alertMessageId = $("#alertMessageId").val();

    $.ajax({
        url: "ajax/ajax",
        type: "POST",
        data: {
            action: "VIEWED_ALERT_MESSAGE",
            message_id: alertMessageId,
        },
        success: function (response) {},
    });
});

function preloaderFadeOutInit() {
    $(".preloader").fadeOut("slow");
    $("body").attr("class", "");
}
// Window load function
jQuery(window).on("load", function () {
    (function ($) {
        preloaderFadeOutInit();
    })(jQuery);
});

var terminal_crypto = pair_one.toUpperCase();
if (sign_in == "true") {
    setInterval(function () {
        $.ajax({
            url: "ajax/ajax",
            type: "POST",
            data: {
                action: "GET_TRADING_BALANCE_PANEL",
                terminal_crypto: terminal_crypto,
            },
            success: function (response) {
                var json = JSON.parse(response);

                $("#sell_available").html(json["crypto_balance"]);
                $("#sell_available2").html(json["crypto_balance"]);
                $("#sell_available3").html(json["crypto_balance"]);
                $("#buy_available").html(
                    parseFloat(json["my_balance"]).toFixed(2)
                );
                $("#buy_available2").html(
                    parseFloat(json["my_balance"]).toFixed(2)
                );
                $("#buy_available3").html(
                    parseFloat(json["my_balance"]).toFixed(2)
                );
                $("#usdt_balance").val(json["my_balance"]);
            },
        });
    }, 500);
}

$(document).ready(function () {
    $("#search_pairs").keyup(function () {
        _this = this;

        $.each($(".coins__item"), function () {
            if (
                $(this)
                    .text()
                    .toLowerCase()
                    .indexOf($(_this).val().toLowerCase()) === -1
            ) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
});

function disabledBuySelBtn() {
    noti("New users cannot open limit orders and trigger orders", "error");
    setTimeout(function () {
        noti("At the moment you can open a market order", "warning");
    }, 3500);
}

$(".order__slider-buy-market").on("change", function (e) {
    var range_val_buy = $(".order__slider-buy-market").val();
    var available_usd = $("#buy_available2").html();
    available_usd = parseFloat(available_usd);

    if (available_usd == 0) {
        noti("You don't have enough balance", "warning");
    } else {
        var result_change = (available_usd / 100) * range_val_buy;
        result_change = result_change.toFixed(2);

        var result_price = result_change / pair_price;
        result_price = result_price.toFixed(6);

        $("#buy_amount_input").val(result_change);
        $("#buy_crypto_available").html(result_price);
    }
});

$(".order__slider-sell-market").on("change", function (e) {
    var range_val_sell = $(".order__slider-sell-market").val();
    var available_usd = $("#sell_available2").html();
    available_usd = parseFloat(available_usd);

    if (available_usd == 0) {
        noti("You don't have enough balance", "warning");
    } else {
        var result_change = (available_usd / 100) * range_val_sell;

        var result_price = result_change * pair_price;
        result_price = result_price.toFixed(2);

        $("#sell_amount_input").val(result_change.toFixed(6));
        $("#sell_crypto_available").html(result_price);
    }
});
