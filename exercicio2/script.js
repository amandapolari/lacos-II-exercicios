const numeroUsuario = Number(prompt('Insira um número'));
const numerosParaTabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (numero in numerosParaTabuada) {
    const fator = numerosParaTabuada[numero];
    const resultado = fator * numeroUsuario;
    const frase = `
    ${fator} * ${numeroUsuario} = ${resultado}
    `;
    console.log(frase);
}
