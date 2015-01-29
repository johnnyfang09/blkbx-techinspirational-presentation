$(document).ready(function(){
	initSlides();
});

function initSlides(){
	console.log("initSlides");

	// listen for keyboard press (left and right arrows only)
	$(document).keydown(function(e) {
	    switch(e.which) {
	        
	        case 37: // left
	        	showPrevSlide();
	        	break;

	        case 39: // right
	        	showNextSlide();
	        	break;

	        default: 
	        	break; // exit this handler for other keys
    	}
	});
};

function showPrevSlide(){
	console.log("showPrevSlide");

	var posOfSelected = $(".content").index( $(".content.selected") );

	console.log("posOfSelected", posOfSelected);

	if(posOfSelected > 0){
		console.log("go show prev");

		// remove "selected" from current showing
		$(".content.selected").removeClass("selected");

		// move "selected" to previous sibling
		$(".content:nth-child(" + (posOfSelected) + ")" ).addClass("selected");

		//fade in the prev slide
		$(".content.selected").css({"opacity":0}).stop(true, false).animate({"opacity":1});

	}


}

function showNextSlide(){
	console.log("showNextSlide");

	var posOfSelected = $(".content").index( $(".content.selected") );
	var totalSlides = $(".content").length;

	console.log("posOfSelected", posOfSelected);
	console.log("totalSlides", totalSlides);

	if(posOfSelected < (totalSlides - 1) ){
		console.log("go show next");

		// remove "selected" from current showing
		$(".content.selected").removeClass("selected");

		// move "selected" to next sibling
		$(".content:nth-child(" + (posOfSelected + 2) + ")" ).addClass("selected");

		// fade in the new slide
		$(".content.selected").css({"opacity":0}).stop(true, false).animate({"opacity":1});

	}

}

