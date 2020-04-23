$(document).ready(function () {

	$('.burger').click(function () {
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
	});

	$(window).scroll(function () {
		//header position
		$(window).scrollTop() > 0 ? $('.header').addClass('active') : $('.header').removeClass('active');
		//header background color
		$(window).scrollTop() > $('#kv').outerHeight() ? $('.header').css('background', '#254460') : $('.header').css('background', 'transparent');

		//go top show
		if ( $(this).scrollTop() > 800){
		    $('#goTop').addClass('active');
		} else {
		    $('#goTop').removeClass('active');
		}
    });

    $('.slides--video').slick({
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev slides__arrow slides__arrow--lp" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next slides__arrow slides__arrow--ln" aria-label="Next" type="button"></button>',
		dotsClass: 'slick-dots slides__dots',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}
		],
    });
});