(function() {
    /*colors
        @backrgound-main-color: #ffe3ff;
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
        let navigationLogoIcon = $(".navigation-logo__icon");
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
            nav.css("font-size", "1rem");            
            proba.css("background", "#ffe2ffe5");
            
        } else {
            proba.css("background", "#ffe3ff");
        }
    }
    
})();