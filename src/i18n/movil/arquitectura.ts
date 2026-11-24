/*
  Textos compactos de «Así viaja tu dato» para celular. En celular el selector de estaciones y la explicación
  de la elegida deben caber en una sola pantalla; el texto completo de
  escritorio sigue en content.ts y no cambia.
  Mismo orden que content.ts: stations[0..4] y al final el marco (frame).
  verb: la palabra corta del botón (el número sale del orden); el marco usa su
  etiqueta y nombre de content.ts.
  Los términos del glosario (ERP, Nube…) se siguen marcando solos con marcar();
  los «términos técnicos» (tech) se toman de content.ts sin cambio.
*/
import type { Lang } from "../content";

type Estacion = { verb: string; what: string; why: string; how: [string, string, string] };
type ArqMovil = { intro: string; stations: Estacion[]; frame: Omit<Estacion, "verb"> };

export const arquitecturaMovil: Record<Lang, ArqMovil> = {
  es: {
    intro: "Un entregable del gobierno de datos, basado en una planta real que diseñé. Toca una estación.",
    stations: [
      { verb: "Nace",
        what: "Cada área genera datos: ERP, hojas de cálculo, apps de captura y máquinas.",
        why: "Si nace mal o se teclea dos veces, todo lo demás hereda el error.",
        how: ["Se captura donde ocurre, una sola vez", "Tus sistemas solo se leen, no se tocan", "Cada registro dice quién, cuándo y dónde"] },
      { verb: "Viaja",
        what: "Un proceso automático copia lo nuevo de cada origen a un solo lugar, en horarios fijos.",
        why: "Nadie exporta ni envía archivos: el dato llega solo y a tiempo.",
        how: ["Solo viaja lo nuevo, no todo cada vez", "Cada traslado deja constancia", "Si algo falla, avisa en vez de callarse"] },
      { verb: "Revisa",
        what: "Cada cifra importante se calcula por dos caminos independientes. Si no coinciden, no pasa.",
        why: "Una cifra publicada es confiable, y se sabe por qué.",
        how: ["Reglas de negocio escritas y verificables", "Lo que no cuadra se marca, no se esconde", "Un catálogo dice qué cifra es oficial"] },
      { verb: "Guarda",
        what: "Un solo lugar en la nube, ordenado por tema: pedidos, producción, inventario, calidad.",
        why: "Todas las áreas leen la misma fuente, y lo del lunes se puede volver a abrir.",
        how: ["Tres zonas: recepción, orden y vitrina", "La historia no se reescribe", "Los cambios se ensayan antes de aplicarse"] },
      { verb: "Usa",
        what: "Tableros por área, motores de planeación y asistentes de IA; cada quien ve solo lo suyo.",
        why: "La información llega a quien decide, en un formato que entiende.",
        how: ["Una sola puerta, con permisos por persona", "Del resumen al detalle en pocos clics", "Se mide qué se consulta para mejorarlo"] },
    ],
    frame: {
      what: "Envuelve el recorrido: de quién es cada dato, quién lo ve y cómo se documenta.",
      why: "Sin reglas claras, cada área vuelve a su propia versión de la verdad.",
      how: ["Un responsable por cada dato clave", "Accesos con motivo y registro", "Documentación en lenguaje claro"] },
  },
  en: {
    intro: "A data governance deliverable, based on a real plant I designed. Tap a station.",
    stations: [
      { verb: "Born",
        what: "Every department generates data: ERP, spreadsheets, capture apps and machines.",
        why: "If data is born wrong or typed twice, everything downstream inherits the error.",
        how: ["Captured where it happens, once", "Your systems are only read, never changed", "Every record says who, when and where"] },
      { verb: "Travels",
        what: "An automatic process copies what's new from each source to one place, on schedule.",
        why: "Nobody exports or sends files: data arrives on its own and on time.",
        how: ["Only what's new travels", "Every transfer leaves a record", "If something fails, it raises an alert"] },
      { verb: "Checked",
        what: "Each key figure is computed two independent ways. If they don't match, it doesn't pass.",
        why: "A published figure is a reliable figure, and you know why.",
        how: ["Business rules written down and verifiable", "What doesn't reconcile is flagged, not hidden", "A catalog says which figure is official"] },
      { verb: "Stored",
        what: "One place in the cloud, organized by topic: orders, production, inventory, quality.",
        why: "Everyone reads the same source, and Monday's view can be reopened.",
        how: ["Three zones: intake, order and showcase", "History is never rewritten", "Changes are rehearsed before they're applied"] },
      { verb: "Used",
        what: "Dashboards, planning engines and AI assistants; each person sees only their part.",
        why: "Information reaches whoever decides, in a format they understand.",
        how: ["One access door, with per-person permissions", "From summary to detail in a few clicks", "What gets consulted is measured"] },
    ],
    frame: {
      what: "It wraps the route: who owns each piece of data, who sees it, how it's documented.",
      why: "Without clear rules, each department keeps its own version of the truth.",
      how: ["An owner for every key piece of data", "Access with a reason and a record", "Documentation in plain language"] },
  },
};
