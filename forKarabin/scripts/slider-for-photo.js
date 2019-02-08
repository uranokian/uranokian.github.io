(function(){
    function AppendButtons(toWhatAppend, whatClassNumber) {
        const buttons = `
    <div class="${whatClassNumber} photo-buttons-wrapper">
        <div class="photo-buttons-wrapper__first-button checked">
            
        </div>
        <div class="photo-buttons-wrapper__second-button">

        </div>
    </div>
    `
    $(toWhatAppend).append(buttons);
    let rootElem = $(whatClassNumber);
    console.log(rootElem);
    
    }

    

    
    const imageWrapper1 = $("img[src='images/dc/2.jpg']").parent();
    const imageWrapper2 = $("img[src='images/dc/3.jpg']").parent();
    const appendButtons1 = new AppendButtons(imageWrapper1, "1");
    const appendButtons2 = new AppendButtons(imageWrapper2, "2");
    
   
})();