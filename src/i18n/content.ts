/*
  Todo el texto del sitio. v2: consultor de flujo de información (TEXTOS-V2.md).
  Regla de confidencialidad: sin nombre del empleador (se presenta como «Casos de éxito»),
  cifras, volúmenes, clientes, servidores ni personas.
*/

export type Lang = "es" | "en";

export const CONTACT = {
  email: "hola@andcom.dev", // Email Routing de Cloudflare
  github: "https://github.com/AndresDRamos",
  city: "Monterrey, N.L.",
};

type Station = { tag: string; node: string; sub: string; what: string; why: string; how: string[]; tech: string[] };

export interface Content {
  meta: { title: string; description: string };
  nav: { id: string; label: string }[];
  ui: { theme: string; langSwitch: string; langHref: string; skip: string; print: string; copied: string; menu: string;
    sections: string; next: string; prev: string; panels: Record<string, string> };
  hero: {
    kicker: string; titleA: string; titleEm: string; lead: string; leadEm: string; leadEnd: string;
    ctaPrimary: string; ctaSecondary: string; strip: string[];
    problem: { num: string; title: string; body: string };
    labels: { today: string; withNet: string };
    nodes: { n: string; short?: string; today: string; withNet: string }[];
    returns: string[];
    log: { title: string; live: string; areas: string; impulses: string; returns: string; legend: [string, string, string, string];
      orderIn: string; orderOut: string; share: string };
  };
  method: { title: string; get: string;
    phases: { id: string; title: string; intro: string; steps: [number, number] }[];
    steps: { n: string; title: string; body: string; get: string }[] };
  layers: { kicker: string; layer: string; intro: string; items: { n: string; title: string; body: string; list: string[] }[] };
  lab: { kicker: string; body: string; flow: string[]; points: string[] };
  operate: { kicker: string; list: string[]; loop: string[]; loopText: string };
  arch: { title: string; intro: string; hint: string; base: string;
    labels: { what: string; why: string; how: string; tech: string };
    frame: Station; stations: Station[] };
  /* términos que se subrayan en los párrafos y muestran su definición al pasar el cursor */
  glossary: { m: string[]; d: string }[];
  principles: { title: string; intro: string; items: { k: string; title: string; body: string }[] };
  career: { title: string; origin: { lead: string; em: string; rest: string };
    items: { rev: string; date: string; text: string }[];
    sheets: { hint: string; close: string; items: { file: string; title: string; code: string; alt: string }[] } };
  contact: { title: string; body: string };
  /* CV de una hoja: solo se ve al imprimir */
  cv: { role: string; profile: string;
    labels: { profile: string; experience: string; systems: string; skills: string; stack: string; education: string; languages: string; more: string };
    experience: { date: string; role: string; place: string; points: string[] }[];
    systems: { t: string; d: string }[]; skills: string[]; stack: string[];
    education: { date: string; text: string }[]; languages: string[] };
  footer: { left: string; right: string };
}

