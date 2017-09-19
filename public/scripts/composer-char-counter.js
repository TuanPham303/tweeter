/*jshint esversion: 6*/
$(() => {
  $("textarea").keyup(function(){
    var len = this.value.length;
    var remainChar = 140 - len;
    $(".counter").html(remainChar);
    if(remainChar < 0){
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "#000");
    }
  });
});
 
