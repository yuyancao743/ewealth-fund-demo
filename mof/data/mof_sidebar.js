/* 中台产品中心 — 共用侧栏 */
function mofSidebarHtml(activePage) {
  const a = (page, label, href, indent) => {
    const cls = activePage === page ? 'nav-item active' : 'nav-item';
    const pad = indent ? ` style="padding-left:${indent}px"` : '';
    return `<div class="${cls}"${pad} onclick="location.href='${href}'">${label}</div>`;
  };
  const parent = (label, icon, muted) =>
    `<div class="nav-item nav-parent${muted ? ' muted' : ''}">${icon} ${label} <span style="opacity:.5">›</span></div>`;
  return `
<div class="sidebar">
  <div class="logo"><span class="logo-dot"></span>金马证券业务中台</div>
  <div class="nav-menu">
    <div class="nav-item">🏠 首页</div>
    <div class="nav-sub">
      ${parent('产品中心', '📦')}
      <div class="nav-sub">
        ${parent('基金旧', '📊', true)}
        ${parent('基金新', '🆕')}
        <div class="nav-sub">${a('product-list', '产品库', 'Fund_Product_Library_List.html', 48)}</div>
        ${parent('债券', '📈', true)}
        ${parent('发行商管理', '🏛️')}
        <div class="nav-sub">${a('issuer-fund', '基金', 'Issuer_Fund_House_List.html', 48)}</div>
      </div>
    </div>
    <div class="nav-sub" style="margin-top:8px">
      ${parent('平台设置', '⚙️')}
      <div class="nav-sub">
        ${parent('运营配置', '📢')}
        <div class="nav-sub">${a('banner', '活动配置', 'Ops_Banner_Config.html', 48)}</div>
      </div>
    </div>
  </div>
</div>`;
}

function mofPaginationHtml(total, current, pageSize, totalPages) {
  const pages = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (current > 4) pages.push('...');
    const start = Math.max(2, current - 2);
    const end = Math.min(totalPages - 1, current + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    if (current < totalPages - 3) pages.push('...');
    pages.push(totalPages);
  }
  return `
    <span class="pagination-info">共 ${total} 条记录　第 ${current} / ${totalPages} 页</span>
    <div class="page-btns">
      <button type="button" class="page-btn" onclick="goPage(${current - 1})" ${current <= 1 ? 'disabled' : ''}>&lt;</button>
      ${pages.map(p => p === '...'
        ? `<span class="page-btn ellipsis">…</span>`
        : `<button type="button" class="page-btn ${p === current ? 'active' : ''}" onclick="goPage(${p})">${p}</button>`
      ).join('')}
      <button type="button" class="page-btn" onclick="goPage(${current + 1})" ${current >= totalPages ? 'disabled' : ''}>&gt;</button>
    </div>
    <select class="page-size-select" onchange="changePageSize(this.value)">
      ${[10, 20, 50].map(n => `<option value="${n}" ${pageSize === n ? 'selected' : ''}>${n} 条/页</option>`).join('')}
    </select>
    <div class="page-jump">
      <span>前往</span>
      <input type="number" id="jumpPageInput" min="1" max="${totalPages}" value="${current}">
      <span>页</span>
      <button type="button" class="page-btn" onclick="jumpToPage()">确定</button>
    </div>`;
}
