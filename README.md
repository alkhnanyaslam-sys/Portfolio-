# Islam Sherif — Portfolio

بورتفوليو شخصي عصري لـ **Islam Sherif** — Frontend Developer | React Developer | AI Enthusiast.
مبني بـ React + Vite، تصميم Dark/Glassmorphism، وكل الأنيميشن بـ Framer Motion.

## 🚀 التشغيل محليًا

```bash
npm install
npm run dev
```

هيفتح على `http://localhost:5173`.

## ✏️ حاجات لازم تعدلها قبل الرفع

| المكان | الملف |
|---|---|
| رقم الواتساب | موجود جاهز `01016295024` في `Hero.jsx` / `Contact.jsx` / `WhatsAppButton.jsx` |
| رابط GitHub الحقيقي | استبدل `USERNAME` في `Github.jsx` و`Contact.jsx` و`Footer.jsx` |
| رابط LinkedIn | استبدل `USERNAME` في `Contact.jsx` و`Footer.jsx` |
| الإيميل | استبدل `your.email@example.com` في `Contact.jsx` و`Footer.jsx` |
| روابط المشاريع (Live/GitHub) | `src/data/projects.js` |
| اسم الريبو (base path) | `vite.config.js` → غيّر `REPO_NAME` |
| اسم الريبو (homepage) | `package.json` → غيّر `USERNAME` و`REPO_NAME` |

## 📦 الرفع على GitHub

1. اعمل ريبو جديد على GitHub (public).
2. من داخل مجلد المشروع:

```bash
git init
git add .
git commit -m "Initial commit - Islam Sherif portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

> لو بتستخدم واجهة GitHub بس (من غير أوامر git)، ارفع المجلد كامل عن طريق
> **Add file → Upload files** بعد ما تعمل الريبو.

## 🌍 الاستضافة على GitHub Pages (طريقتين)

### الطريقة 1 — أوتوماتيك بـ GitHub Actions (الأسهل، موجودة جاهزة)

الملف `.github/workflows/deploy.yml` هيشتغل تلقائي مع كل `push` على `main`.
كل اللي عليك:

1. روح لريبو المشروع على GitHub → **Settings → Pages**.
2. تحت **Build and deployment → Source** اختار **GitHub Actions**.
3. اعمل push لأي تعديل (أو من تبويب **Actions** دوس **Run workflow**).
4. بعد ما الـ workflow يخلص، الموقع هيبقى شغال على:
   `https://USERNAME.github.io/REPO_NAME/`

### الطريقة 2 — يدوي بـ gh-pages

```bash
npm run deploy
```

ده هيعمل build وهيرفع فولدر `dist` على branch اسمه `gh-pages`.
بعدين من **Settings → Pages** اختار Source: **Branch → gh-pages**.

## 🗂️ هيكل المشروع

```
src/
  components/   → كل قسم في كومبوننت منفصل
  data/         → بيانات المشاريع والمهارات (تقدر تعدلها من غير ما تلمس الكومبوننتس)
  App.jsx       → بيجمع كل الأقسام
  App.css       → ستايل كل الأقسام
  index.css     → الـ design tokens (ألوان / خطوط / أساسيات)
```

## 🛠️ الأدوات المستخدمة

React · Vite · Framer Motion · react-icons
