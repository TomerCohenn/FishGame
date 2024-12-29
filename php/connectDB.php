<?php

$database="wampuser";
$host="localhost";
$user="wampuser";
$password="turhturh";

$db = new mysqli($host, $user, $password, $database);

mysqli_set_charset($db,"utf8");


if (mysqli_connect_errno()) {
   printf("DB error: %s", mysqli_connect_error());
   exit();
}