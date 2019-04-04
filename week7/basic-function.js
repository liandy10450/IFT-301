// Create a variable called msg to hold a new message
var msg1 = '1) Display current day and time';
var msg2 = '2) Countdown for Christmas';
var tot = 0; 
var num1 = 5.26; 
var num2 = 10.55;
var msg3 = '3) Adding two numbers through the code';
var msg4 = '4) Calculate your gross pay';
// var today = new Date();
 
// Display current day and time
 
function updateMessage1() 
{
 var el = document.getElementById('message1');
 el.textContent = msg1;
 var today = new Date();
 var day = today.getDay();
 var days = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
 var hour = today.getHours();
 var minute = today.getMinutes();
 var second = today.getSeconds();
 document.write(" <br /> Today is : " + days[day] + "," + hour + ":" + minute + ":" + second);
 document.write(" <br /> ---------------------------------");
}
// Call the function 1
updateMessage1();

// Calculate the number of days left for Christmas
var el = document.getElementById('message2');
el.textContent = msg2;
var today = new Date();
var xmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(xmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
document.write(" <br />" + Math.ceil((xmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");
document.write(" <br /> ---------------------------------");

 // Total two numbers
function updateMessage3() 
{
  var el = document.getElementById('message3');
  el.textContent = msg3;
  var tot = num1 + num2; // 15.81 should be the answer
  document.write(" <br /> Number 1 = ", num1);
  document.write(" <br /> Number 2 = ", num2);
  document.write(" <br /> Total = ", tot);
  document.write(" <br /> ---------------------------------");
}

// Call the function 3
updateMessage3();


// list the family names
var i;
var colors = new Array(6)
  colors[0] = "Violet"
  colors[1] = "Indigo"
  colors[2] = "Blue"
  colors[3] = "Green"
  colors[4] = "Yellow"
  colors[5] = "Orange"
  colors[6] = "Red"

  var colorlist = [1, 2, 3, 4, 5, 6, 7]
   document.write(" <br /> ");
   for (i=0; i<=6; i++)
  {
     document.write(colors[i] + " --> " + colorlist[i] + "<br>")
  }
  
// document.write(" <br /> ---------------------------------");  
