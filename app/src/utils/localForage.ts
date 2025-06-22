import localforage from 'localforage';

const storage = localforage.createInstance({
  name: 'cycle-tracker'
});

export const setItem = async (key: string, value: any) => {
  try {
    await storage.setItem(key, value);
  } catch (error) {
    console.error('Error setting item in localForage', error);
  }
};

export const getItem = async (key: string) => {
  try {
    const value = await storage.getItem(key);
    return value;
  } catch (error) {
    console.error('Error getting item from localForage', error);
    return null;
  }
};

export const removeItem = async (key: string) => {
  try {
    await storage.removeItem(key);
  } catch (error) {
    console.error('Error removing item from localForage', error);
  }
};

export const clearStorage = async () => {
  try {
    await storage.clear();
  } catch (error) {
    console.error('Error clearing localForage storage', error);
  }
};