randomNumber1 = Math.floor(Math.random()*6 + 1);

let randomDiceImage = "dice"+randomNumber1+".png";

let randomImageSource = "images/"+randomDiceImage;

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

randomNumber2 = Math.floor(Math.random()*6 + 1);
let randomDiceImage1 = "dice"+randomNumber2+".png";

let randomImageSource1 = "images/"+randomDiceImage1;

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource1);

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw!"
}else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 is Win!"
}else{
    document.querySelector("h1").textContent = "Player 2 is Win!🚩"
}