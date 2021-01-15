<?php

$host = "www.saweblia.ma";
$user = "saweblia_sawebuser";
$password = "p@r@d0xait1980";
$bd = "mobilesw";

$connection = new mysqli($host, $user, $password, $bd);
$connection->set_charset("utf8");

$query = "select * from Prestations";

$query_result = $connection->query($query);

$array = mysqli_fetch_all($query_result);

echo json_encode($array);
