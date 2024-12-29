<?php
include 'connectDB.php';

$query = "SELECT  * FROM fishing_rev_quest ;";

 if ($result = mysqli_query($db, $query)){                      
$pasajeros = "id,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18"."\r\n";

  while ($row = mysqli_fetch_array($result))  {
         
       
        $pasajeros .= $row["ID"] . ",".$row["Responses"] ."\r\n"; //note the comma here
        
                    } 

 }

$filename = "pasajeros_" . date("Y-m-d_H-i"); 
header("Content-type: application/vnd.ms-excel");
header("Content-disposition: csv" . date("Y-m-d") . ".csv");
header("Content-disposition: filename=FishingRevQuest.csv");
 echo $pasajeros;
  mysqli_free_result($result);

   mysqli_close($db);
   
?>