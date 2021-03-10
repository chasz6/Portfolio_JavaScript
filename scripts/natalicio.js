// Definiciones de la vibración del Natalicio
const dias = [
    {"Día 1 del mes": "Individualista e independiente en grado sumo. Hábil, inteligente y creativo. Más bien egocéntrico, tiene un elevado concepto de sí mismo. Este natalicio confiere aptitudes intelectuales, lucidez y poderes de razonamiento. Si existen vibraciones equilibradas en el Cuadro completo, es un buen organizador, un auténtico líder que utiliza sus cualidades constructivamente. En caso contrario le cuesta mucho centrarse y su mente puede convertirse en un caos del que no sacará ningún provecho."},
    {"Día 2 del mes": "Carácter dulce, comprensivo y cooperador. Buscan la compañía de otras personas porque necesitan sentirse amparados y protegidos. Tiernos y emotivos, cultos y refinados, saben apreciar las manifestaciones artísticas y del espíritu. Tienen la facultad de crear un ambiente de paz y armonía a su alrededor, cosa extraordinaria porque aunque no lo demuestran, en el fondo son extremadamente nerviosos, aprensivos y propensos a la depresión."}, 
    {"Día 3 del mes": "Simpáticos, optimistas, positivos y extraordinariamente expresivos, son personas con una gran facilidad para comunicarse con los demás y transmitirles su propio entusiasmo, su alegría y su calor. Excepcionalmente creativos y con un gran talento, pueden destacar en cualquier profesión artística; pero deben tratar de centrarse porque tienden a ser volubles, frívolos o superficiales."},
    {"Día 4 del mes": "Introvertidos, serios y poco comunicativos. Prácticos, metódicos y rutinarios no aceptan los cambios y las innovaciones de muy buen grado. Trabajadores y responsables, son personas dignas de confianza y muy cautas e incrédulas. Necesitan «ver para creer» y tienen siempre los pies bien asentados sobre la tierra. Deberían intentar relajarse un poco más y ver el lado más alegre de la vida."},
    {"Día 5 del mes": "Dulces, cariñosos y encantadores, sienten una gran devoción por la familia, los amigos y las tradiciones que acercan y unen a las personas. Su sentido del deber hacia los suyos está tan arraigado que muchas veces les sacrifican su propia conveniencia y bienestar. Perfeccionistas, serenos y equilibrados, les altera profundamente el desapego o la desaprobación a sus actos; volviéndose críticos, bruscos y desagradables."},
    {"Día 6 del mes": "Dulces, cariñosos y encantadores, sienten una gran devoción por la familia, los amigos y las tradiciones que acercan y unen a las personas. Su sentido del deber hacia los suyos está tan arraigado que muchas veces les sacrifican su propia conveniencia y bienestar. Perfeccionistas, serenos y equilibrados, les altera profundamente el desapego o la desaprobación a sus actos; volviéndose críticos, bruscos y desagradables."},
    {"Día 7 del mes": "Serios, graves, analíticos y profundos, poseen una gran intuición, inteligencia y talento; pero por sobre todos sus demás intereses está el de profundizar en la comprensión y conocimiento de sí mismos, y de todo el género humano. Son formales, sensatos, enigmáticos, taciturnos y reservados, y casi siempre les cuesta mucho exteriorizar sus sentimientos. Tendencias melancólicas o depresivas."},
    {"Día 8 del mes": "Sangre fría, aplomo y buen juicio, que se manifiesta especialmente en el campo de los negocios y de las altas finanzas. Fortísima y ambiciosa personalidad que odia las medianías y la mediocridad. Capacidad de trabajo y poder de concentración extraordinarios. Nacieron ejecutivos y su vida puede ser provechosa, importante y hasta influyente; pero no será pacífica ni tranquila. Testarudez, intransigencia. Valor moral."},
    {"Día 9 del mes": "Altruistas, sensibles, humanitarios y desinteresados, necesitan sentirse libres para desarrollar una labor provechosa en favor de las personas necesitadas o con problemas, y también para viajar, que es su gran pasión. Su talento y cualidades son amplias ya pueden sobresalir artística, creativa o intelectualmente. Aun en el éxito o la abundancia no deben olvidar las necesidades ajenas y deberían llevar una vida desinteresada."},
    {"Día 10 del mes": "Éste es el natalicio de los lideres, e individualistas que hacen su propio camino sin ayuda de nadie; no porque se les niegue, sino porque ellos así lo quieren. Disponen de un gran abanico de cualidades y habilidades de las que pueden hacer uso para llegar a donde se proponen. Tienen un carácter fuerte y muy posesivo, e irradian seguridad y dominio de sí mismos. Facilidad de expresión, brillantez y creatividad."},
    {"Día 11 del mes": "Inspirados e intuitivos, deben guiarse por sus corazonadas y presentimientos. Su inteligencia es brillante y tienen una mente poética y llena de recursos. Altamente receptivos, tienen nobles aspiraciones pero deben controlar sus impulsos y emociones buscando un equilibrio que les permita usar sus facultades en beneficio de los demás. Deben evitar a toda costa envanecerse de sus logros o ser egocéntricos. Dulces, serenos y cariñosos."},
    {"Día 12 del mes": "Simpáticos y amistosos, agradables y entusiastas, se desenvuelven mejor con y alrededor de otras personas. Sus éxitos e intereses van más hacia lo artístico y literario que hacia lo comercial. Deben centrar sus esfuerzos para alcanzar resultados positivos; de lo contrario serán brillantes barcos a la deriva. Deben controlar también sus cambios de humor porque pasan de la alegría a la depresión fácilmente debido a su extrema sensibilidad."},
    {"Día 13 del mes": "Trabajadores, concienzudos, metódicos y disciplinados, alcanzarán sus objetivos lenta pero infaliblemente. Introvertidos y poco comunicativos tienden a tomar decisiones sin consultar la opinión de sus colaboradores. Necesitan sentirse queridos y aceptados pero les cuesta liberarse de su timidez e introversión y demostrar sus sentimientos."},
    {"Día 14 del mes": "Este natalicio confiere una mente libre, independiente, original y constructiva. No soportan la rutina y desean vivir activa, dinámica y libremente, pero deben frenar su impaciencia y sus deseos de cambio. Inconstantes e imaginativos, desperdiciarán sus oportunidades de éxito si no canalizan sus aptitudes usando la lógica y la fuerza de carácter que también poseen."},
    {"Día 15 del mes": "Cariñosos, generosos y hogareños, necesitan del apoyo y proximidad de sus seres queridos. Verdaderos patriarcas, centran su felicidad en saberse únicos responsables del cuidado de su familia y pueden crearse problemas en el hogar por esta sobreprotección. Creen sinceramente que sólo ellos saben lo que es mejor para los suyos; pero en cambio en su vida personal necesitan sentirse libres y no aceptan dominio sobre su persona."},
    {"Día 16 del mes": "Psíquicos, intuitivos e introvertidos son alternativamente espirituales mundanos porque tienen la habilidad el talento necesarios para triunfar en lo que se propongan y les interesan tanto las conquistas del espíritu como el éxito y el dinero. Intensamente introspectivos, buscan la perfección en sí mismos y en su vida profesional, pero tienden a ser solitarios porque les cuesta demostrar lo que sienten."},
    {"Día 17 del mes": "Mente práctica y utilitaria que tiene la habilidad de concebir y planear en grande. Vibración positiva para las finanzas que augura grandes ganancias si la persona usa su olfato comercial inteligentemente. Su fuerte personalidad, carácter y don de mando le permiten asumir posiciones ejecutivas y dirigir grandes empresas con éxito. Exigentes consigo mismos y con los demás."},
    {"Día 18 del mes": "Temperamento vehemente y emocional que puede complicarles la vida por no saber dominar sus impulsos ni sus mordaces y cáusticos comentarios. Muy observadores y analíticos, llegan al fondo de cualquier situación con claridad y agudeza. Independientes, exigentes, individualistas y selectivos prefieren caminar en solitario a ser uno del montón."},
    {"Día 19 del mes": "Extremadamente independientes, cambiantes y exaltados, tendrán una vida difícil si no aprenden a dominar su impetuosa naturaleza. Originales, creativos, intensos y emocionales, viven impetuosa y temerariamente y tienen grandes reservas anímicas que les permiten sobreponerse a los problemas y altibajos que la vida y su propia manera de ser les depararán. Esta fuerza interior les ayuda a rehacerse y empezar siempre de nuevo."},
    {"Día 20 del mes": "Tímidos e inseguros necesitan amor, apoyo y compañía para demostrar lo que valen, ya que se desenvuelven mejor si se sienten respaldados. Son personas pacíficas, tranquilas y buenas que a menudo poseen un candor y una ingenuidad que los acompañan toda la vida. Su diplomacia y equilibrado temperamento los ayudan a llevarse bien con todo tipo de personas y a servir de pacificadores en cualquier conflicto. Hipersensibles y susceptibles, deben intentar dominar sus complejos de inferioridad."},
    {"Día 21 del mes": "Personas sociables, efusivas, fascinantes y comunicativas. La amistad y el contacto humano son muy importantes para ellos y marcan sus vidas; pero siendo también algo volubles y egoístas, actúan independientemente, prescindiendo de los demás cuando les conviene. Deben centrarse en canalizar sus emociones, sus habilidades y su energía porque tienen muchas formas de expresión, así tendrán el éxito asegurado."},
    {"Día 22 del mes": "Si se elevan a la altura y las exigencias que este natalicio demanda, sus metas e ideas serán amplias y humanitarias porque han nacido con una gran responsabilidad social y deberían dejar una huella profunda y beneficiosa en su comunidad. Si no se consideran a la altura de esta misión serán ciudadanos honestos, laboriosos y responsables que cumplen con su deber, solamente a nivel personal."},
    {"Día 23 del mes": "Muy hábiles, inteligentes y con capacidad para sobresalir en cualquier campo, intelectual, artístico o profesional que elijan. Perspicaces, analíticos y seguros de sí mismos, tienen una aguda y rápida mentalidad que les permite juzgar con claridad a las personas o situaciones con que se enfrentan. Simpáticos, agradables y cariñosos, son muy susceptibles y tienen un genio vivo e impaciente que a veces estalla a la menor provocación."},
    {"Día 24 del mes": "Personas muy trabajadoras que se esfuerzan por alcanzar sus objetivos. Humanitarios, hogareños, responsables y enérgicos, deben canalizar sus esfuerzos hacia el campo educacional o sanitario; o sea, al servicio de los demás. A veces son pesimistas, se preocupan demasiado y se angustian y obsesionan por cosas sin importancia. Poseen aptitudes artísticas pero deben vencer una cierta tendencia a la indolencia que puede impedirles aprovechar sus indudables cualidades. Posible tendencia al dogmatismo."},
    {"Día 25 del mes": "Reservados con sus pensamientos y emociones, tienen grandes reservas morales y una profunda vida interior. Visionarios y clarividentes desean aclarar los enigmas de la vida. Carácter fuerte, emancipado y ambicioso que necesita sentirse libre. Gran poder de convencimiento y persuasión para lograr sus propósitos. Su mente está siempre ocupada con grandes proyectos, pero deben perseverar hasta concluirlos, de lo contrario serán otros los que se aprovechen de sus ideas."},
    {"Día 26 del mes": "Emotivos y temperamentales, sus estados de ánimo oscilan constantemente. Dulces, cariñosos, benévolos y amables tienen también cualidades de líderes que pueden llevarles al éxito si perseveran. Hogar, dinero y posición social son importantes para ellos; de manera que luchan por alcanzarlos y respetan al que los posee. Encontrar el equilibrio entre sentimientos y materialismo es importante para su estabilidad."},
    {"Día 27 del mes": "Individualistas y amantes de la libertad, no prosperarán sometidos a otra autoridad. A pesar de ser extravagantes y muy independientes necesitan de los demás para demostrar su gran capacidad de cariño y entrega. Su problema estriba en que les cuesta demostrar sus sentimientos y a menudo se entregan a solucionar los problemas y necesidades ajenas, descuidando a su familia y a sí mismos."},
    {"Día 28 del mes": "Extravagantes, extraños y diferentes a los demás, les interesa todo lo que sea original y fuera de lo común. Carácter fuerte, emancipado y ambicioso que necesita sentirse libre. Gran poder de convencimiento y persuasión para lograr sus propósitos. Su mente está siempre ocupada con grandes proyectos, pero deben perseverar hasta concluirlos, de lo contrario serán otros los que se aprovechen de sus ideas."},
    {"Día 29 del mes": "Temperamentales y cambiantes, necesitan multitud de intereses para mantener el equilibrio emocional. Intuitivos, emotivos e idealistas, deben poner su enorme fortaleza interior al servicio de sus semejantes. Muy individualistas, no se adaptan a las costumbres establecidas y tienen su propio código de conducta. Pronostica éxito poco común si usan inteligentemente las facultades que este Natalicio confiere, y si éstas están reforzadas con otras Vibraciones benéficas."},
    {"Día 30 del mes": "Personas espontáneas, simpáticas y muy populares, pero con cierta tendencia a ser volubles. Artísticos y creativos necesitan dar salida a su talento para ser felices. La rutina y la monotonía malogran sus facultades y abaten su espíritu. Optimistas y entusiastas por naturaleza, se niegan a ver las cosas por el lado negativo y tratan de vivir intensa, alegre y desenfadadamente."},
    {"Día 31 del mes": "Poseen una extraña mezcla de seriedad, sentido de responsabilidad y sensatez con una gran imaginación que les inclina a soñar y divagar a veces. Muy trabajadores, centran sus esfuerzos en lograr el bienestar de su familia. Normalmente no son confiados, pero pueden ser inducidos a realizar negocios ruinosos por cariño o amistad. Intransigentes e inflexibles, les cuesta comprender o perdonar las debilidades ajenas. Tozudez."},
]

// Muestra la vibración del natalicio
export function natalicio(res) {
    if(dias.hasOwnProperty(res)) {
        for (let dia in dias) {
            document.getElementById("natalicio").innerHTML = Object.values(dias[res-1])
        }
    } else {
        document.getElementById("natalicio").innerHTML = `No ingresó ningún número.`
    }
    // Inserta subtitulo (key)
    let parent = document.getElementById("natalicio")
    let subtitle = document.createElement("h4")
    subtitle.textContent = Object.keys(dias[res-1])
    parent.insertAdjacentElement("beforebegin", subtitle)
}
