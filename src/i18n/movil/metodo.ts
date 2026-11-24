/*
  Textos compactos del método para celular. En celular cada etapa debe caber en una sola pantalla; el texto
  completo de escritorio sigue en content.ts y no cambia.
  Mismo orden que content.ts: phases[0..2] y steps[0..5] (dos pasos por etapa).
  Los términos del glosario (VSM, árbol de decisiones, puntos de retorno, nube)
  se siguen marcando solos con marcar().
*/
import type { Lang } from "../content";

type MetodoMovil = {
  intro: [string, string, string];
  steps: { body: string; get: string }[];
  /* una línea por capa (layers.items[0..4]): el cuerpo y su lista, juntos */
  layers: [string, string, string, string, string];
  lab: { body: string; points: string[] };
  operate: { loopText: string };
};

export const metodoMovil: Record<Lang, MetodoMovil> = {
  es: {
    intro: [
      "Entiendo tu empresa y diseño la red que la conecta.",
      "Lo pruebas antes de pagarlo.",
      "Lo monto, lo administro y tu equipo lo domina.",
    ],
    steps: [
      { body: "Recorro tu empresa del pedido a la entrega y encuentro dónde se pierde el dato.",
        get: "Mapa de flujo de valor (VSM), árbol de decisiones y diagnóstico." },
      { body: "Elijo las soluciones que necesitas y propongo la red: qué se conecta y dónde van los puntos de retorno.",
        get: "Una arquitectura por etapas; cada una sirve sola." },
      { body: "Armo la solución en mi laboratorio con tu flujo real y la ves funcionar.",
        get: "Un prototipo con tu caso." },
      { body: "Con la prueba aprobada elijo nube, sensores y licencias, y armo el presupuesto.",
        get: "Presupuesto por fases, costo mensual y financiamiento." },
      { body: "Lo monto en producción y lo administro: respaldos, actualizaciones, seguridad y bitácora.",
        get: "Un sistema operando y documentado." },
      { body: "Capacito a quien lo usa y a quien lo opera, para que no dependa de mí.",
        get: "Personal capacitado y manuales." },
    ],
    layers: [
      "Rediseño cómo se comunican tus áreas: flujo, decisiones y puntos de retorno.",
      "ERP, hojas y apps en una plataforma con datos validados y un portal por área.",
      "Máquinas y piso conectados: ciclos, paros y alertas en vivo.",
      "Un asistente que conoce tu negocio, cita sus fuentes y solo ve lo que debe.",
      "Yo lo administro y lo mejoro; tu equipo lo domina.",
    ],
    lab: {
      body: "Pruebo con tu flujo real antes de que inviertas.",
      points: [
        "Decides viendo algo que funciona.",
        "Lo que apruebas es lo que se instala.",
        "Los datos de cada cliente nunca se mezclan.",
      ],
    },
    operate: { loopText: "Los datos de la operación dicen qué mejorar." },
  },
  en: {
    intro: [
      "I understand your company and design the network that connects it.",
      "You try it before you pay for it.",
      "I deploy it, run it, and your team masters it.",
    ],
    steps: [
      { body: "I walk your company from order to delivery and find where data gets lost.",
        get: "Value stream map (VSM), decision tree and assessment." },
      { body: "I pick the solutions you need and propose the network: what gets connected and where the return points go.",
        get: "A staged architecture; each stage works on its own." },
      { body: "I build the solution in my lab with your real flow and you see it working.",
        get: "A working prototype of your case." },
      { body: "Once the test is approved I choose cloud, sensors and licenses, and build the budget.",
        get: "Phased budget, monthly cost and financing." },
      { body: "I deploy it to production and manage it: backups, updates, security and a change log.",
        get: "A running, documented system." },
      { body: "I train the people who use it and run it, so they don't depend on me.",
        get: "A trained team and clear manuals." },
    ],
    layers: [
      "I redesign how your areas talk: flow, decisions and return points.",
      "ERP, spreadsheets and apps in one platform with validated data and a portal per area.",
      "Machines and floor connected: cycles, stops and alerts, live.",
      "An assistant that knows your business, cites its sources and only sees what it should.",
      "I run it and improve it; your team masters it.",
    ],
    lab: {
      body: "I test with your real flow before you invest.",
      points: [
        "You decide by seeing something that works.",
        "What you approve is what gets installed.",
        "Each client's data never mixes.",
      ],
    },
    operate: { loopText: "Operating data shows what to improve next." },
  },
};
