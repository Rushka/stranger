var page = require('webpage').create(),
	system = require('system'),
	url = system.args[1]; //достаем параметр, в котором передан наш url страницы, которую мы парсим

// if (Number.isInteger(system.args[2])){
// 	url += '?p=';
// 	pages = parseInt(system.args[2]);
// } else {
// 	pages = 1;
// }
// console.log(url);


function parse_pages(pages, current_page) {
	current_url = url;
	// console.log(current_url);

	page.open(url, function (status) {
		page.injectJs('lib/jquery-1.9.1.min.js');

		var list = page.evaluate(function() {
			// var res = new Array;
			// $('.item_table h3 a').each(function(){
			// 	res.push($(this).text());
			// });

			res = ' страница:' + $('.pagination__pages span').text();
			return res;
		});
		console.log(list);
		phantom.exit();
	});
}

function parse_lots(list, current_lot){
	current_lot = current_lot || 0;

	url = 'http://www.avito.ru' + list[current_lot];

	console.log(url);

	page.open(url, function (status) {
		page.injectJs('lib/jquery-1.9.1.min.js');

		console.log(list[current_lot]);
		var res = page.evaluate(function() {
			return $('h3').html();
		});

		console.log(res);

		// if (list[current_lot]) {
			// current_lot += 1;
			// parse_lots(list, current_lot);
		// } else {
			phantom.exit();
		// }
	});
}

parse_pages(10);