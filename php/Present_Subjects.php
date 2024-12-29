<?php

include 'connectDB.php';

$query = "select * from fishing_rev_finished;";
 if ($result = mysqli_query($db, $query)){                        

      echo " <a href=Present_Demog.php>Export deomgraphic data</a><br>"; 
      echo " <a href=Present_Finished.php>Export bonus report </a><br>"; 

 Print "<table border cellpadding=3>"; 
 
  while ($row = mysqli_fetch_array($result))  {
   echo "<th>ID:</th> <td>".$row['ID'] . "</td> "; 
 echo "<th>Time:</th> <td>".$row['time'] . " </td>";

 echo " <td><a href=Export_Table.php?SubCode=".$row['ID'] .">Export Data</a></td>". "</tr>"; 
      
                    } 

                    echo "</table>";
 }
          
  mysqli_free_result($result);
            mysqli_close($db);
?>