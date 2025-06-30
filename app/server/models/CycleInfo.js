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

// Methods

// Get a readable summary of the cycle
CycleSchema.methods.getCycleSummary = function() {
  return {
    summaryIntro: `Summary of cycle ${this._id}`,
    menstruationStart: this.menstruationStart,
    menstruationEnd: this.menstruationEnd,
    ovulationDate: this.ovulationDate,
    fertileWindow: {
      start: this.fertileWindowStart,
      end: this.fertileWindowEnd,
    },
    userNote: this.userNote,
    averageCycleLength: this.averageCycleLength
  };
};

// Calculate the length of this cycle in days
CycleSchema.methods.calculateCycleLength = function () {
  if (this.menstruationStart && this.menstruationEnd) {
    const diff = this.menstruationEnd - this.menstruationStart;
    return Math.ceil(diff / (1000 * 60 * 60 * 24)); // Convert to days
  }
  return null;
};

// Set a new user note
CycleSchema.methods.setUserNote = async function (note) {
  this.userNote = note;
};

// Set a new fertile window
CycleSchema.methods.setFertileWindow = function(start, end) {
  if (start >= end) throw new Error("Fertile window start must be before end");
  this.fertileWindowStart = start;
  this.fertileWindowEnd = end;
};

// Set an average cycle length
CycleSchema.methods.setAverageCycleLength = function(length) {
  if (length <= 0) throw new Error("Cycle length must be a positive number");
  this.averageCycleLength = length;
};


export default mongoose.model('Cycle', CycleSchema);
