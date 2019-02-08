(function() {
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
    let stop1 = null;

    const hiddenMenu = $(".hidden-menu");
    let ourAdvantagesStart = $(".header-main-title-wrapper").offset().top;

    //photoLoading
    PHOTO_LOADING.photoLoading("dc", ".dc-part", MODULE_DC.arrWithInfo);
    PHOTO_LOADING.photoLoading("marvel", ".marvel-part", MODULE_MARVEL.arrWithInfo);
    PHOTO_LOADING.photoLoading("star_wars", ".star-wars-part", MODULE_STAR__WARS.arrWithInfo);

    //cardWrapperColors
    const buyButton = $(".card-wrapper__buy-button");
    $('.card-wrapper').hover(
        function() {
            $(this).find(".card-wrapper__buy-button").css({
                "background-color": "#c48b9f",
            });
        },
        function() {
            $(this).find(".card-wrapper__buy-button").css({
                "background-color": "#f8bbd0",
            });
        });
    buyButton.hover(
        function() {
            $(this).css({
                "background-color": "#280680",
                "color": "#ffffff",
                "border": "#280680 2px solid"
            });
        },
        function() {
            $(this).css({
                "background-color": "#c48b9f",
                "color": "#000000",
                "border": "#c48b9f 2px solid"
            });
        }
    );

    //WhatDeviceDetection
    buyButton.click(function() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            location.href = "https://www.instagram.com/postlikeus/";
        } else {
            window.open("https://web.telegram.org/#/im?p=@romadench");
        }
    });

    //openHiddenMenu
    $(".navigation-button__icon").click(function(){
        hiddenMenu.css({
            "transform": "translateY(0)",
        });
    });

    //ourAdvantages-sliding
    $(window).scroll(function() {
        let scrollHeight = $(window).scrollTop();
        let heightBettweenElementandDoc = ourAdvantagesStart - scrollHeight;
        if (heightBettweenElementandDoc < 10 || heightBettweenElementandDoc == 0) {
            if (stop1 == null) {
                stop1 = true;
                $(".from-bottom").animate({
                    bottom: 0,
                    "opacity": "1"
                }, 500, function() {
                    $(".from-text").animate({
                        "opacity": "1"
                    }, 300)
                });
            }
        };
    });
})();