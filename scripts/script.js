console.log("ji");
$(window).on('load', function() {
 // executes when complete page is fully loaded, including all frames, objects and images
 let $preloader = $('#p_prldr'),
 $svg_anm   = $preloader.find('.svg_anm');
  $svg_anm.fadeOut();
  $preloader.delay(700).fadeOut('slow');
 $('.cupboard-gallery').hide();
 $('.chest-gallery').hide();
});
