/*
  Todo el texto del sitio, en español e inglés.
  Criterio editorial: se describe el diseño y la arquitectura de los sistemas,
  no sus resultados. Sin porcentajes de reconciliación, conteos de validaciones
  ni frecuencias de corrida.
  Regla de confidencialidad: sin nombres de clientes, volúmenes, montos,
  servidores ni personas del empleador.
*/

export type Lang = "es" | "en";

export const CONTACT = {
  email: "hola@andcom.dev", // Email Routing de Cloudflare
  github: "https://github.com/AndresDRamos",
  city: "Monterrey, N.L.",
};

export interface Content {
  meta: { title: string; description: string };
  nav: { id: string; label: string }[];
  ui: { theme: string; langSwitch: string; langHref: string; skip: string; print: string; menu: string; sections: string };
  hero: { kicker: string; titleA: string; titleEm: string; lead: string; body: string; ctaPrimary: string; ctaSecondary: string;
    portraitAlt: string; pillars: { k: string; t: string }[] };
  arch: { title: string; intro: string; decisions: string; hint: string;
    zones: [string, string]; schemas: [string, string, string]; links: { gate: string; views: string; reads: string };
    stages: { tag: string; node: string; sub: string; title: string; body: string; decisions: string[]; tech: string[] }[] };
  systems: { title: string; intro: string; labels: { problem: string; design: string; decisions: string; flow: string };
    items: { id: string; title: string; area: string; problem: string; design: string; decisions: string[]; flow: string[] }[] };
  principles: { title: string; intro: string; items: { title: string; body: string }[] };
  offer: { title: string; intro: string; items: { kicker: string; title: string; body: string; list: string[] }[] };
  career: { title: string; intro: string; origin: { lead: string; em: string; rest: string };
    items: { rev: string; date: string; text: string }[];
    sheets: { coords: string; hint: string; close: string; items: { file: string; title: string; code: string; alt: string }[] } };
  contact: { titleA: string; titleEm: string; body: string };
  /* CV de una hoja: sólo se ve al imprimir */
  cv: { role: string; profile: string;
    labels: { profile: string; experience: string; systems: string; skills: string; stack: string; education: string; languages: string; more: string };
    experience: { date: string; role: string; place: string; points: string[] }[];
    systems: { t: string; d: string }[]; skills: string[]; stack: string[];
    education: { date: string; text: string }[]; languages: string[] };
  footer: { left: string; right: string };
}

