function verifica() {
    if (document.getElementById("nome").value=="") {
        alert ("Por favor preencha seu nome")
        document.formulario.nome.focus();
        return false;
    }

    if (document.getElementById("sobrenome").value=="") {
        alert ("Por favor preencha seu sobrenome")
        document.formulario.sobrenome.focus();
        return false;
    }

    if (document.getElementById("data-nascimento").value=="") {
        alert("Por favor coloque sua data de nascimento")
        document.formulario.data-nascimento.focus();
        return false;
    }

    if (document.getElementById("email").value=="") {
        alert ("Por favor preencha seu email")
        document.formulario.email.focus();
        return false;
    }

    if (document.getElementById("estado").value=="") {
        alert("Por favor coloque o estado em que mora")
        document.formulario.estado.focus();
        return false;
    }

    if (document.getElementById("whatsapp").value=="") {
        alert("Por favor coloque seu whatsapp")
        document.formualario.whatsapp.focus();
        return false;
    }

    else {
        alert ("Formulário preenchido com sucesso!");
        return true;
    }
}
