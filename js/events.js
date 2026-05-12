import { VENDORS_DATA, SEVEN_DAYS, FAVOR_LEVELS } from './vendors.js';
import { loadState, getVS, setVS, resetState, getCapMult, setCapMult } from './state.js';
import { setCash, getTimerMs, fmtTimer } from './timers.js';
import { F, renderSelling, renderGifting, renderManage, rerender, getEffectiveBuyTypes } from './render.js';

// ── TAB SWITCHING ─────────────────────────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
    rerender();
  });
});

// ── SELLING TOOLBAR ───────────────────────────────────────────────────
document.getElementById('sell-search').addEventListener('input', e => { F.sellSearch = e.target.value; renderSelling(); });
document.getElementById('sel-type').addEventListener('change', e => { F.itemType = e.target.value; renderSelling(); });
document.getElementById('cap-mult').addEventListener('change', e => {
  const val = Math.max(1, Math.min(500, parseInt(e.target.value) || 100));
  e.target.value = val;
  setCapMult(val);
  renderSelling();
});

document.getElementById('btn-fav-only').addEventListener('click', function() {
  F.favOnly = !F.favOnly; this.classList.toggle('fav-active', F.favOnly); renderSelling();
});
document.getElementById('btn-beast-only').addEventListener('click', function() {
  F.beastOnly = !F.beastOnly; this.classList.toggle('beast-active', F.beastOnly); renderSelling();
});
document.getElementById('btn-hide-empty').addEventListener('click', function() {
  F.hideEmpty = !F.hideEmpty; this.classList.toggle('active', F.hideEmpty); renderSelling();
});
document.querySelectorAll('.sort-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    F.sort = this.dataset.sort; renderSelling();
  });
});

// ── SELLING: DELEGATE CLICKS ──────────────────────────────────────────
document.getElementById('vendor-grid').addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (btn) {
    const id = btn.dataset.id;
    const s = getVS(id);
    if (btn.dataset.action === 'fav') {
      setVS(id, { isFavorite: !s.isFavorite });
      renderSelling();
    } else if (btn.dataset.action === 'fav-up') {
      if (s.favorLevel < 6) { setVS(id, { favorLevel: s.favorLevel + 1 }); renderSelling(); }
    } else if (btn.dataset.action === 'fav-dn') {
      if (s.favorLevel > 0) { setVS(id, { favorLevel: s.favorLevel - 1 }); renderSelling(); }
    } else if (btn.dataset.action === 'limits-cfg') {
      openLimitsModal(id);
    }
    return;
  }
  // Timer display badge
  const td = e.target.closest('.timer-display');
  if (td) {
    const card = td.closest('.vendor-card');
    if (card) openTimerModal(card.dataset.id);
  }
});

// ── SELLING: CASH INPUT ───────────────────────────────────────────────
document.getElementById('vendor-grid').addEventListener('change', e => {
  if (!e.target.classList.contains('cash-input')) return;
  const id = e.target.dataset.id;
  const val = parseFloat(e.target.value);
  if (!isNaN(val)) { setCash(id, Math.max(0, val)); renderSelling(); }
});

// ── GIFTING TOOLBAR ───────────────────────────────────────────────────
document.getElementById('gift-search').addEventListener('input', e => { F.giftSearch = e.target.value; renderGifting(); });
document.getElementById('btn-gift-fav').addEventListener('click', function() {
  F.giftFavOnly = !F.giftFavOnly; this.classList.toggle('fav-active', F.giftFavOnly); renderGifting();
});

// ── GIFTING: DELEGATE CLICKS ──────────────────────────────────────────
document.getElementById('gift-grid').addEventListener('click', e => {
  const star = e.target.closest('.fav-star');
  if (star) {
    const id = star.dataset.id;
    setVS(id, { isFavorite: !getVS(id).isFavorite });
    renderGifting(); return;
  }
  const addBtn = e.target.closest('.btn-add-gift');
  if (addBtn) {
    const vid = addBtn.dataset.vid;
    const s = getVS(vid);
    setVS(vid, { giftTable: [...(s.giftTable||[]), {name:'',value:''}] });
    renderGifting(); return;
  }
  const delBtn = e.target.closest('.gi-del');
  if (delBtn) {
    const vid = delBtn.dataset.vid;
    const idx = parseInt(delBtn.dataset.idx);
    const s = getVS(vid);
    setVS(vid, { giftTable: s.giftTable.filter((_,i) => i !== idx) });
    renderGifting(); return;
  }
});

