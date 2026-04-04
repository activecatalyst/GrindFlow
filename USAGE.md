# Grind.exe — How to Use the App

A quick guide to every feature, tab by tab.

---

## ⚡ Today Tab

This is your main screen during a workout. It shows today's session based
on your active plan.

### Starting a workout

1. Make sure you have an active plan (set in the **Plans tab**)
2. The **Today tab** loads automatically with today's exercises
3. The first exercise opens automatically — no extra tapping needed

### Exercise cards

Tap any exercise card to expand it. Inside you'll find:

- **Sets, reps, and suggested weight** — pre-filled based on your history
- **Form cues** — 2–3 sentence technique reminder
- **Progression status** — coloured panel showing whether to increase weight:
  - 🟢 **Ready to Increase** — hit the top of your rep range two sessions in a row
  - 🟡 **On Track** — one more strong session before progressing
  - 🔴 **Dropped Reps** — stay at current weight and rebuild
  - ⚪ **First Session** — no history yet, start at the suggested weight
- **Weight sparkline** — mini chart of your weight over the last 8 sessions
- **Estimated 1RM** — Epley formula estimate from your best set. Shows 🏆 PR when you beat your all-time best

### Logging a set

1. Enter **weight** (in lbs) and **reps completed** in the input fields
2. Tap the **checkmark** on the right to mark the set done
3. The **rest timer** starts automatically — a bar slides up above the nav
4. Optional: tap an **RPE pill** (1–10) to log perceived exertion
5. Optional: type a **note** in the ghost text field below the RPE row
6. Tap **✓ Mark Exercise Complete** when all sets are done

### Rest timer

- Counts down from 90 seconds by default
- Tap **1m / 90s / 2m / 3m** to switch mid-rest
- Tap **Skip** to dismiss early
- Your last-used duration is remembered for next time
- Phone vibrates (if supported) when rest is complete

### Progress ring

The ring in the top section fills as you complete exercises. It shows
`done / total exercises` and turns the ring fully filled with a 🔥 message
when the whole session is complete.

### Custom day / Cardio session

If you launched a custom or cardio session from the Plans tab, the Today
tab shows that instead of your plan. A red **End Session** button at the
bottom lets you return to your normal plan view.

### Resetting today

Tap the **🔄** button in the top bar to wipe today's logged sets and start
fresh. Your history is not affected.

---

## 📋 Plans Tab

### Choosing a plan

The top section shows all plans in a 2×1 grid. Each card shows:
- The plan name and description
- Tags (frequency, goal, level)
- **TODAY:** — what today's session is for that plan

Tap a card to expand it and see the full weekly schedule.
Tap **⚡ Activate This Plan** to make it your active plan.
Tap **→ Go to Today** (when already active) to jump straight to your workout.
Tap **✕** to deactivate without choosing another.

**Plans available:**
| Plan | Days/week | Goal |
|------|-----------|------|
| Beginner Full Body | 3 | Strength foundation |
| Intermediate PPL | 6 | Hypertrophy |
| Advanced 5-Day Split | 5 | Strength + size |
| Weight Loss Cardio Mix | 5 | Fat loss |
| Pure Cardio | 6 | Cardio conditioning |

### More Options section

Below the plans grid are three utility cards:

**❤️ Quick Cardio** — Tap to expand, pick a type (HIIT / Steady-State /
Jump Rope / Bike) and duration (15–60 min), then tap Start. Loads directly
into the Today tab without affecting your active plan.

**🎲 Plan Generator** — Tap to expand, set your days/week, goal, level,
and optional focus muscles. Tap **Generate My Plan** to get a custom weekly
plan. Preview it, tap **Reroll** to try again, or **Activate** to use it.
Generated plans behave identically to preset plans.

**✏️ Build Your Own Day** — Tap to expand, then **Browse & Add Exercises**
to open the exercise picker. Search or filter by muscle group, tap exercises
to add them, tap reco-pills to add suggested pairings. Tap **Start Custom
Workout** to launch. Custom days save to history normally.

---

## 📊 History Tab

Shows all completed sessions in reverse chronological order.

- **TODAY** badge appears next to today's date if you've already logged a session
- Tap any session card to expand the full set breakdown, including RPE if you logged it
- Tap the 🗑 button on a card to delete just that session
- Tap **🗑 Clear All** (top right, only visible when history exists) to wipe everything
  — you'll be prompted to back up first

**Stats at the top:**
- **Sessions** — total workouts logged
- **Exercises** — total individual exercises completed
- **Streak 🔥** — consecutive days with at least one completed session

---

## 💾 Backup & Restore

Tap the **💾** button in the top bar.

**Export** — downloads a `forge-backup-YYYYMMDD.json` file to your device.
Store it in iCloud Drive, Google Drive, or any safe location.

**Import** — tap to pick a backup file. Your current data is merged with the
backup (backup wins on any conflict).

**Clear Progression Data** — resets all per-exercise weight history used for
sparklines, 1RM estimates, and progression signals. Session history is kept.
Use this if you want to restart progression tracking at a new weight.

The modal shows how many sessions and exercises are stored, total KB used in
localStorage, and when you last exported.

> **Important:** All data lives in your browser's localStorage. Clearing
> browser storage or switching browsers will erase your data. Export regularly.

---

## 📱 Ship to Mobile

Tap the **📱** button in the top bar for step-by-step instructions covering:

- **iOS** — PWA via Safari, Xcode/WKWebView wrapper, Capacitor, Cordova
- **Android** — PWA via Chrome, Capacitor APK, Android Studio WebView, Play Store

See also **README.md** in this package for the full deployment guide.

---

## Tips & Shortcuts

- **Auto-open** — the first incomplete exercise opens automatically when you load today's workout
- **Weight pre-fill** — weight inputs are pre-filled with your suggested weight based on last session
- **Keyboard dismiss** — tap outside any input to dismiss the keyboard on mobile
- **Rest timer presets** — tap 1m / 90s / 2m / 3m during rest to change duration on the fly
- **Reroll plans** — the generator's Reroll button keeps your settings and generates a new plan instantly
- **Cardio history** — quick cardio sessions save to history as "Cardio · 20 min / HIIT Blast" etc.
- **Offline use** — after one online load, the app works fully offline (fonts may fall back to system fonts)
