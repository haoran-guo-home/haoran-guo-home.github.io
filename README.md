# 学术个人网站使用说明

这份说明是给“第一次做个人网站”的你写的。

你现在这个网站是一个静态网站，优点是：

- 很省心，不需要服务器
- 维护方式简单，改文字和论文列表就行
- 可以直接免费部署到 GitHub Pages
- 很适合学术主页这种更新频率不高、但要长期存在的网站

如果你的目标是：

- 让别人能打开你的网站
- 让 Google / Bing 慢慢搜得到你
- 以后你自己也能轻松维护

那就按下面的顺序做，基本不会出大问题。

## 一句话理解整个流程

你需要完成 4 件事：

1. 把内容改成你自己的
2. 把网站发布到 GitHub Pages
3. 给网站一个稳定网址
4. 主动提交给搜索引擎收录，并在学术平台上挂链接

只有“网站已经上线并且能稳定访问”，搜索引擎才有机会收录。

## 你平时主要改哪些文件

最常改的是这几个地方：

- 基本信息：`src/data/site.ts`
- 论文列表：`src/content/publications/*.md`
- 首页结构：`src/pages/index.astro`
- 论文页结构：`src/pages/publications.astro`
- 全局样式：`src/styles/global.css`

如果你只是想更新主页内容，通常根本不用碰别的文件。

## 第一步：先把网站内容改成你自己的

### 1. 修改个人信息

编辑 `src/data/site.ts`：

- 姓名
- 身份
- 单位
- 邮箱
- 研究方向
- 个人简介
- 外部链接

这里最重要的一个字段是：

- `siteUrl`

它必须改成你网站最终的真实地址，比如：

- `https://yourname.github.io`
- 或 `https://your-domain.com`

这个地址会影响：

- 页面 canonical URL
- 搜索引擎对页面的理解
- 后续 SEO 的基础设置

如果这里一直写成 `https://example.github.io`，搜索引擎会拿到错误地址，不利于收录。

### 2. 修改论文列表

每篇论文对应 `src/content/publications/` 里的一个 Markdown 文件。

你新增论文时，只要：

1. 新建一个 `.md` 文件
2. 按现有格式填写标题、作者、年份、类别、状态、摘要、链接

其中 `category` 只用这 3 个值：

- `publication`
- `working-paper`
- `work-in-progress`

### 3. 可选：放头像和 PDF

如果你以后要加：

- 头像
- CV PDF
- 论文 PDF

可以放到 `public/` 目录下。

这个目录里的文件会被原样发布，适合放静态资源。

## 第二步：本地预览网站

这一步的目标：在你自己的电脑上跑起来一个「临时小服务器」，用浏览器看到和线上一致的页面，改内容时也可以随时刷新查看。

### Node.js 是什么（为什么要装）

**Node.js** 是在你电脑上运行 JavaScript 的工具。对本项目来说，你只需要知道两件事：

- 装 Node 的时候，会附带安装 **npm**（Node Package Manager），用来下载项目依赖（写在 `package.json` 里）并执行脚本（例如 `npm run dev`）。
- 你**不需要**学会写 Node 程序，只要会安装、打开终端、复制运行命令即可。

### 在 Windows 上安装 Node.js（推荐做法）

