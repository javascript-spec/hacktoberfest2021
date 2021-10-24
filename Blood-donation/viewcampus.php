



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
<li><a href="viewcheckuser.php">view check user</a></li>
<li><a href="deleteuser.php">delete user</a></li>
<li><a href="addcamps.php">add camps</a></li>
<li><a href="sendreq.php">send request for requirement</a></li>


</ul>
<?php
$host='localhost';
$username='root';
$password='';
$dbname='final_project';
$con=mysqli_connect($host,$username,$password,$dbname);
//$edited=$_REQUEST['id'];
//$id=$_POST['uid'];
		$qry="select * from tbl_addcamps";
		$res=mysqli_query($con,$qry);
		echo '<center>';
		echo '<table border="1px"><tr><th> id </th> <th>location </th> <th>city</th> <th>state</th><th>date</th><th>timeing</th><th>Edit</th></tr>';
		while($row=mysqli_fetch_assoc($res))
		{
echo '<tr><td>'.$row['id'].'</td> <td>'.$row['location'].'</td> <td>'.$row['city'].'</td> <td>'.$row['state'].'</td><td>'.$row['date'].'</td><td>'.$row['timeing'].'</td><td><a href="addcamps.php?editid='.$row['id'].'">Edit</td></tr>';
		}
		echo '</table></center>';
	

?>