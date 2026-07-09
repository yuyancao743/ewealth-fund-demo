/* 平安 PACSIF-PAMMF 抓取数据 — 中台/eWealth 原型共用 */
const PINGAN_ISINS = [
  { share_class_code: 'P', ccy: 'USD', dividend_class: 'A', product_code: 'HK0000720752', is_default_shelf: true },
  { share_class_code: 'P', ccy: 'HKD', dividend_class: 'A', product_code: 'HK0000720760' },
  { share_class_code: 'P', ccy: 'CNY', dividend_class: 'A', product_code: 'HK0000720778' },
  { share_class_code: 'P', ccy: 'USD', dividend_class: 'R', product_code: 'HK0001049342' },
  { share_class_code: 'P', ccy: 'HKD', dividend_class: 'R', product_code: 'HK0001049359' },
  { share_class_code: 'P', ccy: 'CNY', dividend_class: 'R', product_code: 'HK0001049367' },
  { share_class_code: 'M', ccy: 'USD', dividend_class: 'A', product_code: 'HK0000720786' },
  { share_class_code: 'M', ccy: 'HKD', dividend_class: 'A', product_code: 'HK0000720794' },
  { share_class_code: 'M', ccy: 'CNY', dividend_class: 'A', product_code: 'HK0000720802' },
  { share_class_code: 'M', ccy: 'USD', dividend_class: 'R', product_code: 'HK0001049375' },
  { share_class_code: 'M', ccy: 'HKD', dividend_class: 'R', product_code: 'HK0001049383' },
  { share_class_code: 'M', ccy: 'CNY', dividend_class: 'R', product_code: 'HK0001049391' },
  { share_class_code: 'I', ccy: 'USD', dividend_class: 'A', product_code: 'HK0000720810' },
  { share_class_code: 'I', ccy: 'HKD', dividend_class: 'A', product_code: 'HK0000720828' },
  { share_class_code: 'I', ccy: 'CNY', dividend_class: 'A', product_code: 'HK0000720836' },
  { share_class_code: 'I', ccy: 'USD', dividend_class: 'R', product_code: 'HK0001049409' },
  { share_class_code: 'I', ccy: 'HKD', dividend_class: 'R', product_code: 'HK0001049417' },
  { share_class_code: 'I', ccy: 'CNY', dividend_class: 'R', product_code: 'HK0001049425' }
];

const DIV_LABEL = { A: '累积', R: '派息' };
const MGMT_FEE = { P: 0.30, M: 0.60, I: 0.10 };
const PERF_USD = {
  P: { ytd: 1.84, one_year: 3.96, three_year: 15.28, cumulative: 20.79, nav: 120.7898,
    annual: { 2021: 0.10, 2022: 1.98, 2023: 5.50, 2024: 5.51, 2025: 4.38 } },
  M: { ytd: 1.69, one_year: 3.65, three_year: 13.97, cumulative: 18.91, nav: 118.9118,
    annual: { 2021: 0.09, 2022: 1.79, 2023: 5.03, 2024: 5.06, 2025: 4.02 } },
  I: { ytd: 1.94, one_year: 4.17, three_year: 15.71, cumulative: 21.66, nav: 121.6606,
    annual: { 2021: 0.30, 2022: 2.08, 2023: 5.60, 2024: 5.59, 2025: 4.54 } }
};

function buildShareClasses() {
  return PINGAN_ISINS.map(row => {
    const divLabel = DIV_LABEL[row.dividend_class];
    const perf = PERF_USD[row.share_class_code];
    const label = `${row.share_class_code}类 ${row.ccy}（${divLabel}）`;
    return {
      ...row,
      product_id: `FUND:${row.product_code}`,
      share_class_label: label,
      broker_id: 'CIS-KGI',
      broker_name: 'CIS-KGI',
      fund_inv_risk_level: '1',
      is_allow_intra_switch: '否',
      qty_decimal: '4',
      min_sub_initamount: 1,
      min_sub_amount: 1,
      subscription_fee: '最多 3.0%',
      management_fee: MGMT_FEE[row.share_class_code],
      nav: row.ccy === 'USD' ? perf.nav : null,
      nav_date: row.ccy === 'USD' ? '2026-07-02' : '—',
      ytd_return: row.ccy === 'USD' ? perf.ytd : null,
      one_year_return: row.ccy === 'USD' ? perf.one_year : null,
      three_year_return: row.ccy === 'USD' ? perf.three_year : null,
      cumulative_return: row.ccy === 'USD' ? perf.cumulative : null,
      annual_returns: row.ccy === 'USD' ? perf.annual : null,
      monthly_returns: null,
      share_confirm_rule: '每日',
      open_period: '每日',
      conversion_fee: '不适用',
      redemption_threshold: `1 ${row.ccy}`
    };
  });
}

