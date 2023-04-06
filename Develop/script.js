// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // Added a listener for click events on the save button. This code uses
  // the id in the containing time-block as a key to save the user input in
  // local storage. 
  var saveBtn = $('.saveBtn')

  saveBtn.on('click',function(event){
    var event2Save = $(this).siblings('.description').val()
    var hourNum  = $(this).parent().attr('id')
    localStorage.setItem(hourNum,event2Save)
  })

  //
  // code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  var timeBlocks = $('.time-block')
  function updatePlannerColor(){
    for (let i = 0; i < timeBlocks.length; i++) {
      var currentTime = dayjs().hour()
      var element = $(timeBlocks[i])
      var hourEl = element.attr('id')
      var hour = hourEl.split('-')[1]
      if (hour < currentTime){
        element.removeClass('present')
        element.removeClass('future')
        element.addClass('past')
      }if (hour == currentTime){
        element.removeClass('past')
        element.removeClass('future')
        element.addClass('present')
      }if(hour > currentTime){
        element.removeClass('past')
        element.addClass('present')
        element.addClass('future')
      }
      
    }

  }
   updatePlannerColor()

  //
  // code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
function updatePlannerText(){
  for (let i = 0; i <= timeBlocks.length; i++) {
    var element = $(timeBlocks[i])
    var hour = element.attr('id')
    var plannerText = element.children('.description')
    var storedVal = localStorage.getItem(hour)||''
    plannerText.text(storedVal)
  }
}
updatePlannerText()
  // code to display the current date in the header of the page.
  var today = dayjs()
  $('#currentDay').text(today.format('dddd, MMMM D'))

});


