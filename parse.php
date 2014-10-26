<?php
	$scriptpath = realpath('avito.js');

	# Квартиры
	$base_url = 'http://www.avito.ru/moskva/kvartiry/';

	# Квартиры - Продажа
	$url = $base_url . 'prodam/';

	# Квартиры - Продажа - 1-комнатные
	$url .= '1-komnatnye';

	# Скармливаем парсеру список квартир
	$result = '';
	for ($i=1; $i < 5; $i++) {
		$result = shell_exec('phantomjs '. $scriptpath .' '. $url .'?p='. $i);
		echo 'phantomjs '. $scriptpath .' '. $url .'?p='. $i;

		echo $result;
	}



	// foreach ($result as $value) {
	// 	echo($value);
	// }

	// echo $result;
?>