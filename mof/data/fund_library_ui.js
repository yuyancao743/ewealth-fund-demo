/* 基金产品库 — 中台页面共用逻辑 */
const RISK_PROFILES = { C1: '保守型', C2: '中度保守型', C3: '平衡型', C4: '中度进取型', C5: '进取型' };

function fmtPct(v) {
  if (v == null || v === '—') return '—';
  return (v >= 0 ? '+' : '') + Number(v).toFixed(2) + '%';
}

function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'toast show' + (type === 'error' ? ' error' : '');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.remove('show'), 2500);
}

let selectedShareIdx = 0;
let uploadedDocs = [];

function renderShareClassTable(shareClasses, readonly) {
  const tbody = document.getElementById('shareClassBody');
  if (!tbody) return;
  tbody.innerHTML = shareClasses.map((sc, i) => `
    <tr class="share-row ${i === selectedShareIdx ? 'selected' : ''}" data-idx="${i}" onclick="selectShareClass(${i})">
      <td>${sc.share_class_code}类</td>
      <td>${sc.ccy}</td>
      <td>${sc.dividend_class === 'R' ? '派息' : '累积'}</td>
      <td><code>${sc.product_code}</code></td>
      <td>${sc.management_fee}%</td>
      <td>${sc.is_default_shelf ? '<span class="tag-default">默认货架</span>' : '—'}</td>
      ${readonly ? '' : `<td><button type="button" class="btn-link" onclick="event.stopPropagation();setDefaultShelf(${i})">设为默认</button></td>`}
    </tr>`).join('');
  renderShareDetail(shareClasses[selectedShareIdx]);
}

function selectShareClass(idx) {
  selectedShareIdx = idx;
  const rows = document.querySelectorAll('.share-row');
  rows.forEach((r, i) => r.classList.toggle('selected', i === idx));
  const sc = (window._currentShareClasses || [])[idx];
  if (sc) renderShareDetail(sc);
}

function setDefaultShelf(idx) {
  const scs = window._currentShareClasses;
  if (!scs) return;
  scs.forEach((s, i) => { s.is_default_shelf = i === idx; });
  renderShareClassTable(scs, false);
  showToast('已更新默认货架份额');
}

function renderShareDetail(sc) {
  if (!sc) return;
  const el = document.getElementById('shareDetailPanel');
  if (!el) return;
  const annual = sc.annual_returns
    ? Object.entries(sc.annual_returns).map(([y, v]) => `${y}: ${v}%`).join(' · ')
    : '暂无数据';
  el.innerHTML = `
    <div class="share-detail-title">${sc.share_class_label} · ${sc.product_code}</div>
    <div class="form-row">
      <div class="form-item"><label class="form-label">product_id</label><input class="form-input" disabled value="${sc.product_id}"></div>
      <div class="form-item"><label class="form-label">broker_id</label><input class="form-input" disabled value="${sc.broker_id}"></div>
      <div class="form-item"><label class="form-label">fund_inv_risk_level</label><input class="form-input" disabled value="${sc.fund_inv_risk_level}"></div>
    </div>
    <div class="form-row">
      <div class="form-item"><label class="form-label">资产净值 nav</label><input class="form-input" disabled value="${sc.nav ?? '—'} ${sc.nav_date && sc.nav ? '/ ' + sc.nav_date : ''}"></div>
      <div class="form-item"><label class="form-label">YTD 收益回报</label><input class="form-input" disabled value="${fmtPct(sc.ytd_return)}"></div>
      <div class="form-item"><label class="form-label">1Y 收益回报</label><input class="form-input" disabled value="${fmtPct(sc.one_year_return)}"></div>
    </div>
    <div class="form-row">
      <div class="form-item"><label class="form-label">3Y 收益回报</label><input class="form-input" disabled value="${fmtPct(sc.three_year_return)}"></div>
      <div class="form-item"><label class="form-label">累计收益回报</label><input class="form-input" disabled value="${fmtPct(sc.cumulative_return)}"></div>
      <div class="form-item"><label class="form-label">管理费率</label><input class="form-input" disabled value="${sc.management_fee}%"></div>
    </div>
    <div class="form-row">
      <div class="form-item"><label class="form-label">最低首次申购</label><input class="form-input" disabled value="${sc.ccy} ${sc.min_sub_initamount}"></div>
      <div class="form-item"><label class="form-label">最低追加申购</label><input class="form-input" disabled value="${sc.ccy} ${sc.min_sub_amount}"></div>
      <div class="form-item"><label class="form-label">认购费</label><input class="form-input" disabled value="${sc.subscription_fee}"></div>
    </div>
    <div class="form-row one">
      <div class="form-item"><label class="form-label">年度收益回报</label><input class="form-input" disabled value="${annual}"></div>
    </div>
    <div class="form-row one">
      <div class="form-item"><label class="form-label">月度收益回报</label><input class="form-input" disabled value="暂无数据"></div>
    </div>`;
}

