# 网站内容主稿

这份文件是当前网站内容的可编辑 Markdown 主稿，目标是让后续内容维护尽量先改这里，再由 Codex agent 同步到实际站点文件。

## 使用约定

- 默认把这份文件当作“内容真源”。
- 如果你想改网站内容，优先先改这份文件，再告诉 Codex agent：“请按照 `SITE_CONTENT.md` 同步网站并 push”。
- 这份文件主要覆盖“内容”，不直接覆盖样式细节；视觉样式仍以 `src/styles/global.css` 和 Astro 组件为准。

## 内容映射

| 本文档部分 | 对应站点文件 |
| --- | --- |
| 站点基础信息、个人简介、外部链接 | `src/data/site.ts` |
| Research 列表各条目 | `src/content/publications/*.md` |
| 首页区块结构与展示顺序规则 | `src/pages/index.astro`、`src/components/PublicationList.astro` |
| Footer 文案 | `src/layouts/BaseLayout.astro` + `src/data/site.ts` |
| Publications 页面跳转说明 | `src/pages/publications.astro` |
| 404 页面文案 | `src/pages/404.astro` |
| 静态资源文件名 | `public/` |

## 当前网站完整内容

### 1. 站点基础信息

```yaml
name: Haoran Guo
siteName: Haoran Guo
role: PhD Student, Management Science and Engineering (Tsinghua University)
affiliation: Tsinghua University
location: Beijing, China
email: ghr24@mails.tsinghua.edu.cn
description: Academic homepage for research on smart-city operations, data-driven optimization, and analytics for social good.
siteUrl: https://haoran-guo-home.github.io
updatedAt: September 20, 2026
avatarUrl: /profile-photo.png
```

- 默认浏览器页签标题：`Haoran Guo`

### 2. 首页主介绍区

#### 标题

`Haoran Guo`

#### 简介段落

1.

