const PHOTO_LOADING = function() {
    function photoLoading(whatCatalogue, whatAppend, whatArray) {
        let count = 0;
        $.each(whatArray, function(index, props) {
            count += 1;
            let infoName = props["name"];
            let infoInfo = props["info"];
            let ImagesrcForDC = `images/${whatCatalogue}/${count}.jpg`;
            let Photo = `
                    <div class="first-${whatCatalogue} padding-layout col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card-wrapper">
                        <div class="card-wrapper__photo-wrapper">
                            <img class="card-wrapper__photo" src="${ImagesrcForDC}" alt="">
                        </div>
                        <div class="card-wrapper__title-wrapper">
                            <h4 class="card-wrapper__title">${infoName}</h4>
                        </div>
                        <div class="card-wrapper__text-wrapper">
                            <p class="card-wrapper__text">${infoInfo}</p>
                        </div>
                        <div class="card-wrapper__lighter-block">
                            <button class="card-wrapper__buy-button">
                                Замовити!
                            </button>
                        </div>
                    </div>
                    </div>`
            $(whatAppend).append(Photo);
        });
    }
    return {photoLoading}
}();