<p align="center">
  <img src="icon128.png" alt="YouTube Focus Logo" width="80" height="80" />
</p>

<h1 align="center">YouTube Focus</h1>

<p align="center">
  <strong>Reclaim your attention on YouTube. Block Shorts, hide algorithmic home feed traps, and start directly on your Subscriptions.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Manifest-V3-FF0000?logo=youtube&logoColor=white" alt="Manifest V3" />
  <img src="https://img.shields.io/badge/Browser-Chrome_%7C_Brave_%7C_Edge-34A853" alt="Supported Browsers" />
  <img src="https://img.shields.io/badge/Zero_Tracking-100%25_Local-2EA043" alt="100% Local" />
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="MIT License" />
</p>

---

## 💡 Why YouTube Focus?

> *"Your time is non-negotiable. Focus on what matters."*

You open YouTube to watch **one** specific tutorial or check a creator you actually subscribe to—and 45 minutes later, you're trapped in an infinite loop of **YouTube Shorts** and algorithmic home-page clickbait.

**YouTube Focus** turns YouTube from an attention slot machine back into an intentional tool. It strips out Shorts across the entire platform and automatically routes you to your **Subscriptions feed** (`/feed/subscriptions`) whenever you open YouTube or click the YouTube logo.

---

## ✨ What It Proposes & How It Helps You

- 🚫 **Complete Shorts Elimination:** Hides Shorts shelves, sidebar buttons, search result carousels, and disguised `/shorts/` video cards before they even render.
- 🧭 **Intentional Default Destination:** Opening `youtube.com`, clicking the top-left YouTube logo, or attempting to open a `/shorts/` link automatically redirects you to `/feed/subscriptions`—so you only see videos from channels you chose to follow.
- ⚡ **Zero-Lag SPA Interception:** Instead of slow URL polling, YouTube Focus hooks directly into YouTube's internal single-page router (`yt-navigate-start`) and capture-phase click listeners, preventing distractions before the page transitions.
- 🎛️ **One-Click Control Popup:** Need to temporarily browse normally? Click the extension icon in your toolbar to toggle redirection on or off instantly without disabling the extension.

---

## ⚡ Install in 60 Seconds (No Coding Required)

Works on **Google Chrome**, **Brave**, **Microsoft Edge**, **Vivaldi**, and **Opera**:

1. **Download this repository:**
   - Click the green **Code** button above and select **Download ZIP** (then unzip it), *or* clone via terminal:
     ```bash
     git clone https://github.com/gabzieg/YouTubeFocus.git
     ```
2. **Open your browser's Extensions page:**
   - Chrome: `chrome://extensions/`
   - Brave: `brave://extensions/`
   - Edge: `edge://extensions/`
3. **Enable Developer Mode:** Flip the **Developer mode** switch in the top-right corner.
4. **Load the Extension:** Click **Load unpacked** (top-left) and select the `YouTubeFocus` folder.
5. **Open [youtube.com](https://www.youtube.com):** Shorts are gone, and you'll land straight on your Subscriptions feed!

---

## 🛠️ How It Works Under the Hood

| File | Role |
| :--- | :--- |
| [`manifest.json`](manifest.json) | Manifest V3 definition injecting scripts at `document_start` so distractions never flash on screen. |
| [`redirecionar.js`](redirecionar.js) | Listens to YouTube's custom `yt-navigate-start` SPA event and capture-phase link clicks to reroute `/` and `/shorts/*` to `/feed/subscriptions`. |
| [`limpeza.css`](limpeza.css) | Uses modern CSS `:has()` relational selectors to surgically hide Shorts shelves, navigation tabs, and grid items across Home, Search, and Channel pages. |
| [`popup.html`](popup.html) / [`popup.js`](popup.js) | Minimalist dark-mode control panel syncing user toggle state via `chrome.storage.local`. |

---

## 📝 Release Highlights

- **v1.5:** Expanded Shorts removal across search results and video grids; replaced 500ms URL polling with instant `yt-navigate-start` SPA event interception and capture-phase logo click routing; added quick-toggle popup UI.
- **v1.0:** Initial release with Shorts hiding and basic Subscriptions redirection.

## 📄 License

Distributed under the **MIT License** — see [`LICENSE`](LICENSE) for details.
