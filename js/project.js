//WoW Animations

$(function() {

    new WOW().init();
});

//Smooth-Scrolling
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

//nav

     $('#nav').affix({
        offset: {
            top: 100
        }
     })

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });


//Team

    $('.teamSlider').slick({
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
              }
            }
          ]
        });


   

//Icons Animation

    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

//Portfolio

(function(){
    'use strict';

    if( $('.pop-up').length ){
        $('.pop-up').magnificPopup({
            type: 'image',
            gallery:{
                enabled:true
            },
            mainClass: 'mfp-with-fade',
            removalDelay: 300
        });
    };


    if ( $('.open-popup-link').length ){
        $('.open-popup-link').magnificPopup({
            type:'inline',
            midClick: true,
            mainClass: 'mfp-with-fade',
            removalDelay: 850
        });
    };


    function portfolioLayout(){
        var $container = $('.wrapper').isotope({
            itemSelector: '.item-container',
            layoutMode: 'masonry',
            transitionDuration: '0.85s',
            hiddenStyle: {
                  opacity: 0,
                  transform: 'scale(0.2)'
                },
                visibleStyle: {
                  opacity: 1,
                  transform: 'scale(1)'
                }
        });
        $('.category').on( 'click', 'li', function() {
            var filterValue = $( this ).attr('data-filter');
            $container.isotope({ filter: filterValue });
        });
        $('.category').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'li', function() {
                $buttonGroup.find('.active').removeClass('active');
                $( this ).addClass('active');
            });
        });

        $('.item-container').each(function() {
            var $this = $(this);
            if ( parseInt($this.css('left'), 10) >= ($container.width() / 2) ) {
                $this.addClass('right-positioned');
            } else {
                $this.addClass('left-positioned');
            };
        });

    };


    function portfolioProjectCarousel(){
        var projectCarousel = $('.project-image-carousel');
    };


    $(window).on('load', function(){

        if ( $('.container').length ) {
            portfolioLayout();
        };

        if ( $('.project-image-carousel').length ) {
            portfolioProjectCarousel();
        };

        
    });

})();