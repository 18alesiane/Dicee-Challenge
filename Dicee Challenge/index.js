var randomNumber1= Math.floor(Math.random() * 6)+1;
var randomNumber2= Math.floor(Math.random() * 6)+1;

var randomDiceImage1= "images/dice"+randomNumber1+".png";
var randomDiceImage2= "images/dice"+randomNumber2+".png";

var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];

img1.setAttribute("src",randomDiceImage1);
img2.setAttribute("src",randomDiceImage2);

if(randomDiceImage1>randomDiceImage2){
    document.querySelector("h1").innerHTML="Player1 wins!";
}
else if(randomDiceImage2>randomDiceImage1){
    document.querySelector("h1").innerHTML="Player2 wins!";
}
else{
    document.querySelector("h1").innerHTML="It's a draw!"
}