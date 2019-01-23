(function() {
    let heightOfNavMenu = document.querySelector(".navigation-wrapper").clientHeight;
    console.log(heightOfNavMenu);
    let heightofTopHeader = document.querySelector(".top-header").clientHeight;
    console.log(heightofTopHeader);
    heightofTopHeader = heightofTopHeader - heightOfNavMenu;
    console.log(heightofTopHeader);
    document.querySelector(".top-header").style.height = heightofTopHeader + "px"; 

    window.onscroll = function() {
        let scrolled = window.pageYOffset;
        let navMenu = document.querySelector(".navigation-wrapper");
        if(scrolled > 0) {
            navMenu.classList.add("navigation-wrapper-scrolled");
        } else {
            navMenu.classList.remove("navigation-wrapper-scrolled");
            navMenu.classList.add("navigation-wrapper");
            
            }
      }
    
})();