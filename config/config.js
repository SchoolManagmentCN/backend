import admin from 'firebase-admin';
import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv";
const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();

// Initialize Firebase Admin SDK
let db;
try {
    // Intenta primero usar las variables de entorno
    const firebaseConfig = {
        type: "service_account",
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.FIREBASE_CLIENT_EMAIL
    };

    admin.initializeApp({
        credential: admin.credential.cert(firebaseConfig),
    });

    db = admin.firestore();
    console.log('Firestore initialized successfully');
} catch (error) {
    console.error('Failed to initialize Firestore:', error.message);
    process.exit(1);
}

// Load secret key from environment variables
const secret = process.env.SECRET_KEY || 'super_secret';

// Configuration object
const config = {
    port: process.env.PORT || 8080,
};

export { db, secret };
export default config;
