const readline = require('readline-sync');

const escolherDiaDaSemana = () => {
    prompt = readline.question('Escolha uma opção: \n1 - Domingo 2 - Segunda-feira 3 - Terça-feira 4 - Quarta-feira 5 - Quinta-feira 6 - Sexta-feira 7 - Sábado 8 - Sair\n');

    switch (Number(prompt)) {
        case 1:
            console.log('Você escolheu Domingo!');
            break;
        case 2:
            console.log('Você escolheu Segunda-feira!');
            break;
        case 3:
            console.log('Você escolheu Terça-feira!');
            break;
        case 4:
            console.log('Você escolheu Quarta-feira!');
            break;
        case 5:
            console.log('Você escolheu Quinta-feira!');
            break;
        case 6:
            console.log('Você escolheu Sexta-feira!');
            break;
        case 7:
            console.log('Você escolheu Sábado!');
            break;
        case 8:
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida! Tente novamente.');
            escolherDiaDaSemana();
    }

}

const crudCru = () => {
    prompt = readline.question('Escolha uma opção: \n1 -C) Create	(Cadastrar/Inserir)\n2 - R) Read    (Buscar/Ler) \n3 - U) Update    (Editar/Atualizar)\n4 - Delete  (Apagar/Excluir)\n5 - Sair\n');
    switch (Number(prompt)) {
        case 1:
            console.log('Usuário criado!');
            break;
        case 2:
            console.log('Aqui está o usuário escolhido!');
            break;
        case 3:
            console.log('Usuário atualizado com sucesso!');
            break;
        case 4:
            console.log('Usuário excluído com sucesso!');
            break;
        case 5:
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida! Tente novamente.');
            crudCru();
    }

}

const vendaHotDogs = () => {
    const quantidade = readline.questionInt('Quantos hot dogs você deseja comprar? ');
    let precoPorHotDog = 1.00;
    const total = quantidade * precoPorHotDog;
    
    if (quantidade >= 5 && quantidade < 10) {
        precoPorHotDog = 0.95;
    } else if (quantidade >= 10){
        precoPorHotDog = 0.90;
    }

    console.log(`O preço por hot dog é: R$ ${precoPorHotDog.toFixed(2)}`);
    console.log(`O total da compra é: R$ ${total.toFixed(2)}`);
}

const removerVogais = () => {
    const texto = readline.question('Digite um texto: ');
    const semVogais = texto.replace(/[aeiouáàâãéèêíïóôõöúüAEIOUÁÀÂÃÉÈÊÍÏÓÔÕÖÚÜ]/g, '');
    console.log(`"${texto}" => "${semVogais}"`);
}

const calculadoraPersonalizada = () => {
    const numero1 = readline.questionInt('Digite o primeiro número: ');
    const numero2 = readline.questionInt('Digite o segundo número: ');
    const operacao = readline.question('Escolha a operação (+, -, *, /): ');

    let resultado;
    if (operacao === '+') {
        resultado = numero1 + numero2;
    }
    else if (operacao === '-') {
        resultado = numero1 - numero2;
    } else if (operacao === '*') {
        resultado = numero1 * numero2;
    } else if (operacao === '/') {
        if (numero2 === 0) {
            console.log('Divisão por zero não é permitida!');
            return;
        }
        resultado = numero1 / numero2;
    } else {
        console.log('Operação inválida!');
        return;
    }
    console.log(`O resultado de ${numero1} ${operacao} ${numero2} é igual a ${resultado}`);

}

const nomesConcatenados = () => {
    console.log ('Lista de nomes     -   Digite um total de 7 nomes para preencher a lista:');
    const nomes = [];
    for (let i = 0; i < 7; i++) {
        const nome = readline.question(`Digite o nome ${i + 1}: `);
        nomes.push(nome);
    }
    const listaInvertida = nomes.reverse();
    const listaConcatenada = listaInvertida.join(' - ');
    console.log(`Lista de nomes invertida: ${listaConcatenada}`);
}

const jajanken = () => {
    let vidasUsuario = 3;
    let vidasGon = 3;
    const opcoes = ['Pedra', 'Papel', 'Tesoura'];
    
    const verificarVencedor = (escolhaUsuario, escolhaGon) => {
        if (escolhaUsuario === escolhaGon) return 0;
        
        const regras = {
            0: { vence: 2, perde: 1 },
            1: { vence: 0, perde: 2 },
            2: { vence: 1, perde: 0 }
        };
        
        return regras[escolhaUsuario - 1].vence === escolhaGon - 1 ? 1 : -1;
    };

    console.log('Gon te desafia para jogar Jankenpô!');
    
    while (vidasUsuario > 0 && vidasGon > 0) {
        console.log(`\nVidas: Você (${vidasUsuario}) vs Gon (${vidasGon})`);
        
        const escolhaUsuario = Number(readline.question('Escolha: \n1 - Pedra \n2 - Papel \n3 - Tesoura \n'));
        if (![1, 2, 3].includes(escolhaUsuario)) {
            console.log('Você não pode fugir do desafio!');
            continue;
        }

        const escolhaGon = Math.floor(Math.random() * 3) + 1;
        
        console.log(`\nVocê escolheu: ${opcoes[escolhaUsuario - 1]}`);
        console.log(`Gon escolheu: ${opcoes[escolhaGon - 1]}`);

        const resultado = verificarVencedor(escolhaUsuario, escolhaGon);
        
        if (resultado === 0) {
            console.log('Empate!');
        } else if (resultado === 1) {
            console.log('Você venceu!');
            vidasGon--;
        } else {
            console.log('Gon venceu!');
            vidasUsuario--;
        }
    }

    console.log(`\n${vidasUsuario === 0 ? 'Você perdeu' : 'Você venceu'} o desafio!`);
};

