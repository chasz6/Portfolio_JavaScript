/************************************
 * CALCULAR TEMPERAMENTO Y ACTITUDES:
 * En el análisis que ahora nos ocupa usaremos las Vibraciones que ya 
 * fueron separadas para descubrir el Potencial en 7 bloques
 *********************************************************************/


const valorTemperamento = [
    {"Mayoría de números Mentales 1–7–8–9": `Están relacionados con la claridad mental, la curiosidad intelectual, el juicio certero, la ambición, la firmeza de propósitos, la determinación y el empuje que llevan al éxito.
                                            Marcan una fuerte tendencia a la individualidad, la independencia y la originalidad. Confieren capacidad de mando y deseos de destacar.
                                            Los números mentales predisponen a las siguientes profesiones o trabajos: abogados, ejecutivos al frente de grandes empresas, políticos, diseñadores, cirujanos, financieros, banqueros, inventores, investigadores, industriales, detectives, policías, exploradores, educadores, escritores, periodistas, y todas las profesiones relacionadas con las letras.`},
    {"Mayoría de números Emocionales 2–3–6–9": `Expresan la calidad de los sentimientos, la bondad, el espíritu de servicio, la profundidad emocional y el desinterés.
                                            Nos hablan de la simpatía, el encanto, la gentileza, la ingenuidad y el candor. Significan amor, comprensión, sensibilidad y entrega a los demás.
                                            Estos números predisponen a las siguientes profesiones y trabajos: pediatras, ginecólogos, dietistas, psicólogos, enfermería y trabajo en hospitales, educación infantil, obras sociales y de beneficencia, hostelería, diseño y decoración, profesiones artísticas y las relacionadas con el Servicio Social.`},
    {"Mayoría de números Intuitivos 2–7–9": `Son los que nos indican las cualidades psíquicas de la persona.
                                            Intuición, clarividencia, precognición y videncia son algunas de las facultades que confieren.
                                            Enorme curiosidad intelectual que lleva al conocimiento y la sabiduría.
                                            Fe y profundidad espiritual que induce al estudio, a la búsqueda de la verdad y el perfeccionamiento interior.
                                            Los números intuitivos predisponen a las siguientes profesiones y trabajos; psiquiatras, psicólogos, teólogos, sacerdotes, pensadores y filósofos, curanderos, naturópatas, sanadores psíquicos, videntes, hipnotistas, futurólogos, grafólogos, astrólogos, numerólogos, etc.`},
    {"Mayoría de números Físicos 4–5–8": `Representan las cualidades físicas, la fortaleza, el vigor y la resistencia. Muestran una vitalidad, fuerza y pujanza fuera de lo común.
                                            Están asociados también con la tenacidad, la persistencia y la eficiencia.
                                            Confieren magnetismo animal y una gran fuerza curativa en las manos.
                                            Gran sangre fría y presencia de ánimo. Osadía, vitalidad, audacia y espíritu aventurero.
                                            Estos números predisponen a las siguientes profesiones y trabajos: exploradores, navegantes, geógrafos, arqueólogos, mineros, aviadores, escaladores, profesores de artes marciales y educación física, cazadores, pilotos de prueba, reporteros, deportistas de competición en todas las ramas del deporte, y masajistas.`},
    {"Mayoría de números Artísicos: 3–6–9": `Representan las cualidades físicas, la fortaleza, el vigor y la resistencia. Muestran una vitalidad, fuerza y pujanza fuera de lo común.
                                            Están asociados también con la tenacidad, la persistencia y la eficiencia.
                                            Confieren magnetismo animal y una gran fuerza curativa en las manos.
                                            Gran sangre fría y presencia de ánimo. Osadía, vitalidad, audacia y espíritu aventurero.
                                            Estos números predisponen a las siguientes profesiones y trabajos: exploradores, navegantes, geógrafos, arqueólogos, mineros, aviadores, escaladores, profesores de artes marciales y educación física, cazadores, pilotos de prueba, reporteros, deportistas de competición en todas las ramas del deporte, y masajistas.`},
    {"Mayoría de números Científicos 1–4–7–8–9": `Conceden la inteligencia, la claridad y la curiosidad mental, la disciplina, la persistencia y el apasionado interés que caracterizan a los cientíﬁcos e investigadores.
                                            Proporcionan también la mente abierta, progresista y aventurera del que no teme arriesgarse buscando nuevos caminos, y que no se desalienta ante el fracaso momentáneo, sino que está siempre dispuesto a comenzar de nuevo.
                                            Estos números predisponen a las siguientes profesiones y trabajos; cientíﬁcos e investigadores en todas las ramas de la ciencia.`},
    {"Mayoría de números de Negocios 2–4–8": `Poseen todas las cualidades y requerimientos que se precisan para sobresalir en el mundo de los negocios: visión y olfato comercial y financiero, ambición, sentido justo y acertado delos valores, resolución, firmeza de propósitos, perseverancia y una fuerte personalidad. 
                                            Capacidad de análisis y audacia razonada que asume riesgos calculados. Sentido del ahorro, disciplina y dotes de mando. 
                                            Predisponen a las siguientes profesiones y trabajos; comerciantes en pequeña y gran escala, fabricantes, creadores o jefes de grandes empresas, banqueros, economistas, inversores en bienes raíces, cadenas de grandes almacenes o cualquier proyecto donde puedan multiplicar sus ganancias.`},
];


// Busca los índices que tienen el mayor valor
function maximoTemperamento(arr, flat) {
    let indices = [];
    let idx = arr.indexOf(flat);

    while (idx != -1) {
    indices.push(idx);
    idx = arr.indexOf(flat, idx + 1);
    }
    console.log(indices)

    for (let i in indices) {
        console.log(valorTemperamento[indices[i]])
        const parent = document.getElementById("temp")
        const paragraph = document.createElement("p")
        paragraph.textContent += Object.values(valorTemperamento[indices[i]])
        parent.insertAdjacentElement("afterend", paragraph)
        const subtitle = document.createElement("h4")
        subtitle.textContent += Object.keys(valorTemperamento[indices[i]])
        paragraph.insertAdjacentElement("beforebegin", subtitle)
    };
};


export { maximoTemperamento };