
# Firebase Integration for Noble Nexus

This branch implements a complete authentication system using Firebase Authentication and Firestore.

## Features Implemented
- **Authentication**: Email/Password and Google Sign-In.
- **Protected Routes**: `/dashboard` is protected and redirects unauthenticated users to `/login`.
- **User Dashboard**: Displays user profile, role, and mock activity stats.
- **Firestore Integration**: User data is automatically synced to Firestore `users` collection upon signup/login.
- **Persistent Sessions**: Users stay logged in across page reloads.
- **Premium UI**: Glassmorphism design applied to Login, Signup, and Dashboard pages.
- **Navbar Integration**: Shows "Dashboard" and User Avatar when logged in.

## Files Created/Modified
- `src/firebase/config.js`: Firebase configuration.
- `src/context/AuthContext.jsx`: Authentication logic and state management.
- `src/components/ProtectedRoute.jsx`: Route guard component.
- `src/pages/dashboard/Dashboard.jsx`: User dashboard page.
- `src/components/Login.jsx`: Updated with Firebase logic.
- `src/components/Signup.jsx`: Updated with Firebase logic.
- `src/components/Navbar.jsx`: Updated with conditional rendering.
- `src/App.jsx`: Wrapped with `AuthProvider` and added routes.
- `.env`: Template for environment variables.

## Setup Instructions
1. Create a Firebase project as described in `FIREBASE_SETUP.md`.
2. Copy your API keys into `.env`.
3. Run `npm install firebase` (already done).
4. Run `npm run dev` to start the application.

## Troubleshooting
If you encounter "Firebase: Error (auth/invalid-api-key)", ensure your `.env` file has the correct values and you have restarted the dev server.
