

      
      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1603287068454').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1603287068454').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1603287068454');
      if ($bkLiquid && $bkLiquid.length > 0) {
          var $settings = $bkLiquid.find('.settings');
          try {
              var name = '';
              var imageUrl = '';
              settings = JSON.parse($settings.html());
              for (var i = 0; i < settings.length; i++) {
                  if (settings[i].name == 'name') {
                      name = settings[i].default_value
                  }
                  if (settings[i].name == 'image') {
                      imageUrl = settings[i].default_value
                  }
              }
              if (imageUrl != '') {
                  flag = false;
                  jQuery('#m-1603287068454').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1603287068454').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1603287068454').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
          jQuery(function() {
  var $module = jQuery('#m-1603277785627').children('.module');
  $module.gfV3Product();
}); 
      
      
    
          jQuery(function() {
  var $module = jQuery('#m-1603277787493').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1603277789061').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
        var $module = jQuery('#m-1603277788177').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
    
    
    
      
      
      
      
      
      
      
          jQuery(function() {
  var $module = jQuery('#m-1603287068393').children('.module');
  var activeTab = parseInt($module.attr('data-activeTab')) - 1;
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  $module.gfV3ResTabs({
      'activeTab': activeTab,
      'mode': mode,
      tabSelected: function(index) {
        var tabInactiveBgColor = $module.attr('data-inactiveTabBgColor');
        var tabInactiveColor = $module.attr('data-inactiveTabColor');
        var tabBgColor = $module.attr('data-tabBgColor');
        var tabColor = $module.attr('data-tabColor');
        var borderColor = $module.attr('data-borderColor');
        var borderSize = $module.attr('data-borderSize');

        var $gfTabs = $module.find('>ul>li.gf_tab');
        var $gfTabActive = $module.find('>ul>li.gf_tab-active');
        var $gfTabPanels = $module.find('>.gf_tab-panel');

        if($module.hasClass('style1')) {
          $gfTabs
            .css('margin-left', '-' + borderSize)
            .css('border', borderSize + ' solid ' + borderColor)
            .css('border-bottom', borderSize + ' solid ' + borderColor);

          $module.find('>ul>li.gf_tab:first').css('margin-left', '0px');

        } else if($module.hasClass('style3')) {
          $gfTabs.css('border-bottom', borderSize + ' solid ' + tabBgColor);
        }

        if(!$module.hasClass('style3')) {
          $gfTabs.css('background-color', tabInactiveBgColor);
          $gfTabActive.css('background-color', tabBgColor);
        }

        $gfTabs.css('color', tabInactiveColor);
        $gfTabActive.css('color', tabColor);

        if($module.hasClass('style1')) {
          $gfTabActive.children('.gf_tab-bottom')
          .css('backgroundColor', tabBgColor)
          .css('height', borderSize)
          .css('bottom', '-' + borderSize);
        } else if($module.hasClass('style3')) {
          $gfTabActive.children('.gf_tab-bottom')
          .css('backgroundColor', borderColor)
          .css('height', borderSize)
          .css('bottom', '-' + borderSize);
        }
        $gfTabPanels
        .css('top', '-' + borderSize)
        .css('background-color', tabBgColor)
        .css('border', '1px solid ' + borderColor);

        if($module.hasClass('style1')) {
          $gfTabPanels.css('border', borderSize + ' solid ' + borderColor);
        } else {
          $gfTabPanels.css('border', 'none');
        }
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
            if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
                jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
            }	
        });
      }
  });
  if(mode == 'dev') {
    var moduleId = "1603287068393";
    var moduleIdSlug = moduleId.toString().replace(/-/g, '');
    if (moduleIdSlug == "1603287068393") {
      window.getTab1603287068393 = function() {
        return $module.data('gfv3restabs');
      }
    }
  }
});
      
      
      
      
      
      
      
      
    
        jQuery(function() {
    var $module = jQuery('#m-1603287068459').children('.module');

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
});
    
    
        jQuery(function() {
  var $module = jQuery('#m-1603287068459-child1').children('.module');
  $module.gfV3Product();
}); 
    
        jQuery(function() {
    var $module = jQuery('#m-1603287068459-child1-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
    
        jQuery(function() {
  var $module = jQuery('#m-1603287068459-child1-1').children('.module');
});
    
        jQuery(function() {
        var $module = jQuery('#m-1603287068459-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
        jQuery(function() {
  var $module = jQuery('#m-1603287068459-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
        jQuery(function() {
  var $module = jQuery('#m-1603287068459-child2').children('.module');
  $module.gfV3Product();
}); 
    
        jQuery(function() {
    var $module = jQuery('#m-1603287068459-child2-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
    
        jQuery(function() {
  var $module = jQuery('#m-1603287068459-child2-1').children('.module');
});
    
        jQuery(function() {
        var $module = jQuery('#m-1603287068459-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
        jQuery(function() {
  var $module = jQuery('#m-1603287068459-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
        jQuery(function() {
  var $module = jQuery('#m-1603287068459-child3').children('.module');
  $module.gfV3Product();
}); 
    
        jQuery(function() {
    var $module = jQuery('#m-1603287068459-child3-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
    
        jQuery(function() {
  var $module = jQuery('#m-1603287068459-child3-1').children('.module');
});
    
        jQuery(function() {
        var $module = jQuery('#m-1603287068459-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
        jQuery(function() {
  var $module = jQuery('#m-1603287068459-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    