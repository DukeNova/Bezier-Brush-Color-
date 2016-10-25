var colors = (255, 0, 0);
var world = (0);

function setup() {
  createCanvas(1200, 700);
  noFill();
  background(world);
}

function draw() {
  for (var i = 0; i < 500; i += 190) {
    bezier(mouseX - (i / 18.0), 40 + i, 600, 350, 600, 350, mouseX - (i / 16.0), mouseY + (i / 8.0));
  }
  stroke(colors)
}

function mousePressed() {
  clear();
}


function keyTyped() {
  if (key === 'p') {
    colors = ('#fae');
  } else if (key === 'r') {
    colors = ('red');
  }
  if (key === ',') {
    colors = (255)
  }
  if (key === '.') {
    colors = (0)
  }
  if (key === 'g') {
    colors = ('green')
  }
  if (key === 'b') {
    colors = ('blue')
  }
  if (key === 'y') {
    colors = ('yellow')
  }
  if (key === 'v') {
    colors = ('purple')
  }
  if (key === 'o') {
    colors = ('orange')
  }

  if (key === '1') {
    world = (0)
  }
  if (key === '2') {
    world = ('#fae')
  }
  if (key === '3') {
    world = (255, 0, 0)
  }
}