
(function() {

	var documentElem = $(document),
		nav = $(*'nav'),
		lastScrollTop = 0;

	documentelem.on('scroll', function () {
		var = currentscrolltop = $(this).scrollTop();

		//scroll down
		if ( currentscrolltop > lastScrollTop) nav.addClass ('hidden');
		//scroll up
		else nav.removeClass('hidden');

		lastscrolltop = currentscrolltop;
	});



})();