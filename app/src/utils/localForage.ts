import localForage from 'localforage';

const storeCycleData = async (key: string, data: any) => {
    try {
        await localForage.setItem(key, data);
    } catch (error) {
        console.error('Error storing cycle data:', error);
    }
};

const getCycleData = async (key: string) => {
    try {
        const data = await localForage.getItem(key);
        return data;
    } catch (error) {
        console.error('Error retrieving cycle data:', error);
        return null;
    }
};

const removeCycleData = async (key: string) => {
    try {
        await localForage.removeItem(key);
    } catch (error) {
        console.error('Error removing cycle data:', error);
    }
};

export { storeCycleData, getCycleData, removeCycleData };