import { VENDORS_DATA, FAVOR_LEVELS, FAVOR_STEP, ITEM_TYPES, TYPE_ICON, REGION_ICON, REGION_ORDER } from './vendors.js';
import { getVS, getCapMult } from './state.js';
import { getTimerMs, fmtTimer, fmtNum } from './timers.js';

export const F = {
  itemType: 'all', favOnly: false, beastOnly: false, hideEmpty: false,
  sort: 'name', giftFavOnly: false, giftSearch: '', sellSearch: '',
};

export function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
}

export function getEffectiveBuyTypes(vd) {
  const s = getVS(vd.id);
  return s.buyTypes !== null ? s.buyTypes : vd.buyTypes;
}

export function rerender() {
  const activeTab = document.querySelector('.tab-btn.active')?.dataset.tab;
  if (activeTab === 'selling') renderSelling();
  else if (activeTab === 'gifting') renderGifting();
  else if (activeTab === 'manage') renderManage();
}

export function renderSelling() {
  const grid = document.getElementById('vendor-grid');
  let vendors = VENDORS_DATA.map(vd => {
    const s = getVS(vd.id);
    const bt = getEffectiveBuyTypes(vd);
    const baseLvl = vd.limits?.[s.favorLevel] ?? {c:null,p:null};
    const custLvl = s.customLimits?.[s.favorLevel];
    const lvl = custLvl
      ? { c: (custLvl.c !== null && custLvl.c !== undefined && custLvl.c !== '') ? Number(custLvl.c) : baseLvl.c,
          p: (custLvl.p !== null && custLvl.p !== undefined && custLvl.p !== '') ? Number(custLvl.p) : baseLvl.p }
      : baseLvl;
    const pool = lvl.p;
    const cash = s.cashRemaining;
    const displayCash = cash !== null ? cash : pool;

    if (F.sellSearch && !vd.name.toLowerCase().includes(F.sellSearch.toLowerCase())) return null;

    let typeMatch = null, reducedMatch = false;
    if (F.itemType !== 'all') {
      const entry = bt.find(b => b.t === F.itemType);
      if (!entry) return null;
      typeMatch = F.itemType;
      reducedMatch = entry.m < 100;
    }

    if (F.favOnly && !s.isFavorite) return null;
    if (F.beastOnly && !vd.beastSpeak) return null;
    const effectiveCash = cash !== null ? cash : pool;
    if (F.hideEmpty && effectiveCash !== null && effectiveCash <= 100) return null;

    return { vd, s, bt, lvl, pool, cash, displayCash, effectiveCash, typeMatch, reducedMatch };
  }).filter(Boolean);

  if (F.sort === 'name') {
    vendors.sort((a,b) => a.vd.name.localeCompare(b.vd.name));
  } else if (F.sort === 'location') {
    vendors.sort((a,b) => {
      const ai = REGION_ORDER.indexOf(a.vd.region);
      const bi = REGION_ORDER.indexOf(b.vd.region);
      const ri = (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
      return ri || a.vd.location.localeCompare(b.vd.location);
    });
  } else if (F.sort === 'cash') {
    vendors.sort((a,b) => {
      if (a.effectiveCash === null && b.effectiveCash === null) return 0;
      if (a.effectiveCash === null) return 1;
      if (b.effectiveCash === null) return -1;
      return b.effectiveCash - a.effectiveCash;
    });
  }

  if (F.itemType !== 'all') {
    vendors.sort((a,b) => (a.reducedMatch ? 1 : 0) - (b.reducedMatch ? 1 : 0));
  }

  if (!vendors.length) {
    grid.innerHTML = '<div class="no-vendors">No vendors match your filters.</div>';
    return;
  }

  grid.innerHTML = vendors.map(({ vd, s, bt, lvl, pool, cash, effectiveCash, reducedMatch }) => {
    const timerMs = getTimerMs(vd.id);
    const timerStr = fmtTimer(timerMs);
    const isSoldOut = effectiveCash !== null && effectiveCash <= 100;
    const flClass = `fl-${s.favorLevel}`;
    const ri = REGION_ICON[vd.region] || '📍';

    const typeTags = bt.length ? bt.map(b => {
      const cls = b.m < 100 ? 'type-tag reduced-tag' : 'type-tag';
      return `<span class="${cls}">${TYPE_ICON[b.t]||''} ${b.t}${b.m<100?' (!'+b.m+'%)':''}</span>`;
    }).join('') : `<span class="no-buy">Doesn't buy main item types</span>`;

    const capMult = getCapMult();
    const effectiveCap = lvl.c !== null ? Math.round(lvl.c * capMult / 100) : null;
    const capStr  = effectiveCap !== null ? fmtNum(effectiveCap) : '?';
    const poolStr = lvl.p !== null ? fmtNum(lvl.p) : '?';
    const cashVal = cash !== null ? cash : (lvl.p !== null ? lvl.p : '');
    const cashOfStr = lvl.p !== null ? `/ ${fmtNum(lvl.p)}` : '';

    let timerHtml = '';
    if (timerStr === null) {
      timerHtml = `<span class="timer-display timer-none">⏱ no timer</span>`;
    } else if (timerMs === 0) {
      timerHtml = `<span class="timer-display timer-done">${timerStr}</span>`;
    } else {
      timerHtml = `<span class="timer-display timer-active">⏱ ${timerStr}</span>`;
    }

    return `<div class="vendor-card${s.isFavorite?' is-favorite':''}${isSoldOut?' sold-out':''}${reducedMatch?' reduced':''}" data-id="${vd.id}">
      <div class="vc-head">
        <button class="fav-star${s.isFavorite?' on':''}" data-action="fav" data-id="${vd.id}" title="Toggle favorite">★</button>
        <span class="vc-name">${vd.name}</span>
        <span class="vc-region">${ri} ${vd.region}</span>
        <div class="favor-ctrl">
          <button class="favor-btn" data-action="fav-dn" data-id="${vd.id}" title="Lower favor">▼</button>
          <span class="favor-badge ${flClass}">${FAVOR_LEVELS[s.favorLevel]}</span>
          <button class="favor-btn" data-action="fav-up" data-id="${vd.id}" title="Raise favor">▲</button>
        </div>
      </div>
      <div class="vc-meta">
        <span class="vc-location">📍 ${vd.location}</span>
        <span class="beast-badge ${vd.beastSpeak?'beast-yes':'beast-no'}">${vd.beastSpeak?'🐾 Beast Speech':'✗ Beast Speech'}</span>
      </div>
      <div class="vc-types">${typeTags}</div>
      <div class="vc-limits">
        <span class="limit-item"><span class="ll">Item Cap: </span><span class="lv">${capStr}</span></span>
        <span class="limit-item"><span class="ll">Pool: </span><span class="lv">${poolStr}</span></span>
        ${reducedMatch ? '<span class="warn-tag">⚠ REDUCED PRICE</span>' : ''}
      </div>
      <div class="vc-cash">
        <span class="cash-label">Cash left:</span>
        <input class="cash-input" type="number" data-id="${vd.id}" value="${cashVal}" placeholder="—" min="0">
        <span class="cash-of">${cashOfStr}</span>
        ${timerHtml}
      </div>
    </div>`;
  }).join('');
}

export function renderGifting() {
  const grid = document.getElementById('gift-grid');
  const search = F.giftSearch.toLowerCase();

  const vendors = VENDORS_DATA.filter(vd => {
    const s = getVS(vd.id);
    if (F.giftFavOnly && !s.isFavorite) return false;
    if (search && !vd.name.toLowerCase().includes(search)) return false;
    return true;
  });

  if (!vendors.length) {
    grid.innerHTML = '<div class="no-vendors">No NPCs match. Try a different search or toggle favorites off.</div>';
    return;
  }

  grid.innerHTML = vendors.map(vd => {
    const s = getVS(vd.id);
    const fl = s.favorLevel;
    const ri = REGION_ICON[vd.region] || '📍';

    const talkHtml = [
      vd.loves.length ? `<div><span class="talk-label">LOVES</span><span class="talk-loves">${vd.loves.join(', ')}</span></div>` : '',
      vd.likes.length ? `<div><span class="talk-label">LIKES</span><span class="talk-likes">${vd.likes.join(', ')}</span></div>` : '',
      vd.hates.length ? `<div><span class="talk-label">HATES</span><span class="talk-hates">${vd.hates.join(', ')}</span></div>` : '',
    ].filter(Boolean).join('');

    const toNext = fl < 6 ? FAVOR_STEP[fl] : null;
    const toSM   = fl < 6 ? FAVOR_STEP.slice(fl).reduce((a,b)=>a+b,0) : null;

    const tableRows = (s.giftTable || []).map((row, i) => {
      const val = parseFloat(row.value) || 0;
      let nextCell = '—', smCell = '—';
      if (val > 0 && toNext !== null) nextCell = Math.ceil(toNext / val).toLocaleString();
      if (val > 0 && toSM !== null)   smCell   = Math.ceil(toSM   / val).toLocaleString();
      return `<tr data-vid="${vd.id}" data-idx="${i}">
        <td><input class="gi-name" data-vid="${vd.id}" data-idx="${i}" data-field="name" value="${esc(row.name||'')}" placeholder="Item name…"></td>
        <td><input class="gi-val" data-vid="${vd.id}" data-idx="${i}" data-field="value" type="number" value="${row.value||''}" placeholder="0"></td>
        <td class="gi-calc">${nextCell}</td>
        <td class="gi-calc">${smCell}</td>
        <td><button class="gi-del" data-vid="${vd.id}" data-idx="${i}" title="Remove">✕</button></td>
      </tr>`;
    }).join('');

    const nextStr = toNext !== null ? `Next (${FAVOR_LEVELS[fl+1]}): ${fmtNum(toNext)} favor` : 'Soul Mates reached';
    const smStr   = toSM   !== null ? `Soul Mates: ${fmtNum(toSM)} favor total` : '';

    return `<div class="gift-card${s.isFavorite?' is-favorite':''}" data-id="${vd.id}">
      <div class="gc-head">
        <button class="fav-star${s.isFavorite?' on':''}" data-action="fav" data-id="${vd.id}">★</button>
        <span class="gc-name">${vd.name}</span>
        <span class="favor-badge fl-${fl}" style="font-size:0.6rem">${FAVOR_LEVELS[fl]}</span>
        <span class="gc-region">${ri} ${vd.region}</span>
      </div>
      ${talkHtml ? `<div class="gc-talk">${talkHtml}</div>` : ''}
      <details class="gift-details">
        <summary>Gift Table <span class="favor-at">${nextStr}${smStr?' · '+smStr:''}</span></summary>
        <div class="gift-table-wrap">
          <table class="gift-table">
            <thead><tr>
              <th>Item</th><th>Favor</th>
              <th class="num" title="Items for next level">→Next</th>
              <th class="num" title="Items for Soul Mates">→SM</th>
              <th></th>
            </tr></thead>
            <tbody>${tableRows}</tbody>
          </table>
          <button class="btn-add-gift" data-vid="${vd.id}">+ Add Item</button>
          ${s.giftTable.length > 0 ? `<div class="gift-note">Estimates assume 0 favor within current level (${FAVOR_LEVELS[fl]}).</div>` : ''}
        </div>
      </details>
    </div>`;
  }).join('');
}

export function renderManage() {
  const list = document.getElementById('manage-list');
  list.innerHTML = VENDORS_DATA.map(vd => {
    const s = getVS(vd.id);
    const bt = getEffectiveBuyTypes(vd);
    const rows = bt.map((b,i) => `<tr>
      <td class="bt-type">${TYPE_ICON[b.t]||''} ${b.t}</td>
      <td><input class="bt-mult-input" type="number" min="0" max="200" data-id="${vd.id}" data-idx="${i}" value="${b.m}"> %</td>
      <td><button class="bt-del" data-id="${vd.id}" data-idx="${i}">✕</button></td>
    </tr>`).join('');

    const typeOpts = ITEM_TYPES.map(t => `<option value="${t}">${TYPE_ICON[t]||''} ${t}</option>`).join('');

    return `<details class="mv-detail">
      <summary>
        <span class="mv-name">${vd.name}</span>
        <span class="mv-region-tag">${vd.region} — ${vd.location}</span>
        ${vd.beastSpeak?'<span class="beast-badge beast-yes" style="font-size:0.6rem">🐾</span>':''}
      </summary>
      <div class="mv-content">
        <table class="buy-types-table">
          <thead><tr><th>Item Type</th><th>Multiplier</th><th></th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
        <div class="add-type-row">
          <select class="ctrl-select" id="addtype-sel-${vd.id}" style="font-size:0.8rem;padding:4px 8px">${typeOpts}</select>
          <button class="btn-add-type" data-id="${vd.id}">+ Add Type</button>
          ${s.buyTypes !== null ? `<button class="ctrl-btn" data-action="reset-bt" data-id="${vd.id}" style="font-size:0.65rem">Reset to Wiki</button>` : ''}
          <button class="ctrl-btn btn-modify-limits" data-action="limits-cfg" data-id="${vd.id}" style="margin-left:auto;font-size:0.65rem">⚙️ Modify Limits</button>
        </div>
      </div>
    </details>`;
  }).join('');
}
