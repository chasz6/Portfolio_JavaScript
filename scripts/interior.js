/************************
 * 1. VIBRACIÓN INTERIOR:
 * Se halla sumando las vocales del nombre completo. 
 **************************************************/


// Declaro la variables:
let vocales;
let interior;


// Separa las vocales de las consonantes:
function extractVowels(v) {
    let expresion = /[aáeiíoóuúü]/gi
    v = v.match(expresion)
    vocales = v
    return vocales
}


// Esta función reemplaza las letras por su equivalente en número:
function reemplazar(text) {
    let reemplazo = text.toString()
    let find = ["a", "á", "b","c","d","e", "é", "f","g","h","i", "í", "j", "k", "l", "m", "n", "ñ", "o", "ó", "p", "q", "r", "s", "t", "u", "ú", "ü", "v", "w", "x", "y", "z"]
    let replace = ["1", "1", "2", "3", "4", "5", "5", "6", "7", "8", "9", "9", "1", "2", "3", "4", "5", "5", "6", "6", "7", "8", "9", "1", "2", "3", "3", "3", "4", "5", "6", "7", "8"]

    find.map((value, index) => {
    reemplazo = reemplazo.replace(new RegExp(value, 'gi'), replace[index])
    })
    return reemplazo
}


// Esta función calcula el valor de las letras reemplazadas hasta llegar a un dígito, excepto cuando es 11, 22, 33 o 44:
function calculo(p) {
    p = reemplazar(p)
    p = p.toString().match(/[1-9]/g).map(x => +x).reduce((a,b) => a+b)
    if (p < 9) {
      return p  
    } else {
        switch (p) {
            case 11:
                console.log(p)
                break;
            case 22:
                console.log(p)
                break;
            case 33:
                console.log(p)
                break;
            case 44:
                console.log(p)
                break;
            default:
                do {
                    p = p.toString().split("").map(x => +x).reduce((a,b) => a+b)
                } while (p > 9);
                break;
        }
    } 
    return p
}


