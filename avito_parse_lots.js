var page = require('webpage').create(),
	system = require('system'),
	url = system.args[1];

function parse_lots(url){
	current_url = 'http://www.avito.ru' + url;

	page.open(current_url, function (status) {
		page.injectJs('lib/jquery-1.9.1.min.js');

		var res = page.evaluate(function() {
			$( ".btn__text" ).trigger( "click" );

			var res = new Array;

			res.push($('h1.h1').html()); // Заголовок
			res.push($('#item_id').text()); // Номер объвяления
			res.push($('.p_i_price span').text()); // Цена
			res.push($('#seller strong').text()); // Продавец
			res.push($('#toggle_map > span').text()); // Адрес

			return res;
		});

		console.log(res);
		phantom.exit();
	});
}

parse_lots(url);