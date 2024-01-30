

    
    
    
    
    
    
  
    
  
    
  
    
    
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1688633188497').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    
    
    
  
    
    (function( jQuery ){
  var $module = jQuery('#m-1695041232371').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1695041232371-0').children('.module');
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
    var $module = jQuery('#m-1695041232371-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1695041232371-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1696283147172').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1696283219038').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1696283276624').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1696283348600').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1696283609409').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1696283531343').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1695041232449').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1695041232448').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
    
    
    
  
    
    
  
    
    
    
  
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    
  
    
  
    
  
    
    
  
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
  
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1684922622725').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1694870931209').children('.module');
  $module.gfV1Popup();

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(mode == 'dev') {
    var moduleId = "1694870931209";
    var moduleIdSlug = moduleId.toString().replace(/-/g, '');
    if (moduleIdSlug == "1694870931209") {
      window.getPopup1694870931209 = function() {
        return $module.data('gfv1popup');
      }
    }
  }
})( window.GemQuery || jQuery );
  
    
  