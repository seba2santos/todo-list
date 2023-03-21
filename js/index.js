const d = document;
const $form = d.getElementById("contact-form");
const $task = d.querySelector("#task");

d.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.matches("#contact-form")) {
    const $ul = d.querySelector("#tasks-todo");
    const $li = d.createElement("li");
    $li.innerHTML = $task.value;
    $li.setAttribute("id", $task.value);
    const $btn = d.createElement("span");
    $btn.dataset.id = $li.id;
    $btn.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
    $li.appendChild($btn);
    $ul.appendChild($li);

    $task.value = "";
  }
});
