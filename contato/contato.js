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