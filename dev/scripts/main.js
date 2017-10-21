const milenaSite = {}

milenaSite.init = () => {
	milenaSite.hamburgerMenu();
	milenaSite.scrolling();
};

milenaSite.hamburgerMenu = () => {
	// Hamburger menu in mobile version
	// When you click on the hamburger icon ("nav-icon3"), opens or closes the menu - with slide motion.
	$("#nav-icon3").click(function(){
		// console.log("Hi this is working");
		$(this).toggleClass("open");
		const smallMenu = $(".smallMenu");
		smallMenu.slideToggle(300);			
	});

	// When you click on about in small menu, closes the menu (because you're on the about page. Make sure to change if make it sticky.)
	// Also note: May be problematic in mobile vs when sticky.
	$("#aboutLink").click(function() {
		$(".smallMenu").slideToggle(300);
	});
}

milenaSite.scrolling = () => {
	function goToByScroll(id) {
		let toMe = $("." + id)
		$("html,body").delay(600).animate({ scrollTop: toMe.offset().top }, 1100);
		toMe.addClass("hightlightResult");
		setTimeout(function () {
			toMe.removeClass("hightlightResult", 1500);
		}, 500);
	};

	$("#navAbout").on("click", function() {
		goToByScroll("about");
	});

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
}

$(document).ready(function(){	
	milenaSite.init();
});