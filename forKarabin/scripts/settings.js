(function () {
    /*colors
        @primaryColor:          #f8bbd0;
        @primaryLightColor:     #ffeeff;
        @primaryDarkColor:      #c48b9f;
        @secondaryColor:        #5e35b1;
        @secondaryLightColor:   #9162e4;
        @secondaryDarkColor:    #280680;
        @primaryTextColor:      #000000;
        @secondaryTextColor:    #ffffff;
    */

    //cardsColorSettings
    const buyButton = $(".card-wrapper__buy-button");
    $('.card-wrapper').hover(
        function () {
            $(this).find(".card-wrapper__buy-button").css({
                "background-color": "#c48b9f",
            });
        },
        function () {
            $(this).find(".card-wrapper__buy-button").css({
                "background-color": "#f8bbd0",
            });
        });
    buyButton.hover(
        function () {
            $(this).css({
                "background-color": "#280680",
                "color": "#ffffff",
                "border": "#280680 2px solid"
            });
        },
        function () {
            $(this).css({
                "background-color": "#c48b9f",
                "color": "#000000",
                "border": "#c48b9f 2px solid"
            });
        }
    );

    //WhatDeviceDetection
    buyButton.click(function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            location.href = "tg://resolve?domain=romadench";
        } else {
            window.open("https://web.telegram.org/#/im?p=@romadench");
        }
    });

    //button-oc settings
    let buttonOC = $(".title-wrapper-of-cards-chapters-name__button-oc");

    function addClass(what) {
        $(what).toggleClass("title-wrapper-of-cards-chapters-name_button-ocbutton-oc-clicked");
    }

    function slide(whatClass) {
        $(whatClass).slideToggle(1000);
    }
    buttonOC.click(function () {
        if ($(this).hasClass("dc")) {
            slide(".dc-part");
            addClass(this);
        }
        if ($(this).hasClass("marvel")) {
            slide(".marvel-part");
            addClass(this);
        }
    })

    //scrollToSections



})();