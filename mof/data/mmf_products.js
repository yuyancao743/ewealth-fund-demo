/* MMF 基金产品库 — 中台 / eWealth 原型共用数据 */
const RISK_LEVELS = {
  1: '低风险', 2: '中低风险', 3: '中等风险', 4: '中高风险', 5: '高风险'
};
const DIVIDEND_TYPES = ['累积型', '分配型', '混合型'];
const PRODUCT_STATUS_MAP = {
  LISTED: { label: '已上架', cls: 'badge-listed' },
  DELISTED: { label: '已下架', cls: 'badge-delisted' },
  PAUSED: { label: '暂停', cls: 'badge-paused' }
};
const DEFAULT_SYNC_STATUS = 'DELISTED';
const INVESTOR_RESTRICTION_MAP = {
  PI_ONLY: '仅PI',
  ALL: '全部'
};

const FUND_CATEGORY_TYPES = [
  { id: '', label: '空' },
  { id: 'HEDGE', label: '对冲基金' },
  { id: 'MMF', label: '货币基金' },
  { id: 'BOND', label: '债券基金' },
  { id: 'PRIVATE_FUND', label: '私募基金' },
  { id: 'PRIVATE_CREDIT', label: '私募信贷基金' },
  { id: 'AMC', label: 'AMC' }
];

const SUBSCRIPTION_STATUS_OPTIONS = [
  { id: '', label: '空', labelZh: '—' },
  { id: 'open', label: 'Open', labelZh: '开放' },
  { id: 'hard closed', label: 'Hard closed', labelZh: '硬关闭' },
  { id: 'soft closed', label: 'Soft closed', labelZh: '软关闭' },
  { id: 'limited capacity', label: 'Limited capacity', labelZh: '额度有限' }
];

const DOC_LANGUAGES = [
  { id: 'en', label: '英文' },
  { id: 'zh-CN', label: '简体中文' },
  { id: 'zh-TW', label: '繁体中文' }
];

const DOC_CATEGORIES = [
  { id: 'legal', label: 'Legal Documents', labelZh: '法律文件' },
  { id: 'fund_reporting', label: 'Fund reporting', labelZh: '基金报告' },
  { id: 'presentations', label: 'Presentations', labelZh: '路演材料' },
  { id: 'research', label: 'research Documents', labelZh: '投研报告' },
  { id: 'others', label: 'others', labelZh: '其他' }
];

const DOC_LANG_FALLBACK = ['en', 'zh-CN', 'zh-TW'];

function emptyFundDocuments() {
  const emptyLang = () => ({ en: [], 'zh-CN': [], 'zh-TW': [] });
  const o = {};
  DOC_CATEGORIES.forEach(c => { o[c.id] = emptyLang(); });
  return o;
}

function getFundDocsForUi(fund, uiLang) {
  const docs = fund?.fund_documents || emptyFundDocuments();
  const order = uiLang === 'en' ? ['en', 'zh-CN', 'zh-TW']
    : uiLang === 'zh-TW' ? ['zh-TW', 'zh-CN', 'en']
    : ['en', 'zh-CN', 'zh-TW'];
  const pick = (catId) => {
    const byLang = docs[catId] || {};
    for (const lang of order) {
      if (byLang[lang]?.length) return byLang[lang];
    }
    for (const lang of DOC_LANG_FALLBACK) {
      if (byLang[lang]?.length) return byLang[lang];
    }
    return [];
  };
  const out = {};
  DOC_CATEGORIES.forEach(c => { out[c.id] = pick(c.id); });
  return out;
}

function fundCategoryTypeLabel(id) {
  if (!id) return '—';
  const hit = FUND_CATEGORY_TYPES.find(x => x.id === id);
  if (hit) return hit.label;
  return id;
}

function subscriptionStatusLabel(id) {
  if (!id) return '—';
  const hit = SUBSCRIPTION_STATUS_OPTIONS.find(x => x.id === id);
  return hit ? hit.label : id;
}

function subscriptionStatusLabelZh(id) {
  if (!id) return '—';
  const hit = SUBSCRIPTION_STATUS_OPTIONS.find(x => x.id === id);
  return hit?.labelZh || hit?.label || id;
}

function hasCumulativePerf(p) {
  if (!p) return false;
  return ['m1', 'm3', 'm6', 'ytd', 'y1', 'y3'].some(k => p[k] != null && p[k] !== '');
}

