<?php 
include'connection.php';
 $id = $_GET['id'];
$sql = "SELECT * FROM gallery where id='$id'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$img = $row['gallery'];
$current_img1 ='uploads/'.$row['gallery'];
 if(file_exists($current_img1)){
    unlink($current_img1);
     }

     $sql = "DELETE FROM gallery WHERE id='$id'";
     if ($conn->query($sql) === TRUE) {
    $message = "Gallery Deleted Successfully!";
    echo "<script type='text/javascript'>alert('$message');</script>";
    
    
    echo "<script>window.location.href='gallery-view.php';</script>";
        
    exit();
        
      }
?>
