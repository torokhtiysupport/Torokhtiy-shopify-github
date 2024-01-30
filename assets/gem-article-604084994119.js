

    
    
    
    
    
    
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1655318077228').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1655393095778').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1655811005559').children('.module');
 
 
 
})( window.GemQuery || jQuery );
    
    
    
    
    
    