function hasMonthlyPerf(p, year) {
  const monthly = p?.monthly || {};
  const y = year || new Date().getFullYear();
  return Array.from({ length: 12 }, (_, i) => `${y}-${String(i + 1).padStart(2, '0')}`)
    .some(k => monthly[k] != null && monthly[k] !== '');
}

function formatFiscalMd(val) {
  if (!val) return '';
  if (/^\d{1,2}月\d{1,2}日$/.test(val)) return val;
  const m = String(val).match(/(\d{1,2})月(\d{1,2})日/);
  if (m) return `${Number(m[1])}月${Number(m[2])}日`;
  const d = new Date(val);
  if (!Number.isNaN(d.getTime())) return `${d.getMonth() + 1}月${d.getDate()}日`;
  return val;
}

function investorRestrictionLabel(code) {
  return INVESTOR_RESTRICTION_MAP[code] || '—';
}

function isTradeDisabled(fund) {
  return !!(fund && fund.product_status === 'PAUSED');
}
const SUBSCRIBE_HOTLINE = '+852 2153 3838';
const SUBSCRIBE_HOTLINE_TEL = 'tel:+85221533838';

const EWEALTH_BANNERS = [
  { id: 1, title: '精选货币基金', subtitle: '稳健收益，灵活申赎，低至 USD 1 起投', position: 'ewealthhub-产品甄选-基金产品banner位', sort: 1, status: 'ACTIVE', valid_from: '2026-01-01 00:00', valid_to: '2026-12-31 23:59', gradient: 'linear-gradient(135deg,#1e3a5f,#2563eb)' },
  { id: 2, title: '平安货币基金上新', subtitle: 'I类美元份额 · 官网业绩同步', position: 'ewealthhub-产品甄选-基金产品banner位', sort: 2, status: 'ACTIVE', valid_from: '2026-06-01 00:00', valid_to: '2026-12-31 23:59', gradient: 'linear-gradient(135deg,#0f766e,#14b8a6)' },
  { id: 3, title: '泰康系列货基', subtitle: '美元 / 港元双币种可选', position: 'ewealthhub-产品甄选-基金产品banner位', sort: 3, status: 'INACTIVE', valid_from: '2025-01-01 00:00', valid_to: '2025-12-31 23:59', gradient: 'linear-gradient(135deg,#7c3aed,#a78bfa)' }
];

function perf(m1, m3, m6, ytd, y1, y3, rsi, mtd, annual, monthly) {
  return { m1, m3, m6, ytd, y1, y3, rsi, mtd, annual: annual || {}, monthly: monthly || {} };
}

function demoMonthlyForYear(year, base) {
  const o = {};
  const b = base ?? 0.2;
  for (let i = 1; i <= 12; i++) {
    o[`${year}-${String(i).padStart(2, '0')}`] = +(b + (i - 1) * 0.01).toFixed(2);
  }
  return o;
}

function riskLabel(level) {
  const n = Number(level);
  return RISK_LEVELS[n] || '—';
}

function defaultSubscribe(f) {
  const ccy = f.base_ccy || 'USD';
  const min = f.min_sub_initamount ?? 1000;
  const inc = min >= 10000 ? 1000 : min >= 1000 ? 100 : 1;
  const redMin = min >= 10000 ? 1000 : min;
  return {
    min_amount: `${ccy} ${min.toLocaleString()}`,
    increment_amount: `${ccy} ${inc.toLocaleString()}`,
    subscription_fee_pct: min <= 1 ? '0.05' : '0.10',
    confirm_date: 'T+1',
    open_period: '每日开放',
    lock_period: '无',
    redemption_fee_pct: '0',
    redemption_threshold: `最低赎回金额: ${ccy} ${redMin.toLocaleString()}`,
    redemption_open_day: '每日开放',
    redemption_notice_days: '交易日15:00前',
    management_fee_pct: '0.30',
    remark: ''
  };
}

function defaultFundDocuments(f) {
  const d = emptyFundDocuments();
  const mk = (name, url = '#') => ({ doc_name: name, doc_url: url });
  const house = (f.fund_house_name || '').replace(/有限公司/g, '').slice(0, 8);
  d.legal['zh-CN'] = [
    mk(`${house || '基金'}说明书`),
    mk('产品资料概要')
  ];
  d.fund_reporting['zh-CN'] = [
    mk('2025年度报告'),
    mk('2025中期报告')
  ];
  d.presentations['zh-CN'] = [mk('路演材料')];
  d.research['zh-CN'] = [mk('投研报告摘要')];
  d.others['zh-CN'] = [mk('基金月报')];
  return d;
}

