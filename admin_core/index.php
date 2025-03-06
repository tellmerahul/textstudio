<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0,minimal-ui">
      <title>Admin</title>
      <meta content="Admin Dashboard" name="description">
      <meta content="themesdesign" name="author">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <link rel="shortcut icon" href="#">
      <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
      <link href="assets/plugins/animate/animate.css" rel="stylesheet" type="text/css">
      <link href="assets/css/icons.css" rel="stylesheet" type="text/css">
      <link href="assets/css/style.css" rel="stylesheet" type="text/css">
   </head>
   <body class="fixed-left">
      <!-- Begin page --><!--<div class="accountbg"></div>-->
      <div id="stars"></div>
      <div id="stars2"></div>
      <div class="wrapper-page">
         <div class="card">
            <div class="card-body">
               <h3 class="text-center mt-0"><a href="index.php" class="logo logo-admin"><h1 class="text-center">ADMIN</h1></a></h3>
               
               <div class="p-3">
                  <form  class="form-horizontal" method="post" action="auth.php">
                     <div class="form-group row">
                        <div class="col-12"><input class="form-control" name="username" type="text" required />
                                              <span></span>
                                              <label>Username</label></div>
                     </div>
                     <div class="form-group row">
                        <div class="col-12"><input  class="form-control" name="password" type="password" required />
                                             <span></span>
                                             <label>Password</label></div>
                     </div>
                     
                     <div class="form-group text-center row m-t-20">
                        <div class="col-12"><button class="btn btn-danger btn-block waves-effect waves-light" type="submit">Log In</button></div>
                     </div>
                     
                  </form>
               </div>
            </div>
         </div>
      </div>
      <!-- jQuery  --><script src="assets/js/jquery.min.js"></script><script src="assets/js/bootstrap.bundle.min.js"></script></script><script src="assets/js/modernizr.min.js"></script><script src="assets/js/detect.js"></script><script src="assets/js/fastclick.js"></script><script src="assets/js/jquery.slimscroll.js"></script><script src="assets/js/jquery.blockUI.js"></script><script src="assets/js/waves.js"></script><script src="assets/js/jquery.nicescroll.js"></script><script src="assets/js/jquery.scrollTo.min.js"></script><!-- App js --><script src="assets/js/app.js"></script>
   </body>
</html>