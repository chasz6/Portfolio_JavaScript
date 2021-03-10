/**************************************
 * CALCULAR INDIVIDUALIDAD - POTENCIAL:
 * Separación y suma de todos los números que aparecieron al analizar el nombre completo. 
 * Esto es, la cantidad que hay de cada uno de ellos del 1 al 9.
 ***************************************************************/

const valorFrecuencia = [
    {"Mayor frecuencia de 1": `Independencia, empuje y originalidad. Extravagancia y despreocupación del que dirán.
        Mente brillante, llena de ideas y recursos. Genialidad a veces. Facilidad de expresión.
        Líderes audaces y progresistas, no aceptan el dominio de nadie y lucharán siempre por ser auténticamente libres.
        Fuerte personalidad, ambición y deseo de ser reconocido. Egocentrismo, egoísmo. Despreocupación de los problemas ajenos.
        Sarcástico y agresivo, mordaz y temperamental. Falta de tacto.`},
    {"Mayor frecuencia de 2": `Sensibilidad, tacto, consideración y moderación.
        Analíticos, prudentes y comprensivos tienen facilidad para trabajar en equipo y convivir con los demás. Las personas agresivas alteran su sistema nervioso y están dispuestos a sacrificar lo que sea para vivir en paz y armonía.
        Timidez y diplomacia, sinceridad, humildad y bondad. Aman la soledad y luchan por alcanzar el perfeccionamiento interior. Complacer y ser aceptados es una de sus más fuertes motivaciones.
        Demasiado susceptibles, indecisos y caprichosos. La falta de seguridad en sí mismos puede convertirse en paralizantes complejos de inferioridad. No son capaces de tomar decisiones ni defender sus derechos.`},
    {"Mayor frecuencia de 3": `Simpatía, calor humano y alegría los convierten en seres encantadores que hechizan e impresionan a los demás.
        Facilidad de expresión a la hora de demostrar sus sentimientos porque son brillantes y convincentes. A menudo intentan ser el centro de interés. Cuando hacen uso de su encanto y seducción pueden convencer a quien sea, de lo que quieran.
        Amables, sociables, cariñosos y optimistas, casi siempre tienen un gran talento artístico que busca salida o expresión en las bellas artes.
        Superficialidad, chismorreo, astucia. Prometen más de lo que intentan o pueden cumplir. Derroche o dispersión de los esfuerzos por falta de una meta definida. Coquetería y vanidad.`},
    {"Mayor frecuencia de 4": `Orden, método, parsimonia y economía. Valoración del dinero y de lo que él representa y trae consigo.
        Sentido práctico, honestidad, sentido de responsabilidad y espíritu de trabajo. Seriedad, profundidad y autodisciplina. Detallista y concienzudo, no se aventura en empresas arriesgadas. Sólo confía en sus propias fuerzas y en las cosas sólidas y tangibles que él mismo puede comprobar.
        Tenaz y esforzado trabajador, será siempre una persona seria y digna de toda confianza. Testarudo e intransigente. Se exige mucho a sí mismo.
        Rígido, monótono y rutinario. Restricción y dureza. Le cuesta relajarse y expresar sus sentimientos. Extremista defensor de las libertades y derechos propios y ajenos.`},
    {"Mayor frecuencia de 5": `Osadía, audacia y habilidad. Mente rápida y brillante llena de recursos y originalidad.
        Inquietud, deseos de cambio y auténtica necesidad de libertad, variedad y movimiento.
        Atracción por la aventura, los riesgos y lo imprevisto.
        Necesitan mucho autodominio para contrarrestar y aplacar su explosivo temperamento, ya que tienen muchas cualidades que a menudo desperdician por su excesiva impaciencia. Impulsivos, nerviosos y agresivos. Ansiedad y tensión permanente que puede traer problemas de convivencia o de salud.`},
    {"Mayor frecuencia de 6": `Espíritu servicial y hogareño con un gran sentido de responsabilidad y protección hacia todos sus seres queridos.
        Tiernos, dulces, juiciosos, equilibrados y serenos, crean una sensación de bienestar y reposo a su alrededor.
        Habilidad y gusto para desenvolverse en las tareas caseras porque ponen todo su amor en todo lo que hacen. Gran talento artístico.
        Vulnerables, emotivos y sentimentales suelen atormentarse obsesivamente y ver problemas donde no los hay.
        Indecisión, indolencia y falta de empuje que pueden malograr buenas oportunidades de progreso. Sobreprotegiendo a las personas que dependen de ellos pueden llegar a ser absorbentes`},
    {"Mayor frecuencia de 7": `Espiritualidad, fantasía e imaginación. Gran capacidad crítica y de análisis.
        Reservados e introvertidos, necesitan quietud y aislamiento para encontrar la paz y el equilibrio interior.
        Fe, sabiduría, misticismo e intuición en una mente investigadora y brillante. Amplia cultura y gran curiosidad intelectual. Refinamiento interior y exterior. Puede tener muchos conocidos pero pocos amigos porque son muy selectivos y solitarios.
        Represión y melancolía. Temperamento depresivo. Dificultad para expresar los sentimientos. Aislamiento y soledad.`},
    {"Mayor frecuencia de 8": `Admiran el éxito y el poder y odian todo lo mediocre y vulgar. Gran capacidad organizadora, ejecutiva financiera y administrativa.
        Severos pero justos y muy exigentes consigo mismos y con los demás.
        Persistencia, empuje, inteligencia y capacidad de trabajo para alcanzar sus objetivos.
        Carácter fuerte, extremista y radical, no conoce ni acepta los términos medios.
        Rudeza, testarudez e intransigencia. Ambición desmedida. Falta de ética y moral.`},
    {"Mayor frecuencia de 9": `Humanitarismo, nobleza, generosidad y necesidad de justicia, más para los demás que para sí mismos.
        Espíritu fraternal, compasión y deseos de ser útil.
        Gran atracción por los viajes. Más que cualquier otra cosa necesitan libertad de acción y pensamiento.
        Mentalidad lúcida y brillante. Enorme curiosidad. Se apasionan por todo lo que llama su atención, pero tan pronto lo dominan lo dejan por otra cosa. Habilidad artística, interpretativa o literaria. Gran inclinación y facilidad para las ciencias ocultas. Extraordinaria intuición.
        Bohemios y desinhibidos, sienten, piensan y actúan «a su aire».
        Fuerte temperamento, impaciente y dominante. No aceptan la crítica. Caprichosos e histriónicos, pueden tener problemas de convivencia.`},
];


// Busca los índices que tienen el mayor valor
function maximoPotencialidad(arr, flat) {
    let indices = [];
    let idx = arr.indexOf(flat);

    while (idx != -1) {
    indices.push(idx);
    idx = arr.indexOf(flat, idx + 1);
    }
    console.log(indices)

    for (let i in indices) {
        console.log(valorFrecuencia[indices[i]])
        const parent = document.getElementById("ind")
        const paragraph = document.createElement("p")
        paragraph.textContent += Object.values(valorFrecuencia[indices[i]])
        parent.insertAdjacentElement("afterend", paragraph)
        const subtitle = document.createElement("h4")
        subtitle.textContent += Object.keys(valorFrecuencia[indices[i]])
        paragraph.insertAdjacentElement("beforebegin", subtitle)
    };
};



export { valorFrecuencia, maximoPotencialidad };