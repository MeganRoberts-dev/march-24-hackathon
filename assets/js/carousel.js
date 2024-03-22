(function () {
    "use strict";
  
    var carousels = function () {
      var owl = $(".owl-carousel1");
      owl.owlCarousel({
        loop: false,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          680: {
            items: 2,
            nav: false,
          },
          1000: {
            items: 3,
            nav: true,
          },
        },
      });
  
      owl.on('mouseover', '.owl-item img', function (e) {
        var item = $(this).closest('.owl-item');
        var index = item.index();
        var itemCount = owl.find('.owl-item:not(.cloned)').length;
  
        if (item.hasClass('cloned')) {
          if (index >= itemCount) {
            index -= itemCount;
          } else {
            index += itemCount;
          }
        }
  
        owl.trigger('to.owl.carousel', [index, 300]);
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();
  