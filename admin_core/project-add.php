<?php include 'header.php'?>
<?php
 date_default_timezone_set('Asia/Kolkata');
 $date= date("Y-m-d H:i:s");
?>

<div class="page-content-wrapper">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-12">
                  <div class="page-title-box">
                   
                    <h4 class="page-title">Add Project</h4>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      
                      <div class="general-label">
                        <form class="form-horizontal" role="form" method="POST" action="" enctype="multipart/form-data>
                          <div class="form-group row">
                            
                            <div class="col-md-6">
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  
                                </div>
                                <input type="name" id="example-input1-group1" name="title" class="form-control" placeholder="Title">
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="input-group">
                                <div class="input-group-prepend">
                                </div>
                                <input type="text" id="example-input1-group1" name="description" class="form-control" placeholder="Description">
                              </div>
                            </div>
                            
                            <div class="col-md-5 offset-md-5 pt-5">
                              <div class="input-group">
                                <div class="input-group-prepend">
                                <div class="input-group-append">
                                  <button class="btn btn-primary  mb-4" type="submit">Save</button>
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