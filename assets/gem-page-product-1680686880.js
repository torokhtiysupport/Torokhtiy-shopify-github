

        jQuery(function() {
  var $module = jQuery('#m-1592852819787').children('.module');
  $module.gfV3Product();
}); 
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1678955719375').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    
      
    
    
  
    
  
    
    
    
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1678877432957').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
  
    
    (function( jQuery ){
  var $module = jQuery('#m-1678876353234').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
  
    
    
    
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1678881239413').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1678881239413-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    
  
    
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1678881454944').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1678881454944-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    
    
  
    
    
  
    
    
  
    
(function( jQuery ){
  var $module = jQuery('#m-1678878088035').children('.module');
  $module.gfV1Gmap();
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1678895180728').children('.module');
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
    
    
    
    
    
    
    
    
    