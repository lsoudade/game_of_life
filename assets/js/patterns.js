$(document).ready(function() {
	// Load a special pattern
	$('#pattern').change(function() {
		if ($(this).val() != '') {
			switch ($(this).val()) {
				case 'blinker':
					pattern_blinker();
					break;

				case 'pulsar':
					pattern_pulsar();
					break;

				case 'pinwheel':
					pattern_pinwheel();
					break;

				case 'octagon_2':
					pattern_octagon_2();
					break;

				case 'rats':
					pattern_rats();
					break;

				case 'burloaferimeter':
					pattern_burloaferimeter();
					break;

				case 'figure_eight':
					pattern_figure_eight();
					break;

				case 'worker_bee':
					pattern_worker_bee();
					break;

				case 'dinner_table':
					pattern_dinner_table();
					break;

				case 'buckinghams_p13':
					pattern_buckinghams_p13();
					break;

				case 'tumbler':
					pattern_tumbler();
					break;

				case 'pentadecathlon':
					pattern_pentadecathlon();
					break;

				case 'two_preL_hasslers':
					pattern_two_preL_hasslers();
					break;

				case '117P18':
					pattern_117P18();
					break;

				case '145P20':
					pattern_145P20();
					break;

				case '124P21':
					pattern_124P21();
					break;

				case '168P22_1':
					pattern_168P22_1();
					break;

					
			}
		}
	});
});

function fill(x, y) {
	let cell = '.cell.coord_' + x + '_' + y;
	$(cell).addClass('black_initial');
	$(cell).toggleClass('white black');
}

function pattern_blinker() {
	initGrid(9, 9);
	fill(4, 5);
	fill(5, 5);
	fill(6, 5);
}

function pattern_pulsar() {
	initGrid(17, 17);
	fill(8, 5);
	fill(8, 6);
	fill(8, 7);
	fill(9, 5);
	fill(9, 7);
	fill(10, 5);
	fill(10, 6);
	fill(10, 7);

	fill(8, 11);
	fill(8, 12);
	fill(8, 13);
	fill(9, 11);
	fill(9, 13);
	fill(10, 11);
	fill(10, 12);
	fill(10, 13);
}

function pattern_pinwheel() {
	initGrid(16, 16);
	fill(3, 9);
	fill(3, 10);
	fill(4, 9);
	fill(4, 10);
	fill(6, 7);
	fill(6, 8);
	fill(6, 9);
	fill(6, 10);
	fill(7, 3);
	fill(7, 4);
	fill(7, 6);
	fill(7, 9);
	fill(7, 11);
	fill(8, 3);
	fill(8, 4);
	fill(8, 6);
	fill(8, 8);
	fill(8, 11);
	fill(9, 6);
	fill(9, 10);
	fill(9, 11);
	fill(9, 13);
	fill(9, 14);
	fill(10, 6);
	fill(10, 11);
	fill(10, 13);
	fill(10, 14);
	fill(11, 7);
	fill(11, 8);
	fill(11, 9);
	fill(11, 10);
	fill(13, 7);
	fill(13, 8);
	fill(14, 7);
	fill(14, 8);
}

function pattern_octagon_2() {
	initGrid(10, 10);
	fill(2, 5);
	fill(2, 6);
	fill(3, 4);
	fill(3, 7);
	fill(4, 3);
	fill(4, 8);
	fill(5, 2);
	fill(5, 9);
	fill(6, 2);
	fill(6, 9);
	fill(7, 3);
	fill(7, 8);
	fill(8, 4);
	fill(8, 7);
	fill(9, 5);
	fill(9, 6);
}

function pattern_rats() {
	initGrid(13, 14);
	fill(2, 7);
	fill(2, 8);
	fill(3, 8);
	fill(4, 6);
	fill(5, 2);
	fill(5, 3);
	fill(5, 5);
	fill(5, 7);
	fill(5, 8);
	fill(5, 9);
	fill(5, 10);
	fill(6, 2);
	fill(6, 3);
	fill(6, 5);
	fill(6, 11);
	fill(6, 13);
	fill(7, 5);
	fill(7, 8);
	fill(7, 9);
	fill(7, 10);
	fill(7, 12);
	fill(7, 13);
	fill(8, 5);
	fill(8, 10);
	fill(9, 6);
	fill(9, 7);
	fill(9, 8);
	fill(9, 10);
	fill(10, 9);
	fill(11, 8);
	fill(12, 8);
	fill(12, 9);
}

function pattern_burloaferimeter() {
	initGrid(13, 12);
	fill(2, 6);
	fill(2, 7);
	fill(3, 7);
	fill(4, 6);
	fill(5, 5);
	fill(5, 7);
	fill(5, 8);
	fill(5, 9);
	fill(6, 5);
	fill(6, 7);
	fill(6, 10);
	fill(7, 2);
	fill(7, 3);
	fill(7, 5);
	fill(7, 9);
	fill(7, 11);
	fill(8, 2);
	fill(8, 3);
	fill(8, 5);
	fill(8, 10);
	fill(9, 6);
	fill(9, 7);
	fill(9, 8);
	fill(9, 9);
	fill(11, 6);
	fill(11, 7);
	fill(12, 6);
	fill(12, 7);
}

