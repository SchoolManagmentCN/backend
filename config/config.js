import admin from 'firebase-admin';
import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load the service account key
const serviceAccountPath = join(__dirname, './smbackend-b1502-firebase-adminsdk-qn1y9-cf9b53f985.json');
let serviceAccount;
try {
    serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8'));
} catch (error) {
    console.error('Failed to load service account key file:', error.message);
    process.exit(1);
}

// Initialize Firebase Admin SDK
let db;
try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
    db = admin.firestore();
    console.log('Firestore initialized successfully');
} catch (error) {
    console.error('Failed to initialize Firestore:', error.message);
    process.exit(1);
}

// Load secret key from environment variables
const secret = process.env.SECRET_KEY || 'secret';

// Configuration object
const config = {
    port: process.env.PORT || 3000,
};

export { db, secret };
export default config;
