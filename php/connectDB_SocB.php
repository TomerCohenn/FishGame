<?php


$database="Experiments";
$host="localhost";
$user="experimenter";
$password="HuHigiaElHaaretz";

$db = new mysqli($host, $user, $password, $database);

if (mysqli_connect_errno()) {
   printf("DB error: %s", mysqli_connect_error());

   
   exit();
}