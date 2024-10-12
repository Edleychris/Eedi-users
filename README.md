# React + TypeScript + Vite

This project is a minimal React + TypeScript setup using **Vite**. It includes **Hot Module Replacement (HMR)** for fast development and is configured with some basic **ESLint** rules to ensure code quality. The application fetches a list of users from a public API and displays additional user details upon clicking a user's name.

## Project Overview

This application demonstrates how to:
- Fetch user data from a public API: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users).
- Display users in a list with their names and emails.
- Show additional user information (e.g., phone number, address) when a user is clicked.

### Technologies Used:
- **React** (with HMR)
- **TypeScript**
- **Vite** (for faster build and development)
- **ESLint** (for code linting)

## Installation

Follow these steps to set up and run the project locally:

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/user-list-app.git
cd user-list-app
```

### 2. Install dependencies:
To install all required dependencies, run:
```bash
npm install
```

### 3. Start the development server:
To start the local development server with Vite, run:

```bash
Copy code
npm run dev
```