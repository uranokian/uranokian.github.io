(function() {
 function openMenuButton(className) {
    this.closeButton = document.querySelector(className);
    this.closeButton.onclick = function(e) {
        hiddenMenuModule.hiddenMenu1.rootElement.style.transform = "translateY(0)";
    }
 }

 const openMenuButton1 = new openMenuButton('.navigation-button__icon');
})();