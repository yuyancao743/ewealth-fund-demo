(function (global) {
  const PAGE_SIZES = [5, 10];

  const CLIENTS = {
    ma0030: {
      id: 'ma0030',
      account: 'MA0030.999.001',
      nameCn: '马三零',
      nameEn: 'sanlingma',
      subject: '投资移民账户',
      status: '使用中',
      acctType: '现金账户',
      isPI: true,
      piType: '个人专业投资者',
      riskLevel: 'R3 中风险',
      riskStatus: '有效',
      riskCompleteDate: '2025-11-20',
      riskPdf: '风险问卷.pdf',
      piCompleteDate: '2025-10-02',
      piPdf: '专业投资者声明书.pdf',
      openTime: '2019-03-18',
      openFormPdf: '金马账户开户表格.pdf',
      pwd: '234564',
      assets: { hkd: '8,801,368,976.86 HKD', usd: '1,129,321,739.50 USD', cnh: '8,295,352,475.83 CNH' },
      immigrant: true,
      remark: 'test',
      personal: {
        idType: '香港身份证',
        idNo: { mask: 'A123****(4)', full: 'A123456(4)' },
        birth: '1978-06-12',
        nationality: '中国香港',
        homeAddr: { mask: '香港九龙尖沙咀****', full: '香港九龙尖沙咀柯士甸道 88 号海景花园 12A' },
        detailAddr: { mask: '海景花园****', full: '海景花园 12A' },
        phone: { mask: '9123****', full: '91234567' },
        email: { mask: 'san***@***.com', full: 'sanling.ma@example.com' }
      },
      banks: [
        { ccy: '港币', bank: 'CHINA BOHAI BANK', card: { mask: '7620****9000', full: '762006259000' }, holder: '马三零' },
        { ccy: '美元', bank: 'CHINA BOHAI BANK', card: { mask: '7620****8100', full: '762006258100' }, holder: '马三零' },
        { ccy: '人民币', bank: 'CHINA BOHAI BANK', card: { mask: '7620****7200', full: '762006257200' }, holder: '马三零' }
      ]
    },
    chenwei: {
      id: 'chenwei',
      account: 'ZB4985.888',
      nameCn: '陈伟',
      nameEn: 'chenwei',
      subject: '个人账户',
      status: '使用中',
      acctType: '现金账户',
      isPI: false,
      riskLevel: 'R2 中低风险',
      riskStatus: '有效',
      riskCompleteDate: '2026-01-12',
      riskPdf: '风险问卷.pdf',
      openTime: '2021-06-02',
      openFormPdf: '金马账户开户表格.pdf',
      pwd: '234564',
      assets: { hkd: '12,450,200.00 HKD', usd: '1,596,180.00 USD', cnh: '11,730,188.00 CNH' },
      immigrant: false,
      remark: '大富翁',
      personal: {
        idType: '香港身份证',
        idNo: { mask: 'B888****(3)', full: 'B888888(3)' },
        birth: '1985-02-20',
        nationality: '中国香港',
        homeAddr: { mask: '香港岛中环****', full: '香港岛中环德辅道中 100 号' },
        phone: { mask: '6112****', full: '61128899' },
        email: { mask: 'cw***@***.com', full: 'chenwei@example.com' },
        detailAddr: { mask: '德辅道中****', full: '德辅道中 100 号 18 楼 A 室' }
      },
      banks: [
        { ccy: '港币', bank: 'HSBC', card: { mask: '****2201', full: '004-123-456-2201' }, holder: '陈伟' }
      ]
    },
    wongsy: {
      id: 'wongsy',
      account: 'LPOA002.001',
      nameCn: '黄思远',
      nameEn: 'wongsy',
      subject: '联名账户',
      status: '使用中',
      acctType: '现金账户',
      isPI: true,
      piType: '个人专业投资者',
      riskLevel: 'R3 中风险',
      riskStatus: '有效',
      riskCompleteDate: '2025-09-01',
      riskPdf: '风险问卷.pdf',
      piCompleteDate: '2025-09-01',
      piPdf: '专业投资者声明书.pdf',
      openTime: '2020-11-08',
      openFormPdf: '金马账户开户表格.pdf',
      pwd: '887554',
      assets: { hkd: '86,220,440.15 HKD', usd: '11,054,415.40 USD', cnh: '81,244,188.32 CNH' },
      immigrant: false,
      remark: '南山阿里巴巴',
      holders: [
        {
          title: '第一持有人',
          nameCn: '黄思远',
          nameEn: 'wongsy',
          idType: '中国居民身份证',
          idNo: { mask: '1234********7554', full: '123456789099887554' },
          birth: '1972-04-11',
          nationality: '中国',
          homeAddr: { mask: '深圳市南山区****', full: '深圳市南山区海德三道 1 号' },
          detailAddr: { mask: '海德三道****', full: '海德三道 1 号 28 楼' },
          phone: { mask: '138****8001', full: '13800008001' },
          email: { mask: 'wsy***@***.com', full: 'wongsy@example.com' }
        },
        {
          title: '第二持有人',
          nameCn: '林晓',
          nameEn: 'linxiao',
          idType: '香港身份证',
          idNo: { mask: 'C321****(8)', full: 'C321098(8)' },
          birth: '1975-08-03',
          nationality: '中国香港',
          homeAddr: { mask: '香港九龙塘****', full: '香港九龙塘金巴伦道 12 号' },
          detailAddr: { mask: '金巴伦道****', full: '金巴伦道 12 号 3 楼' },
          phone: { mask: '9128****', full: '91280011' },
          email: { mask: 'lx***@***.com', full: 'linxiao@example.com' }
        }
      ],
      banks: [
        { ccy: '港币', bank: 'BANK OF CHINA (HONG KONG)', card: { mask: '****6608', full: '012-888-000-6608' }, holder: '黄思远' },
        { ccy: '美元', bank: 'BANK OF CHINA (HONG KONG)', card: { mask: '****6609', full: '012-888-000-6609' }, holder: '黄思远' }
      ]
    },
    liu: {
      id: 'liu',
      account: 'MA0088.999.002',
      nameCn: '刘美华',
      nameEn: 'liumei',
      subject: '企业账号',
      status: '使用中',
      acctType: '现金账户',
      isPI: true,
      piType: '机构专业投资者',
      riskLevel: 'R4 中高风险',
      riskStatus: '有效',
      riskCompleteDate: '2026-03-02',
      riskPdf: '风险问卷.pdf',
      piCompleteDate: '2026-03-02',
      piPdf: '专业投资者声明书.pdf',
      openTime: '2023-08-18',
      openFormPdf: '金马账户开户表格.pdf',
      pwd: '213044',
      assets: { hkd: '3,280,900.00 HKD', usd: '420,628.00 USD', cnh: '3,091,448.00 CNH' },
      immigrant: false,
      remark: '—',
      company: {
        category: '有限公司',
        place: 'British Virgin Islands',
        date: '2023-08-18',
        number: '2130447',
        contactName: 'Cassandra Deng',
        contactTitle: 'Financial Analyst',
        contactPhone: { mask: '852-****2096', full: '852-56452096' },
        regAddr: { mask: 'BVI ****', full: 'Craigmuir Chambers, Road Town, Tortola, BVI' },
        bizAddr: { mask: '香港中环****', full: '香港中环皇后大道中 1 号' },
        mailAddr: '中国香港 香港特別行政區 香港島 中西區 RM A 12/F TAI WONG COMM BLDG NOS. 5 AND 7 QUEEN\' S RD WEST SHEUNG WAN'
      },
      banks: [
        { ccy: '港币', bank: 'CHINA BOHAI BANK', card: { mask: '7620****9000', full: '762006259000' }, holder: 'VAST STARRY COMPANY LIMITED' },
        { ccy: '美元', bank: 'CHINA BOHAI BANK', card: { mask: '7620****8100', full: '762006258100' }, holder: 'VAST STARRY COMPANY LIMITED' },
        { ccy: '人民币', bank: 'CHINA BOHAI BANK', card: { mask: '7620****7200', full: '762006257200' }, holder: 'VAST STARRY COMPANY LIMITED' }
      ]
    },
    sub: {
      id: 'sub',
      account: 'MA0030.999.003',
      nameCn: '马三零',
      nameEn: 'sanlingma',
      subject: '子账号（个人）',
      status: '使用中',
      acctType: '现金账户',
      parentName: '马三零',
      parentAccount: 'MA0030.999.001',
      subName: '马三零',
      isPI: true,
      piType: '个人专业投资者',
      piCompleteDate: '2025-10-02',
      piPdf: '专业投资者声明书.pdf',
      openTime: '2022-04-16',
      openFormPdf: '金马账户开户表格.pdf',
      pwd: '234564',
      immigrant: true,
      assets: { hkd: '1,200,000.00 HKD', usd: '153,846.00 USD', cnh: '1,130,400.00 CNH' },
      remark: '子账户',
      personal: {
        idType: '香港身份证',
        idNo: { mask: 'A123****(4)', full: 'A123456(4)' },
        birth: '1978-06-12',
        nationality: '中国香港',
        homeAddr: { mask: '香港九龙尖沙咀****', full: '香港九龙尖沙咀柯士甸道 88 号海景花园 12A' },
        detailAddr: { mask: '海景花园****', full: '海景花园 12A' },
        phone: { mask: '9123****', full: '91234567' },
        email: { mask: 'san***@***.com', full: 'sanling.ma@example.com' }
      },
      banks: []
    },
    subJoint: {
      id: 'subJoint',
      account: 'LPOA002.002',
      nameCn: '黄思远',
      nameEn: 'wongsy',
      subject: '子账号（联名）',
      status: '使用中',
      acctType: '现金账户',
      parentName: '黄思远',
      parentAccount: 'LPOA002.001',
      subName: '黄思远',
      isPI: true,
      piType: '个人专业投资者',
      riskLevel: 'R3 中风险',
      riskStatus: '有效',
      riskCompleteDate: '2025-09-01',
      riskPdf: '风险问卷.pdf',
      piCompleteDate: '2025-09-01',
      piPdf: '专业投资者声明书.pdf',
      openTime: '2022-07-01',
      openFormPdf: '金马账户开户表格.pdf',
      pwd: '887554',
      immigrant: false,
      assets: { hkd: '2,100,000.00 HKD', usd: '269,230.00 USD', cnh: '1,978,200.00 CNH' },
      remark: '联名子账户',
      holders: [
        {
          title: '第一持有人',
          nameCn: '黄思远',
          nameEn: 'wongsy',
          idType: '中国居民身份证',
          idNo: { mask: '1234********7554', full: '123456789099887554' },
          birth: '1972-04-11',
          nationality: '中国',
          homeAddr: { mask: '深圳市南山区****', full: '深圳市南山区海德三道 1 号' },
          detailAddr: { mask: '海德三道****', full: '海德三道 1 号 28 楼' },
          phone: { mask: '138****8001', full: '13800008001' },
          email: { mask: 'wsy***@***.com', full: 'wongsy@example.com' }
        },
        {
          title: '第二持有人',
          nameCn: '林晓',
          nameEn: 'linxiao',
          idType: '香港身份证',
          idNo: { mask: 'C321****(8)', full: 'C321098(8)' },
          birth: '1975-08-03',
          nationality: '中国香港',
          homeAddr: { mask: '香港九龙塘****', full: '香港九龙塘金巴伦道 12 号' },
          detailAddr: { mask: '金巴伦道****', full: '金巴伦道 12 号 3 楼' },
          phone: { mask: '9128****', full: '91280011' },
          email: { mask: 'lx***@***.com', full: 'linxiao@example.com' }
        }
      ],
      banks: [
        { ccy: '港币', bank: 'BANK OF CHINA (HONG KONG)', card: { mask: '****6610', full: '012-888-000-6610' }, holder: '黄思远' }
      ]
    },
    subCorp: {
      id: 'subCorp',
      account: 'MA0088.999.003',
      nameCn: '刘美华',
      nameEn: 'liumei',
      subject: '子账号（企业）',
      status: '使用中',
      acctType: '现金账户',
      parentName: '刘美华',
      parentAccount: 'MA0088.999.002',
      subName: 'VAST STARRY COMPANY LIMITED',
      isPI: true,
      piType: '机构专业投资者',
      riskLevel: 'R4 中高风险',
      riskStatus: '有效',
      riskCompleteDate: '2026-03-02',
      riskPdf: '风险问卷.pdf',
      piCompleteDate: '2026-03-02',
      piPdf: '专业投资者声明书.pdf',
      openTime: '2024-05-20',
      openFormPdf: '金马账户开户表格.pdf',
      pwd: '213044',
      immigrant: false,
      assets: { hkd: '880,000.00 HKD', usd: '112,820.00 USD', cnh: '829,400.00 CNH' },
      remark: '企业子账户',
      company: {
        category: '有限公司',
        place: 'British Virgin Islands',
        date: '2023-08-18',
        number: '2130447',
        contactName: 'Cassandra Deng',
        contactTitle: 'Financial Analyst',
        contactPhone: { mask: '852-****2096', full: '852-56452096' },
        regAddr: { mask: 'BVI ****', full: 'Craigmuir Chambers, Road Town, Tortola, BVI' },
        bizAddr: { mask: '香港中环****', full: '香港中环皇后大道中 1 号' },
        mailAddr: '中国香港 香港特別行政區 香港島 中西區 RM A 12/F TAI WONG COMM BLDG NOS. 5 AND 7 QUEEN\' S RD WEST SHEUNG WAN'
      },
      banks: [
        { ccy: '港币', bank: 'CHINA BOHAI BANK', card: { mask: '7620****9001', full: '762006259001' }, holder: 'VAST STARRY COMPANY LIMITED' }
      ]
    }
  };

  const LIST = ['ma0030', 'chenwei', 'wongsy', 'liu', 'sub', 'subJoint', 'subCorp'];

  const DAILY = [
    { date: '2026-09-08', ready: true }, { date: '2026-09-07', ready: true },
    { date: '2026-09-04', ready: true }, { date: '2026-09-03', ready: true },
    { date: '2026-09-02', ready: true }, { date: '2026-09-01', ready: true },
    { date: '2026-08-31', ready: true }, { date: '2026-08-28', ready: true },
    { date: '2026-08-27', ready: true }, { date: '2026-08-26', ready: true },
    { date: '2026-08-25', ready: true }, { date: '2026-08-24', ready: true },
    { date: '2026-08-21', ready: true }, { date: '2026-08-20', ready: true },
    { date: '2026-08-19', ready: false }
  ];
  const MONTHLY = [
    { period: '2026-08', year: '2026' }, { period: '2026-07', year: '2026' },
    { period: '2026-06', year: '2026' }, { period: '2026-05', year: '2026' },
    { period: '2026-04', year: '2026' }, { period: '2026-03', year: '2026' },
    { period: '2026-02', year: '2026' }, { period: '2026-01', year: '2026' },
    { period: '2025-12', year: '2025' }, { period: '2025-11', year: '2025' },
    { period: '2025-10', year: '2025' }, { period: '2025-09', year: '2025' },
    { period: '2025-08', year: '2025' }, { period: '2025-07', year: '2025' }
  ];

  const stmtPage = { daily: 1, monthly: 1 };
  const stmtSize = { daily: 5, monthly: 5 };
  let current = CLIENTS.ma0030;
  let pendingStmt = null;
  let drawerTab = 'open';
  let allRevealed = false;

  function esc(v) {
    return String(v).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function formatYmd(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  /** PI到期日 = 客户提交日加一个自然年的前一自然日 */
  function piExpireFromSubmit(submit) {
    if (!submit) return '';
    const parts = String(submit).split('-').map(Number);
    if (parts.length < 3 || parts.some((n) => Number.isNaN(n))) return '';
    const dt = new Date(parts[0], parts[1] - 1, parts[2]);
    dt.setFullYear(dt.getFullYear() + 1);
    dt.setDate(dt.getDate() - 1);
    return formatYmd(dt);
  }

  function toast(msg) {
    let el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove('show'), 2200);
  }

  function getClient(id) {
    return CLIENTS[id] || CLIENTS.ma0030;
  }

  function kv(label, value) {
    if (value == null || value === '') return '';
    return `<dt>${esc(label)}</dt><dd>${value}</dd>`;
  }

  function kvSecret(label, secret) {
    if (!secret || (!secret.full && !secret.mask)) return '';
    return `<dt>${esc(label)}</dt><dd>
      <span class="secret" data-mask="${esc(secret.mask)}" data-full="${esc(secret.full)}">${esc(secret.mask)}</span>
    </dd>`;
  }

  function personalBlock(p, names) {
    if (!p) return '';
    const nameCn = names && names.nameCn;
    const nameEn = names && names.nameEn;
    return `<dl class="kv">
      ${kv('中文名', nameCn)}
      ${kv('英文名', nameEn)}
      ${kv('证件类型', p.idType)}
      ${kvSecret('证件号', p.idNo)}
      ${kv('出生日期', p.birth)}
      ${kv('国籍/地区', p.nationality)}
      ${kvSecret('住宅地址', p.homeAddr)}
      ${kvSecret('详细地址', p.detailAddr)}
      ${kvSecret('电话号码', p.phone)}
      ${kvSecret('电邮', p.email)}
    </dl>`;
  }

  function accountHead(c) {
    const skipNames = ['机构账户', '联名账户', '子账号（联名）'].indexOf(c.subject) !== -1;
    const isSub = String(c.subject || '').indexOf('子账号') === 0;
    const master = c.parentName && c.parentAccount
      ? `${c.parentName} / ${c.parentAccount}`
      : (c.parentAccount || c.parentName || '');
    return `<dl class="kv">
      ${skipNames ? '' : kv('中文名', c.nameCn)}
      ${skipNames ? '' : kv('英文名', c.nameEn)}
      ${kv('交易账号', c.account)}
      ${kv('开户主体', c.subject)}
      ${kv('账户类型', c.acctType)}
      ${isSub ? kv('主账户名称/号码', master) : ''}
      ${isSub ? kv('子账户名称', c.subName) : ''}
      ${kv('账户开立时间', c.openTime)}
      ${kv('账户状态', c.status)}
    </dl>`;
  }

  function companyBlock(co) {
    if (!co) return '';
    return `<dl class="kv">
      ${kv('类别', co.category)}
      ${kv('注册/成立地方', co.place)}
      ${kv('注册成立日期', co.date)}
      ${kv('注册/成立号码', co.number)}
      ${kv('联系人姓名', co.contactName)}
      ${kv('联系人职位', co.contactTitle)}
      ${kvSecret('联络电话号码', co.contactPhone)}
      ${kvSecret('注册成立地址', co.regAddr)}
      ${kvSecret('主要/现时营业地址', co.bizAddr)}
      ${kv('通讯地址', co.mailAddr)}
    </dl>`;
  }

  function institutionBlock(ins) {
    if (!ins) return '';
    return `<div class="block-title">公司资料</div>
    <dl class="kv">
      ${kv('公司英文名称', ins.nameEn)}
      ${kv('公司中文名称', ins.nameCn)}
      ${kv('账户名称（如不同于公司名称）', ins.accountName)}
      ${kv('注册/成立地方', ins.place)}
      ${kv('注册/成立日期', ins.date)}
      ${kv('注册/成立号码', ins.number)}
      ${kvSecret('办公室电话号码', ins.officePhone)}
      ${kvSecret('注册地址', ins.regAddr)}
      ${kvSecret('主要/现时营业地址', ins.bizAddr)}
      ${kv('通讯地址', ins.mailAddr)}
      ${kv('联络人姓名', ins.contactName)}
      ${kv('联络人职位', ins.contactTitle)}
      ${kvSecret('联络电话号码', ins.contactPhone)}
      ${kvSecret('联络电邮地址', ins.contactEmail)}
    </dl>`;
  }

  function banksBlock(banks) {
    if (!banks || !banks.length) return '';
    return `<div class="block-title">结算信息</div>
    <div class="bank-table">
      <table>
        <thead><tr><th>币种</th><th>银行名称</th><th>卡号</th><th>银行卡持有人姓名</th></tr></thead>
        <tbody>
          ${banks.map((b) => `<tr>
            <td>${esc(b.ccy)}</td>
            <td>${esc(b.bank)}</td>
            <td>
              <span class="secret" data-mask="${esc(b.card.mask)}" data-full="${esc(b.card.full)}">${esc(b.card.mask)}</span>
            </td>
            <td>${esc(b.holder)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
  }

  function openProfileHtml(c) {
    const type = profileType(c.subject);
    let body = accountHead(c);
    if (type === 'personal' && c.personal) {
      const p = c.personal;
      body += `<dl class="kv">
        ${kv('证件类型', p.idType)}
        ${kvSecret('证件号', p.idNo)}
        ${kv('出生日期', p.birth)}
        ${kv('国籍/地区', p.nationality)}
        ${kvSecret('住宅地址', p.homeAddr)}
        ${kvSecret('详细地址', p.detailAddr)}
        ${kvSecret('电话号码', p.phone)}
        ${kvSecret('电邮', p.email)}
      </dl>`;
    }
    if (type === 'joint') {
      body += (c.holders || []).map((h) => `
        <div class="block-title">${esc(h.title)}</div>
        ${personalBlock(h, h)}
      `).join('');
    }
    if (type === 'company') body += companyBlock(c.company);
    if (type === 'institution') body += institutionBlock(c.institution);
    body += banksBlock(c.banks);
    return body;
  }

  function profileType(subject) {
    if (subject === '联名账户' || subject === '子账号（联名）') return 'joint';
    if (subject === '企业账号' || subject === '子账号（企业）') return 'company';
    if (subject === '机构账户') return 'institution';
    return 'personal';
  }

  function hasRiskInfo(c) {
    return !!(c.riskLevel || c.riskStatus || c.riskCompleteDate || c.riskPdf);
  }

  function hasPiInfo(c) {
    return !!c.isPI;
  }

  function riskPiTabLabel(c) {
    const risk = hasRiskInfo(c);
    const pi = hasPiInfo(c);
    if (risk && pi) return '风险测评与 PI';
    if (pi) return '专业投资者 (PI) 认证';
    if (risk) return '风险测评';
    return '';
  }

  function riskPiHtml(c) {
    const risk = hasRiskInfo(c) ? `<div class="mod">
      <div class="mod-h">风险测评</div>
      <dl class="kv">
        ${kv('风险等级', c.riskLevel)}
        ${kv('问卷状态', c.riskStatus)}
        ${kv('问卷完成日', c.riskCompleteDate)}
      </dl>
      ${c.riskPdf ? `<p class="pdf-row">最近一次：<button class="link" type="button" onclick="EWH.openPdf('${esc(c.riskPdf)}')">${esc(c.riskPdf)}</button></p>` : ''}
    </div>` : '';
    const pi = hasPiInfo(c) ? `<div class="mod">
      <div class="mod-h">专业投资者 (PI) 认证</div>
      <dl class="kv">
        ${kv('是否 PI', '是')}
        ${kv('PI完成日', c.piCompleteDate)}
        ${kv('PI到期日', piExpireFromSubmit(c.piCompleteDate))}
      </dl>
      ${c.piPdf ? `<p class="pdf-row">最近一次：<button class="link" type="button" onclick="EWH.openPdf('${esc(c.piPdf)}')">${esc(c.piPdf)}</button></p>` : ''}
    </div>` : '';
    return risk + pi;
  }

  function ensureDrawer() {
    if (document.getElementById('infoMask')) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = `
      <div class="mask" id="infoMask" onclick="EWH.closeInfo()"></div>
      <aside class="drawer" id="infoDrawer" aria-hidden="true">
        <div class="drawer-head">
          <h2>客户信息</h2>
          <button class="close" type="button" onclick="EWH.closeInfo()" aria-label="关闭"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <nav class="drawer-nav">
          <button class="nav-item active" type="button" data-tab="open" onclick="EWH.setDrawerTab('open')">开户信息</button>
          <button class="nav-item" type="button" data-tab="risk" onclick="EWH.setDrawerTab('risk')">风险测评与 PI</button>
        </nav>
        <p class="readonly-tip">敏感字段默认掩码，点眼睛可显示或隐藏；关闭抽屉后恢复掩码。中台无数据的字段不展示。</p>
        <div class="drawer-body" id="infoBody"></div>
      </aside>`;
    document.body.appendChild(wrap);
  }

  function fillDrawer(c) {
    current = c;
    const riskBtn = document.querySelector('#infoDrawer .nav-item[data-tab="risk"]');
    const label = riskPiTabLabel(c);
    if (riskBtn) {
      riskBtn.textContent = label || '风险测评与 PI';
      riskBtn.style.display = label ? '' : 'none';
    }
    if (!label && drawerTab === 'risk') drawerTab = 'open';
    setDrawerTab(drawerTab);
  }

  function setDrawerTab(tab) {
    drawerTab = tab;
    document.querySelectorAll('#infoDrawer .nav-item').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    const body = document.getElementById('infoBody');
    if (tab === 'risk') {
      const html = riskPiHtml(current);
      body.innerHTML = html || `<p class="empty">暂无${esc(riskPiTabLabel(current) || '风险测评与 PI')}资料</p>`;
      return;
    }
    allRevealed = false;
    const pdfBtn = current.openFormPdf
      ? `<button class="link" type="button" onclick="EWH.openPdf('${esc(current.openFormPdf)}')">开户表格.pdf</button>`
      : '';
    body.innerHTML = `<div class="sec-title-row">
          <span class="sec-title-left">
            <strong>开户资料</strong>
            <button class="reveal-all" type="button" id="maskAllBtn" onclick="EWH.toggleAllSecrets()" title="显示或隐藏下面全部打码字段">
              <i class="fa-regular fa-eye"></i>
            </button>
          </span>
          ${pdfBtn}
        </div>` + openProfileHtml(current);
  }

  function openInfo(id) {
    ensureDrawer();
    const c = getClient(id || (current && current.id) || 'ma0030');
    drawerTab = 'open';
    fillDrawer(c);
    document.body.classList.add('info-open');
    document.getElementById('infoDrawer').setAttribute('aria-hidden', 'false');
  }

  function closeInfo() {
    document.body.classList.remove('info-open');
    const d = document.getElementById('infoDrawer');
    if (d) d.setAttribute('aria-hidden', 'true');
    resetSecrets();
  }

  function resetSecrets() {
    allRevealed = false;
    document.querySelectorAll('.secret').forEach((el) => {
      el.textContent = el.dataset.mask;
    });
    const allBtn = document.getElementById('maskAllBtn');
    if (allBtn) {
      allBtn.innerHTML = '<i class="fa-regular fa-eye"></i>';
      allBtn.title = '显示全部打码字段';
    }
  }

  function setAllSecrets(show) {
    allRevealed = show;
    document.querySelectorAll('#infoBody .secret').forEach((el) => {
      el.textContent = show ? el.dataset.full : el.dataset.mask;
    });
    const allBtn = document.getElementById('maskAllBtn');
    if (allBtn) {
      allBtn.innerHTML = show ? '<i class="fa-regular fa-eye-slash"></i>' : '<i class="fa-regular fa-eye"></i>';
      allBtn.title = show ? '隐藏全部打码字段' : '显示全部打码字段';
    }
  }

  function toggleAllSecrets() {
    setAllSecrets(!allRevealed);
  }

  function openPdf(name) {
    toast(`已打开 ${name}（原型不落盘，取中台该交易账号文件）`);
  }

  function headerTags(c) {
    const pi = c.isPI ? '<span class="tag tag-pi">PI</span>' : '';
    return `
      <span class="tag tag-acct">${esc(c.account)}</span>
      ${c.riskLevel ? `<span class="tag tag-risk">${esc(c.riskLevel)}</span>` : ''}
      ${pi}
      <span class="tag tag-im">${esc(c.subject)}</span>`;
  }

  function slicePage(rows, page, size) {
    const total = rows.length;
    const pages = total ? Math.ceil(total / size) : 0;
    const cur = Math.min(Math.max(1, page), pages || 1);
    const start = total ? (cur - 1) * size : 0;
    return {
      slice: rows.slice(start, start + size),
      total, pages, page: cur,
      from: total ? start + 1 : 0,
      to: Math.min(start + size, total)
    };
  }

  function renderPager(el, kind, info) {
    if (!el) return;
    if (!info.total) { el.innerHTML = ''; return; }
    const nums = Array.from({ length: info.pages }, (_, i) => i + 1);
    el.innerHTML = `
      <span>显示第 ${info.from}-${info.to} 条，共 ${info.total} 条</span>
      <div class="pager-btns">
        <button class="pg" type="button" ${info.page <= 1 ? 'disabled' : ''} onclick="EWH.goStmtPage('${kind}', ${info.page - 1})">&lt;</button>
        ${nums.map((n) => `<button class="pg${n === info.page ? ' active' : ''}" type="button" onclick="EWH.goStmtPage('${kind}', ${n})">${n}</button>`).join('')}
        <button class="pg" type="button" ${info.page >= info.pages ? 'disabled' : ''} onclick="EWH.goStmtPage('${kind}', ${info.page + 1})">&gt;</button>
        <select onchange="EWH.changeStmtSize('${kind}', this.value)">
          ${PAGE_SIZES.map((s) => `<option value="${s}" ${s === stmtSize[kind] ? 'selected' : ''}>${s} 条/页</option>`).join('')}
        </select>
      </div>`;
  }

  function goStmtPage(kind, page) {
    stmtPage[kind] = page;
    if (kind === 'daily') renderDaily();
    else renderMonthly();
  }

  function changeStmtSize(kind, size) {
    stmtSize[kind] = Number(size);
    stmtPage[kind] = 1;
    if (kind === 'daily') renderDaily();
    else renderMonthly();
  }

  function searchDaily() { stmtPage.daily = 1; renderDaily(); }
  function searchMonthly() { stmtPage.monthly = 1; renderMonthly(); }

  function renderDaily() {
    const fromEl = document.getElementById('dailyFrom');
    if (!fromEl) return;
    const from = fromEl.value;
    const to = document.getElementById('dailyTo').value;
    const rows = DAILY.filter((r) => r.date >= from && r.date <= to);
    const info = slicePage(rows, stmtPage.daily, stmtSize.daily);
    stmtPage.daily = info.page || 1;
    const body = document.getElementById('dailyBody');
    body.innerHTML = rows.length
      ? info.slice.map((r) => `<tr>
          <td>${r.date}</td>
          <td>${r.ready
            ? `<span class="ops"><button class="link" type="button" onclick="EWH.askPwd('日结单','${r.date}','open')">打开</button><button class="link" type="button" onclick="EWH.askPwd('日结单','${r.date}','download')">下载</button></span>`
            : `<button class="link" type="button" disabled>生成中</button>`}</td>
        </tr>`).join('')
      : '<tr><td colspan="2" class="empty">该区间无日结单</td></tr>';
    renderPager(document.getElementById('dailyPager'), 'daily', info);
  }

  function renderMonthly() {
    const yearEl = document.getElementById('yearSel');
    if (!yearEl) return;
    const year = yearEl.value;
    const rows = MONTHLY.filter((r) => r.year === year);
    const info = slicePage(rows, stmtPage.monthly, stmtSize.monthly);
    stmtPage.monthly = info.page || 1;
    const body = document.getElementById('monthlyBody');
    body.innerHTML = rows.length
      ? info.slice.map((r) => `<tr>
          <td>${r.period}</td>
          <td><span class="ops"><button class="link" type="button" onclick="EWH.askPwd('月结单','${r.period}','open')">打开</button><button class="link" type="button" onclick="EWH.askPwd('月结单','${r.period}','download')">下载</button></span></td>
        </tr>`).join('')
      : '<tr><td colspan="2" class="empty">该年无月结单</td></tr>';
    renderPager(document.getElementById('monthlyPager'), 'monthly', info);
  }

  function switchStmt(kind) {
    document.querySelectorAll('.stmt-tab').forEach((t) => {
      t.classList.toggle('active', t.dataset.kind === kind);
    });
    const daily = document.getElementById('dailyPane');
    const monthly = document.getElementById('monthlyPane');
    if (daily) daily.hidden = kind !== 'daily';
    if (monthly) monthly.hidden = kind !== 'monthly';
    if (kind === 'daily') renderDaily();
    else renderMonthly();
  }

  function askPwd(kind, period, action) {
    pendingStmt = { kind, period, action };
    const verb = action === 'download' ? '下载' : '打开';
    document.getElementById('pwdTitle').textContent = verb + '结单';
    document.getElementById('pwdConfirm').textContent = verb;
    document.getElementById('pwdDesc').textContent = `${verb}${kind} ${period}，请输入客户证件号码后 6 位（不含括号）。`;
    document.getElementById('pwdErr').textContent = '';
    document.getElementById('pwdInput').value = '';
    document.getElementById('pwdMask').classList.add('show');
    document.getElementById('pwdInput').focus();
  }

  function closePwd() {
    const mask = document.getElementById('pwdMask');
    if (mask) mask.classList.remove('show');
    pendingStmt = null;
  }

  function confirmPwd() {
    const val = document.getElementById('pwdInput').value.trim();
    if (!/^[A-Za-z0-9]{6}$/.test(val)) {
      document.getElementById('pwdErr').textContent = '请输入 6 位字母或数字';
      return;
    }
    if (val.toUpperCase() !== String(current.pwd).toUpperCase()) {
      document.getElementById('pwdErr').textContent = '密码不正确，请按 ! 旁示例核对证件号码后 6 位';
      return;
    }
    const { kind, period, action } = pendingStmt;
    closePwd();
    toast(action === 'download' ? `已下载${kind} ${period}（原型不落盘）` : `已打开${kind} ${period}（原型不落盘）`);
  }

  function bindKeys() {
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (document.getElementById('pwdMask') && document.getElementById('pwdMask').classList.contains('show')) closePwd();
      else closeInfo();
    });
    const input = document.getElementById('pwdInput');
    if (input) input.addEventListener('keydown', (e) => { if (e.key === 'Enter') confirmPwd(); });
  }

  global.EWH = {
    CLIENTS, LIST, getClient, toast,
    openInfo, closeInfo, setDrawerTab, toggleAllSecrets, openPdf, headerTags,
    renderDaily, renderMonthly, searchDaily, searchMonthly, switchStmt,
    goStmtPage, changeStmtSize, askPwd, closePwd, confirmPwd, bindKeys,
    setCurrent(c) { current = c; }
  };
})(window);