function renderScrapedDocs(docs) {
  const el = document.getElementById('scrapedDocsList');
  if (!el) return;
  el.innerHTML = docs.length ? docs.map(d => `
    <div class="doc-row">
      <span class="doc-type">${d.doc_type}</span>
      <a href="${d.doc_url}" target="_blank" rel="noopener">${d.doc_name}</a>
      <span class="doc-badge scraped">官网抓取</span>
    </div>`).join('') : '<div class="empty-hint">暂无抓取文件</div>';
}

function renderUploadedDocs() {
  const el = document.getElementById('uploadedDocsList');
  if (!el) return;
  el.innerHTML = uploadedDocs.length ? uploadedDocs.map((d, i) => `
    <div class="doc-row">
      <span class="doc-type">${d.doc_type || '其他'}</span>
      <span>${d.file_name}</span>
      <span class="doc-remark">${d.remarks || ''}</span>
      <button type="button" class="btn-link danger" onclick="removeUploadedDoc(${i})">删除</button>
    </div>`).join('') : '<div class="empty-hint">暂无上传文件，点击下方按钮添加</div>';
}

function handleFileUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const type = document.getElementById('uploadDocType')?.value || '其他';
  const remark = document.getElementById('uploadDocRemark')?.value || '';
  uploadedDocs.push({ file_name: file.name, doc_type: type, remarks: remark, uploaded_at: new Date().toISOString().slice(0, 10) });
  input.value = '';
  if (document.getElementById('uploadDocRemark')) document.getElementById('uploadDocRemark').value = '';
  renderUploadedDocs();
  showToast('文件已添加（原型模拟）');
}

function removeUploadedDoc(idx) {
  uploadedDocs.splice(idx, 1);
  renderUploadedDocs();
}

function fillFundForm(data, readonly) {
  const fields = [
    'product_name_en', 'product_name_zh', 'fund_internal_code', 'fund_house_name',
    'fund_strategy', 'investment_objective', 'product_website', 'launch_date',
    'fund_manager', 'trustee', 'fiscal_year_end', 'performance_fee',
    'listing_status', 'fund_category', 'display_order', 'product_description',
    'investor_risk_profile', 'risk_rating', 'risk_rating_note', 'supplementary_info',
    'order_contact_name', 'order_contact_phone', 'order_contact_email', 'order_contact_remark',
    'payment_bank_name', 'payment_bank_account', 'payment_bank_swift', 'payment_bank_remark',
    'internal_remarks', 'as_of_date'
  ];
  fields.forEach(k => {
    const el = document.getElementById(k);
    if (el) {
      el.value = data[k] ?? '';
      if (readonly) el.disabled = true;
    }
  });
  const feat = document.getElementById('is_featured');
  if (feat) {
    feat.checked = !!data.is_featured;
    if (readonly) feat.disabled = true;
  }
  window._currentShareClasses = data.share_classes || [];
  selectedShareIdx = window._currentShareClasses.findIndex(s => s.is_default_shelf);
  if (selectedShareIdx < 0) selectedShareIdx = 0;
  renderShareClassTable(window._currentShareClasses, readonly);
  renderScrapedDocs(data.documents_scraped || []);
  uploadedDocs = [...(data.documents_uploaded || [])];
  renderUploadedDocs();
  const scrapeTime = document.getElementById('lastScrapeTime');
  if (scrapeTime) scrapeTime.textContent = data.as_of_date ? data.as_of_date + ' 08:00' : '—';
}

function triggerRescrape() {
  showToast('正在重新抓取官网公开数据…');
  setTimeout(() => {
    if (typeof PINGAN_PAMMF !== 'undefined') fillFundForm(PINGAN_PAMMF, false);
    showToast('官网数据抓取完成');
  }, 1200);
}

function triggerAyersSync() {
  showToast('正在触发 Ayers 同步…');
  setTimeout(() => showToast('Ayers 同步完成'), 1200);
}
