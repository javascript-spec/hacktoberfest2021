<?php
include 'connection.php';
session_start();
$user='';
$userid='';
if(isset($_SESSION['id']))
{
$userid=$_SESSION['id'];
}
if(isset($_POST['submitbtn']))
{
$img=$_FILES['file1'];
$fname=$img['name'];
if($con)
{
	if(move_uploaded_file($img["tmp_name"],"upload/".$fname))
	{
$qry="update register_form set img='$fname' where id=$userid";
$res=mysqli_query($con,$qry);	
	
	echo '<script>alert("uploaded successfully")</script>';
	}
else
	echo '<script>alert("failed to upload")</script>';
}
}

?>
<html>
<head>
</head>
<body>
<form method="post" action="uploadimage.php" enctype="multipart/form-data">
Select Image<input type="file" name="file1">
<input type="submit" name="submitbtn" value="upload">
</form>
</body>
</html>
