$(document).ready(function () {

	headerStyle();
	waveShow();
	goTopShow();

	// build video data
	$.each(data, function (index, value) {
		$('.slick--video').append('<li class="slick__item"><div class="slick__media"><img data-src="https://i1.ytimg.com/vi/' + value.code + '/maxresdefault.jpg" data-url="' + value.code + '" class="lazyload"></div></li>');
    });

	$('.burger').click(function () {
		$(this).toggleClass('active');
		$('.nav').toggleClass('active');
	});

	$('#goTop').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	$('.slick--video').slick({
		autoplay: true,
		dots: true,
		slidesPerRow: 3,
		rows: 2,
		prevArrow: '<button class="slick-prev slides__arrow icon icon--b icon__arrow icon__arrow--dp" aria-label="Previous" type="button"></button>',
		nextArrow: '<button class="slick-next slides__arrow icon icon--b icon__arrow icon__arrow--dn" aria-label="Next" type="button"></button>',
		dotsClass: 'slick-dots slides__dots',
		appendDots: $('#slick__dot'),
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesPerRow: 1,
				rows: 2,
				arrows: false
			}
		}, ]
	});

	$('.slick--card').slick({
		centerMode: true,
		centerPadding: '20%',
		autoplay: true,
		dots: true,
		slidesToShow: 1,
		prevArrow: '<button class="slick-prev slides__arrow icon icon--b icon__arrow icon__arrow--dp" aria-label="Previous" type="button"></button>',
		nextArrow: '<button class="slick-next slides__arrow icon icon--b icon__arrow icon__arrow--dn" aria-label="Next" type="button"></button>',
		dotsClass: 'slick-dots slides__dots',
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					centerPadding: '15%',
					slidesToShow: 1,
					arrows: true
				}
			},{
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
		autoplay: true,
		dots: true,
		slidesPerRow: 3,
		rows: 2,
		adaptiveHeight: true,
		prevArrow: '<button class="slick-prev slides__arrow icon icon--b icon__arrow icon__arrow--lp" aria-label="Previous" type="button"></button>',
		nextArrow: '<button class="slick-next slides__arrow icon icon--b icon__arrow icon__arrow--ln" aria-label="Next" type="button"></button>',
		dotsClass: 'slick-dots slides__dots',
		responsive: [{
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
		autoplay: true,
		dots: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		prevArrow: '<button class="slick-prev slides__arrow icon icon--b icon__arrow icon__arrow--dp" aria-label="Previous" type="button"></button>',
		nextArrow: '<button class="slick-next slides__arrow icon icon--b icon__arrow icon__arrow--dn" aria-label="Next" type="button"></button>',
		dotsClass: 'slick-dots slides__dots',
		responsive: [{
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

	vex.defaultOptions.className = 'vex-theme-wireframe';
	vex.dialog.defaultOptions.showCloseButton = true;

	$('.wave').click(function () {
		vex.dialog.alert({
			message: '台灣讓人安心，是很多人的努力面對未來，邀請你串連正面的力量，為台灣做一件事!',
			input: '<div class="dialog__content"><ul class="grid grid--wave"><li><div><label>響應方法 A</label><ul><li>step1：在 A4 紙上寫下「#安心台灣運動，我願意__ 」</li><li>step2：手拿宣言錄一段15秒影片，或拍一張照片</li><li>step3：上傳影片/照片到FB或IG，並@好友接力響應</li></ul></div></li><li><div><label>響應方法 B</label><p>在網站上留下您的宣言，與大家分享！</p><a href="#motion" class="btn btn--block btn--dark icon icon--a icon__more icon__dark"><span class="btn__text">立即響應</span></a></div></li><li><div><label>響應方法 C</label><p>請將拍好的影片/照片寄送到以下信箱：</p><a href="mailto:junyouli@cw.com.tw" class="">junyouli@cw.com.tw</a><p>※ 感謝您參加響應 #安心臺灣運動，回傳影片即代表同意《康健雜誌》之影音與肖像使用權。</p></div></li></ul></div>',
		})
	});

	$(window).scroll(function () {

		headerStyle();
		waveShow();
		goTopShow();

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

	//header style
	function headerStyle() {
		//header position
		$(window).scrollTop() > 0 ? $('.header').addClass('active') : $('.header').removeClass('active');
		//header background color
		$(window).scrollTop() > $('#home').outerHeight() ? $('.header').css('background', '#254460') : $('.header').css('background', 'transparent');
	}

	//wave show
	function waveShow() {
		if ($(window).scrollTop() > ($(window).outerHeight() * 0.7)) {
			$('.wave').fadeIn('slow');
		} else {
			$('.wave').fadeOut('slow');
		}
	}

	//go top show
	function goTopShow() {
		if ($(window).scrollTop() > 800) {
			$('#goTop, .gotop').addClass('active');
		} else {
			$('#goTop, .gotop').removeClass('active');
		}
	}
});