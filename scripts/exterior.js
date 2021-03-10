/************************
 * 2. VIBRACIÓN EXTERIOR:
 * Suma de las consonantes del nombre completo. 
 **********************************************/


// Declaro variables:
let consonantes;
let exterior;


// Separa las consonantes del nombre completo:
function extractCons(c) {
    let expresion = /[^aáeéiíoóuúü ]/gi
    c = c.match(expresion)
    consonantes = c
    return consonantes
}


// Diccionario de significados de las consonantes:
const valorExterior = [
    {"Suma valor de consonantes: 1":  `Las personas con esta Vibración de Exterior aparecen ante los demás como individuos dinámicos, llenos de fuerza y entusiasmo. Se les reconoce una brillante mentalidad, independencia e individualismo. Son admirados por su fecunda imaginación y creatividad, deslumbran con su talento, inventiva y originalidad, pero son demasiado dominantes y egoístas para el gusto de muchos. Pueden crearse enemistades por su egolatría y porque quieren destacar y ser importantes, y para lograrlo a veces no reparan en los medios.
                                    Se les admira y envidia por su brillante personalidad, pero asimismo se les acusa de ser engreídos, vanidosos e ir a lo suyo, sin respetar los sentimientos u opiniones de los demás.
                                    Este Exterior será positivo y saldrán a la luz sus buenas cualidades si está reforzado con Vibraciones de Interior y Nacimiento elevados y espirituales.`},
    {"Suma valor de consonantes: 2":  `Las personas que tienen esta Vibración en el Exterior dan una impresión de equilibrio, cordialidad y paz. Aunque a veces se dejan dominar por los nervios y muestran una vena de irritabilidad, se les reconoce como seres encantadores, llenos de dulzura, tacto, diplomacia y buenos propósitos hacia los demás.
                                    Impresionan como personas bonachonas, un poco ingenuas y muy serviciales que generalmente saben ganarse la simpatía y el cariño de todos.
                                    Bajo esta apariencia de calma y estabilidad se esconde mucha inseguridad y falta de confianza en sí mismos.
                                    Por tratarse de una Vibración débil necesitan el apoyo de un Nacimiento o Interior fuerte, estable, enérgico y activo para empujarlos a la acción.`},
    {"Suma valor de consonantes: 3":  `Las personas que tienen esta Vibración en el Exterior dan una impresión de equilibrio, cordialidad y paz. Aunque a veces se dejan dominar por los nervios y muestran una vena de irritabilidad, se les reconoce como seres encantadores, llenos de dulzura, tacto, diplomacia y buenos propósitos hacia los demás.
                                    Impresionan como personas bonachonas, un poco ingenuas y muy serviciales que generalmente saben ganarse la simpatía y el cariño de todos.
                                    Bajo esta apariencia de calma y estabilidad se esconde mucha inseguridad y falta de confianza en sí mismos.
                                    Por tratarse de una Vibración débil necesitan el apoyo de un Nacimiento o Interior fuerte, estable, enérgico y activo para empujarlos a la acción.`},
    {"Suma valor de consonantes: 4":  `Impresionan a los demás como personas serias, sensatas y responsables. No hay nada frívolo ni superficial en ellos; antes bien, aparecen a menudo como demasiado austeros, rigurosos y estrictos, creándose a su alrededor un ambiente de grave formalidad que puede ser frustrante y aburrido para los caracteres más informales y desinhibidos.
                                    Trabajadores tenaces, incansables y esforzados, desconfían de las empresas arriesgadas que no tengan una base sólida. Conservan los pies asentados en la tierra y recelan de las actitudes o personas impetuosas, temerarias o precipitadas. Creen solamente en lo que pueden comprobar por sí mismos y transmiten seguridad y confianza a quienes se relacionan con ellos, y son reconocidas y admiradas su firmeza de carácter y enérgica voluntad. Este Exterior bloquea la facilidad de expresión.`},
    {"Suma valor de consonantes: 5":  `La impresión que produce en los demás este Exterior es de impetuosidad, dinamismo, impaciencia, energía, exuberancia, vigor y pujanza. Pocas Vibraciones crean un ambiente tan efervescente a su alrededor.
                                    Aquí no hay lugar para el aburrimiento ni la monotonía, y deben alejarse de ellos las personas que deseen una vida tranquila y sedentaria.
                                    Su magnetismo, vehemencia y temeridad los hace muy atractivos, pero (aunque parezca increíble) a menudo son tímidos y vulnerables con el sexo opuesto. Además les cuesta crear lazos duraderos porque son demasiado amantes de su libertad.
                                    Sensibilidad a flor de piel y nervios en tensión constante, producen impaciencia, irritabilidad y frecuentes explosiones de cólera. Son conocidos por sus “berrinches” que duran poco, pero que son igualmente temibles. A menudo este Exterior atrae problemas de convivencia.`},
    {"Suma valor de consonantes: 6":  `Exterior que muestra una personalidad encantadora, amable, dulce equilibrada.
                                    Sociables y comunicativos, crean un ambiente relajado y de hospitalidad a su alrededor. Su casa está abierta para todos y les gusta recibir y atender a sus amigos.
                                    Orgullosos de su familia, su hogar y sus posesiones, a menudo les gusta exhibirlos y presumir ante los demás; pero sin malicia porque son nobles y generosos.
                                    Justos, honrados, responsables y laboriosos (cuando tienen una obligación o un trabajo aunque no destacan precisamente por su dinamismo. Pecan más bien de pasivos, remolones o indolentes, porque son auténticos sibaritas que quieren disfrutar placenteramente de la vida y gozar de las relaciones familiares que en todo momento tendrán absoluta prioridad para ellos. Se preocupan y obsesionan por cosas sin importancia.`},
    {"Suma valor de consonantes: 7":  `Exterior que revela ante los demás un temperamento espiritual, místico, profundamente intuitivo e inspirado y una mentalidad intelectual, analítica estudiosa que en ocasiones es más aparente que real.
                                    Generalmente son incomprendidos e incluso rechazados porque se les acusa de frialdad sin que esto sea exacto. Se trata simplemente de que la mayoría de estas personas poseen una elegancia auténtica y natural que emana de su interior. Esta distinción y una apariencia fría y distante que adoptan subconscientemente para encubrir su timidez y defender su intimidad, los aíslan y separa de las demás personas muy a su pesar, porque son sensibles y emotivos y necesitan ternura y comprensión.
                                    Aunque tengan facilidad de expresión en otros aspectos, les cuesta hablar de sus propios sentimientos.
                                    Con Interior o Nacimiento similar se potencia las facultades clarividentes y premonitorias.`},
    {"Suma valor de consonantes: 8":  `Impresionan a los demás con su fuerte personalidad, intensidad y magnetismo, por la seguridad en sí mismos que demuestran y la facilidad con que dominan cualquier situación.
                                    Reconocidos y respetados por su integridad moral, su sentido de la justicia, honradez y valentía, son auténticos líderes que están excepcionalmente dotados para alcanzar cualquier objetivo que se propongan.
                                    Fuerte y explosivo temperamento que mantienen bajo control y que sólo se manifiesta (con furia incontenible) cuando son hostigados o provocados al máximo.
                                    Son admirados por sus aptitudes para el comercio y las finanzas y como son ambiciosos y extremistas y no se conforman con medianías, planean todos sus negocios y empresas a lo grande. Si no frenan su ambición no disfrutarán de la vida ni de los resultados de sus esfuerzos, porque tan pronto logran un objetivo, ya tienen otro en mente.
                                    Apariencia austera y severa que no facilita el contacto.`},
    {"Suma valor de consonantes: 9":  `Las personas con este Exterior son conocidas y admiradas por su generosidad y nobleza. Están siempre conscientes y preocupadas por las necesidades ajenas y se convierten en el «paño de lágrimas» de cuantos los conocen. Con frecuencia se obsesionan por resolver los problemas ajenos y desatienden sus propias obligaciones familiares.
                                    Impresionan también por su exceso de franqueza (que a menudo les causa problemas), su carácter dominante, su clara inteligencia y el entusiasmo y apasionamiento que ponen en todo lo que hacen.
                                    Paradójicamente coexisten en su carácter y muestran a los demás facetas tan opuestas como son su seriedad, formalidad y sentido de responsabilidad con un temperamento bohemio, extravagante y totalmente desinhibido e individualista que les exige vivir su vida a su aire y según su propio código de conducta.`},
    {"Suma valor de consonantes": `A las personas con este Exterior les sería imposible pasar desapercibidas. Sus sobresalientes cualidades los destacan de los demás y les atraen la admiración de cuantos les rodean.
                                    Profundamente espirituales, místicos y clarividentes se imponen a sí mismos la obligación de ayudar a sus semejantes no sólo en sus problemas, sino que sobre todo en su desenvolvimiento y progreso espiritual.
                                    Su paso por la vida deja una huella profunda y provechosa ya que quienes se relacionan con ellos salen enriquecidos con su contacto. Su influencia es tan grande y beneficiosa que nadie vuelve a ser el mismo después de conocerlos, porque tienen el don de animar a las personas a perfeccionarse material y espiritualmente y su luz ilumina la vida de todos.`},
    {"Suma valor de consonantes: 22":  `Las personas con esta Vibración de Exterior producen impacto en su medio ambiente. Todos comentan su arrolladora personalidad y las cualidades que poseen.
                                    Se trata de triunfadores que alcanzan los objetivos que se han propuesto y que pueden acumular riqueza, prestigio y poder.
                                    Gracias al dinero (que ganan con más facilidad que las demás personas) pueden convertirse en auténticos filántropos.
                                    Un genuino 22 o 44 es consciente de que tiene una misión que cumplir, de manera que dedica parte de sus ingresos y sobre todo de sus esfuerzos a trabajar para solucionar los problemas materiales de su comunidad y están a la cabeza de las conquistas sociales que benefician a los más necesitados y desamparados.
                                    Reiteramos que para que se manifiesten las Vibraciones Maestras deben encontrarse rodeadas de Vibraciones armónicas positivas, de manera que todo el Cuadro Numerológico presente abundancia de números afines en armónica relación.`},
    {"Suma valor de consonantes: 33":  `Suma valor de consonantes: 11. A las personas con este Exterior les sería imposible pasar desapercibidas. Sus sobresalientes cualidades los destacan de los demás y les atraen la admiración de cuantos les rodean.
                                    Profundamente espirituales, místicos y clarividentes se imponen a sí mismos la obligación de ayudar a sus semejantes no sólo en sus problemas, sino que sobre todo en su desenvolvimiento y progreso espiritual.
                                    Su paso por la vida deja una huella profunda y provechosa ya que quienes se relacionan con ellos salen enriquecidos con su contacto. Su influencia es tan grande y beneficiosa que nadie vuelve a ser el mismo después de conocerlos, porque tienen el don de animar a las personas a perfeccionarse material y espiritualmente y su luz ilumina la vida de todos.`},
    {"Suma valor de consonantes: 44":  `Suma valor de consonantes: 22. Las personas con esta Vibración de Exterior producen impacto en su medio ambiente. Todos comentan su arrolladora personalidad y las cualidades que poseen.
                                    Se trata de triunfadores que alcanzan los objetivos que se han propuesto y que pueden acumular riqueza, prestigio y poder.
                                    Gracias al dinero (que ganan con más facilidad que las demás personas) pueden convertirse en auténticos filántropos.
                                    Un genuino 22 o 44 es consciente de que tiene una misión que cumplir, de manera que dedica parte de sus ingresos y sobre todo de sus esfuerzos a trabajar para solucionar los problemas materiales de su comunidad y están a la cabeza de las conquistas sociales que benefician a los más necesitados y desamparados.
                                    Reiteramos que para que se manifiesten las Vibraciones Maestras deben encontrarse rodeadas de Vibraciones armónicas positivas, de manera que todo el Cuadro Numerológico presente abundancia de números afines en armónica relación.`},
]


// Muestra la vibración exterior:
function vibracionExterior(res) {
    if(valorExterior.hasOwnProperty(res)) {
        for (let num in valorExterior) {
            document.getElementById("exterior").innerHTML = Object.values(valorExterior[res-1])
        }
    } else {
        document.getElementById("exterior").innerHTML = `No ingresó ningún número.`
    }
    // Inserta subtítulo
    let parent = document.getElementById("exterior")
    let subtitle = document.createElement("h4")
    subtitle.textContent = Object.keys(valorExterior[res-1])
    parent.insertAdjacentElement("beforebegin", subtitle)
    return res
}


export { consonantes, exterior, extractCons, vibracionExterior };