<?php
include'connection.php';

if(!isset($_SESSION["username"])){
  header('Location: login.php');
    exit();
}

?>
<!DOCTYPE html>

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0,minimal-ui">
    <title>Admin-panel</title>
    <meta content="Admin Dashboard" name="description">
    <meta content="themesdesign" name="author">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="#">
    <!-- DataTables -->
    <link href="assets/plugins/datatables/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css">
    <link href="assets/plugins/datatables/buttons.bootstrap4.min.css" rel="stylesheet" type="text/css">
    <!-- Responsive datatable examples -->
    <link href="assets/plugins/RWD-Table-Patterns/dist/css/rwd-table.min.css" rel="stylesheet" type="text/css" media="screen">
    <link href="assets/plugins/datatables/responsive.bootstrap4.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="assets/plugins/metro/MetroJs.min.css">
    <link rel="stylesheet" href="assets/plugins/morris/morris.css">
    <link href="assets/plugins/jvectormap/jquery-jvectormap-2.0.2.css" rel="stylesheet">
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="assets/plugins/animate/animate.css" rel="stylesheet" type="text/css">
    <link href="assets/css/icons.css" rel="stylesheet" type="text/css">
    <link href="assets/css/style.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body class="fixed-left">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Begin page -->
    <div id="wrapper">
      <!-- ========== Left Sidebar Start ========== -->
      <div class="left side-menu">
        <button type="button" class="button-menu-mobile button-menu-mobile-topbar open-left">
          <i class="ion-close"></i>
        </button>
        <!-- LOGO -->
        <div class="topbar-left">
          <div class="text-center">
            <!--<a href="dashboard.php" class="logo"><i class="fa fa-paw"></i> Aplomb</a>-->
            <a href="dashboard.php" class="logo">
               <img src="../textstudio.jpeg" alt="user"  style="height: 40px; width: 140px;">
            </a>
          </div>
        </div>
        <div class="sidebar-inner slimscrollleft" id="sidebar-main">
          <div id="sidebar-menu">
            <ul>
              
              <li class="has_sub">
                <a href="dashboard.php" class="waves-effect waves-light">
                  <i class="mdi mdi-view-dashboard"></i>
                  <span> Dashboard </span>
                 
                </a>
              </li>
              <li class="has_sub">
                <a href="../editor.php" class="waves-effect waves-light">
                  <i class="mdi mdi-view-dashboard"></i>
                  <span> Editor </span>
                </a>
              </li>
              <li class="has_sub">
                <a href="font.php " class="waves-effect waves-light">
                  <i class="mdi mdi-clipboard-outline"></i>
                  <span> Font Manager </span>
                </a>
                <ul class="list-unstyled">
                  <li>
                    <a href="font_edit.php">Font Add</a>
                  </li>
                  <li>
                    <a href="font.php">Font View</a>
                  </li>
                </ul>
              </li>
              
              <li class="has_sub">
                <a href="background.php" class="waves-effect waves-light">
                  <i class="mdi mdi-clipboard-outline"></i>
                  <span> Background Manager </span>
                 
                </a>
                <ul class="list-unstyled">
                  <li>
                    <a href="background_edit.php"> Background Add</a>
                  </li>
                  <li>
                    <a href="background.php">Background View</a>
                  </li>
                  
                  
                </ul>
              </li>
              
              <li class="has_sub">
                <a href="icon.php" class="waves-effect waves-light">
                  <i class="mdi mdi-clipboard-outline"></i>
                  <span> Icon Manager </span>
                 
                </a>
                <ul class="list-unstyled dropdown-menu">

                  <li>
                    <a href="icon_edit.php">Icon View</a>
                  </li>
                  <li>
                    <a href="icon.php">Icon View</a>
                  </li>
                  
                  
                </ul>
              </li>
             
            
            </ul>
          </div>
        </div>
        <!-- end sidebarinner -->
      </div>
      <!-- Left Sidebar End -->
       <!-- Start right Content here -->
       <div class="content-page">
        <!-- Start content -->
        <div class="content">
          <!-- Top Bar Start -->
          <div class="topbar">
            
  
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
              <ul class="navbar-nav" style="width:1200px">
                
              </ul>

              <!-- Use ms-auto for proper alignment -->
              <ul class="navbar-nav">
                <li class="nav-item dropdown dropleft">
                    <a class="dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
                        <i class="fa fa-bars" style="font-size:36px"></i>
                    </a>
                    
                    <ul class="dropdown-menu dropdown-menu-start"> <!-- Added dropdown-menu-start -->
                        <li class="dropdown-item"><h5>Welcome</h5></li>
                        <li><a class="dropdown-item" href="#"><i class="mdi mdi-account-circle"></i> Profile</a></li>
                        <li><a class="dropdown-item" href="#"><i class="mdi mdi-wallet"></i> My Wallet</a></li>
                        <li><a class="dropdown-item" href="#"><i class="mdi mdi-lock-open-outline"></i> Lock screen</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item text-danger" href="logout.php"><i class="mdi mdi-power text-danger"></i> Logout</a></li>
                    </ul>
                </li>
              </ul>

            </nav>

          </div>


          <script>
            // Find the main menu item (Font Manager)
var fontManagerLink = document.querySelector('.has_sub > a');

// Add click event listener to the link
fontManagerLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  var submenu = this.nextElementSibling; // Get the <ul> element (submenu)

  // Toggle the visibility of the submenu by changing its display property
  if (submenu.style.display === '' || submenu.style.display === 'none') {
    submenu.style.display = 'block'; // Show submenu
  } else {
    submenu.style.display = 'none'; // Hide submenu
  }
});

          </script>
          <!-- Top Bar End -->