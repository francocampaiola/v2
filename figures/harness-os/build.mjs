// Fig: harness-os como un banco con una cinta transportadora. La tarjeta (el ticket) pasa por el sello
// (el planner escribe la spec), la prensa (el implementer escribe el código), el comparador (el quality
// gate corre el check) y la lupa (el reviewer revisa el diff). Si el gate o la review fallan, la cinta
// la devuelve a la prensa y se usa una de las 3 fichas de fix; si pasa, cae en la bandeja del PR.
// Hecho con la skill anatomy (kit en ../kit, MIT). `node figures/harness-os/build.mjs` escribe
// public/figures/harness-os.html.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as k from "../kit/iso-kit.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "..", "..", "public", "figures", "harness-os.html");
const kitScript = () => readFileSync(join(HERE, "..", "kit", "iso-kit.mjs"), "utf8").replace(/^export /gm, "");

const WIDTH = 620;
const HEIGHT = 360;

// ——— Mundo (unidades ≈ px del objeto real; x a lo largo de la cinta, y hacia el frente, z arriba) ———
const PLATE = { x: -210, y: -62, w: 416, d: 128, r: 8 };
const PLATE_H = 12;
const FOOT_H = 5;

const BELT = { x: -150, y: -13, w: 292, d: 26, r: 2 };
const BELT_Z = 10; // cara de arriba de la cinta
const RAIL_H = 14;
const CARD = { w: 18, d: 20, h: 1.6 };
const CARD_Z = BELT_Z;

const BACK_Y = -36; // línea de postes detrás de la cinta
const X = { inbox: -136, spec: -88, code: -28, gate: 34, review: 92, out: 132, tray: 172 };

const STAMP = { r: 7, h: 6, up: 26, stroke: 26 - (10 + 1.6), rod: 31 }; // abajo, el cabezal apoya en la tarjeta
const ARM_Z = 62;
const SLEEVE = { r: 3.4, z: ARM_Z - 14, h: 14 };

const DIAL = { r: 15, z: 58, h: 8 };
const PROBE = { up: 30, stroke: 30 - (CARD_Z + CARD.h) };

const TRAY = { x: 152, y: -22, w: 40, d: 44, r: 3 };
const TRAY_WALL = 2;
const TRAY_H = 9;

const P = k.fitProjection(
  [...k.boxCorners(PLATE, -PLATE_H - FOOT_H, 0), [X.spec, BACK_Y, ARM_Z + 6], [X.review, BACK_Y, ARM_Z + 6], [X.code, 0, ARM_Z + 8]],
  WIDTH,
  HEIGHT,
  { pad: 18, azimuth: 56 },
);

const at = (p) => k.iso(p, P);
const S = (paths, style) => k.solidSvg(paths, style);
const L = (d, style) => k.lineSvg(d, style);
const D = (points, style) => k.dotsSvg(points, style);
const byDepth = (pts) => [...pts].sort((a, b) => k.depthOf([a[0], a[1], 0], P) - k.depthOf([b[0], b[1], 0], P));
const screwRow = (pts, z, size = 0.45) => D(pts.map(([x, y]) => at([x, y, z])), { size });

