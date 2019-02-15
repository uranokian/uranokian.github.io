const SLIDER = function(){

     const urls = ["photos/header-background.jpg", "photos/header-background-2.jpg"];
     let photoWidth = $(".slidewrapper__slide-img").width();
     let amountOfPhoto = $(".slidewrapper__slide-img").length;
     console.log(amountOfPhoto);
     
     
     count = 1;
     setInterval(function() {
          if (count == amountOfPhoto) {
               return;
          }
          $(".slidewrapper").css({
               'left': `${-photoWidth*count}px`,
          });
          count += 1;
          
     }, 10000);
               
}();