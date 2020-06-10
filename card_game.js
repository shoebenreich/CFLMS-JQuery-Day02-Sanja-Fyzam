$(document).ready(function () {
	var finished = 0;

	for (let i = 0; i < 10; i++) {
		$('#card_wrapper').append(`<div class="card" id="card_${i+1}">${i+1}</div>`);
		$('#slot_wrapper').append(`<div class="slot" id="slot_${i+1}">${i+1}</div>`);
	}


	$(".card").draggable({
		revert: "invalid"
	});

	for (let i = 0; i < 10; i++) {
		$(`#slot_${i+1}`).droppable({
			accept: `#card_${i+1}`,
			drop: function (event, ui) {
				ui.draggable.remove();
				$(this).addClass('green');
				finished++;
				console.log(finished);
				if (finished == 10) {
					$('#card_wrapper').remove();
				}
			}
		});
	};



});