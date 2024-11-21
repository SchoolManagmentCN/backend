import { db } from './config/config.js';

const initializeFirestore = async () => {
    try {
        const userRef = db.collection('users').doc('testUser');
        await userRef.set({
            username: 'testUser',
            password: 'testPassword'
        });
        console.log('Firestore initialized with test user');
    } catch (error) {
        console.error('Error initializing Firestore:', error);
    }
};

initializeFirestore();