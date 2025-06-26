const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB locally
mongoose.connect('mongodb://127.0.0.1:27017/cycleTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');

  mongoose.connection.on('error', err => {
    console.error('Mongoose connection error:', err);
  });

  // Load the Cycle and User models
  const Cycle = require('./models/CycleInfo');
  const User = require('./models/User');

  // Simple test route
  app.get('/', (req, res) => {
    res.send('Backend is working!');
  });
  console.log("here");
  // POST route to create a new cycle
  app.post('/cycle', async (req, res) => {
    try {
      const newCycle = new Cycle(req.body);
      const saved = await newCycle.save();
      res.json(saved);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // Test route to insert a hardcoded entry (cycle)
  app.get('/test-entry', async (req, res) => {
    try {
      const testEntry = new Cycle({
        menstruationStart: new Date('2025-06-01'),
        menstruationEnd: new Date('2025-06-05'),
        ovulationDate: new Date('2025-06-10'),
        userNote: 'Feeling good!',
      });

      const saved = await testEntry.save();
      res.json(saved);
    } catch (err) {
      console.error("Error saving test entry:", err);
      res.status(500).json({ error: err.message });
    }
  });

  // Test route to insert a hardcoded entry (user)
  app.get('/test-user-entry', async (req, res) => {
    try {
      const testUserEntry = new User({
        username: new String('Alex'),
        email: new String('alex@gmail.com'),
        password: new String('supersecure')
      });

      const saved = await testUserEntry.save();
      res.json(saved);
    } catch (err) {
      console.error("Error saving test entry:", err);
      res.status(500).json({ error: err.message });
    }
  });

  // Start the server only after MongoDB is connected
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });

})
.catch(err => {
  console.error('MongoDB connection error:', err);
});