const es: Content = {
  meta: {
    title: "andcom · Andrés D. Ramos — Toda tu empresa, viva",
    description: "Conecto ventas, planeación, compras, producción y máquinas en un solo lugar. Estudio de flujo, plataformas de datos, telemetría, IA a la medida, implementación y capacitación. Monterrey, N.L.",
  },
  nav: [
    { id: "metodo", label: "Método" },
    { id: "arquitectura", label: "Arquitectura" },
    { id: "principios", label: "Principios" },
    { id: "trayectoria", label: "Trayectoria" },
    { id: "contacto", label: "Contacto" },
  ],
  ui: {
    theme: "Cambiar tema claro u oscuro", langSwitch: "EN", langHref: "/en/",
    skip: "Saltar al contenido", print: "Imprimir CV", copied: "Correo copiado ✓", menu: "Menú", sections: "Secciones",
    next: "Siguiente", prev: "Anterior",
    panels: { inicio: "Inicio", metodo: "Primeros pasos", laboratorio: "Pruebas", implementar: "Entrega", arquitectura: "Arquitectura", principios: "Principios", trayectoria: "Trayectoria", contacto: "Contacto" },
  },
  hero: {
    kicker: "Consultoría en flujo de información · Monterrey",
    titleA: "Toda tu empresa,",
    titleEm: "viva.",
    lead: "Estudio cómo se comunican tus áreas, conecto ",
    leadEm: "tus sistemas, tus máquinas y tu gente",
    leadEnd: " en un solo lugar, y lo opero junto con tu equipo.",
    ctaPrimary: "Ver el método →",
    ctaSecondary: "Hablemos",
    strip: ["Experiencia en manufactura", "Cadena de suministro", "IA a la medida"],
    problem: {
      num: "El problema",
      title: "Cada área tiene su versión de la verdad. Y casi nunca coinciden.",
      body: "Ventas promete con un Excel, planeación decide con el reporte del lunes y la máquina que se paró no le avisa a nadie. La información existe; lo que falta es que llegue.",
    },
    labels: { today: "Hoy", withNet: "Con la red" },
    nodes: [
      { n: "Pedido del cliente", short: "Pedido", today: "Llega por correo, WhatsApp o teléfono.", withNet: "Entra una sola vez y todos lo ven." },
      { n: "Ventas", today: "Promete fechas sin ver la planta.", withNet: "Promete con la capacidad real a la vista." },
      { n: "Planeación", today: "Arma el plan en Excel cada lunes.", withNet: "Recibe el atraso en cuanto ocurre." },
      { n: "Compras", today: "Se entera tarde de lo que falta.", withNet: "Ve el faltante antes de que pare la línea." },
      { n: "Producción", today: "Captura a mano al final del turno.", withNet: "Cada avance se registra donde ocurre." },
      { n: "Máquinas", today: "Nadie sabe que pararon hasta que alguien avisa.", withNet: "La máquina avisa sola a planeación." },
      { n: "Calidad", today: "El rechazo se reporta en papel.", withNet: "El rechazo regresa a producción al instante." },
      { n: "Embarque", today: "Confirma salidas por teléfono.", withNet: "Ventas ve la salida sin preguntar." },
      { n: "Entrega", today: "El cliente pregunta dónde está su pedido.", withNet: "El cliente lo sabe sin preguntar." },
    ],
    returns: ["Máquina avisa paro a planeación", "Calidad regresa rechazo a producción", "Embarque confirma salida a ventas"],
    log: {
      title: "Red", live: "en vivo", areas: "Áreas", impulses: "Impulsos", returns: "Retornos",
      legend: ["señal: el dato fluye", "impulso crítico", "sinapsis: punto de retorno", "› pasa el cursor sobre un área"],
      orderIn: "Pedido #{id} entra a la red", orderOut: "Pedido #{id} entregado", share: "{area} comparte su estado",
    },
  },
  method: {
    title: "Cómo trabajo",
    get: "Te llevas",
    phases: [
      { id: "metodo", title: "Primeros pasos", intro: "Primero entiendo cómo funciona tu empresa; después diseño la red que la conecta.", steps: [0, 1] },
      { id: "laboratorio", title: "Pruebas", intro: "Lo pruebas antes de pagarlo, y el presupuesto sale de algo que ya viste funcionar.", steps: [2, 3] },
      { id: "implementar", title: "Entrega", intro: "Lo monto, lo administro y me aseguro de que tu equipo lo domine.", steps: [4, 5] },
    ],
    steps: [
      { n: "01", title: "Estudiar", body: "Recorro tu empresa del pedido a la entrega. Mapeo cómo se mueven el material y la información, hago bosquejos y borradores, cuestiono los paradigmas de siempre y evalúo dónde se pierde el dato.",
        get: "Un mapa de flujo de valor (VSM), el árbol de decisiones de tu operación y una evaluación de tu situación." },
      { n: "02", title: "Diseñar", body: "Con esa evaluación elijo, de las soluciones que ofrezco, las que tu empresa necesita, y propongo la red: qué se conecta, dónde se captura cada dato y dónde van los puntos de retorno.",
        get: "Una arquitectura por etapas. Cada etapa sirve por sí sola." },
      { n: "03", title: "Probar", body: "Antes de que inviertas, armo la solución en mi laboratorio con tu flujo real y la ves funcionar.",
        get: "Un prototipo funcionando con tu caso." },
      { n: "04", title: "Presupuestar", body: "Con la prueba aprobada, elijo los servicios e insumos para producción —nube, sensores, licencias— y armo el presupuesto con su plan de inversión.",
        get: "Presupuesto por fases, costos mensuales y opciones de financiamiento." },
      { n: "05", title: "Implementar", body: "Monto la solución en producción y la administro: respaldos, actualizaciones, seguridad y bitácora.",
        get: "Un sistema operando y documentado." },
      { n: "06", title: "Capacitar", body: "Capacito a quien lo usa y a quien lo opera. La meta es que tu equipo lo entienda, no que dependa de mí.",
        get: "Personal capacitado y manuales claros." },
    ],
  },
  layers: {
    kicker: "Las soluciones que diseño",
    layer: "Capa",
    intro: "Cinco capas. Evalúo tu situación y marcamos el punto de partida juntos.",
    items: [
      { n: "1", title: "Flujo e información", body: "Rediseño cómo se comunican tus áreas antes de tocar un sistema.",
        list: ["Mapa de flujo de material e información", "Árboles de decisión del pedido a la entrega", "Puntos de retorno: a dónde debe regresar cada dato"] },
      { n: "2", title: "Un solo lugar", body: "Integro tu ERP, tus hojas de cálculo y tus aplicaciones en una plataforma con datos confiables y un portal para cada área.",
        list: ["Integración sin escribir en tu ERP", "Datos validados antes de publicarse", "Portal con permisos por persona"] },
      { n: "3", title: "Control operativo", body: "Conecto tus máquinas y tu piso para que la operación se mida sola.",
        list: ["Telemetría: ciclos, paros y ritmo, en vivo", "Comunicación directa con PLC y controladores", "Alertas que llegan a quien decide"] },
      { n: "4", title: "IA a la medida", body: "Un asistente o agente de IA que conoce tu negocio: tus productos, tus procesos y tus datos.",
        list: ["Responde citando de dónde sacó cada dato", "Solo ve lo que debe ver", "Cada consulta queda registrada"] },
      { n: "5", title: "Operación y capacitación", body: "Yo lo administro; tu equipo lo domina.",
        list: ["Soporte y mejora continua", "Capacitación por puesto", "Documentación en español claro"] },
    ],
  },
  lab: {
    kicker: "El método de laboratorio",
    body: "Tengo un ambiente de pruebas propio donde armo cada solución con tu flujo real antes de que compres infraestructura. Cuando la apruebas, la paso a producción con proveedores reconocidos y un presupuesto claro.",
    flow: ["Laboratorio", "Lo ves funcionar", "Presupuesto", "Producción", "Capacitación"],
    points: [
      "Decides viendo algo que funciona, no una presentación.",
      "Lo que apruebas es lo que se instala.",
      "Los datos de cada cliente viven aislados: nunca se mezclan entre proyectos.",
    ],
  },
  operate: {
    kicker: "Lo que queda en tu empresa",
    list: ["Un sistema operando, con respaldos y bitácora", "Manuales en español claro", "Personal capacitado por puesto", "Soporte y mejora continua"],
    loop: ["Operar", "Medir", "Mejorar", "Estudiar"],
    loopText: "Y de vuelta al inicio: los datos de la operación muestran qué mejorar después.",
  },
  arch: {
    title: "Así viaja tu dato",
    intro: "Uno de los entregables del gobierno de datos: el mapa de cómo nace, viaja, se revisa, se guarda y se usa cada dato de tu empresa. Lo diseño a tu medida.",
    hint: "Elige una estación del recorrido.",
    base: "Basado en una plataforma real que diseñé para una planta de manufactura metalmecánica.",
    labels: { what: "Qué es", why: "Por qué importa", how: "Así lo hago", tech: "En términos técnicos" },
    frame: { tag: "Gobierno", node: "Reglas y responsables", sub: "quién ve qué · qué cifra es oficial",
      what: "Envuelve todo el recorrido: define quién es dueño de cada dato, quién puede verlo y cómo se documenta.",
      why: "Sin reglas claras, cada área vuelve a tener su propia versión de la verdad.",
      how: ["Un responsable por cada dato clave", "Accesos con motivo y registro", "Documentación en lenguaje claro"],
      tech: ["Gobierno de datos", "Catálogo de datos"] },
    stations: [
      { tag: "1 · Nace", node: "Donde nace el dato", sub: "ERP · Excel · apps · máquinas",
        what: "Cada área genera datos: el ERP con pedidos y órdenes, las hojas de cálculo, las apps de captura en piso y las propias máquinas.",
        why: "Si el dato nace mal o se teclea dos veces, todo lo que sigue hereda el error.",
        how: ["Capturo el dato donde ocurre, una sola vez", "Tus sistemas no se modifican: solo se leen", "Cada registro dice quién, cuándo y dónde"],
        tech: ["ERP", "App de captura"] },
      { tag: "2 · Viaja", node: "Recolección", sub: "copias automáticas",
        what: "Un proceso automático copia los datos nuevos desde cada origen hasta un solo lugar, en horarios definidos.",
        why: "Nadie tiene que exportar ni enviar archivos: el dato llega solo y a tiempo.",
        how: ["Solo viaja lo nuevo, no todo cada vez", "Cada traslado deja constancia: cuánto, cuándo y con qué versión", "Si algo falla, avisa en lugar de callarse"],
        tech: ["ETL", "Carga incremental"] },
      { tag: "3 · Se revisa", node: "Aduana de datos", sub: "dos caminos, una cifra",
        what: "Antes de entrar, cada cifra importante se calcula por dos caminos independientes. Si no coinciden, no pasa.",
        why: "Así una cifra publicada es una cifra confiable, y se sabe por qué.",
        how: ["Reglas de negocio escritas y verificables", "Lo que no cuadra se marca, no se esconde", "Un catálogo dice qué cifra es oficial"],
        tech: ["Validación de dos rutas", "Contrato de datos"] },
      { tag: "4 · Se guarda", node: "Almacén único", sub: "recibe · ordena · muestra",
        what: "Un solo lugar en la nube donde los datos quedan ordenados por tema: pedidos, producción, inventario, calidad.",
        why: "Todas las áreas consultan la misma fuente, y lo que se vio el lunes se puede volver a abrir.",
        how: ["Tres zonas: recepción, orden y vitrina", "La historia no se reescribe", "Los cambios se ensayan antes de aplicarse"],
        tech: ["Almacén de datos", "Nube"] },
      { tag: "5 · Se usa", node: "Quien decide", sub: "tableros · planeación · IA",
        what: "Del almacén salen los tableros de cada área, los motores que planean la producción y los asistentes de IA, cada quien viendo solo lo que le toca.",
        why: "La información llega a quien decide, en un formato que entiende.",
        how: ["Una sola puerta de acceso, con permisos por persona", "Del resumen al detalle en pocos clics", "Se mide qué se consulta para mejorar"],
        tech: ["API", "Portal"] },
    ],
  },
  glossary: [
    { m: ["VSM"], d: "Mapa de flujo de valor: dibujo de todo el recorrido, del pedido a la entrega, que muestra dónde se agrega valor y dónde se espera o se vuelve a capturar." },
    { m: ["árbol de decisiones", "árboles de decisión"], d: "Cada punto donde alguien decide algo —aceptar un pedido, comprar, programar— con qué información lo decide y de dónde viene." },
    { m: ["puntos de retorno", "punto de retorno"], d: "Lugares donde un dato de la operación regresa solo a quien toma la decisión." },
    { m: ["paradigmas"], d: "Las formas de trabajar que se dan por hechas («siempre se ha hecho así») y que conviene revisar." },
    { m: ["Telemetría"], d: "Medición automática y continua de lo que pasa en la operación, enviada a un sistema central." },
    { m: ["PLC"], d: "La computadora industrial que controla una máquina o una línea." },
    { m: ["agente de IA"], d: "Un asistente que, además de responder, puede hacer tareas definidas: consultar, preparar un reporte, avisar." },
    { m: ["ERP"], d: "El sistema central donde la empresa registra pedidos, compras, inventario y producción." },
    { m: ["App de captura"], d: "Una aplicación sencilla para registrar un dato en el lugar donde ocurre: una estación, una celda o un escritorio." },
    { m: ["ETL"], d: "Extraer, transformar y cargar: el proceso que copia datos de un sistema a otro y los acomoda en el camino." },
    { m: ["Carga incremental"], d: "Copiar solo lo que cambió desde la última vez, en lugar de todo." },
    { m: ["Validación de dos rutas"], d: "Calcular la misma cifra de dos formas distintas para confirmar que es correcta." },
    { m: ["Contrato de datos"], d: "Acuerdo escrito de qué forma y qué reglas debe cumplir un dato para ser aceptado." },
    { m: ["Almacén de datos"], d: "Una base de datos pensada para consultar y analizar, no para operar el día a día." },
    { m: ["Nube"], d: "Servidores de un proveedor externo, a los que se entra por internet, en lugar de equipos propios." },
    { m: ["API"], d: "La puerta por la que un sistema le pide datos a otro, con reglas de acceso." },
    { m: ["Portal"], d: "Una página web interna donde cada persona ve sus tableros." },
    { m: ["Gobierno de datos"], d: "Las reglas, responsables y documentos que hacen que los datos sean confiables." },
    { m: ["Catálogo de datos"], d: "La lista de los datos disponibles: qué significa cada uno, de dónde viene y quién es su responsable." },
  ],
  principles: {
    title: "Cómo me gusta trabajar",
    intro: "Cuatro reglas que valen más que cualquier herramienta.",
    items: [
      { k: "Comunicación", title: "Primero escucho a cada área.", body: "Antes de proponer una herramienta, entiendo cómo se hablan hoy y qué necesita saber cada quien." },
      { k: "Trabajo en equipo", title: "Se construye con tu gente, no a su alrededor.", body: "Quien va a usarlo participa desde el diseño y termina capacitado." },
      { k: "Flujo de información", title: "El dato llega solo a quien decide.", body: "Sin volver a capturar y sin esperar el reporte del lunes." },
      { k: "Presentación", title: "Si no se entiende, no sirve.", body: "Cada cifra se muestra para que cualquiera en la empresa la pueda leer." },
    ],
  },
  career: {
    title: "De la celda robótica a la empresa conectada",
    origin: { lead: "Antes de los datos, ", em: "la celda", rest: ". Programé PLC, integré robots con prensas y dibujé sus distribuciones. Por eso, cuando conecto una máquina, sé qué puede decir y qué no." },
    items: [
      { rev: "A", date: "2022", text: "Ingeniería Mecatrónica, UANL FIME." },
      { rev: "B", date: "2022", text: "Automatización: celdas robóticas, PLC Siemens y Allen-Bradley, robots Yaskawa, OTC y Fanuc." },
      { rev: "C", date: "2025", text: "Transición a BI y análisis de datos de planta en manufactura metalmecánica." },
      { rev: "D", date: "mar 2026", text: "Núcleo de gobierno de datos." },
      { rev: "E", date: "may 2026", text: "Rastreabilidad de BOM con inventario en proceso por estación." },
      { rev: "F", date: "jul 2026", text: "Monitor de cumplimiento al plan." },
      { rev: "G", date: "ago 2026", text: "Almacén en la nube y migraciones versionadas." },
      { rev: "H", date: "nov 2026", text: "andcom: consultoría en flujo de información, datos e IA para cadena de suministro." },
    ],
    sheets: {
      hint: "Toca una lámina para ampliarla", close: "Cerrar · Esc",
      items: [
        { file: "layout-celda-transportador", title: "Celda con transportador", code: "L-01", alt: "Vista de planta de una celda robótica con transportador en U, tarimas y montacargas" },
        { file: "layout-celdas-pems", title: "Tres celdas en línea", code: "L-02", alt: "Tres celdas robóticas con su envolvente de trabajo alrededor de una línea" },
        { file: "layout-planta", title: "Distribución de nave", code: "L-03", alt: "Distribución de nave con varias celdas, transportadores y tarimas" },
      ],
    },
  },
  contact: {
    title: "¿Listo para la transformación?",
    body: "Treinta minutos para recorrer cómo viaja hoy la información de tu pedido a tu entrega y dónde se pierde. Si no hay nada que arreglar, te lo digo.",
  },
  cv: {
    role: "Consultor en flujo de información, datos e IA para cadena de suministro",
    profile: "Ingeniero mecatrónico con origen en la automatización de celdas robóticas. Estudio cómo se comunica una empresa del pedido a la entrega, y diseño, monto y opero la red que la conecta: integración de datos, telemetría de planta, asistentes de IA a la medida y capacitación del personal.",
    labels: { profile: "Perfil", experience: "Experiencia", systems: "Sistemas diseñados", skills: "Competencias", stack: "Tecnologías", education: "Formación", languages: "Idiomas", more: "Portafolio completo" },
    experience: [
      { date: "2026 – a la fecha", role: "Consultor independiente · andcom", place: "Flujo de información, datos e IA para cadena de suministro",
        points: ["Diagnóstico de flujo, plataformas de datos, control operativo e IA a la medida para empresas con cadena de suministro."] },
      { date: "2025 – a la fecha", role: "Arquitectura de datos y analítica de planta", place: "Manufactura metalmecánica · Monterrey, N.L.",
        points: ["Diseñé la plataforma de datos de extremo a extremo: procesos ETL de la base local del ERP a un almacén dimensional en la nube, con historia que no se reescribe.",
          "Definí el gobierno de datos: validaciones de dos rutas, contratos con esquema estricto y un catálogo certificado de fuentes.",
          "Construí los motores de planeación sobre el almacén: netteo MRP, plan a capacidad finita, planes de recuperación y monitor de cumplimiento al plan.",
          "Diseñé la API y el portal de consulta, con permisos por elemento y despliegue automatizado."] },
      { date: "2022 – 2025", role: "Ingeniería de automatización", place: "Integración de celdas robóticas",
        points: ["Programación de PLC Siemens y Allen-Bradley e integración de robots Yaskawa, OTC y Fanuc con prensas.",
          "Diseño de distribuciones de celda y de nave en AutoCAD."] },
    ],
    systems: [
      { t: "Motor de netteo MRP", d: "requerimiento por recurso en tres etapas, con una foto inmutable por corrida." },
      { t: "Plan a capacidad finita", d: "nivelación diaria contra el techo real de cada recurso, en el formato de carga del ERP." },
      { t: "Planes de recuperación", d: "un motor común parametrizado por cliente." },
      { t: "Monitor de cumplimiento al plan", d: "avance, cobertura y paros con cierres semanales inmutables." },
      { t: "Núcleo de gobierno de datos", d: "conocimiento verificado de fuentes y catálogo certificado." },
    ],
    skills: ["Análisis de flujo (VSM) y árboles de decisión", "Arquitectura de datos e integración", "Telemetría y comunicación con máquinas", "Asistentes y agentes de IA", "Planeación: MRP y capacidad finita", "Implementación y capacitación", "Automatización industrial"],
    stack: ["SQL Server", "Azure SQL", "Python", "Flyway", "React", "Express", "GitHub Actions", "JSON Schema", "PLC", "AutoCAD"],
    education: [{ date: "2022", text: "Ingeniería Mecatrónica · UANL FIME" }],
    languages: ["Español · nativo", "Inglés · B1"],
  },
  footer: { left: "andcom · Monterrey, N.L.", right: "Se omiten cifras de negocio, clientes y datos internos." },
};

