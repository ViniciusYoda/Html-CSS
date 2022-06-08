const enviar = document.getElementById("enviar")

enviar.addEventListener("click", ()=>{
    const campos = document.querySelectorAll("input[type='text'], input[type='email'], input[type='password']")

    for(let i = 0; i < campos.length; i++){
        if(campos[i].value == ""){
            alert("O " + campos[i].name + " está sem preenchimento")
            return
        }
    }

    document.getElementsByClassName("forms")[0].submit()
})