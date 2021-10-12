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
			 $name=$_POST['username'];
			  $pass=$_POST['password'];
	   echo $qry="select * from tbl_admin where username='$name'and password='$pass'"; 
		$res=mysqli_query($con,$qry);
		
	 if($row=mysqli_fetch_assoc($res))
		{
			
			header('location:adminindex.php');
		}
		else
		{
			
			$msg='<p style="color:red">Failed to login</p>';
			echo $msg;
		}
}
}
?>
<!DOCTYPE html>
<head>
<body>
<style>
div.login{
    margin:0 auto;
	background:beige;
	width:600px;
	text-align:center;
	height:300px
}
input
{
    padding:8px;
	width:200px
}
.btn
{
    background:navy;
	color:#ccc;
	border:none;
	width:120px;
}
</style>

<div class="container">
<div class="header">
</div>
<div class="login">
<center><br/>
<h1>Admin Pannel</h1><br/>
<form method="post"action="admin.php">
<table>
<tr>
<td> Enter username</td>
<td><input type="text"name="username" required></td>
<tr/>
<tr>
<td> Enter password</td>
<td><input type="password"name="password" required></td>
</tr>
<tr><td><input class="btn" type="submit" value="login"name="submitbtn"></td></tr>
</center>
</table>
</form>
</body>
</html>
  