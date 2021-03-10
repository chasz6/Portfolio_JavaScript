/***********************
 * 3. PERSONALIDAD:
 * Suma de las dos vibraciones anteriores.
 *****************************************/


// Declaro variables:
let personalidad;

const valorPersonalidad = [
    {"Interior + exterior: 1": `Es el primero y eso hace que quiera liderar, no le vale con ser el segundo. Es individualista, independiente, creativo, original y autosuficiente. Posee una gran ambición, es decidido y asume riesgos para conseguir ser el mejor. Tiene unas grandes dotes de mando y liderazgo por lo que es ideal para llevar a cabo cualquier emprendimiento o mandar como superior a personas a su cargo, gracias a su enorme carisma, dinamismo y energía. No lleva bien que otros tengan autoridad sobre él, es rebelde y le cuesta acatar órdenes de superiores o de gente que considere inferior.
                                También es honesto, extrovertido y tiene un gran sentido del humor, leal pero en ocasiones algo vengativo y rencoroso.
                                Por otro lado, en cuanto a su vertiente negativa, suele ser hiriente con su sarcasmo, es algo insensible, egoísta y egocéntrico, pudiendo llegar a tener un carácter demasiado autoritario o dictatorial.`},
    {"Interior + exterior: 2": `Persona con una tremenda empatía hacia los demás, adaptativa, cooperativa, servicial, prudente, amable, humilde y bondadosa. Su objetivo en la vida es estar en paz y armonía con el resto de los seres humanos. Odia los conflictos y se evade de ellos, es tranquila y buscará siempre la vía diplomática para resolver cualquier disputa o enfrentamiento. Tiene don para mediar.
                                También es bastante trabajador, eficiente y muy buen amigo. No obstante, su alta dependencia hacia los demás y sus inseguridades hacen que puedan frustrarse, subestimarse o deprimirse con facilidad. Padece de un complejo de inferioridad elevado y es muy susceptible a cualquier cosa que lo exponga emocionalmente.`},
    {"Interior + exterior: 3": `En una persona con mucha energía, vitalidad, irradia y estimula a todo el mundo con su desbordante alegría. Es ingeniosa, de mente ágil, talentosa, afectuosa, comunicativa, altruista y simpática. Sin embargo, son precisamente estas cualidades las que llevadas al extremo pueden llegar a ser negativas convirtiéndose en una persona engreída, frívola, superficial, manipuladora y vanidosa (sólo si se deja guiar por su lado negativo).`},
    {"Interior + exterior: 4": `Persona muy ordenada, perseverante, práctica, eficiente, racional, responsable y previsora. Se podría decir que son como “hormiguita obrera” no para de trabajar y de ser tremendamente meticulosa en todo lo que hace. Posee una naturaleza tranquila, no es muy conversador pero sí observador, lo que les vale para analizar cualquier situación.
                                No tiene un gran sentido del humor, ni un gran desparpajo, pero lo devuelve con grandes dosis de honestidad, sinceridad y lealtad. Su carácter reservado le priva de tener muchos amigos, pero los que tiene son de calidad y ellos saben que se puede confiar en él.
                                Por el lado negativo, hay que decir que puede llegar a ser muy intransigente y testarudo con aquellas personas que no rinden como deben hacerlo, siendo altamente implacable y exigente con gente a su cargo. Su carácter introvertido, solitario le puede convertir en una persona seca y aburrida. Se adapta mal a los cambios, es muy rígido en sus pensamientos.`},
    {"Interior + exterior: 5": `Personas muy vivaracha, polifacética, multitarea, inquieta, con una creatividad e inteligencia desbordantes. Siempre en constante cambio, experimentando, viviendo nuevas aventuras. Le gusta la libertad, no sentirse atado, quiere ser libre y poder llevar una vida donde disfrutar de cada cosa.
                                A veces es cambiante e imprevisible, va de un lado a otro y esto puede ocasionarle algunos problemas o dejar muchas cosas abiertas, pero todas sin hacer y sin acabar por lo que se acaba dispersando si no lo controla. Persona muy adaptativa a todo tipo de cambios y se lleva bien con la gente, debido principalmente a su energía, vitalidad y su carácter abierto y entusiasta.
                                Por el lado negativo, su punto más débil es su falta de perseverancia y centrarse en obtener resultados de todo su trabajo y esfuerzo. Abandona con facilidad, le falta ser más paciente. También su naturaleza cambiante hace que pueda tener brotes de agresividad e irritabilidad sin control ocasionándole muchos problemas.`},
    {"Interior + exterior: 6": `Persona muy emotiva, dulce, humanitaria, generosa, detallista y familiar. En un número destinado a ayudar a los demás y necesita vivir en un entorno de paz, tranquilidad, armonía y equilibrio, en definitiva, estabilidad. También tiene un gran talento, pero su pasividad y parsimonia hace que necesite que la gente tire de ellos para que se ponga a trabajar.
                                Por otro lado, es tradicionalista, alegre, honesto, noble, compasivo y romántico. También es algo sibarita, le gusta los buenos placeres de la vida.
                                En cuanto a lo negativo, puede llegar a ser algo celoso, posesivo, manifestar posiciones rígidas e inflexibles, pesimista, manifestar cierta pasividad y pereza a la hora de afrontar los problemas o iniciar algunos proyectos, además de no asumir sus responsabilidades cuando tiene que hacerlo.`},
    {"Interior + exterior: 7": `Persona con un carácter enigmático, misterioso, hermético, tiene un mundo interior muy rico y le gusta las cuestiones filosóficas, el estudio y le apasiona aprender algo nuevo cada día. Es individualista, retraído, pose una gran inteligencia e intuición. Capta cosas que otros no ven o no sienten, derivado de esto posee una capacidad de observación fuera de lo común y unas dotes para preocuparse de temas que van más allá de lo simplemente material.
                                Le gusta vivir bien, tiene buen gusto, desea una vida cómoda y refinada. Sin embargo, se muestra distante y cortante ante los demás, lo que hace que mucha gente no quiera mantener ningún tipo de contacto con él. No obstante, es bondadoso, altruista, tienen mucha seguridad en sí mismo y es buen samaritano.
                                Por el lado negativo, puede ser frío, pesimista, desconfiado, egoísta y tendente a la depresión u otros problemas. Está obsesionado con la higiene a un nivel que roza lo anormal.`},
    {"Interior + exterior: 8": `La persona bajo el número 8 tiene una energía, decisión y fuerza desbordante. También es tremendamente ambiciosa y cuenta con una voluntad cuasi inquebrantable y una perseverancia combativa espectacular.
                                Es apasionado en todo lo que hace, con un sentido de justicia y ética muy fuertes. Tiene mentalidad práctica y positiva, una gran astucia, autocontrol y grandes dotes para el liderazgo. No obstante, sus ganas de comerse el mundo y una ambición tan elevada pueden ser tan altas que puede sentirse frustrado por no lograr el máximo que él quiere dar. Le importa demasiado el dinero y el éxito y le cuesta estar satisfecho con la posición que ocupa, siempre quiere más.
                                Por el lado negativo, puede ser una persona muy exigente, egocéntrica, materialista, temperamento fuerte, intolerante, terco, frío y no sabe cuándo parar, esto puede generale problemas de salud, ya que va a unos extremos que a veces su cuerpo y mente no pueden aguantar.`},
    {"Interior + exterior: 9": `El 9 es el número del amor universal y como tal, es una persona bañada por esa energía, muy abnegada, entregada, altruista, noble, inteligente, eficaz, perfeccionista, disciplinada, intuitiva y generosa. Es gente que inspira confianza a los demás, busca ayudar a otros sin pedir nada a cambio y dispuesto a echar una mano siempre que se necesite.
                                Le gusta sentirse libre, es algo orgulloso y muy independiente, transmite carisma, simpatía, encanto, misterio, ama las cosas bien hechas y la legalidad.
                                Por el lado negativo, puede llegar a ser una persona impulsiva, irascible, no soporta los fallos de los demás, neurótico, impaciente, se pone a la defensiva y a veces adopta un rol victimista. Si se deja llevar por esta postura, se romperá en mil pedazos y sus valores se quebrantarán. Para que esto no suceda debe aumentar sus ideales y no ceder ante las injusticias.`},
    {"Interior + exterior: 11": `Nos habla de una gran espiritualidad de la persona que lo posee. La persona debe tratar de vivir a la altura de dicho número. Debe escuchar su voz interior y no dejarse llevar por las apariencias. Si escucha a su intuición o a su voz interior encontrará la verdad. Por lo tanto, deben aprender a tener confianza en sí mismos; aunque el mundo piense de forma diferente no deben preocuparse si siguen lo que les dicta su intuición, pues ella siempre los guiará por el camino correcto. Son personas que ya han transitado la mitad de su camino espiritual, en este largo peregrinaje que son las sucesiones de vida y por lo tanto han adquirido un alto grado de desarrollo psíquico.
                                Obviamente, si la persona no tiene el coraje de vivir a la altura de dicho número maestro, deberá conformarse con vivir en una vibración inferior, dada por el número 2. (11 = 1+1 = 2). En este caso, la persona desciende su nivel y lamentablemente pierde una gran oportunidad de desarrollar su número maestro y poder así seguir evolucionando en el largo camino espiritual. Como se trata de un número maestro, la persona tiene la consigna de pensar en los demás, antes de pensar en sí mismo.`},
    {"Interior + exterior: 22": `En este caso, las personas han transitado la totalidad de la experiencia terrena habiendo adquirido un enorme conocimiento. Son personas que dejan su huella en la humanidad, pueden convertirse en dirigentes de importantes países, o son los constructores del mundo. Para ellos el mundo es su casa. Las personas con un numero 22, adquieren fama internacional.
                                Obviamente, aquellos que no consigan vivir a la altura vibracional, que el número 22 les impone tendrán que conformarse con vivir como un número 4 (22 = 2+2 = 4). Es lamentable que pierdan una oportunidad tan valiosa para su progreso espiritual (ya que debieron luchar mucho para conseguir tener esta oportunidad y cuando la han conseguido la dejan escurrir).`},
    {"Interior + exterior: 33": `Es un número muy potente. Pocas personas pueden vivir a la altura de dicho número. Por lo general son grandes líderes espirituales.
                                Son personas que han atravesado todas las experiencias en el plano terrenal y se sienten capaces de recorrer nuevamente todo el camino. Obviamente, aquellos que no estén a la altura de dicho número deberán conformarse a vivir como un número 6. (33 = 3+3 = 6).`},
    {"Interior + exterior: 44": `Es un número muy potente. Pocas personas pueden vivir a la altura de dicho número. Por lo general son grandes líderes económicos, empresariales o políticos.
                                Son personas que han atravesado todas las experiencias en el plano terrenal y se sienten capaces de recorrer nuevamente todo el camino. Obviamente, aquellos que no estén a la altura de dicho número deberán conformarse a vivir como un número 8. (44 = 4+4 = 8).`},
]


// Muestra la vibración exterior:
function vibracionPersonalidad(res) {
    if(valorPersonalidad.hasOwnProperty(res)) {
        for (let num in valorPersonalidad) {
            document.getElementById("personalidad").innerHTML = Object.values(valorPersonalidad[res-1])
        }
    } else {
        document.getElementById("personalidad").innerHTML = `No ingresó ningún número.`
    }
    // Inserta subtítulo
    let parent = document.getElementById("personalidad")
    let subtitle = document.createElement("h4")
    subtitle.textContent = Object.keys(valorPersonalidad[res-1])
    parent.insertAdjacentElement("beforebegin", subtitle)
    return res
}


export { personalidad, vibracionPersonalidad };