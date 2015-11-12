$(document).ready(function(){
  
  $('li').hover(function(){
    $(this).fadeTo(300, 0.25);
  }, function(){
     $(this).fadeTo(300, 1);

  });
});

$(function(){
   $('li').click(function () {
      $(this).text(function(i, text){
          return text === "CLICKY!" ? "" : "CLICKY!";
      })
   });
})