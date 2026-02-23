
# Firebase Authentication Setup Guide

Follow these steps to configure your Firebase project and get the necessary API keys.

## 1. Create a Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **"Add project"**.
3. Enter a name for your project (e.g., `noble-nexus-auth`).
4. Keep Google Analytics enabled (recommended) or disable it.
5. Click **"Create project"**.

## 2. Enable Authentication
1. In the left sidebar, click **Build** > **Authentication**.
2. Click **"Get started"**.
3. Select the **"Sign-in method"** tab.
4. Click **"Email/Password"**.
   - Enable **Email/Password**.
   - (Optional) Enable **Email link (passwordless sign-in)**.
   - Click **Save**.
5. Click **"Add new provider"**.
6. Select **"Google"**.
   - Enable it.
   - Set the public-facing name for your project (e.g., `Noble Nexus`).
   - Select your support email.
   - Click **Save**.

## 3. Create a Firestore Database
1. In the left sidebar, click **Build** > **Firestore Database**.
2. Click **"Create database"**.
3. Select a location (e.g., `eur3 (europe-west)` for Ireland/Europe).
4. Start in **"Test mode"** (allows development without strict rules initially) or **"Production mode"** (we have provided rules below).
5. Click **Create**.

## 4. Register Your Web App
1. Click the **Project settings** (gear icon) > **Project settings**.
2. Scroll down to the **"Your apps"** section.
3. Click the **Web (`</>`)** icon.
4. Enter an app nickname (e.g., `Noble Nexus Web`).
5. (Optional) Check "Also set up Firebase Hosting".
6. Click **Register app**.

## 5. Get API Keys
After registering, you will see a configuration object (`firebaseConfig`). Copy the values and update your `.env` file in the `frontend-react` folder.

Create a `.env` file in `noble1/frontend-react/frontend-react/` with the following content:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 6. Firestore Rules (Security)
Go to **Firestore Database** > **Rules** tab and paste the following to secure your user data:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 7. Build & Deploy
To deploy your application (e.g., to Vercel, Netlify, or Firebase Hosting):

1. **Build the production version:**
   ```bash
   npm run build
   ```
2. **Deploy the `dist` folder.**

---

**Troubleshooting:**
- If Google Login fails with "domain unauthorized", go to **Authentication** > **Settings** > **Authorized domains** in Firebase Console and add `localhost` (for dev) and your production domain.
