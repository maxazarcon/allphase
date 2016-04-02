$(document).ready(function() {

    // alert($(window).width() + 'w | ' + $(window).height() + 'h');

    $('.treatment-inner').click(function() {
        $(this).children('img').fadeOut();
        $(this).children('.treatment-description').fadeIn();
        $(this).parent('.treatment-panel').children('.treatment-description').fadeOut();
        $(this).parent('.treatment-panel').children('img').fadeIn();
    });

    if ($(window).width() > 768) {
        $('#maincontent').css('padding-top', $('#top').height() + $('nav').height() + 'px');
    } else {
        $('#maincontent').css('padding-top', $('nav').height() + 'px');
    }

    // Mobile Text
    $('#mobile-text').append($('#top-left').html());
 
    if ($(window).width() <= 768) {
        $('#mobile-estimate').html('Free in-home estimates!');
        $('#mobile-estimate-phone').html('<a style="color: white;" href="tel:+19198780006">(919) 878-0006</a>');
    }

    // Promo buttons
    $('.promo-panel-button').click(function() {

        var siblingBoxes = $(this).parent('.promotions-inner').parent('.promotions-panel').siblings('.promotions-panel');

        $(this).siblings('.promo-panel-title, .promo-panel-subtitle').hide();
        $(this).fadeOut('fast');
        $(this).siblings('.promo-info').fadeIn();
        $('.promo-info ul').fadeIn('slow');
        siblingBoxes.children('.promo-info ul').fadeOut();
        siblingBoxes.children('.promotions-inner').children('.promo-info').hide();
        siblingBoxes.children('.promotions-inner').children('.promo-panel-button').fadeIn();
        siblingBoxes.children('.promotions-inner').children('.promo-panel-title, .promo-panel-subtitle').fadeIn('slow');
    });

    $('.promo-info').click(function(){
    	$(this).parents('.promotions-inner').children('.promo-info ul').fadeOut();
    	$(this).parents('.promotions-inner').children('.promo-info').hide();
    	$(this).parents('.promotions-inner').children('.promo-panel-button').fadeIn();
    	$(this).parents('.promotions-inner').children('.promo-panel-title, .promo-panel-subtitle').fadeIn('slow');
    });

    // Treatments Page

    $('.treatment-inner').hover(
        function() {
            $(this).addClass('focused');
        }, function() {
            $(this).removeClass('focused');
        }
    );

    $('.gallery-link').click(function(){
    	$('#nav-primary').fadeToggle();
    	$('#mobile-nav-container').removeClass('nav-open');
    	$('#nav-info').removeClass('nav-open');
    });

    // if($('.treatment-description').css('opacity') == 1) {
    //     $('.treatment-description').click(function(){
    //         $(this).parents('.treatment-inner').removeClass('focused');
    //     });
    // };

    $('.treatment-description').click(function(){
        if ($(this).css('opacity') == 1) {
            $(this).parents('.treatment-inner').removeClass('focused');
        } else if($(this).css('opacity') == 0) {
            $(this).parents('.treatment-inner').addClass('focused');
        }
        // $('.treatment-inner').removeClass('focused');
    });

    // Gallery Functions
    $('.grid-item').click(function() {
        // $('.grid').addClass('haslightbox');
        $('.lightbox').fadeIn();
        $('.lightbox').append($(this).html());
    });

    $('.close-lightbox').click(function() {
        $('.grid').removeClass('haslightbox');
        $('.lightbox').children('img').fadeOut('slow', function() {
            $('.lightbox').children('img').remove();
            $('.lightbox').children('.gallery-overlay').remove();
        });
        $('.lightbox').fadeOut('slow');
    });

    $('.enlarge').click(function() {
        $('.lightbox').fadeIn('slow');
        $('.lightbox').append($(this).parent('div').html());
        $('.lightbox').children('.enlarge').hide();
    });

    $('.lightbox').on('swipeleft', function() {
        $('.grid').removeClass('hasLightbox');
        $('.lightbox').children('img').fadeOut('slow', function() {
            $('.lightbox').children('img').remove();
            $('.lightbox').children('.gallery-overlay').remove();
        });
        $('.lightbox').fadeOut('slow');
    });

    $('.lightbox').on('swiperight', function() {
        $('.grid').removeClass('hasLightbox');
        $('.lightbox').children('img').fadeOut('slow', function() {
            $('.lightbox').children('img').remove();
            $('.lightbox').children('.gallery-overlay').remove();
        });
        $('.lightbox').fadeOut('slow');
    });


    if ($(window).width() == 768 && $(window).height() == 1024) {
        $('.toGallery').attr('href', '#' + 'footer');
    }

    //Set variables for slideshow
    if ($(window).width() > 768) {
        var currentIndex = 0,
            items = $('.slide'),
            itemAmt = items.length;

        function cycleItems() {
            var item = $('.slide').eq(currentIndex);
            items.fadeOut(1500);
            item.fadeIn(1500);
        }

        var autoSlide = setInterval(function() {
            currentIndex += 1;
            if (currentIndex > itemAmt - 1) {
                currentIndex = 0;
            }
            cycleItems();
        }, 5000);

        $('.next').click(function() {
            clearInterval(autoSlide);
            currentIndex += 1;
            if (currentIndex > itemAmt - 1) {
                currentIndex = 0;
            }
            cycleItems();
        });

        $('.prev').click(function() {
            clearInterval(autoSlide);
            currentIndex -= 1;
            if (currentIndex < 0) {
                currentIndex = itemAmt - 1;
            }
            cycleItems();
        });
    }

    // Set active tab in #services

    $('#services-nav li').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    // Set tabs for services

    var serviceTab = [
        $('#blinds-tab'),
        $('#shutters-tab'),
        $('#shades-tab'),
        $('#draperies-tab'),
        $('#exteriors-tab')
    ];

    var serviceContent = [
        $('#services-blinds'),
        $('#services-shutters'),
        $('#services-shades'),
        $('#services-draperies'),
        $('#services-exteriors')
    ];

    $('.tab').click(function() {
        for (var i = 0; i <= 4; i++) {
            if (serviceTab[i].hasClass('active')) {
                serviceContent[i].addClass('visible');
                serviceContent[i].siblings().removeClass('visible');
            }
        }
    });

    // Set height of .mobile-section to screen height

    if ($(window).width() <= 768) {
        $('.mobile-section').height(screen.height);
    }

    //Toggle mobile menu

    $('#mobile-nav-container').click(function() {
        $('#nav-primary').fadeToggle();
        $(this).toggleClass('nav-open');
        $('#nav-info').toggleClass('nav-open');
    });

    // Scrolling with mobile buttons

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });



    // Sticky Nav Functions
    var nav = $('nav');
    var isiPad = navigator.userAgent.match(/iPad/i) != null;
    if ($(window).width() > 768 && !($(window).width() == 1024 && $(window).height() == 672) && !($(window).width() == 1024 && $(window).height() == 768) && !($(window).width() == 1024 && $(window).height() == 653) && !(isiPad)) {
        $(window).scroll(function() {
            var y = $(this).scrollTop();

            if (y >= 50) {
                nav.addClass('stickynav');
            } else {
                nav.removeClass('stickynav');
            }
        });

        function parallax() {
            var scrolled = $(window).scrollTop();
            $('.parallax').css('top', -(scrolled * 0.3) + 'px');
        }
        $(window).scroll(function(e) {
            parallax();
        });
    };

    var currentYear = (new Date).getFullYear();

    $('#copy-year').text(currentYear);

    // $('form').submit(function() {
    //     $('[required]').each(function() {
    //         if (!$(this).val()) {
    //             $(this).css('border', 'inset 4px rgba(255,0,0,.5)');
    //         } else if ($(this).val()) {
    //             $(this).css('border', '0px solid transparent');
    //         }
    //     });
    //     alert($('input[required]:[value').length);
    //     if ($('[required]:[value=""]').length > 0) {
    //         return false;
    //     } else if ($('[required]:[value=""]').length == 0) {
    //         alert('Filled');
    //     }
    // });

    $('form').submit(function() {
        var missingRequired = false; // default to none missing
        $(this).find('[required]').each(function() {
            if (!$(this).val()) {
                $(this).css('border', 'inset 4px rgba(255,0,0,.5)');
                missingRequired = true; // a required field didn't have a value
            } else if ($(this).val()) {
                $(this).css('border', '0px solid transparent');
            }
        });
        if (missingRequired) {
            return false;
        } else {
        	alert("Thank you! We'll be in touch as soon as possible.")
            return true;
        }
    });
});


// Google Maps Functions

var map;

function initMap() {
    var allphasepos = {
        lat: 35.877996,
        lng: -78.593174
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: allphasepos,
        zoom: 15,
        scrollwheel: false
    });
    var marker = new google.maps.Marker({
        position: allphasepos,
        map: map,
        draggable: false,
        icon: {
            url: 'images/marker.png',
            size: new google.maps.Size(192, 132),
            anchor: new google.maps.Point(96, 86)
        },
        title: 'All-Phase Blinds & Shutters'
    });

    var contentString = '<div id="content">' +
        '<h5 id="infobox-header">All-Phase Blinds &amp; Shutters</h5>' +
        '<div id="infobox-content">' +
        '<p>2617 Rowland Rd. Suite 106<br>' +
        'Raleigh, NC 27615<br>' +
        '(919) 878-0006</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    if ($(window).width() <= 768) {
        map.setOptions({ draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true });
    }
}
