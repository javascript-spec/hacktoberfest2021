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
			   $email=$_POST['email'];
			   $cont=$_POST['contact'];
			   $mess=$_POST['message'];
			   echo $qry="insert into tbl_feedback (name,email,contact,message) 
values('$name','$email','$cont','$mess,')";
$res=mysqli_query(
$con,$qry);
if($res)
{
             echo'<script>alert("record   inserted")</script>';
}
else
{
echo'<script>alert("Record is failed to insert")</script>';
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

      <li><a href="about.php">About</a></li>
      <li><a href="contact.php">contact</a></li>
	   <li><a href="register.php">Register</a></li>
	   <li><a href="admin.php">Admin</a></li>
	    
    </ul>
	<ul class="nav navbar-nav navbar-right">
   <li><a href=""><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
  </div>
</nav>
  </div>
</nav>

<div class="container">
  <h2>send a message</h2>
  <form method="post" action="contact.php">
          <div class="col-md-6">
    <div class="form-group">
      <label for="email">name:</label>
      <input type="text" class="form-control"  placeholder=" enter name" name="name">
    </div>
	</div>
	 <div class="col-md-6">
    <div class="form-group">
      <label for="email">email:</label>
      <input type="email" class="form-control"  placeholder="enter email" name="email">
    </div>
	</div>
	        <div class="col-md-6">
    <div class="form-group">
      <label for="contact">contact:</label>
      <input type="number" class="form-control"  placeholder="Enter contact" name="contact">
    </div>
	</div>
	        <div class="col-md-6">
	 <div class="form-group">
      <label for="msg">message:</label>
      <input type="text" class="form-control"  placeholder="Enter massage" name="message">
    </div>
	   </div>
    
    <button type="send" name="submitbtn" class="btn btn-default">send</button>
  </form>
</div>

</body>
</html>
