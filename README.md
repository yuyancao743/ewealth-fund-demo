# 基金产品库 HTML 原型（GitHub Pages）

在线 Mock 原型：**中台基金产品库** + **eWealth Hub 产品甄选**，数据来自静态 JS，无后端。

## 导航入口（推荐）

**[hub.html — 原型导航页](https://yuyancao743.github.io/ewealth-fund-demo/hub.html)**

## 外部访问链接

### eWealth Hub

| 页面 | 链接 |
|------|------|
| 基金产品列表 | https://yuyancao743.github.io/ewealth-fund-demo/#/list |
| 产品详情（平安货币基金示例） | https://yuyancao743.github.io/ewealth-fund-demo/#/detail/HK0000720752 |

### GSL 中台

| 页面 | 链接 |
|------|------|
| 基金新 → 产品库 | https://yuyancao743.github.io/ewealth-fund-demo/mof/Fund_Product_Library_List.html |
| 运营配置 → 活动配置 | https://yuyancao743.github.io/ewealth-fund-demo/mof/Ops_Banner_Config.html |
| 发行商管理 → 基金 | https://yuyancao743.github.io/ewealth-fund-demo/mof/Issuer_Fund_House_List.html |

## 本地同步与发布

源文件位于 `GSLcursor需求` 工作区，发布前执行：

```bash
cd "/Users/yuyancao/GSLcursor需求/ewealthhub/Fund 产品库/demo"
chmod +x deploy-to-github.sh
./deploy-to-github.sh
```

或手动将以下目录同步到本仓库后 `git push`：

- eWealth：`ewealthhub/Fund 产品库/demo的原型/` → 仓库根目录
- 中台：`GSL中台/基金产品库/*.html` + `data/` → `mof/`

## GitHub Pages 设置

仓库 **Settings → Pages → Build and deployment**：

- Source: **Deploy from a branch**
- Branch: **main** / **root**

`.nojekyll` 已包含，避免 Jekyll 处理静态资源。
