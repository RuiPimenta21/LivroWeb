window.onload = function(){

    
    
    
    //Duas maneiras diferentes de se fazer


    
    //********************************************** 
    document.getElementById("meuFormulario").addEventListener(
        "submit",
        function (event) {
            //funcao1
            alert("Formulário submetido submit!")
            event.preventDefault()
        }
    )
    //********************************************** 
    let meuBotao = document.getElementById("meuBotao")
    
    meuBotao.addEventListener("mousemove", corAlterada)
    meuBotao.addEventListener("mouseout", corNormal)


    function corAlterada(){
        meuBotao.style.backgroundColor = "#00EE08"
    }

    function corNormal(){
        meuBotao.style.backgroundColor = ""
    }
    
    


}











