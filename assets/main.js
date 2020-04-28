$(document).ready(function () {

	$('.burger').click(function () {
		$(this).toggleClass('active');
		$('.nav').toggleClass('active');
	});

	$('#goTop').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000);
    });

	$(window).scroll(function () {
		//header position
		$(window).scrollTop() > 0 ? $('.header').addClass('active') : $('.header').removeClass('active');
		//header background color
		$(window).scrollTop() > $('#home').outerHeight() ? $('.header').css('background', '#254460') : $('.header').css('background', 'transparent');

		//go top show
        if ( $(this).scrollTop() > 800){
            $('#goTop, .gotop').addClass('active');
        } else {
            $('#goTop, .gotop').removeClass('active');
        }

		var $target = $('#logotype .scroll');
		var index = 0;
		var length = $target.length;

		for (index; index < length; index++) {
			var pos = window.pageYOffset * $target[index].dataset.rate;

			if ($target[index].dataset.direction === 'vertical') {
				$target[index].style.transform = 'translate3d(0px,' + pos + 'px, 0px)';

			} else {

				var posX = window.pageYOffset * $target[index].dataset.ratex;
				var posY = window.pageYOffset * $target[index].dataset.ratey;

				$target[index].style.transform = 'translate3d(' + posX + 'px, ' + posY + 'px, 0px)';
			}
		}
	});

	$('.slick--video').slick({
		// autoplay: true,
		dots: true,
		slidesPerRow: 3,
		rows: 2,
		prevArrow: '<button class="slick-prev slides__arrow icon icon--b icon__arrow icon__arrow--dp" aria-label="Previous" type="button"></button>',
		nextArrow: '<button class="slick-next slides__arrow icon icon--b icon__arrow icon__arrow--dn" aria-label="Next" type="button"></button>',
		dotsClass: 'slick-dots slides__dots',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesPerRow: 1,
					rows: 2,
					arrows: false
				}
			},
		]
	});

	$('.slick--card').slick({
		centerMode: true,
		centerPadding: '280px',
		// autoplay: true,
		dots: true,
		slidesToShow: 1,
		prevArrow: '<button class="slick-prev slides__arrow icon icon--b icon__arrow icon__arrow--dp" aria-label="Previous" type="button"></button>',
		nextArrow: '<button class="slick-next slides__arrow icon icon--b icon__arrow icon__arrow--dn" aria-label="Next" type="button"></button>',
		dotsClass: 'slick-dots slides__dots',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					centerPadding: '120px',
					slidesToShow: 1,
					arrows: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					centerPadding: '0px',
					slidesToShow: 1,
					arrows: false
				}
			},
		]
	});

	$('.slick--article').slick({
		// autoplay: true,
		dots: true,
		slidesPerRow: 3,
		rows: 2,
		adaptiveHeight: true,
		prevArrow: '<button class="slick-prev slides__arrow icon icon--b icon__arrow icon__arrow--lp" aria-label="Previous" type="button"></button>',
		nextArrow: '<button class="slick-next slides__arrow icon icon--b icon__arrow icon__arrow--ln" aria-label="Next" type="button"></button>',
		dotsClass: 'slick-dots slides__dots',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesPerRow: 2,
					rows: 2,
					arrows: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesPerRow: 1,
					rows: 2,
					arrows: false
				}
			},
		]
	});

	$('.slick--city').slick({
		// autoplay: true,
		dots: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		prevArrow: '<button class="slick-prev slides__arrow icon icon--b icon__arrow icon__arrow--dp" aria-label="Previous" type="button"></button>',
		nextArrow: '<button class="slick-next slides__arrow icon icon--b icon__arrow icon__arrow--dn" aria-label="Next" type="button"></button>',
		dotsClass: 'slick-dots slides__dots',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false
				}
			},
		]
	});



	//yt video overlay
	$('.slick--video .slick__item').click(function (e) {
		var url = $(this).find('img').data('url');

		BigPicture({
			el: e.target,
			ytSrc: url,
		})
	});
});