$(document).ready(function () {

	$('.burger').click(function () {
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
	});
	
	$(window).scroll(function () {
        //header background color
        $(window).scrollTop() > $('#kv').outerHeight() ? $('.header').css('background', '#254460') : $('.header').css('background', 'transparent');

        //go top show
        // if ( $(this).scrollTop() > 800){
        //     $('#goTop, .gotop').addClass('active');
        // } else {
        //     $('#goTop, .gotop').removeClass('active');
        // }
    });
});