# Anush Mohanty – Portfolio

A React-based personal portfolio with React Router, deployed via GitHub Pages.

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── ProjectCard.js
│   ├── pages/
│   │   ├── Home.js
│   │   └── Projects.js
│   ├── assets/
│   │   └── profile.jpg        ← Add your photo here
│   ├── styles/
│   │   ├── Home.css
│   │   ├── Projects.css
│   │   └── Navbar.css
│   ├── App.js
│   └── index.js
└── package.json
```

---

## 🚀 Installation & Local Setup

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v16 or higher) → https://nodejs.org
- **npm** (comes with Node.js)
- **Git** → https://git-scm.com

### Step 1 – Clone or set up the project folder

```bash
# Navigate to where you want the project
cd Desktop

# If starting fresh (not cloned), create the folder
mkdir portfolio
cd portfolio
```

### Step 2 – Install dependencies

```bash
npm install
```

This installs: `react`, `react-dom`, `react-router-dom`, `react-scripts`, and `gh-pages`.

### Step 3 – Add your profile photo (optional)

Place your photo at:
```
src/assets/profile.jpg
```

Then in `Home.js`, replace the placeholder div with:
```jsx
<img src={require('../assets/profile.jpg')} alt="Anush Mohanty" />
```

### Step 4 – Start the development server

```bash
npm start
```

Opens at → **http://localhost:3000**

---

## 🌐 Deploying to GitHub Pages

### Step 1 – Create a GitHub Repository

1. Go to https://github.com
2. Click **New Repository**
3. Name it: `portfolio`
4. Set visibility to **Public**
5. Click **Create Repository**

---

### Step 2 – Push your project to GitHub

Open a terminal in your project folder and run:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

> ⚠️ Replace `your-username` with your actual GitHub username.

After this, verify your code appears on GitHub before proceeding.

---

### Step 3 – Install gh-pages

```bash
npm install gh-pages --save-dev
```

---

### Step 4 – Update package.json

Open `package.json` and make these two changes:

**Add the homepage field** (at the top level):
```json
"homepage": "https://your-username.github.io/portfolio"
```

**Add predeploy and deploy scripts** inside `"scripts"`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Your scripts section should look like:
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

---

### Step 5 – Use HashRouter (already done ✅)

`App.js` already uses `HashRouter` instead of `BrowserRouter`. This is required for GitHub Pages to handle routing correctly.

---

### Step 6 – Deploy

```bash
npm run deploy
```

This will:
1. Build your project (`npm run build`)
2. Push the build to a `gh-pages` branch on GitHub

---

### Step 7 – Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Branch**, select `gh-pages`
4. Click **Save**

Wait 1–2 minutes, then visit:
```
https://your-username.github.io/portfolio
```

---

## 🔄 Updating Your Portfolio

Whenever you make changes:

```bash
# Save changes to GitHub
git add .
git commit -m "update portfolio"
git push

# Redeploy to GitHub Pages
npm run deploy
```

---

## 📝 Customisation Checklist

- [ ] Replace `your-username` in `package.json` homepage URL
- [ ] Replace `your-username` in GitHub remote URL
- [ ] Update GitHub links in `Projects.js` to your actual repos
- [ ] Add `profile.jpg` to `src/assets/` and wire it up in `Home.js`
- [ ] Add more projects to the `projects` array in `Projects.js`

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| react | ^18.2.0 | UI library |
| react-dom | ^18.2.0 | DOM rendering |
| react-router-dom | ^6.22.0 | Client-side routing |
| react-scripts | 5.0.1 | Build toolchain |
| gh-pages | ^6.1.1 | GitHub Pages deployment |
# portfolio
# portfolio
