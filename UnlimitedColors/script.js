// generate a random color
const randomColor = function() {

    const hex = "0123456789ABCDEF";

    let color = "#";

    for(let i =0 ; i<6;  i++){

        color += hex[Math.floor(Math.random() * 16)];

    };

    return color;
};

let interValId;

const setColor = function(){
    // document.querySelector("body").style.backgroundColor = randomColor();
    document.body.style.backgroundColor = randomColor();
}

const started = function() {

    if (!interValId){
        interValId = setInterval(setColor,1000);
    }
}

const stopped = function(){

    clearInterval(interValId);
    interValId =  null;
}

document.getElementById("start").addEventListener("click",started);

document.getElementById("stop").addEventListener("click",stopped);