<?php

$user = 'root';
$password = '';

$database = 'das';

$servername = 'localhost:3306';
$conn = new mysqli($servername , $user, $password, $database);

$docid=$_GET['str'];
$sd=$_GET['sd'];
$st=$_GET['st'];

$sql = "INSERT INTO appdata (Pid, DocId, Date, Time) VALUES (NULL, '".$docid."', '".$sd."', '".$st."')";
$conn->query($sql);
echo "success";
$conn->close();
?>
