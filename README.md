# @howenschar1111/styles

Shared style system for Schedule Arranger projects.

## 安装

```bash
npm install @howenschar1111/styles --registry=https://npm.pkg.github.com
```

## 使用

### CSS Import

```css
@import '@howenschar1111/styles';
```

### JavaScript/TypeScript Import

```typescript
import '@howenschar1111/styles';
```

## 目录结构

```
src/styles/
├── _index.css           # 入口文件
├── tokens/              # 设计令牌
│   ├── _variables.css   # CSS 变量
│   ├── _typography.css  # 排版
│   └── _breakpoints.css # 断点
├── base/                # 基础样式
│   ├── _reset.css      # CSS reset
│   └── _base.css       # 基础样式
├── components/          # 组件样式
│   ├── _button.css
│   ├── _form.css
│   ├── _modal.css
│   ├── _avatar.css
│   └── _card.css
└── business/            # 业务样式
    ├── _auth.css
    ├── _task.css
    ├── _calendar.css
    └── _graph.css
```

## 设计令牌

### CSS 变量

```css
:root {
  /* Colors */
  --color-primary-50: #eff6ff;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;

  /* Typography */
  --font-family-base: 'Inter', system-ui, sans-serif;
  --font-size-sm: 0.875rem;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
}
```

## 组件

### Button

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-ghost">Ghost</button>
```

### Form

```html
<input class="form-input" type="text" />
<select class="form-select">...</select>
<textarea class="form-input"></textarea>
```

### Card

```html
<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">Content</div>
</div>
```

## 构建

```bash
# 安装依赖
npm install

# 开发构建
npm run build

# 生产构建（压缩）
npm run build:prod
```

## 发布

```bash
# 升级版本
npm version patch  # 或 minor / major

# 发布
npm publish --registry=https://npm.pkg.github.com
```

## License

MIT
