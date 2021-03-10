/**********************************
 * CALCULAR VIBRACIÓN DE NACIMIENTO:
 * Se reduce a un solo dígito la fecha completa de nacimiento.
 ************************************************************/

// Creo la clase nacimiento:
class Nacimiento {
    constructor(subtitulo, intro, trabajo, economia, amor) {
        this.subtitulo = subtitulo,
        this.intro = intro,
        this.trabajo = trabajo,
        this.economia = economia,
        this.amor = amor
    }
    getSubtitulo() {
        return this.subtitulo;
    }
    getIntro() {
        return this.intro;
    }
    getTrabajo() {
        return this.trabajo;
    }
    getEconomia() {
        return this.economia;
    }
    getAmor() {
        return this.amor;
    }
}


// Instancio nueve objetos a partir de la clase nacimiento:
const cero = new Nacimiento("Error", "Error", "Error", "Error")

const uno = new Nacimiento(
    "Vibración 1",
    "Creativo, independiente, original y autosuficiente. Aúnan una extraordinaria voluntad con su espíritu emprendedor. Tienen la capacidad de liderar y dotes de mando y son llamados a destacar en todo lo que se propongan. Su lado negativo es que a veces son excesivamente agresivos, egocéntricos, pretenciosos y obstinados.",
    "Poseen una mente brillante y una gran capacidad para liderar. Trabajan duro para conseguir sus metas y objetivos. Son líderes natos por eso no es raro ver como grandes gobernantes o jefes de empresas.",
    "En cuanto al dinero no les faltará y podrán contar con fortuna en su vida, siempre y cuando dominen las situaciones y controlen de alguna manera los riesgos asociados a la actividad empresarial.",
    "Son un número muy conquistador, afectuosos y apasionados. Sin embargo, tienen que tener cuidado para no descuidar la llama que mantiene una relación.",
)

const dos = new Nacimiento(
    "Vibración 2",
    "Equilibrio, consideración hacia los demás, empatía, receptividad, cooperación. Buen compañero o pareja. Buen socio y diplomático. Sabe mediar en conflictos y llegar a acuerdos. Su lado negativo es que se pueden ahogar y los detalles y caer en depresión.",
    "Personas muy trabajadoras, eficientes, responsables y cumplidoras. Es más, posiblemente su defecto es que son extremadamente perfeccionistas y meticulosos. No son líderes, todo lo contrario, prefieren trabajar en la sombra y secundar las ideas de otros.",
    "Tendrán que tener cuidado con las personas que se rodean y se asocian, puesto que no dependerá de ellos directamente la gestión económica, ya que por su forma de ser, rehúyen de esos cometidos.",
    "Las personas bajo este número, son cariñosos, románticos y desprenden una frecuencia dulce y pacífica. Siempre buscan agradar a la gente y más si es a su pareja, buscarán la paz y armonía en todas y cada una de sus relaciones. Le gusta el trato con la gente, por lo que no le faltará amigos, los apoyará, dará todo su cariño y comprensión cuando lo necesiten.",
)

const tres = new Nacimiento(
    "Vibración 3",
    "La expresión artística, sociable, simpático y con espíritu derrochador. Optimista, le gusta disfrutar de la vida. Buenos amantes. Personas con sentido del humor, capaces de generar las ideas más importantes por su forma de pensar. Su lado negativo es que se pueden dispersar en sus esfuerzos y dejar cosas inacabadas.",
    "Gracias a su agilidad mental, audacia, talento e inteligencia suelen sobresalir en casi cualquier ámbito al que se dediquen.",
    "En cuanto al dinero, tienen mucha facilidad para ganarlo y eso es positivo. Su inteligencia y capacidad de administración de finanzas está ahí. Ahora bien, son personas bastante generosas y derrochadoras por lo que deben saber controlarse y ceñirse a un presupuesto determinado, si no dilapidarán grandes cantidades en poco tiempo.",
    "Afectuosos, tiernos, comprensivos, considerados y apasionados. Se entregan con facilidad en sus relaciones y les gusta disfrutar de la vida junto con su pareja. Son buenos amigos, su carácter alegre, optimista y su energía desbordante, les confiere un aura de carisma y brillantez donde la gente se siente atraída.",
)

