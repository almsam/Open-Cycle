# OpenCycle

**OpenCycle** is a privacy-first, open-source period tracking app. It helps users track menstruation, ovulation, and notes, perform basic cycle math, and display insights via graphs and reminders. All data is stored locally or securely in the cloud — *your cycle, your data*

OpenCycle stores data *locally by default*. No analytics, no ads, no data harvesting. You control your data — optionally sync to your own MongoDB backend if desired.

---

## Project requirements at a glance

#### Basic requirements

- Track menstruation, ovulation, and personal notes
- Save, load, & forecast basic period info
- Local or cloud-based storage (localForage / MongoDB) - local as default
- Deployable as a PWA — should work on iOS, Android, web, and desktop

#### Advanced requirements

- Visual insights with simple charts (using Chart.js)
- Local reminders and notifications (via Capacitor)
- Basic ML models for prediction (probably Statsmodels or Sci-kit for Py)

---

## Tech Stack

| Component | Purpose            | Tech                          |
| --------- | ------------------ | ----------------------------- |
| Front end | UI Framework       | React & TypeScript            |
| Front end | Cross-Platform App | Capacitor                     |
| Back end  | App Logic          | React Hooks / Context API     |
| Back end  | Local Storage      | localForage                   |
| Back end  | Cloud DB           | MongoDB (via API)             |
| Utility   | Charts & Graphs    | Chart.js                      |
| Utility   | Notifications      | Capacitor Notification Plugin |
| Utility   | Build Tool         | Vite*(or Next.js, TBD)*       |
