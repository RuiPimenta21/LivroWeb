window.onload = function(){
    let resultado = document.getElementById("meuResultado")
    let botao = document.getElementById("meuBotao")

    botao.onclick = function(){
        let data = new Date()
        resultado.innerHTML = data
    }
}