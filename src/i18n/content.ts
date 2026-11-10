/*
  Todo el texto del sitio, en español e inglés.
  Regla de confidencialidad: sólo cifras relativas o de proceso. Sin nombres de
  clientes, volúmenes, montos, servidores ni personas del empleador.
*/

export type Lang = "es" | "en";

export const CONTACT = {
  email: "hola@andcom.dev", // Email Routing de Cloudflare
  github: "https://github.com/AndresDRamos",
  city: "Monterrey, N.L.",
};

type Verdict = "ok" | "warn";

export interface Content {
  meta: { title: string; description: string };
  nav: { id: string; label: string }[];
  ui: { audit: string; theme: string; langSwitch: string; langHref: string; skip: string; ledger: string; figsLabel: string; print: string };
  hero: { kicker: string; dim: string; titleA: string; titleEm: string; lead: string; body: string; ctaPrimary: string; ctaSecondary: string; portraitAlt: string };
  figs: { n: string; label: string; def: string; src: string; how: string; when: string; verdict: string }[];
  fieldNames: { def: string; src: string; how: string; when: string };
  method: { title: string; intro: string; items: { ord: string; title: string; body: string; quote: string }[] };
  files: { title: string; introA: string; introClaim: string; introB: string; labels: { problem: string; method: string; evidence: string };
    items: { id: string; title: string; area: string; problem: string; method: string; evidence: string; stamp: string; verdict: Verdict }[] };
  offer: { title: string; intro: string; scale: [string, string, string];
    items: { kicker: string; title: string; body: string; list: string[]; showScale?: boolean }[] };
  sheets: { title: string; intro: string; coords: string; hint: string; close: string;
    items: { file: string; title: string; code: string; alt: string }[] };
  revs: { title: string; intro: string; cols: [string, string, string, string]; items: { rev: string; date: string; text: string }[] };
  origin: { lead: string; em: string; rest: string; small: string; figcaption: string; alt: string };
  notes: string[];
  contact: { titleA: string; titleEm: string; body: string };
  footer: { left: string; right: string };
}

