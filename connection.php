<?php
$servername = "localhost";
$username = "root";  // Change if necessary
$password = "";      // Change if necessary
$database = "textstudio"; // Change to your database name

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
