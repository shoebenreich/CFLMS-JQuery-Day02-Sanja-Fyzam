
$(document).ready(function () {
	let finished = 0;
	// LOOP FOR CREATING SLOTS AND CARDS (10)
	for (let i = 0; i < 10; i++) {
		$('#card_wrapper').append(`<div class="card" id="card_${i+1}">${i+1}</div>`);
		$('#slot_wrapper').append(`<div class="slot" id="slot_${i+1}">${i+1}</div>`);
	}
	// GIVING ALL CARDS THE ABILITY TO DRAG AROUND
	$(".card").draggable({
		// IF CARD IS DROPPED ANYWHERE OR NOT ACCEPTED -> RETURNS TO ORIGINAL PLACE
		revert: "invalid"
	});

	for (let i = 0; i < 10; i++) {
		// DEFINING ALL SLOT DIVS TO ACCEPT CARDS (ONLY THE ONE WITH THE SAME NUMBER IN ID AS i e.g slot_1 ACCEPTS card_1)
		$(`#slot_${i+1}`).droppable({
			accept: `#card_${i+1}`,
			// DROP > FUNCTION WITH 2 PARAMETERS - EVENT and UI
			drop: function (_event, ui) {
				// REMOVES THE CARD
				ui.draggable.remove();
				// CHANGES SLOT BACKGROUND TO GREEN
				$(this).addClass('green');
				// INCREASE COUNTER
				finished++;
				// WHEN COUNTER REACHES 10 AND ALL CARDS ARE GONE WRAPPER IS REMOVED
				if (finished == 10) {
					$('#card_wrapper').remove();
				};
			}
		});
	};
});