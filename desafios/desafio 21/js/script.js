const continuar = document.getElementById("enviar")

continuar.addEventListener("click", ()=>{
    const campos = document.querySelectorAll("input[type='text'], input[type='password']")

    for(let i = 0; i < campos.length; i++){
        if(campos[i].value == ""){
            alert("O " + campos[i].name + " está sem preenchmento!")
            return
        }
    }

    document.getElementsByClassName("forms")[0].submit()
})