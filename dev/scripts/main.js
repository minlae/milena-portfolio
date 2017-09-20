$(document).ready(function(){
	$("#nav-icon3").click(function(){
		console.log(this);
		$(this).toggleClass("open");
		const smallMenu = $(".smallMenu");
		const test = this;

		smallMenu.slideToggle(300);		
		
		$("#aboutLink").click(function() {
			// console.log(test);	
			// HELP: This works the FIRST time you click "About" but then afterward it does something weird.
			$(test).toggleClass("open");
			smallMenu.slideToggle(300);	
		})
	});


	function goToByScroll(id) {
		let toMe = $("." + id)
		$("html,body").delay(600).animate({ scrollTop: toMe.offset().top }, 1100);
		toMe.addClass("hightlightResult");
		setTimeout(function () {
			toMe.removeClass("hightlightResult", 1500);
		}, 500);
	};

	$("#mainButton").on("click", function() {
		goToByScroll("portfolio");
	});

	$("#navSkills").on("click", function() {
		goToByScroll("skills");
	});

	$("#navPortfolio").on("click", function() {
		goToByScroll("portfolio");
	});

	$("#navPortfolio").on("click", function() {
		goToByScroll("portfolio");
	});

	$("#navContact").on("click", function() {
		goToByScroll("contact");
	});

});