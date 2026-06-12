# Raissa Crane — Portfolio

Personal portfolio website built with vanilla HTML, CSS, and JavaScript. Deployed via **GitHub Pages** — free, zero config, live at `https://raissaglaucie.github.io`.

## 🚀 Deploy in 5 Minutes

### Step 1 — Create the GitHub repo

1. Go to [github.com/new](https://github.com/new)
2. Name it exactly: **`raissaglaucie.github.io`**
   > ⚠️ The repo name must match your GitHub username exactly for the root URL to work.
3. Set to **Public**
4. Click **Create repository** (don't add README yet)

### Step 2 — Push this project

In your terminal, from this project folder:

```bash
git init
git add .
git commit -m "Initial portfolio deploy"
git branch -M main
git remote add origin https://github.com/raissaglaucie/raissaglaucie.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Branch: `main` / Folder: `/ (root)`
4. Click **Save**

### Step 4 — You're live! 🎉

After ~1-2 minutes your site is live at:
```
https://raissaglaucie.github.io
```

---

## 📁 Project Structure

```
raissaglaucie.github.io/
├── index.html      ← main page
├── style.css       ← all styles
├── script.js       ← interactions & animations
└── README.md       ← this file
```

## ✏️ How to Update Content

All content lives in `index.html`. Search for the section you want to edit:

| Section | Search for |
|---|---|
| Hero stats | `data-target=` |
| About text | `id="about"` |
| Experience | `id="work"` |
| Projects | `id="projects"` |
| Contact email | `mailto:` |

After editing, just commit and push:

```bash
git add .
git commit -m "Update [what you changed]"
git push
```

GitHub Pages auto-deploys on every push to `main`. Changes go live in ~30 seconds.

## 🔗 Adding Your LinkedIn & Resume Link

In `index.html`, find these placeholders and update:
- LinkedIn: `https://linkedin.com/in/raissacrane` ✅ already set
- GitHub: `https://github.com/raissaglaucie` ✅ already set
- Resume: You can add a PDF to this repo and link it — add `resume.pdf` to the root folder, then add a button in the hero or nav.

## 🌐 Custom Domain (Optional, also free)

If you ever want `raissacrane.dev` or similar:
1. Buy a domain (~$10-15/year on Namecheap or Google Domains)
2. In GitHub Pages settings, add it under **Custom domain**
3. Update your DNS records as instructed

---

Built with ❤️ — HTML · CSS · JavaScript · GitHub Pages
