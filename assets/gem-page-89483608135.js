

    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1681728545446').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1639371579414').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(mode == 'production') { 
    $module.children('form').on('submit', function() {
      try {
        localStorage.setItem('gemId', '#m-1639371579414');
      } catch(err) {}
    });
    
    var gemId = '';
    try {
      var gemId = localStorage.getItem('gemId');
    } catch(err) {}

    if(gemId != '') {
      var moduleId = '#' + $module.parent().attr('id');
      if(gemId == moduleId) {
        $module.find(".note").show();
        
        var $note = $module.find('.note.form-success, .note.form-error');
        if ($note.length > 0) {
          $popup = $module.closest('.module-wrap[data-label="Popup"]');
          if ($popup.children('.module').data('gfv1popup')) {
            $popup.children('.module').data('gfv1popup').show();
          }
        }
          
        var cbLink = $module.find('input[name="gemcallback"]').val() != undefined ? jQuery.trim($module.find('input[name="gemcallback"]').val()) : '';

        if(cbLink && cbLink != '') {
          try {
            localStorage.setItem('gemId', 'redirected');
          } catch(err) {}

          var target = $module.attr("data-target") || '';
          if(target!=="_blank"){
            window.location.href = cbLink;
          }else {
            window.open(cbLink, '_blank')
          }
        }
      }
    } else {
      var cbLink = $module.find('input[name="gemcallback"]').val() != undefined ? jQuery.trim($module.find('input[name="gemcallback"]').val()) : '';
      
      var $note = $module.find('.note.form-success, .note.form-error');
      if ($note.length > 0) {
        $popup = $module.closest('.module-wrap[data-label="Popup"]');
        if ($popup.children('.module').data('gfv1popup')) {
          $popup.children('.module').data('gfv1popup').show();
        }
      }

      if(cbLink && cbLink != '') {
        var target = $module.attr("data-target") || '';
        if(target!=="_blank"){
          window.location.href = cbLink;
        }else {
          window.open(cbLink, '_blank')
        }
      }
    }
  }
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1657870515604').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
<script type="application/ld+json">
 { "@context": "https://schema.org",
 "@type": "Organization",
 "name": "Torokhtiy Weightlifting",
 "legalName" : "TORWOD LLC",
 "url": "https://torokhtiy.com/",
 "logo": "https://cdn.shopify.com/s/files/1/1806/0489/files/2022-03-21_14.28.07_450x@2x.png?v=1647869199",
 "image": "https://ucarecdn.com/8bf6401b-c3cd-4eb1-a387-067e60251e1a/-/format/auto/-/preview/1440x1440/-/quality/lighter/_.jpg",
 "description": "Torokhtiy Weightlifting creates olympic weightlifting training programs as well as strength and conditioning and nutrition online programs for athletes of all levels. Founded by professional Olympic weightlifter Oleksiy Torokhtiy.",
 "slogan": "Train alongside Olympian",
 "foundingDate": "2015",
 "founder": {
 "@type": "Person",
 "name": "Oleksiy Torokhtiy",
 "url": "https://torokhtiy.com/pages/oleksiy-torokhtiy",
 "sameAs": "https://en.wikipedia.org/wiki/Oleksiy_Torokhtiy"
 },
 "address": {
 "@type": "PostalAddress",
 "streetAddress": "30 N Gould ST STE 5117",
 "addressLocality": "Sheridan",
 "addressRegion": "WY",
 "postalCode": "82801",
 "addressCountry": "USA"
 },
 "contactPoint": {
 "@type": "ContactPoint",
 "contactType": "customer support",
 "telephone": "",
 "email": "direct@torokhtiy.com"
 },
 "sameAs": [ 
 "https://www.facebook.com/Torokhtiyo",
 "https://twitter.com/torohtiyo?lang=en",
 "https://www.instagram.com/torokhtiy/",
 "https://www.youtube.com/user/WeightliftingUkraine",
 "https://podcasts.apple.com/au/podcast/torokhtiy-weightlifting/id1622594364",
"https://anchor.fm/torokhtiy"
 ]}
