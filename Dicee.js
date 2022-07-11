
// first ludo box


var random1=Math.floor(Math.random()*6)+1;
var randomimage1="images/"+"dice"+random1+".png";

var image=document.querySelectorAll("img")[0];

image.setAttribute("src",randomimage1);


// second ludo box


var random2=Math.floor(Math.random()*6)+1;
var randomimage2="images/"+"dice"+random2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);

if(random1>random2){
    document.querySelector("h1").innerHTML="Player1 wins";
}
else if(random2>random1){
    document.querySelector("h1").innerHTML="Player2 wins";
}

else{
    document.querySelector("h1").innerHTML="draw";
}

// my very first game in javascript..........................