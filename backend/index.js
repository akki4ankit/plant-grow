const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const plantRoutes = require('./routes/plantRoutes');

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/plants', plantRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🌱 Server running on http://localhost:${PORT}`)
);
