$(document).ready(function(){
  $("form#inputtedNumber").submit(function(event){
  event.preventDefault();
  var userInput = parseInt($("input#userInput").val());

  for (var i=1; i <= userInput; i++)
  {
      if (i % 3 != 0 && i % 5 != 0) result=(i)
      if (i % 3 === 0) result = "ping"
      if (i % 5 === 0) result = "pong"
      if (i % 15 === 0) result = "pingpong"

      $("ol#display").append(result + "</br>");
    }
  });
  $("button#btn").click(function(){
    $("#display").empty()
  })
});
