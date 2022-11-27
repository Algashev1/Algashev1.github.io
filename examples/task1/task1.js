"use strict";

function step(number) {
  changeCircleStyle(number);
  hideOrShowBlock(number);
}

function hideOrShowBlock(number) {
  document.getElementById("step2").style.display =
    number > 1 ? "block" : "none";
  document.getElementById("step3").style.display =
    number === 3 ? "block" : "none";
  document.getElementById("step4").style.display =
    number > 3 ? "block" : "none";
  document.getElementById("step5").style.display =
    number > 4 ? "block" : "none";
  document.getElementById("step6").style.display =
    number > 5 ? "block" : "none";
  document.getElementById("step7").style.display =
    number > 6 ? "block" : "none";
  document.getElementById("step8").style.display =
    number > 7 ? "block" : "none";
}

function changeCircleStyle(number) {
  addOrRemoveCircleStyle("circle-1", number, 1);
  addOrRemoveCircleStyle("circle-2", number, 2);
  addOrRemoveCircleStyle("circle-3", number, 3);
  addOrRemoveCircleStyle("circle-4", number, 4);
  addOrRemoveCircleStyle("circle-5", number, 5);
  addOrRemoveCircleStyle("circle-6", number, 6);
  addOrRemoveCircleStyle("circle-7", number, 7);
  addOrRemoveCircleStyle("circle-8", number, 8);
}

function addOrRemoveCircleStyle(id, number, value) {
  number > value
    ? document.getElementById(id).classList.add("bg-success")
    : document.getElementById(id).classList.remove("bg-success");

  number === value
    ? document.getElementById(id).classList.add("bg-primary")
    : document.getElementById(id).classList.remove("bg-primary");
}

step(1);
