Template.index.rendered = function () {
  
    $('head').append('<script type="text/javascript" src="js/vendor.js"></script>');
    
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

    /* ------------- Hero Banner  -------------*/

    if($('#layerSlider').length){
        $('#layerSlider').layerSlider({
            autoStart : false,
            skin : 'noskin',
            skinsPath : '/skins/'
        });
    }

    /* ---------- Team ------------*/

    if($('.slideHeroes').length){
        $('.slideHeroes').slick({
          infinite:true,
          slidesToShow: 3,
          slidesToScroll:1,
          dots:false,
          centerMode: true,
          centerPadding: '0px',
          prevArrow: '.prev-player',
          nextArrow: '.next-player',
          responsive: [
              {
                breakpoint: 2000,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll:1,
                  centerMode: false,
                  centerPadding: '0px'
                }
              },
              {
                breakpoint:480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll:1,
                  centerMode: false,
                  centerPadding: '0px',
                }
              }
          ]
        });
    }

    /* ------------- News  -------------*/

    var slickOptions = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.club_prev',
        nextArrow: '.club_next',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 3,
                slidesToScroll:1,
                infinite:true
                }
            },
            {
                breakpoint:600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                },  
            },
            {
                breakpoint:480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                },
            }
        ]
    };

    if (('#club_news').length){
        $('#club_news').slick(slickOptions);
    }
    
    $('#world_news_button').on('shown.bs.tab', function () {
        $('#club_news').slick('unslick');
        $('#world_news').slick(slickOptions);
    });

    $('#club_news_button').on('shown.bs.tab', function () {
        $('#world_news').slick('unslick');
        $('#club_news').slick(slickOptions);
    });


    /* ---------------- Image Gallery ---------*/

    var $containergallery = $('#galleryWrapper');
    
    if($containergallery.length){

        var $boxes = $('.item');
        var masonaryOptionsGallery = {
                                isAnimated: true,
                                isFitWidth: true
                            };
        $boxes.hide();

        $containergallery.imagesLoaded( function() {
            $boxes.fadeIn();
    
            $containergallery.masonry(masonaryOptionsGallery);    
        });
    
        $(window).on('sccResizeEnd', function () {
            $containergallery.masonry(masonaryOptionsGallery);
        });

        $containergallery.one( 'layoutComplete', function() {
            $('#galleryLoader').hide();
        });
    }

    /* ------------ Masonary (Gallery grid) --------------*/

    var $grid = $('.grid');
    if($grid.length){
        var masonaryOptions = {
          gutter: '.gutter',
          isFitWidth: true
        };

        $grid.imagesLoaded(function () {
            $grid.masonry(masonaryOptions);
        });

        $(window).on('sccResizeEnd', function () {
            $grid.masonry(masonaryOptions);
        });
    }

    /* ---------- Awards ------------*/

    if($('.awards-wrap').length){
        $('.awards-wrap').slick({
            infinite:true,
            slidesToShow: 4,
            slidesToScroll:1,
            dots:false,
            prevArrow: '.awards_prev',
            nextArrow: '.awards_next',
            responsive: [
                {
                    breakpoint: 2000,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll:1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll:1,
                    }
                },
                {
                    breakpoint:480,
                    settings: {
                      slidesToShow:1 ,
                      slidesToScroll:1,
                    }
                }
            ]
        });
    }

    /* ---------- Social Media ------------*/

    if($('.socialinfo').length){
        $('.socialinfo').slick({
            infinite:true,
            slidesToShow: 1,
            slidesToScroll:1,
            autoplay:true,
            arrows:false,
            dots:false,
        });
    }
    
    /*-------------- Contact form -----------*/

    $('.formcontact').submit(function(event){
      event.preventDefault();
      var formdata = $('.formcontact').serializeArray();
      $.ajax({
        url: 'php/contact.php',
        type: 'POST',
        async: true,
        data: formdata,     
      }).done(function(data) {
            $('.formcontact .form-message').removeClass('hidden').html(data);
            $('.formcontact .btn').attr('disabled', 'disabled');
            $('.formcontact' ).each(function () {
                this.reset(); //CLEARS THE FORM AFTER SUBMISSION
            });
        });
    });

    /*--------------- Google Maps -- Contact Page  ------------------*/

    var map;

    function initMap() {
      // Create a map object and specify the DOM element for display.
      var _location = new google.maps.LatLng(59.411641, 24.667706);
      map = new google.maps.Map(document.getElementById('map-section'), {
        scrollwheel: false,
        panControl: false,
        zoomControl: false,
        disableDefaultUI: true,
        styles: [],
        zoom: 16,
        center: _location
      });
    }

    if($('#map-section'). length){
      initMap();
    }

    /*----------------------------------------------------------------*/

};