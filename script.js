const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const TICK_RATE = 20;
let running = false;

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "lime";
  ctx.fillRect(100, 100, 50, 50);
}

function simulateTick() {
  drawGrid();
}

function startSimulation() {
  if (running) return;
  running = true;

  setInterval(() => {
    simulateTick();
  }, 1000 / TICK_RATE);
}
