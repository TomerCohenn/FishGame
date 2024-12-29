<?php


$SUBCODE = stripslashes(htmlspecialchars($_POST['thisCode']));
$ID = stripslashes(htmlspecialchars($_POST['ID']));


include 'connectDB.php';

$stmt2 = $db->prepare("INSERT INTO fishing_rev_subcode VALUE(?,NOW(),?)");
$stmt2->bind_param("ss", $SUBCODE,$ID);
$stmt2->execute();
$err = $stmt2->errno ;
$data[] = array(
      'ErrorNo' => $err,
    );
$stmt2->close();
 $db->close();
echo json_encode($data);
    exit;
    
   
 ?>
