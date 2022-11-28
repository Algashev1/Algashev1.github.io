"use strict";

const FAQ_PAGE = "./faq/faq.html";
const TASKS_PAGE = "./tasks/tasks.html";
const exampleRegExp = /#example-\d+/;

function generateTaskPath(numberOfTask) {
  return `/examples/task${numberOfTask}/task${numberOfTask}.html`;
}

function selectTask(numberOfTask) {
  document.getElementById("iframe").setAttribute("src", generateTaskPath(numberOfTask));
}

function openFAQ() {
  document.getElementById("iframe").setAttribute("src", FAQ_PAGE);
}

function initPage() {
  document.getElementById("iframe").setAttribute("src", generateTaskPath(1));
}

function goToPage() {
  const hash = window.location.hash;
  const iframe = document.getElementById("iframe")

  if (exampleRegExp.exec(hash)) {
    const [numberOfTask] = hash.match(/\d+/);
    iframe.setAttribute("src", generateTaskPath(numberOfTask));
  } else {
    const pathWithoutHash = hash.slice(1);
    iframe.setAttribute("src", `/${pathWithoutHash}/${pathWithoutHash}.html`);
  }
}

function openTaskDescription() {
  document.getElementById("iframe").setAttribute("src", TASKS_PAGE);
}

initPage();
goToPage();
