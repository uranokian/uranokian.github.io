(function() {
    const FirstColor = "transparent";
    const SecondColor = "#FC3C3C";
    const buyButton = $(".card-wrapper__buy-button");
    $('.card-wrapper').hover(
        function() {
            $(this).find(".card-wrapper__buy-button").css({
                "background-color": "#F8B500",
                
            });
        },
        function() {
            $(this).find(".card-wrapper__buy-button").css({
                "background-color": FirstColor,
                
            });
        });
    buyButton.hover(
        function() {
            $(this).css("background-color", SecondColor);
        },
        function() {
            $(this).css({
                "background-color": "#F8B500",
            });
        }
    );

    buyButton.click(function() {
        location.href = 'https://web.telegram.org/#/im?p=@romadench' || 'tg://resolve?domain=romadench';
    });
    romadench
})();