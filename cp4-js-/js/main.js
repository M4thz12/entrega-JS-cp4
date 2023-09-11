
const arraySalarios = [
    650, 1000, 1005, 3000, 2050, 1550, 8600, 2480, 1945, 4030
];
arraySalariosAtualizado = arraySalarios.map(salario =>{
    if (salario <= 2000) {
        return salario * 1.15; // Aumento de 15% para salários abaixo de 2000
    } else {
        return salario * 1.1;  // Aumento de 10% para salários acima de 2000
      }
    })
    console.log(arraySalariosAtualizado)

const salariosAcimaDe2500 = arraySalariosAtualizado.filter(salario => salario >= 2500)
console.log(salariosAcimaDe2500)


const somaSalariosAcimaDe2500 = salariosAcimaDe2500.reduce((somaTotal, salario)=> somaTotal + salario)
console.log(somaSalariosAcimaDe2500)