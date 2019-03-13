var unlucky = 0
var lucky = 0
$(document).ready(function(){
  $("form#fortune").submit(function(){
    event.preventDefault()
    $("#bad").show();
    $("input:checkbox[name=unlucky-event]:checked").each(function(){
      unlucky++;
    });
    $("#good").show();
    $("input:checkbox[name=lucky-event]:checked").each(function(){
      lucky++;
    });
    $("#fortune").hide();
    if ((unlucky >= 4) && (lucky <= 3)){
      $("#unlucky").show();
      $("#lucky").hide();
      $("#inbetween").hide();
    };
    if ((lucky >= 4) && (unlucky <= 3)){
      $("#unlucky").hide();
      $("#lucky").show();
      $("#inbetween").hide();
    };
    if (lucky === unlucky){
      $("#unlucky").hide();
      $("#lucky").hide();
      $("#inbetween").show();
    };
  });
})
