import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import parentRoutes from './routes/parentRoutes.js';
import teacherRoutes from "./routes/teacherRoutes.js";

const app = express();
const port = process.env.PORT || 8181;

// Enable CORS for all routes
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/parents', parentRoutes);
app.use('/api/teachers', teacherRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
