"use strict";

const FAQ_PAGE = "./faq/faq.html";
const TASKS_PAGE = "./tasks/tasks.html";

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

function goToPage() {
  const hash = window.location.hash;
  switch (hash) {
    case "#example-1": {
      document.getElementById("iframe").setAttribute("src", Path[1]);
      break;
    }
    case "#example-2": {
      document.getElementById("iframe").setAttribute("src", Path[2]);
      break;
    }
    case "#example-3": {
      document.getElementById("iframe").setAttribute("src", Path[3]);
      break;
    }
    case "#example-4": {
      document.getElementById("iframe").setAttribute("src", Path[4]);
      break;
    }
    case "#example-5": {
      document.getElementById("iframe").setAttribute("src", Path[5]);
      break;
    }
    case "#example-6": {
      document.getElementById("iframe").setAttribute("src", Path[6]);
      break;
    }
    case "#example-7": {
      document.getElementById("iframe").setAttribute("src", Path[7]);
      break;
    }
    case "#faq": {
      document.getElementById("iframe").setAttribute("src", FAQ_PAGE);
      break;
    }
    case "#tasks": {
      document.getElementById("iframe").setAttribute("src", TASKS_PAGE);
    }
  }
}

function openTaskDescription() {
  document.getElementById("iframe").setAttribute("src", TASKS_PAGE);
}

initPage();
goToPage();
