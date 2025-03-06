<?php
include'connection.php';
$username=$_POST['username'];
$password=$_POST['password'];
$sql="SELECT * FROM `users` WHERE email='$username' and password='$password'";
$result=mysqli_query($conn,$sql);
$rowcount=mysqli_num_rows($result);
$_SESSION["username"] = $username;
    $_SESSION["password"] = $password;
    header('Location:dashboard.php');
?> 
