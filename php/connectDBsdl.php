<?php

$database="urihertzjc1";
$host="urihertzjc1.mysql.db";
$user="urihertzjc1";
$password="Nv7bLzcJ5PzxhtpoJrN";

$db = new mysqli($host, $user, $password, $database);

mysqli_set_charset($db,"utf8");

if (mysqli_connect_errno()) {
   printf("DB error: %s", mysqli_connect_error());
   exit();
}