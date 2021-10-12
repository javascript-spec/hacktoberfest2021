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
		       $loc=$_POST['location'];
				$city=$_POST['city'];
				$state=$_POST['state'];
				$date=$_POST['date'];
	           $tim=$_POST['timeing'];
		if($_POST['submitbtn']=="submit")
		{
	$qry="insert into tbl_addcamps (location,city,state,date,timeing) 
values('$loc','$city','$state','$date','$tim')";
$res=mysqli_query($con,$qry);
if($res)
{
	echo'<script>alert("data is inserted")</script>';
}
else
{
	echo'<script>alert("data is not inserted")</script>';
	
}
		}
		
		else if ($_POST['submitbtn']=="update")
		{
			 $hid=$_POST['hid'];
  $qry="update tbl_addcamps set location='$loc',city='$city',state='$state',date='$date',timeing='$tim' where id=$hid";
			$res=mysqli_query($con,$qry);
			if($res)
			{
				echo'<script>alert("data is update")</script>';
			}
			else
			{
				echo'<script>alert("data is not update")</script>';
			}
		}
		}
		$id='';
		$loc='';
		$city='';
		$state='';
		$date='';
		$tim='';
		$btn='submit';
	if(isset($_REQUEST['editid']))
		
		{
			$btn='update';
			$id=$_REQUEST['editid'];
			 $qry= "select * from tbl_addcamps where id=$id";
			$res1=mysqli_query($con,$qry);
			if($res=mysqli_fetch_assoc($res1))
			{
				 $loc=$res['location'];
				$city=$res['city'];
				$state=$res['state'];
				$date=$res['date'];
	           $tim=$res['timeing'];
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
<li><a href="checkuser.php">check user</a></li>

<li><a href="deleteuser.php">delete user</a></li>
<li><a href="addcamps.php">add camps</a></li>
<li><a href="viewcampus.php">viewcamps</a></li>
<li><a href="deletecamps.php">deletecamps</a></li>
<li><a href="sendreq.php">send request for requirement</a></li>
<li><a href="viewsendreq.php"> view send request for requirement</a></li>

</ul>
<form method="post" action="addcamps.php">
<input type="hidden" name="hid" value="<?php echo $id; ?>">
<br/>
<h2><center> Add Camps</center></h2>

<center><div class="form-group">
<div class="col-md-6">
<label for="name"> location</label>
<input type="text"class="form-control" name="location"value="<?php echo $loc; ?>"></br></div> </div>
 <div class="form-group">
<div class="col-md-6">
 <label for="name"> city</label>
<input type="text"class="form-control" name="city" value="<?php echo $city; ?>"></br></div> </div>
<div class="form-group">
<div class="col-md-6">
<label for="state">state</label>
<select class="form-control" name="state" value="<?php echo $state; ?>">
<option>himachle perdesh</option>
<option>chandigrah</option>
<option>gujrat</option>
<option>mumbai</option>
<option>delhi</option>
</select></br></div></div>
<div class="form-group">
<div class="col-md-6">
 <label for="name"> date</label>
<input type="date"class="form-control" name="date"value="<?php echo $date; ?>"></br></div> </div>

<div class="form-group">
<div class="col-md-6">
 <label for="name"> timeing</label>
<input type="time"class="form-control" name="timeing" value="<?php echo $tim; ?>"></br></div> </div>
<input type="submit" name="submitbtn" value="<?php echo $btn; ?>"></center>
</form>
</body>
</html>