const es: Content = {
  meta: {
    title: "Andrés D. Ramos · Consultoría en planeación de producción",
    description: "Netteo MRP, capacidad finita y seguimiento al plan sobre tu ERP, con cifras que se pueden auditar. Consultoría para Supply Chain y planners de producción.",
  },
  nav: [
    { id: "cifras", label: "Cifras" },
    { id: "metodo", label: "Método" },
    { id: "expedientes", label: "Expedientes" },
    { id: "servicios", label: "Servicios" },
    { id: "laminas", label: "Láminas" },
    { id: "contacto", label: "Contacto" },
  ],
  ui: {
    audit: "Modo auditor", theme: "Cambiar tema claro u oscuro", langSwitch: "EN", langHref: "/en/",
    skip: "Saltar al contenido", ledger: "Ficha de linaje", figsLabel: "Cifras auditables: elige una para ver su ficha de linaje",
    print: "Imprimir como CV",
  },
  hero: {
    kicker: "Andrés D. Ramos Luna · Consultor en planeación y datos de planta",
    dim: "4 años en piso de planta",
    titleA: "Cada cifra de tu plan debería poder decir",
    titleEm: "de dónde viene.",
    lead: "Netteo MRP, capacidad finita y seguimiento al plan, con evidencia.",
    body: "Ingeniero mecatrónico: empecé programando robots en celdas de prensa y terminé construyendo los motores que planean esas celdas. Trabajo para planners que necesitan un plan que la planta sí pueda cumplir.",
    ctaPrimary: "Pedir un diagnóstico",
    ctaSecondary: "Leer expedientes",
    portraitAlt: "Retrato de Andrés D. Ramos Luna",
  },
  fieldNames: { def: "Definición", src: "Fuente", how: "Método", when: "Medición" },
  figs: [
    { n: "98.5%", label: "de piezas idénticas línea a línea entre mi motor de netteo y el ERP",
      def: "Piezas cuyo requerimiento por recurso y fecha coincide exactamente con el del ERP.",
      src: "Export del procedimiento de netteo del ERP contra el motor en Python.",
      how: "Comparación línea a línea por pieza; cada brecha se cierra con su causa raíz.",
      when: "Reconciliación vigente · 2026", verdict: "Confiable" },
    { n: "72", label: "validaciones de dos rutas vigilando las fuentes de datos",
      def: "Validaciones que reconstruyen una premisa de negocio con dos consultas independientes.",
      src: "Catálogo de validaciones del núcleo de datos.",
      how: "Conteo de definiciones vigentes; corren antes de publicar cualquier carga.",
      when: "Medido el 9 nov 2026", verdict: "Confiable" },
    { n: "0", label: "diferencias en la prueba A/B del motor de recovery plans",
      def: "Diferencias entre el plan del motor común y los planes previos por cliente.",
      src: "Planes de recuperación previos de dos clientes OEM.",
      how: "Prueba A/B del mismo escenario; conservación de piezas comprobada en cada corrida.",
      when: "Prueba de aceptación · 2026", verdict: "Confiable" },
    { n: "15 min", label: "entre cada actualización del seguimiento al plan",
      def: "Tiempo entre actualizaciones del plan cargado y del monitor de cumplimiento.",
      src: "Programación del servidor de operación.",
      how: "Cada corrida deja evidencia: qué corrió, dónde y con qué resultado.",
      when: "En producción · 2026", verdict: "Confiable" },
  ],
  method: {
    title: "Tres reglas que no negocio",
    intro: "Lo que aprendí reconciliando planes de producción contra el ERP, una semana tras otra.",
    items: [
      { ord: "primera", title: "Una premisa, dos rutas",
        body: "Cada supuesto sobre tus datos se reconstruye con dos consultas independientes, nunca contra un valor fijo, y al menos una se ata a la fuente cruda.",
        quote: "Vi validaciones en verde durante ocho semanas mientras el dato se perdía. Desde entonces, ninguna se compara contra sí misma." },
      { ord: "segunda", title: "La fecha es un límite, no una meta",
        body: "Al nivelar a capacidad finita, lo que no cabe se adelanta hasta diez días hábiles o se empuja con marca de riesgo. Nada se reparte en silencio.",
        quote: "Un plan que cabe en papel y no en la máquina es una promesa rota con fecha." },
      { ord: "tercera", title: "El cierre no se reescribe",
        body: "Cada semana se guarda una foto de lo que se veía. El ERP sobrescribe su historia; tu planeación no debería perderla.",
        quote: "Si no puedes abrir lo que viste el lunes, no puedes aprender del lunes." },
    ],
  },
  files: {
    title: "Expedientes",
    introA: "Casos reales en manufactura metalmecánica. Activa ",
    introClaim: "modo auditor",
    introB: " para ver la evidencia de cada uno.",
    labels: { problem: "Problema", method: "Método", evidence: "Evidencia" },
    items: [
      { id: "EXP-01", title: "Motor de netteo MRP", area: "Cobertura · demanda por recurso",
        problem: "La demanda fechada por recurso sólo existía como un export manual de un procedimiento cerrado del ERP.",
        method: "Netteo en cascada sobre la ruta, desdoblado por recurso y fechado hacia atrás en días laborales.",
        evidence: "Reconciliado contra el export: 98.5 % de piezas idénticas línea a línea; 3 brechas cerradas con causa raíz.",
        stamp: "Confiable", verdict: "ok" },
      { id: "EXP-02", title: "Plan a capacidad finita", area: "Capacidad · nivelación diaria",
        problem: "El ERP libera el plan con capacidad infinita: en papel cabe, en la máquina no.",
        method: "Nivelación día por día contra el techo real de cada recurso, en su propia unidad, emitida en el formato que hoy se sube a mano.",
        evidence: "Piloto con 6 recursos y 12 semanas; cuantificó por recurso qué parte del plan no cabe.",
        stamp: "Piloto", verdict: "warn" },
      { id: "EXP-03", title: "Cumplimiento al plan", area: "Seguimiento · tablero certificado",
        problem: "Medir lo liberado contra el plan sin inflar la cifra.",
        method: "Lo liberado se capa al plan por parte; el excedente es «extra» y lo que no tenía plan es «fuera de plan». Nada se descarta.",
        evidence: "Tablero certificado por 27 validaciones; cierres semanales que nunca se reescriben.",
        stamp: "Certificado · 27 checks", verdict: "ok" },
      { id: "EXP-04", title: "Recovery plans multi-recurso", area: "Clientes OEM · recuperación",
        problem: "Cuatro planes de recuperación casi duplicados, uno por cliente.",
        method: "Un motor común que nivela en tres niveles, respeta la precedencia de la ruta y del BOM multinivel, e itera hasta un punto fijo.",
        evidence: "Prueba A/B sin una sola diferencia en dos clientes; conservación comprobada en cada corrida.",
        stamp: "Confiable", verdict: "ok" },
      { id: "EXP-05", title: "Firmeza de la demanda", area: "Demanda · horizonte firme",
        problem: "Comparar fotos de demanda en crudo sobrestimaba el crecimiento.",
        method: "Curva de maduración por anticipación y ventana firme medida sobre 12 meses de fotos semanales.",
        evidence: "Crudo y ajustado llegaron a señalar direcciones opuestas; la foto histórica reconcilia al 0.03 %.",
        stamp: "Confiable", verdict: "ok" },
    ],
  },
  offer: {
    title: "Cómo trabajamos",
    intro: "Tres formas de empezar. Todas terminan con algo que tu equipo puede volver a correr sin mí.",
    scale: ["Confiable", "Con reservas", "No confiable"],
    items: [
      { kicker: "Para empezar", title: "Diagnóstico de confiabilidad", body: "Reviso las fuentes que alimentan tu plan y les doy un veredicto.",
        list: ["Mapa de fuentes del plan", "Validaciones de dos rutas", "Lista de datos a corregir en origen"], showScale: true },
      { kicker: "Para planear", title: "Motor de planeación", body: "Netteo, cobertura de material y nivelación a capacidad finita sobre tu ERP.",
        list: ["Requerimiento por recurso y día", "Fecha para pedir material", "Plan en el formato de carga de tu ERP"] },
      { kicker: "Para cumplir", title: "Seguimiento certificado", body: "Un monitor que dice cómo va cada recurso contra el plan y qué lo frena.",
        list: ["Avance, cobertura, eficiencia y paros", "Cierres semanales inmutables", "Evidencia de cada actualización"] },
    ],
  },
  sheets: {
    title: "Láminas originales",
    intro: "Antes de modelar planes, dibujé las celdas que los ejecutan. Distribuciones hechas en AutoCAD durante mis años en automatización.",
    coords: "Espacio modelo",
    hint: "Toca una lámina para ampliarla",
    close: "Cerrar · Esc",
    items: [
      { file: "layout-celda-transportador", title: "Celda con transportador", code: "L-01", alt: "Vista de planta de una celda robótica con transportador en U, tarimas y montacargas" },
      { file: "layout-celdas-pems", title: "Tres celdas en línea", code: "L-02", alt: "Tres celdas robóticas con su envolvente de trabajo alrededor de una línea" },
      { file: "layout-planta", title: "Distribución de nave", code: "L-03", alt: "Distribución de nave con varias celdas, transportadores y tarimas" },
    ],
  },
  revs: {
    title: "Tabla de revisiones",
    intro: "De la celda robótica al almacén de datos.",
    cols: ["Rev", "Fecha", "Descripción", "Aprobó"],
    items: [
      { rev: "A", date: "2022", text: "Ingeniería Mecatrónica, UANL FIME." },
      { rev: "B", date: "2022", text: "Automatización: celdas robóticas, PLC Siemens y Allen-Bradley, robots Yaskawa, OTC y Fanuc." },
      { rev: "C", date: "2025", text: "Transición a BI y análisis de datos de planta sobre el ERP." },
      { rev: "D", date: "mar 2026", text: "Núcleo de datos: conocimiento de fuentes y primeras validaciones." },
      { rev: "E", date: "may 2026", text: "Rastreabilidad BOM con inventario en proceso por estación." },
      { rev: "F", date: "jul 2026", text: "Monitor de cumplimiento al plan, cada 15 minutos." },
      { rev: "G", date: "ago 2026", text: "Almacén de datos en Azure SQL con migraciones versionadas." },
      { rev: "H", date: "nov 2026", text: "Consultoría independiente en planeación de producción." },
    ],
  },
  origin: {
    lead: "Antes de los datos, ", em: "la celda", rest: ". Programé PLC, integré robots con prensas y dibujé las distribuciones. Por eso, cuando un plan dice que una máquina puede, sé preguntar si de verdad puede.",
    small: "PLC Siemens y Allen-Bradley · robots Yaskawa, OTC y Fanuc · AutoCAD · Ingeniería Mecatrónica, UANL FIME 2022",
    figcaption: "Origen · celda robótica dibujada en AutoCAD", alt: "Vista de planta de una celda robótica dibujada en AutoCAD",
  },
  notes: [
    "Reconciliación del motor de netteo contra el export del ERP, línea a línea por pieza.",
    "Conteo de validaciones vigentes en el núcleo de datos, noviembre 2026.",
    "Comparación A/B del motor común contra los planes previos de dos clientes.",
    "Frecuencia programada de la carga del plan y del monitor de cumplimiento.",
  ],
  contact: {
    titleA: "¿Tu plan cabe", titleEm: "en tu planta?",
    body: "Treinta minutos para revisar cómo planeas hoy y dónde se rompe la cifra entre el ERP y el piso. Si no hay nada que arreglar, te lo digo.",
  },
  footer: { left: "andcom · Monterrey, N.L.", right: "Se omiten cifras de negocio, clientes y datos internos." },
};

