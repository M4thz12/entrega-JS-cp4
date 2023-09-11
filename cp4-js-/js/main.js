let salariosArray = [1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500];

//Ex 1:
//Essa função está criando um novo array com as condições determinadas de aumentos
const salariosAumentados = salariosArray.map(salario => {
    // aumento de 15% para salários até 2000
    if (salario <= 2000) {
        return salario * 1.15;
    } 
    // aumento de 10% para salários acima de 2000
    else {
        return salario * 1.10;
    }
});
//Print do Resultado dos salarios com os aumentos determidados (15% até 2000, 10% mais de 2000)
console.log("Salários com o aumento")
console.log(salariosAumentados);


//Ex 2:
//Essa função tá pegando os resultados do Ex 1 e filtrando somente os salarios maiores q 2500
let maiorDoisQuinhentos = salariosAumentados.filter(salario=> salario> 2500);

//Print do Array dos salarios maiores q 2500
console.log("Salários maiores que 2500")
console.log(maiorDoisQuinhentos);

//Ex 3:
//Nessa função foram atribuidos parametros que servem para somar os salarios do Ex 2
let salarioSoma = maiorDoisQuinhentos.reduce((salario, soma)=> salario + soma);

//Print da soma dos salarios da array do ex 2
console.log(`A soma dos salarios maiores que 2500 é ${salarioSoma}`);