$(document).ready(function(){


	for (i = 0; i<10; i++){
		$('#card_wrapper').append(`<div class="card" id="card_${i+1}">${i+1}</div>`);
		$('#slot_wrapper').append(`<div class="slot" id="slot_${i+1}">${i+1}</div>`);
	}
		

	$(".card").draggable({revert: "invalid"});

	// $(".slot").droppable({ accept: ".card"});
	$(".slot").droppable(function(){
		
		console.log($this).attr('id');
		accept: ".card";


	});

	
	
	
	
	
	// drop: function(event, ui) {
	// 		 console.log("drop");
	// var dropped = ui.draggable;
	// var droppedOn = $(this);
	// $(dropped).detach().css({bottom: 0,left: 0}).appendTo(droppedOn);      
	  
	  
	// 	 }, 
//    over: function(event, elem) {
// 		   $(this).addClass("over");
// 			console.log("over");
//    }
// 		 ,
// 		   out: function(event, elem) {
// 			 $(this).removeClass("over");
// 		   }
			  	




});