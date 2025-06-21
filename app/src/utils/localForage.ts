import localForage from 'localforage';

//note: validation will need to be changed if localforage is used to store other data (like settings)

const storeCycleData = async (data: any) => {
    if(!isValidEntry(data)){
        console.error("Invalid cycle data");
        return;
    }
        const key = data.MenstruationStarts;
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
//basic validation, does not validate user input
function isValidEntry(data: any) {
    return (
        data &&
        "MenstruationStarts" in data &&
        "MenstruationEnds" in data &&
        "OvulationStarts" in data &&
        "OvulationEnds" in data &&
        "UserNote" in data &&

        "fertileWindowStart" in data &&
        "fertileWindowEnd" in data &&
        "averageCycleLength" in data
    );
}

export { storeCycleData, getCycleData, removeCycleData };