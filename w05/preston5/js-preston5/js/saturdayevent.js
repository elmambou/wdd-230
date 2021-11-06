// Set the Date variable
var date  = new Date();

// Get the day's number
var day = date.getDay();

// IF statement to display banner
if (day == 6) {
   document.getElementsByClassName("pancake")[0].style.display = "block";
} else {
   null;
}