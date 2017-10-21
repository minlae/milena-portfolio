const milenaSite = {}

milenaSite.hamburgerMenu = () => {
	// Hamburger menu in mobile version
	// When you click on the hamburger icon ("nav-icon3"), opens or closes the menu - with slide motion.
	$("#nav-icon3").click(() => {
		// console.log("Hi this is working");
		$(this).toggleClass("open");
		const smallMenu = $(".smallMenu");
		smallMenu.slideToggle(300);			
	});

	// When you click on about in small menu, closes the menu (because you're on the about page. Make sure to change if make it sticky.)
	// Also note: May be problematic in mobile vs when sticky.
	$("#aboutLink").click(() => {
		$(".smallMenu").slideToggle(300);
	});
}

milenaSite.scrolling = () => {
	// Smooth scroll, not my code. Taken from friend.
	function goToByScroll(id) {
		let toMe = $("." + id)
		$("html,body").delay(600).animate({ scrollTop: toMe.offset().top }, 1100);
		toMe.addClass("hightlightResult");
		setTimeout(function() {
			toMe.removeClass("hightlightResult", 1500);
		}, 500);
	};

	$("#navAbout").on("click", () => {
		goToByScroll("about");
	});

	$("#mainButton").on("click", () => {
		goToByScroll("portfolio");
	});

	$("#navSkills").on("click", () => {
		goToByScroll("skills");
	});

	$("#skillsSm").on("click", () => {
		goToByScroll("skills");
		$(".smallMenu").slideToggle(300);
	});

	$("#navPortfolio").on("click", () => {
		goToByScroll("portfolio");
	});

	$("#portfolioSm").on("click", () => {
		goToByScroll("portfolio");
		$(".smallMenu").slideToggle(300);
	});

	$("#navContact").on("click", () => {
		goToByScroll("contact");
	});

	$("#contactSm").on("click", () => {
		goToByScroll("contact");
		$(".smallMenu").slideToggle(300);
	});
}

milenaSite.init = () => {
	milenaSite.hamburgerMenu();
	milenaSite.scrolling();
};

$(document).ready(() => {	
	milenaSite.init();
});