const cuatro = new Nacimiento(
    "Vibración 4",
    "Grandes valores, leales, rígidos y pragmáticos. Mente científica y detallista, capaces de lograr todo gracias a su gran capacidad de organización. Autoridad personal por el cumplimiento de sus obligaciones y su rectitud. Su lado negativo es su falta de imaginación, testarudez, lentitud y seriedad.",
    "Son trabajadores incansables, adoran los trabajos donde se requiera meticulosidad, detalle, precisión, paciencia e incluso trabajos monótonos, rutinarios que otros odiarían a ellos no les disgusta hacerlos. No son grandes líderes, ni genios creativos, pero lo suplen muy bien con su perseverancia y dedicación a todo lo que hacen.",
    "En cuanto al dinero, su gran capacidad previsora y prudencia, hace que no puedan vivir sin un buen colchón económico detrás. Saben cuándo y cómo invertir sacando un rendimiento muy positivo al dinero que ganan duramente trabajando.",
    "Su carácter tímido, reservado, introvertido y su parquedad en las palabras, hace que no sean unos grandes conquistadores. Tampoco expresan sus sentimientos y cuando lo hacen, se trata de un ejercicio titánico para ellos. A pesar de todo esto, un 4 te dará protección, cariño, lealtad y honestidad sin que se lo pidas, dará todo por ti.",
)

const cinco = new Nacimiento(
    "Vibración 5", 
    "Son personas muy vivarachas, polifacéticas, multitareas, inquietas, con una creatividad e inteligencia desbordantes. Siempre en constante cambio, experimentando, viviendo nuevas aventuras. Les gusta la libertad, no sentirse atados, quieren ser libres y poder llevar una vida donde disfrutar de cada cosa. A veces son cambiantes e imprevisibles, van de un lado a otro y esto puede ocasionarles algunos problemas o dejar muchas cosas abiertas, pero todas sin hacer y sin acabar por lo que se acaban dispersando si no lo controlan. Son personas muy adaptativas a todo tipo de cambios y se llevan bien con la gente, debido principalmente a su energía, vitalidad y su carácter abierto y entusiasta. Por el lado negativo, su punto más débil es su falta de perseverancia y centrarse en obtener resultados de todo su trabajo y esfuerzo. Abandonan con facilidad, les falta ser más pacientes. También su naturaleza cambiante hace que puedan tener brotes de agresividad e irritabilidad sin control ocasionándoles muchos problemas.",
    "Son personas “todoterreno” hacen de todo y muchas cosas a la vez, esto se debe a la brillante inteligencia que tienen, su creatividad e ideas innovadoras, sumado a su entusiasmo y vitalidad hace que puedan triunfar en cualquier ámbito laboral que se lo propongan. Ojo, pero siempre que se enfoquen y no desperdicien su talento yendo de un lado a otro. Necesitan vivir día a día como si fuera el último y esto se plasma en su trabajo en donde se fijará retos y desafíos. Cuidado con caer en la monotonía y el aburrimiento o dejará rápidamente su trabajo o si sigue en él, sacará su mal carácter y se volverá irascible. ¿Profesiones en las que pueden destacar? Aquellas en donde haya retos, se vivan aventuras o los que tengan que ver con la creatividad y la relación y trato con la gente. Por ejemplo: Profesiones que tengan riesgo o aventura (cazadores, aviadores, detectives), el arte, investigación, política, leyes, comercio.",
    "En cuanto al dinero, no es algo que deseen en sus vidas, no es su prioridad ni su motivación. Tienen cualidades para ganar dinero cuando quiera, pero es difícil que lo tengan durante mucho tiempo, son generosos pero también descuidados. No saben administrarlo, ni ahorrarlo, les gusta el riesgo así que se exponen a perderlo. Sin embargo, son muy adaptativos por lo que pueden vivir con poco y con mucho. Recomendable que otra persona les eche una mano administrándolo adecuadamente.",
    "Derrochan pasión por los cuatro costados, son personas muy románticas, idealistas, tiernas, poseen un magnetismo natural y encanto que los hace tremendamente conquistadores. Eso sí, necesitan a una persona con vitalidad, energía, con un temperamento y forma de ser similares, aventureras y entusiastas por vivir el día a día al máximo. No busca un hogar tranquilo y ordenado. Deben tener cuidado al elegir a su pareja porque si se sienten atados o infelices con personas que no encajen con su modo de vivir, sacarán su agresividad e irritabilidad sin control, volviéndose muy infelices. En cuanto a los amigos, suele tener un buen don con la gente, es extrovertido, lleno de energía, vitalidad, entusiasmo. Si tiene amigos serán personas que les guste la aventura y que sean totalmente afines a él, si no perderá rápidamente el interés en ti. Son cambiantes por lo que no les importa ir con un grupo de amigos como con otros, depende de cómo te lo ganes. Con respecto a su papel en la familia, son padres que no quieren agobiar a sus hijos con mucha disciplina, orden y autoridad, ellos quieren vivir la vida y dejarla vivir al resto. No obstante, a veces sacan su vena colérica, irascible y agresiva sin control, cosa que no es buena en la educación de los hijos. Les cuesta llevar un comportamiento acorde y parejo.",
)