const PINGAN_PAMMF = {
  fund_internal_code: 'PACSIF-PAMMF',
  product_name_en: 'Ping An Selection Investment Fund Series - Ping An Money Market Fund',
  product_name_zh: '中国平安精选投资基金系列 - 平安货币基金',
  fund_full_name_zh: '中国平安精选投资基金系列－平安货币基金',
  fund_strategy: '本基金尋求透過主要投資於美元計價及結算短期存款及優質貨幣市場工具，以實現其投資目標。',
  investment_objective: '投資於短期存款及優質貨幣市場工具，尋求按現行貨幣市場利率計算的美元回報。',
  product_website: 'https://asset.pingan.com.hk/zh-hk/PACSIF-PAMMF',
  launch_date: '30/03/2021',
  fund_manager: '中國平安資產管理（香港）有限公司',
  fund_house_name: '中國平安資產管理（香港）有限公司',
  trustee: '中銀國際英國保誠信託有限公司',
  fiscal_year_end: '六月三十日',
  performance_fee: '无',
  base_ccy: 'USD',
  listing_status: 'LISTED',
  fund_category: 'MMF',
  is_featured: true,
  display_order: 1,
  investor_risk_profile: 'C1',
  risk_rating: 'R1',
  risk_rating_note: '金马证券风险评级说明：R1 为最低风险等级，适合保守型投资者。货币基金主要投资于短期货币市场工具，波动相对较低，但不保证本金及收益。',
  supplementary_info: '',
  order_contact_name: '基金运营部',
  order_contact_phone: '+852 2153 3838',
  order_contact_email: 'fundops@goldhorse.com.hk',
  order_contact_remark: '截单时间：交易日 15:00（香港时间）',
  payment_bank_name: '汇丰银行（香港）有限公司',
  payment_bank_account: '123-456789-001',
  payment_bank_swift: 'HSBCHKHHHKH',
  payment_bank_remark: '汇款附言请注明基金名称及客户账号',
  internal_remarks: '',
  product_description: '投资于短期存款及优质货币市场工具，追求稳定回报。',
  as_of_date: '2026-07-02',
  data_source: '平安官网抓取 + Ayers + 中台运营',
  share_classes: buildShareClasses(),
  documents_scraped: [
    { doc_type: '说明书', doc_name: '说明书', doc_url: 'https://asset.pingan.com.hk/zh-hk/PACSIF-PAMMF/HK-Explanatory-Memorandum-TC.pdf' },
    { doc_type: '产品资料概要', doc_name: '产品资料概要', doc_url: 'https://asset.pingan.com.hk/zh-hk/PACSIF-PAMMF/KFS-Ping-An-Money-Market-Fund-TC.pdf' },
    { doc_type: '年度报告', doc_name: '年度报告', doc_url: 'https://asset.pingan.com.hk/zh-hk/PACSIF-PAMMF/Annual-Report-EN.pdf' },
    { doc_type: '中期报告', doc_name: '中期报告', doc_url: 'https://asset.pingan.com.hk/zh-hk/PACSIF-PAMMF/Interim-Report-EN.pdf' },
    { doc_type: '基金月报', doc_name: '基金月报', doc_url: 'https://asset.pingan.com.hk/zh-hk/PACSIF-PAMMF/FFS-Ping-An-Money-Market-Fund-TC.pdf' }
  ],
  documents_uploaded: []
};

const INVESTOR_RISK_PROFILES = {
  C1: '保守型', C2: '中度保守型', C3: '平衡型', C4: '中度进取型', C5: '进取型'
};
/* SUBSCRIBE_HOTLINE 见 mmf_products.js */