const en: Content = {
  meta: {
    title: "Andrés D. Ramos · Production planning consulting",
    description: "MRP netting, finite-capacity planning and plan-compliance tracking on top of your ERP, with figures you can audit. Consulting for supply chain and production planners.",
  },
  nav: [
    { id: "cifras", label: "Figures" },
    { id: "metodo", label: "Method" },
    { id: "expedientes", label: "Case files" },
    { id: "servicios", label: "Services" },
    { id: "laminas", label: "Drawings" },
    { id: "contacto", label: "Contact" },
  ],
  ui: {
    audit: "Audit mode", theme: "Toggle light or dark theme", langSwitch: "ES", langHref: "/",
    skip: "Skip to content", ledger: "Lineage record", figsLabel: "Auditable figures: pick one to see its lineage record",
    print: "Print as résumé",
  },
  hero: {
    kicker: "Andrés D. Ramos Luna · Planning and plant-data consultant",
    dim: "4 years on the shop floor",
    titleA: "Every figure in your plan should be able to tell you",
    titleEm: "where it came from.",
    lead: "MRP netting, finite capacity and plan tracking, with evidence.",
    body: "Mechatronics engineer: I started out programming robots in press cells and ended up building the engines that plan those cells. I work with planners who need a plan the plant can actually deliver.",
    ctaPrimary: "Request a diagnostic",
    ctaSecondary: "Read case files",
    portraitAlt: "Portrait of Andrés D. Ramos Luna",
  },
  fieldNames: { def: "Definition", src: "Source", how: "Method", when: "Measured" },
  figs: [
    { n: "98.5%", label: "of parts match line by line between my netting engine and the ERP",
      def: "Parts whose requirement by resource and date matches the ERP's exactly.",
      src: "The ERP's netting procedure export against the Python engine.",
      how: "Line-by-line comparison per part; every gap is closed with its root cause.",
      when: "Current reconciliation · 2026", verdict: "Reliable" },
    { n: "72", label: "two-path checks watching the data sources",
      def: "Checks that rebuild a business premise with two independent queries.",
      src: "The data core's check catalog.",
      how: "Count of active definitions; they run before any load is published.",
      when: "Measured Nov 9, 2026", verdict: "Reliable" },
    { n: "0", label: "differences in the A/B test of the recovery-plan engine",
      def: "Differences between the shared engine's plan and the previous per-customer plans.",
      src: "Previous recovery plans for two OEM customers.",
      how: "A/B run of the same scenario; part conservation verified on every run.",
      when: "Acceptance test · 2026", verdict: "Reliable" },
    { n: "15 min", label: "between each plan-tracking update",
      def: "Time between updates of the loaded plan and the compliance monitor.",
      src: "Operations server schedule.",
      how: "Every run leaves evidence: what ran, where and with what outcome.",
      when: "In production · 2026", verdict: "Reliable" },
  ],
  method: {
    title: "Three rules I don't bend",
    intro: "What I learned reconciling production plans against the ERP, week after week.",
    items: [
      { ord: "first", title: "One premise, two paths",
        body: "Every assumption about your data is rebuilt with two independent queries, never against a hard-coded value, and at least one is tied to the raw source.",
        quote: "I saw checks stay green for eight weeks while data was being lost. Since then, none of them is compared against itself." },
      { ord: "second", title: "The date is a limit, not a target",
        body: "When leveling to finite capacity, what doesn't fit is pulled forward up to ten working days or pushed out with a risk flag. Nothing is redistributed silently.",
        quote: "A plan that fits on paper but not on the machine is a broken promise with a due date." },
      { ord: "third", title: "The close is never rewritten",
        body: "Every week a snapshot of what was shown is kept. The ERP overwrites its history; your planning shouldn't lose it.",
        quote: "If you can't open what you saw on Monday, you can't learn from Monday." },
    ],
  },
  files: {
    title: "Case files",
    introA: "Real cases in metal manufacturing. Turn on ",
    introClaim: "audit mode",
    introB: " to see the evidence for each one.",
    labels: { problem: "Problem", method: "Method", evidence: "Evidence" },
    items: [
      { id: "EXP-01", title: "MRP netting engine", area: "Coverage · demand by resource",
        problem: "Dated demand by resource only existed as a manual export from a closed ERP procedure.",
        method: "Cascading netting along the routing, split by resource and back-scheduled in working days.",
        evidence: "Reconciled against the export: 98.5% of parts identical line by line; 3 gaps closed with root cause.",
        stamp: "Reliable", verdict: "ok" },
      { id: "EXP-02", title: "Finite-capacity plan", area: "Capacity · daily leveling",
        problem: "The ERP releases the plan at infinite capacity: it fits on paper, not on the machine.",
        method: "Day-by-day leveling against each resource's real ceiling, in its own unit, emitted in the format that is uploaded by hand today.",
        evidence: "Pilot with 6 resources and 12 weeks; quantified, per resource, how much of the plan doesn't fit.",
        stamp: "Pilot", verdict: "warn" },
      { id: "EXP-03", title: "Plan compliance", area: "Tracking · certified board",
        problem: "Measuring output against the plan without inflating the figure.",
        method: "Output is capped to plan per part; the surplus is “extra” and unplanned output is “off-plan”. Nothing is discarded.",
        evidence: "Board certified by 27 checks; weekly closes that are never rewritten.",
        stamp: "Certified · 27 checks", verdict: "ok" },
      { id: "EXP-04", title: "Multi-resource recovery plans", area: "OEM customers · recovery",
        problem: "Four nearly duplicate recovery plans, one per customer.",
        method: "One shared engine that levels in three tiers, respects routing and multi-level BOM precedence, and iterates to a fixed point.",
        evidence: "A/B test with zero differences for two customers; conservation verified on every run.",
        stamp: "Reliable", verdict: "ok" },
      { id: "EXP-05", title: "Demand firmness", area: "Demand · firm horizon",
        problem: "Comparing raw demand snapshots overstated growth.",
        method: "Maturation curve by lead time and a firm window measured over 12 months of weekly snapshots.",
        evidence: "Raw and adjusted views at times pointed in opposite directions; the historical snapshot reconciles to 0.03%.",
        stamp: "Reliable", verdict: "ok" },
    ],
  },
  offer: {
    title: "How we work",
    intro: "Three ways to start. All of them end with something your team can run again without me.",
    scale: ["Reliable", "With caveats", "Unreliable"],
    items: [
      { kicker: "To start", title: "Reliability diagnostic", body: "I review the sources feeding your plan and give each one a verdict.",
        list: ["Map of the plan's sources", "Two-path checks", "List of data to fix at the source"], showScale: true },
      { kicker: "To plan", title: "Planning engine", body: "Netting, material coverage and finite-capacity leveling on top of your ERP.",
        list: ["Requirement by resource and day", "Order-by date for material", "Plan in your ERP's upload format"] },
      { kicker: "To deliver", title: "Certified tracking", body: "A monitor that shows how each resource is doing against plan and what is holding it back.",
        list: ["Progress, coverage, efficiency and downtime", "Immutable weekly closes", "Evidence for every update"] },
    ],
  },
  sheets: {
    title: "Original drawings",
    intro: "Before modeling plans, I drew the cells that execute them. Layouts made in AutoCAD during my automation years.",
    coords: "Model space",
    hint: "Tap a drawing to enlarge it",
    close: "Close · Esc",
    items: [
      { file: "layout-celda-transportador", title: "Cell with conveyor", code: "L-01", alt: "Plan view of a robotic cell with a U-shaped conveyor, pallets and forklifts" },
      { file: "layout-celdas-pems", title: "Three cells in line", code: "L-02", alt: "Three robotic cells with their work envelopes along a line" },
      { file: "layout-planta", title: "Bay layout", code: "L-03", alt: "Bay layout with several cells, conveyors and pallets" },
    ],
  },
  revs: {
    title: "Revision table",
    intro: "From the robotic cell to the data warehouse.",
    cols: ["Rev", "Date", "Description", "Approved"],
    items: [
      { rev: "A", date: "2022", text: "B.Sc. Mechatronics Engineering, UANL FIME." },
      { rev: "B", date: "2022", text: "Automation: robotic cells, Siemens and Allen-Bradley PLCs, Yaskawa, OTC and Fanuc robots." },
      { rev: "C", date: "2025", text: "Move into BI and plant-data analysis on the ERP." },
      { rev: "D", date: "Mar 2026", text: "Data core: source knowledge and the first checks." },
      { rev: "E", date: "May 2026", text: "BOM traceability with work-in-process by station." },
      { rev: "F", date: "Jul 2026", text: "Plan compliance monitor, every 15 minutes." },
      { rev: "G", date: "Aug 2026", text: "Azure SQL data warehouse with versioned migrations." },
      { rev: "H", date: "Nov 2026", text: "Independent production-planning consulting." },
    ],
  },
  origin: {
    lead: "Before the data, ", em: "the cell", rest: ". I programmed PLCs, integrated robots with presses and drew the layouts. So when a plan says a machine can, I know to ask whether it really can.",
    small: "Siemens and Allen-Bradley PLCs · Yaskawa, OTC and Fanuc robots · AutoCAD · B.Sc. Mechatronics, UANL FIME 2022",
    figcaption: "Origin · robotic cell drawn in AutoCAD", alt: "Plan view of a robotic cell drawn in AutoCAD",
  },
  notes: [
    "Netting engine reconciled against the ERP export, line by line per part.",
    "Count of active checks in the data core, November 2026.",
    "A/B comparison of the shared engine against two customers' previous plans.",
    "Scheduled frequency of the plan load and the compliance monitor.",
  ],
  contact: {
    titleA: "Does your plan fit", titleEm: "your plant?",
    body: "Thirty minutes to review how you plan today and where the figure breaks between the ERP and the floor. If there's nothing to fix, I'll tell you.",
  },
  footer: { left: "andcom · Monterrey, Mexico", right: "Business figures, customers and internal data are omitted." },
};

export const content: Record<Lang, Content> = { es, en };
