# LOTS To-Do App

## Overview
LOTS To-Do is a modern task management app that helps you stay organized. It features user authentication, real-time task updates, and a sleek, responsive design.

[**Live Demo**](https://lots-todolist.netlify.app/)

---

## Features
- User authentication (Signup/Login)
- Add, update, and delete tasks
- Mark tasks as complete or incomplete
- Real-time updates
- Responsive design
- Toast notifications for actions

---

## Technology Stack
- **Frontend**: React + TypeScript
- **State Management**: MobX
- **Database & Auth**: Firebase (Firestore + Authentication)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

---

## Installation and Setup

### 1. Prerequisites
- Node.js installed on your machine
- Firebase project setup

### 2. Clone the Repository
```bash
git clone https://github.com/yourusername/lots-todo.git
cd lots-todo
```

### 3. Firebase Configuration
1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable Email/Password Authentication.
3. Set up Firestore as your database.
4. Copy your Firebase project configuration and update `src/lib/firebase.ts`:
   ```typescript
   const firebaseConfig = {
       apiKey: "<YOUR_API_KEY>",
       authDomain: "<YOUR_AUTH_DOMAIN>",
       projectId: "<YOUR_PROJECT_ID>",
       storageBucket: "<YOUR_STORAGE_BUCKET>",
       messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
       appId: "<YOUR_APP_ID>"
   };
   ```

### 4. Install Dependencies
```bash
npm install
```

### 5. Run the Development Server
```bash
npm run dev
```
---

## Deployment
Deployed with Netlify

---

## Future Enhancements
- Task categorization
- Due dates and reminders
- Priority levels
- Dark mode
- Collaborative features

---
