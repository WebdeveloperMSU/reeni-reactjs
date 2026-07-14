

(function (window, document, $, undefined) {

    'use strict';

    var tmpJs = { 
        i: function (e) {
            tmpJs.d();
            tmpJs.methods();
        },

        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
        },


        methods: function (e) {
            tmpJs.animationOnHover();
            tmpJs.smoothScroll();
            tmpJs.headerTopActivation();
            tmpJs.popupMobileMenu();
            tmpJs.topbarExpend();
            tmpJs.stickyHeader();
            tmpJs.shapeMove();
            tmpJs.jarallax();
            tmpJs.wowActive();
            tmpJs.videoMovement();
            tmpJs.preloaderWithBannerActivation();
        },
        animationOnHover: function () {
          let cards = document.querySelectorAll('.tmponhover');
          cards.forEach((tmpOnHover) => {
            tmpOnHover.onmousemove = function (e) {
              let x = e.pageX - tmpOnHover.offsetLeft;
              let y = e.pageY - tmpOnHover.offsetTop;
              tmpOnHover.style.setProperty('--x', x + 'px');
              tmpOnHover.style.setProperty('--y', y + 'px');
            };
          });
        },
        smoothScroll: function (e) {
          $(document).on('click', '.onepage a[href^="#"]', function (event) {
            event.preventDefault();
        
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 2000);
          });
        },

        headerTopActivation: function () {
            $('.topCampainActive').on('click', function () {
                $(this).parents('.cno-header-campaign').addClass('deactive')
            })
        },

        popupMobileMenu: function (e) {
            $('.hamberger-button').on('click', function (e) {
                $('.popup-mobile-menu').addClass('active');
            });

            $('.close-button').on('click', function (e) {
                $('.popup-mobile-menu').removeClass('active');
                $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').siblings('.submenu, .cno-megamenu').removeClass('active').slideUp('400');
                $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').removeClass('open')
            });

            $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu, .cno-megamenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open')
            })

            $('.popup-mobile-menu, .popup-mobile-menu .mainmenu.onepagenav li a').on('click', function (e) {
                e.target === this && $('.popup-mobile-menu').removeClass('active') && $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').siblings('.submenu, .cno-megamenu').removeClass('active').slideUp('400') && $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').removeClass('open');
            });

            // $('.popup-mobile-menu .mainmenu .has-dropdown > a') on('click', function(e){

            // });
        },


        topbarExpend: function () {
            var windowWidth = $(window).width(); {
                if (windowWidth < 1199) {
                    $('.top-bar-expended').on('click', function () {
                        $('.top-expended-activation').hasClass('active') ? ( $('.top-expended-activation').removeClass('active'), $('.top-expended-activation').find('.top-expended-wrapper').css({ height: '32px' }) ) : ($('.top-expended-activation').addClass('active'), $('.top-expended-activation').find('.top-expended-wrapper').css({ height: ($('.top-expended-inner')).outerHeight() + 'px' }))
                    })
                    $(window).on('hresize', function() {
                        $('.top-expended-activation').hasClass('active') && $('.top-expended-activation').find('.top-expended-inner').css({
                            height: ($('.top-expended-inner')).outerHeight() + 'px'
                        })
                    })
                }
            }
        },



        stickyHeader: function (e) {
            $(window).scroll(function () {
              if ($(this).scrollTop() > 150) {
                $(".header--sticky").addClass("sticky");
              } else {
                $(".header--sticky").removeClass("sticky");
              }
            });
        },

        shapeMove: function(){
            $('.shape-move').mousemove(function(e){
        
              var wx = $(window).width();
              var wy = $(window).height();
              
              var x = e.pageX - this.offsetLeft;
              var y = e.pageY - this.offsetTop;
              
              var newx = x - wx/2;
              var newy = y - wy/2;
              
              $('.shape-image .shape').each(function(){
                var speed = $(this).attr('data-speed');
                if($(this).attr('data-revert')) speed *= -1;
                TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
                
              });
              
            });
        },
        jarallax: function (e) {
            $(document).ready(function() {
              // Function to detect if the device is mobile
              function isMobileDevice() {
                  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
              }
          
              // Initialize jarallax only if it's not a mobile device
              if (!isMobileDevice()) {
                  $('.jarallax').jarallax();
              } else {
                  console.log('Jarallax skipped on mobile devices');
              }
          });
          
        },
        wowActive: function () {
            new WOW().init();
        },
  
        videoMovement:function(){
           const all_btns = gsap.utils.toArray(".movement");
           if (all_btns.length > 0) {
             var all_btn = gsap.utils.toArray(".movement");
           }
           else {
             var all_btn = gsap.utils.toArray("#btn_wrapper");
           }
           const all_btn_cirlce = gsap.utils.toArray(".moves");
           all_btn.forEach((btn, i) => {
             $(btn).mousemove(function (e) {
               callParallax(e);
             });
             function callParallax(e) {
               parallaxIt(e, all_btn_cirlce[i], 40);
             }
    
             function parallaxIt(e, target, movement) {
               var $this = $(btn);
               var relX = e.pageX - $this.offset().left;
               var relY = e.pageY - $this.offset().top;
    
               gsap.to(target, 0.5, {
                 x: ((relX - $this.width() / 2) / $this.width()) * movement,
                 y: ((relY - $this.height() / 2) / $this.height()) * movement,
                 ease: Power2.easeOut,
               });
             }
             $(btn).mouseleave(function (e) {
               gsap.to(all_btn_cirlce[i], 0.5, {
                 x: 0,
                 y: 0,
                 ease: Power2.easeOut,
               });
             });
           });
           /////////////////////////////////////////////////////
        },
        preloaderWithBannerActivation: function () {

          if ($('.tmp-title-split').length) {				
            let	 staggerAmount 		= 0.03,
               translateXValue	= 20,
               delayValue 		= 0.1,
               easeType 			= "power2.out",
               animatedTextElements = document.querySelectorAll('.tmp-title-split');
            
            animatedTextElements.forEach((element) => {
              let animationSplitText = new SplitText(element, { type: "chars, words" });
                gsap.from(animationSplitText.chars, {
                  duration: 1,
                  delay: delayValue,
                  x: translateXValue,
                  autoAlpha: 0,
                  stagger: staggerAmount,
                  ease: easeType,
                  scrollTrigger: { trigger: element, start: "top 85%"},
                });
            });		
          }
          
        },
    

        
    }

    tmpJs.i();




})(window, document, jQuery);



// Back To Top style here
function updateDimensions() {
  windowHeight = window.innerHeight;
  documentHeight = document.documentElement.scrollHeight - windowHeight;
}

// Initialize dimensions
updateDimensions();

// Add resize event listener to update dimensions
window.addEventListener('resize', updateDimensions);

document.addEventListener('DOMContentLoaded', function() {
  var box = document.querySelector(".scrollToTop");
  if (box) {
    var water = box.querySelector(".water");

    window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;
      var percent = Math.min(
        Math.floor((scrollPosition / documentHeight) * 100),
        100
      );
      water.style.transform = "translate(0," + (100 - percent) + "%)";

      if (scrollPosition >= 200) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });

    // Add click event listener to scroll to top
    box.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Preloader functionality
  function removePreloader() {
    document.body.classList.remove("preloader-active");
  }

  document.body.classList.add("preloader-active");
  window.addEventListener('load', function() {
    removePreloader();
  });
});























