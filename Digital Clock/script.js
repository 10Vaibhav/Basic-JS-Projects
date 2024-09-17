//const clock = document.querySelector("#clock");
const clock = document.getElementById("clock")
setInterval(function () {
  const date = new Date();

  const time = date.toLocaleTimeString();

  clock.innerHTML = time;
}, 1000);