const seis = new Nacimiento(
    "Vibración 6", 
    "Son personas muy emotivas, dulces, humanitarias, generosas, detallistas y familiares. Son un número destinado a ayudar a los demás y necesitan vivir en un entorno de paz, tranquilidad, armonía y equilibrio, en definitiva, estabilidad. También tienen un gran talento, pero su pasividad y parsimonia hace que necesiten que la gente tire de ellos para que se pongan a trabajar. Por otro lado, son tradicionalistas, alegres, honestos, nobles, compasivos y románticos. También son algo sibaritas, les gusta los buenos placeres de la vida. En cuanto a lo negativo, pueden llegar a ser algo celosos, posesivos, manifestar posiciones rígidas e inflexibles, pesimistas, manifestar cierta pasividad y pereza a la hora de afrontar los problemas o iniciar algunos proyectos. Además de no asumir sus responsabilidades cuando tienen que hacerlo.",
    "Poseen una capacidad excelente para actividades artísticas, creativas y todo lo que tenga que ver con obras sociales o de ayuda a la comunidad. Tienen talento y responsabilidad, pero su enorme apego a familia y amigos pueden lastrar su triunfo y éxito. Además la desidia y pereza que a veces tienen les impide prosperar y mejorar en su respectivo ámbito. ¿Profesiones en las que pueden destacar? Aquellas que tengan que ver con la parte artística o de ayuda social. Ejemplo: arte en general (música, teatro, cine, pintura, danza…), medicina, enseñanza, ong´s, etc…",
    "En cuanto al dinero, son bastante sibaritas y les gusta la buena vida: comida, vino, ropa y por supuesto todo el confort que requieren. El dinero para ellos es importante para poder adquirir dichas comodidades. No es generoso en este ámbito, tirando más bien a tacaño, incluso con los suyos. Esa prudencia o control sobre el dinero, hace que les cunda más y consigan lo que ellos necesitan. Suelen ser ahorradores, no derrochan en exceso, ni tampoco se endeudan siendo buenos administradores.",
    "Románticos empedernidos, humanitarios, emocionales, dulces e intensos. Se toman sus relaciones muy en serio, buscan en ellas formar un hogar donde tener estabilidad, armonía y paz, un pequeño refugio donde resguardarse del mundo exterior. Son leales, honestos y de total confianza. Transmiten amor y felicidad en su relación. Sin embargo tienen que tener cuidado y controlar su temperamento. Además de no agobiar y asfixiar a su pareja con su constante dependencia. Si consiguen dar cierta libertad conseguirán una relación muy sana. Los número 6 son personas muy sociables, sinceras, de buena energía y optimismo. Les gusta rodearse de gente y vivir la vida con compañía, odian la soledad y eso hace que dependan en exceso de ellos. Esto provoca problemas, celos y disputas, además de aguantar mucho más de lo que deberían con tal de no perder a la gente que quiere. En cuanto a la familia, tienen unos valores tradicionales bastante altos y un espíritu familiar encomiable, para ellos la familia y el hogar lo son todo. Son unos auténticos padrazos y buscan que sus hijos sean perfectos o educarlos de la mejor manera posible. En su afán por ello, pueden ser demasiado asfixiantes por lo que deben dejar un poco de libertad e independencia a sus hijos para que vayan formando su propia personalidad.",
)

