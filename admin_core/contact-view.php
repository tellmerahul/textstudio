<?php include 'header.php'?>
          <div class="page-content-wrapper">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-12">
                  <div class="page-title-box">
                    <div class="float-right">
                      <div class="dropdown">
                       
                        
                      </div>
                    </div>
                    <h4 class="page-title">View Contact</h4>
                  </div>
                </div>
              </div>
              <!-- end page title end breadcrumb -->
       
              
              <div class="row">
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-body">
                      
                      <table id="datatable-buttons" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
                        <thead>
                          <tr>
                            <th>S.no</th>
                            <th>Title</th>
                            <th>Phone Number</th>
                            <th>Email </th>
                            <th>Description </th>
                            
                            
                          </tr>
                        </thead>
                        <tbody>
                          <?php $no=0; 
                          $sql = "SELECT * FROM contact ORDER BY id DESC";
                          $result = mysqli_query($conn, $sql);
                          while($row = mysqli_fetch_assoc($result))
								         {?>
                          
                          <tr>
                            <td><?php echo ++$no; ?></td>
                            <td><?php echo $row['title']; ?></td>
                            <td><?php echo $row['phone']; ?></td>
                            <td><?php echo $row['email']; ?></td>
                            <td><?php echo $row['description']; ?></td>
                          
                            
                          </tr>
                          <?php }?>
                         
                      
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- container -->
          </div>
          <!-- Page content Wrapper -->
        </div>
        <?php include 'footer.php'?>