import admin from 'firebase-admin';
import dotenv from "dotenv";

dotenv.config();

let db;
try {
    const firebaseConfig = {
        type: "service_account",
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.FIREBASE_CLIENT_EMAIL
    };

    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(firebaseConfig),
        });
    }

    db = admin.firestore();
    console.log('Firestore initialized successfully');
} catch (error) {
    console.error('Failed to initialize Firestore:', error.message);
    // No hagas process.exit aquí, mejor maneja el error
    db = null;
}

const secret = process.env.SECRET_KEY || 'super_secret';
const config = {
    port: process.env.PORT || 8080,
};

export { db, secret };
export default config;
