

    (function( jQuery ){
  // var $module = jQuery('#m-1668598957181').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
        jQuery(function() {
  var $module = jQuery('#m-1667407216622').children('.module');
  $module.gfV3Product();
}); 
    
    
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1692623343594').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
(function(jQuery) {
    var $module = jQuery('#m-1667407216568').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
      
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    
  
    
  
    
  
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1679482399970').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
    var autoplay = $module.data('autoplay'), 
        autoRefresh = true, 
        loop = $module.data('loop');
    } else {
    var autoplay = 0, 
        autoRefresh = false, 
        loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoRefresh: autoRefresh,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
            items:colxs,
            nav: navxs,
            dots:dotsxs,
            margin: marginxs
          },
          768:{
            items:colsm,
            nav: navsm,
            dots:dotssm,
            margin: marginsm
          },
          992:{
            items:colmd,
            nav: navmd,
            dots:dotsmd,
            margin: marginmd
          },
          1200:{
            items:collg,
            nav: navlg,
            dots:dotslg,
            margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
      setTimeout(function() {	
        initCarousel();	
      }, 300)	
    } else {	
      initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
    
    
    
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1692629491505').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1692629491505-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1685547705791').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    (function(jQuery) {
    var $module = jQuery('#m-1685547705782').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1685547740884').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    (function(jQuery) {
    var $module = jQuery('#m-1685547740830').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1685547756452').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    (function(jQuery) {
    var $module = jQuery('#m-1685547756382').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1667835679167').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1667835679146').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1667420011134').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1667420011099').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1667420011102').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1667420011181').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1685547844977').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    (function(jQuery) {
    var $module = jQuery('#m-1685547845031').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1685547846916').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    (function(jQuery) {
    var $module = jQuery('#m-1685547846867').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1685547849294').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    (function(jQuery) {
    var $module = jQuery('#m-1685547849367').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1667835933985').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1667835933985-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1667420011088').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1667420011088-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1667420011163').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1667420011163-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
  
    
    
  
    
    
    
    
    jQuery(function() {
  try {
    var $module = jQuery('#m-1667420118948').children('.module');
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
});
    
    
    
    
    
    
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1692629879974').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1692629879974-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1667480385656').children('.module');

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
  var $module = jQuery('#m-1667480385656-child1').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
  var $module = jQuery('#m-1667480385656-child1-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  })
})(window.GemQuery || jQuery);
    
    
(function(jQuery) {
    var $module = jQuery('#m-1667480385656-child1-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1667480385656-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1667480385656-child2').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
  var $module = jQuery('#m-1667480385656-child2-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  })
})(window.GemQuery || jQuery);
    
    
(function(jQuery) {
    var $module = jQuery('#m-1667480385656-child2-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1667480385656-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1667480385656-child3').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
  var $module = jQuery('#m-1667480385656-child3-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  })
})(window.GemQuery || jQuery);
    
    
(function(jQuery) {
    var $module = jQuery('#m-1667480385656-child3-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1667480385656-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1667480385656-child4').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
  var $module = jQuery('#m-1667480385656-child4-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  })
})(window.GemQuery || jQuery);
    
    
(function(jQuery) {
    var $module = jQuery('#m-1667480385656-child4-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1667480385656-child4-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    