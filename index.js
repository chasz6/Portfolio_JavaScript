import { reduceFecha, vibracionNacimiento } from "./scripts/nacimiento.js";
import { natalicio } from "./scripts/natalicio.js";
import { extractVowels, reemplazar, calculo, vibracionInterior } from "./scripts/interior.js";
import { extractCons, vibracionExterior } from "./scripts/exterior.js";
import { vibracionPersonalidad, personalidad } from "./scripts/personalidad.js"
import { maximoPotencialidad } from "./scripts/potencialidad.js"
import { maximoTemperamento } from "./scripts/temperamento.js"
import { valorPinaculos, calculoValorPin, pinaculo1, pinaculo2, pinaculo3, pinaculo4 } from "./scripts/pinaculos.js"
// import { long } from "./scripts/tabla.js"



// Tabla de valores numerológicos
// a, j, s = 1
// b, k, t = 2
// c, l, u = 3
// d, m, v = 4
// e, n, ñ, w = 5
// f, o, x = 6
// g, p, y = 7
// h, q, z = 8
// i, r = 9


// Oculta los resultados
document.querySelector(".results").style.display = "none";



// Inicia cálculos
document.getElementById("boton").addEventListener("click", () => {
    calcular();
});



// Limpia el formulario
document.getElementById("reset").addEventListener("click", () => {
    limpiarForm();
    return true
}); 

// Limpia los resultados
document.getElementById("reset").addEventListener("click", () => {
    limpiarResults();
    return true
}); 

function limpiarResults() {
    document.querySelector(".results").style.display = "none";
    document.getElementById("warning").style.display = "none"
}




// Captura los datos ingresados por input

