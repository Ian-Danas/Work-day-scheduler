// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
localStorage.setItem('hour-9','')
localStorage.setItem('hour-10','')
localStorage.setItem('hour-11','')
localStorage.setItem('hour-12','')
localStorage.setItem('hour-1','')
localStorage.setItem('hour-2','')
localStorage.setItem('hour-3','')
localStorage.setItem('hour-4','')
localStorage.setItem('hour-5','')
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var saveBtn = $('.saveBtn')
  saveBtn.on('click',function(event){
    var parentDiv = event.target.parentElement
    console.log('parent element',parentDiv)
    parentDiv = $(parentDiv)
    var hourNum  = parentDiv.attr('id')
    console.log('hour id',hourNum)
    event2Save = parentDiv.children('textarea').val()
    console.log('text in area',event2Save)
    localStorage.setItem(hourNum,event2Save)
  })
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
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