const MMF_PRODUCTS = [
  {
    fund_internal_code: 'PACSIF-PAMMF', product_code: 'HK0000720752', default_isin: 'HK0000720752',
    product_name: '中国平安精选投资基金系列 - 平安货币基金',
    product_name_en: 'Ping An Selection Investment Fund Series - Ping An Money Market Fund',
    fund_house_name: '中国平安资产管理（香港）有限公司', fund_house_id: 'PINGAN',
    fund_managers: '中國平安資產管理（香港）有限公司',
    fund_manager_desc: '具备多年货币市场及固定收益投资管理经验，专注于流动性管理与风险控制。',
    fund_objective: '透过投资于短期存款及优质货币市场工具，在保持资本稳定及高流动性的前提下，为投资者提供具竞争力的回报。',
    strategy: '主要投资美元短期存款及优质货币市场工具',
    fund_inv_risk_level: 1, product_status: 'LISTED', investor_restriction: 'ALL',
    fund_category: 'MMF', fund_category_type: 'MMF', subscription_status: 'open',
    price_spread_code: '—', base_ccy: 'USD',
    share_class_label: 'I类', dividend_type: '累积型', exchange_code: '', is_allow_intra_switch: false, qty_decimal: 4,
    fiscal_year_end: '6月30日',
    min_sub_initamount: 1, as_of_date: '2026-07-02', share_class_count: 18,
    is_featured: true, display_order: 1,
    product_tags: ['非衍生产品基金', '香港注册基金', '货币市场基金'],
    perf: perf(0.31, 0.96, 1.92, 1.94, 4.17, 15.71, 21.66, 0.31, { 2021: 0.30, 2022: 2.08, 2023: 5.60, 2024: 5.59, 2025: 4.54 }, demoMonthlyForYear(2026, 0.25)),
    nav: 121.6606, nav_date: '2026-07-02', fund_size: '4,208.9 百万美元 (30/06/2026)',
    updated_by: '张运营', updated_at: '2026-07-01',
    product_id: 'FUND:HK0000720752', broker_id: 'CIS-KGI', broker_name: 'CIS-KGI',
    launch_date: '2021-03-30', trustee: '中银国际英国保诚信托有限公司',
    subscribe: {
      min_amount: 'USD 1', increment_amount: 'USD 1', subscription_fee_pct: '0.05',
      confirm_date: '每日', open_period: '每日开放', lock_period: '无',
      redemption_fee_pct: '0', redemption_threshold: '最低赎回金额: USD 1',
      redemption_open_day: '每日开放', redemption_notice_days: '交易日上午10时整前',
      management_fee_pct: '0.30', remark: ''
    },
    fund_documents: (() => {
      const d = emptyFundDocuments();
      const mk = (name, url) => ({ doc_name: name, doc_url: url });
      d.legal['zh-CN'] = [mk('说明书', 'https://asset.pingan.com.hk/zh-hk/PACSIF-PAMMF/HK-Explanatory-Memorandum-TC.pdf')];
      d.legal.en = [mk('Explanatory Memorandum', 'https://asset.pingan.com.hk/zh-hk/PACSIF-PAMMF/HK-Explanatory-Memorandum-EN.pdf')];
      d.fund_reporting['zh-CN'] = [
        mk('年度报告', 'https://asset.pingan.com.hk/zh-hk/PACSIF-PAMMF/Annual-Report-TC.pdf'),
        mk('中期报告', 'https://asset.pingan.com.hk/zh-hk/PACSIF-PAMMF/Interim-Report-TC.pdf')
      ];
      d.fund_reporting.en = [mk('Annual Report', 'https://asset.pingan.com.hk/zh-hk/PACSIF-PAMMF/Annual-Report-EN.pdf')];
      d.others['zh-CN'] = [mk('基金月报', 'https://asset.pingan.com.hk/zh-hk/PACSIF-PAMMF/FFS-Ping-An-Money-Market-Fund-TC.pdf')];
      return d;
    })(),
    last_scrape_at: '2026-07-08 14:30'
  },
  {
    fund_internal_code: 'TK-USD-MMF', product_code: 'HK0000654321', default_isin: 'HK0000654321',
    product_name: '泰康开泰美元货币基金', product_name_en: 'Taikang Kaitai US Dollar Money Market Fund',
    fund_house_name: '泰康资产管理', fund_house_id: 'TAIKANG', fund_managers: '泰康资产管理',
    strategy: '投资于优质美元货币市场工具', fund_inv_risk_level: 1, product_status: 'LISTED', investor_restriction: 'ALL',
    fund_category: 'MMF', base_ccy: 'USD', share_class_label: 'A类', dividend_type: '累积型',
    exchange_code: '', is_allow_intra_switch: false, qty_decimal: 4, fiscal_year_end: '十二月三十一日',
    min_sub_initamount: 1000, as_of_date: '2026-06-28', share_class_count: 1, is_featured: true, display_order: 2,
    product_tags: ['货币市场基金'],
    perf: perf(0.28, 0.82, 1.65, 1.72, 3.85, 14.20, 18.50, 0.25, { 2021: 0.25, 2022: 1.85, 2023: 4.80, 2024: 4.75, 2025: 3.90 }),
    nav: 1.0842, nav_date: '2026-06-28', fund_size: '1,200 百万美元',
    updated_by: '李运营', updated_at: '2026-06-28',
    product_id: 'FUND:HK0000654321', broker_id: 'CIS-KGI', broker_name: 'CIS-KGI',
    launch_date: '2019-05-10', trustee: '汇丰信托'
  },
  {
    fund_internal_code: 'TK-HKD-MMF', product_code: 'HK0000288743', default_isin: 'HK0000288743',
    product_name: '泰康开泰港元货币基金', product_name_en: 'Taikang Kaitai Hong Kong Dollar Money Market Fund',
    fund_house_name: '泰康资产管理', fund_house_id: 'TAIKANG', fund_managers: '泰康资产管理',
    strategy: '投资于港元短期存款及货币市场工具', fund_inv_risk_level: 1, product_status: 'LISTED', investor_restriction: 'PI_ONLY',
    fund_category: 'MMF', base_ccy: 'HKD', share_class_label: 'A类', dividend_type: '分配型',
    exchange_code: '', is_allow_intra_switch: false, qty_decimal: 4, fiscal_year_end: '十二月三十一日',
    min_sub_initamount: 10000, as_of_date: '2026-06-27', share_class_count: 1, is_featured: true, display_order: 3,
    product_tags: ['货币市场基金'],
    perf: perf(0.22, 0.68, 1.35, 1.40, 3.20, 12.80, 16.20, 0.20, { 2021: 0.18, 2022: 1.55, 2023: 4.20, 2024: 4.15, 2025: 3.40 }),
    nav: 10.2847, nav_date: '2026-06-27', fund_size: '800 百万港元',
    updated_by: '李运营', updated_at: '2026-06-27',
    product_id: 'FUND:HK0000288743', broker_id: 'CIS-KGI', broker_name: 'CIS-KGI',
    launch_date: '2018-08-15', trustee: '汇丰信托'
  },
  {
    fund_internal_code: 'GF-USD-MMF', product_code: 'HK0000789012', default_isin: 'HK0000789012',
    product_name: '广发美元货币市场基金', product_name_en: 'GF USD Money Market Fund',
    fund_house_name: '广发基金', fund_house_id: 'GF', fund_managers: '广发基金',
    strategy: '美元货币市场基金策略', fund_inv_risk_level: 1, product_status: 'LISTED', investor_restriction: 'ALL',
    fund_category: 'MMF', base_ccy: 'USD', share_class_label: 'A类', dividend_type: '累积型',
    exchange_code: '', is_allow_intra_switch: false, qty_decimal: 4,
    min_sub_initamount: 1000, as_of_date: '2026-06-28', share_class_count: 1, is_featured: false, display_order: 4,
    product_tags: ['货币市场基金'],
    perf: perf(0.26, 0.78, 1.58, 1.65, 3.72, 13.90, 17.80, 0.24, { 2021: 0.22, 2022: 1.70, 2023: 4.50, 2024: 4.48, 2025: 3.65 }),
    nav: 1.0621, nav_date: '2026-06-28', fund_size: '500 百万美元',
    updated_by: '王运营', updated_at: '2026-06-28',
    product_id: 'FUND:HK0000789012', broker_id: 'CIS-HSBC', broker_name: 'CIS-HSBC',
    launch_date: '2020-01-20', trustee: '中银信托'
  },
  {
    fund_internal_code: 'DC-USD-MMF', product_code: 'HK0000345678', default_isin: 'HK0000345678',
    product_name: '大成货币市场基金(美元)', product_name_en: 'Da Cheng Money Market Fund (USD)',
    fund_house_name: '大成基金', fund_house_id: 'DACHENG', fund_managers: '大成基金',
    strategy: '短期美元存款及优质债务工具', fund_inv_risk_level: 1, product_status: 'LISTED', investor_restriction: 'PI_ONLY',
    fund_category: 'MMF', base_ccy: 'USD', share_class_label: 'A类', dividend_type: '累积型',
    exchange_code: '', is_allow_intra_switch: false, qty_decimal: 4,
    min_sub_initamount: 1000, as_of_date: '2026-06-27', share_class_count: 1, is_featured: false, display_order: 5,
    product_tags: ['货币市场基金'],
    perf: perf(0.24, 0.72, 1.48, 1.55, 3.45, 13.20, 16.90, 0.22),
    nav: 1.0512, nav_date: '2026-06-27', fund_size: '350 百万美元',
    updated_by: '张运营', updated_at: '2026-06-26',
    product_id: 'FUND:HK0000345678', broker_id: 'CIS-KGI', broker_name: 'CIS-KGI',
    launch_date: '2017-11-08', trustee: '花旗信托'
  },
  {
    fund_internal_code: 'DC-HKD-MMF', product_code: 'HK0000456789', default_isin: 'HK0000456789',
    product_name: '大成港元货币市场基金', product_name_en: 'Da Cheng Hong Kong Dollar Money Market Fund',
    fund_house_name: '大成基金', fund_house_id: 'DACHENG', fund_managers: '大成基金',
    strategy: '港元货币市场投资', fund_inv_risk_level: 1, product_status: 'LISTED', investor_restriction: 'ALL',
    fund_category: 'MMF', base_ccy: 'HKD', share_class_label: 'A类', dividend_type: '混合型',
    exchange_code: '', is_allow_intra_switch: false, qty_decimal: 4,
    min_sub_initamount: 10000, as_of_date: '2026-06-27', share_class_count: 1, is_featured: false, display_order: 6,
    product_tags: ['货币市场基金'],
    perf: perf(0.20, 0.65, 1.30, 1.38, 3.10, 12.50, 15.80, 0.18),
    nav: 10.1923, nav_date: '2026-06-27', fund_size: '600 百万港元',
    updated_by: '张运营', updated_at: '2026-06-25',
    product_id: 'FUND:HK0000456789', broker_id: 'CIS-KGI', broker_name: 'CIS-KGI',
    launch_date: '2016-04-12', trustee: '花旗信托'
  },
  {
    fund_internal_code: 'BS-HKD-ETF', product_code: 'HK0000567890', default_isin: 'HK0000567890',
    product_name: '博时港元货币市场ETF', product_name_en: 'Bosera HKD Money Market ETF',
    fund_house_name: '博时基金', fund_house_id: 'BOSERA', fund_managers: '博时基金',
    strategy: '港元货币市场ETF策略', fund_inv_risk_level: 1, product_status: 'DELISTED', investor_restriction: 'ALL',
    fund_category: 'MMF', base_ccy: 'HKD', share_class_label: 'A类', dividend_type: '累积型',
    exchange_code: '3141', is_allow_intra_switch: false, qty_decimal: 4,
    min_sub_initamount: 10000, as_of_date: '2026-06-25', share_class_count: 1, is_featured: false, display_order: 7,
    product_tags: ['ETF', '货币市场基金'],
    perf: perf(0.18, 0.60, 1.22, 1.28, 2.95, 11.80, 14.50, 0.16),
    nav: 10.0512, nav_date: '2026-06-25', fund_size: '200 百万港元',
    updated_by: '王运营', updated_at: '2026-06-24',
    product_id: 'FUND:HK0000567890', broker_id: 'CIS-HSBC', broker_name: 'CIS-HSBC',
    launch_date: '2021-09-01', trustee: '道富信托'
  },
  {
    fund_internal_code: 'BS-USD-ETF', product_code: 'HK0000678901', default_isin: 'HK0000678901',
    product_name: '博时美元货币市场ETF', product_name_en: 'Bosera USD Money Market ETF',
    fund_house_name: '博时基金', fund_house_id: 'BOSERA', fund_managers: '博时基金',
    strategy: '美元货币市场ETF', fund_inv_risk_level: 1, product_status: 'LISTED', investor_restriction: 'ALL',
    fund_category: 'MMF', base_ccy: 'USD', share_class_label: 'A类', dividend_type: '累积型',
    exchange_code: '3142', is_allow_intra_switch: false, qty_decimal: 4,
    min_sub_initamount: 1000, as_of_date: '2026-06-28', share_class_count: 1, is_featured: false, display_order: 8,
    product_tags: ['ETF', '货币市场基金'],
    perf: perf(0.25, 0.75, 1.52, 1.60, 3.55, 13.50, 17.20, 0.23),
    nav: 1.0389, nav_date: '2026-06-28', fund_size: '180 百万美元',
    updated_by: '王运营', updated_at: '2026-06-28',
    product_id: 'FUND:HK0000678901', broker_id: 'CIS-HSBC', broker_name: 'CIS-HSBC',
    launch_date: '2021-09-01', trustee: '道富信托'
  },
  {
    fund_internal_code: 'TK-STABLE', product_code: 'HK0000789013', default_isin: 'HK0000789013',
    product_name: '泰康资本稳定基金', product_name_en: 'Taikang Capital Stable Fund',
    fund_house_name: '泰康资产管理', fund_house_id: 'TAIKANG', fund_managers: '泰康资产管理',
    strategy: '资本稳定型货币策略', fund_inv_risk_level: 2, product_status: 'PAUSED', investor_restriction: 'PI_ONLY',
    fund_category: 'MMF', base_ccy: 'HKD', share_class_label: 'A类', dividend_type: '分配型',
    exchange_code: '', is_allow_intra_switch: false, qty_decimal: 4,
    min_sub_initamount: 10000, as_of_date: '2026-06-24', share_class_count: 1, is_featured: false, display_order: 9,
    product_tags: ['货币市场基金'],
    perf: perf(0.15, 0.48, 0.98, 1.05, 2.60, 9.80, 12.30, 0.12),
    nav: 10.1120, nav_date: '2026-06-24', fund_size: '150 百万港元',
    updated_by: '李运营', updated_at: '2026-06-23',
    product_id: 'FUND:HK0000789013', broker_id: 'CIS-KGI', broker_name: 'CIS-KGI',
    launch_date: '2022-03-15', trustee: '汇丰信托'
  },
  {
    fund_internal_code: 'TK-MONTHLY', product_code: 'HK0000890124', default_isin: 'HK0000890124',
    product_name: '泰康开泰月度稳定收益基金', product_name_en: 'Taikang Kaitai Monthly Stable Income Fund',
    fund_house_name: '泰康资产管理', fund_house_id: 'TAIKANG', fund_managers: '泰康资产管理',
    strategy: '月度稳定收益策略', fund_inv_risk_level: 2, product_status: 'DELISTED', investor_restriction: 'ALL',
    fund_category: 'MMF', base_ccy: 'USD', share_class_label: 'A类', dividend_type: '分配型',
    exchange_code: '', is_allow_intra_switch: false, qty_decimal: 4,
    min_sub_initamount: 1000, as_of_date: '2026-05-30', share_class_count: 1, is_featured: false, display_order: 10,
    product_tags: ['货币市场基金'],
    perf: perf(0.12, 0.42, 0.88, 0.95, 2.40, 9.20, 11.50, 0.10),
    nav: 1.0285, nav_date: '2026-05-30', fund_size: '90 百万美元',
    updated_by: '李运营', updated_at: '2026-05-30',
    product_id: 'FUND:HK0000890124', broker_id: 'CIS-KGI', broker_name: 'CIS-KGI',
    launch_date: '2020-07-01', trustee: '汇丰信托'
  }
];

MMF_PRODUCTS.forEach(f => {
  if (!f.subscribe) f.subscribe = defaultSubscribe(f);
  if (!f.fund_documents) f.fund_documents = defaultFundDocuments(f);
  f.perf = f.perf || {};
  if (!f.perf.monthly || !Object.keys(f.perf.monthly).length) {
    f.perf.monthly = demoMonthlyForYear(new Date().getFullYear(), f.perf.m1 ?? 0.2);
  }
});

function fmtPct(v) {
  if (v == null || v === '' || Number.isNaN(v)) return '—';
  return (v >= 0 ? '+' : '') + Number(v).toFixed(2) + '%';
}

function getListedFunds() {
  return MMF_PRODUCTS.filter(f => f.product_status === 'LISTED' || f.product_status === 'PAUSED');
}

function getFeaturedFunds() {
  return getListedFunds().filter(f => f.is_featured).sort((a, b) => a.display_order - b.display_order);
}

function getActiveBanners() {
  return EWEALTH_BANNERS.filter(b => b.status === 'ACTIVE').sort((a, b) => a.sort - b.sort);
}

function findFund(code) {
  return MMF_PRODUCTS.find(f => f.product_code === code || f.fund_internal_code === code);
}
