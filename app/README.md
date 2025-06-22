# Cycle Tracker Application

## Overview
The Cycle Tracker Application is a single-page web application designed to help users track their menstrual and ovulation cycles. Built with Vite, React, and TypeScript, this application provides a user-friendly interface for managing cycle data and visualizing patterns.

## Features
- **Sidebar Navigation**: Easily navigate between different functionalities of the application.
- **Cycle Tracking**: Input and manage menstrual and ovulation cycle data.
- **Calendar View**: Visualize cycles on a calendar for better understanding and planning.
- **Local Storage**: Utilize localForage for storing user data locally in the browser.
- **API Integration**: Communicate with a MongoDB backend for persistent data storage.

## Technologies Used
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn
- **State Management**: LocalForage for local storage
- **Backend**: MongoDB (via API calls)

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd cycle-tracker-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.

### Building for Production
To create a production build, run:
```
npm run build
```
The build files will be generated in the `dist` directory.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.