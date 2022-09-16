//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";


const valorDoProduto = 13000;

if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro ") {
    console.log(`Valor a ser pago R$${valorDoProduto - (valorDoProduto * 0.10)}`)
} else if (tipoDePagamento === "credito") {
    console.log(`Valor a ser pago R$${valorDoProduto - (valorDoProduto * 0.05)}`)
} else {
    console.log(`Valor a ser pago R$${valorDoProduto - (valorDoProduto * 0.03)}`)
}
