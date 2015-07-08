$(document).ready(function() {
	
	$('.start-button').click(function() {
		intro();
	});

	function intro() {
		$('.intro').css('opacity','0');
		$('.shakey').css('opacity','1');
		$('.start-button').addClass('shame-transform');
		$('.audioDemo').trigger('play').trigger('pause');
		$('.start-button').click(function() {
			shame();
		});
	}


	$(this).gShake(function() {
		shame();
	});

	function shame() {
		$('.shakey').addClass('ring');
		$('.audioDemo').trigger('play');
		setTimeout(function() {
			$('.shakey').removeClass('ring');
		}, 2000);
	}
});