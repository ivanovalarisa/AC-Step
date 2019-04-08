let intervalId = 0;

$(document).ready(function() {
    $('#order').click(function(e) {
        $('.checkout').show();
        $('#order').css('opacity','.5');
    });

    $('.checkout-top__turn').click(function(e) {
        $('.checkout').hide();
        $('#order').css('opacity','1');
    });

    $('a, button').click(function(e) {
        e.preventDefault();
    });


    $(function () {
        $('.item-box__show-choose_select, .favorites, .box-slider__favorites').click(function() {
            var $this = $(this);
            var s = $this.find('path');

            if (!s.hasClass('heart-icon_like')) {
                s.addClass('heart-icon_like');
            } else {
                s.removeClass('heart-icon_like');
            }
       });
    });
    $('.input-number input').on('mouseenter', function(e) {
        $(e.target).parent().addClass('hover');
    });

    $('.input-number .arrow').on('mousedown mouseup', function(e) {
        if (e.type === "mousedown" && !intervalId) {
            const inpt = $(e.target).parent().children()[1];
            intervalId = setInterval(function() { hold(inpt, $(e.target)); }, 100);
        }
        if(e.type === 'mouseup') {
            clearInterval(intervalId);
            intervalId = 0;
        }
    });

    $('.input-number').mouseleave(function(e) {
        $(e.currentTarget).removeClass('hover');
    });

    $('.box-slider__group').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: "<button type='button' class='slick-arrow slick-prev'><span class='icon-arrow_left' aria-hidden='true'></span></button>",
        nextArrow: "<button type='button' class='slick-arrow slick-next'><span class='icon-arrow_right' aria-hidden='true'></span></button>",
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    $(function(){
        function addBg(el, img) {
            el.css({
                'background-image': `url(${img.attr('data-large-src')})`,
                'background-repeat': 'no-repeat',
                'background-size': 'contain'
            });
            el.attr('data-src', img.attr('data-large-src'));
        }

        const result = $('#result');
        const imgs = $('.slid-box__item img');
        const firstImg = $(imgs.first()[0]);

        if(firstImg.length) {
            addBg(result, firstImg);
            firstImg.parent().addClass('selected');
        }
        imgs.click(function(){
            const $this = $(this);
            $('.slid-box__item').removeClass('selected');
            $this.parent().addClass('selected');
            addBg(result, $this);
        });

    });

    $(function(){
        $('#result').click(function() {
            const popupImg = $('.popup img');
            var src = $( this ).attr( "data-src" );
            popupImg.attr('src', src);
        })
    });

    $('.result').click(function() {
        $('.popup').addClass('active');
        $('.overlay').addClass('active');
    });
    $('.popup__close').click(function(ev) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        $('.popup, .overlay').removeClass('active');
        return false;
    });
    $('.overlay').click(function(){
        $('.popup, .overlay').removeClass('active');
    });
});

