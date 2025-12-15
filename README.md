# 🚀 GitHub Pages Deployment Guide (Vite + React)

> **Purpose:**
> Yeh README isliye likhi gayi hai taaki ek baar mein **clear ho jaaye** ki  
> **GitHub Pages pe deploy karte waqt kya push hota hai, kyun hota hai, aur kaise hota hai**.
>
> Agar tum is file ko samajh gaye — to GitHub Pages ka 99% confusion khatam ✅

---

## 🔴 MAIN CONFUSION (Most Important Question)

**`gh-pages` branch mein kya push karna hota hai?**

- 👉 Source code (React / Vite / TS / JSX)?
- 👉 Ya build / artifacts?

---

## ✅ FINAL & CLEAR ANSWER (Yaad rakh lena)

❌ **Source code kabhi bhi `gh-pages` branch mein push NAHI karte**

✅ **Sirf BUILD output (artifacts) push hota hai**

➡️ Jo `vite build` command ke baad generate hota hai (`dist/` folder)

---

## 🤔 Kyun? (Simple Logic)

### GitHub Pages kya samajhta hai?

GitHub Pages ek **static hosting service** hai.

❌ Ye samajh **NAHI** paata:
- React
- Vite
- JSX / TypeScript
- Node.js

✅ Ye sirf **static files** samajhta hai:
- `index.html`
- `CSS`
- `JavaScript`

---

## 🛠️ Build kyun zaroori hai?

```bash
npm run build
```

Ye command React/Vite code ko **plain static files** mein convert kar deti hai.

### Build ke baad structure:

```
dist/
 ├── index.html
 ├── assets/
 │    ├── *.js
 │    └── *.css
 └── ...
```

👉 **Yahi exact cheez GitHub Pages ko chahiye**

---

## 🌳 Branch Strategy (Very Important)

### 1️⃣ `main` branch → Source Code

```
main
 ├── src/
 ├── vite.config.ts
 ├── package.json
 └── ...
```

### 2️⃣ `gh-pages` branch → Build Output Only

```
gh-pages
 ├── index.html
 ├── assets/
 └── ...
```

---

## ❗ Common Mistake (Avoid This)

❌ `gh-pages` branch ko manually checkout karke push karna  
❌ Source code ko `gh-pages` branch mein daalna  

✅ Ye kaam **gh-pages package automatically karta hai**

---

## ⚙️ Step-by-Step Deployment

### Step 1: Install gh-pages
```bash
npm install -D gh-pages
```

### Step 2: package.json scripts
```json
"scripts": {
  "build": "vite build",
  "deploy": "gh-pages -d dist"
}
```

### Step 3: Build project
```bash
npm run build
```

### Step 4: Deploy (Magic Step)
```bash
npm run deploy
```

✔️ Automatically `gh-pages` branch banata hai  
✔️ Sirf `dist/` ka content push karta hai  

---

## ⚡ vite.config.ts (Mandatory)

```ts
base: '/Docker-Production-Mastery/',
```

✔️ Repo name ke barabar hona chahiye  
✔️ Case-sensitive hota hai  

---

## 🚫 Galat kaam ka result

Agar source code `gh-pages` mein chala gaya:

❌ Blank page  
❌ 404 error  
❌ JS/CSS load nahi hoga  

---

## 🧠 Golden Rule

> **main branch = source code**  
> **gh-pages branch = sirf build (dist)**

---

🎉 **Done! Your site is live on GitHub Pages**

Happy Deploying 🚀
