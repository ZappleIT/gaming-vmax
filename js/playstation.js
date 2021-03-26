imageArray = new Array(
    "img/playstation/Playstation 4.jpg",
    "img/playstation/PlayStation 3 PHAT.jpg",
    "img/playstation/PlayStation 3 Slim.jpg",
    "img/playstation/PlayStation 3 Ultra.jpg",
    "img/playstation/PSP 1000.jpg",
    "img/playstation/PSP GO.jpg",
    "img/playstation/PSP STREET.png",
    "img/playstation/PlayStation Vita.jpg"
); 
altArray = new Array(
    "Playstation 4", 
    "Playstation 3 PHAT", 
    "Playstation 3 SLIM",
    "Playstation 3 ULTRA",
    "PSP 1000/2000/3000", 
    "PSP GO",
    "PSP STREET",
    "PlayStation Vita"
);

function changeTest () { 
var Index = document.menuForm.select1.options[document.menuForm.select1.selectedIndex].value; 
document.testStar.src = imageArray[Index]; 
document.testStar.alt = altArray[Index];	 

if (Index == "0") // Playstation 4 
  {
document.getElementById("CHANGE1").innerHTML="";
var str=document.getElementById("CHANGE1").innerHTML; 
var n=str.replace("","120 SGD");
document.getElementById("CHANGE1").innerHTML=n;

document.getElementById("CHANGE2").innerHTML="";
var str=document.getElementById("CHANGE2").innerHTML; 
var n=str.replace("","140 SGD");
document.getElementById("CHANGE2").innerHTML=n;

document.getElementById("CHANGE3").innerHTML="";
var str=document.getElementById("CHANGE3").innerHTML; 
var n=str.replace("","120 SGD");
document.getElementById("CHANGE3").innerHTML=n;

document.getElementById("CHANGE4").innerHTML="";
var str=document.getElementById("CHANGE4").innerHTML; 
var n=str.replace("","120 SGD");
document.getElementById("CHANGE4").innerHTML=n;

document.getElementById("CHANGE5").innerHTML="";
var str=document.getElementById("CHANGE5").innerHTML; 
var n=str.replace("","60 - 120 SGD");
document.getElementById("CHANGE5").innerHTML=n;

document.getElementById("CHANGE6").innerHTML="";
var str=document.getElementById("CHANGE6").innerHTML; 
var n=str.replace("","50 - 90 SGD");
document.getElementById("CHANGE6").innerHTML=n;

document.getElementById("CHANGE7").innerHTML="";
var str=document.getElementById("CHANGE7").innerHTML; 
var n=str.replace("","90 SGD");
document.getElementById("CHANGE7").innerHTML=n;

document.getElementById("CHANGE8").innerHTML="";
var str=document.getElementById("CHANGE8").innerHTML; 
var n=str.replace("","20 SGD");
document.getElementById("CHANGE8").innerHTML=n;

document.getElementById("CHANGE9").innerHTML="";
var str=document.getElementById("CHANGE9").innerHTML; 
var n=str.replace("","170 SGD");
document.getElementById("CHANGE9").innerHTML=n;

document.getElementById("CHANGE10").innerHTML="";
var str=document.getElementById("CHANGE10").innerHTML; 
var n=str.replace("","-");
document.getElementById("CHANGE10").innerHTML=n;

document.getElementById("CHANGE11").innerHTML="";
var str=document.getElementById("CHANGE11").innerHTML; 
var n=str.replace("","-");
document.getElementById("CHANGE11").innerHTML=n;

document.getElementById("CHANGE12").innerHTML="";
var str=document.getElementById("CHANGE12").innerHTML; 
var n=str.replace("","35 SGD");
document.getElementById("CHANGE12").innerHTML=n;

document.getElementById("CHANGE13").innerHTML="";
var str=document.getElementById("CHANGE13").innerHTML; 
var n=str.replace("","50 - 80 SGD");
document.getElementById("CHANGE13").innerHTML=n;

document.getElementById("CHANGE14").innerHTML="";
var str=document.getElementById("CHANGE14").innerHTML; 
var n=str.replace("","45 SGD");
document.getElementById("CHANGE14").innerHTML=n;

document.getElementById("CHANGE15").innerHTML="";
var str=document.getElementById("CHANGE15").innerHTML; 
var n=str.replace("","1TR - 120 SGD");
document.getElementById("CHANGE15").innerHTML=n;

document.getElementById("CHANGE16").innerHTML="";
var str=document.getElementById("CHANGE16").innerHTML; 
var n=str.replace("","-");
document.getElementById("CHANGE16").innerHTML=n;

document.getElementById("CHANGE17").innerHTML="";
var str=document.getElementById("CHANGE17").innerHTML; 
var n=str.replace("","90 SGD");
document.getElementById("CHANGE17").innerHTML=n;

document.getElementById("CHANGE18").innerHTML="";
var str=document.getElementById("CHANGE18").innerHTML; 
var n=str.replace("","45 SGD");
document.getElementById("CHANGE18").innerHTML=n;
  } 
else if (Index == "1") // Playstation 3
{
document.getElementById("CHANGE1").innerHTML="";
var str=document.getElementById("CHANGE1").innerHTML; 
var n=str.replace("","80 SGD");
document.getElementById("CHANGE1").innerHTML=n;

document.getElementById("CHANGE2").innerHTML="";
var str=document.getElementById("CHANGE2").innerHTML; 
var n=str.replace("","80 SGD");
document.getElementById("CHANGE2").innerHTML=n;

document.getElementById("CHANGE3").innerHTML="";
var str=document.getElementById("CHANGE3").innerHTML; 
var n=str.replace("","80 SGD");
document.getElementById("CHANGE3").innerHTML=n;

document.getElementById("CHANGE4").innerHTML="";
var str=document.getElementById("CHANGE4").innerHTML; 
var n=str.replace("","80 SGD");
document.getElementById("CHANGE4").innerHTML=n;

document.getElementById("CHANGE5").innerHTML="";
var str=document.getElementById("CHANGE5").innerHTML; 
var n=str.replace("","PHAT - No more chipset SLIM - 110 SGD");
document.getElementById("CHANGE5").innerHTML=n;

document.getElementById("CHANGE6").innerHTML="";
var str=document.getElementById("CHANGE6").innerHTML; 
var n=str.replace("","50 - 90 SGD");
document.getElementById("CHANGE6").innerHTML=n;

document.getElementById("CHANGE7").innerHTML="";
var str=document.getElementById("CHANGE7").innerHTML; 
var n=str.replace("","90 SGD");
document.getElementById("CHANGE7").innerHTML=n;

document.getElementById("CHANGE8").innerHTML="";
var str=document.getElementById("CHANGE8").innerHTML; 
var n=str.replace("","20 SGD");
document.getElementById("CHANGE8").innerHTML=n;

document.getElementById("CHANGE9").innerHTML="";
var str=document.getElementById("CHANGE9").innerHTML; 
var n=str.replace("","PHAT - 120 SGD SLIM - 140 SGD");
document.getElementById("CHANGE9").innerHTML=n;

document.getElementById("CHANGE10").innerHTML="";
var str=document.getElementById("CHANGE10").innerHTML; 
var n=str.replace("","-");
document.getElementById("CHANGE10").innerHTML=n;

document.getElementById("CHANGE11").innerHTML="";
var str=document.getElementById("CHANGE11").innerHTML; 
var n=str.replace("","-");
document.getElementById("CHANGE11").innerHTML=n;

document.getElementById("CHANGE12").innerHTML="";
var str=document.getElementById("CHANGE12").innerHTML; 
var n=str.replace("","35 SGD");
document.getElementById("CHANGE12").innerHTML=n;

document.getElementById("CHANGE13").innerHTML="";
var str=document.getElementById("CHANGE13").innerHTML; 
var n=str.replace("","50 - 80 SGD");
document.getElementById("CHANGE13").innerHTML=n;

document.getElementById("CHANGE14").innerHTML="";
var str=document.getElementById("CHANGE14").innerHTML; 
var n=str.replace("","45 SGD");
document.getElementById("CHANGE14").innerHTML=n;

document.getElementById("CHANGE15").innerHTML="";
var str=document.getElementById("CHANGE15").innerHTML; 
var n=str.replace("","1TR - 120 SGD");
document.getElementById("CHANGE15").innerHTML=n;

document.getElementById("CHANGE16").innerHTML="";
var str=document.getElementById("CHANGE16").innerHTML; 
var n=str.replace("","-");
document.getElementById("CHANGE16").innerHTML=n;

document.getElementById("CHANGE17").innerHTML="";
var str=document.getElementById("CHANGE17").innerHTML; 
var n=str.replace("","90 SGD");
document.getElementById("CHANGE17").innerHTML=n;

document.getElementById("CHANGE18").innerHTML="";
var str=document.getElementById("CHANGE18").innerHTML; 
var n=str.replace("","45 SGD");
document.getElementById("CHANGE18").innerHTML=n;
 }
else if (Index == "2") // Psp 3000
  {
document.getElementById("CHANGE1").innerHTML="";
var str=document.getElementById("CHANGE1").innerHTML; 
var n=str.replace("","70 SGD");
document.getElementById("CHANGE1").innerHTML=n;

document.getElementById("CHANGE2").innerHTML="";
var str=document.getElementById("CHANGE2").innerHTML; 
var n=str.replace("","70 SGD");
document.getElementById("CHANGE2").innerHTML=n;

document.getElementById("CHANGE3").innerHTML="";
var str=document.getElementById("CHANGE3").innerHTML; 
var n=str.replace("","70 SGD");
document.getElementById("CHANGE3").innerHTML=n;

document.getElementById("CHANGE4").innerHTML="";
var str=document.getElementById("CHANGE4").innerHTML; 
var n=str.replace("","70 SGD");
document.getElementById("CHANGE4").innerHTML=n;

document.getElementById("CHANGE5").innerHTML="";
var str=document.getElementById("CHANGE5").innerHTML; 
var n=str.replace("","60 - 80 SGD");
document.getElementById("CHANGE5").innerHTML=n;

document.getElementById("CHANGE6").innerHTML="";
var str=document.getElementById("CHANGE6").innerHTML; 
var n=str.replace("","50 - 70 SGD");
document.getElementById("CHANGE6").innerHTML=n;

document.getElementById("CHANGE7").innerHTML="";
var str=document.getElementById("CHANGE7").innerHTML; 
var n=str.replace("","70 SGD");
document.getElementById("CHANGE7").innerHTML=n;

document.getElementById("CHANGE8").innerHTML="";
var str=document.getElementById("CHANGE8").innerHTML; 
var n=str.replace("","20 SGD");
document.getElementById("CHANGE8").innerHTML=n;

document.getElementById("CHANGE9").innerHTML="";
var str=document.getElementById("CHANGE9").innerHTML; 
var n=str.replace("","80 SGD");
document.getElementById("CHANGE9").innerHTML=n;

document.getElementById("CHANGE10").innerHTML="";
var str=document.getElementById("CHANGE10").innerHTML; 
var n=str.replace("","35");
document.getElementById("CHANGE10").innerHTML=n;

document.getElementById("CHANGE11").innerHTML="";
var str=document.getElementById("CHANGE11").innerHTML; 
var n=str.replace("","35");
document.getElementById("CHANGE11").innerHTML=n;

document.getElementById("CHANGE12").innerHTML="";
var str=document.getElementById("CHANGE12").innerHTML; 
var n=str.replace("","35 SGD");
document.getElementById("CHANGE12").innerHTML=n;

document.getElementById("CHANGE13").innerHTML="";
var str=document.getElementById("CHANGE13").innerHTML; 
var n=str.replace("","50 - 80 SGD");
document.getElementById("CHANGE13").innerHTML=n;

document.getElementById("CHANGE14").innerHTML="";
var str=document.getElementById("CHANGE14").innerHTML; 
var n=str.replace("","45 SGD");
document.getElementById("CHANGE14").innerHTML=n;

document.getElementById("CHANGE15").innerHTML="";
var str=document.getElementById("CHANGE15").innerHTML; 
var n=str.replace("","-");
document.getElementById("CHANGE15").innerHTML=n;

document.getElementById("CHANGE16").innerHTML="";
var str=document.getElementById("CHANGE16").innerHTML; 
var n=str.replace("","65");
document.getElementById("CHANGE16").innerHTML=n;

document.getElementById("CHANGE17").innerHTML="";
var str=document.getElementById("CHANGE17").innerHTML; 
var n=str.replace("","90 SGD");
document.getElementById("CHANGE17").innerHTML=n;

document.getElementById("CHANGE18").innerHTML="";
var str=document.getElementById("CHANGE18").innerHTML; 
var n=str.replace("","45 SGD");
document.getElementById("CHANGE18").innerHTML=n;
 }
else if (Index == "3") // Psp Vita
  {
document.getElementById("CHANGE1").innerHTML="";
var str=document.getElementById("CHANGE1").innerHTML; 
var n=str.replace("","80 SGD");
document.getElementById("CHANGE1").innerHTML=n;

document.getElementById("CHANGE2").innerHTML="";
var str=document.getElementById("CHANGE2").innerHTML; 
var n=str.replace("","90 SGD");
document.getElementById("CHANGE2").innerHTML=n;

document.getElementById("CHANGE3").innerHTML="";
var str=document.getElementById("CHANGE3").innerHTML; 
var n=str.replace("","80 SGD");
document.getElementById("CHANGE3").innerHTML=n;

document.getElementById("CHANGE4").innerHTML="";
var str=document.getElementById("CHANGE4").innerHTML; 
var n=str.replace("","80 SGD");
document.getElementById("CHANGE4").innerHTML=n;

document.getElementById("CHANGE5").innerHTML="";
var str=document.getElementById("CHANGE5").innerHTML; 
var n=str.replace("","60 - 90 SGD");
document.getElementById("CHANGE5").innerHTML=n;

document.getElementById("CHANGE6").innerHTML="";
var str=document.getElementById("CHANGE6").innerHTML; 
var n=str.replace("","50 - 80 SGD");
document.getElementById("CHANGE6").innerHTML=n;

document.getElementById("CHANGE7").innerHTML="";
var str=document.getElementById("CHANGE7").innerHTML; 
var n=str.replace("","80 SGD");
document.getElementById("CHANGE7").innerHTML=n;

document.getElementById("CHANGE8").innerHTML="";
var str=document.getElementById("CHANGE8").innerHTML; 
var n=str.replace("","20 SGD");
document.getElementById("CHANGE8").innerHTML=n;

document.getElementById("CHANGE9").innerHTML="";
var str=document.getElementById("CHANGE9").innerHTML; 
var n=str.replace("","110 SGD");
document.getElementById("CHANGE9").innerHTML=n;

document.getElementById("CHANGE10").innerHTML="";
var str=document.getElementById("CHANGE10").innerHTML; 
var n=str.replace("","65");
document.getElementById("CHANGE10").innerHTML=n;

document.getElementById("CHANGE11").innerHTML="";
var str=document.getElementById("CHANGE11").innerHTML; 
var n=str.replace("","35");
document.getElementById("CHANGE11").innerHTML=n;

document.getElementById("CHANGE12").innerHTML="";
var str=document.getElementById("CHANGE12").innerHTML; 
var n=str.replace("","35 SGD");
document.getElementById("CHANGE12").innerHTML=n;

document.getElementById("CHANGE13").innerHTML="";
var str=document.getElementById("CHANGE13").innerHTML; 
var n=str.replace("","50 - 80 SGD");
document.getElementById("CHANGE13").innerHTML=n;

document.getElementById("CHANGE14").innerHTML="";
var str=document.getElementById("CHANGE14").innerHTML; 
var n=str.replace("","45 SGD");
document.getElementById("CHANGE14").innerHTML=n;

document.getElementById("CHANGE15").innerHTML="";
var str=document.getElementById("CHANGE15").innerHTML; 
var n=str.replace("","-");
document.getElementById("CHANGE15").innerHTML=n;

document.getElementById("CHANGE16").innerHTML="";
var str=document.getElementById("CHANGE16").innerHTML; 
var n=str.replace("","115");
document.getElementById("CHANGE16").innerHTML=n;

document.getElementById("CHANGE17").innerHTML="";
var str=document.getElementById("CHANGE17").innerHTML; 
var n=str.replace("","90 SGD");
document.getElementById("CHANGE17").innerHTML=n;

document.getElementById("CHANGE18").innerHTML="";
var str=document.getElementById("CHANGE18").innerHTML; 
var n=str.replace("","45 SGD");
document.getElementById("CHANGE18").innerHTML=n;
 }
else {
document.getElementById("CHANGE").innerHTML="";
 var str=document.getElementById("CHANGE").innerHTML; 
var n=str.replace("","15 SGD");
document.getElementById("CHANGE").innerHTML=n; }

}