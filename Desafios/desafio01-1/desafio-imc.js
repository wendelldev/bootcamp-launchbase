// Cálculo de IMC
const nome = 'Wendell'
const peso = 80
const altura = 1.76

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome} você está acima do peso.`)
} else {
    console.log(`${nome} você não está acima do peso.`)
}

