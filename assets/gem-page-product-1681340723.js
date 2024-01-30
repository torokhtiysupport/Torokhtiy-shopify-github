

    
  
    (function( jQuery ){
  var $module = jQuery('#m-1681728335369').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1681728335369-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1681728335369-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1681728335369-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    
  (function( jQuery ){
 $('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.slider-nav'
 });
 $('.slider-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   arrows: false,
   dots: true,
   focusOnSelect: true
 });

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slider-nav').slick('slickGoTo', slideno - 1);
 });
})( window.GemQuery || jQuery );
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
    
    
  
    
  
    
  
    
    
  
    
  
    
  
    
  
    
  
    
  
    
    
  
    
    
  
    
  
    
  
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    
  $(document).on("inview", ".rate_bar_wrap", function(event, visible) {
      if (visible) {
        $(".rate-bar").each(function() {
          $(this)
            .find(".rate-bar-bar")
            .animate({
              width: $(this).attr("data-percent")
            }, 1500);
        });
         
      }
    });
    $(".show-more").click(function () {

        if($(".text").hasClass("show-more-height")) {

            $(this).text("Show Less");

        } else {

            $(this).text("Show More");

        }



        $(".text").toggleClass("show-more-height");

    });
$(document).on("inview", ".rate_bar_wrap", function(event, visible) {
      if (visible) {
        $(".rate-bar").each(function() {
          $(this)
            .find(".rate-bar-bar")
            .animate({
              width: $(this).attr("data-percent")
            }, 1500);
        });
         
      }
    });
    $(".show-more").click(function () {

        if($(".text").hasClass("show-more-height")) {

            $(this).text("Show Less");

        } else {

            $(this).text("Show More");

        }



        $(".text").toggleClass("show-more-height");

    });
    $(document).on("inview", ".rate_bar_wrap", function(event, visible) {
      if (visible) {
        $(".rate-bar").each(function() {
          $(this)
            .find(".rate-bar-bar")
            .animate({
              width: $(this).attr("data-percent")
            }, 1500);
        });
         
      }
    });
    $(".show-more").click(function () {

        if($(".text").hasClass("show-more-height")) {

            $(this).text("Show Less");

        } else {

            $(this).text("Show More");

        }



        $(".text").toggleClass("show-more-height");

    });
    
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
    
  
    
    
  
    
  
    
  
    
    
    
  
    
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1681733113847').children('.module');

})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1681733113847-child1').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1681733113847-child1-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1681733113847-child2').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1681733113847-child2-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1681733113847-child3').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1681733113847-child3-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1681733113847-child4').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1681733113847-child4-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    
    
  
    