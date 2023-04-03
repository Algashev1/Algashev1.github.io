const container = document.getElementById("main-content");

const videoLinks = [
  "",
  "https://bbb.ssau.ru:8443/playback/presentation/2.3/87b6ec23de33ee4841108040bdb92d69753a78f5-1679921954769",
  "",
];

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

  for (let i = 1; i <= 2; i++) {
    html += `
        <h3 id="task-${i}">
            <a href="#task-${i}"></a>
            Занятие ${i}
        </h3>
        <p class="mb-4">
            <a target="_blank" href="../pdf/tasks/${i}.pdf">⚒️ Задание </a>
            <a target="_blank" href="../pdf/presentations/${i}.pdf">📄 Презентация </a>
            <a target="_blank" href="${videoLinks[i]}">🎞 Запись лекции </a>
        </p>
        `;
  }

  container.innerHTML = html;
}

buildTasksList();
