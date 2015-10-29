$(document).ready(function() {
$("li")
    .css("display", "flex")
    .hide()

	$("li").each(function(index) {

	    $(this).delay(1500*index).slideDown("3000",function(){
	    	
	    	console.log(this);
	    	if ((1500 *3) <= (1500*index)){
	    		console.log("YES");
	    		// here i will make button highlight and say yes
	    	}
	    });  
	});
});