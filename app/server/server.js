import express from 'express';
import mongoose from 'mongoose';
import Cycle from './models/CycleInfo.js';
import User from './models/User.js';

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());

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
  app.get('/', (req, res) => {
    res.send('Backend is working!');
  });

  app.post('/cycle', async (req, res) => {
    try {
      const newCycle = new Cycle(req.body);
      const saved = await newCycle.save();
      res.json(saved);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  app.post('/test-set-fertile-window/:id', async (req, res) => {
  try {
    const cycle = await Cycle.findById(req.params.id);
    if (!cycle) return res.status(404).send('Cycle not found');

    const { start, end } = req.body;
    cycle.setFertileWindow(start, end);
    await cycle.save();

    res.json({ message: 'Fertile window updated', cycle });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/test-set-user-note/:id', async (req, res) => {
  try {
    const cycle = await Cycle.findById(req.params.id);
    if (!cycle) return res.status(404).send('Cycle not found');

    await cycle.setUserNote(req.body.note);  // assuming req.body.note has the new note
    await cycle.save();

    res.json({ message: 'User note updated', cycle });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get('/test-get-summary/:id', async (req, res) => {
  try {
    const cycle = await Cycle.findById(req.params.id);
    if (!cycle) return res.status(404).send('Cycle not found');

    const summary = cycle.getCycleSummary();
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/test-cycle-entry', async (req, res) => {
  try {
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

  app.get('/cycle-summary', async (req, res) => {
  const cycle = await Cycle.findOne().sort({ _id: -1 }); // Most recent
  if (!cycle) return res.status(404).json({ error: "No cycle found" });

  try {
    const summary = cycle.getCycleSummary();
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});
