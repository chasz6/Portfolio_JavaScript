/***********************
* CALCULAR LOS PINÁCULOS.
*************************/

let valorPinaculos = [
    {"El valor de este pináculo es: 1": `Mientras dure este pináculo, tendrás la oportunidad de ser líder. Debes confiar en ti mismo para triunfar.`},
    {"El valor de este pináculo es: 2": `Mientras dure este pináculo, debes tener diplomacia. Es un tiempo para tener paciencia. Es probable que formes alguna sociedad.`},
    {"El valor de este pináculo es: 3": `Mientras dure este pináculo, deberás ocuparte en desarrollar tu capacidad creadora. Estarás inspirado y tendrás buenas ideas. Tienes oportunidad de escribir o disertar.`},
    {"El valor de este pináculo es: 4": `Mientras dure este pináculo, debe trabajar arduamente. Es un período para ahorrar y acumular para necesidades futuras.`},
    {"El valor de este pináculo es: 5": `Mientras dure este pináculo, debes desechar lo viejo y aceptar los cambios. Es un momento de avance y progreso. Es un período en que debe estar activo.`},
    {"El valor de este pináculo es: 6": `Mientras dure este pináculo, tendrás deberes y responsabilidades en el hogar. Inclusive, si eres soltero/a, puede llegar a casarse mientras dure este período.`},
    {"El valor de este pináculo es: 7": `Mientras dure este pináculo, te interesarás por fines educativos y científicos. Debes intentar especializarte.`},
    {"El valor de este pináculo es: 8": `Mientras dure este pináculo, será un buen período financiero. Requerirá de tu parte, mucho esfuerzo y ambición. No debes confiar en la suerte.`},
    {"El valor de este pináculo es: 9": `Mientras dure este pináculo, deberás tener mucha compasión, tolerancia y vivir para los demás. No es un período fácil, porque pocos aprenden a dar sin esperar retribución.`},
    {"El valor de este pináculo es: 11": `Mientras dure este pináculo, es un período de expansión espiritual. Incluso puede tener cierta tendencia religiosa.`},
    {"El valor de este pináculo es: 22": `Pocas personas pueden vivir a la altura de este pináculo. Debe pensar a lo grande y en beneficio del mundo.`},
    {"El valor de este pináculo es: 33": `Mientras dure este pináculo, es un período de expansión espiritual. Incluso puede tener cierta tendencia religiosa.`},
    {"El valor de este pináculo es: 44": `Pocas personas pueden vivir a la altura de este pináculo. Debe pensar a lo grande y en beneficio del mundo.`},
]


// Declaro variables:
let pinaculo1;
let pinaculo2;
let pinaculo3;
let pinaculo4;



// // Esta función calcula los valores de los pináculos hasta llegar a un dígito, excepto cuando es 11, 22, 33 o 44:
function calculoValorPin(v1, v2) {
    let valor;
    if (typeof(v1) === "number") {
        valor = v1 + v2;
    } else {
        valor = v1.concat(v2);
        valor = valor.split("").map(x => +x).reduce((a,b) => a+b);
    }
    switch (valor) {
        case 11:
            console.log(valor);
            break;
        case 22:
            console.log(valor);
            break;
        case 33:
            console.log(valor);
            break;
        case 44:
            console.log(valor);
            break;
        default:
            do {
                valor = valor.toString().split("").map(x => +x).reduce((a,b) => a+b);
            } while (valor > 9);
            break;
    }
    return valor;
};



export { valorPinaculos, calculoValorPin, pinaculo1, pinaculo2, pinaculo3, pinaculo4 };