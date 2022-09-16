//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;



if (valorPago === valorDoProduto) {
    console.log('pago')
} else {
    console.log(`Restam ${quantidadeDoParcelamento - valorPago / 100} parcelas de R$ ${valorDoProduto / quantidadeDoParcelamento / 100} reais `)
}