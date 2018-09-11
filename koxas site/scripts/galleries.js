$( function() {

class SubGalerries {
    constructor(whatGallery) {
      this.gallery = $(whatGallery);
      this.images = this.gallery.find('.examples-section__image');
      this.nextSlide();
    }

    nextSlide() {
      $(this.images).css('cursor', 'pointer');
      this.gallery.on('click', 'img', (e) => {
        this.mainPhoto = $(e.target);
        this.nextPhoto = this.mainPhoto.next();
        $(this.mainPhoto).animate({opacity: 0}, 400);
        setTimeout(()=>{this.mainPhoto.css('display', 'none')}, 400);
        $(this.nextPhoto).delay(400).fadeIn().css('opacity', '1');
        if (this.mainPhoto.index() == this.images.length - 1) {
          this.newMainPhoto = this.gallery.find('.main-image');
          this.photo = $(e.target);
          $(this.photo).animate({opacity: 0}, 400);
          setTimeout(()=>{this.photo.css('display', 'none')}, 400);
          $(this.newMainPhoto).delay(400).fadeIn().css('opacity', '1');
        }
      });
      
    }
  }
  let gallery1 = new SubGalerries('.first-gallery');
  let gallery2 = new SubGalerries('.second-gallery');
  let gallery3 = new SubGalerries('.third-gallery');
  let gallery4 = new SubGalerries('.fourth-gallery');
  let gallery5 = new SubGalerries('.fifth-gallery');
});
