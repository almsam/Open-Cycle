## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## Getting Started

**📌 After pulling the latest changes or switching to a newly merged branch, run `npm install` to install any updated dependencies.**

```bash
cd app
npm install
```

This ensures your local environment stays in sync with the project.

## Tech Stack

This project is built using the following tools and libraries:

### Frontend

- **[React](https://react.dev/)**  
  A modern JavaScript library for building interactive user interfaces using components and state management.

- **[React Router](https://reactrouter.com/)**  
  A declarative routing library for React that enables dynamic and nested navigation between views in your app.

- **[Vite](https://vite.dev/)**  
  A fast and modern build tool that provides instant server start and lightning-fast HMR (Hot Module Replacement).

- **[Tailwind CSS](https://tailwindcss.com/)**  
  A utility-first CSS framework that makes it easy to build responsive and custom UIs directly in your markup.

- **[shadcn/ui](https://ui.shadcn.com/)**  
  A beautifully designed collection of accessible UI components, built with Tailwind CSS and fully customizable for your app's needs.

### Backend

- **[LocalForage](https://github.com/localForage/localForage)**
  A simple wrapper for local storage APIs.

- **[MongoDB](https://www.mongodb.com/)**
  A popular document-oriented database software. Used to back up storage data outside of device.

### Utils

- **[Capacitor](https://capacitorjs.com/)
  A versatile library to allow cross-platform app creation. Will also be used for notification functionality.
- **[Chart.js](https://www.chartjs.org/)
  A simple yet powerful HTML chart library. 
