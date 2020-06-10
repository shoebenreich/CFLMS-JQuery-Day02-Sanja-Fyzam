$(document).ready(function () {


	for (let i = 0; i < 10; i++) {
		$('#card_wrapper').append(`<div class="card" id="card_${i+1}">${i+1}</div>`);
		$('#slot_wrapper').append(`<div class="slot" id="slot_${i+1}">${i+1}</div>`);
	}


	$(".card").draggable({revert: "invalid"});

	for (let i = 0; i < 10; i++){
		$(`#slot_${i+1}`).droppable({accept: `#card_${i+1}`});
	};
});