// Diccionario de significados de las vocales:
const valorInterior = [
    {"Suma valor de vocales: 1": `Predominantemente intelectuales y mentalmente independientes, seguros de sí mismos y de su valor. Liberales y libres de prejuicios, respetan el derecho de los demás a vivir su propia vida sin interferencias. Les encantan los desafíos y generalmente tienen éxito donde otros han fracasado porque su mente genera ideas nuevas, creativas, audaces y extraordinariamente originales constantemente.
                                Inspiran, alientan y motivan a la acción con la fuerza y el optimismo que fluye de su interior; y pueden conservar el dominio de sí mismos y actuar lúcida y fríamente en circunstancias adversas.
                                Interior muy positivo; su motivación secreta es llegar a ser importantes y poderosos por sus propios medios, porque no aceptan la dependencia ni el dominio de nadie.`},
    {"Suma valor de vocales: 2": `Son personas fundamentalmente buenas y su principal motivación es complacer a los demás con discreción, tacto, respeto y deferencia, aunque ello signifique dejarse dominar y la renuncia de sus propias aspiraciones.
                                Imaginan constantemente formas delicadas de agradar; como obsequios, flores, atenciones y muestras de afecto.
                                Buscan el perfeccionamiento interior, aman la soledad y ante todo desean vivir en paz. Este Interior no es propicio para el lucimiento personal ni logros materiales.
                                Faltos de confianza en sí mismos, irresolutos y temerosos, se inhiben a la hora de actuar y necesitan estímulo continuo.
                                Sensitivos y susceptibles, las discusiones y las disputas desequilibran su sistema nervioso y una palabra puede hundirlos en la inseguridad o la depresión.`},
    {"Suma valor de vocales: 3": `Este Interior aporta una mentalidad optimista, llena de afecto y buena disposición hacia los demás. Siempre se niegan a pensar negativamente y su alegría y entusiasmo son contagiosos.
                                Creatividad, inspiración y talento les permiten incursionar con éxito en actividades artísticas, ya que la luz, el color, la música y la belleza les motivan intensamente.
                                Vibración de Interior positiva porque confiere brillantez, desenvoltura, habilidad y el encanto que facilita el éxito. Gracias a la habilidad con que lograr atraerse la simpatía y confianza de la gente, destacan social y comercialmente.
                                Por motivación interna induce a gozar de la vida y como generalmente las cosas les llegan con más facilidad que a las demás personas, pueden volverse egoístas y superficiales, preocupados sólo de satisfacer sus caprichos si no existen Vibraciones moderadoras en el Cuadro Numerológico.
                                Interior camaleónico que puede cambiar, positiva o negativamente según la influencia de las demás Vibraciones.`},
    {"Suma valor de vocales: 4": `Mentalidad seria, responsable, sensata y realista que detesta la frivolidad. Son los que construyen los cimientos de un mundo más justo y equilibrado. Mentes laboriosas que no ceden jamás antes de alcanzar sus objetivos.
                                Sus procesos mentales son aparentemente lentos porque son minuciosos, sistemáticos y metódicos para desmenuzar las ideas y proyectos antes de lanzarse a su ejecución. Después avanzan segura, constante y definitivamente.
                                Fuerte, enérgica y eficiente personalidad. No se permiten soñar, confían sólo en la realidad y casi únicamente en sí mismos. Vibración positiva con Exterior armónico y audaz; en caso contrario obstaculizan su propio progreso.
                                Excesivamente detallistas, cautelosos y precavidos pueden dejar escapar las oportunidades sin atreverse a actuar, o pueden ser extremistas, fanáticos, revolucionarios y agitadores.`},
    {"Suma valor de vocales: 5": `Mentalidad aventurera, ingeniosa, dinámica e inquieta que odia la rutina, la monotonía y la mediocridad.
                                Polifacéticos, originales e imaginativos, tienen en su Interior tal derroche de energía que muchas veces escapa a su control y entonces se muestran irritables, nerviosos e impulsivos. No saben esperar ni perseverar, los consume la impaciencia y exigen resultados inmediatos, de manera que deben intentar firmemente alcanzar el equilibrio interior que les permita dominar su temperamento, canalizar su energía y contener sus impulsos.
                                Este Interior es como llevar un motor interno que impulsa a la acción, pero para poder usarlo con éxito deben existir otras Vibraciones moderadoras. De lo contrario no conocerán la paz interior, vivirán totalmente frustrados y se volverán agresivos, rebeldes y pendencieros. Si el Exterior bloquea la expresión de esta explosiva fuerza interna, posibles enfermedades.`},
    {"Suma valor de vocales: 6": `Integridad moral, auténtica bondad y enorme necesidad de rodearse de armonía, belleza y amor.
                                Poseen una mente equilibrada, honestidad y espíritu de servicio, y son responsables y concienzudos profesionalmente.
                                Tímidos e inseguros interiormente, saben encubrirlo aparentando autosuficiencia.
                                Sin embargo, se preocupan demasiado por pequeñeces y se inhiben a la hora de actuar por temores infundados o simple pereza.
                                Obsesiones, manías o problemas psicológicos, especialmente si aparece unido a números depresivos.
                                Irradian comprensión, generosidad y humanidad que benefician a todos, pero especialmente a su familia. Son los auténticos «padrazos›› de la escala numerológica, y se preocupan primordialmente de sus seres queridos, llegando a sacrificarlo todo por ellos; pero corren el riesgo de sobreprotegerlos anulando su autodeterminación.
                                Interior bueno con Exterior armónico pero negativo con Vibraciones radicales porque son demasiado influenciables.`},
    {"Suma valor de vocales: 7": `Profundos, introspectivos y estudiosos, necesitan la soledad para meditar y perfeccionarse a nivel interior. Intuitivos, clarividentes y extraños. A menudo parecen desconectarse mentalmente del mundo y huir hacia otras regiones.
                                Según las Vibraciones que lo acompañen, estaremos ante auténticos sabios y videntes que instruyen y guían, o excéntricos lunáticos que pierden contacto con la realidad desperdiciando sus notables poderes.
                                Intelectuales, analíticos, perfeccionistas y sensibles, huyen de las personas o actitudes vulgares y aprecian las cosas finas y delicadas.
                                Difícilmente comprendidos o aceptados, a menudo son acusados de orgullo y frialdad porque aunque necesiten cariño y comprensión son demasiado reservados y no saben expresar sus sentimientos. Este aislamiento y continuas cavilaciones pueden causar frecuentes depresiones.
                                Interior bueno o malo, según las Vibraciones que lo acompañen.`},
    {"Suma valor de vocales: 8": `Interior que otorga solidez y claridad mental, capacidad de análisis y organización, y una enérgica y positiva mentalidad. Eficientes, audaces, decididos y emprendedores, tienen don de mando y facilidad para dirigir importantes empresas o grupos de personas.
                                Por motivación interna ambicionan grandes logros materiales y tienen una notable capacidad comercial.
                                Interior que concede una voluntad inquebrantable, más fuerza y concentración de pensamiento para dirigirlo tenaz y eficazmente al logro de sus fines, sin que nada ni nadie pueda distraerlo. A Justos, equilibrados y honestos, irradian seguridad y magnetismo. Interior positivo para quienes deseen tener éxito material y un lugar importante en el mundo. Cuidado con el exceso de ambición.`},
    {"Suma valor de vocales: 9": `Mentalidad clara y lúcida, abierta, libre y desinhibida. Bohemios y excéntricos su amor a la libertad y la aventura es casi tan intenso como su indiscutible generosidad. Romántico y soñador, uno de estos sueños sería viajar por el mundo sin trabas ni ataduras.
                                Nobles, altruistas y caritativos, su bondad y su amor sobrepasan su entorno y abarcan a todos los seres humanos.
                                La intuición que otorga esta Vibración al aparecer en el Interior es mucho más intensa que en el Exterior. Sus sueños son a menudo proféticos e intuyen lo que va a suceder, de manera que deberían fiarse de sus corazonadas. Extraordinarias facultades parapsicológicas (con el Exterior adecuado) que deberían tratar de desarrollar.
                                La potencia de este Interior se acentúa positiva o negativamente según la fuerza, debilidad o incompatibilidad del Exterior.`},
    {"Suma valor de vocales: 11": `Interior que es válido solamente para quienes por sus cualidades y espíritu de servicio sobrepasan las características de los números 2 y 6.
                                Estas personas están llamadas a convertirse en luz y guía de los demás por su mentalidad excepcionalmente inspirada, intuitiva y espiritual.
                                Destacan ampliamente porque sus aspiraciones trascienden los objetivos de los demás, ya que su meta primordial es ayudar y enseñar con su propio ejemplo, sus conocimientos y su asistencia material.
                                Además de su notable espiritualidad e intuición que puede llegar a la videncia, este Interior confiere inteligencia, imaginación, creatividad, tenacidad y cualidades de líder que les ayudan a alcanzar sus objetivos.
                                Para que este Interior sea válido, debe estar asistido por un Exterior y Nacimiento armónicos y afines.`},
    {"Suma valor de vocales: 22": `Igual que con todas las Vibraciones Maestras este Interior sólo pueden adjudicárselo las personas que sobrepasan las características positivas de los números 4 y 8.
                                El valor moral, aspiraciones elevadas y habilidades fuera de lo común de las Vibraciones Maestras, más un toque mágico para ganar dinero los convierte en los constructores materiales y espirituales del mundo; los promotores de grandes imperios que usan su fortuna, su prestigio y autoridad en beneficio de sus semejantes. Es el símbolo del poder puesto al servicio del espíritu y la entrega a todos los seres humanos.
                                Si ceden a la codicia y la ambición o se dejan frenar por una excesiva cautela o temor, estarán actuando como un 4 o un 8, sin el carisma ni las motivaciones de los números Maestros.`},
    {"Suma valor de vocales: 33": `Interior que es válido solamente para quienes por sus cualidades y espíritu de servicio sobrepasan las características de los números 2 y 6.
                                Estas personas están llamadas a convertirse en luz y guía de los demás por su mentalidad excepcionalmente inspirada, intuitiva y espiritual.
                                Destacan ampliamente porque sus aspiraciones trascienden los objetivos de los demás, ya que su meta primordial es ayudar y enseñar con su propio ejemplo, sus conocimientos y su asistencia material.
                                Además de su notable espiritualidad e intuición que puede llegar a la videncia, este Interior confiere inteligencia, imaginación, creatividad, tenacidad y cualidades de líder que les ayudan a alcanzar sus objetivos.
                                Para que este Interior sea válido, debe estar asistido por un Exterior y Nacimiento armónicos y afines.`},
    {"Suma valor de vocales: 44": `Igual que con todas las Vibraciones Maestras este Interior sólo pueden adjudicárselo las personas que sobrepasan las características positivas de los números 4 y 8.
                                El valor moral, aspiraciones elevadas y habilidades fuera de lo común de las Vibraciones Maestras, más un toque mágico para ganar dinero los convierte en los constructores materiales y espirituales del mundo; los promotores de grandes imperios que usan su fortuna, su prestigio y autoridad en beneficio de sus semejantes. Es el símbolo del poder puesto al servicio del espíritu y la entrega a todos los seres humanos.
                                Si ceden a la codicia y la ambición o se dejan frenar por una excesiva cautela o temor, estarán actuando como un 4 o un 8, sin el carisma ni las motivaciones de los números Maestros.`},
]


// Muestra la vibración interior:
function vibracionInterior(res) {
    if(valorInterior.hasOwnProperty(res)) {
        for (let num in valorInterior) {
            document.getElementById("interior").innerHTML = Object.values(valorInterior[res-1])
        }
    } else {
        document.getElementById("interior").innerHTML = `No ingresó ningún número.`
    }
    // Inserta subtítulo
    let parent = document.getElementById("interior")
    let subtitle = document.createElement("h4")
    subtitle.textContent = Object.keys(valorInterior[res-1])
    parent.insertAdjacentElement("beforebegin", subtitle)
    return res
}


export { vocales, interior, extractVowels, reemplazar, calculo, vibracionInterior };