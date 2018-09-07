$( function() {
    class Galerry {
    constructor(gallery) {
        this.gallery = $(gallery);
        this.settings();
    }
    settings() {
        this.gallery.tabs({
          show: { effect: "fadeIn", duration: 500 },
          hide: { effect: "fadeOut", duration: 500 },
          active: 0,
          classes: {
            "ui-tabs-active": "highlight",
          },

        });
    }
}

class SubGalerries {
    constructor(subGallery) {
        this.subGalleries = $(subGallery);
        this.hiddenImages = this.subGalleries.find('.hide-images');
        this.arrHideImages = this.hiddenImages.find('.gallerys__images-hide');
        this.startImage = $(this.subGalleries).find('.gallerys__images');
        this.arrForSrc = [];
        this.settings();
        this.nextButton = this.subGalleries.find('.next-button');
        this.previousButton = this.subGalleries.find('.previous-button');
        this.nextButSettings();
        this.previousButSettings();
    }


    settings() {
      $(this.arrHideImages).each((i, e) => {
        this.arrOfSrc = $(e).attr('src');
        this.arrForSrc.push(this.arrOfSrc);
      });
    }

    nextButSettings() {
      this.nextButton.click((e) => {
        this.startSrc = $(this.startImage).attr('src');
        this.startIndex = $.inArray(this.startSrc, this.arrForSrc);
        if (this.startIndex !== this.arrForSrc.length - 1) {
          this.startIndex++;
          this.startImage.attr('src', $(this.arrHideImages).eq(this.startIndex).attr('src'));
        } else {
          this.startImage.attr('src', $(this.arrHideImages).eq(0).attr('src'));
        }
      });
    }

    previousButSettings() {
        this.previousButton.click((e) => {
        this.startSrc = $(this.startImage).attr('src');
        this.startIndex = $.inArray(this.startSrc, this.arrForSrc);
        if (this.startIndex !== 0) {
          this.startIndex--;
          this.startImage.attr('src', $(this.arrHideImages).eq(this.startIndex).attr('src'));
        } else {
          this.startImage.attr('src', $(this.arrHideImages).eq(this.arrForSrc.length - 1).attr('src'));
        }
      });
    };
}

let gallery = new Galerry('#gallery');
let subGallery1 = new SubGalerries('.dogs-gallery');
let subGallery2 = new SubGalerries('.nature-gallery');
let subGallery3 = new SubGalerries('.flowers-gallery');

  });
