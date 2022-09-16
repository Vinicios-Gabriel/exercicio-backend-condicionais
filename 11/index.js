//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

const totalJaPagoPeloAluno = 1000000;


if (mesesDecorridos >= 60 || totalJaPagoPeloAluno >= 1800000) {
    (console.log("nao paga"))
} else if (rendaMensalEmCentavos >= 200000) {
    console.log(` O valor da parcela desse mês é R$ ${rendaMensalEmCentavos * 0.18 / 100} reais`)
} else {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")
}