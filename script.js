let inputAdults = document.getElementById("adults")
let inputChilds = document.getElementById("childs")
let inputDuration = document.getElementById("duration")

let result = document.getElementById("resultado")

function calcular(){
    console.log("Calculando...")
    
    let adults = inputAdults.value;
    let childs = inputChilds.value;
    let duration = inputDuration.value;

    let qdtTotalCarne = carnePorPessoa(duration) * adults + (carnePorPessoa(duration) / 2 * childs)
    let qdtTotalCerveja = cervejaPorPessoa(duration) * adults
    let qdtTotalBebidas = bebidasPorPessoa(duration) * adults + (carnePorPessoa(duration) / 2 * childs)

    result.innerHTML = `<p>${qdtTotalCarne/1000}Kg de Carne</p>`
    result.innerHTML += `<p>${Math.ceil(qdtTotalCerveja/355)}Latas de Cerveja</p>`
    result.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/2000)}Garrafas de Bebidas</p>`
}

function carnePorPessoa(duration){
    if(duration >= 6){
        return 650
    }else{
        return 400
    }
}

function cervejaPorPessoa(duration){
    if(duration >= 6){
        return 2000
    }else{
        return 1200
    }
}

function bebidasPorPessoa(duration){
    if(duration >= 6){
        return 1500
    }else{
        return 1000
    }
}