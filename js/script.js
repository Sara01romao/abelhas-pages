
const removeBtn = document.querySelector(".remover");
const modal = document.querySelector(".modal")

function removeMsg(){
    console.log("sara")
    modal.classList.add('ativo')
} 

  removeBtn.addEventListener('click', removeMsg() )