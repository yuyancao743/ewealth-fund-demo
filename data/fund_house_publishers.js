/* 发行商管理 — 基金公司配置 mock 数据 */
const FUND_HOUSE_PUBLISHERS = [
  {
    id: 'FH001', fund_company_name: 'Fidelity',
    dealing_contact: 'Fidelity Dealing Desk',
    phone: '+852 2629 2600', email: 'dealing.hk@fidelity.com', fax: '+852 2629 2699',
    receiving_bank: 'JPMorgan Chase Bank NA', account_name: 'FIL Investment Management HK',
    account_number: '400123456789', swift: 'CHASUS33', currency: 'USD',
    status: 'ACTIVE', updated_at: '2026-07-05 14:30', updated_by: '张运营'
  },
  {
    id: 'FH002', fund_company_name: '中国平安资产管理（香港）有限公司',
    dealing_contact: '平安基金 Dealing Desk',
    phone: '+852 2153 3838', email: 'dealing@pingan-am.hk', fax: '+852 2153 3839',
    receiving_bank: '汇丰银行（香港）有限公司', account_name: 'Ping An Asset Management HK',
    account_number: '123-456789-001', swift: 'HSBCHKHHHKH', currency: 'USD',
    status: 'ACTIVE', updated_at: '2026-07-04 10:15', updated_by: '李运营',
    remark: '平安系列货币基金主对接发行商'
  },
  {
    id: 'FH003', fund_company_name: '泰康资产管理',
    dealing_contact: 'Taikang Dealing Team',
    phone: '+852 2888 6600', email: 'dealing@taikang.com', fax: '+852 2888 6601',
    receiving_bank: '中国银行（香港）', account_name: 'Taikang Asset Management HK',
    account_number: '012-876543-210', swift: 'BKCHHKHH', currency: 'USD',
    status: 'ACTIVE', updated_at: '2026-07-03 16:20', updated_by: '王运营'
  },
  {
    id: 'FH004', fund_company_name: '广发基金',
    dealing_contact: 'GF Fund Dealing',
    phone: '+852 3900 8800', email: 'dealing@gfunds.com.hk', fax: '—',
    receiving_bank: '渣打银行（香港）', account_name: 'GF Fund Management HK',
    account_number: '368-1-234567-0', swift: 'SCBLHKHH', currency: 'USD',
    status: 'ACTIVE', updated_at: '2026-07-02 09:00', updated_by: '张运营'
  },
  {
    id: 'FH005', fund_company_name: '大成基金',
    dealing_contact: 'Da Cheng Dealing Desk',
    phone: '+852 2523 9888', email: 'dealing@dcfund.com', fax: '+852 2523 9889',
    receiving_bank: '花旗银行（香港）', account_name: 'Da Cheng Asset Management',
    account_number: '006-391-12345678', swift: 'CITIHKHX', currency: 'HKD',
    status: 'ACTIVE', updated_at: '2026-07-01 11:45', updated_by: '李运营'
  },
  {
    id: 'FH006', fund_company_name: '博时基金',
    dealing_contact: 'Bosera Dealing',
    phone: '+852 3187 6600', email: 'dealing@bosera.com', fax: '—',
    receiving_bank: '摩根大通银行', account_name: 'Bosera Asset Management HK',
    account_number: '9345678901', swift: 'CHASHKHH', currency: 'USD',
    status: 'INACTIVE', updated_at: '2026-06-28 15:00', updated_by: '王运营'
  },
  {
    id: 'FH007', fund_company_name: 'BlackRock',
    dealing_contact: 'BlackRock HK Dealing',
    phone: '+852 3903 8800', email: 'hkdealing@blackrock.com', fax: '+852 3903 8801',
    receiving_bank: 'JPMorgan Chase Bank NA', account_name: 'BlackRock Asset Management HK',
    account_number: '500987654321', swift: 'CHASUS33', currency: 'USD',
    status: 'ACTIVE', updated_at: '2026-06-27 13:30', updated_by: '张运营'
  },
  {
    id: 'FH008', fund_company_name: 'HSBC Global Asset Management',
    dealing_contact: 'HSBC AM Dealing Desk',
    phone: '+852 2822 4500', email: 'dealing@hsbcam.com', fax: '+852 2822 4501',
    receiving_bank: 'HSBC Hong Kong', account_name: 'HSBC Global AM HK',
    account_number: '004-123456-838', swift: 'HSBCHKHHHKH', currency: 'HKD',
    status: 'ACTIVE', updated_at: '2026-06-26 10:00', updated_by: '李运营'
  },
  {
    id: 'FH009', fund_company_name: 'JPMorgan Asset Management',
    dealing_contact: 'JPM AM Dealing',
    phone: '+852 2800 1234', email: 'dealing@jpmorgan.com', fax: '—',
    receiving_bank: 'JPMorgan Chase Bank NA', account_name: 'JPMorgan Asset Mgmt HK',
    account_number: '400111222333', swift: 'CHASUS33', currency: 'USD',
    status: 'ACTIVE', updated_at: '2026-06-25 17:20', updated_by: '王运营'
  },
  {
    id: 'FH010', fund_company_name: 'Schroders',
    dealing_contact: 'Schroders Dealing HK',
    phone: '+852 2868 6000', email: 'dealing@schroders.com', fax: '+852 2868 6001',
    receiving_bank: 'Standard Chartered Bank HK', account_name: 'Schroder Investment Mgmt',
    account_number: '447-0-123456-1', swift: 'SCBLHKHH', currency: 'USD',
    status: 'ACTIVE', updated_at: '2026-06-24 14:10', updated_by: '张运营'
  },
  {
    id: 'FH011', fund_company_name: 'Allianz Global Investors',
    dealing_contact: 'Allianz GI Dealing',
    phone: '+852 2169 6600', email: 'dealing@allianzgi.com', fax: '—',
    receiving_bank: 'Deutsche Bank AG', account_name: 'Allianz Global Investors HK',
    account_number: 'DE89370400440532013000', swift: 'DEUTDEFF', currency: 'EUR',
    status: 'INACTIVE', updated_at: '2026-06-20 09:30', updated_by: '李运营'
  },
  {
    id: 'FH012', fund_company_name: 'Invesco',
    dealing_contact: 'Invesco Dealing Desk',
    phone: '+852 3719 2800', email: 'dealing@invesco.com', fax: '+852 3719 2801',
    receiving_bank: 'Citibank NA', account_name: 'Invesco Hong Kong Limited',
    account_number: 'CITI9988776655', swift: 'CITIUS33', currency: 'USD',
    status: 'ACTIVE', updated_at: '2026-06-18 16:45', updated_by: '王运营'
  }
];

function findPublisher(id) {
  return FUND_HOUSE_PUBLISHERS.find(p => p.id === id);
}
