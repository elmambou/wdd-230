/* Update number of visits count on the page. It works only when you open the page, exclusing page refresh. 

function visitCount() {
    var numberOfvisits = document.getElementById('numberOfvisits');
   var visits = Number(localStorage.getItem('visitCount'));
    var current = Boolean(sessionStorage.getItem('session'));
    if (!current) {
      visits++;
    }
    numberOfvisits.innerHTML = `You have visited this page  <strong>${visits}</strong>  times.`;
    localStorage.setItem('visitCount', visits);
    sessionStorage.setItem('session', false);
   
  }    
  visitCount()     */



// This function returns the number of visits even when you refresh the page... 

function displayCounter() {
    // check if the localStorage object is supported by the browser
    if ('localStorage' in window && window['localStorage'] !== null) {
        // if the counter has been defined, increment its value, // otherwise, set it to 0
        ('counter' in localStorage && localStorage['counter'] !== null) ? localStorage['counter']++ : localStorage['counter'] = 0;
        var numberOfvisits = document.getElementById('numberOfvisits');
        if (!numberOfvisits) { return };
        // display the counter on screen
        numberOfvisits.innerHTML = `You have visited this page  <strong>${localStorage['counter']}</strong>  times.`;
    }
}
// call the 'displayCounter()' function when the web page is loaded
window.onload = function () {
    displayCounter();}