1. 用浏览器打开 Node 官网：[https://nodejs.org/](https://nodejs.org/)。
2. 下载 **LTS**（Long Term Support）版本安装包，不要选 “Current” 尝鲜版，减少兼容问题。
3. 运行安装程序，一路 **Next** 即可；其中若出现 **“Add to PATH”** 之类选项，保持勾选（默认一般是勾上的）。
4. **完全关掉**已经打开的 PowerShell / 终端窗口，再**新开**一个窗口，这样系统才能识别到新装的命令。

### 确认是否安装成功

在新开的 **PowerShell** 里分别输入（每行回车一次）：

```bash
node -v
```

```bash
npm -v
```

若都能打印出类似 `v22.x.x` 和 `10.x.x` 的版本号，说明安装成功。

若提示 **找不到命令**（`node` 不是内部或外部命令）：

- 先确认是否已关闭所有旧终端再重开；
- 仍不行则重启电脑后再试；
- 仍不行可在 Windows **设置 → 应用 → 已安装的应用** 里卸载 Node，重新安装时留意是否有 **添加到 PATH** 的选项。

### 进入项目文件夹

终端里的「当前目录」必须是你网站的根目录（能看到 `package.json`、`README.md` 的那一层）。

在 PowerShell 里示例（请把路径改成你电脑上的实际路径）：

```bash
cd "d:\THU PhD\Personal Website"
```

不确定是否在对的目录时，可以列出文件：

```bash
dir
```

若列表里能看到 `package.json`，说明位置正确。

### 安装依赖并启动预览

仍在项目根目录执行。

**Windows 自带的 PowerShell 5.x**（很常见）**不支持**用 `&&` 把两条命令连在一起，会报错「`&&` 不是此版本中的有效语句分隔符」。下面**方式 A** 最省事；若你已安装 **PowerShell 7+** 或 **Git Bash**，可用方式 B。

**方式 A（推荐，兼容自带 PowerShell）**：分两行执行，上一行成功后再执行下一行：

```bash
npm install
```

```bash
npm run dev
```

**方式 B（一条命令，需 PowerShell 7+ 或 Git Bash）**：

```bash
npm install && npm run dev
```

- **`npm install`**：根据 `package.json` 下载依赖（首次或换电脑后需要；会生成 `node_modules` 文件夹，体积可能较大，属正常现象）。
- **`npm run dev`**：启动开发服务器；成功后终端里会显示本地访问地址。

用浏览器打开终端里提示的地址（一般为 **`http://localhost:4321`**，若端口被占用可能是别的数字，以终端显示为准）。

### 预览时要检查什么

- 首页是否正常显示
- 论文页面是否正常分组
- 名字、单位、邮箱是否正确
- 页面里没有明显占位内容

在开发模式下，你修改 `src/` 下的文件并保存后，浏览器往往会**自动刷新**；若没有，手动刷新一次即可。

### 可选：本地构建正式版（与线上更接近）

预览没问题后，可再执行：

```bash
npm run build
```

成功后会生成 `dist/` 目录，即静态站点输出。日常改内容不必每次 build，**第三步**里线上构建由 GitHub Actions 完成。

### 常见问题（新手向）

- **`npm install` 很慢或超时**  
  多为网络问题，可换个网络时段重试，或了解国内常用的 npm 镜像（进阶，非必须）。

- **`EACCES` / 权限错误**  
  不要把项目放在需要管理员权限的系统目录；放在用户文档下的普通文件夹更简单。

- **端口被占用**  
  关掉占用同一端口的其他程序，或看终端里 Astro 是否自动换了一个端口并用新地址打开。

## 第三步：把网站发布到 GitHub Pages

这是最关键的一步。只有网站上线了，别人和搜索引擎才能访问。

下面按「完全新手」来写：你不需要事先会 Git 或 GitHub，只要按顺序做即可。

### 先搞清三个词（30 秒）

- **GitHub**：放代码的网站，相当于「网盘 + 协作 + 自动部署」。
- **仓库（Repository）**：一个项目对应一个仓库，里面是你的文件和历史记录。
- **Git**：在你电脑上运行的工具，用来把本地文件夹和 GitHub 上的仓库同步。

本项目已经配好了 **GitHub Actions**：你只要把代码推到 GitHub，云端会自动执行 `npm install`、`npm run build`，并把生成的静态网页发布到 **GitHub Pages**。

### 0. 准备工作（只做一次）

1. **注册 GitHub 账号**  
   打开 [https://github.com/](https://github.com/)，用邮箱注册并登录。记住你的 **用户名**（例如 `zhangsan`），后面网址里会用到。

2. **在 Windows 上安装 Git**  
   打开 [https://git-scm.com/download/win](https://git-scm.com/download/win)，下载安装包，一路下一步即可。装好后打开 **PowerShell** 或 **“Git Bash”**，输入 `git --version`，若显示版本号说明安装成功。

3. **本机要有 Node.js（第二步已做过可跳过）**  
   发布本身在云端构建，但你在本地预览、改内容时仍需要 Node。若尚未安装，可到 [https://nodejs.org/](https://nodejs.org/) 安装 LTS 版本。

### 1. 决定仓库名字（这会决定网址）

**GitHub Pages 的网址**和仓库名有关，常见两种：

| 仓库类型 | 仓库名示例 | 网站地址示例 |
| --- | --- | --- |
| 用户主页（推荐，网址最短） | `你的用户名.github.io` | `https://你的用户名.github.io` |
| 普通项目仓库 | `personal-website` 等 | `https://你的用户名.github.io/personal-website/` |

- 想要**最简洁的根域名**，请把仓库命名为 **`你的GitHub用户名.github.io`**（用户名必须和 GitHub 上完全一致，区分大小写按 GitHub 显示为准）。
- 用**普通项目名**也可以，只是网址会多一段路径；本项目的 `astro.config.mjs` 会根据仓库名自动设置 `base`，一般不用你手工改路径。

### 2. 在 GitHub 上创建空仓库

1. 登录 GitHub，右上角 **+** → **New repository**。
2. **Repository name** 填上一步决定的名字（例如 `zhangsan.github.io`）。
3. 选 **Public**（免费使用 GitHub Pages 通常选公开即可）。
4. **不要**勾选 “Add a README” 等初始化选项（你本地已有完整项目，保持空仓库推送最省事）。
5. 点 **Create repository**。

创建完成后，页面会显示仓库地址，记下来两种里的一种即可：

- HTTPS：`https://github.com/你的用户名/仓库名.git`
- SSH：`git@github.com:你的用户名/仓库名.git`（需额外配置 SSH 密钥，新手可先用 HTTPS）

### 3. 在本地项目里连接 GitHub 并推送

在 **PowerShell** 里进入你的项目文件夹（本仓库根目录，能看到 `package.json` 的那一层），例如：

```bash
cd "d:\THU PhD\Personal Website"
```

**若该文件夹还从来没有用过 Git**（没有 `.git` 目录），把下面命令里的仓库地址换成你上一步复制的。

**方式 A（推荐，兼容 Windows 自带 PowerShell）**：**一行一行**执行（每行回车后等它完成再输下一行）：

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial site"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/你的用户名/你的仓库名.git
```

```bash
git push -u origin main
```

**方式 B（一条命令，需 PowerShell 7+ 或 Git Bash）**：

```bash
git init && git add . && git commit -m "Initial site" && git branch -M main && git remote add origin https://github.com/你的用户名/你的仓库名.git && git push -u origin main
```

第一次 `git push` 时，GitHub 可能会弹出浏览器让你登录或输入 **Personal Access Token**（把令牌当密码用）。这是正常现象，按 GitHub 当前页面提示操作即可。

**若提示 `remote origin already exists`**：说明已经加过远程地址，可先 `git remote -v` 查看，需要改地址时用：

```bash
git remote set-url origin https://github.com/你的用户名/你的仓库名.git
```

然后再 `git push -u origin main`。

**若 GitHub 创建仓库时带了 README** 导致推送被拒绝：先在网页上把 README 删掉或按提示 `git pull` 再推送；新手更简单的方式是：**新建仓库时不要勾选任何初始化文件**，再推送。

### 4. 打开 GitHub Pages（必须做一次）

代码推上去之后，还要告诉 GitHub「用 Actions 来发布网站」：

1. 打开该仓库页面，点 **Settings**。
2. 左侧点 **Pages**。
3. 在 **Build and deployment** 里，**Source** 选择 **GitHub Actions**（不要选 “Deploy from a branch” 的旧方式，本项目用的是 Actions 工作流）。
4. 若页面提示需要授权 **Workflow permissions**，按说明在 **Settings → Actions → General** 里允许读写 **Workflow**（以你当前页面提示为准）。

保存后，一般不用在 Pages 里再选手动分支，部署由 `.github/workflows/deploy.yml` 触发。

### 5. 确认自动部署是否成功

1. 打开仓库顶部的 **Actions** 标签。
2. 应能看到 **Deploy to GitHub Pages** 工作流在运行或已完成。
3. 第一次请等到它显示 **绿色勾**（成功）。若失败，点进该次运行查看红色日志，常见原因是依赖安装失败或 Node 版本问题（可对照本仓库工作流里的 `node-version`）。

成功后，**Pages** 设置页或 Actions 摘要里会出现 **Visit site** 或你的 **Pages URL**。用浏览器打开：

- 用户主页仓库：`https://你的用户名.github.io`
- 项目仓库：`https://你的用户名.github.io/仓库名/`

### 6. 部署后你要检查什么

- 首页能否打开
- `Publications` 页面能否打开
- 样式是否正常（若样式错乱，多半是 `base` 与仓库名不一致，请核对仓库名是否为预期、是否用了 `用户名.github.io` 专用仓库）
- 网址是否与你计划在 `src/data/site.ts` 里填写的 `siteUrl` 一致

若打不开，优先看 **Actions** 是否失败，再看 **Settings → Pages** 是否已选 **GitHub Actions**。

### 7. 以后怎么更新网站

改完内容后在项目根目录执行（**自带 PowerShell** 请分行；**PowerShell 7+ / Git Bash** 可用一条）：

```bash
git add .
git commit -m "Update site"
git push
```

推送后 Actions 会再次构建并覆盖线上版本，一般几分钟内生效。

### 常见问题（新手向）

- **PowerShell 报错：`&&` 不是此版本中的有效语句分隔符**  
  你用的是 **Windows 自带 PowerShell 5.x**，它不支持 `&&`。请改用本文**分行**写的 `git` / `npm` 命令，或安装 [PowerShell 7](https://learn.microsoft.com/powershell/scripting/install/installing-powershell-on-windows) / 使用 **Git Bash** 再试一条命令写法。

- **我找不到 “Source: GitHub Actions”**  
  确认仓库是新版 Pages；界面可能微调，关键词是 **GitHub Actions** 作为发布来源。

- **推送时一直要密码**  
  GitHub 已不支持账户密码推送 HTTPS，请使用 **Personal Access Token** 或改用 **GitHub Desktop** 图形客户端登录后推送。

- **想用图形界面而不是命令行**  
  可安装 [GitHub Desktop](https://desktop.github.com/)，用 “Add existing repository” 选本地文件夹，登录后 **Publish repository** 到 GitHub，再在网页上同样到 **Settings → Pages** 选择 **GitHub Actions**。

- **构建里的 `site` 与 `site.ts` 里的 `siteUrl`**  
  搜索引擎和页面里展示用的站点地址，以你在 **`src/data/site.ts`** 里写的 `siteUrl` 为准，上线后务必改成真实地址（见第一步、第四步）。`astro.config.mjs` 里的默认 `site` 主要影响部分生成链接；若你希望与线上一致，可在熟悉后再研究通过环境变量 `SITE_URL` 与 CI 对齐（进阶，非必须才能上线）。

## 第四步：怎么让别人“搜得到”你

这部分最重要，但也最容易误解。

很多人以为“网站上线以后 Google 会立刻搜到”，其实不是。真实情况是：

- 搜索引擎先发现你的网站
- 然后抓取页面
- 再决定是否建立索引
- 最后才可能在搜索结果里出现

这通常需要几天到几周，不是即时生效。

### 对新网站最有效的做法

#### 1. 先保证网站信息完整、稳定

搜索引擎更喜欢这类页面：

- 有明确姓名
- 有单位信息
- 有邮箱或联系方式
- 有研究方向
- 有论文列表
- 页面长期可访问

所以学术主页不要做得太花，清楚稳定最重要。

#### 2. 用你自己的真实姓名做页面主标题

你的网站首页应该明确出现：

- `Haoran Guo`
- `Tsinghua University`
- 你的研究方向关键词

这样当别人搜：

- `Haoran Guo Tsinghua`
- `Haoran Guo operations management`
- `Haoran Guo publication`

搜索引擎更容易判断这是你的主页。

#### 3. 把真实网址填回配置里

上线后，请务必把 `src/data/site.ts` 里的 `siteUrl` 改成真实网址。

比如：

- `https://haoranguo.github.io`

这一步非常重要。

#### 4. 主动提交到 Google Search Console

这是零经验用户最值得做的一步。

做法：

1. 打开 [Google Search Console](https://search.google.com/search-console/)
2. 登录你的 Google 账号
3. 添加你的网站网址
4. 按提示验证站点所有权
5. 提交首页 URL，请求建立索引

如果你以后有自定义域名，也建议继续在这里管理。

你可以把这一步理解成：

- 不再“等 Google 自己发现你”
- 而是“主动告诉 Google 这里有个网站”

#### 5. 也提交到 Bing Webmaster Tools

因为很多搜索结果、学术工具和 AI 引擎也会参考 Bing 的索引。

入口：

- [Bing Webmaster Tools](https://www.bing.com/webmasters/)

做法和 Google 很像：

1. 添加网站
2. 验证所有权
3. 提交站点

#### 6. 从别的可信页面链接到你的网站

这对“被发现”和“被收录”很有帮助。

建议你把网站链接放到这些地方：

- Google Scholar 个人主页
- ORCID
- GitHub 个人主页
- LinkedIn
- 学院/实验室个人页面
- 个人邮箱签名
- 投稿系统或 conference profile

如果有导师主页、实验室主页、项目主页能挂你的网站链接，也会有帮助。

#### 7. 保持网址稳定，不要频繁改

搜索引擎不喜欢反复变化的网址。

所以最好：

- 一开始就决定好网址
- 后面不要频繁换仓库名
- 不要今天用一个域名、明天换另一个域名

## 第五步：如果你想要“更容易被搜到”，重点做什么

真正有用的是下面这些，不需要花里胡哨：

- 网站有真实姓名和单位
- 网站能长期稳定访问
- 论文标题写全
- 页面内容是文本，不是图片截图
- 把网址挂到 Google Scholar / ORCID / 学院主页
- 主动提交到 Google Search Console 和 Bing Webmaster Tools

相对没必要一开始就折腾的事情：

- 复杂 SEO 插件
- 博客系统
- 花哨动画
- 过度关键词堆砌

对于学术个人网站来说，KISS 就是最好的 SEO。

## 第六步：推荐你现在就做的事情

如果你想尽快上线，建议按这个顺序：

1. 把 `src/data/site.ts` 里的 `siteUrl` 改成未来真实网址
2. 检查所有论文条目是否正确
3. 本地运行并预览
4. 推到 GitHub
5. 等 GitHub Pages 上线
6. 打开网址确认没问题
7. 去 Google Search Console 提交收录
8. 去 Bing Webmaster Tools 提交收录
9. 把网址挂到 Google Scholar、ORCID、GitHub 主页和学院主页

## 常见问题

### 1. 为什么我已经上线了，但 Google 还搜不到？

很正常。新网站收录通常需要时间。

先检查：

- 网站能否正常打开
- `siteUrl` 是否写对
- 你是否已经提交到 Search Console
- 网站是否已经被其他页面链接到

### 2. 我没有自己的域名，可以吗？

完全可以。

先用 GitHub Pages 的免费地址就够了，比如：

- `https://你的用户名.github.io`

这对学术主页来说已经足够正式。

### 3. 需要买域名吗？

不是必须。

如果你以后想：

- 网址更短
- 更像长期个人品牌
- 不依赖 GitHub 用户名

那再买域名也不迟。

### 4. 这个网站以后怎么更新？

非常简单：

1. 改 `src/data/site.ts` 或论文 Markdown
2. 提交到 GitHub
3. GitHub 自动重新部署

## 最后提醒

对学术主页来说，最重要的不是“炫”，而是：

- 信息准确
- 结构清楚
- 地址稳定
- 容易更新
- 能被别人和搜索引擎找到

这个项目已经是按这个思路搭好的。你后面最该花时间的，是把真实内容补齐，并把网址挂到各个学术平台上。
