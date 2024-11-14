const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { db, secret } = require('../config/config');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const userRef = db.collection('users').doc(username);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
        return res.status(400).send('Username or password is incorrect');
    }

    const user = userDoc.data();
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).send('Invalid password');

    const token = jwt.sign({ _id: user.username }, secret);
    res.header('Authorization', token).send(token);
};

exports.register = async (req, res) => {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await db.collection('users').doc(username).set({
        username,
        password: hashedPassword
    });

    res.send('User registered successfully');
};