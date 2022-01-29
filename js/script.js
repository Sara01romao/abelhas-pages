
const removeBtn = document.querySelector(".remover");
const modal = document.querySelector(".modal");
const closebtn = document.querySelector(".close")

function removeMsg() {
  modal.classList.add("ativo")
}

removeBtn.addEventListener('click', removeMsg);



function fechaModal() {
  modal.classList.remove('ativo')
}

closebtn.addEventListener('click', fechaModal);




