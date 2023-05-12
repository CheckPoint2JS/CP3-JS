function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
  
    if (nome === "") {
      alert("Por favor, digite seu nome.");
      return false;
    }
  
    if (email === "" || email.indexOf("@") === -1) {
      alert("Por favor, digite um endereço de e-mail válido.");
      return false;
    }
  
    if (telefone === "" || isNaN(telefone)) {
      alert("Por favor, digite um número de telefone válido.");
      return false;
    }
  
    return true;
  }

const checkbox = document.querySelector("input[type=checkbox]");
const menu = document.querySelector("body");

checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
        document.body.style.backgroundColor = "white";
        menu.style.backgroundColor = "#white";
    } else {
        document.body.style.backgroundColor = "";
        menu.style.backgroundColor = "";
    }
});
