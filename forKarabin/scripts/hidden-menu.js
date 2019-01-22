const hiddenMenuModule = {};
(function() {
    function HiddenMenu(className) {
        this.rootElement = document.querySelector(className);
        this.menuGroup = this.rootElement.querySelector(".hidden-menu__group");
        this.closeButton = this.rootElement.querySelector(".close-button__icon");

        function closeButtonFunction(e) {
            if(e.target.className == "far fa-times-circle close-button__icon" || e.target.className == "hidden-menu__link") {
                this.style.transform = "translateY(-100%)";
            }
        }
        this.rootElement.onclick = closeButtonFunction;
    }
    
    const hiddenMenu1 = new HiddenMenu('.hidden-menu');
    return hiddenMenuModule.hiddenMenu1 = hiddenMenu1;
     
})();