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
		       $usrnm=$_POST['username'];
				$email=$_POST['email'];
				$cont=$_POST['contact'];
				$add=$_POST['address'];
	           $bld=$_POST['bloodgroup'];
		if($_POST['submitbtn']=="submit")
		{
	$qry="insert into tbl_checkuser (username,email,contact,address,bloodgroup) 
values('$usrnm','$email','$cont','$add','$bld')";
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
  $qry="update tbl_checkuser set username='$usrnm',email='$email',contact='$cont',address='$add',bloodgroup='$bld' where id=$hid";
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
		$usrnm='';
		$email='';
		$contact='';
		$add='';
		$bld='';
		$btn='submit';
	if(isset($_REQUEST['editid']))
		
		{
			$btn='update';
			$id=$_REQUEST['editid'];
			 $qry= "select * from tbl_checkuser where id=$id";
			$res1=mysqli_query($con,$qry);
			if($res=mysqli_fetch_assoc($res1))
			{
				$usrnm=$res['username'];
				$email=$res['email'];
				$cont=$res['contact'];
				$add=$res['address'];
	           $bld=$res['bloodgroup'];
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
<li><a href="viewcheckuser.php"> view check user</a></li>

<li><a href="deleteuser.php">delete user</a></li>
<li><a href="addcamps.php">add camps</a></li>
<li><a href="sendreq.php">send request for requirement</a></li>
<li><a href="viewsendreq.php"> view send request for requirement</a></li>

</ul>
<form method="post" action="checkuser.php">
<input type="hidden" name="hid" value="<?php echo $id; ?>">
<br/>
<h1><center> CHECK USER </h1></center>
<center>username<input type="text" name="username" placeholder="enter username" value="<?php echo $usrnm; ?>"></br>
email<input type="email" name="email" placeholder="enter email" value="<?php echo $email; ?>"></br>
contact<input type="number" name="contact" placeholder=" enter contact number" value="<?php echo $cont; ?>"></br>
address<textarea rows="" cols="" name="address" placeholder="enter address"><?php echo $add; ?></textarea></br>
bloodgroup<input type="text" name="bloodgroup" placeholder="enter bloodgroup" value="<?php echo $bld; ?>"></br>
<input type="submit" name="submitbtn" value="<?php echo $btn; ?>"></br></center>
</form>
</body>
</html>