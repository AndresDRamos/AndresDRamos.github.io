/*
  Textos compactos de la trayectoria para celular. En celular el título, el retrato con el origen y las 8 etapas
  deben caber en una sola pantalla: cada etapa en 1 o 2 renglones. El texto
  completo de escritorio sigue en content.ts y no cambia.
  Mismo orden que content.ts: career.items[0..7] (las letras y fechas no cambian).
*/
import type { Lang } from "../content";

type TrayectoriaMovil = {
  origin: { lead: string; em: string; rest: string };
  items: string[];
  /* rótulo de la segunda subpantalla (las láminas), que ya no tiene el título al lado */
  laminas: string;
};

export const trayectoriaMovil: Record<Lang, TrayectoriaMovil> = {
  es: {
    origin: { lead: "Antes de los datos, ", em: "la celda", rest: ". Programé PLC, integré robots con prensas y dibujé sus distribuciones: sé qué puede decir una máquina y qué no." },
    items: [
      "Ingeniería Mecatrónica, UANL FIME.",
      "Celdas robóticas: PLC Siemens y Allen-Bradley; robots Yaskawa, OTC y Fanuc.",
      "Paso a BI y datos de planta en metalmecánica.",
      "Núcleo de gobierno de datos.",
      "Rastreabilidad de BOM e inventario en proceso.",
      "Monitor de cumplimiento al plan.",
      "Almacén en la nube y migraciones versionadas.",
      "andcom: flujo de información, datos e IA para cadena de suministro.",
    ],
    laminas: "Distribuciones que dibujé",
  },
  en: {
    origin: { lead: "Before the data, ", em: "the cell", rest: ". I programmed PLCs, integrated robots with presses and drew their layouts: I know what a machine can say and what it can't." },
    items: [
      "B.Sc. Mechatronics Engineering, UANL FIME.",
      "Robotic cells: Siemens and Allen-Bradley PLCs; Yaskawa, OTC and Fanuc robots.",
      "Move into BI and plant data in metal manufacturing.",
      "Data governance core.",
      "BOM traceability with WIP by station.",
      "Plan compliance monitor.",
      "Cloud warehouse and versioned migrations.",
      "andcom: information flow, data and AI for supply chains.",
    ],
    laminas: "Layouts I drew",
  },
};
