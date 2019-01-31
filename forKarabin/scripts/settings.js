(function() {
    /*colors
        @backrgound-main-color: #ffe3ff;
        @backrgound-navigation-color: #ffd4ff;
        @background-hover-color: #96A64A;
        @background-darkAsShit-color: #A64AA6;
        @background-card-color: #FAFFE3;
    */

    //cardsColorSettings
    const FirstColorTransparent = "transparent";
    const SecondColor = "#A64AA6";
    const HoverColor = "#96A64A";
    const buyButton = $(".card-wrapper__buy-button");
    $('.card-wrapper').hover(
        function() {
            $(this).find(".card-wrapper__buy-button").css({
                "background-color": SecondColor,
                "color": "white"
            });
        },
        function() {
            $(this).find(".card-wrapper__buy-button").css({
                "background-color": FirstColorTransparent,
                "color": "#2b211f"
            });
        });
    buyButton.hover(
        function() {
            $(this).css({
                "background-color": HoverColor,
                "color": "black"
            });
        },
        function() {
            $(this).css({
                "background-color": SecondColor,
                "color": "white"
            });
        }
    );
    
    //WhatDeviceDetection
    buyButton.click(function() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            location.href = "tg://resolve?domain=romadench";
        } else {
            location.href = "https://web.telegram.org/#/im?p=@romadench";
        }
    });

    //probaSettingsWithScroll
    window.onscroll = function() {
        let proba = $(".proba");
        let totalScroll = $(".total-scroll");
        let nav = $(".navigation");
        let mainPartCoords = $(".main-part").offset().top; //mainPartCoordinates
        let scroll = this.window.pageYOffset; //scroll Height
        let windowHeight = $(window).height(); // windowHeight
        let documentHeight = $(document).height(); //documentHeight
        let allHeightOfScroll = documentHeight - windowHeight; //100% scroll
        //setup totalScroll width
        let widthOfTotalScroll = scroll * 100 / allHeightOfScroll;
        totalScroll.css("width", widthOfTotalScroll + "%")
        //setup opacity scroll-down-arrows
        if((scroll + proba.height()) >= mainPartCoords) {            
            proba.css("background", "#ffd4ffb0");
        } else {
            proba.css("background", "#ffd4ff");
        }
    }

    //button-oc settings
    let buttonOC = $(".title-wrapper-of-cards-chapters-name__button-oc");
    function addClass(what) {
        $(what).toggleClass("title-wrapper-of-cards-chapters-name_button-ocbutton-oc-clicked");
    }
    
    function slide(whatClass) {
        $(whatClass).slideToggle(1000);
    }

    buttonOC.click(function(){
        if($(this).hasClass("dc")) {
            slide(".dc-part");
            addClass(this);
        }
        if($(this).hasClass("marvel")) {
            slide(".marvel-part");
            addClass(this);
        }
    })

    
})();