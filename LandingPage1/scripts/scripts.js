(function () {
   const sideMenu = $('.side-menu');
   sideMenuLength = sideMenu.width();
   
   const closeButton = sideMenu.find('.close-button');
   menuButton = $('.menu-button');
   menuButton.click(()=> {
    sideMenu.animate({
        right: 0,
    }, 300, "linear");
   });


   closeButton.click(()=> {
    sideMenu.animate({
        right: -sideMenuLength-33,
    }, 300, "linear");
   });

   $('.side-menu ~ *').click(()=> {
    sideMenu.animate({
        right: -sideMenuLength-33,
    }, 300, "linear");
   })

})();