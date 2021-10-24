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
<li><a href="viewdetail.php">View detail</a></li>
<li><a href="checkcamps.php">check for camps</a></li>
<li><a href="uploadimage.php">upload his image</a></li>
<li><a href="request.php">check for request</a></li>

</ul>

</ul>
</body>
</html>
<?php
$host='localhost';
$username='root';
$password='';
$dbname='final_project';
$con=mysqli_connect($host,$username,$password,$dbname);
if($con)
{
	 
			 
			  $qry="select * from tbl_addcamps";
		$res=mysqli_query($con,$qry);
		echo '<center>';
		echo '<table border="1px"><tr><th> id </th> <th> location</th> <th>city</th> <th>state</th><th>date</th><th>timeing</th></tr>';
		while($row=mysqli_fetch_assoc($res))
		{
echo '<tr><td>'.$row['id'].'</td> <td>'.$row['location'].'</td> <td>'.$row['city'].'</td> <td>'.$row['state'].'</td><td>'.$row['date'].'</td><td>'.$row['timeing'].'</td></tr>';
		}
		echo '</table></center>';
		}

?>