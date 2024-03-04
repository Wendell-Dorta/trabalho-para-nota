function validaNome(event) {
    
    var user = $("#user").val();
    var regex = /[^(a-zA-Z\u00C0-\u00FF )]+/i

    user = user.replace(regex, '');

    console.log("nome = " + user);
    $("#user").val(user);
    $("#user").focus();
    
}

let senha = document.getElementById('senha');
let senhaC = document.getElementById('senhaC');

function validarSenha() {
  if (senha.value != senhaC.value) {
    senhaC.setCustomValidity("Senhas diferentes! Recomendo que treine sua digitação.");
    senhaC.reportValidity();
    return false;
  } else {
    senhaC.setCustomValidity("");
    return true;
  }
}

// verificar também quando o campo for modificado, para que a mensagem suma quando as senhas forem iguais
senhaC.addEventListener('input', validarSenha);