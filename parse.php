<?php
	$avito_index = realpath('avito.js');
	$avito_parse_lots = realpath('avito_parse_lots.js');

	# Квартиры
	$base_url = 'http://www.avito.ru/moskva/kvartiry/';

	# Квартиры - Продажа
	$url = $base_url . 'prodam/';

	# Квартиры - Продажа - 1-комнатные
	$url .= '1-komnatnye';

	# Пагинатор
	$pages = 1; # Количество страниц
	$page_index = '';
	for ($i=1; $i <= $pages; $i++) {
		$page_index .= shell_exec('phantomjs '. $avito_index .' '. $url .'?p='. $i);
	}

	$page_index = explode('; ', $page_index);

	# Парсим лоты
	$result = '';
	foreach ($page_index as $value) {
		echo('phantomjs '. $avito_parse_lots .' '. $value);
		echo ': ';

		$lot = shell_exec('phantomjs '. $avito_parse_lots .' '. $value);
		$result .= $lot;
		echo $lot;
	}
	// echo $result;

?>