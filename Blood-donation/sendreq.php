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
			 $bloodgroup=$_POST['bloodgroup'];
			   $number=$_POST['no_of_unit'];
			   $campadd=$_POST['camp_address'];
			   $contact=$_POST['contact_no'];
			   if($_POST['submitbtn']=="submit")
			   {
$qry="insert into tbl_send (bloodgroup,no_of_unit,camp_address,contact_no) 
values('$bloodgroup','$number','$campadd','$contact')";
$res=mysqli_query($con,$qry);
if($res)
{
             echo'<script>alert("record   inserted")</script>';
}
else
{
echo'<script>alert("Record is failed to insert")</script>';
     }
		 }
		else if ($_POST['submitbtn']=="update")
		{
			 $hid=$_POST['hid'];
  $qry="update tbl_send set bloodgroup='$bloodgroup',no_of_unit='$number',camp_address='$campadd',contact_no='$contact' where id=$hid";
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
		$bloodgroup='';
		$number='';
		$campadd='';
		$contact='';
		
		$btn='submit';
	if(isset($_REQUEST['editid']))
		
		{
			$btn='update';
			$id=$_REQUEST['editid'];
			 $qry= "select * from tbl_send where id=$id";
			$res1=mysqli_query($con,$qry);
			if($res=mysqli_fetch_assoc($res1))
			{
				$bloodgroup=$res['bloodgroup'];
			   $number=$res['no_of_unit'];
			   $campadd=$res['camp_address'];
			   $contact=$res['contact_no'];
				
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
<li><a href="sendreq.php">send request for requirement</a></li>
<li><a href="viewsendreq.php"> view send request for requirement</a></li>
<li><a href="deletereq.php">delete req</a></li>
</ul>
<form method="post" action="sendreq.php">
<input type="hidden" name="hid" value="<?php echo $id; ?>">
<br/>
<h2><center> send request for requirement</center></h2>

<center><div class="form-group">
<div class="col-md-6">
<label for="name"> Blood Group</label>
<input type="text"class="form-control" name="bloodgroup" value="<?php echo $bloodgroup; ?>">
</div> </div>
 <div class="form-group">
<div class="col-md-6">
 <label for="name"> Number of Unit</label>
<input type="number"class="form-control" name="no_of_unit" value="<?php echo $number; ?>"></div> </div>

<div class="form-group">
<div class="col-md-6">
 <label for="Address">  camp Address</label> 
 <textarea rows="" cols=""  class="form-control"name="camp_address"><?php echo $campadd; ?></textarea></div></div>

<div class="form-group">
<div class="col-md-6">
 <label for="name"> contact number</label>
<input type="contact"class="form-control" name="contact_no" value="<?php echo $contact; ?>"></div> </div>
<input type="submit" name="submitbtn" value="<?php echo $btn; ?>"></center>
</form>
</body>
</html>