const es: Content = {
  meta: {
    title: "Andrés D. Ramos · Arquitectura de datos y planeación de producción",
    description: "Diseño de extremo a extremo: procesos ETL del ERP en planta a un almacén en la nube, gobierno de datos y motores de netteo MRP y capacidad finita. Consultoría para Supply Chain y planeación de producción.",
  },
  nav: [
    { id: "arquitectura", label: "Arquitectura" },
    { id: "sistemas", label: "Sistemas" },
    { id: "principios", label: "Principios" },
    { id: "servicios", label: "Servicios" },
    { id: "trayectoria", label: "Trayectoria" },
    { id: "contacto", label: "Contacto" },
  ],
  ui: {
    theme: "Cambiar tema claro u oscuro", langSwitch: "EN", langHref: "/en/",
    skip: "Saltar al contenido", print: "Imprimir como CV", menu: "Menú", sections: "Secciones",
  },
  hero: {
    kicker: "Andrés D. Ramos Luna · Arquitectura de datos y planeación de producción",
    titleA: "Diseño los sistemas que llevan el dato del ERP",
    titleEm: "al plan de producción.",
    lead: "Procesos ETL de planta a la nube, un almacén gobernado y motores de planeación.",
    body: "Ingeniero mecatrónico. Empecé programando robots en celdas de prensa y hoy diseño, de extremo a extremo, la plataforma que planea esas celdas: integración, modelo de datos, validación y motores de netteo y capacidad finita.",
    ctaPrimary: "Ver la arquitectura",
    ctaSecondary: "Hablemos",
    portraitAlt: "Retrato de Andrés D. Ramos Luna",
    pillars: [
      { k: "Integración", t: "Procesos ETL de la base local del ERP a un almacén en la nube" },
      { k: "Modelo de datos", t: "Almacén dimensional con historia que no se reescribe" },
      { k: "Motores", t: "Netteo MRP, capacidad finita y planes de recuperación" },
      { k: "Gobierno", t: "Validación y certificación antes de publicar una cifra" },
    ],
  },
  arch: {
    title: "Arquitectura de extremo a extremo",
    intro: "Una plataforma en capas, desde donde nace el dato —la aplicación de captura o el ERP— hasta el tablero del planner. Cada capa tiene una sola responsabilidad y un contrato con la siguiente.",
    decisions: "Decisiones de diseño",
    hint: "Elige un bloque del diagrama para ver cómo está diseñado.",
    zones: ["Planta", "Nube"], schemas: ["staging", "core", "semántica"],
    links: { gate: "puerta de validación entre staging y core", views: "vistas", reads: "lee · publica" },
    stages: [
      { tag: "Origen", node: "Apps de captura", sub: "piso · administrativas", title: "Aplicaciones donde nace el dato",
        body: "No todo el dato vive en el ERP. Cuando un evento de piso o un trámite administrativo no tiene dónde registrarse, diseño la aplicación que lo captura en el punto donde ocurre. Guarda en su propia base operativa y entra a la plataforma como una fuente más.",
        decisions: ["Captura en el punto de origen: estación, celda o escritorio", "Base operativa propia: la aplicación no escribe en el ERP", "Catálogos tomados del modelo gobernado, no tecleados", "Cada registro con autor, hora y estación, listo para la carga incremental"],
        tech: ["React", "Express", "SQL"] },
      { tag: "Fuente", node: "ERP", sub: "SQL Server · sólo lectura", title: "El ERP en planta, de sólo lectura",
        body: "La plataforma no crea objetos en el ERP ni escribe en él. Lee con una cuenta de sólo lectura y todo lo que construye vive fuera: el sistema transaccional sigue siendo la fuente y nunca el lugar del análisis.",
        decisions: ["Acceso de sólo lectura, con permiso por tabla", "Lo que el ERP conserva se reconstruye; lo que sobrescribe se versiona fuera", "Cada fuente documentada: receta, esquema y trampas conocidas"],
        tech: ["SQL Server", "On-premise"] },
      { tag: "Integración", node: "ETL", sub: "Python · manifiestos", title: "Procesos ETL de la base local a la nube",
        body: "Procesos de extracción en Python llevan los datos de las bases en planta a un área de staging en la nube. Cada carga se declara en un manifiesto: qué lee, cuándo corre y qué tráfico genera.",
        decisions: ["Carga incremental con la marca de tiempo como contrato", "Sin coordinador central: cada máquina arrienda su ventana y la segunda no corre", "Sólo se promueve código de la rama principal, sin cambios locales", "Cada corrida deja evidencia: filas, tiempos por fase y versión del código"],
        tech: ["Python", "pyodbc", "Manifiestos"] },
      { tag: "Almacén", node: "Almacén", sub: "", title: "Almacén dimensional en la nube",
        body: "Tres esquemas con responsabilidades separadas: staging recibe, core guarda hechos y dimensiones, y la capa semántica expone vistas listas para consumo.",
        decisions: ["Staging → core → semántica, con llave surrogada y la natural como única", "Tablas sólo-append para lo que el ERP sobrescribe: plan, estado y capacidad", "Fotos semanales: la semana cerrada no se toca", "Migraciones versionadas, clasificadas por riesgo y ensayadas en una copia efímera"],
        tech: ["Azure SQL", "Modelo Kimball", "Flyway"] },
      { tag: "Gobierno", node: "Gobierno de datos", sub: "contratos · validaciones de dos rutas · catálogo certificado", title: "Validación antes de publicar",
        body: "Entre staging y core hay una puerta. Cada premisa de negocio se calcula por dos rutas independientes y la carga sólo se promueve si coinciden dentro de una tolerancia.",
        decisions: ["Dos consultas independientes por premisa, nunca contra un valor fijo", "Al menos una validación atada a la fuente cruda", "Cada producto hereda la certificación de las premisas que cita", "Contratos con esquema estricto y validador para cada tipo de documento"],
        tech: ["SQL", "JSON Schema", "CI"] },
      { tag: "Motores", node: "Motores de planeación", sub: "netteo · capacidad finita · recuperación · monitor", title: "Motores de planeación sobre el almacén",
        body: "Netteo en cascada, nivelación a capacidad finita y planes de recuperación. Cada corrida publica una foto inmutable que los demás sistemas leen por una interfaz, no por sus tablas.",
        decisions: ["Etapas con frontera explícita: requerimiento, inventario y cobertura", "Capas: la capacidad finita se apoya en el netteo sin volver a derivarlo", "Corridas reproducibles: cada foto guarda el estado que la produjo", "Nada se excluye en silencio: lo que no cabe se publica marcado"],
        tech: ["Python", "Fotos por corrida"] },
      { tag: "Consumo", node: "API · Portal", sub: "permisos por elemento", title: "Una API como única puerta",
        body: "El portal no compila datos: los pide a una API con permisos resueltos por elemento. La navegación baja de lo macro a lo micro, del monitor al recurso y de ahí al registro crudo.",
        decisions: ["El front-end es público y no lleva datos", "Permisos por elemento, resueltos en vistas", "Cambios de acceso por procedimientos que exigen motivo", "Telemetría de uso para saber qué se consulta"],
        tech: ["React", "Express", "GitHub Actions"] },
    ],
  },
  systems: {
    title: "Sistemas que diseñé",
    intro: "Cada uno resuelve un problema de planeación en manufactura metalmecánica. Lo que importa aquí es cómo está construido.",
    labels: { problem: "Problema", design: "Diseño", decisions: "Decisiones clave", flow: "Flujo" },
    items: [
      { id: "S-01", title: "Motor de netteo MRP", area: "Requerimiento · cobertura",
        problem: "La demanda fechada por recurso sólo existía dentro de un procedimiento cerrado del ERP: no se podía auditar ni extender.",
        design: "Un orquestador y tres etapas con frontera explícita —requerimiento, inventario y cobertura— que publican una foto inmutable por corrida.",
        decisions: ["Netteo en cascada hacia atrás sobre la ruta, descontando el inventario de cada punto", "Inventario compartido repartido en FIFO; el orden de la cola es parte del contrato", "BOM multinivel resuelto por el camino más largo desde el producto terminado", "Fechado hacia atrás en días laborales, buscando en el calendario y no por fórmula"],
        flow: ["Demanda · ruta · BOM", "Inventario en proceso", "Netteo en cascada", "Requerimiento por recurso"] },
      { id: "S-02", title: "Plan a capacidad finita", area: "Capacidad · nivelación · piloto",
        problem: "El ERP libera el plan a capacidad infinita: en papel cabe, en la máquina no.",
        design: "Una segunda capa sobre el netteo que nivela día por día contra el techo real de cada recurso y emite el plan en el mismo formato de carga del ERP, sin escribir en él.",
        decisions: ["La fecha es un límite, no una meta: lo que no cabe se adelanta en días hábiles, con tope", "Si tampoco cabe, se empuja marcado «en riesgo»; lo que excede el horizonte se reporta aparte", "Cola determinista: criticidad, fecha, cliente y carga", "Cada recurso en su unidad nativa; capacidad = turnos × disponibilidad × eficiencia"],
        flow: ["Requerimiento fechado", "Capacidad diaria", "Nivelación", "Plan cargable · anomalías"] },
      { id: "S-03", title: "Planes de recuperación", area: "Atraso · multi-recurso",
        problem: "Cada cliente tenía su propio plan de recuperación, con lógica casi duplicada.",
        design: "Un motor común parametrizado por una configuración por cliente, con la capa de cifras separada de la de presentación.",
        decisions: ["Nivelado semanal con techo en tres niveles: líneas dedicadas, carga en fecha y atraso en FIFO", "Precedencia real de la ruta y del BOM multinivel", "Iteración a punto fijo dentro de cada semana", "Verificación de conservación por recurso en cada corrida"],
        flow: ["Atraso y demanda", "Configuración por cliente", "Nivelado en tres niveles", "Plan y fecha de entrega"] },
      { id: "S-04", title: "Monitor de cumplimiento al plan", area: "Seguimiento · cierres",
        problem: "Medir lo producido contra el plan cuando el ERP sobrescribe el plan y su propia historia.",
        design: "Un servicio que recalcula avance, cobertura, eficiencia y paros, y los entrega como un documento que el portal sólo dibuja.",
        decisions: ["Cinco modos: vivo, checkpoint, foto de cobertura, cierre semanal y ajustado", "El cierre semanal es inmutable: las cifras de una foto no se reescriben", "La foto se toma antes del cierre, porque después el ERP ya la sobrescribió", "Grano por recurso, donde hay un responsable, con navegación hasta el registro crudo"],
        flow: ["Plan cargado", "Producción y paros", "Cálculo por recurso", "Monitor · cierres"] },
      { id: "S-05", title: "Núcleo de gobierno de datos", area: "Conocimiento · certificación",
        problem: "El conocimiento sobre el ERP vivía en personas y consultas sueltas; nadie podía decir qué cifra era confiable.",
        design: "Un repositorio de conocimiento verificado: conceptos, recetas por fuente, esquemas, validaciones y un catálogo de activos descritos por manifiestos, separado del código que los consume.",
        decisions: ["Una validación es una premisa de negocio con dos rutas y una tolerancia", "Dos ejes separados: qué tan probado está algo y si está en producción", "Contratos con esquema estricto; el campo que nadie lee se retira", "«Cerré bien» es un código de salida: enlaces, huérfanos, validación y frescura"],
        flow: ["Fuentes del ERP", "Recetas y esquemas", "Validaciones de dos rutas", "Catálogo certificado"] },
      { id: "S-06", title: "Libreta de análisis", area: "Estudios · caducidad",
        problem: "Los análisis puntuales se quedaban como archivos sueltos que nadie sabía si seguían vigentes.",
        design: "Un espacio de estudios de sólo lectura donde cada caso nace con fecha de caducidad y un destino posible.",
        decisions: ["Al caducar, el caso se gradúa al almacén, deja su regla en el núcleo o sale", "Ningún caso define conceptos: los toma del núcleo", "Las salidas con datos sensibles viven fuera del control de versiones", "Tres tipos de documento: plan, estudio y contexto"],
        flow: ["Pregunta de negocio", "Estudio con caducidad", "Graduación", "Almacén · núcleo"] },
      { id: "S-07", title: "Flujo de trabajo con agentes de IA", area: "Agentes · orquestación",
        problem: "Usar agentes de IA sobre datos de planta sin que inventen fuentes ni se salten los controles.",
        design: "Un catálogo de plugins versionado: la doctrina se cita en vez de copiarse, los agentes consultan por un servidor de sólo lectura y cada cambio entra por pull request con puertas automáticas.",
        decisions: ["Sub-agentes con un solo oficio: buscar fuentes, probar consultas, optimizar y validar", "Un único punto con credenciales, que registra cada llamada", "Planes ejecutados por una sesión orquestadora, con una rama y un PR por paso", "Telemetría del ruteo de documentación para corregirlo con evidencia"],
        flow: ["Plan desglosado", "Sub-sesión por paso", "Puertas automáticas", "Merge · documentación"] },
    ],
  },
  principles: {
    title: "Principios de diseño",
    intro: "Cuatro reglas que se repiten en todo lo que construyo.",
    items: [
      { title: "Una premisa, dos rutas",
        body: "Cada supuesto sobre los datos se reconstruye con dos consultas independientes, nunca contra un valor fijo, y al menos una se ata a la fuente cruda." },
      { title: "Verdad por construcción",
        body: "Al modelo sólo entra lo que pasó sus validaciones en esa misma carga. El área de staging recibe datos; no es la verdad." },
      { title: "La historia no se reescribe",
        body: "Lo que el ERP sobrescribe se guarda en tablas sólo-append y fotos semanales. Lo que se vio el lunes se puede volver a abrir." },
      { title: "Nada se excluye en silencio",
        body: "Lo que no cabe, no cuadra o no tiene recurso se publica marcado. Un plan que esconde sus excepciones no se puede corregir." },
    ],
  },
  offer: {
    title: "Cómo trabajamos",
    intro: "Tres formas de empezar. Todas terminan con algo que tu equipo puede volver a correr sin mí.",
    items: [
      { kicker: "Para empezar", title: "Diagnóstico de arquitectura", body: "Reviso cómo viaja el dato de tu ERP a tu plan y en qué punto deja de ser confiable.",
        list: ["Mapa de fuentes y flujos", "Validaciones de dos rutas en las fuentes críticas", "Propuesta de arquitectura por etapas"] },
      { kicker: "Para construir", title: "Plataforma de datos", body: "Procesos ETL de tu base local a un almacén en la nube, con modelo, historia y gobierno.",
        list: ["Cargas declaradas y con evidencia", "Modelo dimensional y capa semántica", "Migraciones versionadas y reversibles"] },
      { kicker: "Para planear", title: "Motores de planeación", body: "Netteo, cobertura de material y nivelación a capacidad finita sobre tu ERP.",
        list: ["Requerimiento por recurso y día", "Plan en el formato de carga de tu ERP", "Seguimiento al plan con cierres inmutables"] },
    ],
  },
  career: {
    title: "Trayectoria",
    intro: "De la celda robótica a la arquitectura de datos.",
    origin: { lead: "Antes de los datos, ", em: "la celda", rest: ". Programé PLC, integré robots con prensas y dibujé sus distribuciones. Por eso, cuando un plan dice que una máquina puede, sé preguntar si de verdad puede." },
    items: [
      { rev: "A", date: "2022", text: "Ingeniería Mecatrónica, UANL FIME." },
      { rev: "B", date: "2022", text: "Automatización: celdas robóticas, PLC Siemens y Allen-Bradley, robots Yaskawa, OTC y Fanuc." },
      { rev: "C", date: "2025", text: "Transición a BI y análisis de datos de planta sobre el ERP." },
      { rev: "D", date: "mar 2026", text: "Núcleo de gobierno: conocimiento de fuentes y validaciones de dos rutas." },
      { rev: "E", date: "may 2026", text: "Rastreabilidad de BOM con inventario en proceso por estación." },
      { rev: "F", date: "jul 2026", text: "Monitor de cumplimiento al plan con cierres semanales inmutables." },
      { rev: "G", date: "ago 2026", text: "Almacén en Azure SQL: ETL desde la base local y migraciones versionadas." },
      { rev: "H", date: "nov 2026", text: "Consultoría independiente en arquitectura de datos y planeación." },
    ],
    sheets: {
      coords: "Espacio modelo", hint: "Toca una lámina para ampliarla", close: "Cerrar · Esc",
      items: [
        { file: "layout-celda-transportador", title: "Celda con transportador", code: "L-01", alt: "Vista de planta de una celda robótica con transportador en U, tarimas y montacargas" },
        { file: "layout-celdas-pems", title: "Tres celdas en línea", code: "L-02", alt: "Tres celdas robóticas con su envolvente de trabajo alrededor de una línea" },
        { file: "layout-planta", title: "Distribución de nave", code: "L-03", alt: "Distribución de nave con varias celdas, transportadores y tarimas" },
      ],
    },
  },
  contact: {
    titleA: "¿Tu plan cabe", titleEm: "en tu planta?",
    body: "Treinta minutos para revisar cómo viaja hoy el dato de tu ERP a tu plan y dónde conviene rediseñar. Si no hay nada que arreglar, te lo digo.",
  },
  cv: {
    role: "Arquitectura de datos y planeación de producción",
    profile: "Ingeniero mecatrónico con origen en la automatización de celdas robóticas. Diseño de extremo a extremo plataformas de datos para manufactura: desde la captura en piso y el ERP hasta un almacén gobernado en la nube y los motores que planean la producción contra la capacidad real.",
    labels: { profile: "Perfil", experience: "Experiencia", systems: "Sistemas diseñados", skills: "Competencias", stack: "Tecnologías", education: "Formación", languages: "Idiomas", more: "Portafolio completo" },
    experience: [
      { date: "2026 – a la fecha", role: "Consultor independiente · andcom", place: "Arquitectura de datos y planeación para Supply Chain",
        points: ["Diagnóstico de arquitectura, plataformas de datos y motores de planeación sobre el ERP del cliente."] },
      { date: "2025 – a la fecha", role: "Arquitectura de datos y analítica de planta", place: "EZI Metales · Manufactura metalmecánica · Monterrey, N.L.",
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
    skills: ["Arquitectura de datos y modelado dimensional", "Procesos ETL de bases locales a la nube", "Gobierno y validación de datos", "Planeación: netteo MRP y capacidad finita", "Diseño de API y aplicaciones de captura", "Flujos de trabajo con agentes de IA", "Automatización industrial y robótica"],
    stack: ["SQL Server", "Azure SQL", "Python", "Flyway", "React", "Express", "GitHub Actions", "JSON Schema", "AutoCAD"],
    education: [{ date: "2022", text: "Ingeniería Mecatrónica · UANL FIME" }],
    languages: ["Español · nativo", "Inglés · B1"],
  },
  footer: { left: "andcom · Monterrey, N.L.", right: "Se omiten cifras de negocio, clientes y datos internos." },
};

const en: Content = {
  meta: {
    title: "Andrés D. Ramos · Data architecture and production planning",
    description: "End-to-end design: ETL processes from the on-premise ERP to a cloud warehouse, data governance, and MRP netting and finite-capacity engines. Consulting for supply chain and production planning.",
  },
  nav: [
    { id: "arquitectura", label: "Architecture" },
    { id: "sistemas", label: "Systems" },
    { id: "principios", label: "Principles" },
    { id: "servicios", label: "Services" },
    { id: "trayectoria", label: "Background" },
    { id: "contacto", label: "Contact" },
  ],
  ui: {
    theme: "Toggle light or dark theme", langSwitch: "ES", langHref: "/",
    skip: "Skip to content", print: "Print as résumé", menu: "Menu", sections: "Sections",
  },
  hero: {
    kicker: "Andrés D. Ramos Luna · Data architecture and production planning",
    titleA: "I design the systems that carry data from the ERP",
    titleEm: "to the production plan.",
    lead: "ETL processes from plant to cloud, a governed warehouse and planning engines.",
    body: "Mechatronics engineer. I started out programming robots in press cells and today I design, end to end, the platform that plans those cells: integration, data model, validation, and netting and finite-capacity engines.",
    ctaPrimary: "See the architecture",
    ctaSecondary: "Let's talk",
    portraitAlt: "Portrait of Andrés D. Ramos Luna",
    pillars: [
      { k: "Integration", t: "ETL processes from the ERP's local database to a cloud warehouse" },
      { k: "Data model", t: "Dimensional warehouse with history that is never rewritten" },
      { k: "Engines", t: "MRP netting, finite capacity and recovery plans" },
      { k: "Governance", t: "Validation and certification before a figure is published" },
    ],
  },
  arch: {
    title: "End-to-end architecture",
    intro: "A layered platform, from where the data is born — the capture app or the ERP — to the planner's dashboard. Each layer has a single responsibility and a contract with the next.",
    decisions: "Design decisions",
    hint: "Pick a block in the diagram to see how it is designed.",
    zones: ["Plant", "Cloud"], schemas: ["staging", "core", "semantic"],
    links: { gate: "validation gate between staging and core", views: "views", reads: "reads · publishes" },
    stages: [
      { tag: "Origin", node: "Capture apps", sub: "shop floor · back office", title: "Applications where the data is born",
        body: "Not all data lives in the ERP. When a shop-floor event or a back-office process has nowhere to be recorded, I design the application that captures it at the point where it happens. It stores to its own operational database and enters the platform as one more source.",
        decisions: ["Capture at the point of origin: station, cell or desk", "Its own operational database: the app never writes to the ERP", "Catalogs taken from the governed model, not typed in", "Every record with author, time and station, ready for incremental loading"],
        tech: ["React", "Express", "SQL"] },
      { tag: "Source", node: "ERP", sub: "SQL Server · read-only", title: "The plant ERP, read-only",
        body: "The platform creates no objects in the ERP and never writes to it. It reads through a read-only account and everything it builds lives outside: the transactional system stays the source, never the place for analysis.",
        decisions: ["Read-only access, granted table by table", "What the ERP keeps is rebuilt; what it overwrites is versioned outside", "Every source documented: recipe, schema and known pitfalls"],
        tech: ["SQL Server", "On-premise"] },
      { tag: "Integration", node: "ETL", sub: "Python · manifests", title: "ETL processes from the local database to the cloud",
        body: "Python extraction processes move data from the plant databases to a staging area in the cloud. Every load is declared in a manifest: what it reads, when it runs and how much traffic it generates.",
        decisions: ["Incremental loads with the timestamp as the contract", "No central coordinator: each machine leases its window and the second one doesn't run", "Only main-branch code with no local changes is promoted", "Every run leaves evidence: rows, time per phase and code version"],
        tech: ["Python", "pyodbc", "Manifests"] },
      { tag: "Warehouse", node: "Warehouse", sub: "", title: "Dimensional warehouse in the cloud",
        body: "Three schemas with separate responsibilities: staging receives, core holds facts and dimensions, and the semantic layer exposes views ready for consumption.",
        decisions: ["Staging → core → semantic, with a surrogate key and the natural key as unique", "Append-only tables for what the ERP overwrites: plan, status and capacity", "Weekly snapshots: a closed week is never touched", "Versioned migrations, classified by risk and rehearsed on an ephemeral copy"],
        tech: ["Azure SQL", "Kimball model", "Flyway"] },
      { tag: "Governance", node: "Data governance", sub: "contracts · two-path checks · certified catalog", title: "Validation before publishing",
        body: "There is a gate between staging and core. Every business premise is computed through two independent paths and the load is only promoted if they agree within a tolerance.",
        decisions: ["Two independent queries per premise, never against a hard-coded value", "At least one check tied to the raw source", "Every product inherits the certification of the premises it cites", "Contracts with a strict schema and a validator for each document type"],
        tech: ["SQL", "JSON Schema", "CI"] },
      { tag: "Engines", node: "Planning engines", sub: "netting · finite capacity · recovery · monitor", title: "Planning engines on top of the warehouse",
        body: "Cascading netting, finite-capacity leveling and recovery plans. Every run publishes an immutable snapshot that other systems read through an interface, not through its tables.",
        decisions: ["Stages with explicit boundaries: requirement, inventory and coverage", "Layers: finite capacity builds on netting without re-deriving it", "Reproducible runs: each snapshot keeps the state that produced it", "Nothing is excluded silently: what doesn't fit is published with a flag"],
        tech: ["Python", "Per-run snapshots"] },
      { tag: "Consumption", node: "API · Portal", sub: "per-item permissions", title: "An API as the only door",
        body: "The portal compiles no data: it requests it from an API with permissions resolved per item. Navigation goes from macro to micro, from the monitor to the resource and on to the raw record.",
        decisions: ["The front end is public and carries no data", "Per-item permissions, resolved in views", "Access changes through procedures that require a reason", "Usage telemetry to know what is actually consulted"],
        tech: ["React", "Express", "GitHub Actions"] },
    ],
  },
  systems: {
    title: "Systems I designed",
    intro: "Each one solves a planning problem in metal manufacturing. What matters here is how it is built.",
    labels: { problem: "Problem", design: "Design", decisions: "Key decisions", flow: "Flow" },
    items: [
      { id: "S-01", title: "MRP netting engine", area: "Requirement · coverage",
        problem: "Dated demand by resource only existed inside a closed ERP procedure: it could not be audited or extended.",
        design: "An orchestrator and three stages with explicit boundaries — requirement, inventory and coverage — that publish an immutable snapshot per run.",
        decisions: ["Backward cascading netting along the routing, deducting inventory at each point", "Shared inventory allocated FIFO; the queue order is part of the contract", "Multi-level BOM resolved by the longest path from the finished good", "Back-scheduling in working days, by calendar lookup rather than by formula"],
        flow: ["Demand · routing · BOM", "Work in process", "Cascading netting", "Requirement by resource"] },
      { id: "S-02", title: "Finite-capacity plan", area: "Capacity · leveling · pilot",
        problem: "The ERP releases the plan at infinite capacity: it fits on paper, not on the machine.",
        design: "A second layer on top of netting that levels day by day against each resource's real ceiling and emits the plan in the ERP's own upload format, without writing to it.",
        decisions: ["The date is a limit, not a target: what doesn't fit is pulled forward in working days, with a cap", "If it still doesn't fit, it is pushed out flagged “at risk”; what exceeds the horizon is reported separately", "Deterministic queue: criticality, date, customer and load", "Each resource in its native unit; capacity = shifts × availability × efficiency"],
        flow: ["Dated requirement", "Daily capacity", "Leveling", "Loadable plan · anomalies"] },
      { id: "S-03", title: "Recovery plans", area: "Backlog · multi-resource",
        problem: "Each customer had its own recovery plan, with nearly duplicated logic.",
        design: "One shared engine parameterized by a per-customer configuration, with the figures layer separated from presentation.",
        decisions: ["Weekly leveling with a three-tier ceiling: dedicated lines, on-date load and FIFO backlog", "Real precedence from the routing and the multi-level BOM", "Fixed-point iteration within each week", "Conservation check per resource on every run"],
        flow: ["Backlog and demand", "Per-customer configuration", "Three-tier leveling", "Plan and delivery date"] },
      { id: "S-04", title: "Plan compliance monitor", area: "Tracking · closes",
        problem: "Measuring output against the plan when the ERP overwrites both the plan and its own history.",
        design: "A service that recomputes progress, coverage, efficiency and downtime, and delivers them as a document the portal only renders.",
        decisions: ["Five modes: live, checkpoint, coverage snapshot, weekly close and adjusted", "The weekly close is immutable: a snapshot's figures are never rewritten", "The snapshot is taken before the close, because afterwards the ERP has already overwritten it", "Resource-level grain, where someone is accountable, with drill-down to the raw record"],
        flow: ["Loaded plan", "Output and downtime", "Per-resource computation", "Monitor · closes"] },
      { id: "S-05", title: "Data governance core", area: "Knowledge · certification",
        problem: "Knowledge about the ERP lived in people and loose queries; nobody could say which figure was reliable.",
        design: "A repository of verified knowledge: concepts, per-source recipes, schemas, checks and a catalog of assets described by manifests, separated from the code that consumes them.",
        decisions: ["A check is a business premise with two paths and a tolerance", "Two separate axes: how well proven something is and whether it is in production", "Contracts with a strict schema; a field nobody reads is retired", "“Closed properly” is an exit code: links, orphans, validation and freshness"],
        flow: ["ERP sources", "Recipes and schemas", "Two-path checks", "Certified catalog"] },
      { id: "S-06", title: "Analysis notebook", area: "Studies · expiry",
        problem: "One-off analyses ended up as loose files nobody knew were still valid.",
        design: "A read-only study space where every case is born with an expiry date and a possible destination.",
        decisions: ["On expiry, a case graduates to the warehouse, leaves its rule in the core or is removed", "No case defines concepts: it takes them from the core", "Outputs with sensitive data live outside version control", "Three document types: plan, study and context"],
        flow: ["Business question", "Study with expiry", "Graduation", "Warehouse · core"] },
      { id: "S-07", title: "AI-agent workflow", area: "Agents · orchestration",
        problem: "Using AI agents on plant data without them inventing sources or skipping controls.",
        design: "A versioned plugin catalog: doctrine is cited rather than copied, agents query through a read-only server and every change enters by pull request with automated gates.",
        decisions: ["Sub-agents with a single trade: find sources, test queries, optimize and validate", "A single point holding credentials, which logs every call", "Plans executed by an orchestrating session, with one branch and one PR per step", "Telemetry on documentation routing, to correct it with evidence"],
        flow: ["Plan broken down", "Sub-session per step", "Automated gates", "Merge · documentation"] },
    ],
  },
  principles: {
    title: "Design principles",
    intro: "Four rules that show up in everything I build.",
    items: [
      { title: "One premise, two paths",
        body: "Every assumption about the data is rebuilt with two independent queries, never against a hard-coded value, and at least one is tied to the raw source." },
      { title: "Truth by construction",
        body: "Only what passed its checks in that same load enters the model. The staging area receives data; it is not the truth." },
      { title: "History is never rewritten",
        body: "What the ERP overwrites is kept in append-only tables and weekly snapshots. What was seen on Monday can be opened again." },
      { title: "Nothing is excluded silently",
        body: "What doesn't fit, doesn't reconcile or has no resource is published with a flag. A plan that hides its exceptions cannot be corrected." },
    ],
  },
  offer: {
    title: "How we work",
    intro: "Three ways to start. All of them end with something your team can run again without me.",
    items: [
      { kicker: "To start", title: "Architecture diagnostic", body: "I review how data travels from your ERP to your plan and where it stops being reliable.",
        list: ["Map of sources and flows", "Two-path checks on critical sources", "Staged architecture proposal"] },
      { kicker: "To build", title: "Data platform", body: "ETL processes from your local database to a cloud warehouse, with model, history and governance.",
        list: ["Declared loads with evidence", "Dimensional model and semantic layer", "Versioned, reversible migrations"] },
      { kicker: "To plan", title: "Planning engines", body: "Netting, material coverage and finite-capacity leveling on top of your ERP.",
        list: ["Requirement by resource and day", "Plan in your ERP's upload format", "Plan tracking with immutable closes"] },
    ],
  },
  career: {
    title: "Background",
    intro: "From the robotic cell to data architecture.",
    origin: { lead: "Before the data, ", em: "the cell", rest: ". I programmed PLCs, integrated robots with presses and drew their layouts. So when a plan says a machine can, I know to ask whether it really can." },
    items: [
      { rev: "A", date: "2022", text: "B.Sc. Mechatronics Engineering, UANL FIME." },
      { rev: "B", date: "2022", text: "Automation: robotic cells, Siemens and Allen-Bradley PLCs, Yaskawa, OTC and Fanuc robots." },
      { rev: "C", date: "2025", text: "Move into BI and plant-data analysis on the ERP." },
      { rev: "D", date: "Mar 2026", text: "Governance core: source knowledge and two-path checks." },
      { rev: "E", date: "May 2026", text: "BOM traceability with work in process by station." },
      { rev: "F", date: "Jul 2026", text: "Plan compliance monitor with immutable weekly closes." },
      { rev: "G", date: "Aug 2026", text: "Azure SQL warehouse: ETL from the local database and versioned migrations." },
      { rev: "H", date: "Nov 2026", text: "Independent consulting in data architecture and planning." },
    ],
    sheets: {
      coords: "Model space", hint: "Tap a drawing to enlarge it", close: "Close · Esc",
      items: [
        { file: "layout-celda-transportador", title: "Cell with conveyor", code: "L-01", alt: "Plan view of a robotic cell with a U-shaped conveyor, pallets and forklifts" },
        { file: "layout-celdas-pems", title: "Three cells in line", code: "L-02", alt: "Three robotic cells with their work envelopes along a line" },
        { file: "layout-planta", title: "Bay layout", code: "L-03", alt: "Bay layout with several cells, conveyors and pallets" },
      ],
    },
  },
  contact: {
    titleA: "Does your plan fit", titleEm: "your plant?",
    body: "Thirty minutes to review how data travels from your ERP to your plan today and where a redesign pays off. If there's nothing to fix, I'll tell you.",
  },
  cv: {
    role: "Data architecture and production planning",
    profile: "Mechatronics engineer with a background in robotic-cell automation. I design end-to-end data platforms for manufacturing: from shop-floor capture and the ERP to a governed cloud warehouse and the engines that plan production against real capacity.",
    labels: { profile: "Profile", experience: "Experience", systems: "Systems designed", skills: "Skills", stack: "Technologies", education: "Education", languages: "Languages", more: "Full portfolio" },
    experience: [
      { date: "2026 – present", role: "Independent consultant · andcom", place: "Data architecture and planning for supply chain",
        points: ["Architecture diagnostics, data platforms and planning engines on top of the client's ERP."] },
      { date: "2025 – present", role: "Data architecture and plant analytics", place: "EZI Metales · Metal manufacturing · Monterrey, Mexico",
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
    skills: ["Data architecture and dimensional modeling", "ETL processes from local databases to the cloud", "Data governance and validation", "Planning: MRP netting and finite capacity", "API and capture-app design", "AI-agent workflows", "Industrial automation and robotics"],
    stack: ["SQL Server", "Azure SQL", "Python", "Flyway", "React", "Express", "GitHub Actions", "JSON Schema", "AutoCAD"],
    education: [{ date: "2022", text: "B.Sc. Mechatronics Engineering · UANL FIME" }],
    languages: ["Spanish · native", "English · B1"],
  },
  footer: { left: "andcom · Monterrey, Mexico", right: "Business figures, customers and internal data are omitted." },
};

export const content: Record<Lang, Content> = { es, en };
