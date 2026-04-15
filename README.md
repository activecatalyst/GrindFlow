# GrindFlow — Personal Workout App
### Setup & Deployment Guide

---

## What's in this package

```
grindflow-package/
├── workout-app.html      ← The entire app (single file, ~4000 lines)
├── manifest.json         ← PWA manifest (enables home screen install)
├── sw.js                 ← Service worker (enables offline use)
├── icons/
│   ├── icon-192.png      ← App icon (Android / PWA)
│   ├── icon-512.png      ← App icon (large / splash)
│   └── apple-touch-icon.png  ← App icon (iOS home screen)
└── README.md             ← This file
```

All five files must stay together in the same folder. The app references
`manifest.json`, `sw.js`, and `icons/` using relative paths.

---

## Option 1 — Open locally (no server, no install)

Just double-click `workout-app.html`. It opens in your browser and works
immediately. Your data persists via localStorage.

**Limitation:** The service worker won't activate on `file://` URLs, so
offline-first caching won't work. Everything else (plans, logging, history,
progression) works perfectly.

---

## Option 2 — Install as a PWA via GitHub Pages (Free, Recommended)

This gives you a real HTTPS URL, offline support, and the ability to install
GrindFlow to your phone's home screen like a native app.

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click **+** → **New repository**
3. Name it `grindflow` (or anything you like)
4. Set it to **Public** (required for free GitHub Pages)
5. Click **Create repository**

### Step 2 — Upload the files

1. Click **Add file** → **Upload files**
2. Drag in all five files: `workout-app.html`, `manifest.json`, `sw.js`,
   and the `icons/` folder with all three PNGs
3. Click **Commit changes**

### Step 3 — Enable GitHub Pages

1. Go to your repository **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Choose **main** branch → **/ (root)** → click **Save**
4. Wait 1–2 minutes, then your app is live at:
   `https://YOUR-USERNAME.github.io/grindflow/workout-app.html`

### Step 4 — Install to iPhone

1. Open that URL in **Safari** on your iPhone
2. Tap the **Share** button (box with arrow pointing up)
3. Tap **Add to Home Screen**
4. Tap **Add**

GrindFlow now has its own icon on your home screen and launches full-screen
with no browser UI, exactly like a native app.

### Step 4 (Android) — Install via Chrome

1. Open that URL in **Chrome** on your Android phone
2. Chrome will show an **"Add GrindFlow to Home Screen"** banner automatically
3. Or tap the three-dot menu → **Add to Home screen**

---

## Option 3 — Host locally with a dev server

If you have Node.js installed:

```bash
# Navigate to the package folder
cd /path/to/grindflow-package

# Start a local server (npx works without installing anything)
npx serve .

# Or use Python's built-in server
python3 -m http.server 8080
```

Then open `http://localhost:8080/workout-app.html` in your browser.
The service worker will activate and offline support will work.

---

## Option 4 — Deploy to Netlify (Free, Drag & Drop)

1. Go to [netlify.com](https://netlify.com) and sign up free
2. On the dashboard, find the **"drag & drop"** deploy zone
3. Drag your entire `grindflow-package/` folder onto it
4. Netlify gives you a URL like `https://random-name.netlify.app`
5. Your app is live instantly with HTTPS and offline support

To use a custom subdomain: Site settings → Domain management → Options →
Edit site name.

---

## Option 5 — Native iOS App (Xcode)

Requires a Mac with Xcode 15+ and an Apple Developer account ($99/yr).

1. Open Xcode → **File → New → Project → App**
2. Language: Swift, Interface: SwiftUI
3. Drag `workout-app.html` into the project bundle
4. Replace `ContentView.swift` with:

```swift
import SwiftUI
import WebKit

struct WebView: UIViewRepresentable {
    func makeUIView(context: Context) -> WKWebView {
        let wv = WKWebView()
        if let url = Bundle.main.url(forResource: "workout-app", withExtension: "html") {
            wv.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
        }
        return wv
    }
    func updateUIView(_ uiView: WKWebView, context: Context) {}
}

struct ContentView: View {
    var body: some View {
        WebView()
            .ignoresSafeArea()
            .preferredColorScheme(.dark)
    }
}
```

5. Set your Bundle ID and Development Team
6. **Product → Run** to test, **Product → Archive** to distribute

**Note:** When wrapping in Xcode, you don't need `manifest.json` or `sw.js`
— the app is bundled natively. Only include `workout-app.html`.

---

## Option 6 — Native Android App (Capacitor)

Requires Node.js and Android Studio. Works on Windows, Mac, or Linux.

```bash
# Create project folder
mkdir grindflow-android && cd grindflow-android
npm init -y

# Install Capacitor
npm install @capacitor/core @capacitor/cli
npx cap init "GrindFlow" "com.yourname.forge" --web-dir ./www

# Copy app into www/
mkdir www
cp /path/to/grindflow-package/workout-app.html www/index.html

# Add Android platform
npm install @capacitor/android
npx cap add android
npx cap copy android

# Open in Android Studio
npx cap open android
```

In Android Studio: **Build → Build Bundle(s)/APK(s) → Build APK(s)**

Copy the APK to your phone and install it. You may need to enable
**Settings → Install Unknown Apps** on your device first.

---

## Keeping your data safe

GrindFlow stores everything in your browser's `localStorage`. This means:

- ✅ Data persists between visits on the same browser
- ✅ No account or server required
- ⚠️ Clearing browser data will erase your workouts
- ⚠️ Data doesn't sync across devices or browsers

**Use the built-in backup tool** (💾 button in the top bar) to export a
JSON backup file. Store it in iCloud, Google Drive, or anywhere safe.
Import it any time to restore your full history.

---

## Updating the app

If you receive a new version of `workout-app.html`:

1. Replace the old file in your folder / GitHub repo
2. For GitHub Pages: commit and push — it deploys automatically
3. For Netlify: drag the folder again
4. On mobile: the service worker will pick up the new version on next
   background refresh. To force it: Settings → Clear website data for
   the URL, then reload.

Your localStorage data is **not affected** by updating the HTML file.

---

## Troubleshooting

**The app opens but looks broken (wrong fonts)**
The app loads fonts from Google Fonts when online. On first offline load
it falls back to system fonts (Arial Narrow, system-ui). This is normal.
Once your browser caches the fonts (requires one online visit), they'll
appear correctly offline too.

**"Add to Home Screen" doesn't appear on iPhone**
- Make sure you're using Safari (not Chrome or Firefox on iOS)
- The URL must be HTTPS — `file://` and `http://` won't trigger it
- Try reloading the page and waiting 5 seconds before tapping Share

**Data disappeared**
- Check if your browser cleared storage (some browsers clear on update)
- Restore from a backup file using the 💾 button

**Service worker not activating**
- Must be served over HTTPS or localhost — not `file://`
- Open DevTools → Application → Service Workers to check status
- Click "Update" to force refresh

---

*GrindFlow — built as a single HTML file with no frameworks, no servers, no accounts.*
