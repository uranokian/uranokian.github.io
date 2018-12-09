let menu = $('.hidden-menu');
let menuLinks = $('.hidden-menu__links');
let menuButton = $('.menu-button').children();

$(menuButton).on('click', function(){
    $(menu).animate({
          right: 0,
        },500);
});


$(document).click(function(e){
  if (menu.is(e.target) || menuButton.is(e.target) || menuLinks.is(e.target)) {
    
  } else {
    $(menu).animate({
      right: -250,
    },500);
  }
});