// ——— Base ———
function plate() {
  const out = [`<path class="iso-halo" d="${k.haloOf(PLATE, -PLATE_H - FOOT_H, PLATE_H, P)}"/>`];
  for (const [x, y] of byDepth(k.corners(PLATE, 24))) {
    out.push(S(k.cylinder(x, y, 7, -PLATE_H - FOOT_H, 1.6, P, 28), { tone: "lo" }));
    out.push(S(k.cylinder(x, y, 5.4, -PLATE_H - FOOT_H + 1.6, FOOT_H - 1.6, P, 28), { tone: "mid" }));
  }
  out.push(S(k.slabOf(PLATE, -PLATE_H, PLATE_H, P, 8, 1.6), { tone: "mid" }));
  out.push(L(k.planOutline(k.insetPlan(PLATE, 5), 0, P), { tone: "lo" }));
  const screws = k.corners(PLATE, 11);
  out.push(L(screws.map(([x, y]) => k.ring(x, y, 2.2, 0, P, 16)).join(""), { tone: "lo" }));
  out.push(D(screws.map(([x, y]) => at([x, y, 0])), { size: 0.5 }));
  // Regla al frente
  const strip = { x: -150, y: PLATE.y + PLATE.d - 15, w: 230, d: 7, r: 1 };
  out.push(S(k.slabOf(strip, 0, 0.6, P, 3), { tone: "lo", crease: "none" }));
  const ticks = k.topTicks(strip.x + 4, strip.x + strip.w - 4, 4, 5, strip.y + 0.8, 0.6, [2, 3.6], P);
  out.push(L(ticks.minor, { tone: "lo" }), L(ticks.major, { tone: "mid" }));
  out.push(D([at([strip.x + 2, strip.y + 3.5, 0.6]), at([strip.x + strip.w - 2, strip.y + 3.5, 0.6])], { size: 0.45 }));
  // Placa de rótulo
  const label = { x: 104, y: PLATE.y + PLATE.d - 20, w: 40, d: 13, r: 1.4 };
  out.push(S(k.slabOf(label, 0, 0.8, P, 4), { tone: "lo", crease: "none" }));
  out.push(L(k.planOutline(k.insetPlan(label, 1.6), 0.8, P), { tone: "faint" }));
  [[24, 4.4], [16, 7], [20, 9.6]].forEach(([len, dy]) => {
    out.push(L(k.lineOnTop([label.x + 4, label.y + dy], [label.x + 4 + len, label.y + dy], 0.8, P), { tone: "lo", free: true }));
  });
  out.push(D([at([label.x + label.w - 3.4, label.y + 3.4, 0.8]), at([label.x + label.w - 3.4, label.y + label.d - 3.4, 0.8])], { size: 0.4 }));
  return out.join("");
}

// Un poste con collar, que sube hasta el brazo
function post(x, y, top, collarR = 5) {
  const out = [];
  out.push(S(k.cylinder(x, y, collarR, 0, 4, P, 28), { tone: "mid" }));
  out.push(D([at([x + collarR - 1.2, y, 4])], { size: 0.4 }));
  out.push(S(k.cylinder(x, y, 3.2, 4, top - 4, P, 28), { tone: "mid", crease: "none" }));
  out.push(L([18, 36].filter((z) => z < top - 4).map((z) => k.sideArc(x, y, 3.2, z, P, 16)).join(""), { tone: "faint" }));
  return out.join("");
}

// Brazo desde el poste de atrás hasta encima de la cinta, con su bloque de sujeción y tornillo
function arm(x, toY = 4) {
  const out = [];
  const clamp = { x: x - 6.5, y: BACK_Y - 6.5, w: 13, d: 13, r: 2.4 };
  out.push(S(k.slabOf(clamp, ARM_Z - 4, 11, P, 4, 0.6), { tone: "mid" }));
  const beam = { x: x - 3, y: BACK_Y + 6.5, w: 6, d: toY - BACK_Y - 6.5, r: 1.6 };
  out.push(S(k.slabOf(beam, ARM_Z, 4, P, 3, 0.5), { tone: "mid" }));
  out.push(D([at([x, BACK_Y + 11, ARM_Z + 4]), at([x, toY - 4, ARM_Z + 4])], { size: 0.45 }));
  out.push(S(k.cylinder(x - 8.4, BACK_Y, 2.4, ARM_Z, 5, P, 18), { tone: "mid" }));
  out.push(L(k.knurl(x - 8.4, BACK_Y, 2.4, ARM_Z, ARM_Z + 5, 16, P), { tone: "lo" }));
  out.push(S(k.cylinder(x, BACK_Y, 3.8, ARM_Z + 7, 2, P, 24), { tone: "mid" }));
  return out.join("");
}

// ——— Cinta ———
function beltBack() {
  const out = [];
  // tope izquierdo y guía de atrás
  out.push(S(k.slabOf({ x: BELT.x - 8, y: -20, w: 8, d: 40, r: 1.6 }, 0, RAIL_H + 2, P, 3, 0.5), { tone: "mid" }));
  out.push(D([at([BELT.x - 4, -15, RAIL_H + 2]), at([BELT.x - 4, 15, RAIL_H + 2])], { size: 0.45 }));
  out.push(S(k.slabOf({ x: BELT.x, y: -20, w: BELT.w, d: 6, r: 1 }, 0, RAIL_H, P, 3, 0.5), { tone: "mid" }));
  out.push(screwRow([-120, -60, 0, 60, 120].map((x) => [x, -17]), RAIL_H));
  return out.join("");
}

