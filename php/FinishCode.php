<?php

include 'connectDB.php';
      

$ID = stripslashes(htmlspecialchars($_POST['ID']));
$Worker = stripslashes(htmlspecialchars($_POST['Worker']));
$SumReward = stripslashes(htmlspecialchars($_POST['SumReward']));

$stmt = $db->prepare("INSERT INTO fishing_rev_finished VALUE(?,?,?,NOW())");
$stmt->bind_param("ssi", $ID,$Worker,$SumReward);
$stmt->execute();
$err = $stmt->errno ;
$data[] = array(
      'ErrorNo' => $err,
    );
$stmt->close();
 $db->close();
echo json_encode($data);
 ?>