import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const fetchCycles = async () => {
    try {
        const response = await axios.get(`${API_URL}/cycles`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cycles:', error);
        throw error;
    }
};

export const createCycle = async (cycleData) => {
    try {
        const response = await axios.post(`${API_URL}/cycles`, cycleData);
        return response.data;
    } catch (error) {
        console.error('Error creating cycle:', error);
        throw error;
    }
};

export const updateCycle = async (cycleId, cycleData) => {
    try {
        const response = await axios.put(`${API_URL}/cycles/${cycleId}`, cycleData);
        return response.data;
    } catch (error) {
        console.error('Error updating cycle:', error);
        throw error;
    }
};

export const deleteCycle = async (cycleId) => {
    try {
        await axios.delete(`${API_URL}/cycles/${cycleId}`);
    } catch (error) {
        console.error('Error deleting cycle:', error);
        throw error;
    }
};