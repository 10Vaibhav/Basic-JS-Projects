let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click",handleClick);
});

function handleClick(){
    alert("I got Clicked");
}