function belt() {
  const out = [];
  out.push(S(k.slabOf(BELT, 2, BELT_Z - 2, P, 3, 0.4), { tone: "lo" }));
  const slats = [];
  for (let x = BELT.x + 6; x < BELT.x + BELT.w - 2; x += 8) slats.push(k.lineOnTop([x, BELT.y], [x, BELT.y + BELT.d], BELT_Z, P));
  out.push(L(slats.join(""), { tone: "faint" }));
  return out.join("");
}

function beltFront() {
  const out = [];
  out.push(S(k.slabOf({ x: BELT.x, y: 14, w: BELT.w, d: 6, r: 1 }, 0, RAIL_H, P, 3, 0.5), { tone: "mid" }));
  out.push(screwRow([-120, -60, 0, 60, 120].map((x) => [x, 17]), RAIL_H));
  out.push(S(k.slabOf({ x: BELT.x + BELT.w, y: -20, w: 8, d: 40, r: 1.6 }, 0, RAIL_H + 2, P, 3, 0.5), { tone: "mid" }));
  out.push(D([at([BELT.x + BELT.w + 4, -15, RAIL_H + 2]), at([BELT.x + BELT.w + 4, 15, RAIL_H + 2])], { size: 0.45 }));
  // rampa hacia la bandeja
  out.push(S(k.slabOf({ x: BELT.x + BELT.w + 8, y: -10, w: 6, d: 20, r: 1 }, 0, 8, P, 3, 0.4), { tone: "mid" }));
  return out.join("");
}

// ——— Bandeja de entrada: tres tarjetas en espera ———
function inbox() {
  const out = [];
  const tray = { x: -194, y: -16, w: 26, d: 32, r: 2 };
  out.push(S(k.slabOf(tray, 0, 3, P, 4, 0.5), { tone: "mid" }));
  [0, 1, 2].forEach((i) => {
    const card = { x: tray.x + 3, y: tray.y + 6, w: CARD.w, d: CARD.d, r: 1.4 };
    out.push(S(k.slabOf(card, 3 + i * CARD.h, CARD.h, P, 3, 0.4), { tone: "hi", crease: "lo" }));
  });
  const top = 3 + 3 * CARD.h;
  [[11, 5], [7, 8]].forEach(([len, dy]) => {
    out.push(L(k.lineOnTop([tray.x + 6, tray.y + 6 + dy], [tray.x + 6 + len, tray.y + 6 + dy], top, P), { tone: "lo", free: true }));
  });
  out.push(S(k.slabOf({ x: tray.x, y: tray.y, w: 3, d: tray.d, r: 1 }, 3, 7, P, 3), { tone: "mid" }));
  return out.join("");
}

// ——— La tarjeta (lo que se mira) ———
function card() {
  const plan = { x: -CARD.w / 2, y: -CARD.d / 2, w: CARD.w, d: CARD.d, r: 1.4 };
  const top = CARD_Z + CARD.h;
  const out = [`<path class="iso-halo" d="${k.haloOf(k.insetPlan(plan, 2), CARD_Z, 0.1, P)}" style="filter:blur(3px)"/>`];
  out.push(S(k.slabOf(plan, CARD_Z, CARD.h, P, 3, 0.4), { tone: "hi", lit: true }));
  out.push(`<g data-part="card-lines">`);
  [[12, -5], [8, -2], [10, 1]].forEach(([len, dy]) => {
    out.push(L(k.lineOnTop([plan.x + 3, dy], [plan.x + 3 + len, dy], top, P), { tone: "lo", free: true }));
  });
  out.push(`</g>`);
  // marcas que van apareciendo: spec (sello) y código (prensa)
  out.push(`<g data-part="mark-spec" opacity="0">${L(k.ring(plan.x + plan.w - 4.5, plan.y + plan.d - 5, 2.4, top, P, 20), { tone: "hi" })}</g>`);
  out.push(`<g data-part="mark-code" opacity="0">${L(k.lineOnTop([plan.x + 3, 5], [plan.x + 11, 5], top, P), { tone: "hi", free: true })}${L(k.lineOnTop([plan.x + 3, 7.4], [plan.x + 8, 7.4], top, P), { tone: "hi", free: true })}</g>`);
  return out.join("");
}

