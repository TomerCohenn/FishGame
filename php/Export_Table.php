<?php
include 'connectDB.php';

$Subject = stripslashes(htmlspecialchars($_GET['SubCode']));

$query = "SELECT  * FROM fishing_rev_data WHERE ID= '". $Subject ."' ;";

 if ($result = mysqli_query($db, $query)){                      

$pasajeros = "id,trialnum,choice,side,lake,reward,rt,time,blocknum"."\r\n";

  while ($row = mysqli_fetch_array($result))  {
        $pasajeros .= $row["id"] .",".$row["trialnum"] .",".$row["choice"] .",".$row["side"]  .",".$row["lake"] .",".$row["reward"] .",".$row["rt"] .",".$row["time"].",".$row["blocknum"]."\r\n"; //note the comma here
                    } 
 }
$filename = "pasajeros_" . date("Y-m-d_H-i"); 
header("Content-type: application/vnd.ms-excel");
header("Content-disposition: csv" . date("Y-m-d") . ".csv");
header("Content-disposition: filename=Fishing_Rev_" . $Subject . ".csv");
 echo $pasajeros;
  mysqli_free_result($result);
   mysqli_close($db);          
?>