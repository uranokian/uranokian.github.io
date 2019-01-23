(function() {
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