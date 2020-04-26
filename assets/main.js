$(document).ready(function () {

	$('.burger').click(function () {
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
	});

	$(window).scroll(function () {
		//header position
		$(window).scrollTop() > 0 ? $('.header').addClass('active') : $('.header').removeClass('active');
		//header background color
		$(window).scrollTop() > $('#home').outerHeight() ? $('.header').css('background', '#254460') : $('.header').css('background', 'transparent');

		//go top show
		if ( $(this).scrollTop() > 800){
		    $('#goTop').addClass('active');
		} else {
		    $('#goTop').removeClass('active');
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

    // $('.slides--video').slick({
    //     dots: false,
    //     speed: 300,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     prevArrow: '<button class="slick-prev slides__arrow slides__arrow--lp" aria-label="Previous" type="button"></button>',
    //     nextArrow: '<button class="slick-next slides__arrow slides__arrow--ln" aria-label="Next" type="button"></button>',
	// 	dotsClass: 'slick-dots slides__dots',
	// 	responsive: [
	// 		{
	// 			breakpoint: 992,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 				infinite: true,
	// 				dots: true
	// 			}
	// 		}
	// 	],
	// });

	var swiper = new Swiper('.swiper--container', {
		slidesPerView: 1,
		slidesPerColumn: 2,
		slidesPerGroup: 1,
		spaceBetween: 0,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.icon__arrow--dn',
			prevEl: '.icon__arrow--dp',
		},
		debugger: true,
		breakpoints: {
			992: {
			  slidesPerView: 4,
			  slidesPerGroup: 4,
			},
			768: {
			  slidesPerView: 3,
			  slidesPerGroup: 3,
			},
			576: {
			  slidesPerView: 1,
			  slidesPerGroup: 1,
			},
		},
		on: {
			init: function () {
				//set raito 16:9
				var width = $('.swiper--container .swiper-slide').width();
				var height = width / 16 * 9;
				$('.swiper--container .swiper-slide').height(height)
			},
			resize: function () {
				//set raito 16:9
				var width = $('.swiper--container .swiper-slide').width();
				var height = width / 16 * 9;
				$('.swiper--container .swiper-slide').height(height)
			}
		},
	});

	//yt video overlay
	$('.swiper--video .swiper-slide').click(function(e){
		var url = $(this).find('img').data('url');

		BigPicture({
			el: e.target,
			ytSrc: url,
		})
	});
});