function pattern_figure_eight() {
	initGrid(12, 12);
	fill(4, 4);
	fill(4, 5);
	fill(5, 4);
	fill(5, 5);
	fill(5, 7);
	fill(6, 8);
	fill(7, 5);
	fill(8, 6);
	fill(8, 8);
	fill(8, 9);
	fill(9, 8);
	fill(9, 9);
}

function pattern_worker_bee() {
	initGrid(13, 18);
	fill(2, 2);
	fill(2, 3);
	fill(2, 16);
	fill(2, 17);
	fill(3, 3);
	fill(3, 16);
	fill(4, 3);
	fill(4, 5);
	fill(4, 14);
	fill(4, 16);
	fill(5, 4);
	fill(5, 5);
	fill(5, 14);
	fill(5, 15);
	fill(7, 7);
	fill(7, 8);
	fill(7, 9);
	fill(7, 10);
	fill(7, 11);
	fill(7, 12);
	fill(9, 4);
	fill(9, 5);
	fill(9, 14);
	fill(9, 15);
	fill(10, 3);
	fill(10, 5);
	fill(10, 14);
	fill(10, 16);
	fill(11, 3);
	fill(11, 16);
	fill(12, 2);
	fill(12, 3);
	fill(12, 16);
	fill(12, 17);
}

function pattern_dinner_table() {
	initGrid(15, 15);
	fill(2, 3);
	fill(3, 3);
	fill(3, 4);
	fill(3, 5);
	fill(3, 13);
	fill(3, 14);
	fill(4, 6);
	fill(4, 13);
	fill(5, 5);
	fill(5, 6);
	fill(5, 11);
	fill(5, 13);
	fill(6, 11);
	fill(6, 12);
	fill(7, 8);
	fill(8, 6);
	fill(8, 7);
	fill(8, 9);
	fill(10, 4);
	fill(10, 8);
	fill(10, 11);
	fill(11, 3);
	fill(11, 5);
	fill(11, 6);
	fill(11, 11);
	fill(12, 3);
	fill(12, 10);
	fill(13, 2);
	fill(13, 3);
	fill(13, 11);
	fill(13, 12);
	fill(13, 13);
	fill(14, 13);
}

function pattern_buckinghams_p13() {
	initGrid(17, 27);
	fill(2, 6);
	fill(2, 22);
	fill(3, 5);
	fill(3, 7);
	fill(3, 21);
	fill(3, 23);
	fill(4, 5);
	fill(4, 7);
	fill(4, 21);
	fill(4, 23);
	fill(5, 3);
	fill(5, 4);
	fill(5, 5);
	fill(5, 7);
	fill(5, 8);
	fill(5, 20);
	fill(5, 21);
	fill(5, 23);
	fill(5, 24);
	fill(5, 25);
	fill(6, 2);
	fill(6, 26);
	fill(7, 3);
	fill(7, 4);
	fill(7, 5);
	fill(7, 7);
	fill(7, 8);
	fill(7, 20);
	fill(7, 21);
	fill(7, 23);
	fill(7, 24);
	fill(7, 25);
	fill(8, 5);
	fill(8, 7);
	fill(8, 8);
	fill(8, 20);
	fill(8, 21);
	fill(8, 23);
	fill(9, 12);
	fill(9, 16);
	fill(10, 13);
	fill(10, 15);
	fill(11, 12);
	fill(11, 13);
	fill(11, 15);
	fill(11, 16);
	fill(12, 10);
	fill(12, 13);
	fill(12, 15);
	fill(12, 18);
	fill(13, 9);
	fill(13, 11);
	fill(13, 13);
	fill(13, 15);
	fill(13, 17);
	fill(13, 19);
	fill(14, 9);
	fill(14, 10);
	fill(14, 13);
	fill(14, 15);
	fill(14, 18);
	fill(14, 19);
	fill(15, 13);
	fill(15, 15);
	fill(16, 14);
}

function pattern_tumbler() {
	initGrid(9, 11);
	fill(2, 3);
	fill(2, 9);
	fill(3, 2);
	fill(3, 4);
	fill(3, 8);
	fill(3, 10);
	fill(4, 2);
	fill(4, 5);
	fill(4, 7);
	fill(4, 10);
	fill(5, 4);
	fill(5, 8);
	fill(6, 4);
	fill(6, 5);
	fill(6, 7);
	fill(6, 8);
}

function pattern_pentadecathlon() {
	initGrid(11, 18);
	fill(5, 7);
	fill(5, 12);
	fill(6, 5);
	fill(6, 6);
	fill(6, 8);
	fill(6, 9);
	fill(6, 10);
	fill(6, 11);
	fill(6, 13);
	fill(6, 14);
	fill(7, 7);
	fill(7, 12);
}

