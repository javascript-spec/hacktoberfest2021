<?php
session_start();
$host='localhost';
$username='root';
$password='';
$dbname='final_project';
$con=mysqli_connect($host,$username,$password,$dbname);
if($con)
{
        if(isset($_POST['submitbtn']))
         {
			 $email=$_POST['email'];
			  $pass=$_POST['password'];
	    $qry="select * from register_form where email='$email'and password='$pass'"; 
		$res=mysqli_query($con,$qry);
		if($row=mysqli_fetch_assoc($res))
		{
			$_SESSION['id']=$row['id'];
			//$_SESSION['uid']=$row['uid'];
			
			// echo'<script>alert("record   login")</script>';
			//echo $_SESSION['name']=$uname;
			//echo $_SESSION['id']=$row['id'];
			header('location:welcome.php?email='.$row['email'].'');
		}
		else
		{
			//echo'<script>alert("Record is failed to login")</script>';
			$msg='<p style="color:red">Failed to login</p>';
		}
}
}
?>
				
				
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <style>
  .carousel-inner > .item > img,
  .carousel-inner > .item > a > img {
    width: 70%;
    margin: auto;
  }
  </style>
</head>
<body>
<nav class="navbar navbar-inverse" style="margin-bottom:0px">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"><button type="button" class="btn btn-primary">WebSiteName</button></a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="home.php"><button type="button" class="btn btn-primary">Home</button></a></li>
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><button type="button" class="btn btn-primary">services </button><span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Page 1-1</a></li>
          <li><a href="#">Page 1-2</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul>
      </li>

      <li><a href="about.php"><button type="button" class="btn btn-primary">About</button></a></li>
      
	   <li><a href="contact.php"><button type="button" class="btn btn-primary">contact</button></a></li>
	   <li><a href="register.php"><button type="button" class="btn btn-primary">Register </button></a></li>
	   <li><a href="admin.php"><button type="button" class="btn btn-primary">Admin</button></a></li>
    </ul>
	<ul class="nav navbar-nav navbar-right">
   <li><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-log-in"></span> Login</button></li>
   </div>
    </ul>
  </div>
</nav>
 </div>
 </nav>

  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content" style="padding-bottom:15px;padding-left:20px; padding-right: 20px; margin: 65px;">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">User Login</h4>
        </div>
		<div class="modal-body">
		<h2>LOGIN</h2>
		<form method="post"action="home.php">
    <div class="form-group">
      <label for="email">email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="password">
    </div>
    <input type="submit" value="login" name="submitbtn" >
	</form>
		</div>
	</div>
	</div>
	</div>
  <div class="container-fluid">
  <br>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">

      <div class="item active">
        <img src="999.jpg" alt="blood donation" width="460" height="345">
        <div class="carousel-caption">
          <h3>Blood Donation</h3>
        </div>
      </div>

      <div class="item">
        <img src="456.jpg" alt="blood donation" width="460" height="345">
        <div class="carousel-caption">
          <h3>Blood Donation</h3>
          </div>
      </div>
    
      <div class="item">
        <img src="blood2.jpg" alt="blood donation" width="460" height="345">
        <div class="carousel-caption">
          <h3>Blood Donation</h3>
          </div>
      </div>

      <div class="item">
        <img src="946.jpg" alt="blood donation" width="460" height="345">
        <div class="carousel-caption">
          <h3>Blood Donation</h3>
         </div>
      </div>
  
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
<div class="container-fluid">
  <div class="jumbotron">
    <h1><i>Why We..?</i></h1>      
    <p>A blood donation occurs when a person voluntarily has blood drawn and used for transfusions and/or made into biopharmaceutical medications by a process called fractionation (separation of whole-blood components). Donation may be of whole blood, or of specific components directly (the latter called apheresis). Blood banks often participate in the collection process as well as the procedures that follow it.</p>

<p>Today in the developed world, most blood donors are unpaid volunteers who donate blood for a community supply. In some countries, established supplies are limited and donors usually give blood when family or friends need a transfusion (directed donation). Many donors donate as an act of charity, but in countries that allow paid donation some donors are paid, and in some cases there are incentives other than money such as paid time off from work. Donors can also have blood drawn for their own future use (autologous donation). Donating is relatively safe, but some donors have bruising where the needle is inserted or may feel faint.</p>
  </div>
  <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-4">
          
        </div>
        <div class="col-md-4">
          
          
          
       </div>
        <div class="col-md-4">
         
</div>   
</div>
</body>
</html>
