var audio;

//Hide Pause Button
$('#pause').hide();

//Initialize Audio
initAudio($('#playlist li:first-child'));

//Initializer Function
function initAudio(element) {
	var song = element.attr('song');
	var title = element.text();
	var cover = element.attr('cover');
	var artist = element.attr('artist');
	
	//Create Audio Object
	audio = new Audio('media/'+ song);
	
	if(!audio.currentTime) {
		$('#duration').html('0.00');
	}
	
	$('#audio-player .title').text(title);
	$('#audio-player .artist').text(artist);
	
	//Insert Cover
	$('img.cover').attr('src', 'img/covers/'+ cover);
	
	$('#playlist li').removeClass('active');
	element.addClass('active');
}

//Play Button
$('#play').click(function() {
	audio.play();
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
})

//Pause Button
	$('#pause').click(function() {
	audio.pause();
	$('#pause').hide();
	$('#play').show();
})
//Stop Button
	$('#stop').click(function() {
	audio.pause();
	audio.currentTime = 0;
	$('#pause').hide();
	$('#play').show();
	$('#duration').fadeOut(400);
})

//Next Button
	$('#next').click(function() {
	audio.pause();
	var next = $('#playlist li.active').next();
	if(next.length == 0) {
		next = $('#playlist li:first-child');
	}
	initAudio(next);
	audio.play();
	showDuration();
})

//Prev Button
	$('#prev').click(function() {
	audio.pause();
	var prev = $('#playlist li.active').prev();
	if(prev.length == 0) {
		prev = $('#playlist li:last-child');
	}
	initAudio(prev);
	audio.play();
	showDuration();
})

//Volume Control
$('#volume').change(function() {
	audio.volume = parseFloat(this.value / 10);
});
//Time Duration
function showDuration() {
	$(audio).bind('timeupdate',function() {
		//Get Hours & Minutes
		var s = parseInt(audio.currentTime % 60);
		var m = parseInt((audio.currentTime)/ 60) % 60;
		//Add 0 if less than 10
		if(s < 10) {
			s = '0' + s;
		}
		$('#duration').html(m + '.' + s);
		var value = 0;
		if(audio.currentTime > 0) {
			value = Math.floor((100 / audio.duration) * audio.currentTime);
		}
		$('#progress').css('width',value+'%');
	});
}