/* ================================================== */
//
//	Grovery Analytics | Advanced Event Triggers
//
//	This plugin is meant to be a supplement to the primary 
//	Grovery Analytics setup, and is meant to trigger the base 
//	plugin's functions. Base Grovery Anlytics Plugin is required.
//
/* ================================================== */



/*Define Functions*/
	function analyticsFailedToClick(){
	   var elements = document.querySelectorAll('[data-analytics-proximity]');
	   elements.forEach(element => {
	   	
	   	//arm the function
	   	element.addEventListener('mouseover', function() {
				element.setAttribute("data-analytics-proximity-state", "true");
	   	});
	   	
	   	//dis-arm the function
	   	element.addEventListener('click', function() {
	   		element.setAttribute("data-analytics-proximity-state", "false");
	   	});
	   	
	   	//trigger the function
	   	element.addEventListener('mouseout', function() {
	   		let state = element.getAttribute('data-analytics-proximity-state');
	   		if(state == "true"){
	   			console.log("user hovered near but didn't click");
	   		} else {
	   			console.log("user clicked the button before they moved away");
	   		}
	   	});

	   }); 
	}

/*Activate Functions*/
	document.addEventListener("DOMContentLoaded", function() {
	   analyticsFailedToClick();
	});