const en: Content = {
  meta: {
    title: "andcom · Andrés D. Ramos — Your whole company, alive",
    description: "I connect sales, planning, purchasing, production and machines in one place. Flow studies, data platforms, telemetry, custom AI, implementation and training. Monterrey, Mexico.",
  },
  nav: [
    { id: "metodo", label: "Method" },
    { id: "arquitectura", label: "Architecture" },
    { id: "principios", label: "Principles" },
    { id: "trayectoria", label: "Background" },
    { id: "contacto", label: "Contact" },
  ],
  ui: {
    theme: "Toggle light or dark theme", langSwitch: "ES", langHref: "/",
    skip: "Skip to content", print: "Print résumé", copied: "Email copied ✓", menu: "Menu", sections: "Sections",
    next: "Next", prev: "Previous",
    panels: { inicio: "Home", metodo: "First steps", laboratorio: "Testing", implementar: "Delivery", arquitectura: "Architecture", principios: "Principles", trayectoria: "Background", contacto: "Contact" },
  },
  hero: {
    kicker: "Information-flow consulting · Monterrey",
    titleA: "Your whole company,",
    titleEm: "alive.",
    lead: "I study how your departments talk to each other, connect ",
    leadEm: "your systems, your machines and your people",
    leadEnd: " in one place, and run it together with your team.",
    ctaPrimary: "See the method →",
    ctaSecondary: "Let's talk",
    strip: ["Manufacturing experience", "Supply chain", "Custom AI"],
    problem: {
      num: "The problem",
      title: "Every department has its own version of the truth. And they rarely match.",
      body: "Sales promises from a spreadsheet, planning decides with Monday's report, and the machine that stopped tells no one. The information exists; what's missing is for it to arrive.",
    },
    labels: { today: "Today", withNet: "With the network" },
    nodes: [
      { n: "Customer order", short: "Order", today: "Arrives by email, WhatsApp or phone.", withNet: "Enters once and everyone sees it." },
      { n: "Sales", today: "Promises dates without seeing the plant.", withNet: "Promises with real capacity in view." },
      { n: "Planning", today: "Builds the plan in a spreadsheet every Monday.", withNet: "Gets the delay the moment it happens." },
      { n: "Purchasing", today: "Finds out late what's missing.", withNet: "Sees the shortage before it stops the line." },
      { n: "Production", today: "Logs by hand at the end of the shift.", withNet: "Every step is recorded where it happens." },
      { n: "Machines", today: "Nobody knows they stopped until someone says so.", withNet: "The machine tells planning on its own." },
      { n: "Quality", today: "Rejects are reported on paper.", withNet: "Rejects go back to production instantly." },
      { n: "Shipping", today: "Confirms shipments by phone.", withNet: "Sales sees the shipment without asking." },
      { n: "Delivery", today: "The customer asks where their order is.", withNet: "The customer knows without asking." },
    ],
    returns: ["Machine reports a stop to planning", "Quality sends a reject back to production", "Shipping confirms dispatch to sales"],
    log: {
      title: "Network", live: "live", areas: "Areas", impulses: "Impulses", returns: "Returns",
      legend: ["signal: data flows", "critical impulse", "synapse: return point", "› hover over an area"],
      orderIn: "Order #{id} enters the network", orderOut: "Order #{id} delivered", share: "{area} shares its status",
    },
  },
  method: {
    title: "How I work",
    get: "You get",
    phases: [
      { id: "metodo", title: "First steps", intro: "First I understand how your company works; then I design the network that connects it.", steps: [0, 1] },
      { id: "laboratorio", title: "Testing", intro: "You try it before you pay for it, and the budget comes from something you've already seen working.", steps: [2, 3] },
      { id: "implementar", title: "Delivery", intro: "I deploy it, run it and make sure your team masters it.", steps: [4, 5] },
    ],
    steps: [
      { n: "01", title: "Study", body: "I walk through your company from order to delivery. I map how material and information move, make sketches and drafts, question the usual paradigms and assess where data gets lost.",
        get: "A value stream map (VSM), the decision tree of your operation and an assessment of where you stand." },
      { n: "02", title: "Design", body: "With that assessment I choose, from the solutions I offer, the ones your company needs, and propose the network: what gets connected, where each piece of data is captured and where the return points go.",
        get: "A staged architecture. Each stage is useful on its own." },
      { n: "03", title: "Test", body: "Before you invest, I build the solution in my lab with your real flow and you see it working.",
        get: "A working prototype of your case." },
      { n: "04", title: "Budget", body: "Once the test is approved, I choose the services and supplies for production —cloud, sensors, licenses— and put together the budget with its investment plan.",
        get: "A phased budget, monthly costs and financing options." },
      { n: "05", title: "Implement", body: "I deploy the solution to production and manage it: backups, updates, security and a change log.",
        get: "A running, documented system." },
      { n: "06", title: "Train", body: "I train the people who use it and the people who run it. The goal is for your team to understand it, not to depend on me.",
        get: "A trained team and clear manuals." },
    ],
  },
  layers: {
    kicker: "The solutions I design",
    layer: "Layer",
    intro: "Five layers. I assess where you stand and we set the starting point together.",
    items: [
      { n: "1", title: "Flow and information", body: "I redesign how your departments communicate before touching any system.",
        list: ["Map of material and information flow", "Decision trees from order to delivery", "Return points: where each piece of data must go back"] },
      { n: "2", title: "One place", body: "I integrate your ERP, your spreadsheets and your apps into one platform with reliable data and a portal for each department.",
        list: ["Integration without writing to your ERP", "Data validated before it's published", "Portal with per-person permissions"] },
      { n: "3", title: "Operational control", body: "I connect your machines and your shop floor so operations measure themselves.",
        list: ["Telemetry: cycles, stops and pace, live", "Direct communication with PLCs and controllers", "Alerts that reach whoever decides"] },
      { n: "4", title: "Custom AI", body: "An assistant or AI agent that knows your business: your products, your processes and your data.",
        list: ["Answers citing where each fact came from", "Sees only what it should", "Every query is logged"] },
      { n: "5", title: "Operations and training", body: "I run it; your team masters it.",
        list: ["Support and continuous improvement", "Role-based training", "Documentation in plain language"] },
    ],
  },
  lab: {
    kicker: "The lab method",
    body: "I run my own test environment where I build each solution with your real flow before you buy any infrastructure. Once you approve it, I move it to production with established providers and a clear budget.",
    flow: ["Lab", "You see it working", "Budget", "Production", "Training"],
    points: [
      "You decide by looking at something that works, not at a slide deck.",
      "What you approve is what gets installed.",
      "Each client's data lives in isolation: it never mixes between projects.",
    ],
  },
  operate: {
    kicker: "What stays in your company",
    list: ["A running system, with backups and a change log", "Manuals in plain language", "Role-based trained staff", "Support and continuous improvement"],
    loop: ["Operate", "Measure", "Improve", "Study"],
    loopText: "And back to the start: operating data shows what to improve next.",
  },
  arch: {
    title: "How your data travels",
    intro: "One of the data governance deliverables: the map of how each piece of data in your company is born, travels, gets checked, is stored and gets used. I design it to fit you.",
    hint: "Pick a station on the route.",
    base: "Based on a real platform I designed for a metal manufacturing plant.",
    labels: { what: "What it is", why: "Why it matters", how: "How I do it", tech: "In technical terms" },
    frame: { tag: "Governance", node: "Rules and owners", sub: "who sees what · which figure is official",
      what: "It wraps the whole route: it defines who owns each piece of data, who can see it and how it's documented.",
      why: "Without clear rules, every department goes back to its own version of the truth.",
      how: ["An owner for every key piece of data", "Access granted with a reason and a record", "Documentation in plain language"],
      tech: ["Data governance", "Data catalog"] },
    stations: [
      { tag: "1 · Born", node: "Where data is born", sub: "ERP · Excel · apps · machines",
        what: "Every department generates data: the ERP with orders, the spreadsheets, the shop-floor capture apps and the machines themselves.",
        why: "If data is born wrong or typed twice, everything downstream inherits the error.",
        how: ["Data is captured where it happens, once", "Your systems aren't modified: they're only read", "Every record says who, when and where"],
        tech: ["ERP", "Capture app"] },
      { tag: "2 · Travels", node: "Collection", sub: "automatic copies",
        what: "An automatic process copies new data from each source to a single place, on a set schedule.",
        why: "Nobody has to export or send files: data arrives on its own and on time.",
        how: ["Only what's new travels, not everything every time", "Every transfer leaves a record: how much, when and which version", "If something fails, it raises an alert instead of staying quiet"],
        tech: ["ETL", "Incremental load"] },
      { tag: "3 · Checked", node: "Data customs", sub: "two paths, one figure",
        what: "Before entering, every important figure is computed through two independent paths. If they don't match, it doesn't pass.",
        why: "That way a published figure is a reliable figure, and you know why.",
        how: ["Business rules written down and verifiable", "What doesn't reconcile is flagged, not hidden", "A catalog says which figure is official"],
        tech: ["Two-path check", "Data contract"] },
      { tag: "4 · Stored", node: "Single warehouse", sub: "receive · organize · display",
        what: "A single place in the cloud where data is organized by topic: orders, production, inventory, quality.",
        why: "Every department reads from the same source, and what was seen on Monday can be opened again.",
        how: ["Three zones: intake, order and showcase", "History is never rewritten", "Changes are rehearsed before they're applied"],
        tech: ["Data warehouse", "Cloud"] },
      { tag: "5 · Used", node: "Whoever decides", sub: "dashboards · planning · AI",
        what: "Out of the warehouse come each department's dashboards, the engines that plan production and the AI assistants, each person seeing only what concerns them.",
        why: "Information reaches whoever decides, in a format they understand.",
        how: ["A single access door, with per-person permissions", "From summary to detail in a few clicks", "What gets consulted is measured, to improve it"],
        tech: ["API", "Portal"] },
    ],
  },
  glossary: [
    { m: ["VSM"], d: "Value stream map: a drawing of the whole journey, from order to delivery, showing where value is added and where things wait or get re-entered." },
    { m: ["decision tree"], d: "Every point where someone decides something —accept an order, buy, schedule— with which information and where it comes from." },
    { m: ["return points", "return point"], d: "Places where operating data flows back on its own to whoever makes the decision." },
    { m: ["paradigms"], d: "Ways of working taken for granted (“we've always done it this way”) that are worth reviewing." },
    { m: ["Telemetry"], d: "Automatic, continuous measurement of what happens in operations, sent to a central system." },
    { m: ["PLC"], d: "The industrial computer that controls a machine or a line." },
    { m: ["AI agent"], d: "An assistant that, besides answering, can carry out defined tasks: query, prepare a report, send an alert." },
    { m: ["ERP"], d: "The central system where the company records orders, purchases, inventory and production." },
    { m: ["Capture app"], d: "A simple application to record data where it happens: a station, a cell or a desk." },
    { m: ["ETL"], d: "Extract, transform, load: the process that copies data from one system to another and arranges it along the way." },
    { m: ["Incremental load"], d: "Copying only what changed since last time, instead of everything." },
    { m: ["Two-path check"], d: "Computing the same figure in two different ways to confirm it's correct." },
    { m: ["Data contract"], d: "A written agreement on the shape and rules a piece of data must meet to be accepted." },
    { m: ["Data warehouse"], d: "A database designed for querying and analysis, not for running day-to-day operations." },
    { m: ["Cloud"], d: "Servers from an outside provider, reached over the internet, instead of your own machines." },
    { m: ["API"], d: "The door through which one system asks another for data, with access rules." },
    { m: ["Portal"], d: "An internal web page where each person sees their dashboards." },
    { m: ["Data governance"], d: "The rules, owners and documents that make data reliable." },
    { m: ["Data catalog"], d: "The list of available data: what each item means, where it comes from and who owns it." },
  ],
  principles: {
    title: "How I like to work",
    intro: "Four rules worth more than any tool.",
    items: [
      { k: "Communication", title: "I listen to every department first.", body: "Before proposing a tool, I understand how people talk to each other today and what each person needs to know." },
      { k: "Teamwork", title: "Built with your people, not around them.", body: "Whoever will use it takes part from the design stage and ends up trained." },
      { k: "Information flow", title: "Data reaches whoever decides, on its own.", body: "No re-entering, and no waiting for Monday's report." },
      { k: "Presentation", title: "If it isn't understood, it doesn't work.", body: "Every figure is shown so anyone in the company can read it." },
    ],
  },
  career: {
    title: "From the robotic cell to the connected company",
    origin: { lead: "Before the data, ", em: "the cell", rest: ". I programmed PLCs, integrated robots with presses and drew their layouts. So when I connect a machine, I know what it can say and what it can't." },
    items: [
      { rev: "A", date: "2022", text: "B.Sc. Mechatronics Engineering, UANL FIME." },
      { rev: "B", date: "2022", text: "Automation: robotic cells, Siemens and Allen-Bradley PLCs, Yaskawa, OTC and Fanuc robots." },
      { rev: "C", date: "2025", text: "Move into BI and plant-data analysis in metal manufacturing." },
      { rev: "D", date: "Mar 2026", text: "Data governance core." },
      { rev: "E", date: "May 2026", text: "BOM traceability with work in process by station." },
      { rev: "F", date: "Jul 2026", text: "Plan compliance monitor." },
      { rev: "G", date: "Aug 2026", text: "Cloud warehouse and versioned migrations." },
      { rev: "H", date: "Nov 2026", text: "andcom: information-flow, data and AI consulting for supply chains." },
    ],
    sheets: {
      hint: "Tap a drawing to enlarge it", close: "Close · Esc",
      items: [
        { file: "layout-celda-transportador", title: "Cell with conveyor", code: "L-01", alt: "Plan view of a robotic cell with a U-shaped conveyor, pallets and forklifts" },
        { file: "layout-celdas-pems", title: "Three cells in line", code: "L-02", alt: "Three robotic cells with their work envelopes along a line" },
        { file: "layout-planta", title: "Bay layout", code: "L-03", alt: "Bay layout with several cells, conveyors and pallets" },
      ],
    },
  },
  contact: {
    title: "Ready for the transformation?",
    body: "Thirty minutes to walk through how information travels today from your order to your delivery, and where it gets lost. If there's nothing to fix, I'll tell you.",
  },
  cv: {
    role: "Information-flow, data and AI consultant for supply chains",
    profile: "Mechatronics engineer with a background in robotic-cell automation. I study how a company communicates from order to delivery, and I design, deploy and run the network that connects it: data integration, plant telemetry, custom AI assistants and staff training.",
    labels: { profile: "Profile", experience: "Experience", systems: "Systems designed", skills: "Skills", stack: "Technologies", education: "Education", languages: "Languages", more: "Full portfolio" },
    experience: [
      { date: "2026 – present", role: "Independent consultant · andcom", place: "Information flow, data and AI for supply chains",
        points: ["Flow diagnostics, data platforms, operational control and custom AI for companies with a supply chain."] },
      { date: "2025 – present", role: "Data architecture and plant analytics", place: "Metal manufacturing · Monterrey, Mexico",
        points: ["Designed the data platform end to end: ETL processes from the ERP's local database to a dimensional cloud warehouse, with history that is never rewritten.",
          "Defined data governance: two-path checks, strict-schema contracts and a certified catalog of sources.",
          "Built the planning engines on top of the warehouse: MRP netting, finite-capacity plan, recovery plans and plan compliance monitor.",
          "Designed the API and the query portal, with per-item permissions and automated deployment."] },
      { date: "2022 – 2025", role: "Automation engineering", place: "Robotic cell integration",
        points: ["Siemens and Allen-Bradley PLC programming and integration of Yaskawa, OTC and Fanuc robots with presses.",
          "Cell and bay layout design in AutoCAD."] },
    ],
    systems: [
      { t: "MRP netting engine", d: "requirement by resource in three stages, with an immutable snapshot per run." },
      { t: "Finite-capacity plan", d: "daily leveling against each resource's real ceiling, in the ERP's upload format." },
      { t: "Recovery plans", d: "one shared engine parameterized per customer." },
      { t: "Plan compliance monitor", d: "progress, coverage and downtime with immutable weekly closes." },
      { t: "Data governance core", d: "verified source knowledge and a certified catalog." },
    ],
    skills: ["Flow analysis (VSM) and decision trees", "Data architecture and integration", "Telemetry and machine communication", "AI assistants and agents", "Planning: MRP and finite capacity", "Implementation and training", "Industrial automation"],
    stack: ["SQL Server", "Azure SQL", "Python", "Flyway", "React", "Express", "GitHub Actions", "JSON Schema", "PLC", "AutoCAD"],
    education: [{ date: "2022", text: "B.Sc. Mechatronics Engineering · UANL FIME" }],
    languages: ["Spanish · native", "English · B1"],
  },
  footer: { left: "andcom · Monterrey, Mexico", right: "Business figures, clients and internal data are omitted." },
};

export const content: Record<Lang, Content> = { es, en };
