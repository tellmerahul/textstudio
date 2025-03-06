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
                    <h4 class="page-title">View Gallery</h4>
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
                            <th>Description</th>
                            <th>Banner</th>
                            <th>Status </th>
                            <th>Add On</th>
                            <th>Action</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          <?php $no=0; 
                          $sql = "SELECT * FROM gallery ORDER BY id DESC";
                          $result = mysqli_query($conn, $sql);
                          while($row = mysqli_fetch_assoc($result))
								         {?>
                          
                          <tr>
                            <td><?php echo ++$no; ?></td>
                            <td><?php echo $row['title']; ?></td>
                            <td><?php echo $row['description']; ?></td>
                            <td><img src="uploads/<?php echo $row['banner']; ?>" style="width:150px ;height:100px"></td>
                            <td>
                            <?php if($row['status']==1){?>
                              <span class="badge badge-primary badge-pill">Active</span>
                              <?php } else{?>
                                <span class="badge badge-danger badge-pill">Deactive</span>
                                <?php }?>
                            </td>
                            <td><?php echo $row['addon']; ?></td>
                           <td ><div class="fa-hover col-md-3 col-sm-4"><a href="delete_gallery.php?id=<?php echo $row['id'] ?>"><i class="fa fa-trash-alt"></i></a></div>
                                 <div class="fa-hover col-md-3 col-sm-4"><a href="#"><i class="fa fa-eye"></i></a></div>
                             </td>
                            
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