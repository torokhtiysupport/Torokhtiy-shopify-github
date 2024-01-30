
jQuery(function() {
  var $hero = jQuery('#m-1590554613569');
  var $module = jQuery('#m-1590554613569').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $heroLink = $hero.children('.hero-link');
  if(mode == 'dev' && $heroLink.length > 0) {
   $hero.children('.hero-link').hide();
  }
  if (mode == 'production' && $heroLink.length > 0) {
    $module.off('click.openLink').on('click.openLink', function(e) {
      var $target = jQuery(e.target);
      if ($target.length > 0){
        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
        if (linkTarget == "") {
          var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
          var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
          if (link != "") {
            if (newTab == "") {
              window.location.href = link;
            } else {
              window.open(link, newTab);
            }
          }
        }
      };
    })
  }

  var height = jQuery.trim($module.attr('data-height'));
  if(height == undefined || height == '') {
    $hero.attr('style', 'height: auto!important');
    jQuery(window).resize(function(){
      $hero.attr('style', 'height: auto!important');
    });
  } else {
    $hero.removeAttr('style');
  }

  var effect = $module.attr('data-effect');
  var transition = $module.attr('data-transition');

  if(effect == 'effect-zoom') {   
    $module.parent().addClass(effect);  

    setTimeout(function() {
      var backgroundImage = $module.parent().css('background-image');
      var backgroundSize = $module.parent().css('background-size');
      var backgroundPosition = $module.parent().css('background-position');
      $module.siblings('.gf_hero-bg-wrap').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      })
      $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      });
    }, 300);
  }

  if($module.attr('data-fixedMode') == '1'){
    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

    jQuery(window).resize(function(){
      var backgroundImage =  $module.parent().css('background-image');
      $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
    });
  } else {
    $module.parent().removeAttr('style');
  }
});jQuery(function() {
    var $module = jQuery('#m-1591136367426').children('.module');
    $module.gfV1Countdown({
        id: "1591136367426",
        idSlug: "1591136367426"
    });
});jQuery(function() {
    var $module = jQuery('#m-1591179254809').children('.module');
    $module.find('.video-popup').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: function(url) {
                        var id;
                        if (url.indexOf('youtu.be/') != -1) {
                            id = url.split('youtu.be/');
                        } else {
                            id = url.split(/watch\?v=/);
                        }
                        if (id && id[1] != undefined) {
                            id = id[1].split(/&/)[0];
                        }
                        return id;
                    },
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                },
                youtu: {
                    index: 'youtu.be/',
                    id: function(url) {
                        var id;
                        if (url.indexOf('youtu.be/') != -1) {
                            id = url.split('youtu.be/');
                        } else {
                            id = url.split(/watch\?v=/);
                        }
                        if (id && id[1] != undefined) {
                            id = id[1].split(/&/)[0];
                        }
                        return id;
                    },
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: function(url) {
                        var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                        if ( !m || !m[5] ) return null;
                        return m[5];
                    },
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                }
            }
        }
    });
});jQuery(function() {
  var $hero = jQuery('#m-1590556952421');
  var $module = jQuery('#m-1590556952421').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $heroLink = $hero.children('.hero-link');
  if(mode == 'dev' && $heroLink.length > 0) {
   $hero.children('.hero-link').hide();
  }
  if (mode == 'production' && $heroLink.length > 0) {
    $module.off('click.openLink').on('click.openLink', function(e) {
      var $target = jQuery(e.target);
      if ($target.length > 0){
        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
        if (linkTarget == "") {
          var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
          var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
          if (link != "") {
            if (newTab == "") {
              window.location.href = link;
            } else {
              window.open(link, newTab);
            }
          }
        }
      };
    })
  }

  var height = jQuery.trim($module.attr('data-height'));
  if(height == undefined || height == '') {
    $hero.attr('style', 'height: auto!important');
    jQuery(window).resize(function(){
      $hero.attr('style', 'height: auto!important');
    });
  } else {
    $hero.removeAttr('style');
  }

  var effect = $module.attr('data-effect');
  var transition = $module.attr('data-transition');

  if(effect == 'effect-zoom') {   
    $module.parent().addClass(effect);  

    setTimeout(function() {
      var backgroundImage = $module.parent().css('background-image');
      var backgroundSize = $module.parent().css('background-size');
      var backgroundPosition = $module.parent().css('background-position');
      $module.siblings('.gf_hero-bg-wrap').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      })
      $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      });
    }, 300);
  }

  if($module.attr('data-fixedMode') == '1'){
    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

    jQuery(window).resize(function(){
      var backgroundImage =  $module.parent().css('background-image');
      $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
    });
  } else {
    $module.parent().removeAttr('style');
  }
});jQuery(function() {
  var $module = jQuery('#m-1590554613514').children('.module');
  $module.gfV3Product();
});jQuery(function() {
  var $module = jQuery('#m-1590554613514-1').children('.module');
});jQuery(function() {
  var $module = jQuery('#m-1591133847321').children('.module');
});jQuery(function() {
  var $module = jQuery('#m-1590554613553').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
});jQuery(function() {
  var $module = jQuery('#m-1590554613514-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
    var $module = jQuery('#m-1590554613514-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
    var $module = jQuery('#m-1591174087708').children('.module');

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

    if(sameHeightTitle == '1') {
        var minHeight = 0;

        $module.find('.product-single__title').each(function() {
        });
    } else {
    }

    jQuery($module).css('padding', spacing);
});jQuery(function() {
  var $module = jQuery('#m-1591174087708-child1').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1591174087708-child1-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1591174087708-child1-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1591174087708-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1591174087708-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1591174087708-child2').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1591174087708-child2-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1591174087708-child2-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1591174087708-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1591174087708-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1591174087708-child3').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1591174087708-child3-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1591174087708-child3-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1591174087708-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1591174087708-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1591174087708-child4').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1591174087708-child4-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1591174087708-child4-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1591174087708-child4-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1591174087708-child4-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1590684370135').children('.module');
});jQuery(function() {
  var $module = jQuery('#m-1590684238136').children('.module');
});jQuery(function() {
  var $module = jQuery('#m-1590684801912').children('.module');
});jQuery(function() {
  var $module = jQuery('#m-1590684802067').children('.module');
});jQuery(function() {
  try {
    var $module = jQuery('#m-1590554613565').children('.module');   
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
          loop = $module.data('loop');
    } else {
      var autoplay = 0, 
          loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
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
});jQuery(function() {
  var $module = jQuery('#m-1591174197124').children('.module');
});jQuery(function() {var $module = jQuery('#m-1591174197124-child1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1591174197124-child1-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1591174197124-child1-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1591174197124-child1-2').children('.module');}); jQuery(function() {var $module = jQuery('#m-1591174197124-child2').children('.module');}); jQuery(function() {var $module = jQuery('#m-1591174197124-child2-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1591174197124-child2-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1591174197124-child2-2').children('.module');}); jQuery(function() {var $module = jQuery('#m-1591174197124-child3').children('.module');}); jQuery(function() {var $module = jQuery('#m-1591174197124-child3-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1591174197124-child3-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1591174197124-child3-2').children('.module');}); jQuery(function() {
    var $module = jQuery('#m-1591136295990').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});jQuery(function() {
  var $module = jQuery('#m-1591176636027').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
});