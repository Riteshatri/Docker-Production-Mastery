# 🚀 GitHub Pages Deployment Guide (Vite + React)

## Overview

This document provides a **clear, professional, and confusion-free guide** for deploying a **Vite + React** application to **GitHub Pages**.

If you understand this README, you will clearly know:
- What should go into the `gh-pages` branch
- Why a build step is required
- How GitHub Pages actually works
- The correct and safe deployment workflow

---

## ❓ Core Question

**What should be pushed to the `gh-pages` branch?**

- Source code (React / Vite / TypeScript)?  
- Or build artifacts?

---

## ✅ Final Answer (Important)

❌ **Never push source code to the `gh-pages` branch**

✅ **Only push the BUILD output (artifacts)**  
➡️ The output generated after running `vite build` (the `dist/` folder)

---

## 🤔 Why This Is Required

### What GitHub Pages Supports

GitHub Pages is a **static hosting service**.

It does **NOT** understand:
- React
- Vite
- JSX / TypeScript
- Node.js

It **ONLY** understands static files:
- `index.html`
- CSS files
- JavaScript files

---

## 🛠️ Why the Build Step Is Mandatory

```bash
npm run build
```

This command converts your React/Vite source code into **pure static files** that browsers can understand.

### Output structure after build:

```
dist/
 ├── index.html
 ├── assets/
 │    ├── *.js
 │    └── *.css
 └── ...
```

👉 **This `dist/` content is exactly what GitHub Pages serves**

---

## 🌳 Branch Strategy (Critical to Understand)

### 1️⃣ `main` (or `master`) branch — Source Code

```
main
 ├── src/
 ├── vite.config.ts
 ├── package.json
 └── ...
```

Purpose:
- Development
- Code changes
- Collaboration

---

### 2️⃣ `gh-pages` branch — Build Output Only

```
gh-pages
 ├── index.html
 ├── assets/
 └── ...
```

Purpose:
- Hosting static files
- Used only by GitHub Pages

> ⚠️ This branch is **not meant for manual editing**

---

## ❗ Common Mistake to Avoid

❌ Manually switching to the `gh-pages` branch  
❌ Copying source code into `gh-pages`  
❌ Pushing React files directly

✅ Deployment must be automated

---

## ⚙️ Correct Deployment Workflow (Step-by-Step)

### Step 1: Install `gh-pages`

```bash
npm install -D gh-pages
```

Why?
- It is only required during deployment
- It does not belong to runtime dependencies

---

### Step 2: Configure `package.json`

```json
"scripts": {
  "build": "vite build",
  "deploy": "gh-pages -d dist"
}
```

---

### Step 3: Build the project

```bash
npm run build
```

---

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This command automatically:
- Takes the `dist/` folder
- Creates or updates the `gh-pages` branch
- Pushes **only build files**
- Keeps your source code safe in `main`

✅ No manual branch switching required

---

## ⚡ Vite Configuration (Mandatory for GitHub Pages)

```ts
base: '/Docker-Production-Mastery/',
```

Rules:
- Must exactly match the GitHub repository name
- Case-sensitive

❌ Incorrect `base` value results in:
- Blank page
- 404 errors
- Missing JS/CSS assets

---

## 🚫 What Happens If You Push Source Code by Mistake?

Possible outcomes:
- Blank page
- 404 errors
- Assets not loading
- Broken application

---

## 🧠 Golden Rule (Remember This)

> **`main` branch = Source code**  
> **`gh-pages` branch = Build output only (`dist/`)**

---

## ✅ Final Checklist

- [ ] `gh-pages` installed
- [ ] `base` configured correctly in `vite.config.ts`
- [ ] `npm run build` successful
- [ ] `npm run deploy` executed

🎉 **Your Vite + React application is now live on GitHub Pages!**

---

Happy Deploying 🚀
