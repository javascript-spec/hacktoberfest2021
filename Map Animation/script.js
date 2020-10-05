$('.marker').bind('click', function() {
	$('.card').addClass('active');
	$('.marker').addClass('inactive');
});

$('.card').bind('click', function() {
	$('.card').removeClass('active');
	$('.marker').removeClass('inactive');
});