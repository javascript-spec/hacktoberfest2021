<?php
session_start();
$user='';
$userid='';
if(isset($_SESSION['id']))
{
$userid=$_SESSION['id'];
}
$host='localhost';
$username='root';
$password='';
$dbname='final_project';
$con=mysqli_connect($host,$username,$password,$dbname);
if($con)
{
if(isset($_REQUEST['requestid']))
{
	$rid=$_REQUEST['requestid'];
	$nm=$_REQUEST['nm1'];
	$cmpadd1=$_REQUEST['cmpadd'];
	$cnt1=$_REQUEST['cnt'];
//echo $nm;
//echo $userid;
	 $qry="insert into tbl_requestview(requestid,bloodgroup,campaddress,contact) values($userid,'$nm','$cmpadd1','$cnt1')";
$res=mysqli_query($con,$qry);
if($res)
{
             echo'<script>alert("Your application has been submitted successfully !")</script>';
}
else
{
echo'<script>alert("Sorry! Failed to apply.")</script>';
     }
}
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

         
		     
			   
			 $qry="select * from  tbl_send";
		$res=mysqli_query($con,$qry);
        echo '<center>';
		echo '<table border="1px"><tr><th> id </th> <th> bloodgroup</th> <th>no_of_unit</th> <th>camp_address</th><th>contact_no</th><th>Apply Here</th></tr>';
		while($row=mysqli_fetch_assoc($res))
		{
echo '<tr><td>'.$row['id'].'</td> <td>'.$row['bloodgroup'].'</td> <td>'.$row['no_of_unit'].'</td> <td>'.$row['camp_address'].'</td><td>'.$row['contact_no'].'</td><td><a href="request.php?requestid='.$row['id'].'&nm1='.$row['bloodgroup'].'&cmpadd='.$row['camp_address'].'&cnt='.$row['contact_no'].'">Send Confirmation</a></td></tr>';
		}
		echo '</table></center>';
		}
		 

?>
