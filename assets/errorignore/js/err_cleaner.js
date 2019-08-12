//cards.search
$(document).ready(function(){
  $("#myINPUTSEARCH1").on("keydown", function() {
    var value = $(this).val().toLowerCase();
    $("#myDIVCARDS div.col-md-3").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//cards.search
$(document).ready(function(){
  $("#myINPUTSEARCH2").on("keydown", function() {
    var value = $(this).val().toLowerCase();
    $("#myDIVCARDS2 div.col-md-3").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
//root.remove
$(document).ready(function(){
$(".err-ng-streem").remove();
});