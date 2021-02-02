document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  sayHello(greet(timeString))
}


function sayHello(msg){
   alert (msg)
}

function greet(timeStr){
  let time = parseInt(timeStr)

  if (time < 12){return "good morning"}
  if (time > 18){return "good night"}
  return "good afternoon"
}