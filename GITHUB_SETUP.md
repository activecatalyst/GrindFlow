# GrindFlow — Getting It On Your iPhone
### GitHub Pages + Safari Install Guide

This gets GrindFlow running as a full-screen app on your iPhone home screen in
about 5 minutes. No developer account, no App Store, completely free.

---

## What you'll need

- A free GitHub account ([github.com](https://github.com))
- Safari on your iPhone (not Chrome — Apple requires Safari for home screen installs)
- The files from this zip

---

## Step 1 — Create a GitHub account (skip if you have one)

1. Go to **github.com**
2. Click **Sign up** and follow the prompts
3. Verify your email address

---

## Step 2 — Create a new repository

1. Once signed in, click the **+** button in the top-right corner
2. Select **New repository**
3. Fill in the details:
   - **Repository name:** `forge` (or anything you like)
   - **Description:** optional
   - **Visibility:** select **Public** ← this is required for free GitHub Pages
   - Leave everything else as default
4. Click **Create repository**

---

## Step 3 — Upload the files

You'll land on your new empty repository page.

1. Click **Add file → Upload files**
2. Open your `grindflow-package` folder (from the zip you downloaded)
3. Drag these items into the browser upload area:
   - `workout-app.html`
   - `manifest.json`
   - `sw.js`
   - The entire `icons` folder (drag the folder itself)
4. Scroll down to **Commit changes**
5. Leave the message as-is and click **Commit changes**

Your repository now contains all five required items.

---

## Step 4 — Enable GitHub Pages

1. Click the **Settings** tab at the top of your repository
2. In the left sidebar, click **Pages**
3. Under **Source**, click the dropdown and select **Deploy from a branch**
4. Set Branch to **main** and folder to **/ (root)**
5. Click **Save**

GitHub will now build your site. This takes about 1–2 minutes.

> **To find your URL:** Refresh the Pages settings page after a minute.
> You'll see a green banner that says "Your site is live at..."

Your URL will look like this:
```
https://YOUR-USERNAME.github.io/grindflow/workout-app.html
```

Replace `YOUR-USERNAME` with your actual GitHub username, and `forge` with
whatever you named your repository.

---

## Step 5 — Install to iPhone

1. On your iPhone, open **Safari** (must be Safari)
2. Go to your URL from Step 4
3. Wait for the page to fully load
4. Tap the **Share button** — the square with an arrow pointing up at the bottom of the screen
5. Scroll down in the share sheet and tap **Add to Home Screen**
6. Edit the name if you want (or leave it as GrindFlow)
7. Tap **Add** in the top-right corner

GrindFlow now appears on your home screen with its own icon. Tap it and it
launches full-screen with no browser bar, exactly like a native app.

---

## What happens after install

**Offline use:** The app caches itself on first load via the service worker.
After that, it works completely offline — no internet required. On your
first visit, make sure you have a connection so the cache can build.

**Your data:** All workout history, plans, and settings are stored in Safari's
local storage for that URL. They persist between visits automatically.

**Fonts:** GrindFlow loads custom fonts from Google when online. If you open it
offline before the fonts have been cached, it falls back to system fonts
and looks slightly different — this is normal and harmless.

---

## Updating the app

If you receive a new version of `workout-app.html`:

1. Go to your repository on github.com
2. Click on `workout-app.html` in the file list
3. Click the **pencil icon** (Edit) in the top-right of the file viewer
4. Click **...** then **Upload file** to replace it, or paste new content
5. Click **Commit changes**

GitHub Pages will redeploy automatically (takes about 60 seconds).

On your iPhone, the service worker will pick up the new version in the
background on the next visit. To force an immediate update, go to
**Settings → Safari → Advanced → Website Data**, find your GitHub URL,
and tap **Delete**. Then reopen the app — it will reload fresh.

> Your localStorage data is **not affected** by clearing website data
> on the URL — only the cached app files are cleared. Your workouts
> are safe as long as you haven't cleared Safari's storage.

---

## Troubleshooting

**"Add to Home Screen" doesn't appear in the share sheet**
- Make sure you're using Safari, not Chrome or Firefox
- The URL must start with `https://` — this is automatic with GitHub Pages
- Try scrolling down in the share sheet — it can be easy to miss

**The page shows a 404 error**
- GitHub Pages takes up to 2 minutes to activate — wait and refresh
- Double-check that you uploaded files to the root of the repository, not a subfolder
- Make sure Pages is set to the **main** branch

**The app doesn't work offline after installing**
- Open the URL in Safari while connected to the internet at least once after installing
- The service worker needs one successful online load to cache the files

**I see the app but fonts look different**
- This is the system font fallback — it means Google Fonts haven't been cached yet
- Open the app while on wifi once and fonts will cache for offline use

**I need to share with someone else**
- Just send them your URL — anyone can install it from their own iPhone
- If you want it to be private, you can use a private GitHub repository
  but you'll need a paid GitHub plan for private Pages, or use Netlify instead

---

## Alternative: Netlify (even faster, no GitHub needed)

1. Go to **netlify.com** and sign up free
2. Find the drag-and-drop deploy area on the dashboard
3. Open your `grindflow-package` folder and drag the **entire folder** onto it
4. Netlify gives you a URL instantly — share it or install it from Safari

Netlify is slightly faster to set up but GitHub is better for keeping
track of updates and maintaining the files long-term.

---

*Total time from zip to home screen icon: ~5 minutes.*
