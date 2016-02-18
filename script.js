$(document).ready(function(){
	newGrid();
});

function newGrid() {
	var input = prompt('Type an integer between 10 and 100');
	$('#grid').empty();
	if (input >= 10 && input <= 100) {
		var cube_size = $('#grid').width()/input - 2;
		for(var i = 1; i <= input; i++) {
			for(var j = 1; j <= input; j++) {
				$('#grid').append('<div class="cube"></div>');
			}
			$('#grid').append('<div class="row"></div>');
		}
		$('.cube').css('width',cube_size);
		$('.cube').css('height',cube_size);
		
		
		$('.cube').mouseenter(function(){
			var opacity = $(this).css('opacity');
			if (opacity > 0) {
				$(this).css('opacity', opacity - 0.2);
			}
		});
	} else {
		alert('Sorry, not an appropriate number');
	}
	
}