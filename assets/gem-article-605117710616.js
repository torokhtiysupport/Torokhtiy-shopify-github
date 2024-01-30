

    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1674052453487').children('.module');

  var sameHeightTitle = $module.data('sameheightitle'),
  spacing = $module.data('spacing');
  collg = $module.data('collg'),
  colmd = $module.data('colmd'),
  colsm = $module.data('colsm'),
  colxs = $module.data('colxs');

  var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
  var col = collg;

  jQuery(window).resize(function() {
    setTimeout(function() {
      for(var i = 0; i < $clearfixes.length; i++) {
        if($clearfixes.eq(i).css('display') == 'block') {
          if($clearfixes.eq(i).hasClass('visible-lg')) {
            col = collg;
            break;
          }
          if($clearfixes.eq(i).hasClass('visible-md')) {
            col = colmd;
            break;
          }
          if($clearfixes.eq(i).hasClass('visible-sm')) {
            col = colsm;
            break;
          }
          if($clearfixes.eq(i).hasClass('visible-xs')) {
            col = colxs;
            break;
          }
        }
      }
    }, 1000);
  });

  jQuery($module).css('padding', spacing);
})( window.GemQuery || jQuery );
    
    
  
(function( jQuery ){
  var $module = jQuery('#m-1674052453487-child1').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1674052453487-child1-53').children('.module');
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
  var $module = jQuery('#m-1674052453487-child1-54').children('.module');
  // You can add custom Javascript code right here.
  
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
      $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
      var selectedVariant = $product.data('gfv3product').getVariant();
     customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
     var currentPrice = variant.price;
      var comparePrice = variant.compare_at_price;
      if(currentPrice != null && comparePrice != null){
        if(currentPrice < comparePrice){
          diff = comparePrice - currentPrice;
        }else{
          diff = currentPrice - comparePrice;
        }
        if(diff <= 0){
          $product.find('.gf_product-badge-anchor').css({'display': 'none'});
        }else{
          $product.find('.gf_product-badge-anchor').css({'display': 'block'});
        }
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }
  }
})( window.GemQuery || jQuery );
(function(jQuery) {
    var $module = jQuery('#m-1674052453487-child1-55').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
  
(function( jQuery ){
  var $module = jQuery('#m-1674052453487-child1-58').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1674052453487-child2').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1674052453487-child2-53').children('.module');
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
  var $module = jQuery('#m-1674052453487-child2-54').children('.module');
  // You can add custom Javascript code right here.
  
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
      $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
      var selectedVariant = $product.data('gfv3product').getVariant();
     customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
     var currentPrice = variant.price;
      var comparePrice = variant.compare_at_price;
      if(currentPrice != null && comparePrice != null){
        if(currentPrice < comparePrice){
          diff = comparePrice - currentPrice;
        }else{
          diff = currentPrice - comparePrice;
        }
        if(diff <= 0){
          $product.find('.gf_product-badge-anchor').css({'display': 'none'});
        }else{
          $product.find('.gf_product-badge-anchor').css({'display': 'block'});
        }
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }
  }
})( window.GemQuery || jQuery );
(function(jQuery) {
    var $module = jQuery('#m-1674052453487-child2-55').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
  
(function( jQuery ){
  var $module = jQuery('#m-1674052453487-child2-58').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1674052453487-child3').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1674052453487-child3-53').children('.module');
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
  var $module = jQuery('#m-1674052453487-child3-54').children('.module');
  // You can add custom Javascript code right here.
  
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
      $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
      var selectedVariant = $product.data('gfv3product').getVariant();
     customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
     var currentPrice = variant.price;
      var comparePrice = variant.compare_at_price;
      if(currentPrice != null && comparePrice != null){
        if(currentPrice < comparePrice){
          diff = comparePrice - currentPrice;
        }else{
          diff = currentPrice - comparePrice;
        }
        if(diff <= 0){
          $product.find('.gf_product-badge-anchor').css({'display': 'none'});
        }else{
          $product.find('.gf_product-badge-anchor').css({'display': 'block'});
        }
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }
  }
})( window.GemQuery || jQuery );
(function(jQuery) {
    var $module = jQuery('#m-1674052453487-child3-55').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
  
(function( jQuery ){
  var $module = jQuery('#m-1674052453487-child3-58').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1674052453487-child4').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1674052453487-child4-53').children('.module');
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
  var $module = jQuery('#m-1674052453487-child4-54').children('.module');
  // You can add custom Javascript code right here.
  
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
      $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
      var selectedVariant = $product.data('gfv3product').getVariant();
     customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
     var currentPrice = variant.price;
      var comparePrice = variant.compare_at_price;
      if(currentPrice != null && comparePrice != null){
        if(currentPrice < comparePrice){
          diff = comparePrice - currentPrice;
        }else{
          diff = currentPrice - comparePrice;
        }
        if(diff <= 0){
          $product.find('.gf_product-badge-anchor').css({'display': 'none'});
        }else{
          $product.find('.gf_product-badge-anchor').css({'display': 'block'});
        }
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }
  }
})( window.GemQuery || jQuery );
(function(jQuery) {
    var $module = jQuery('#m-1674052453487-child4-55').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
  
(function( jQuery ){
  var $module = jQuery('#m-1674052453487-child4-58').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
  
    
  
    
  
    
  
    
    (function( jQuery ){
  var $module = jQuery('#m-1679670660666').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1679670660666-0').children('.module');
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
    var $module = jQuery('#m-1679670660666-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1679670660666-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1674051526532').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
  
    
  
    
    
    
  
    
    
  
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
  
    
    