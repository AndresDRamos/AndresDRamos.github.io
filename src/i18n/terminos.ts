/*
  Glosario en línea: subraya en un párrafo los términos del glosario y les pone
  su definición, que aparece al pasar el cursor o al enfocar (clase .term en
  global.css). Se marca solo la primera aparición de cada término por párrafo.
  Devuelve HTML ya escapado, para usar con set:html.
*/
type Termino = { m: string[]; d: string };

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export function marcar(texto: string, glosario: Termino[]): string {
  const bajo = texto.toLowerCase();
  const hallados: { i: number; n: number; d: string }[] = [];
  for (const t of glosario) {
    for (const m of t.m) {
      const i = bajo.indexOf(m.toLowerCase());
      if (i < 0) continue;
      // solo palabras completas, y sin pisar otro término ya marcado
      const antes = texto[i - 1], despues = texto[i + m.length];
      const borde = (c?: string) => !c || !/[\p{L}\p{N}]/u.test(c);
      if (!borde(antes) || !borde(despues)) continue;
      if (hallados.some((h) => i < h.i + h.n && h.i < i + m.length)) continue;
      hallados.push({ i, n: m.length, d: t.d });
      break;
    }
  }
  hallados.sort((a, b) => a.i - b.i);
  let out = "", k = 0;
  for (const h of hallados) {
    out += esc(texto.slice(k, h.i));
    out += `<span class="term" tabindex="0" data-def="${esc(h.d)}">${esc(texto.slice(h.i, h.i + h.n))}</span>`;
    k = h.i + h.n;
  }
  return out + esc(texto.slice(k));
}
