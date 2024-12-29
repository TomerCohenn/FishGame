<?php
include 'connectDB.php';

    
$ID = stripslashes(htmlspecialchars($_POST['ID']));
$TrialNum = stripslashes(htmlspecialchars($_POST['TrialNum']));
$Choice = stripslashes(htmlspecialchars($_POST['Choice']));
$Side = stripslashes(htmlspecialchars($_POST['Side']));
$Lake = stripslashes(htmlspecialchars($_POST['Lake']));
$Reward = stripslashes(htmlspecialchars($_POST['Reward']));
$RT = stripslashes(htmlspecialchars($_POST['RT']));
$Time = stripslashes(htmlspecialchars($_POST['Time'])); 
$BlockNum = stripslashes(htmlspecialchars($_POST['BlockNum'])); 





$stmt = $db->prepare("INSERT INTO fishing_rev_data VALUE(?,?,?,?,?,?,?,?,?)");

$stmt->bind_param("siiiiiiii", $ID,$TrialNum,$Choice,$Side,$Lake,$Reward,$RT,$Time,$BlockNum);
$stmt->execute();
$err = $stmt->errno ;
$data[] = array(
      'ErrorNo' => $err,
    );
$stmt->close();
 $db->close();
echo json_encode($data);
 ?>