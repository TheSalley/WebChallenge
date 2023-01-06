/** @type {HTMLCanvasElement} */
let container = document.getElementById("tree");
let ctx = container.getContext("2d");

let leafArr = [];

/* 生成n ~ m 之间的随机整数 */
function getRandomInt(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}
/* 画树枝函数 */
function drawTree(startX, startY, length, angle, depth, branchWidth) {
  let newLength,
    newAngle,
    newDepth,
    endX,
    endY,
    maxAngle = (2 * Math.PI) / 5,
    subBranches;
  // 开始绘制
  ctx.beginPath();
  ctx.moveTo(startX, startY);

  endX = startX + Math.cos(angle) * length;
  endY = startY + Math.sin(angle) * length;
  ctx.lineCap = "round";
  ctx.lineWidth = branchWidth;
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = "#442525";
  ctx.stroke();
  if (depth <= 4) {
    leafArr.push([endX, endY]);
  }

  newDepth = depth - 1;
  if (newDepth <= 0) return;

  subBranches = getRandomInt(2, 4);
  branchWidth *= 0.75;
  for (let i = 0; i < subBranches; i++) {
    newLength = length * Math.random();
    newAngle = angle + Math.random() * maxAngle - maxAngle * 0.5;
    drawTree(endX, endY, newLength, newAngle, newDepth, branchWidth);
  }
}
/* 画树叶函数 */
function drawLeaf(x, y, num) {
  for (let i = 0; i < num; i++) {
    x += (Math.random() - 0.5) * getRandomInt(0, 5);
    y += (Math.random() - 0.5) * getRandomInt(0, 5);

    ctx.beginPath();
    let num1 = Math.random();
    ctx.fillStyle = `rgba(247, ${Math.random() * 190}, 190, ${
      num1 >= 0.5 ? num1 - 0.2 : num1
    })`;
    ctx.arc(x, y, getRandomInt(2, 5), 0, 2 * Math.PI);
    ctx.fill();
  }
}

function drawAllLeaves() {
  leafArr.forEach((item) => {
    drawLeaf(item[0], item[1], getRandomInt(15, 25));
  });
}

window.onload = () => {
  drawTree(400, 700, 180, -Math.PI / 2, 8, 12);
  drawAllLeaves();
};
