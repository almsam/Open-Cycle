<div align="center">

<a href="https://github.com/almsam/Open-Cycle">
  <img src="logo/period logo.png" alt="Logo" width="270" height="270">
</a>

<h1 align="center">OpenCycle</h1>

</div>

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

## Instructions on how to get started.

#### Things to check off

1. Node.js ``16.x`` - https://nodejs.org/en/blog/release/v16.16.0
2. Visual Studio Code or other text editor

#### Instructions on how to get started

1. Navigate to the folder of ``app`` in your terminal
2. Clone the ``main`` in your folder
3. (Optional, might be time saving) use ``npm -v`` and ``node -v`` to respectively check your npm integrity / version and Node.js
4. ``npm install`` (this might be the most buggy part - use ChatGPT or CoPilot to bug fix your installation), npm will go through the folder and see all of the required modules, then install them
5. (Optional, bug fixing - do this if you know what you are doing) ``npm audit fix --force``
6. ``npm start`` - the website will start in localhost:3000
7. Or alternately, double click on ``index.html``, this will initiate a localhost:3000 tab alongside with the html from the local server (which does nothing)

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
