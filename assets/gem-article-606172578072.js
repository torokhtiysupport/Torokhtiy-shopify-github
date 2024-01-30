

    
    
    
  
    
  
    
  
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1686913883281').children('.module');
  // You can add custom Javascript code right here.
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
  // var $module = jQuery('#m-1680683863758').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  (function( jQuery ){
  // var $module = jQuery('#m-1670485569854').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
  
    
  
    
    
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1673621375145').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
    
    
    
    
  
    
    
    
  
    
    
    
  
    
    
    
  
    
    
    
  
    
    
    
    
    
    
    
    
    
  
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
  
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1694089389251').children('.module');
  $module.gfV1Popup();

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(mode == 'dev') {
    var moduleId = "1694089389251";
    var moduleIdSlug = moduleId.toString().replace(/-/g, '');
    if (moduleIdSlug == "1694089389251") {
      window.getPopup1694089389251 = function() {
        return $module.data('gfv1popup');
      }
    }
  }
})( window.GemQuery || jQuery );
  
    
  