// ——— Estaciones ———
// Cabezal que baja (sello o platina), construido en la posición de arriba
function head(plan, h) {
  const out = [];
  out.push(S(k.cylinder(0, 0, 1.8, STAMP.up + h, STAMP.rod, P, 16), { tone: "mid", crease: "none" }));
  out.push(S(k.slabOf(plan, STAMP.up, h, P, 4, 0.6), { tone: "mid" }));
  return out.join("");
}

function sleeve(x) {
  return S(k.cylinder(x, 0, SLEEVE.r, SLEEVE.z, SLEEVE.h, P, 24), { tone: "mid" }) + L(k.sideArc(x, 0, SLEEVE.r, SLEEVE.z + 4, P, 16), { tone: "faint" });
}

function stampHead() {
  const out = [];
  out.push(S(k.cylinder(0, 0, 1.8, STAMP.up + STAMP.h, STAMP.rod, P, 16), { tone: "mid", crease: "none" }));
  out.push(S(k.cylinder(0, 0, STAMP.r, STAMP.up + 2, STAMP.h - 2, P, 32, 0.5), { tone: "mid" }));
  out.push(L(k.knurl(0, 0, STAMP.r, STAMP.up + 2.6, STAMP.up + STAMP.h, 30, P), { tone: "lo" }));
  out.push(S(k.cylinder(0, 0, STAMP.r - 1.4, STAMP.up, 2, P, 32), { tone: "lo" }));
  return out.join("");
}

// Prensa: pórtico de dos postes a los costados de la cinta
const PRESS_Y = 28;
function pressBack(x) {
  return post(x, -PRESS_Y, ARM_Z);
}
function pressBeam(x) {
  const out = [];
  out.push(S(k.slabOf({ x: x - 5, y: -PRESS_Y - 5, w: 10, d: PRESS_Y * 2 + 10, r: 2 }, ARM_Z, 6, P, 3, 0.6), { tone: "mid" }));
  out.push(D([at([x, -PRESS_Y, ARM_Z + 6]), at([x, PRESS_Y, ARM_Z + 6])], { size: 0.5 }));
  out.push(S(k.cylinder(x, -PRESS_Y, 3.8, ARM_Z + 6, 2, P, 24), { tone: "mid" }));
  out.push(S(k.cylinder(x, PRESS_Y, 3.8, ARM_Z + 6, 2, P, 24), { tone: "mid" }));
  return out.join("");
}
function pressFront(x) {
  return post(x, PRESS_Y, ARM_Z);
}

// Comparador (el gate): carátula sobre el brazo, palpador que baja a la tarjeta
function dial(x) {
  const out = [];
  const top = DIAL.z + DIAL.h;
  // vástago: guía del palpador (lo tapa en todo su recorrido)
  out.push(S(k.cylinder(x, 0, 2.9, DIAL.z - 18, 18, P, 20), { tone: "mid" }));
  out.push(L(k.sideArc(x, 0, 2.9, DIAL.z - 9, P, 12), { tone: "lo" }));
  out.push(S(k.cylinder(x, 0, DIAL.r, DIAL.z, DIAL.h, P, 64, 0.8), { tone: "hi", crease: "lo" }));
  out.push(L(k.knurl(x, 0, DIAL.r, top - 3, top, 72, P, 0.3), { tone: "lo" }));
  out.push(L(k.ring(x, 0, DIAL.r - 2, top, P, 64), { tone: "lo" }));
  const ticks = k.radialTicks(x, 0, DIAL.r - 2.6, 40, 5, top, [1.2, 2.6], P);
  out.push(L(ticks.minor, { tone: "lo" }), L(ticks.major, { tone: "mid" }));
  // marca de "pasa" (hi) en 0.62 de vuelta
  const a = 0.62 * Math.PI * 2;
  out.push(L(k.lineOnTop([x + Math.sin(a) * (DIAL.r - 2), -Math.cos(a) * (DIAL.r - 2)], [x + Math.sin(a) * (DIAL.r - 6), -Math.cos(a) * (DIAL.r - 6)], top, P), { tone: "hi" }));
  out.push(L(k.ring(x, 0, 1.4, top, P, 16), { tone: "mid" }));
  return out.join("");
}
const needleAt = (x, turn) => {
  const a = turn * Math.PI * 2;
  return k.lineOnTop([x - Math.sin(a) * 2.6, Math.cos(a) * 2.6], [x + Math.sin(a) * (DIAL.r - 4), -Math.cos(a) * (DIAL.r - 4)], DIAL.z + DIAL.h + 0.2, P);
};
function probe() {
  const out = [];
  out.push(S(k.cylinder(0, 0, 1.2, PROBE.up + 2, 30, P, 14), { tone: "mid", crease: "none" }));
  out.push(S(k.cylinder(0, 0, 2.2, PROBE.up, 2, P, 18), { tone: "mid" }));
  return out.join("");
}

