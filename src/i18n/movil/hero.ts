/*
  Textos compactos de la portada para celular. En celular «El problema» comparte pantalla con el mapa vivo,
  así que su párrafo se acorta; el texto completo de escritorio sigue en
  content.ts y no cambia. La leyenda del registro también se acorta para que
  quepa en una línea debajo del mapa (magenta = sinapsis = punto de retorno).
*/
import type { Lang } from "../content";

type HeroMovil = {
  problemBody: string;
  legend: [string, string, string];
};

export const heroMovil: Record<Lang, HeroMovil> = {
  es: {
    problemBody: "Ventas promete con un Excel y la máquina que se paró no avisa. La información existe; falta que llegue.",
    legend: ["señal", "impulso crítico", "retorno"],
  },
  en: {
    problemBody: "Sales promises from a spreadsheet and the stopped machine tells no one. The information exists; it just doesn't arrive.",
    legend: ["signal", "critical impulse", "return"],
  },
};
