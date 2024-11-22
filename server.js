import express from 'express';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());
app.use('/api', authRoutes);

//changed port
const PORT = process.env.PORT || 8181;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});