// ── GIFTING: EDIT GIFT TABLE INPUTS ──────────────────────────────────
document.getElementById('gift-grid').addEventListener('input', e => {
  const el = e.target;
  if (!el.dataset.vid) return;
  const vid = el.dataset.vid;
  const idx = parseInt(el.dataset.idx);
  const field = el.dataset.field;
  if (field !== 'name' && field !== 'value') return;
  const s = getVS(vid);
  const gt = [...(s.giftTable||[])];
  if (!gt[idx]) return;
  gt[idx] = { ...gt[idx], [field]: el.value };
  setVS(vid, { giftTable: gt });
  if (field === 'value') {
    const fl = s.favorLevel;
    const toNext = fl < 6 ? [100,200,300,600,800,1000][fl] : null;
    const toSM   = fl < 6 ? [100,200,300,600,800,1000].slice(fl).reduce((a,b)=>a+b,0) : null;
    const val = parseFloat(el.value) || 0;
    const tr = el.closest('tr');
    if (tr) {
      const cells = tr.querySelectorAll('.gi-calc');
      cells[0].textContent = (val>0&&toNext!==null) ? Math.ceil(toNext/val).toLocaleString() : '—';
      cells[1].textContent = (val>0&&toSM!==null)   ? Math.ceil(toSM/val).toLocaleString()   : '—';
    }
  }
});

// ── MANAGE: DELEGATE CLICKS ───────────────────────────────────────────
document.getElementById('manage-list').addEventListener('click', e => {
  const limitsBtn = e.target.closest('[data-action="limits-cfg"]');
  if (limitsBtn) { openLimitsModal(limitsBtn.dataset.id); return; }
  const addBtn = e.target.closest('.btn-add-type');
  if (addBtn) {
    const id = addBtn.dataset.id;
    const sel = document.getElementById('addtype-sel-'+id);
    const t = sel ? sel.value : null;
    if (!t) return;
    const bt = [...getEffectiveBuyTypes(VENDORS_DATA.find(v=>v.id===id))];
    if (!bt.find(b => b.t === t)) bt.push({t, m:100});
    setVS(id, { buyTypes: bt });
    renderManage(); return;
  }
  const delBtn = e.target.closest('.bt-del');
  if (delBtn) {
    const id = delBtn.dataset.id;
    const idx = parseInt(delBtn.dataset.idx);
    const bt = [...getEffectiveBuyTypes(VENDORS_DATA.find(v=>v.id===id))];
    bt.splice(idx,1);
    setVS(id, { buyTypes: bt });
    renderManage(); return;
  }
  const resetBtn = e.target.closest('[data-action="reset-bt"]');
  if (resetBtn) {
    const id = resetBtn.dataset.id;
    setVS(id, { buyTypes: null });
    renderManage(); return;
  }
});

document.getElementById('manage-list').addEventListener('change', e => {
  const el = e.target;
  if (!el.classList.contains('bt-mult-input')) return;
  const id = el.dataset.id;
  const idx = parseInt(el.dataset.idx);
  const val = Math.min(200, Math.max(0, parseInt(el.value)||0));
  const bt = [...getEffectiveBuyTypes(VENDORS_DATA.find(v=>v.id===id))];
  if (bt[idx]) bt[idx] = { ...bt[idx], m: val };
  setVS(id, { buyTypes: bt });
});