const siete = new Nacimiento(
    "Vibración 7", 
    "Son personas con un carácter enigmático, misterioso, hermético, tienen un mundo interior muy rico y les gusta las cuestiones filosóficas, el estudio y les apasiona aprender algo nuevo cada día. Son individualistas, retraídos, poseen una gran inteligencia e intuición. Captan cosas que otros no ven o no sienten, derivado de esto poseen una capacidad de observación fuera de lo común y unas dotes para preocuparse de temas que van más allá de lo simplemente material. Les gusta vivir bien, tienen buen gusto, desean una vida cómoda y refinada. Sin embargo, se muestran distantes y cortantes ante los demás, lo que hace que mucha gente no quiera mantener ningún tipo de contacto con ellos. No obstante, son bondadosos, altruistas, tienen mucha seguridad en sí mismos y son buenos samaritanos. Por el lado negativo, pueden ser fríos, pesimistas, desconfiados, egoístas y tendentes a la depresión u otros problemas. Están obsesionados con la higiene a un nivel que roza lo anormal.",
    "Son personas hechas a sí mismas, estudiosos, disciplinados, meticulosos y queriendo obtener la perfección en todo lo que hacen. Así que cualquier ámbito que requiera dotes de inteligencia es perfecto para ellos. Saben analizar al milímetro y percatarse de detalles que otros pasan por alto. Aunque son personas serias y poco comunicativas, su gran labor en el trabajo hace que sean respetados y admirados por sus compañeros, gracias a sus conocimientos. Es recomendable que este tipo de personas trabajen mejor solos o sean sus propios jefes, ya que a menos que estén bajos las órdenes de otra persona a la que consideren inteligente o con cierto nivel, no podrán dar todo su potencial con alguien a quien no respetan. Cuando se fijan una meta son muy perseverantes. Tienen excelentes ideas, pero carecen de sentido comercial para los negocios. ¿Profesiones en las que pueden destacar? Aquellas donde se requiera de muchos conocimientos, análisis, precisión y que tengan un alto grado de espiritualidad. Ejemplos: actividades o profesiones relacionadas con ciencia, investigación, enseñanza, arte, esoterismo, ciencias ocultas, psicología, psiquiatría, empleos conectados con la naturaleza, etc…",
    "En cuanto al dinero, aunque tienen una gran capacidad para conseguir o generar dinero, carecen de la habilidad para administrarlo correctamente. No necesitan de grandes lujos, sólo el suficiente dinero para llevar una vida refinada.",
    "Les cuesta conectar con la gente, no se involucra emocionalmente en sus relaciones, actuando más con la cabeza que con el corazón. Son parcos en palabras, poco habladores, comunicativos, introvertidos y algo tajantes. No les gusta relacionarse en sociedad, por lo que tienden a ser personas muy solitarias costándole mantener una relación con alguien. Su carácter frío y distante, perjudica bastante su conexión con la gente y dificulta que haya un mínimo de estabilidad con su pareja. Sin embargo, se le admira bastante, son soñadores, emotivos y sensibles, pero más por educación que por afecto. Un número de los más solitarios de la numerología. Tiene que aprender a soltarse y a saber comunicarse para poder llevar una vida más feliz en este ámbito. Suelen tener pocos amigos, incluso íntimos o muy cercanos. No les gusta profundizar en sus sentimientos, son poco habladores, comunicativos y no le gusta relacionarse en exceso y menos aparecer en grandes eventos o fiestas. Seleccionan muy bien a sus amistades y con los que considera realmente amigos se muestran muy leales, generosos y desinteresados. En cuanto a la familia, son padres demasiado perfeccionistas, exigentes y esto les trae problemas a la hora de actuar como buenos progenitores. Sin embargo, ponen de su parte para cumplir con todas las obligaciones y responsabilidades que eso conlleva. Su dificultad para comunicarse y conectar emocionalmente hace falta que la trabajen, sobre todo para llevar una relación padre-hijo basada en el cariño, respeto y admiración mutuas.",
)

