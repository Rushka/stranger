var page = require('webpage').create(),
		system = require('system'),
		url = system.args[1]; //достаем параметр, в котором передан наш url страницы, которую мы парсим

// Должен быть только один console.log()
function parse_pages(pages, current_page) {
	current_url = url;
	// console.log(current_url);

	page.open(url, function (status) {
		page.injectJs('lib/jquery-1.9.1.min.js');

		var list = page.evaluate(function() {
			var res = new Array;

			$('.item_table h3 a').each(function(){
				res.push($(this).attr('href'));
			});

			return res.join('; ');
		});

		console.log(list);
		phantom.exit();
	});
}

parse_pages();