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

---

## OpenCycle is part of ***project OSPREY***

> **OSPREY** — *Open Source Projects for Research, Education, & You* — is an open-source initiative that provides fresh graduates and early-career developers with real-world project experience.

**OpenCycle** is developed under the OSPREY project as part of its mission to support open, inclusive, & cutting edge software. Contributors to OpenCycle are members of the OSPREY community & will be developing a viable product under the slow & steady model — while also learning modern web technologies through hands-on experience.

For more info see the [OSPREY project repo](https://github.com/almsam/OSPREY)

## Code of Conduct

We follow the [OSPREY Code of Conduct](https://github.com/almsam/OSPREY/tree/main?tab=coc-ov-file) to ensure a respectful, inclusive, and supportive environment for all contributors. By participating in this project, you agree to uphold these standards

### Want to join OSPREY?
- Fill out the [OSPREY Intake Form](https://forms.gle/7pdDQtkV4XDXB1TE9)
- Then email: [osprey.project.adm@gmail.com](sprey.project.adm@gmail.com)
- An OSPREY admin will reach out regarding next steps