// Lupa (la review): aro con lente, en un brazo que la corre sobre la tarjeta
function loupe() {
  const out = [];
  const z = 26;
  out.push(S(k.cylinder(0, 0, 1.4, z + 3, ARM_Z - z - 3, P, 14), { tone: "mid", crease: "none" }));
  out.push(S(k.cylinder(0, 0, 10, z, 3, P, 48, 0.5), { tone: "mid" }));
  out.push(S(k.cylinder(0, 0, 8, z + 3, 0.4, P, 48), { tone: "lo", crease: "none" }));
  out.push(L(k.ring(0, 0, 6.4, z + 3.4, P, 40), { tone: "faint" }));
  return out.join("");
}

// ——— Contador de fixes: riel al frente con 3 fichas ———
const COUNTER = { x: -170, y: 36, w: 96, d: 10, r: 2 };
const TOKEN_X = (i) => COUNTER.x + 12 + i * 12;
const TOKEN_SHIFT = 44;
function counterRail() {
  const out = [];
  out.push(S(k.slabOf(COUNTER, 0, 3, P, 4, 0.5), { tone: "mid" }));
  out.push(L(k.lineOnTop([COUNTER.x + 2.4, COUNTER.y + 5], [COUNTER.x + COUNTER.w - 2.4, COUNTER.y + 5], 3, P), { tone: "faint" }));
  out.push(D([at([COUNTER.x + 2.4, COUNTER.y + 5, 3]), at([COUNTER.x + COUNTER.w - 2.4, COUNTER.y + 5, 3])], { size: 0.45 }));
  return out.join("");
}
function token() {
  return S(k.cylinder(0, COUNTER.y + 5, 3.6, 3, 3, P, 24, 0.4), { tone: "hi", crease: "lo" });
}

// ——— Bandeja del PR ———
function trayBack() {
  const out = [];
  out.push(`<path class="iso-halo" d="${k.haloOf(TRAY, 0, TRAY_H, P)}" style="filter:blur(3px)"/>`);
  out.push(S(k.slabOf(TRAY, 0, 2, P, 4, 0.5), { tone: "mid" }));
  out.push(S(k.slabOf({ x: TRAY.x, y: TRAY.y, w: TRAY.w, d: TRAY_WALL, r: 1 }, 2, TRAY_H - 2, P, 3, 0.4), { tone: "mid" }));
  out.push(S(k.slabOf({ x: TRAY.x, y: TRAY.y, w: TRAY_WALL, d: TRAY.d, r: 1 }, 2, TRAY_H - 2, P, 3, 0.4), { tone: "mid" }));
  return out.join("");
}
const STACK = 8;
function trayStack() {
  const out = [];
  for (let i = 0; i < STACK; i++) {
    const plan = { x: X.tray - CARD.w / 2, y: -CARD.d / 2, w: CARD.w, d: CARD.d, r: 1.4 };
    out.push(`<g data-stack="${i}" opacity="${i < 2 ? 1 : 0}">${S(k.slabOf(plan, 2 + i * CARD.h, CARD.h, P, 3, 0.3), { tone: "hi", crease: "lo" })}</g>`);
  }
  return out.join("");
}
function trayFront() {
  const out = [];
  out.push(S(k.slabOf({ x: TRAY.x + TRAY.w - TRAY_WALL, y: TRAY.y, w: TRAY_WALL, d: TRAY.d, r: 1 }, 2, TRAY_H - 2, P, 3, 0.4), { tone: "mid" }));
  out.push(S(k.slabOf({ x: TRAY.x, y: TRAY.y + TRAY.d - TRAY_WALL, w: TRAY.w, d: TRAY_WALL, r: 1 }, 2, TRAY_H - 2, P, 3, 0.4), { tone: "mid" }));
  out.push(k.faceTextSvg(k.sideMatrix([TRAY.x + TRAY.w / 2, TRAY.y + TRAY.d, 3.6], 3.6, P, "left"), "PR", { size: 3.2, tone: "lo", anchor: "middle" }));
  return out.join("");
}

