const container = document.getElementById("main-content");

function buildTasksList() {
  let html = `
    <h3 id="task-0">
        <a href="#task-0"></a>
        Вводный материал
    </h3>
    <p class="mb-4">
        <a target="_blank" href="../pdf/presentations/0.pdf">📄 Материалы</a>
    </p>
  `;

  for (let i = 1; i <= 1; i++) {
    html += `
        <h3 id="task-${i}">
            <a href="#task-${i}"></a>
            Занятие ${i}
        </h3>
        <p class="mb-4">
            <a target="_blank" href="../pdf/tasks/${i}.pdf">⚒️ Задание</a>
            <a target="_blank" href="../pdf/presentations/${i}.pdf">📄 Материалы</a>
        </p>
        `;
  }

  console.log(container);
  container.innerHTML = html;
}

buildTasksList();
