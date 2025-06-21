This folder contains the backend logic and MongoDB database integration for OpenCycle.

## Backend requirements at a glance

#### Basic requirements

- Store menstruation start and end dates
- Calculate average cycle length and estimate: 
    - Next mestruation date
    - Ovulation date 
- User notes

#### Advanced requirements

- Allow user to confirm their actual ovulation date
- Calculate most likely fertility window (**Disclaimer: this is for informational purposes only and is not a substitute for medical advice. Do not use as a primary method of birth control.**)


While OpenCycle can temporarily store data locally in the (via `localForage`), the backend is required for:

- Permanent data storage
- Syncing across sessions or devices
- Visual insights, reminders, and analytics

This backend runs on Node.js and MongoDB, and powers the data layer of the application.
