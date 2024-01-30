

    
    
    
  
    
  
    
  
    
    
    
  
    
  
    
    
  
    
  
    
  
    
    
  
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    
    
    
  
    
    
    
    
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1688309910809').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1688309987063').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
    
  
    
    
    
    
  
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
  
    
    
  
    
    
    
    
  
    
    
    
    
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1688027401515').children('.module');
  $module.gfV1Popup();

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(mode == 'dev') {
    var moduleId = "1688027401515";
    var moduleIdSlug = moduleId.toString().replace(/-/g, '');
    if (moduleIdSlug == "1688027401515") {
      window.getPopup1688027401515 = function() {
        return $module.data('gfv1popup');
      }
    }
  }
})( window.GemQuery || jQuery );
  
    
  