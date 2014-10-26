<?php
	$scriptpath = realpath('avito.js');

	# Квартиры
	$base_url = 'http://www.avito.ru/moskva/kvartiry/';

	# Квартиры - Продажа
	$url = $base_url . 'prodam/';

	# Квартиры - Продажа - 1-комнатные
	$url .= '1-komnatnye';

	# Скармливаем парсеру список квартир

	$result = shell_exec('phantomjs '. $scriptpath .' '. $url);
	// echo('phantomjs '. $scriptpath .' '. $url);

	$result = explode('; ', $result);

	foreach ($result as $value) {
		echo($value);
	}

	// echo $result;
?>