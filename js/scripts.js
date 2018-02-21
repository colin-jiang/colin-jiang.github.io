/*!
    Title: Dev Portfolio Template
    Version: 1.2.1
    Last Change: 08/27/2017
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    if(document.location.href.match(/[^\/]+$/) && document.location.href.match(/[^\/]+$/)[0] == "index.html")
    {
    // Animate to section when nav is clicked
        $('header a').click(function(e) {
    
            // Treat as normal link if no-scroll class
            if ($(this).hasClass('no-scroll')) return;
    
            e.preventDefault();
            var heading = $(this).attr('href');
            var scrollDistance = $(heading).offset().top;
    
            $('html, body').animate({
                scrollTop: scrollDistance + 'px'
            }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);
    
            // Hide the menu once clicked if mobile
            if ($('header').hasClass('active')) {
                $('header, body').removeClass('active');
            }
        });
    }

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    var $window = $(window);
    var $elem1 = $(".vtimeline-content:eq(0)")
    var $elem2 = $(".vtimeline-content:eq(1)")
    var $elem3 = $(".vtimeline-content:eq(2)")
    var $elem4 = $(".project:eq(0)")
    var $elem5 = $(".project:eq(1)")
    var $elem6 = $(".project:eq(2)")

    function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
    $(document).on("scroll", function () {
        if ($elem1.length!=0 && (isScrolledIntoView($elem1, $window))) {
            $elem1.addClass("animate")
        }
        if ($elem2.length!=0 && (isScrolledIntoView($elem2, $window))) {
            $elem2.addClass("animate")
        }
        if ($elem3.length!=0 && (isScrolledIntoView($elem3, $window))) {
            $elem3.addClass("animate")
        }
        if ($elem4.length!=0 && (isScrolledIntoView($elem4, $window))) {
            $elem4.addClass("animate")
        }
        if ($elem5.length!=0 && (isScrolledIntoView($elem5, $window))) {
            $elem5.addClass("animate")
        }
        if ($elem6.length!=0 && (isScrolledIntoView($elem6, $window))) {
            $elem6.addClass("animate")
        }
    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

})(jQuery);