const checarVelocidade = () => {
    const velocidade = readline.questionInt('Digite a velocidade do carro: ');
    const limite = 80;
    const valorPorKm = 5.00;
    if (velocidade < limite) {
        console.log('Você está dentro do limite de velocidade!');
    } 
    else if (Number(velocidade) === limite) {
        console.log('Você está no limite de velocidade e muito motivado!');
    }    
    else {
        const excesso = velocidade - limite;
        const multa = excesso * valorPorKm;
        console.log(`Você foi multado! O valor da multa é: R$ ${multa.toFixed(2)}`);
    }
}

const diasDeVidaPerdidosPorCigarro = () => {
    const cigarrosPorDia = readline.questionInt('Quantos cigarros você fuma por dia? ');
    const anosFumando = readline.questionInt('Há quantos anos você fuma? ');
    const diasPorAno = 365;
    const diasPerdidosPorCigarro = 10 / 1440; // 10 minutos em dias
    const totalDiasPerdidos = cigarrosPorDia * anosFumando * diasPorAno * diasPerdidosPorCigarro;
    console.log(`Você perdeu aproximadamente ${totalDiasPerdidos.toFixed()} dias de vida por fumar!`);
    if (totalDiasPerdidos > 30) {
        let mesesPerdidos = Math.floor(totalDiasPerdidos / 30);
        let diasRestantes = Math.floor(totalDiasPerdidos % 30);
        console.log(`Isso equivale a ${mesesPerdidos} meses e ${diasRestantes} dias!`);
    }
    if (totalDiasPerdidos >= 365) {
        let anosPerdidos = Math.floor(totalDiasPerdidos / 365);
        let mesesRestantes = Math.floor((totalDiasPerdidos % 365) / 30);
        let diasRestantes = Math.floor(totalDiasPerdidos % 30);
        console.log(`Isso equivale a ${anosPerdidos} anos, ${mesesRestantes} meses e ${diasRestantes} dias!`);
    }
}

const aluguelCarros = () => {
    const valorCarroPopular = 90.00;
    const valorCarroLuxo = 150.00;
    const carroSelecionado = readline.question('Escolha o tipo de carro: \n1 - Popular \n2 - Luxo \n');
    const diasAluguel = readline.questionInt('Por quantos dias você alugou o carro? ');
    const kmRodados = readline.questionInt('Quantos km você rodou? ');
    let valorDiaria = 0;
    let valorKm = 0;
    if (carroSelecionado === '1' && kmRodados <= 100) {
        valorKm =  0.20;
        valorDiaria = valorCarroPopular + (valorKm * kmRodados);
    }
    else if (carroSelecionado === '1' && kmRodados > 100) {
        valorKm = 0.10;
        valorDiaria = valorCarroPopular + (valorKm * kmRodados);
    }
    else if (carroSelecionado === '2' && kmRodados <= 100) {
        valorKm = 0.30;
        valorDiaria = valorCarroLuxo + (valorKm * kmRodados);
    } 
    else if (carroSelecionado === '2' && kmRodados > 100) {
        valorKm = 0.25;
        valorDiaria = valorCarroLuxo + (valorKm * kmRodados);
    }

    const valorTotal = valorDiaria * diasAluguel;
    console.log(`O valor total do aluguel é: R$ ${valorTotal.toFixed(2)}`);

}

const bonusStage = () => {
    console.log ('Digite números para preencher a lista ou digite "sair" para encerrar:');
    const numeros = [];
    while (true) {
        const numero = readline.question('Digite um número: ');
        if (numero.toLowerCase() === 'sair') {
            break;
        }
        numeros.push(Number(numero));
    }
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const numerosPares = numeros.filter(num => num % 2 === 0);
    const media = soma / numeros.length;
    const ordemCrescente = [...numeros].sort((a, b) => a - b);
    console.log(`A soma dos números é: ${soma}`);
    console.log(`A média dos números é: ${media}`);
    console.log(`Os números pares são: ${numerosPares}`);
    console.log(`Os números em ordem crescente são: ${ordemCrescente}`);
    console.log(`A lista original é: ${numeros}`);
}

let continuar = true;

do { 

    console.log(`
        
==================================================
==================  MENU PRINCIPAL  ==============
==================================================
1 - Escolher Dia da Semana
2 - CRUD Básico
3 - Venda de Hot Dogs
4 - Remover Vogais
5 - Calculadora Personalizada
6 - Nomes Concatenados
7 - Jajanken (Pedra, Papel e Tesoura)
8 - Checker de Velocidade
9 - Calculadora de Vida (Cigarro)
10 - Aluguel de Carros
11 - Bonus Stage (Manipulação de Números)
0 - Sair
==================================================`);

    const opcao = readline.questionInt('Escolha uma opção: ');

    switch (opcao) {
        case 1:
            escolherDiaDaSemana();
            break;
        case 2:
            crudCru();
            break;
        case 3:
            vendaHotDogs();
            break;
        case 4:
            removerVogais();
            break;
        case 5:
            calculadoraPersonalizada();
            break;
        case 6:
            nomesConcatenados();
            break;
        case 7:
            jajanken();
            break;
        case 8:
            checarVelocidade();
            break;
        case 9:
            diasDeVidaPerdidosPorCigarro();
            break;
        case 10:
            aluguelCarros();
            break;
        case 11:
            bonusStage();
            break;
        case 0:
            console.log('Saindo...');
            continuar = false;
            break;
        default:
            console.log('Opção inválida!');
    }
    if (opcao !== 0) {
        continuar = readline.keyInYNStrict('Deseja continuar?');
    }
} while (continuar);
console.log('Obrigado por usar o programa! Até a próxima!');