// ——— Ensamblado, de atrás hacia adelante ———
const tr = (dx, dy, dz) => k.translateAlong(P, [dx, dy, dz]);
const svg = k.figureSvg({
  width: WIDTH,
  height: HEIGHT,
  label:
    "Un banco con una cinta transportadora. Una tarjeta, el ticket, sale de una bandeja de entrada y pasa por cuatro estaciones: un sello que escribe la spec, una prensa que escribe el código, un comparador cuyo palpador baja y cuya aguja marca si el check pasa, y una lupa que la revisa. Si el check o la revisión fallan, la cinta la devuelve a la prensa y se corre una de tres fichas de fix; si pasa, cae en la bandeja del PR.",
  body: [
    plate(),
    // postes de atrás
    post(X.spec, BACK_Y, ARM_Z - 4),
    post(X.gate, BACK_Y, ARM_Z - 4),
    post(X.review, BACK_Y, ARM_Z - 4),
    pressBack(X.code),
    inbox(),
    trayBack(),
    trayStack(),
    beltBack(),
    belt(),
    `<g data-part="card" transform="${tr(X.inbox, 0, 0)}">${card()}</g>`,
    beltFront(),
    trayFront(),
    // estaciones (encima de la cinta)
    `<g data-part="stamp" transform="${tr(X.spec, 0, 0)}">${stampHead()}</g>`,
    sleeve(X.spec),
    arm(X.spec),
    `<g data-part="press" transform="${tr(X.code, 0, 0)}">${head({ x: -12, y: -13, w: 24, d: 26, r: 2 }, STAMP.h)}</g>`,
    sleeve(X.code),
    pressBeam(X.code),
    `<g data-part="probe" transform="${tr(X.gate, 0, 0)}">${probe()}</g>`,
    arm(X.gate, 0),
    dial(X.gate),
    `<path data-part="needle" class="iso-line" data-tone="lit" data-free="start" d="${needleAt(X.gate, 0)}" style="stroke-width:1.1"/>`,
    `<g data-part="loupe" transform="${tr(X.review, 0, 0)}">${loupe()}</g>`,
    arm(X.review, 4),
    pressFront(X.code),
    counterRail(),
    [0, 1, 2].map((i) => `<g data-token="${i}" transform="${tr(TOKEN_X(i), 0, 0)}">${token()}</g>`).join(""),
  ],
});

