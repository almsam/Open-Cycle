import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userID: { type: Number, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true } 
});

export default mongoose.model('User', UserSchema);

// Methods

UserSchema.methods.getUsername = function () {
  return this.username;
};

UserSchema.methods.getEmail = function () {
  return this.email;
};

UserSchema.methods.setUsername = function (newUsername) {
  this.username = newUsername;
};

UserSchema.methods.setEmail = function (newEmail) {
  this.email = newEmail;
};

UserSchema.methods.setPassword = async function (newPassword) {
  this.password = newPassword;
};