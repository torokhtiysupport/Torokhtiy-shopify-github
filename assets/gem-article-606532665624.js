

    
    
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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

    });$(document).on("inview", ".rate_bar_wrap", function(event, visible) {
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
  // var $module = jQuery('#m-1697562572317').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
    
    
    
  
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1681240893996').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
    
  
    
    
  
    
    
    
    
  
    
    
    
    
  
    
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1684795845953').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1669045335317').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    
    
  
    
    
    
    
    
    
    
    
    
  
    
    
  
    
    
    
    
    
  
    
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1698135949900').children('.module');
  $module.gfV1Popup();

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(mode == 'dev') {
    var moduleId = "1698135949900";
    var moduleIdSlug = moduleId.toString().replace(/-/g, '');
    if (moduleIdSlug == "1698135949900") {
      window.getPopup1698135949900 = function() {
        return $module.data('gfv1popup');
      }
    }
  }
})( window.GemQuery || jQuery );
  
    
  