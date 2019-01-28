(function() {
    const FirstColor = "transparent";
    const SecondColor = "#2d6b22";
    const buyButton = $(".card-wrapper__buy-button");
    $('.card-wrapper').hover(
        function() {
            $(this).find(".card-wrapper__buy-button").css({
                "background-color": "#072a16",
                "color": "white",
            });
        },
        function() {
            $(this).find(".card-wrapper__buy-button").css({
                "background-color": FirstColor,
                "color": "rgba(0, 0, 0, 0.774)",   
            });
        });
    buyButton.hover(
        function() {
            $(this).css("background-color", SecondColor);
        },
        function() {
            $(this).css({
                "background-color": "#072a16",
                "color": "white"
            });
        }
    );

    buyButton.click(function() {
        location.href = 'https://web.telegram.org/#/im?p=@romadench';
    });

})();