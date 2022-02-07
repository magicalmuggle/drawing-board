/** @type {HTMLCanvasElement} */
let canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d")
let painting = false
radius = 6

canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight

ctx.fillStyle = "black"
ctx.strokeStyle = "none"

canvas.onmousedown = () => {
  painting = true
}

canvas.onmouseup = () => {
  painting = false
}

canvas.onmousemove = (e) => {
  if (painting) {
    ctx.beginPath()
    ctx.stroke()
    ctx.arc(e.clientX, e.clientY, radius, 0, 2 * Math.PI)
    ctx.fill()
  }
}



// let ctx = canvas.getContext("2d");

// let painting = false


// ctx.fillStyle = "black";
// ctx.strokeStyle = 'none'

// canvas.onmousedown = () => {
//   painting = true
// }

// canvas.onmousemove = (e) => {
//   if (painting === true) {
//     ctx.beginPath();
//     ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI);
//     ctx.stroke();
//     ctx.fill();
//   } else {
//     console.log('什么都不做')
//   }
// }

// canvas.onmouseup = () => {
//   painting = false
// }