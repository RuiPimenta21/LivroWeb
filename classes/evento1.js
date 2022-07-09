let meuFormulario = document.getElementById("meuFormulario")

meuFormulario.addEventListener("click", envia)

document.getElementById("meuFormulario").addEventListener(
    "submit",
    function (event) {
        //funcao1
        alert("Formulário submetido submit!")
        event.preventDefault()
    }
)

function envia(){
    alert("Formulário submetido click!")
}
function limpa(){
    alert("Formulário limpor!")
}
