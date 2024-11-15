import express from 'express';
import { login, register } from './controller/authController.js';
import { authenticate } from './middleware/authMiddleware.js';

const app = express();
const router = express.Router();

router.post('/login', login);
router.post('/register', authenticate, register);

app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});