(function() {
    
    //cardsColorSettings
    const FirstColor = "transparent";
    const SecondColor = "#A649A6";
    const buyButton = $(".card-wrapper__buy-button");
    $('.card-wrapper').hover(
        function() {
            $(this).find(".card-wrapper__buy-button").css({
                "background-color": "#FFE9FF",
                
            });
        },
        function() {
            $(this).find(".card-wrapper__buy-button").css({
                "background-color": FirstColor,
                
            });
        });
    buyButton.hover(
        function() {
            $(this).css({
                "background-color": SecondColor,
                "color": "white"
            });
            
        },
        function() {
            $(this).css({
                "background-color": "#FFE9FF",
                "color": "black"
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
            proba.css("background", "#ffd3ff");
        }
    }
    
})();