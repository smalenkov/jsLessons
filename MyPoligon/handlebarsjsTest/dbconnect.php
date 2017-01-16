<?php

// данные конфигурации
$dbhost = 'localhost';
$dbname = 'handlebarsjsTest';

// подключение к базе
$connection = new MongoClient("mongodb://$dbhost");
$collection = $connection -> handlebarsjsTest -> posts;
$data = $collection -> findOne();

// echo $oJson->encode($data);
echo json_encode($data);

$connection -> close();

?>