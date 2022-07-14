window.onload = function(){
    document.getElementById("meuFormulario").addEventListener("submit", grava)

    function grava(){

        let pass1 = document.getElementById("pass1")
        let pass2 = document.getElementById("pass2")

        let verificaPass = false

        verificaPass = verifica(pass1, pass2)

        if(verificaPass == true){
            alert("Gravado com sucesso!")
        }else{
            alert("Falha ao gravar, verifique as passwords introduzidas!!")
        }
    }

    function verifica(pass1, pass2){
        if(pass1.value == pass2.value){
            return true
        }
        else{
            return false 
        } 
    }
}




