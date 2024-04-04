React + Vite Template
Project Overview
This project is a template for setting up a React application with Vite. It provides a minimal setup to quickly get started with React development using Vite, including hot module replacement (HMR) and ESLint rules for code quality.

Setup and Local Run Instructions
To set up and run the project locally, follow these steps:

Clone the Repository: Clone the project repository to your local machine.

Install Dependencies: Navigate to the project directory in your terminal and run npm install or yarn install to install all the necessary dependencies.

Start the Development Server: After installing dependencies, run npm run dev or yarn dev to start the development server. This will launch your default browser with the development server running, and any changes you make to your code will be automatically reflected in the browser thanks to hot module replacement.

Start Coding: Now you're ready to start coding! You can make changes to the React components, styles, or any other files in the project, and Vite will automatically update the browser with the latest changes.

Build for Production: When you're ready to build your project for production, you can run npm run build or yarn build. This will create an optimized production build of your project in the dist directory.

Explanation of Design and Technical Decisions
React + Vite Setup
Vite: Vite is chosen as the build tool for this project due to its fast development server, hot module replacement (HMR) capability, and support for modern ES module-based workflows.

React: React is used as the front-end library for building user interfaces. Its component-based architecture and declarative approach make it well-suited for building complex UIs.

@vitejs/plugin-react: This plugin is included to enable React support in Vite. It uses Babel for fast refresh, allowing for instantaneous updates to the UI during development.

Project Structure
The project follows a simple structure:

src: Contains the source code of the React application.
index.html: Entry HTML file.
main.jsx: Entry JavaScript file where React components are rendered.
components: Directory for React components.
