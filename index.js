const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { swaggerUi, specs } = require('./swagger.js');

const familyRoutes = require('./routes/familyRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

mongoose.connection.once('open', () => {
  console.log(`Connected to DB: ${mongoose.connection.name}`);
});

// Use the routes
app.use('/api/family', familyRoutes);

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
