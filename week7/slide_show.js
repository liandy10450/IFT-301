"use strict";
var $ = function (id) { 
	return document.getElementById(id); 
}
window.onload = function () {
    var slidesNode = $("slides");    
    var captionNode = $("caption");
    var imageNode = $("slide");
    var nextButton = $("next");
    var previousButton = $("previous");
    var image, imageCounter = 0;
                
	// https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp	
    // The following statement will get all elements in the doc with the specified tag name
	// here the tag name is "img".	
    var slides = slidesNode.getElementsByTagName("img");

	// Attach event handlers
    nextButton.onclick = function () {
		image = slides[imageCounter]; // show the next image
		imageCounter = (imageCounter + 1) % slides.length; // increment counter
		// in the above statement, you can use a modulus operator (%) 
		// Above, I have used % operator instead of checking if counter === slides.length.
		if (imageCounter > 3) {imageCounter = 0}; //counter set to 3.
        imageNode.src = image.src;
        captionNode.firstChild.nodeValue = image.alt; // Get the node value of the first child of the element "Caption" 
		// Refer more at https://www.w3schools.com/jsref/prop_node_nodevalue.asp
    };
    
    previousButton.onclick = function () {
        imageCounter = (imageCounter - 1) % slides.length; // decrement counter to goto prev.
        if (imageCounter < 0) {imageCounter = 2}; //slides[0], [1], [2] images.
	    image = slides[imageCounter]; 
	    imageNode.src = image.src;
	    captionNode.firstChild.nodeValue = image.alt;
    };
    
}
