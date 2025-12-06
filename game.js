// game.js

// Global variables
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const keys = {
  left: false,
  right: false,
  up: false,
  down: false
};

let gameRunning = false;
let bike = {
  x: canvas.width / 2 - 20,
  y: canvas.height - 100,
  width: 40,
  height: 80,
  speed: 0,
  maxSpeed: 6,
  accel: 0.2,
  decel: 0.1,
  velX: 0,
  velY: 0,
  color: '#0af'
};

function resetBike() {
  bike.x = canvas.width / 2 - bike.width/2;
  bike.y = canvas.height - bike.height - 10;
  bike.speed = 0;
  bike.velX = 0;
}

function update() {
  if (!gameRunning) return;

  // handle input
  if (keys.left) {
    bike.velX = -bike.maxSpeed;
  } else if (keys.right) {
    bike.velX = bike.maxSpeed;
  } else {
    bike.velX = 0;
  }

  // accelerate / decelerate
  if (keys.up) {
    bike.speed += bike.accel;
    if (bike.speed > bike.maxSpeed) bike.speed = bike.maxSpeed;
  } else if (keys.down) {
    bike.speed -= bike.decel;
    if (bike.speed < 0) bike.speed = 0;
  }

  // update position
  bike.x += bike.velX;
  bike.y -= bike.speed;  // assume upward movement (e.g. road going down)

  // boundary check
  if (bike.x < 0) bike.x = 0;
  if (bike.x + bike.width > canvas.width) bike.x = canvas.width - bike.width;
  if (bike.y < 0) {
    // reset or wrap
    bike.y = canvas.height - bike.height - 10;
  }
}

function draw() {
  // clear canvas
  ctx.fillStyle = '#222';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // draw bike
  ctx.fillStyle = bike.color;
  ctx.fillRect(bike.x, bike.y, bike.width, bike.height);

  // TODO: draw obstacles, score, background, etc.
}

function loop() {
  update();
  draw();
  if (gameRunning) {
    requestAnimationFrame(loop);
  }
}

// input event listeners
window.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') keys.left = true;
  if (e.key === 'ArrowRight') keys.right = true;
  if (e.key === 'ArrowUp') keys.up = true;
  if (e.key === 'ArrowDown') keys.down = true;
});
window.addEventListener('keyup', function(e) {
  if (e.key === 'ArrowLeft') keys.left = false;
  if (e.key === 'ArrowRight') keys.right = false;
  if (e.key === 'ArrowUp') keys.up = false;
  if (e.key === 'ArrowDown') keys.down = false;
});

// start button
document.getElementById('startButton').addEventListener('click', function(){
  document.getElementById('startScreen').style.display = 'none';
  gameRunning = true;
  resetBike();
  loop();
});
