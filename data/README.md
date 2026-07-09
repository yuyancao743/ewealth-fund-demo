# Fund 产品库

MMF 货币基金产品库需求、设计与原型资料。

## 文档

| 文件 | 说明 |
|------|------|
| [文档/基金产品库_实施计划.md](文档/基金产品库_实施计划.md) | **总计划**（进度、架构、待办 HTML） |
| [文档/基金产品库_功能规格说明_CN.md](文档/基金产品库_功能规格说明_CN.md) | 功能规格、上架流程、API 草案 |
| [文档/基金产品库_数据库设计文档.md](文档/基金产品库_数据库设计文档.md) | 表结构、OpenFunds 字段映射 |
| [文档/fund_product_library_schema.sql](文档/fund_product_library_schema.sql) | MySQL DDL |

## HTML 原型（eWealth Hub）

用浏览器打开：

- [列表页](Fund%20Product货架资料/demo的原型/products-funds-public.html) — Banner / 精选 / PK / 货架 / 空态
- [详情页](Fund%20Product货架资料/demo的原型/fund-detail-public.html) — 10 只 MMF，?id=HK0000288743

**演示技巧：** 列表页右上角勾选「模拟接口异常」可查看「暂无数据」空态。

## 中台 HTML 原型（本期仅此目录）

👉 [GSL中台/基金产品库/](../../GSL中台/基金产品库/)

| 页面 | 路径 |
|------|------|
| 产品库列表 | [Fund_Product_Library_List.html](../../GSL中台/基金产品库/Fund_Product_Library_List.html) |
| 产品录入 | [Fund_Product_Library_Create.html](../../GSL中台/基金产品库/Fund_Product_Library_Create.html) |
| 产品详情 | [Fund_Product_Library_Detail.html](../../GSL中台/基金产品库/Fund_Product_Library_Detail.html) |
| Banner 配置 | [Ops_Banner_Config.html](../../GSL中台/基金产品库/Ops_Banner_Config.html) |

> `GSL中台/基金记录/` 为旧模块（订单/持仓），本期不用。

## 参考资料

- `Fund Product货架资料/` — Ayers API、OpenFunds 行业标准 PDF

## 中台相关

- 菜单：`GSL中台/菜单优化/GSL_侧边栏菜单_6父菜单原型.html`（菜单更新待执行）
- **本期原型目录：** `GSL中台/基金产品库/`（仅 4 个 HTML）
- 旧目录 `GSL中台/基金记录/` 含订单/持仓，本期不用
