// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');


//Façã sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO

// Definindo a taxa de desconto
const desconto = (metodoPagamento === 'pix' || metodoPagamento === 'dinheiro') ? 0.1 : 0; // 10% de desconto para PIX ou dinheiro

// Calculando o valor final
const valorComDesconto = valorTotal - (valorTotal * desconto);


// Exibindo os resultados
console.log(`\nNúmero de pessoas na mesa: ${numeroPessoas}`);
console.log(`Valor total da conta: R$ ${valorTotal.toFixed(2)}`);
console.log(`Método de pagamento: ${metodoPagamento}`);
console.log(`Desconto aplicado: ${desconto * 100}%`);
console.log(`Valor final a ser pago: R$ ${valorComDesconto.toFixed(2)}`);


