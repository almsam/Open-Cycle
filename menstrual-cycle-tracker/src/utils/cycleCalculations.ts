export const calculateCycleDates = (startDate: Date, cycleLength: number) => {
    const ovulationDate = new Date(startDate);
    ovulationDate.setDate(startDate.getDate() + cycleLength - 14);
    
    const nextPeriodDate = new Date(startDate);
    nextPeriodDate.setDate(startDate.getDate() + cycleLength);
    
    return {
        ovulationDate,
        nextPeriodDate,
    };
};

export const predictOvulation = (cycleData: { startDate: Date; cycleLength: number }) => {
    const { startDate, cycleLength } = cycleData;
    return calculateCycleDates(startDate, cycleLength).ovulationDate;
};

export const getCycleHistory = (cycles: Array<{ startDate: Date; cycleLength: number }>) => {
    return cycles.map(cycle => ({
        startDate: cycle.startDate,
        ovulationDate: predictOvulation(cycle),
        nextPeriodDate: calculateCycleDates(cycle.startDate, cycle.cycleLength).nextPeriodDate,
    }));
};