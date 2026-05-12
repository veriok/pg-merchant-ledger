export let STATE = { vendors: {}, capMult: 100 };

export function loadState() {
  try { const r = localStorage.getItem('pg-merchant-ledger'); if (r) STATE = JSON.parse(r); } catch(e) {}
}

export function saveState() {
  try {
    localStorage.setItem('pg-merchant-ledger', JSON.stringify(STATE));
    const el = document.getElementById('last-saved');
    if (el) el.textContent = 'Saved ' + new Date().toLocaleTimeString();
  } catch(e) {}
}

export function getVS(id) {
  if (!STATE.vendors[id]) STATE.vendors[id] = {};
  const s = STATE.vendors[id];
  return {
    favorLevel:    s.favorLevel    ?? 0,
    isFavorite:    s.isFavorite    ?? false,
    cashRemaining: s.cashRemaining ?? null,
    timerStart:    s.timerStart    ?? null,
    giftTable:     s.giftTable     ?? [],
    buyTypes:      s.buyTypes      ?? null,  // null = use vendor defaults
    customLimits:  s.customLimits  ?? null,
  };
}

export function setVS(id, updates) {
  if (!STATE.vendors[id]) STATE.vendors[id] = {};
  Object.assign(STATE.vendors[id], updates);
  saveState();
}

export function resetState() {
  STATE = { vendors: {}, capMult: 100 };
  saveState();
}

export function getCapMult() {
  return STATE.capMult ?? 100;
}

export function setCapMult(val) {
  STATE.capMult = val;
  saveState();
}
