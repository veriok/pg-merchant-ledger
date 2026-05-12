import { SEVEN_DAYS } from './vendors.js';
import { getVS, setVS } from './state.js';

export function setCash(id, cash) {
  const s = getVS(id);
  const now = Date.now();
  let ts = s.timerStart;
  if (ts === null || (ts + SEVEN_DAYS) < now) ts = now;
  setVS(id, { cashRemaining: cash, timerStart: ts });
}

export function getTimerMs(id) {
  const s = getVS(id);
  if (s.timerStart === null) return null;
  return Math.max(0, (s.timerStart + SEVEN_DAYS) - Date.now());
}

export function fmtTimer(ms) {
  if (ms === null) return null;
  if (ms === 0) return '⟳ RESET READY';
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  return `${d}d ${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m`;
}

export function fmtNum(n) {
  if (n === null || n === undefined) return '?';
  return n.toLocaleString();
}
