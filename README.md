# Authentication Application

## Overview
This project is a full-featured authentication application built using React, Firebase, Express, and Nodemailer. It includes features for user authentication, password management, and a contact form. The application is designed to ensure that only authenticated users can access specific pages and functionalities.

## Features
- **User Authentication**: Login and Signup using Firebase.
- **Password Management**: Forgot Password and Change Password functionalities.
- **Google Sign-In**: Option to sign in using Google.
- **Protected Routes**: Home, About, Change Password, and Contact Us pages are accessible only to authenticated users.
- **Contact Us Page**: Captures user details like name, email, phone, comment, and subject, and sends this information using Nodemailer.

## Technologies Used
- **Frontend**: React
- **Backend**: Express
- **Authentication**: Firebase
- **Email Handling**: Nodemailer
- **Deployment**: Firebase

## Live Demo
Check out the live application: [https://auth-app-24-9c772.web.app/]

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/vinesh70/Authentication-App.git
    cd Authentication-App
    ```

2. Install dependencies:
    ```bash
    npm install
    ```
    
## Configuration

### Firebase
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Register your app with Firebase and get the Firebase configuration.
4. Replace the Firebase config in `src/Firebase.js` with your Firebase project credentials.

```javascript
// src/Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
```


### Nodemailer
# Create a .env file in the root of your server directory and add your email service credentials.
```bash
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### Running the Application
## 1. Start the backend server:
```bash
nodemon start
```

## 2. Start the frontend development server:
```bash
npm start
```

### Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any improvements.
