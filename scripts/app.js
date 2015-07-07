$(document).ready(function() {
	

	$('.start-button').click(function() {
		intro();
	});

	function intro() {
		$('.intro').css('opacity','0');
		$('.shame-button').addClass('show-button');
		$('.start-button').css('display','none');
		$('.audioDemo').trigger('play').trigger('pause');
	}


	$(this).gShake(function() {
		shame();
	});
	
	$('.shame-button').click(function() {
		shame();
	});

	function shame() {
		console.log("Shame");
		$('.shame-button').addClass('ring');
		$('.audioDemo').trigger('play');
		setTimeout(function() {
			$('.shame-button').removeClass('ring');
		}, 2000);
	}
});