export default function calcular() {
    let fullName = document.getElementById("nombre").value
    console.log(fullName)
    let day = document.getElementById("dd").value
    console.log(day)
    let month = document.getElementById("mm").value
    console.log(month)
    let year = document.getElementById("yy").value
    console.log(year)
    let dateOfBirth = day.concat(month, year);


    // Valida los inputs
    if (year.length !== 4 || fullName.length === 0) {
        const parent = document.getElementById("formulario")
        const warning = document.createElement("p")
        warning.id = "warning"
        warning.style.color = "red"
        warning.style.marginTop = "1rem"
        warning.style.fontWeight = "bolder"
        warning.textContent = `Algunos datos están incompletos.`
        parent.insertAdjacentElement("beforeend", warning)
    }
    


    /**********************************
     * CALCULAR VIBRACIÓN DE NACIMIENTO:
     * Se reduce a un solo dígito la fecha completa de nacimiento.
     ************************************************************/

    // Junta el día, mes y año en un solo arreglo -fecha-
    console.log(`--- La fecha de nacimiento es: ↓`)
    console.log(dateOfBirth)

    console.log("*************")

    // Reduce a un dígito la suma de la fecha de nacimiento (dd-mm-aaaa)
    // Los resultados 11, 22 y 33 no se reducen.

    let digito = reduceFecha(dateOfBirth)
    console.log(`--- La reducción total de la fecha de nacimiento es: ↓`)
    console.log(digito)

    // Imprimo en pantalla
    vibracionNacimiento(digito)

    console.log("*************")


    // Reduce -una sola vez- el mes a un sólo dígito, excepto el 11 que es número maestro

    function reduceMes(m) {
        if (m < 12) {
            m = parseInt(m)
            console.log(m)
        } else {
            m = m.split("").map(x => +x).reduce((a,b) => a+b)
            console.log(m)
        }
        console.log(`La reducción total del mes es: ${m}`)
        return m
    }

    reduceMes(month)

    console.log("*************")





    /**********************************
     * CALCULAR VIBRACIÓN DE NATALICIO:
     * Corresponde al día en el que nacemos.
     **************************************/

    console.log(`--- El día de nacimiento (Vibración de Natalicio) es: ↓`)
    console.log(parseInt(day))

    let dayParsed = parseInt(day)
    natalicio(dayParsed)

    console.log("*************")


    /**********************************
     * CALCULAR LA VIBRACIÓN DEL NOMBRE
     * ********************************
     * 1. Vibración interior.
     * 2. Vibración exterior.
     * 3. Personalidad.
     * 4. Individualidad - Potencialidad.
     * 5. Temperamento - Aptitudes.
     */

    let interior;
    let exterior;
    let personalidad;
    let individualidad;
    let temperamento;




    /************************
     * 1. VIBRACIÓN INTERIOR:
     * Se halla sumando las vocales del nombre completo. 
     **************************************************/

    // Extraigo las vocales del nombre completo y se lo asigno a la variable
    let vocales = extractVowels(fullName);
  
    // Imprimo en consola
    console.log(`--- Las vocales de - ${fullName} - son: ↓`)
    console.log(extractVowels(fullName))

    console.log("*************")

    // Reemplazo las vocales por su valor numérico
    vocales = reemplazar(vocales)

    // Imprimo en consola
    console.log(`--- Las vocales se reemplazaron por: ↓`)
    console.log(vocales)

    console.log("*************")

    // Calculo el valor de la suma de las vocales
    interior = calculo(vocales)

    // Imprimo en consola
    console.log(`--- El valor de la vibración interior es: ↓`)
    console.log(interior)

    // Imprimo en pantalla
    vibracionInterior(interior)

    console.log("*************")





    /************************
     * 2. VIBRACIÓN EXTERIOR:
     * Suma de las consonantes del nombre completo. 
     **********************************************/

    // Extraigo las consonantes del nombre completo y se lo asigno a la variable consonantes
    let consonantes = extractCons(fullName)

    // Imprimo en consola
    console.log(`--- Las consonantes de - ${fullName} - son: ↓`)
    console.log(consonantes)

    console.log("*************")

    // Reemplazo las consonantes por su valor correspondiente
    consonantes = reemplazar(consonantes)

    // Imprimo en consola
    console.log(`--- Las consonantes reemplazas son: ↓`)
    console.log(consonantes)

    console.log("*************")

    // Calculo el valor de las consonantes
    exterior = calculo(consonantes)

    // Imprimo en consola
    console.log(`--- El valor de la vibración exterior es: ↓`)
    console.log(exterior)

    console.log("*************")

    // Imprimo en pantalla
    vibracionExterior(exterior)




    /***********************
     * 3. PERSONALIDAD:
     * Suma de las dos vibraciones anteriores.
     *****************************************/

    // Calculo la personalidad
    personalidad = calculo(interior + exterior)

    // Imprimo en consola
    console.log(`--- El número de personalidad es: ↓`)
    console.log(personalidad)

    // Imprimo en pantalla
    vibracionPersonalidad(personalidad)





    /**************************************
     * CALCULAR INDIVIDUALIDAD - POTENCIALIDAD:
     * Separación y suma de todos los números que aparecieron al analizar el nombre completo. 
     * Esto es, la cantidad que hay de cada uno de ellos del 1 al 9.
     ***************************************************************/

    let repetidos = [];

    // Creo una función que calcula las repeticiones y las guarda si las hay
    // Si el match da null entonces equivale a 0
    function conteo(variable, expresion, resultado) {
        resultado = fullName.match(expresion)
        resultado === null ? resultado = 0 : resultado = resultado.length
        repetidos.push(resultado)
        console.log(`El número ${variable} aparace ${resultado} veces.`)
    }


    // Cuento los número repetidos. (variable, expresion)
    // Imprimo en consola por grupo
    console.log(`--- Las frecuencias de tus números son: ↓`)
    conteo(1, /[aájs]/gi)
    conteo(2, /[bkt]/gi)
    conteo(3, /[cluúü]/gi)
    conteo(4, /[dmv]/gi)
    conteo(5, /[eénñw]/gi)
    conteo(6, /[fox]/gi)
    conteo(7, /[gpy]/gi)
    conteo(8, /[hqz]/gi)
    conteo(9, /[iír]/gi)


    // Busca el mayor valor
    let valores = Math.max.apply(null, repetidos)
    console.log(valores)

    // Imprimo en consola
    console.log(`El elemento de mayor valor se repite: ${valores} veces`)

    // Imprimo los mayores en pantalla
    maximoPotencialidad(repetidos, valores)
    

    // Creo un objeto vacío donde irán almacenándose los números abajo calculados.
    let frecuencia = []
    let ausencia = []





    /************************************
     * CALCULAR TEMPERAMENTO Y ACTITUDES:
     * En el análisis que ahora nos ocupa usaremos las Vibraciones que ya 
     * fueron separadas para descubrir el Potencial en 7 bloques
     *********************************************************************/

    // Separación y agrupación de todos los números que hemos encontrado en la Individualidad.
    let mentales
    let emocionales
    let intuitivos
    let artisticos
    let cientificos
    let negocios
    let fisicos

    // Este ciclo FOR suma los índices de los elementos que se agrupan abajo:
    for (let i = 0; i < repetidos.length; i++) {
        mentales = repetidos[0] + repetidos[6] + repetidos[7] + repetidos[8]
        emocionales = repetidos[1] + repetidos[2] + repetidos[5] + repetidos[8]
        intuitivos = repetidos[1] + repetidos[6] + repetidos[8]
        artisticos = repetidos[2] + repetidos[5] + repetidos[8]
        cientificos = repetidos[0] + repetidos[3] + repetidos[6] + repetidos[7]
        negocios = repetidos[1] + repetidos[3] + repetidos[7]
        fisicos = repetidos[3] + repetidos[4] + repetidos[7]
    }

    console.log(`--- Los temperamentos y actitudes son: ↓`)

    // Números mentales: 1-7-8-9
    console.log(`Fecuencia de números mentales: ${mentales}`)

    // Números emocionales: 2-3-6-9
    console.log(`Frecuencia de números emocionales: ${emocionales}`)

    // Números intuitivos: 2-7-9
    console.log(`Frecuencia de números intuitivos: ${intuitivos}`)

    // Números artísticos: 3-6-9
    console.log(`Frecuencia de números artísticos: ${artisticos}`)

    // Números científicos: 1-4-7-8
    console.log(`Frecuencia de números científicos: ${cientificos}`)
    
    // Números negocios: 2-4-8
    console.log(`Frecuencia de números negocios: ${negocios}`)
    
    // Números físicos: 4 -5 - 8
    console.log(`Frecuencia de números físicos: ${fisicos}`)


    // Creo un arreglo con los siete bloques
    console.log(`--- Se creó un objeto con las frecuencias anteriores que es igual a: ↓`)
    temperamento = [mentales, emocionales, intuitivos, artisticos, cientificos, negocios, fisicos]
    console.log(temperamento)


    // Muestra el máximo del arreglo -temperamento-
    let maximo = Math.max.apply(null, temperamento)
    console.log(`El número máximo es: ${maximo}`)


    // Imprimo en pantalla
    maximoTemperamento(temperamento, maximo)


    console.log("*******")





    /***********************
    * CALCULAR LOS PINÁCULOS.
    *************************/

    // Declaro variables:
    let pinaculo1;
    let pinaculo2;
    let pinaculo3;
    let pinaculo4;


    // Calculo los valores de cada pináculo:
    let valor1 = calculoValorPin(day, month);
    let valor2 = calculoValorPin(day, year);
    let valor3 = calculoValorPin(valor1, valor2);
    let valor4 = calculoValorPin(month, year);


    // Calculo e imprimo los pináculos + impresión de sus valores:
    pinaculo1 = 36 - digito;
    document.getElementById("pin1").innerHTML = Object.values(valorPinaculos[valor1-1]);
    const parent1 = document.getElementById("pin1")
    const def1 = document.createElement("h4")
    def1.textContent = `Pináculo uno: de 0 a los ${pinaculo1} años. - ${Object.keys(valorPinaculos[valor1-1])}.`
    parent1.insertAdjacentElement("beforebegin", def1)

    pinaculo2 = pinaculo1 + 10;
    document.getElementById("pin2").innerHTML = Object.values(valorPinaculos[valor2-1]);
    const parent2 = document.getElementById("pin2")
    const def2 = document.createElement("h4")
    def2.textContent = `Pináculo dos: de los ${pinaculo1 +1} a los ${pinaculo2} años. - ${Object.keys(valorPinaculos[valor2-1])}.`
    parent2.insertAdjacentElement("beforebegin", def2)

    pinaculo3 = pinaculo2 + 10;
    document.getElementById("pin3").innerHTML = Object.values(valorPinaculos[valor3-1]);
    const parent3 = document.getElementById("pin3")
    const def3 = document.createElement("h4")
    def3.textContent = `Pináculo tres: de los ${pinaculo2 +1} a los ${pinaculo3} años. - ${Object.keys(valorPinaculos[valor3-1])}.`
    parent3.insertAdjacentElement("beforebegin", def3)

    pinaculo4 = pinaculo3 + 1;
    document.getElementById("pin4").innerHTML = Object.values(valorPinaculos[valor4-1]);
    const parent4 = document.getElementById("pin4");
    const def4 = document.createElement("h4")
    def4.textContent = `Pináculo cuatro: de los ${pinaculo3 +1} al final de la vida. - ${Object.keys(valorPinaculos[valor4-1])}.`
    parent4.insertAdjacentElement("beforebegin", def4)


    /**
     * CALCULAR PRIMER PINÁCULO:
     * Debemos restar al número 36 el dígito de la suma total de nuestra fecha de nacimiento.
     */

    console.log(`Tu primer pináculo dura desde el nacimiento hasta los ${pinaculo1} años.`)
    
    /**
     * VALOR DEL PRIMER PINÁCULO:
     *  Se suman el día y el mes de la fecha de nacimiento
     */

    console.log(`El valor de tu primer pináculo es: ${valor1}`)



    /**
     * CALCULAR SEGUNDO PINÁCULO:
     * Los pináculos (segundo y tercero) tienen una duración de 9 años.
     * Se suma el valor 9 al primer pináculo.
     */

    console.log(`Tu segundo pináculo dura desde los ${pinaculo1 + 1} hasta los ${pinaculo2} años.`)


    /**
     * VALOR DEL SEGUNDO PINÁCULO:
     * Se suman el día y el año de nacimiento.
     */

    console.log(`El valor de tu segundo pináculo es: ${valor2}`)




    /**
     * CALCULAR TERCER PINÁCULO:
     * Los pináculos (segundo y tercero) tienen una duración de 9 años.
     * Se suma el valor 9 al segundo pináculo
     */

    console.log(`Tu tercer pináculo dura desde los ${pinaculo2 + 1} hasta los ${pinaculo3} años.`)


    /**
     * VALOR DEL TECER PINÁCULO:
     * Se suman los dos Pináculos anteriores.
     */

    console.log(`El valor de tu tercer pináculo es: ${valor3}`)



    /**
     * CALCULAR CUARTO PINÁCULO:
     * Desde el ultimo pináculo +1 hasta el final de la vida 
     */

    console.log(`Tu cuarto pináculo dura desde los ${pinaculo4} años hasta el final de vida.`)


    /**
     * VALOR DEL CUARTO PINÁCULO:
     * Se suman el mes y el año.
     */

    console.log(`El valor de tu cuarto pináculo es: ${valor4}`)



    // Muestra los resultados
    document.querySelector(".results").style.display = "block";
}
