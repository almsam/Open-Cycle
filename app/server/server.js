const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());

// Models
const Cycle = require('./models/CycleInfo');
const User = require('./models/User');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/cycleTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');

  mongoose.connection.on('error', err => {
    console.error('Mongoose connection error:', err);
  });

  // Routes

  // Basic test route
  app.get('/', (req, res) => {
    res.send('Backend is working!');
  });

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

  // Test route to insert a hardcoded cycle with user reference
  app.get('/test-entry', async (req, res) => {
    try {
      // Find or create user within this async route
      let user = await User.findOne({ email: 'someEmail' });
      if (!user) {
        user = new User({
          userID: 1,
          username: 'blankUser',
          email: 'someEmail',
          password: 'secure'
        });
        await user.save();
      }

      const testEntry = new Cycle({
        menstruationStart: new Date('2025-06-01'),
        menstruationEnd: new Date('2025-06-05'),
        ovulationDate: new Date('2025-06-10'),
        userNote: 'Feeling good!',
        user: user._id
      });

      const saved = await testEntry.save();
      res.json(saved);
    } catch (err) {
      console.error("Error saving test entry:", err);
      res.status(500).json({ error: err.message });
    }
  });

  // Test route to insert a hardcoded user
  app.get('/test-user-entry', async (req, res) => {
    try {
      const testUserEntry = new User({
        userID: '1',
        username: 'Alex',
        email: 'alex@gmail.com',
        password: 'supersecure'
      });

      const saved = await testUserEntry.save();
      res.json(saved);
    } catch (err) {
      console.error("Error saving test user entry:", err);
      res.status(500).json({ error: err.message });
    }
  });

  // Start server
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });

})
.catch(err => {
  console.error('MongoDB connection error:', err);
});
