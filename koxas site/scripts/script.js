var $page = $('html, body');
var figures = $('.examples-section__figure');

$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    this.link = this.href;
    return false;
});

$('div[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    this.link = this.href;
    return false;
});

$('.about-me-section__button').hover(function() {
  this.arrow = $(this).find('.without-hover');
  $(this.arrow).addClass('far-hover');
},
function() {
  $(this.arrow).removeClass('far-hover');
}
)

$('.menu__item').hover(function() {
  $('.menu__items').removeClass('chosenItem1');
  $(this).parent().addClass('chosenItem1');
},
function(){
  $('.menu__items').removeClass('chosenItem1');
});

$('.phone-menu-button').click(function() {
  $('.phone-menu').toggleClass('open-close');
});
