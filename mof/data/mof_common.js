/* 中台共用侧栏与组件 */
const MOF_SIDEBAR = `
<div class="sidebar">
  <div class="logo"><span class="logo-dot"></span>金马证券业务中台</div>
  <div class="nav-menu">
    <div class="nav-item"><span>🏠</span> 首页</div>
    <div class="nav-group open">
      <div class="nav-item nav-parent"><span>📦 产品中心</span><span class="nav-arrow">›</span></div>
      <div class="nav-sub">
        <div class="nav-item nav-parent muted"><span>📊 基金旧</span><span class="nav-arrow">›</span></div>
        <div class="nav-item nav-parent active-group"><span>🆕 基金新</span><span class="nav-arrow open">›</span></div>
        <div class="nav-sub">
          <div class="nav-item active" data-page="list" onclick="location.href='Fund_Product_Library_List.html'">产品库</div>
        </div>
        <div class="nav-item nav-parent muted"><span>📈 债券</span></div>
        <div class="nav-item nav-parent"><span>🏛️ 发行商管理</span><span class="nav-arrow">›</span></div>
        <div class="nav-sub">
          <div class="nav-item" onclick="location.href='Issuer_Fund_House_List.html'">基金</div>
        </div>
      </div>
    </div>
    <div class="nav-group">
      <div class="nav-item nav-parent"><span>⚙️ 平台设置</span><span class="nav-arrow">›</span></div>
      <div class="nav-sub">
        <div class="nav-item nav-parent"><span>运营配置</span><span class="nav-arrow open">›</span></div>
        <div class="nav-sub">
          <div class="nav-item" data-page="banner" onclick="location.href='Ops_Banner_Config.html'">活动配置</div>
        </div>
      </div>
    </div>
  </div>
</div>`;

const STATUS_MAP = typeof PRODUCT_STATUS_MAP !== 'undefined' ? PRODUCT_STATUS_MAP : {
  LISTED: { label: '已上架', cls: 'badge-listed' },
  DELISTED: { label: '已下架', cls: 'badge-delisted' },
  PAUSED: { label: '暂停', cls: 'badge-paused' }
};

function mofShowToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(mofShowToast._t);
  mofShowToast._t = setTimeout(() => t.classList.remove('show'), 2500);
}

function mofConfirm(msg, onOk) {
  if (confirm(msg)) onOk();
}
