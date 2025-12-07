const input = document.getElementById("inputTarefa");
const btn = document.getElementById("btnAdd");
const lista = document.getElementById("lista");

btn.addEventListener("click", () => {
  const texto = input.value.trim();

  if (texto === "") return;

  const li = document.createElement("li");
  li.textContent = texto;

  li.addEventListener("click", () => {
    li.remove(); // remove tarefa ao clicar
  });

  lista.appendChild(li);
  input.value = "";
});
