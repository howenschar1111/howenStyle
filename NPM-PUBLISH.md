# NPM 包发布与维护指南

## 包信息

```
包名: @howenschar1111/styles
仓库: https://npm.pkg.github.com
GitHub: https://github.com/howenschar1111
```

---

## 环境配置

### 1. 创建 GitHub Personal Access Token

1. 打开 GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 点击 **Generate new token**
3. 填写 Note（如 `@howenschar1111/styles`）
4. 勾选权限：`write:packages`
5. 点击 **Generate token**
6. **保存生成的 token**（只显示一次）

### 2. 配置 ~/.npmrc

文件路径：`C:\Users\JasonQu\.npmrc`

```ini
@howenschar1111:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

> 注意：如 token 包含特殊字符需 URL 编码

---

## 发布命令

```bash
# 进入样式包目录
cd src/styles

# 安装依赖
npm install

# 发布（首次发布）
npm run build
npm publish --registry=https://npm.pkg.github.com
```

---

## 版本管理

### 升级版本号

```bash
# Patch（修复 bug）
npm version patch    # 1.0.0 → 1.0.1

# Minor（新功能）
npm version minor   # 1.0.0 → 1.1.0

# Major（破坏性变更）
npm version major   # 1.0.0 → 2.0.0
```

### 发布新版本

```bash
npm version patch   # 或 minor / major
npm run build:prod
npm publish --registry=https://npm.pkg.github.com
```

---

## 其他项目安装

### 1. 在项目中添加 .npmrc

在项目根目录创建 `.npmrc` 文件：

```ini
@howenschar1111:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

### 2. 安装包

```bash
npm install @howenschar1111/styles --registry=https://npm.pkg.github.com
```

### 3. 在项目中引入

在项目的入口 CSS 文件中添加：

```css
@import '@howenschar1111/styles';
```

或在 JavaScript/TypeScript 中导入：

```typescript
import '@howenschar1111/styles';
```

---

## 其他项目更新

```bash
# 更新到最新版本
npm update @howenschar1111/styles --registry=https://npm.pkg.github.com

# 指定版本安装
npm install @howenschar1111/styles@1.0.1 --registry=https://npm.pkg.github.com
```

---

## GitHub Packages 页面

查看已发布的包：
```
https://github.com/howenschar1111?tab=packages&pkgName=styles
```

---

## 目录结构

```
src/styles/
├── package.json          # NPM 包配置
├── postcss.config.js     # CSS 处理配置
├── README.md             # 使用文档
├── NPM-PUBLISH.md        # 本文档
├── _index.css           # 入口文件
├── dist/                # 构建输出
│   └── index.css       # 压缩后的 CSS
├── tokens/              # 设计令牌
├── base/                # 基础样式
├── components/          # 组件样式
└── business/             # 业务样式
```

---

## 构建命令

```bash
cd src/styles

# 安装依赖
npm install

# 开发构建
npm run build

# 生产构建（压缩）
npm run build:prod
```

---

## 故障排除

### E403 Permission not_found

**原因**：scope 名称与 GitHub 用户名不匹配

**解决**：确保 `package.json` 中的 name 为 `@howenschar1111/styles`

### ENEEDAUTH need auth

**原因**：未登录或 registry 配置错误

**解决**：
1. 检查 `~/.npmrc` 配置
2. 确保包含正确的 registry 和 token
3. 使用 `npm publish --registry=https://npm.pkg.github.com`

### 淘宝镜像问题

如果之前配置过淘宝镜像，确保 `~/.npmrc` 第一行不是 `registry=https://registry.npmmirror.com`

正确配置：
```ini
@howenschar1111:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

---

## 发布检查清单

- [ ] 更新 package.json 版本号
- [ ] 确保 ~/.npmrc 配置正确
- [ ] 运行 `npm run build` 构建
- [ ] 执行 `npm publish --registry=https://npm.pkg.github.com`
- [ ] 验证发布成功（GitHub Packages 页面查看）
