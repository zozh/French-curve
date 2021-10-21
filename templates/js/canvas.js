var canvas;
var context;
//  HTML文档加载完毕后立即执行
window.onload = function () {
  canvas = document.getElementById("drawingCanvas");
  var width = window.innerWidth
    || document.body.clientWidth;
  var height = window.innerHeight
    || document.body.clientHeight;
  canvas.height = height - 10;
  canvas.width = width - 10;
  context = canvas.getContext("2d");
  //鼠标按键被按下
  canvas.onmousedown = startDrawing;
  //鼠标按键被松开
  canvas.onmouseup = stopDrawing;
  //鼠标指针移出指定的对象
  canvas.onmouseout = stopDrawing;
  //鼠标指针移入指定的对象
  canvas.onmousemove = draw;
};
function changeColor(color, imgElement) {
  // 修改颜色
  let previousColorElement;
  context.strokeStyle = color;
  imgElement.className = "Selected";
  if (previousColorElement != null) {
    previousColoeElement.className = "";
  }
  previousColorElement = imgElement;
}
function changeThickness(thickness, imgElement) {
  // 修改厚度
  let previousThicknessElement;
  context.lineWidth = thickness;
  imgElement.className = "Selected";
  if (previousThicknessElement != null) {
    previousThicknessElement.className = "";
  }
  previousThicknessElement = imgElement;
}
var isDrawing = false;
function startDrawing(e) {
  // 开始画
  isDrawing = true;
  //确定起点
  context.beginPath();
  context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}
function draw(e) {
  // 画的过程
  if (isDrawing == true) {
    let x = e.pageX - canvas.offsetLeft;
    let y = e.pageY - canvas.offsetTop;
    //连线
    context.lineTo(x, y);
    context.stroke();
  }
}
function stopDrawing() {
  // 暂停画
  isDrawing = false;
}
function clearCanvas() {
  // 清理画布
  context.clearRect(0, 0, canvas.width, canvas.height);
}