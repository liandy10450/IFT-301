"use strict";
var names = [];
var scores = [];
// comment line in Javascript 
//refer to jQuery syntax: https://www.w3schools.com/jquery/jquery_syntax.asp
//$ is to define or access jQuery library.

var $ = function (id) 
{
    return document.getElementById(id); 
} // standard $ function

var add_click = function () 
{
	// get user entries
    // basic jQuery syntax: $(selector).action()
	// Note: jQuery uses CSS syntax to select elements.
	// "name" and "score" are HTML elements
	var name = $("name").value; 
    var score  = parseInt( $("score").value );
	
    // check entries for validity
    if (name == "" || isNaN(score) || score < 0 || score > 100) 
	{
    	alert("You must enter a name and a valid score");
    }
	else 
	{
		names[names.length] = $("name").value; 
		// for example: names[0] = Vince, names[1] = Zach, names[2] = Amy 
		// names[i] = $("name").value; //if I implement a FOR loop 
		scores[scores.length] = parseInt($("score").value);
	    $("name").value = ""; 
	    $("score").value = "";
	}
    $("name").focus();
	// add a clear function to clear the display text area.
	// You have to think and add on which line of code, you would call the clear function
}
var display_click = function () 
{
	var highScore = 0; //declare and initialize
	var lowScore = 100; 
	var scoreTotal = 0;
	var averageScore;
	var textDisplay = "";
	for ( var i = 0; i < scores.length; i++ ){
    	if (scores[i] > highScore) { highScore = scores[i]; } //scores[0] > 0 {highScore = ?}
    	if (scores[i] < lowScore) { lowScore = scores[i]; } //scores[0] < 0 {lowScore = ?}
    	scoreTotal += scores[i]; // scoreTotal = scoreTotal + scores[i];
    }
    averageScore = (scoreTotal / scores.length).toFixed(0); // keep it to two decimal places
	
    for ( var i = 0; i < names.length; i++ )
	{
    	textDisplay += names[i] + ", " + scores[i] + "\n";
    }
    textDisplay += "\nAverage Score = " + averageScore + "\n";
    textDisplay += "High Score = " + highScore + "\n"; // 1 new line
    textDisplay += "Low Score = " + lowScore + "\n\n"; // 2 new lines
    
    $("results").value = textDisplay;	    
	// move focus
    $("name").focus();
}

window.onload = function () {
	$("add").onclick = add_click;
	$("display").onclick = display_click;
	$("name").focus();
}




