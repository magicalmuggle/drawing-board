/** @type {HTMLCanvasElement} */
let canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d")
let painting = false
let isTouchDevice = "ontouchstart" in document.documentElement
let lastCoordinate

canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight

ctx.strokeStyle = "black"
ctx.lineWidth = 6
ctx.lineCap = "round"

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
}

if (isTouchDevice) {
  // 禁止移动端下拉刷新
  document.addEventListener("touchmove", e => {
    e.preventDefault();
  }, { passive: false })

  canvas.ontouchstart = (e) => {
    let touch = e.touches[0]
    lastCoordinate = [touch.clientX, touch.clientY]
  }

  canvas.ontouchmove = (e) => {
    let touch = e.touches[0]
    drawLine(lastCoordinate[0], lastCoordinate[1], touch.clientX, touch.clientY)
    lastCoordinate = [touch.clientX, touch.clientY]
  }
} else {
  canvas.onmousedown = (e) => {
    painting = true
    lastCoordinate = [e.clientX, e.clientY]
  }

  canvas.onmouseup = () => {
    painting = false
  }

  canvas.onmousemove = (e) => {
    if (painting) {
      drawLine(lastCoordinate[0], lastCoordinate[1], e.clientX, e.clientY)
      lastCoordinate = [e.clientX, e.clientY]
    }
  }
}