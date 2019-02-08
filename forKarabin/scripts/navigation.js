(function(){
    let hiddenMenu = $(".hidden-menu");

    $(".hidden-menu").on("click", "li.hidden-menu__item, i.close-button__icon", function(){
        hiddenMenu.css({
            "transform": "translateY(-100%)",
        });
        function animateSroll(toWhatScroll) {
            $("html").animate({
                scrollTop: toWhatScroll - 200,
            }, 500);
        };
        if($(this).hasClass("to-DC")) {
            animateSroll($(".first-dc").offset().top, );
        } 
        else if ($(this).hasClass("to-Marvel")) {
            animateSroll($(".first-marvel").offset().top);
        } else if ($(this).hasClass("to-Star_wars")) {
            animateSroll($(".first-star_wars").offset().top);
        }      
    });
})();
 