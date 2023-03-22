const d = document;
const $form = d.getElementById("contact-form");
const $task = d.querySelector("#task");

d.addEventListener("submit", (e) => {
  e.preventDefault();
  const $ul = d.querySelector("#tasks-todo");
  const $li = d.createElement("li");
  const $errorMsg = d.querySelector(".none");
  let id = new Date().getTime().toString();

  if (e.target.matches("#contact-form")) {
    if ($task.value !== "") {
      $errorMsg.classList.remove("is-active");
      $li.textContent = $task.value;
      $li.setAttribute("id", id);
      const $btn = d.createElement("span");
      $btn.dataset.id = $li.id;
      $btn.innerHTML = `<i class="fa-regular fa-circle-check .down"></i>`;
      $li.appendChild($btn);
      $ul.appendChild($li);
      $task.value = "";
    } else {
      $errorMsg.classList.add("is-active");
    }
  }
  d.addEventListener("click", (e) => {
    if (e.target.matches("#tasks-todo span *")) {
      let span = e.target.parentNode;
      let li = d.getElementById(span.getAttribute("data-id"));
      $ul.removeChild(li);
    }
  });
});
