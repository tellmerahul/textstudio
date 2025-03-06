<?php 
include'connection.php';
 $id = $_GET['id'];
$sql = "SELECT * FROM banner where id='$id'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$img = $row['banner'];
$current_img1 ='uploads/'.$row['banner'];
 if(file_exists($current_img1)){
    unlink($current_img1);
     }

     $sql = "DELETE FROM banner WHERE id='$id'";
     if ($conn->query($sql) === TRUE) {
    $message = "Banner Deleted Successfully!";
    echo "<script type='text/javascript'>alert('$message');</script>";
    
    
    echo "<script>window.location.href='banner-view.php';</script>";
        
    exit();
        
      }
?>
