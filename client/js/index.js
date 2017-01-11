Template.index.rendered = function () {
  

    /*------Resize End Event -- Debounces resize of browser event-----------*/
    //http://stackoverflow.com/questions/5489946/jquery-how-to-wait-for-the-end-of-resize-event-and-only-then-perform-an-ac
    //https://learn.jquery.com/events/introduction-to-custom-events/

    var rtime;
    var timeout = false;
    var delta = 200;
    var $windowWidth = $(window).width();

    function resizeend() {
      if (new Date() - rtime < delta) {
          setTimeout(resizeend, delta);
      } else {
          timeout = false;
          $windowWidth = $(window).width();
          $(document).trigger('sccResizeEnd');
      }
    }

    $(window).on('resize', function () {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta);
        }
    });

    /*---------- Header image scroll n blur-----------*/

    if($('.innerbannerwrap .innerbanner').length){
      var scrollOptions = {
       test : $('.innerbannerwrap .innerbanner')
      };

      var scrolling = new Scroller();  
      scrolling.init(scrollOptions);
      console.log("Header image scroll n blur");
    }

    /*---------- navbar menu-----------*/

    $('.navbar-toggle').on('click', function () {
        $(this).toggleClass('is-active');
        $('.nav-menu').toggleClass('open-nav');
        var wH = $(window).height();

        if ($('.nav-menu').hasClass('open-nav')) {
            $('.wrapper').css('height', wH);
        } else {
            $('.wrapper').css('height', 'auto');
        }
    });

    /*-------------- sticky up menu-----------*/

    var lastScrollTop = 0,
        scrollDelta = 5,
        navbarHeight = $('.header-lower').outerHeight(),
        st;

    //Stick Up Menu

    $(window).on('scroll', function(){
      st = $(this).scrollTop();

      if(Math.abs(lastScrollTop - st) <= scrollDelta){
        return;
      }

      if(st < 40){
        $('.header-lower').removeClass('nav-down').removeClass('sticky-menu');
      }
      else if (st > lastScrollTop && st > navbarHeight){
        $('.header-lower').removeClass('sticky-menu').addClass('nav-down');
      } else {
        if(st + $(window).height() < $(document).height()) {
          $('.header-lower').addClass('sticky-menu').removeClass('nav-down');
        }
      }

      lastScrollTop = st;
    });

    /* ----------- menu dropdown ------------*/

    $('.menu-bar li').on('click', function () {
        $(this).find('.sub-menu').toggleClass('addSubMenu');
    });

    /* ------------- Hero Banner  -------------*/

    if($('#layerSlider').length){
        $('#layerSlider').layerSlider({
            autoStart : false,
            skin : 'noskin',
            skinsPath : '/skins/'
        });
    }

};