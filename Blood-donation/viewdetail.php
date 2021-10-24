<?php
include 'connection.php';
session_start();
$user='';
$userid='';
if(isset($_SESSION['id']))
{
$userid=$_SESSION['id'];
}
$frm='';
$name='';
$fname='';
$lname='';
$fathernm='';
$contct='';
$addr='';


if(isset($_REQUEST['editid']))
{
	
	$qry="select * from register_form where id=$userid";
	$res=mysqli_query($con,$qry);
	if($row=mysqli_fetch_assoc($res))
	{
		$fname=$row['firstname'];
		$lname=$row['lastname'];
		$fathernm=$row['fathername'];
		$contct=$row['contact'];
		$addr=$row['address'];
	
	$frm='<form method="post" action="viewdetail.php">
	first name<input type="text" placeholder="enter first name" name="firstname" value="'.$fname.'"></br>
	last name<input type="text" placeholder="enter last name" name="lastname" value='.$row['lastname'].'></br>
	fathername<input type="text" placeholder="enter fathername name"name="fathername" value='.$row['fathername'].'></br>
	contact<input type="contact" placeholder="enter contact number"name="contact" value='.$row['contact'].'></br>
	address<textarea rows="" cols="" placeholder="enter address" name="address">'.$row['address'].'</textarea></br>
	<input type="submit" value="Update" name="updatebtn">
	</form>';
	}
}
if(isset($_REQUEST['updatebtn']))
{
	$ufname=$_POST['firstname'];
	$ulname=$_POST['lastname'];
	$ufaname=$_POST['fathername'];
	$ucontact=$_POST['contact'];
	$uaddress=$_POST['address'];
	$qry="update register_form set firstname='$ufname',lastname='$ulname',fathername='$ufaname',contact='$ucontact',address='$uaddress' where id=$userid";
	$res=mysqli_query($con,$qry);
	if($res)
		echo '<script>alert("data updated")</script>';
	else
		echo '<script>alert("failed to update")</script>';
}
?>
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

<?php
$host='localhost';
$username='root';
$password='';
$dbname='final_project';
$con=mysqli_connect($host,$username,$password,$dbname);
if($con)
{
	
      
		     
		 $qry="select * from register_form where id=$userid";
		$res=mysqli_query($con,$qry);
		echo '<center>';
		echo '<table border="1px"><tr><th> id </th> <th> firstname</th> <th>lastname</th> <th>fathername</th><th>email</th> <th>dob</th><th>contact</th><th>nationality</th><th>disease</th><th>bloodgroup</th><th>address</th><th>Edit</th></tr>';
		while($row=mysqli_fetch_assoc($res))
		{
echo '<tr><td>'.$row['id'].'</td> <td>'.$row['firstname'].'</td> <td>'.$row['lastname'].'</td><td>'.$row['fathername'].'</td><td>'.$row['email'].'</td><td>'.$row['dob'].'</td><td>'.$row['contact'].'</td> <td>'.$row['nationality'].'</td><td>'.$row['disease'].'</td><td>'.$row['bloodgroup'].'</td><td>'.$row['address'].'</td><td><a href="viewdetail.php?editid='.$row['id'].'">Edit</td></tr>';
		}
		echo '</table></center>';
		}
echo $frm;
?>