
$(function () {

    "use strict";
    
    $(function () {

        var equalWidth = $(".brand-ds .item").outerWidth();

        $(".brand-ds .item").css({
            "height": equalWidth
        });

    }); 

    var testim = new Swiper(".testimonials-ds .testim-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var workswip = new Swiper(".works-ds .work-swiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: ".works-ds .swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: "auto",
            },
        },
    });

    $('#monthly-input').on('change', function() {
        $(".monthly_price").show();
        $(".monthly_price").siblings(".yearly_price").hide();
    });
    $('#yearly-input').on('change', function() {
        $(".yearly_price").show();
        $(".yearly_price").siblings(".monthly_price").hide();
    });


    $('.accordion .accordion-item').on('click', function() {
        $(this).addClass("active").siblings().removeClass("active");
    });


});
// services Design : developed Picture Change
$('.services-mp .serv-title .tab-title').on('mouseenter', function () {
    var tab_id = $(this).attr('data-tab');
    $('.services-mp .serv-title .tab-title').removeClass('current');
    $(this).addClass('current');

    $('.services-mp .content .item').removeClass('current');
    $("#" + tab_id).addClass('current');

    if ($(this).hasClass('current')) {
        return false;
    }
});

$(function () {
    var width = $(window).width();
    if (width > 991) {

        "use strict";

        $(function () {
            let cards = gsap.utils.toArray(".cards .card-item");
    
            let stickDistance = 0;
    
            let firstCardST = ScrollTrigger.create({
                trigger: cards[0],
                start: "center center"
            });
    
            let lastCardST = ScrollTrigger.create({
                trigger: cards[cards.length - 1],
                start: "bottom bottom"
            });
    
            cards.forEach((card, index) => {
                var scale = 1 - (cards.length - index) * 0.025;
                let scaleDown = gsap.to(card, { scale: scale, 'transform-origin': '"50% ' + (lastCardST.start + stickDistance) + '"' });
    
                ScrollTrigger.create({
                    trigger: card,
                    start: "center center",
                    end: () => lastCardST.start + stickDistance,
                    pin: true,
                    pinSpacing: false,
                    ease: "none",
                    animation: scaleDown,
                    toggleActions: "restart none none reverse"
                });
            });
        });

    }
});
$(window).on("load", function () {

    $('.gallery').isotope({
        itemSelector: '.items'
    });

});