function pattern_two_preL_hasslers() {
	initGrid(20, 26);
	fill(3, 6);
	fill(3, 7);
	fill(3, 20);
	fill(3, 21);
	fill(4, 2);
	fill(4, 3);
	fill(4, 5);
	fill(4, 8);
	fill(4, 10);
	fill(4, 11);
	fill(4, 16);
	fill(4, 17);
	fill(4, 19);
	fill(4, 22);
	fill(4, 24);
	fill(4, 25);
	fill(5, 2);
	fill(5, 3);
	fill(5, 6);
	fill(5, 11);
	fill(5, 16);
	fill(5, 21);
	fill(5, 24);
	fill(5, 25);
	fill(6, 7);
	fill(6, 20);
	fill(7, 8);
	fill(7, 10);
	fill(7, 17);
	fill(7, 19);
	fill(8, 12);
	fill(9, 11);
	fill(9, 13);
	fill(10, 10);
	fill(10, 16);
	fill(11, 11);
	fill(11, 17);
	fill(12, 14);
	fill(12, 16);
	fill(13, 15);
	fill(14, 8);
	fill(14, 10);
	fill(14, 17);
	fill(14, 19);
	fill(15, 7);
	fill(15, 20);
	fill(16, 2);
	fill(16, 3);
	fill(16, 6);
	fill(16, 11);
	fill(16, 16);
	fill(16, 21);
	fill(16, 24);
	fill(16, 25);
	fill(17, 2);
	fill(17, 3);
	fill(17, 5);
	fill(17, 8);
	fill(17, 10);
	fill(17, 11);
	fill(17, 16);
	fill(17, 17);
	fill(17, 19);
	fill(17, 22);
	fill(17, 24);
	fill(17, 25);
	fill(18, 6);
	fill(18, 7);
	fill(18, 20);
	fill(18, 21);
}

function pattern_117P18() {
	initGrid(32, 41);
	fill(2, 39);
	fill(2, 40);
	fill(3, 10);
	fill(3, 11);
	fill(3, 39);
	fill(4, 11);
	fill(4, 37);
	fill(4, 39);
	fill(5, 11);
	fill(5, 13);
	fill(5, 37);
	fill(5, 38);
	fill(6, 12);
	fill(6, 13);
	fill(6, 27);
	fill(6, 29);
	fill(6, 32);
	fill(6, 34);
	fill(7, 16);
	fill(7, 18);
	fill(7, 21);
	fill(7, 23);
	fill(7, 26);
	fill(7, 29);
	fill(7, 32);
	fill(7, 35);
	fill(8, 15);
	fill(8, 18);
	fill(8, 21);
	fill(8, 24);
	fill(8, 27);
	fill(8, 29);
	fill(8, 32);
	fill(8, 34);
	fill(9, 16);
	fill(9, 18);
	fill(9, 21);
	fill(9, 23);
	fill(9, 37);
	fill(9, 38);
	fill(10, 12);
	fill(10, 13);
	fill(10, 37);
	fill(10, 39);
	fill(11, 11);
	fill(11, 13);
	fill(11, 39);
	fill(12, 11);
	fill(12, 39);
	fill(12, 40);
	fill(13, 10);
	fill(13, 11);
	fill(14, 25);
	fill(14, 26);
	fill(15, 21);
	fill(15, 22);
	fill(15, 25);
	fill(15, 26);
	fill(16, 20);
	fill(16, 21);
	fill(17, 21);
	fill(18, 16);
	fill(18, 17);
	fill(19, 16);
	fill(19, 17);
	fill(20, 31);
	fill(20, 32);
	fill(21, 2);
	fill(21, 3);
	fill(21, 31);
	fill(22, 3);
	fill(22, 29);
	fill(22, 31);
	fill(23, 3);
	fill(23, 5);
	fill(23, 29);
	fill(23, 30);
	fill(24, 4);
	fill(24, 5);
	fill(24, 19);
	fill(24, 21);
	fill(24, 24);
	fill(24, 26);
	fill(25, 8);
	fill(25, 10);
	fill(25, 13);
	fill(25, 15);
	fill(25, 18);
	fill(25, 21);
	fill(25, 24);
	fill(25, 27);
	fill(26, 7);
	fill(26, 10);
	fill(26, 13);
	fill(26, 16);
	fill(26, 19);
	fill(26, 21);
	fill(26, 24);
	fill(26, 26);
	fill(27, 8);
	fill(27, 10);
	fill(27, 13);
	fill(27, 15);
	fill(27, 29);
	fill(27, 30);
	fill(28, 4);
	fill(28, 5);
	fill(28, 29);
	fill(28, 31);
	fill(29, 3);
	fill(29, 5);
	fill(29, 31);
	fill(30, 3);
	fill(30, 31);
	fill(30, 32);
	fill(31, 2);
	fill(31, 3);
}

function pattern_145P20() {
	initGrid(23, 30);
	
}

function pattern_124P21() {
	initGrid(27, 38);

}

function pattern_168P22_1() {
	initGrid(24, 35);

}

