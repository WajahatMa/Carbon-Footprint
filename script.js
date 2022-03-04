$(".a1").hide();
$(".a2").hide();
$(".b1").hide();
$(".b2").hide();
$(".c1").hide();
$(".c2").hide();
$(".d1").hide();
$(".d2").hide();
$(".e1").hide();
$(".e2").hide();
$(".sub2").hide();
$(".sub3").hide();
$(".sub4").hide();
$(".sub5").hide();
$(".con1").hide();
$(".con2").hide();
$(".con3").hide();
$(".con4").hide();
$(".con5").hide();
$(".q2").hide();
$(".q3").hide();
$(".q4").hide();
$(".q5").hide();
$(".one").hide();
$(".two").hide();
$(".two").hide();
$(".end").hide();

$(".con1").click(function() {
    $(".q2").show();
    $(".a1").hide();
    $(".a2").hide();
    $(".con1").hide();
    $(".sub2").show();
});
$(".con2").click(function() {
    $(".q3").show();
    $(".b1").hide();
    $(".b2").hide();
    $(".con2").hide();
     $(".sub3").show();
});
$(".con3").click(function() {
    $(".q4").show();
    $(".c1").hide();
    $(".c2").hide();
    $(".con3").hide();
     $(".sub4").show();
});
$(".con4").click(function() {
    $(".q5").show();
    $(".d1").hide();
    $(".d2").hide();
    $(".con4").hide();
     $(".sub5").show();
});
$(".con5").click(function() {
    $(".end").show();
    $(".e1").hide();
    $(".e2").hide();
    $(".con5").hide();
});
$(".sub1").click(function() {
var a1 = document.getElementById("q1_1");
var a2 = document.getElementById("q1_2");
    
    if (a1.checked===true) {
         $(".q1").hide();
         $(".a1").show();
         $(".con1").show();
         $(".sub1").hide();
            }
     if (a2.checked===true) {
         $(".q1").hide();
         $(".a2").show();
         $(".sub1").hide();
         $(".con1").show();
            }
  
     
});
$(".sub2").click(function() {
var b1 = document.getElementById("q2_1");
var b2 = document.getElementById("q2_2"); 
  if (b1.checked===true) {
         $(".q2").hide();
         $(".b1").show();
         $(".con2").show();
         $(".sub2").hide();
            }
     if (b2.checked===true) {
         $(".q2").hide();
         $(".b2").show();
         $(".sub2").hide();
         $(".con2").show();
            }
});
$(".sub3").click(function() {
var c1 = document.getElementById("q3_1");
var c2 = document.getElementById("q3_2");
  if (c1.checked===true) {
         $(".q3").hide();
         $(".c1").show();
         $(".con3").show();
         $(".sub3").hide();
            }
     if (c2.checked===true) {
         $(".q3").hide();
         $(".c2").show();
         $(".sub3").hide();
         $(".con3").show();
            }
});
 $(".sub4").click(function() {
var d1 = document.getElementById("q4_1");
var d2 = document.getElementById("q4_2");
  if (d1.checked===true) {
         $(".q4").hide();
         $(".d1").show();
         $(".con4").show();
         $(".sub4").hide();
            }
     if (d2.checked===true) {
         $(".q4").hide();
         $(".d2").show();
         $(".sub4").hide();
         $(".con4").show();
            }
});
 $(".sub5").click(function() {
var e1 = document.getElementById("q5_1");
var e2 = document.getElementById("q5_2");
  if (e1.checked===true) {
         $(".q5").hide();
         $(".e1").show();
         $(".con5").show();
         $(".sub5").hide();
            }
     if (e2.checked===true) {
         $(".q5").hide();
         $(".e2").show();
         $(".sub5").hide();
         $(".con5").show();
            }
});
 
