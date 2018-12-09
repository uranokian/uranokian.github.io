class AccardeonItem {

    constructor(classNameElem) {
        this.rootElem = $(classNameElem);
        this.rootElemText = $(this.rootElem).find('p');
        this.showHide();
    }
    
    showHide() {
        $(this.rootElem).hover(
            ()=>{
              this.rootElemText.slideDown(300);
            },
            ()=>{
              this.rootElemText.slideUp(300);
            }
        );
    }
}
    
let AccardeonItem1 = new AccardeonItem('.independent-accardeon-item1');
let AccardeonItem2 = new AccardeonItem('.independent-accardeon-item2');
let AccardeonItem3 = new AccardeonItem('.independent-accardeon-item3');
let AccardeonItem4 = new AccardeonItem('.independent-accardeon-item4');