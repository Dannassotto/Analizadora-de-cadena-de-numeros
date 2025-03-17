const inputNumeros = document.getElementById("inputNumeros");
const resultadoTexto = document.getElementById("resultadoTexto");
const resultadoNumeros = document.getElementById("resultadoNumeros");
const botonEnviar = document.getElementById("botonEnviar");

botonEnviar.addEventListener("click", () => {
    const numeros = inputNumeros.value.split("").map(Number);
    const resultadoHTML = [];

    numeros.forEach((numero, indice) => {
        const esPar = numero % 2 === 0;
        const tamaño = esPar ? `font-size: ${indice + 40}px` : "";
        const color = esPar ? "color: blue" : "";
        const estilo = esPar ? `style="${tamaño}; ${color}"` : "";

        resultadoHTML.push(`<span ${estilo}>${numero}</span>`);
    });

    resultadoNumeros.innerHTML = resultadoHTML.join("");
});

