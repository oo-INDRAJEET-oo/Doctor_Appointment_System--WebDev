<?php

$user = 'root';
$password = '';

$database = 'das';

$servername = 'localhost:3306';
$conn = new mysqli($servername , $user, $password, $database);
	
$q = $_GET['q'];

if(!$conn){
echo "Connection Unsuccessful!!!";
}
else{
$sql = "SELECT * from doctorslist where DocSpec= '".$q."'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
	$row = $result->fetch_all(MYSQLI_ASSOC);
	
$myJSON = json_encode($row);
  
echo $myJSON;
} else {
    echo "0 results";
}

$conn->close();
}
?>
