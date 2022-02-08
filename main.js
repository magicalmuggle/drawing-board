/** @type {HTMLCanvasElement} */
let canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d")
let painting = false
let radius = 6
let isTouchDevice = 'ontouchstart' in document.documentElement

canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight

ctx.fillStyle = "black"
ctx.strokeStyle = "none"

if (isTouchDevice) {
  canvas.ontouchmove = (e) => {
    let touch = e.touches[0]
    ctx.beginPath()
    ctx.arc(touch.clientX, touch.clientY, radius, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()
  }
} else {
  canvas.onmousedown = () => {
    painting = true
  }

  canvas.onmouseup = () => {
    painting = false
  }

  canvas.onmousemove = (e) => {
    if (painting) {
      ctx.beginPath()
      ctx.arc(e.clientX, e.clientY, radius, 0, 2 * Math.PI)
      ctx.stroke()
      ctx.fill()
    }
  }
}