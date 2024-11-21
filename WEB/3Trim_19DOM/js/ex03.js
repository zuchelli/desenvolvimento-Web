function confirmar() {
    var login, senha, ok
    ok=false
    login=document.getElementById("login")
    senha=document.getElementById("senha")
    
    if(login.value!="")
    {
        if(senha.value!="")
        {
            if(login.value=="zezinho" && senha.value=="1234abc")
            {
                alert(" login realizado com sucesso!")
                ok=true
            }
            else{
                alert("Login incorreto!")
            }
        }
        else{
            alert("A senha não pode ficar em branco")
        }
    }
    else{
        alert("O login não pode ficar em branco")
    }
    return ok
    
    }