<?php
$host='localhost';
$username='root';
$password='';
$dbname='final_project';
$con=mysqli_connect($host,$username,$password,$dbname);
if($con)
{
        if(isset($_POST['submitbtn']))
         {
			 $name=$_POST['name'];
			  $pass=$_POST['password'];
	   echo $qry="select * from tbl_login where name='$name'and password='$pass'"; 
		$res=mysqli_query($con,$qry);
		if($row=mysqli_fetch_assoc($res))
		{
			// echo'<script>alert("record   login")</script>';
			//echo $_SESSION['name']=$uname;
			//echo $_SESSION['id']=$row['id'];
			header('location:welcome.php');
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
</head>
<body>
<nav class="navbar navbar-inverse" style="margin-bottom:0px">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="home.php">Home</a></li>
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">services <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Page 1-1</a></li>
          <li><a href="#">Page 1-2</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul>
      </li>
	    <li><a href="about.php"><button type="button" class="btn btn-primary">About</button></a></li>
      
	   <li><a href="contact.php"><button type="button" class="btn btn-primary">contact</button></a></li>
	   <li><a href="register.php"><button type="button" class="btn btn-primary">Register Doner</button></a></li>
	   <li><a href="admin.php"><button type="button" class="btn btn-primary">Admin</button></a></li>
    </ul>
      
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
		<form method="post" action="admin.php>
    <div class="form-group">
      <label for="name">name:</label>
      <input type="name" class="form-control" id="name" placeholder="Enter name" name="name">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="password">
    </div>
    <button type="submit" value="login" name="submitbtn" class="btn btn-default">login</button>
	</form>
		</div>
	</div>
	</div>
	</div>
</body>
</html>