const ocho = new Nacimiento(
    "Vibración 8", 
    "Las personas bajo el número 8 tienen una energía, decisión y fuerza desbordante. También son tremendamente ambiciosos y cuentan con una voluntad cuasi inquebrantable y una perseverancia combativa espectacular. Son apasionados en todo lo que hacen, con un sentido de justicia y ética muy fuertes. Tienen mentalidad práctica y positiva, una gran astucia, autocontrol y grandes dotes para el liderazgo. No obstante, sus ganas de comerse el mundo y ambición tan elevadas pueden ser tan altas que pueden sentirse frustrados por no lograr el máximo que ellos quieren dar. Les importa demasiado el dinero y el éxito y les cuesta estar satisfechos con la posición que ocupan, siempre quieren más. Por el lado negativo, pueden ser personas muy exigentes, egocéntricas, materialistas, temperamento fuerte, intolerantes, tercos, fríos y no saben cuándo parar, esto puede generales problemas de salud, ya que van a unos extremos que a veces su cuerpo y mente no pueden aguantar.",
    "Han nacido para conquistar cualquier meta y objetivo que se pongan. Son trabajadores, perspicaces, inteligentes, inquebrantables y con instinto para los negocios. Saben cuándo tienen que arriesgar y hasta donde pueden hacerlo, ya que poseen un fuerte autocontrol. Su ambición no tiene límites y la energía y fuerza vital que tienen los acompaña tras de sí. Sólo piensan a lo grande, no se conforman con el trozo de pastel pequeño, lo quieren todo y saben que para hacerlo sólo pueden concentrarse en su proyecto y nada más, descuidando no sólo a sus seres queridos, sino hasta sus propias necesidades. ¿Profesiones en las que pueden destacar? muchísimos ámbitos aunque especialmente en la medicina, tanto tradicional como alternativa, educación, negocios empresariales, finanzas, informáticos, administración, militares, deportes, etc…",
    "En cuanto al dinero, son excelentes administradores, tienen dotes para ello y poseen grandes dosis de autocontrol, pero ojo porque también les gusta arriesgar, por lo que tienen que aprender a sopesar los pros y contras y no salirse del plan establecido.",
    "Su ambición les absorbe tanto que no tienen casi tiempo de intimar con otras personas, pero cuando lo hacen son extremadamente exigentes y eso hace que su pareja se ahogue o se sienta muy presionada. Además su trabajo les consume y están muy ocupados como para llevar una vida en pareja tradicional y más sociable. Sin embargo, es la pasión que pone a cada cosa la que hace que este número tenga un gran magnetismo natural, transmite intensidad y eso los vuelve bastantes veces irresistible. Son personas muy complejas, tan pronto son enormemente fogosos y apasionados, como pueden pasar absolutamente de todo cuando están enfocados en un proyecto. Como amigos son personas muy leales, generosos e íntegros (tienen un valor de justicia y ética elevados). No les gusta que la gente no sea honrada o que les ofendan. Además son rencorosos y vengativos si les haces algo malo te lo guardarán y pagarán más adelante. Con respecto a la familia, son padres poco flexibles, estrictos y exigentes. Deben tratar de mejorar esos aspectos, dar algo más de “cancha” o libertad a los hijos y por supuesto, más ternura y amor. A pesar de todo esto, intentan enseñar a sus hijos a ser justos, honestos y ecuánimes, trasladando valores nobles en su educación.",
)

