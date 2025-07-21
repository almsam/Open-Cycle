<div align="center">

<a href="https://github.com/almsam/Open-Cycle">
  <img src="logo/logo.png" alt="Logo" width="270" height="270">
</a>

<h1 align="center">OpenCycle</h1>

</div>

**OpenCycle** is a privacy-first, open-source period tracking app. It helps users track menstruation, ovulation, and notes, perform basic cycle math, and display insights via graphs and reminders. All data is stored locally or securely in the cloud — *your cycle, your data*.

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

## Instructions on how to get started.

0. Ensure that you have [Node.js](https://nodejs.org/en/download/current) installed on your machine.
1. Navigate to ``app`` in the directory
2. (Optional for first time opening up the project) ``npm install``
3. ``npm run dev``
4. ``http://localhost:5173/home`` in the browser

## Tech Stack

This project is built using the following tools and libraries:

### Frontend

- **[React](https://react.dev/)**A modern JavaScript library for building interactive user interfaces using components and state management.
- **[React Router](https://reactrouter.com/)**A declarative routing library for React that enables dynamic and nested navigation between views in your app.
- **[Vite](https://vite.dev/)**A fast and modern build tool that provides instant server start and lightning-fast HMR (Hot Module Replacement).
- **[Tailwind CSS](https://tailwindcss.com/)**A utility-first CSS framework that makes it easy to build responsive and custom UIs directly in your markup.
- **[shadcn/ui](https://ui.shadcn.com/)**
  A beautifully designed collection of accessible UI components, built with Tailwind CSS and fully customizable for your app's needs.

### Backend

- **[LocalForage](https://github.com/localForage/localForage)**
  A simple wrapper for local storage APIs.
- **[MongoDB](https://www.mongodb.com/)**
  A popular document-oriented database software. Used to back up storage data outside of device.
- **[Express](https://expressjs.com/)**
  A fast and simple framework used for server middleware.
### Utils

- **[Capacitor](https://capacitorjs.com/)**
  A versatile library to allow cross-platform app creation. Will also be used for notification functionality.
- **[Chart.js](https://www.chartjs.org/)**
  A simple yet powerful charting library to display user data.

---

## OpenCycle is part of ***project OSPREY***

> **OSPREY** — *Open Source Projects for Research, Education, & You* — is an open-source initiative that provides fresh graduates and early-career developers with real-world project experience.

**OpenCycle** is developed under the OSPREY project as part of its mission to support open, inclusive, & cutting edge software. Contributors to OpenCycle are members of the OSPREY community & will be developing a viable product under the slow & steady model — while also learning modern web technologies through hands-on experience.

For more info, see the [OSPREY project repo](https://github.com/almsam/OSPREY)

## Code of Conduct

We follow the [OSPREY Code of Conduct](https://github.com/almsam/OSPREY/tree/main?tab=coc-ov-file) to ensure a respectful, inclusive, and supportive environment for all contributors. By participating in this project, you agree to uphold these standards

### Want to join OSPREY?

- Fill out the [OSPREY Intake Form](https://forms.gle/7pdDQtkV4XDXB1TE9)
- Then email: [osprey.project.adm@gmail.com](sprey.project.adm@gmail.com)
- An OSPREY admin will reach out regarding next steps
