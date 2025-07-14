import localforage from 'localforage';

// Set up the user storage namespace
localforage.config({
  name: 'OpenCycle',
  storeName: 'userData'
});

const CURRENT_USER_KEY = 'currentUser';

// Set the current user
export async function setUser(user) {
  if (!user || !user.username || !user.email) { // not inlcuding password or userID for now because it will be stored locally (?), this may change 
    throw new Error("User must have properties");
  }
  await localforage.setItem(CURRENT_USER_KEY, user);
}

// Get the current user
export async function getUser() {
  const user = await localforage.getItem(CURRENT_USER_KEY);
  return user || null;
}

// Basic Getters
export async function getUsername() {
  const user = await getUser();
  return user?.username || null;
}

export async function getEmail() {
  const user = await getUser();
  return user?.email || null;
}

// Basic Setters
export async function setUsername(newUsername) {
  const user = await getUser();
  if (!user) throw new Error("Can't update a user that doesn't exist");
  user.username = newUsername;
  await localforage.setItem(CURRENT_USER_KEY, user);
  return user || null;
}

export async function setEmail(newEmail) {
  const user = await getUser();
  if (!user) throw new Error("Can't update a user that doesn't exist");
  user.email = newEmail;
  await localforage.setItem(CURRENT_USER_KEY, user);
  return user || null;
}