const nueve = new Nacimiento(
    "Vibración 9", 
    "Su ambición les absorbe tanto que no tienen casi tiempo de intimar con otras personas, pero cuando lo hacen son extremadamente exigentes y eso hace que su pareja se ahogue o se sienta muy presionada. Además su trabajo les consume y están muy ocupados como para llevar una vida en pareja tradicional y más sociable. Sin embargo, es la pasión que pone a cada cosa la que hace que este número tenga un gran magnetismo natural, transmite intensidad y eso los vuelve bastantes veces irresistible. Son personas muy complejas, tan pronto son enormemente fogosos y apasionados, como pueden pasar absolutamente de todo cuando están enfocados en un proyecto. Como amigos son personas muy leales, generosos e íntegros (tienen un valor de justicia y ética elevados). No les gusta que la gente no sea honrada o que les ofendan. Además son rencorosos y vengativos si les haces algo malo te lo guardarán y pagarán más adelante. Con respecto a la familia, son padres poco flexibles, estrictos y exigentes. Deben tratar de mejorar esos aspectos, dar algo más de “cancha” o libertad a los hijos y por supuesto, más ternura y amor. A pesar de todo esto, intentan enseñar a sus hijos a ser justos, honestos y ecuánimes, trasladando valores nobles en su educación.",
    "Tienen grandes capacidades, inteligencia, disciplina, son responsables y dan unos resultados muy eficientes. Así que pueden destacar en casi cualquier ámbito profesional que se propongan. Sin embargo, destacan más en profesiones donde se requiera de observación y de ayuda a los demás. ¿Profesiones en las que pueden destacar? Principalmente todas aquellas que tengan que ver con causas humanitarias o servicios sociales tales como la medicina, enseñanza, leyes, religión, psicología, investigadores, comunicadores, arte, etc…",
    "En cuanto al dinero, no son materialistas, ni el dinero es para ellos lo más importante, sólo quieren una vida tranquila, rodeados de la gente que quiere. Sin embargo, deben tener cuidado con la administración de sus bienes, ya que sus ganas de ayudar a los demás, hace que incluso les creen perjuicios económicos o generen ciertas deudas. Es aconsejable que en dichos casos dejen la administración de su dinero en manos de personas con mejor criterio y gasto.",
    "Las personas número 9 suelen ser desconfiadas en el amor, quizás por miedo a sufrir y ser lastimadas. Son personas auténticas, de buenos valores que les impide ver los engaños que pueden hacer otras personas hacia ellos, incluida sus parejas. Son idealistas, románticos, emotivos, sensibles y buscan el amor ideal, el summum. Y cuando lo encuentran aún les cuesta abrirse un poco, necesitan que se ganen su confianza. También aman formar un hogar y una familia donde encontrar la paz y armonía que tanto desean. Suelen tener pocos amigos, pero su amistad es valiosa, sincera, fiel, leal y honesta. Además su altruismo hará que siempre puedas confiar en él para lo que necesites, ya sea consejo, apoyo o dinero. También le gusta invitar a sus amigos a eventos, fiestas o a comidas en su casa. Con respecto a la familia, son padres progresistas, liberales y tratan de educar a sus hijos de la mejor manera posible, con valores nobles, altruistas, justos y de responsabilidad. Exigen respeto e imponen cierta autoridad a sus hijos. Pero su forma de ser conecta muy bien con los niños, lo que hará que compartan muchos momentos de diversión.",
)


// Reduce a un dígito la suma de la fecha de nacimiento (dd-mm-aaaa)
// Los resultados 11, 22 y 33 no se reducen.
function reduceFecha(dob) {
    let fecha = dob.split("").map(x => +x).reduce((a,b) => a+b)
    if (fecha <= 9) {
        return dob
    } else {
       do {
            fecha = fecha.toString().split("").map(x => +x).reduce((a,b) => a+b)
        } while (fecha > 9);
        return fecha
    }
}


const valorNacimiento = [cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve]

// Muestra la vibración de nacimiento:
function vibracionNacimiento(res) {
    if(valorNacimiento.hasOwnProperty(res)) {
        // for (let num in valorNacimiento) {
            document.getElementById("intro").innerHTML = valorNacimiento[res].getIntro()
            document.getElementById("trabajo").innerHTML = valorNacimiento[res].getTrabajo()
            document.getElementById("economia").innerHTML = valorNacimiento[res].getEconomia()
            document.getElementById("amor").innerHTML = valorNacimiento[res].getAmor()
        // }
    } else {
        document.getElementById("personalidad").innerHTML = `No ingresó ningún número.`
    }
    const parent = document.getElementById("intro")
    const subtitulo = document.createElement("h4")
    subtitulo.textContent = valorNacimiento[res].getSubtitulo()
    parent.insertAdjacentElement("beforebegin", subtitulo)
}



export { reduceFecha, vibracionNacimiento };