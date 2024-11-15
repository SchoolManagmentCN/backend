import admin from 'firebase-admin';
import serviceAccount from './chatdelvideo-firebase-adminsdk-uk3ux-0ba04d2b12.json' assert { type: 'json' };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const secret = process.env.SECRET_KEY;

const config = {
    port: process.env.PORT || 3000
};

export { db, secret };
export default config;