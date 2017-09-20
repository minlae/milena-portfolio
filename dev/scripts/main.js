$(document).ready(function(){
	$("#nav-icon3").click(function(){
		console.log(this);
		$(this).toggleClass("open");
		const smallMenu = $(".smallMenu");
		// const test = this;

		smallMenu.slideToggle(300);		
			
	});

	$("#aboutLink").click(function() {

		$(".smallMenu").slideToggle(300);
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

	$("#skillsSm").on("click", function() {
		goToByScroll("skills");
		$(".smallMenu").slideToggle(300);
	});

	$("#navPortfolio").on("click", function() {
		goToByScroll("portfolio");
	});

	$("#portfolioSm").on("click", function() {
		goToByScroll("portfolio");
		$(".smallMenu").slideToggle(300);
	});

	$("#navContact").on("click", function() {
		goToByScroll("contact");
	});

	$("#contactSm").on("click", function() {
		goToByScroll("contact");
		$(".smallMenu").slideToggle(300);
	});

});