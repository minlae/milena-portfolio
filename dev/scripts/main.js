$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		const smallMenu = $(".smallMenu");

		smallMenu.slideToggle(300);		
		
	});

	function goToByScroll(id) {
		let toMe = $("." + id)
		$("html,body").delay(600).animate({ scrollTop: toMe.offset().top }, 1100);
		toMe.addClass("hightlightResult");
		setTimeout(function () {
			toMe.removeClass("hightlightResult", 1500);
		}, 500);
	};

	$('#mainButton').on('click', function() {
		goToByScroll("portfolio");
	})

});