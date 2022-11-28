"use strict";

function step(number) {
  changeCircleStyle(number);
  hideOrShowBlock(number);
}

function hideOrShowBlock(number) {
  step1(number > 0);
  step2(number > 1);
  step3(number > 2);
  step4(number > 3);
  step5(number > 4);
}

function changeCircleStyle(number) {
  addOrRemoveCircleStyle("circle-0", number, 0);
  addOrRemoveCircleStyle("circle-1", number, 1);
  addOrRemoveCircleStyle("circle-2", number, 2);
  addOrRemoveCircleStyle("circle-3", number, 3);
  addOrRemoveCircleStyle("circle-4", number, 4);
  addOrRemoveCircleStyle("circle-5", number, 5);
}

function addOrRemoveCircleStyle(id, number, value) {
  number > value
    ? document.getElementById(id).classList.add("bg-success")
    : document.getElementById(id).classList.remove("bg-success");

  number === value
    ? document.getElementById(id).classList.add("bg-primary")
    : document.getElementById(id).classList.remove("bg-primary");
}

function step1(isAddStyle = true) {
  isAddStyle
    ? document.getElementById("body-task-2").classList.add("body-color")
    : document.getElementById("body-task-2").classList.remove("body-color");
}

function step2(isAddStyle = true) {
  if (isAddStyle) {
    document.getElementById("first-title").classList.add("main-title");
    document.getElementById("main-title").classList.add("sub-title");
    document.getElementById("cinema-title").classList.add("sub-title");
    document.getElementById("music-title").classList.add("sub-title");
    document.getElementById("links-title").classList.add("sub-title");
    document.getElementById("main-text").classList.add("text");
    document.getElementById("music-list").classList.add("text");
    document.getElementById("cinema-list").classList.add("text");

    document.getElementById("vk-link").classList.add("link");
    document.getElementById("tg-link").classList.add("link");
  } else {
    document.getElementById("first-title").classList.remove("main-title");
    document.getElementById("main-title").classList.remove("sub-title");
    document.getElementById("cinema-title").classList.remove("sub-title");
    document.getElementById("music-title").classList.remove("sub-title");
    document.getElementById("links-title").classList.remove("sub-title");
    document.getElementById("main-text").classList.remove("text");
    document.getElementById("music-list").classList.remove("text");
    document.getElementById("cinema-list").classList.remove("text");
    document.getElementById("vk-link").classList.remove("link");
    document.getElementById("tg-link").classList.remove("link");
  }
}

function step3(isAddStyle = true) {
  if (isAddStyle) {
    document.getElementById("content").classList.add("content");
    document.getElementById("content-left").classList.add("content-left");
    document.getElementById("content-right").classList.add("content-right");
  } else {
    document.getElementById("content").classList.remove("content");
    document.getElementById("content-left").classList.remove("content-left");
    document.getElementById("content-right").classList.remove("content-right");
  }
}

function step4(isAddStyle = true) {
  if (isAddStyle) {
    document.getElementById("body-task-2").classList.add("body-second-color");
    document.getElementById("content-left").classList.add("content-block");
    document.getElementById("content-right").classList.add("content-block");
  } else {
    document
      .getElementById("body-task-2")
      .classList.remove("body-second-color");
    document.getElementById("content-left").classList.remove("content-block");
    document.getElementById("content-right").classList.remove("content-block");
  }
}

function step5(isAddStyle = true) {
  if (isAddStyle) {
    document.getElementById("photo").classList.add("photo");
  } else {
    document.getElementById("photo").classList.remove("photo");
  }
}

step(0);
