(function($) {
 	
	$('.nav-toggle').on('click', function() {
		$('.hamburger-icon').toggleClass('is-open');
		$('.site-navigation').toggleClass('is-open');
		$('.site-header').toggleClass('is-open');
		$('.site-header-content').toggleClass('is-open');
	});

})(jQuery)