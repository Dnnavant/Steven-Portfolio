// Shared geometry for the network map drawings (hero and systems tour).
// Positions are deterministic so the drawing is identical on every build.

export const W = 520;
export const H = 440;
export const cx = W / 2;
export const cy = H / 2 + 6;

const jitter = (i: number) => (Math.sin(i * 12.9898) * 43758.5453) % 1;

export type Site = { x: number; y: number; len: number; i: number };

export function siteLayout(count: number): Site[] {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2 + jitter(i) * 0.12;
    const r = 1 + jitter(i + 7) * 0.12;
    const x = cx + Math.cos(angle) * 205 * r;
    const y = cy + Math.sin(angle) * 168 * r;
    return { x: +x.toFixed(1), y: +y.toFixed(1), len: Math.ceil(Math.hypot(x - cx, y - cy)), i };
  });
}

export const rack = { w: 66, h: 88, units: 5 };
