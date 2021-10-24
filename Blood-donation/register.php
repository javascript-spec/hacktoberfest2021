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
		      $firname=$_POST['firstname'];
			   $lasname=$_POST['lastname'];
			   $fatr=$_POST['fathername'];
			   $email=$_POST['email'];
			   $pass=$_POST['password'];
			   $bth=$_POST['dob'];
			   $cont=$_POST['contact'];
			   $nat=$_POST['nationality'];
			   $dis=$_POST['disease'];
			   $bld=$_POST['bloodgroup'];
			   $add=$_POST['address'];
			   
			   echo $qry="insert into register_form (firstname,lastname,fathername,email,password,dob,contact,nationality,disease,bloodgroup,address) 
values('$firname','$lasname','$fatr','$email','$pass','$bth','$cont','$nat','$dis','$bld','$add')";
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
	   <li><a href="register.php">Register </a></li>
	   <li><a href="admin.php">Admin </a></li>
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
<form method="post" action="">
<h2><center> Register Donor</center></h2>

<div class="form-group">
<div class="col-md-6">
<label for="name"> First Name</label>
<input type="text"class="form-control" name="firstname" placeholder="first name"></br></div> </div>
 <div class="form-group">
<div class="col-md-6">
 <label for="name"> Last Name</label>
<input type="text"class="form-control" name="lastname" placeholder="last name"></br></div> </div>
<div class="form-group">
<div class="col-md-6">
<label for="name"> Father name</label>
<input type="text"class="form-control" name="fathername" placeholder="enter father name"></br></div></div>
 

<div class="form-group">
<div class="col-md-6">
<label for="email"> email</label>
<input type="email"class="form-control" name="email" placeholder="enter email"></br></div></div>
<div class="form-group">
<div class="col-md-6">
<label for="email"> password</label>
<input type="password"class="form-control" name="password" placeholder="enter password"></br></div></div>
<div class="form-group">
<div class="col-md-6">
 <label for="dob"> DOB</label>
 <input type="date" class="form-control" name="dob" placeholder="enter dob"></br></div></div>
 <div class="form-group">
<div class="col-md-6">
<label for="contact"> Contact</label>
<input type="text"class="form-control" name="contact" placeholder="enter contact"></br></div><div>
<div class="form-group">
<div class="col-md-6">
<label for="nationality">  Nationality</label>
<select class="form-control" name="nationality">
<option>indian</option>
<option>usa</option>
<option>pakistan</option>
<option>landon</option>
<option>span</option>
</select></br></div></div>
<div class="form-group">
<div class="col-md-6">
<label for="disease">  Disease</label></br>
 <select class="form-control" name="disease">
 <option>cancer</option>
<option>fever</option>
<option>blood cancer</option>
<option>tumer</option>

</select></br></br></div></div>
<b>Blood Group</b>    
<input type="checkbox" value="A+"name="bloodgroup">  A+    <input type="checkbox" value="A-" name="bloodgroup">  A-   <input type="checkbox" value="B+"name="bloodgroup">  B+ <input type="checkbox" value="B-"name="bloodgroup"> B- <input type="checkbox" value="O+"name="bloodgroup"> O+ <input type="checkbox" value="O-"name="bloodgroup"> O- </br></div></div>
<div class="form-group">
<div class="col-md-6">
 <label for="Address"> Address</label> 
 <textarea rows="" cols=""  class="form-control"name="address"></textarea></br></br></div></div>
 <div class="form-group">
<div class="col-md-6">
 <center><input type="submit" name="submitbtn" value="submit"></center></div></div>
</form>
 </div>
 </body>
 </html>
 
