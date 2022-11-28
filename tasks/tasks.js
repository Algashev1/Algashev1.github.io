const container = document.getElementById("main-content");

function buildTasksList() {
    let html = '';

    for (let i = 1; i <= 7; i++) {
        html += `
        <h3 id="task-${i}">
            <a href="#task-${i}"></a>
            Занятие ${i}
        </h3>
        <p class="mb-4">
            <a target="_blank" href="/pdf/tasks/${i}.pdf">⚒️ Задание</a>
            <a target="_blank" href="/pdf/presentations/${i}.pdf">📄 Материалы</a>
        </p>
        `;
    }

    container.innerHTML = html;
}

buildTasksList();