I am a PhD student in Management Science and Engineering at Tsinghua University, where I am fortunate to be advised by [Prof. Wei Qi](https://wei-qi-home.github.io/). Prior to my doctoral studies, I received a B.S. in Industrial Engineering from Tsinghua University in 2024.

2.

I am currently visiting the Cornell SC Johnson College of Business, hosted by [Prof. Meng Qi](https://alicemengqi.github.io/site/).

3.

My research interests include smart-city operations, data-driven optimization, and analytics for social good.

### 3. 首页右侧个人信息卡

#### 邮箱

`ghr24@mails.tsinghua.edu.cn`

#### 外部链接

- CV: `/haoran-guo-cv.pdf`
- Google Scholar: `https://scholar.google.com/citations?user=mw29FU4AAAAJ&hl=zh-CN`
- LinkedIn: `https://www.linkedin.com/in/haoran-guo-3a4906275/`

#### 头像资源

- 头像文件：`public/profile-photo.png`
- 如果未来希望取消头像并改为首字母占位，需要把 `avatarUrl` 改成 `null`

### 4. Footer

Footer 当前显示三项：

1. `Haoran Guo`
2. `Tsinghua University`
3. `Updated: September 20, 2026`

### 5. Research 区块展示规则

- 区块标题：`Research`
- Research 条目来自 `src/content/publications/`
- `hidden: true` 的条目暂不在网站显示；恢复展示时移除该设置或改为 `false`。
- 当前排序规则如下：
  - `featured: true` 的条目优先
  - 再按 `year` 从大到小
  - 再按类别顺序：`publication` → `working-paper` → `work-in-progress`
  - 最后按标题字母序
- 当前所有条目都设置了 `featured: true`
- Media Coverage 在同一段中按媒体名称列出链接，以分号分隔；不展示报道标题。

### 6. Research 条目

以下按首页排序规则列出条目；标记 `hidden: true` 的条目保留在内容主稿中，暂不展示。

#### 条目 1

```yaml
slug: political-networks-and-policy-implementation
sourceFile: src/content/publications/political-networks-and-policy-implementation.md
title: The 15-Minute City on Wheels: Rethinking Inclusive Accessibility via Mobile Amenities
authors:
  - Haoran Guo
  - Zhuolun Dong
  - Junyu Cao
  - Wei Qi
year: 2026
category: work-in-progress
status: Work in Progress
abstract: Rethinking inclusive accessibility through mobile amenities in the context of the 15-minute city.
featured: true
hidden: true
```

#### 条目 2

```yaml
slug: state-capacity-and-firm-adjustment
sourceFile: src/content/publications/state-capacity-and-firm-adjustment.md
title: Designing Walkable Neighborhoods: A Data-Driven Optimization Framework
authors:
  - Haoran Guo
  - Sentao Miao
  - Wei Qi
  - Jian Cui
  - Zhenning Dong
year: 2025
category: working-paper
status: Major Revision at Management Science
abstract: |
  Cities increasingly seek walkable neighborhoods for sustainable urban development, yet most walkability approaches focus on whether daily needs are nearby rather than whether travelers actually choose to walk. This paper studies how to allocate limited facility resources across street networks to encourage walking over driving. We formulate a link-level facility allocation problem (LFAP) that maximizes aggregate walking probability. Using large-scale citywide mobility and facility data from a Chinese map service platform, we estimate a latent-class logit model that captures heterogeneous traveler responses to en-route facility exposure. Complementary empirical analyses consistently indicate a positive association between en-route retail exposure and walking. We analyze LFAP's structure to explain what drives facility concentration or dispersion. We establish its NP-hardness and develop an exact exponential-cone reformulation and a scalable greedy algorithm with a computable performance guarantee. In a Beijing neighborhood case study, choice-based planning achieves higher walking probabilities than alternative policies and generates greater predicted pedestrian exposure per retail unit. The case study further shows that concentrating facilities is most valuable under moderately walkable conditions, while more dispersed layouts are preferable at either extreme. A higher discretionary-trip share further reduces the need for concentration. Larger budgets provide more flexibility to adjust the recommended layout in practice. For established neighborhoods to become more walkable, reallocation offers strong early returns and can reduce the need for additions at intermediate targets, but higher targets ultimately require expansion. More broadly, this work shows how data-driven optimization can help cities move from measuring walkability to designing for it.
links:
  paper: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5356595
bullets:
  - highlight: "Winner,"
    text: CSAMSE Best Paper Award, 2026
  - highlight: "Finalist,"
    text: INFORMS Public Sector Operations Research (PSOR) Best Paper Award, 2025
mediaLinks:
  - label: CU Boulder Today
    href: https://www.colorado.edu/today/2026/03/11/why-walkable-neighborhoods-arent-just-about-distance
  - label: Amap (in Chinese)
    href: https://mp.weixin.qq.com/s/ByaVhK6lohgq2G5QtP098w
  - label: Mr. Mall (in Chinese)
    href: https://mp.weixin.qq.com/s/7Gi8ArSUbtNLDKal1-XxnQ
featured: true
```

#### 条目 3

```yaml
slug: overworking-or-outsourcing
sourceFile: src/content/publications/overworking-or-outsourcing.md
title: Overworking or Outsourcing: Integrated Prediction and Optimization for Managing Overtime under Uncertainty
authors:
  - Haoran Guo
  - Meng Qi
  - Wei Qi
year: 2025
category: working-paper
status: Reject & Resubmit at Management Science
abstract: |
  Effective overtime control is essential for both operational sustainability and workforce well-being under workload fluctuations and uncertainty. In operational settings such as last-mile delivery, there are often external options to outsource workload at a higher cost, introducing a key trade-off between overworking and the cost of outsourcing. To navigate this trade-off under uncertainty, the two-step predict-then-optimize (PTO) paradigm faces a fundamental misalignment: standard prediction models are trained with statistical objectives that disregard downstream decision outcomes, leading to excessive overworking and compromised employee well-being. To address this challenge, we formulate this problem as a contextual stochastic optimization (CSO) and propose an integrated prediction-optimization (IPO) framework. Leveraging the problem structure, we derive performance-guaranteed point predictions for this CSO problem despite the nonlinear objective. Theoretically, we construct a decision-aware predictor through geometric analysis of the 伪-superlevel set and establish its excess decision risk bound. Guided by theoretical insights on the selection of probability mass 伪, we develop two efficient algorithms for practical implementation along with consistency results. Numerical experiments demonstrate that our approach significantly outperforms standard PTO methods. Challenging a prevalent assumption, we find that simple, decision-focused predictions can outperform complex, decision-blind neural networks in decision quality. A case study in urban last-mile delivery is conducted to validate the practical relevance of our model and distill managerial implications. Results reveal that our approach has a growing advantage as the overtime penalty increases, and that overtime is often driven by a small subset of tasks, which should be identified in a decision-aware manner.
links:
  paper: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5054050
bullets:
  - highlight: "Winner,"
    text: INFORMS Transportation Science & Logistics (TSL) Best Student Paper Award, 2025
  - highlight: "Finalist,"
    text: IISE DAIS Division Best Student Paper Competition, 2024
featured: true
```

#### 条目 4

```yaml
slug: institutional-change-and-local-growth
sourceFile: src/content/publications/institutional-change-and-local-growth.md
title: A Bi-Level Programming Approach to Optimize Ship Fouling Cleaning
authors:
  - Wei Wang
  - Haoran Guo
  - Fei Li
  - Lu Zhen
  - Shuaian Wang
year: 2023
category: publication
hidden: true
venue: Journal of Marine Science and Engineering, Vol. 11, No. 12, Article 2324, MDPI
abstract: |
  Ship fouling has significant adverse effects on vessel performance and environmental sustainability. Therefore, this research study develops a bi-level programming model to simultaneously optimize cleaning equipment deployment by cleaning service providers in the upper level and cleaning decisions by shipping companies in the lower level. To address the interaction within the bi-level problem, the model is transformed into a single-level formulation using the big-M method. This transformation greatly simplifies the complexity of the computation and reduces computation time. Numerical experiments are conducted using real-world data to evaluate the performance of the proposed models. In addition, sensitivity analyses are performed to investigate the influence of key parameters. The results indicate that cleaning service providers primarily purchase equipment in the first year based on the demand distribution. To maximize profit, they may choose to forgo a portion of the demand. The sensitivity analysis reveals that sacrificing part of the demand can lead to an additional USD 27 million in profits compared with satisfying all demand. Moreover, increasing the cleaning price reduces both demand and equipment purchases but increases total profits. Conversely, increasing purchase costs reduces profits and the total amount of equipment purchased. When service providers can no longer generate profits, they are likely to exit the market. These findings offer valuable insights for service providers and shipping companies in the practical deployment of cleaning equipment and foul cleaning decisions, respectively.
featured: true
```

### 7. Publications 页面

- 路径：`/publications`
- 当前行为：立即跳转到首页的 `/#research`
- 当前页面文案：`Redirecting to the research section...`

### 8. 404 页面

```yaml
title: Page Not Found
description: The requested page could not be found.
heading: Page Not Found
body: The page you requested does not exist or has moved.
button: Return Home
buttonHref: /
```

### 9. 当前使用的静态资源

- `public/profile-photo.png`
- `public/haoran-guo-cv.pdf`
- `public/favicon.svg`
- `public/favicon.png`
- `public/BingSiteAuth.xml`
- `public/google918998e5bb6dd1db.html`
- `public/robots.txt`
- `public/sitemap.xml`

## 维护说明

- 如果只是改文字、链接、论文条目，优先改这份文件，再同步到 `src/data/site.ts` 与 `src/content/publications/*.md`。
- 如果新增论文，建议在这里先补一个新条目，再让 Codex agent 新建对应的 `src/content/publications/<slug>.md`。
- 如果改了 `siteUrl`、CV 文件名、头像文件名、论文附件链接，也要同步检查 `public/` 里的对应资源是否存在。
- 如果你希望 footer 的更新时间一起变化，需要同步更新 `updatedAt`。
