<?php

$file = isset($_REQUEST['f']) ? $_REQUEST['f'] : '' . '.csv';
$baseDir = realpath(__DIR__ . '/../data') . '/';

if(
	!in_array($file, array('users.csv', 'effects.csv', 'activities.csv'))
	|| !file_exists($baseDir . $file)
)
	die('file not allowed');

header('Content-Type: application/json');
echo json_encode(
	array_map(
		function($value){
			return str_getcsv(utf8_encode($value), ';');
		},
		explode(
			"\n",
			file_get_contents($baseDir . $file)
		)
	)
);