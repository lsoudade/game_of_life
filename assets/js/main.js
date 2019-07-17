function initGrid(nb_rows, nb_columns) {
	if (isStarted()) {
		end();
	}
	window.game_step_counter = 0;

	refreshStepCounter();

	$('#new_nb_rows').val(nb_rows);
	$('#new_nb_columns').val(nb_columns);

	$('.game').hide();
	$('.game').empty();

	nb_rows = parseInt(nb_rows);
	nb_columns = parseInt(nb_columns);
	var cells_ratio = nb_rows / nb_columns;

	var scr_width = $('.game-wrapper').width();
	var scr_height = $('.game-wrapper').height();
	var scr_ratio = scr_height / scr_width;

	// Calculate cell width and height
	if (cells_ratio < scr_ratio) {
		var cell_wh = Math.floor($('.game-wrapper').width() / nb_columns);
	} else {
		var cell_wh = Math.floor($('.game-wrapper').height() / nb_rows);
	}

	var game_width = cell_wh * nb_columns;
	var game_height = cell_wh * nb_rows;

	// Adjust game width and height
	$('.game').css('width', game_width);
	$('.game').css('height', game_height);

	for (coord_x = 1; coord_x <= nb_rows; coord_x++) {
		for (coord_y = 1; coord_y <= nb_columns; coord_y++) {	
			var cell = $('<div class="cell coord_' + coord_x + '_' + coord_y + ' white" style="width:' + cell_wh + 'px;height:' + cell_wh + 'px;" data-x="' + coord_x + '" data-y="' + coord_y + '"></div>');		
			//var cell = $('<div class="cell coord_' + coord_x + '_' + coord_y + ' white" style="width:' + cell_wh + 'px;height:' + cell_wh + 'px;" data-x="' + coord_x + '" data-y="' + coord_y + '">' + coord_x + '<br />' + coord_y + '</div>');
			$(cell).click(function() {
				$(this).addClass('black_initial');
				$(this).toggleClass('white black');
			});
			$('.game').append(cell);
		}
	}

	$('.game').show();
}

// Rules:
// Naissance si exactement 3 voisines dans le carré
// Survie si deux ou trois voisines dans le carré
function step() {
	$('.cell').each(function() {
    	let x = parseInt($(this).attr('data-x'));
    	let y = parseInt($(this).attr('data-y'));

    	// Count alive neighbours
    	let aliveNeighbours = 0;
    	
    	for (i = -1; i <= 1; i++) { // each row
    		for (j = -1; j <= 1; j++) { // each column
    			let x_cellneigh = x + i;
    			let y_cellneigh = y + j;

    			if ($('.coord_' + x_cellneigh + '_' + y_cellneigh).hasClass('black') && (x_cellneigh != x || y_cellneigh != y)) {
    				aliveNeighbours++;
    			}
    		}
    	}

    	//console.log('______________CASE: ' + x + ' - ' + y + ' ___nb voisins :___ ' + aliveNeighbours);

    	// Mark cells to transform

    	// Cell is alive and single => must die
    	if ($(this).hasClass('black') && aliveNeighbours < 2) {
    		//console.log('Cell is alive and single => must die');
    		$(this).addClass('switch');
    	}

    	// Cell is alive and has too much alive neighbours => must die
    	else if ($(this).hasClass('black') && aliveNeighbours > 3) {
    		//console.log('Cell is alive and has too much alive neighbours => must die');
    		$(this).addClass('switch');	
    	}

    	// Cell is not alive and has three alive neightbours => must born
    	else if ($(this).hasClass('white') && aliveNeighbours == 3) {
    		//console.log('Cell is not alive and has three alive neightbours => must born');
    		$(this).addClass('switch');
    	}
 	});

	// Transform cells
 	$('.cell.switch').toggleClass('white black').removeClass('switch');

 	// Update step
 	window.game_step_counter++;
 	refreshStepCounter();
}

function refreshStepCounter() {
	$('.step_counter').text(window.game_step_counter);
}

function resetStepCounter() {
	window.game_step_counter = 0;
	refreshStepCounter();
}

function start(speed = 0) {
	speed = parseInt($('#speed').val());

	window.game_status = 'on';

	window.interval_handle = window.setInterval(function() {
  		step();
	}, speed);
}

function end() {
	window.game_status = 'off';
	window.clearInterval(window.interval_handle);
}

function isStarted() {
	return (window.game_status == 'on');
}

$(document).ready(function() {
	$('button.new_cell_number').click(function() {
		initGrid($('#new_nb_rows').val(), $('#new_nb_columns').val());
	});

	// Walk one step manually
	$('.step').click(function() {
		step();
	});

	// Start auto walk
	$('.start').click(function() {
		if (isStarted()) {
			$(this).text('Start');
			end();
		} else {
			$(this).text('Stop');
			start();	
		}	
	});

	// Change speed
	$('#speed').change(function() {
		if (isStarted()) {
			end();
			start();
		}
	});

	// Reset to initial selection
	$('.reset').click(function() {
		resetStepCounter();

		if (isStarted()) {
			end();
			start();
		}

		$('.cell.black').toggleClass('white black');
		$('.cell.black_initial').toggleClass('white black');
	});

	// Clear all cells
	$('.clear').click(function() {
		resetStepCounter();
		
		if (isStarted()) {
			end();
			$('.start').text('Start');
		}

		initGrid($('#new_nb_rows').val(), $('#new_nb_columns').val());
	});

	$('.generate').click(function() {
		let code = '\n';

		$('.cell.black').each(function() {
	    	let x = parseInt($(this).attr('data-x'));
	    	let y = parseInt($(this).attr('data-y'));

	    	code += 'fill(' + x + ', ' + y + ');\n';
	 	});

	 	console.log(code);
	});


	var nb_rows = 20;
	var nb_columns = 40;

	$('#new_nb_rows').val(nb_rows);
	$('#new_nb_columns').val(nb_columns);

	initGrid(nb_rows, nb_columns);
});