$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		// $(".smallM enu").toggle();
		const smallMenu = $(".smallMenu");

		smallMenu.slideToggle(300);		
		// if (smallMenu.css('display') === 'none') {
		// 	smallMenu.css('display', 'flex');
		// }
		
	});
});