// ——— El modelo y la parte viva ———
// Un guion de tickets de ejemplo: el primero pasa de una, el segundo falla el check una vez, el tercero
// falla la review dos veces. Las reglas son las de harness-os: hasta 3 ciclos de fix, si no, Blocked.
const live = `
// Embebida en el sitio (iframe): sin márgenes ni fondo propio. El alto lo mide la página que la contiene.
if (window.self !== window.top) {
  const css = document.createElement("style");
  css.textContent = ".iso-page{width:100%!important;margin:0!important}body.iso{background:transparent!important}";
  document.head.appendChild(css);
}
const P = ${JSON.stringify(P)};
const X = ${JSON.stringify(X)};
const DIAL = ${JSON.stringify(DIAL)};
const STAMP = ${JSON.stringify(STAMP)};
const PROBE = ${JSON.stringify(PROBE)};
const CARD = ${JSON.stringify(CARD)};
const TOKEN_X = ${TOKEN_X.toString()};
const COUNTER = ${JSON.stringify(COUNTER)};
const TOKEN_SHIFT = ${TOKEN_SHIFT}, STACK = ${STACK};
const needleAt = ${needleAt.toString().replace("k.lineOnTop", "lineOnTop")};
const TICKETS = [
  { id: "FACHA-412", gate: [true], review: [true] },
  { id: "FACHA-413", gate: [false, true], review: [true] },
  { id: "FACHA-414", gate: [true, true, true], review: [false, false, true] },
];
const STAGE = { inbox: "en Ready", spec: "planner · spec", code: "implementer · código", gate: "gate · check", review: "reviewer · diff", fix: "vuelve a la prensa", out: "PR abierto" };

// El guion como lista de tramos: cada uno dura "d" segundos y lleva el estado de llegada.
function script() {
  const steps = [];
  let state = { x: X.inbox, z: 0, stamp: 0, press: 0, probe: 0, needle: 0, loupe: 0, fixes: 0, spec: 0, code: 0, prs: 2, stage: "inbox", ticket: 0, ok: null };
  const go = (d, change) => { state = { ...state, ...change }; steps.push({ d, s: state }); };
  TICKETS.forEach((t, n) => {
    go(0.6, { x: X.inbox, z: 0, ticket: n, fixes: 0, spec: 0, code: 0, stage: "inbox", ok: null, needle: 0, loupe: 0 });
    go(1.1, { x: X.spec, stage: "spec" });
    go(0.5, { stamp: 1 }); go(0.4, { stamp: 1, spec: 1 }); go(0.5, { stamp: 0 });
    let round = 0;
    for (; round <= 3; ) {
      go(1.2, { x: X.code, stage: round ? "fix" : "code" });
      go(0.5, { press: 1, stage: "code" }); go(0.4, { press: 1, code: 1 }); go(0.5, { press: 0 });
      go(1.1, { x: X.gate, stage: "gate" });
      const gateOk = t.gate[round] ?? true;
      go(0.5, { probe: 1 });
      go(0.9, { needle: gateOk ? 0.62 : 0.3, ok: gateOk });
      go(0.5, { probe: 0 });
      go(0.4, { needle: 0 });
      if (!gateOk) { round++; go(0.3, { fixes: round, stage: "fix", ok: null }); continue; }
      go(1.1, { x: X.review, stage: "review", ok: null });
      const reviewOk = t.review[round] ?? true;
      go(0.7, { loupe: 1 }); go(0.7, { loupe: -1 }); go(0.5, { loupe: 0, ok: reviewOk });
      if (!reviewOk) { round++; go(0.3, { fixes: round, stage: "fix", ok: null }); continue; }
      break;
    }
    go(1.0, { x: X.out, stage: "out", ok: null });
    go(0.45, { x: 152, z: 7 });
    go(0.6, { x: X.tray, z: 2 + state.prs * CARD.h - ${CARD_Z} });
    go(0.2, { prs: Math.min(STACK, state.prs + 1) });
  });
  return steps;
}
const STEPS = script();
const TOTAL = STEPS.reduce((sum, step) => sum + step.d, 0);
const ease = (u) => u * u * (3 - 2 * u);
const lerp = (a, b, u) => a + (b - a) * u;
function stateAt(t) {
  let prev = STEPS[0].s, clock = 0;
  for (const step of STEPS) {
    if (t <= clock + step.d) {
      const u = ease(Math.min(1, Math.max(0, (t - clock) / step.d)));
      const out = { ...step.s };
      for (const key of ["x", "z", "stamp", "press", "probe", "needle", "loupe"]) out[key] = lerp(prev[key], step.s[key], u);
      out.spec = u > 0.5 ? step.s.spec : prev.spec; out.code = u > 0.5 ? step.s.code : prev.code;
      return out;
    }
    clock += step.d; prev = step.s;
  }
  return { ...STEPS[STEPS.length - 1].s };
}
// La primera vuelta arranca con la bandeja como quedó al final (los PRs se acumulan hasta 8 y vuelven a 2)
const stage = document.querySelector(".iso-stage");
const svg = stage.querySelector("svg");
const parts = {};
for (const name of ["card", "stamp", "press", "probe", "needle", "loupe", "mark-spec", "mark-code"]) parts[name] = svg.querySelector('[data-part="' + name + '"]');
const tokens = [0, 1, 2].map((i) => svg.querySelector('[data-token="' + i + '"]'));
const stack = [...svg.querySelectorAll("[data-stack]")];
const readout = document.querySelector("[data-readout]");
const still = matchMedia("(prefers-reduced-motion: reduce)");
function draw(s) {
  parts.card.setAttribute("transform", translateAlong(P, [s.x, 0, s.z]));
  parts.stamp.setAttribute("transform", translateAlong(P, [X.spec, 0, -STAMP.stroke * s.stamp]));
  parts.press.setAttribute("transform", translateAlong(P, [X.code, 0, -STAMP.stroke * s.press]));
  parts.probe.setAttribute("transform", translateAlong(P, [X.gate, 0, -PROBE.stroke * s.probe]));
  parts.needle.setAttribute("d", needleAt(X.gate, s.needle));
  parts.loupe.setAttribute("transform", translateAlong(P, [X.review, s.loupe * 6, 0]));
  parts["mark-spec"].setAttribute("opacity", String(s.spec));
  parts["mark-code"].setAttribute("opacity", String(s.code));
  tokens.forEach((el, i) => el.setAttribute("transform", translateAlong(P, [TOKEN_X(i) + (i < s.fixes ? TOKEN_SHIFT : 0), 0, 0])));
  stack.forEach((el, i) => el.setAttribute("opacity", i < s.prs ? "1" : "0"));
  const t = TICKETS[s.ticket];
  const verdict = s.ok === true ? " · pasa" : s.ok === false ? " · falla" : "";
  const text = t.id + " · " + STAGE[s.stage] + verdict + " · fix " + s.fixes + "/3";
  if (readout.textContent !== text) readout.textContent = text;
  stage.setAttribute("aria-valuetext", text);
}
let clock = 0, last = 0, frame = 0, visible = false, held = false, idle = 0;
function tick(now) {
  const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60;
  last = now;
  if (!held) clock = (clock + dt) % TOTAL;
  draw(stateAt(clock));
  frame = visible && !held && !still.matches ? requestAnimationFrame(tick) : 0;
}
const run = () => { if (!frame && visible && !held && !still.matches) { last = 0; frame = requestAnimationFrame(tick); } };
// Pausar al pasar el mouse o enfocar; las flechas saltan de etapa en etapa.
const marks = []; { let c = 0, prevStage = null; for (const step of STEPS) { if (step.s.stage !== prevStage) { marks.push(c); prevStage = step.s.stage; } c += step.d; } }
const hold = () => { held = true; clearTimeout(idle); };
const release = () => { clearTimeout(idle); idle = setTimeout(() => { held = false; run(); }, 1600); };
stage.addEventListener("pointerenter", hold);
stage.addEventListener("pointerleave", release);
stage.addEventListener("focus", hold);
stage.addEventListener("blur", release);
stage.addEventListener("keydown", (event) => {
  let i = marks.findIndex((m) => m > clock + 0.01);
  if (i < 0) i = marks.length;
  if (event.key === "ArrowRight") clock = marks[i % marks.length] + 0.02;
  else if (event.key === "ArrowLeft") clock = marks[Math.max(0, i - 2)] + 0.02;
  else return;
  event.preventDefault();
  hold();
  draw(stateAt(clock));
});
new IntersectionObserver((entries) => { visible = entries[entries.length - 1].isIntersecting; if (visible) run(); }, { rootMargin: "120px 0px" }).observe(stage);
if (still.matches) { clock = marks[marks.length - 2] + 0.02; }
draw(stateAt(clock));
`;

const body = k.plateHtml({
  fig: "Fig 1",
  title: "harness-os",
  hint: "Mouse: pausa · flechas: etapas",
  readout: "FACHA-412 · en Ready · fix 0/3",
  keys: [
    { mark: "lit", label: "La tarjeta: un ticket de Notion" },
    { mark: "raised", label: "Tres fichas: los ciclos de fix que le quedan" },
  ],
  caption:
    "Sello, prensa, comparador y lupa son el planner, el implementer, el quality gate y el reviewer. Si el check o la revisión fallan, la tarjeta vuelve a la prensa con una ficha menos; después de tres fixes, el ticket queda en Blocked. Si pasa, cae en la bandeja del PR y una persona lo mergea.",
  body: `<div class="iso-stage" tabindex="0" role="img" aria-roledescription="figura interactiva" aria-label="harness-os: la tarjeta recorre sello, prensa, comparador y lupa; flechas para avanzar de etapa">${svg}</div>`,
});

writeFileSync(OUT, k.pageHtml({ title: "harness-os", theme: "dark", body, script: kitScript() + live }));
console.log("wrote", OUT);
