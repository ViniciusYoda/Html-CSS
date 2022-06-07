const botaoEnviar = document.getElementById("enviar")

botaoEnviar.addEventListener("click", ()=>{
    const campos = document.querySelectorAll("input[type='text'], input[type='email'], input[type='password']")

    for(let i = 0; i < campos.length; i++){
        if(campos[i].value == ""){
            alert("O campo " + campo[i].name + " está sem preenchimento!")
            return
        }
    }
    document.getElementsByClassName("formulario")[0].submit()
})
