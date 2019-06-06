$(document).ready(function() {
  var person = parseInt(prompt("How old are you?"));

  if (person > 18) {
    $('#voting-candidates').show();
  } else if (person === 18) {
    alert("Now don't go crazy!");
    $('#voting-candidates').show();
  } else {
    $('#under-21').show();
  }
});
