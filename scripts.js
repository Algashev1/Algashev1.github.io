"use strict";

const FAQ_PAGE = "./faq/faq.html";

const Path = {
  1: "./examples/task1/task1.html",
  2: "./examples/task2/task2.html",
  3: "./examples/task3/task3.html",
  4: "./examples/task4/task4.html",
  5: "./examples/task5/task5.html",
  6: "./examples/task6/task6.html",
  7: "./examples/task7/task7.html",
};

function selectTask(numberOfTask) {
  document.getElementById("iframe").setAttribute("src", Path[numberOfTask]);
}

function openFAQ() {
  document.getElementById("iframe").setAttribute("src", FAQ_PAGE);
}

function initPage() {
  document.getElementById("iframe").setAttribute("src", Path[1]);
}

initPage();
