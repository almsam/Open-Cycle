import mongoose from 'mongoose';

const CycleSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // User provided information
  menstruationStart: Date,
  menstruationEnd: Date,
  ovulationDate: Date,
  userNote: String,
  // App provided information
  fertileWindowStart: Date,
  fertileWindowEnd: Date,
  averageCycleLength: Number // Average in days, across last 6 months
});

export default mongoose.model('Cycle', CycleSchema);
