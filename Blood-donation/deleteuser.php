<!doctype html>
<html>
<head>
<style>
ul
{
	list-style-type:none;
}
ul li{
	display:inline;
	margin-left:30px;
}
ul li a
{
	padding-top:10px;
	text-decorration:none;
}
</style>
</head>
<body>
<ul>
<li><a href="checkuser.php">check user</a></li>

<li><a href="deleteuser.php">delete user</a></li>
<li><a href="addcamps.php">add camps</a></li>
<li><a href="sendreq.php">send request for requirement</a></li>

</ul>
<h2>Delete user</h2>

<form method="post" action="deleteuser.php">
Delete id<input type="text" name="id"><br/>
<input type="submit" name="delete" value="submit"><br/>
</form>
<body>
</html>
<?php
$host='localhost';
$username='root';
$password='';
$dbname='final_project';
$con=mysqli_connect($host,$username,$password,$dbname);
if ($con)
{
	if(isset($_POST['delete']))
	{
		$id=$_POST['id'];
		$qry="delete from tbl_checkuser where id=$id";
		mysqli_query($con,$qry);
		header('location:checkuser.php');
	}
}
?>
