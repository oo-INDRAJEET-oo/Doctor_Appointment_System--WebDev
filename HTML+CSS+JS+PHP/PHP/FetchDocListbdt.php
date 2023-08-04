<?php
$user = 'root';
$password = '';

$database = 'das';

$servername = 'localhost:3306';
$conn = new mysqli($servername , $user, $password, $database);
$spec = $_GET['s'];
$date= $_GET['d'];
$time= $_GET['t'];;
$mrow=[];

if(!$conn){
echo "Connection Unsuccessful!!!";
}
else{
$sql = "SELECT * from doctorslist where DocSpec= '".$spec."'";
$result = $conn->query($sql);
while( $row = $result->fetch_assoc() ){
$docid[] = $row['DocId'];}
foreach($docid as $id){
	
	$sql1 = "SELECT count(*) AS `count` from appdata where DocId= ".$id." and Date= '".$date."' and Time= '".$time."'";
	$result1 = $conn->query($sql1);
	$row1 = $result1->fetch_assoc();
	if($row1['count']<4){
		$sql = "SELECT * from doctorslist where DocId= ".$id."";
		$result = $conn->query($sql);
		$row = $result->fetch_all(MYSQLI_ASSOC);
		$mrow= array_merge($row, $mrow);}
}
$myJSON = json_encode($mrow);
echo $myJSON;
$conn->close();
}
?>