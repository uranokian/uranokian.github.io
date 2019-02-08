(function(){

    class AppendButtons {
        constructor(toWhatAppend, whatPictureNumber, whatCatalouge) {
            const buttons = `
            <div class="photo-buttons-wrapper">
                <div class="photo-buttons-wrapper__first-button checked">
                    
                </div>
                <div class="photo-buttons-wrapper__second-button">

                </div>
            </div>
            `;
            $(toWhatAppend).append(buttons);
            this.goodRoot = toWhatAppend;
            this.button1 = this.goodRoot.find(".photo-buttons-wrapper__first-button");
            this.button2 = this.goodRoot.find(".photo-buttons-wrapper__second-button");
            this.srcOf_firstPhoto = this.goodRoot.find("img").attr('src');
            this.nextsrc = `images/${whatCatalouge}/addition/${whatPictureNumber}.jpg`;
            this.image = this.goodRoot.find("img");
            this.forButtons();
        }
        
        forButtons (e) {
            $(this.button1).click(()=>{
                this.image.attr('src', this.srcOf_firstPhoto);
                this.button2.removeClass("checked");
                this.button1.addClass("checked");
            });
            $(this.button2).click(()=>{
                this.image.attr('src', this.nextsrc);
                this.button1.removeClass("checked");
                this.button2.addClass("checked");
            });
            
        }
        
    }

    

    
    const imageWrapper3 = $("img[src='images/dc/3.jpg']").parent();
    const imageWrapper4 = $("img[src='images/dc/4.jpg']").parent();
    const imageWrapper5 = $("img[src='images/dc/5.jpg']").parent();
    const appendButtons3 = new AppendButtons(imageWrapper3, "3", "dc");
    const appendButtons4 = new AppendButtons(imageWrapper4, "4", "dc");
    const appendButtons5 = new AppendButtons(imageWrapper5, "5", "dc");
    
    const imageWrapperMarvel1 = $("img[src='images/marvel/1.jpg']").parent();
    const imageWrapperMarvel4 = $("img[src='images/marvel/4.jpg']").parent();
    const imageWrapperMarvel6 = $("img[src='images/marvel/6.jpg']").parent();
    const imageWrapperMarvel9 = $("img[src='images/marvel/9.jpg']").parent();
    const imageWrapperMarvel12 = $("img[src='images/marvel/12.jpg']").parent();
    const imageWrapperMarvel25= $("img[src='images/marvel/25.jpg']").parent();
    const appendButtonsMarvel1 = new AppendButtons(imageWrapperMarvel1, "1", "marvel");
    const appendButtonsMarvel4 = new AppendButtons(imageWrapperMarvel4, "4", "marvel");
    const appendButtonsMarvel6 = new AppendButtons(imageWrapperMarvel6, "6", "marvel");
    const appendButtonsMarvel9 = new AppendButtons(imageWrapperMarvel9, "9", "marvel");
    const appendButtonsMarvel12 = new AppendButtons(imageWrapperMarvel12, "12", "marvel");
    const appendButtonsMarvel25 = new AppendButtons(imageWrapperMarvel25, "25", "marvel");
    
   
})();