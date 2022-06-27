class Carro{
    constructor(marca, modelo, velocidadeAtual){
        this.marca = marca
        this.modelo =  modelo
        this.velocidadeAtual =  0
    }
    acelera() {
        this.velocidadeAtual += 5
    }
    trava(){
        if(this.velocidadeAtual <= 5){
            this.velocidadeAtual = 0 
        }
        else{
            this.velocidadeAtual -= 5
        }    
    }
    getMarca(){
        return this.marca
    }
    getModelo(){
        return this.modelo
    }
    setMarca(newMarca){
        this.marca = newMarca
    }
    setModelo(newModelo){
        this.modelo = newModelo
    }
}