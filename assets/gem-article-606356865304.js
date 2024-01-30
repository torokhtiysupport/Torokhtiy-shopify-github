

    
    
    
  
    
  
    
  
    
    
    
  
    
    
  
    
    
    
    
    
    
    
    
    
  
    
    
  
    
    
  
    
  
    
  
    
    
    
    
  
    
  
    
  (function( jQuery ){
  // var $module = jQuery('#m-1684931120002').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    (function( jQuery ){
  // var $module = jQuery('#m-1695329736675').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1695108030361').children('.module');
  $module.gfV1Popup();

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(mode == 'dev') {
    var moduleId = "1695108030361";
    var moduleIdSlug = moduleId.toString().replace(/-/g, '');
    if (moduleIdSlug == "1695108030361") {
      window.getPopup1695108030361 = function() {
        return $module.data('gfv1popup');
      }
    }
  }
})( window.GemQuery || jQuery );
  
    
  