// ── EXPORT / IMPORT ───────────────────────────────────────────────────
document.getElementById('btn-export-favor').addEventListener('click', () => {
  const out = { version:1, vendors:{} };
  VENDORS_DATA.forEach(vd => {
    const s = getVS(vd.id);
    out.vendors[vd.id] = { favorLevel: s.favorLevel, isFavorite: s.isFavorite };
  });
  const blob = new Blob([JSON.stringify(out, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'pg-favor-levels.json';
  a.click();
});

document.getElementById('btn-import-favor').addEventListener('click', () => {
  const raw = document.getElementById('ta-import').value.trim();
  const res = document.getElementById('import-result');
  try {
    const data = JSON.parse(raw);
    if (!data.vendors) throw new Error('Missing vendors key');
    let count = 0;
    Object.entries(data.vendors).forEach(([id, v]) => {
      if (v.favorLevel !== undefined) setVS(id, { favorLevel: Math.max(0, Math.min(6, parseInt(v.favorLevel)||0)) });
      if (v.isFavorite !== undefined) setVS(id, { isFavorite: !!v.isFavorite });
      count++;
    });
    res.textContent = `✓ Imported favor levels for ${count} vendors.`;
    res.className = 'result-msg result-ok';
    rerender();
  } catch(err) {
    res.textContent = `✗ Error: ${err.message}`;
    res.className = 'result-msg result-err';
  }
});

document.getElementById('btn-reset-all').addEventListener('click', () => {
  if (!confirm('Clear ALL data? This includes favor, cash, timers, and gift tables.')) return;
  resetState();
  rerender();
});

// ── AUTO-RESET EXPIRED TIMERS ─────────────────────────────────────────
function autoResetExpiredTimers() {
  let changed = false;
  VENDORS_DATA.forEach(vd => {
    const s = getVS(vd.id);
    if (s.timerStart !== null && s.cashRemaining !== null) {
      if (getTimerMs(vd.id) === 0) { setVS(vd.id, { cashRemaining: null, timerStart: null }); changed = true; }
    }
  });
  return changed;
}

// ── LIVE TIMER UPDATE (every 60s) ─────────────────────────────────────
setInterval(() => {
  const changed = autoResetExpiredTimers();
  const activeTab = document.querySelector('.tab-btn.active')?.dataset.tab;
  if (activeTab === 'selling') {
    if (changed) {
      renderSelling();
    } else {
      document.querySelectorAll('.timer-display').forEach(el => {
      const card = el.closest('.vendor-card');
      if (!card) return;
      const id = card.dataset.id;
      const ms = getTimerMs(id);
      const str = fmtTimer(ms);
      if (ms === null) { el.className='timer-display timer-none'; el.textContent='⏱ no timer'; }
      else if (ms === 0) { el.className='timer-display timer-done'; el.textContent='⟳ RESET READY'; }
      else { el.className='timer-display timer-active'; el.textContent=`⏱ ${str}`; }
      });
    }
  }
}, 60000);

// ── TIMER MODAL ───────────────────────────────────────────────────────
let _timerModalId = null;

function openTimerModal(id) {
  _timerModalId = id;
  const ms = getTimerMs(id);
  if (ms !== null && ms > 0) {
    document.getElementById('timer-d').value = Math.floor(ms / 86400000);
    document.getElementById('timer-h').value = Math.floor((ms % 86400000) / 3600000);
    document.getElementById('timer-m').value = Math.floor((ms % 3600000) / 60000);
  } else {
    document.getElementById('timer-d').value = '';
    document.getElementById('timer-h').value = '';
    document.getElementById('timer-m').value = '';
  }
  document.getElementById('timer-modal').style.display = 'flex';
  document.getElementById('timer-d').focus();
}

document.getElementById('timer-modal-cancel').addEventListener('click', () => {
  document.getElementById('timer-modal').style.display = 'none';
  _timerModalId = null;
});

document.getElementById('timer-modal-clear').addEventListener('click', () => {
  if (_timerModalId) setVS(_timerModalId, { timerStart: null });
  document.getElementById('timer-modal').style.display = 'none';
  _timerModalId = null;
  renderSelling();
});

document.getElementById('timer-modal-save').addEventListener('click', () => {
  if (!_timerModalId) return;
  const d = parseInt(document.getElementById('timer-d').value) || 0;
  const h = parseInt(document.getElementById('timer-h').value) || 0;
  const m = parseInt(document.getElementById('timer-m').value) || 0;
  const msLeft = (d * 86400000) + (h * 3600000) + (m * 60000);
  const ts = Date.now() - (SEVEN_DAYS - msLeft);
  setVS(_timerModalId, { timerStart: ts });
  document.getElementById('timer-modal').style.display = 'none';
  _timerModalId = null;
  renderSelling();
});

document.getElementById('timer-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('timer-modal'))
    document.getElementById('timer-modal').style.display = 'none';
});

// ── LIMITS MODAL ──────────────────────────────────────────────────────
let _limitsModalId = null;

function openLimitsModal(id) {
  _limitsModalId = id;
  const vd = VENDORS_DATA.find(v => v.id === id);
  if (!vd) return;
  const s = getVS(id);
  document.getElementById('limits-modal-name').textContent = vd.name;
  const tbody = document.getElementById('limits-modal-body');
  tbody.innerHTML = FAVOR_LEVELS.map((lv, i) => {
    const base = vd.limits?.[i] ?? {c:null, p:null};
    const cust = s.customLimits?.[i];
    const capVal  = (cust && cust.c !== null && cust.c !== undefined) ? cust.c : (base.c ?? '');
    const poolVal = (cust && cust.p !== null && cust.p !== undefined) ? cust.p : (base.p ?? '');
    return `<tr>
      <td class="lm-lvl"><span class="favor-badge fl-${i}">${lv}</span></td>
      <td><input class="modal-input lm-cap" type="number" data-idx="${i}" placeholder="${base.c ?? '?'}" value="${capVal}" min="0"></td>
      <td><input class="modal-input lm-pool" type="number" data-idx="${i}" placeholder="${base.p ?? '?'}" value="${poolVal}" min="0"></td>
    </tr>`;
  }).join('');
  document.getElementById('limits-modal').style.display = 'flex';
}

document.getElementById('limits-modal-cancel').addEventListener('click', () => {
  document.getElementById('limits-modal').style.display = 'none';
  _limitsModalId = null;
});

document.getElementById('limits-modal-save').addEventListener('click', () => {
  if (!_limitsModalId) return;
  const vd = VENDORS_DATA.find(v => v.id === _limitsModalId);
  const customLimits = FAVOR_LEVELS.map((_, i) => {
    const capEl  = document.querySelector(`.lm-cap[data-idx="${i}"]`);
    const poolEl = document.querySelector(`.lm-pool[data-idx="${i}"]`);
    const base = vd?.limits?.[i] ?? {c:null, p:null};
    const cv = capEl?.value !== '' ? parseFloat(capEl.value) : null;
    const pv = poolEl?.value !== '' ? parseFloat(poolEl.value) : null;
    return { c: (cv !== null && !isNaN(cv)) ? cv : base.c,
             p: (pv !== null && !isNaN(pv)) ? pv : base.p };
  });
  const isDefault = vd && customLimits.every((cl, i) => {
    const base = vd.limits?.[i] ?? {c:null,p:null};
    return cl.c === base.c && cl.p === base.p;
  });
  setVS(_limitsModalId, { customLimits: isDefault ? null : customLimits });
  document.getElementById('limits-modal').style.display = 'none';
  _limitsModalId = null;
  renderSelling();
});

document.getElementById('limits-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('limits-modal'))
    document.getElementById('limits-modal').style.display = 'none';
});

// ── CHANGELOG ────────────────────────────────────────────────────────
document.getElementById('btn-changelog').addEventListener('click', () => {
  document.getElementById('changelog-modal').style.display = 'flex';
});
document.getElementById('changelog-close').addEventListener('click', () => {
  document.getElementById('changelog-modal').style.display = 'none';
});
document.getElementById('changelog-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('changelog-modal'))
    document.getElementById('changelog-modal').style.display = 'none';
});

// ── INIT ──────────────────────────────────────────────────────────────
loadState();
document.getElementById('cap-mult').value = getCapMult();
autoResetExpiredTimers();
renderSelling();
