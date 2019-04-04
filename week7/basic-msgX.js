// Create a variable called msg to hold a new message
// window.prompt('Enter your name:','');
var msg1 = window.prompt('Enter your name:','');

// Create a function to update the content of the element whose id attribute has a value of message
function updateMessage1() 
{
  var el = document.getElementById('message');
  // el.textContent = msg1;
  document.write(" <br /> Welcome! ", msg1);
}

// Call the function 1
updateMessage1();

 
