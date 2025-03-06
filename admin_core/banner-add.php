<?php include 'header.php'?>
<?php
date_default_timezone_set('Asia/Kolkata');
$date= date("Y-m-d H:i:s");
if(isset($_POST["submit"])){
  $rimage= $_FILES['banner']['name'];
  $tmp_name= $_FILES['banner']['tmp_name'];
  
     move_uploaded_file($tmp_name, "uploads/$rimage");
    $title= $_POST['title'];
    $description = $_POST['description'];
      $sql = "INSERT INTO banner (title, description, banner,status,addon)
      VALUES ('$title', '$description', '$rimage','1','$date')";
      
      if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
      }
      
      mysqli_close($conn);
    }
?>
<div class="page-content-wrapper">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-12">
                  <div class="page-title-box">
                   
                    <h4 class="page-title">Add Bannar</h4>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      
                      <div class="general-label">
                        <form class="form-horizontal" role="form" method="POST" action="" enctype="multipart/form-data">
                          <div class="form-group row">
                            
                            <div class="col-md-6">
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  
                                </div>
                                <input type="text" id="example-input1-group1" name="title" class="form-control" placeholder="Title">
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="input-group">
                                <div class="input-group-prepend">
                                </div>
                                <input type="text" id="" name="description" class="form-control" placeholder="Description">
                              </div>
                            </div>
                            <div class="col-md-3 pt-1">
                              <div class="input-group">
                                <div class="input-group-prepend">
                                </div>
                                <input type="file" class="form-control" name="banner" id="">
                                  
                              </div>
                            </div>
                            <div class="col-md-5 offset-md-5 pt-5 pt-1">
                              <div class="input-group">
                                <div class="input-group-prepend">
                                <div class="input-group-append">
                                  <button class="btn btn-primary  mb-4" type="submit" name="submit">Save</button>
                                </div>
                            </div>
                            

                           

                          </div>
                          <!--end row-->
                         
                            
                              
                            
                            
                          </div>
                          <!--end row-->
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
<?php include 'footer.php'?>