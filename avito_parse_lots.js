var page = require('webpage').create(),
	system = require('system'),
	url = system.args[1];

function parse_lots(url){

	current_url = 'http://www.avito.ru' + url;

	page.open(current_url, function (status) {
		page.injectJs('lib/jquery-1.9.1.min.js');

		var res = page.evaluate(function() {
			return $('h1.h1').html();
		});

		console.log(res);

		phantom.exit();
	});
}

parse_lots(url);