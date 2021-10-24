/*
 * @Author: your name
 * @Date: 2021-10-19 10:31:16
 * @LastEditTime: 2021-10-24 13:51:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \云板\templates\js\canvas.js
 */
"use strict"
var canvas, context;
var choose, rectangular, rhombus, garden, arrow, line, brush, text;
var img = new Image();
var activation = {
  type: "none",
  isDrawing: "false"
}
window.onload = function () {
  Initialize();
  //鼠标按键被按下
  canvas.onmousedown = startDrawing;
  //鼠标按键被松开
  canvas.onmouseup = stopDrawing;
  //鼠标指针移出指定的对象
  canvas.onmouseout = stopDrawing;
  //鼠标指针移入指定的对象
  canvas.onmousemove = draw;
};
function Initialize() {
  //获取dom对象
  canvas = document.getElementById("drawingCanvas");
  context = canvas.getContext("2d");
  choose = document.getElementById("choose");
  rectangular = document.getElementById("rectangular");
  rhombus = document.getElementById("rhombus");
  garden = document.getElementById("garden");
  arrow = document.getElementById("arrow");
  line = document.getElementById("line");
  brush = document.getElementById("brush");
  text = document.getElementById("text");
  canvasSizeMax();
  img.src = "img/背景.png"
  img.onload = function () {
    context.fillStyle = context.createPattern(img, "repeat");
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
}
/**
 * @description: canvas全屏
 */
function canvasSizeMax() {
  let width = window.innerWidth ||
    document.body.clientWidth;
  let height = window.innerHeight ||
    document.body.clientHeight;
  canvas.height = height - 3;
  canvas.width = width - 3;
}
/**
 * @description:修改背景
 * @param {string} img - 图片路径
 */
function changeBackground(imgPath) {
  img.src = imgPath;
  img.onload()
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
  changeBackground("img/背景.png");
}