<!DOCTYPE html>
<?php
$dir = "media/";
	/*$a = scandir($dir);
unset($a[0]);
unset($a[1]);*/?>
<html>
	<head>
		<title>HTML5 Audio Player</title>
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<div id="container">
			<div id="audio-img">
				<img class="cover" alt="album">
			</div>
			<div id="audio-player">
				<div id="audio-info">
					<span class="artist"></span> = <span class="title"></span>
				</div>
				<input id="volume" type="range" min="0" max="10" value="5">
				<br>
				<div id="audio-buttons">
					<button id="prev"></button>
					<button id="play"></button>
					<button id="pause"></button>
					<button id="stop"></button>
					<button id="next"></button>
				</div>
				<div class="clearfix"></div>
				<div id="tracker">
					<div id="progressbar">
						<span id="progress">
						
						</span>
					</div>
					<span id="duration"></span>
				</div>
				<div class="clearfix"></div>
				<ul id="playlist">
					<?php if (is_dir($dir)){
  if ($dh = opendir($dir)){
    while (($file = readdir($dh)) !== false){
		if (($file == ".") || ($file == "..")) {continue;}
      echo "<li song='" . $file . "' cover='cover1.jpg' artist='Lindsey Stirling'>" . pathinfo($file, PATHINFO_FILENAME) . "</li>";
    }
    closedir($dh);
  }
}?>
					
					
				</ul>
			</div>
		</div>
	
		<script src="js/jquery.js"></script>
		<script src="js/main.js"></script>
	</body>
</html>