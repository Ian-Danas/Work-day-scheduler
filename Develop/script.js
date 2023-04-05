// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var saveBtn = $('.saveBtn')

  saveBtn.on('click',function(event){
    var parentDiv = event.target.parentElement
    parentDiv = $(parentDiv)
    var hourNum  = parentDiv.attr('id')
    event2Save = parentDiv.children('textarea').val()
    console.log('text in area',event2Save)
    localStorage.setItem(hourNum,event2Save)
  })
  //
  // Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function updatePlannerColor(){
    for (let i = 9; i <= 17; i++) {
      var currentTime = dayjs().hour()
      console.log(currentTime)
      var hour = '#hour-' + i
      var hourEl = $(hour)
      if (i < currentTime){
        hourEl.removeClass('present')
        hourEl.removeClass('future')
        hourEl.addClass('past')
      }if (i == currentTime){
        hourEl.removeClass('past')
        hourEl.removeClass('future')
        hourEl.addClass('present')
      }if(i > currentTime){
        hourEl.removeClass('past')
        hourEl.addClass('present')
        hourEl.addClass('future')
      }
      console.log(hourEl)
      
    }
    
  }
   setInterval(updatePlannerColor,1000)

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
function updatePlannerText(){

  for (let i = 9; i <= 17; i++) {
    var currentTime = dayjs().hour()
    console.log(currentTime)
    var hour = 'hour-' + i
    var hourEl = $('#' +hour)
    console.log(hourEl)
    var plannerText = hourEl.children('.description')
    var storedVal = localStorage.getItem(hour)||''
    plannerText.text(storedVal)
  }
}
updatePlannerText()
// setInterval(updatePlannerText,1000)

  // Add code to display the current date in the header of the page.
  var today = dayjs()
  $('#currentDay').text(today.format('dddd, MMMM D'))

});



// function saveEvent(event){
//   var parentDiv = event.target.parentElement
//   parentDiv = $(parentDiv)
//   var hourNum  = parentDiv.attr('id')
//   console.log(hourNum)
//   event2Save = parentDiv.children('textarea').val()
//   console.log(event2Save)
//   localStorage.setItem(hourNum,event2Save)
// }